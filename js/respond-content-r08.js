const R08_IDENTITY_THEFT = {
  id: 'R08',
  title: 'Identity Theft or Unfamiliar Activity',
  description: 'You found an account, transaction, tax notice, wages, or other activity you do not recognize.',
  questions: [
    {
      id: 'affected-person',
      text: 'Whose information or account is affected?',
      answers: [
        {
          value: 'affected-self',
          label: 'My information or account',
          flag: 'affected_self'
        },
        {
          value: 'affected-other',
          label: 'Someone else\'s information or account',
          flag: 'affected_other'
        },
        {
          value: 'affected-unsure',
          label: 'I\'m not sure',
          flag: 'affected_unsure'
        }
      ]
    },
    {
      id: 'activity-type',
      text: 'What did you notice?',
      captureAs: 'incidentType',
      answers: [
        {
          value: 'unfamiliar-transaction',
          label: 'An unfamiliar bank or credit-card transaction',
          detail: 'A charge or withdrawal I did not authorize.',
          flag: 'unfamiliar_transaction'
        },
        {
          value: 'fraudulent-account',
          label: 'An account, loan, debt, or credit application I did not open',
          detail: 'A new account appeared on my credit report or I received a bill.',
          flag: 'fraudulent_account'
        },
        {
          value: 'tax-issue',
          label: 'A tax return, IRS notice, or tax record I do not recognize',
          detail: 'An IRS letter, unexpected tax notice, or tax information I did not file.',
          flag: 'tax_issue'
        },
        {
          value: 'wage-issue',
          label: 'Wages or employment activity I do not recognize',
          detail: 'A W-2, 1099, or wages attributed to me that I did not earn.',
          flag: 'wage_issue'
        },
        {
          value: 'scam-info-shared',
          label: 'I shared personal or financial information with a suspicious person',
          detail: 'I provided information to someone I now think was a scammer.',
          flag: 'scam_info_shared',
          routeToProtocol: 'phishing',
          pendingAnswer: 'personal-shared'
        },
        {
          value: 'exposure-only',
          label: 'My identification or personal information was lost, stolen, or exposed another way',
          detail: 'My information was compromised, but no fraudulent activity yet.',
          flag: 'exposure_only'
        },
        {
          value: 'account-hacked',
          label: 'An online account was hacked or taken over',
          detail: 'Someone else accessed or is using my account without permission.',
          flag: 'account_hacked',
          routeToProtocol: 'hacked',
          carryAudience: true
        },
        {
          value: 'identity-unsure',
          label: 'Something else or I\'m not sure',
          detail: 'I\'m not sure what kind of fraud or issue this is.',
          flag: 'identity_unsure'
        }
      ]
    }
  ],
  primaryActions: {
    'unfamiliar-transaction': [
      {
        number: 1,
        title: 'Contact the institution immediately',
        text: 'Call the number on the back of your card or statement, or visit the official website. Report the unfamiliar transaction and ask what to do next.'
      },
      {
        number: 2,
        title: 'Follow the institution\'s dispute process',
        text: 'The financial institution will provide instructions.'
      },
      {
        number: 3,
        title: 'Review your account',
        text: 'Check recent activity. Write down or take screenshots of transactions you do not recognize.'
      },
      {
        number: 4,
        title: 'Get CFPB guidance on disputes',
        text: 'For additional guidance, use the CFPB information that matches the situation: <a href="https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-my-money-back-after-i-discover-an-unauthorized-transaction-or-money-missing-from-my-bank-account-en-1017/" target="_blank" rel="noopener noreferrer" aria-label="CFPB unauthorized bank-account transactions, opens in a new tab">unauthorized bank-account transactions</a> or <a href="https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-a-charge-on-my-credit-card-bill-en-61/" target="_blank" rel="noopener noreferrer" aria-label="CFPB credit-card charge disputes, opens in a new tab">credit-card charge disputes</a>.'
      },
      {
        number: 5,
        title: 'Report broader identity theft if found',
        text: 'If you discover other signs of identity theft, go to <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a> to report and create a recovery plan.'
      }
    ],
    'fraudulent-account': [
      {
        number: 1,
        title: 'Create a recovery plan at IdentityTheft.gov',
        text: 'Visit <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a>. Answer their assessment questions. You will get a personalized recovery plan and Identity Theft Report.'
      },
      {
        number: 2,
        title: 'Contact the business where the account was opened',
        text: 'Use the account statement or official website to find fraud/support contact information. Explain that you did not open this account.'
      },
      {
        number: 3,
        title: 'Check for other unfamiliar accounts',
        text: 'Get free credit reports at <a href="https://www.annualcreditreport.com/" target="_blank" rel="noopener noreferrer" aria-label="AnnualCreditReport.com, opens in a new tab">AnnualCreditReport.com</a>. Look for other accounts you did not open. Report those to IdentityTheft.gov as well.'
      },
      {
        number: 4,
        title: 'Review fraud alerts and credit freezes',
        text: 'Read <a href="https://consumer.ftc.gov/articles/credit-freezes-and-fraud-alerts" target="_blank" rel="noopener noreferrer" aria-label="FTC credit freeze and alert guidance, opens in a new tab">the FTC\'s guidance</a> to understand the difference. A freeze and an alert are different. Choose what fits this situation.'
      }
    ],
    'tax-issue': [
      {
        number: 1,
        title: 'Read the IRS letter or notice',
        text: 'Follow the specific instructions you received.'
      },
      {
        number: 2,
        title: 'Verify independently using IRS.gov',
        text: 'Do not use contact information from an unexpected message. Go directly to <a href="https://www.irs.gov/identity-theft-central" target="_blank" rel="noopener noreferrer" aria-label="IRS Identity Theft Central, opens in a new tab">IRS.gov</a>.'
      },
      {
        number: 3,
        title: 'Follow IRS Identity Theft Central guidance',
        text: 'The IRS will provide situation-specific steps at <a href="https://www.irs.gov/identity-theft-central" target="_blank" rel="noopener noreferrer" aria-label="IRS Identity Theft Central, opens in a new tab">IRS Identity Theft Central</a>.'
      },
      {
        number: 4,
        title: 'Report other identity misuse',
        text: 'If you also found fraud in bank accounts or credit, use <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a>.'
      }
    ],
    'wage-issue': [
      {
        number: 1,
        title: 'Check your earnings record',
        text: 'Create or log into <a href="https://www.ssa.gov/myaccount/" target="_blank" rel="noopener noreferrer" aria-label="my Social Security account, opens in a new tab">my Social Security</a>. Review your earnings history.'
      },
      {
        number: 2,
        title: 'Report incorrect wages to Social Security',
        text: 'If you see wages you did not earn, report the inconsistency. See <a href="https://www.ssa.gov/faqs/en/questions/KA-02238.html" target="_blank" rel="noopener noreferrer" aria-label="SSA wage reporting FAQ, opens in a new tab">SSA\'s guidance on reporting discrepancies</a>.'
      },
      {
        number: 3,
        title: 'Handle any tax notices',
        text: 'If there is an unknown W-2, 1099, or tax notice, use <a href="https://www.irs.gov/identity-theft-fraud-scams/employment-related-identity-theft" target="_blank" rel="noopener noreferrer" aria-label="IRS employment-related identity theft guidance, opens in a new tab">IRS employment-related identity-theft guidance</a>.'
      },
      {
        number: 4,
        title: 'Report broader identity theft if found',
        text: 'If you also found fraudulent accounts or credit fraud, use <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a>.'
      }
    ],
    'exposure-only': [
      {
        number: 1,
        title: 'Understand exposure vs. active fraud',
        text: 'Information loss or exposure is not the same as confirmed identity theft. You have not yet found misuse.'
      },
      {
        number: 2,
        title: 'Get guidance on lost or stolen information',
        text: 'Read <a href="https://www.identitytheft.gov/Info-Lost-or-Stolen" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov Info Lost or Stolen, opens in a new tab">IdentityTheft.gov\'s guidance on lost or stolen information</a>.'
      }
    ],
    'scam-info-shared': [
      {
        number: 1,
        title: 'Information provided to scammer',
        text: 'You have selected the scam and phishing pathway. Detailed guidance is available in the Scam, Phishing, or Suspicious Contact section.'
      }
    ],
    'account-hacked': [
      {
        number: 1,
        title: 'Account recovery pathway',
        text: 'You have selected the account recovery pathway. Detailed guidance is available in the Hacked or Compromised Account section.'
      }
    ],
    'identity-unsure': [
      {
        number: 1,
        title: 'Use IdentityTheft.gov\'s assessment',
        text: 'Go to <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a>. Answer their questions to identify what happened and the appropriate recovery steps.'
      },
      {
        number: 2,
        title: 'Check credit reports for unfamiliar accounts',
        text: 'Get free reports at <a href="https://www.annualcreditreport.com/" target="_blank" rel="noopener noreferrer" aria-label="AnnualCreditReport.com, opens in a new tab">AnnualCreditReport.com</a>. Look for accounts you did not open.'
      },
      {
        number: 3,
        title: 'Contact the relevant institution',
        text: 'If it\'s a specific bank or card issue, contact that institution directly. If it\'s an online account, use the R06 pathway.'
      }
    ],
    default: [
      {
        number: 1,
        title: 'Use IdentityTheft.gov\'s assessment',
        text: 'Go to <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer" aria-label="IdentityTheft.gov, opens in a new tab">IdentityTheft.gov</a>. Answer their questions to identify what happened and the appropriate recovery steps.'
      },
      {
        number: 2,
        title: 'Check credit reports',
        text: 'Get free reports at <a href="https://www.annualcreditreport.com/" target="_blank" rel="noopener noreferrer" aria-label="AnnualCreditReport.com, opens in a new tab">AnnualCreditReport.com</a>. Look for accounts you did not open.'
      },
      {
        number: 3,
        title: 'Contact the relevant institution or return to the main menu',
        text: 'For a specific bank or card issue, contact that institution. For an online account, return to the main menu and select the R06 pathway.'
      }
    ]
  },
  primaryActionsRules: [
    { when: { flag: 'unfamiliar_transaction' }, use: 'unfamiliar-transaction' },
    { when: { flag: 'fraudulent_account' }, use: 'fraudulent-account' },
    { when: { flag: 'tax_issue' }, use: 'tax-issue' },
    { when: { flag: 'wage_issue' }, use: 'wage-issue' },
    { when: { flag: 'scam_info_shared' }, use: 'scam-info-shared' },
    { when: { flag: 'exposure_only' }, use: 'exposure-only' },
    { when: { flag: 'account_hacked' }, use: 'account-hacked' },
    { when: { flag: 'identity_unsure' }, use: 'identity-unsure' }
  ],
  deeperHelpSections: [
    {
      id: 'credit-reports-not-monitoring',
      show: 'whenFlag',
      flag: 'fraudulent_account',
      title: 'Free credit reports are not credit monitoring',
      intro: 'AnnualCreditReport.com provides a different service than credit monitoring.',
      points: [
        '<a href="https://www.annualcreditreport.com/" target="_blank" rel="noopener noreferrer" aria-label="AnnualCreditReport.com, opens in a new tab">AnnualCreditReport.com</a> provides free credit reports from Equifax, Experian, and TransUnion.',
        'A credit report shows accounts and activity at one moment. It is a snapshot.',
        'Credit monitoring is a separate paid service that watches for changes and sends alerts.',
        'Free credit reports let you check for unfamiliar accounts yourself.',
        'Check reports regularly to catch identity misuse early.'
      ]
    },
    {
      id: 'alert-vs-freeze',
      show: 'whenFlag',
      flag: 'fraudulent_account',
      title: 'Fraud alert versus credit freeze',
      intro: 'Both are free ways to make it harder for someone to open fraudulent accounts.',
      points: [
        'Fraud alert: Tells businesses to verify your identity before opening new credit. Less restrictive. Free. Lasts 1 year.',
        'Credit freeze: Restricts access to your credit report, making it very difficult to open new credit accounts. More restrictive. Free.',
        'Both are free from the credit bureaus (Equifax, Experian, TransUnion).',
        'Read <a href="https://consumer.ftc.gov/articles/credit-freezes-and-fraud-alerts" target="_blank" rel="noopener noreferrer" aria-label="FTC credit freeze and alert guidance, opens in a new tab">the FTC\'s guidance</a> to decide which protection fits this situation.'
      ]
    },
    {
      id: 'verify-irs-notice',
      show: 'whenFlag',
      flag: 'tax_issue',
      title: 'Verify an IRS notice independently',
      intro: 'Scammers sometimes send fake IRS notices to create panic.',
      points: [
        'Do not use phone numbers or links from an unexpected letter or message.',
        'Go directly to <a href="https://www.irs.gov/identity-theft-central" target="_blank" rel="noopener noreferrer" aria-label="IRS Identity Theft Central, opens in a new tab">IRS.gov</a> to verify the notice.',
        'Call the IRS directly using the number on their official website, not from the letter.',
        'Follow the instructions in a verified IRS notice or the official IRS website.'
      ]
    },
    {
      id: 'verify-ssa-earnings',
      show: 'whenFlag',
      flag: 'wage_issue',
      title: 'Review your Social Security earnings record',
      intro: 'The earnings record shows all wages reported under your SSN.',
      points: [
        'Create or log into <a href="https://www.ssa.gov/myaccount/" target="_blank" rel="noopener noreferrer" aria-label="my Social Security account, opens in a new tab">my Social Security</a> to view the official record.',
        'Look for wages you did not earn.',
        'If you see incorrect wages, report them to Social Security. See <a href="https://www.ssa.gov/faqs/en/questions/KA-02238.html" target="_blank" rel="noopener noreferrer" aria-label="SSA wage reporting FAQ, opens in a new tab">SSA\'s guidance on reporting discrepancies</a>.',
        'Correcting the record protects your future benefits.'
      ]
    }
  ]
};
