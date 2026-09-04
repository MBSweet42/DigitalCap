// DigitalCap RESPOND - R09: Intimate Images or Sextortion
// Content-only module. No logic. No Firebase. No persistence.
// Combination-specific primary actions for each scenario.

const R09_INTIMATE_IMAGES = {
  id: 'R09',
  title: 'Intimate Images or Sextortion',
  description: 'An intimate image was shared, threatened, requested, or used to pressure someone.',

  questions: [
    {
      id: 'safety-physical',
      number: 1,
      text: 'Is anyone in immediate physical danger or being threatened with physical harm?',
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

    {
      id: 'emotional-crisis',
      number: 2,
      text: 'Is the affected person thinking about suicide or self-harm, or unable to stay safe right now?',
      description: '',
      type: 'yes-no-unsure',
      answers: [
        { label: 'Yes', value: 'yes', flag: 'emotional_crisis' },
        { label: 'No', value: 'no' },
        { label: 'I\'m not sure', value: 'unsure', flag: 'emotional_unsure' }
      ]
    },

    {
      id: 'affected-person',
      number: 3,
      text: 'Who is affected by this situation?',
      description: '',
      type: 'incident-cards',
      captureAs: 'affected',
      answers: [
        {
          label: 'This is happening to me',
          value: 'self',
          flag: 'affected_self'
        },
        {
          label: 'I am helping someone else',
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

    {
      id: 'threat-type',
      number: 4,
      text: 'What is the main concern right now?',
      description: '',
      type: 'incident-cards',
      captureAs: 'threatType',
      answers: [
        {
          label: 'Someone is threatening to share unless I pay or comply',
          value: 'threat-with-demand',
          detail: 'Threats involving money, more images, sexual acts, or continued contact.',
          flag: 'threat_with_demand'
        },
        {
          label: 'Images or videos are already posted or shared',
          value: 'content-posted',
          detail: 'Content has been sent to others or posted online.',
          flag: 'content_posted'
        },
        {
          label: 'Someone requested or sent sexual or intimate content',
          value: 'content-requested',
          detail: 'Requests for images or unsolicited intimate content.',
          flag: 'content_requested'
        },
        {
          label: 'Fake, altered, or AI-generated intimate content is involved',
          value: 'synthetic-content',
          detail: 'Deepfakes, edited images, or AI-generated content.',
          flag: 'synthetic_content'
        },
        {
          label: 'Something else or I\'m not sure',
          value: 'threat-unsure',
          detail: '',
          flag: 'threat_unsure'
        }
      ]
    },

    {
      id: 'age-at-creation',
      number: 5,
      text: 'How old was the person depicted when the image or video was created?',
      description: '',
      type: 'incident-cards',
      answers: [
        { label: 'Under 18', value: 'under-18', flag: 'content_created_minor' },
        { label: '18 or older', value: '18-plus', flag: 'content_created_adult' },
        { label: 'Not sure', value: 'unsure', flag: 'age_unsure' },
        { label: 'No image or video exists yet', value: 'no-content', flag: 'no_image_exists' }
      ]
    },

    {
      id: 'has-file',
      number: 6,
      text: 'Does the person depicted already have the image or video file on their device?',
      description: '',
      type: 'incident-cards',
      answers: [
        { label: 'Yes, it is already on their device', value: 'has-file', flag: 'has_file' },
        { label: 'No', value: 'no-file', flag: 'no_file' },
        { label: 'I\'m not sure', value: 'unsure', flag: 'file_unsure' },
        { label: 'Not applicable because no image exists', value: 'no-content', flag: 'no_image_exists' }
      ]
    }
  ],

  primaryActions: {
    // === COMBINATION-SPECIFIC ACTION SETS ===

    // Real minor content WITH file on device
    minor_with_file: [
      {
        number: 1,
        title: 'Because the image or video was created when the person was under 18 and the file is already on their device, Take It Down may help limit its spread.',
        text: 'Visit <a href="https://takeitdown.ncmec.org/" target="_blank" rel="noopener noreferrer" aria-label="Take It Down, opens in a new tab">takeitdown.ncmec.org</a> to create a hash from the file. The file remains on the device.'
      },
      {
        number: 2,
        title: 'Report to NCMEC CyberTipline',
        text: 'Report at <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a> or 1-800-THE-LOST (1-800-843-5678). Provide the safe evidence you gathered.'
      },
      {
        number: 3,
        title: 'Preserve safe evidence without copying the image',
        text: 'Save threat messages, usernames, URLs, dates, and any payment records. Never download, copy, forward, or redistribute the explicit image itself.'
      },
      {
        number: 4,
        title: 'Report the content and account to the platform',
        text: 'Use the platform\'s abuse or privacy reporting tool. Keep records of what you reported.'
      }
    ],

    // Real minor content WITHOUT file or file unsure
    minor_without_file: [
      {
        number: 1,
        title: 'Because the file is not already available, do not download, request, copy, or have anyone forward it.',
        text: 'Attempting to obtain a minor\'s intimate image is illegal. Report the situation through the CyberTipline instead.'
      },
      {
        number: 2,
        title: 'Report to NCMEC CyberTipline',
        text: 'Report at <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a> or 1-800-THE-LOST (1-800-843-5678) to report child exploitation or a request for child sexual abuse material.'
      },
      {
        number: 3,
        title: 'Preserve safe evidence',
        text: 'Save threat messages, usernames, profile links, URLs, dates, and times. Do not attempt to obtain the image.'
      },
      {
        number: 4,
        title: 'Report the account and behavior to the platform',
        text: 'Use the platform\'s abuse, sexual content, or child safety reporting tool. Keep records of what you reported.'
      }
    ],

    // Real adult content, person depicted is self, WITH file
    adult_self_with_file: [
      {
        number: 1,
        title: 'Because you are depicted in adult intimate content and the file is already on your device, you may be able to create your own StopNCII case.',
        text: 'Visit <a href="https://stopncii.org/create-your-case/" target="_blank" rel="noopener noreferrer" aria-label="StopNCII, opens in a new tab">stopncii.org</a> to learn about eligibility and create a case. You control the submission.'
      },
      {
        number: 2,
        title: 'Preserve safe evidence without copying the image',
        text: 'Save threat messages, usernames, URLs, dates, and any payment records. The file remains on your device.'
      },
      {
        number: 3,
        title: 'Report the content and account to the platform',
        text: 'Use the platform\'s abuse or privacy reporting tool. Keep records of what you reported.'
      },
      {
        number: 4,
        title: 'Get support for sexual exploitation trauma',
        text: 'For support related to sexual exploitation or intimate-image abuse, contact RAINN at <a href="tel:18006564673" style="color: var(--respond-accent); text-decoration: underline;">1-800-656-4673</a> (HOPE), <a href="sms:64673?body=HOPE" style="color: var(--respond-accent); text-decoration: underline;">text HOPE to 64673</a>, or visit <a href="https://rainn.org/help-and-healing/hotline/" target="_blank" rel="noopener noreferrer" aria-label="RAINN, opens in a new tab" style="color: var(--respond-accent); text-decoration: underline;">rainn.org</a>. Talk to someone you trust for additional support. If anyone is in immediate physical danger, call 911.'
      }
    ],

    // Real adult content, helping someone else, WITH file
    adult_other_with_file: [
      {
        number: 1,
        title: 'Because you are helping someone else who is depicted in adult intimate content with the file available, the depicted adult controls the response.',
        text: 'The person depicted must create their own StopNCII case at <a href="https://stopncii.org/create-your-case/" target="_blank" rel="noopener noreferrer" aria-label="StopNCII, opens in a new tab">stopncii.org</a>. You cannot submit on their behalf.'
      },
      {
        number: 2,
        title: 'Help them gather safe evidence',
        text: 'Support them in saving threat messages, usernames, URLs, dates, and payment records. Do not obtain or copy the explicit image.'
      },
      {
        number: 3,
        title: 'Encourage reporting to the platform',
        text: 'Help them report the content and account using the platform\'s abuse or privacy reporting tool. Keep records of reports.'
      },
      {
        number: 4,
        title: 'Provide emotional support',
        text: 'Let the affected person know that RAINN offers support related to sexual exploitation and intimate-image abuse at <a href="tel:18006564673" style="color: var(--respond-accent); text-decoration: underline;">1-800-656-4673</a> (HOPE). Encourage them to talk to someone they trust. If anyone is in immediate physical danger, call 911. Do not pressure them to act before they\'re ready.'
      }
    ],

    // Real adult content, person depicted is self, WITHOUT file or file unsure
    adult_self_without_file: [
      {
        number: 1,
        title: 'Because the file is not already available, do not obtain or request it just to use a removal tool.',
        text: 'Report the post and account directly to the platform. StopNCII and other removal tools require you to already have the file.'
      },
      {
        number: 2,
        title: 'Report the content and account to the platform',
        text: 'Use the platform\'s abuse or privacy reporting tool. Keep records of what you reported.'
      },
      {
        number: 3,
        title: 'Get support for sexual exploitation trauma',
        text: 'Call RAINN at <a href="tel:18006564673" style="color: var(--respond-accent); text-decoration: underline;">1-800-656-4673</a> (HOPE) or visit <a href="https://rainn.org/help-and-healing/hotline/" target="_blank" rel="noopener noreferrer" aria-label="RAINN, opens in a new tab" style="color: var(--respond-accent); text-decoration: underline;">rainn.org</a> for support.'
      }
    ],

    // Real adult content, helping someone else, WITHOUT file or file unsure
    adult_other_without_file: [
      {
        number: 1,
        title: 'Because the file is not already available, the depicted adult must not obtain or request it just to use a removal tool.',
        text: 'Help them report the post and account directly to the platform. StopNCII and other removal tools require them to already have the file.'
      },
      {
        number: 2,
        title: 'Help them report the content and account to the platform',
        text: 'Support them in using the platform\'s abuse or privacy reporting tool. Keep records of what was reported.'
      },
      {
        number: 3,
        title: 'The depicted adult controls any removal submission',
        text: 'Remind them they control any StopNCII or other removal submission and should not share the file with others to obtain it.'
      },
      {
        number: 4,
        title: 'Provide emotional support',
        text: 'Let them know RAINN (<a href="tel:18006564673" style="color: var(--respond-accent); text-decoration: underline;">1-800-656-4673</a>) is available for support with sexual exploitation. Do not pressure them to act before they\'re ready.'
      }
    ],

    // No image exists - request or coercion scenario
    no_image_exists: [
      {
        number: 1,
        title: 'Because no image or video exists, do not create or send one.',
        text: 'The priority is stopping contact and preserving the request or threat as evidence. Do not comply with any requests or demands.'
      },
      {
        number: 2,
        title: 'Preserve the request messages as evidence',
        text: 'Save screenshots of the request, usernames, profile links, dates, and times. This shows the pattern of behavior.'
      },
      {
        number: 3,
        title: 'Block the account and report to the platform',
        text: 'Use the platform\'s abuse, sexual content, or child safety reporting tool. Block and report the account.'
      },
      {
        number: 4,
        title: 'Report if a minor is being targeted by an adult',
        text: 'If an adult is requesting images from a minor, report to NCMEC CyberTipline at <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a> or 1-800-THE-LOST.'
      }
    ],

    // Synthetic adult content, person depicted is self, WITH file
    synthetic_adult_self_with_file: [
      {
        number: 1,
        title: 'Fake or altered intimate content depicting you can cause real harm, even though the image is not real.',
        text: 'The harassment, threats, or exploitation are real. You are not to blame.'
      },
      {
        number: 2,
        title: 'Because the altered or AI-generated content depicts you as an adult and the file is available, you may be able to create your own StopNCII case.',
        text: 'Visit <a href="https://stopncii.org/create-your-case/" target="_blank" rel="noopener noreferrer" aria-label="StopNCII, opens in a new tab">stopncii.org</a> to learn about eligibility for synthetic content cases.'
      },
      {
        number: 3,
        title: 'Preserve evidence and report to the platform',
        text: 'Save the URL, account names, usernames, dates, and any threat messages. Report the specific post and account using the platform\'s abuse or manipulated-media reporting tool.'
      },
      {
        number: 4,
        title: 'Get support if struggling emotionally',
        text: 'Talk to a trusted person or call RAINN at <a href="tel:18006564673" style="color: var(--respond-accent); text-decoration: underline;">1-800-656-4673</a> (HOPE) for support with this trauma.'
      }
    ],

    // Synthetic adult content, helping someone else
    synthetic_adult_other: [
      {
        number: 1,
        title: 'Fake or altered intimate content depicting someone else can cause real harm, even though the image is not real.',
        text: 'The harassment, threats, or exploitation are real. The depicted person is not to blame.'
      },
      {
        number: 2,
        title: 'The depicted adult controls any removal submission.',
        text: 'If the person is depicted in adult content and synthetic removal tools apply, they must create their own case. You can help them understand the steps, but they make the decision.'
      },
      {
        number: 3,
        title: 'Preserve evidence and report to the platform',
        text: 'Help them save the URL, account names, usernames, dates, and threat messages. Report the specific post and account using the platform\'s manipulated-media reporting tool.'
      },
      {
        number: 4,
        title: 'Provide emotional support',
        text: 'Let them know they can talk to a trusted person or call RAINN at <a href="tel:18006564673" style="color: var(--respond-accent); text-decoration: underline;">1-800-656-4673</a> for support. Do not pressure them to act before they\'re ready.'
      }
    ],

    // Synthetic minor content
    synthetic_minor: [
      {
        number: 1,
        title: 'Fake or altered intimate content depicting a child can cause real harm, even though the image is not real.',
        text: 'The exploitation is real. The depicted child is not to blame.'
      },
      {
        number: 2,
        title: 'Report sexualized fake or altered content involving a child through the CyberTipline.',
        text: 'Report at <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a> or 1-800-THE-LOST (1-800-843-5678).'
      },
      {
        number: 3,
        title: 'Preserve evidence and report to the platform',
        text: 'Save the URL, account names, usernames, dates, and any threat messages. Report the post and account using the platform\'s manipulated-media or child safety reporting tool.'
      },
      {
        number: 4,
        title: 'Get support if struggling emotionally',
        text: 'Talk to a trusted adult, family member, counselor, or another person who can support you.'
      }
    ],

    // Synthetic content with uncertain age
    synthetic_age_unsure: [
      {
        number: 1,
        title: 'Fake or altered intimate content can cause real harm, even though the image is not real.',
        text: 'The exploitation is real. The depicted person is not to blame.'
      },
      {
        number: 2,
        title: 'Report sexualized fake or altered content when age is uncertain through the CyberTipline.',
        text: 'To report suspected child exploitation, visit <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a> or call 1-800-THE-LOST (1-800-843-5678).'
      },
      {
        number: 3,
        title: 'Preserve evidence and report to the platform',
        text: 'Save the URL, account names, usernames, dates, and any threat messages. Report using the platform\'s manipulated-media reporting tool.'
      },
      {
        number: 4,
        title: 'Get support if struggling emotionally',
        text: 'Talk to a trusted adult, family member, counselor, or another person who can support the affected person.'
      }
    ],

    // Threat with demand - minor content WITH file
    threat_minor_with_file: [
      {
        number: 1,
        title: 'Someone is using a threat or demand to pressure or extort you. Do not pay, send images, or negotiate.',
        text: 'Paying will not stop the threats and encourages more demands. Block the person immediately and do not respond.'
      },
      {
        number: 2,
        title: 'Because the depicted person is under 18 and you have the file, use Take It Down to create a hash.',
        text: 'Visit <a href="https://takeitdown.ncmec.org/" target="_blank" rel="noopener noreferrer" aria-label="Take It Down, opens in a new tab">takeitdown.ncmec.org</a>. The file remains on the device.'
      },
      {
        number: 3,
        title: 'Report to NCMEC CyberTipline for child exploitation',
        text: 'Report at <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a> or 1-800-THE-LOST (1-800-843-5678).'
      },
      {
        number: 4,
        title: 'Report to the FBI for extortion',
        text: 'Submit a report at <a href="https://tips.fbi.gov/" target="_blank" rel="noopener noreferrer" aria-label="FBI Tips, opens in a new tab">tips.fbi.gov</a> or contact your local FBI field office.'
      },
      {
        number: 5,
        title: 'Preserve all threat and demand messages',
        text: 'Save screenshots of threats, demands, usernames, profile links, dates, and times. If money was already sent, contact your payment provider immediately and report to <a href="https://www.ic3.gov/" target="_blank" rel="noopener noreferrer" aria-label="IC3, opens in a new tab">ic3.gov</a>.'
      }
    ],

    // Threat with demand - minor content WITHOUT file
    threat_minor_without_file: [
      {
        number: 1,
        title: 'Someone is using a threat or demand to pressure or extort you. Do not pay, send images, or negotiate.',
        text: 'Paying will not stop the threats and encourages more demands. Block the person immediately and do not respond.'
      },
      {
        number: 2,
        title: 'Because the file is not available and a minor is involved, report to NCMEC CyberTipline.',
        text: 'Report at <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a> or 1-800-THE-LOST (1-800-843-5678). Do not attempt to obtain the file.'
      },
      {
        number: 3,
        title: 'Report to the FBI for extortion',
        text: 'Submit a report at <a href="https://tips.fbi.gov/" target="_blank" rel="noopener noreferrer" aria-label="FBI Tips, opens in a new tab">tips.fbi.gov</a> or contact your local FBI field office.'
      },
      {
        number: 4,
        title: 'Preserve all threat and demand messages',
        text: 'Save screenshots of threats, demands, usernames, profile links, dates, and times. If money was already sent, contact your payment provider immediately and report to <a href="https://www.ic3.gov/" target="_blank" rel="noopener noreferrer" aria-label="IC3, opens in a new tab">ic3.gov</a>.'
      }
    ],

    // Threat with demand - adult content, person depicted is self, WITH file
    threat_adult_self_with_file: [
      {
        number: 1,
        title: 'Someone is using a threat or demand to pressure or extort you. Do not pay, send images, or negotiate.',
        text: 'Paying will not stop the threats and encourages more demands. Block the person immediately and do not respond.'
      },
      {
        number: 2,
        title: 'Because you are depicted in adult intimate content and you have the file, you may be able to create your own StopNCII case.',
        text: 'Visit <a href="https://stopncii.org/create-your-case/" target="_blank" rel="noopener noreferrer" aria-label="StopNCII, opens in a new tab">stopncii.org</a> to learn about eligibility and create a case. You control the submission.'
      },
      {
        number: 3,
        title: 'Report to the FBI for sextortion',
        text: 'Submit a sextortion report at <a href="https://tips.fbi.gov/" target="_blank" rel="noopener noreferrer" aria-label="FBI Tips, opens in a new tab">tips.fbi.gov</a> or contact your local FBI field office.'
      },
      {
        number: 4,
        title: 'Preserve all threat and demand messages',
        text: 'Save screenshots of threats, demands, usernames, profile links, dates, and times. If money was already sent, contact your payment provider immediately and report to <a href="https://www.ic3.gov/" target="_blank" rel="noopener noreferrer" aria-label="IC3, opens in a new tab">ic3.gov</a>.'
      }
    ],

    // Threat with demand - adult content, helping someone else
    threat_adult_other: [
      {
        number: 1,
        title: 'Someone is using a threat or demand to pressure or extort the person. Help them understand: Do not pay, send images, or negotiate.',
        text: 'Paying will not stop the threats and encourages more demands. Block the person immediately and do not respond.'
      },
      {
        number: 2,
        title: 'The depicted adult must create their own StopNCII case if eligible.',
        text: 'The person can visit <a href="https://stopncii.org/create-your-case/" target="_blank" rel="noopener noreferrer" aria-label="StopNCII, opens in a new tab">stopncii.org</a> to learn about eligibility. They control the submission, not you.'
      },
      {
        number: 3,
        title: 'Report to the FBI for sextortion',
        text: 'Help them submit a sextortion report at <a href="https://tips.fbi.gov/" target="_blank" rel="noopener noreferrer" aria-label="FBI Tips, opens in a new tab">tips.fbi.gov</a> or contact your local FBI field office.'
      },
      {
        number: 4,
        title: 'Help preserve all threat and demand messages',
        text: 'Support them in saving screenshots of threats, demands, usernames, profile links, dates, and times. If money was already sent, help them contact their payment provider immediately and report to <a href="https://www.ic3.gov/" target="_blank" rel="noopener noreferrer" aria-label="IC3, opens in a new tab">ic3.gov</a>.'
      }
    ],

    // Threat with demand - no image exists
    threat_no_image: [
      {
        number: 1,
        title: 'Someone is using a threat or demand to pressure or extort you. Do not pay, send images, or negotiate.',
        text: 'Paying will not stop the threats and encourages more demands. Block the person immediately and do not respond.'
      },
      {
        number: 2,
        title: 'Because no image or video exists, do not create or send one.',
        text: 'The priority is stopping contact. Do not comply with any requests or demands.'
      },
      {
        number: 3,
        title: 'Preserve all threat and demand messages',
        text: 'Save screenshots of threats, demands, usernames, profile links, dates, and times.'
      },
      {
        number: 4,
        title: 'Report to the FBI for extortion',
        text: 'Submit a report at <a href="https://tips.fbi.gov/" target="_blank" rel="noopener noreferrer" aria-label="FBI Tips, opens in a new tab">tips.fbi.gov</a> or contact your local FBI field office. If a minor is involved, also report to NCMEC CyberTipline at <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a>.'
      }
    ],

    // Default fallback
    default: [
      {
        number: 1,
        title: 'This is not your fault',
        text: 'Whoever did this is responsible, not the person in the image. You did nothing wrong by reaching out.'
      },
      {
        number: 2,
        title: 'Preserve safe evidence',
        text: 'Save messages, usernames, profile links, URLs, and dates. Do not download, copy, forward, or screenshot the explicit image itself.'
      },
      {
        number: 3,
        title: 'Report the account or content to the platform',
        text: 'Use the platform\'s abuse or privacy reporting tool. Keep records of what you reported.'
      },
      {
        number: 4,
        title: 'Get support if struggling',
        text: 'Talk to someone you trust about this pressure. If you feel unsafe or overwhelmed, contact a counselor or trusted person for support.'
      }
    ]
  },

  // PRIMARY ACTIONS RULES (combination-specific, most specific first)
  primaryActionsRules: [
    // Threat with demand combinations (highest priority within threat context)
    { when: { flag: 'threat_minor_with_file' }, use: 'threat_minor_with_file' },
    { when: { flag: 'threat_minor_without_file' }, use: 'threat_minor_without_file' },
    { when: { flag: 'threat_adult_self_with_file' }, use: 'threat_adult_self_with_file' },
    { when: { flag: 'threat_adult_other' }, use: 'threat_adult_other' },
    { when: { flag: 'threat_no_image' }, use: 'threat_no_image' },

    // No image exists (prevents Take It Down / StopNCII from showing)
    { when: { flag: 'no_image_exists' }, use: 'no_image_exists' },

    // Synthetic content combinations
    { when: { flag: 'synthetic_adult_self_with_file' }, use: 'synthetic_adult_self_with_file' },
    { when: { flag: 'synthetic_adult_other' }, use: 'synthetic_adult_other' },
    { when: { flag: 'synthetic_minor' }, use: 'synthetic_minor' },
    { when: { flag: 'synthetic_age_unsure' }, use: 'synthetic_age_unsure' },

    // Real content combinations (age and file-specific)
    { when: { flag: 'minor_with_file' }, use: 'minor_with_file' },
    { when: { flag: 'minor_without_file' }, use: 'minor_without_file' },
    { when: { flag: 'adult_self_with_file' }, use: 'adult_self_with_file' },
    { when: { flag: 'adult_other_with_file' }, use: 'adult_other_with_file' },
    { when: { flag: 'adult_self_without_file' }, use: 'adult_self_without_file' },
    { when: { flag: 'adult_other_without_file' }, use: 'adult_other_without_file' },

    // Fallbacks for incomplete flag combinations
    { when: { flag: 'content_created_minor' }, use: 'minor_without_file' },
    { when: { flag: 'content_created_adult' }, use: 'default' },
    { when: { flag: 'content_posted' }, use: 'default' },
    { when: { flag: 'content_requested' }, use: 'no_image_exists' },
    { when: { flag: 'threat_unsure' }, use: 'default' }
  ],

  // DEEPER HELP SECTIONS (progressive disclosure, data-driven)
  deeperHelpSections: [
    {
      id: 'safe-evidence',
      show: 'always',
      title: '💾 Preserve safe evidence',
      intro: 'Gather evidence that helps law enforcement without redistribution:',
      points: [
        'Save threat messages and demands',
        'Record usernames, profile names, and account links',
        'Note the date, time, and platform where you received the threat or found the content',
        'If money was demanded or sent, save payment requests or transaction records',
        'Never download, copy, forward, redistribute, or screenshot an explicit image of a minor',
        'If you have safe evidence on your device already, keep it secure and let authorities know when you report'
      ]
    },

    {
      id: 'take-it-down',
      show: 'whenFlag',
      flag: 'content_created_minor',
      title: '🗑️ Take It Down (for content created when person was under 18)',
      intro: 'If the image was created when the depicted person was under 18, even if they are now an adult:',
      points: [
        'Visit <a href="https://takeitdown.ncmec.org/" target="_blank" rel="noopener noreferrer" aria-label="Take It Down, opens in a new tab">takeitdown.ncmec.org</a>',
        'The image or video must already be on the depicted person\'s device. Do not download or obtain it just to submit.',
        'The person will provide the file; a hash is created from it',
        'The file remains on their device while participating platforms may use the hash to detect or remove matching content',
        'Take It Down does not guarantee removal everywhere',
        'If the person does not have the file, report to <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a> instead'
      ]
    },

    {
      id: 'stop-ncii',
      show: 'whenFlag',
      flag: 'content_created_adult',
      title: '🛑 StopNCII (for adult content)',
      intro: 'If the image was created when the depicted person was 18 or older:',
      points: [
        'Visit <a href="https://stopncii.org/create-your-case/" target="_blank" rel="noopener noreferrer" aria-label="StopNCII, opens in a new tab">stopncii.org</a>',
        'The depicted person must submit their own case. A helper cannot submit on their behalf.',
        'The person must already have access to the file on their device',
        'Fake, altered, or AI-generated intimate content may be eligible if other requirements are met',
        'StopNCII does not guarantee complete internet-wide removal',
        'If the person does not have the file, they should not try to obtain it'
      ]
    },

    {
      id: 'child-exploitation',
      show: 'whenFlag',
      flag: 'content_created_minor',
      title: '🚨 Report child exploitation',
      intro: 'Content involving someone under 18 requires reporting to law enforcement:',
      points: [
        '<strong>NCMEC CyberTipline:</strong> <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a> or <a href="tel:18008435678" style="color: var(--respond-accent); text-decoration: underline;">call 1-800-THE-LOST (1-800-843-5678)</a>',
        'NCMEC reviews CyberTipline reports and makes relevant information available to the appropriate law-enforcement agency',
        'Reports are available 24/7',
        'You can report even if you\'re not sure if the content is real'
      ]
    },

    {
      id: 'sextortion-reporting',
      show: 'whenFlag',
      flag: 'threat_with_demand',
      title: '📞 Report sextortion or extortion',
      intro: 'Extortion using threats or demands is a serious crime. Report to multiple agencies:',
      points: [
        '<strong>FBI Tips:</strong> <a href="https://tips.fbi.gov/" target="_blank" rel="noopener noreferrer" aria-label="FBI Tips, opens in a new tab">tips.fbi.gov</a> (extortion and sextortion reporting)',
        '<strong>NCMEC CyberTipline:</strong> <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" aria-label="NCMEC CyberTipline, opens in a new tab">report.cybertip.org</a> (if a minor is involved)',
        'Your local FBI field office or local law enforcement for active threats to your safety'
      ]
    },

    {
      id: 'money-sent',
      show: 'whenFlag',
      flag: 'threat_with_demand',
      title: '💳 If money was already sent',
      intro: 'Act immediately if the person sent money:',
      points: [
        'Contact your payment provider (bank, credit card company, payment app, gift card issuer, etc.) right away and report the fraud',
        'Ask if the transaction can be stopped or reversed',
        'Report the internet-enabled financial crime to the Internet Crime Complaint Center: <a href="https://www.ic3.gov/" target="_blank" rel="noopener noreferrer" aria-label="IC3, opens in a new tab">ic3.gov</a>',
        'Do not send any additional money or continue communicating with the person'
      ]
    },

    {
      id: 'emotional-support',
      show: 'whenFlag',
      flag: 'emotional_crisis',
      title: '💙 Emotional support and crisis resources',
      intro: 'This situation is not the person\'s fault. Support is available:',
      points: [
        '<strong>988 Suicide & Crisis Lifeline:</strong> <a href="tel:988" style="color: var(--respond-accent); text-decoration: underline;">Call 988</a> or <a href="sms:988" style="color: var(--respond-accent); text-decoration: underline;">text 988</a> (available 24/7 in the US). Chat at <a href="https://chat.988lifeline.org/" target="_blank" rel="noopener noreferrer" aria-label="988 chat, opens in a new tab" style="color: var(--respond-accent); text-decoration: underline;">988lifeline.org</a>',
        '<strong>RAINN Sexual Assault Hotline:</strong> <a href="tel:18006564673" style="color: var(--respond-accent); text-decoration: underline;">Call 1-800-656-4673</a> (HOPE) or <a href="sms:64673?body=HOPE" style="color: var(--respond-accent); text-decoration: underline;">text HOPE to 64673</a>. Visit <a href="https://rainn.org/help-and-healing/hotline/" target="_blank" rel="noopener noreferrer" aria-label="RAINN online support, opens in a new tab" style="color: var(--respond-accent); text-decoration: underline;">rainn.org</a>',
        'Feelings of shame, fear, and embarrassment are common. A counselor can help process what happened.',
        'Organizations like RAINN specialize in supporting survivors of sexual exploitation'
      ]
    },

    {
      id: 'helping-someone',
      show: 'whenFlag',
      flag: 'affected_other',
      title: '🤝 You\'re helping someone else',
      intro: 'Your support matters:',
      points: [
        'Encourage the affected person to report to the platform and authorities themselves when possible',
        'Do not pressure them to take action before they\'re ready',
        'Help them gather safe evidence (messages, usernames, URLs) without obtaining explicit images',
        'Let them know RAINN (<a href="tel:18006564673" style="color: var(--respond-accent); text-decoration: underline;">1-800-656-4673</a>) is available for support with sexual exploitation or abuse',
        'If the person is a minor, consider involving a trusted adult like a parent, school counselor, or social worker'
      ]
    },

    {
      id: 'platform-reporting',
      show: 'always',
      title: '📱 Report to the platform',
      intro: 'Every platform has an abuse or privacy reporting tool:',
      points: [
        'Look for "Report" or "Block" options on the account or post',
        'Describe the content as intimate imagery or sexual exploitation',
        'Keep a record of what you reported and when',
        'If the platform does not remove the content quickly, report to law enforcement or CyberTipline'
      ]
    }
  ],

  immediateSafety: {
    title: 'Immediate physical danger',
    content: [
      'If anyone is in immediate physical danger, an attempt is in progress, or an urgent medical emergency is happening, call 911 or your local emergency number right now.',
      'If the threat is specific or credible (a location, timing, or method), preserve the information and contact local law enforcement.',
      'Do not wait for DigitalCap if there is a real threat of harm.',
      'After addressing immediate safety, you can get additional guidance below.'
    ]
  },

  emotionalCrisisSafety: {
    title: 'Emotional crisis and self-harm support',
    content: [
      'If the person may be in emotional crisis or at risk of self-harm, call or text 988 or use the 988 Lifeline chat:',
      '• <a href="tel:988" style="color: var(--respond-accent); text-decoration: underline;">Call 988</a> (Suicide & Crisis Lifeline)',
      '• <a href="sms:988" style="color: var(--respond-accent); text-decoration: underline;">Text 988</a>',
      '• <a href="https://chat.988lifeline.org/" target="_blank" rel="noopener noreferrer" aria-label="988 chat, opens in a new tab" style="color: var(--respond-accent); text-decoration: underline;">Chat online at 988lifeline.org</a>',
      'If anyone is in immediate physical danger or an attempt is in progress, call 911 or your local emergency number.',
      'Stay with the person or help connect them with a trusted nearby person when it is safe to do so.',
      'Continue with additional guidance below after crisis support is in place.'
    ]
  },

  unsureSafetyNote: {
    title: 'When to treat this as urgent',
    resourceIds: ['988-crisis-lifeline'],
    content: [
      'If you\'re unsure whether a threat is credible, contact local law enforcement or another trusted local support resource for guidance.',
      'If the affected person is showing signs of extreme distress or emotional crisis, <a href="tel:988" style="color: var(--respond-accent); text-decoration: underline;">call 988</a> or <a href="sms:988" style="color: var(--respond-accent); text-decoration: underline;">text 988</a>, or contact a mental health professional.',
      'Your judgment about the situation matters most.'
    ]
  }
};
