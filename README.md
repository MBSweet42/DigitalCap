# DigitalCap — Smart Limits. No Cap.

DigitalCap is a digital safety resource designed for real life. It helps individuals, families, caregivers, educators, and community organizations understand digital safety, make informed choices, respond when something happens, build skills, have meaningful conversations, and find trustworthy resources.

DigitalCap is not fear-based or alarmist. It assumes people can learn, make decisions that fit their situations, and deserve practical support—not lecture or judgment.

---

## Guiding Philosophy

DigitalCap is built on a few key principles:

**Practical over theoretical.** Digital safety is something people deal with daily. DigitalCap focuses on real situations and concrete next steps.

**Choices, not rules.** Different people and households make different reasonable choices. DigitalCap helps people understand their options, not prescribe one right answer.

**Informed, not afraid.** People make better decisions when they understand what's actually happening. DigitalCap explains real risks and real safeguards without unnecessary fear.

**Verification matters.** The internet contains misinformation. DigitalCap encourages people to think critically and verify information.

**Digital literacy is a skill.** Building confidence in understanding technology is more valuable than avoiding technology.

**Support, not blame.** When something goes wrong online, people need practical next steps and support—not blame for "not knowing better."

---

## What's Inside

### App Check

Research an app to understand what it does, what data it collects, and what exposure factors matter. App Check uses the **Digital Exposure** framework to help people understand characteristics of apps—not to label an app as simply "safe" or "unsafe."

Digital Exposure measures aspects like:
- What data the app collects and shares
- Who can contact or find you
- How the platform manages content
- Privacy and account security considerations

Published app data is stored in Firestore and can be searched, filtered, and explored at your own pace. You can also add personal notes to keep track of your own assessment of an app.

### Something Happened? (Respond)

When something goes wrong online—scams, hacked accounts, harassment, identity misuse, intimate-image abuse, or other problems—the Respond tool helps you work through what happened and find practical next steps.

Respond is designed to help navigate practical concerns. It is not a substitute for emergency services, legal advice, medical care, or professional mental-health support. For emergencies, contact local authorities.

### Protect & Prepare

Improve your own digital safety or help protect someone you support. Protect & Prepare is organized around practical tasks:

- Secure an account (passwords, authentication, recovery options)
- Review privacy and permissions (who sees what, who can contact you)
- Recognize scams and suspicious contact
- Set up or review a device
- Check an app before using it
- Have a conversation about digital life

### Conversation Guides

Meaningful conversations about digital life can be difficult—especially with people of different ages or technical backgrounds. Conversation Guides provide:

- Conversation starters by age group
- Discussion prompts for specific topics
- Frameworks for talking about difficult situations
- Templates to adapt for your family or group

### Learn & Practice

Practice and build digital skills through:

- **Activities**: Deepfake Detective, Source Check, Share With AI (interactive decision-making)
- **Worksheets**: Downloadable practice worksheets for classroom or home use (K-12, organized by grade band)
- **Slides**: Presentation materials for educators and trainers
- **Practice Challenges**: Interactive scenarios to practice digital decisions

### Understand Digital Safety

Educational topics covering:

- Password safety and account security
- Phishing, scams, and social engineering
- Privacy settings and data collection
- Online relationships and grooming awareness
- Cyberbullying and digital respect
- Screen time and digital wellness
- Misinformation and critical thinking
- Online behavior and digital footprint

### AI & Digital Life

AI is changing how people search, work, learn, create, and communicate. This section covers:

- What AI is and how it works
- How to use AI thoughtfully
- Recognizing AI-generated content (deepfakes, voice cloning)
- Understanding AI privacy and settings
- Responding to AI scams
- AI literacy and broader societal questions

### Educator Resources

Classroom-ready materials for grades K-12:

- Complete lesson plans with learning objectives and discussion prompts
- Worksheets, slides, and discussion guides
- Adaptable frameworks for different grade levels
- Teaching tips for sensitive topics

### Gaming Safety

Gaming-specific guidance covering:

- In-game communication and social risks
- Scams in gaming communities
- Privacy and account security in games
- Healthy gaming habits

### Additional Resources

- **Hotlines & Crisis Support**: Emergency and crisis resources organized by situation
- **Trusted Sources**: Curated links to expert organizations in digital safety
- **Guides**: Deep-dive resources on specific topics (privacy settings, verification, etc.)

---

## Technology & Architecture

