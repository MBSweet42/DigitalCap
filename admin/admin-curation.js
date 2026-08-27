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
              <option value="Social Media" ${draftData.category === 'Social Media' ? 'selected' : ''}>Social Media</option>
              <option value="Messaging" ${draftData.category === 'Messaging' ? 'selected' : ''}>Messaging</option>
              <option value="Gaming" ${draftData.category === 'Gaming' ? 'selected' : ''}>Gaming</option>
              <option value="Video" ${draftData.category === 'Video' ? 'selected' : ''}>Video</option>
              <option value="Music" ${draftData.category === 'Music' ? 'selected' : ''}>Music</option>
              <option value="Shopping" ${draftData.category === 'Shopping' ? 'selected' : ''}>Shopping</option>
              <option value="Educational" ${draftData.category === 'Educational' ? 'selected' : ''}>Educational</option>
              <option value="Other" ${draftData.category === 'Other' ? 'selected' : ''}>Other</option>
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
