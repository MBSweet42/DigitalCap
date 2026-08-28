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
let allSubmissions = [];
let activeTypeFilter = 'all';
let activeStatusFilter = 'active';  // Default: show only pending and reviewing

/**
 * Get human-readable type label
 */
function getTypeLabel(submissionType) {
  const labels = {
    'app_suggestion': 'APP SUGGESTION',
    'app_correction': 'APP CORRECTION',
    'resource_suggestion': 'RESOURCE SUGGESTION',
    'website_problem': 'WEBSITE PROBLEM',
    'improvement': 'IMPROVEMENT',
    'other': 'OTHER'
  };
  return labels[submissionType] || 'APP SUGGESTION';
}

/**
 * Get human-readable status label
 */
function getStatusLabel(status) {
  const labels = {
    'pending': 'New',
    'reviewing': 'Reviewing',
    'resolved': 'Resolved',
    'approved': 'Approved',
    'rejected': 'Rejected'
  };
  return labels[status] || status;
}

/**
 * Get submission type category for filtering
 */
function getTypeCategory(submissionType) {
  return submissionType || 'app_suggestion';
}

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
    // Load initial submissions
    await loadPendingSubmissions();

    // Set up real-time listener for all submissions (admin can filter by status)
    const q = query(collection(db, 'appSubmissions'));

    unsubscribe = onSnapshot(q, (snapshot) => {
      allSubmissions = snapshot.docs;
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
  allSubmissions = [];
  activeTypeFilter = 'all';
  activeStatusFilter = 'all';

  // Clear UI
  if (moderationContainer) {
    moderationContainer.innerHTML = '';
  }
}

/**
 * Load and display submissions
 */
async function loadPendingSubmissions() {
  if (!db) return;

  moderationContainer.innerHTML = '<div class="admin-moderation-loading">Loading submissions...</div>';

  try {
    const q = query(collection(db, 'appSubmissions'));
    const snapshot = await getDocs(q);
    renderSubmissionsList(snapshot.docs);
  } catch (error) {
    console.error('Moderation: Load error:', error);
    showModeratorError('Failed to load submissions.');
  }
}

/**
 * Render the list of pending submissions with filters
 *
 * @param {Array} docs - Firestore documents
 */
function renderSubmissionsList(docs) {
  if (!moderationContainer) return;

  // Filter documents based on active filters
  let filtered = docs.filter(doc => {
    const data = doc.data();
    const typeCategory = getTypeCategory(data.submissionType);
    const status = data.status || 'pending';

    // Type filter
    if (activeTypeFilter !== 'all') {
      if (activeTypeFilter === 'app_suggestion' && typeCategory !== 'app_suggestion') return false;
      if (activeTypeFilter === 'app_correction' && typeCategory !== 'app_correction') return false;
      if (activeTypeFilter === 'resource_suggestion' && typeCategory !== 'resource_suggestion') return false;
      if (activeTypeFilter === 'website_problem' && typeCategory !== 'website_problem') return false;
      if (activeTypeFilter === 'improvement' && typeCategory !== 'improvement') return false;
      if (activeTypeFilter === 'other' && typeCategory !== 'other') return false;
    }

    // Status filter
    if (activeStatusFilter === 'active') {
      // Default: show only pending and reviewing (hide resolved/approved/rejected)
      if (status !== 'pending' && status !== 'reviewing') return false;
    } else if (activeStatusFilter === 'all') {
      // User explicitly selected "All" - show everything (no filter)
    } else if (activeStatusFilter === 'pending' && status !== 'pending') {
      return false;
    } else if (activeStatusFilter === 'reviewing' && status !== 'reviewing') {
      return false;
    } else if (activeStatusFilter === 'resolved' && status !== 'resolved') {
      return false;
    }

    return true;
  });

  if (docs.length === 0) {
    moderationContainer.innerHTML = `
      <div class="admin-moderation-section">
        <h3>Submissions Inbox</h3>
        <div class="admin-moderation-empty">No submissions found</div>
      </div>
    `;
    return;
  }

  // Sort by createdAt in JavaScript (newest first)
  const sorted = filtered.sort((a, b) => {
    const timeA = a.data().createdAt?.toMillis() || 0;
    const timeB = b.data().createdAt?.toMillis() || 0;
    return timeB - timeA;
  });

  let html = `
    <div class="admin-moderation-section">
      <div class="admin-moderation-header">
        <h3>Submissions Inbox</h3>
        <span class="admin-moderation-count">${sorted.length} / ${docs.length}</span>
      </div>

      <div class="admin-moderation-filters">
        <div class="admin-moderation-filter-group">
          <label for="typeFilter">Type:</label>
          <select id="typeFilter" class="admin-moderation-filter-select">
            <option value="all">All Types</option>
            <option value="app_suggestion">App Suggestions</option>
            <option value="app_correction">App Corrections</option>
            <option value="resource_suggestion">Resource Suggestions</option>
            <option value="website_problem">Website Problems</option>
            <option value="improvement">Improvements</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="admin-moderation-filter-group">
          <label for="statusFilter">Status:</label>
          <select id="statusFilter" class="admin-moderation-filter-select">
            <option value="active">Active Inbox</option>
            <option value="pending">New</option>
            <option value="reviewing">Reviewing</option>
            <option value="resolved">Resolved</option>
            <option value="all">All Submissions</option>
          </select>
        </div>
      </div>
  `;

  if (sorted.length === 0) {
    html += '<div class="admin-moderation-empty">No submissions match filters</div>';
  } else {
    sorted.forEach((doc) => {
      const data = doc.data();
      html += renderSubmissionCard(doc.id, data);
    });
  }

  html += '</div>';
  moderationContainer.innerHTML = html;

  // Set filter select values
  document.getElementById('typeFilter').value = activeTypeFilter;
  document.getElementById('statusFilter').value = activeStatusFilter;

  // Attach event listeners to action buttons and filters
  attachModeratorEventListeners();
  attachFilterListeners();
}

/**
 * Render a single submission card
 *
 * @param {string} docId - Document ID
 * @param {Object} data - Submission data
 * @returns {string} HTML
 */
function renderSubmissionCard(docId, data) {
  const submissionType = data.submissionType || 'app_suggestion';
  const typeLabel = getTypeLabel(submissionType);
  const statusLabel = getStatusLabel(data.status || 'pending');
  const createdDate = formatDate(data.createdAt);

  let titleField = '';
  let detailsField = '';
  let urlField = '';

  if (submissionType === 'app_suggestion' || submissionType === 'app_correction') {
    const appName = data.appName || 'Unnamed App';
    titleField = `
      <div class="admin-moderation-field">
        <strong>App Name:</strong>
        <span>${escapeHtml(appName)}</span>
      </div>
    `;

    const message = submissionType === 'app_suggestion' ?
      (data.whyWeShould || '') :
      (data.message || '');
    if (message) {
      detailsField = `
        <div class="admin-moderation-field">
          <strong>${submissionType === 'app_suggestion' ? 'Why should DigitalCap cover it?' : 'What needs correction?'}</strong>
          <p>${escapeHtml(message)}</p>
        </div>
      `;
    }

    const appUrl = data.appUrl || '';
    if (appUrl) {
      if (isValidHttpUrl(appUrl)) {
        urlField = `
          <div class="admin-moderation-field">
            <strong>Website/Store Link:</strong>
            <a href="${escapeHtmlAttr(appUrl)}" target="_blank" rel="noopener noreferrer">
              ${escapeHtml(appUrl)}
            </a>
          </div>
        `;
      } else {
        urlField = `
          <div class="admin-moderation-field">
            <strong>Website/Store Link:</strong>
            <span>${escapeHtml(appUrl)}</span>
          </div>
        `;
      }
    }

    if (submissionType === 'app_correction' && data.suggestedCorrection) {
      detailsField += `
        <div class="admin-moderation-field">
          <strong>Suggested Correction:</strong>
          <p>${escapeHtml(data.suggestedCorrection)}</p>
        </div>
      `;
    }
  } else if (submissionType === 'resource_suggestion') {
    const resourceName = data.resourceName || 'Unnamed Resource';
    titleField = `
      <div class="admin-moderation-field">
        <strong>Resource Name:</strong>
        <span>${escapeHtml(resourceName)}</span>
      </div>
    `;

    if (data.resourceUrl) {
      if (isValidHttpUrl(data.resourceUrl)) {
        urlField = `
          <div class="admin-moderation-field">
            <strong>Resource Link:</strong>
            <a href="${escapeHtmlAttr(data.resourceUrl)}" target="_blank" rel="noopener noreferrer">
              ${escapeHtml(data.resourceUrl)}
            </a>
          </div>
        `;
      } else {
        urlField = `
          <div class="admin-moderation-field">
            <strong>Resource Link:</strong>
            <span>${escapeHtml(data.resourceUrl)}</span>
          </div>
        `;
      }
    }

    if (data.message) {
      detailsField = `
        <div class="admin-moderation-field">
          <strong>Why this resource is helpful:</strong>
          <p>${escapeHtml(data.message)}</p>
        </div>
      `;
    }
  } else {
    if (data.message) {
      detailsField = `
        <div class="admin-moderation-field">
          <strong>Message:</strong>
          <p>${escapeHtml(data.message)}</p>
        </div>
      `;
    }

    if (data.sourceUrl) {
      if (isValidHttpUrl(data.sourceUrl)) {
        urlField = `
          <div class="admin-moderation-field">
            <strong>Source Link:</strong>
            <a href="${escapeHtmlAttr(data.sourceUrl)}" target="_blank" rel="noopener noreferrer">
              ${escapeHtml(data.sourceUrl)}
            </a>
          </div>
        `;
      }
    }
  }

  const additionalNotes = data.additionalNotes || '';
  let notesHtml = '';
  if (additionalNotes) {
    notesHtml = `
      <div class="admin-moderation-field">
        <strong>Additional Notes:</strong>
        <p>${escapeHtml(additionalNotes)}</p>
      </div>
    `;
  }

  const submitterName = data.submitterName ? `<span class="admin-moderation-submitter">${escapeHtml(data.submitterName)}</span>` : '';
  const submitterEmail = data.email ? `<span class="admin-moderation-email">${escapeHtml(data.email)}</span>` : '';

  let actionsHtml = '';
  if (submissionType === 'app_suggestion') {
    // Legacy Approve/Reject for app suggestions
    actionsHtml = `
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
    `;
  } else {
    // New Mark Reviewing / Mark Resolved for generalized feedback
    actionsHtml = `
      <button
        class="admin-moderation-btn admin-moderation-reviewing"
        data-doc-id="${escapeHtmlAttr(docId)}"
      >
        👁 Mark Reviewing
      </button>

      <button
        class="admin-moderation-btn admin-moderation-resolved"
        data-doc-id="${escapeHtmlAttr(docId)}"
      >
        ✓ Mark Resolved
      </button>
    `;
  }

  return `
    <div class="admin-moderation-card" data-doc-id="${escapeHtmlAttr(docId)}" data-type="${escapeHtmlAttr(submissionType)}">
      <div class="admin-moderation-content">
        <div class="admin-moderation-meta">
          <span class="admin-moderation-type-badge">${typeLabel}</span>
          <span class="admin-moderation-status admin-moderation-status-${data.status || 'pending'}">${statusLabel}</span>
        </div>

        ${titleField}

        <div class="admin-moderation-field">
          <strong>Submitted:</strong>
          <span>${createdDate}</span>
          ${submitterName}${submitterEmail ? ' • ' + submitterEmail : ''}
        </div>

        ${urlField}

        ${detailsField}

        ${notesHtml}
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

        ${actionsHtml}
      </div>
    </div>
  `;
}

/**
 * Attach event listeners to action buttons
 */
function attachModeratorEventListeners() {
  // Approve buttons (legacy app suggestions)
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

  // Reject buttons (legacy app suggestions)
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

  // Mark Reviewing buttons (generalized feedback)
  document.querySelectorAll('.admin-moderation-reviewing').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const docId = e.target.getAttribute('data-doc-id');
      const notesInput = document.querySelector(
        `.admin-moderation-notes-input[data-doc-id="${escapeHtmlAttr(docId)}"]`
      );
      const adminNotes = notesInput?.value.trim() || '';
      handleMarkReviewing(docId, adminNotes);
    });
  });

  // Mark Resolved buttons (generalized feedback)
  document.querySelectorAll('.admin-moderation-resolved').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const docId = e.target.getAttribute('data-doc-id');
      const notesInput = document.querySelector(
        `.admin-moderation-notes-input[data-doc-id="${escapeHtmlAttr(docId)}"]`
      );
      const adminNotes = notesInput?.value.trim() || '';
      handleMarkResolved(docId, adminNotes);
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
 * Handle mark reviewing action
 *
 * @param {string} docId - Document ID
 * @param {string} adminNotes - Optional admin notes
 */
