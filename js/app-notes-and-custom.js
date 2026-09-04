// Parent Notes UI & Custom App System

// ===== PARENT NOTES SYSTEM (Core) =====

const parentNotesSystem = {
    version: 1,
    notes: {},

    addNote: function(appId, parentName, rating, noteText) {
        if (!this.notes[appId]) {
            this.notes[appId] = [];
        }

        const note = {
            id: Date.now(),
            parentInitials: parentName.substring(0, 2).toUpperCase() || 'P',
            rating: rating,
            text: noteText,
            timestamp: new Date().toISOString(),
            verified: false
        };

        this.notes[appId].push(note);
        this.saveToLocalStorage();
        return note;
    },

    getNotes: function(appId) {
        return this.notes[appId] || [];
    },

    getAverageParentRating: function(appId) {
        const notes = this.getNotes(appId);
        if (notes.length === 0) return null;

        const sum = notes.reduce((acc, note) => acc + note.rating, 0);
        return (sum / notes.length).toFixed(1);
    },

    saveToLocalStorage: function() {
        localStorage.setItem('digitalSafetyHubNotes', JSON.stringify(this.notes));
    },

    loadFromLocalStorage: function() {
        const stored = localStorage.getItem('digitalSafetyHubNotes');
        if (stored) {
            this.notes = JSON.parse(stored);
        }
    }
};

// ===== CUSTOM APP SYSTEM (Core) =====

const customAppsSystem = {
    apps: {},

    createCustomApp: function(name, category, parentNotes) {
        const customApp = {
            id: `custom-${Date.now()}`,
            name: name,
            category: category || 'Other',
            isCustom: true,
            createdBy: 'Parent',
            createdDate: new Date().toISOString(),
            parentNotes: parentNotes,
            hasChat: null,
            hasOpenInternet: null,
            hasLocationTracking: null,
            ageRecommendation: null,
            description: parentNotes,
            safetyLabel: '❓ Under Review'
        };

        this.apps[customApp.id] = customApp;
        this.saveToLocalStorage();
        return customApp;
    },

    saveToLocalStorage: function() {
        localStorage.setItem('digitalSafetyHubCustomApps', JSON.stringify(this.apps));
    },

    loadFromLocalStorage: function() {
        const stored = localStorage.getItem('digitalSafetyHubCustomApps');
        if (stored) {
            this.apps = JSON.parse(stored);
        }
    }
};

// ===== PARENT NOTES DISPLAY =====

