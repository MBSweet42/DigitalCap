// Etiquette-only topic selector controller
// Manages one-topic-at-a-time view without modifying shared renderer

(function() {
    let currentTopic = null;

    function initializeTopicSelector() {
        const topicChooser = document.getElementById('etiquetteTopicChooser');
        const articlesContainer = document.getElementById('articlesContainer');

        // Wait for shared renderer to finish rendering articles
        if (!articlesContainer || articlesContainer.children.length === 0) {
            setTimeout(initializeTopicSelector, 100);
            return;
        }

        // Hide all top-level articles initially (not nested expandables)
        const topLevelArticles = document.querySelectorAll('#articlesContainer > .article-section-v2[data-article-id]');
        topLevelArticles.forEach(article => {
            article.style.display = 'none';
        });

        // Attach click handlers to topic buttons
        const topicButtons = document.querySelectorAll('.etiquette-topic-btn');
        topicButtons.forEach(button => {
            button.addEventListener('click', function() {
                const topicId = parseInt(this.getAttribute('data-topic-id'));
                selectTopic(topicId);
            });
        });

        // Check for hash on page load
        const hash = window.location.hash.substring(1);
        if (hash && hash.startsWith('article-')) {
            const topicId = parseInt(hash.replace('article-', ''));
            if ([4, 5, 8, 9].includes(topicId)) {
                selectTopic(topicId);
            }
        }
    }

    function selectTopic(topicId) {
        const topicChooser = document.getElementById('etiquetteTopicChooser');
        const topLevelArticles = document.querySelectorAll('#articlesContainer > .article-section-v2[data-article-id]');
        const selectedArticle = document.querySelector(`#articlesContainer > .article-section-v2[data-article-id="${topicId}"]`);

        if (!selectedArticle) {
            return;
        }

        // Hide all articles and topic chooser
        topLevelArticles.forEach(article => {
            article.style.display = 'none';
        });
        topicChooser.style.display = 'none';

        // Hide How to use section
        const howToSection = document.getElementById('etiquetteHowTo');
        if (howToSection) {
            howToSection.style.display = 'none';
        }

        // Hide Conversation Guides
        const conversationSection = document.getElementById('article-conversation-guides');
        if (conversationSection) {
            conversationSection.style.display = 'none';
        }

        // Show selected article
        selectedArticle.style.display = 'block';
        currentTopic = topicId;

        // Add Back to Topics button if not already present
        if (!document.getElementById('backToTopicsBtn')) {
            const backButton = document.createElement('button');
            backButton.id = 'backToTopicsBtn';
            backButton.textContent = 'Back to Topics';
            backButton.style.cssText = `
                display: block;
                margin: 2rem 0;
                padding: 0.75rem 1.5rem;
                background: var(--secondary);
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 0.95rem;
                cursor: pointer;
                transition: all 0.2s ease;
            `;
            backButton.addEventListener('mouseover', function() {
                this.style.background = 'var(--primary)';
            });
            backButton.addEventListener('mouseout', function() {
                this.style.background = 'var(--secondary)';
            });
            backButton.addEventListener('click', backToTopics);
            selectedArticle.parentElement.insertBefore(backButton, selectedArticle.nextSibling);
        }

        // Update URL hash
        window.history.replaceState(null, '', window.location.pathname + window.location.search + '#article-' + topicId);

        // Move focus to selected article h2
        const articleHeading = selectedArticle.querySelector('h2');
        if (articleHeading) {
            articleHeading.setAttribute('tabindex', '-1');
            articleHeading.focus();
        }
    }

    function backToTopics() {
        const topicChooser = document.getElementById('etiquetteTopicChooser');
        const topLevelArticles = document.querySelectorAll('#articlesContainer > .article-section-v2[data-article-id]');
        const backButton = document.getElementById('backToTopicsBtn');

        // Hide all articles
        topLevelArticles.forEach(article => {
            article.style.display = 'none';
        });

        // Show topic chooser
        topicChooser.style.display = 'block';

        // Show How to use section
        const howToSection = document.getElementById('etiquetteHowTo');
        if (howToSection) {
            howToSection.style.display = 'block';
        }

        // Show Conversation Guides
        const conversationSection = document.getElementById('article-conversation-guides');
        if (conversationSection) {
            conversationSection.style.display = 'block';
        }

        // Remove Back to Topics button
        if (backButton) {
            backButton.remove();
        }

        // Clear hash
        window.history.replaceState(null, '', window.location.pathname + window.location.search);

        currentTopic = null;

        // Focus on topic chooser heading
        const chooserHeading = document.getElementById('etiquetteTopicChooserHeading');
        if (chooserHeading) {
            chooserHeading.focus();
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTopicSelector);
    } else {
        initializeTopicSelector();
    }
})();
