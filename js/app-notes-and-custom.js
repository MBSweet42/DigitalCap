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
                dupCheck.innerHTML = `✓ "${exists.name}" is already in our database! <a href="apps-v2.html" onclick="closeCustomAppModal()">Click here to search for it</a> and add your experience.`;
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

// ===== STYLES =====

const styles = document.createElement('style');
styles.textContent = `
    .add-note-modal,
    .custom-app-modal {
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
    .custom-app-modal.open {
        opacity: 1;
    }

    .add-note-modal-backdrop,
    .custom-app-modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }

    .add-note-modal-content,
    .custom-app-modal-content {
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
    .custom-app-modal-close {
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
    .custom-app-modal-close:hover {
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

    @media (max-width: 768px) {
        .add-note-modal-content,
        .custom-app-modal-content {
            padding: 1.5rem;
            width: 95%;
        }
    }
`;

document.head.appendChild(styles);