function displayParentNotes(appId) {
    const notes = parentNotesSystem.getNotes(appId);
    const averageRating = parentNotesSystem.getAverageParentRating(appId);

    let html = `
        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid var(--border-color);">
            <div style="background: rgba(255, 107, 107, 0.1); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--primary); margin-bottom: 1.5rem;">
                <p style="margin: 0; color: var(--text-dark); font-size: 0.9rem;">
                    <strong>⚠️ Parent Notes:</strong> Real experiences from parents using this site. Not verified by our team. If you notice something dangerous, add your own note!
                </p>
            </div>
    `;

    if (notes.length > 0) {
        if (averageRating) {
            html += `
                <div style="margin-bottom: 1.5rem;">
                    <strong>Parent Rating: ${averageRating} / 5.0 stars</strong> (from ${notes.length} parent${notes.length !== 1 ? 's' : ''})
                    <div style="display: flex; gap: 0.25rem; margin-top: 0.5rem;">
                        ${[...Array(5)].map((_, i) => `
                            <span style="color: ${i < Math.round(averageRating) ? 'var(--accent)' : 'var(--border-color)'}; font-size: 1.2rem;">★</span>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        html += `<h4 style="color: var(--primary); margin-bottom: 1rem;">Parent Experiences:</h4>`;

        notes.forEach(note => {
            const date = new Date(note.timestamp).toLocaleDateString();
            html += `
                <div style="background: var(--bg-light); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border-left: 4px solid var(--secondary);">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem;">
                        <div>
                            <strong>${note.parentInitials}</strong> - ${date}
                        </div>
                        <div style="color: var(--accent); font-size: 1rem;">
                            ${'★'.repeat(note.rating)}<span style="color: var(--border-color);">${'★'.repeat(5 - note.rating)}</span>
                        </div>
                    </div>
                    <p style="margin: 0; color: var(--text-gray);">${escapeHtml(note.text)}</p>
                </div>
            `;
        });
    } else {
        html += `<p style="color: var(--text-gray); font-style: italic;">No parent notes yet. Be the first to share your experience!</p>`;
    }

    html += `
        <div style="margin-top: 1.5rem;">
            <button class="btn btn-secondary" onclick="openAddNoteModal(${appId})" style="width: 100%;">
                ✍️ Add Your Experience
            </button>
        </div>
        </div>
    `;

    return html;
}

// ===== ADD NOTE MODAL =====

function openAddNoteModal(appId) {
    const app = appsDataV2.find(a => a.id === appId);
    if (!app) return;

    const modal = document.createElement('div');
    modal.className = 'add-note-modal';
    modal.id = `note-modal-${appId}`;
    modal.innerHTML = `
        <div class="add-note-modal-backdrop" onclick="closeAddNoteModal(${appId})"></div>

        <div class="add-note-modal-content">
            <button class="add-note-modal-close" onclick="closeAddNoteModal(${appId})">✕</button>

            <h2 style="color: var(--primary); margin-top: 0;">Share Your Experience with ${app.name}</h2>
            <p style="color: var(--text-gray);">Help other parents understand this app. What have you noticed?</p>

            <form onsubmit="submitParentNote(${appId}); return false;">
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Your Initials (optional)
                    </label>
                    <input type="text" id="parentName-${appId}" maxlength="3" placeholder="e.g., MJ" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Rating (how safe is this app?)
                    </label>
                    <div style="display: flex; gap: 0.5rem;">
                        ${[1, 2, 3, 4, 5].map(rating => `
                            <button type="button" class="rating-btn" data-rating="${rating}" onclick="setRating(${appId}, ${rating})">
                                <span style="font-size: 2rem; cursor: pointer;">★</span>
                            </button>
                        `).join('')}
                    </div>
                    <small style="color: var(--text-gray);">1 = Very Unsafe, 5 = Very Safe</small>
                    <input type="hidden" id="rating-${appId}" value="3">
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        What's your experience with this app?
                    </label>
                    <textarea id="noteText-${appId}" placeholder="e.g., 'My 13yo spends 4 hours a day on this. Found them watching really dark content. Private messages from adults pretending to be kids.'" style="width: 100%; min-height: 150px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit;"></textarea>
                </div>

                <div style="background: rgba(78, 205, 196, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
                    <p style="margin: 0; color: var(--text-gray); font-size: 0.9rem;">
                        <strong>💡 Tips:</strong> Share specific observations, not just feelings. "My kid discovered..." is more helpful than "I hate this app."
                    </p>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%;">
                    Submit Experience
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeAddNoteModal(appId) {
    const modal = document.getElementById(`note-modal-${appId}`);
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => modal.remove(), 300);
    }
}

function setRating(appId, rating) {
    document.getElementById(`rating-${appId}`).value = rating;
    // Visual feedback
    document.querySelectorAll(`#note-modal-${appId} .rating-btn`).forEach((btn, idx) => {
        if (idx < rating) {
            btn.style.color = 'var(--accent)';
        } else {
            btn.style.color = 'var(--border-color)';
        }
    });
}

function submitParentNote(appId) {
    const parentName = document.getElementById(`parentName-${appId}`).value || 'Parent';
    const rating = parseInt(document.getElementById(`rating-${appId}`).value) || 3;
    const noteText = document.getElementById(`noteText-${appId}`).value;

    if (!noteText.trim()) {
        alert('Please share your experience!');
        return;
    }

    parentNotesSystem.addNote(appId, parentName, rating, noteText);
    closeAddNoteModal(appId);

    // Refresh the notes display
    const notesContainer = document.getElementById(`notes-${appId}`);
    if (notesContainer) {
        notesContainer.innerHTML = displayParentNotes(appId);
    }

    alert('✅ Thank you for sharing! Your experience helps other parents.');
}

