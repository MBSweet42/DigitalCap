// Digital Safety Quiz System
// Comprehensive, extensive quizzes with multiple variations
// Each quiz has 3-4 variations with different questions

const quizzes = {
    digitalSafety: {
        title: "Digital Safety Basics",
        description: "Test your knowledge of staying safe online!",
        difficulty: "Beginner",
        icon: "🛡️",
        variations: [
            {
                id: 1,
                questions: [
                    {
                        question: "Which is a RED FLAG in an online conversation?",
                        options: [
                            "Someone asking for your age and school name",
                            "A friend asking how your day was",
                            "A classmate inviting you to play a game",
                            "Your teacher sharing homework updates"
                        ],
                        correct: 0,
                        explanation: "Never share personal information like your name, school, or location with people you don't know online."
                    },
                    {
                        question: "If someone online asks you for a picture, what should you do?",
                        options: [
                            "Send it if they seem nice",
                            "Ask a trusted adult first",
                            "Say NO and tell a trusted adult",
                            "Ignore the message and keep talking to them"
                        ],
                        correct: 2,
                        explanation: "NEVER send pictures to people online, even if you think you know them. Always tell a trusted adult immediately."
                    },
                    {
                        question: "What does a 'digital footprint' mean?",
                        options: [
                            "Actual footprints you leave on your phone",
                            "Everything you do online - posts, comments, likes, searches",
                            "Pictures of your feet online",
                            "The number of followers you have"
                        ],
                        correct: 1,
                        explanation: "Your digital footprint is everything you do online. It's permanent and people can see it!"
                    },
                    {
                        question: "If you get a mean message online, you should:",
                        options: [
                            "Send a mean message back",
                            "Block them and tell a trusted adult",
                            "Keep it secret so no one worries",
                            "Try to find out who sent it"
                        ],
                        correct: 1,
                        explanation: "It's never your fault. Block them, screenshot it, and tell a trusted adult immediately."
                    },
                    {
                        question: "Which is a SAFE online interaction?",
                        options: [
                            "A stranger asking where you go to school",
                            "Someone saying they'll be your special friend if you don't tell your parents",
                            "A real-life friend inviting you to play a game online",
                            "Someone asking for your home address"
                        ],
                        correct: 2,
                        explanation: "Only interact with people you actually know in real life online. Real friends never ask you to keep secrets from parents."
                    }
                ]
            },
            {
                id: 2,
                questions: [
                    {
                        question: "What is 'grooming'?",
                        options: [
                            "Taking a shower",
                            "An adult building trust with a young person to manipulate them",
                            "Getting a haircut",
                            "Making friends with people your age"
                        ],
                        correct: 1,
                        explanation: "Grooming is when an adult slowly builds trust to manipulate someone. Watch for excessive compliments, secrecy, and isolation."
                    },
                    {
                        question: "If something online makes you feel uncomfortable, you should:",
                        options: [
                            "Keep it secret",
                            "Trust your gut feeling and tell a trusted adult",
                            "Ignore it and hope it goes away",
                            "Ask your friends what to do"
                        ],
                        correct: 1,
                        explanation: "Your feelings are SMART. If something feels wrong, it probably is. Tell a trusted adult right away."
                    },
                    {
                        question: "Which privacy setting is BEST?",
                        options: [
                            "Make your account public so everyone can see you",
                            "Make your account private - only friends can see posts",
                            "Don't use privacy settings at all",
                            "Share your password with your best friend"
                        ],
                        correct: 1,
                        explanation: "Keep your accounts PRIVATE. Only your real friends should be able to see your posts and personal information."
                    },
                    {
                        question: "What's a 'scam'?",
                        options: [
                            "A video game",
                            "A fake message trying to trick you into giving information or money",
                            "A type of social media",
                            "A way to make friends online"
                        ],
                        correct: 1,
                        explanation: "Scams use tricks like urgency, too-good-to-be-true offers, and fake urgent requests to trick you."
                    },
                    {
                        question: "You can ALWAYS tell a trusted adult if:",
                        options: [
                            "You did something wrong online",
                            "Someone is acting concerning",
                            "You feel unsafe or uncomfortable",
                            "All of the above"
                        ],
                        correct: 3,
                        explanation: "Adults want to help and keep you safe. You're NEVER in trouble for telling them about online problems."
                    }
                ]
            },
            {
                id: 3,
                questions: [
                    {
                        question: "When is it okay to share your location online?",
                        options: [
                            "Only with best friends",
                            "Never with strangers",
                            "Only with verified accounts",
                            "When using location features on apps"
                        ],
                        correct: 1,
                        explanation: "NEVER share your real location with people online. Predators use this information to find you in real life."
                    },
                    {
                        question: "What should you do if someone asks to keep your friendship secret?",
                        options: [
                            "It's okay - lots of friendships are private",
                            "Tell them yes to keep them happy",
                            "STOP talking to them and tell a trusted adult",
                            "Ask your parents first"
                        ],
                        correct: 2,
                        explanation: "Real friends and safe adults don't ask you to keep secrets from your parents. This is a major warning sign."
                    },
                    {
                        question: "How often should you check your privacy settings?",
                        options: [
                            "Once a year",
                            "Never - they don't change",
                            "Every few months or when apps update",
                            "Only if you think there's a problem"
                        ],
                        correct: 2,
                        explanation: "Apps change their privacy settings frequently. Check them regularly to make sure your account stays private."
                    },
                    {
                        question: "What's the best response to a message from someone you don't know?",
                        options: [
                            "Be friendly and introduce yourself",
                            "Don't respond and block them",
                            "Ask them how they found you",
                            "Try to figure out who they really are"
                        ],
                        correct: 1,
                        explanation: "Don't engage with strangers online. Block and delete. If it's serious, tell a trusted adult."
                    },
                    {
                        question: "If you accidentally shared personal info online, what should you do?",
                        options: [
                            "Hope no one saw it",
                            "Tell a trusted adult and try to delete it",
                            "Create a new account",
                            "Just ignore it"
                        ],
                        correct: 1,
                        explanation: "Tell a trusted adult immediately so they can help. Try to delete it and monitor your account for suspicious activity."
                    }
                ]
            },
            {
                id: 4,
                questions: [
                    {
                        question: "What does 'consent' mean online?",
                        options: [
                            "Getting permission before sharing someone's photo",
                            "Saying yes to everything",
                            "Asking once and you're done",
                            "Only asking close friends"
                        ],
                        correct: 0,
                        explanation: "Always ask permission before posting, sharing, or tagging someone online. Respect their privacy and choices."
                    },
                    {
                        question: "Is it okay to share screenshots of private messages?",
                        options: [
                            "Yes, if it's funny",
                            "Only with close friends",
                            "No - it breaks trust and privacy",
                            "Yes, if they don't find out"
                        ],
                        correct: 2,
                        explanation: "Sharing private messages without permission is a violation of trust and privacy. Always ask first."
                    },
                    {
                        question: "What should you do if you see cyberbullying happening?",
                        options: [
                            "Join in so you're not left out",
                            "Ignore it - it's not your problem",
                            "Report it and support the person being bullied",
                            "Tell the bully to stop privately"
                        ],
                        correct: 2,
                        explanation: "Be an upstander. Report bullying, don't participate, and show support to the person being hurt."
                    },
                    {
                        question: "How can you tell if an account is really who they say?",
                        options: [
                            "They say they're verified",
                            "Check for blue checkmarks, real profile info, and ask friends",
                            "If they have many followers",
                            "You really can't tell"
                        ],
                        correct: 1,
                        explanation: "Look for verification badges, real profile details, and ask real-life friends if they know the person."
                    },
                    {
                        question: "What's a healthy screen time habit?",
                        options: [
                            "As much as you want",
                            "Set limits and take breaks",
                            "All day if it's for school",
                            "No screens at all"
                        ],
                        correct: 1,
                        explanation: "Balance is key. Set reasonable limits, take breaks, and spend time with real-life friends and activities."
                    }
                ]
            }
        ]
    },

    spotTheScam: {
        title: "Spot the Scam",
        description: "Can you identify the red flags? Test your scam detection skills!",
        difficulty: "Intermediate",
        icon: "🎣",
        variations: [
            {
                id: 1,
                questions: [
                    {
                        question: "You get a message: 'CLICK NOW! You won a free iPhone! Don't tell anyone.' What's wrong?",
                        options: [
                            "Nothing - sounds like a great deal!",
                            "The all-caps writing makes it hard to read",
                            "URGENCY + too-good-to-be-true + secrecy = SCAM",
                            "It's probably real but I need to ask my parents first"
                        ],
                        correct: 2,
                        explanation: "This has EVERY scam red flag: urgency (CLICK NOW), too-good-to-be-true (free iPhone), and secrecy (don't tell). It's definitely a scam!"
                    },
                    {
                        question: "Email says: 'Please update your PayPal password immediately - click here!' What should you do?",
                        options: [
                            "Click the link and update your password",
                            "Go directly to PayPal.com and check your account there",
                            "Forward it to your friends so they can update too",
                            "Reply with your username to confirm your account"
                        ],
                        correct: 1,
                        explanation: "NEVER click links in emails. Go directly to the official website instead. This prevents phishing scams."
                    },
                    {
                        question: "A message says: 'u won $1,000,000!!! congrats!!!1 clck link to clame.' Red flags?",
                        options: [
                            "No red flags - this is exciting!",
                            "Spelling errors, fake prizes, and suspicious links = RED FLAGS",
                            "It's just friendly writing",
                            "The person just has a keyboard issue"
                        ],
                        correct: 1,
                        explanation: "Spelling mistakes, grammatical errors, and poor English are common in scams. Real companies use proper spelling and grammar."
                    },
                    {
                        question: "Someone says: 'Pay $20 to unlock a secret gaming hack!' This is:",
                        options: [
                            "A legitimate way to get gaming help",
                            "A reasonable investment",
                            "A SCAM - there's no secret hack, and you'll lose your money",
                            "Actually pretty cheap for gaming content"
                        ],
                        correct: 2,
                        explanation: "Never pay money online for gaming hacks or cheats. If it sounds too good to be true, it is!"
                    },
                    {
                        question: "What should you NEVER do when you spot a scam?",
                        options: [
                            "Click any links in the message",
                            "Give personal information",
                            "Send money",
                            "All of the above"
                        ],
                        correct: 3,
                        explanation: "The 3 rules: DON'T CLICK, DON'T RESPOND, TELL AN ADULT. This protects you from every type of scam."
                    }
                ]
            },
            {
                id: 2,
                questions: [
                    {
                        question: "Text message: 'Your account has been locked! Enter your password here to unlock.' Danger level?",
                        options: [
                            "Low - seems official",
                            "EXTREME - This is a phishing scam!",
                            "Medium - I should ask my parents",
                            "Low - It's from my bank"
                        ],
                        correct: 1,
                        explanation: "Real banks never ask for passwords via text or email. This is phishing. Go directly to the official app or website."
                    },
                    {
                        question: "You see an ad: 'Limited time! Get the newest gaming console for 50% off!' Should you click?",
                        options: [
                            "Yes - it's a limited time deal!",
                            "No - go directly to the official store website instead",
                            "Yes - official-looking ads are always real",
                            "Ask a stranger online if it's real"
                        ],
                        correct: 1,
                        explanation: "Scammers copy real ads and links. Always go directly to official websites, not through clicked links."
                    },
                    {
                        question: "A DM says: 'Hey! I'm trying to contact you about your recent order. Reply with your order number and ZIP code.' Verdict?",
                        options: [
                            "This is legitimate customer service",
                            "This is probably a SCAM fishing for personal info",
                            "It's okay since they know about an order",
                            "I should give them my info to help"
                        ],
                        correct: 1,
                        explanation: "Real companies don't ask for sensitive info via DM. They contact you through official channels in your account."
                    },
                    {
                        question: "Which URL is SUSPICIOUS?",
                        options: [
                            "www.amazon.com",
                            "www.amaz0n.com (with a zero)",
                            "www.amazon-official.com",
                            "www.amazon.co.uk"
                        ],
                        correct: 1,
                        explanation: "Scammers use similar-looking URLs with slight misspellings. Always check the exact spelling of the website."
                    },
                    {
                        question: "You get an email asking you to 'verify your account urgently' with a link. What do you do?",
                        options: [
                            "Click the link immediately",
                            "Type the website address directly into your browser instead",
                            "Ignore the email completely",
                            "Call the company using the number in the email"
                        ],
                        correct: 1,
                        explanation: "Always type the website address directly. Never click links in suspicious emails, even if they look official."
                    }
                ]
            },
            {
                id: 3,
                questions: [
                    {
                        question: "You win a free gaming controller in a contest you never entered. This is:",
                        options: [
                            "Great luck!",
                            "A SCAM - you didn't enter, so you didn't win",
                            "Maybe it's a mistake but take it",
                            "Probably a test from the game company"
                        ],
                        correct: 1,
                        explanation: "If you didn't enter a contest, you can't win. Fake prize notifications are classic scam tactics."
                    },
                    {
                        question: "What's a common scam tactic used to create URGENCY?",
                        options: [
                            "Offering discounts",
                            "\"Your account will be deleted in 24 hours!\" or \"LIMITED TIME ONLY!\"",
                            "Explaining the product details",
                            "Asking for your opinion"
                        ],
                        correct: 1,
                        explanation: "Scammers create panic to make you act without thinking. Real companies don't force rushed decisions."
                    },
                    {
                        question: "Someone online says: 'Send me $5 and I'll send you $50 back!' What's wrong?",
                        options: [
                            "Nothing - that's a great return!",
                            "This is obviously a SCAM - easy money doesn't work this way",
                            "The ratio seems wrong",
                            "You should ask for proof first"
                        ],
                        correct: 1,
                        explanation: "If it seems too good to be true, it absolutely is. This is one of the oldest scam tactics."
                    },
                    {
                        question: "Which is NOT a red flag for a scam?",
                        options: [
                            "Asking for personal information",
                            "Requesting money upfront",
                            "A professional-looking website with contact info",
                            "Pressure to act quickly"
                        ],
                        correct: 2,
                        explanation: "A professional website with real contact info is a good sign. But combine it with other warning signs to verify."
                    },
                    {
                        question: "You get a call from 'Apple Support' about a virus. What's the best response?",
                        options: [
                            "Explain the problem and let them remote in",
                            "Hang up and call Apple directly using a number from their official website",
                            "Ask them to prove they're from Apple",
                            "Tell them you need to check with your parents"
                        ],
                        correct: 1,
                        explanation: "Tech support scams are very common. Always call the company directly using official numbers, never numbers they provide."
                    }
                ]
            },
            {
                id: 4,
                questions: [
                    {
                        question: "A message says: 'Congratulations! You're our special customer. Click to claim your prize.' Red flag?",
                        options: [
                            "No, it seems nice",
                            "Yes - you weren't told about this contest",
                            "Maybe - check if it's real",
                            "No, you're definitely a special customer"
                        ],
                        correct: 1,
                        explanation: "Unsolicited prize notifications claiming you're 'special' are classic scams. Real contests confirm through official channels."
                    },
                    {
                        question: "Which is a sign of a REAL company's communication?",
                        options: [
                            "Poor grammar and spelling mistakes",
                            "Generic greetings like 'Hello User'",
                            "Professional tone with correct spelling and personalization",
                            "Pressure to act immediately"
                        ],
                        correct: 2,
                        explanation: "Real companies invest in professional communication. Poor grammar and spelling are strong indicators of scams."
                    },
                    {
                        question: "You see an ad claiming 'Make $1000 in your first week!' This is likely:",
                        options: [
                            "A legitimate job opportunity",
                            "A SCAM or pyramid scheme - get-rich-quick schemes aren't real",
                            "Just exaggerated marketing",
                            "An MLM that's actually successful"
                        ],
                        correct: 1,
                        explanation: "Get-rich-quick promises are almost always scams. Real jobs have realistic pay and requirements."
                    },
                    {
                        question: "What should you check before trusting a website?",
                        options: [
                            "How many followers it has on social media",
                            "If it's the official website with correct spelling and real security",
                            "If it looks professional",
                            "If your friends have heard of it"
                        ],
                        correct: 1,
                        explanation: "Check that the URL is spelled correctly, the site has HTTPS security, and there's real contact info."
                    },
                    {
                        question: "If you think you've been scammed, what's the FIRST thing to do?",
                        options: [
                            "Panic and try to get your money back",
                            "Tell a trusted adult immediately",
                            "Try to contact the scammers",
                            "Post about it on social media"
                        ],
                        correct: 1,
                        explanation: "Tell a trusted adult right away. They can help you report it and prevent further damage."
                    }
                ]
            }
        ]
    }
};

