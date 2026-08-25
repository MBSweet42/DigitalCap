// App Directory v2 - Simple and Functional

let allApps = [];
let expandedAppId = null;
let appDiscussions = {};
let currentAgeFilter = 'all';

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    initializeAppDirectory();
    loadDiscussions();
    setupEventListeners();
});

function initializeAppDirectory() {
    // Load parent notes
    if (typeof parentNotesSystem !== 'undefined') {
        parentNotesSystem.loadFromLocalStorage();
    }
    if (typeof customAppsSystem !== 'undefined') {
        customAppsSystem.loadFromLocalStorage();
    }

    // Load apps - with better error handling
    if (typeof appsCompleteV2 === 'undefined' || !Array.isArray(appsCompleteV2)) {
        console.error('ERROR: appsCompleteV2 not loaded or not an array', typeof appsCompleteV2);
        console.error('Available globals:', Object.keys(window).filter(k => k.includes('app') || k.includes('app')));
        document.getElementById('appsContainer').innerHTML = '<p style="color: red; padding: 2rem;">⚠️ App data failed to load. Try refreshing the page. If problem persists, make sure you\'re using a web server (not opening file:// locally).</p>';
        return;
    }

    if (!appsCompleteV2 || appsCompleteV2.length === 0) {
        console.error('ERROR: appsCompleteV2 is empty');
        return;
    }

    console.log('✅ Apps loaded successfully:', appsCompleteV2.length, 'apps');
    allApps = [...appsCompleteV2];

    // Add custom apps (avoid duplicates)
    if (typeof customAppsSystem !== 'undefined' && customAppsSystem.apps) {
        Object.values(customAppsSystem.apps).forEach(customApp => {
            const isDuplicate = allApps.some(app =>
                app.name.toLowerCase() === customApp.name.toLowerCase()
            );
            if (!isDuplicate) {
                allApps.push(customApp);
            }
        });
    }

    // Render initial list
    renderAppsList(allApps);
}

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('appSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            applyFilters();
        });
    }

    // Delegate click events for expand/collapse
    const container = document.getElementById('appsContainer');
    if (container) {
        container.addEventListener('click', function(e) {
            const card = e.target.closest('[data-app-id]');
            if (card) {
                const appId = card.getAttribute('data-app-id');
                toggleAppExpand(appId);
            }
        });
    }
}

function filterByAge(ageGroup) {
    currentAgeFilter = ageGroup;

    // Update button styles
    document.querySelectorAll('.age-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-age') === ageGroup) {
            btn.style.background = 'var(--primary)';
            btn.style.color = 'white';
        } else {
            btn.style.background = 'var(--border-color)';
            btn.style.color = 'var(--text-dark)';
        }
    });

    applyFilters();
}

function applyFilters() {
    const searchInput = document.getElementById('appSearch');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    let filtered = allApps;

    // Apply search filter
    if (query.length > 0) {
        filtered = filtered.filter(app =>
            app.name.toLowerCase().includes(query) ||
            app.category.toLowerCase().includes(query)
        );
    }

    // Apply age filter
    if (currentAgeFilter !== 'all') {
        filtered = filtered.filter(app => {
            const ageRec = app.ageRecommendation || 0;

            if (currentAgeFilter === '6-8') return ageRec <= 8;
            if (currentAgeFilter === '9-12') return ageRec <= 12;
            if (currentAgeFilter === '13-15') return ageRec <= 15;
            if (currentAgeFilter === '16+') return ageRec >= 16 || ageRec === 0; // 0 = all ages

            return true;
        });
    }

    renderAppsList(filtered);
}

function renderAppsList(apps) {
    const container = document.getElementById('appsContainer');
    if (!container) return;

    if (!apps || apps.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem; color: var(--text-gray);"><p>No apps found.</p><button class="btn btn-secondary" onclick="showCustomAppForm()">Add one</button></div>';
        return;
    }

    let html = '';
    apps.forEach(app => {
        const isExpanded = expandedAppId === String(app.id);
        html += renderAppCard(app, isExpanded);
    });

    container.innerHTML = html;
}

