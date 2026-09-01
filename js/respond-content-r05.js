// DigitalCap RESPOND - R05: Bullying or Harassment
// Content-only module. No logic. No Firebase. No persistence.
// Redesigned for UX: Show essentials first, progressive disclosure for deeper help.

const R05_BULLYING = {
  id: 'R05',
  title: 'Bullying or Harassment',
  description: 'Repeated unwanted behavior that makes your child feel unsafe, excluded, or humiliated online or at school.',

  // NEW THREE-QUESTION FLOW
  questions: [
    {
      id: 'q1',
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
    {
      id: 'q2',
      number: 2,
      text: 'What\'s happening?',
      description: '',
      type: 'incident-cards',
      captureAs: 'incidentType',
      answers: [
        {
          label: 'Mean or hurtful messages',
          value: 'mean-messages',
          detail: 'Messages, comments, insults, or cruel jokes.'
        },
        {
          label: 'Repeated targeting or harassment',
          value: 'repeated-harassment',
          detail: 'The behavior keeps happening or follows them across chats, apps, games, or school.'
        },
        {
          label: 'Being excluded or ganged up on',
          value: 'exclusion',
          detail: 'Group chats, friend groups, games, or other social spaces are being used to isolate or target them.'
        },
        {
          label: 'Rumors or embarrassing posts',
          value: 'rumors',
          detail: 'Someone is spreading, posting, or sharing something intended to embarrass them.'
        },
        {
          label: 'Someone is pretending to be my child',
          value: 'impersonation',
          detail: 'A fake account or impersonation.',
          flag: 'impersonation'
        },
        {
          label: 'Private or intimate images are involved',
          value: 'images',
          detail: 'Sharing of private or intimate images.',
          flag: 'image_related'
        },
        {
          label: 'Something else or I\'m not sure',
          value: 'other'
        }
      ]
    },
    {
      id: 'q3',
      number: 3,
      text: 'Are people from your child\'s school involved?',
      description: '',
      type: 'yes-no-unsure',
      answers: [
        { label: 'Yes', value: 'yes', flag: 'school_related' },
        { label: 'No', value: 'no' },
        { label: 'I\'m not sure', value: 'unsure' }
      ]
    }
  ],

  // PRIMARY ACTIONS (shown in numbered list initially)
  primaryActions: {
    default: [
      {
        number: 1,
        recommendationId: 'save-evidence',
        title: 'Save what matters',
        text: 'Keep relevant usernames, dates, account names, or messages. If intimate images are involved, do not download, copy, or forward them.'
      },
      {
        number: 2,
        title: 'Stop the contact',
        text: 'Use blocking, muting, leaving groups, or platform reporting to limit further contact.'
      },
      {
        number: 3,
        title: 'Talk with your child',
        text: 'Understand what happened, what they\'ve tried, and what they\'re worried about. Make clear that asking for help doesn\'t automatically mean losing their device.'
      }
    ],
    impersonation: [
      {
        number: 1,
        title: 'Report the fake account',
        text: 'Save the username and account information, then use the platform\'s impersonation or abuse reporting feature.'
      },
      {
        number: 2,
        title: 'Talk with your child',
        text: 'Understand what they\'re worried about. Ask if friends know the account is fake.'
      },
      {
        number: 3,
        title: 'Review privacy settings',
        text: 'Check who can create accounts that look like your child\'s profile or access their information.'
      }
    ],
    images: [
      {
        number: 1,
        title: 'Don\'t redistribute the image',
        text: 'If intimate images are involved, do not forward, repost, download, or send them to yourself. Report directly to the platform.'
      },
      {
        number: 2,
        title: 'Report to the platform',
        text: 'Use the platform\'s abuse or privacy violation reporting tool. Keep records of what you reported.'
      },
      {
        number: 3,
        title: 'Talk with your child',
        text: 'Understand what happened and what support they need. This is not their fault.'
      }
    ]
  },

  // PRIMARY ACTIONS RULES (data-driven selection)
  primaryActionsRules: [
    { when: { flag: 'impersonation' }, use: 'impersonation' },
    { when: { flag: 'image_related' }, use: 'images' }
  ],

  // DEEPER HELP SECTIONS (progressive disclosure, data-driven)
  deeperHelpSections: [
    {
      id: 'talk',
      show: 'always',
      title: '💬 Talk to my child',
      opener: '"I\'m glad you told me. Can you show me or tell me what has been happening?"',
      points: [
        'Listen before deciding what happens next.',
        'Ask what they\'ve already tried.',
        'Ask what they\'re worried might happen if an adult steps in.',
        'Avoid immediately blaming them or saying things like "You should just ignore it."',
        'Make clear that asking for help doesn\'t automatically mean losing their device.'
      ]
    },
    {
      id: 'reporting',
      show: 'always',
      title: '📱 Reporting & blocking',
      intro: 'If you\'re ready to take action:',
      points: [
        'Save relevant information first (usernames, dates, account names).',
        'Most apps have report buttons for abuse or harassment.',
        'Block, mute, restrict contact, or leave groups when appropriate.',
        'If the behavior continues after reporting, report again.',
        'Keep records of what you reported and when.'
      ]
    },
    {
      id: 'school',
      show: 'whenFlag',
      flag: 'school_related',
      title: '🏫 Involving the school',
      intro: 'When students from school are involved:',
      points: [
        'Contact the school counselor, social worker, or administrator.',
        'Bring specific information about what happened (dates, names, incident details).',
        'Ask how the school can support your child.',
        'Ask about their anti-bullying policy and how they follow up.',
        'The school may be able to help with documentation if needed.'
      ]
    },
    {
      id: 'prevent',
      show: 'always',
      title: '🛡️ Prevent this happening again',
      intro: 'Steps you can take together:',
      points: [
        'Review who can message, friend request, or invite your child.',
        'Check profile privacy settings and who can see posts.',
        'Review group/follower settings.',
        'Check in with your child over the next few days to see if behavior continues.',
        'Let your child know you\'re there if they need support.'
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
      'If you\'re unsure but the threat feels specific or believable, contact local law enforcement.',
      'If your child is showing signs of extreme distress, withdrawal, or thoughts of self-harm, contact the 988 Suicide & Crisis Lifeline (call or text 988) or a mental health professional.',
      'Most of the time, unwanted online messages don\'t constitute an emergency, but your judgment about your child matters most.'
    ]
  },

};
