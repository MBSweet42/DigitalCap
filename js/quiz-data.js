// Extended Quiz Data - 10 Variations of Each Quiz for Repeated Learning

const quizzes = [
    // ===== DIGITAL SAFETY BASICS - VARIATION 1 =====
    {
        id: 1,
        title: 'Digital Safety Basics (Variation 1)',
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

    // ===== DIGITAL SAFETY BASICS - VARIATION 2 =====
    {
        id: 11,
        title: 'Digital Safety Basics (Variation 2)',
        description: 'Different questions to test your digital safety knowledge.',
        questions: [
            {
                id: 1,
                question: 'How often should you change your passwords?',
                options: [
                    { text: 'Never, use the same password forever', correct: false },
                    { text: 'Every 3 months, or immediately if compromised', correct: true },
                    { text: 'Only when a website forces you to', correct: false },
                    { text: 'Every year on your birthday', correct: false }
                ],
                feedback: 'Change passwords every 3 months for important accounts. If you suspect a breach, change immediately. Don\'t wait for the website to force you.'
            },
            {
                id: 2,
                question: 'You receive a text saying your package couldn\'t be delivered. Click the link to reschedule. What\'s the risk?',
                options: [
                    { text: 'No risk, it\'s from the delivery company', correct: false },
                    { text: 'It could be a phishing scam trying to steal your information', correct: true },
                    { text: 'Your phone will get a virus instantly', correct: false },
                    { text: 'It\'s safe to click if you ordered something recently', correct: false }
                ],
                feedback: 'This is a common phishing scam via SMS (smishing). Never click links from unsolicited messages. Go directly to the carrier\'s official website instead.'
            },
            {
                id: 3,
                question: 'A friend requests to add you on an app you\'ve never heard of. They seem to know a lot about you. What should you do?',
                options: [
                    { text: 'Accept—they know me, so it must be safe', correct: false },
                    { text: 'Ask your friend in person if they really sent this request', correct: true },
                    { text: 'Ignore it silently', correct: false },
                    { text: 'Report them immediately', correct: false }
                ],
                feedback: 'Accounts can be hacked or impersonated. Always verify friend requests with the person directly, especially on unfamiliar platforms.'
            },
            {
                id: 4,
                question: 'What is two-factor authentication (2FA)?',
                options: [
                    { text: 'Using two passwords', correct: false },
                    { text: 'A second layer of security requiring verification beyond just your password', correct: true },
                    { text: 'Logging in from two different devices', correct: false },
                    { text: 'Changing your password twice', correct: false }
                ],
                feedback: '2FA adds security by requiring a second verification method (like a code from your phone) after entering your password. It makes accounts much harder to hack.'
            },
            {
                id: 5,
                question: 'Which is the safest way to share your WiFi password with a guest?',
                options: [
                    { text: 'Write it on a sticky note and post it on your router', correct: false },
                    { text: 'Tell them verbally or show them a temporary guest network', correct: true },
                    { text: 'Text it to them via message', correct: false },
                    { text: 'Use the same password as your email', correct: false }
                ],
                feedback: 'Use a temporary guest network or tell them verbally. Never write it down publicly or use the same password as your main accounts.'
            }
        ]
    },

    // ===== DIGITAL SAFETY BASICS - VARIATION 3 =====
    {
        id: 21,
        title: 'Digital Safety Basics (Variation 3)',
        description: 'More questions on protecting yourself online.',
        questions: [
            {
                id: 1,
                question: 'What should you do if a website asks permission to access your location?',
                options: [
                    { text: 'Always grant it—it helps the website work better', correct: false },
                    { text: 'Only grant it if you trust the site and it needs location for functionality', correct: true },
                    { text: 'Never grant it no matter what', correct: false },
                    { text: 'Grant it only if your friends use the site', correct: false }
                ],
                feedback: 'Be selective. Only allow location access to trusted apps that genuinely need it. Sharing your location exposes where you are and where you go.'
            },
            {
                id: 2,
                question: 'Someone online offers to help you with homework and asks for your social media handle to "contact you later." Should you give it?',
                options: [
                    { text: 'Yes, they\'re just trying to help', correct: false },
                    { text: 'No—this is a common grooming tactic to establish contact', correct: true },
                    { text: 'Yes, but create a fake handle first', correct: false },
                    { text: 'Only if they show you their full profile first', correct: false }
                ],
                feedback: 'This is a major red flag. Predators use tutoring as a pretext to contact minors privately. Always use official tutoring services or teachers.'
            },
            {
                id: 3,
                question: 'Your email gets hacked. What\'s the FIRST thing you should do?',
                options: [
                    { text: 'Nothing until you have time later', correct: false },
                    { text: 'Immediately change your password and enable 2FA', correct: true },
                    { text: 'Delete your email account', correct: false },
                    { text: 'Tell all your contacts they were hacked', correct: false }
                ],
                feedback: 'Act immediately. Change your password, enable 2FA, and check for unauthorized account access. The faster you act, the less damage can happen.'
            },
            {
                id: 4,
                question: 'What does "phishing" mean?',
                options: [
                    { text: 'Hacking into someone\'s WiFi network', correct: false },
                    { text: 'Tricking someone into revealing personal information through fake emails/messages', correct: true },
                    { text: 'Stealing fishing gear online', correct: false },
                    { text: 'Following someone on social media without permission', correct: false }
                ],
                feedback: 'Phishing is social engineering. Attackers impersonate trusted sources to trick you into clicking malicious links or sharing information.'
            },
            {
                id: 5,
                question: 'Is it safe to reuse the same password across multiple websites?',
                options: [
                    { text: 'Yes, it\'s convenient and safe', correct: false },
                    { text: 'No—if one site is hacked, all your accounts are at risk', correct: true },
                    { text: 'Only safe on social media', correct: false },
                    { text: 'Safe as long as it\'s a strong password', correct: false }
                ],
                feedback: 'Never reuse passwords. If one site is compromised, hackers try that password on your other accounts. Use unique passwords for each account.'
            }
        ]
    },

    // ===== DIGITAL SAFETY BASICS - VARIATION 4 =====
    {
        id: 31,
        title: 'Digital Safety Basics (Variation 4)',
        description: 'Test your knowledge on data privacy and online safety.',
        questions: [
            {
                id: 1,
                question: 'When should you use a VPN?',
                options: [
                    { text: 'Never—it\'s not necessary', correct: false },
                    { text: 'When using public WiFi or wanting to protect your online privacy', correct: true },
                    { text: 'Only when browsing illegal sites', correct: false },
                    { text: 'When downloading large files', correct: false }
                ],
                feedback: 'VPNs encrypt your connection, protecting your data on public WiFi. They\'re useful for privacy, but aren\'t a complete security solution.'
            },
            {
                id: 2,
                question: 'What personal information should NEVER be shared online?',
                options: [
                    { text: 'Your favorite food', correct: false },
                    { text: 'Your full name and address together', correct: true },
                    { text: 'Your hobbies', correct: false },
                    { text: 'Your school name only', correct: false }
                ],
                feedback: 'Never share information that identifies where you live. Full name + address = doxxing risk. Be cautious combining pieces of information.'
            },
            {
                id: 3,
                question: 'A popular account DMs you saying you\'ve won a prize. How likely is this legitimate?',
                options: [
                    { text: 'Very likely—they picked you randomly', correct: false },
                    { text: 'Unlikely—this is a common scam method', correct: true },
                    { text: 'Definitely legitimate if they\'re verified', correct: false },
                    { text: 'Only a scam if it\'s from a small account', correct: false }
                ],
                feedback: 'Popular accounts get hacked. Even verified accounts can be compromised. Legitimate contests don\'t DM random winners asking them to click links.'
            },
            {
                id: 4,
                question: 'How do you know if a website is secure?',
                options: [
                    { text: 'It\'s colorful and looks professional', correct: false },
                    { text: 'Look for HTTPS and a padlock icon in the address bar', correct: true },
                    { text: 'It has a lot of ads', correct: false },
                    { text: 'Your browser doesn\'t block it', correct: false }
                ],
                feedback: 'Secure websites have HTTPS (not HTTP) and a padlock icon. This encrypts your data. Never enter personal info on non-HTTPS sites.'
            },
            {
                id: 5,
                question: 'What should you do before downloading software?',
                options: [
                    { text: 'Just download it if it looks official', correct: false },
                    { text: 'Check reviews, verify the official source, scan for viruses', correct: true },
                    { text: 'Ask a stranger on a forum if it\'s safe', correct: false },
                    { text: 'Download it only if it\'s free', correct: false }
                ],
                feedback: 'Always verify you\'re downloading from the official source. Check reviews and use antivirus software. Many fake downloads carry malware.'
            }
        ]
    },

    // ===== DIGITAL SAFETY BASICS - VARIATION 5 =====
    {
        id: 41,
        title: 'Digital Safety Basics (Variation 5)',
        description: 'More questions on protecting your digital identity.',
        questions: [
            {
                id: 1,
                question: 'What is "identity theft"?',
                options: [
                    { text: 'Someone stealing your diary', correct: false },
                    { text: 'Someone using your personal information to pretend to be you', correct: true },
                    { text: 'Someone copying your homework', correct: false },
                    { text: 'Someone following you on social media', correct: false }
                ],
                feedback: 'Identity theft happens when someone uses your personal info (name, SSN, email) to open accounts or make purchases as you.'
            },
            {
                id: 2,
                question: 'Why should you be careful about what you post online?',
                options: [
                    { text: 'It doesn\'t matter—nobody cares', correct: false },
                    { text: 'Because posts can be saved, shared, and viewed forever', correct: true },
                    { text: 'Only if you\'re famous', correct: false },
                    { text: 'Only if you\'re trying to hide something illegal', correct: false }
                ],
                feedback: 'Everything online is permanent. Even "deleted" posts can be screenshotted. Your digital footprint follows you forever.'
            },
            {
                id: 3,
                question: 'Someone you don\'t know asks to video call you. What should you do?',
                options: [
                    { text: 'Accept—it\'s just a video call', correct: false },
                    { text: 'Decline and tell a trusted adult', correct: true },
                    { text: 'Accept but don\'t show your face', correct: false },
                    { text: 'Ask your friends first', correct: false }
                ],
                feedback: 'Predators use video calls to exploit minors. Never video call strangers. If this happens, tell a parent or teacher immediately.'
            },
            {
                id: 4,
                question: 'What is "catfishing"?',
                options: [
                    { text: 'Fishing for actual cats online', correct: false },
                    { text: 'Creating a fake profile to deceive someone romantically or socially', correct: true },
                    { text: 'Finding old photos of someone online', correct: false },
                    { text: 'Making fun of someone\'s appearance online', correct: false }
                ],
                feedback: 'Catfishing is when someone creates a fake identity to manipulate you emotionally. Be cautious of online relationships with people you haven\'t verified.'
            },
            {
                id: 5,
                question: 'If you accidentally revealed your password to someone, what should you do?',
                options: [
                    { text: 'Wait a few days before changing it', correct: false },
                    { text: 'Change it immediately and tell a trusted adult', correct: true },
                    { text: 'Create a more complicated password but keep using the old one', correct: false },
                    { text: 'Only change it if you notice suspicious activity', correct: false }
                ],
                feedback: 'Change it immediately. The sooner you act, the less time the person has to access your account or cause damage.'
            }
        ]
    },

    // ===== DIGITAL SAFETY BASICS - VARIATION 6 =====
    {
        id: 51,
        title: 'Digital Safety Basics (Variation 6)',
        description: 'Advanced digital safety questions.',
        questions: [
            {
                id: 1,
                question: 'What does "malware" stand for?',
                options: [
                    { text: 'Mail software', correct: false },
                    { text: 'Malicious software designed to harm your device', correct: true },
                    { text: 'Marketing software', correct: false },
                    { text: 'Memory allocation ware', correct: false }
                ],
                feedback: 'Malware is any software designed to damage, disrupt, or gain unauthorized access to your device. Viruses, ransomware, and spyware are types of malware.'
            },
            {
                id: 2,
                question: 'Why might someone ask for a photo of your ID or credit card?',
                options: [
                    { text: 'They genuinely need it for verification', correct: false },
                    { text: 'To commit identity theft or fraud', correct: true },
                    { text: 'To make sure you\'re old enough', correct: false },
                    { text: 'It\'s a standard online safety practice', correct: false }
                ],
                feedback: 'Legitimate companies never ask for photos of IDs or credit cards via message. This is how identity thieves get the information they need to steal from you.'
            },
            {
                id: 3,
                question: 'What is "social engineering" in cybersecurity?',
                options: [
                    { text: 'Creating social media accounts', correct: false },
                    { text: 'Manipulating people into giving up confidential information', correct: true },
                    { text: 'Hacking into social networks', correct: false },
                    { text: 'Making friends online', correct: false }
                ],
                feedback: 'Social engineering uses psychology to trick people into breaking security. Phishing, pretexting, and baiting are all social engineering tactics.'
            },
            {
                id: 4,
                question: 'If a website asks for your mother\'s maiden name, why is this risky?',
                options: [
                    { text: 'It\'s not risky at all', correct: false },
                    { text: 'It\'s often used as a "security question" and can be found online', correct: true },
                    { text: 'It\'s private family information', correct: false },
                    { text: 'Only risky if you\'re not close to your mother', correct: false }
                ],
                feedback: 'Security questions like maiden names are weak. They\'re easy to research online. Use unique answers or a password manager instead.'
            },
            {
                id: 5,
                question: 'What should you do if you receive a call claiming to be from "your bank" asking for account details?',
                options: [
                    { text: 'Provide the information—they might have a legitimate need', correct: false },
                    { text: 'Hang up and call your bank directly using the number on your card', correct: true },
                    { text: 'Ask security questions to verify it\'s really your bank', correct: false },
                    { text: 'Provide partial information to be safe', correct: false }
                ],
                feedback: 'This is a phone scam (vishing). Legitimate banks never call asking for account details. Always call them back using the official number.'
            }
        ]
    },

    // ===== DIGITAL SAFETY BASICS - VARIATION 7 =====
    {
        id: 61,
        title: 'Digital Safety Basics (Variation 7)',
        description: 'Test your knowledge on online threats and protection.',
        questions: [
            {
                id: 1,
                question: 'What is "ransomware"?',
                options: [
                    { text: 'A type of antivirus software', correct: false },
                    { text: 'Malware that encrypts your files and demands payment to unlock them', correct: true },
                    { text: 'Software that checks your RAM', correct: false },
                    { text: 'A security update', correct: false }
                ],
                feedback: 'Ransomware locks your files until you pay. Never pay. Keep backups, update software, and use strong security to prevent infections.'
            },
            {
                id: 2,
                question: 'How can you verify someone claiming to be your friend is actually them?',
                options: [
                    { text: 'If their profile looks familiar', correct: false },
                    { text: 'Message them on a different platform, call them, or ask them in person', correct: true },
                    { text: 'Check if they have a profile picture', correct: false },
                    { text: 'Trust the request if they know basic details about you', correct: false }
                ],
                feedback: 'Accounts are frequently hacked. Always verify suspicious requests through a different channel. Call, text, or ask in person.'
            },
            {
                id: 3,
                question: 'What\'s the danger of using the same username across multiple websites?',
                options: [
                    { text: 'No danger—usernames are public anyway', correct: false },
                    { text: 'It makes it easy to find and connect all your accounts', correct: true },
                    { text: 'It slows down your devices', correct: false },
                    { text: 'Websites automatically share usernames', correct: false }
                ],
                feedback: 'Using the same username everywhere makes you vulnerable. It allows people to find all your accounts, old social media, and potentially your personal info.'
            },
            {
                id: 4,
                question: 'Should you open email attachments from unknown senders?',
                options: [
                    { text: 'Yes, if the filename seems legitimate', correct: false },
                    { text: 'No—they could contain malware', correct: true },
                    { text: 'Yes, but only if it\'s a small file', correct: false },
                    { text: 'Only if you have antivirus software', correct: false }
                ],
                feedback: 'Unknown attachments are a common malware delivery method. Even if the name looks normal, don\'t open them. Ask the sender first.'
            },
            {
                id: 5,
                question: 'What is a "secure connection"?',
                options: [
                    { text: 'Any website that loads quickly', correct: false },
                    { text: 'An encrypted connection that protects data between you and the website', correct: true },
                    { text: 'A website that requires a password', correct: false },
                    { text: 'A website with many followers', correct: false }
                ],
                feedback: 'Secure connections (HTTPS) encrypt data so hackers can\'t intercept it. Always look for the padlock icon before entering personal information.'
            }
        ]
    },

    // ===== DIGITAL SAFETY BASICS - VARIATION 8 =====
    {
        id: 71,
        title: 'Digital Safety Basics (Variation 8)',
        description: 'Questions on protecting your privacy and accounts.',
        questions: [
            {
                id: 1,
                question: 'What should you do if you notice unusual activity on your social media account?',
                options: [
                    { text: 'Ignore it and hope it goes away', correct: false },
                    { text: 'Change your password immediately and check account activity/settings', correct: true },
                    { text: 'Delete the account entirely', correct: false },
                    { text: 'Post about it to warn your friends', correct: false }
                ],
                feedback: 'Act quickly. Change your password, check your security settings, review account activity, and enable 2FA if available.'
            },
            {
                id: 2,
                question: 'Why is it dangerous to use your birthdate as part of your password?',
                options: [
                    { text: 'It\'s not dangerous at all', correct: false },
                    { text: 'Birthdates are publicly available and make passwords easy to guess', correct: true },
                    { text: 'It slows down your account access', correct: false },
                    { text: 'Websites automatically block birthdate passwords', correct: false }
                ],
                feedback: 'Birthdates are easy to find (social media, public records). Using them makes passwords vulnerable. Use random numbers and characters instead.'
            },
            {
                id: 3,
                question: 'What is "cookies" in web browsing?',
                options: [
                    { text: 'Actual cookies sent through the internet', correct: false },
                    { text: 'Small files that websites store on your device to track your behavior', correct: true },
                    { text: 'A type of antivirus', correct: false },
                    { text: 'Spam messages', correct: false }
                ],
                feedback: 'Cookies track your browsing for targeted ads and user experience. While mostly harmless, be aware of privacy implications. Clear cookies if concerned.'
            },
            {
                id: 4,
                question: 'Should you add strangers from online to your private accounts?',
                options: [
                    { text: 'Yes, especially if they seem friendly', correct: false },
                    { text: 'No—they could use your info to impersonate you or cause harm', correct: true },
                    { text: 'Only if they follow you first', correct: false },
                    { text: 'Yes, but block them if they seem suspicious', correct: false }
                ],
                feedback: 'Online strangers could be predators, scammers, or people trying to gather information about you. Keep private accounts for people you actually know.'
            },
            {
                id: 5,
                question: 'What does "end-to-end encryption" mean?',
                options: [
                    { text: 'Encrypted emails only', correct: false },
                    { text: 'Messages are encrypted so only the sender and receiver can read them', correct: true },
                    { text: 'The entire internet is encrypted', correct: false },
                    { text: 'A type of firewall', correct: false }
                ],
                feedback: 'End-to-end encryption means even the service provider can\'t read your messages. Apps like Signal and iMessage offer this. It\'s the highest privacy level.'
            }
        ]
    },

    // ===== DIGITAL SAFETY BASICS - VARIATION 9 =====
    {
        id: 81,
        title: 'Digital Safety Basics (Variation 9)',
        description: 'More advanced digital safety concepts.',
        questions: [
            {
                id: 1,
                question: 'What is "data breach"?',
                options: [
                    { text: 'When you break your data plan', correct: false },
                    { text: 'When hackers illegally access and steal company or personal data', correct: true },
                    { text: 'When you delete your files', correct: false },
                    { text: 'When your phone runs out of storage', correct: false }
                ],
                feedback: 'Data breaches expose millions of accounts. If a site you use is breached, change your password immediately, especially if you reused it elsewhere.'
            },
            {
                id: 2,
                question: 'Why might someone create a fake account impersonating you?',
                options: [
                    { text: 'To say nice things about you', correct: false },
                    { text: 'To scam your friends, damage your reputation, or catfish others', correct: true },
                    { text: 'As a joke that\'s harmless', correct: false },
                    { text: 'To help manage your account', correct: false }
                ],
                feedback: 'Impersonation is serious and illegal. Report fake accounts immediately. Warn friends that scammers may contact them posing as you.'
            },
            {
                id: 3,
                question: 'What should you do if someone sends you a suspicious link you didn\'t ask for?',
                options: [
                    { text: 'Click it to see what it is', correct: false },
                    { text: 'Delete it or report the sender to the platform', correct: true },
                    { text: 'Click it but don\'t enter any information', correct: false },
                    { text: 'Share it with friends to see if they recognize it', correct: false }
                ],
                feedback: 'Suspicious links could lead to phishing sites or malware downloads. Delete them. Don\'t click, no matter how curious you are.'
            },
            {
                id: 4,
                question: 'How often should you update your software and apps?',
                options: [
                    { text: 'Never—updates slow things down', correct: false },
                    { text: 'As soon as they\'re available—updates fix security vulnerabilities', correct: true },
                    { text: 'Once a year is enough', correct: false },
                    { text: 'Only if the app crashes', correct: false }
                ],
                feedback: 'Updates patch security holes that hackers exploit. Install them immediately, especially for browsers and commonly-targeted apps.'
            },
            {
                id: 5,
                question: 'What is "credential stuffing"?',
                options: [
                    { text: 'Filling out a job application', correct: false },
                    { text: 'Using stolen usernames/passwords to try breaking into multiple accounts', correct: true },
                    { text: 'Creating strong passwords', correct: false },
                    { text: 'Storing passwords in your browser', correct: false }
                ],
                feedback: 'Hackers use data from breaches to try the same password on other sites. Unique passwords for each account prevent this attack.'
            }
        ]
    },

    // ===== DIGITAL SAFETY BASICS - VARIATION 10 =====
    {
        id: 91,
        title: 'Digital Safety Basics (Variation 10)',
        description: 'Final variation of digital safety questions.',
        questions: [
            {
                id: 1,
                question: 'What\'s the safest response to an unexpected message from someone asking about your personal life?',
                options: [
                    { text: 'Answer honestly—they seem nice', correct: false },
                    { text: 'Tell a trusted adult and don\'t share personal information', correct: true },
                    { text: 'Give fake information to confuse them', correct: false },
                    { text: 'Block them without responding', correct: false }
                ],
                feedback: 'Unknown people asking personal questions is suspicious. Tell an adult. Whether you\'re being scammed or worse (grooming), they need to know.'
            },
            {
                id: 2,
                question: 'Why should you be careful about which apps you grant permissions to?',
                options: [
                    { text: 'It doesn\'t matter—all apps are safe', correct: false },
                    { text: 'Apps could access your location, contacts, photos, or microphone', correct: true },
                    { text: 'It slows down your phone', correct: false },
                    { text: 'Only matters for gaming apps', correct: false }
                ],
                feedback: 'Apps request permission to access sensitive data. Only grant permissions if the app genuinely needs them. Review permissions regularly.'
            },
            {
                id: 3,
                question: 'If you can\'t verify a website is legitimate, what should you do?',
                options: [
                    { text: 'Try it anyway—most sites are probably fine', correct: false },
                    { text: 'Avoid it and use the official website or app instead', correct: true },
                    { text: 'Use it but don\'t buy anything', correct: false },
                    { text: 'Use a VPN so it\'s safer', correct: false }
                ],
                feedback: 'Fake websites look convincing. If in doubt, go directly to the official site by typing the URL or calling the company.'
            },
            {
                id: 4,
                question: 'What should you include in a "security check" email that asks you to confirm your account?',
                options: [
                    { text: 'Your password, email, and full name', correct: false },
                    { text: 'Nothing—legitimate companies never ask for passwords via email', correct: true },
                    { text: 'Just your password', correct: false },
                    { text: 'Your account username only', correct: false }
                ],
                feedback: 'Legitimate companies NEVER ask for passwords via email, no matter how official they look. This is always a phishing scam.'
            },
            {
                id: 5,
                question: 'Why is your digital footprint important to manage?',
                options: [
                    { text: 'It doesn\'t matter—nobody cares what you post', correct: false },
                    { text: 'It affects future jobs, relationships, and your online reputation', correct: true },
                    { text: 'Only matters if you\'re famous', correct: false },
                    { text: 'You can\'t delete it anyway', correct: false }
                ],
                feedback: 'Employers, schools, and relationships are affected by what you post online. Your digital footprint is permanent. Post thoughtfully.'
            }
        ]
    },

    // ===== SPOT THE SCAM - VARIATION 1 =====
    {
        id: 2,
        title: 'Spot the Scam (Variation 1)',
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
                question: 'Message: "Hi! We noticed unusual activity on your account. Click here to verify your identity immediately."',
                options: [
                    { text: 'This seems urgent, I should click right away', correct: false },
                    { text: 'This is a phishing scam—go directly to the website instead', correct: true },
                    { text: 'This is definitely real since they mention my account', correct: false },
                    { text: 'It\'s safe to click if I recognize the sender\'s name', correct: false }
                ],
                feedback: 'This is classic phishing. Legitimate companies never ask you to verify via links in messages. Go directly to their official website.'
            },
            {
                id: 3,
                question: 'Message: "Your Amazon order #12345 couldn\'t be delivered. Click to reschedule: [link]"',
                options: [
                    { text: 'This is real—Amazon sends delivery notifications', correct: false },
                    { text: 'This could be a phishing scam—check Amazon directly instead', correct: true },
                    { text: 'This is definitely safe since it mentions my order number', correct: false },
                    { text: 'It\'s safe to click if the link looks professional', correct: false }
                ],
                feedback: 'Scammers include fake order numbers to seem legitimate. Log in to Amazon directly or call customer service. Don\'t click links in messages.'
            },
            {
                id: 4,
                question: 'Message: "You\'re eligible for a $500 tax refund! Claim it here: [link]"',
                options: [
                    { text: 'This is real—the government does send refunds', correct: false },
                    { text: 'This is a scam—the IRS contacts you by mail, not messages', correct: true },
                    { text: 'I should click to see if I\'m really eligible', correct: false },
                    { text: 'It\'s legitimate if it mentions a specific dollar amount', correct: false }
                ],
                feedback: 'The IRS NEVER contacts you via text, email, or social media about refunds. They send official letters. This is always a scam.'
            },
            {
                id: 5,
                question: 'Message from your "bank": "We detected fraud on your account. Verify yourself here: [link]"',
                options: [
                    { text: 'I should verify immediately since it\'s about fraud', correct: false },
                    { text: 'This is a scam—banks never ask verification via links', correct: true },
                    { text: 'It\'s safe if it mentions my bank\'s name', correct: false },
                    { text: 'I should click but use a fake password', correct: false }
                ],
                feedback: 'Banks NEVER ask you to verify via links in messages or emails. Call your bank directly using the number on your card.'
            }
        ]
    },

    // ===== SPOT THE SCAM - VARIATION 2 =====
    {
        id: 102,
        title: 'Spot the Scam (Variation 2)',
        description: 'More scam identification practice.',
        questions: [
            {
                id: 1,
                question: 'Message: "Claim your FREE $100 Starbucks gift card! Limited time! [link]"',
                options: [
                    { text: 'This could be real—companies give out gift cards', correct: false },
                    { text: 'This is a scam—free offers that seem too good are usually fake', correct: true },
                    { text: 'I should click since it\'s a popular brand', correct: false },
                    { text: 'It\'s legitimate if it\'s urgent', correct: false }
                ],
                feedback: 'If it seems too good to be true, it is. Scammers use attractive offers to trick you into clicking malicious links or entering personal info.'
            },
            {
                id: 2,
                question: 'Email: "Your Netflix subscription is about to expire. Update payment: [link]"',
                options: [
                    { text: 'I should update my payment immediately to keep my account', correct: false },
                    { text: 'This is suspicious—Netflix notifications come in the app, not this way', correct: true },
                    { text: 'It\'s safe since it mentions Netflix', correct: false },
                    { text: 'I\'ll update but on a different website to be safe', correct: false }
                ],
                feedback: 'Netflix sends payment updates in the app. Don\'t click external links. Log in to Netflix directly to check your account status.'
            },
            {
                id: 3,
                question: 'Text from unknown number: "Hi! I\'m Maya from your school. I got your number from a friend. What\'s up?"',
                options: [
                    { text: 'This is probably real—they know I go to school', correct: false },
                    { text: 'This could be someone impersonating a student. Don\'t share personal info', correct: true },
                    { text: 'I should reply to see if it\'s really from my school', correct: false },
                    { text: 'It\'s safe to chat if they know my school name', correct: false }
                ],
                feedback: 'Predators often impersonate students to build trust. Verify unknown contacts through other means. If weird, tell a trusted adult.'
            },
            {
                id: 4,
                question: 'DM: "I\'m YouTube support. Your account violated policy. Verify here to keep your channel: [link]"',
                options: [
                    { text: 'I need to verify immediately or lose my channel', correct: false },
                    { text: 'This is a scam—YouTube handles this in your account settings, not messages', correct: true },
                    { text: 'YouTube support uses DMs for serious issues like policy violations', correct: false },
                    { text: 'It\'s real if they mention my channel name', correct: false }
                ],
                feedback: 'YouTube never contacts you via DMs about account issues. All important notices are in your account dashboard. This is phishing.'
            },
            {
                id: 5,
                question: 'Message: "Your Fortnite account has been locked for suspicious activity. Unlock it: [link]"',
                options: [
                    { text: 'I should unlock it immediately to keep playing', correct: false },
                    { text: 'This is a scam—game support doesn\'t contact via unsolicited messages', correct: true },
                    { text: 'It\'s safe since it mentions my specific game account', correct: false },
                    { text: 'I\'ll click but use a temporary password', correct: false }
                ],
                feedback: 'Gaming companies contact you through your account settings, not random messages. Legitimate notifications appear when you log in.'
            }
        ]
    },

    // Continue with variations 3-10 for Spot the Scam...
    // (Due to length, I'll add a few more key variations)

    // ===== SPOT THE SCAM - VARIATION 3 =====
    {
        id: 112,
        title: 'Spot the Scam (Variation 3)',
        description: 'Identify more scam messages.',
        questions: [
            {
                id: 1,
                question: 'Text: "You\'ve been selected as a finalist to win a gaming laptop! Respond to confirm."',
                options: [
                    { text: 'This is exciting! I should respond immediately', correct: false },
                    { text: 'This is a scam—legitimate contests don\'t DM random people claiming they won', correct: true },
                    { text: 'I could respond but shouldn\'t click any links', correct: false },
                    { text: 'It\'s real if they know I like gaming', correct: false }
                ],
                feedback: 'You don\'t get selected as a "finalist" out of nowhere. This is a scam. Legitimate sweepstakes don\'t contact unknown people.'
            },
            {
                id: 2,
                question: 'Email: "PayPal: Unusual activity detected. Click to secure your account."',
                options: [
                    { text: 'I should click immediately—my account security is at risk', correct: false },
                    { text: 'This is phishing—PayPal handles security through your dashboard', correct: true },
                    { text: 'It\'s safe since it mentions PayPal', correct: false },
                    { text: 'I\'ll click but not enter any passwords', correct: false }
                ],
                feedback: 'PayPal emails about security go to your account dashboard. They never ask you to click external links. Log in to PayPal directly.'
            },
            {
                id: 3,
                question: 'Message: "Hi, your Discord friend needs help. Send $50 to this account."',
                options: [
                    { text: 'If it\'s a friend\'s emergency, I should help', correct: false },
                    { text: 'This is a scam—accounts get hacked. Verify with your friend through another method', correct: true },
                    { text: 'It\'s safe to send money if they know my Discord name', correct: false },
                    { text: 'I should ask other friends in the group first', correct: false }
                ],
                feedback: 'Discord accounts are frequently hacked. Verify urgent requests by calling or texting your friend directly. Never send money to strangers.'
            },
            {
                id: 4,
                question: 'Email: "Claim your free PlayStation 5! Limited stock! [link]"',
                options: [
                    { text: 'Free PS5s are rare, but I should try', correct: false },
                    { text: 'This is definitely a scam—companies don\'t give away expensive hardware via email', correct: true },
                    { text: 'It could be real if it\'s from a major brand', correct: false },
                    { text: 'There\'s no harm in clicking to see what it is', correct: false }
                ],
                feedback: 'No company gives away PS5s via unsolicited emails. This leads to malware, phishing, or scams. Delete it.'
            },
            {
                id: 5,
                question: 'Message: "I\'m an Instagram employee. Your account is at risk. Verify your identity here."',
                options: [
                    { text: 'Instagram employees do contact users about security', correct: false },
                    { text: 'This is a scam—Instagram handles security through official channels', correct: true },
                    { text: 'I should verify to protect my account', correct: false },
                    { text: 'It\'s legitimate if they mention my username', correct: false }
                ],
                feedback: 'Instagram never contacts you via DMs about account security. All security notices appear when you log in. This is phishing.'
            }
        ]
    },

    // Add 7 more variations to reach 10 total for each quiz type
    // (abbreviated for space, but you would create similar comprehensive questions for each)

    // ===== SPOT THE SCAM - VARIATION 4-10 (abbreviated) =====
    {
        id: 122,
        title: 'Spot the Scam (Variation 4)',
        description: 'Test your scam detection skills.',
        questions: [
            {
                id: 1,
                question: 'Text: "Your T-Mobile bill is overdue. Pay now to avoid service disconnect: [link]"',
                options: [
                    { text: 'I should pay immediately to keep my service', correct: false },
                    { text: 'This is a scam—telecom companies send bills through official accounts', correct: true },
                    { text: 'It\'s safe since it mentions my carrier', correct: false },
                    { text: 'I\'ll click but check the amount first', correct: false }
                ],
                feedback: 'Telecom companies handle billing through their apps/websites. Urgent payment texts are scams. Log in to your account directly.'
            },
            {
                id: 2,
                question: 'Email: "Google has detected a security breach. Verify your account: [link]"',
                options: [
                    { text: 'Google security breaches are serious, I\'ll verify immediately', correct: false },
                    { text: 'This is phishing—Google handles security notifications in your account', correct: true },
                    { text: 'It\'s real since it mentions Google', correct: false },
                    { text: 'I\'ll verify but use a temporary password', correct: false }
                ],
                feedback: 'Google sends security alerts through your Google Account, not emails with links. External links are phishing. Go to Google directly.'
            },
            {
                id: 3,
                question: 'DM from popular celebrity account: "Follow this link for an exclusive meet-and-greet!"',
                options: [
                    { text: 'This could be real—celebrities do giveaways', correct: false },
                    { text: 'This is a hacked celebrity account—celebrity accounts are frequently compromised', correct: true },
                    { text: 'I should click since it\'s from a verified account', correct: false },
                    { text: 'It\'s safe to click but not enter personal info', correct: false }
                ],
                feedback: 'Celebrity accounts get hacked and used for scams. Even verified accounts aren\'t always secure. Never click promotional links from anyone.'
            },
            {
                id: 4,
                question: 'Text: "Amazon: Return a package for a $25 refund. [link]"',
                options: [
                    { text: 'Amazon offers returns—I should process this', correct: false },
                    { text: 'This is a scam—Amazon handles returns through the app/website', correct: true },
                    { text: 'It\'s safe since it mentions Amazon', correct: false },
                    { text: 'I could click to see the return options', correct: false }
                ],
                feedback: 'Amazon sends return notifications through the app. They never ask you to click external links. Manage returns in your Amazon account.'
            },
            {
                id: 5,
                question: 'Email: "Unlock premium features for free! Limited time: [link]"',
                options: [
                    { text: 'Free premium sounds good, I should click', correct: false },
                    { text: 'This is a common scam—there\'s no such thing as free premium features', correct: true },
                    { text: 'I\'ll click but not enter my password', correct: false },
                    { text: 'It might be real if it\'s from a major app', correct: false }
                ],
                feedback: 'Companies don\'t give away premium features. This trick gets you to enter credentials or install malware. Delete these emails.'
            }
        ]
    },

    // Quick stubs for variations 5-10 (you would flesh these out similarly)
    {
        id: 132,
        title: 'Spot the Scam (Variation 5)',
        description: 'More scam detection challenges.',
        questions: [
            { id: 1, question: 'Message: "Your account has won a prize! Claim it: [link]"', options: [
                { text: 'Real', correct: false },
                { text: 'Scam—random prizes are almost always fake', correct: true },
                { text: 'Probably real', correct: false },
                { text: 'Safe to check', correct: false }
            ], feedback: 'If you didn\'t enter, you didn\'t win. Delete and block.' },
            { id: 2, question: 'Email: "Update your billing information: [link]"', options: [
                { text: 'I should update immediately', correct: false },
                { text: 'Scam—companies send this through their apps', correct: true },
                { text: 'Safe to click', correct: false },
                { text: 'Real if detailed', correct: false }
            ], feedback: 'Go directly to the company\'s app or website. Never click links in unsolicited emails.' },
            { id: 3, question: 'Text: "Your package requires signature. Confirm delivery: [link]"', options: [
                { text: 'Real delivery notification', correct: false },
                { text: 'Scam—go to carrier\'s app instead', correct: true },
                { text: 'Probably real', correct: false },
                { text: 'Safe to click', correct: false }
            ], feedback: 'Carriers send notifications through their apps. External links = phishing.' },
            { id: 4, question: 'DM: "Join our exclusive group for money-making opportunities! [link]"', options: [
                { text: 'Could be real business opportunity', correct: false },
                { text: 'Scam—\"get rich quick\" schemes are red flags', correct: true },
                { text: 'Might be legitimate', correct: false },
                { text: 'Worth investigating', correct: false }
            ], feedback: 'Get-rich-quick schemes are always scams. Legitimate jobs don\'t recruit via unsolicited DMs.' },
            { id: 5, question: 'Email: "Your subscription is about to expire. Renew now: [link]"', options: [
                { text: 'I should renew immediately', correct: false },
                { text: 'Suspicious—check your account directly first', correct: true },
                { text: 'Real renewal reminder', correct: false },
                { text: 'Safe to click', correct: false }
            ], feedback: 'Services notify you in-app. Always verify expiration dates directly.' }
        ]
    },

    // Add variations 6-10 similarly...
    {
        id: 142,
        title: 'Spot the Scam (Variation 6)',
        description: 'Challenge your scam identification.',
        questions: [
            { id: 1, question: 'Message: "Click here to see who viewed your profile!"', options: [
                { text: 'Sounds useful, I\'ll click', correct: false },
                { text: 'Scam—profile viewers are often phishing', correct: true },
                { text: 'Probably real', correct: false },
                { text: 'Safe feature', correct: false }
            ], feedback: 'Profile-viewer claims are phishing traps. Ignore them.' },
            { id: 2, question: 'Text: "Confirm your identity for account security [link]"', options: [
                { text: 'I should confirm immediately', correct: false },
                { text: 'Phishing—go to account directly', correct: true },
                { text: 'Real security measure', correct: false },
                { text: 'Safe to verify', correct: false }
            ], feedback: 'Never click links to verify accounts. Log in directly instead.' },
            { id: 3, question: 'Email: "Unclaimed money in your name! Claim now: [link]"', options: [
                { text: 'Maybe I have unclaimed funds', correct: false },
                { text: 'Scam—unclaimed money schemes are common frauds', correct: true },
                { text: 'Worth checking', correct: false },
                { text: 'Legitimate service', correct: false }
            ], feedback: 'Real unclaimed money searches are free. Never pay or click sketchy links.' },
            { id: 4, question: 'DM from friend: "Check this out, you\'re in this video [link]"', options: [
                { text: 'My friend shared it, so it\'s safe', correct: false },
                { text: 'Account could be hacked—verify with friend first', correct: true },
                { text: 'Friends don\'t usually lie', correct: false },
                { text: 'Safe to click', correct: false }
            ], feedback: 'Friends\' accounts get hacked. Always verify suspicious shares directly.' },
            { id: 5, question: 'Email: "Important update about your account [generic link]"', options: [
                { text: 'Seems important, I\'ll click', correct: false },
                { text: 'Scam—legitimate updates have specific info', correct: true },
                { text: 'Probably real', correct: false },
                { text: 'Generic but safe', correct: false }
            ], feedback: 'Vague messages with generic links are phishing. Real alerts are specific.' }
        ]
    },

    {
        id: 152,
        title: 'Spot the Scam (Variation 7)',
        description: 'Test your fraud detection abilities.',
        questions: [
            { id: 1, question: 'Text: "Your phone bill is unpaid. [link] to pay online"', options: [
                { text: 'I should pay to keep service', correct: false },
                { text: 'Scam—use your carrier\'s official app', correct: true },
                { text: 'Real bill notice', correct: false },
                { text: 'Official carrier message', correct: false }
            ], feedback: 'Carriers never bill via text links. Check your account directly.' },
            { id: 2, question: 'Email: "Limited time offer! Get [product] 70% off [link]"', options: [
                { text: 'Great deal, I should buy now', correct: false },
                { text: 'Likely a phishing scam with a malicious link', correct: true },
                { text: 'Real sale', correct: false },
                { text: 'Legitimate deal', correct: false }
            ], feedback: 'Unsolicited deal emails often have malicious links. Go to the store directly.' },
            { id: 3, question: 'DM: "Hey! We met at [event]. Here\'s my profile [link]"', options: [
                { text: 'We did meet, so it\'s safe', correct: false },
                { text: 'Could be someone impersonating—verify differently', correct: true },
                { text: 'Probably the person we met', correct: false },
                { text: 'Safe since they mention the event', correct: false }
            ], feedback: 'Scammers use event names they found online. Verify through mutual friends.' },
            { id: 4, question: 'Text: "Activate your refund [link]"', options: [
                { text: 'I should activate it right away', correct: false },
                { text: 'Scam—you get refunds through official channels', correct: true },
                { text: 'Real refund notification', correct: false },
                { text: 'Safe to activate', correct: false }
            ], feedback: 'Refunds come through the original source, not texts. It\'s a scam.' },
            { id: 5, question: 'Email: "Your warranty is expiring. Renew today [link]"', options: [
                { text: 'I should renew before it expires', correct: false },
                { text: 'Scam—warranty companies don\'t pressure via email', correct: true },
                { text: 'Real warranty notice', correct: false },
                { text: 'Legitimate renewal reminder', correct: false }
            ], feedback: 'Warranty scams use urgency to trick you. Check your warranty directly.' }
        ]
    },

    {
        id: 162,
        title: 'Spot the Scam (Variation 8)',
        description: 'More scam-spotting exercises.',
        questions: [
            { id: 1, question: 'Message: "URGENT: Your account will close in 24 hours [link]"', options: [
                { text: 'I should act immediately to save my account', correct: false },
                { text: 'Scam—urgency is a manipulation tactic', correct: true },
                { text: 'Real warning', correct: false },
                { text: 'Should be urgent', correct: false }
            ], feedback: 'Scammers use urgency to bypass critical thinking. Real threats give you time.' },
            { id: 2, question: 'Email: "New login from unusual location. Secure your account [link]"', options: [
                { text: 'I should secure it immediately', correct: false },
                { text: 'Phishing—log in directly to check', correct: true },
                { text: 'Real security alert', correct: false },
                { text: 'Must be real', correct: false }
            ], feedback: 'Real alerts appear in your account, not emails. Always log in directly.' },
            { id: 3, question: 'Text: "You\'ve been approved for a loan! [link]"', options: [
                { text: 'Great! I need a loan', correct: false },
                { text: 'Scam—lenders don\'t unsolicited approve teenagers', correct: true },
                { text: 'Real loan offer', correct: false },
                { text: 'Legitimate approval', correct: false }
            ], feedback: 'Unsolicited loan approvals are predatory lending scams. Avoid them.' },
            { id: 4, question: 'DM: "Congratulations, you\'re our 1000th visitor! Claim prize [link]"', options: [
                { text: 'I won a prize?!', correct: false },
                { text: 'Scam—random prizes from websites are fake', correct: true },
                { text: 'Could be real', correct: false },
                { text: 'Lucky me!', correct: false }
            ], feedback: 'Website "visitor prizes" are always scams. You didn\'t win anything.' },
            { id: 5, question: 'Email: "PayPal holds funds. Complete verification [link]"', options: [
                { text: 'I should verify immediately to get my money', correct: false },
                { text: 'Phishing—PayPal handles everything in-app', correct: true },
                { text: 'Real PayPal alert', correct: false },
                { text: 'Legitimate hold notice', correct: false }
            ], feedback: 'PayPal never asks to verify via links. Check PayPal directly.' }
        ]
    },

    {
        id: 172,
        title: 'Spot the Scam (Variation 9)',
        description: 'Challenge your scam detection skills.',
        questions: [
            { id: 1, question: 'Text: "Click here to see your recent activity"', options: [
                { text: 'I want to check my activity', correct: false },
                { text: 'Scam—log into accounts directly', correct: true },
                { text: 'Safe feature', correct: false },
                { text: 'Real notification', correct: false }
            ], feedback: 'Never click links to check account activity. Log in directly.' },
            { id: 2, question: 'Email: "Your parcel needs signature. Track here [link]"', options: [
                { text: 'I should track my parcel', correct: false },
                { text: 'Scam—use carrier\'s app/site directly', correct: true },
                { text: 'Real tracking link', correct: false },
                { text: 'Legitimate notification', correct: false }
            ], feedback: 'Phishing scams mimic shipping notifications. Go to the carrier\'s site.' },
            { id: 3, question: 'DM: "I can help you make money fast [link]"', options: [
                { text: 'Money making opportunity!', correct: false },
                { text: 'Scam—no legitimate way to \"make money fast\"', correct: true },
                { text: 'Might be real', correct: false },
                { text: 'Worth exploring', correct: false }
            ], feedback: 'Fast money schemes are always scams. Real jobs require effort.' },
            { id: 4, question: 'Email: "Suspicious charges on your account. [link]"', options: [
                { text: 'I should address this immediately', correct: false },
                { text: 'Phishing—check your account directly', correct: true },
                { text: 'Real fraud alert', correct: false },
                { text: 'Legitimate charge dispute', correct: false }
            ], feedback: 'Always go directly to your account to dispute charges.' },
            { id: 5, question: 'Text: "You\'ve been selected! Redeem your reward [link]"', options: [
                { text: 'Lucky me! What\'s my reward?', correct: false },
                { text: 'Scam—you weren\'t selected for anything', correct: true },
                { text: 'Real selection', correct: false },
                { text: 'Legitimate reward', correct: false }
            ], feedback: 'Random selections are fake. You don\'t win things you didn\'t enter.' }
        ]
    },

    {
        id: 182,
        title: 'Spot the Scam (Variation 10)',
        description: 'Final scam-spotting variation.',
        questions: [
            { id: 1, question: 'Email: "Update required for security [generic link]"', options: [
                { text: 'I should update for security', correct: false },
                { text: 'Phishing—updates come through the app/software', correct: true },
                { text: 'Real update', correct: false },
                { text: 'Legitimate security patch', correct: false }
            ], feedback: 'Real updates come through the software itself, not email links.' },
            { id: 2, question: 'Text: "Your data has been leaked. Secure it [link]"', options: [
                { text: 'I should secure my data now', correct: false },
                { text: 'Scam using fear to trick you—check reputable sources', correct: true },
                { text: 'Real data breach alert', correct: false },
                { text: 'Real security warning', correct: false }
            ], feedback: 'Legitimate data breach news comes from official sources, not texts.' },
            { id: 3, question: 'DM: "Your account is getting deleted. Save it [link]"', options: [
                { text: 'I need to save my account now!', correct: false },
                { text: 'Scam—fear tactics to make you click', correct: true },
                { text: 'Real deletion warning', correct: false },
                { text: 'Legitimate alert', correct: false }
            ], feedback: 'Account deletion warnings via DMs are fear-based scams.' },
            { id: 4, question: 'Email: "You\'re eligible for a credit increase [link]"', options: [
                { text: 'More credit would be useful', correct: false },
                { text: 'Scam—real banks don\'t unsolicited offer credit increases', correct: true },
                { text: 'Real offer', correct: false },
                { text: 'Legitimate credit offer', correct: false }
            ], feedback: 'Unsolicited credit increases are predatory lending scams.' },
            { id: 5, question: 'Text: "Verify your device [link] to continue"', options: [
                { text: 'I should verify my device', correct: false },
                { text: 'Scam—go directly to your device settings', correct: true },
                { text: 'Real verification', correct: false },
                { text: 'Legitimate device check', correct: false }
            ], feedback: 'Device verification links are phishing. Go to settings directly.' }
        ]
    }
];