// ===== CUSTOM APP CREATION =====

function showCustomAppForm() {
    const modal = document.createElement('div');
    modal.className = 'custom-app-modal';
    modal.innerHTML = `
        <div class="custom-app-modal-backdrop" onclick="closeCustomAppModal()"></div>

        <div class="custom-app-modal-content">
            <button class="custom-app-modal-close" onclick="closeCustomAppModal()">✕</button>

            <h2 style="color: var(--primary); margin-top: 0;">Add a New App</h2>
            <p style="color: var(--text-gray);">Is this app already in our database? Try searching first. If it exists, click it and add your experience below.</p>

            <form onsubmit="submitCustomApp(); return false;">
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        App Name *
                    </label>
                    <input type="text" id="customAppName" placeholder="e.g., [NewApp]" required style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                    <small id="dupCheck" style="display: block; margin-top: 0.5rem; color: var(--text-gray);"></small>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Category
                    </label>
                    <select id="customAppCategory" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                        <option>Social Media</option>
                        <option>Gaming</option>
                        <option>Messaging</option>
                        <option>Video</option>
                        <option>Creative</option>
                        <option>Educational</option>
                        <option>Tools</option>
                        <option>Other</option>
                    </select>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        What's concerning about this app? *
                    </label>
                    <textarea id="customAppNotes" placeholder="E.g., Chat with strangers, allows YouTube access, lots of in-app purchases, addictive..." required style="width: 100%; min-height: 120px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit;"></textarea>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%;" id="submitBtn">
                    Add This App
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('open'), 10);

    // Check for duplicates as user types
    document.getElementById('customAppName').addEventListener('input', function(e) {
        const input = e.target.value.toLowerCase().trim();
        const dupCheck = document.getElementById('dupCheck');
        const submitBtn = document.getElementById('submitBtn');

        if (input.length > 0) {
            const exists = appsCompleteV2.find(a => a.name.toLowerCase() === input);
            if (exists) {
                dupCheck.innerHTML = `✓ "${exists.name}" is already in our database! <a href="/app-check" onclick="closeCustomAppModal()">Click here to search for it</a> and add your experience.`;
                dupCheck.style.color = '#4ECDC4';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.5';
            } else {
                dupCheck.innerHTML = '';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }
        }
    });
}

function closeCustomAppModal() {
    const modal = document.querySelector('.custom-app-modal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => modal.remove(), 300);
    }
}

function submitCustomApp() {
    const name = document.getElementById('customAppName').value;
    const category = document.getElementById('customAppCategory').value;
    const notes = document.getElementById('customAppNotes').value;

    const customApp = customAppsSystem.createCustomApp(name, category, notes);
    closeCustomAppModal();

    alert(`✅ ${name} added! We'll research it and add it to our database.`);
}

// ===== UTILITY =====

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ===== SUGGEST AN APP TO DIGITALCAP =====