async function handleMarkReviewing(docId, adminNotes) {
  if (!db || !currentUser) return;

  const card = document.querySelector(`[data-doc-id="${escapeHtmlAttr(docId)}"]`);
  if (!card) return;

  const reviewingBtn = card.querySelector('.admin-moderation-reviewing');
  const resolvedBtn = card.querySelector('.admin-moderation-resolved');
  reviewingBtn.disabled = true;
  resolvedBtn.disabled = true;
  reviewingBtn.textContent = '👁 Reviewing...';

  try {
    const updateData = {
      status: 'reviewing',
      reviewedAt: serverTimestamp(),
      reviewedBy: currentUser.uid
    };

    if (adminNotes) {
      updateData.adminNotes = adminNotes;
    }

    await updateDoc(doc(db, 'appSubmissions', docId), updateData);

    reviewingBtn.textContent = '👁 Reviewing';
  } catch (error) {
    console.error('Moderation: Mark reviewing error:', error);
    reviewingBtn.disabled = false;
    resolvedBtn.disabled = false;
    reviewingBtn.textContent = '👁 Mark Reviewing';

    let errorMsg = 'Failed to mark reviewing';
    if (error.code === 'permission-denied') {
      errorMsg = 'Permission denied';
    } else if (error.code === 'not-found') {
      errorMsg = 'Submission not found';
    }

    showCardError(card, errorMsg);
  }
}

