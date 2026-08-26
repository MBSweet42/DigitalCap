// DigitalCap Admin Moderation UI
// Manages pending app submission review and approval workflow
// Firebase Firestore integration for moderation tasks

import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
  onSnapshot,
  QueryConstraint
} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js';

let currentUser = null;
let db = null;
let moderationContainer = null;
let unsubscribe = null;

/**
 * Initialize the moderation UI
 * Called by admin-auth.js after authorized admin UID check passes
 *
 * @param {Object} user - Firebase user object (already authorized)
 */
export async function initializeModeration(user) {
  // Prevent duplicate initialization
  if (currentUser) {
    return;
  }

  if (!user || !user.uid) {
    console.error('Moderation: User object required');
    return;
  }

  if (!window.digitalCapFirebase || !window.digitalCapFirebase.db) {
    console.error('Moderation: Firebase not initialized');
    return;
  }

  currentUser = user;
  db = window.digitalCapFirebase.db;
  moderationContainer = document.getElementById('admin-moderation-inbox');

  if (!moderationContainer) {
    console.error('Moderation: Container not found');
    return;
  }

  try {
    // Load initial pending submissions
    await loadPendingSubmissions();

    // Set up real-time listener for pending submissions
    const q = query(
      collection(db, 'appSubmissions'),
      where('status', '==', 'pending')
    );

    unsubscribe = onSnapshot(q, (snapshot) => {
      renderSubmissionsList(snapshot.docs);
    }, (error) => {
      console.error('Moderation: Firestore listener error:', error);
      showModeratorError('Failed to load submissions. Please refresh.');
    });

  } catch (error) {
    console.error('Moderation: Initialization error:', error);
    showModeratorError('Failed to initialize moderation inbox.');
  }
}

/**
 * Stop moderation UI
 * Called by admin-auth.js on logout
 */
export function stopModeration() {
  // Unsubscribe from real-time updates
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }

  // Clear state
  currentUser = null;
  db = null;

  // Clear UI
  if (moderationContainer) {
    moderationContainer.innerHTML = '';
  }
}

/**
 * Load and display pending submissions
 */
async function loadPendingSubmissions() {
  if (!db) return;

  moderationContainer.innerHTML = '<div class="admin-moderation-loading">Loading pending submissions...</div>';

  try {
    const q = query(
      collection(db, 'appSubmissions'),
      where('status', '==', 'pending')
    );

    const snapshot = await getDocs(q);
    renderSubmissionsList(snapshot.docs);
  } catch (error) {
    console.error('Moderation: Load error:', error);
    showModeratorError('Failed to load submissions.');
  }
}

/**
 * Render the list of pending submissions
 *
 * @param {Array} docs - Firestore documents
 */
function renderSubmissionsList(docs) {
  if (!moderationContainer) return;

  if (docs.length === 0) {
    moderationContainer.innerHTML = `
      <div class="admin-moderation-section">
        <h3>Pending App Suggestions</h3>
        <div class="admin-moderation-empty">No pending submissions</div>
      </div>
    `;
    return;
  }

  // Sort by createdAt in JavaScript (newest first)
  const sorted = docs.sort((a, b) => {
    const timeA = a.data().createdAt?.toMillis() || 0;
    const timeB = b.data().createdAt?.toMillis() || 0;
    return timeB - timeA;
  });

  let html = `
    <div class="admin-moderation-section">
      <div class="admin-moderation-header">
        <h3>Pending App Suggestions</h3>
        <span class="admin-moderation-count">${sorted.length} pending</span>
      </div>
  `;

  sorted.forEach((doc) => {
    const data = doc.data();
    html += renderSubmissionCard(doc.id, data);
  });

  html += '</div>';
  moderationContainer.innerHTML = html;

  // Attach event listeners to action buttons
  attachModeratorEventListeners();
}

/**
 * Render a single submission card
 *
 * @param {string} docId - Document ID
 * @param {Object} data - Submission data
 * @returns {string} HTML
 */
function renderSubmissionCard(docId, data) {
  const appName = data.appName || 'Unnamed App';
  const createdDate = formatDate(data.createdAt);
  const appUrl = data.appUrl || '';
  const whyWeShould = data.whyWeShould || '';
  const additionalNotes = data.additionalNotes || '';

  let urlHtml = '';
  if (appUrl) {
    // Validate URL before rendering as link
    if (isValidHttpUrl(appUrl)) {
      urlHtml = `
        <div class="admin-moderation-field">
          <strong>Website/Store Link:</strong>
          <a href="${escapeHtmlAttr(appUrl)}" target="_blank" rel="noopener noreferrer">
            ${escapeHtml(appUrl)}
          </a>
        </div>
      `;
    } else {
      urlHtml = `
        <div class="admin-moderation-field">
          <strong>Website/Store Link:</strong>
          <span>${escapeHtml(appUrl)}</span>
        </div>
      `;
    }
  }

  let notesHtml = '';
  if (additionalNotes) {
    notesHtml = `
      <div class="admin-moderation-field">
        <strong>Additional Notes:</strong>
        <p>${escapeHtml(additionalNotes)}</p>
      </div>
    `;
  }

  return `
    <div class="admin-moderation-card" data-doc-id="${escapeHtmlAttr(docId)}">
      <div class="admin-moderation-content">
        <div class="admin-moderation-field">
          <strong>App Name:</strong>
          <span>${escapeHtml(appName)}</span>
        </div>

        <div class="admin-moderation-field">
          <strong>Submitted:</strong>
          <span>${createdDate}</span>
        </div>

        ${urlHtml}

        <div class="admin-moderation-field">
          <strong>Why should DigitalCap cover it?</strong>
          <p>${escapeHtml(whyWeShould)}</p>
        </div>

        ${notesHtml}

        <div class="admin-moderation-field">
          <strong>Status:</strong>
          <span class="admin-moderation-status admin-moderation-status-pending">PENDING</span>
        </div>
      </div>

      <div class="admin-moderation-actions">
        <div class="admin-moderation-admin-notes">
          <input
            type="text"
            class="admin-moderation-notes-input"
            placeholder="Optional admin notes (max 1000)"
            maxlength="1000"
            data-doc-id="${escapeHtmlAttr(docId)}"
          >
        </div>

        <button
          class="admin-moderation-btn admin-moderation-approve"
          data-doc-id="${escapeHtmlAttr(docId)}"
        >
          ✓ Approve
        </button>

        <button
          class="admin-moderation-btn admin-moderation-reject"
          data-doc-id="${escapeHtmlAttr(docId)}"
        >
          ✕ Reject
        </button>
      </div>
    </div>
  `;
}