DigitalCap is a static HTML/CSS/JavaScript site with dynamic app data from Firestore.

**Tech Stack:**
- HTML5, CSS3, vanilla JavaScript (no frameworks)
- Firebase Hosting (production: digitalcap.org)
- Firestore (appsPublished collection for app data)
- localStorage for user notes and personal settings

**Key Data Flow:**
```
Firestore appsPublished collection
    ↓
App Check page (displays published apps)
Global Search (indexes apps for search)
```

Published app records are the single source of truth. They are not duplicated into static JavaScript files.

**Accessibility:** DigitalCap uses semantic HTML, keyboard navigation, screen-reader support (aria-labels), and responsive design. Accessibility is an ongoing project priority.

---

## Project Structure

```
DigitalCap/
├── index.html                       Main homepage
├── app-check.html                   Research apps & Digital Exposure
├── respond.html                     Something Happened? guided tool
├── protect.html                     Protection pathways & tasks
├── talk.html                        Conversation Guides
├── learn.html                       Learn & Practice activities
├── understand.html                  Educational topics
├── ai.html                          AI & Digital Life
├── educators.html                   Educator resources & curriculum
├── gaming-guide.html                Gaming safety
├── interactive.html                 Interactive tools hub
├── resources.html                   Family guides & resources
├── hotlines.html                    Crisis & emergency support
├── trusted-sources.html             Expert resource links
├── about.html                       About & attribution
├── admin/                           Admin panel for content curation
├── activities/                      Interactive learning activities
├── guides/                          Deep-dive topic guides
├── lessons/                         Classroom lesson plans
├── slides/                          Presentation materials
├── worksheets/                      Educational worksheets
├── css/
│   ├── style.css                    Core styles
│   ├── digitalcap-components.css    Shared component styles
│   ├── homepage.css                 Homepage styling
│   └── [page-theme].css             Page-specific theme files
├── js/
│   ├── firebase-config.js           Firebase initialization
│   ├── apps-directory-v2.js         App Check logic (Firestore)
│   ├── global-search.js             Site-wide search
│   ├── app-check-init.js            App Check initialization
│   ├── exposure-config.js           Digital Exposure levels & labels
│   ├── respond-engine.js            Respond tool logic
│   ├── respond-content-[r##].js     Respond pathway content
│   ├── practice-challenges.js       Interactive practice activities
│   ├── content-data-v2.js           Educational article content
│   ├── conversation-data.js         Conversation starter templates
│   ├── app-notes-and-custom.js      User notes & custom apps (localStorage)
│   ├── main.js                      Navigation & menu toggle
│   └── [other].js                   Feature-specific modules
├── images/
│   ├── branding/                    Logos and branding assets
│   └── [content images]             Page-specific images
├── firebase.json                    Firebase Hosting configuration
├── .firebaserc                      Firebase project reference
├── README.md                        This file
└── CLAUDE.md                        AI development guardrails
```

---

## Local Development

### Quick Start (Simplest)

1. Open the repository folder
2. Install the "Live Server" extension in VS Code (by Ritwick Dey)
3. Right-click `index.html` → "Open with Live Server"
4. The site opens locally and auto-refreshes as you save files

### Using Python

```bash
cd path/to/digital-safety-hub
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

### Firestore Features

If you're testing features that require Firestore (App Check loading, admin functions), you need:

1. A Firebase project configured (see `firebase.json` and `.firebaserc`)
2. `js/firebase-config.js` must be loaded and initialized
3. The browser must be connected to the internet

Double-clicking `index.html` and opening it as `file://` will NOT work for Firestore features due to browser security restrictions.

### Testing Workflow

1. Start a local server (Live Server or Python)
2. Open http://localhost:8000 (or your server's URL)
3. Make changes and save
4. Refresh browser to see updates
5. Use browser DevTools (F12) to check console for errors

---

## Safe Development Workflow

Before making changes:

1. **Understand current state**: Run `git status` and read the relevant code
2. **Make scoped changes**: Edit only the files needed for your task
3. **Test locally**: Verify the behavior works as intended
4. **Review changes**: Run `git diff` to see exactly what changed
5. **Commit with context**: Write a clear commit message explaining the why
6. **Push when approved**: Only push after review and approval
7. **Deploy when approved**: Only deploy after smoke-testing
8. **Verify production**: Test key flows on the live site

This workflow helps prevent unintended side effects and makes changes reviewable.

---

## Firebase & Deployment

### Production