function suggestAppToDigitalCap() {
    const modal = document.createElement('div');
    modal.className = 'suggest-app-modal';
    modal.innerHTML = `
        <div class="suggest-app-modal-backdrop" onclick="closeSuggestAppModal()"></div>

        <div class="suggest-app-modal-content">
            <button class="suggest-app-modal-close" onclick="closeSuggestAppModal()">✕</button>

            <h2 style="color: var(--primary); margin-top: 0;">Suggest an App to DigitalCap</h2>
            <p style="color: var(--text-gray);">Help us know about apps parents are asking about. Your suggestion will be reviewed by our team.</p>

            <div style="background: rgba(255, 107, 107, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid var(--primary);">
                <p style="margin: 0; color: var(--text-dark); font-size: 0.9rem;">
                    <strong>⚠️ Important:</strong> Please do not include names, usernames, schools, or other identifying information.
                </p>
            </div>

            <form onsubmit="submitAppSuggestion(); return false;">
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        App Name *
                    </label>
                    <input type="text" id="suggestAppName" placeholder="e.g., BeReal, Threads" required maxlength="100" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-size: 1rem;">
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 100 characters</small>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Website / Store Link
                    </label>
                    <input type="text" id="suggestAppUrl" placeholder="example.com or https://example.com" maxlength="500" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-size: 1rem;">
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Optional • Max 500 characters</small>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Why should DigitalCap cover it? *
                    </label>
                    <textarea id="suggestAppWhy" placeholder="What should parents know about this app?" required maxlength="500" style="width: 100%; min-height: 120px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; font-size: 1rem; resize: vertical;"></textarea>
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 500 characters</small>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Anything else parents should know?
                    </label>
                    <textarea id="suggestAppNotes" placeholder="Optional additional context..." maxlength="1000" style="width: 100%; min-height: 100px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; font-size: 1rem; resize: vertical;"></textarea>
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 1000 characters</small>
                </div>

                <!-- Honeypot: hidden field that should stay empty -->
                <input type="text" id="suggestAppHoneypot" style="display: none; position: absolute; left: -9999px;">

                <button type="submit" class="btn btn-primary" style="width: 100%;" id="suggestSubmitBtn">
                    Submit Suggestion for Review
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeSuggestAppModal() {
    const modal = document.querySelector('.suggest-app-modal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => modal.remove(), 300);
    }
}

function submitAppSuggestion() {
    const honeypot = document.getElementById('suggestAppHoneypot').value;

    // Honeypot validation: should be empty
    if (honeypot.length > 0) {
        console.warn('Honeypot field filled - possible spam');
        return;
    }

    const appName = document.getElementById('suggestAppName').value.trim();
    let appUrl = document.getElementById('suggestAppUrl').value.trim();
    const whyWeShould = document.getElementById('suggestAppWhy').value.trim();
    const additionalNotes = document.getElementById('suggestAppNotes').value.trim();

    // Normalize and validate URL if provided
    if (appUrl) {
        // Add https:// if no scheme is present
        if (!/^https?:\/\//i.test(appUrl)) {
            appUrl = 'https://' + appUrl;
        }

        // Validate URL structure using browser URL API
        try {
            const parsed = new URL(appUrl);

            if (!['http:', 'https:'].includes(parsed.protocol)) {
                throw new Error('Invalid protocol');
            }

            if (!parsed.hostname || !parsed.hostname.includes('.')) {
                throw new Error('Invalid hostname');
            }
        } catch {
            alert('Please enter a valid website or app store link, or leave this field blank.');
            return;
        }
    }

    // Validation
    if (!appName || !whyWeShould) {
        alert('Please fill in required fields.');
        return;
    }

    if (appName.length > 100 || whyWeShould.length > 500 || additionalNotes.length > 1000) {
        alert('Please stay within character limits.');
        return;
    }

    // Disable button and show loading
    const submitBtn = document.getElementById('suggestSubmitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    // Call Firebase submission function
    submitAppSuggestionToFirestore({
        appName,
        appUrl: appUrl || undefined,
        whyWeShould,
        additionalNotes: additionalNotes || undefined
    }).then(() => {
        alert('✅ Thank you! We\'ll review your suggestion.');
        closeSuggestAppModal();
    }).catch((error) => {
        console.error('Submission error:', error);
        alert('❌ Failed to submit. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Suggestion for Review';
    });
}

// ===== GENERALIZED FEEDBACK SYSTEM =====

/**
 * Open the Help Improve DigitalCap feedback modal
 * @param {Object} context - Optional context object with app/page info
 * @param {string} context.submissionType - Pre-select submission type
 * @param {string} context.appName - Pre-populate app name for corrections
 * @param {string} context.appId - Store related app ID
 * @param {string} context.sourcePage - Current page/section
 */
function openHelpImproveFeedback(context = {}) {
    const preSelectedType = context.submissionType || 'other';
    const prefilledAppName = context.appName || '';

    const modal = document.createElement('div');
    modal.className = 'help-improve-modal';
    modal.id = 'helpImproveModal';
    modal.innerHTML = `
        <div class="help-improve-modal-backdrop" onclick="closeHelpImproveFeedback()"></div>

        <div class="help-improve-modal-content">
            <button class="help-improve-modal-close" onclick="closeHelpImproveFeedback()">✕</button>

            <h2 style="color: var(--primary); margin-top: 0;">Help Improve DigitalCap</h2>
            <p style="color: var(--text-gray);">We value your feedback. Let us know how we can do better.</p>

            <form onsubmit="submitHelpImproveFeedback(); return false;">
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        What would you like to tell us? *
                    </label>
                    <select id="feedbackType" onchange="updateFeedbackForm('${prefilledAppName}', '${context.appId || ''}')" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; background: var(--bg-white); color: var(--text-dark); font-size: 1rem; cursor: pointer;">
                        <option value="app_suggestion">Suggest an app</option>
                        <option value="app_correction">Correct information about an app</option>
                        <option value="resource_suggestion">Suggest a resource</option>
                        <option value="website_problem">Report a website problem</option>
                        <option value="improvement">Suggest an improvement</option>
                        <option value="other">Other feedback</option>
                    </select>
                </div>

                <div id="dynamicFields" style="margin-bottom: 1.5rem;"></div>

                <div style="background: rgba(78, 205, 196, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
                    <p style="margin: 0; color: var(--text-gray); font-size: 0.9rem;">
                        <strong>📋 Optional:</strong> Include your name and email if you'd like us to follow up.
                    </p>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Name
                    </label>
                    <input type="text" id="feedbackName" placeholder="Optional" maxlength="100" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Email
                    </label>
                    <input type="email" id="feedbackEmail" placeholder="Optional" maxlength="100" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>

                <!-- Honeypot -->
                <input type="text" id="feedbackHoneypot" style="display: none; position: absolute; left: -9999px;">

                <button type="submit" class="btn btn-primary" style="width: 100%;" id="feedbackSubmitBtn">
                    Send Feedback
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('open'), 10);

    // Set initial form based on pre-selected type
    document.getElementById('feedbackType').value = preSelectedType;
    updateFeedbackForm(prefilledAppName, context.appId || '');

    // Store context for submission
    window.feedbackContext = context;
}