/**
 * Attach event listeners to action buttons
 */
function attachModeratorEventListeners() {
  // Approve buttons
  document.querySelectorAll('.admin-moderation-approve').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const docId = e.target.getAttribute('data-doc-id');
      const notesInput = document.querySelector(
        `.admin-moderation-notes-input[data-doc-id="${escapeHtmlAttr(docId)}"]`
      );
      const adminNotes = notesInput?.value.trim() || '';
      handleApprove(docId, adminNotes);
    });
  });

  // Reject buttons
  document.querySelectorAll('.admin-moderation-reject').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const docId = e.target.getAttribute('data-doc-id');
      const notesInput = document.querySelector(
        `.admin-moderation-notes-input[data-doc-id="${escapeHtmlAttr(docId)}"]`
      );
      const adminNotes = notesInput?.value.trim() || '';
      handleReject(docId, adminNotes);
    });
  });
}

/**
 * Handle approve action
 *
 * @param {string} docId - Document ID
 * @param {string} adminNotes - Optional admin notes
 */
async function handleApprove(docId, adminNotes) {
  if (!db || !currentUser) return;

  const card = document.querySelector(`[data-doc-id="${escapeHtmlAttr(docId)}"]`);
  if (!card) return;

  // Disable buttons
  const approveBtn = card.querySelector('.admin-moderation-approve');
  const rejectBtn = card.querySelector('.admin-moderation-reject');
  approveBtn.disabled = true;
  rejectBtn.disabled = true;
  approveBtn.textContent = 'Approving...';

  try {
    const updateData = {
      status: 'approved',
      reviewedAt: serverTimestamp(),
      reviewedBy: currentUser.uid
    };

    if (adminNotes) {
      updateData.adminNotes = adminNotes;
    }

    await updateDoc(doc(db, 'appSubmissions', docId), updateData);

    // Show success
    approveBtn.textContent = '✓ Approved';
    card.classList.add('admin-moderation-approved');

    // Remove card after delay
    setTimeout(() => {
      if (card.parentElement) {
        card.remove();
      }
    }, 500);

  } catch (error) {
    console.error('Moderation: Approve error:', error);
    approveBtn.disabled = false;
    rejectBtn.disabled = false;
    approveBtn.textContent = '✓ Approve';

    let errorMsg = 'Failed to approve';
    if (error.code === 'permission-denied') {
      errorMsg = 'Permission denied';
    } else if (error.code === 'not-found') {
      errorMsg = 'Submission not found';
    }

    showCardError(card, errorMsg);
  }
}

/**
 * Handle reject action
 *
 * @param {string} docId - Document ID
 * @param {string} adminNotes - Optional admin notes
 */
async function handleReject(docId, adminNotes) {
  if (!db || !currentUser) return;

  const card = document.querySelector(`[data-doc-id="${escapeHtmlAttr(docId)}"]`);
  if (!card) return;

  // Disable buttons
  const approveBtn = card.querySelector('.admin-moderation-approve');
  const rejectBtn = card.querySelector('.admin-moderation-reject');
  approveBtn.disabled = true;
  rejectBtn.disabled = true;
  rejectBtn.textContent = 'Rejecting...';

  try {
    const updateData = {
      status: 'rejected',
      reviewedAt: serverTimestamp(),
      reviewedBy: currentUser.uid
    };

    if (adminNotes) {
      updateData.adminNotes = adminNotes;
    }

    await updateDoc(doc(db, 'appSubmissions', docId), updateData);

    // Show success
    rejectBtn.textContent = '✕ Rejected';
    card.classList.add('admin-moderation-rejected');

    // Remove card after delay
    setTimeout(() => {
      if (card.parentElement) {
        card.remove();
      }
    }, 500);

  } catch (error) {
    console.error('Moderation: Reject error:', error);
    approveBtn.disabled = false;
    rejectBtn.disabled = false;
    rejectBtn.textContent = '✕ Reject';

    let errorMsg = 'Failed to reject';
    if (error.code === 'permission-denied') {
      errorMsg = 'Permission denied';
    } else if (error.code === 'not-found') {
      errorMsg = 'Submission not found';
    }

    showCardError(card, errorMsg);
  }
}

/**
 * Show error message on a card
 */
function showCardError(card, msg) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'admin-moderation-card-error';
  errorDiv.textContent = msg;
  card.appendChild(errorDiv);

  setTimeout(() => {
    errorDiv.remove();
  }, 4000);
}

/**
 * Show error in the moderation container
 */
function showModeratorError(msg) {
  if (!moderationContainer) return;

  const errorDiv = document.createElement('div');
  errorDiv.className = 'admin-moderation-error';
  errorDiv.innerHTML = `
    <strong>Error:</strong> ${escapeHtml(msg)}
  `;
  moderationContainer.appendChild(errorDiv);
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
