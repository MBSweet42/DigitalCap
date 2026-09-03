// DigitalCap RESPOND - R07: Scam, Phishing, or Suspicious Contact
// Content-only module. No logic. No Firebase. No persistence.
// Uses generic RespondEngine with established interrupt behavior.

const R07_PHISHING = {
  id: 'R07',
  title: 'Scam, Phishing, or Suspicious Contact',
  description: 'A suspicious message, call, link, request, or payment may have been a scam. DigitalCap will help you figure out what to do next.',

  questions: [
    // IMMEDIATE SAFETY QUESTION
    {
      id: 'safety-screening',
      number: 1,
      text: 'Is anyone in immediate physical danger or being threatened with harm?',
      description: '',
      type: 'yes-no-unsure',
      answers: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
        { label: 'I\'m not sure', value: 'unsure' }
      ],
      interruptBehavior: {
        trigger: 'immediate-safety',
        triggerValue: 'yes',
        treatUnsureAsRisk: true
      }
    },

    // ACTION TRIAGE QUESTION
    {
      id: 'action-taken',
      number: 2,
      text: 'What is the biggest concern right now?',
      description: 'Choose the most serious thing that happened. If more than one applies, choose the one involving information, account access, device access, or money.',
      type: 'incident-cards',
      answers: [
        {
          label: 'I only received or noticed something suspicious',
          value: 'suspicious-only',
          detail: 'Email, text, call, or message that seems off.',
          flag: 'suspicious_only'
        },
        {
          label: 'I clicked a link or scanned a QR code, but did not enter information',
          value: 'link-clicked',
          detail: 'Opened a suspicious link, but didn\'t log in or provide info.',
          flag: 'link_opened'
        },
        {
          label: 'I opened or downloaded an attachment',
          value: 'attachment-opened',
          detail: 'A file that might be malware.',
          flag: 'attachment_opened'
        },
        {
          label: 'I entered a password or verification code',
          value: 'credentials-entered',
          detail: 'Shared login info or two-factor code.',
          flag: 'credentials_shared'
        },
        {
          label: 'I shared personal or financial information',
          value: 'personal-shared',
          detail: 'Name, address, SSN, bank info, or similar.',
          flag: 'personal_info_shared'
        },
        {
          label: 'I allowed someone to access my computer or phone',
          value: 'remote-access',
          detail: 'Let someone control my device remotely.',
          flag: 'remote_access_allowed'
        },
        {
          label: 'I sent money, cryptocurrency, or gift-card information',
          value: 'money-sent',
          detail: 'Transferred funds or payment information.',
          flag: 'money_sent'
        },
        {
          label: 'I\'m not sure what happened',
          value: 'unsure-action',
          detail: 'Not certain which action applies.',
          flag: 'action_unsure'
        }
      ]
    }
  ],

  // PRIMARY ACTIONS (by scenario)
  primaryActions: {
    'suspicious-only': [
      {
        number: 1,
        title: 'Do not reply or provide information',
        text: 'Don\'t click links, download files, or reply. Don\'t provide any personal information.'
      },
      {
        number: 2,
        title: 'Verify independently',
        text: 'If the message claims to be from a company you use, log into their website or app directly or call their main phone number to check. Don\'t use contact information from the suspicious message.'
      },
      {
        number: 3,
        title: 'Report through the service',
        text: 'Report it using the service\'s abuse or spam reporting tool. Then delete the message.'
      },
      {
        number: 4,
        title: 'Report to ReportFraud.ftc.gov',
        text: 'You can report scam attempts at <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a> to help the FTC identify patterns.'
      }
    ],

    'link-opened': [
      {
        number: 1,
        title: 'Close the page',
        text: 'Close the page or browser tab and do not go back to it.'
      },
      {
        number: 2,
        title: 'Update and scan (if needed)',
        text: 'If you believe something may have downloaded, update your security software and run a system scan. Remove anything detected.'
      },
      {
        number: 3,
        title: 'Watch your accounts',
        text: 'Check your email, banking, and social media for unexpected activity or password-reset requests. If you notice anything unusual, change the affected password.'
      },
      {
        number: 4,
        title: 'Report the link',
        text: 'Report it to the service and to <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a>.'
      }
    ],

    'attachment-opened': [
      {
        number: 1,
        title: 'Update security software',
        text: 'Make sure your antivirus or security software is up to date.'
      },
      {
        number: 2,
        title: 'Run a system scan',
        text: 'Run a full system scan and remove anything the scan identifies.'
      },
      {
        number: 3,
        title: 'Monitor your device',
        text: 'Watch for unexpected behavior, slow performance, or unusual activity. If sensitive credentials may have been exposed, change those passwords.'
      },
      {
        number: 4,
        title: 'Get help if needed',
        text: 'If unusual things continue or you\'re uncomfortable running a scan, contact the device maker, a trusted tech-support company, or a knowledgeable person.'
      }
    ],

    'credentials-shared': [
      {
        number: 1,
        title: 'Change the password immediately',
        text: 'Create a new, unique password for this account right away.'
      },
      {
        number: 2,
        title: 'Change reused passwords',
        text: 'If you use the same password on other accounts, change those too. This is very important.'
      },
      {
        number: 3,
        title: 'Turn on two-factor authentication',
        text: 'Enable 2FA if available. It adds protection by requiring a second step when logging in from an unfamiliar device.'
      },
      {
        number: 4,
        title: 'Review your account',
        text: 'Check for unauthorized activity. If you cannot log in or suspect someone else accessed your account, use the Hacked or Compromised Account protocol.'
      }
    ],

    'personal-info-shared': [
      {
        number: 1,
        title: 'Go to IdentityTheft.gov immediately',
        text: 'Visit <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a>. It will create a personalized recovery plan based on what information was exposed.'
      },
      {
        number: 2,
        title: 'Contact your bank if needed',
        text: 'If you shared bank account, debit-card, credit-card, or account information, call your financial institution right away.'
      },
      {
        number: 3,
        title: 'Keep records',
        text: 'Save the suspicious message and document what information was shared and when you discovered it.'
      },
      {
        number: 4,
        title: 'Report to ReportFraud.ftc.gov',
        text: 'File a report at <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a> to create an official record.'
      }
    ],

    'remote-access-allowed': [
      {
        number: 1,
        title: 'End the connection immediately',
        text: 'Close the remote-access software or application right now. Restart your device if you can.'
      },
      {
        number: 2,
        title: 'Update and scan',
        text: 'Update your security software and run a full system scan.'
      },
      {
        number: 3,
        title: 'Change important passwords',
        text: 'Change passwords for email, banking, and other sensitive accounts using a different device.'
      },
      {
        number: 4,
        title: 'Get help if needed',
        text: 'If you\'re uncomfortable checking your device or unusual things happen, contact the device maker, a trusted tech-support company, or a knowledgeable person.'
      }
    ],

    'money-sent': [
      {
        number: 1,
        title: 'Contact your provider right now',
        text: 'Call your bank, card issuer, wire-transfer company, payment app, gift-card issuer, cryptocurrency exchange, or other provider immediately.'
      },
      {
        number: 2,
        title: 'Explain the situation',
        text: 'Tell them you were scammed and describe the amount, payment method, and what the scammer claimed. Provide the recipient\'s information if you have it.'
      },
      {
        number: 3,
        title: 'Ask about stopping or reversing the payment',
        text: 'Ask whether the transaction can be stopped, reversed, or refunded. Options vary depending on how you paid.'
      },
      {
        number: 4,
        title: 'Report to ReportFraud.ftc.gov',
        text: 'File a report at <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a> to create an official record and help the FTC track scam patterns.'
      }
    ],

    'action-unsure': [
      {
        number: 1,
        title: 'Think through what you may have done',
        text: 'Did you click something, download something, enter information, allow device access, or send money? Matching your action to the right guidance helps.'
      },
      {
        number: 2,
        title: 'Verify the contact independently',
        text: 'If the message claims to be from a real company, log into their website or app directly or call their official phone number. Don\'t use the contact information from the message.'
      },
      {
        number: 3,
        title: 'Check your accounts',
        text: 'Look for unexpected activity on email, banking, and social media. If you spot anything unusual, change the affected password.'
      },
      {
        number: 4,
        title: 'Report it',
        text: 'Report the suspicious message to the service and to <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a>.'
      }
    ],

    default: [
      {
        number: 1,
        title: 'Stay cautious',
        text: 'Most scams rely on surprise and urgency. Taking time to verify can prevent loss.'
      },
      {
        number: 2,
        title: 'Verify before acting',
        text: 'If a message asks you to act quickly or claims to be from a company, verify it independently through official channels.'
      },
      {
        number: 3,
        title: 'Report suspicious activity',
        text: 'Report to the service and to <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a>.'
      },
      {
        number: 4,
        title: 'Remember these protections',
        text: 'Use strong, unique passwords. Enable 2FA. Never share passwords, codes, or personal information with unsolicited contacts.'
      }
    ]
  },

  // PRIMARY ACTIONS RULES (data-driven selection)
  primaryActionsRules: [
    { when: { flag: 'suspicious_only' }, use: 'suspicious-only' },
    { when: { flag: 'link_opened' }, use: 'link-opened' },
    { when: { flag: 'attachment_opened' }, use: 'attachment-opened' },
    { when: { flag: 'credentials_shared' }, use: 'credentials-shared' },
    { when: { flag: 'personal_info_shared' }, use: 'personal-info-shared' },
    { when: { flag: 'remote_access_allowed' }, use: 'remote-access-allowed' },
    { when: { flag: 'money_sent' }, use: 'money-sent' },
    { when: { flag: 'action_unsure' }, use: 'action-unsure' }
  ],

  // DEEPER HELP SECTIONS (progressive disclosure)
  deeperHelpSections: [
    {
      id: 'what-is-phishing',
      show: 'whenFlag',
      flag: 'suspicious_only',
      title: 'What makes a message suspicious?',
      intro: 'Watch for:',
      points: [
        'Urgent language, threats, or offers that seem too good to be true',
        'Requests for passwords, PINs, or verification codes',
        'Links that don\'t match the real company\'s website',
        'Requests to download files',
        'Impersonation of a company or person'
      ]
    },

    {
      id: 'link-compromise-signs',
      show: 'whenFlag',
      flag: 'link_opened',
      title: 'If you think information was entered after clicking',
      intro: 'If you realize you entered a password or personal information on the page after clicking the link, or if you notice unusual account activity, use the Hacked or Compromised Account protocol for more detailed guidance.',
      points: []
    },

    {
      id: 'after-scanning',
      show: 'whenFlag',
      flag: 'attachment_opened',
      title: 'What to do after the scan',
      intro: 'After removing threats, continue watching your device and accounts. If unusual activity continues, seek help from a trusted tech-support source.',
      points: []
    },

    {
      id: 'attachment-help',
      show: 'whenFlag',
      flag: 'attachment_opened',
      title: 'Understanding malware scanning',
      intro: 'Malware is unwanted software. Security software can detect and remove many types. Update your security software regularly and run scans.',
      points: [
        'The scan results will show what was found and removed',
        'Follow the security software\'s recommendations'
      ]
    },

    {
      id: 'why-change-reused',
      show: 'whenFlag',
      flag: 'credentials_shared',
      title: 'Why change passwords used on other accounts?',
      intro: 'If a scammer has your password for one account, they can try it on others. Using unique passwords for each account limits the damage.',
      points: []
    },

    {
      id: '2fa-explained',
      show: 'whenFlag',
      flag: 'credentials_shared',
      title: 'How two-factor authentication works',
      intro: 'Two-factor authentication (2FA) requires a second step to log in, such as a code from your phone. This makes it harder for someone to access your account even if they have your password. Common second factors include authenticator apps, text messages, or codes you save.',
      points: [
        'If you think someone accessed your account (not just compromised your password), use the Hacked or Compromised Account protocol for account recovery guidance.'
      ]
    },

    {
      id: 'identitytheft-gov-explained',
      show: 'whenFlag',
      flag: 'personal_info_shared',
      title: 'What IdentityTheft.gov will do for you',
      intro: 'The recovery plan asks what information was exposed, then provides personalized next steps. Follow the official recovery steps it provides. Visit <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a> to get started.',
      points: [
        'It guides you based on your specific situation',
        'It may recommend a credit freeze or fraud alert if appropriate'
      ]
    },

    {
      id: 'credit-freeze-basics',
      show: 'whenFlag',
      flag: 'personal_info_shared',
      title: 'Credit freeze and fraud alert',
      intro: '<a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a> may recommend a credit freeze or fraud alert to help protect against unauthorized credit accounts. Placing or removing a credit freeze is free.',
      points: [
        'A credit freeze restricts access to your credit report, making it harder for someone to open accounts in your name',
        'A fraud alert requires verification before new accounts are opened'
      ]
    },

    {
      id: 'remote-access-danger',
      show: 'whenFlag',
      flag: 'remote_access_allowed',
      title: 'Why remote access is dangerous',
      intro: 'Someone with remote access to your device could:',
      points: [
        'See passwords you type',
        'Install hidden software',
        'Steal files or photos'
      ]
    },

    {
      id: 'finding-tech-help',
      show: 'whenFlag',
      flag: 'remote_access_allowed',
      title: 'Finding trustworthy tech help',
      intro: 'Use official support (manufacturer\'s website or phone number). Contact a local repair shop you know. Never give remote access to someone who initiates contact.',
      points: []
    },

    {
      id: 'what-to-tell-provider',
      show: 'whenFlag',
      flag: 'money_sent',
      title: 'What information to have ready',
      intro: 'Gather these details before calling:',
      points: [
        'Date and time of the transaction',
        'Exact amount sent',
        'Payment method used',
        'Recipient\'s name or account information',
        'What you thought you were paying for',
        'Get a reference or case number'
      ]
    },

    {
      id: 'payment-method-timing',
      show: 'whenFlag',
      flag: 'money_sent',
      title: 'Why contact right away',
      intro: 'Different payment methods have different processes and timelines for disputes or reversals. Calling immediately gives your provider the best chance to help.',
      points: []
    },

    {
      id: 'signs-of-compromise',
      show: 'whenFlag',
      flag: 'action_unsure',
      title: 'Signs your account was compromised',
      intro: 'If you notice any of these, use the Hacked or Compromised Account protocol for account recovery guidance:',
      points: [
        'Password-reset emails you didn\'t request',
        'Unfamiliar devices or locations in your login history',
        'Changes to account settings or recovery information',
        'Unauthorized posts or messages sent from your account'
      ]
    },

    {
      id: 'remember-and-return',
      show: 'whenFlag',
      flag: 'action_unsure',
      title: 'When you remember what happened',
      intro: 'If you later figure out whether you clicked, downloaded, entered information, or sent money, you can come back to this tool for more specific guidance.',
      points: []
    }
  ],

  // IMMEDIATE SAFETY (shown when threat flag is set)
  immediateSafety: {
    title: 'Safety comes first',
    content: [
      'If anyone is in immediate physical danger, call 911 or the appropriate local emergency number now.',
      'If someone has threatened harm, preserve the message if it is safe to do so and contact local law enforcement for guidance.',
      'Do not meet, pay, or continue engaging with someone who is threatening harm.',
      'Continue with DigitalCap only after immediate safety has been addressed.'
    ]
  },

  // UNSURE SAFETY NOTE
  unsureSafetyNote: {
    title: 'When to take this seriously:',
    resourceIds: ['988-crisis-lifeline'],
    content: [
      'If you are unsure whether a threat is urgent, contact local law enforcement or another trusted local support resource for guidance.',
      'If someone may hurt themselves or is experiencing an emotional crisis, call or text 988.',
      'Continue with the scam-response questions only after immediate safety concerns have been addressed.'
    ]
  }
};
