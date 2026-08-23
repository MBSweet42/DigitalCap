// Article Interactive Features v2
// Handles: Conversation Scripts, Embedded Quizzes, Copy-to-Clipboard

document.addEventListener('DOMContentLoaded', function() {
    loadConversationScripts();
    setupEmbeddedQuizzes();
});

// ===== CONVERSATION SCRIPTS =====

function loadConversationScripts() {
    const articles = document.querySelectorAll('.article-section-v2');

    articles.forEach((article, articleIdx) => {
        const scripts = parentConversationScripts.filter(s => s.articleId === (articleIdx + 1));

        if (scripts.length > 0) {
            const scriptContainer = document.createElement('div');
            scriptContainer.className = 'conversation-scripts-section';
            scriptContainer.innerHTML = `
                <div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border-color);">
                    <h3 style="color: var(--primary); margin-bottom: 1.5rem;">💬 Parent Conversation Scripts</h3>
                    <p style="color: var(--text-gray); margin-bottom: 2rem;">Ready-to-use scripts you can adapt and read to your child. Feel free to personalize!</p>

                    ${scripts.map(script => `
                        <div class="conversation-script-card">
                            <div class="script-header">
                                <div>
                                    <h4 style="margin: 0; color: var(--primary);">${script.title}</h4>
                                    <small style="color: var(--text-gray);">Ages ${script.ageGroup}</small>
                                </div>
                                <button class="btn btn-secondary" onclick="copyScript('${script.title.replace(/'/g, "\\'")}')">
                                    📋 Copy
                                </button>
                            </div>

                            <div class="script-body">
                                <pre style="background: var(--bg-light); padding: 1rem; border-radius: 8px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word; font-size: 0.9rem; line-height: 1.6;">${script.script}</pre>
                            </div>

                            <div class="script-tips">
                                <h5 style="color: var(--primary); margin-bottom: 0.75rem;">💡 Tips:</h5>
                                <ul style="margin: 0; padding-left: 1.5rem;">
                                    ${script.tips.map(tip => `<li>${tip}</li>`).join('')}
                                </ul>
                            </div>

                            <div style="margin-top: 1rem; padding: 1rem; background: rgba(78, 205, 196, 0.1); border-radius: 8px; font-size: 0.9rem; color: var(--text-gray);">
                                <strong>📌 When to use:</strong> ${script.whenToUse}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            article.appendChild(scriptContainer);
        }
    });
}

function copyScript(scriptTitle) {
    const script = parentConversationScripts.find(s => s.title === scriptTitle);
    if (!script) return;

    const text = `${script.title}\nAges ${script.ageGroup}\n\n${script.script}\n\nWhen to use: ${script.whenToUse}`;

    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Script copied to clipboard! You can paste it into Notes, a Doc, or wherever you want to save it.');
    }).catch(() => {
        // Fallback for browsers that don't support clipboard API
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('✅ Script copied to clipboard!');
    });
}

// ===== EMBEDDED QUIZZES =====

function setupEmbeddedQuizzes() {
    // For now, embedded quizzes are optional
    // This sets up the foundation for future expansion
    console.log('Embedded quiz system ready');
}

function showEmbeddedQuiz(quizId) {
    const quiz = embeddedQuizzes.find(q => q.sectionId === quizId);
    if (!quiz) return;

    const container = document.createElement('div');
    container.className = 'embedded-quiz';
    container.innerHTML = `
        <div style="padding: 1.5rem; background: linear-gradient(135deg, rgba(255, 183, 3, 0.1) 0%, rgba(255, 183, 3, 0.05) 100%); border-radius: 8px; border-left: 4px solid var(--accent); margin: 1.5rem 0;">
            <h4 style="color: var(--accent); margin-top: 0;">🎯 Quick Check: ${quiz.question}</h4>

            ${quiz.options.map((option, idx) => `
                <div style="margin: 1rem 0;">
                    <button class="quiz-option-btn" onclick="answerEmbeddedQuiz('${quizId}', ${idx})">
                        ${option.text}
                    </button>
                </div>
            `).join('')}

            <div id="quiz-feedback-${quizId}"></div>
        </div>
    `;

    return container;
}

function answerEmbeddedQuiz(quizId, selectedIdx) {
    const quiz = embeddedQuizzes.find(q => q.sectionId === quizId);
    if (!quiz) return;

    const selectedOption = quiz.options[selectedIdx];
    const feedbackDiv = document.getElementById(`quiz-feedback-${quizId}`);

    if (feedbackDiv) {
        const feedbackClass = selectedOption.correct ? 'quiz-feedback correct' : 'quiz-feedback incorrect';
        feedbackDiv.innerHTML = `
            <div class="${feedbackClass}" style="margin-top: 1rem;">
                ${selectedOption.correct ? '✅ Correct!' : '❌ Not quite.'} ${selectedOption.feedback}
            </div>
        `;

        if (selectedOption.correct && quiz.unlocksSection) {
            setTimeout(() => {
                const unlockedSection = document.getElementById(quiz.unlocksSection);
                if (unlockedSection) {
                    unlockedSection.classList.add('open');
                    unlockedSection.parentElement.querySelector('.section-toggle')?.classList.add('open');
                    unlockedSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1500);
        }
    }
}

// ===== STYLES FOR NEW ELEMENTS =====

const styles = document.createElement('style');
styles.textContent = `
    .conversation-script-card {
        background: var(--bg-white);
        border: 2px solid var(--border-color);
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        transition: all 0.3s ease;
    }

    .conversation-script-card:hover {
        border-color: var(--primary);
        box-shadow: var(--shadow-lg);
    }

    .script-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 1.5rem;
        gap: 1rem;
    }

    .script-body {
        margin-bottom: 1.5rem;
    }

    .script-body pre {
        color: var(--text-dark);
        font-family: 'Courier New', monospace;
    }

    .script-tips {
        background: linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(78, 205, 196, 0.05) 100%);
        padding: 1rem;
        border-radius: 8px;
        border-left: 4px solid var(--secondary);
        margin: 1rem 0;
    }

    .script-tips ul {
        color: var(--text-gray);
    }

    .script-tips li {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }

    .quiz-option-btn {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid var(--border-color);
        background: var(--bg-light);
        border-radius: 8px;
        cursor: pointer;
        text-align: left;
        transition: all 0.3s ease;
        font-size: 0.95rem;
    }

    .quiz-option-btn:hover {
        border-color: var(--primary);
        background: var(--bg-white);
    }

    @media (max-width: 768px) {
        .script-header {
            flex-direction: column;
        }

        .script-header button {
            width: 100%;
        }
    }
`;

document.head.appendChild(styles);
