// DigitalCap Practice Challenges
// Interactive scenarios with immediate feedback for kids and parents

const practiceChallengData = {
    'spot-the-scam': {
        title: 'Spot the Scam / Phishing Check',
        description: 'Identify which messages are scams or phishing attempts.',
        icon: '🚨',
        scenarios: [
            {
                id: 1,
                scenario: 'You get a text: "Your Apple account will be closed in 24 hours. Click here to verify your password: [link]"',
                context: 'text message',
                choices: [
                    { label: 'A) Click the link immediately to save your account', correct: false },
                    { label: 'B) Ignore it and go directly to Apple.com to check your account', correct: true },
                    { label: 'C) Reply to the text asking for more info before clicking', correct: false }
                ],
                feedback: {
                    correct: 'This is a phishing scam. Real companies never ask for passwords via text or email. Always go directly to the official website/app.',
                    whyMatters: 'Scammers trick you into clicking malicious links that steal your password. Once they have it, they can access all your accounts and personal info.',
                    parentTip: 'Ask: "Have you ever gotten a message asking you to verify a password or login? What would you do?"'
                }
            },
            {
                id: 2,
                scenario: 'Instagram DM from someone you don\'t know: "OMG I saw your TikTok! You\'re so funny. Check out my video: [link]"',
                context: 'direct message',
                choices: [
                    { label: 'A) Click the link to see their video', correct: false },
                    { label: 'B) Politely decline and don\'t click unknown links', correct: true },
                    { label: 'C) Ask for their TikTok username first, then click', correct: false }
                ],
                feedback: {
                    correct: 'Good choice. Unknown links can contain malware or lead to fake profiles designed to build trust before asking for personal info.',
                    whyMatters: 'This is a common grooming tactic. Predators compliment you to build rapport, then gradually escalate conversations to personal questions.',
                    parentTip: 'Ask: "Has anyone you don\'t know ever DM\'d you with compliments? What did you do?"'
                }
            },
            {
                id: 3,
                scenario: 'Email: "URGENT: You\'ve won a $100 gift card! Claim it now. Just enter your date of birth and last 4 digits of your SSN."',
                context: 'email',
                choices: [
                    { label: 'A) Enter the info quickly before the offer expires', correct: false },
                    { label: 'B) Delete the email - legitimate contests don\'t ask for SSN digits', correct: true },
                    { label: 'C) Ask a friend for their SSN to verify the request', correct: false }
                ],
                feedback: {
                    correct: 'Correct! Real companies never ask for social security numbers via email. This is identity theft.',
                    whyMatters: 'Even partial SSN info can be used to open fraudulent accounts, get loans, or damage your credit.',
                    parentTip: 'Talk about: "Why would a real company ask for your SSN in an email? What personal info should you NEVER share online?"'
                }
            },
            {
                id: 4,
                scenario: 'Snapchat from a friend: "I\'m selling Fortnite skins super cheap! Click here to buy - crypto only"',
                context: 'instant message',
                choices: [
                    { label: 'A) Click the link and complete the crypto purchase', correct: false },
                    { label: 'B) Ask the friend directly (voice/in-person) if they really sent this', correct: true },
                    { label: 'C) Buy a small amount to test if it\'s legit', correct: false }
                ],
                feedback: {
                    correct: 'Good instinct! Your friend\'s account might be hacked. Always verify unusual requests through another method.',
                    whyMatters: 'Scammers hack accounts and impersonate friends to trick you into sending money. Crypto transactions can\'t be reversed.',
                    parentTip: 'Ask: "If a friend asks you to buy something online, what should you do first?"'
                }
            },
            {
                id: 5,
                scenario: 'Reddit post: "I can teach you how to get free Robux! Just watch this video and enter your account info in the comments."',
                context: 'social media',
                choices: [
                    { label: 'A) Follow the instructions to get free Robux', correct: false },
                    { label: 'B) Leave it alone - this is a classic account theft scam', correct: true },
                    { label: 'C) Comment asking for proof before entering your info', correct: false }
                ],
                feedback: {
                    correct: 'Absolutely right. There\'s no legitimate way to get free Robux. Anyone offering it is trying to steal your account.',
                    whyMatters: 'Your Roblox account contains your avatar, items, and payment info. Once stolen, hackers can sell items or make purchases.',
                    parentTip: 'Discuss: "Why do scammers target game accounts? What would happen if someone hacked yours?"'
                }
            }
        ]
    },

    'dm-simulator': {
        title: 'DM & Friend Request Simulator',
        description: 'Practice responding to friend requests and messages from strangers.',
        icon: '💬',
        scenarios: [
            {
                id: 1,
                scenario: 'Random person: "Hi! I saw your profile and think you\'re really cool. Do you go to [Your School Name]?"',
                context: 'Instagram DM from unknown account',
                choices: [
                    { label: 'A) Answer them - they seem friendly and compliment you', correct: false },
                    { label: 'B) Don\'t respond; block if they keep messaging', correct: true },
                    { label: 'C) Ask how they know your school name', correct: false }
                ],
                feedback: {
                    correct: 'Smart. This is a common grooming tactic. Building rapport is the first step before asking for personal info.',
                    whyMatters: 'Predators spend weeks gaining trust, asking increasingly personal questions about your location, relationships, and plans.',
                    parentTip: 'Ask: "Do you accept friend requests from people you don\'t know? What would you do if someone kept messaging you after you didn\'t respond?"'
                }
            },
            {
                id: 2,
                scenario: 'Discord friend request from "xXgamer420Xx" - account is brand new with no profile picture.',
                context: 'Discord',
                choices: [
                    { label: 'A) Accept to see what servers they\'re in', correct: false },
                    { label: 'B) Ignore and don\'t accept stranger requests', correct: true },
                    { label: 'C) Accept but don\'t talk to them', correct: false }
                ],
                feedback: {
                    correct: 'Good judgment. New accounts with no profile info are often bots or people hiding their identity.',
                    whyMatters: 'New accounts can be fake profiles created specifically to target young users in gaming communities.',
                    parentTip: 'Discuss: "Why is a blank profile picture a red flag? Who should you accept friend requests from?"'
                }
            },
            {
                id: 3,
                scenario: 'TikTok DM from someone with 500K followers: "Your dance video is amazing! Can we collab? Message me on Snapchat instead."',
                context: 'TikTok',
                choices: [
                    { label: 'A) Add them on Snapchat - they\'re a popular creator!', correct: false },
                    { label: 'B) Politely decline and keep communication on public platforms only', correct: true },
                    { label: 'C) Ask to see their previous collabs before deciding', correct: false }
                ],
                feedback: {
                    correct: 'Excellent. Requests to move to private platforms are a major red flag, even from accounts that look legitimate.',
                    whyMatters: 'Disappearing messages on Snapchat are specifically chosen because they hide evidence of inappropriate conversations.',
                    parentTip: 'Ask: "Why would someone ask to move a conversation to a private app? What does that tell you about their intentions?"'
                }
            },
            {
                id: 4,
                scenario: 'Roblox: Someone says "Add me on Discord for the private gaming group. It\'s so cool!" and gives you a link.',
                context: 'In-game chat',
                choices: [
                    { label: 'A) Click the Discord link and join the group', correct: false },
                    { label: 'B) Ask a parent before clicking any links from strangers', correct: true },
                    { label: 'C) Check their Roblox profile first', correct: false }
                ],
                feedback: {
                    correct: 'Exactly right. Never click links from people you don\'t know without asking a trusted adult first.',
                    whyMatters: 'Links can lead to malware, fake Discord servers set up to isolate victims, or direct you to inappropriate content.',
                    parentTip: 'Talk about: "What should you do before clicking a link someone online sends you?"'
                }
            },
            {
                id: 5,
                scenario: 'Snapchat from a "friend": "Hey, can you send me a selfie? I want to draw you in my art class."',
                context: 'Snapchat from account claiming to be a schoolmate',
                choices: [
                    { label: 'A) Send a cute selfie - they\'re in your class', correct: false },
                    { label: 'B) Verify with the friend IN PERSON before sending anything', correct: true },
                    { label: 'C) Send a silly face/funny photo instead of a serious one', correct: false }
                ],
                feedback: {
                    correct: 'Perfect response. Accounts can be hacked or faked. Always verify through another method first.',
                    whyMatters: 'Predators and sextortionists request images, then blackmail victims. The account you think is a friend might not be.',
                    parentTip: 'Discuss: "Why is it risky to send photos to anyone online, even if you think you know them? What are the dangers?"'
                }
            }
        ]
    },

    'app-safety': {
        title: 'Is This App Safe? (Permissions & Privacy)',
        description: 'Learn to evaluate apps based on their permissions and privacy risks.',
        icon: '🔒',
        scenarios: [
            {
                id: 1,
                scenario: 'You want to download a new photo editing app. It asks for: camera, photo library, location, contacts, and microphone access.',
                context: 'App permissions request',
                choices: [
                    { label: 'A) Grant all permissions - most apps ask for them', correct: false },
                    { label: 'B) Only grant camera and photo library; deny location, contacts, and microphone', correct: true },
                    { label: 'C) Deny everything and don\'t download the app', correct: false }
                ],
                feedback: {
                    correct: 'Smart! A photo editor doesn\'t need location, contacts, or microphone. Limit permissions to what the app actually uses.',
                    whyMatters: 'Many apps request excessive permissions to track you, sell your data, or access personal info they don\'t need.',
                    parentTip: 'Ask: "Why would a photo editor need access to your contacts? What apps should have location access?"'
                }
            },
            {
                id: 2,
                scenario: 'Game privacy policy says: "We collect your location, browsing history, and will share it with advertising partners."',
                context: 'Before downloading',
                choices: [
                    { label: 'A) Download it - you have nothing to hide', correct: false },
                    { label: 'B) Look for an alternative game with better privacy', correct: true },
                    { label: 'C) Download it but never open the app', correct: false }
                ],
                feedback: {
                    correct: 'Great choice. Sharing location and browsing data with advertisers is risky. Find apps that respect privacy.',
                    whyMatters: 'Advertising companies can build profiles on you used for targeted manipulation. Location data can be sold to third parties.',
                    parentTip: 'Discuss: "Why do some apps collect so much data? What could advertisers do with your location?"'
                }
            },
            {
                id: 3,
                scenario: 'A messaging app doesn\'t mention encryption in its privacy policy. It stores "all messages on our servers permanently."',
                context: 'App description',
                choices: [
                    { label: 'A) Use it - free messaging is useful', correct: false },
                    { label: 'B) Use an app that clearly states end-to-end encryption instead', correct: true },
                    { label: 'C) Use it but never send personal info', correct: false }
                ],
                feedback: {
                    correct: 'Correct. Unencrypted messages mean the company (and hackers) can read your conversations. Choose encrypted options.',
                    whyMatters: 'Without encryption, private conversations can be intercepted, hacked, or sold. Encrypted apps like Signal are safer.',
                    parentTip: 'Ask: "What\'s the difference between encrypted and unencrypted messages? Why does it matter?"'
                }
            },
            {
                id: 4,
                scenario: 'A social media app asks to "sync with your contacts." The fine print says it uploads and stores your entire contact list.',
                context: 'Permission request',
                choices: [
                    { label: 'A) Grant permission - syncing is convenient', correct: false },
                    { label: 'B) Deny permission - your contacts\' info shouldn\'t be uploaded to their servers', correct: true },
                    { label: 'C) Grant it once, then turn it off later', correct: false }
                ],
                feedback: {
                    correct: 'Excellent. Your contacts\' personal info belongs to them, not the app. Don\'t let apps collect and store it.',
                    whyMatters: 'Uploading contacts means the app company has your friends\' phone numbers, emails, and relationships mapped out.',
                    parentTip: 'Talk about: "Why is it a privacy risk if an app uploads your contact list? Whose privacy does that affect?"'
                }
            },
            {
                id: 5,
                scenario: 'You notice a game app has a setting "Share my activity with friends." It\'s defaulted to ON.',
                context: 'In-app settings',
                choices: [
                    { label: 'A) Leave it on - your friends want to know what you\'re playing', correct: false },
                    { label: 'B) Turn it OFF unless you specifically want to share activity', correct: true },
                    { label: 'C) Leave it on but hide which specific games you play', correct: false }
                ],
                feedback: {
                    correct: 'Good instinct. Default-ON tracking is designed to get you to share without thinking. Turn off by default.',
                    whyMatters: 'Apps that default to sharing collect data on your habits, interests, and screen time for profiling and advertising.',
                    parentTip: 'Discuss: "Why do apps default to sharing your data? What should you do with settings like this?"'
                }
            }
        ]
    },

    'family-dilemma': {
        title: 'Family Digital Dilemma',
        description: 'Real-world situations for parents and kids to discuss together.',
        icon: '👨‍👩‍👧',
        scenarios: [
            {
                id: 1,
                scenario: 'Your 12-year-old comes home upset because classmates are making fun of them on TikTok. They want to keep using it to "fit in."',
                context: 'Parent-kid scenario',
                choices: [
                    { label: 'A) "If it\'s hurting you, you need to stop using it."', correct: false },
                    { label: 'B) "Let\'s talk about what\'s happening and explore options together (take a break, change privacy settings, block bullies)."', correct: true },
                    { label: 'C) "Everyone gets bullied online. It\'s not a big deal."', correct: false }
                ],
                feedback: {
                    correct: 'Perfect. Listen first, then explore solutions together. Bullying affects mental health and needs real conversation.',
                    whyMatters: 'Kids who feel heard are more likely to come to you with future problems. Solutions work better when kids help create them.',
                    parentTip: 'Ask your child: "When you feel hurt online, what helps? Do you want to talk about it or take time away from the app?"'
                }
            },
            {
                id: 2,
                scenario: 'Your 14-year-old\'s friend got their account hacked. Now they\'re asking your kid for their password to "help recover it."',
                context: 'Parent-kid scenario',
                choices: [
                    { label: 'A) "Just give them your password - they\'re your friend."', correct: false },
                    { label: 'B) "Tell them no. Even friends should use official recovery processes, not passwords."', correct: true },
                    { label: 'C) "Help them but change your password afterward."', correct: false }
                ],
                feedback: {
                    correct: 'Exactly. Never share passwords, even with friends. Help by contacting support together, not by sharing access.',
                    whyMatters: 'Sharing passwords - even with friends - creates risk of unauthorized access, account takeover, or data theft.',
                    parentTip: 'Talk with your kid: "Would you feel comfortable giving a friend your password? Why or why not?"'
                }
            },
            {
                id: 3,
                scenario: 'Your 16-year-old says "Everyone\'s using Instagram, and if I don\'t use it, I\'ll miss out on social plans." You\'re concerned about screen time and privacy.',
                context: 'Parent-kid scenario',
                choices: [
                    { label: 'A) "Absolutely not. No Instagram."', correct: false },
                    { label: 'B) "Let\'s set specific rules together: privacy settings locked down, time limits, and weekly check-ins."', correct: true },
                    { label: 'C) "Fine, use it, but I\'ll monitor everything you post."', correct: false }
                ],
                feedback: {
                    correct: 'Great approach. Collaboration + boundaries work better than bans or secret monitoring. Build trust.',
                    whyMatters: 'Teenagers want autonomy. When rules make sense to them, they\'re more likely to follow them.',
                    parentTip: 'Ask: "What apps do your friends use? Let\'s set up your account together with the privacy and time settings YOU feel good about."'
                }
            },
            {
                id: 4,
                scenario: 'Your 13-year-old asks if they can play Fortnite online with older teenagers they met in a Discord server.',
                context: 'Parent-kid scenario',
                choices: [
                    { label: 'A) "Sure, gaming is harmless. Have fun!"', correct: false },
                    { label: 'B) "Let\'s learn about who these players are, set voice chat to friends-only, and establish gaming time limits."', correct: true },
                    { label: 'C) "Absolutely not. You can\'t talk to strangers online."', correct: false }
                ],
                feedback: {
                    correct: 'Smart. Don\'t ban it; manage it thoughtfully. Voice chat with strangers in games is a real safety risk.',
                    whyMatters: 'Online gaming communities can be positive, but older players in games targeting kids can be predatory.',
                    parentTip: 'Ask your kid: "Who are these people? Have you talked to them outside of the game? What do they know about you?"'
                }
            },
            {
                id: 5,
                scenario: 'You find out your 15-year-old has been trading in-game items worth hundreds of dollars with online strangers without your permission.',
                context: 'Parent-kid scenario',
                choices: [
                    { label: 'A) "You\'re grounded and losing all gaming privileges."', correct: false },
                    { label: 'B) "Let\'s discuss why you did this, the financial risk, and how to handle money online going forward."', correct: true },
                    { label: 'C) "Just be more careful next time. Don\'t get caught."', correct: false }
                ],
                feedback: {
                    correct: 'Perfect. Stay calm, understand their reasoning, and teach financial responsibility. This is a teaching moment.',
                    whyMatters: 'Harsh punishment pushes kids to hide behavior. Understanding + boundaries creates safer choices long-term.',
                    parentTip: 'Ask: "Why did you feel comfortable trading with strangers? What could go wrong? How should we handle your account going forward?"'
                }
            }
        ]
    }
};

