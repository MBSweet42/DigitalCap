// Article Renderer v2 Fixed - Clean article flow with scripts after each

document.addEventListener('DOMContentLoaded', function() {
    const isAccordionPage = document.body.querySelector('.safety-page, .etiquette-page') !== null;
    renderArticlesClean(isAccordionPage);
});

function renderArticlesClean(accordionMode = false) {
    const container = document.getElementById('articlesContainer');
    const articles = window.articlesToRender || articlesV2;

    articles.forEach((article, articleIdx) => {
        // Article wrapper
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article-section-v2';
        articleDiv.id = `article-${article.id}`;
        articleDiv.setAttribute('data-article-id', article.id);

        // Intro section - with accordion mode support
        let introHtml = '';
        if (accordionMode) {
            introHtml = `
                <h2 style="margin: 0; padding: 0;">
                    <button type="button" class="article-toggle-btn" aria-expanded="false" aria-controls="content-${article.id}" onclick="toggleArticleAccordion(${article.id})" style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%; border: none; background: none; color: inherit; font-size: inherit; cursor: pointer; text-align: left; padding: 0; text-decoration: none;">
                        <span style="flex: 1;">
                            <span style="display: block; font-size: 1.8rem; font-weight: 600; margin-bottom: 0.5rem;">${article.title}</span>
                            <span style="display: block; font-size: 0.95rem; font-weight: 400; color: var(--text-dark); margin: 0;">${article.intro}</span>
                        </span>
                        <span class="article-toggle-arrow" style="font-size: 1.5rem; margin-left: 1rem; flex-shrink: 0; transition: transform 0.2s ease;">▼</span>
                    </button>
                </h2>`;
        } else {
            introHtml = `
                <div class="article-intro">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div style="flex: 1;">
                            <h2>${article.title}</h2>
                            <p>${article.intro}</p>
                        </div>
                    </div>
                </div>`;
        }

        let html = introHtml;

        // Content wrapper - for accordion mode, wrap sections in collapsible div
        if (accordionMode) {
            html += `<div id="content-${article.id}" class="article-content-wrapper" data-article-id="${article.id}" style="display: none; padding: 0;">`;
        } else {
            html += `<div style="padding: 0;">`;
        }

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
                        <h4>Support Note</h4>
                        <h5 style="color: var(--primary); margin-top: 0.75rem;">${section.title.replace('Parent Pop-Up: ', '')}</h5>
                        <div>${section.content}</div>
                    </div>
                `;
            } else if (section.type === 'callout') {
                // Callout box
                html += `
                    <div class="section-type-callout">
                        <h4>${section.title}</h4>
                        <div>${section.content}</div>
                    </div>
                `;
            } else if (section.type === 'takeaway') {
                // Takeaway box
                html += `
                    <div class="section-type-takeaway">
                        <h4>${section.title}</h4>
                        <div>${section.content}</div>
                    </div>
                `;
            } else if (section.type === 'expandable') {
                // Expandable section
                html += `
                    <div class="article-section-v2" style="margin: 1rem 0; box-shadow: none;">
                        <h3 style="margin: 0; padding: 0;">
                            <button type="button" class="section-header-btn" aria-expanded="false" aria-controls="${sectionId}" onclick="toggleSectionContent(this)" style="display: flex; justify-content: space-between; align-items: center; width: 100%; border: none; background: none; color: inherit; font-size: inherit; cursor: pointer; text-align: left; padding: 0; text-decoration: none; font-weight: 600;">
                                <span>${section.title}</span>
                                <span class="section-toggle" style="margin-left: 0.5rem; flex-shrink: 0; transition: transform 0.2s ease;">▼</span>
                            </button>
                        </h3>
                        <div class="section-content" id="${sectionId}" style="display: none; padding-top: 1rem;">
                            ${section.content}
                        </div>
                    </div>
                `;
            } else if (section.type === 'expandable-cards') {
                // Expandable cards - multiple individual expandable items
                html += `<div style="margin: 1rem 0;">`;
                section.cards.forEach((card, cardIdx) => {
                    const cardId = `${sectionId}-card-${cardIdx}`;
                    html += `
                        <div class="article-section-v2" style="margin-bottom: 0.75rem; box-shadow: none;">
                            <h3 style="margin: 0; padding: 0; font-size: 1.1rem;">
                                <button type="button" class="section-header-btn" aria-expanded="false" aria-controls="${cardId}" onclick="toggleSectionContent(this)" style="display: flex; justify-content: space-between; align-items: center; width: 100%; border: none; background: none; color: inherit; font-size: 1.1rem; cursor: pointer; text-align: left; padding: 0; text-decoration: none; font-weight: 600;">
                                    <span>${card.label}</span>
                                    <span class="section-toggle" style="margin-left: 0.5rem; flex-shrink: 0; transition: transform 0.2s ease;">▼</span>
                                </button>
                            </h3>
                            <div class="section-content" id="${cardId}" style="display: none; padding-top: 1rem;">
                                ${card.content}
                            </div>
                        </div>
                    `;
                });
                html += `<div style="margin-top: 1.5rem; padding: 1rem; background: #f8d7da; border-radius: 8px; border-left: 4px solid var(--primary);">${section.researchBox}</div></div>`;
            }
        });

        html += '</div>'; // Close padding div

        articleDiv.innerHTML = html;
        container.appendChild(articleDiv);

        // Add scripts section AFTER each article (skip for accordion pages where scripts are in bottom section)
        const scriptsForArticle = parentConversationScripts.filter(s => s.articleId === article.id);
        if (scriptsForArticle.length > 0 && !accordionMode) {
            const scriptSection = document.createElement('div');
            scriptSection.className = 'article-scripts-section';
            scriptSection.innerHTML = `
                <div style="margin-top: 2.5rem; padding-top: 2rem; padding-bottom: 3rem; border-top: 3px solid var(--primary);">
                    <h3 style="color: var(--primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        Conversation Guides
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

function toggleSectionContent(button) {
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    const toggle = button.querySelector('.section-toggle');

    if (!content) return;

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.setAttribute('aria-expanded', 'true');
        if (toggle) {
            toggle.style.transform = 'rotate(180deg)';
        }
    } else {
        content.style.display = 'none';
        button.setAttribute('aria-expanded', 'false');
        if (toggle) {
            toggle.style.transform = 'rotate(0deg)';
        }
    }
}

function toggleArticleAccordion(articleId) {
    const contentWrapper = document.querySelector(`.article-content-wrapper[data-article-id="${articleId}"]`);
    const article = document.querySelector(`[data-article-id="${articleId}"]`);
    const button = article.querySelector('.article-toggle-btn');
    const arrow = article.querySelector('.article-toggle-arrow');

    if (contentWrapper) {
        const isCurrentlyOpen = contentWrapper.style.display !== 'none';

        // Close all other articles and reset their buttons
        document.querySelectorAll('.article-content-wrapper').forEach(wrapper => {
            wrapper.style.display = 'none';
            const btn = wrapper.parentElement.querySelector('.article-toggle-btn');
            if (btn) {
                btn.setAttribute('aria-expanded', 'false');
            }
        });

        document.querySelectorAll('.article-toggle-arrow').forEach(a => {
            a.style.transform = 'rotate(0deg)';
        });

        // Toggle current article
        if (!isCurrentlyOpen) {
            contentWrapper.style.display = 'block';
            if (button) {
                button.setAttribute('aria-expanded', 'true');
            }
            if (arrow) {
                arrow.style.transform = 'rotate(180deg)';
            }
        }
    }
}
