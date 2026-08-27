// DigitalCap Admin Curation Module
// Research and curate app suggestions before publication
// Firebase Firestore integration for curated app drafts

import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  serverTimestamp,
  onSnapshot,
  writeBatch,
} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js';

let currentUser = null;
let db = null;
let curationContainer = null;
let unsubscribe = null;

/**
 * Initialize the curation module
 * Called by admin-auth.js after authorized admin UID check passes
 *
 * @param {Object} user - Firebase user object (already authorized)
 */
export async function initializeCuration(user) {
  if (currentUser) {
    return;
  }

  if (!user || !user.uid) {
    console.error('Curation: User object required');
    return;
  }

  if (!window.digitalCapFirebase || !window.digitalCapFirebase.db) {
    console.error('Curation: Firebase not initialized');
    return;
  }

  currentUser = user;
  db = window.digitalCapFirebase.db;
  curationContainer = document.getElementById('admin-curation-queue');

  if (!curationContainer) {
    console.error('Curation: Container not found');
    return;
  }

  try {
    await loadApprovedForCuration();

    const q = query(
      collection(db, 'appSubmissions'),
      where('status', '==', 'approved')
    );

    unsubscribe = onSnapshot(q, (snapshot) => {
      renderCurationQueue(snapshot.docs);
    }, (error) => {
      console.error('Curation: Firestore listener error:', error);
      showCurationError('Failed to load approved suggestions. Please refresh.');
    });

    // Initialize published apps manager
    await initializePublishedAppsManager(user);

  } catch (error) {
    console.error('Curation: Initialization error:', error);
    showCurationError('Failed to initialize curation workspace.');
  }
}

/**
 * Stop curation module
 * Called by admin-auth.js on logout
 */
export function stopCuration() {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }

  stopPublishedAppsManager();

  currentUser = null;
  db = null;

  if (curationContainer) {
    curationContainer.innerHTML = '';
  }
}

/**
 * Load approved suggestions eligible for curation
 */
async function loadApprovedForCuration() {
  if (!db) return;

  curationContainer.innerHTML = '<div class="admin-curation-loading">Loading approved suggestions...</div>';

  try {
    const q = query(
      collection(db, 'appSubmissions'),
      where('status', '==', 'approved')
    );

    const snapshot = await getDocs(q);
    renderCurationQueue(snapshot.docs);
  } catch (error) {
    console.error('Curation: Load error:', error);
    showCurationError('Failed to load approved suggestions.');
  }
}

/**
 * Render the queue of approved suggestions ready for curation
 */
function renderCurationQueue(docs) {
  if (!curationContainer) return;

  if (docs.length === 0) {
    curationContainer.innerHTML = `
      <div class="admin-curation-section">
        <h3>Approved Suggestions Ready for Curation</h3>
        <div class="admin-curation-empty">No approved suggestions yet. Check back after approving suggestions in moderation.</div>
      </div>
    `;
    return;
  }

  const sorted = docs.sort((a, b) => {
    const timeA = a.data().reviewedAt?.toMillis() || 0;
    const timeB = b.data().reviewedAt?.toMillis() || 0;
    return timeB - timeA;
  });

  let html = `
    <div class="admin-curation-section">
      <h3>Approved Suggestions Ready for Curation</h3>
      <p class="admin-curation-subtitle">Research and curate these apps before publishing to the directory.</p>
      <div class="admin-curation-count">${sorted.length} approved</div>
  `;

  sorted.forEach((doc) => {
    const data = doc.data();
    html += renderSuggestionPreview(doc.id, data);
  });

  html += '</div>';
  curationContainer.innerHTML = html;

  attachCurationEventListeners();
}

/**
 * Render a suggestion preview card
 */
function renderSuggestionPreview(docId, data) {
  const appName = data.appName || 'Unnamed App';
  const reviewedDate = formatDate(data.reviewedAt);
  const whyWeShould = data.whyWeShould || '';
  const appUrl = data.appUrl || '';
  const additionalNotes = data.additionalNotes || '';
  const adminNotes = data.adminNotes || '';

  let urlHtml = '';
  if (appUrl && isValidHttpUrl(appUrl)) {
    urlHtml = `
      <div class="admin-curation-field">
        <strong>App URL:</strong>
        <a href="${escapeHtmlAttr(appUrl)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(appUrl)}
        </a>
      </div>
    `;
  }

  return `
    <div class="admin-curation-card" data-doc-id="${escapeHtmlAttr(docId)}">
      <div class="admin-curation-preview">
        <div class="admin-curation-field">
          <strong>App Name:</strong>
          <span>${escapeHtml(appName)}</span>
        </div>

        <div class="admin-curation-field">
          <strong>Approved:</strong>
          <span>${reviewedDate}</span>
        </div>

        ${urlHtml}

        <div class="admin-curation-field">
          <strong>Why should DigitalCap cover it?</strong>
          <p>${escapeHtml(whyWeShould)}</p>
        </div>

        ${additionalNotes ? `
          <div class="admin-curation-field">
            <strong>Additional Notes:</strong>
            <p>${escapeHtml(additionalNotes)}</p>
          </div>
        ` : ''}

        ${adminNotes ? `
          <div class="admin-curation-field">
            <strong>Moderation Notes:</strong>
            <p>${escapeHtml(adminNotes)}</p>
          </div>
        ` : ''}
      </div>

      <button
        class="admin-curation-btn admin-curation-curate"
        data-doc-id="${escapeHtmlAttr(docId)}"
      >
        📝 Curate This App
      </button>
    </div>
  `;
}

/**
 * Attach event listeners to curation buttons
 */
function attachCurationEventListeners() {
  document.querySelectorAll('.admin-curation-curate').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const docId = e.target.getAttribute('data-doc-id');
      openCurationForm(docId);
    });
  });
}

/**
 * Open curation form for a suggestion
 */
async function openCurationForm(suggestionId) {
  if (!db) return;

  try {
    const suggestionDoc = await getDoc(doc(db, 'appSubmissions', suggestionId));
    if (!suggestionDoc.exists()) {
      showCurationError('Suggestion not found.');
      return;
    }

    const suggestionData = suggestionDoc.data();

    // Check if draft already exists
    let existingDraftId = null;
    const draftsQuery = query(
      collection(db, 'appsCurations'),
      where('sourceSuggestionId', '==', suggestionId)
    );
    const draftsSnapshot = await getDocs(draftsQuery);
    if (!draftsSnapshot.empty) {
      existingDraftId = draftsSnapshot.docs[0].id;
    }

    if (existingDraftId) {
      // Load existing draft
      await loadAndDisplayDraft(existingDraftId);
    } else {
      // Create new draft
      await createNewDraft(suggestionId, suggestionData);
    }
  } catch (error) {
    console.error('Curation: Open form error:', error);
    showCurationError('Failed to open curation form.');
  }
}