// Quiz Engine
function startQuiz(quizKey, variationId = null) {
    const quiz = quizzes[quizKey];
    if (!quiz) return;

    // Pick random variation if not specified
    const variation = variationId
        ? quiz.variations.find(v => v.id === variationId)
        : quiz.variations[Math.floor(Math.random() * quiz.variations.length)];

    if (!variation) return;

    // Initialize quiz state
    window.currentQuiz = {
        key: quizKey,
        title: quiz.title,
        icon: quiz.icon,
        questions: variation.questions,
        currentQuestion: 0,
        score: 0,
        answered: false,
        selectedAnswer: null
    };

    displayQuiz();
}

function displayQuiz() {
    const quiz = window.currentQuiz;
    const question = quiz.questions[quiz.currentQuestion];

    const html = `
        <div class="quiz-container">
            <div class="quiz-header">
                <span>${quiz.icon} ${quiz.title}</span>
                <span class="quiz-progress">Question ${quiz.currentQuestion + 1}/${quiz.questions.length}</span>
            </div>

            <div class="quiz-content">
                <h3>${question.question}</h3>

                <div class="quiz-options">
                    ${question.options.map((option, idx) => `
                        <button class="quiz-option ${quiz.answered && idx === question.correct ? 'correct' : ''} ${quiz.answered && idx === quiz.selectedAnswer && idx !== question.correct ? 'incorrect' : ''}"
                                onclick="selectAnswer(${idx})"
                                ${quiz.answered ? 'disabled' : ''}>
                            ${option}
                        </button>
                    `).join('')}
                </div>

                ${quiz.answered ? `
                    <div class="quiz-feedback ${quiz.selectedAnswer === question.correct ? 'correct' : 'incorrect'}">
                        <strong>${quiz.selectedAnswer === question.correct ? '✓ Correct!' : '✗ Try again!'}</strong>
                        <p>${question.explanation}</p>
                    </div>
                    <button class="btn btn-primary" onclick="nextQuestion()" style="width: 100%; margin-top: 1rem;">
                        ${quiz.currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'See Results'}
                    </button>
                ` : ''}
            </div>
        </div>
    `;

    document.getElementById('quizDisplay').innerHTML = html;
}

