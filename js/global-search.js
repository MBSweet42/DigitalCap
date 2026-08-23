// Global Site Search

let searchIndex = [];

document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
});

function initializeSearch() {
    // Build search index from available data
    buildSearchIndex();

    // Setup search input
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            performSearch(e.target.value);
        });

        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideSearchResults();
                this.value = '';
            }
        });
    }
}

function buildSearchIndex() {
    searchIndex = [];

    // Add apps if available
    if (typeof appsCompleteV2 !== 'undefined' && Array.isArray(appsCompleteV2)) {
        appsCompleteV2.forEach(app => {
            searchIndex.push({
                type: 'app',
                title: app.name,
                description: app.description,
                category: app.category,
                url: 'apps-v2.html',
                keywords: [app.name, app.category, ...(app.hiddenDangers || [])]
            });
        });
    }

    // Add safety articles
    const safetyArticles = [
        { title: 'Password Safety', url: 'safety.html', keywords: ['password', 'account', 'security', 'phishing'] },
        { title: 'Grooming & Predators', url: 'safety.html', keywords: ['grooming', 'predator', 'exploitation', 'safety'] },
        { title: 'Cyberbullying', url: 'safety.html', keywords: ['cyberbullying', 'bullying', 'harassment', 'mean'] },
        { title: 'Screen Time & Health', url: 'safety.html', keywords: ['screen time', 'health', 'sleep', 'addiction'] }
    ];
    safetyArticles.forEach(article => {
        searchIndex.push({
            type: 'article',
            title: '🔒 ' + article.title,
            description: 'Digital safety article',
            url: article.url,
            keywords: article.keywords
        });
    });

    // Add etiquette articles
    const etiquetteArticles = [
        { title: 'Online Respect & Netiquette', url: 'etiquette.html', keywords: ['respect', 'etiquette', 'kindness', 'online behavior'] },
        { title: 'Digital Footprint', url: 'etiquette.html', keywords: ['digital footprint', 'permanent record', 'posts'] },
        { title: 'Cyberbullying Prevention', url: 'etiquette.html', keywords: ['cyberbullying', 'prevention', 'response'] }
    ];
    etiquetteArticles.forEach(article => {
        searchIndex.push({
            type: 'article',
            title: '💬 ' + article.title,
            description: 'Digital etiquette article',
            url: article.url,
            keywords: article.keywords
        });
    });

    // Add resources
    const resources = [
        { title: 'Family Guides', url: 'resources.html', keywords: ['family', 'guides', 'age', 'resources'] },
        { title: 'Emergency Hotlines', url: 'hotlines.html', keywords: ['hotline', 'crisis', 'help', 'support', 'emergency'] },
        { title: 'Curated Expert Resources', url: 'resources-links.html', keywords: ['resources', 'expert', 'common sense media', 'research'] },
        { title: 'Gaming Safety', url: 'gaming-guide.html', keywords: ['gaming', 'fortnite', 'roblox', 'discord', 'xbox'] },
        { title: 'Teacher Lesson Plans', url: 'teachers.html', keywords: ['teacher', 'lesson', 'curriculum', 'classroom'] },
        { title: 'Interactive Tools', url: 'interactive.html', keywords: ['quiz', 'checklist', 'tool', 'parental controls'] }
    ];
    resources.forEach(resource => {
        searchIndex.push({
            type: 'resource',
            title: resource.title,
            description: 'Helpful resource',
            url: resource.url,
            keywords: resource.keywords
        });
    });
}

function performSearch(query) {
    if (query.trim().length === 0) {
        hideSearchResults();
        return;
    }

    const results = searchIndex.filter(item => {
        const queryLower = query.toLowerCase();
        const titleMatch = item.title.toLowerCase().includes(queryLower);
        const descMatch = item.description.toLowerCase().includes(queryLower);
        const keywordMatch = item.keywords && item.keywords.some(kw => kw.toLowerCase().includes(queryLower));

        return titleMatch || descMatch || keywordMatch;
    });

    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    let resultsHtml = document.getElementById('searchResults');

    if (!resultsHtml) {
        resultsHtml = document.createElement('div');
        resultsHtml.id = 'searchResults';
        resultsHtml.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-white);
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            z-index: 999;
            max-height: 400px;
            overflow-y: auto;
            margin-top: 0.5rem;
        `;
        const searchInput = document.getElementById('globalSearch');
        if (searchInput && searchInput.parentElement) {
            searchInput.parentElement.style.position = 'relative';
            searchInput.parentElement.appendChild(resultsHtml);
        } else {
            document.body.appendChild(resultsHtml);
        }
    }

    if (results.length === 0) {
        resultsHtml.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-gray);">No results found for "${escapeHtml(query)}"</div>`;
        resultsHtml.style.display = 'block';
        return;
    }

    // Group results by type
    const grouped = {};
    results.forEach(result => {
        if (!grouped[result.type]) grouped[result.type] = [];
        grouped[result.type].push(result);
    });

    let html = '<div style="padding: 1rem;">';
    const typeLabels = {
        app: '📱 Apps',
        article: '📖 Articles',
        resource: '📚 Resources'
    };

    Object.entries(grouped).forEach(([type, items]) => {
        html += `<h4 style="color: var(--primary); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">${typeLabels[type]}</h4>`;
        items.forEach(item => {
            html += `
                <a href="${item.url}" style="display: block; padding: 0.75rem; margin-bottom: 0.5rem; background: var(--bg-light); border-radius: 8px; text-decoration: none; color: var(--text-dark); transition: all 0.2s ease; border-left: 3px solid transparent;" onmouseover="this.style.borderLeftColor='var(--primary)'; this.style.background='rgba(255, 107, 107, 0.05)';" onmouseout="this.style.borderLeftColor='transparent'; this.style.background='var(--bg-light)';">
                    <strong style="color: var(--primary);">${item.title}</strong>
                    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: var(--text-gray);">${item.description}</p>
                </a>
            `;
        });
    });

    html += '</div>';
    resultsHtml.innerHTML = html;
    resultsHtml.style.display = 'block';
}

function hideSearchResults() {
    const resultsDiv = document.getElementById('searchResults');
    if (resultsDiv) {
        resultsDiv.style.display = 'none';
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Close search results when clicking outside
document.addEventListener('click', function(e) {
    const searchInput = document.getElementById('globalSearch');
    const resultsDiv = document.getElementById('searchResults');
    if (resultsDiv && searchInput && !searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
        hideSearchResults();
    }
});
