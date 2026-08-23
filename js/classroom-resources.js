// DigitalCap Classroom Resources - UPDATED with all slide deck links

const classroomLessons = [
    // Grade K-2 (Lower Elementary)
    {
        id: 'k2-1',
        title: 'Digital Kindness & Screen Manners',
        gradeBand: 'K-2',
        gradeLevel: 'Kindergarten - 2nd Grade',
        topic: 'Online Etiquette',
        duration: '15-min',
        objective: 'Learn basic respectful behavior online and healthy screen time habits.',
        description: 'Introduction to treating people kindly online, understanding screens, and simple digital rules.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/k2-1-digital-kindness.html',
            slides: '../slides/k2-1-digital-kindness-slides.html',
            parentGuide: '#'
        }
    },
    {
        id: 'k2-2',
        title: 'Stranger Danger: Who Can You Trust Online?',
        gradeBand: 'K-2',
        gradeLevel: 'Kindergarten - 2nd Grade',
        topic: 'Cyberbullying & DMs',
        duration: '15-min',
        objective: 'Understand that not everyone online is who they say they are.',
        description: 'Simple, age-appropriate introduction to online strangers and safe practices.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/k2-2-stranger-danger.html',
            slides: '../slides/k2-2-stranger-danger-slides.html',
            parentGuide: '#'
        }
    },
    {
        id: 'k2-3',
        title: 'Your Digital Footprint Starts Now',
        gradeBand: 'K-2',
        gradeLevel: 'Kindergarten - 2nd Grade',
        topic: 'Privacy & Data',
        duration: '15-min',
        objective: 'Introduce the concept that online actions create a permanent record.',
        description: 'Age-appropriate exploration of what a digital footprint is and why it matters.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/k2-3-digital-footprint.html',
            slides: '../slides/k2-3-digital-footprint-slides.html',
            parentGuide: '#'
        }
    },

    // Grade 3-5 (Upper Elementary)
    {
        id: '35-1',
        title: 'Apps Kids Love: Privacy & Safety Settings',
        gradeBand: '3-5',
        gradeLevel: '3rd - 5th Grade',
        topic: 'Privacy & Data',
        duration: '45-min',
        objective: 'Students learn to identify privacy risks in popular apps and adjust safety settings.',
        description: 'Hands-on lesson evaluating real apps kids use and configuring privacy controls.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/35-1-privacy-settings.html',
            slides: '../slides/35-1-privacy-settings-slides.html',
            parentGuide: '#'
        }
    },
    {
        id: '35-2',
        title: 'Spotting Scams & Fake Messages',
        gradeBand: '3-5',
        gradeLevel: '3rd - 5th Grade',
        topic: 'AI & Scams',
        duration: '45-min',
        objective: 'Develop critical thinking skills to identify phishing, scams, and suspicious messages.',
        description: 'Interactive scenarios teaching students to spot common online scams.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/35-2-spotting-scams.html',
            slides: '../slides/35-2-spotting-scams-slides.html',
            parentGuide: '#'
        }
    },
    {
        id: '35-3',
        title: 'Online Kindness: Standing Up to Cyberbullying',
        gradeBand: '3-5',
        gradeLevel: '3rd - 5th Grade',
        topic: 'Cyberbullying & DMs',
        duration: '45-min',
        objective: 'Understand cyberbullying, its impact, and how to respond as a bystander.',
        description: 'Discussion-based lesson with real scenarios about online respect and standing up for others.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/35-3-cyberbullying.html',
            slides: '../slides/35-3-cyberbullying-slides.html',
            parentGuide: '#'
        }
    },

    // Grade 6-8 (Middle School)
    {
        id: '68-1',
        title: 'Digital Citizenship Basics',
        gradeBand: '6-8',
        gradeLevel: '6th - 8th Grade',
        topic: 'Privacy & Data',
        duration: '45-min',
        objective: 'Build foundational understanding of digital rights, responsibilities, and privacy in online spaces.',
        description: 'Comprehensive introduction to digital citizenship covering consent, privacy, and respectful online behavior.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/68-1-digital-citizenship.html',
            slides: '../slides/68-1-digital-citizenship-slides.html',
            parentGuide: '#'
        }
    },
    {
        id: '68-2',
        title: 'Social Media & Your Digital Reputation',
        gradeBand: '6-8',
        gradeLevel: '6th - 8th Grade',
        topic: 'Online Etiquette',
        duration: 'Multi-part',
        objective: 'Explore social media platforms, the permanence of posts, and long-term reputation implications.',
        description: 'Multi-lesson unit on social media literacy, algorithm awareness, and mental health impacts.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/68-2-social-media-reputation.html',
            slides: '../slides/68-2-social-media-reputation-slides.html',
            parentGuide: '#'
        }
    },
    {
        id: '68-3',
        title: 'Recognizing Grooming & Manipulation',
        gradeBand: '6-8',
        gradeLevel: '6th - 8th Grade',
        topic: 'Cyberbullying & DMs',
        duration: '45-min',
        objective: 'Recognize grooming tactics, manipulative behavior, and understand when to seek help.',
        description: 'Age-appropriate lesson on recognizing manipulation patterns and how to respond.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/68-3-grooming-awareness.html',
            slides: '../slides/68-3-grooming-awareness-slides.html',
            parentGuide: '#'
        }
    },

    // Grade 9-12 (High School)
    {
        id: '912-1',
        title: 'Predators, Grooming & Exploitation Prevention',
        gradeBand: '9-12',
        gradeLevel: '9th - 12th Grade',
        topic: 'Cyberbullying & DMs',
        duration: 'Multi-part',
        objective: 'Develop awareness of exploitation tactics and learn protective strategies and resources.',
        description: 'Comprehensive unit on recognizing predatory behavior, sextortion, dating app dangers, and resources.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/912-1-exploitation-prevention.html',
            slides: '../slides/912-1-exploitation-prevention-slides.html',
            parentGuide: '#'
        }
    },
    {
        id: '912-2',
        title: 'Digital Footprint & Future Implications',
        gradeBand: '9-12',
        gradeLevel: '9th - 12th Grade',
        topic: 'Privacy & Data',
        duration: '45-min',
        objective: 'Understand how digital footprints affect college admissions, jobs, and future opportunities.',
        description: 'Exploration of permanent digital records, data collection, and long-term consequences.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/912-2-digital-footprint-future.html',
            slides: '../slides/912-2-digital-footprint-slides.html',
            parentGuide: '#'
        }
    },
    {
        id: '912-3',
        title: 'AI, Deepfakes & Misinformation in the Digital Age',
        gradeBand: '9-12',
        gradeLevel: '9th - 12th Grade',
        topic: 'AI & Scams',
        duration: '45-min',
        objective: 'Develop critical thinking skills to evaluate AI-generated content, deepfakes, and misinformation.',
        description: 'Forward-looking lesson on emerging AI risks and how to verify information.',
        includes: {
            lessonPlan: true,
            slideShow: true,
            parentGuide: true,
            activity: true
        },
        downloads: {
            plan: '../lessons/912-3-ai-deepfakes-misinformation.html',
            slides: '../slides/912-3-ai-deepfakes-misinformation-slides.html',
            parentGuide: '#'
        }
    }
];