- **Domain**: https://digitalcap.org (Firebase Hosting)
- **Firebase Project**: `digitalcap-bd096`
- **Region**: Google Cloud (US-based)

### Deploying

```bash
# Deploy Firebase Hosting only (recommended for site changes)
firebase deploy --only hosting

# Full deployment (use with caution - deploys all configured services)
firebase deploy
```

### What Gets Deployed

Hosting-only deployment (`firebase deploy --only hosting`) publishes:
- All HTML, CSS, JavaScript files
- Images and static assets

Ignored (not deployed):
- `.git/` directory
- `node_modules/`
- `.env` files
- Markdown, text, and log files
- Service account keys

See `firebase.json` for the complete ignore list.

### Firestore

App data is stored in Firestore collection `appsPublished`. Rules determine who can read/write data. Firestore rules are a separate Firebase resource and should not be deployed casually.

---

## Content Principles

DigitalCap's editorial approach:

**Inclusive language**: Content should be useful to diverse audiences—different ages, abilities, backgrounds, family structures, and technical backgrounds.

**Practical**: Focus on real situations and concrete next steps. Avoid theoretical explanations without application.

**Non-alarmist**: Present risks honestly without sensationalizing or creating unnecessary fear.

**Plain language**: Explain technical concepts clearly without jargon. Define terms when first used.

**Nuance**: Acknowledge that different people make different reasonable choices. Avoid "one right way" framing.

**Distinction**: Clearly separate education from emergency or professional services. If someone needs a lawyer, therapist, or emergency responder, say so.

**Verification**: Cite trustworthy sources and encourage users to verify information independently.

**Evolving**: Technology changes rapidly. Content should be reviewed and updated periodically.

---

## Privacy & Data

**No personal data collection**: DigitalCap does not collect, transmit, or store personal information about users.

**Firestore**: App data is fetched from Firestore but no user identification or personal data is stored.

**localStorage**: User notes and preferences are stored on device via browser localStorage (not sent anywhere).

**No analytics**: DigitalCap does not track page views, user behavior, or engagement.

**No tracking cookies**: No first-party or third-party tracking.

**Firestore-dependent features require internet**: App data fetching and Firestore features require network connectivity.

---

## Accessibility

DigitalCap is designed to be accessible:

- Semantic HTML for screen readers
- Keyboard navigation support throughout
- High-contrast colors for readability
- Responsive design for all screen sizes
- Aria-labels on interactive elements
- Logical heading hierarchy
- Alt text on images
- Focus indicators on interactive elements

Accessibility is an ongoing project priority. If you find accessibility issues, please report them.

---

## Browser Compatibility

DigitalCap works on all modern browsers:

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Requires ES6 JavaScript support and modern CSS (CSS custom properties, Grid, Flexbox).

---

## Contributing & Feedback

Found an issue? Have a suggestion? Please:

1. **Check GitHub Issues** to see if it's already reported
2. **Create a new issue** with details
3. **Submit a pull request** with improvements

Types of contributions welcome:
- Bug reports and fixes
- Content corrections or updates
- Accessibility improvements
- Performance optimizations
- Classroom or educator feedback
- Translations or localization

---

## Resources & Attribution

DigitalCap draws on guidance and research from:

- Common Sense Media
- National Center for Missing & Exploited Children (NCMEC) / NetSmartz
- Federal Trade Commission (FTC) OnGuardOnline
- ConnectSafely
- Internet Matters
- StaySafeOnline.org
- National Cybersecurity Awareness Campaign
- Academic research on digital literacy and youth online safety
- Educator and community feedback

The goal is to provide accessible, practical, research-informed guidance that respects the expertise of both professionals and people living with technology daily.

---

## Project Status

DigitalCap is actively developed. Features and content evolve as technology changes and as we learn from user feedback.

- **Production**: https://digitalcap.org
- **Repository**: https://github.com/MBSweet42/DigitalCap
- **Issues & Feedback**: GitHub Issues

---

## License

DigitalCap does not have an explicit open-source license. The repository is public, but reuse or redistribution of code requires explicit permission. The content is provided as a resource for education and community use.

For questions about reuse or adaptation, please open an issue on GitHub.

---

## Questions?

This resource is designed to be helpful and practical. We welcome feedback, corrections, and suggestions.

Have a question? Found an error? Please report it on GitHub or reach out through the repository Issues.

---

**DigitalCap. Smart Limits. No Cap.** — Digital safety for real life.