function renderAppCard(app, isExpanded) {
    const safetyColor = getSafetyColor(app.safetyRating);
    const safetyBg = getSafetyBg(app.safetyRating);

    let card = `
        <div class="app-card" data-app-id="${String(app.id)}" style="background: var(--bg-white); border: 2px solid var(--border-color); border-radius: 12px; padding: 1.5rem; cursor: pointer; transition: all 0.2s ease;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="flex: 1;">
                    <h3 style="margin: 0 0 0.5rem 0; color: var(--text-dark);">${app.name}</h3>
                    <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                        <span style="background: ${safetyBg}; color: ${safetyColor}; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
                            ${app.safetyLabel}
                        </span>
                        <span style="color: var(--text-gray); font-size: 0.9rem;">${app.category}</span>
                    </div>
                </div>
                <div style="text-align: right; margin-left: 1rem; white-space: nowrap; font-size: 0.85rem; color: var(--secondary); font-weight: 600;">
                    ${isExpanded ? '▼ Hide' : '▶ Show Details'}
                </div>
            </div>
            <p style="margin: 0.75rem 0 0 0; color: var(--text-gray); font-size: 0.95rem;">${app.description}</p>
    `;

    // Add red flags preview on collapsed view
    if (!isExpanded && app.hiddenDangers && app.hiddenDangers.length > 0) {
        card += `<div style="margin-top: 1rem; padding: 0.75rem; background: rgba(231, 76, 60, 0.05); border-left: 3px solid var(--danger); border-radius: 4px;">
            <p style="margin: 0; color: var(--danger); font-size: 0.85rem; font-weight: 600;">⚠️ Watch For:</p>
            <p style="margin: 0.25rem 0 0 0; color: var(--text-gray); font-size: 0.8rem;">${app.hiddenDangers.slice(0, 2).join(' • ')}</p>
        </div>`;
    }

    // Show age recommendation on card
    card += `<div style="margin-top: 0.75rem; padding: 0.5rem 0.75rem; background: var(--bg-light); border-radius: 6px; font-size: 0.8rem; color: var(--text-gray);">
        📍 Recommended Age: ${app.ageRecommendation === 0 ? 'Parental Awareness' : app.ageRecommendation + '+'}
    </div>`;


    if (isExpanded) {
        card += renderAppDetails(app);
    }

    card += `</div>`;
    return card;
}

function toggleAppExpand(appId) {
    expandedAppId = expandedAppId === String(appId) ? null : String(appId);

    // Re-render with current search filter
    const searchInput = document.getElementById('appSearch');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let filtered = allApps;

    if (query.length > 0) {
        filtered = allApps.filter(app =>
            app.name.toLowerCase().includes(query) ||
            app.category.toLowerCase().includes(query)
        );
    }

    renderAppsList(filtered);
}

