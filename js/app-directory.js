// App Directory Search and Filter Logic

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const riskFilter = document.getElementById('riskFilter');
    const appsGrid = document.getElementById('appsGrid');
    const noResults = document.getElementById('noResults');

    // Populate category filter
    const categories = [...new Set(appsData.map(app => app.category))].sort();
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });

    // Render apps based on filters
    function renderApps() {
        let filtered = appsData;

        // Search filter
        if (searchInput.value) {
            const query = searchInput.value.toLowerCase();
            filtered = filtered.filter(app =>
                app.name.toLowerCase().includes(query) ||
                app.description.toLowerCase().includes(query)
            );
        }

        // Category filter
        if (categoryFilter.value) {
            filtered = filtered.filter(app => app.category === categoryFilter.value);
        }

        // Risk filter
        if (riskFilter.value === 'chat') {
            filtered = filtered.filter(app => app.hasChat);
        } else if (riskFilter.value === 'location') {
            filtered = filtered.filter(app => app.hasLocationTracking);
        } else if (riskFilter.value === 'internet') {
            filtered = filtered.filter(app => app.hasOpenInternet);
        }

        // Show/hide no results message
        if (filtered.length === 0) {
            appsGrid.innerHTML = '';
            noResults.classList.remove('hidden');
            return;
        }

        noResults.classList.add('hidden');

        // Render cards
        appsGrid.innerHTML = filtered.map(app => `
            <div class="app-card" onclick="viewAppDetail(${app.id})">
                <div class="app-header">
                    <div>
                        <strong>${app.name}</strong>
                        <div style="font-size: 0.9rem; color: var(--text-gray); margin-top: 0.25rem;">
                            Age ${app.ageRecommendation}+
                        </div>
                    </div>
                    <span class="badge">${app.category}</span>
                </div>
                <p>${app.description}</p>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.75rem;">
                    ${app.hasChat ? '<span style="font-size: 0.8rem; background: var(--warning); color: white; padding: 0.25rem 0.5rem; border-radius: 4px;">💬 Chat</span>' : ''}
                    ${app.hasLocationTracking ? '<span style="font-size: 0.8rem; background: var(--warning); color: white; padding: 0.25rem 0.5rem; border-radius: 4px;">📍 Location</span>' : ''}
                    ${app.hasOpenInternet ? '<span style="font-size: 0.8rem; background: var(--warning); color: white; padding: 0.25rem 0.5rem; border-radius: 4px;">🌐 Web Access</span>' : ''}
                </div>
                <div style="margin-top: 1rem; color: var(--text-gray); font-size: 0.9rem;">
                    Click to view full details →
                </div>
            </div>
        `).join('');
    }

    // Event listeners
    searchInput.addEventListener('keyup', renderApps);
    categoryFilter.addEventListener('change', renderApps);
    riskFilter.addEventListener('change', renderApps);

    // Initial render
    renderApps();
});

// View app details
function viewAppDetail(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    const detailHTML = `
        <h2>${app.name}</h2>

        <div class="detail-row">
            <div class="detail-label">Category</div>
            <div class="detail-value">${app.category}</div>
        </div>

        <div class="detail-row">
            <div class="detail-label">Recommended Age</div>
            <div class="detail-value">${app.ageRecommendation}+ years old</div>
        </div>

        <div class="detail-row">
            <div class="detail-label">What It Is</div>
            <div class="detail-value">${app.description}</div>
        </div>

        <div class="detail-row">
            <div class="detail-label">Chat & Messaging</div>
            <div class="detail-value">${app.hasChat ? `✅ Yes - ${app.chatDetails}` : '❌ No'}</div>
        </div>

        <div class="detail-row">
            <div class="detail-label">Open Internet Access</div>
            <div class="detail-value">${app.hasOpenInternet ? `✅ Yes - ${app.internetDetails}` : '❌ No'}</div>
        </div>

        <div class="detail-row">
            <div class="detail-label">Location Tracking</div>
            <div class="detail-value">${app.hasLocationTracking ? `⚠️ Yes - ${app.locationDetails}` : '❌ No'}</div>
        </div>

        <div class="detail-row">
            <div class="detail-label">Main Safety Risks</div>
            <div class="detail-value">
                <ul style="margin: 0.5rem 0 0 1.5rem;">
                    ${app.mainRisks.map(risk => `<li>${risk}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-label">Privacy & Data</div>
            <div class="detail-value">${app.privacyNotes}</div>
        </div>

        <div class="detail-row">
            <div class="detail-label">Tips for Parents</div>
            <div class="detail-value">
                <ul style="margin: 0.5rem 0 0 1.5rem;">
                    ${app.tipsForParents.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-label">Tips for Kids</div>
            <div class="detail-value">
                <ul style="margin: 0.5rem 0 0 1.5rem;">
                    ${app.tipsForKids.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-label">Information Sources</div>
            <div class="detail-value">${app.source}</div>
        </div>
    `;

    const modal = document.getElementById('appModal');
    document.getElementById('modalBody').innerHTML = detailHTML;
    modal.classList.remove('hidden');

    // Close modal
    modal.querySelector('.modal-close').addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}
