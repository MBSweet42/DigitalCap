// Enhanced App Directory v2 with Safety Ratings & Parent Notes Structure
// Includes our verified safety rating + parent notes system integration

// Safety Rating Scale:
// 🟢 LOW RISK (5+) - Generally safe with parental guidance
// 🟡 MEDIUM RISK (4) - Has some concerns, supervision recommended
// 🟠 HIGH RISK (3) - Notable dangers, close monitoring needed
// 🔴 CRITICAL RISK (1-2) - Significant dangers, careful consideration recommended

const appsDataV2 = [
    {
        id: 1,
        name: 'TikTok',
        category: 'Social Media',
        ageRecommendation: 13,
        safetyRating: 3, // HIGH RISK
        safetyLabel: 'HIGH RISK',
        description: 'Short-form video platform where users create, share, and discover 15-60 second videos.',
        hasChat: true,
        chatDetails: 'Private messaging with anyone the user follows or is followed by; can be restricted.',
        hasOpenInternet: false,
        hasLocationTracking: false,
        mainRisks: [
            'Inappropriate content exposure',
            'Sleep disruption from addictive algorithm',
            'Cyberbullying and negative comments',
            'Pressure to participate in challenges (some dangerous)',
            'Data privacy concerns'
        ],
        privacyNotes: 'Collects extensive data on user behavior, location, and device. Information shared with advertisers.',
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'TikTok\'s algorithm is specifically designed to be addictive. It learns what keeps your child watching and serves more of it. The "For You Page" can quickly escalate from harmless dances to eating disorders, self-harm content, or radicalization. The app knows your child\'s age, location, interests, and health data.'
        },
        hiddenDangers: [
            'Algorithm can recommend harmful content within minutes',
            'Challenges can escalate in danger (ex: blackout challenge)',
            'Predators can message teens claiming to be peers',
            'Comments section allows public harassment',
            'Trends encourage risky behavior for views'
        ],
        tipsForParents: [
            'Review privacy settings and restrict who can message your child',
            'Monitor watch history and suggested videos periodically',
            'Discuss healthy screen time limits',
            'Be aware of viral trends and challenges',
            'Enable Family Pairing to manage account',
            'Know that "For You Page" can change content quickly'
        ],
        tipsForKids: [
            'Don\'t share your location, phone number, or address',
            'Keep your account private if you\'re under 16',
            'Think before you post—videos can be screenshot or saved',
            'Be kind in comments; don\'t participate in bullying',
            'Report inappropriate content or accounts',
            'If a challenge seems dangerous, don\'t do it'
        ],
        parentConversationGuide: {
            startWith: '"I know TikTok is really popular. I\'m not trying to ban it, but I want to understand what you\'re watching."',
            keyPoints: [
                'Ask to see their "For You Page" - don\'t judge, just observe',
                'Discuss how the algorithm works (it learns what keeps them watching)',
                'Talk about challenges - some can be dangerous',
                'Explain why messages from strangers are risky',
                'Set expectations about screen time'
            ],
            redFlags: [
                'Sudden change in mood after using TikTok',
                'Keeping phone hidden or being secretive',
                'Sleep deprivation from late-night use',
                'Obsession with views/likes on own videos'
            ]
        },
        source: 'Common Sense Media, TikTok Safety Center, Parent Reddit discussions'
    },
    {
        id: 2,
        name: 'YouTube',
        category: 'Video Streaming',
        ageRecommendation: 13,
        safetyRating: 3,
        safetyLabel: 'HIGH RISK',
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
        whyThisMatters: {
            title: 'Why This Matters',
            content: 'YouTube\'s algorithm is designed to maximize watch time. It can quickly escalate from educational content to conspiracy theories or harmful challenges. Comments allow anonymous users to send messages. Live streams sometimes lack moderation.'
        },
        hiddenDangers: [
            'Recommendation algorithm can lead to radicalization content',
            'Fake "pranks" that are actually dangerous',
            'Predatory channels targeting young viewers',
            'Scam comments (free Robux, hacks, etc.)',
            'Unmoderated livestreams with inappropriate comments'
        ],
        tipsForParents: [
            'Use YouTube Kids app for children under 13',
            'Enable Restricted Mode for older kids',
            'Monitor watch history weekly',
            'Discuss clickbait and how to spot unreliable information',
            'Set time limits via parental controls',
            'Review subscribed channels periodically'
        ],
        tipsForKids: [
            'Be skeptical of sensational titles and thumbnails',
            'Don\'t click on suspicious links in comments',
            'Never share personal information with creators',
            'Use the "Do Not Recommend Channel" feature',
            'Check if a creator has a verified badge',
            'Report inappropriate comments'
        ],
        parentConversationGuide: {
            startWith: '"What videos are you watching right now? Can you show me?"',
            keyPoints: [
                'Watch a video together and discuss the comments',
                'Show them how to spot clickbait',
                'Talk about the algorithm (recommendations get increasingly extreme)',
                'Discuss verified vs. unverified creators',
                'Set expectations about what\'s appropriate'
            ],
            redFlags: [
                'Watching increasingly extreme or conspiracy content',
                'Obsession with one creator',
                'Defensive about what they\'re watching',
                'Behavioral changes after watching certain content'
            ]
        },
        source: 'Common Sense Media, YouTube Safety, Parent forums'
    },
    // ... (I'll add more apps, but keeping this shorter for now)
    // When the research agent finishes, I'll add the hidden dangers it discovers
];

