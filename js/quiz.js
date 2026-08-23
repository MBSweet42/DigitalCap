// Quiz, Checklist, Slideshow, and Conversation Starter Logic

let currentQuizIndex = -1;
let currentQuestionIndex = 0;
let score = 0;
let answers = [];

function startQuiz(quizIndex) {
    currentQuizIndex = quizIndex;
    currentQuestionIndex = 0;
    score = 0;
    answers = [];
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const toolsContainer = document.getElementById('toolsContainer');
    const quiz = quizzes[currentQuizIndex];
    const question = quiz.questions[currentQuestionIndex];

    const html = `
        <div class="quiz-section">
            <div style="margin-bottom: 2rem;">
                <strong>${quiz.title}</strong> - Question ${currentQuestionIndex + 1} of ${quiz.questions.length}
                <div style="background: var(--border-color); height: 8px; border-radius: 4px; margin-top: 0.5rem; overflow: hidden;">
                    <div style="background: var(--primary); height: 100%; width: ${((currentQuestionIndex) / quiz.questions.length) * 100}%;"></div>
                </div>
            </div>

            <div class="quiz-question">
                <h3>${question.question}</h3>
                <div class="quiz-options" id="optionsContainer">
                    ${question.options.map((option, idx) => `
                        <div class="quiz-option">
                            <input type="radio" id="option${idx}" name="answer" value="${idx}">
                            <label for="option${idx}">${option.text}</label>
                        </div>
                    `).join('')}
                </div>
            </div>

            <button class="btn btn-primary" style="margin-top: 1.5rem;" onclick="submitAnswer()">
                ${currentQuestionIndex === quiz.questions.length - 1 ? 'See Results' : 'Next Question'}
            </button>
        </div>
    `;

    toolsContainer.innerHTML = html;
    toolsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function submitAnswer() {
    const quiz = quizzes[currentQuizIndex];
    const question = quiz.questions[currentQuestionIndex];
    const selectedRadio = document.querySelector('input[name="answer"]:checked');

    if (!selectedRadio) {
        alert('Please select an answer');
        return;
    }

    const selectedIndex = parseInt(selectedRadio.value);
    const isCorrect = question.options[selectedIndex].correct;

    if (isCorrect) {
        score++;
    }

    answers.push({
        question: question.question,
        selected: question.options[selectedIndex].text,
        correct: isCorrect,
        feedback: question.feedback
    });

    if (currentQuestionIndex === quiz.questions.length - 1) {
        showQuizResults();
    } else {
        currentQuestionIndex++;
        renderQuizQuestion();
    }
}

function showQuizResults() {
    const quiz = quizzes[currentQuizIndex];
    const percentage = Math.round((score / quiz.questions.length) * 100);
    const toolsContainer = document.getElementById('toolsContainer');

    let resultHtml = `
        <div class="quiz-section">
            <h2>Quiz Complete!</h2>

            <div class="quiz-score">
                <h3>${score}/${quiz.questions.length}</h3>
                <p>You scored ${percentage}%</p>
                ${percentage === 100 ? '<p style="color: var(--success);">Perfect score! 🎉</p>' : ''}
                ${percentage >= 80 ? '<p style="color: var(--success);">Great job! Keep learning.</p>' : ''}
                ${percentage < 80 ? '<p style="color: var(--warning);">Keep learning! Review the feedback below.</p>' : ''}
            </div>

            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Review Your Answers</h3>
    `;

    answers.forEach((answer, idx) => {
        const icon = answer.correct ? '✅' : '❌';
        resultHtml += `
            <div style="margin-bottom: 2rem; padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px;">
                <p><strong>Question ${idx + 1}:</strong> ${answer.question}</p>
                <p><strong>Your answer:</strong> ${answer.selected} ${icon}</p>
                <div class="quiz-feedback ${answer.correct ? 'correct' : 'incorrect'}">
                    ${answer.feedback}
                </div>
            </div>
        `;
    });

    resultHtml += `
        <button class="btn btn-primary" onclick="location.reload()">Retake Quiz</button>
    `;

    toolsContainer.innerHTML = resultHtml;
    toolsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showChecklist() {
    const toolsContainer = document.getElementById('toolsContainer');

    const checklistItems = [
        'Is the app age-appropriate for my child?',
        'Does the app have chat or messaging features?',
        'Can strangers contact my child?',
        'Does the app collect location data?',
        'Can my child make in-app purchases?',
        'Is the app free or does it cost money?',
        'Can my child control their privacy settings?',
        'Are there parental control options?',
        'What information does the app collect?',
        'Is the company trustworthy and transparent about data?'
    ];

    const savedChecklist = JSON.parse(localStorage.getItem('appChecklist') || '{}');

    const html = `
        <div class="checklist-section">
            <h2>Is This App Right for My Child?</h2>
            <p style="color: var(--text-gray); margin-bottom: 1.5rem;">Work through this checklist to evaluate an app. Your progress is saved automatically.</p>

            <div>
                ${checklistItems.map((item, idx) => `
                    <div class="checklist-item">
                        <input
                            type="checkbox"
                            id="item${idx}"
                            ${savedChecklist[idx] ? 'checked' : ''}
                            onchange="saveChecklist()"
                        >
                        <label for="item${idx}">${item}</label>
                    </div>
                `).join('')}
            </div>

            <button class="btn btn-secondary" style="margin-top: 1.5rem; width: 100%;" onclick="resetChecklist()">Clear Checklist</button>
        </div>
    `;

    toolsContainer.innerHTML = html;
    toolsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function saveChecklist() {
    const checklist = {};
    document.querySelectorAll('.checklist-item input').forEach((input, idx) => {
        checklist[idx] = input.checked;
    });
    localStorage.setItem('appChecklist', JSON.stringify(checklist));
}

function resetChecklist() {
    if (confirm('Clear this checklist?')) {
        localStorage.removeItem('appChecklist');
        showChecklist();
    }
}

function showSlideshow() {
    const slides = [
        {
            title: 'Setting Parental Controls: A Quick Guide',
            content: 'Learn how to set up controls on the devices your kids use. We cover Apple, Android, Microsoft, and more.'
        },
        {
            title: 'Step 1: iPhone/iPad Parental Controls (Apple)',
            content: `<strong>Go to:</strong> Settings > Screen Time > Content & Privacy Restrictions<br>
                <strong>You can:</strong> Limit app downloads, restrict websites, control in-app purchases, set downtime hours<br>
                <strong>How:</strong> Create a Screen Time passcode your child doesn't know. Log in once a month to review activity.<br>
                <strong>Tip:</strong> Set "Downtime" to automatically lock the device during homework or bedtime.`
        },
        {
            title: 'Step 2: Android Parental Controls (Google Family Link)',
            content: `<strong>Go to:</strong> Download "Google Family Link" app on your phone, then connect child\'s device<br>
                <strong>You can:</strong><br>
                • Manage app installations and removals<br>
                • Set daily screen time limits by app category<br>
                • See app usage and activity reports<br>
                • Set app rating restrictions (G, PG, PG-13, etc.)<br>
                • Lock the device remotely (useful!)<br>
                <strong>Setup:</strong> Your child needs a Google Account. Family Link works even if they switch devices.<br>
                <strong>Tip:</strong> You can see exactly which apps they use and for how long. Check it weekly.`
        },
        {
            title: 'Step 3: Windows PC Parental Controls (Microsoft Family)',
            content: `<strong>Go to:</strong> account.microsoft.com > Family > Add your child<br>
                <strong>You can:</strong><br>
                • View activity reports (apps used, time spent)<br>
                • Set screen time limits<br>
                • Control web browsing (filter adult sites)<br>
                • Approve app downloads<br>
                • View spending on Microsoft Store<br>
                <strong>Setup:</strong> Your child needs a Microsoft account. You manage from your own Microsoft account.<br>
                <strong>Tip:</strong> Combine with Windows Screen Time limits for extra control.`
        },
        {
            title: 'Step 4: Gaming Console Controls (PlayStation, Xbox, Nintendo)',
            content: `<strong>PlayStation:</strong> Settings > Parental Controls > User & Account Management<br>
                <strong>Xbox:</strong> Settings > Account > Family settings<br>
                <strong>Nintendo Switch:</strong> System Settings > Parental Controls<br>
                <strong>You can:</strong> Control game ratings, online play, spending, communication<br>
                <strong>Tip:</strong> Set up separate Parent and Child accounts. Each console has different steps—YouTube the specific model for detailed help.`
        },
        {
            title: 'Step 5: Router-Level Controls',
            content: `<strong>Go to:</strong> Your router's admin panel (usually 192.168.1.1 in your browser)<br>
                <strong>You can:</strong> Schedule internet downtime (wifi off during homework/bedtime), block websites, monitor bandwidth<br>
                <strong>Brands vary:</strong> TP-Link, Linksys, Netgear, Asus—check your router's manual<br>
                <strong>Pro:</strong> Router-level controls affect ALL devices, so they're hard to bypass<br>
                <strong>Tip:</strong> Many ISPs (like Xfinity) offer parental controls through their own apps too.`
        },
        {
            title: 'If You\'re Not Tech-Savvy... Ask AI!',
            content: `<strong>If these steps feel overwhelming, use AI to walk you through them:</strong><br><br>
                <strong>ChatGPT, Gemini, or Claude:</strong> Ask questions like:<br>
                • "How do I set up Google Family Link? I have an Android phone and a Pixel tablet."<br>
                • "I want to block YouTube on my child\'s phone. What are the steps?"<br>
                • "How do I set screen time limits on an iPhone? I\'m not tech-savvy."<br><br>
                <strong>Best way to get help:</strong> Take screenshots of your phone/device settings, paste them into the AI, and ask "What should I click next?" The AI can see exactly what you see and guide you step-by-step.<br><br>
                <strong>Pro tip:</strong> Do this on a laptop. It\'s easier to take screenshots and follow along when you can see both the device AND the instructions side-by-side.`
        },
        {
            title: 'Final Tips for Success',
            content: `<strong>Have conversations:</strong> Tell your child about the controls and why (not as punishment, but as protection)<br>
                <strong>Be consistent:</strong> Enforce limits across all devices—phone, tablet, gaming console, laptop<br>
                <strong>Review regularly:</strong> Check activity reports monthly. What apps are they using? How much time?<br>
                <strong>Adjust as they grow:</strong> A 10-year-old needs more limits than a 16-year-old<br>
                <strong>Model behavior:</strong> Practice healthy screen time yourself. They're watching.`
        }
    ];

    let currentSlide = 0;

    const renderSlide = () => {
        const toolsContainer = document.getElementById('toolsContainer');
        const slide = slides[currentSlide];

        const html = `
            <div class="slideshow-container">
                <div class="slide active">
                    <h2>${slide.title}</h2>
                    <div style="text-align: left; color: var(--text-gray); margin: 1.5rem 0;">
                        ${slide.content}
                    </div>
                </div>

                <div class="slide-controls">
                    <button class="btn btn-outline" onclick="previousSlide()" ${currentSlide === 0 ? 'disabled' : ''}>← Previous</button>

                    <div class="slide-dots">
                        ${slides.map((_, idx) => `
                            <div class="dot ${idx === currentSlide ? 'active' : ''}" onclick="goToSlide(${idx})"></div>
                        `).join('')}
                    </div>

                    <button class="btn btn-outline" onclick="nextSlide()" ${currentSlide === slides.length - 1 ? 'disabled' : ''}>Next →</button>
                </div>
            </div>

            <p style="text-align: center; color: var(--text-gray); margin-top: 1rem;">Slide ${currentSlide + 1} of ${slides.length}</p>
        `;

        toolsContainer.innerHTML = html;
        toolsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            renderSlide();
        }
    };

    window.previousSlide = () => {
        if (currentSlide > 0) {
            currentSlide--;
            renderSlide();
        }
    };

    window.goToSlide = (idx) => {
        currentSlide = idx;
        renderSlide();
    };

    renderSlide();
}

window.showConversationStarters = function() {
    const toolsContainer = document.getElementById('toolsContainer');

    let html = `
        <div style="max-width: 800px; margin: 0 auto;">
            <h2>Family Conversation Starters</h2>
            <p style="color: var(--text-gray); margin-bottom: 1.5rem;">Pick a question that feels right for your family, or use the shuffle button to get a random one.</p>

            <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                <button class="btn btn-primary" id="viewAllBtn">View All</button>
                <button class="btn btn-secondary" id="shuffleBtn">Shuffle a Question</button>
            </div>

            <div id="startersList"></div>
        </div>
    `;

    toolsContainer.innerHTML = html;

    // Setup event listeners instead of inline onclick
    const viewAllBtn = document.getElementById('viewAllBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', window.showAllStarters);
    }
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', window.shuffleStarter);
    }

    // Show initial list
    window.showAllStarters();
};

