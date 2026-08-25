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
        description: 'Short-form video platform with aggressive algorithm and mental health impacts.',
        hasChat: true,
        chatDetails: 'Private messaging with followers; easily accessible to strangers',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'TikTok\'s recommendation system uses signals such as watch time, likes, shares, and other interactions to personalize the For You feed. That personalization can sometimes create repetitive or narrow content patterns, including around sensitive topics like eating disorders, sadness, or dangerous trends. Parents should periodically ask what their child is seeing and how it makes them feel.'
        },
        hiddenDangers: [
            'Algorithm aggressively pushes inappropriate content (sexual, violence, profanity) despite claims of safety filters',
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
        sources: 'Common Sense Media, NCBI (eating disorders/social media), parent communities, Reddit r/parenting'
    },
    {
        id: 2,
        name: 'Snapchat',
        category: 'Messaging',
        ageRecommendation: 13,
        safetyRating: 2, // CRITICAL RISK
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Messaging app with disappearing messages and location sharing; predator-friendly design.',
        hasChat: true,
        chatDetails: 'DMs with anyone; messages disappear (but can be screenshot)',
        hasOpenInternet: false,
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
        sources: 'NCMEC/NetSmartz, parenting forums, Snapchat safety reports, Reddit r/parenting'
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
        sources: 'Texas Attorney General lawsuit and Agreed Temporary Injunction (2026), NCMEC, parenting communities'
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
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Roblox faces two distinct dangers: (1) Financial scams targeting kids, with reports of significant real-money losses; (2) Predator gateway to Discord for grooming. Violent online networks often referred to as 764 use Roblox for initial contact, then move to manipulation, coercion, and exploitation tactics.'
        },
        hiddenDangers: [
            'In-game chat leads to predator contact; predators move conversations to Discord',
            'Sophisticated scam networks specifically targeting kids',
            'Kids have lost significant money to Roblox scams, including savings set aside for other purposes',
            'Scam networks on Roblox sometimes involve young perpetrators targeting peers through phishing, fake trading, and account hijacking',
            'Violent online networks (commonly referred to as 764) documented using Roblox for initial contact, then moving to manipulation and sextortion',
            'In-game content moderation failure: racist, violent, sexual content slips through'
        ],
        parentConcerns: {
            scams: 'Kids losing real money to phishing scams and sophisticated scam networks',
            predators: 'Roblox→Discord pipeline; predators build rapport in-game then move to private Discord DMs',
            spending: 'Easy to spend real money (Robux) without parent awareness; kids spend parents\' money',
            grooming: 'Violent online networks often referred to as 764 documented grooming and coercing minors for sexual content'
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
        sources: 'FBI findings on violent online networks, Roblox scam reports, parenting communities'
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
        sources: 'Qustodio, Safes.so, parenting communities, security researchers'
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
        sources: 'YouTube Safety, Common Sense Media, parent communities'
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
            content: 'Instagram is specifically designed to trigger social comparison and FOMO. The platform profits when kids spend more time seeking validation through likes and comments. Direct messages from strangers can lead to grooming. The algorithm amplifies appearance-focused and eating disorder content.'
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
        sources: 'Common Sense Media, NCBI, parent communities'
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
            predators: 'Predators actively hunt vulnerable kids in mental health subreddits',
            radicalization: 'Pathways from loneliness → "supportive" communities → radicalization',
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
        sources: 'NCMEC, parenting communities, Reddit safety reports'
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
        sources: 'BeReal official privacy policy, parenting communities'
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
        sources: 'Yubo official privacy policy and age requirements, parenting communities'
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
        sources: 'Common Sense Media, parenting communities'
    },
    {
        id: 12,
        name: 'Canva',
        category: 'Creative Tool',
        ageRecommendation: 10,
        safetyRating: 3, // HIGH RISK (for web access)
        safetyLabel: '🟠 HIGH RISK (Web Access)',
        description: 'Design app used in schools with built-in web access to YouTube, Google, and image libraries.',
        hasChat: false,
        chatDetails: 'No messaging, but has collaboration features and community comments',
        hasOpenInternet: true,
        internetDetails: 'Built-in browser for image/music search; direct access to YouTube, Google, Unsplash, and any website',
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Canva is commonly assigned in schools and parents don\'t realize it has full web browser access. Kids can access YouTube, Google, TikTok, and any site directly through Canva\'s search. The embedded browser bypasses parental controls because it\'s not a separate "browser" app: parents monitor Chrome but Canva\'s internal browser is invisible.'
        },
        hiddenDangers: [
            'Built-in browser completely bypasses parental monitoring software',
            'Direct access to YouTube (can watch anything)',
            'Image/music search pulls from entire internet: can find adult content',
            'Can access Google, TikTok, Instagram, Discord, and any site through embedded browser',
            'Parents assume "school app" means safe: it\'s not monitored like regular browser',
            'Collaboration feature allows external users to comment and message',
            'Search history not visible in parental control dashboards'
        ],
        parentConcerns: {
            bypass: 'Built-in browser completely circumvents parental controls',
            youtube: 'Direct YouTube access without parental restrictions',
            search: 'Image/music search has no content filtering',
            assumption: 'Parents trust it because it\'s school-assigned'
        },
        tipsForParents: [
            'Know that Canva = full web access (YouTube, Google, TikTok, etc.)',
            'Check what your teen is actually searching for in Canva',
            'Discuss that the app can access YouTube without school restrictions',
            'Use parental software that monitors ALL internet activity (Bark, Net Nanny), not just specific apps',
            'Consider: if you\'re monitoring Chrome but not Canva, they can bypass you entirely',
            'Disable collaboration features if possible'
        ],
        parentConversationGuide: {
            startWith: '"I know you use Canva for school, but I realized it has YouTube and web access built in. Let\'s talk about that."',
            keyPoints: [
                'Explain that Canva can access YouTube without school restrictions',
                'Discuss that the search function pulls from entire internet',
                'Talk about responsibility when using web access for schoolwork',
                'Explain that you monitor the browser but not Canva\'s internal browser'
            ],
            redFlags: [
                'Spending excessive time in Canva outside of schoolwork',
                'Secretive behavior about Canva projects',
                'Using Canva to search for content unrelated to school',
                'Known YouTubers or social media accounts appearing in "recent searches"'
            ],
            scriptOpener: '"Canva has YouTube and the whole internet built in. I need to make sure you\'re using it for schoolwork, not scrolling YouTube or TikTok through the app. Fair?"'
        },
        sources: 'Parent communities, Canva feature documentation, parenting forums'
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
        sources: 'Facebook/Meta safety resources'
    },
    {
        id: 14,
        name: 'Life360',
        category: 'Safety & Location',
        ageRecommendation: 8,
        safetyRating: 5, // LOW RISK (for location)
        safetyLabel: '🟢 LOW RISK (Location)',
        description: 'Family location sharing app designed for parental supervision.',
        hasChat: false,
        chatDetails: 'No messaging in main app, but has in-app communication',
        hasOpenInternet: false,
        hasLocationTracking: true,
        locationDetails: 'Real-time GPS location sharing with family members',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Life360 is designed specifically for families to track each other\'s location safely. It can help parents know where their kids are and if they\'re safe. Main risk: location data is valuable to bad actors if hacked; kids might disable it or find ways to spoof location.'
        },
        hiddenDangers: [
            'Data breach exposes location history of minors',
            'Kids can spoof location with VPN/proxy',
            'Family members might share location data inappropriately',
            'Gives false sense of security: doesn\'t monitor what kids are actually doing'
        ],
        parentConcerns: {
            privacy: 'Location history stored; potential breach risk',
            spoofing: 'Kids can disable or spoof location',
            security: 'No guarantee location is accurate'
        },
        tipsForParents: [
            'Use Life360 as part of trust, not as the only safety tool',
            'Discuss why you\'re using it (safety, not control)',
            'Know that kids might disable or spoof location',
            'Don\'t rely solely on location; maintain open communication too'
        ],
        parentConversationGuide: {
            startWith: '"I want to use Life360 so I know you\'re safe. I\'m not trying to control you; I just want to help if you ever need me."',
            keyPoints: [
                'Explain that location sharing works both ways',
                'Discuss emergency situations where this helps',
                'Make it a safety tool, not a control tool'
            ],
            redFlags: [
                'Child constantly disabling location',
                'Location data showing places they said they weren\'t',
                'Child asking to delete the app'
            ],
            scriptOpener: '"I want to make sure you\'re safe. Can we use Life360 so I know where you are? It helps me help you if you need me."'
        },
        sources: 'Life360 documentation'
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
        sources: 'Parent communities, Twitch safety reports'
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
        sources: 'Parent communities, Twitter safety reports'
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
        sources: 'Parent communities'
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
        sources: 'NCMEC, law enforcement reports, parent communities'
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
        sources: 'Parent communities, gaming safety reports'
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
        sources: 'Common Sense Media, parent communities'
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
        sources: 'Parent communities, gaming safety reports'
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
        sources: 'Parent communities, gaming safety reports'
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
        sources: 'Gaming communities, parent forums'
    },
    {
        id: 25,
        name: 'Omegle',
        category: 'Video Chat / Random',
        ageRecommendation: 18,
        safetyRating: 1,
        safetyLabel: '🔴 CRITICAL RISK',
        description: 'Random video chat with anonymous strangers with no age verification.',
        hasChat: true,
        chatDetails: 'Text or video chat with completely random anonymous users',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Omegle is designed for meeting random strangers. No age verification. Adults specifically use it to sexually exploit children. Children are often exposed to explicit sexual content within seconds. This is not a safe app for anyone under 18, period.'
        },
        hiddenDangers: [
            'Adults specifically use Omegle to find and exploit children',
            'Explicit sexual content shown immediately to kids',
            'Kids exposed to penis/sexual content in seconds',
            'No verification of age or identity',
            'Predators record conversations for sextortion',
            'No moderation or safety features',
            'Screenshots/recordings used for blackmail'
        ],
        parentConcerns: {
            exploitation: 'Designed for sexual exploitation of children',
            exposure: 'Immediate exposure to explicit sexual content',
            predators: 'Adults hunting for children',
            sextortion: 'Recording used for blackmail'
        },
        tipsForParents: [
            'Omegle is NOT safe for anyone under 18+',
            'Strongly discourage use entirely',
            'Monitor for Omegle use (often hidden)',
            'If they use it, they will see explicit sexual content',
            'Know that recordings are used for sextortion'
        ],
        parentConversationGuide: {
            startWith: '"Omegle is extremely dangerous. I need to be direct about this."',
            keyPoints: [
                'Explain that Omegle is used by predators to exploit kids',
                'Discuss that sexual content will appear immediately',
                'Explain sextortion and recording risks',
                'Discuss why random strangers are dangerous'
            ],
            redFlags: [
                'Any use of Omegle',
                'Secretive behavior about video chat',
                'Browser history showing Omegle',
                'Talk of "random chat" or "stranger" apps'
            ],
            scriptOpener: '"Omegle is where predators hunt children. Adults use it specifically to expose kids to sexual content and exploit them. You cannot use this app."'
        },
        sources: 'NCMEC, law enforcement, parent communities'
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
        sources: 'NCMEC, trafficking reports, law enforcement'
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
            content: 'Kik is known as a predator app. Anonymous accounts, no phone number required, and encrypted. Predators specifically target kids on Kik. Sextortion, explicit solicitation, and exploitation are documented. It\'s particularly popular with traffickers and predators because of the anonymity.'
        },
        hiddenDangers: [
            'Anonymous accounts with no verification',
            'Specifically marketed as place to meet people',
            'Predators specifically hunt on Kik',
            'Sextortion and explicit solicitation common',
            'No account recovery if compromised',
            'Difficult for parents to monitor',
            'Kids can be added to group chats with predators'
        ],
        parentConcerns: {
            predators: 'App known specifically for predator activity',
            anonymity: 'No way to verify who kids are talking to',
            sextortion: 'Common predatory behavior on platform',
            exploitation: 'Used for human trafficking'
        },
        tipsForParents: [
            'If you find Kik on their phone, it\'s a red flag',
            'Kik is not necessary for communication with friends',
            'Discuss why anonymous apps are dangerous',
            'Monitor for Kik and similar anonymous apps',
            'Know that predators specifically use Kik'
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
        sources: 'NCMEC, law enforcement, parent communities'
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
        sources: 'Parent communities, safety advocates'
    },
    {
        id: 29,
        name: 'Houseparty',
        category: 'Video Chat / Gaming',
        ageRecommendation: 13,
        safetyRating: 3,
        safetyLabel: '🟠 HIGH RISK',
        description: 'Video group chat app with integrated games.',
        hasChat: true,
        chatDetails: 'Group video chat with up to 8 people',
        hasOpenInternet: false,
        hasLocationTracking: false,
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'Houseparty allows video chat with groups of people. Kids can be added to group calls with strangers. Safety features are minimal. Screen sharing and recording happen without clear notification. Adults have used Houseparty to meet and exploit children.'
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
        sources: 'Parent communities'
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
        hasOpenInternet: false,
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
