// Quiz Data

const quizzes = [
    {
        id: 1,
        title: 'Digital Safety Basics',
        description: 'Test your knowledge about password safety, phishing, and protecting your accounts.',
        questions: [
            {
                id: 1,
                question: 'What makes a strong password?',
                options: [
                    { text: 'Your name and birth year (e.g., john1995)', correct: false },
                    { text: 'At least 12 characters with uppercase, lowercase, numbers, and symbols', correct: true },
                    { text: 'Any 6-character password', correct: false },
                    { text: 'Your favorite word repeated (e.g., puppypuppypuppy)', correct: false }
                ],
                feedback: 'A strong password is at least 12 characters and includes a mix of uppercase, lowercase, numbers, and symbols. This makes it very hard for hackers to crack.'
            },
            {
                id: 2,
                question: 'Someone DMs you claiming to be from Instagram saying you need to "verify your account." What do you do?',
                options: [
                    { text: 'Click the link they sent to verify', correct: false },
                    { text: 'Delete the message and contact Instagram directly through the app', correct: true },
                    { text: 'Ignore it but don\'t take action', correct: false },
                    { text: 'Ask your friends if they got the same message', correct: false }
                ],
                feedback: 'This is a phishing scam. Real companies never ask you to verify accounts via links in messages. Always contact them directly through the official app or website.'
            },
            {
                id: 3,
                question: 'You notice an adult online asking you personal questions like "where do you go to school?" This is a red flag for:',
                options: [
                    { text: 'Normal conversation', correct: false },
                    { text: 'Grooming behavior', correct: true },
                    { text: 'Someone writing a survey', correct: false },
                    { text: 'A teacher checking your homework', correct: false }
                ],
                feedback: 'An unknown adult asking personal questions is a major red flag for grooming. Always tell a trusted adult immediately if this happens.'
            },
            {
                id: 4,
                question: 'What should you do if you get an email from a "bank" asking you to click a link and enter your password?',
                options: [
                    { text: 'Click the link and enter your password', correct: false },
                    { text: 'Ignore it—your bank already has your password', correct: true },
                    { text: 'Reply asking more details', correct: false },
                    { text: 'Click but use a fake password', correct: false }
                ],
                feedback: 'Banks and legitimate companies NEVER ask for passwords via email. This is a phishing scam. Delete it and report it.'
            },
            {
                id: 5,
                question: 'Which piece of information is safe to share on your public social media profile?',
                options: [
                    { text: 'Your home address', correct: false },
                    { text: 'Your school and daily schedule', correct: false },
                    { text: 'A photo from a school event (not showing location)', correct: true },
                    { text: 'Your phone number', correct: false }
                ],
                feedback: 'Only share content that doesn\'t reveal where you are, when, or identifying information. A school event photo (without location tag) is safer than address, schedule, or phone number.'
            }
        ]
    },
    {
        id: 2,
        title: 'Spot the Scam',
        description: 'Can you identify which messages are scams and which are legitimate?',
        questions: [
            {
                id: 1,
                question: 'Message: "Congratulations! You\'ve won a FREE Apple iPhone! Click here to claim your prize! 🎉"',
                options: [
                    { text: 'This is real—I didn\'t enter, but I might have won!', correct: false },
                    { text: 'This is a scam—I didn\'t enter a contest', correct: true },
                    { text: 'This might be real, I\'ll click to check', correct: false },
                    { text: 'This is from Apple, so it\'s safe', correct: false }
                ],
                feedback: 'This is 100% a scam. If you didn\'t enter a contest, you didn\'t win. Clicking the link could install malware or steal your information.'
            },
            {
                id: 2,
                question: 'Your Discord friend says: "I have 100 free Robux if you help me move it to your account. We can split it."',
                options: [
                    { text: 'This is awesome! I\'ll help.', correct: false },
                    { text: 'This is a scam—there\'s no free Robux, and my friend\'s account is likely hacked', correct: true },
                    { text: 'I\'ll ask more details first', correct: false },
                    { text: 'This is a legitimate offer', correct: false }
                ],
                feedback: 'This is a classic scam. Either your friend\'s account is hacked, or it\'s a stranger pretending to be them. Never help "move" currency or items.'
            },
            {
                id: 3,
                question: 'Email: "Your PayPal account will be closed in 24 hours. Click here to confirm your identity."',
                options: [
                    { text: 'I\'ll click immediately—I don\'t want my account closed!', correct: false },
                    { text: 'This is phishing. I\'ll log into PayPal directly to check my account', correct: true },
                    { text: 'I don\'t have PayPal, so it doesn\'t matter', correct: false },
                    { text: 'I\'ll ask PayPal about this on Twitter', correct: false }
                ],
                feedback: 'PayPal never sends emails asking you to confirm identity via a link. This is phishing. Always log in directly through the official website or app.'
            },
            {
                id: 4,
                question: 'TikTok DM from someone with a verified checkmark: "You were selected for a sponsorship! DM me to discuss details."',
                options: [
                    { text: 'Wow! A real sponsorship opportunity!', correct: false },
                    { text: 'Verified badges can be spoofed or it\'s a scammer pretending to be someone else. Be skeptical.', correct: true },
                    { text: 'I\'ll give them my real name and email', correct: false },
                    { text: 'This is definitely legitimate', correct: false }
                ],
                feedback: 'Real sponsorships rarely come via random DMs, and scammers often spoof accounts. Never share personal info without verifying who you\'re talking to.'
            },
            {
                id: 5,
                question: 'Your friend texts: "Can you send me $20? I\'ll pay you back tomorrow. My mom took my card."',
                options: [
                    { text: 'Sure, I\'ll send the money through Venmo right away', correct: false },
                    { text: 'It\'s your friend, so it\'s safe', correct: false },
                    { text: 'Call your friend to verify it\'s really them before sending money', correct: true },
                    { text: 'Ask them why they need money first', correct: false }
                ],
                feedback: 'Your friend\'s account could be hacked, or it might be a scammer. Always call or meet in person to verify requests for money.'
            }
        ]
    }
];