function closeHelpImproveFeedback() {
    const modal = document.getElementById('helpImproveModal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => modal.remove(), 300);
    }
    window.feedbackContext = {};
}

function updateFeedbackForm(prefilledAppName, appId) {
    const type = document.getElementById('feedbackType').value;
    const fieldsContainer = document.getElementById('dynamicFields');

    // Store context for later
    if (!window.feedbackContext) window.feedbackContext = {};
    window.feedbackContext.submissionType = type;
    if (appId) window.feedbackContext.appId = appId;

    let fieldsHtml = '';

    switch(type) {
        case 'app_suggestion':
            fieldsHtml = `
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        App Name *
                    </label>
                    <input type="text" id="appNameField" placeholder="e.g., BeReal, Threads" required maxlength="100" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        App or Store Link
                    </label>
                    <input type="text" id="appUrlField" placeholder="Optional" maxlength="500" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Why should DigitalCap review it? *
                    </label>
                    <textarea id="messageField" placeholder="What should parents know about this app?" required maxlength="500" style="width: 100%; min-height: 120px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 500 characters</small>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Additional information
                    </label>
                    <textarea id="additionalField" placeholder="Optional" maxlength="1000" style="width: 100%; min-height: 80px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 1000 characters</small>
                </div>
            `;
            break;

        case 'app_correction':
            fieldsHtml = `
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        App Name *
                    </label>
                    <input type="text" id="appNameField" placeholder="App name" required maxlength="100" value="${prefilledAppName}" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        What information appears outdated or incorrect? *
                    </label>
                    <textarea id="messageField" placeholder="Be specific about what seems wrong" required maxlength="500" style="width: 100%; min-height: 120px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 500 characters</small>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        What do you believe the correct information is?
                    </label>
                    <textarea id="correctionField" placeholder="Optional" maxlength="500" style="width: 100%; min-height: 100px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 500 characters</small>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Source or link supporting the correction
                    </label>
                    <input type="text" id="sourceUrlField" placeholder="Optional" maxlength="500" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>
            `;
            break;

        case 'resource_suggestion':
            fieldsHtml = `
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Resource Name *
                    </label>
                    <input type="text" id="appNameField" placeholder="e.g., Digital Wellness Guide" required maxlength="100" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Resource Link
                    </label>
                    <input type="text" id="appUrlField" placeholder="Optional" maxlength="500" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Why would this help families? *
                    </label>
                    <textarea id="messageField" placeholder="What makes this resource valuable?" required maxlength="500" style="width: 100%; min-height: 120px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 500 characters</small>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Additional information
                    </label>
                    <textarea id="additionalField" placeholder="Optional" maxlength="1000" style="width: 100%; min-height: 80px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                </div>
            `;
            break;

        case 'website_problem':
            fieldsHtml = `
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        What went wrong? *
                    </label>
                    <textarea id="messageField" placeholder="e.g., Link is broken, page doesn't load on mobile, spelling error..." required maxlength="500" style="width: 100%; min-height: 120px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 500 characters</small>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Page where it happened
                    </label>
                    <input type="text" id="sourceUrlField" placeholder="e.g., App Directory, Safety page" maxlength="200" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Additional information
                    </label>
                    <textarea id="additionalField" placeholder="Optional" maxlength="1000" style="width: 100%; min-height: 80px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                </div>
            `;
            break;

        case 'improvement':
            fieldsHtml = `
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        What would you like DigitalCap to improve or add? *
                    </label>
                    <textarea id="messageField" placeholder="e.g., Add a guide for TikTok safety, Create a newsletter..." required maxlength="500" style="width: 100%; min-height: 120px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 500 characters</small>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Additional information
                    </label>
                    <textarea id="additionalField" placeholder="Optional" maxlength="1000" style="width: 100%; min-height: 80px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                </div>
            `;
            break;

        case 'other':
        default:
            fieldsHtml = `
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Your message *
                    </label>
                    <textarea id="messageField" placeholder="Tell us what's on your mind..." required maxlength="1000" style="width: 100%; min-height: 120px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                    <small style="display: block; margin-top: 0.5rem; color: var(--text-gray);">Max 1000 characters</small>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Additional information
                    </label>
                    <textarea id="additionalField" placeholder="Optional" maxlength="1000" style="width: 100%; min-height: 80px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit; resize: vertical;"></textarea>
                </div>
            `;
            break;
    }

    fieldsContainer.innerHTML = fieldsHtml;
}

