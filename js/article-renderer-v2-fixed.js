// Article Renderer v2 Fixed - Clean article flow with scripts after each

let currentUtterance = null;
let isSpeaking = false;

document.addEventListener('DOMContentLoaded', function() {
    renderArticlesClean();
});

function renderArticlesClean() {
    // Add section styling if not already added
    if (!document.getElementById('sectionTypeStyles')) {
        const sectionStyles = document.createElement('style');
        sectionStyles.id = 'sectionTypeStyles';
        sectionStyles.textContent = `
            .section-type-text {
                background: #f0f8f8;
                padding: 1.5rem;
                border-radius: 8px;
                margin-bottom: 1.5rem;
                border-left: 4px solid #4ECDC4;
            }

            .section-type-parent-popup {
                background: #fffbf0;
                padding: 1.5rem;
                border-radius: 8px;
                margin-bottom: 1.5rem;
                border-left: 4px solid #FFB703;
            }

            .section-type-callout {
                background: #ffe6e6;
                padding: 1.5rem;
                border-radius: 8px;
                margin-bottom: 1.5rem;
                border-left: 4px solid #FF6B6B;
            }

            .section-type-takeaway {
                background: #e8f5f5;
                padding: 1.5rem;
                border-radius: 8px;
                margin-bottom: 1.5rem;
                border-left: 4px solid #4ECDC4;
            }

            .article-section-v2 .section-header {
                background: #f5f5f5;
                margin: 1.5rem 0 0 0;
                padding: 1rem;
                border-radius: 8px;
                border-left: 4px solid #4ECDC4;
            }

            .article-section-v2 .section-content {
                background: #fafafa;
                padding: 1.5rem;
                border-radius: 0 0 8px 8px;
                margin: 0;
                border-left: 4px solid #4ECDC4;
            }

            .section-type-text h4,
            .section-type-parent-popup h4,
            .section-type-parent-popup h5,
            .section-type-callout h4,
            .section-type-takeaway h4 {
                margin-top: 0;
            }
        `;
        document.head.appendChild(sectionStyles);
    }

    const container = document.getElementById('articlesContainer');
    const articles = window.articlesToRender || articlesV2;

    articles.forEach((article, articleIdx) => {
        // Article wrapper
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article-section-v2';
        articleDiv.id = `article-${article.id}`;
        articleDiv.setAttribute('data-article-id', article.id);

        // Intro section
        let html = `
            <div class="article-intro">
                <h2>${article.title}</h2>
                <p>${article.intro}</p>
            </div>

            <div style="padding: 0;">
        `;

        // Render sections
        article.sections.forEach((section, sectionIdx) => {
            const sectionId = `section-${article.id}-${sectionIdx}`;

            if (section.type === 'text') {
                // Non-expandable text section
                html += `
                    <div class="section-type-text">
                        <h4>${section.title}</h4>
                        <div>${section.content}</div>
                    </div>
                `;
            } else if (section.type === 'parent-popup') {
                // Parent pop-up box
                html += `
                    <div class="section-type-parent-popup">
                        <h4>👨‍👩‍👧 Parent Pop-Up</h4>
                        <h5 style="color: var(--primary); margin-top: 0.75rem;">${section.title.replace('Parent Pop-Up: ', '')}</h5>
                        <div>${section.content}</div>
                    </div>
                `;
            } else if (section.type === 'callout') {
                // Callout box
                html += `
                    <div class="section-type-callout">
                        <h4>⚠️ ${section.title}</h4>
                        <div>${section.content}</div>
                    </div>
                `;
            } else if (section.type === 'takeaway') {
                // Takeaway box
                html += `
                    <div class="section-type-takeaway">
                        <h4>📌 ${section.title}</h4>
                        <div>${section.content}</div>
                    </div>
                `;
            } else if (section.type === 'expandable') {
                // Expandable section
                html += `
                    <div class="article-section-v2" style="margin: 1rem 0; box-shadow: none;">
                        <div class="section-header" onclick="toggleSectionContent(this)" style="cursor: pointer;">
                            <h3>${section.title}</h3>
                            <span class="section-toggle">▼</span>
                        </div>
                        <div class="section-content" id="${sectionId}" style="display: block;">
                            ${section.content}
                        </div>
                    </div>
                `;
            }
        });

        html += '</div>'; // Close padding div

        articleDiv.innerHTML = html;
        container.appendChild(articleDiv);

        // Add scripts section AFTER each article
        const scriptsForArticle = parentConversationScripts.filter(s => s.articleId === article.id);
        if (scriptsForArticle.length > 0) {
            const scriptSection = document.createElement('div');
            scriptSection.className = 'article-scripts-section';
            scriptSection.innerHTML = `
                <div style="margin-top: 2.5rem; padding-top: 2rem; padding-bottom: 3rem; border-top: 3px solid var(--primary);">
                    <h3 style="color: var(--primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        💬 Parent Conversation Scripts
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem;">Click any script below to open it. Customize and use as needed!</p>

                    <div class="scripts-grid">
                        ${scriptsForArticle.map(script => `
                            <button class="script-button" onclick="openScriptModal(${script.id})">
                                <div class="script-button-title">${script.title}</div>
                                <div class="script-button-desc">${script.description}</div>
                                <div class="script-button-cta">Click to view →</div>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
            container.appendChild(scriptSection);
        }
    });
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const toggle = section.parentElement.querySelector('.section-toggle');

    section.classList.toggle('open');
    toggle.classList.toggle('open');
}

// ===== TEXT-TO-SPEECH =====

function toggleTextToSpeech() {
    const btn = document.getElementById('ttsBtn');

    if (isSpeaking) {
        stopTextToSpeech();
        return;
    }

    const text = gatherArticleText();

    if ('speechSynthesis' in window) {
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.rate = 0.95;
        currentUtterance.pitch = 1;

        currentUtterance.onstart = function() {
            isSpeaking = true;
            btn.classList.add('playing');
            btn.textContent = '⏸️ Pause';
        };

        currentUtterance.onend = function() {
            isSpeaking = false;
            btn.classList.remove('playing');
            btn.textContent = '🔊 Read Aloud';
        };

        currentUtterance.onerror = function() {
            isSpeaking = false;
            btn.classList.remove('playing');
            btn.textContent = '🔊 Read Aloud';
        };

        window.speechSynthesis.speak(currentUtterance);
    } else {
        alert('Text-to-speech is not supported in your browser.');
    }
}

function stopTextToSpeech() {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    const btn = document.getElementById('ttsBtn');
    btn.classList.remove('playing');
    btn.textContent = '🔊 Read Aloud';
}

function gatherArticleText() {
    const container = document.getElementById('articlesContainer');
    let text = '';

    // Gather all text content
    container.querySelectorAll('h2, h3, h4, p, li').forEach(el => {
        if (el.textContent.trim()) {
            text += el.textContent.trim() + '. ';
        }
    });

    return text;
}

// Keyboard shortcut: Press 's' to toggle read aloud
document.addEventListener('keydown', function(e) {
    if (e.key === 's' || e.key === 'S') {
        if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            toggleTextToSpeech();
        }
    }
});