// Parent Notes System Structure
// Notes are stored locally in localStorage, ready to sync to Firebase later
const parentNotesSystem = {
    version: 1,
    notes: {}, // Populated from localStorage on page load

    // Add a note to an app
    addNote: function(appId, parentName, rating, noteText) {
        if (!this.notes[appId]) {
            this.notes[appId] = [];
        }

        const note = {
            id: Date.now(),
            parentInitials: parentName.substring(0, 2).toUpperCase() || 'P',
            rating: rating, // 1-5 stars
            text: noteText,
            timestamp: new Date().toISOString(),
            verified: false // Only admin can mark as verified
        };

        this.notes[appId].push(note);
        this.saveToLocalStorage();
        return note;
    },

    // Get all notes for an app
    getNotes: function(appId) {
        return this.notes[appId] || [];
    },

    // Calculate average rating from parent notes
    getAverageParentRating: function(appId) {
        const notes = this.getNotes(appId);
        if (notes.length === 0) return null;

        const sum = notes.reduce((acc, note) => acc + note.rating, 0);
        return (sum / notes.length).toFixed(1);
    },

    // Save to localStorage
    saveToLocalStorage: function() {
        localStorage.setItem('digitalSafetyHubNotes', JSON.stringify(this.notes));
    },

    // Load from localStorage
    loadFromLocalStorage: function() {
        const stored = localStorage.getItem('digitalSafetyHubNotes');
        if (stored) {
            this.notes = JSON.parse(stored);
        }
    }
};

// Custom App Entry Structure
// Parents can add apps that aren't in our database
const customAppsSystem = {
    apps: {},

    createCustomApp: function(name, category, parentNotes) {
        const customApp = {
            id: `custom-${Date.now()}`,
            name: name,
            category: category || 'Other',
            isCustom: true,
            createdBy: 'Parent',
            createdDate: new Date().toISOString(),
            parentNotes: parentNotes,
            hasChat: null,
            hasOpenInternet: null,
            hasLocationTracking: null,
            ageRecommendation: null
        };

        this.apps[customApp.id] = customApp;
        this.saveToLocalStorage();
        return customApp;
    },

    saveToLocalStorage: function() {
        localStorage.setItem('digitalSafetyHubCustomApps', JSON.stringify(this.apps));
    },

    loadFromLocalStorage: function() {
        const stored = localStorage.getItem('digitalSafetyHubCustomApps');
        if (stored) {
            this.apps = JSON.parse(stored);
        }
    }
};

// Initialize systems on page load
document.addEventListener('DOMContentLoaded', function() {
    parentNotesSystem.loadFromLocalStorage();
    customAppsSystem.loadFromLocalStorage();
});
