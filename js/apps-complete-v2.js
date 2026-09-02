// COMPREHENSIVE APP DIRECTORY v2
// Integrated with Real Parent Discoveries from Reddit & Parenting Communities
// Based on actual parent experiences, not just theoretical risks

const appsCompleteV2 = [
    {
        id: 1,
        name: 'TikTok',
        category: 'Social Media',
        ageRecommendation: 13,
        safetyRating: 2, // CRITICAL RISK
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Short-form video platform with a highly personalized recommendation system and potential effects on sleep, mood, and well-being with heavy use.',
        hasChat: true,
        chatDetails: 'Private messaging with followers; easily accessible to strangers',
        hasOpenInternet: true,
        internetDetails: 'Creator profiles can include external website links, and ads may contain destination links',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'TikTok\'s recommendation system uses signals such as watch time, likes, shares, and other interactions to personalize the For You feed. That personalization can sometimes create repetitive or narrow content patterns, including around sensitive topics like eating disorders, sadness, or dangerous trends. Parents should periodically ask what their child is seeing and how it makes them feel.'
        },
        hiddenDangers: [
            'Recommendation systems can still surface inappropriate content, including sexual content, violence, and profanity, even when safety filters are in use',
            'Mental health crisis: Heavy users show significantly higher rates of anxiety, depression, poor sleep, eating disorders, and self-harm ideation',
            'Social comparison effects particularly severe in ages 13-16',
            'Appropriate content → extreme content pipeline happens fast (sometimes within hours)',
            'Mental health impacts rival physical safety risks for this age group'
        ],
        parentConcerns: {
            mentalHealth: 'Eating disorders, body dysmorphia, anxiety, depression, sleep disruption, self-harm ideation (especially ages 13-16)',
            privacy: 'Extensive behavioral tracking; location data collected',
            predators: 'DM system accessible to non-followers; strangers can build rapport',
            addictionRisk: 'App is engineered to maximize engagement and can consume significant daily time for heavy users'
        },
        tipsForParents: [
            'Ask to see their "For You Page" regularly; it changes fast',
            'Understand the algorithm learns what keeps them watching',
            'Watch for mood changes after use (anxiety, depression, body image issues)',
            'Set strict time limits (app has built-in timer, but can be reset)',
            'Monitor for signs of eating disorders or self-harm content',
            'Restrict DMs to friends only',
            'Have conversations about what content is pushing them toward',
            'Know that "taking a break" from the app often helps mental health noticeably'
        ],
        parentConversationGuide: {
            startWith: '"I\'ve heard TikTok can be really intense. Can you show me what\'s on your For You Page right now?"',
            keyPoints: [
                'Ask what content they\'re seeing most often',
                'Discuss how the algorithm learns and escalates',
                'Talk about mental health impacts (sleep, mood, body image)',
                'Discuss if they\'ve noticed the app recommending extreme content',
                'Set expectations about time limits'
            ],
            redFlags: [
                'Sudden mood changes (anxiety, irritability)',
                'Sleep deprivation from late-night use',
                'Body image concerns or eating disorder symptoms',
                'Obsession with views/likes on own videos',
                'Secretive behavior about what they\'re watching',
                'References to trends you\'ve heard are dangerous'
            ],
            scriptOpener: '"I know TikTok is fun, but I\'m concerned about something. Studies show it can affect sleep and mood in kids your age. Let\'s talk about what you\'re watching and how it makes you feel."'
        },
        sources: 'Common Sense Media, NCBI (eating disorders/social media), parent communities, Reddit r/parenting',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'very_high',
        exposureExplanation: 'TikTok\'s algorithm aggressively personalizes the For You feed based on watch time and engagement, often surfacing extreme content within hours. Users can receive contact from unknown followers through DMs. Content is public by default, and the app employs numerous engagement signals to maximize screen time.',
        exposureFactors: ['content_exposure', 'unknown_people_contact', 'public_visibility', 'communication'],
        protectedExposureLevel: 'moderate',
        recommendedSafeguards: [
            {
                label: 'Set account to private and restrict DMs to friends only',
                instructions: 'Go to Settings > Privacy and safety. Set account to private. Under Direct messages, select \"Allow direct messages from\" and choose \"Friends only\". This blocks contact from strangers.'
            },
            {
                label: 'Monitor the For You Page regularly for concerning content',
                instructions: 'Review what the algorithm is recommending regularly. If you see eating disorder content, self-harm, or extreme trends, the For You feed has learned those patterns. You can \"not interested\" individual videos, but consider taking a break.'
            },
            {
                label: 'Enforce strict time limits using device-level controls',
                instructions: 'Do not rely on TikTok\'s built-in timer (users reset it constantly). Use your device\'s app timer (iOS Screen Time or Android Digital Wellbeing) to enforce a hard limit. Set to 30-60 minutes daily.'
            }
        ],
        protectedExplanation: 'Enabling strict privacy settings (private account, DM restrictions to friends only), monitoring the For You feed regularly, and enforcing time limits can meaningfully reduce exposure. However, the algorithm remains optimized for engagement over safety.'
    },
    {
        id: 2,
        name: 'Snapchat',
        category: 'Messaging',
        ageRecommendation: 13,
        safetyRating: 2, // CRITICAL RISK
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Messaging app with disappearing messages and location sharing, which can make some safety concerns harder to spot.',
        hasChat: true,
        chatDetails: 'DMs with anyone; messages disappear (but can be screenshot)',
        hasOpenInternet: true,
        internetDetails: 'Users can attach links to Snaps and share links in messages; eligible Public Profiles can also include website links',
        hasLocationTracking: true,
        locationDetails: 'Snap Map shows real-time location to friends (and can be set to public)',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Disappearing messages can make it harder to preserve evidence of concerning conversations. Snap Map can reveal a user\'s location to selected friends if location sharing is turned on, so families should review who can see location information.'
        },
        hiddenDangers: [
            'Disappearing messages mean parents cannot monitor grooming or abuse, even with account access',
            'Snap Map exposes real-time location to selected friends if location sharing is enabled',
            'Predators build rapport through Snapchat, then move to more isolated communication',
            'Kids assume messages are "private" and disappear, so they overshare personal info',
            'Screenshot feature means predators can save explicit content without kids knowing'
        ],
        parentConcerns: {
            predators: 'Primary platform for predator contact; disappearing messages hide grooming from parents',
            location: 'Real-time location visible if location sharing is enabled',
            sextortion: 'Predators screenshot explicit content and use it for blackmail',
            cyberbullying: 'Disappearing bullying messages can\'t be reported because they vanish'
        },
        tipsForParents: [
            'CHECK SNAP MAP IMMEDIATELY: disable or set to "Ghost Mode" (completely hidden)',
            'Understand disappearing messages mean you cannot monitor for grooming',
            'Review friends list frequently, and remove strangers immediately',
            'Discuss that screenshots mean nothing truly disappears',
            'Know the predator playbook: build rapport → move to private chat → isolation → exploitation',
            'Watch for: secretive behavior, hiding phone, sudden new "friends" with no mutual connections',
            'Consider: if your child won\'t let you see their Snapchat friends, there\'s likely a reason'
        ],
        parentConversationGuide: {
            startWith: '"I need to check your Snap Map with you. Can we turn it to Ghost Mode together?"',
            keyPoints: [
                'Make disabling Snap Map non-negotiable',
                'Explain that disappearing messages don\'t mean safe',
                'Discuss that screenshots = permanent copies',
                'Review who\'s contacting them, particularly any adults or unknown accounts',
                'Talk about the predator pattern: build trust → private chat → escalation'
            ],
            redFlags: [
                'New "friends" with no mutual connections',
                'Secretive behavior when using the app',
                'Refusing to show you friends list',
                'Unusual times of day when they\'re most active',
                'Mentions of someone who "gets them" better than peers',
                'Receiving gifts or money from online contacts'
            ],
            scriptOpener: '"I love that you use Snapchat with your friends, but I need to make sure you\'re safe. Let\'s look at your location settings together, and I want to turn off Snap Map."'
        },
        sources: 'NCMEC/NetSmartz, parenting forums, Snapchat safety reports, Reddit r/parenting',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'very_high',
        exposureExplanation: 'Snapchat\'s disappearing messages make it difficult to monitor for grooming. Snap Map shows real-time location to friends (and can be set to public). The app is designed around the assumption that messages vanish, encouraging users to overshare personal information.',
        exposureFactors: ['communication', 'unknown_people_contact', 'location_personal_data', 'public_visibility'],
        protectedExposureLevel: 'higher',
        recommendedSafeguards: [
            {
                label: 'Disable Snap Map and set to Ghost Mode immediately',
                instructions: 'Open Snapchat > Camera > tap your profile icon > Snap Map. Tap your name at the top > Settings (gear icon) > See My Location > Ghost Mode. This completely hides your location from everyone. Verify it is enabled before your teen uses the app.'
            },
            {
                label: 'Restrict friend requests and contact to people you know',
                instructions: 'Settings > Privacy > View My Story (set to \"Friends\") and Contact Me (set to \"Friends\"). Do not accept friend requests from people you do not know. Disappearing messages mean you cannot monitor conversations anyway.'
            }
        ],
        protectedExplanation: 'Disabling Snap Map and restricting contact to known friends significantly reduces location exposure and some communication risks. However, disappearing messages still make monitoring for abuse impossible.'
    },
    {
        id: 3,
        name: 'Discord',
        category: 'Messaging & Community',
        ageRecommendation: 13,
        safetyRating: 2, // CRITICAL RISK
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Community platform with minimal moderation and predator-friendly isolation features.',
        hasChat: true,
        chatDetails: 'Group servers and private DMs; easy to create fake accounts with self-reported age',
        hasOpenInternet: true,
        internetDetails: 'Users share links and external content; can link to harmful sites',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'The Texas Attorney General filed suit against Discord in May 2026 with allegations of facilitating child grooming. An Agreed Temporary Injunction (July 2026) requires Discord to implement stronger age-assurance and default safety protections for minors in Texas. Grooming patterns on gaming platforms commonly involve joining servers where kids gather, building trust through conversations, moving to private DMs for isolation, and exploitation. Discord has introduced teen-by-default safety settings and age-assurance tools for access to certain age-restricted features, but families should review privacy, DM, server, and friend-request settings.'
        },
        hiddenDangers: [
            'Design enables predators to isolate minors through private DMs (zero moderation)',
            'Age verification challenges: adults can pose as teens despite protections',
            'Predators join gaming servers (Roblox, Minecraft communities) to meet kids',
            'Private server feature allows predators to create "exclusive" spaces with isolated victims',
            'Texas AG legal action (May 2026); Agreed Temporary Injunction (July 2026) requires enhanced age-assurance and safety protections',
            'Documented cases of minors being groomed, coerced, and exploited on Discord',
            'Vulnerable kids (autistic, anxious, lonely) specifically targeted'
        ],
        parentConcerns: {
            predators: 'Most sophisticated predator infrastructure: systematic grooming pathway from gaming to Discord to exploitation',
            isolation: 'Private DMs hide conversations from parents completely',
            ageVerification: 'Broken: adults can pretend to be kids',
            vulnerability: 'Autistic and socially anxious kids specifically targeted'
        },
        tipsForParents: [
            'Ask: "What Discord servers are you in? Can you show me?"',
            'Know the predator pipeline: gaming server → Discord friend request → private DM → isolation',
            'Watch for: new adult "friends," requests to keep conversations secret, gifts/money from online contacts',
            'Look for: server invites from strangers, private DMs from accounts you don\'t recognize',
            'Red flag: kid becomes defensive about who they\'re talking to',
            'If your child has autism or anxiety, they\'re at higher risk; watch closer',
            'Consider: voice chat with unfamiliar people is a significant red flag'
        ],
        parentConversationGuide: {
            startWith: '"I want to understand Discord better. What servers are you in? Who are the people you talk to?"',
            keyPoints: [
                'Ask to see their server list and who they interact with daily',
                'Discuss that adults pretending to be teens = common predator tactic',
                'Explain the isolation pattern: private DMs = predator advantage',
                'Talk about why they might receive friend requests from strangers',
                'Make it safe to tell you if someone makes them uncomfortable'
            ],
            redFlags: [
                'Defensive about which servers they\'re in',
                'New adult "friends" from gaming communities',
                'Private voice chats with strangers',
                'Requests to keep conversations secret',
                'Gifts or money from online contacts',
                'Sudden mood changes or anxiety when using Discord',
                'Gaming → Discord friend request pattern'
            ],
            scriptOpener: '"I\'ve heard some concerning things about Discord and older people connecting with kids. I trust you, but I want to make sure you\'re safe. Can we talk about your Discord friends?"'
        },
        sources: 'Texas Attorney General lawsuit and Agreed Temporary Injunction (2026), NCMEC, parenting communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'very_high',
        exposureExplanation: 'Discord is built for communities where minors can join servers with thousands of unknown users. Voice and video chat with strangers is common. Moderation varies wildly by server, and predators actively recruit in Discord communities.',
        exposureFactors: ['communication', 'unknown_people_contact', 'outside_access'],
        protectedExposureLevel: 'higher',
        recommendedSafeguards: [
            {
                label: 'Join only friend-based servers and avoid public communities',
                instructions: 'Do not join large public communities or servers with hundreds of users. Only join private servers where all members are real-life friends. Be extremely cautious about join links from online contacts.'
            },
            {
                label: 'Disable direct messages from non-friends',
                instructions: 'User Settings > Privacy & Safety > Direct Messages (toggle off \"Allow direct messages from server members\"). This blocks DMs from people not on your friends list, limiting contact from unknown users in servers.'
            },
            {
                label: 'Avoid voice and video chat with people you do not know',
                instructions: 'Only use voice/video with close friends. Never accept voice or video calls from server members you have not met in person. If someone invites you to a \"game\" or \"stream\" in voice, this is a common grooming tactic.'
            }
        ],
        protectedExplanation: 'Joining only friend-based or heavily moderated servers, disabling voice/video in public channels, and limiting community participation to close friends significantly reduces exposure. However, the platform remains designed for mass communication.'
    },
    {
        id: 4,
        name: 'Roblox',
        category: 'Gaming',
        ageRecommendation: 8,
        safetyRating: 2, // CRITICAL RISK
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Gaming platform with in-game chat, sophisticated scam networks, and predator presence.',
        hasChat: true,
        chatDetails: 'In-game chat with other players; predators use to move conversations to Discord',
        hasOpenInternet: true,
        internetDetails: 'Approved social links can lead to external services such as YouTube, Discord, and Twitch. Availability varies by surface and requires age verification; some social links are limited to older teens',
        hasLocationTracking: false,
        resourceIds: ['common-sense-media'],
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Roblox faces two distinct dangers: (1) Financial scams targeting kids, with reports of significant real-money losses; (2) Predator gateway to Discord for grooming. The FBI warns that violent online networks commonly referred to as 764 target minors through gaming platforms, social media, and messaging apps, using trust-building, manipulation, and coercion.'
        },
        hiddenDangers: [
            'In-game chat leads to predator contact; predators move conversations to Discord',
            'Sophisticated scam networks specifically targeting kids',
            'Kids have lost significant money to Roblox scams, including savings set aside for other purposes',
            'Scam networks on Roblox sometimes involve young perpetrators targeting peers through phishing, fake trading, and account hijacking',
            'The FBI warns that violent online networks (commonly referred to as 764) target minors through gaming platforms and move conversations to private messaging for exploitation',
            'In-game content moderation failure: racist, violent, sexual content slips through'
        ],
        parentConcerns: {
            scams: 'Kids losing real money to phishing scams and sophisticated scam networks',
            predators: 'Roblox→Discord pipeline; predators build rapport in-game then move to private Discord DMs',
            spending: 'Easy to spend real money (Robux) without parent awareness; kids spend parents\' money',
            grooming: 'Predators use Roblox to build trust with minors and move conversations to Discord for further grooming and exploitation'
        },
        tipsForParents: [
            'Monitor Robux spending: set spending limits or disable in-app purchases',
            'Watch for "free Robux" scams: there are NO legitimate ways to get free Robux',
            'Ask: "Are you getting friend requests from people you don\'t know in-game?"',
            'Know the pattern: Roblox game → friendly player → Discord friend request → private DMs',
            'Watch for: pressure to move conversations off-game, requests to keep conversations secret',
            'Red flag: kid receiving gifts or Robux from online players they "just met"',
            'Discuss: if a player offers free stuff, they want something in return'
        ],
        parentConversationGuide: {
            startWith: '"I\'ve heard there are scams on Roblox where kids lose real money. Can we talk about how you earn/spend Robux?"',
            keyPoints: [
                'Discuss what Robux is and how much it costs in real money',
                'Explain scam patterns: free Robux promises, phishing links, fake trading',
                'Talk about friend requests from strangers in-game: why would an unknown player want to be friends?',
                'Make it safe to tell you if someone asks them to move to Discord or another app',
                'Discuss the predator pattern specifically'
            ],
            redFlags: [
                'Sudden Robux disappearance or unexplained spending',
                'New "friends" from gaming, especially older players',
                'Requests to move conversations to Discord or other apps',
                'Mentions of someone who "really gets them" or "understands them"',
                'Secretive behavior about gaming',
                'Offers of free Robux or items',
                'Pressure to keep online friendships secret from parents'
            ],
            scriptOpener: '"I know Roblox is fun, but I\'m worried about scams. Kids are losing real money. Let\'s talk about how you get Robux and if anyone has asked you to go on Discord."'
        },
        sources: 'FBI findings on violent online networks, Roblox scam reports, parenting communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'higher',
        exposureExplanation: 'Roblox games often include chat with unknown players. User-generated content (games) is unfiltered, and some games include inappropriate content or gambling mechanics. Contact with adult strangers during gameplay is common.',
        exposureFactors: ['communication', 'unknown_people_contact', 'money_transactions'],
        protectedExposureLevel: 'moderate',
        recommendedSafeguards: [
            {
                label: 'Enable strict chat restrictions in Account Settings',
                instructions: 'Settings > Privacy > Chat Mode. Choose \"No Chat\" (the most restrictive) or \"Friends Only\". This prevents contact with unknown players. In-game messages are still possible but reduced.'
            },
            {
                label: 'Disable in-game spending and purchases',
                instructions: 'Settings > Billing > Spending Limit. Set to $0.00 or \"None\" to prevent accidental purchases. Roblox games often use peer pressure (\"buy this item everyone has\") to drive spending.'
            },
            {
                label: 'Play only games from trusted creators and friends',
                instructions: 'Avoid newer, unknown games. Stick to popular games from established creators. Play with friends or in private servers when possible. Use Roblox\'s group feature to play with known players only.'
            }
        ],
        protectedExplanation: 'Enabling chat restrictions, limiting gameplay to trusted friends, and disabling in-game purchases significantly reduce exposure. Parental controls help but some risk remains inherent to user-generated content.'
    },
    {
        id: 5,
        name: 'Fake Calculator Apps / Vault Apps',
        category: 'Tools (Hidden)',
        ageRecommendation: 0,
        safetyRating: 1, // CRITICAL RISK - if found
        safetyLabel: '🔴 CRITICAL RISK (IF PRESENT)',
        description: 'Apps disguised as calculators that hide explicit content, messages, and apps.',
        hasChat: false,
        chatDetails: 'Not a messaging app, but hides messaging apps and explicit photos',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Vault/calculator apps look identical to real calculators on the home screen but password-protect hidden content. Kids use them to hide explicit photos, videos, sexting messages, and evidence of predatory contact. Include decoy modes that take photos if wrong password entered, and fake error screens. Parents often don\'t realize their child has these.'
        },
        hiddenDangers: [
            'Hides explicit photos, videos, and sexting messages from parents',
            'Disguises apps (like messaging apps) inside the vault',
            'Decoy features: fake calculator display, wrong password triggers photo capture',
            'Can hide evidence of predatory contact or sextortion',
            'Parents don\'t discover these until they stumble upon them or child is harmed',
            'Commonly installed after kids discover them through social media tutorials'
        ],
        howToSpot: [
            'Look for duplicate app icons (two calculators, two photo apps, two messaging apps)',
            'Check app permissions: why would a calculator need access to contacts, location, photos, or microphone?',
            'In Settings → Apps, look for unknown apps requesting sensitive permissions',
            'Search App Store for: "vault app," "hidden calculator," "secret folder," "photo vault"',
            'Ask directly: "Are you using any apps to hide things from me?"'
        ],
        parentConversationGuide: {
            startWith: '"I\'ve learned about apps that hide things. I\'m not accusing you, but I need to check your phone for these. It\'s about safety."',
            keyPoints: [
                'Explain what vault apps are and why kids use them',
                'Make it safe to admit if they have one (focus on safety, not punishment)',
                'If found: Have a conversation about WHY they felt they needed to hide things',
                'Underlying issue: Are they hiding sexting? Evidence of predation? Inappropriate relationships?',
                'Root cause matters more than the app itself'
            ]
        },
        sources: 'Qustodio, Safes.so, parenting communities, security researchers',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'higher',
        exposureExplanation: 'Fake calculator apps (apps disguised as calculators but containing social networking, dating, or messaging features) harvest personal data and location information. They often request excessive permissions and are frequently malware or privacy-invasive.',
        exposureFactors: ['location_personal_data', 'content_exposure'],
        protectedExposureLevel: 'higher',
        recommendedSafeguards: [
            {
                label: 'Do not install or use fake calculator apps',
                instructions: 'Use the legitimate system calculator (built into iOS/Android). If an app is labeled as a calculator but has social features or requires unusual permissions, it is likely fake. Do not install it.'
            },
            {
                label: 'Review app permissions before installation',
                instructions: 'Before installing any app, check what permissions it requests. A calculator should never request location, camera, contacts, or microphone permissions. If it does, it is fake.'
            },
            {
                label: 'Install only from official app stores',
                instructions: 'Use only the Apple App Store or Google Play Store. Do not side-load apps from third-party sites or links. Official app stores have review processes (though imperfect) that reduce the risk of fake apps.'
            }
        ],
        protectedExplanation: 'No in-app safeguards can reliably protect against these apps because the entire application is deceptive. The only effective protection is avoiding the app entirely. No configuration changes reduce the risk.'
    },
    {
        id: 6,
        name: 'YouTube',
        category: 'Video Streaming',
        ageRecommendation: 13,
        safetyRating: 3, // HIGH RISK
        safetyLabel: '🟠 HIGH RISK',
        description: 'Video platform with algorithm that can escalate from educational to dangerous content.',
        hasChat: true,
        chatDetails: 'Comments, live chat during streams, community posts',
        hasOpenInternet: true,
        internetDetails: 'Links in comments can lead anywhere; unvetted creator external links',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'YouTube\'s recommendation system is built to keep viewers engaged, which can lead to long viewing sessions and increasingly narrow recommendations. Comments sections can expose kids to users with concerning intentions. Some creators have uploaded dangerous pranks or challenge videos.'
        },
        hiddenDangers: [
            'Recommendation algorithm can lead from normal content to conspiracy theories to radicalization',
            'Fake "pranks" that are actually dangerous (blackout challenge, etc.)',
            'Predatory comments trying to move kids to private communication (Discord, Snapchat)',
            'Scam comments ("free Robux," account hacks, etc.)',
            'Unmoderated livestreams with inappropriate comments and predatory users',
            'ASMR and other content with hidden suggestive themes targeting kids'
        ],
        parentConcerns: {
            algorithm: 'Recommendation system is built to keep viewers engaged; can narrow content exposure',
            predators: 'Comments can contain predatory recruitment attempts to private platforms',
            radicalization: 'Escalation pathways documented from educational to conspiracy content',
            misinformation: 'Scams, fake hacks, misinformation spread through comments'
        },
        tipsForParents: [
            'Use YouTube Kids for under 13; YouTube Restricted Mode for older kids',
            'Monitor watch history: look for escalation patterns',
            'Check subscribed channels regularly',
            'Discuss how YouTube profits from watch time (showing increasingly extreme content)',
            'Talk about clickbait and how to spot unreliable sources',
            'Disable comments if your child won\'t ignore scam messages'
        ],
        parentConversationGuide: {
            startWith: '"What videos are you watching right now? Can you show me?"',
            keyPoints: [
                'Watch a video together and examine the comments',
                'Show them how YouTube profits from watch time (explains the algorithm)',
                'Discuss verified vs. unverified creators',
                'Talk about how recommendations can narrow kids\' content exposure over time',
                'Discuss what happens if they click on scam comments or predatory messages'
            ],
            redFlags: [
                'Watching increasingly extreme or conspiracy content',
                'Obsession with one creator',
                'Defensive about what they\'re watching',
                'Behavioral changes after watching certain content',
                'Clicking links in comments or DMs from "fans"'
            ],
            scriptOpener: '"I know YouTube has some amazing educational content, but I\'m concerned about how the algorithm works. Let\'s talk about what you\'re watching and where the recommendations take you."'
        },
        sources: 'YouTube Safety, Common Sense Media, parent communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'moderate',
        exposureExplanation: 'YouTube\'s recommendation algorithm can surface inappropriate content, but age-restricted content helps significantly. The platform allows comments and community features where strangers can interact. Most content is curated by creators.',
        exposureFactors: ['content_exposure', 'unknown_people_contact', 'outside_access'],
        protectedExposureLevel: 'lower',
        recommendedSafeguards: [
            {
                label: 'Enable YouTube Restricted Mode',
                instructions: 'Sign into YouTube. Go to Settings (icon in top right) > Restricted Mode. Toggle on \"Activate Restricted Mode\". This filters out age-inappropriate content. Note: This applies to the account, so if shared device, account sign-in is required.'
            },
            {
                label: 'Disable or hide profile and community interactions',
                instructions: 'YouTube > Your channel > Settings > Basic info > Channel visibility (set to \"Not listed\"). This hides your profile from strangers. Settings > Privacy > Keep all my subscriptions private (toggle on).'
            },
            {
                label: 'Turn off comment visibility and community posts',
                instructions: 'If your teen has a channel, do not enable community posts (for channels under 1,000 subscribers, it is disabled by default). Disable comments on any uploaded videos. Use Settings > Community to restrict who can comment.'
            }
        ],
        protectedExplanation: 'YouTube Restricted Mode, limiting profile visibility, and disabling comments/messaging significantly reduce exposure. Unlike TikTok, YouTube content is not algorithmic rabbit holes - users must actively search or click.'
    },
    {
        id: 7,
        name: 'Instagram',
        category: 'Social Media',
        ageRecommendation: 13,
        safetyRating: 3, // HIGH RISK
        safetyLabel: '🟠 HIGH RISK',
        description: 'Photo/video social platform with focus on appearance and likes.',
        hasChat: true,
        chatDetails: 'Direct messages with followers; requests from strangers; group chats',
        hasOpenInternet: true,
        internetDetails: 'Links in bio, comments, and stories can lead anywhere',
        hasLocationTracking: true,
        locationDetails: 'Location data collected; visible in photo metadata unless disabled',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Instagram\'s features, including likes, comments, and personalized recommendations, can contribute to social comparison and FOMO. Like many social platforms, its business model depends heavily on keeping people engaged. Direct messages from strangers can lead to grooming. The algorithm amplifies appearance-focused and eating disorder content.'
        },
        hiddenDangers: [
            'Algorithm amplifies appearance-focused and eating disorder content, particularly to users showing engagement with such material',
            'Social comparison and validation-seeking (likes/comments) linked to anxiety, depression',
            'DM system allows strangers to contact kids; "sliding into DMs" predator pattern',
            'Sextortion: predators request explicit photos, then blackmail',
            'Influencer marketing and scams targeting kids (fake giveaways)',
            'Cyberbullying through comments and DMs'
        ],
        parentConcerns: {
            mentalHealth: 'Eating disorders, body dysmorphia, depression linked to Instagram use',
            predators: 'Strangers can DM; sextortion scams common',
            socialization: 'Real friendships suffer; kids measure worth by likes/followers',
            misinformation: 'Fake influencers and scams targeting kids'
        },
        tipsForParents: [
            'Keep account private; only accept friend requests you know',
            'Disable DMs from non-followers',
            'Review followers regularly and remove suspicious accounts',
            'Talk about comparison (Instagram is curated, not real)',
            'Monitor for eating disorder content escalation',
            'Check location settings; disable location data'
        ],
        parentConversationGuide: {
            startWith: '"Can I follow you on Instagram? I want to understand what you\'re seeing."',
            keyPoints: [
                'Discuss that Instagram is curated (not real life)',
                'Talk about the like/comment validation trap',
                'Explain that algorithm shows content designed to keep them scrolling',
                'Discuss sextortion risks: "never send explicit photos, even to people you trust"',
                'Review followers and discuss red flags'
            ],
            redFlags: [
                'Obsession with likes/followers/comments',
                'Body image concerns or eating disorder behaviors',
                'DMs from unknown adults or suspicious accounts',
                'Secretive behavior about who they\'re following/talking to',
                'If Instagram use is regularly taking up several hours a day or interfering with sleep, school, mood, or relationships, it may be time to reset boundaries'
            ],
            scriptOpener: '"I\'ve heard Instagram can really affect how kids feel about themselves. I want to make sure you\'re safe and healthy. Can we talk about what you\'re seeing on your feed?"'
        },
        sources: 'Common Sense Media, NCBI, parent communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'higher',
        exposureExplanation: 'Instagram\'s algorithm personalizes content and can surface eating disorder, self-harm, or inappropriate content. The \"Explore\" page uses machine learning to maximize engagement. Contact from unknown followers is possible through DMs.',
        exposureFactors: ['content_exposure', 'unknown_people_contact', 'public_visibility', 'communication'],
        protectedExposureLevel: 'moderate',
        recommendedSafeguards: [
            {
                label: 'Switch to a private account and restrict DMs',
                instructions: 'Settings > Privacy and security > Account privacy (toggle on \"Private account\"). Under \"Messages and story replies\", select \"Requests\" so only followers can DM. This blocks unknown contact.'
            },
            {
                label: 'Limit time on the Explore page and Reels',
                instructions: 'Set a daily reminder. The Explore page uses Instagram\'s algorithm to show personalizable content, similar to TikTok but less aggressive. Reels are short-form video with algorithmic recommendation. Avoid spending time there.'
            },
            {
                label: 'Monitor who can see your posts and location tags',
                instructions: 'Settings > Privacy and security. Check \"Who can see your posts?\" and \"Story\". Disable location tags on posts. Do not share your real location in captions. Predators use location data to identify where you spend time.'
            }
        ],
        protectedExplanation: 'Private account, DM restrictions to followers only, and limiting time on the Explore page significantly reduce exposure. The algorithm remains less aggressive than TikTok, but still optimized for engagement.'
    },
    {
        id: 8,
        name: 'Reddit',
        category: 'Community Forum',
        ageRecommendation: 16,
        safetyRating: 2, // CRITICAL RISK
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Forum-based platform with largely unmoderated communities.',
        hasChat: true,
        chatDetails: 'Subreddit comments; private messages; group chats',
        hasOpenInternet: true,
        internetDetails: 'Links to anywhere; unvetted content',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Reddit communities are largely self-moderated. Many subreddits host illegal content, grooming networks, and radicalization communities. Predators use Reddit to identify vulnerable kids (anxiety, loneliness, abuse) and provide false support that escalates to exploitation. "Wholesome" subreddits can lead to predatory ones through recommendations.'
        },
        hiddenDangers: [
            'Unmoderated communities hosting illegal content and grooming networks',
            'Predators use Reddit to identify vulnerable teens (posting about depression, abuse, loneliness)',
            'Fake "support groups" for vulnerable kids that escalate to grooming',
            'Radicalisation communities targeting lonely/angry teens',
            'Communities dedicated to hating specific groups (women, minorities, religions)',
            'Sextortion and child sexual abuse material (CSAM) communities exist on Reddit'
        ],
        parentConcerns: {
            predators: 'Predators can identify vulnerable kids through mental health communities and provide false support that escalates to exploitation',
            radicalization: 'Pathways from loneliness to "supportive" communities to radicalization',
            exploitation: 'Sextortion and grooming networks active on platform',
            exposure: 'Accidental exposure to illegal content and hate communities'
        },
        tipsForParents: [
            'Reddit is NOT recommended for under 16',
            'If your teen uses it, discuss which subreddits they visit',
            'Warn about "support communities" that may actually be predators',
            'Explain anonymous comments = no way to verify who someone is',
            'Know the signs: escalating time on Reddit, secretive about what they\'re reading'
        ],
        parentConversationGuide: {
            startWith: '"I know Reddit is popular. I\'m concerned about some of the communities there. Can we talk about what subreddits you visit?"',
            keyPoints: [
                'Explain that Reddit communities are anonymous and unmoderated',
                'Talk about "support communities" that are actually predators',
                'Discuss that kind words online can be grooming tactics',
                'If they mention mental health communities: "That support group might not be who they say they are"',
                'Discuss radicalisation pathways: loneliness → "community" → extremism'
            ],
            redFlags: [
                'Increased time on Reddit; secretive about what they\'re reading',
                'Mentions of "helpful" people who "really understand them"',
                'Sudden shifts in beliefs or language',
                'Isolating from friends to spend time in online communities',
                'Joining subreddits for vulnerable teens (depression, autism, loneliness)'
            ],
            scriptOpener: '"I\'m not trying to ban Reddit, but I\'m worried about some communities there. Predators specifically use Reddit to find lonely kids and pretend to support them. Let\'s talk about which communities you\'re in."'
        },
        sources: 'NCMEC, parenting communities, Reddit safety reports',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'moderate',
        exposureExplanation: 'Reddit hosts unfiltered content from thousands of communities. Users can encounter sexual content, self-harm guidance, and extreme ideology. Contact with unknown users is possible through DMs and public discussions.',
        exposureFactors: ['content_exposure', 'unknown_people_contact', 'communication'],
        protectedExposureLevel: 'moderate',
        recommendedSafeguards: [
            {
                label: 'Disable direct messages from non-approved users',
                instructions: 'User Settings > Privacy & Safety > Who can send you private messages (select \"Everyone\" only if approved users; otherwise select \"Trusted\")). This limits unwanted contact from strangers.'
            },
            {
                label: 'Curate subreddit subscriptions and use filters',
                instructions: 'Subscribe only to communities aligned with interests. Avoid r/random or r/all which surface unfiltered content. Use Reddit\'s user filters to block specific subreddits from appearing. Avoid subreddits known for harmful content.'
            },
            {
                label: 'Do not create an account with your real name or photo',
                instructions: 'Reddit allows anonymous usernames. Do not link your Reddit account to Instagram, Facebook, or use your real name as your username. Keep Reddit separate from your identity to reduce tracking.'
            }
        ],
        protectedExplanation: 'Subreddit filtering and DM restrictions help, but Reddit\'s design (public discussions, minimal moderation) means exposure remains moderate even with safeguards. Users must actively manage their feed.'
    },
    {
        id: 9,
        name: 'BeReal',
        category: 'Social Media',
        ageRecommendation: 14,
        safetyRating: 3, // HIGH RISK
        safetyLabel: '🟠 HIGH RISK',
        description: '"Authentic" photo app where everyone takes a picture at the same time.',
        hasChat: true,
        chatDetails: 'Direct messages; reactions to photos',
        hasOpenInternet: false,
        hasLocationTracking: true,
        locationDetails: 'Location data collected for "BeReal map" feature',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'BeReal collects location data through the BeReal Map feature. If location features are enabled, location information can be shared with your friend network and is subject to the app\'s privacy settings. The simultaneous photo requirement creates pressure if kids miss notifications. The app\'s mechanics encourage frequent use. Sharing real-time location with friends creates privacy risks that parents and teens should discuss. Parents and teens should review location settings and control who can see their posts and location.'
        },
        hiddenDangers: [
            'Location data collected through BeReal Map feature',
            'Real-time location shared with friend network if location features are enabled',
            'FOMO/anxiety: pressure to be available at random times',
            'Predators can identify kid\'s physical location through photos and metadata',
            'DM system allows contact from followers',
            'Screenshots mean permanent record despite app notifications'
        ],
        parentConcerns: {
            location: 'Real-time location exposed to friend network if location features are enabled',
            predators: 'Predators can identify where kids are at specific times',
            privacy: 'Location data sharing subject to privacy settings',
            anxiety: 'Frequent notifications create FOMO and urgency'
        },
        tipsForParents: [
            'Check location settings; consider disabling BeReal\'s location features',
            'Discuss that "BeReal map" shows locations in real-time',
            'Review friends list and check for unknown adults',
            'Talk about screenshot risks even though app says it notifies'
        ],
        parentConversationGuide: {
            startWith: '"I\'ve heard about BeReal. I\'m concerned about the location tracking. Can we check your location settings together?"',
            keyPoints: [
                'Explain that location data is collected and shared based on settings',
                'Discuss that the "authenticity" is still a curated product',
                'Talk about predators using location data to find kids',
                'Remind that screenshots are permanent despite app notifications'
            ],
            redFlags: [
                'Anxiety if they miss the daily BeReal notification',
                'Unusual concern about physical location or being "found"',
                'Follow requests from unfamiliar adults'
            ],
            scriptOpener: '"I know BeReal shows your location. I want to make sure predators can\'t find you. Let\'s check those settings."'
        },
        sources: 'BeReal official privacy policy, parenting communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'moderate',
        exposureExplanation: 'BeReal shares real-time location and phone camera images with friends. The app is designed to capture unfiltered moments. Social pressure to share (and to view others\' content) is high among teen users.',
        exposureFactors: ['location_personal_data', 'public_visibility', 'communication'],
        protectedExposureLevel: 'lower',
        recommendedSafeguards: [
            {
                label: 'Limit your friends list to close real-life friends only',
                instructions: 'Do not accept friend requests from people you have not met. BeReal is designed for close friend circles. A friend list of 50+ people defeats the purpose and increases exposure to people who may screenshot or share your image.'
            },
            {
                label: 'Use location fake/blur features if available',
                instructions: 'Check BeReal\'s location settings. If available, enable location faking or blurring. Some versions allow you to set a generic location instead of exact coordinates. Review the current version in the app store for available privacy options.'
            },
            {
                label: 'Disable notifications to reduce social pressure',
                instructions: 'Settings > Notifications > disable \"BeReal notification\". Disabling the alert reduces the social pressure to respond immediately. You can still use the app, but at your own pace, not based on push notifications driving FOMO.'
            }
        ],
        protectedExplanation: 'Limiting friend group to close real-life friends, faking location, and disabling notifications significantly reduce exposure. The app itself shares location and real-time photos, so protection is limited.'
    },
    {
        id: 10,
        name: 'Yubo',
        category: 'Social Media / Dating',
        ageRecommendation: 18,
        safetyRating: 1, // CRITICAL RISK
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Adult social and dating app that connects users by proximity for video chat and messaging.',
        hasChat: true,
        chatDetails: 'Direct messages; video calls; group video chats with matched users',
        hasOpenInternet: true,
        internetDetails: 'Links in profiles; streamed content',
        hasLocationTracking: true,
        locationDetails: 'Can search users by proximity/location',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Yubo is an 18+ social and dating app that matches users by proximity for real-time video chat and messaging. While Yubo has age-verification requirements, meeting people online through location-based matching carries risks: users may misrepresent themselves, conversations can escalate quickly, and location data is collected and used for matching.'
        },
        hiddenDangers: [
            'Real-time video chat with matched strangers you know nothing about',
            'Location proximity search exposes users to nearby matches based on location data',
            'Users may misrepresent age, interests, or intentions',
            'Video conversations can escalate quickly to inappropriate requests',
            'Location data is collected and used for the matching algorithm',
            'Conversations are frequently deleted, making it harder to document harassment'
        ],
        parentConcerns: {
            ageVerification: 'Yubo is 18+; if a minor is using it, they are misrepresenting their age or the account is fake',
            dating: 'Meeting strangers online for dating or friendship carries inherent risks',
            location: 'Location data is collected and shared for proximity matching',
            rapidEscalation: 'Real-time video enables quick escalation to uncomfortable or explicit requests'
        },
        tipsForParents: [
            'Yubo is designed for adults 18+. If your teen has an account, the age listed may be false.',
            'Talk with curiosity, not accusation. Ask how they heard about it and who they are talking with.',
            'Discuss the difference between meeting friends at school and meeting strangers online.',
            'Remind them that people online may not be who they claim to be.',
            'Establish a family agreement about location sharing and meeting in-person contacts.',
            'Know that conversations are easily deleted, so open communication is essential.'
        ],
        parentConversationGuide: {
            startWith: '"I found Yubo on your phone. I want to understand how you\'re using it and have this conversation together."',
            keyPoints: [
                'Ask how they learned about it and who they\'re talking with',
                'Explain that Yubo is designed for adults 18+ to meet people by location',
                'Discuss that online users may not be who they claim to be',
                'Talk about personal information safety and never sharing identifying details',
                'Discuss the difference between online connections and real friendships'
            ],
            redFlags: [
                'Requests to move conversations to other apps or private platforms',
                'Pressure to share personal information or photos',
                'Adults who claim to be close to their age but may not be',
                'Secretive behavior about who they\'re messaging',
                'Emotional intensity or pressure tactics'
            ],
            scriptOpener: '"I noticed Yubo is on your phone. Yubo is actually a dating app for adults 18+. I want to understand how it got there and what\'s been happening. Let\'s talk about it without judgment."'
        },
        sources: 'Yubo official privacy policy and age requirements, parenting communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'higher',
        exposureExplanation: 'Yubo is a live-streaming app built to connect with strangers. Live streams often include location (implied or stated), and users can receive contact from unknown people. The app is used by minors to broadcast to strangers.',
        exposureFactors: ['unknown_people_contact', 'public_visibility', 'communication', 'location_personal_data'],
        protectedExposureLevel: 'higher',
        recommendedSafeguards: [
            {
                label: 'Stream only to friends or disable public streaming',
                instructions: 'Go to Settings > Privacy > Live Streaming Visibility (set to \"Friends only\" or \"Private\"). Do not enable public streams. Even with these settings, your stream is still visible in the app.'
            },
            {
                label: 'Never share location or identifying details during streams',
                instructions: 'Do not mention where you are, what school you attend, or identifying details during live streams. Assume anything you say could be recorded and shared. Predators actively watch Yubo live streams to identify minors.'
            },
            {
                label: 'Disable direct messaging from strangers',
                instructions: 'Settings > Privacy > Direct Messages (set to \"Friends only\" or \"Disabled\"). This blocks contact from people who are not on your friends list, though viewers of your stream can still see your username.'
            }
        ],
        protectedExplanation: 'Privacy settings help minimally because Yubo\'s core feature is public streaming. Even with settings restricted to friends-only, the live streaming mechanic exposes users to others. Effective protection requires limiting use or avoiding the app.'
    },
    {
        id: 11,
        name: 'Web Browsers (Chrome, Safari, Edge, etc.)',
        category: 'Tools',
        ageRecommendation: 0,
        safetyRating: 3, // HIGH RISK (in context of unmonitored use)
        safetyLabel: '🟠 HIGH RISK (Unmonitored)',
        description: 'Gateway to the entire internet. Kids can access YouTube, social media, dating sites, adult content, and more.',
        hasChat: true,
        chatDetails: 'Can access any website with chat/messaging functionality',
        hasOpenInternet: true,
        internetDetails: 'Access to entire internet unfiltered unless specifically blocked',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Web browsers are the gateway to the entire internet. A single click can take kids from homework websites to porn, gambling, predator dating sites, or radicalization content. Parents often overlook browsers: kids aren\'t "using an app," they\'re "just browsing." Apps like Canva, educational sites, and games often have built-in browsers that bypass parental controls.'
        },
        hiddenDangers: [
            'Single click on link in comment/message leads to adult content, dating sites, or predatory communities',
            'Built-in browsers in apps (Canva, Roblox, Minecraft) bypass parental controls',
            'Incognito/private mode = no history to monitor',
            'Predators send links to porn/dating apps to normalize sexual conversation',
            'VPN and proxy sites used to bypass school/parent filters',
            'Search history can be cleared; no way to monitor without device access'
        ],
        parentConcerns: {
            access: 'Kids can reach adult content, dating sites, predators in seconds',
            bypass: 'In-app browsers bypass parental controls entirely',
            monitoring: 'Private/incognito mode hides activity',
            exposure: 'Link from a "friend" online can lead anywhere'
        },
        tipsForParents: [
            'Parental control software (Bark, Net Nanny, Google Family Link) monitors browser history',
            'Know which apps have built-in browsers (Canva, Roblox, etc.): those bypass controls',
            'Check browser history regularly (though it can be cleared)',
            'Discuss that any link online could lead to unsafe content',
            'Consider requiring shared login on devices for kids under 14'
        ],
        parentConversationGuide: {
            startWith: '"I trust you, but the internet is designed to expose kids to unsafe stuff. Let\'s talk about how to stay safe."',
            keyPoints: [
                'Explain that links from "friends" online might be tests or tricks',
                'Discuss inappropriate content vs. curiosity vs. exploitation',
                'Talk about predators using links/screenshots to start grooming',
                'Explain that some apps have built-in browsers that I can\'t monitor'
            ],
            redFlags: [
                'Deleting browser history',
                'Switching to private/incognito mode',
                'Secretive about what sites they visit',
                'Visiting at unusual hours',
                'Receiving links from online contacts'
            ],
            scriptOpener: '"I\'m not trying to spy on you, but I need to make sure you know how to stay safe online. Let\'s talk about what happens when you click a link from someone online."'
        },
        sources: 'Common Sense Media, parenting communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'lower',
        exposureExplanation: 'Web browsers themselves are neutral tools. Exposure depends entirely on which websites are visited. Modern browsers include parental controls and filtering options.',
        exposureFactors: [],
        protectedExposureLevel: 'lower',
        recommendedSafeguards: [
            {
                label: 'Enable parental controls and safe search in browser settings',
                instructions: 'Chrome: Settings > Parental controls (requires supervised account) > enable content filters. Safari: Settings > Screen Time > Content restrictions > Websites (set to Limit Adult Content). Firefox: Settings > General > Browsing > enable safe search.'
            },
            {
                label: 'Use browser extensions to block ads and trackers',
                instructions: 'Install uBlock Origin and Privacy Badger (Chrome, Firefox, Edge). These block most ads and prevent tracking across websites. This reduces exposure to malicious ads and behavioral tracking.'
            },
            {
                label: 'Set up a separate browser profile for your teen',
                instructions: 'Chrome: Create a supervised child account with safe search enforced. Safari: Enable Screen Time. This ensures settings cannot be easily disabled and history is visible to you.'
            }
        ],
        protectedExplanation: 'Browser-level protections (parental controls, safe search, ad blocker, tracker blocking) provide good baseline protection. The effectiveness depends on the child\'s discipline and the sites they visit.'
    },
    {
        id: 13,
        name: 'Messenger Kids',
        category: 'Messaging',
        ageRecommendation: 6,
        safetyRating: 4, // MEDIUM RISK
        safetyLabel: '🟡 MEDIUM RISK',
        description: 'Facebook-owned messaging app specifically for young children with parental oversight.',
        hasChat: true,
        chatDetails: 'Messaging only with approved parent-selected contacts',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Messenger Kids is designed with parental controls built-in. Parents approve all contacts and can see all conversations. This is one of the few apps where parental monitoring is actually enforced by design. Main risk: approved contacts might not be trustworthy, or contacts outside the approved list aren\'t possible.'
        },
        hiddenDangers: [
            'As safe as your approved contact list: only as good as parent vetting',
            'Kids might feel invincible because parents can see; might overshare',
            'Potential for approved adult contact to exploit trust'
        ],
        parentConcerns: {
            contacts: 'Only as safe as approved contact list',
            assumption: 'Kids might assume it\'s completely safe because parents monitor'
        },
        tipsForParents: [
            'Actively review approved contacts and verify who they really are',
            'Check messages regularly',
            'Discuss that even approved contacts could be unsafe',
            'This is one of the few apps designed WITH parental controls'
        ],
        parentConversationGuide: {
            startWith: '"I can see all your messages on Messenger Kids. That\'s good; I can help keep you safe. Let\'s talk about who you\'re messaging."',
            keyPoints: [
                'Discuss who the approved contacts are',
                'Explain that kids should still be careful even with "safe" contacts',
                'Review messages together'
            ],
            redFlags: [
                'Unusual requests from approved contacts',
                'Attempts to move conversations off Messenger Kids'
            ],
            scriptOpener: '"Messenger Kids is nice because I can see your messages and help you stay safe. Let\'s keep talking about who you\'re talking to."'
        },
        sources: 'Facebook/Meta safety resources',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'higher',
        exposureExplanation: 'Twitch is a live-streaming platform where streamers broadcast to audiences (sometimes hundreds of thousands). Viewers can interact via live chat with unknown people. Some streams are age-inappropriate. Audience behavior varies by streamer.',
        exposureFactors: ['communication', 'unknown_people_contact', 'content_exposure', 'outside_access'],
        protectedExposureLevel: 'moderate',
        recommendedSafeguards: [
            {
                label: 'Avoid chat in streams you do not know or with unmoderated communities',
                instructions: 'Only chat in streams with active moderation (mods removing spam/inappropriate behavior). Chat in large public streams (1000+ viewers) is often toxic. Lurk (watch without chatting) in unfamiliar streams.'
            },
            {
                label: 'Use slow mode and followers-only chat settings',
                instructions: 'If streaming: Settings > Channel > Moderation. Enable Slow Mode (1-30 second delay between messages) and Followers Only (only followers can chat). This reduces spam and contact from new followers.'
            },
            {
                label: 'Do not share personal information or schedule in chat',
                instructions: 'Do not mention your real name, location, school, or when you will be online/offline. Chat messages are public and logged. Predators monitor chats to identify minors.'
            }
        ],
        protectedExplanation: 'Restricting chat to followers or enabling slowmode, avoiding chat in unknown streams, and limiting to well-moderated communities significantly reduce exposure. The live-streaming nature still exposes users to strangers.'
    },
    {
        id: 15,
        name: 'Twitch',
        category: 'Video Streaming',
        ageRecommendation: 13,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Live streaming platform for gaming with chat and community features.',
        hasChat: true,
        chatDetails: 'Live chat, whispers (private messages), group chats',
        hasOpenInternet: true,
        internetDetails: 'Links shared in chat, external streamer links',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Twitch chat is a predator hunting ground. Streamers can be adults presenting as peers. Kids use "whispers" for private messaging which bypasses parental monitoring. Predators specifically target kids watching gaming streams.'
        },
        hiddenDangers: [
            'Live chat enables predators to identify and contact vulnerable kids in real-time',
            'Whisper feature (private messages) is unmonitored and hidden from parents',
            'Fake teenage streamers are often adults grooming kids',
            'Streamers request personal information (address, school, schedule)',
            'Toxic/abusive chat normalized for young viewers',
            'Kids spend hours watching streamers they feel "connected to" (grooming tactic)'
        ],
        parentConcerns: {
            predators: 'Predators actively use Twitch chat to identify and contact kids',
            privateChat: 'Whispers are completely hidden from parental monitoring',
            identification: 'Kids share personal info in chat thinking streamer is their age',
            grooming: 'Attachment to streamer = vulnerability to manipulation'
        },
        tipsForParents: [
            'Disable whispers from non-followers if possible',
            'Discuss that streamers are strangers, not friends',
            'Monitor chat if watching together',
            'Watch for signs of parasocial relationships with streamers'
        ],
        parentConversationGuide: {
            startWith: '"I know you watch Twitch. Who are your favorite streamers? Tell me about them."',
            keyPoints: [
                'Explain that streamers might not be who they say they are',
                'Discuss chat and how predators use it to identify kids',
                'Talk about why they shouldn\'t share personal info in chat',
                'Discuss the difference between watching someone and knowing them'
            ],
            redFlags: [
                'Excessive time watching one streamer',
                'Defending streamer against criticism (parasocial attachment)',
                'Wanting to donate/subscribe with real money',
                'Meeting up with other viewers or streamers',
                'Secretive about which streams they watch'
            ],
            scriptOpener: '"Twitch streamers are strangers. I need to make sure you know that and that you\'re safe in the chat."'
        },
        sources: 'Parent communities, Twitch safety reports',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'higher',
        exposureExplanation: 'X (Twitter) defaults to public profiles where anyone can see all posts and interact. Harassment and contact from unknown users is common. The algorithm can surface extreme content. Some accounts impersonate minors to harvest data.',
        exposureFactors: ['communication', 'unknown_people_contact', 'public_visibility', 'content_exposure'],
        protectedExposureLevel: 'moderate',
        recommendedSafeguards: [
            {
                label: 'Set account to private and restrict direct messages',
                instructions: 'Settings > Privacy > Account (toggle \"Private account\" on). Under Privacy, set \"Direct messages\" to \"Followers only\". This prevents strangers from contacting you and requires approval to follow.'
            },
            {
                label: 'Mute keywords and accounts related to harassment or harmful content',
                instructions: 'Settings > Muted words > add keywords. Mute accounts that engage in harassment. Report any accounts that send harassing or explicit messages. X\'s block feature is more powerful than mute for persistent harassers.'
            },
            {
                label: 'Do not engage with strangers or retweet your location/schedule',
                instructions: 'Do not reply to unknown accounts engaging with your posts. Do not post location info, your school, or your plans/schedule. Predators and scammers harvest this data from public accounts.'
            }
        ],
        protectedExplanation: 'Private account, DM restrictions to followers, and muting keywords significantly reduce unwanted contact and content exposure. However, public engagement still exposes users to strangers.'
    },
    {
        id: 16,
        name: 'X (Twitter)',
        category: 'Social Media',
        ageRecommendation: 16,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Text-based social platform with minimal content moderation and anonymous accounts.',
        hasChat: true,
        chatDetails: 'Public tweets, replies, direct messages',
        hasOpenInternet: true,
        internetDetails: 'Embedded links, media, and videos',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'X/Twitter allows anonymous accounts and has minimal moderation. Kids are exposed to bullying, hate speech, radicalization, conspiracy theories, and adult content. DMs are unmonitored. Predators use fake accounts to contact kids.'
        },
        hiddenDangers: [
            'Anonymous accounts = predators can contact without accountability',
            'Minimal content moderation = pornography, violent content, hate speech visible to all',
            'DMs from strangers can escalate to exploitation',
            'Radicalization pipeline: memes → conspiracy → extremism',
            'Cyberbullying can be severe and public',
            'Trending topics often contain harmful content'
        ],
        parentConcerns: {
            predators: 'Anonymous predators contact kids freely in DMs',
            exposure: 'Minimal moderation exposes kids to adult content and hate',
            radicalization: 'Pathways to conspiracy theories and extremism',
            cyberbullying: 'Public bullying amplified by retweets'
        },
        tipsForParents: [
            'Consider if X is necessary for kids under 16',
            'Disable DMs from non-followers if possible',
            'Discuss that anonymous accounts = unknown people',
            'Talk about blocking and reporting features',
            'Monitor trending topics periodically'
        ],
        parentConversationGuide: {
            startWith: '"X has a lot of harmful content. Why do you use it? Let\'s talk about staying safe there."',
            keyPoints: [
                'Explain that anyone can have an anonymous account',
                'Discuss that DMs from strangers could be predators',
                'Talk about harmful content exposure',
                'Discuss reporting and blocking features'
            ],
            redFlags: [
                'Increased time on X without clear purpose',
                'DMs from unknown accounts (especially adults)',
                'Engagement with controversial or conspiracy content',
                'Sudden shifts in beliefs or language after starting X',
                'Defensive about who they follow'
            ],
            scriptOpener: '"X/Twitter has a lot of harmful content and predators. Let\'s talk about how you\'re using it and how to stay safe."'
        },
        sources: 'Parent communities, Twitter safety reports',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'lower',
        exposureExplanation: 'WhatsApp is contact-based (requires phone number). Conversations are end-to-end encrypted. Contact is limited to people who have your number. The app does not have a public profile, algorithmic feed, or in-app discovery.',
        exposureFactors: ['communication'],
        protectedExposureLevel: 'lower',
        recommendedSafeguards: [
            {
                label: 'Be selective about who has your phone number',
                instructions: 'Only share your phone number with people you know and trust. Do not post your number publicly or on social media. Online contacts requesting your number may be predators.'
            },
            {
                label: 'Use disappearing messages for sensitive conversations',
                instructions: 'In group or individual chats, enable \"Disappearing messages\" (Chat > 3 dots > Disappearing messages). Select a time (e.g., 24 hours). Messages auto-delete, reducing the risk if a device is compromised.'
            },
            {
                label: 'Enable end-to-end encryption notification and media visibility',
                instructions: 'WhatsApp encrypts by default. Enable Settings > Privacy > Last seen (toggle off) to hide when you were last active. Settings > Privacy > Profile photo (set to \"My contacts\" only) to prevent profiling by strangers.'
            }
        ],
        protectedExplanation: 'WhatsApp\'s design (contact-based, encrypted, no public profile) provides strong baseline protection. Additional safeguards provide minor incremental benefit.'
    },
    {
        id: 17,
        name: 'WhatsApp',
        category: 'Messaging',
        ageRecommendation: 13,
        safetyRating: 4,
        safetyLabel: '🟡 MEDIUM RISK',
        description: 'End-to-end encrypted messaging app with groups and media sharing.',
        hasChat: true,
        chatDetails: 'Direct messages, group chats, voice/video calls',
        hasOpenInternet: true,
        internetDetails: 'Media sharing, forwarded links and videos',
        hasLocationTracking: true,
        locationDetails: 'Can share real-time location; shared in group chats',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'WhatsApp is encrypted, which is good for privacy but bad for parental monitoring. Groups can be private and hidden from parents. Kids can share location, receive inappropriate content, or be added to groups with strangers.'
        },
        hiddenDangers: [
            'Encryption means parents cannot read messages (even with access)',
            'Group chats can be hidden; kids added to groups with strangers',
            'Location sharing in groups exposes real-time location',
            'Receives forwarded content (explicit videos, propaganda, scams)',
            'Kids can be contacted directly by people they don\'t know',
            'Message deletion = no evidence if exploitation occurs'
        ],
        parentConcerns: {
            monitoring: 'Cannot read encrypted messages even with phone access',
            groups: 'Hidden group chats with unknown participants',
            location: 'Location sharing in groups is visible to strangers',
            content: 'Forwarded explicit content spreads through groups'
        },
        tipsForParents: [
            'Discuss who is in their contacts and group chats',
            'Know that you cannot read their messages (encryption)',
            'Check location sharing settings; disable group location',
            'Talk about not accepting group invites from unknown contacts',
            'Discuss forwarded content and suspicious messages'
        ],
        parentConversationGuide: {
            startWith: '"I can\'t read WhatsApp messages because they\'re encrypted. Let\'s talk about who you\'re talking to."',
            keyPoints: [
                'Explain encryption = you cannot monitor (be honest)',
                'Discuss who is in their contacts',
                'Review who\'s in group chats',
                'Talk about location sharing risks in groups'
            ],
            redFlags: [
                'Lots of group chats you don\'t know about',
                'Defensive about who they\'re messaging',
                'Receiving explicit content or scam messages',
                'Being added to new groups regularly',
                'Location sharing enabled'
            ],
            scriptOpener: '"WhatsApp is encrypted, so I can\'t read your messages. But I need to make sure you know who you\'re talking to. Can we review your contacts?"'
        },
        sources: 'Parent communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'moderate',
        exposureExplanation: 'Telegram is contact-based like WhatsApp but with more discovery features. The app allows searches to find users by username. Large public groups can have thousands of members. Encrypted messaging is optional (not default).',
        exposureFactors: ['communication', 'unknown_people_contact'],
        protectedExposureLevel: 'lower',
        recommendedSafeguards: [
            {
                label: 'Set username search visibility to contacts only',
                instructions: 'Settings > Privacy and Security > Phone number (toggle \"Who can see my phone number?\" to \"My contacts\"). Settings > Privacy and Security > Username (disable it or set to \"Nobody\", reducing discoverability via search).'
            },
            {
                label: 'Avoid joining large public groups or channels',
                instructions: 'Do not click links to join public groups with hundreds of members. If you join, do not engage. Public groups are monitored by predators. Stick to private groups with real-life friends.'
            },
            {
                label: 'Use Secret Chats for sensitive conversations',
                instructions: 'For important conversations, use Secret Chats (tap and hold a contact > Start Secret Chat). Secret Chats use stronger encryption and messages are not synced across devices. However, regular chats are already fairly secure.'
            }
        ],
        protectedExplanation: 'Restricting username search visibility and avoiding public groups significantly reduce contact from strangers. Default encryption is weaker than WhatsApp, but privacy settings help.'
    },
    {
        id: 18,
        name: 'Telegram',
        category: 'Messaging',
        ageRecommendation: 16,
        safetyRating: 2,
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Encrypted messaging app with minimal content moderation and large anonymous group chats.',
        hasChat: true,
        chatDetails: 'Private messages, channels, groups',
        hasOpenInternet: true,
        internetDetails: 'Links and media in messages',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Telegram is notorious for hosting illegal content, exploitation material, and predator networks. Large group chats are unmoderated. Kids can be added to groups containing CSAM or trafficking content without knowing what\'s there.'
        },
        hiddenDangers: [
            'Used for distributing exploitation material and CSAM',
            'Large unmoderated group chats host predator networks',
            'Kids added to channels containing illegal content without consent',
            'Encrypted = parents cannot monitor at all',
            'Channels can be "secret" = hidden from profile',
            'Group administrators often predators recruiting victims'
        ],
        parentConcerns: {
            exploitation: 'Predator networks use Telegram extensively',
            illegal: 'Groups hosting exploitation material and trafficking',
            exposure: 'Kids can be added to illegal content groups',
            monitoring: 'Impossible to monitor (encrypted and unmoderated)'
        },
        tipsForParents: [
            'Telegram is NOT recommended for under 16',
            'If used, know that you cannot monitor content at all',
            'Discuss that large group chats often contain predators',
            'Warn about being added to unknown channels'
        ],
        parentConversationGuide: {
            startWith: '"I\'ve learned that Telegram is used for serious crimes. I need to understand why you\'re using it."',
            keyPoints: [
                'Explain that Telegram hosts illegal content networks',
                'Discuss that large group chats are unmoderated and dangerous',
                'Warn about being added to channels with illegal content',
                'Explain that encryption means you can\'t help if something happens'
            ],
            redFlags: [
                'Using Telegram without clear reason',
                'In many group chats',
                'Secretive about which channels/groups they\'re in',
                'Unexpected files or media received from unknown sources'
            ],
            scriptOpener: '"Telegram is used by predators and for distributing illegal content. I need to understand why you\'re using it and who you\'re talking to."'
        },
        sources: 'NCMEC, law enforcement reports, parent communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'moderate',
        exposureExplanation: 'Minecraft multiplayer includes chat with unknown players. Realms (official servers) are moderated, but community servers often have minimal moderation. User-generated content can include inappropriate builds or chat.',
        exposureFactors: ['communication', 'unknown_people_contact'],
        protectedExposureLevel: 'lower',
        recommendedSafeguards: [
            {
                label: 'Play offline or on private servers with friends only',
                instructions: 'Use single-player mode or create a private Realm (requires subscription) for friends only. Do not join public servers or realm codes shared by strangers. Public servers often lack moderation of chat and behavior.'
            },
            {
                label: 'Disable or minimize chat in multiplayer',
                instructions: 'In multiplayer settings, you can hide chat. If you must play multiplayer, do not engage with other players\' chat. Communication in Minecraft servers can expose you to scams and grooming.'
            },
            {
                label: 'Do not share your username with people you don\'t know',
                instructions: 'Do not post your Minecraft username on social media or share it with online contacts. This prevents random players from finding you on servers. Use a username that does not match your real name.'
            }
        ],
        protectedExplanation: 'Playing offline, on private servers with trusted friends, or on official Realms significantly reduces contact with strangers. Playing single-player Minecraft has no exposure.'
    },
    {
        id: 19,
        name: 'Minecraft',
        category: 'Gaming',
        ageRecommendation: 8,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Sandbox building game with multiplayer servers and chat.',
        hasChat: true,
        chatDetails: 'In-game chat on servers, private messages, voice chat',
        hasOpenInternet: true,
        internetDetails: 'Downloaded mods and server code can contain viruses',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Minecraft multiplayer exposes kids to chat with strangers. Predators use servers to contact kids and move conversations to Discord. Mods and custom servers can contain malware. Voice chat isn\'t moderated.'
        },
        hiddenDangers: [
            'Multiplayer chat with strangers (no age verification)',
            'Predators befriend kids on servers, move to Discord',
            'Custom mods can contain malware or keyloggers',
            'Voice chat with unknown players unmoderated',
            'Kids share personal info (name, age, school) to make friends',
            'Minecraft→Discord→exploitation pipeline documented'
        ],
        parentConcerns: {
            predators: 'Predators use Minecraft servers as recruitment tool',
            pipeline: 'Minecraft→Discord→offline grooming documented',
            malware: 'Downloaded mods can contain malware',
            chat: 'Chat with random strangers without monitoring'
        },
        tipsForParents: [
            'Use "Realms" (official servers) instead of third-party servers',
            'Disable chat if possible (parental controls)',
            'Discuss that players are strangers',
            'Know that predators specifically target Minecraft players',
            'Monitor Discord if they\'re using it with Minecraft friends',
            'Be cautious of mods from unknown sources'
        ],
        parentConversationGuide: {
            startWith: '"I know you play Minecraft multiplayer. Tell me about who you play with."',
            keyPoints: [
                'Explain that other players are strangers',
                'Discuss the predator pattern: Minecraft→Discord→offline',
                'Talk about not sharing personal info in chat',
                'Discuss legitimate Realms vs. sketchy servers'
            ],
            redFlags: [
                'Using third-party servers with "friends" met online',
                'Moving to Discord to chat with Minecraft players',
                'Installing mods from unknown sources',
                'Secretive about who they play with',
                'Meeting up with online Minecraft friends'
            ],
            scriptOpener: '"I know Minecraft is fun, but predators use it to find kids. Tell me who you\'re playing with and how you met them."'
        },
        sources: 'Parent communities, gaming safety reports',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'higher',
        exposureExplanation: 'Facebook\'s algorithm personalizes content and can surface eating disorder content or dating scams. Friend requests from strangers are common. The platform collects extensive behavioral data and has a history of privacy breaches.',
        exposureFactors: ['communication', 'unknown_people_contact', 'public_visibility', 'content_exposure'],
        protectedExposureLevel: 'moderate',
        recommendedSafeguards: [
            {
                label: 'Set profile to friends-only and restrict friend requests',
                instructions: 'Settings > Privacy > Who can see your profile? (set to \"Friends only\"). Settings > Who can contact you? (set to \"Friends only\"). This requires friend approval before anyone can message or see your profile.'
            },
            {
                label: 'Limit who can see your posts and tagged photos',
                instructions: 'Posts: When posting, click the audience selector (before posting) and select \"Friends only\". For past posts, Settings > Privacy > Limit past posts (toggle on to restrict past posts to friends).'
            },
            {
                label: 'Review and delete apps and games that access your account',
                instructions: 'Settings > Apps and websites > Remove any apps you no longer use. Facebook apps harvest extensive user data. Limit which apps have access to your profile information.'
            }
        ],
        protectedExplanation: 'Private profile, friend-only friend lists, and limiting visibility of posts and tagged photos significantly reduce exposure. Facebook\'s data collection remains extensive, but visibility controls help.'
    },
    {
        id: 20,
        name: 'Facebook',
        category: 'Social Media',
        ageRecommendation: 13,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Social network with groups, messaging, and friend connections.',
        hasChat: true,
        chatDetails: 'Messenger, group chats, private messages',
        hasOpenInternet: true,
        internetDetails: 'Links, videos, and ads',
        hasLocationTracking: true,
        locationDetails: 'Location visible to friends and in posts',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Facebook collects extensive data on kids. Groups can have predators. Messenger allows contact from anyone (depending on settings). Kids often overshare personal information publicly or semi-publicly.'
        },
        hiddenDangers: [
            'Extensive data collection on behavior, interests, location',
            'Targeted advertising designed for engagement and addiction',
            'Private groups can be predator hunting grounds',
            'Messenger allows strangers to contact depending on settings',
            'Kids overshare location, daily routines, home address',
            'Cyberbullying through group posts and comments'
        ],
        parentConcerns: {
            privacy: 'Extensive tracking and data collection',
            predators: 'Private groups and messaging enable predator contact',
            oversharing: 'Kids publicly share locations and routines',
            addiction: 'Algorithm designed for engagement'
        },
        tipsForParents: [
            'Review privacy settings (make posts private)',
            'Disable location sharing or limit to close friends',
            'Review who can send messages (should be friends only)',
            'Monitor which groups they\'re joining',
            'Discuss that posts are semi-permanent'
        ],
        parentConversationGuide: {
            startWith: '"I\'d like to be friends with you on Facebook so I can see what\'s happening."',
            keyPoints: [
                'Review what they\'re posting publicly',
                'Discuss privacy settings and location sharing',
                'Talk about not accepting friend requests from strangers',
                'Review group memberships'
            ],
            redFlags: [
                'Accepting friend requests from unknown adults',
                'Posting location and daily schedule',
                'Meeting up with "Facebook friends" they don\'t know in person',
                'Joining suspicious groups',
                'Cyberbullying incidents'
            ],
            scriptOpener: '"Facebook collects a lot of your information. Let\'s review your privacy settings together."'
        },
        sources: 'Common Sense Media, parent communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'moderate',
        exposureExplanation: 'Fortnite is a multiplayer game with voice chat between players. Squad matches include contact with unknown players. The game includes a cosmetics shop and limited in-game social features.',
        exposureFactors: ['communication', 'unknown_people_contact', 'money_transactions'],
        protectedExposureLevel: 'lower',
        recommendedSafeguards: [
            {
                label: 'Play only squad matches with friends, not with randoms',
                instructions: 'Use squad mode only with real-life friends. Do not enable \"Fill\" which adds random players. Solo mode avoids all squad chat. If you must play squad, use Discord or another platform only with known players.'
            },
            {
                label: 'Mute all players or use push-to-talk voice chat only',
                instructions: 'Audio settings > toggle mute all players. Or use push-to-talk (only transmit when button held), not open-mic. This prevents casual contact and reduces exposure to toxic chat.'
            },
            {
                label: 'Disable cosmetics purchases and set spending limit',
                instructions: 'Fortnite store defaults to showing cosmetics for purchase. Set up two-factor authentication and a spending limit in your Epic Games account settings. This prevents impulse purchases and scams.'
            }
        ],
        protectedExplanation: 'Playing in squad with trusted friends, disabling voice chat, and avoiding cosmetics purchases significantly reduce exposure. Solo play or creative mode has no multiplayer contact.'
    },
    {
        id: 21,
        name: 'Fortnite',
        category: 'Gaming',
        ageRecommendation: 13,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Online multiplayer battle royale with in-game chat and social features.',
        hasChat: true,
        chatDetails: 'Voice chat with squad, text chat, party chat',
        hasOpenInternet: true,
        internetDetails: 'Links in chat; streaming to external platforms',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Fortnite\'s voice chat connects kids with random strangers. Predators posture as skilled players to befriend kids, then move conversations offline. In-game spending is aggressive and kids can spend hundreds without parent knowledge.'
        },
        hiddenDangers: [
            'Voice chat with random players (no age verification)',
            'Predators pose as skilled players to gain trust',
            'Aggressive in-game spending (skins, battle pass) uses parent credit cards',
            'Kids share personal info to fit in with squad',
            'Toxic gaming culture (racist, sexist language normalized)',
            'Predator→Discord→offline pipeline similar to Minecraft'
        ],
        parentConcerns: {
            spending: 'Kids can spend hundreds on cosmetics without permission',
            predators: 'Voice chat enables predator contact',
            grooming: 'Predators befriend kids, move to Discord/Snapchat',
            toxicity: 'Exposure to harassment and hate speech'
        },
        tipsForParents: [
            'Set up parental controls to disable voice chat',
            'Use friends-only squad options',
            'Monitor in-game spending; require permission for purchases',
            'Discuss that squad members are strangers',
            'Know the Discord/offline meeting risk'
        ],
        parentConversationGuide: {
            startWith: '"I know you play Fortnite. Let\'s talk about your squad and in-game spending."',
            keyPoints: [
                'Discuss the in-game spending and what costs money',
                'Explain that squad members are strangers',
                'Talk about the predator pattern (Fortnite→Discord→offline)',
                'Discuss voice chat risks'
            ],
            redFlags: [
                'Unexpected credit card charges for V-Bucks',
                'Long private voice chats with squad members',
                'Moving gaming friends to Discord or Snapchat',
                'Secretive about who they\'re playing with',
                'Meeting up with online squad members'
            ],
            scriptOpener: '"Fortnite has voice chat with strangers. I need to make sure you\'re safe and that you\'re not spending money without asking."'
        },
        sources: 'Parent communities, gaming safety reports',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'moderate',
        exposureExplanation: 'Pinterest\'s algorithm recommends content based on pins saved. The explore page can surface eating disorder, self-harm, or extreme content. Contact with other users is possible through messaging.',
        exposureFactors: ['content_exposure', 'unknown_people_contact', 'communication'],
        protectedExposureLevel: 'lower',
        recommendedSafeguards: [
            {
                label: 'Set profile to private and restrict messages',
                instructions: 'Settings > Who can message you? (set to \"People you follow\" or \"No one\"). Settings > Privacy (toggle \"Make profile private\" on). This hides your boards and followers from strangers.'
            },
            {
                label: 'Curate saved pins and avoid the explore tab',
                instructions: 'Save pins only on boards related to your genuine interests. Avoid clicking \"Explore\", \"Trending\", or following random accounts. If you notice eating disorder content in your feed, delete the boards and reset your recommendations.'
            },
            {
                label: 'Do not share personal information in pin descriptions or board names',
                instructions: 'Avoid naming boards with your name, age, or identifying info. Do not pin your address, school, or schedule. Pin descriptions are visible to followers and can be discovered by strangers.'
            }
        ],
        protectedExplanation: 'Private profile, message restrictions, and curating pinned content (avoiding problematic boards) significantly reduce exposure. Pinterest\'s algorithm is generally less aggressive than TikTok or Instagram.'
    },
    {
        id: 22,
        name: 'Pinterest',
        category: 'Social Media / Discovery',
        ageRecommendation: 13,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Visual discovery and bookmarking platform with curated content.',
        hasChat: false,
        chatDetails: 'No direct messaging, but has comments and DMs',
        hasOpenInternet: true,
        internetDetails: 'Links to external websites; embedded ads and sponsored content',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Pinterest appears safe but algorithm can lead kids down harmful rabbit holes. Body image content (eating disorders, extreme fitness), self-harm imagery, conspiracy theories, and inappropriate sexual content spread easily through pins. Kids often don\'t realize they\'re viewing dangerous content because it\'s styled as "inspiration."'
        },
        hiddenDangers: [
            'Algorithm escalates from beauty/fitness → eating disorders → self-harm',
            'Hidden sexual content in "innocuous" search results',
            'Pro-ana (eating disorder) communities disguised as health content',
            'Self-harm and suicide content tagged as "depression tips"',
            'Conspiracy theories and misinformation spread through pins',
            'Scam links and fake product links in pins'
        ],
        parentConcerns: {
            mentalHealth: 'Eating disorders, body image issues, self-harm content',
            conspiracy: 'Algorithm spreads misinformation and conspiracy theories',
            scams: 'Fake product links and dropshipping scams',
            exposure: 'Appears safe but contains graphic content'
        },
        tipsForParents: [
            'Discuss that Pinterest algorithm learns and escalates content',
            'Review what they\'re pinning and following',
            'Watch for body image concerns or health-related searches',
            'Discuss that "inspiration" content can promote eating disorders',
            'Know that search results may contain graphic content'
        ],
        parentConversationGuide: {
            startWith: '"I know you use Pinterest. What kinds of things are you pinning and following?"',
            keyPoints: [
                'Discuss the algorithm and how it learns what to show',
                'Explain that some "health" content actually promotes eating disorders',
                'Talk about body image and social comparison',
                'Discuss clicking links to external sites'
            ],
            redFlags: [
                'Body image concerns or eating disorder language',
                'Following accounts focused on extreme fitness/dieting',
                'Searching for self-harm or depression content',
                'Sudden interest in conspiracy theories through pins'
            ],
            scriptOpener: '"Pinterest can have a lot of beauty and health content that actually isn\'t healthy. Let\'s talk about what you\'re following."'
        },
        sources: 'Parent communities, body image research'
    },
    {
        id: 23,
        name: 'Among Us',
        category: 'Gaming / Multiplayer',
        ageRecommendation: 10,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Online multiplayer game where players work together to find the imposter.',
        hasChat: true,
        chatDetails: 'In-game text chat and voice chat with random players',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Among Us became massively popular with 8-12 year olds. In-game chat with random strangers, no age verification, and kids sharing personal info to make friends. Predators specifically target this game because the younger audience is less cautious about stranger danger.'
        },
        hiddenDangers: [
            'Chat with random players with no age verification',
            'Kids share names, ages, locations to make in-game friends',
            'Predators pose as kids to build rapport',
            'Move conversations to Discord, Snapchat, or other apps',
            'No parental controls to disable chat',
            'Toxic players using slurs and inappropriate language'
        ],
        parentConcerns: {
            predators: 'Predators specifically target younger children on this game',
            chat: 'Unmoderated chat with random strangers',
            pipeline: 'Kids move friendships to Discord/Snapchat',
            exposure: 'Toxic language and inappropriate content'
        },
        tipsForParents: [
            'Know that random players include unknown adults',
            'Disable in-game chat if possible',
            'Discuss that other players are strangers',
            'Watch for kids wanting to move friendships to Discord',
            'Monitor who they\'re playing with'
        ],
        parentConversationGuide: {
            startWith: '"I know you play Among Us. Tell me about who you play with."',
            keyPoints: [
                'Explain that other players are strangers, not kids necessarily',
                'Discuss not sharing personal info in chat',
                'Talk about the danger of moving to Discord',
                'Discuss toxic language in chat'
            ],
            redFlags: [
                'New online "friends" from Among Us',
                'Wants to move friends to Discord or Snapchat',
                'Sharing personal information in game',
                'Secretive about who they play with'
            ],
            scriptOpener: '"Among Us has chat with strangers. I need to make sure you know they might not be who they say they are."'
        },
        sources: 'Parent communities, gaming safety reports',

        // PHASE C: Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'moderate',
        exposureExplanation: 'Among Us includes public multiplayer where players may interact with unknown players. Child accounts use Quick Chat by default, which restricts communication to preset phrases. Full text chat requires parental permission.',
        exposureFactors: [
            'communication',
            'unknown_people_contact',
            'public_visibility'
        ],
        protectedExposureLevel: 'lower',
        recommendedSafeguards: [
            {
                label: 'Keep chat in Quick Chat mode',
                instructions: 'Child accounts default to Quick Chat (preset phrases only). Do not enable Free Chat without understanding that it allows typed messages to unknown players.'
            },
            {
                label: 'Play private or friends-only games',
                instructions: 'Use private lobbies to play only with people you know, rather than joining public lobbies with unknown players.'
            }
        ],
        protectedExplanation: 'Quick Chat mode (default for child accounts) and private games together significantly reduce exposure to unknown players and restrict communication to safe preset phrases.'
    },
    {
        id: 24,
        name: 'League of Legends',
        category: 'Gaming / MOBA',
        ageRecommendation: 16,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Team-based multiplayer online battle arena with competitive ranked play.',
        hasChat: true,
        chatDetails: 'In-game team chat, all-chat with opposing team, voice comms',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'League of Legends is competitive and toxic. In-game chat is notorious for harassment, racist slurs, sexist comments, and death threats. Professional esports culture around it glamorizes toxic behavior. Kids can become obsessed with ranked climbing and developing unhealthy gaming habits.'
        },
        hiddenDangers: [
            'Extremely toxic community (widely documented)',
            'Racist, sexist, and homophobic slurs in chat',
            'Death threats and extreme harassment common',
            'Addictive ranked climbing can lead to excessive gaming',
            'Professional esports hype makes kids feel they should play "seriously"',
            'Sleep deprivation from late-night ranked grinding'
        ],
        parentConcerns: {
            toxicity: 'One of most toxic gaming communities',
            addiction: 'Competitive ranked play designed to be addictive',
            sleep: 'Late-night gaming impacts school and sleep',
            exposure: 'Constant exposure to slurs and harassment'
        },
        tipsForParents: [
            'Know this game has a very toxic community',
            'Set strict time limits on play',
            'Disable all-chat if possible',
            'Monitor sleep impact',
            'Discuss toxic behavior and not engaging',
            'Know that "pro scene" hype can fuel addiction'
        ],
        parentConversationGuide: {
            startWith: '"League of Legends has a reputation for being really toxic. Let\'s talk about what you experience in chat."',
            keyPoints: [
                'Discuss toxic behavior and why it happens',
                'Explain that responding to toxic players makes it worse',
                'Set expectations about gaming time and sleep',
                'Talk about not internalizing harassment'
            ],
            redFlags: [
                'Excessive gaming (8+ hours daily)',
                'Sleep deprivation',
                'Starting to use toxic language themselves',
                'Getting upset/emotional after games',
                'Hiding how much time they\'re playing'
            ],
            scriptOpener: '"League of Legends is competitive and the chat can be really mean. I want to make sure you\'re healthy while playing."'
        },
        sources: 'Gaming communities, parent forums',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'higher',
        exposureExplanation: 'League of Legends is a competitive multiplayer game with text chat between teams. In-game communication with unknown players is required for ranked play. Some players are toxic. The game includes cosmetics purchases.',
        exposureFactors: ['communication', 'unknown_people_contact', 'money_transactions'],
        protectedExposureLevel: 'moderate',
        recommendedSafeguards: [
            {
                label: 'Mute all team chat or play non-ranked modes only',
                instructions: 'Settings > Interface > All chat (toggle \"All chat\" off). This disables chat from enemy team and reduces team drama. Play Normal games (not Ranked) to avoid the most toxic players. ARAM (All Random All Mid) mode has faster games and less pressure.'
            },
            {
                label: 'Do not share summoner name, Discord server, or contact info in chat',
                instructions: 'Do not engage with players who ask for your Discord, Twitch, or off-platform contact information. Predators target competitive players. Keep gaming contact in-game only.'
            },
            {
                label: 'Set spending limit on cosmetics and disable in-app purchases',
                instructions: 'League has cosmetics, battle passes, and loot boxes. Set up two-factor authentication on your Riot account. Disable purchase notifications if possible. Budget strictly for cosmetics—some players spend $100+ monthly on cosmetics.'
            }
        ],
        protectedExplanation: 'Playing casually (avoiding ranked), muting all chat, and limiting to ARAM (random character mode) significantly reduce exposure. Competitive ranked play exposes players to toxic team communication.'
    },
    {
        id: 25,
        name: 'Omegle (Shut Down in 2023)',
        category: 'Video Chat / Random',
        ageRecommendation: 18,
        safetyRating: 1,
        safetyLabel: '🔴 CRITICAL RISK (Historical)',
        description: 'Random video chat platform that was shut down in November 2023. Educational value remains for understanding random-chat platform risks.',
        hasChat: true,
        chatDetails: 'Text or video chat with completely random anonymous users',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters (Historical)',
            content: 'Omegle was a random video and text chat platform that connected users with anonymous strangers. It shut down in November 2023. While the app is no longer operational, understanding its risks helps parents recognize similar random-chat platforms and discuss online safety.'
        },
        hiddenDangers: [
            'Was used by adults to find and exploit children',
            'Exposed users to explicit sexual content immediately',
            'Had no age verification or identity verification',
            'Predators recorded conversations for sextortion',
            'No moderation or safety features',
            'Screenshots/recordings used for blackmail'
        ],
        parentConcerns: {
            historical: 'Platform was shut down in November 2023',
            context: 'Similar random-chat platforms may still pose similar risks'
        },
        tipsForParents: [
            'Omegle is no longer operational (shut down November 2023)',
            'If your child has used Omegle in the past, discuss what they saw',
            'Explain the risks they were exposed to (for educational context)',
            'Watch for similar random-chat platforms that may still exist',
            'Teach them to avoid any platform that connects with anonymous strangers'
        ],
        parentConversationGuide: {
            startWith: '"I want to talk about Omegle in case you\'ve used it or heard about it from friends."',
            keyPoints: [
                'Explain that Omegle shut down in November 2023',
                'If they have used it, listen without judgment about what they saw',
                'Discuss the risks that existed on that platform',
                'Explain why random-chat platforms are dangerous',
                'Help them recognize and avoid similar platforms'
            ],
            redFlags: [
                'Any use of Omegle',
                'Secretive behavior about video chat',
                'Browser history showing Omegle',
                'Talk of "random chat" or "stranger" apps'
            ],
            scriptOpener: '"I want to talk about Omegle. Have you heard of it? It was shut down because it wasn\'t safe."'
        },
        sources: 'NCMEC, law enforcement, parent communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'very_high',
        exposureExplanation: 'Omegle is designed for video chat with complete strangers. There is no moderation or user verification. The platform is notorious for exposing minors to sexual content, predatory adults, and sextortion. Most users will encounter explicit content within minutes.',
        exposureFactors: ['unknown_people_contact', 'content_exposure', 'communication', 'public_visibility'],
        protectedExposureLevel: 'very_high',
        recommendedSafeguards: [
            {
                label: 'Do not use Omegle',
                instructions: 'Omegle is not a safe platform for minors. The app is designed to connect you with random strangers, and most users will encounter explicit sexual content, predators, and sextortion attempts within minutes. Better alternatives exist for meeting people with shared interests.'
            },
            {
                label: 'If contacted by someone claiming to know you from Omegle, do not engage',
                instructions: 'Predators use Omegle to identify minors, take screenshots of their video, and then contact them on Instagram, TikTok, or other platforms claiming to have evidence. Do not engage. Block and report immediately.'
            },
            {
                label: 'Consider using Discord for community and friend-based connection instead',
                instructions: 'If seeking connection, Discord communities based on shared interests (gaming, hobbies, art) are safer for supervised interaction. You still need to be careful, but Discord at least allows community moderation and reporting.'
            }
        ],
        protectedExplanation: 'Omegle\'s entire design is based on connecting with random strangers. No in-app settings can reduce this risk. Effective protection requires avoiding the app entirely.'
    },
    {
        id: 26,
        name: 'Tinder',
        category: 'Dating / Social',
        ageRecommendation: 18,
        safetyRating: 2,
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Dating app for meeting and connecting with potential matches.',
        hasChat: true,
        chatDetails: 'Direct messages with matched users',
        hasOpenInternet: true,
        internetDetails: 'Links shared in messages; profiles can link to external sites',
        hasLocationTracking: true,
        locationDetails: 'Location used to find matches; proximity shown',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Tinder is 18+ but age verification is broken. Adults catfish as teenagers. Kids use fake profiles to access the app. The app prioritizes proximity (location) making it easy for predators to find and meet children. Sextortion, trafficking, and exploitation are documented on Tinder.'
        },
        hiddenDangers: [
            'Age verification broken: adults pose as teens easily',
            'Proximity matching enables local predators to find kids',
            'Sextortion and sexual exploitation common',
            'Human trafficking uses Tinder to identify victims',
            'Fake profiles and catfishing',
            'Sexual predators specifically use Tinder for teenagers',
            'Meet-ups with strangers without safety planning'
        ],
        parentConcerns: {
            predators: 'Designed for meeting strangers; predators use it',
            location: 'Location matching enables local predators',
            exploitation: 'Sextortion and trafficking documented',
            meetups: 'Kids arranging meetups with strangers from app'
        },
        tipsForParents: [
            'Tinder is 18+ and NOT safe for minors',
            'Monitor for Tinder or similar dating apps',
            'If found, discuss why dating apps are dangerous at their age',
            'Know that adults specifically hunt on these apps',
            'Discuss that meeting strangers from apps is dangerous'
        ],
        parentConversationGuide: {
            startWith: '"If you\'re using Tinder or dating apps, we need to talk about why that\'s dangerous."',
            keyPoints: [
                'Explain that adults hunt on dating apps for teenagers',
                'Discuss sextortion and trafficking',
                'Explain location proximity matching',
                'Talk about catfishing and fake profiles'
            ],
            redFlags: [
                'Any use of Tinder or dating apps under 18',
                'Secretive chatting with app matches',
                'Plans to meet someone from app',
                'Requests for photos from app matches'
            ],
            scriptOpener: '"Dating apps like Tinder have adults who specifically hunt teenagers. They lie about their age and intentions. I need to know if you\'re using these apps."'
        },
        sources: 'NCMEC, trafficking reports, law enforcement',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'very_high',
        exposureExplanation: 'Tinder is a dating app designed for adult connection. Minors using Tinder face exposure to adult predators, sextortion, and dating scams. The app collects location data and allows anonymous profiles.',
        exposureFactors: ['unknown_people_contact', 'communication', 'location_personal_data', 'money_transactions'],
        protectedExposureLevel: 'very_high',
        recommendedSafeguards: [
            {
                label: 'Do not use Tinder if under 18',
                instructions: 'Tinder is a dating app designed for adults 18+. Using it as a minor exposes you to adult predators. The app violates terms of service for minors and does not provide meaningful protections.'
            },
            {
                label: 'Report or block anyone who behaves inappropriately',
                instructions: 'If someone asks for money, personal information, or sends sexual content, report them immediately. However, reporting does not undo the exposure. The best protection is not using the app.'
            },
            {
                label: 'Recognize common sextortion and money scams',
                instructions: 'On Tinder: \"Send me photos\", \"I need money for medical emergency\", \"I\'ll pay you for photos\", \"Let\'s move to WhatsApp quickly\" are all common scams targeting minors. Do not respond. Do not send anything.'
            }
        ],
        protectedExplanation: 'Tinder is an adult dating platform. No in-app settings reduce the fundamental risk of exposure to predatory adults. Effective protection requires not using the app.'
    },
    {
        id: 27,
        name: 'Kik',
        category: 'Messaging',
        ageRecommendation: 16,
        safetyRating: 2,
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Messaging app focused on anonymity and group chats.',
        hasChat: true,
        chatDetails: 'Direct messages, group chats, anonymous accounts',
        hasOpenInternet: true,
        internetDetails: 'Links and media sharing; external content',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Kik\'s private messaging and ability to connect with people outside your child\'s real-world circle can create opportunities for unwanted contact, sexual solicitation, sextortion, or exploitation. The app\'s anonymity features and lack of phone number requirement make parental monitoring difficult.'
        },
        hiddenDangers: [
            'Anonymous accounts with no verification',
            'Designed to connect with strangers through interest-based groups',
            'Risk of sexual solicitation and sextortion',
            'Limited account recovery options if compromised',
            'Difficult for parents to monitor messages',
            'Kids can be added to group chats with unknown adults'
        ],
        parentConcerns: {
            anonymity: 'Anonymity makes it impossible to verify who kids are communicating with',
            solicitation: 'Risk of sexual solicitation and sextortion',
            monitoring: 'Private encrypted messages make parental oversight difficult'
        },
        tipsForParents: [
            'Have a conversation about why they want to use Kik',
            'Explain that anonymity makes it hard to verify who people really are',
            'Discuss the risks of connecting with strangers',
            'Monitor for Kik and other anonymous messaging apps',
            'Ask to see who they\'re communicating with (though encryption limits transparency)'
        ],
        parentConversationGuide: {
            startWith: '"I found Kik on your phone. Let\'s talk about why you have it and who you\'re talking to."',
            keyPoints: [
                'Explain that Kik is known for predator activity',
                'Discuss anonymity and why it\'s dangerous',
                'Ask who they\'re talking to and how they met',
                'Explain sextortion risks'
            ],
            redFlags: [
                'Having Kik installed',
                'Anonymous accounts messaging them',
                'Being asked for photos',
                'New "friends" on Kik',
                'Secretive about Kik conversations'
            ],
            scriptOpener: '"Kik is known as an app where predators specifically hunt kids. I need to understand why you have it and if you\'re safe."'
        },
        sources: 'NCMEC, law enforcement, parent communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'higher',
        exposureExplanation: 'Kik is a messaging app where users can search for and contact strangers by username. The app has minimal moderation and is known for being used by predators to contact minors.',
        exposureFactors: ['unknown_people_contact', 'communication'],
        protectedExposureLevel: 'higher',
        recommendedSafeguards: [
            {
                label: 'Disable username search so strangers cannot find you',
                instructions: 'Settings > Privacy > Allow me to be found by username (toggle off). This prevents strangers from searching for and messaging you. However, group chats may still expose you to unknown users.'
            },
            {
                label: 'Do not accept messages or join groups with unknown users',
                instructions: 'Only message friends you know in real life. Do not join group chats with people you have not met. Predators use Kik group chats to identify minors and isolate them.'
            },
            {
                label: 'Do not share personal information or photos',
                instructions: 'Do not send photos or personal details to anyone on Kik. Do not share your name, location, school, or anything identifying. If asked for photos, assume it is a predator and block immediately.'
            }
        ],
        protectedExplanation: 'Kik\'s core design enables contact from strangers. Even with privacy settings, the app remains fundamentally designed for stranger connection. In-app protections are limited.'
    },
    {
        id: 28,
        name: 'Nextdoor',
        category: 'Community / Neighborhood',
        ageRecommendation: 18,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Neighborhood social network for local community communication.',
        hasChat: true,
        chatDetails: 'Direct messages, community posts and comments',
        hasOpenInternet: true,
        internetDetails: 'Links to external sites and news articles',
        hasLocationTracking: true,
        locationDetails: 'Based on home address; shows neighborhood',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Nextdoor exposes your home address and neighborhood. Parents sometimes let kids use it not realizing it reveals their location. Neighborhood predators can use it to identify targets. Racist rants, conspiracy theories, and harassment are common on Nextdoor.'
        },
        hiddenDangers: [
            'Exposes home address and neighborhood',
            'Predators can identify houses with children',
            'Racist rants and hate speech common',
            'Misinformation and conspiracy theories spread',
            'Kids\' photos and info shared by parents publicly',
            'Harassment and doxxing'
        ],
        parentConcerns: {
            location: 'Home address and neighborhood exposed',
            predators: 'Predators can identify where children live',
            exposure: 'Toxic behavior and hate speech',
            harassment: 'Neighborhood conflicts escalate online'
        },
        tipsForParents: [
            'Don\'t let kids use Nextdoor',
            'If you use it, never share photos of kids',
            'Don\'t discuss your children on Nextdoor',
            'Understand it reveals your address',
            'Monitor if older teens want to use it'
        ],
        parentConversationGuide: {
            startWith: '"Nextdoor shows our home address. I don\'t want you using it because it\'s not safe."',
            keyPoints: [
                'Explain that location/address is exposed',
                'Discuss predators and how they find targets',
                'Talk about toxic behavior on the platform',
                'Discuss why kids shouldn\'t be visible on neighborhood app'
            ],
            redFlags: [
                'Wanting to use Nextdoor',
                'Sharing location or address info',
                'Photos of kids posted by parents'
            ],
            scriptOpener: '"Nextdoor posts your home address to strangers in your neighborhood. I don\'t want you using it, and I won\'t post photos of you there either."'
        },
        sources: 'Parent communities, safety advocates',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'moderate',
        exposureExplanation: 'Nextdoor is a neighborhood social network where users are identified by neighborhood and first name. Posts are visible to neighbors. Some users share addresses and home details. Location data is shared by default.',
        exposureFactors: ['location_personal_data', 'public_visibility', 'communication'],
        protectedExposureLevel: 'moderate',
        recommendedSafeguards: [
            {
                label: 'Do not share identifying household details or routines',
                instructions: 'Do not post about when you are away from home, upcoming vacations, valuable items you own, or which door you use. Do not post photos showing your house number or address.'
            },
            {
                label: 'Review privacy settings and limit visibility',
                instructions: 'Settings > Privacy > Visibility (set to specific neighbors, not all neighborhood). Do not enable Nextdoor app notifications (reduces social pressure to engage). Control what your profile shares about you.'
            },
            {
                label: 'Be cautious about personal information in posts and comments',
                instructions: 'Use first name only (no last name or middle initials). Do not mention your school, workplace, or social media handles. Predators scan neighborhood apps to identify minors in specific areas.'
            }
        ],
        protectedExplanation: 'Limiting what you share, avoiding identifying home location, and not accepting friend requests from strangers help, but the app is neighborhood-based so some location exposure is inherent.'
    },
    {
        id: 29,
        name: 'Houseparty (Shut Down in 2020)',
        category: 'Video Chat / Gaming',
        ageRecommendation: 13,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK (Historical)',
        description: 'Video group chat app with integrated games that was shut down by Epic Games in December 2020. Educational value remains for understanding group video chat risks.',
        hasChat: true,
        chatDetails: 'Group video chat with up to 8 people',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters (Historical)',
            content: 'Houseparty was a group video chat app that was shut down in December 2020. While the app is no longer operational, understanding its risks helps parents recognize similar group video chat platforms and discuss online safety.'
        },
        hiddenDangers: [
            'Can be added to group video calls with strangers',
            'Limited safety features for group calls',
            'Screen sharing exposes personal information',
            'Difficult to monitor who\'s on calls',
            'Predators join group calls to identify targets',
            'Recording without clear notification'
        ],
        parentConcerns: {
            groups: 'Group calls with unknown participants',
            predators: 'Predators join group video chats',
            monitoring: 'Hard to see who\'s in video calls',
            exposure: 'Screen sharing of personal info'
        },
        tipsForParents: [
            'Know who they\'re video chatting with',
            'Ask about the group composition regularly',
            'Discuss not sharing personal info on camera',
            'Understand that group calls include strangers sometimes',
            'Monitor who\'s inviting them to calls'
        ],
        parentConversationGuide: {
            startWith: '"Tell me about who you\'re video chatting with on Houseparty."',
            keyPoints: [
                'Discuss that groups can include unknown people',
                'Explain predators may join group calls',
                'Talk about not sharing personal info on camera',
                'Discuss being careful with screen sharing'
            ],
            redFlags: [
                'Frequent calls with unknown participants',
                'Receiving calls from people they don\'t know',
                'Secretive about who\'s in calls',
                'Being asked inappropriate questions on calls'
            ],
            scriptOpener: '"Houseparty group calls can include people you don\'t know. I want to make sure you\'re only chatting with kids you actually know."'
        },
        sources: 'Parent communities',

        // Digital Exposure Level v2
        schemaVersion: 2,
        exposureLevel: 'higher',
        exposureExplanation: 'Houseparty is a video chat app that facilitates group calls with friends and friends-of-friends. The app encourages spontaneous connection and recommends users who might be \"fun\" to call. Predators can join group calls and contact minors privately after meeting in groups.',
        exposureFactors: ['communication', 'unknown_people_contact', 'outside_access'],
        protectedExposureLevel: 'moderate',
        recommendedSafeguards: [
            {
                label: 'Disable \"Add Me\" and broadcast features entirely',
                instructions: 'Settings > Privacy > \"Add Me\" (toggle off). Settings > Broadcast (disable if available). This prevents strangers from discovering and calling you. You can still call friends, but cannot be called by discovery.'
            },
            {
                label: 'Join only group calls where all participants are real-life friends',
                instructions: 'Do not accept group call invitations from people you have only met online. Verify that everyone in the group call is someone you know and trust in real life. Predators pose as friends\' friends in group calls.'
            },
            {
                label: 'Consider disabling the app when not actively using it',
                instructions: 'Houseparty is designed for spontaneous video calls. The app is installed (active) on your device by default. Consider disabling or deleting when not in active use with your close friend group.'
            }
        ],
        protectedExplanation: 'Disabling the \"Add Me\" feature, restricting who can invite you to calls, and avoiding public broadcasts significantly reduce exposure. However, friend-of-friend recommendations still allow connection with strangers.'
    },
    {
        id: 30,
        name: 'Signal',
        category: 'Messaging',
        ageRecommendation: 16,
        safetyRating: 4,
        safetyLabel: '🟡 MEDIUM RISK',
        description: 'Encrypted messaging app focused on privacy and security.',
        hasChat: true,
        chatDetails: 'Direct messages, group messages, voice and video calls',
        hasOpenInternet: true,
        internetDetails: 'Users can send and receive clickable external links in messages',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Signal is actually very secure and privacy-focused. Main risk: parents can\'t monitor messages because they\'re fully encrypted. Also, kids might use Signal specifically to hide communications from parents, which is a red flag about who they\'re talking to.'
        },
        hiddenDangers: [
            'End-to-end encryption means parents cannot read messages',
            'Kids may choose Signal specifically to hide communications',
            'Used to hide relationships with unknown people',
            'No backup of messages makes recovery impossible'
        ],
        parentConcerns: {
            monitoring: 'Cannot read encrypted messages',
            hiddenComms: 'Kids may use it specifically to hide from parents',
            identity: 'No way to verify who they\'re talking to'
        },
        tipsForParents: [
            'Signal is generally secure, but encrypted means you can\'t monitor',
            'If kids use Signal, ask why they need encrypted messaging',
            'Discuss that using encryption to hide from parents is concerning',
            'Focus on building trust rather than monitoring',
            'If they use Signal, have explicit conversations about who they talk to'
        ],
        parentConversationGuide: {
            startWith: '"I noticed you using Signal. Why do you need encrypted messaging?"',
            keyPoints: [
                'Explain that Signal is private (you can\'t see messages)',
                'Discuss why they feel they need hidden communication',
                'Talk about trust and transparency',
                'Ask who they\'re communicating with on Signal'
            ],
            redFlags: [
                'Using Signal to hide communications from parents',
                'Reluctance to discuss who they\'re talking to',
                'Installed specifically to hide messages',
                'Secretive behavior around Signal'
            ],
            scriptOpener: '"Signal is a secure app. I can\'t read your messages, which is fine; but I want to understand why you\'re using it and who you\'re talking to."'
        },
        sources: 'Parent communities'
    },
    {
        id: 31,
        name: 'WeChat',
        category: 'Messaging / Social',
        ageRecommendation: 13,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Chinese messaging and social media platform with extensive features.',
        hasChat: true,
        chatDetails: 'Direct messages, group chats, Moments (similar to Instagram story)',
        hasOpenInternet: true,
        internetDetails: 'Mini programs, links, embedded content',
        hasLocationTracking: true,
        locationDetails: 'Location sharing features',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'WeChat is popular among Chinese-American families and has an older user base. However, it also has extensive feature bloat (payments, mini-games, group features) and kids can access adult content. Group chats can include strangers. Payment features enable kids to spend money.'
        },
        hiddenDangers: [
            'Group chats with unknown adult participants',
            'Mini programs and games with in-game spending',
            'Adult content mixed with regular messaging',
            'Payment features allow kids to spend money',
            'Location sharing can be enabled without awareness',
            'Extensive data collection by Chinese government'
        ],
        parentConcerns: {
            groups: 'Group chats can include unknown adults',
            spending: 'In-app purchases and payments possible',
            exposure: 'Access to adult content',
            privacy: 'Data collection practices'
        },
        tipsForParents: [
            'Review group chat memberships',
            'Disable payment features if possible',
            'Discuss location sharing settings',
            'Monitor for spending',
            'Be aware of adult content that may appear'
        ],
        parentConversationGuide: {
            startWith: '"Tell me about your WeChat groups and who\'s in them."',
            keyPoints: [
                'Discuss group membership and who\'s included',
                'Talk about mini-games and spending',
                'Discuss location and privacy settings',
                'Ask about any uncomfortable content they\'ve seen'
            ],
            redFlags: [
                'Large group chats with unknown adults',
                'Unexpected spending on mini-games',
                'Secretive about group content',
                'Adult content appearing'
            ],
            scriptOpener: '"WeChat has a lot of features. Let\'s review your settings and who\'s in your groups."'
        },
        sources: 'Parent communities'
    },
    {
        id: 32,
        name: 'Viber',
        category: 'Messaging',
        ageRecommendation: 13,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Messaging app with voice and video calls.',
        hasChat: true,
        chatDetails: 'Direct messages, group chats, voice and video calls',
        hasOpenInternet: true,
        internetDetails: 'Stickers, links, and external content',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Viber is popular internationally and uses phone numbers to register. Kids can receive calls and messages from unknown numbers. Less moderation than mainstream apps, so inappropriate content may not be filtered.'
        },
        hiddenDangers: [
            'Uses phone number (can be found online)',
            'Messages from unknown phone numbers',
            'Less moderation of content',
            'Group chats with international strangers',
            'Voice calls from unknown numbers'
        ],
        parentConcerns: {
            contact: 'Phone number is identifier and can be found online',
            unknown: 'Messages from unknown numbers',
            moderation: 'Less content filtering than other apps'
        },
        tipsForParents: [
            'Review who\'s messaging them',
            'Discuss not accepting calls from unknown numbers',
            'Monitor group chat participation',
            'Be aware of less moderation'
        ],
        parentConversationGuide: {
            startWith: '"Who are you talking to on Viber? Are you getting messages from people you know?"',
            keyPoints: [
                'Discuss that phone number can be found online',
                'Talk about not accepting messages from unknowns',
                'Discuss group chat safety'
            ],
            redFlags: [
                'Messages from unknown phone numbers',
                'Being added to international group chats',
                'Voice calls from strangers'
            ],
            scriptOpener: '"Viber uses your phone number which might be searchable online. Let\'s review who\'s contacting you."'
        },
        sources: 'Parent communities'
    },
    {
        id: 33,
        name: 'Valorant',
        category: 'Gaming / Competitive',
        ageRecommendation: 16,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Team-based competitive first-person shooter with voice chat.',
        hasChat: true,
        chatDetails: 'Team voice chat, text chat with all players, ranked competitive',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Valorant is competitive and popular with 13-17 year olds. Voice chat with random teammates from around the world. The competitive nature breeds toxicity. Kids experience racism, sexism, death wishes, and extreme harassment in voice chat. Predators hunt through ranked matchmaking.'
        },
        hiddenDangers: [
            'Extremely toxic voice chat in ranked play',
            'Racist, sexist, and death threat language common',
            'Girls face severe sexual harassment in voice chat',
            'Predators in competitive matches',
            'Sleep deprivation from grinding ranked',
            'Aggressive monetization (battle pass, skins, agents)'
        ],
        parentConcerns: {
            toxicity: 'Extreme harassment in competitive matches',
            harassment: 'Targeting based on race, gender, voice',
            sleep: 'Ranked grind impacts sleep and school',
            exposure: 'Constant toxic language'
        },
        tipsForParents: [
            'Disable voice chat or use mute features',
            'Set strict playtime limits (competitive is addictive)',
            'Discuss toxic behavior and how to respond',
            'Monitor sleep impact',
            'Understand ranked climbing is designed to be addictive'
        ],
        parentConversationGuide: {
            startWith: '"Valorant has competitive voice chat. Let\'s talk about what kind of language you hear."',
            keyPoints: [
                'Discuss toxic behavior in ranked matches',
                'Explain that muting toxic players is OK',
                'Talk about not internalizing harassment',
                'Discuss playtime limits'
            ],
            redFlags: [
                'Staying up late grinding ranked',
                'Extreme emotional reactions to losses',
                'Repeating toxic language they\'ve heard',
                'Sleep deprivation from late-night ranked'
            ],
            scriptOpener: '"Valorant is competitive and people get mean in voice chat. I want to make sure you\'re healthy while playing."'
        },
        sources: 'Gaming communities, Valorant forums'
    },
    {
        id: 34,
        name: 'Apex Legends',
        category: 'Gaming / Battle Royale',
        ageRecommendation: 16,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Free-to-play team-based battle royale game.',
        hasChat: true,
        chatDetails: 'Voice chat with random squad members, ping system',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Apex Legends pairs kids with random teammates worldwide via matchmaking. Voice chat toxicity is significant. The game is free-to-play with aggressive cosmetic monetization. Kids spend hundreds on skins and battle passes. Predators use matchmaking to find young players.'
        },
        hiddenDangers: [
            'Matched with random adult players',
            'Toxic voice chat in matches',
            'Aggressive monetization targeting kids',
            'Kids spend significant money on cosmetics',
            'Predators in matchmaking',
            'Addiction mechanics designed to maximize playtime'
        ],
        parentConcerns: {
            spending: 'Cosmetic monetization targets kids heavily',
            voice: 'Voice chat with random adults',
            predators: 'Matchmaking connects with potential predators',
            addiction: 'Free-to-play designed to be highly addictive'
        },
        tipsForParents: [
            'Monitor cosmetic spending carefully',
            'Require permission for any in-game purchases',
            'Discuss that squad members are random adults',
            'Set strict playtime limits',
            'Understand the monetization targets kids specifically'
        ],
        parentConversationGuide: {
            startWith: '"Tell me about who you\'re playing with on Apex Legends and how much you\'re spending."',
            keyPoints: [
                'Discuss cosmetic spending and how it adds up',
                'Explain that squad members are random strangers',
                'Talk about predators and matchmaking',
                'Discuss addictive design'
            ],
            redFlags: [
                'Unexpected credit card charges',
                'Excessive playtime',
                'Spending on cosmetics secretly',
                'Sleep deprivation from gaming',
                'Emotional investment in cosmetics/skins'
            ],
            scriptOpener: '"Apex Legends is free but expensive to actually play because of cosmetics. Let\'s talk about spending and who you\'re playing with."'
        },
        sources: 'Parent forums, gaming safety'
    },
    {
        id: 35,
        name: 'Call of Duty',
        category: 'Gaming / Shooter',
        ageRecommendation: 17,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Popular multiplayer first-person shooter with online matches.',
        hasChat: true,
        chatDetails: 'Voice chat with team and all players in matches',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Call of Duty is one of the most popular games with kids age 12+. Voice chat is notoriously toxic with racist slurs, homophobic language, and death threats. The game is designed to be highly addictive with seasonal content updates. Kids develop deep friendships with unknown online players.'
        },
        hiddenDangers: [
            'Some of the most toxic voice chat in gaming',
            'Racist, homophobic, sexist slurs extremely common',
            'Death threats and extreme harassment normalized',
            'Parasocial relationships with online teammates',
            'Highly addictive seasonal battle pass system',
            'Girls face severe sexual harassment'
        ],
        parentConcerns: {
            toxicity: 'Among the most toxic gaming communities',
            language: 'Exposure to extreme slurs and harassment',
            relationships: 'Deep friendships with unknown players',
            addiction: 'Seasonal content designed to maximize engagement'
        },
        tipsForParents: [
            'Know this has one of the most toxic communities',
            'Mute all/voice chat disable is essential',
            'Discuss toxic language and why it\'s unacceptable',
            'Monitor for parasocial relationships with online friends',
            'Set strict time limits (seasonal system is addictive)',
            'If girls play, understand they will face sexual harassment'
        ],
        parentConversationGuide: {
            startWith: '"Call of Duty is really popular but has a lot of toxic players. Let\'s talk about what you experience."',
            keyPoints: [
                'Discuss extreme language in the community',
                'Explain that muting is a good strategy',
                'Talk about online friendships and who they really are',
                'Discuss time limits and addiction mechanics'
            ],
            redFlags: [
                'Excessive playtime (8+ hours)',
                'Repeating toxic language they\'ve heard',
                'Sleep deprivation',
                'Emotional reactions to in-game events',
                'Hiding how much they\'re playing'
            ],
            scriptOpener: '"Call of Duty\'s community can be really toxic. I want to make sure you\'re healthy and not internalizing the harassment."'
        },
        sources: 'Gaming communities, parent forums'
    },
    {
        id: 36,
        name: 'Chatroulette',
        category: 'Video Chat / Random',
        ageRecommendation: 18,
        safetyRating: 1,
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Random video chat matching service with no age verification.',
        hasChat: true,
        chatDetails: 'Video chat with completely random strangers',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Chatroulette randomly connects video chats with strangers. No age verification. Adults use it specifically to expose themselves sexually to children. Within seconds, children see explicit sexual content. This is not a safe platform for anyone under 18.'
        },
        hiddenDangers: [
            'Adults specifically use it to expose genitals to kids',
            'Children see explicit sexual content within seconds',
            'No age verification or safety features',
            'No moderation whatsoever',
            'Predators use it to desensitize children',
            'Sexual abuse material may be shared'
        ],
        parentConcerns: {
            exploitation: 'Used specifically to sexually expose children',
            exposure: 'Immediate and unavoidable exposure to explicit content',
            predators: 'Predators hunting for children'
        },
        tipsForParents: [
            'Chatroulette is NOT safe for anyone under 18',
            'Same risks as Omegle',
            'Monitor for any use of random video chat apps',
            'If found, discuss immediately why this is unsafe',
            'Consider parental controls on browser/device'
        ],
        parentConversationGuide: {
            startWith: '"Chatroulette is extremely dangerous. I need to be direct."',
            keyPoints: [
                'Explain that adults specifically use it to expose children',
                'Discuss that sexual content will appear immediately',
                'Explain why this is dangerous and illegal'
            ],
            redFlags: [
                'Any use of Chatroulette',
                'Browser history showing random video chat sites',
                'Secretive about video chat'
            ],
            scriptOpener: '"Chatroulette connects you to random strangers who will expose sexual content to you. Adults use it specifically to sexually harass children. You cannot use this."'
        },
        sources: 'NCMEC, law enforcement, parent communities'
    },
    {
        id: 37,
        name: 'OkCupid',
        category: 'Dating',
        ageRecommendation: 18,
        safetyRating: 2,
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Dating and social networking platform.',
        hasChat: true,
        chatDetails: 'Direct messages with matched users',
        hasOpenInternet: true,
        internetDetails: 'Links in messages and profiles',
        hasLocationTracking: true,
        locationDetails: 'Location used for matching; proximity visible',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'OkCupid is 18+ but age verification is minimal. Adults actively target teenagers on the platform. The app shows proximity enabling local predators to identify and meet victims. Sextortion and exploitation are documented.'
        },
        hiddenDangers: [
            'Age verification broken: used by predators to find teens',
            'Proximity matching enables predators to find victims locally',
            'Sextortion and sexual exploitation common',
            'Adults specifically target younger users',
            'Catfishing and fake profiles',
            'Meeting strangers for dangerous meetups'
        ],
        parentConcerns: {
            predators: 'Adults specifically hunting teenagers',
            location: 'Proximity matching shows where kids are',
            exploitation: 'Sextortion and trafficking'
        },
        tipsForParents: [
            'Monitor for OkCupid or any dating apps on their device',
            'If found, discuss why it\'s dangerous',
            'Explain that adults specifically target teenagers here',
            'Discuss predators and their tactics'
        ],
        parentConversationGuide: {
            startWith: '"OkCupid shows adults who specifically target teenagers. If you\'re using this, we need to talk."',
            keyPoints: [
                'Explain that adults hunt teenagers on dating apps',
                'Discuss how proximity matching works',
                'Talk about sextortion and exploitation'
            ],
            redFlags: [
                'Any use of dating apps under 18',
                'Meeting up with app matches',
                'Requests for photos from matches'
            ],
            scriptOpener: '"Dating apps like OkCupid have adults who specifically target teenagers. They lie about their age. This is not safe for you."'
        },
        sources: 'NCMEC, trafficking organizations'
    },
    {
        id: 38,
        name: 'Bumble',
        category: 'Dating',
        ageRecommendation: 18,
        safetyRating: 2,
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Dating app where women message first.',
        hasChat: true,
        chatDetails: 'Direct messages with matched users',
        hasOpenInternet: true,
        internetDetails: 'Links in messages',
        hasLocationTracking: true,
        locationDetails: 'Location matching and proximity',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Despite marketing as "safer," Bumble has the same vulnerabilities as other dating apps. Age verification is broken. Adults target teenagers. Proximity matching enables predators to find victims. Girls are specifically targeted.'
        },
        hiddenDangers: [
            'Age verification broken despite "safety" marketing',
            'Adults specifically hunt teenagers',
            'Proximity matching enables local predators',
            'Girls face sexual harassment and exploitation',
            'Sextortion common',
            'Predators use it for trafficking'
        ],
        parentConcerns: {
            predators: 'Adults hunting teenagers despite safety marketing',
            location: 'Proximity matching shows where kids are',
            exploitation: 'Especially dangerous for girls'
        },
        tipsForParents: [
            'Bumble is 18+ and not safe for minors despite marketing',
            'Monitor for it on devices',
            'Understand that "women message first" doesn\'t make it safer',
            'Discuss adult predation specifically'
        ],
        parentConversationGuide: {
            startWith: '"Bumble is marketed as safer, but it\'s still a dating app used by predators. Let\'s talk about this."',
            keyPoints: [
                'Explain that marketing as "safer" doesn\'t make it safe',
                'Discuss adults targeting teenagers',
                'Talk about exploitation risks'
            ],
            redFlags: [
                'Using Bumble or any dating app under 18',
                'Meeting up with matches',
                'Requests for photos'
            ],
            scriptOpener: '"Bumble says it\'s safer, but it\'s still a dating app with predators hunting teenagers. You can\'t use this."'
        },
        sources: 'NCMEC, law enforcement, parent communities'
    },
    {
        id: 39,
        name: 'Slack',
        category: 'Messaging / Workplace',
        ageRecommendation: 16,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Team communication platform for work and group collaboration.',
        hasChat: true,
        chatDetails: 'Direct messages, group channels, threaded conversations',
        hasOpenInternet: true,
        internetDetails: 'File sharing, links, integrations',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Slack is meant for workplace use, but kids and teens use it to create group chats and communities. Private workspaces can include anyone. Inappropriate content can spread through channels. Kids may be exposed to workplace conversations they shouldn\'t see.'
        },
        hiddenDangers: [
            'Kids create "workspaces" that are really just friend groups',
            'Private channels can include unknown people',
            'Easily share explicit content through files',
            'Lack of moderation for non-work communities',
            'Kids may access parent/family Slack workspaces',
            'Exposure to workplace conversations'
        ],
        parentConcerns: {
            community: 'Used to create unmoderated group communities',
            exposure: 'Sharing of inappropriate content in channels',
            monitoring: 'Hard to monitor workspace activity'
        },
        tipsForParents: [
            'Review if they\'re in Slack workspaces',
            'Ask about the purpose of their Slack communities',
            'Discuss who\'s in private channels',
            'Monitor for inappropriate content sharing',
            'Make sure they\'re not accessing parent workspaces inappropriately'
        ],
        parentConversationGuide: {
            startWith: '"Tell me about the Slack workspaces you\'re in and what they\'re for."',
            keyPoints: [
                'Discuss who can create workspaces and invite people',
                'Ask about channel membership',
                'Discuss appropriate vs. inappropriate content',
                'Ask who has access to each workspace'
            ],
            redFlags: [
                'Multiple private Slack workspaces',
                'Workspaces with unknown participants',
                'Sharing explicit content',
                'Accessing parent work Slack inappropriately'
            ],
            scriptOpener: '"I want to understand your Slack communities. Who runs them and who\'s in them?"'
        },
        sources: 'Parent communities'
    }
];