/**
 * Create a new curation draft from suggestion
 */
async function createNewDraft(suggestionId, suggestionData) {
  if (!db || !currentUser) return;

  const now = serverTimestamp();
  const draftData = {
    sourceSuggestionId: suggestionId,

    // Pre-filled from suggestion
    name: suggestionData.appName,
    category: '',

    // Empty fields for research
    ageRecommendation: null,
    safetyRating: null,
    safetyLabel: '',
    description: '',
    hasChat: null,
    chatDetails: '',
    hasOpenInternet: null,
    internetDetails: '',
    hasLocationTracking: null,
    locationDetails: '',

    whyThisMatters: {
      title: '',
      content: ''
    },

    hiddenDangers: [],
    parentConcerns: {},
    tipsForParents: [],

    parentConversationGuide: {
      startWith: '',
      keyPoints: [],
      redFlags: [],
      scriptOpener: ''
    },

    sources: '',

    // Audit fields
    curationStatus: 'draft',
    createdAt: now,
    updatedAt: now,
    createdBy: currentUser.uid,
    updatedBy: currentUser.uid
  };

  try {
    const newDocRef = doc(collection(db, 'appsCurations'));
    await setDoc(newDocRef, draftData);
    await loadAndDisplayDraft(newDocRef.id);
  } catch (error) {
    console.error('Curation: Create draft error:', error);
    showCurationError('Failed to create curation draft.');
  }
}

/**
 * Load and display curation draft form
 */
async function loadAndDisplayDraft(draftId) {
  if (!db) return;

  try {
    const draftDoc = await getDoc(doc(db, 'appsCurations', draftId));
    if (!draftDoc.exists()) {
      showCurationError('Draft not found.');
      return;
    }

    const draftData = draftDoc.data();
    displayCurationForm(draftId, draftData);
  } catch (error) {
    console.error('Curation: Load draft error:', error);
    showCurationError('Failed to load curation draft.');
  }
}

/**
 * Display curation form modal
 */
