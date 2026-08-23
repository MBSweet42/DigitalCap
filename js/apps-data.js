// App Directory Database - 20 Most Popular Apps for Kids
// Content adapted from Common Sense Media, NCMEC/NetSmartz, FTC, and other trusted sources

const appsData = [
    {
        id: 1,
        name: 'TikTok',
        category: 'Social Media',
        ageRecommendation: 13,
        description: 'Short-form video platform where users create, share, and discover 15-60 second videos.',
        hasChat: true,
        chatDetails: 'Private messaging with anyone the user follows or is followed by; can be restricted.',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'Inappropriate content exposure',
            'Sleep disruption from addictive algorithm',
            'Cyberbullying and negative comments',
            'Pressure to participate in trends',
            'Data privacy concerns'
        ],
        privacyNotes: 'Collects extensive data on user behavior, location, and device. Information shared with advertisers.',
        tipsForParents: [
            'Review privacy settings and restrict who can message your child',
            'Monitor watch history and suggested videos periodically',
            'Discuss healthy screen time limits',
            'Be aware of viral trends and challenges',
            'Enable Family Pairing to manage account'
        ],
        tipsForKids: [
            'Don\'t share your location, phone number, or address',
            'Keep your account private if you\'re under 16',
            'Think before you post—videos can be screenshot or saved',
            'Be kind in comments; don\'t participate in bullying',
            'Report inappropriate content or accounts'
        ],
        source: 'Common Sense Media, TikTok Safety Center'
    },
    {
        id: 2,
        name: 'YouTube',
        category: 'Video Streaming',
        ageRecommendation: 13,
        description: 'Video sharing platform with millions of user-generated and professional videos.',
        hasChat: true,
        chatDetails: 'Comments on videos and community posts; live chat during streams.',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'Exposure to inappropriate content despite age restrictions',
            'Addictive recommendation algorithm',
            'Scams and predatory comments',
            'Misinformation and conspiracy theories'
        ],
        privacyNotes: 'Google collects viewing habits, search history, and location data. Used for targeted ads.',
        tipsForParents: [
            'Use YouTube Kids app for children under 13',
            'Enable Restricted Mode for older kids',
            'Monitor watch history weekly',
            'Discuss clickbait and how to spot unreliable information',
            'Set time limits via parental controls'
        ],
        tipsForKids: [
            'Be skeptical of sensational titles and thumbnails',
            'Don\'t click on suspicious links in comments',
            'Never share personal information with creators',
            'Use the "Do Not Recommend Channel" feature',
            'Check if a creator has a verified badge'
        ],
        source: 'Common Sense Media, YouTube Safety'
    },
    {
        id: 3,
        name: 'YouTube Kids',
        category: 'Video Streaming',
        ageRecommendation: 4,
        description: 'Modified YouTube app designed specifically for younger children with parental controls.',
        hasChat: false,
        chatDetails: 'No chat or messaging features.',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'Some inappropriate content still slips through filters',
            'Screen time management',
            'Limited educational value if not curated'
        ],
        privacyNotes: 'Requires parental Google account; collects less data than regular YouTube.',
        tipsForParents: [
            'Curate watch lists rather than relying solely on recommendations',
            'Use timer feature to limit daily watch time',
            'Watch shows together when possible',
            'Review search history to understand interests',
            'Approve new channels before kids access them'
        ],
        tipsForKids: [
            'Ask permission before searching for new content',
            'Tell an adult if something makes you uncomfortable',
            'Enjoy the content without comparing yourself to creators'
        ],
        source: 'Common Sense Media, YouTube Kids FAQs'
    },
    {
        id: 4,
        name: 'Instagram',
        category: 'Social Media',
        ageRecommendation: 13,
        description: 'Photo and video sharing social network focused on visual content and stories.',
        hasChat: true,
        chatDetails: 'Direct messaging (DMs) with followers; can be restricted to followers only.',
        hasOpenInternet: false,
        hasLocationTracking: true,
        locationDetails: 'Location can be tagged in posts; geolocation features available.',
        mainRisks: [
            'Cyberbullying and negative comments',
            'Comparison and low self-esteem',
            'Predatory behavior via DMs',
            'Inappropriate content',
            'Sleep disruption'
        ],
        privacyNotes: 'Meta (Facebook) collects extensive behavioral data. Targets ads based on activity.',
        tipsForParents: [
            'Keep accounts private until teen years',
            'Review follower list and blocked accounts monthly',
            'Discuss photo sharing safety (never alone, identifying location)',
            'Monitor DMs and encourage reporting of suspicious behavior',
            'Discuss editing culture and unrealistic standards'
        ],
        tipsForKids: [
            'Don\'t accept DMs from strangers',
            'Don\'t tag your location in photos',
            'Think before you post—it can be saved or screenshot',
            'Report accounts that make you feel uncomfortable',
            'Remember that posts can affect your reputation'
        ],
        source: 'Common Sense Media, Instagram Safety'
    },
    {
        id: 5,
        name: 'Snapchat',
        category: 'Messaging & Social Media',
        ageRecommendation: 13,
        description: 'Messaging app focused on ephemeral (disappearing) photos and videos.',
        hasChat: true,
        chatDetails: 'Direct messaging; videos and photos disappear (though can be screenshot).',
        hasOpenInternet: false,
        hasLocationTracking: true,
        locationDetails: 'Snap Map feature shares location with friends; can be turned off.',
        mainRisks: [
            'Illusion that messages disappear (screenshots still possible)',
            'Cyberbullying via messaging',
            'Location sharing risks',
            'Inappropriate content and solicitation',
            'Predatory behavior'
        ],
        privacyNotes: 'Collects location, contacts, and communication data. Limited retention for messages.',
        tipsForParents: [
            'Explain that "disappearing" doesn\'t mean safe',
            'Regularly check if location sharing is enabled',
            'Review Friends list and who can message your child',
            'Use parental monitoring apps to track activity',
            'Discuss the permanence of screenshots'
        ],
        tipsForKids: [
            'Disable Snap Map or limit to close friends only',
            'Don\'t accept snaps from strangers',
            'Assume any photo can be screenshotted',
            'Report and block anyone making you uncomfortable',
            'Never send nude or inappropriate photos'
        ],
        source: 'NCMEC/NetSmartz, Snapchat Safety Tips'
    },
    {
        id: 6,
        name: 'Discord',
        category: 'Messaging & Community',
        ageRecommendation: 13,
        description: 'Communication platform for communities with text, voice, and video channels.',
        hasChat: true,
        chatDetails: 'Direct messaging and group chat; voice and video calls.',
        hasOpenInternet: true,
        internetDetails: 'Users can share links and embed content; direct to external websites.',
        hasLocationTracking: false,
        mainRisks: [
            'Exposure to adult-oriented communities',
            'Harassment and toxic behavior in public channels',
            'Predatory users posing as peers',
            'Inappropriate content and links',
            'Long hours on voice chat'
        ],
        privacyNotes: 'Collects user data and messaging content. Some data shared with advertising partners.',
        tipsForParents: [
            'Discuss what servers/communities are appropriate',
            'Review family sharing settings and control who can contact your child',
            'Check if your child has private servers or is in age-inappropriate ones',
            'Encourage reporting of suspicious behavior',
            'Set expectations about voice chat time limits'
        ],
        tipsForKids: [
            'Don\'t share personal information in public channels',
            'Be cautious of links from people you don\'t know',
            'Leave servers that feel toxic or unsafe',
            'Use privacy settings to limit who can DM you',
            'Report users who harass or make inappropriate requests'
        ],
        source: 'Common Sense Media, Discord Safety'
    },
    {
        id: 7,
        name: 'Roblox',
        category: 'Gaming',
        ageRecommendation: 9,
        description: 'Platform where users play and create 3D games and experiences.',
        hasChat: true,
        chatDetails: 'In-game chat with other players; filtered messaging system.',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'In-game harassment and cyberbullying',
            'Predatory users attempting to move conversations off-platform',
            'In-game spending and scams',
            'Exposure to adult players',
            'Inappropriate user-generated games'
        ],
        privacyNotes: 'Collects game play data and purchases. Limited third-party data sharing.',
        tipsForParents: [
            'Set up account restrictions for younger children',
            'Monitor spending and set Robux limits',
            'Review game ratings and restrictions',
            'Encourage reporting of inappropriate behavior in-game',
            'Discuss which games are age-appropriate'
        ],
        tipsForKids: [
            'Don\'t share your password with anyone',
            'Report bullying immediately',
            'Be skeptical of offers to trade or buy items off-platform',
            'Don\'t fall for scams promising free Robux',
            'Keep your email and phone number private'
        ],
        source: 'Common Sense Media, Roblox Safety'
    },
    {
        id: 8,
        name: 'Minecraft',
        category: 'Gaming',
        ageRecommendation: 8,
        description: 'Sandbox game where players build, explore, and survive in blocky worlds.',
        hasChat: true,
        chatDetails: 'In-game chat on multiplayer servers; optional.',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'Exposure to strangers in multiplayer mode',
            'Cyberbullying on some servers',
            'Time management and addiction risks',
            'Inappropriate mods or content on some servers'
        ],
        privacyNotes: 'Microsoft collects gameplay data and account information. Privacy controls available.',
        tipsForParents: [
            'Play with your child in single-player or private servers',
            'Supervise multiplayer play on public servers',
            'Use "Realms" for safe private multiplayer',
            'Discuss what mods or server rules are okay',
            'Set time limits and encourage breaks'
        ],
        tipsForKids: [
            'Play on private servers with people you know',
            'Don\'t accept trades with strangers',
            'Report bullying to server admins',
            'Keep your Minecraft account secure',
            'Tell an adult if someone asks for personal info'
        ],
        source: 'Common Sense Media, Minecraft Safety'
    },
    {
        id: 9,
        name: 'WhatsApp',
        category: 'Messaging',
        ageRecommendation: 13,
        description: 'Messaging app using internet connection instead of SMS/MMS.',
        hasChat: true,
        chatDetails: 'One-on-one messages and group chats; voice and video calls.',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'Cyberbullying in group chats',
            'Unwanted contact from strangers',
            'Sleep disruption from notifications',
            'Pressure in group dynamics'
        ],
        privacyNotes: 'End-to-end encryption for messages. Meta (Facebook) owns app; collects metadata.',
        tipsForParents: [
            'Help set up privacy settings (who can add to groups)',
            'Monitor group chat memberships',
            'Discuss group chat etiquette',
            'Encourage muting notifications',
            'Review contacts list'
        ],
        tipsForKids: [
            'Don\'t accept chats from people you don\'t know',
            'Leave group chats that feel uncomfortable',
            'Be kind and respectful in group messages',
            'Don\'t share personal information',
            'Mute chat notifications to avoid sleep disruption'
        ],
        source: 'NetSmartz, WhatsApp Safety'
    },
    {
        id: 10,
        name: 'Messenger Kids',
        category: 'Messaging',
        ageRecommendation: 6,
        description: 'Messaging app designed for children under 13 with parent oversight.',
        hasChat: true,
        chatDetails: 'Messaging with approved contacts only; filtered vocabulary.',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'Still requires parent oversight despite controls',
            'Contact list must be parent-approved'
        ],
        privacyNotes: 'Parent has full visibility into messages. Limited data collection.',
        tipsForParents: [
            'Carefully approve all contacts before child uses',
            'Review conversations regularly',
            'Teach basic digital citizenship',
            'Set time limits on usage',
            'Use as a transition before other messaging apps'
        ],
        tipsForKids: [
            'Only message people Mom/Dad has approved',
            'Be kind and respectful',
            'Tell an adult if someone says something confusing',
            'Don\'t share personal information'
        ],
        source: 'Meta/Facebook, Messenger Kids Info'
    },
    {
        id: 11,
        name: 'BeReal',
        category: 'Social Media',
        ageRecommendation: 13,
        description: 'App that sends random notifications to post unfiltered photos at the same time.',
        hasChat: true,
        chatDetails: 'Comment and direct message features.',
        hasOpenInternet: false,
        hasLocationTracking: true,
        locationDetails: 'Can show general location in posts.',
        mainRisks: [
            'Unfiltered photos location and timing',
            'Cyberbullying through comments',
            'Predatory messaging',
            'Less curated content leads to exposure to inappropriate material',
            'Comparison with unfiltered photos of peers'
        ],
        privacyNotes: 'Collects location and photos. Minimal user controls compared to other platforms.',
        tipsForParents: [
            'Understand the "unfiltered" premise and discuss privacy',
            'Monitor who can view your child\'s posts',
            'Discuss the risks of location-tagging',
            'Check friend list regularly',
            'Review comments and DMs'
        ],
        tipsForKids: [
            'Be aware that photos show your location and time',
            'Only accept friend requests from people you know',
            'Don\'t share your username with strangers',
            'Report mean comments immediately',
            'Remember that "unfiltered" doesn\'t mean you have to participate'
        ],
        source: 'Common Sense Media, BeReal Safety'
    },
    {
        id: 12,
        name: 'Twitch',
        category: 'Video Streaming & Gaming',
        ageRecommendation: 13,
        description: 'Live streaming platform focused on gaming, creative content, and communities.',
        hasChat: true,
        chatDetails: 'Live chat during streams; public and moderated.',
        hasOpenInternet: true,
        internetDetails: 'Links shared by streamers and viewers.',
        hasLocationTracking: false,
        mainRisks: [
            'Exposure to adult content and language in live chat',
            'Predatory behavior in chats and DMs',
            'Parasocial relationships with streamers',
            'Pressure to donate/subscribe',
            'Cyberbullying in chats'
        ],
        privacyNotes: 'Amazon (owner) collects viewing and interaction data.',
        tipsForParents: [
            'Monitor which streamers your child follows',
            'Check stream content ratings before allowing viewing',
            'Discuss the difference between streamer and friendship',
            'Set donation limits',
            'Review moderators and block lists'
        ],
        tipsForKids: [
            'Don\'t donate or subscribe without parent permission',
            'Never share personal information in chat',
            'Mute or close chat if it becomes toxic',
            'Remember streamers don\'t know you personally',
            'Report inappropriate behavior to stream moderators'
        ],
        source: 'Common Sense Media, Twitch Safety'
    },
    {
        id: 13,
        name: 'Reddit',
        category: 'Social Media',
        ageRecommendation: 13,
        description: 'Forum-based social platform organized by communities (subreddits) on every topic.',
        hasChat: true,
        chatDetails: 'Comment on posts and direct messaging.',
        hasOpenInternet: true,
        internetDetails: 'Links embedded throughout; direct to external websites.',
        hasLocationTracking: false,
        mainRisks: [
            'Access to adult, violent, or hateful communities',
            'Misinformation and conspiracy theories',
            'Harassment and trolling',
            'Exposure to scams',
            'Anonymous nature encourages inappropriate behavior'
        ],
        privacyNotes: 'Limited privacy controls; content can be permanently indexed.',
        tipsForParents: [
            'Discuss which subreddits are age-appropriate',
            'Use Reddit\'s content filter and safe mode',
            'Monitor posts and comments',
            'Discuss critical thinking about information',
            'Set expectations about anonymity dangers'
        ],
        tipsForKids: [
            'Use Safe Mode to filter NSFW content',
            'Join communities moderated by responsible people',
            'Don\'t share personal information or location',
            'Be skeptical of information without sources',
            'Report harassment to moderators'
        ],
        source: 'Common Sense Media'
    },
    {
        id: 14,
        name: 'Facebook',
        category: 'Social Media',
        ageRecommendation: 13,
        description: 'Social network for connecting with friends and family, sharing updates and content.',
        hasChat: true,
        chatDetails: 'Messenger app integration; group chats and one-on-one messages.',
        hasOpenInternet: false,
        hasLocationTracking: true,
        locationDetails: 'Can check in and tag locations; geolocation available.',
        mainRisks: [
            'Cyberbullying and mean comments',
            'Predatory contact',
            'Over-sharing personal information',
            'Excessive screen time',
            'Scams and misinformation'
        ],
        privacyNotes: 'Meta collects extensive user data, behavior, and location. Uses for targeted ads.',
        tipsForParents: [
            'Keep account private until older teens',
            'Review friend list and blocking settings',
            'Monitor what\'s posted and tagged',
            'Discuss privacy settings regularly',
            'Check timeline and what others can see'
        ],
        tipsForKids: [
            'Don\'t accept friend requests from strangers',
            'Don\'t check in or tag your location',
            'Think before you post or comment',
            'Adjust privacy settings so only friends can see posts',
            'Report bullying immediately'
        ],
        source: 'Common Sense Media, Facebook Safety'
    },
    {
        id: 15,
        name: 'X (formerly Twitter)',
        category: 'Social Media',
        ageRecommendation: 13,
        description: 'Platform for sharing short messages, news, and engaging in public conversation.',
        hasChat: true,
        chatDetails: 'Direct messaging with accounts you follow or are followed by.',
        hasOpenInternet: true,
        internetDetails: 'Links embedded in tweets; direct to external websites.',
        hasLocationTracking: false,
        mainRisks: [
            'Exposure to hate speech and toxic behavior',
            'Cyberbullying and harassment',
            'Misinformation spreads quickly',
            'Predatory behavior via DMs',
            'Pressure from public replies'
        ],
        privacyNotes: 'Limited tweet privacy options. Data used for targeted ads.',
        tipsForParents: [
            'Keep account private',
            'Monitor who follows and who your child follows',
            'Discuss misinformation and fact-checking',
            'Review DMs and blocked accounts',
            'Discuss the permanence of posts'
        ],
        tipsForKids: [
            'Keep account private until older',
            'Don\'t reply to aggressive or hostile tweets',
            'Block and report harassers',
            'Verify information before retweeting',
            'Don\'t DM people you don\'t know'
        ],
        source: 'Common Sense Media'
    },
    {
        id: 16,
        name: 'Telegram',
        category: 'Messaging',
        ageRecommendation: 13,
        description: 'Messaging app emphasizing speed and privacy with cloud-based storage.',
        hasChat: true,
        chatDetails: 'Encrypted messaging, group chats, and channels (broadcast-style).',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'Popular for secret chats (harder to monitor)',
            'Groups with unmoderated inappropriate content',
            'Predatory users',
            'Less parental oversight available'
        ],
        privacyNotes: 'End-to-end encryption available. Cloud backups accessible without encryption.',
        tipsForParents: [
            'Understand encryption and its role',
            'Review groups and channels your child joins',
            'Discuss privacy mode vs. regular chats',
            'Set expectations about appropriate contacts',
            'Encourage reporting of suspicious accounts'
        ],
        tipsForKids: [
            'Don\'t join unmoderated groups',
            'Don\'t accept messages from strangers',
            'Be aware of who can see your profile',
            'Report spam and suspicious accounts',
            'Don\'t share personal information'
        ],
        source: 'NCMEC, Telegram Safety Concerns'
    },
    {
        id: 17,
        name: 'Fortnite',
        category: 'Gaming',
        ageRecommendation: 12,
        description: 'Online battle royale game with building mechanics and team-based gameplay.',
        hasChat: true,
        chatDetails: 'Voice chat with teammates; in-game messaging.',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'Exposure to toxic players and language',
            'In-game spending (Battle Pass, skins)',
            'Addiction and long play sessions',
            'Cyberbullying from teammates',
            'Predatory users in voice chat'
        ],
        privacyNotes: 'Epic Games collects game data and purchase history.',
        tipsForParents: [
            'Set time limits and enforce breaks',
            'Discuss in-game purchases before allowing',
            'Use voice chat settings to limit who can communicate',
            'Play together periodically',
            'Monitor playtime and engagement'
        ],
        tipsForKids: [
            'Don\'t voice chat with strangers',
            'Ask permission before making purchases',
            'Mute players being toxic or rude',
            'Report inappropriate behavior',
            'Balance gaming with other activities'
        ],
        source: 'Common Sense Media, Fortnite Safety'
    },
    {
        id: 18,
        name: 'Life360',
        category: 'Location & Safety',
        ageRecommendation: 13,
        description: 'Family location sharing app that tracks family members\' locations in real-time.',
        hasChat: true,
        chatDetails: 'In-app messaging and notifications.',
        hasOpenInternet: false,
        hasLocationTracking: true,
        locationDetails: 'Constantly tracks real-time location; shows geofencing zones.',
        mainRisks: [
            'Privacy concerns for teens',
            'Over-reliance on monitoring instead of trust-building',
            'Battery drain',
            'Inaccuracy issues'
        ],
        privacyNotes: 'Collects continuous location data. Data protected with encryption.',
        tipsForParents: [
            'Use as safety tool for young children',
            'Have conversations about privacy as kids age',
            'Set expectations about when location will be shared',
            'Don\'t rely solely on app for safety monitoring',
            'Discuss geofencing zones together'
        ],
        tipsForKids: [
            'Understand your parents use this for safety',
            'Know you can discuss privacy concerns',
            'Keep your phone charged',
            'Don\'t share your location with non-family'
        ],
        source: 'Common Sense Media, Life360 Safety'
    },
    {
        id: 19,
        name: 'VSCO',
        category: 'Photo Sharing & Social Media',
        ageRecommendation: 13,
        description: 'Photo editing and sharing app focused on artistic filters and community.',
        hasChat: false,
        chatDetails: 'No direct messaging; likes and comments only.',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'Photos can appear in public feeds',
            'Cyberbullying through comments',
            'Attracting followers for wrong reasons',
            'Excessive focus on aesthetics'
        ],
        privacyNotes: 'Can make account private; limited data collection compared to other platforms.',
        tipsForParents: [
            'Set account to private',
            'Monitor followers and comments',
            'Discuss healthy social media use',
            'Review posted photos',
            'Encourage diverse interests'
        ],
        tipsForKids: [
            'Keep account private',
            'Only approve followers you know',
            'Remember posts are permanent',
            'Report mean comments',
            'Don\'t share personal information in bio'
        ],
        source: 'Common Sense Media'
    },
    {
        id: 20,
        name: 'Threads',
        category: 'Social Media',
        ageRecommendation: 13,
        description: 'Text-based social platform by Meta designed as an alternative to X (Twitter).',
        hasChat: true,
        chatDetails: 'Public replies and direct messaging.',
        hasOpenInternet: true,
        internetDetails: 'Links embedded in posts.',
        hasLocationTracking: false,
        mainRisks: [
            'Public nature exposes personal thoughts to strangers',
            'Cyberbullying through replies',
            'Harassment and toxic conversations',
            'Misinformation',
            'Predatory messaging'
        ],
        privacyNotes: 'Meta collects user data and conversation metadata.',
        tipsForParents: [
            'Keep account private',
            'Monitor who can reply and DM',
            'Review public posts regularly',
            'Discuss before posting personal thoughts',
            'Check follower list'
        ],
        tipsForKids: [
            'Keep account private',
            'Think before posting about personal matters',
            'Don\'t engage with mean replies',
            'Block and report harassers',
            'Don\'t DM strangers'
        ],
        source: 'Meta/Threads Safety, Common Sense Media'
    }
];