function renderAppDetails(app) {
    let details = `<div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid var(--border-color);">`;

    // SECTION 1: What It Is (2-sentence summary + Quick Facts)
    details += `
        <div style="margin-bottom: 2rem;">
            <h4 style="color: var(--primary); margin: 0 0 0.75rem 0; font-size: 1.1rem;">What It Is</h4>
            <p style="margin: 0 0 1rem 0; color: var(--text-gray); line-height: 1.6;">${app.description}</p>
            <div style="background: var(--bg-light); padding: 1rem; border-radius: 8px; border-left: 3px solid var(--secondary);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem; font-size: 0.85rem;">
                    <div><strong>Chat:</strong> <span style="color: var(--text-gray);">${app.hasChat ? '✓ Yes' : '✗ No'}</span></div>
                    <div><strong>Web Access:</strong> <span style="color: var(--text-gray);">${app.hasOpenInternet ? '✓ Yes' : '✗ No'}</span></div>
                    <div><strong>Location:</strong> <span style="color: var(--text-gray);">${app.hasLocationTracking ? '✓ Yes' : '✗ No'}</span></div>
                </div>
            </div>
        </div>
    `;

    // SECTION 2: Real-World Risks (3-5 bullets)
    if (app.hiddenDangers && app.hiddenDangers.length > 0) {
        details += `
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin: 0 0 0.75rem 0; font-size: 1.1rem;">🚩 Real-World Risks</h4>
                <ul style="margin: 0; padding-left: 1.5rem; color: var(--text-gray);">
        `;
        app.hiddenDangers.slice(0, 5).forEach(danger => {
            details += `<li style="margin-bottom: 0.5rem; line-height: 1.5;">${danger}</li>`;
        });
        details += `</ul></div>`;
    }

    // SECTION 3: Must-Change Settings (step-by-step)
    if (app.parentConcerns && app.parentConcerns.mentalHealth) {
        details += `
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin: 0 0 0.75rem 0; font-size: 1.1rem;">⚙️ Must-Change Settings</h4>
                <div style="background: rgba(255, 107, 107, 0.05); padding: 1.25rem; border-radius: 8px; border-left: 3px solid var(--primary);">
        `;

        if (app.id === 1) { // TikTok
            details += `
                <ol style="margin: 0; padding-left: 1.5rem; color: var(--text-gray); font-size: 0.95rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Restrict DMs:</strong> Settings → Privacy → Direct Messages → "Friends Only"</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Disable Duets/Stitches:</strong> Settings → Privacy → Duet & Stitch → "Only Me"</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Hide Location:</strong> Settings → Privacy → Who Can Find You → disable "Personalized Ads"</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Set Screen Time Limit:</strong> Settings → Digital Wellbeing → Set 60-90 minute limit</li>
                    <li><strong>Review FYP Weekly:</strong> Ask to see their "For You Page" regularly</li>
                </ol>
            `;
        } else if (app.id === 2) { // Snapchat
            details += `
                <ol style="margin: 0; padding-left: 1.5rem; color: var(--text-gray); font-size: 0.95rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Disable Snap Map:</strong> Settings → Snap Map → "Ghost Mode" (completely hidden)</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Restrict Friend Additions:</strong> Settings → Privacy → Contact Me → "Friends Only"</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Turn Off Location Services:</strong> System Settings → Snapchat → Location → "Never"</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Review Friends List:</strong> Remove anyone they don't personally know</li>
                    <li><strong>Screenshot Alerts:</strong> Understand Snapchat's screenshot notifications (limited protection)</li>
                </ol>
            `;
        } else {
            details += `
                <p style="margin: 0; color: var(--text-gray);">
                    <strong>Privacy First:</strong> Review app Settings → Privacy controls. Look for options to restrict who can message, view location, or access camera/microphone. Disable features not actively used.
                </p>
            `;
        }

        details += `</div></div>`;
    }

    // SECTION 4: Parent Conversation Guide
    if (app.parentConversationGuide) {
        const guide = app.parentConversationGuide;

        // Determine which opener to use and build sections
        const opener = guide.scriptOpener || guide.startWith;
        const showAskThis = guide.startWith && guide.scriptOpener && guide.startWith !== guide.scriptOpener;

        details += `
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin: 0 0 0.75rem 0; font-size: 1.1rem;">💬 Start the Conversation</h4>
                <div style="background: rgba(78, 205, 196, 0.05); padding: 1.25rem; border-radius: 8px; border-left: 3px solid var(--secondary); margin-bottom: 1.5rem;">
                    <p style="margin: 0; color: var(--text-dark); font-style: italic; line-height: 1.6;">"${escapeHtml(opener)}"</p>
                </div>
        `;

        // Section 2: Ask This (only if startWith differs from opener)
        if (showAskThis) {
            details += `
                <h4 style="color: var(--primary); margin: 0 0 0.75rem 0; font-size: 1.1rem;">❓ Ask This</h4>
                <div style="background: rgba(78, 205, 196, 0.05); padding: 1.25rem; border-radius: 8px; border-left: 3px solid var(--secondary); margin-bottom: 1.5rem;">
                    <p style="margin: 0; color: var(--text-dark); font-style: italic; line-height: 1.6;">"${escapeHtml(guide.startWith)}"</p>
                </div>
            `;
        }

        // Section 3: Things to Talk About
        if (guide.keyPoints && guide.keyPoints.length > 0) {
            details += `
                <h4 style="color: var(--primary); margin: 0 0 0.75rem 0; font-size: 1.1rem;">💡 Things to Talk About</h4>
                <ul style="margin: 0 0 1.5rem 0; padding-left: 1.5rem; color: var(--text-gray);">
            `;
            guide.keyPoints.forEach(point => {
                details += `<li style="margin-bottom: 0.5rem; line-height: 1.5;">${escapeHtml(point)}</li>`;
            });
            details += `</ul>`;
        }

        // Section 4: Watch For
        if (guide.redFlags && guide.redFlags.length > 0) {
            details += `
                <h4 style="color: var(--primary); margin: 0 0 0.75rem 0; font-size: 1.1rem;">🚩 Watch For</h4>
                <ul style="margin: 0 0 1.5rem 0; padding-left: 1.5rem; color: var(--text-gray);">
            `;
            guide.redFlags.forEach(flag => {
                details += `<li style="margin-bottom: 0.5rem; line-height: 1.5;">${escapeHtml(flag)}</li>`;
            });
            details += `</ul>`;
        }

        // Section 5: Parent Tips
        if (app.tipsForParents && app.tipsForParents.length > 0) {
            details += `
                <h4 style="color: var(--primary); margin: 0 0 0.75rem 0; font-size: 1.1rem;">🛠️ Parent Tips</h4>
                <ul style="margin: 0 0 1.5rem 0; padding-left: 1.5rem; color: var(--text-gray);">
            `;
            app.tipsForParents.forEach(tip => {
                details += `<li style="margin-bottom: 0.5rem; line-height: 1.5;">${escapeHtml(tip)}</li>`;
            });
            details += `</ul>`;
        }

        details += `</div>`;
    }

    // Parent Notes (below main 5 sections)
    details += `<div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">`;
    details += `<h4 style="color: var(--primary); margin: 0 0 1rem 0; font-size: 1rem;">Parent Experiences</h4>`;
    details += renderParentNotes(app);
    details += `</div>`;

    // Discussion/Comments
    details += `<div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">`;
    details += `<h4 style="color: var(--primary); margin: 0 0 1rem 0; font-size: 1rem;">Questions & Discussions</h4>`;
    details += renderDiscussionSection(app);
    details += `</div>`;

    details += `</div>`;
    return details;
}