function displayCurationForm(draftId, draftData) {
  const modal = document.createElement('div');
  modal.className = 'admin-curation-modal';
  modal.id = `curation-modal-${draftId}`;

  const completenessChecklist = `
    <div class="admin-curation-checklist">
      <h4>Research Progress</h4>
      <div class="admin-curation-checklist-item">
        <input type="checkbox" id="check-name" ${draftData.name ? 'checked' : ''} disabled>
        <label for="check-name">App Name</label>
      </div>
      <div class="admin-curation-checklist-item">
        <input type="checkbox" id="check-category" ${draftData.category ? 'checked' : ''} disabled>
        <label for="check-category">Category</label>
      </div>
      <div class="admin-curation-checklist-item">
        <input type="checkbox" id="check-age" ${draftData.ageRecommendation !== null ? 'checked' : ''} disabled>
        <label for="check-age">Age Recommendation</label>
      </div>
      <div class="admin-curation-checklist-item">
        <input type="checkbox" id="check-safety" ${draftData.safetyRating !== null ? 'checked' : ''} disabled>
        <label for="check-safety">Safety Rating</label>
      </div>
      <div class="admin-curation-checklist-item">
        <input type="checkbox" id="check-desc" ${draftData.description ? 'checked' : ''} disabled>
        <label for="check-desc">Description</label>
      </div>
      <div class="admin-curation-checklist-item">
        <input type="checkbox" id="check-dangers" ${draftData.hiddenDangers.length > 0 ? 'checked' : ''} disabled>
        <label for="check-dangers">Hidden Dangers</label>
      </div>
      <div class="admin-curation-checklist-item">
        <input type="checkbox" id="check-why" ${draftData.whyThisMatters?.content ? 'checked' : ''} disabled>
        <label for="check-why">Why This Matters</label>
      </div>
      <div class="admin-curation-checklist-item">
        <input type="checkbox" id="check-concerns" ${Object.keys(draftData.parentConcerns || {}).length > 0 ? 'checked' : ''} disabled>
        <label for="check-concerns">Parent Concerns</label>
      </div>
      <div class="admin-curation-checklist-item">
        <input type="checkbox" id="check-tips" ${draftData.tipsForParents?.length > 0 ? 'checked' : ''} disabled>
        <label for="check-tips">Tips for Parents</label>
      </div>
    </div>
  `;

  modal.innerHTML = `
    <div class="admin-curation-modal-backdrop" onclick="closeCurationForm('${draftId}')"></div>

    <div class="admin-curation-modal-content">
      <button class="admin-curation-modal-close" onclick="closeCurationForm('${draftId}')">✕</button>

      <h2>Curate App: ${escapeHtml(draftData.name || 'Untitled')}</h2>

      ${completenessChecklist}

      <form data-draft-id="${draftId}" onsubmit="saveCurationDraft('${draftId}'); return false;">

        <!-- TIER 1: Card Display -->
        <fieldset class="admin-curation-fieldset">
          <legend>Basic Information</legend>

          <div class="admin-curation-form-group">
            <label for="curation-name-${draftId}">App Name</label>
            <input type="text" id="curation-name-${draftId}" value="${escapeHtmlAttr(draftData.name || '')}" placeholder="App name" maxlength="100" required style="width: 100%; padding: 0.5rem;">
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-category-${draftId}">Category</label>
            <select id="curation-category-${draftId}" style="width: 100%; padding: 0.5rem;">
              <option value="">-- Select Category --</option>
              <option value="AI Tools" ${draftData.category === 'AI Tools' ? 'selected' : ''}>AI Tools</option>
              <option value="Coding & STEM" ${draftData.category === 'Coding & STEM' ? 'selected' : ''}>Coding & STEM</option>
              <option value="Creative & Design" ${draftData.category === 'Creative & Design' ? 'selected' : ''}>Creative & Design</option>
              <option value="Dating & Adult Social" ${draftData.category === 'Dating & Adult Social' ? 'selected' : ''}>Dating & Adult Social</option>
              <option value="Education & Learning" ${draftData.category === 'Education & Learning' ? 'selected' : ''}>Education & Learning</option>
              <option value="Gaming" ${draftData.category === 'Gaming' ? 'selected' : ''}>Gaming</option>
              <option value="Health & Fitness" ${draftData.category === 'Health & Fitness' ? 'selected' : ''}>Health & Fitness</option>
              <option value="Messaging & Communication" ${draftData.category === 'Messaging & Communication' ? 'selected' : ''}>Messaging & Communication</option>
              <option value="Music & Audio" ${draftData.category === 'Music & Audio' ? 'selected' : ''}>Music & Audio</option>
              <option value="Productivity" ${draftData.category === 'Productivity' ? 'selected' : ''}>Productivity</option>
              <option value="Reading" ${draftData.category === 'Reading' ? 'selected' : ''}>Reading</option>
              <option value="Safety & Location" ${draftData.category === 'Safety & Location' ? 'selected' : ''}>Safety & Location</option>
              <option value="School & Classroom" ${draftData.category === 'School & Classroom' ? 'selected' : ''}>School & Classroom</option>
              <option value="Social Media" ${draftData.category === 'Social Media' ? 'selected' : ''}>Social Media</option>
              <option value="Tools & Browsers" ${draftData.category === 'Tools & Browsers' ? 'selected' : ''}>Tools & Browsers</option>
              <option value="Video & Streaming" ${draftData.category === 'Video & Streaming' ? 'selected' : ''}>Video & Streaming</option>
            </select>
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-age-${draftId}">Age Recommendation</label>
            <select id="curation-age-${draftId}" style="width: 100%; padding: 0.5rem;">
              <option value="">-- Select Age --</option>
              <option value="0" ${draftData.ageRecommendation === 0 ? 'selected' : ''}>Parental Awareness (all ages)</option>
              <option value="6" ${draftData.ageRecommendation === 6 ? 'selected' : ''}>Ages 6+</option>
              <option value="8" ${draftData.ageRecommendation === 8 ? 'selected' : ''}>Ages 8+</option>
              <option value="9" ${draftData.ageRecommendation === 9 ? 'selected' : ''}>Ages 9+</option>
              <option value="12" ${draftData.ageRecommendation === 12 ? 'selected' : ''}>Ages 12+</option>
              <option value="13" ${draftData.ageRecommendation === 13 ? 'selected' : ''}>Ages 13+</option>
              <option value="15" ${draftData.ageRecommendation === 15 ? 'selected' : ''}>Ages 15+</option>
              <option value="16" ${draftData.ageRecommendation === 16 ? 'selected' : ''}>Ages 16+</option>
            </select>
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-safety-${draftId}">Safety Rating</label>
            <select id="curation-safety-${draftId}" style="width: 100%; padding: 0.5rem;">
              <option value="">-- Select Rating --</option>
              <option value="1" ${draftData.safetyRating === 1 ? 'selected' : ''}>1 - 🔴 CRITICAL RISK</option>
              <option value="2" ${draftData.safetyRating === 2 ? 'selected' : ''}>2 - 🟠 HIGH RISK</option>
              <option value="3" ${draftData.safetyRating === 3 ? 'selected' : ''}>3 - 🟡 MEDIUM RISK</option>
              <option value="4" ${draftData.safetyRating === 4 ? 'selected' : ''}>4 - 🟢 LOW RISK</option>
            </select>
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-desc-${draftId}">Description (2-3 sentences)</label>
            <textarea id="curation-desc-${draftId}" maxlength="500" style="width: 100%; min-height: 80px; padding: 0.5rem;">${escapeHtml(draftData.description || '')}</textarea>
          </div>

          <fieldset class="admin-curation-fieldset" style="margin-top: 1rem;">
            <legend>Safety Features</legend>

            <div class="admin-curation-form-group">
              <label>
                <input type="checkbox" id="curation-chat-${draftId}" ${draftData.hasChat ? 'checked' : ''} onchange="toggleChatDetails('${draftId}')">
                Has chat/messaging
              </label>
              <textarea id="curation-chatDetails-${draftId}" maxlength="200" placeholder="Chat feature details" style="width: 100%; min-height: 60px; padding: 0.5rem; display: ${draftData.hasChat ? 'block' : 'none'}; margin-top: 0.5rem;">${escapeHtml(draftData.chatDetails || '')}</textarea>
            </div>

            <div class="admin-curation-form-group">
              <label>
                <input type="checkbox" id="curation-internet-${draftId}" ${draftData.hasOpenInternet ? 'checked' : ''} onchange="toggleInternetDetails('${draftId}')">
                Has open internet access
              </label>
              <textarea id="curation-internetDetails-${draftId}" maxlength="200" placeholder="Internet access details" style="width: 100%; min-height: 60px; padding: 0.5rem; display: ${draftData.hasOpenInternet ? 'block' : 'none'}; margin-top: 0.5rem;">${escapeHtml(draftData.internetDetails || '')}</textarea>
            </div>

            <div class="admin-curation-form-group">
              <label>
                <input type="checkbox" id="curation-location-${draftId}" ${draftData.hasLocationTracking ? 'checked' : ''} onchange="toggleLocationDetails('${draftId}')">
                Has location tracking
              </label>
              <textarea id="curation-locationDetails-${draftId}" maxlength="200" placeholder="Location tracking details" style="width: 100%; min-height: 60px; padding: 0.5rem; display: ${draftData.hasLocationTracking ? 'block' : 'none'}; margin-top: 0.5rem;">${escapeHtml(draftData.locationDetails || '')}</textarea>
            </div>
          </fieldset>
        </fieldset>

        <!-- TIER 2: Detail Research -->
        <fieldset class="admin-curation-fieldset">
          <legend>Research & Guidance</legend>

          <div class="admin-curation-form-group">
            <label for="curation-why-${draftId}">Why This Matters (Title)</label>
            <input type="text" id="curation-why-${draftId}" value="${escapeHtmlAttr(draftData.whyThisMatters?.title || '')}" maxlength="100" placeholder="Title" style="width: 100%; padding: 0.5rem;">
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-why-content-${draftId}">Why This Matters (Content)</label>
            <textarea id="curation-why-content-${draftId}" maxlength="1000" placeholder="Detailed explanation..." style="width: 100%; min-height: 100px; padding: 0.5rem;">${escapeHtml(draftData.whyThisMatters?.content || '')}</textarea>
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-dangers-${draftId}">Hidden Dangers (one per line)</label>
            <textarea id="curation-dangers-${draftId}" maxlength="2000" placeholder="Danger 1&#10;Danger 2&#10;Danger 3..." style="width: 100%; min-height: 100px; padding: 0.5rem;">${draftData.hiddenDangers.map(d => escapeHtml(d)).join('\n')}</textarea>
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-concerns-${draftId}">Parent Concerns (free text for now)</label>
            <textarea id="curation-concerns-${draftId}" maxlength="1000" placeholder="What concerns parents most?" style="width: 100%; min-height: 80px; padding: 0.5rem;">${Object.values(draftData.parentConcerns || {}).join('\n')}</textarea>
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-tips-${draftId}">Tips for Parents (one per line)</label>
            <textarea id="curation-tips-${draftId}" maxlength="1500" placeholder="Tip 1&#10;Tip 2&#10;Tip 3..." style="width: 100%; min-height: 100px; padding: 0.5rem;">${draftData.tipsForParents.map(t => escapeHtml(t)).join('\n')}</textarea>
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-sources-${draftId}">Sources & Attribution</label>
            <textarea id="curation-sources-${draftId}" maxlength="500" placeholder="Common Sense Media, NCBI, Reddit r/parenting, etc." style="width: 100%; min-height: 70px; padding: 0.5rem;">${escapeHtml(draftData.sources || '')}</textarea>
          </div>
        </fieldset>

        <fieldset class="admin-curation-fieldset">
          <legend>Conversation Guide</legend>

          <div class="admin-curation-form-group">
            <label for="curation-opener-${draftId}">How to Start the Conversation</label>
            <textarea id="curation-opener-${draftId}" maxlength="500" placeholder="Start with: &quot;I want to talk about this app...&quot;" style="width: 100%; min-height: 80px; padding: 0.5rem;">${escapeHtml(draftData.parentConversationGuide?.startWith || '')}</textarea>
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-keypoints-${draftId}">Key Points to Discuss (one per line)</label>
            <textarea id="curation-keypoints-${draftId}" maxlength="1000" placeholder="Point 1&#10;Point 2&#10;Point 3..." style="width: 100%; min-height: 100px; padding: 0.5rem;">${(draftData.parentConversationGuide?.keyPoints || []).map(k => escapeHtml(k)).join('\n')}</textarea>
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-redflags-${draftId}">Red Flags to Watch For (one per line)</label>
            <textarea id="curation-redflags-${draftId}" maxlength="1000" placeholder="Red flag 1&#10;Red flag 2&#10;Red flag 3..." style="width: 100%; min-height: 100px; padding: 0.5rem;">${(draftData.parentConversationGuide?.redFlags || []).map(r => escapeHtml(r)).join('\n')}</textarea>
          </div>

          <div class="admin-curation-form-group">
            <label for="curation-scriptopener-${draftId}">Conversation Opener Script</label>
            <textarea id="curation-scriptopener-${draftId}" maxlength="500" placeholder="&quot;I know this app is fun, but I&#x27;m concerned about...&quot;" style="width: 100%; min-height: 80px; padding: 0.5rem;">${escapeHtml(draftData.parentConversationGuide?.scriptOpener || '')}</textarea>
          </div>
        </fieldset>

        <div class="admin-curation-actions">
          <button type="submit" class="admin-curation-btn admin-curation-save">✓ Save Draft</button>
          <button type="button" class="admin-curation-btn admin-curation-publish" onclick="publishCurationDraft('${draftId}')" ${draftData.curationStatus === 'published' ? 'disabled' : ''} style="${draftData.curationStatus === 'published' ? 'opacity: 0.7;' : ''}">${draftData.curationStatus === 'published' ? '✓ Published' : '📤 Publish App'}</button>
          <button type="button" class="admin-curation-btn admin-curation-close" onclick="closeCurationForm('${draftId}')">✕ Close</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);
}

/**
 * Save curation draft
 */
window.saveCurationDraft = async function(draftId) {
  if (!db || !currentUser) return;

  const saveButton = document.querySelector(`form[data-draft-id="${draftId}"] .admin-curation-save`);
  if (!saveButton) return;

  // Double-submit protection: disable button immediately
  saveButton.disabled = true;
  const originalLabel = saveButton.textContent;
  saveButton.textContent = 'Saving...';

  const name = document.getElementById(`curation-name-${draftId}`).value.trim();
  const category = document.getElementById(`curation-category-${draftId}`).value;
  const ageRecommendation = parseInt(document.getElementById(`curation-age-${draftId}`).value);
  const safetyRating = parseInt(document.getElementById(`curation-safety-${draftId}`).value);
  const description = document.getElementById(`curation-desc-${draftId}`).value.trim();

  const hasChat = document.getElementById(`curation-chat-${draftId}`).checked;
  const chatDetails = document.getElementById(`curation-chatDetails-${draftId}`).value.trim();

  const hasOpenInternet = document.getElementById(`curation-internet-${draftId}`).checked;
  const internetDetails = document.getElementById(`curation-internetDetails-${draftId}`).value.trim();

  const hasLocationTracking = document.getElementById(`curation-location-${draftId}`).checked;
  const locationDetails = document.getElementById(`curation-locationDetails-${draftId}`).value.trim();

  const whyThisMattersTitle = document.getElementById(`curation-why-${draftId}`).value.trim();
  const whyThisMattersContent = document.getElementById(`curation-why-content-${draftId}`).value.trim();

  const dangersList = document.getElementById(`curation-dangers-${draftId}`).value
    .split('\n')
    .map(d => d.trim())
    .filter(d => d.length > 0);

  const concernsText = document.getElementById(`curation-concerns-${draftId}`).value.trim();
  const tipsList = document.getElementById(`curation-tips-${draftId}`).value
    .split('\n')
    .map(t => t.trim())
    .filter(t => t.length > 0);

  const sources = document.getElementById(`curation-sources-${draftId}`).value.trim();

  const openerText = document.getElementById(`curation-opener-${draftId}`).value.trim();
  const keypointsList = document.getElementById(`curation-keypoints-${draftId}`).value
    .split('\n')
    .map(k => k.trim())
    .filter(k => k.length > 0);

  const redflagsList = document.getElementById(`curation-redflags-${draftId}`).value
    .split('\n')
    .map(r => r.trim())
    .filter(r => r.length > 0);

  const scriptOpenerText = document.getElementById(`curation-scriptopener-${draftId}`).value.trim();

  // Compute safety label
  const safetyLabels = {
    1: '🔴 CRITICAL RISK',
    2: '🟠 HIGH RISK',
    3: '🟡 MEDIUM RISK',
    4: '🟢 LOW RISK'
  };
  const safetyLabel = safetyLabels[safetyRating] || '';

  const updateData = {
    name: name,
    category: category,
    ageRecommendation: ageRecommendation,
    safetyRating: safetyRating,
    safetyLabel: safetyLabel,
    description: description,

    hasChat: hasChat,
    chatDetails: chatDetails,
    hasOpenInternet: hasOpenInternet,
    internetDetails: internetDetails,
    hasLocationTracking: hasLocationTracking,
    locationDetails: locationDetails,

    whyThisMatters: {
      title: whyThisMattersTitle,
      content: whyThisMattersContent
    },

    hiddenDangers: dangersList,
    parentConcerns: concernsText,
    tipsForParents: tipsList,
    sources: sources,

    parentConversationGuide: {
      startWith: openerText,
      keyPoints: keypointsList,
      redFlags: redflagsList,
      scriptOpener: scriptOpenerText
    },

    updatedAt: serverTimestamp(),
    updatedBy: currentUser.uid
  };

  try {
    await updateDoc(doc(db, 'appsCurations', draftId), updateData);
    closeCurationForm(draftId);
    showCurationMessage('Draft saved successfully!');
  } catch (error) {
    console.error('Curation: Save error:', error);
    saveButton.disabled = false;
    saveButton.textContent = originalLabel;
    showCurationError('Failed to save draft.');
  }
}

/**
 * Publish curated draft to public appsPublished collection
 */
window.publishCurationDraft = async function(draftId) {
  if (!db || !currentUser) return;

  const publishBtn = document.querySelector(`form[data-draft-id="${draftId}"] .admin-curation-publish`);
  if (!publishBtn) return;

  // Check if already published
  if (publishBtn.disabled) {
    showCurationError('This app has already been published.');
    return;
  }

  // Disable button immediately
  publishBtn.disabled = true;
  const originalLabel = publishBtn.textContent;
  publishBtn.textContent = 'Publishing...';

  try {
    // Fetch the latest draft from Firestore (don't rely on modal state)
    const draftDoc = await getDoc(doc(db, 'appsCurations', draftId));
    if (!draftDoc.exists()) {
      throw new Error('Draft not found');
    }

    const draft = draftDoc.data();

    // Validate publication-ready status
    const validationError = validatePublishable(draft);
    if (validationError) {
      showModalPublishError(draftId, validationError);
      publishBtn.disabled = false;
      publishBtn.textContent = originalLabel;
      return;
    }

    // Check if already published
    if (draft.curationStatus === 'published') {
      showModalPublishError(draftId, 'This app has already been published.');
      publishBtn.disabled = true;
      publishBtn.textContent = '✓ Published';
      return;
    }

    // Check for duplicate published app with same normalized name
    const normalizedDraftName = draft.name.toLowerCase().trim();
    const allPublished = await getDocs(collection(db, 'appsPublished'));

    // Check in-memory for normalized name match
    const duplicateDoc = allPublished.docs.find(doc => {
      const publishedName = doc.data().name.toLowerCase().trim();
      return publishedName === normalizedDraftName && doc.id !== draftId;
    });

    if (duplicateDoc) {
      showModalPublishError(draftId, `An app named "${draft.name}" has already been published.`);
      publishBtn.disabled = false;
      publishBtn.textContent = originalLabel;
      return;
    }

    // Build public-safe data object (explicit field whitelist)
    // Derive safety label from rating to ensure consistency
    const safetyLabels = {
      1: '🔴 CRITICAL RISK',
      2: '🟠 HIGH RISK',
      3: '🟡 MEDIUM RISK',
      4: '🟢 LOW RISK'
    };

    const publicData = {
      name: draft.name,
      category: draft.category,
      ageRecommendation: draft.ageRecommendation,
      safetyRating: draft.safetyRating,
      safetyLabel: safetyLabels[draft.safetyRating],
      description: draft.description,
      hasChat: draft.hasChat,
      chatDetails: draft.chatDetails,
      hasOpenInternet: draft.hasOpenInternet,
      internetDetails: draft.internetDetails,
      hasLocationTracking: draft.hasLocationTracking,
      locationDetails: draft.locationDetails,
      whyThisMatters: draft.whyThisMatters,
      hiddenDangers: draft.hiddenDangers,
      parentConcerns: draft.parentConcerns,
      tipsForParents: draft.tipsForParents,
      parentConversationGuide: draft.parentConversationGuide,
      sources: draft.sources,
      publishedAt: serverTimestamp()
      // NEVER include: publishedBy, sourceSuggestionId, curationStatus, createdAt, updatedAt, createdBy, updatedBy
    };

    // Atomic batch write: publish to public + update private curation status
    const batch = writeBatch(db);

    // Write public data to appsPublished
    batch.set(doc(db, 'appsPublished', draftId), publicData);

    // Update private curation with publication metadata
    batch.update(doc(db, 'appsCurations', draftId), {
      curationStatus: 'published',
      publishedAt: serverTimestamp(),
      publishedBy: currentUser.uid
    });

    // Commit batch (both operations succeed or neither do)
    await batch.commit();

    // Success
    publishBtn.textContent = '✓ Published';
    publishBtn.disabled = true;
    showCurationMessage('App published to directory!');

  } catch (error) {
    console.error('Curation: Publish error:', error);
    publishBtn.disabled = false;
    publishBtn.textContent = originalLabel;
    showModalPublishError(draftId, 'Failed to publish app. Please try again.');
  }
};

/**
 * Validate that a draft is publication-ready
 */
function validatePublishable(draft) {
  // Required fields
  if (!draft.name || !draft.name.trim()) {
    return 'App name is required';
  }
  if (!draft.category || !draft.category.trim()) {
    return 'App category is required';
  }
  if (typeof draft.ageRecommendation !== 'number' || draft.ageRecommendation === null) {
    return 'Age recommendation is required';
  }
  if (typeof draft.safetyRating !== 'number' || draft.safetyRating < 1 || draft.safetyRating > 4) {
    return 'Safety rating must be a valid number (1-4)';
  }
  if (!draft.description || !draft.description.trim()) {
    return 'Description is required';
  }
  if (!draft.whyThisMatters || !draft.whyThisMatters.title || !draft.whyThisMatters.title.trim()) {
    return 'Why This Matters title is required';
  }
  if (!draft.whyThisMatters || !draft.whyThisMatters.content || !draft.whyThisMatters.content.trim()) {
    return 'Why This Matters content is required';
  }
  // At least one conversation starter must exist
  const scriptOpener = draft.parentConversationGuide?.scriptOpener?.trim() || '';
  const startWith = draft.parentConversationGuide?.startWith?.trim() || '';
  if (!scriptOpener && !startWith) {
    return 'Add a conversation starter before publishing';
  }

  // Boolean fields must be explicit
  if (typeof draft.hasChat !== 'boolean') {
    return 'Chat setting must be explicitly set (yes/no)';
  }
  if (typeof draft.hasOpenInternet !== 'boolean') {
    return 'Web access setting must be explicitly set (yes/no)';
  }
  if (typeof draft.hasLocationTracking !== 'boolean') {
    return 'Location tracking setting must be explicitly set (yes/no)';
  }

  // Conditional requirements
  if (draft.hasChat && (!draft.chatDetails || !draft.chatDetails.trim())) {
    return 'Chat details are required when chat is enabled';
  }
  if (draft.hasOpenInternet && (!draft.internetDetails || !draft.internetDetails.trim())) {
    return 'Web access details are required when web access is enabled';
  }
  if (draft.hasLocationTracking && (!draft.locationDetails || !draft.locationDetails.trim())) {
    return 'Location tracking details are required when location tracking is enabled';
  }

  // All validations passed
  return null;
}

/**
 * Helper functions for toggle visibility
 */
window.toggleChatDetails = function(draftId) {
  const details = document.getElementById(`curation-chatDetails-${draftId}`);
  const checked = document.getElementById(`curation-chat-${draftId}`).checked;
  details.style.display = checked ? 'block' : 'none';
};

window.toggleInternetDetails = function(draftId) {
  const details = document.getElementById(`curation-internetDetails-${draftId}`);
  const checked = document.getElementById(`curation-internet-${draftId}`).checked;
  details.style.display = checked ? 'block' : 'none';
};

window.toggleLocationDetails = function(draftId) {
  const details = document.getElementById(`curation-locationDetails-${draftId}`);
  const checked = document.getElementById(`curation-location-${draftId}`).checked;
  details.style.display = checked ? 'block' : 'none';
};

/**
 * Close curation form
 */
window.closeCurationForm = function(draftId) {
  const modal = document.getElementById(`curation-modal-${draftId}`);
  if (modal) {
    modal.remove();
  }
};

/**
 * Show error message
 */
function showCurationError(msg) {
  if (!curationContainer) return;

  const errorDiv = document.createElement('div');
  errorDiv.className = 'admin-curation-error';
  errorDiv.innerHTML = `
    <strong>Error:</strong> ${escapeHtml(msg)}
  `;
  curationContainer.appendChild(errorDiv);

  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

/**
 * Show success message
 */
function showCurationMessage(msg) {
  if (!curationContainer) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = 'admin-curation-message';
  msgDiv.innerHTML = `✓ ${escapeHtml(msg)}`;
  curationContainer.appendChild(msgDiv);

  setTimeout(() => {
    msgDiv.remove();
  }, 3000);
}

/**
 * Show error message inside the currently open curation modal
 */
function showModalPublishError(draftId, msg) {
  const modal = document.getElementById(`curation-modal-${draftId}`);
  if (!modal) return;

  // Remove previous validation error if it exists
  const existingError = modal.querySelector('.admin-curation-modal-error');
  if (existingError) {
    existingError.remove();
  }

  // Create error container
  const errorDiv = document.createElement('div');
  errorDiv.className = 'admin-curation-modal-error';
  errorDiv.innerHTML = `
    <strong>Cannot publish:</strong> ${escapeHtml(msg)}
  `;

  // Insert before the action buttons
  const actionsDiv = modal.querySelector('.admin-curation-actions');
  if (actionsDiv) {
    actionsDiv.parentNode.insertBefore(errorDiv, actionsDiv);
  } else {
    modal.appendChild(errorDiv);
  }

  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.remove();
    }
  }, 5000);
}

/**
 * Format date for display
 */
function formatDate(timestamp) {
  if (!timestamp) return 'Unknown';

  try {
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString();
  } catch {
    return 'Unknown';
  }
}

/**
 * Validate URL (http/https only)
 */
function isValidHttpUrl(urlString) {
  try {
    const url = new URL(urlString);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Escape HTML in text content (prevents XSS)
 */
function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Escape HTML in attribute values
 */
function escapeHtmlAttr(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// ============================================
// PUBLISHED APPS MANAGER (Phase 6F)
// ============================================

let publishedAppsContainer = null;
let publishedAppsUnsubscribe = null;

/**
 * Initialize the published apps manager
 * Called by initializeCuration after curation queue is set up
 */
export async function initializePublishedAppsManager(user) {
  if (!db || !user || !user.uid) {
    return;
  }

  publishedAppsContainer = document.getElementById('admin-published-apps');
  if (!publishedAppsContainer) {
    return;
  }

  try {
    await loadPublishedApps();

    const q = query(collection(db, 'appsPublished'));
    publishedAppsUnsubscribe = onSnapshot(q, (snapshot) => {
      renderPublishedApps(snapshot.docs);
    }, (error) => {
      console.error('Published Apps: Firestore listener error:', error);
      showPublishedAppsError('Failed to load published apps. Please refresh.');
    });

  } catch (error) {
    console.error('Published Apps: Initialization error:', error);
    showPublishedAppsError('Failed to initialize published apps manager.');
  }
}

/**
 * Stop published apps manager
 * Called by stopCuration on logout
 */
export function stopPublishedAppsManager() {
  if (publishedAppsUnsubscribe) {
    publishedAppsUnsubscribe();
    publishedAppsUnsubscribe = null;
  }

  if (publishedAppsContainer) {
    publishedAppsContainer.innerHTML = '';
  }
}

/**
 * Load published apps from Firestore
 */
async function loadPublishedApps() {
  if (!db || !publishedAppsContainer) return;

  publishedAppsContainer.innerHTML = '<div class="admin-published-apps-loading">Loading published apps...</div>';

  try {
    const snapshot = await getDocs(collection(db, 'appsPublished'));
    renderPublishedApps(snapshot.docs);
  } catch (error) {
    console.error('Published Apps: Load error:', error);
    showPublishedAppsError('Failed to load published apps.');
  }
}

/**
 * Render published apps
 */
function renderPublishedApps(docs) {
  if (!publishedAppsContainer) return;

  if (docs.length === 0) {
    publishedAppsContainer.innerHTML = `
      <div class="admin-published-apps-section">
        <h3>Published Apps Manager</h3>
        <div class="admin-published-apps-empty">No published apps yet. Publish curated apps from the Curation Queue.</div>
      </div>
    `;
    return;
  }

  const sorted = docs.sort((a, b) => {
    const timeA = a.data().publishedAt?.toMillis() || 0;
    const timeB = b.data().publishedAt?.toMillis() || 0;
    return timeB - timeA;
  });

  let html = `
    <div class="admin-published-apps-section">
      <h3>Published Apps Manager</h3>
      <p class="admin-published-apps-subtitle">Manage apps currently displayed in the public App Directory.</p>
      <div class="admin-published-apps-count">${sorted.length} published</div>
  `;

  sorted.forEach((doc) => {
    const data = doc.data();
    html += renderPublishedAppCard(doc.id, data);
  });

  html += '</div>';
  publishedAppsContainer.innerHTML = html;

  attachPublishedAppsEventListeners();
}

/**
 * Render a published app card
 */
function renderPublishedAppCard(docId, data) {
  const appName = data.name || 'Unnamed App';
  const category = data.category || 'Unknown';
  const ageRecommendation = data.ageRecommendation || 'Not set';
  const safetyLabel = data.safetyLabel || 'Not rated';

  return `
    <div class="admin-published-apps-card" data-doc-id="${escapeHtmlAttr(docId)}">
      <div class="admin-published-apps-info">
        <div class="admin-published-apps-field">
          <strong>${escapeHtml(appName)}</strong>
          <span class="admin-published-apps-category">${escapeHtml(category)}</span>
        </div>

        <div class="admin-published-apps-field">
          <span class="admin-published-apps-label">Age:</span>
          <span>${escapeHtml(String(ageRecommendation))}</span>
        </div>

        <div class="admin-published-apps-field">
          <span class="admin-published-apps-label">Safety:</span>
          <span>${escapeHtml(safetyLabel)}</span>
        </div>
      </div>

      <div class="admin-published-apps-actions">
        <button
          class="admin-published-apps-btn admin-published-apps-edit"
          data-doc-id="${escapeHtmlAttr(docId)}"
        >
          ✏️ Edit
        </button>
        <button
          class="admin-published-apps-btn admin-published-apps-remove"
          data-doc-id="${escapeHtmlAttr(docId)}"
        >
          🗑️ Remove
        </button>
      </div>
    </div>
  `;
}

/**
 * Attach event listeners to published app action buttons
 */
function attachPublishedAppsEventListeners() {
  // Edit buttons
  document.querySelectorAll('.admin-published-apps-edit').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const docId = e.target.getAttribute('data-doc-id');
      openPublishedAppForEdit(docId);
    });
  });

  // Remove buttons
  document.querySelectorAll('.admin-published-apps-remove').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const docId = e.target.getAttribute('data-doc-id');
      const appName = e.target.closest('.admin-published-apps-card')
        .querySelector('strong')?.textContent || 'this app';
      confirmRemoveFromDirectory(docId, appName);
    });
  });
}

/**
 * Open published app for editing (load curation form in published-edit mode)
 */
async function openPublishedAppForEdit(docId) {
  if (!db) return;

  try {
    // Fetch the private curation data
    const curationDoc = await getDoc(doc(db, 'appsCurations', docId));
    if (!curationDoc.exists()) {
      showPublishedAppsError('Private curation data for this app could not be found.');
      return;
    }

    const curationData = curationDoc.data();

    // Display form in published-edit mode
    displayPublishedEditForm(docId, curationData);
  } catch (error) {
    console.error('Published Apps: Open edit error:', error);
    showPublishedAppsError('Failed to open app for editing.');
  }
}

/**
 * Display curation form modal in PUBLISHED EDIT MODE
 * (reuse existing modal, but hide/show appropriate buttons)
 */
function displayPublishedEditForm(draftId, draftData) {
  // Reuse existing displayCurationForm
  displayCurationForm(draftId, draftData);

  // Modify the modal to hide draft-only controls and show published-only controls
  const modal = document.getElementById(`curation-modal-${draftId}`);
  if (!modal) return;

  // Hide "Save Draft" button (class is admin-curation-save)
  const saveDraftBtn = modal.querySelector('.admin-curation-save');
  if (saveDraftBtn) {
    saveDraftBtn.style.display = 'none';
  }

  // Hide "Publish App" button
  const publishBtn = modal.querySelector('.admin-curation-publish');
  if (publishBtn) {
    publishBtn.style.display = 'none';
  }

  // Add "Save & Update Public" button
  const actionsDiv = modal.querySelector('.admin-curation-actions');
  if (actionsDiv) {
    const updateBtn = document.createElement('button');
    updateBtn.type = 'button';
    updateBtn.className = 'admin-curation-btn admin-curation-update-public';
    updateBtn.textContent = 'Save & Update Public';
    updateBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.updatePublishedApp(draftId);
    });
    actionsDiv.appendChild(updateBtn);
  }

  // Mark modal as in published-edit mode
  modal.dataset.mode = 'published-edit';
}

/**
 * Update published app (atomic write to both appsCurations and appsPublished)
 */
window.updatePublishedApp = async function(draftId) {
  if (!db || !currentUser) {
    showPublishedAppsError('User or database not initialized.');
    return;
  }

  // Get the Save & Update Public button
  const modal = document.getElementById(`curation-modal-${draftId}`);
  const updateBtn = modal?.querySelector('.admin-curation-update-public');
  if (!updateBtn) return;

  // Disable button immediately
  updateBtn.disabled = true;
  const originalLabel = updateBtn.textContent;
  updateBtn.textContent = 'Updating...';

  try {
    // Collect form values (matching saveCurationDraft pattern)
    const name = document.getElementById(`curation-name-${draftId}`).value.trim();
    const category = document.getElementById(`curation-category-${draftId}`).value;
    const ageRecommendation = parseInt(document.getElementById(`curation-age-${draftId}`).value);
    const safetyRating = parseInt(document.getElementById(`curation-safety-${draftId}`).value);
    const description = document.getElementById(`curation-desc-${draftId}`).value.trim();

    const hasChat = document.getElementById(`curation-chat-${draftId}`).checked;
    const chatDetails = document.getElementById(`curation-chatDetails-${draftId}`).value.trim();

    const hasOpenInternet = document.getElementById(`curation-internet-${draftId}`).checked;
    const internetDetails = document.getElementById(`curation-internetDetails-${draftId}`).value.trim();

    const hasLocationTracking = document.getElementById(`curation-location-${draftId}`).checked;
    const locationDetails = document.getElementById(`curation-locationDetails-${draftId}`).value.trim();

    const whyThisMattersTitle = document.getElementById(`curation-why-${draftId}`).value.trim();
    const whyThisMattersContent = document.getElementById(`curation-why-content-${draftId}`).value.trim();

    const dangersList = document.getElementById(`curation-dangers-${draftId}`).value
      .split('\n')
      .map(d => d.trim())
      .filter(d => d.length > 0);

    const concernsText = document.getElementById(`curation-concerns-${draftId}`).value.trim();
    const tipsList = document.getElementById(`curation-tips-${draftId}`).value
      .split('\n')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const sources = document.getElementById(`curation-sources-${draftId}`).value.trim();

    const openerText = document.getElementById(`curation-opener-${draftId}`).value.trim();
    const keypointsList = document.getElementById(`curation-keypoints-${draftId}`).value
      .split('\n')
      .map(k => k.trim())
      .filter(k => k.length > 0);

    const redflagsList = document.getElementById(`curation-redflags-${draftId}`).value
      .split('\n')
      .map(r => r.trim())
      .filter(r => r.length > 0);

    const scriptOpenerText = document.getElementById(`curation-scriptopener-${draftId}`).value.trim();

    // Build updated draft object
    const updatedDraft = {
      name,
      category,
      ageRecommendation,
      safetyRating,
      description,
      hasChat,
      chatDetails,
      hasOpenInternet,
      internetDetails,
      hasLocationTracking,
      locationDetails,
      whyThisMatters: {
        title: whyThisMattersTitle,
        content: whyThisMattersContent
      },
      hiddenDangers: dangersList,
      parentConcerns: concernsText,
      tipsForParents: tipsList,
      sources: sources,
      parentConversationGuide: {
        startWith: openerText,
        keyPoints: keypointsList,
        redFlags: redflagsList,
        scriptOpener: scriptOpenerText
      }
    };

    // Validate the updated draft
    const validationError = validatePublishable(updatedDraft);
    if (validationError) {
      showModalPublishError(draftId, validationError);
      updateBtn.disabled = false;
      updateBtn.textContent = originalLabel;
      return;
    }

    // Fetch current curation data to preserve immutable fields
    const curationDoc = await getDoc(doc(db, 'appsCurations', draftId));
    if (!curationDoc.exists()) {
      throw new Error('Curation document not found');
    }

    const currentCuration = curationDoc.data();

    // Check for duplicate published app name (exclude self)
    const normalizedNewName = updatedDraft.name.toLowerCase().trim();
    const allPublished = await getDocs(collection(db, 'appsPublished'));

    const duplicateDoc = allPublished.docs.find(doc => {
      if (doc.id === draftId) return false;
      const publishedName = doc.data().name.toLowerCase().trim();
      return publishedName === normalizedNewName;
    });

    if (duplicateDoc) {
      showModalPublishError(draftId, `An app named "${updatedDraft.name}" already exists in the directory.`);
      updateBtn.disabled = false;
      updateBtn.textContent = originalLabel;
      return;
    }

    // Derive safety label
    const safetyLabels = {
      1: '🔴 CRITICAL RISK',
      2: '🟠 HIGH RISK',
      3: '🟡 MEDIUM RISK',
      4: '🟢 LOW RISK'
    };

    // Build public data (explicit whitelist, NO admin UIDs)
    const publicData = {
      name: updatedDraft.name,
      category: updatedDraft.category,
      ageRecommendation: updatedDraft.ageRecommendation,
      safetyRating: updatedDraft.safetyRating,
      safetyLabel: safetyLabels[updatedDraft.safetyRating],
      description: updatedDraft.description,
      hasChat: updatedDraft.hasChat,
      chatDetails: updatedDraft.chatDetails,
      hasOpenInternet: updatedDraft.hasOpenInternet,
      internetDetails: updatedDraft.internetDetails,
      hasLocationTracking: updatedDraft.hasLocationTracking,
      locationDetails: updatedDraft.locationDetails,
      whyThisMatters: updatedDraft.whyThisMatters,
      hiddenDangers: updatedDraft.hiddenDangers,
      parentConcerns: updatedDraft.parentConcerns,
      tipsForParents: updatedDraft.tipsForParents,
      parentConversationGuide: updatedDraft.parentConversationGuide,
      sources: updatedDraft.sources,
      updatedAt: serverTimestamp()
      // NEVER include: updatedBy, publishedBy, archivedBy, admin UIDs
    };

    // Atomic batch update
    const batch = writeBatch(db);

    // Update appsCurations with new fields but preserve immutable audit fields
    batch.update(doc(db, 'appsCurations', draftId), {
      name: updatedDraft.name,
      category: updatedDraft.category,
      ageRecommendation: updatedDraft.ageRecommendation,
      safetyRating: updatedDraft.safetyRating,
      description: updatedDraft.description,
      hasChat: updatedDraft.hasChat,
      chatDetails: updatedDraft.chatDetails,
      hasOpenInternet: updatedDraft.hasOpenInternet,
      internetDetails: updatedDraft.internetDetails,
      hasLocationTracking: updatedDraft.hasLocationTracking,
      locationDetails: updatedDraft.locationDetails,
      whyThisMatters: updatedDraft.whyThisMatters,
      hiddenDangers: updatedDraft.hiddenDangers,
      parentConcerns: updatedDraft.parentConcerns,
      tipsForParents: updatedDraft.tipsForParents,
      parentConversationGuide: updatedDraft.parentConversationGuide,
      sources: updatedDraft.sources,
      updatedAt: serverTimestamp(),
      updatedBy: currentUser.uid
    });

    // Update appsPublished with public data only
    batch.update(doc(db, 'appsPublished', draftId), publicData);

    // Commit batch
    await batch.commit();

    // Success
    updateBtn.textContent = '✓ Updated';
    updateBtn.disabled = true;
    showCurationMessage('Published app updated.');

    // Close modal after a brief delay
    setTimeout(() => {
      window.closeCurationForm(draftId);
    }, 1000);

  } catch (error) {
    console.error('Published Apps: Update error:', error);
    updateBtn.disabled = false;
    updateBtn.textContent = originalLabel;
    showModalPublishError(draftId, 'Failed to update published app. Please try again.');
  }
};

/**
 * Show confirmation for removing app from directory
 */
function confirmRemoveFromDirectory(docId, appName) {
  const confirmed = confirm(
    `Remove "${appName}" from the public directory?\n\nYour private research and curation data will be preserved.`
  );

  if (confirmed) {
    window.removeFromDirectory(docId);
  }
}

/**
 * Remove published app from directory (archive in appsCurations)
 */
window.removeFromDirectory = async function(draftId) {
  if (!db || !currentUser) {
    showPublishedAppsError('User or database not initialized.');
    return;
  }

  try {
    // Atomic batch: delete from appsPublished, archive in appsCurations
    const batch = writeBatch(db);

    // Delete from appsPublished
    batch.delete(doc(db, 'appsPublished', draftId));

    // Archive in appsCurations
    batch.update(doc(db, 'appsCurations', draftId), {
      curationStatus: 'archived',
      archivedAt: serverTimestamp(),
      archivedBy: currentUser.uid,
      updatedAt: serverTimestamp(),
      updatedBy: currentUser.uid
    });

    // Commit batch
    await batch.commit();

    // Success
    showPublishedAppsMessage('App removed from directory. Private research preserved.');

  } catch (error) {
    console.error('Published Apps: Remove error:', error);
    showPublishedAppsError('Failed to remove app from directory. Please try again.');
  }
};

/**
 * Show error message for published apps section
 */
function showPublishedAppsError(msg) {
  if (!publishedAppsContainer) return;

  const errorDiv = document.createElement('div');
  errorDiv.className = 'admin-published-apps-error';
  errorDiv.innerHTML = `
    <strong>Error:</strong> ${escapeHtml(msg)}
  `;
  publishedAppsContainer.appendChild(errorDiv);

  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

/**
 * Show success message for published apps section
 */
function showPublishedAppsMessage(msg) {
  if (!publishedAppsContainer) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = 'admin-published-apps-message';
  msgDiv.innerHTML = `✓ ${escapeHtml(msg)}`;
  publishedAppsContainer.appendChild(msgDiv);

  setTimeout(() => {
    msgDiv.remove();
  }, 3000);
}