// Initialize challenges
function initializeChallenges() {
    const categoryContainer = document.getElementById('challengeCategories');
    if (!categoryContainer) return;

    Object.keys(practiceChallengData).forEach(categoryKey => {
        const challenge = practiceChallengData[categoryKey];
        const card = document.createElement('div');
        card.className = 'challenge-card';
        card.onclick = () => startChallenge(categoryKey);
        card.innerHTML = `
            <div class="challenge-header">
                <span class="challenge-icon">${challenge.icon}</span>
                <h3>${challenge.title}</h3>
            </div>
            <p>${challenge.description}</p>
            <div class="challenge-footer">
                <span>${challenge.scenarios.length} scenarios</span>
                <button class="btn btn-primary">Start Challenge</button>
            </div>
        `;
        categoryContainer.appendChild(card);
    });
}

// Start a challenge
let currentChallenge = null;
let currentScenarioIndex = 0;
let score = 0;
let scenariosAttempted = [];

function startChallenge(categoryKey) {
    currentChallenge = categoryKey;
    currentScenarioIndex = 0;
    score = 0;
    scenariosAttempted = [];

    document.getElementById('challengeCategories').style.display = 'none';
    document.getElementById('challengeContainer').style.display = 'block';

    showScenario();
}

function showScenario() {
    if (!currentChallenge) return;

    const challenge = practiceChallengData[currentChallenge];
    const scenario = challenge.scenarios[currentScenarioIndex];

    const container = document.getElementById('scenarioDisplay');
    container.innerHTML = `
        <div class="scenario-header">
            <div class="scenario-progress">${currentScenarioIndex + 1} / ${challenge.scenarios.length}</div>
            <div class="scenario-score">Score: ${score}/${challenge.scenarios.length}</div>
        </div>

        <div class="scenario-content">
            <h2>${challenge.title}</h2>
            <div class="scenario-box">
                <p class="scenario-text">"${scenario.scenario}"</p>
                <p class="scenario-context">Context: <strong>${scenario.context}</strong></p>
            </div>

            <div class="choices">
                ${scenario.choices.map((choice, idx) => `
                    <button class="choice-btn" onclick="submitAnswer(${idx}, ${scenario.choices[idx].correct})">
                        ${choice.label}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function submitAnswer(choiceIndex, isCorrect) {
    if (!currentChallenge) return;

    const challenge = practiceChallengData[currentChallenge];
    const scenario = challenge.scenarios[currentScenarioIndex];
    const selectedChoice = scenario.choices[choiceIndex];

    if (isCorrect) score++;

    scenariosAttempted.push({
        scenario: scenario.scenario,
        selected: selectedChoice.label,
        correct: isCorrect,
        feedback: scenario.feedback
    });

    showFeedback(scenario.feedback, isCorrect);
}

function showFeedback(feedback, isCorrect) {
    const container = document.getElementById('scenarioDisplay');
    container.innerHTML = `
        <div class="feedback-box" style="border-left: 4px solid ${isCorrect ? '#2ecc71' : '#e74c3c'};">
            <div class="feedback-header" style="color: ${isCorrect ? '#2ecc71' : '#e74c3c'};">
                ${isCorrect ? '✓ Correct!' : '✗ Not quite'}
            </div>

            <div class="feedback-section">
                <h3>Why This Matters</h3>
                <p>${feedback.whyMatters}</p>
            </div>

            <div class="feedback-section">
                <h3>Parent Discussion Tip</h3>
                <p><em>${feedback.parentTip}</em></p>
            </div>

            <div style="margin-top: 2rem;">
                ${currentScenarioIndex < practiceChallengData[currentChallenge].scenarios.length - 1
                    ? `<button class="btn btn-primary" onclick="nextScenario()">Next Scenario →</button>`
                    : `<button class="btn btn-primary" onclick="showSummary()">See Results →</button>`
                }
            </div>
        </div>
    `;
}

function nextScenario() {
    currentScenarioIndex++;
    showScenario();
}

function showSummary() {
    if (!currentChallenge) return;

    const challenge = practiceChallengData[currentChallenge];
    const totalScenarios = challenge.scenarios.length;
    const percentage = Math.round((score / totalScenarios) * 100);

    const container = document.getElementById('scenarioDisplay');
    container.innerHTML = `
        <div class="summary-box">
            <h2>Challenge Complete!</h2>

            <div class="score-display">
                <div class="score-circle">${percentage}%</div>
                <p>You got <strong>${score} out of ${totalScenarios}</strong> correct.</p>
            </div>

            <div class="summary-feedback">
                ${percentage === 100
                    ? '<p>Perfect! You\'re a digital safety expert!</p>'
                    : percentage >= 80
                    ? '<p>Excellent work! You know the key safety concepts.</p>'
                    : percentage >= 60
                    ? '<p>Good effort! Review the scenarios you missed and try again.</p>'
                    : '<p>Keep practicing! Digital safety skills improve with exposure to real scenarios.</p>'
                }
            </div>

            <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-direction: column;">
                <button class="btn btn-primary" onclick="tryAnotherChallenge()">Try Another Scenario</button>
                <button class="btn btn-secondary" onclick="backToCategories()">Back to Challenges</button>
            </div>
        </div>
    `;
}

function tryAnotherChallenge() {
    currentScenarioIndex = 0;
    score = 0;
    scenariosAttempted = [];
    showScenario();
}

function backToCategories() {
    currentChallenge = null;
    document.getElementById('challengeCategories').style.display = 'grid';
    document.getElementById('challengeContainer').style.display = 'none';
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', initializeChallenges);