function renderParentNotes(app) {
    const notes = parentNotesSystem ? parentNotesSystem.getNotes(app.id) : [];
    const avgRating = parentNotesSystem ? parentNotesSystem.getAverageParentRating(app.id) : null;

    let html = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <strong style="color: var(--primary);">Parent Experiences</strong>
            <button class="btn btn-secondary" onclick="openAddNoteModal('${app.id}')" style="padding: 0.5rem 1rem; font-size: 0.9rem;">+ Add Note</button>
        </div>
    `;

    if (notes.length > 0 && avgRating) {
        html += `
            <div style="margin-bottom: 1rem; padding: 1rem; background: var(--bg-light); border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <strong>${avgRating} / 5.0</strong>
                    <span style="color: var(--accent);">${'★'.repeat(Math.round(avgRating))}<span style="color: var(--border-color);">${'★'.repeat(5 - Math.round(avgRating))}</span></span>
                    <span style="color: var(--text-gray); font-size: 0.85rem;">${notes.length} parent${notes.length === 1 ? '' : 's'}</span>
                </div>
            </div>
        `;

        notes.forEach(note => {
            const date = new Date(note.timestamp).toLocaleDateString();
            html += `
                <div style="background: var(--bg-light); padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem; border-left: 4px solid var(--secondary);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; font-size: 0.85rem;">
                        <span><strong>${note.parentInitials}</strong> • ${date}</span>
                        <span style="color: var(--accent);">${'★'.repeat(note.rating)}</span>
                    </div>
                    <p style="margin: 0; color: var(--text-gray); font-size: 0.9rem;">${escapeHtml(note.text)}</p>
                </div>
            `;
        });
    } else {
        html += `<p style="color: var(--text-gray); font-style: italic; font-size: 0.9rem;">No experiences shared yet. Be the first!</p>`;
    }

    return html;
}

function renderDiscussionSection(app) {
    const discussions = getAppDiscussions(app.id);

    let html = `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <strong style="color: var(--primary);">💬 Questions & Discussions</strong>
                <button class="btn btn-secondary" onclick="openDiscussionModal('${app.id}')" style="padding: 0.5rem 1rem; font-size: 0.9rem;">+ Add Comment</button>
            </div>

            <p style="color: var(--text-gray); font-size: 0.9rem; margin-bottom: 1rem;">Share additional dangers, questions, solutions, or experiences not covered above.</p>
    `;

    if (discussions && discussions.length > 0) {
        discussions.forEach(discussion => {
            const date = new Date(discussion.timestamp).toLocaleDateString();
            html += `
                <div style="background: linear-gradient(135deg, rgba(78, 205, 196, 0.05) 0%, rgba(78, 205, 196, 0.02) 100%); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border-left: 4px solid var(--secondary);">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                        <div>
                            <strong style="color: var(--secondary);">${discussion.title}</strong>
                            <p style="margin: 0.25rem 0 0 0; color: var(--text-gray); font-size: 0.85rem;">${discussion.authorInitials} • ${date}</p>
                        </div>
                    </div>
                    <p style="margin: 0.5rem 0 0 0; color: var(--text-dark); line-height: 1.6;">${escapeHtml(discussion.content)}</p>
                </div>
            `;
        });
    } else {
        html += `<p style="color: var(--text-gray); font-style: italic; font-size: 0.9rem;">No discussions yet. Start one!</p>`;
    }

    html += `</div>`;
    return html;
}

// ===== DISCUSSION SYSTEM =====

function loadDiscussions() {
    const stored = localStorage.getItem('appDiscussions');
    if (stored) {
        appDiscussions = JSON.parse(stored);
    }
}

function saveDiscussions() {
    localStorage.setItem('appDiscussions', JSON.stringify(appDiscussions));
}

function getAppDiscussions(appId) {
    return appDiscussions[String(appId)] || [];
}

function openDiscussionModal(appId) {
    const modal = document.createElement('div');
    modal.className = 'discussion-modal';
    modal.id = `discussion-modal-${appId}`;
    modal.innerHTML = `
        <div class="discussion-modal-backdrop" onclick="this.closest('.discussion-modal').remove()"></div>

        <div class="discussion-modal-content">
            <button class="discussion-modal-close" onclick="this.closest('.discussion-modal').remove()">✕</button>

            <h2 style="color: var(--primary); margin-top: 0;">Share Your Insight</h2>
            <p style="color: var(--text-gray); font-size: 0.9rem;">What should other parents know about this app?</p>

            <form onsubmit="submitDiscussion('${appId}'); return false;">
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Your Name/Initials (optional)
                    </label>
                    <input type="text" id="discussionAuthor-${appId}" maxlength="20" placeholder="e.g., Sarah M" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        Topic/Title *
                    </label>
                    <input type="text" id="discussionTitle-${appId}" placeholder="e.g., 'Hidden Discord server my kid found'" required style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px;">
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                        What do you want to share? *
                    </label>
                    <textarea id="discussionContent-${appId}" placeholder="Share what you've discovered, concerns, solutions, or questions..." required style="width: 100%; min-height: 150px; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit;"></textarea>
                </div>

                <div style="background: rgba(78, 205, 196, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
                    <p style="margin: 0; color: var(--text-gray); font-size: 0.9rem;">
                        <strong>Examples:</strong> Hidden dangers you discovered • Settings parents should change • What happened to your kid • Solutions that worked
                    </p>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%;">
                    Post Discussion
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('open'), 10);
}

