// Digital Safety Quiz Variations
// Multiple quiz versions so users can take quizzes multiple times

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
                        question: "You see an ad: 'Limited time! Get the newest gaming console for 50% off!' The link looks official. Should you click?",
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
                <button class="btn btn-primary" onclick="location.reload()">Take Quiz Again</button>
                <button class="btn" onclick="document.getElementById('quizDisplay').innerHTML = ''">Back to Tools</button>
            </div>
        </div>
    `;

    document.getElementById('quizDisplay').innerHTML = html;
}
