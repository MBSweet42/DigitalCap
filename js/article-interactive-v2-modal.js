// Article Interactive Features v2 - Modal Version
// Handles: Conversation Scripts (in modals), Copy-to-Clipboard, Adaptation Tips

document.addEventListener('DOMContentLoaded', function() {
    loadConversationScriptsModal();
});

// ===== CONVERSATION SCRIPTS - MODAL VERSION =====

function loadConversationScriptsModal() {
    const articles = document.querySelectorAll('.article-section-v2');

    articles.forEach((article, articleIdx) => {
        const scripts = parentConversationScripts.filter(s => s.articleId === (articleIdx + 1));

        if (scripts.length > 0) {
            const scriptContainer = document.createElement('div');
            scriptContainer.className = 'conversation-scripts-section';
            scriptContainer.innerHTML = `
                <div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border-color);">
                    <h3 style="color: var(--primary); margin-bottom: 0.5rem;">💬 Parent Conversation Scripts</h3>
                    <p style="color: var(--text-gray); margin-bottom: 2rem;">Click any script to open it. Customize and use as needed!</p>

                    <div class="scripts-grid">
                        ${scripts.map(script => `
                            <button class="script-button" onclick="openScriptModal(${script.id})">
                                <div class="script-button-title">${script.title}</div>
                                <div class="script-button-desc">${script.description}</div>
                                <div class="script-button-cta">Click to view →</div>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;

            article.appendChild(scriptContainer);
        }
    });
}

function openScriptModal(scriptId) {
    const script = parentConversationScripts.find(s => s.id === scriptId);
    if (!script) return;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'script-modal';
    modal.id = `script-modal-${scriptId}`;
    modal.innerHTML = `
        <div class="script-modal-content">
            <button class="script-modal-close" onclick="closeScriptModal(${scriptId})">✕</button>

            <h2 style="color: var(--primary); margin-top: 0;">${script.title}</h2>
            <p style="color: var(--text-gray); font-style: italic; margin-bottom: 1.5rem;">${script.description}</p>

            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; border-left: 4px solid var(--primary);">
                <strong style="color: var(--primary);">📌 When to use:</strong>
                <p style="margin: 0.5rem 0 0 0; color: var(--text-gray);">${script.whenToUse}</p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--primary); margin-bottom: 1rem;">📖 Script</h3>
                <pre class="script-text">${script.script}</pre>

                <button class="btn btn-secondary" onclick="copyScriptText('${script.title.replace(/'/g, "\\'")}', ${scriptId})" style="width: 100%; margin-top: 1rem;">
                    📋 Copy Script to Clipboard
                </button>
            </div>

            <div style="background: linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(78, 205, 196, 0.05) 100%); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--secondary);">
                <h3 style="color: var(--secondary); margin-top: 0;">💡 Adaptation Tips by Age</h3>
                <ul style="margin: 0.75rem 0 0 1.5rem; color: var(--text-gray); line-height: 1.8;">
                    ${script.adaptationTips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>

            <div style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid var(--border-color);">
                <p style="color: var(--text-gray); font-size: 0.9rem;">
                    💡 <strong>Pro Tip:</strong> You don't have to read this word-for-word. Make it your own. Your relationship with your child is unique—adjust the language and examples to fit how you normally talk.
                </p>
            </div>
        </div>

        <div class="script-modal-backdrop" onclick="closeScriptModal(${scriptId})"></div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeScriptModal(scriptId) {
    const modal = document.getElementById(`script-modal-${scriptId}`);
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => modal.remove(), 300);
    }
}

function copyScriptText(scriptTitle, scriptId) {
    const script = parentConversationScripts.find(s => s.id === scriptId);
    if (!script) return;

    const text = `${script.title}\n${script.description}\n\nWhen to use: ${script.whenToUse}\n\n---\n\n${script.script}\n\n---\n\nAdaptation Tips:\n${script.adaptationTips.map(tip => `• ${tip}`).join('\n')}`;

    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✅ Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('✅ Script copied to clipboard!');
    });
}

// ===== STYLES FOR MODAL =====

const styles = document.createElement('style');
styles.textContent = `
    /* Scripts Grid */
    .scripts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    /* Script Button Card */
    .script-button {
        background: var(--bg-white);
        border: 2px solid var(--border-color);
        border-radius: 12px;
        padding: 1.5rem;
        text-align: left;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: inherit;
    }

    .script-button:hover {
        border-color: var(--primary);
        box-shadow: var(--shadow-lg);
        transform: translateY(-4px);
    }

    .script-button-title {
        font-weight: 600;
        color: var(--primary);
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .script-button-desc {
        color: var(--text-gray);
        font-size: 0.9rem;
        margin-bottom: 1rem;
        line-height: 1.5;
    }

    .script-button-cta {
        color: var(--secondary);
        font-size: 0.85rem;
        font-weight: 600;
    }

    /* Modal Styles */
    .script-modal {
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

    .script-modal.open {
        opacity: 1;
    }

    .script-modal-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .script-modal-content {
        position: relative;
        background: var(--bg-white);
        border-radius: 16px;
        padding: 2.5rem;
        max-width: 700px;
        width: 90%;
        max-height: 85vh;
        overflow-y: auto;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .script-modal-close {
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

    .script-modal-close:hover {
        color: var(--primary);
        transform: scale(1.2);
    }

    .script-text {
        background: var(--bg-light);
        padding: 1.5rem;
        border-radius: 8px;
        border-left: 4px solid var(--secondary);
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.6;
        color: var(--text-dark);
        margin: 0;
    }

    @media (max-width: 768px) {
        .script-modal-content {
            padding: 1.5rem;
            width: 95%;
        }

        .scripts-grid {
            grid-template-columns: 1fr;
        }

        .script-text {
            font-size: 0.85rem;
        }
    }
`;

document.head.appendChild(styles);