// Filter state
let currentFilters = {
    gradeBand: 'all',
    topic: 'all',
    duration: 'all'
};

// Initialize classroom resources
function initializeClassroomResources() {
    renderLessonCards(classroomLessons);
}

// Apply filters
function setFilter(filterType, value) {
    currentFilters[filterType] = value;
    applyFilters();

    // Update button styles
    document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(btn => {
        if (btn.value === value) {
            btn.classList.add('filter-active');
        } else {
            btn.classList.remove('filter-active');
        }
    });
}

function applyFilters() {
    let filtered = classroomLessons;

    if (currentFilters.gradeBand !== 'all') {
        filtered = filtered.filter(lesson => lesson.gradeBand === currentFilters.gradeBand);
    }

    if (currentFilters.topic !== 'all') {
        filtered = filtered.filter(lesson => lesson.topic === currentFilters.topic);
    }

    if (currentFilters.duration !== 'all') {
        filtered = filtered.filter(lesson => lesson.duration === currentFilters.duration);
    }

    renderLessonCards(filtered);
}

function renderLessonCards(lessons) {
    const container = document.getElementById('lessonCardsContainer');
    if (!container) return;

    if (lessons.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem; color: var(--text-gray);"><p>No lessons found with selected filters. Try adjusting your choices.</p></div>';
        return;
    }

    container.innerHTML = lessons.map(lesson => `
        <div class="lesson-card">
            <div class="lesson-header">
                <div>
                    <h3>${lesson.title}</h3>
                    <div class="lesson-badges">
                        <span class="badge-grade">${lesson.gradeLevel}</span>
                        <span class="badge-topic">${lesson.topic}</span>
                        <span class="badge-duration">${lesson.duration}</span>
                    </div>
                </div>
            </div>

            <p class="lesson-objective"><strong>Objective:</strong> ${lesson.objective}</p>

            <div class="lesson-includes">
                <p style="margin: 0 0 0.75rem 0; font-weight: 600; color: var(--primary);">What's Included:</p>
                <div class="include-list">
                    ${lesson.includes.lessonPlan ? '<span class="include-badge">📄 Lesson Plan</span>' : ''}
                    ${lesson.includes.slideShow ? '<span class="include-badge">🎬 Slide Deck</span>' : ''}
                    ${lesson.includes.parentGuide ? '<span class="include-badge">📧 Parent Guide</span>' : ''}
                    ${lesson.includes.activity ? '<span class="include-badge">🎯 Activity</span>' : ''}
                </div>
            </div>

            <div class="lesson-downloads">
                ${lesson.includes.lessonPlan && lesson.downloads.plan !== '#' ? `<a href="${lesson.downloads.plan}" class="btn-download" title="Open Lesson Plan" target="_blank">📥 Lesson</a>` : ''}
                ${lesson.includes.slideShow && lesson.downloads.slides !== '#' ? `<a href="${lesson.downloads.slides}" class="btn-download" title="Open Slides" target="_blank">📥 Slides</a>` : ''}
                ${lesson.includes.parentGuide && lesson.downloads.parentGuide !== '#' ? `<a href="${lesson.downloads.parentGuide}" class="btn-download" title="Open Parent Guide" target="_blank">📥 Parent</a>` : ''}
                <button class="btn-view" onclick="printLesson('${lesson.id}')">🖨️ Print</button>
            </div>
        </div>
    `).join('');
}

function printLesson(lessonId) {
    const lesson = classroomLessons.find(l => l.id === lessonId);
    if (!lesson) return;

    window.print();
}

function resetFilters() {
    currentFilters = {
        gradeBand: 'all',
        topic: 'all',
        duration: 'all'
    };

    document.querySelectorAll('[data-filter]').forEach(btn => {
        if (btn.value === 'all') {
            btn.classList.add('filter-active');
        } else {
            btn.classList.remove('filter-active');
        }
    });

    applyFilters();
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeClassroomResources();

    // Set initial filter buttons to active
    document.querySelectorAll('[value="all"][data-filter]').forEach(btn => {
        btn.classList.add('filter-active');
    });
});
