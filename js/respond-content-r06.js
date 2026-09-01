// DigitalCap RESPOND - R06: Hacked or Compromised Account
// Content-only module. No logic. No Firebase. No persistence.
// Uses generic RespondEngine with optional branching support.

const R06_HACKED = {
  id: 'R06',
  title: 'Hacked or Compromised Account',
  description: 'Someone may have accessed your child\'s account without permission. DigitalCap will help you figure out the safest next steps and point you to the platform\'s official recovery tools.',

  questions: [
    // UNIVERSAL SAFETY QUESTION
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

    // ACCESS STATUS QUESTION
    {
      id: 'access-status',
      number: 2,
      text: 'Can your child still log into the account?',
      description: '',
      type: 'yes-no-unsure',
      answers: [
        {
          label: 'Yes, they can log in',
          value: 'can-access',
          flag: 'can_access',
          nextQuestion: 'indicators'
        },
        {
          label: 'No, they\'re locked out',
          value: 'locked-out',
          flag: 'locked_out',
          nextQuestion: 'result'
        },
        {
          label: 'I\'m not sure',
          value: 'unsure-access',
          flag: 'unsure_access'
        }
      ]
    },

    // INDICATOR QUESTION (only if can_access)
    {
      id: 'indicators',
      number: 3,
      text: 'Which best describes what you noticed?',
      description: '',
      type: 'incident-cards',
      answers: [
        {
          label: 'Someone is posting or messaging as my child',
          value: 'impersonation',
          detail: 'Unauthorized posts, messages, or account activity.',
          flag: 'impersonation'
        },
        {
          label: 'We saw a login or device we don\'t recognize',
          value: 'unfamiliar-access',
          detail: 'Unknown location, device, or login time.',
          flag: 'unfamiliar_access'
        },
        {
          label: 'Account settings or recovery information changed',
          value: 'settings-changed',
          detail: 'Email, phone, password, or other account details altered.',
          flag: 'settings_changed'
        },
        {
          label: 'My child shared a password or verification code',
          value: 'shared-credentials',
          detail: 'Someone gained account access through a shared code or password.',
          flag: 'shared_credentials'
        },
        {
          label: 'There are purchases or charges we don\'t recognize',
          value: 'unauthorized-purchases',
          detail: 'Unauthorized transactions or in-app purchases.',
          flag: 'unauthorized_purchases'
        },
        {
          label: 'More than one of these things happened',
          value: 'multiple-indicators',
          detail: 'Multiple signs of compromise.',
          flag: 'multiple_indicators'
        },
        {
          label: 'Something looks wrong, but I\'m not sure what',
          value: 'unsure-indicator',
          detail: 'Activity or changes that seem unusual.',
          flag: 'unsure_indicator'
        }
      ]
    }
  ],

  // PRIMARY ACTIONS (by scenario)
  primaryActions: {
    default: [
      {
        number: 1,
        title: 'Change the password',
        text: 'Create a long, unique password that is not used on another account. Follow the platform\'s specific password requirements.'
      },
      {
        number: 2,
        title: 'Review signed-in devices or sessions',
        text: 'Sign out anything unfamiliar or devices your child doesn\'t recognize.'
      },
      {
        number: 3,
        title: 'Verify recovery information',
        text: 'Check that recovery email, phone number, or other recovery methods are still correct and belong to your child.'
      },
      {
        number: 4,
        title: 'Turn on or verify two-factor authentication',
        text: 'Enable 2FA if available. This adds a second step when someone tries to log in from an unfamiliar device.'
      },
      {
        number: 5,
        title: 'Review connected apps and third-party access',
        text: 'Remove any apps or connected services that your child doesn\'t recognize or no longer use.'
      }
    ],

    recovery: [
      {
        number: 1,
        title: 'Use the platform\'s official account recovery process',
        text: 'Visit the platform\'s recovery page. You\'ll verify your identity using recovery email, phone, security questions, or other methods.'
      },
      {
        number: 2,
        title: 'Follow the verification steps',
        text: 'Complete whatever identity verification the platform requests. Recovery time varies depending on the verification method needed.'
      },
      {
        number: 3,
        title: 'Once access is restored, secure the account',
        text: 'Create a new unique password, review signed-in devices, check recovery information, and enable two-factor authentication.'
      },
      {
        number: 4,
        title: 'Use platform support if recovery doesn\'t work',
        text: 'If the official recovery process doesn\'t work, contact the platform\'s support team directly for help.'
      }
    ],

    impersonation: [
      {
        number: 1,
        title: 'Change the password immediately',
        text: 'Create a long, unique password not used on another account.'
      },
      {
        number: 2,
        title: 'Review recent posts and messages',
        text: 'Check what has been posted or sent using this account. Preserve records if needed for reporting.'
      },
      {
        number: 3,
        title: 'Remove or report harmful content',
        text: 'Use the platform\'s abuse/privacy reporting tools to flag or remove unauthorized posts or messages.'
      },
      {
        number: 4,
        title: 'Notify affected contacts if needed',
        text: 'Friends or contacts who received unauthorized messages may need a heads-up that the account was compromised.'
      },
      {
        number: 5,
        title: 'Verify recovery information and enable 2FA',
        text: 'Follow the standard account security steps to prevent future unauthorized access.'
      }
    ],

    shared_credentials: [
      {
        number: 1,
        title: 'Change the password immediately',
        text: 'Create a new, unique password that is not used on another account.'
      },
      {
        number: 2,
        title: 'Review signed-in sessions and devices',
        text: 'Sign out anything that shouldn\'t be there. Verification codes that were shared are typically valid for only a few minutes and will expire.'
      },
      {
        number: 3,
        title: 'Enable or verify two-factor authentication',
        text: 'Once 2FA is active, shared verification codes won\'t help someone log in. New codes are generated for each login attempt.'
      },
      {
        number: 4,
        title: 'Verify recovery information is secure',
        text: 'Make sure recovery email, phone, and backup options are only accessible to your child.'
      },
      {
        number: 5,
        title: 'Talk with your child about credential safety',
        text: 'Explain why passwords and verification codes should never be shared, even with trusted friends.'
      }
    ],

    unauthorized_purchases: [
      {
        number: 1,
        title: 'Secure the account immediately',
        text: 'Change the password, review devices, check recovery info, and enable 2FA using the standard security steps.'
      },
      {
        number: 2,
        title: 'Preserve purchase records',
        text: 'Take screenshots or notes of unauthorized charges, dates, and what was purchased.'
      },
      {
        number: 3,
        title: 'Contact the platform\'s billing or support team',
        text: 'Report the unauthorized purchases and request a refund. Platforms often reverse fraudulent charges.'
      },
      {
        number: 4,
        title: 'If a payment card was charged, contact the card issuer',
        text: 'Report the unauthorized charge and follow the card issuer\'s dispute process. Card issuers investigate and can issue temporary or permanent credits.'
      }
    ],

    multiple_indicators: [
      {
        number: 1,
        title: 'Change the password and review devices',
        text: 'Create a new, unique password. Sign out unfamiliar sessions/devices.'
      },
      {
        number: 2,
        title: 'Verify recovery information is still correct',
        text: 'Check recovery email, phone, and other security settings.'
      },
      {
        number: 3,
        title: 'Enable or verify two-factor authentication',
        text: 'Add a second security layer to prevent future unauthorized access.'
      },
      {
        number: 4,
        title: 'Review connected apps and remove anything unfamiliar',
        text: 'Revoke access to apps or services your child doesn\'t recognize.'
      },
      {
        number: 5,
        title: 'Use deeper help sections below for specific issues',
        text: 'If posts need removal, purchases need disputing, or other specific actions are needed, expand the matching help sections.'
      }
    ]
  },

  // PRIMARY ACTIONS RULES (data-driven selection)
  primaryActionsRules: [
    { when: { flag: 'locked_out' }, use: 'recovery' },
    { when: { flag: 'impersonation' }, use: 'impersonation' },
    { when: { flag: 'unauthorized_purchases' }, use: 'unauthorized_purchases' },
    { when: { flag: 'shared_credentials' }, use: 'shared_credentials' },
    { when: { flag: 'multiple_indicators' }, use: 'multiple_indicators' }
  ],

  // DEEPER HELP SECTIONS (progressive disclosure)
  deeperHelpSections: [
    {
      id: 'secure-account',
      show: 'whenFlag',
      flag: 'can_access',
      title: 'Secure the account after recovery',
      intro: 'If your child can still access the account, these steps help prevent future unauthorized access:',
      points: [
        'Change the password to something new and unique.',
        'Sign out any unrecognized devices from account settings.',
        'Verify recovery email and phone number are still correct.',
        'Check that connected apps and third-party services are familiar.',
        'Turn on two-factor authentication for extra security.',
        'Monitor the account for the next few days for unusual activity.'
      ]
    },

    {
      id: 'recovery-process',
      show: 'whenFlag',
      flag: 'locked_out',
      title: 'Getting back into the account',
      intro: 'If the account is locked out, follow the platform\'s official recovery process:',
      points: [
        'Go to the platform\'s official recovery page (link in primary actions).',
        'Follow the identity verification steps requested.',
        'This might ask for recovery email, phone verification, security questions, or other information you set up when creating the account.',
        'Recovery time varies depending on verification method; some are instant, others may take longer.',
        'If official recovery doesn\'t work, use the platform\'s support channel to get help.'
      ]
    },

    {
      id: 'check-other-accounts',
      show: 'always',
      title: 'Check other accounts for the same password',
      intro: 'If your child reused this password on other accounts, they\'re at risk too:',
      points: [
        'Identify other accounts that use the same password.',
        'Change the password on each of those accounts to something unique.',
        'The recovery email for this account is especially important—if someone can access the email, they can reset passwords on ANY account that uses it.',
        'Change the recovery email password and enable two-factor authentication on it.',
        'If sensitive accounts (social media, email, gaming, banking) share the password, prioritize those first.'
      ]
    },

    {
      id: 'impersonation-impact',
      show: 'whenFlag',
      flag: 'impersonation',
      title: 'Addressing impersonation and unauthorized posts',
      intro: 'If someone posted or messaged as your child:',
      points: [
        'Review recent activity to see what was posted or sent.',
        'Screenshot or record anything important before reporting or removing it.',
        'Use the platform\'s report abuse/impersonation feature to flag unauthorized content.',
        'Delete or ask the platform to remove any inappropriate or harmful posts.',
        'If messages were sent to friends, a quick "my account was compromised" message can help clear up confusion.',
        'Most platforms remove impersonation content quickly once reported.'
      ]
    },

    {
      id: 'unauthorized-purchases-help',
      show: 'whenFlag',
      flag: 'unauthorized_purchases',
      title: 'Disputing unauthorized purchases',
      intro: 'For unauthorized charges, take action with both the platform and your payment card:',
      points: [
        'Gather evidence: take screenshots of the unauthorized purchases with dates and amounts.',
        'Contact the platform\'s billing or support team first—many will reverse unauthorized charges within 30 days.',
        'If the platform won\'t refund, contact your card issuer (the company that issued your credit/debit card).',
        'Your card issuer can investigate disputes and often issues a temporary or permanent credit while investigating.',
        'Card issuers typically investigate within 60 days for credit cards or according to Regulation E for debit cards.',
        'For large-scale fraud beyond the platform, file a report at IdentityTheft.gov for additional resources.'
      ]
    },

    {
      id: 'talk-with-child',
      show: 'always',
      title: 'Talk with your child about what happened',
      intro: 'Understanding what happened helps prevent future problems:',
      points: [
        'Ask open-ended questions: "Can you tell me what happened?" rather than accusatory ones.',
        'Listen without immediately assigning blame. Many compromises happen accidentally (shared password, phishing link, reused password).',
        'Ask if they clicked something unusual, shared a code, or used the same password elsewhere.',
        'Reassure them that reporting the problem was the right thing to do.',
        'Avoid absolute statements like "I won\'t take your device away" since you don\'t know your family\'s rules, but emphasize solving the problem together.',
        'Use this as a learning moment to discuss password safety and recognizing phishing or suspicious messages.'
      ]
    },

    {
      id: 'prevent-future',
      show: 'always',
      title: 'Prevent this from happening again',
      intro: 'Practical steps to reduce the risk of future compromise:',
      points: [
        'Create strong, unique passwords for each account. Use a password manager to keep track.',
        'Enable two-factor authentication on important accounts.',
        'Never share passwords, verification codes, or recovery codes—not even with close friends.',
        'Be cautious of suspicious links in messages, emails, or posts. Official accounts won\'t ask you to log in outside the official app/website.',
        'Review account privacy settings regularly and check connected apps/services.',
        'Keep checking in with your child about account safety. Most platforms have security features and settings they offer.'
      ]
    }
  ],

  // IMMEDIATE SAFETY (shown when threat flag is set)
  immediateSafety: {
    title: 'Safety comes first',
    content: [
      'If your child or someone else is in immediate physical danger, call 911 or your local emergency number right now.',
      'If the threat is not immediate but is specific or credible (location, timing, method), preserve the information and consider contacting local law enforcement.',
      'Do not wait for DigitalCap if there is a real threat of harm.',
      'After addressing immediate safety, you can get additional guidance below.'
    ]
  },

  // UNSURE SAFETY NOTE
  unsureSafetyNote: {
    title: 'When to treat this as urgent:',
    resourceIds: ['988-crisis-lifeline'],
    content: [
      'If you\'re unsure about access status, try logging in with the current password. If login fails, the account is likely locked out. If it works, the account is accessible.',
      'If your child is showing signs of extreme distress about the account compromise, consider contacting a trusted adult or counselor.',
      'If there are threats of harm involved, contact local law enforcement.'
    ]
  },

  // PLATFORM RESOURCE MAPPING (future)
  platformResourcePurpose: 'account-recovery'
};
