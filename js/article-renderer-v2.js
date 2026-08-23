// Article Renderer v2 - Expandable Sections, Parent Pop-ups, Text-to-Speech

let currentUtterance = null;
let isSpeaking = false;

document.addEventListener('DOMContentLoaded', function() {
    renderArticles();
});

function renderArticles() {
    const container = document.getElementById('articlesContainer');
    const articles = window.articlesToRender || articlesV2;

    articles.forEach((article, articleIdx) => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article-section-v2';
        articleDiv.id = `article-${articleIdx}`;

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
            const sectionId = `section-${articleIdx}-${sectionIdx}`;

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
                        <h4>👨‍👩‍👧 Parent Pop-Up: ${section.title.replace('Parent Pop-Up: ', '')}</h4>
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
                // Expandable section (default)
                html += `
                    <div class="article-section-v2" style="margin: 1rem; box-shadow: none;">
                        <div class="section-header" onclick="toggleSection('${sectionId}')">
                            <h3>${section.title}</h3>
                            <span class="section-toggle">▼</span>
                        </div>
                        <div class="section-content" id="${sectionId}">
                            ${section.content}
                        </div>
                    </div>
                `;
            }
        });

        html += '</div>'; // Close padding div

        articleDiv.innerHTML = html;
        container.appendChild(articleDiv);
    });
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const toggle = section.parentElement.querySelector('.section-toggle');

    section.classList.toggle('open');
    toggle.classList.toggle('open');
}

// Text-to-Speech
function toggleTextToSpeech() {
    const btn = document.getElementById('ttsBtn');

    if (isSpeaking) {
        stopTextToSpeech();
        return;
    }

    const text = gatherArticleText();

    if ('speechSynthesis' in window) {
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.rate = 1;
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
        if (document.activeElement.tagName !== 'INPUT') {
            toggleTextToSpeech();
        }
    }
});
