# DigitalCap — Smart Limits. Real Conversations.

A comprehensive digital safety hub for families and educators. Everything parents, kids, and teachers need to navigate the digital world safely together.

## 🚀 Running Locally

**No setup required!** The entire site runs in your browser with no server or installation needed.

### Option 1: Double-Click (Simplest)
1. Navigate to the project folder
2. Double-click `index.html`
3. The site opens in your default browser

That's it. Refresh the page to see any changes.

### Option 2: Live Server (Better for Editing)
If you edit files and want to see changes automatically refresh:

1. Open the folder in **VS Code**
2. Install the "Live Server" extension (by Ritwick Dey)
3. Right-click `index.html` → "Open with Live Server"
4. The site opens in your browser and refreshes automatically when you save files

### Option 3: Python (Quick Server)
If you have Python installed:

```bash
# Navigate to the project folder, then:
python -m http.server 8000
# Or: python3 -m http.server 8000

# Open browser to: http://localhost:8000
```

## 📱 What's Inside

### 📱 App Directory
- **39 researched apps** with parent-discovered hidden dangers
- Real risks from Reddit, parenting forums, and safety experts
- Conversation guides, red flags, and parent tips for each app
- Age-based recommendations

### 🔒 Digital Safety
- 6 comprehensive articles: scams, passwords, grooming, privacy, screen time, misinformation
- Read-aloud functionality (text-to-speech)
- Parent scripts for tough conversations
- Expandable sections to break up text-heavy content

### 💬 Digital Etiquette
- 4 articles: online respect, cyberbullying, digital footprint, healthy relationships
- Age-appropriate guidance (6+, tweens, teens)
- Real-world scenarios and how to handle them

### 📚 Family Resources
- Age-based family guides (6-8, 9-12, 13-15, 16+)
- Emergency hotlines with copy-to-clipboard
- Downloadable PDF guides for send-home to parents
- Quick action plans (hacked accounts, cyberbullying, sextortion)
- Curated expert resources (24+ trusted organizations)

### 👥 Community Hub
- Parent discussions and real stories
- Expert Q&A section
- Voting on helpful responses
- (Requires Firebase for live features)

### 👩‍🏫 Teacher Curriculum
- **12 complete lesson plans** (grades 6-12)
- Learning objectives, discussion prompts, interactive activities
- Teaching tips for handling difficult moments and mandatory reporting
- Send-home parent guides

### 🎮 Interactive Tools
- **Digital Safety Basics Quiz** — 5 questions on passwords, phishing, account safety
- **Spot the Scam Quiz** — 5 scenarios to identify suspicious messages
- **App Safety Checklist** — 10-item checklist with localStorage persistence
- **Parental Controls Slideshow** — 8-slide visual guide for all devices
- **Family Conversation Starters** — 20+ questions by age group with shuffle feature

## 📂 Project Structure

```
DigitalCap/
├── index.html                    — Home page
├── apps-v2.html                  — App directory (39 apps)
├── safety.html                   — Digital safety articles
├── etiquette.html                — Digital etiquette articles
├── resources.html                — Family guides, hotlines, resources
├── gaming-guide.html             — Gaming safety deep dive
├── teachers.html                 — 12 lesson plans with activities
├── parent-guides.html            — PDF-style send-home guides
├── interactive.html              — Quiz, checklist, slideshow hub
├── hotlines.html                 — Emergency hotlines
├── resources-links.html          — 24+ expert resource links
├── about.html                    — About & sources
├── css/
│   └── style.css                 — All styling + responsive design + dark mode
├── js/
│   ├── main.js                   — Navigation & mobile menu
│   ├── apps-complete-v2.js       — 39 apps database with conversation guides
│   ├── apps-directory-v2.js      — Search, filter, expand/collapse logic
│   ├── content-data-v2.js        — Safety & etiquette articles
│   ├── quiz-data.js              — Quiz questions & answers
│   ├── quiz.js                   — Quiz, checklist, slideshow engines
│   ├── conversation-data.js      — Conversation starters by age group
│   ├── global-search.js          — Site-wide search functionality
│   ├── app-notes-and-custom.js   — Parent notes & custom apps (localStorage)
│   └── other files               — Experimental/legacy versions
└── README.md                     — This file
```

## 🎯 Key Features