/**
 * Handle mark resolved action
 *
 * @param {string} docId - Document ID
 * @param {string} adminNotes - Optional admin notes
 */
async function handleMarkResolved(docId, adminNotes) {
  if (!db || !currentUser) return;

  const card = document.querySelector(`[data-doc-id="${escapeHtmlAttr(docId)}"]`);
  if (!card) return;

  const reviewingBtn = card.querySelector('.admin-moderation-reviewing');
  const resolvedBtn = card.querySelector('.admin-moderation-resolved');
  reviewingBtn.disabled = true;
  resolvedBtn.disabled = true;
  resolvedBtn.textContent = '✓ Resolving...';

  try {
    const updateData = {
      status: 'resolved',
      reviewedAt: serverTimestamp(),
      reviewedBy: currentUser.uid
    };

    if (adminNotes) {
      updateData.adminNotes = adminNotes;
    }

    await updateDoc(doc(db, 'appSubmissions', docId), updateData);

    resolvedBtn.textContent = '✓ Resolved';
    card.classList.add('admin-moderation-resolved');

    // Remove card after delay
    setTimeout(() => {
      if (card.parentElement) {
        card.remove();
      }
    }, 500);

  } catch (error) {
    console.error('Moderation: Mark resolved error:', error);
    reviewingBtn.disabled = false;
    resolvedBtn.disabled = false;
    resolvedBtn.textContent = '✓ Mark Resolved';

    let errorMsg = 'Failed to mark resolved';
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
 * Attach filter event listeners
 */
function attachFilterListeners() {
  const typeFilter = document.getElementById('typeFilter');
  const statusFilter = document.getElementById('statusFilter');

  if (typeFilter) {
    typeFilter.addEventListener('change', (e) => {
      activeTypeFilter = e.target.value;
      renderSubmissionsList(allSubmissions);
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener('change', (e) => {
      activeStatusFilter = e.target.value;
      renderSubmissionsList(allSubmissions);
    });
  }
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
