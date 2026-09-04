// DigitalCap RESPOND - R07: Scam, Phishing, or Suspicious Contact
// Content-only module. No logic. No Firebase. No persistence.
// Redesigned: Five-question flow for grandma-friendly scam recognition.
// Reuses existing recovery actions and deeper-help content.

const R07_PHISHING = {
  id: 'R07',
  title: 'I Got a Suspicious Message, Call, or Request',
  description: 'Someone contacted me, frightened or pressured me, asked for money or gift cards, wanted information, or told me to click or install something.',

  questions: [
    // IMMEDIATE SAFETY QUESTION (existing, unchanged)
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

    // AUDIENCE QUESTION (new)
    {
      id: 'audience',
      number: 2,
      text: 'Who received the message, call, or request?',
      description: '',
      type: 'incident-cards',
      captureAs: 'audience',
      answers: [
        {
          label: 'I did',
          value: 'self',
          flag: 'affected_self'
        },
        {
          label: 'Someone I\'m helping did',
          value: 'other',
          flag: 'affected_other'
        },
        {
          label: 'I\'m not sure',
          value: 'unsure',
          flag: 'affected_unsure'
        }
      ]
    },

    // SCAM STORY RECOGNITION (new Q3)
    {
      id: 'scam-story',
      number: 3,
      text: 'What story or explanation did they use?',
      description: '',
      type: 'incident-cards',
      answers: [
        {
          label: 'A crime, investigation, list, arrest, or legal trouble',
          detail: 'They may have threatened arrest, police involvement, public exposure, or another punishment.',
          value: 'legal-threat',
          flag: 'story_legal_threat'
        },
        {
          label: 'A family emergency or someone urgently needing money',
          detail: 'They may have claimed to be a relative, police officer, lawyer, hospital, or jail.',
          value: 'family-emergency',
          flag: 'story_family_emergency'
        },
        {
          label: 'A problem with money, benefits, identity, or an account',
          detail: 'They may have mentioned a bank, Social Security, Medicare, taxes, or suspicious account activity.',
          value: 'account-or-benefits',
          flag: 'story_account_or_benefits'
        },
        {
          label: 'A problem with a computer, phone, or online account',
          detail: 'They may have claimed there was a virus, security problem, refund, or unauthorized charge.',
          value: 'tech-support',
          flag: 'story_tech_support'
        },
        {
          label: 'A prize, refund, grant, or sweepstakes',
          detail: 'They said to pay, provide information, or act quickly to receive it.',
          value: 'prize-or-refund',
          flag: 'story_prize_or_refund'
        },
        {
          label: 'A job, investment, loan, or romantic relationship',
          detail: 'They promised money, income, returns, affection, or another opportunity.',
          value: 'opportunity',
          flag: 'story_opportunity'
        },
        {
          label: 'A bill, tax, toll, delivery, or subscription charge',
          detail: 'They said to pay or click immediately.',
          value: 'bill-or-delivery',
          flag: 'story_bill_or_delivery'
        },
        {
          label: 'Something else or I\'m not sure',
          detail: 'Choose this if none of the other descriptions fits.',
          value: 'unsure',
          flag: 'story_unsure'
        }
      ]
    },

    // REQUESTED ACTION (new Q4)
    {
      id: 'requested-action',
      number: 4,
      text: 'What did they ask for?',
      description: '',
      type: 'incident-cards',
      answers: [
        {
          label: 'Gift cards and the card numbers or PINs',
          value: 'gift-cards',
          flag: 'requested_gift_cards'
        },
        {
          label: 'Money by bank transfer, wire, cash, cryptocurrency, or payment app',
          value: 'money',
          flag: 'requested_money'
        },
        {
          label: 'A password or security code',
          value: 'login',
          flag: 'requested_login'
        },
        {
          label: 'A Social Security number, Medicare number, bank information, card information, ID, or other personal details',
          value: 'personal-info',
          flag: 'requested_personal_info'
        },
        {
          label: 'A link or QR code to be opened, or a file to be downloaded',
          value: 'click',
          flag: 'requested_click'
        },
        {
          label: 'Software installation or control of a computer or phone',
          value: 'device-access',
          flag: 'requested_device_access'
        },
        {
          label: 'A reply, telephone call, continued conversation, or secrecy',
          value: 'contact',
          flag: 'requested_contact'
        },
        {
          label: 'Something else or I\'m not sure',
          value: 'unsure',
          flag: 'requested_unsure'
        }
      ]
    },

    // WHAT ALREADY HAPPENED (new Q5)
    {
      id: 'completed-action',
      number: 5,
      text: 'What has already happened?',
      description: '',
      type: 'incident-cards',
      answers: [
        {
          label: 'Nothing yet',
          detail: 'I stopped before replying, clicking, paying, or sharing anything.',
          value: 'no-action',
          flag: 'no_action_taken'
        },
        {
          label: 'Only a reply, telephone call, or continued conversation',
          value: 'engagement',
          flag: 'engagement_ongoing'
        },
        {
          label: 'A link or QR code was opened, or a file was downloaded',
          value: 'link-opened',
          flag: 'link_opened'
        },
        {
          label: 'A password or security code was shared',
          value: 'credentials',
          flag: 'credentials_shared'
        },
        {
          label: 'Personal, identity, bank, or card information was shared',
          value: 'personal-shared',
          flag: 'personal_info_shared'
        },
        {
          label: 'Software was installed or someone controlled the device',
          value: 'device-access',
          flag: 'remote_access_allowed'
        },
        {
          label: 'Gift cards were purchased, but the numbers or PINs were not provided',
          value: 'gift-cards-purchased',
          flag: 'gift_cards_purchased_not_shared'
        },
        {
          label: 'Gift-card numbers or PINs were provided',
          value: 'gift-cards-shared',
          flag: 'gift_card_numbers_shared'
        },
        {
          label: 'Money was sent another way',
          detail: 'Bank transfer, wire, cash, cryptocurrency, payment app, or another payment.',
          value: 'money-sent',
          flag: 'money_sent'
        },
        {
          label: 'Unfamiliar activity appeared or the information may already be in use',
          value: 'identity-misuse',
          flag: 'identity_misuse_detected'
        },
        {
          label: 'Someone entered an account or locked the owner out',
          value: 'account-compromised',
          flag: 'account_compromised_detected'
        },
        {
          label: 'I\'m not sure what happened',
          value: 'unsure',
          flag: 'action_unsure'
        }
      ]
    }
  ],

  // PRIMARY ACTIONS (reused and reorganized by combination flag)
  primaryActions: {
    // NOTHING HAPPENED YET - Prevention focus
    'no-action-taken': [
      {
        number: 1,
        title: 'This has the clear signs of a scam',
        text: 'You are not in trouble. Scammers deliberately use fear, urgency, secrecy, or convincing stories to make people act before checking with someone they trust.'
      },
      {
        number: 2,
        title: 'Do not reply or provide information',
        text: 'Don\'t click links, download files, or reply. Don\'t provide any personal information.'
      },
      {
        number: 3,
        title: 'Verify independently',
        text: 'If the message claims to be from a company or government you know, log into their website or app directly or call their official phone number to check. Never use contact information from the suspicious message.'
      },
      {
        number: 4,
        title: 'Report through the service and ReportFraud.ftc.gov',
        text: 'Report it using the service\'s abuse or spam reporting tool. Then delete the message. Also report it to the FTC at <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a>.'
      }
    ],

    // ENGAGEMENT ONGOING - Stop communication
    'engagement-ongoing': [
      {
        number: 1,
        title: 'This has the clear signs of a scam',
        text: 'You are not in trouble. Scammers deliberately use fear, urgency, secrecy, or convincing stories to make people act before checking with someone they trust.'
      },
      {
        number: 2,
        title: 'Stop communicating with the person immediately',
        text: 'Hang up the call, stop replying to messages, and block the contact. Do not provide any additional information.'
      },
      {
        number: 3,
        title: 'Do not send money, gift cards, or personal information',
        text: 'Stop any transaction or information-sharing you may have been considering.'
      },
      {
        number: 4,
        title: 'Report the contact',
        text: 'Report it to the service and to <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a>.'
      }
    ],

    // LINK/QR CODE OPENED
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

    // CREDENTIALS SHARED
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
        title: 'Review your account and report if compromised',
        text: 'Check for unauthorized activity. If you cannot log in or suspect someone else accessed your account, the account may be compromised.'
      }
    ],

    // PERSONAL INFO SHARED
    'personal-info-shared': [
      {
        number: 1,
        title: 'Go to IdentityTheft.gov immediately',
        text: 'Visit <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a>. It will create a personalized recovery plan based on what information was exposed.'
      },
      {
        number: 2,
        title: 'Contact your bank if needed',
        text: 'If you shared bank account, debit-card, credit-card, or account information, call your financial institution right away using the number on your card or statement.'
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

    // REMOTE ACCESS ALLOWED
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
        text: 'Change passwords for email, banking, and other sensitive accounts using a different device if possible.'
      },
      {
        number: 4,
        title: 'Get help if needed',
        text: 'If you\'re uncomfortable checking your device or unusual things happen, contact the device maker, a trusted tech-support company, or a knowledgeable person you know.'
      }
    ],

    // GIFT CARDS PURCHASED BUT NOT SHARED
    'gift-cards-purchased-not-shared': [
      {
        number: 1,
        title: 'Do not provide the numbers or PINs',
        text: 'Keep the cards and receipt in your possession. The card number and PIN allow the scammer to take all the value immediately.'
      },
      {
        number: 2,
        title: 'Stop communicating with the scammer',
        text: 'Do not reply, call back, or continue the conversation. Hang up and block the contact when safe.'
      },
      {
        number: 3,
        title: 'Contact the retailer or gift-card company',
        text: 'Use the official phone number or website printed on the card or receipt. Tell them the card was obtained through a scam. Ask what cancellation, return, or refund options are available. Do not expect a guaranteed refund, but ask about your options.'
      },
      {
        number: 4,
        title: 'Contact the bank or card company used for the purchase',
        text: 'If you used a bank card or credit card, call that provider using the number on your card or statement. Explain that the purchase was made as a result of fraud. Ask whether they can assist with a dispute or refund.'
      },
      {
        number: 5,
        title: 'Report the scam',
        text: 'File a report at <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a>. Keep the physical gift cards, receipt, messages, amount, date, and store information.'
      },
      {
        number: 6,
        title: 'Ask someone you trust to help',
        text: 'Have a family member or friend sit with you while you make calls to the retailer and bank, or help you complete the report.'
      }
    ],

    // GIFT CARD NUMBERS SHARED
    'gift-card-numbers-shared': [
      {
        number: 1,
        title: 'Stop communicating and do not buy more cards',
        text: 'Do not reply, call back, or continue the conversation. Hang up and block the contact. Do not purchase or share additional gift-card numbers.'
      },
      {
        number: 2,
        title: 'Contact the gift-card company immediately',
        text: 'Use the official phone number or website printed on the card or receipt. Tell them the card was used in a scam and provide the card number and amount. Ask whether any remaining balance can be frozen or recovered. Acting quickly may help.'
      },
      {
        number: 3,
        title: 'Ask whether funds can be recovered',
        text: 'Tell the gift-card company the card was used in a scam. Ask what recovery options might be available. Recovery is not guaranteed, but contacting them quickly is important.'
      },
      {
        number: 4,
        title: 'Keep the cards, receipts, and messages',
        text: 'Preserve the physical gift cards, receipts, messages from the scammer, the amount, the time of purchase, the store or platform, and the date. Do not discard them.'
      },
      {
        number: 5,
        title: 'Contact the bank or card company used for the purchase',
        text: 'If you used a bank card or credit card to buy the gift cards, contact that provider using the number on your card or statement and explain the fraud.'
      },
      {
        number: 6,
        title: 'Report the scam',
        text: 'File a report at <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a>. Learn more about gift-card fraud at <a href="https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" target="_blank" rel="noopener noreferrer" aria-label="FTC gift-card scam guidance, opens in a new tab">consumer.ftc.gov</a>.'
      },
      {
        number: 7,
        title: 'Ask someone you trust to help',
        text: 'Have a family member or friend help you complete these steps. Scammers design these situations to create panic. Asking for help is a sign of strength, not weakness.'
      }
    ],

    // MONEY SENT
    'money-sent': [
      {
        number: 1,
        title: 'Contact your provider right now',
        text: 'Call your bank, card issuer, wire-transfer company, payment app, cryptocurrency exchange, or other provider immediately using the official phone number on your account statement or card.'
      },
      {
        number: 2,
        title: 'Explain the situation',
        text: 'Tell them you were scammed and describe the amount, payment method, time, and what the scammer claimed. Provide the recipient\'s information if you have it.'
      },
      {
        number: 3,
        title: 'Ask about stopping or reversing the payment',
        text: 'Ask whether the transaction can be stopped, reversed, or refunded. Options vary depending on how you paid and how much time has passed.'
      },
      {
        number: 4,
        title: 'Report to ReportFraud.ftc.gov',
        text: 'File a report at <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" aria-label="ReportFraud.ftc.gov, opens in a new tab">ReportFraud.ftc.gov</a> to create an official record and help the FTC track scam patterns. Ask someone you trust to help you complete these calls.'
      }
    ],

    // ACTION UNSURE
    'action-unsure': [
      {
        number: 1,
        title: 'Think through what you may have done',
        text: 'Did you click something, download something, enter information, allow device access, or send money? Matching your action to the right guidance helps.'
      },
      {
        number: 2,
        title: 'Verify the contact independently',
        text: 'If the message claims to be from a real company or organization, log into their website or app directly or call their official phone number using contact information from your records or their official website. Do not use the contact information from the message.'
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

  // PRIMARY ACTIONS RULES (selects specialized actions based on derived combination flags)
  primaryActionsRules: [
    { when: { flag: 'gift-card-numbers-shared' }, use: 'gift-card-numbers-shared' },
    { when: { flag: 'gift-cards-purchased-not-shared' }, use: 'gift-cards-purchased-not-shared' },
    { when: { flag: 'money-sent' }, use: 'money-sent' },
    { when: { flag: 'remote-access-allowed' }, use: 'remote-access-allowed' },
    { when: { flag: 'personal-info-shared' }, use: 'personal-info-shared' },
    { when: { flag: 'credentials-shared' }, use: 'credentials-shared' },
    { when: { flag: 'link-opened' }, use: 'link-opened' },
    { when: { flag: 'engagement-ongoing' }, use: 'engagement-ongoing' },
    { when: { flag: 'no-action-taken' }, use: 'no-action-taken' },
    { when: { flag: 'action-unsure' }, use: 'action-unsure' }
  ],

  // DEEPER HELP SECTIONS (reused from original R07 where accurate, new where needed)
  deeperHelpSections: [
    {
      id: 'government-impersonation-warning',
      show: 'whenFlag',
      flag: 'government_impersonation_detected',
      title: 'Government and authority impersonation',
      intro: 'Legitimate government agencies and law enforcement do not:',
      points: [
        'Demand payment by gift card, cryptocurrency, wire transfer, or prepaid card',
        'Require secrecy or threaten to keep the matter confidential',
        'Demand immediate payment to avoid arrest or legal consequences',
        'Refuse to allow you to hang up and verify their identity independently',
        'Caller ID and displayed telephone numbers can be faked. Do not rely on caller ID as proof. Contact the agency independently using its official website or a number from an official statement.'
      ]
    },

    {
      id: 'ssa-government-safety',
      show: 'whenFlag',
      flag: 'story_legal_threat',
      title: 'If someone claims to be from Social Security or government',
      intro: 'The Social Security Administration has issued warnings about impersonation scams. Visit <a href="https://www.ssa.gov/scam/" target="_blank" rel="noopener noreferrer" aria-label="SSA scam warnings, opens in a new tab">ssa.gov/scam</a> for official information.',
      points: [
        'Social Security will never threaten arrest.',
        'Do not provide your Social Security number to unsolicited callers.',
        'If you have questions about your actual Social Security benefits, hang up and call Social Security directly at 1-800-772-1213 using an official phone book or their official website.'
      ]
    },

    {
      id: 'scam-recognition-story-legal',
      show: 'whenFlag',
      flag: 'story_legal_threat',
      title: 'Why legal threats combined with payment requests are a scam',
      intro: 'Scammers use fear of legal consequences to pressure people to act quickly and secretly.',
      points: [
        'A demand for immediate payment through gift cards, cryptocurrency, wire transfer, or cash is a scam warning. Stop and verify the claim independently.',
        'A call or message demanding immediate payment to avoid arrest or legal consequences is not a legitimate way to resolve a legal matter.',
        'If you are genuinely concerned about a legal matter after verifying independently through official channels, you can speak with a lawyer.'
      ]
    },

    {
      id: 'scam-recognition-story-family',
      show: 'whenFlag',
      flag: 'story_family_emergency',
      title: 'Why family emergency stories combined with payment requests are a scam',
      intro: 'Scammers exploit the urgency and emotion of family situations to bypass careful thinking.',
      points: [
        'Real family emergencies can be verified by calling or texting the person directly (not using contact info from the message).',
        'Real emergencies do not require gift cards or secrecy.',
        'Grandchild and relative scams are among the most common. Scammers pose as a family member in distress, sometimes claiming to be in jail or needing medical care.',
        'If you receive an urgent money request from a family member, call them back using a phone number you know is correct.'
      ]
    },

    {
      id: 'scam-recognition-story-account',
      show: 'whenFlag',
      flag: 'story_account_or_benefits',
      title: 'Why account-risk alerts combined with payment or information requests are suspicious',
      intro: 'Scammers impersonate banks, Medicare, Social Security, or tax agencies to extract money or information.',
      points: [
        'Real financial institutions contact you through official channels and can be verified independently.',
        'Real alerts allow time to verify through your account, official website, or official phone number.',
        'If you receive an alert about your account, hang up and call the institution using the phone number on your official statement or card.',
        'Never provide passwords, account numbers, or verification codes based on an unsolicited message.'
      ]
    },

    {
      id: 'scam-recognition-story-tech',
      show: 'whenFlag',
      flag: 'story_tech_support',
      title: 'Why tech-support claims combined with device-access or payment requests are a scam',
      intro: 'Scammers pose as tech support to gain access to your device or payment information.',
      points: [
        'Real tech support is initiated by you, not by unsolicited calls or pop-ups.',
        'Microsoft, Apple, and legitimate companies will not call you unsolicited to fix your device.',
        'Real security alerts appear on the device and can be verified by restarting or checking your device maker\'s official website.',
        'Never allow remote access to your device based on an unsolicited contact.',
        'If you think your device has a problem, contact the device maker directly using contact information from their official website.'
      ]
    },

    {
      id: 'gift-card-scam-recognition',
      show: 'whenFlag',
      flag: 'requested_gift_cards',
      title: 'Gift-card payment is a red flag for scams',
      intro: 'Legitimate organizations will never ask for payment via gift cards.',
      points: [
        'Money taken from a gift card can be difficult to recover. Contact the gift-card company immediately and ask whether any funds remain or can be recovered.',
        'Scammers request gift cards because the numbers can be used quickly and recovery may be difficult.',
        'Government agencies, banks, police, and legitimate businesses use official payment methods, not gift cards.',
        'If you have already purchased gift cards, do not provide the numbers or PINs. See the recovery steps above.'
      ]
    },

    {
      id: 'general-scam-tactics',
      show: 'whenFlag',
      flag: 'story_unsure',
      title: 'Common scam tactics',
      intro: 'Watch for these red flags in any message:',
      points: [
        'Urgent language, threats, or offers that seem too good to be true',
        'Requests for passwords, PINs, or verification codes',
        'Links that don\'t match the real company\'s website',
        'Requests to download files or grant remote access',
        'Impersonation of a company, government agency, or trusted person',
        'Requests for secrecy or unusual payment methods',
        'Pressure to act quickly without time to verify'
      ]
    },

    {
      id: 'link-compromise-check',
      show: 'whenFlag',
      flag: 'link_opened',
      title: 'If you think information was entered after clicking',
      intro: 'If you realize you entered a password or personal information on the page after clicking the link, or if you notice unusual account activity, the account may be compromised.',
      points: [
        'Change your password immediately.',
        'Enable two-factor authentication if available.',
        'Check for unauthorized activity on the account.'
      ]
    },

    {
      id: 'malware-scanning',
      show: 'whenFlag',
      flag: 'remote_access_allowed',
      title: 'Why remote access is dangerous',
      intro: 'Someone with remote access to your device could:',
      points: [
        'See passwords you type',
        'Install hidden software',
        'Steal files, photos, or personal information'
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
      id: 'identitytheft-explained',
      show: 'whenFlag',
      flag: 'personal_info_shared',
      title: 'What IdentityTheft.gov will do for you',
      intro: 'The recovery plan asks what information was exposed, then provides personalized next steps. Visit <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a> to get started.',
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
      id: 'self-support-section',
      show: 'whenFlag',
      flag: 'affected_self',
      title: 'Getting help for yourself',
      intro: 'You are not to blame for being targeted by a scammer. Here is how to move forward:',
      points: [
        'Follow the recovery steps above based on what happened.',
        'Ask a trusted friend or family member to help you make calls to providers and file reports.',
        'Keep all relevant information (messages, receipts, account numbers, dates, times) in one place.',
        'Remember: Scammers are professionals at creating convincing and urgent situations. Asking for help from someone you trust is a sign of strength, not weakness.'
      ]
    },

    {
      id: 'helper-support-section',
      show: 'whenFlag',
      flag: 'affected_other',
      title: 'Helping someone after a scam',
      intro: 'If you\'re helping a family member or friend, here is how to offer support:',
      points: [
        'Do not shame, criticize, or interrogate them. They were targeted by professionals.',
        'Focus on stopping further contact and limiting damage.',
        'Help them preserve information (messages, receipts, account details).',
        'Offer to sit with them while they make calls to banks, gift-card companies, or providers.',
        'Help them file reports at ReportFraud.ftc.gov and IdentityTheft.gov if needed.',
        'Let the affected person make decisions and control the recovery process when possible.',
        'Check in with them over the following days and weeks—scams can cause emotional distress.'
      ]
    },

    {
      id: 'unsure-audience-section',
      show: 'whenFlag',
      flag: 'affected_unsure',
      title: 'When you\'re unsure who was affected',
      intro: 'Focus on stopping further contact and identifying whether money, information, accounts, or devices were involved.',
      points: [
        'If someone received the message but you\'re unsure whether they acted on it, ask them directly and without judgment.',
        'Verify accounts and devices for unauthorized activity.',
        'Follow the recovery steps based on what actually happened.',
        'If in doubt, contact the organization or bank associated with any account mentioned.'
      ]
    },

    {
      id: 'stay-cautious',
      show: 'always',
      title: 'Protect yourself from future scams',
      intro: 'After addressing this scam, here are steps to reduce risk:',
      points: [
        'Use strong, unique passwords for each account.',
        'Enable two-factor authentication where available.',
        'Be skeptical of unsolicited messages requesting money, information, or account access.',
        'Verify suspicious messages by contacting organizations independently (not using numbers or links from the message).',
        'If an offer sounds too good to be true, it probably is.',
        'Talk to trusted friends or family members about suspicious contacts before taking action.',
        'Remember: Legitimate organizations give you time to verify and do not demand secrecy.'
      ]
    }
  ],

  // IMMEDIATE SAFETY (kept from original)
  immediateSafety: {
    title: 'Safety comes first',
    content: [
      'If anyone is in immediate physical danger, call 911 or your local emergency number now.',
      'If someone has threatened harm, preserve the message if it is safe to do so and contact local law enforcement for guidance.',
      'Do not meet, pay, or continue engaging with someone who is threatening harm.',
      'Continue with DigitalCap only after immediate safety has been addressed.'
    ]
  },

  // UNSURE SAFETY NOTE (kept from original)
  unsureSafetyNote: {
    title: 'When to treat this as urgent:',
    resourceIds: ['988-crisis-lifeline'],
    content: [
      'If you are unsure whether a threat is urgent, contact local law enforcement or another trusted local support resource for guidance.',
      'If someone may hurt themselves or is experiencing an emotional crisis, <a href="tel:988" target="_blank" rel="noopener noreferrer" aria-label="Call 988, opens phone dial, opens in a new tab">call 988</a> or <a href="sms:988" target="_blank" rel="noopener noreferrer" aria-label="Text 988, opens text message, opens in a new tab">text 988</a>.',
      'Continue with the scam-response questions only after immediate safety concerns have been addressed.'
    ]
  },

  // SCAM ASSESSMENT (visible assessment shown before primary actions)
  scamAssessment: {
    heading: 'What DigitalCap sees',
    buildAssessment: function(flags, answers) {
      // This function is called by respond.html with engine.flags and engine.answers
      // Returns an assessment object with title and text

      const assessment = { title: '', text: '' };
      const f = flags;

      // Story and request combinations to determine certainty
      const hasGiftCardRequest = f.requested_gift_cards;
      const hasMoneyRequest = f.requested_money;
      const hasSecrecyRequest = f.requested_contact;
      const hasPersonalInfoRequest = f.requested_personal_info;
      const hasLoginRequest = f.requested_login;
      const hasClickRequest = f.requested_click;
      const hasDeviceAccessRequest = f.requested_device_access;
      const hasUnsureRequest = f.requested_unsure;

      const hasLegalThreat = f.story_legal_threat;
      const hasFamilyEmergency = f.story_family_emergency;
      const hasAccountWarning = f.story_account_or_benefits;
      const hasTechSupport = f.story_tech_support;
      const hasPrizeOrRefund = f.story_prize_or_refund;
      const hasOpportunity = f.story_opportunity;
      const hasBillOrDelivery = f.story_bill_or_delivery;
      const isUnsure = f.story_unsure;

      const isClearsScam = f.gift_card_numbers_shared || f.money_sent || f.remote_access_allowed || f.credentials_shared || (hasLegalThreat && (hasGiftCardRequest || hasMoneyRequest || hasPersonalInfoRequest));

      // Build story-based title and text
      let storyText = '';

      // GIFT CARD DEMANDS (strongest scam indicator)
      if (hasGiftCardRequest) {
        assessment.title = 'This has clear signs of a gift-card scam';
        storyText = 'A demand for gift cards or their numbers is a clear sign of a scam. Real organizations and government agencies never ask for payment through gift cards. No gift-card payment can clear your name, stop an arrest, or resolve a legal issue.';
      }
      // LEGAL THREAT WITH PAYMENT/INFO/SECRECY DEMAND (government impersonation)
      else if (hasLegalThreat && (hasMoneyRequest || hasPersonalInfoRequest || hasSecrecyRequest)) {
        assessment.title = 'This has clear signs of a government-impersonation scam';
        storyText = 'Scammers impersonate government agencies or police to create fear and urgency. They demand payment, information, or secrecy—none of which are part of real legal processes. A legitimate government agency will not threaten arrest or legal consequences through a phone call or message.';
      }
      // MONEY SENT OR REMOTE ACCESS ALLOWED (clear damage)
      else if (f.money_sent || f.remote_access_allowed) {
        assessment.title = 'This has clear signs of a scam';
        storyText = 'Money sent to scammers and remote access to devices are serious outcomes that require immediate action. The combination of this request and what happened shows a scam pattern.';
      }
      // CREDENTIALS SHARED (clear damage)
      else if (f.credentials_shared) {
        assessment.title = 'This has clear signs of a scam';
        storyText = 'Scammers request passwords and security codes to access accounts. Once they have these, they can change passwords and lock you out. The request for codes combined with this outcome shows a scam pattern.';
      }
      // PERSONAL INFO SHARED (clear damage)
      else if (f.personal_info_shared) {
        assessment.title = 'This has clear signs of a scam';
        storyText = 'Scammers request personal information to commit identity theft or fraud. Sharing this information combined with the story and request shows a scam pattern.';
      }
      // FAMILY EMERGENCY STORY (verify independently)
      else if (hasFamilyEmergency) {
        assessment.title = 'Verify family emergencies independently';
        storyText = 'Scammers impersonate relatives or officials claiming a family member is in danger or needs money. Before sending money or information, contact your family member directly using a phone number you already know. Do not use contact information from the message.';
      }
      // LEGAL THREAT (verify independently)
      else if (hasLegalThreat) {
        assessment.title = 'Verify legal threats independently';
        storyText = 'An unexpected call or message demanding payment or personal information to avoid arrest or legal consequences is a scam warning. Do not use the contact information or payment instructions in the message. Verify the claim using contact information from the agency\'s official website or an official statement.';
      }
      // ACCOUNT/BENEFITS WARNING (verify independently)
      else if (hasAccountWarning) {
        assessment.title = 'Verify account warnings through official channels';
        storyText = 'Scammers claim accounts are at risk or that benefits are suspended. If you receive such a warning, do not use links or phone numbers from the message. Instead, open the official app or website yourself, or call the organization using a number from your statement or official documents.';
      }
      // TECH SUPPORT CLAIM (verify independently)
      else if (hasTechSupport) {
        assessment.title = 'Unexpected tech support is a major warning sign';
        storyText = 'Unexpected tech-support contact asking for device access, payment, software installation, passwords, or security codes is a major scam warning. Do not follow the contact\'s instructions. Contact the company yourself through its official application or website.';
      }
      // PRIZE/REFUND/GRANT (verify independently)
      else if (hasPrizeOrRefund) {
        assessment.title = 'Unexpected winnings or refunds are often scams';
        storyText = 'Requests for upfront fees or sensitive information through unexpected prize, refund, or grant contact are scam warnings. Verify the organization independently before responding.';
      }
      // OPPORTUNITY (investment/job/romance) (verify independently)
      else if (hasOpportunity) {
        assessment.title = 'Too-good-to-be-true opportunities are often scams';
        storyText = 'Unexpected job, investment, loan, or relationship opportunities involving guaranteed returns, upfront fees, secrecy, or pressure are scam warnings. Verify the person, organization, and offer independently.';
      }
      // BILL/TOLL/DELIVERY/TAX (verify independently)
      else if (hasBillOrDelivery) {
        assessment.title = 'Verify unexpected bills through official channels';
        storyText = 'Scammers claim you owe money for taxes, tolls, deliveries, or subscriptions. If you receive such a message, do not use the link or phone number provided. Instead, check your account directly through the company\'s official app or website, or call using a number from your bill or official documents.';
      }
      // UNSURE STORY (generic verification)
      else if (isUnsure) {
        assessment.title = 'Pause and verify before acting';
        storyText = 'DigitalCap cannot confirm what this contact was from the information provided. Do not pay, click, install anything, or share information until you verify it independently through official channels.';
      }

      // Add request-specific guidance to story text
      let requestText = '';
      if (hasGiftCardRequest) {
        requestText = 'A gift-card demand is a clear scam sign.';
      } else if (hasMoneyRequest) {
        requestText = 'Unusual payment demands, urgency, or threats are scam warnings.';
      } else if (hasLoginRequest) {
        requestText = 'Never provide a password or security code in response to unexpected contact.';
      } else if (hasPersonalInfoRequest) {
        requestText = 'Do not provide Social Security, Medicare, banking, card, identity, or other sensitive information until the request is independently verified.';
      } else if (hasClickRequest) {
        requestText = 'Do not use the message\'s link, QR code, telephone number, or attachment. Reach the organization independently.';
      } else if (hasDeviceAccessRequest) {
        requestText = 'Unexpected requests to install software or control a device are major scam warnings.';
      } else if (hasSecrecyRequest) {
        requestText = 'Pressure to continue communicating or keep the situation secret is a scam warning.';
      } else if (hasUnsureRequest) {
        requestText = 'Pause and verify independently before taking any action.';
      }

      // Combine story and request guidance
      if (storyText && requestText && !hasGiftCardRequest) {
        // Don't duplicate if gift cards (already prominent)
        assessment.text = storyText + ' ' + requestText;
      } else if (requestText) {
        assessment.text = requestText;
      } else {
        assessment.text = storyText;
      }

      // Add shame-free reassurance based on audience
      if (f.affected_self) {
        assessment.reassurance = 'You are not to blame. Scammers create urgency and fear to make people react quickly.';
      } else if (f.affected_other) {
        assessment.reassurance = 'Help the affected person pause without blaming or embarrassing them. Scammers are professionals.';
      }

      return assessment;
    }
  }
};