- **Real dangers identified** — Every risk is something a parent actually discovered, not theory
- **Parent-powered** — Share experiences, vote on helpful discussions, get expert answers
- **Conversation-ready** — Scripts, red flags, conversation starters for every app
- **All age groups** — Resources for 6-16+ (different ages need different approaches)
- **100% free** — No paywalls, no ads, no tracking
- **Works offline** — Runs completely locally with localStorage persistence
- **Responsive design** — Mobile, tablet, and desktop optimized
- **Dark mode** — Automatic theming based on system preferences

## 🔧 Customization

### Adding More Apps
1. Open `js/apps-complete-v2.js`
2. Find the `appsCompleteV2` array
3. Copy an existing app object and add your new app at the end
4. Include all fields: id, name, category, ageRecommendation, safetyRating, safetyLabel, description, hasChat/hasOpenInternet/hasLocationTracking with details, whyThisMatters, hiddenDangers, parentConcerns, tipsForParents, parentConversationGuide

### Editing Articles
- **Safety articles**: Edit `js/content-data-v2.js` → `safetyArticles` array
- **Etiquette articles**: Edit `js/content-data-v2.js` → `etiquetteArticles` array
- **Conversation starters**: Edit `js/conversation-data.js` → `conversationStarters` array

### Adding Quizzes
Edit `js/quiz-data.js` → `quizzes` array. Follow the existing format (questions, options with correct/feedback fields).

## 🌐 Hosting & Deployment

### Option 1: Netlify (Easiest for Non-Developers)
1. Go to [netlify.com](https://netlify.com)
2. Create a free account
3. Drag and drop the `DigitalCap` folder
4. Your site is live in seconds with a free URL
5. Connect your own domain if you want

### Option 2: GitHub Pages (Free)
1. Your repo is already here!
2. Go to Settings → Pages → Select "main" branch
3. Site is live at `yourusername.github.io/DigitalCap`

### Option 3: Vercel (Also Easy)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Select this repo
4. Site is live with automatic updates on every push

### Option 4: Firebase Hosting (For Future Features)
When ready to add user accounts, comments, or real-time data:
1. Set up Firebase project
2. Update `global-search.js` and community features to use Firebase API
3. Deploy with `firebase deploy`

## 🔒 Privacy & Data

- **No personal data collection** — The site doesn't track users
- **Progress saved locally** — Quiz scores and checklist progress stored on device via localStorage (not sent anywhere)
- **No analytics** — We don't track page views or user behavior
- **Works offline** — Site functions completely offline once loaded
- **CORS-free** — Uses plain JavaScript with no external API calls (works with file:// protocol)

## ♿ Accessibility

- High contrast colors for readability
- Semantic HTML for screen readers
- Keyboard navigation support
- Mobile-responsive design
- Aria-labels on interactive elements
- Read-aloud functionality (TTS) on articles

## 📖 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚨 Troubleshooting

### Site won't load
- Try refreshing (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
- Clear browser cache
- Try a different browser
- Check browser console for errors (F12 → Console tab)

### Search not working (file:// protocol)
- This is a browser security feature. Search works perfectly once deployed to a web server or hosting service.
- Use Live Server extension or Python's http.server for local development.

### Quiz progress not saving
- Check that localStorage is enabled in your browser
- Try a different browser (some privacy modes disable localStorage)

## 📊 Content Sourcing

All information is adapted from trusted sources:
- Common Sense Media
- NCMEC/NetSmartz
- FTC OnGuardOnline
- ConnectSafely
- Internet Matters
- StaySafeOnline.org
- Reddit parenting communities
- Official app safety centers
- Academic research on digital literacy

## 📝 License & Use

Feel free to:
- Share with other families
- Print pages for offline reference
- Use in classrooms and community settings
- Adapt for your organization (with attribution to original sources)
- Contribute improvements back to this project

## 💡 Contributing

Found an error or have a suggestion? Please:
1. Check if it's already reported in Issues
2. Create a new issue with details
3. Submit a pull request with improvements

## 🙏 Acknowledgments

Built with the goal of helping families stay safe, respectful, and smart online.

Special thanks to the parents, educators, and safety experts who contributed real-world insights, classroom feedback, and expert guidance.

---

**Questions?** This resource is designed to be practical and helpful. Reach out with feedback anytime.
