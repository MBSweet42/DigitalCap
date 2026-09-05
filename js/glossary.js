/**
 * DigitalCap Glossary System
 * Provides click/tap definitions for digital safety terms
 * Usage: <span data-glossary="phishing">phishing</span>
 */

const DIGITALCAP_GLOSSARY = {
  phishing: {
    term: "Phishing",
    definition: "A fake message, call, or website designed to trick someone into sharing information, sending money, or giving access to an account."
  },
  scam: {
    term: "Scam",
    definition: "A dishonest attempt to trick someone into giving money, information, or access."
  },
  harassment: {
    term: "Harassment",
    definition: "Repeated or unwanted behavior that targets, pressures, intimidates, or upsets someone."
  },
  sextortion: {
    term: "Sextortion",
    definition: "When someone threatens to share intimate images or information to pressure a person into sending money, more images, or doing something else."
  },
  grooming: {
    term: "Grooming",
    definition: "When someone builds trust with a person, often gradually, in order to manipulate or exploit them."
  },
  credentials: {
    term: "Credentials",
    definition: "Information used to sign in to an account, such as a username, password, or security code."
  },
  deepfake: {
    term: "Deepfake",
    definition: "AI-generated or altered video, audio, or images made to realistically imitate a person or event."
  },
  malware: {
    term: "Malware",
    definition: "Software designed to damage a device, disrupt it, spy on activity, or access information without permission."
  },
  cyberattack: {
    term: "Cyberattack",
    definition: "An intentional attempt to access, disrupt, damage, or interfere with a computer, device, account, or network."
  },
  "data-breach": {
    term: "Data Breach",
    definition: "An incident where information is accessed, exposed, or shared without authorization."
  },
  "identity-theft": {
    term: "Identity Theft",
    definition: "When someone uses another person's personal information without permission, often to access accounts, obtain money, or impersonate them."
  },
  impersonation: {
    term: "Impersonation",
    definition: "Pretending to be another person or organization, usually to deceive someone."
  },
  doxxing: {
    term: "Doxxing",
    definition: "Sharing someone's private identifying information online without permission, often to intimidate, expose, or harass them."
  },
  "2fa": {
    term: "Two-Factor Authentication (2FA)",
    definition: "A login method that requires a second form of verification in addition to a password."
  },
  "two-factor": {
    term: "Two-Factor Authentication (2FA)",
    definition: "A login method that requires a second form of verification in addition to a password."
  },
  "remote-access": {
    term: "Remote Access",
    definition: "Technology that allows someone to view or control a device from another location."
  },
  "digital-exposure": {
    term: "Digital Exposure",
    definition: "DigitalCap's way of describing how much personal information an app may collect, access, share, or use and what that could mean for the person using it."
  },
  "compromised-account": {
    term: "Compromised Account",
    definition: "An account that someone else may have accessed or taken control of without permission."
  },
  "personal-information": {
    term: "Personal Information",
    definition: "Information that can identify someone or reveal details about them, such as their name, address, phone number, account information, or location."
  }
};

/**
 * Initialize glossary links when DOM is ready
 */
function initializeGlossary() {
  // Find all elements with data-glossary attribute
  const glossaryElements = document.querySelectorAll('[data-glossary]');

  glossaryElements.forEach(el => {
    const glossaryKey = el.getAttribute('data-glossary').toLowerCase().trim();

    // Verify the term exists
    if (!DIGITALCAP_GLOSSARY[glossaryKey]) {
      console.warn(`[Glossary] Term not found: ${glossaryKey}`);
      return;
    }

    // Skip if already processed
    if (el.classList.contains('glossary-term')) {
      return;
    }

    // Mark as processed
    el.classList.add('glossary-term');

    // Make it look slightly different
    el.style.cursor = 'help';
    el.style.borderBottom = '1px dotted currentColor';
    el.style.textDecoration = 'none';

    // Add touch/click handler
    el.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      showGlossaryPopover(glossaryKey, el);
    });

    // Add keyboard support
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `Definition: ${DIGITALCAP_GLOSSARY[glossaryKey].term}`);
    el.setAttribute('aria-expanded', 'false');

    el.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        showGlossaryPopover(glossaryKey, el);
      }
    });
  });
}

/**
 * Show glossary definition popover
 */
function showGlossaryPopover(glossaryKey, triggerElement) {
  const entry = DIGITALCAP_GLOSSARY[glossaryKey];
  if (!entry) return;

  // Close any existing popover
  const existing = document.getElementById('glossary-popover');
  if (existing) {
    existing.remove();
  }

  // Create popover
  const popover = document.createElement('div');
  popover.id = 'glossary-popover';
  popover.role = 'tooltip';
  popover.setAttribute('aria-live', 'polite');

  // Style it
  popover.style.position = 'fixed';
  popover.style.zIndex = '10000';
  popover.style.maxWidth = '320px';
  popover.style.backgroundColor = 'var(--bg-white, #ffffff)';
  popover.style.border = '2px solid var(--border-color, #ddd)';
  popover.style.borderRadius = '8px';
  popover.style.padding = '1rem';
  popover.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
  popover.style.fontFamily = 'inherit';
  popover.style.fontSize = '0.95rem';
  popover.style.lineHeight = '1.5';
  popover.style.color = 'var(--text-dark, #000)';

  // Build content
  let html = `<div style="margin-bottom: 0.75rem; font-weight: 600; color: var(--primary, #FF6B6B);">${entry.term}</div>`;
  html += `<div style="color: var(--text-gray, #666); margin-bottom: 1rem;">${entry.definition}</div>`;
  html += `<button id="close-glossary" style="padding: 0.5rem 1rem; background: var(--primary, #FF6B6B); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; width: 100%; font-size: 0.9rem;">Close</button>`;

  popover.innerHTML = html;

  // Add to DOM
  document.body.appendChild(popover);

  // Position near trigger element
  const rect = triggerElement.getBoundingClientRect();
  let top = rect.bottom + window.scrollY + 8;
  let left = rect.left + window.scrollX - 10;

  // Adjust if popover goes off screen
  popover.style.top = top + 'px';
  popover.style.left = left + 'px';

  // Reposition if goes off right edge
  setTimeout(() => {
    const popoverRect = popover.getBoundingClientRect();
    if (popoverRect.right > window.innerWidth - 10) {
      popover.style.left = (window.innerWidth - popoverRect.width - 10) + 'px';
    }
    if (popoverRect.left < 10) {
      popover.style.left = '10px';
    }
  }, 0);

  // Close handlers
  const closeBtn = document.getElementById('close-glossary');
  closeBtn.addEventListener('click', closeGlossaryPopover);

  // Close on escape
  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      closeGlossaryPopover();
      document.removeEventListener('keydown', escapeHandler);
    }
  };
  document.addEventListener('keydown', escapeHandler);

  // Close on click outside
  const outsideHandler = (e) => {
    if (!popover.contains(e.target) && e.target !== triggerElement) {
      closeGlossaryPopover();
      document.removeEventListener('click', outsideHandler);
    }
  };
  setTimeout(() => {
    document.addEventListener('click', outsideHandler);
  }, 100);

  // Update trigger aria
  triggerElement.setAttribute('aria-expanded', 'true');
}

/**
 * Close glossary popover
 */
function closeGlossaryPopover() {
  const popover = document.getElementById('glossary-popover');
  if (popover) {
    popover.remove();
  }

  // Reset aria on all glossary terms
  document.querySelectorAll('[data-glossary]').forEach(el => {
    el.setAttribute('aria-expanded', 'false');
  });
}

/**
 * Initialize when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGlossary);
} else {
  initializeGlossary();
};