async function submitHelpImproveFeedback() {
    const honeypot = document.getElementById('feedbackHoneypot').value;
    if (honeypot.length > 0) {
        console.warn('Honeypot filled - possible spam');
        return;
    }

    const type = document.getElementById('feedbackType').value;
    const submitBtn = document.getElementById('feedbackSubmitBtn');

    // Collect common fields
    const name = document.getElementById('feedbackName').value.trim() || undefined;
    const email = document.getElementById('feedbackEmail').value.trim() || undefined;
    const additional = document.getElementById('additionalField')?.value.trim() || undefined;

    let submission = {
        submissionType: type,
        message: document.getElementById('messageField')?.value.trim() || '',
        status: 'pending',
        createdAt: new Date()
    };

    // Add optional contact info
    if (name) submission.submitterName = name;
    if (email) submission.email = email;
    if (additional) submission.additionalNotes = additional;

    // Add context if available
    if (window.feedbackContext) {
        if (window.feedbackContext.sourcePage) submission.sourcePage = window.feedbackContext.sourcePage;
        if (window.feedbackContext.sourceUrl) submission.sourceUrl = window.feedbackContext.sourceUrl;
        if (window.feedbackContext.appId) submission.relatedAppId = window.feedbackContext.appId;
    }

    // Type-specific fields
    switch(type) {
        case 'app_suggestion':
            submission.appName = document.getElementById('appNameField').value.trim();
            const url = document.getElementById('appUrlField').value.trim();
            if (url) {
                if (!/^https?:\/\//i.test(url)) {
                    submission.appUrl = 'https://' + url;
                } else {
                    submission.appUrl = url;
                }
            }
            if (!submission.appName) {
                alert('Please enter an app name.');
                return;
            }
            break;

        case 'app_correction':
            submission.appName = document.getElementById('appNameField').value.trim();
            const suggestion = document.getElementById('correctionField').value.trim();
            if (suggestion) submission.suggestedCorrection = suggestion;
            const corrSource = document.getElementById('sourceUrlField').value.trim();
            if (corrSource) submission.sourceUrl = corrSource;
            if (!submission.appName) {
                alert('Please enter an app name.');
                return;
            }
            break;

        case 'resource_suggestion':
            submission.resourceName = document.getElementById('appNameField').value.trim();
            const resUrl = document.getElementById('appUrlField').value.trim();
            if (resUrl) {
                if (!/^https?:\/\//i.test(resUrl)) {
                    submission.resourceUrl = 'https://' + resUrl;
                } else {
                    submission.resourceUrl = resUrl;
                }
            }
            if (!submission.resourceName) {
                alert('Please enter a resource name.');
                return;
            }
            break;

        case 'website_problem':
            const pageName = document.getElementById('sourceUrlField').value.trim();
            if (pageName) submission.sourcePage = pageName;
            break;
    }

    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Get Firebase function
    if (!window.submitAppSuggestionToFirestore) {
        alert('❌ Firebase not ready. Please refresh the page.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Feedback';
        return;
    }

    try {
        await window.submitAppSuggestionToFirestore(submission);
        alert('✅ Thank you! We\'ve received your feedback and will review it.');
        closeHelpImproveFeedback();
    } catch (error) {
        console.error('Submission error:', error);
        alert('❌ Failed to send feedback. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Feedback';
    }
}

// ===== STYLES =====

const feedbackStyles = document.createElement('style');
feedbackStyles.textContent = `
    .add-note-modal,
    .custom-app-modal,
    .suggest-app-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .add-note-modal.open,
    .custom-app-modal.open,
    .suggest-app-modal.open {
        opacity: 1;
    }

    .add-note-modal-backdrop,
    .custom-app-modal-backdrop,
    .suggest-app-modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }

    .add-note-modal-content,
    .custom-app-modal-content,
    .suggest-app-modal-content {
        background: var(--bg-white);
        border-radius: 16px;
        padding: 2.5rem;
        max-width: 600px;
        width: 90%;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
        max-height: 90vh;
        overflow-y: auto;
    }

    .add-note-modal-close,
    .custom-app-modal-close,
    .suggest-app-modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text-gray);
        transition: all 0.3s ease;
    }

    .add-note-modal-close:hover,
    .custom-app-modal-close:hover,
    .suggest-app-modal-close:hover {
        color: var(--primary);
        transform: scale(1.2);
    }

    .rating-btn {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--border-color);
        transition: color 0.3s ease;
        font-size: 1.5rem;
        padding: 0;
    }

    .help-improve-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .help-improve-modal.open {
        opacity: 1;
    }

    .help-improve-modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }

    .help-improve-modal-content {
        background: var(--bg-white);
        border-radius: 16px;
        padding: 2.5rem;
        max-width: 600px;
        width: 90%;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
        max-height: 90vh;
        overflow-y: auto;
    }

    .help-improve-modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text-gray);
        transition: all 0.3s ease;
    }

    .help-improve-modal-close:hover {
        color: var(--primary);
        transform: scale(1.2);
    }

    @media (max-width: 768px) {
        .add-note-modal-content,
        .custom-app-modal-content,
        .suggest-app-modal-content {
            padding: 1.5rem;
            width: 95%;
        }
    }
`;

document.head.appendChild(feedbackStyles);
