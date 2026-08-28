// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // Add Help Improve DigitalCap link to footer
    const footer = document.querySelector('footer');
    if (footer && !document.getElementById('helpImproveLinkAdded')) {
        // Find the last paragraph or create a new one
        const footerParagraphs = footer.querySelectorAll('p');
        const lastPara = footerParagraphs[footerParagraphs.length - 1];

        if (lastPara) {
            // Add link after the last paragraph
            const helpLink = document.createElement('p');
            helpLink.id = 'helpImproveLinkAdded';
            helpLink.style.marginTop = '1rem';
            helpLink.style.textAlign = 'center';
            helpLink.style.borderTop = '1px solid var(--border-color)';
            helpLink.style.paddingTop = '1rem';

            const helpAnchor = document.createElement('a');
            helpAnchor.href = '#';
            helpAnchor.style.color = 'var(--primary)';
            helpAnchor.style.textDecoration = 'none';
            helpAnchor.style.fontWeight = '500';
            helpAnchor.textContent = '📝 Help Improve DigitalCap';
            helpAnchor.addEventListener('click', function(e) {
                e.preventDefault();
                openHelpImproveFeedback();
            });

            helpLink.appendChild(helpAnchor);
            lastPara.parentNode.insertBefore(helpLink, lastPara.nextSibling);
        }
    }
});