window.showAllStarters = function() {
    const startersList = document.getElementById('startersList');

    if (!conversationStarters || conversationStarters.length === 0) {
        startersList.innerHTML = '<p style="color: var(--text-gray);">No conversation starters loaded.</p>';
        return;
    }

    const grouped = {};
    conversationStarters.forEach(starter => {
        if (!grouped[starter.ageGroup]) grouped[starter.ageGroup] = [];
        grouped[starter.ageGroup].push(starter);
    });

    const html = Object.entries(grouped).map(([ageGroup, starters]) => `
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">${ageGroup}</h3>
            ${starters.map(starter => `
                <div class="starter-item">
                    <p>"${starter.question}"</p>
                </div>
            `).join('')}
        </div>
    `).join('');

    startersList.innerHTML = html;
    startersList.scrollIntoView({ behavior: 'smooth' });
};

window.shuffleStarter = function() {
    const startersList = document.getElementById('startersList');

    if (!conversationStarters || conversationStarters.length === 0) {
        startersList.innerHTML = '<p style="color: var(--text-gray);">No conversation starters loaded.</p>';
        return;
    }

    const random = conversationStarters[Math.floor(Math.random() * conversationStarters.length)];

    const html = `
        <div style="text-align: center; margin: 2rem 0;">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">Today's Question</h3>
            <div class="starter-item" style="margin: 0 auto; max-width: 500px; text-align: left;">
                <div class="age-group">${random.ageGroup}</div>
                <p>"${random.question}"</p>
            </div>
            <button class="btn btn-secondary" style="margin-top: 1.5rem;" onclick="window.shuffleStarter()">Get Another Question</button>
            <button class="btn btn-outline" style="margin-left: 0.5rem;" onclick="window.showAllStarters()">View All</button>
        </div>
    `;

    startersList.innerHTML = html;
};