function submitDiscussion(appId) {
    const author = document.getElementById(`discussionAuthor-${appId}`).value || 'Anon';
    const title = document.getElementById(`discussionTitle-${appId}`).value;
    const content = document.getElementById(`discussionContent-${appId}`).value;

    if (!title.trim() || !content.trim()) {
        alert('Please fill in all fields');
        return;
    }

    if (!appDiscussions[String(appId)]) {
        appDiscussions[String(appId)] = [];
    }

    appDiscussions[String(appId)].push({
        id: Date.now(),
        title: title,
        content: content,
        authorInitials: author.substring(0, 3).toUpperCase(),
        timestamp: new Date().toISOString()
    });

    saveDiscussions();

    document.getElementById(`discussion-modal-${appId}`).remove();
    toggleAppExpand(appId);
    toggleAppExpand(appId);

    alert('✅ Thank you for sharing! Your insight helps other parents.');
}

function getSafetyColor(rating) {
    if (rating <= 2) return '#FF6B6B';
    if (rating === 3) return '#FF8C42';
    if (rating === 4) return '#FFB703';
    return '#2EC4B6';
}

function getSafetyBg(rating) {
    if (rating <= 2) return 'rgba(255, 107, 107, 0.15)';
    if (rating === 3) return 'rgba(255, 140, 66, 0.15)';
    if (rating === 4) return 'rgba(255, 183, 3, 0.15)';
    return 'rgba(46, 196, 182, 0.15)';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== MODAL STYLES =====

const discussionStyles = document.createElement('style');
discussionStyles.textContent = `
    .discussion-modal {
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

    .discussion-modal.open {
        opacity: 1;
    }

    .discussion-modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
        cursor: pointer;
    }

    .discussion-modal-content {
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

    .discussion-modal-close {
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

    .discussion-modal-close:hover {
        color: var(--primary);
        transform: scale(1.2);
    }

    @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    @media (max-width: 768px) {
        .discussion-modal-content {
            padding: 1.5rem;
            width: 95%;
        }
    }
`;

document.head.appendChild(discussionStyles);
