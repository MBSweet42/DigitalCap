# Digital Safety Hub

A comprehensive resource for families about digital safety, app information, and digital etiquette. Built for parents and kids to understand the digital world together.

## Running Locally

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

## Project Structure

```
digital-safety-hub/
├── index.html              — Home page
├── apps.html               — Searchable app directory
├── safety.html             — Digital safety articles
├── etiquette.html          — Digital etiquette articles
├── interactive.html        — Interactive tools hub
├── about.html              — About & sources
├── css/
│   └── style.css           — All styling (warm & friendly theme)
├── js/
│   ├── main.js             — Navigation & mobile menu
│   ├── apps-data.js        — 20 popular apps database
│   ├── content-data.js     — Safety & etiquette articles
│   ├── quiz-data.js        — Quiz questions & answers
│   ├── conversation-data.js — Conversation starters
│   ├── app-directory.js    — Search & filter logic
│   └── quiz.js             — Quiz, checklist, slideshow engines
└── README.md               — This file
```

## Features

### App Directory
- Search 20 popular apps kids use
- Filter by category, chat capability, location tracking, internet access
- Detailed info on each app: safety risks, privacy notes, tips for parents & kids

### Digital Safety Articles
- Password safety
- Spotting scams & phishing
- Recognizing grooming & predatory behavior
- Privacy settings basics
- Screen time & digital wellness
- Spotting misinformation

### Digital Etiquette Articles
- Online respect & netiquette
- Cyberbullying recognition & response
- Your digital footprint
- Healthy digital relationships

### Interactive Tools
- 2 quizzes (Digital Safety Basics, Spot the Scam)
- Interactive checklist (Is This App Safe?)
- Visual slideshow (Setting Parental Controls in 5 Steps)
- 25+ family conversation starters by age group

## Adding More Apps

To add more apps to the directory:

1. Open `js/apps-data.js`
2. Find the `appsData` array
3. Copy an existing app object and paste it at the end
4. Fill in the new app details (name, description, features, risks, etc.)
5. Save the file
6. Refresh your browser to see the new app

Example template:
```javascript
{
    id: 21,  // Increment the ID
    name: 'AppName',
    category: 'Social Media',  // or other category
    ageRecommendation: 13,
    description: 'What the app is in one sentence.',
    hasChat: true,
    chatDetails: 'Description of chat features...',
    hasOpenInternet: false,
    hasLocationTracking: false,
    mainRisks: ['Risk 1', 'Risk 2', 'Risk 3'],
    privacyNotes: 'What data the app collects...',
    tipsForParents: ['Tip 1', 'Tip 2', 'Tip 3'],
    tipsForKids: ['Tip 1', 'Tip 2', 'Tip 3'],
    source: 'Common Sense Media, ___'
}
```

## Adding Articles or Quizzes

### Safety Articles
Edit `js/content-data.js` → `safetyArticles` array. Follow the existing format.

### Etiquette Articles
Edit `js/content-data.js` → `etiquetteArticles` array. Follow the existing format.

### New Quizzes
Edit `js/quiz-data.js` → `quizzes` array. Follow the existing format.

### Conversation Starters
Edit `js/conversation-data.js` → `conversationStarters` array. Follow the existing format.

## Hosting & Deployment

When you're ready to share this online, you have several free or cheap options:

### Option 1: Netlify (Easiest for Non-Developers)
1. Go to [netlify.com](https://netlify.com)
2. Create a free account
3. Drag and drop the `digital-safety-hub` folder
4. Your site is live in seconds (you get a free URL)
5. Connect your own domain if you want

### Option 2: GitHub Pages (Free)
1. Create a GitHub account if you don't have one
2. Create a new public repository
3. Upload the files (or use git push)
4. Go to Settings → Pages → Select "main" branch
5. Your site is live at `yourusername.github.io/digital-safety-hub`

### Option 3: Vercel (Also Easy)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account or drag & drop files
3. Your site is live with automatic updates

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Safari, Edge). The site is responsive and works on phones, tablets, and desktops.

## Privacy & Data

- No personal data is collected
- Quiz scores and checklist progress are saved to your device only (via localStorage)
- No tracking, analytics, or ads
- Works completely offline (except for initial load)

## Accessibility

The site aims to be accessible to all users:
- High contrast colors for readability
- Semantic HTML for screen readers
- Keyboard navigation support
- Mobile-responsive design

If you find accessibility issues, please report them.

## Updating Content

Check content regularly to ensure it stays accurate. Apps change features, new threats emerge, and advice evolves.

Suggested review frequency:
- Apps & features: Every 2-3 months
- Safety articles: Every 6 months
- Etiquette content: Annually

## Getting Help

### If something breaks:
1. Check the browser console for errors (F12 → Console tab)
2. Try refreshing the page (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
3. Clear your browser cache
4. Try a different browser

### If content seems wrong:
- Check the sources we cite (Common Sense Media, FTC, NCMEC)
- Verify on the official app's safety page
- Cross-reference with multiple trusted sources

## License & Use

Feel free to:
- Share the site with other families
- Print pages for offline reference
- Use it in classrooms or community settings
- Adapt it for your organization (with attribution to original sources)

## Acknowledgments

Content adapted from:
- Common Sense Media
- NCMEC/NetSmartz
- FTC OnGuardOnline
- ConnectSafely
- Internet Matters
- StaySafeOnline.org
- Official app safety centers

## Questions?

This resource is designed to be practical and helpful. If you have questions or suggestions, reach out.

---

**Built with the goal of helping families stay safe, respectful, and smart online.**