function selectAnswer(idx) {
    const quiz = window.currentQuiz;
    const question = quiz.questions[quiz.currentQuestion];

    quiz.selectedAnswer = idx;
    if (idx === question.correct) {
        quiz.score++;
    }
    quiz.answered = true;

    displayQuiz();
}

function nextQuestion() {
    const quiz = window.currentQuiz;

    if (quiz.currentQuestion < quiz.questions.length - 1) {
        quiz.currentQuestion++;
        quiz.answered = false;
        quiz.selectedAnswer = null;
        displayQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    const quiz = window.currentQuiz;
    const percentage = Math.round((quiz.score / quiz.questions.length) * 100);
    const message = percentage === 100 ? "Perfect score! You're a safety expert! 🏆"
                  : percentage >= 80 ? "Great job! You know how to stay safe! 👏"
                  : percentage >= 60 ? "Good effort! Keep learning about online safety 📚"
                  : "Keep practicing! Online safety is important 💪";

    const html = `
        <div class="quiz-results">
            <div class="results-header">
                <h2>Quiz Complete! ${quiz.icon}</h2>
            </div>

            <div class="results-score">
                <div class="score-circle">${percentage}%</div>
                <p class="score-text">${quiz.score}/${quiz.questions.length} correct</p>
            </div>

            <p class="results-message">${message}</p>

            <div class="results-actions">
                <button class="btn btn-primary" onclick="startQuiz('${quiz.key}')">Take Quiz Again</button>
                <button class="btn" onclick="document.getElementById('quizDisplay').innerHTML = ''">Back to Tools</button>
            </div>
        </div>
    `;

    document.getElementById('quizDisplay').innerHTML = html;
}
