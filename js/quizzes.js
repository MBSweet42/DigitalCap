// Digital Safety Quiz & Tools System
// Comprehensive, extensive quizzes and interactive tools with 40+ questions/scenarios each

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
                    { question: "Which is a RED FLAG in an online conversation?", options: ["Someone asking for your age and school name", "A friend asking how your day was", "A classmate inviting you to play a game", "Your teacher sharing homework updates"], correct: 0, explanation: "Never share personal information like your name, school, or location with people you don't know online." },
                    { question: "If someone online asks you for a picture, what should you do?", options: ["Send it if they seem nice", "Ask a trusted adult first", "Say NO and tell a trusted adult", "Ignore the message and keep talking to them"], correct: 2, explanation: "NEVER send pictures to people online, even if you think you know them. Always tell a trusted adult immediately." },
                    { question: "What does a 'digital footprint' mean?", options: ["Actual footprints you leave on your phone", "Everything you do online - posts, comments, likes, searches", "Pictures of your feet online", "The number of followers you have"], correct: 1, explanation: "Your digital footprint is everything you do online. It's permanent and people can see it!" },
                    { question: "If you get a mean message online, you should:", options: ["Send a mean message back", "Block them and tell a trusted adult", "Keep it secret so no one worries", "Try to find out who sent it"], correct: 1, explanation: "It's never your fault. Block them, screenshot it, and tell a trusted adult immediately." },
                    { question: "Which is a SAFE online interaction?", options: ["A stranger asking where you go to school", "Someone saying they'll be your special friend if you don't tell your parents", "A real-life friend inviting you to play a game online", "Someone asking for your home address"], correct: 2, explanation: "Only interact with people you actually know in real life online. Real friends never ask you to keep secrets from parents." },
                    { question: "What should you do if a stranger online wants to meet you in person?", options: ["Meet them somewhere public", "Ignore them and block them", "Tell a trusted adult immediately", "Both B and C"], correct: 3, explanation: "Never meet online strangers in person. This is extremely dangerous. Always tell a trusted adult right away." },
                    { question: "Is it okay to share your password with your best friend?", options: ["Yes, they won't tell anyone", "Only if they promise", "NO - never share passwords", "Only with close family"], correct: 2, explanation: "Never share passwords with ANYONE, not even best friends. Passwords keep your accounts and data safe." },
                    { question: "What's a strong password?", options: ["Your birthday", "Your name", "A mix of uppercase, lowercase, numbers, and symbols", "Something you use everywhere"], correct: 2, explanation: "Strong passwords are hard to guess: mix letters (upper/lower), numbers, and symbols. Use different passwords for different accounts." }
                ]
            },
            {
                id: 2,
                questions: [
                    { question: "What is 'grooming'?", options: ["Taking a shower", "An adult building trust with a young person to manipulate them", "Getting a haircut", "Making friends with people your age"], correct: 1, explanation: "Grooming is when an adult slowly builds trust to manipulate someone. Watch for excessive compliments, secrecy, and isolation." },
                    { question: "If something online makes you feel uncomfortable, you should:", options: ["Keep it secret", "Trust your gut feeling and tell a trusted adult", "Ignore it and hope it goes away", "Ask your friends what to do"], correct: 1, explanation: "Your feelings are SMART. If something feels wrong, it probably is. Tell a trusted adult right away." },
                    { question: "Which privacy setting is BEST?", options: ["Make your account public so everyone can see you", "Make your account private - only friends can see posts", "Don't use privacy settings at all", "Share your password with your best friend"], correct: 1, explanation: "Keep your accounts PRIVATE. Only your real friends should be able to see your posts and personal information." },
                    { question: "What's a 'scam'?", options: ["A video game", "A fake message trying to trick you into giving information or money", "A type of social media", "A way to make friends online"], correct: 1, explanation: "Scams use tricks like urgency, too-good-to-be-true offers, and fake urgent requests to trick you." },
                    { question: "You can ALWAYS tell a trusted adult if:", options: ["You did something wrong online", "Someone is acting concerning", "You feel unsafe or uncomfortable", "All of the above"], correct: 3, explanation: "Adults want to help and keep you safe. You're NEVER in trouble for telling them about online problems." },
                    { question: "What should you never do on public WiFi?", options: ["Check the weather", "Shop online or log into accounts", "Watch videos", "Text friends"], correct: 1, explanation: "Public WiFi isn't encrypted. Don't enter passwords or payment info on public WiFi - wait until you're home with private WiFi." },
                    { question: "If someone says 'your account is locked - click here to fix it', you should:", options: ["Click the link immediately", "Go to the app directly and log in normally", "Give them your password", "Panic and call the company"], correct: 1, explanation: "This is a phishing scam. Don't click links. Go directly to the app or website instead." },
                    { question: "What does 'two-factor authentication' do?", options: ["Makes passwords longer", "Adds an extra security step (like a code from your phone)", "Tracks your location", "Speeds up login"], correct: 1, explanation: "Two-factor authentication requires a second verification (usually a code). It makes accounts much harder to hack." }
                ]
            },
            {
                id: 3,
                questions: [
                    { question: "When is it okay to share your location online?", options: ["Only with best friends", "Never with strangers", "Only with verified accounts", "When using location features on apps"], correct: 1, explanation: "NEVER share your real location with people online. Predators use this information to find you in real life." },
                    { question: "If someone asks to keep your friendship secret, you should:", options: ["It's okay - lots of friendships are private", "Tell them yes to keep them happy", "STOP talking to them and tell a trusted adult", "Ask your parents first"], correct: 2, explanation: "Real friends and safe adults don't ask you to keep secrets from your parents. This is a major warning sign." },
                    { question: "How often should you check your privacy settings?", options: ["Once a year", "Never - they don't change", "Every few months or when apps update", "Only if you think there's a problem"], correct: 2, explanation: "Apps change their privacy settings frequently. Check them regularly to make sure your account stays private." },
                    { question: "What's the best response to a message from someone you don't know?", options: ["Be friendly and introduce yourself", "Don't respond and block them", "Ask them how they found you", "Try to figure out who they really are"], correct: 1, explanation: "Don't engage with strangers online. Block and delete. If it's serious, tell a trusted adult." },
                    { question: "If you accidentally shared personal info online, what should you do?", options: ["Hope no one saw it", "Tell a trusted adult and try to delete it", "Create a new account", "Just ignore it"], correct: 1, explanation: "Tell a trusted adult immediately so they can help. Try to delete it and monitor your account for suspicious activity." },
                    { question: "What's 'catfishing'?", options: ["Fishing for cats online", "Someone pretending to be someone they're not", "A video game about fishing", "A type of scam email"], correct: 1, explanation: "Catfishing is when someone creates a fake online identity to trick you. Always verify who you're talking to." },
                    { question: "How can you spot a fake profile?", options: ["Check for lots of followers", "Look for a real profile picture and consistent posts", "See if they have a blue checkmark", "Trust if they say they're real"], correct: 1, explanation: "Fake profiles often have stolen photos, few posts, and no verification. Be suspicious of new accounts claiming to know you." },
                    { question: "What should you do if someone sends you a link and says 'you HAVE to click this'?", options: ["Click it immediately", "Don't click - it's probably a scam", "Click it but don't log in", "Send it to your friends"], correct: 1, explanation: "Links with urgency ('click now!') are usually scams. Never click suspicious links - ask a trusted adult first." }
                ]
            },
            {
                id: 4,
                questions: [
                    { question: "What does 'consent' mean online?", options: ["Getting permission before sharing someone's photo", "Saying yes to everything", "Asking once and you're done", "Only asking close friends"], correct: 0, explanation: "Always ask permission before posting, sharing, or tagging someone online. Respect their privacy and choices." },
                    { question: "Is it okay to share screenshots of private messages?", options: ["Yes, if it's funny", "Only with close friends", "No - it breaks trust and privacy", "Yes, if they don't find out"], correct: 2, explanation: "Sharing private messages without permission is a violation of trust and privacy. Always ask first." },
                    { question: "What should you do if you see cyberbullying happening?", options: ["Join in so you're not left out", "Ignore it - it's not your problem", "Report it and support the person being bullied", "Tell the bully to stop privately"], correct: 2, explanation: "Be an upstander. Report bullying, don't participate, and show support to the person being hurt." },
                    { question: "How can you tell if an account is really who they say?", options: ["They say they're verified", "Check for blue checkmarks, real profile info, and ask friends", "If they have many followers", "You really can't tell"], correct: 1, explanation: "Look for verification badges, real profile details, and ask real-life friends if they know the person." },
                    { question: "What's a healthy screen time habit?", options: ["As much as you want", "Set limits and take breaks", "All day if it's for school", "No screens at all"], correct: 1, explanation: "Balance is key. Set reasonable limits, take breaks, and spend time with real-life friends and activities." },
                    { question: "Should you use the same email and password on multiple sites?", options: ["Yes, it's easier to remember", "Yes, but with uppercase letters", "No - use different passwords for important accounts", "Only for social media"], correct: 2, explanation: "If one account gets hacked, hackers can access ALL your accounts if they share passwords. Use unique passwords!" },
                    { question: "What should you do before downloading an app?", options: ["Just download it", "Check reviews, permissions, and age rating first", "Ask your friends if it's cool", "Download if it has a nice icon"], correct: 1, explanation: "Always check age ratings, reviews, and what data the app wants to access before downloading." },
                    { question: "If a game wants access to your contacts and location, should you allow it?", options: ["Yes, it's normal", "Maybe - if the game isn't about those things, probably not", "Always allow to use the app", "Only if you trust the company"], correct: 1, explanation: "A game doesn't need your contacts or location. Be suspicious of apps asking for permissions they don't need." }
                ]
            },
            {
                id: 5,
                questions: [
                    { question: "What's the difference between 'blocking' and 'reporting'?", options: ["They're the same thing", "Blocking stops their messages; reporting tells the platform", "Reporting blocks them", "Neither does anything"], correct: 1, explanation: "Blocking prevents them from contacting you. Reporting tells the platform about rule violations so they can act." },
                    { question: "If someone threatens you online, you should:", options: ["Ignore it and move on", "Screenshot it and tell a trusted adult", "Threaten them back", "Delete your account"], correct: 1, explanation: "Never ignore threats. Screenshot everything and tell a trusted adult or contact law enforcement if it's serious." },
                    { question: "What is 'doxing'?", options: ["Using a lot of apps", "Sharing someone's private information online without permission", "Typing while angry", "A social media platform"], correct: 1, explanation: "Doxing is releasing private info like addresses online. This is dangerous and often illegal." },
                    { question: "Should you post your plans in real-time on social media?", options: ["Yes, share everything as it happens", "No - this tells strangers where you are", "Only with close friends", "Only on private accounts"], correct: 1, explanation: "Real-time posts tell strangers exactly where you are. Wait to post until you've left that location." },
                    { question: "What does it mean when someone 'goes dark' online?", options: ["Their phone is broken", "They stop posting and might be in trouble", "They're using dark mode", "They logged out"], correct: 1, explanation: "Sudden silence from someone can be a warning sign. Check on people you care about if their behavior changes." },
                    { question: "If you're being excluded online, you should:", options: ["Join in with mean comments", "Post angry things", "Talk to a trusted adult about how you feel", "Ignore the group entirely"], correct: 2, explanation: "Online exclusion can be hurtful. Talk to someone you trust about managing these feelings." },
                    { question: "What's 'FOMO' and why is it a problem?", options: ["A new social media app", "Fear of Missing Out - feeling anxious about missing online events", "A type of scam", "Something that only happens offline"], correct: 1, explanation: "FOMO can lead to poor decisions and social anxiety. Remember: you can't do everything, and that's okay." },
                    { question: "If you see something disturbing online, you should:", options: ["Ignore it and forget about it", "Screenshot and share it with friends", "Report it to the platform and tell a trusted adult", "Comment with your opinion"], correct: 2, explanation: "Disturbing content should be reported. Don't spread it further by sharing. Tell a trusted adult." }
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
                    { question: "You get a message: 'CLICK NOW! You won a free iPhone! Don't tell anyone.' What's wrong?", options: ["Nothing - sounds like a great deal!", "The all-caps writing makes it hard to read", "URGENCY + too-good-to-be-true + secrecy = SCAM", "It's probably real but I need to ask my parents first"], correct: 2, explanation: "This has EVERY scam red flag: urgency (CLICK NOW), too-good-to-be-true (free iPhone), and secrecy (don't tell). It's definitely a scam!" },
                    { question: "Email says: 'Please update your PayPal password immediately - click here!' What should you do?", options: ["Click the link and update your password", "Go directly to PayPal.com and check your account there", "Forward it to your friends so they can update too", "Reply with your username to confirm your account"], correct: 1, explanation: "NEVER click links in emails. Go directly to the official website instead. This prevents phishing scams." },
                    { question: "A message says: 'u won $1,000,000!!! congrats!!!1 clck link to clame.' Red flags?", options: ["No red flags - this is exciting!", "Spelling errors, fake prizes, and suspicious links = RED FLAGS", "It's just friendly writing", "The person just has a keyboard issue"], correct: 1, explanation: "Spelling mistakes, grammatical errors, and poor English are common in scams. Real companies use proper spelling and grammar." },
                    { question: "Someone says: 'Pay $20 to unlock a secret gaming hack!' This is:", options: ["A legitimate way to get gaming help", "A reasonable investment", "A SCAM - there's no secret hack, and you'll lose your money", "Actually pretty cheap for gaming content"], correct: 2, explanation: "Never pay money online for gaming hacks or cheats. If it sounds too good to be true, it is!" },
                    { question: "What should you NEVER do when you spot a scam?", options: ["Click any links in the message", "Give personal information", "Send money", "All of the above"], correct: 3, explanation: "The 3 rules: DON'T CLICK, DON'T RESPOND, TELL AN ADULT. This protects you from every type of scam." },
                    { question: "You get a notification: 'Verify your account or it will be deleted!' Is this real?", options: ["Yes, I should verify immediately", "Probably not - this is a common scam tactic", "Maybe - I should ask the company", "Definitely not - my account is safe"], correct: 1, explanation: "This urgency tactic is a classic scam. Real companies don't delete accounts for no warning. Go directly to the app." },
                    { question: "Which website URL looks suspicious?", options: ["www.youtube.com", "www.y0utube.com (with a zero)", "www.youtube.co.uk", "www.youtube-official.com"], correct: 1, explanation: "Scammers use similar-looking URLs with slight misspellings. Always check the exact spelling carefully." },
                    { question: "Someone asks you to send them a 'verification code' they received. What should you do?", options: ["Send it - they asked nicely", "NEVER send it - codes are for YOU ONLY", "Send it if they're your friend", "Ask your friends first"], correct: 1, explanation: "Verification codes are PRIVATE. Never share them, even with friends. This lets scammers access accounts." }
                ]
            },
            {
                id: 2,
                questions: [
                    { question: "Text message: 'Your account has been locked! Enter your password here to unlock.' Danger level?", options: ["Low - seems official", "EXTREME - This is a phishing scam!", "Medium - I should ask my parents", "Low - It's from my bank"], correct: 1, explanation: "Real banks never ask for passwords via text or email. This is phishing. Go directly to the official app or website." },
                    { question: "You see an ad: 'Limited time! Get the newest gaming console for 50% off!' Should you click?", options: ["Yes - it's a limited time deal!", "No - go directly to the official store website instead", "Yes - official-looking ads are always real", "Ask a stranger online if it's real"], correct: 1, explanation: "Scammers copy real ads and links. Always go directly to official websites, not through clicked links." },
                    { question: "A DM says: 'Hey! I'm trying to contact you about your recent order. Reply with your order number and ZIP code.' Verdict?", options: ["This is legitimate customer service", "This is probably a SCAM fishing for personal info", "It's okay since they know about an order", "I should give them my info to help"], correct: 1, explanation: "Real companies don't ask for sensitive info via DM. They contact you through official channels in your account." },
                    { question: "You get an email asking you to 'verify your account urgently' with a link. What do you do?", options: ["Click the link immediately", "Type the website address directly into your browser instead", "Ignore the email completely", "Call the company using the number in the email"], correct: 1, explanation: "Always type the website address directly. Never click links in suspicious emails, even if they look official." },
                    { question: "Someone online says: 'Send me $5 and I'll send you $50 back!' What's wrong?", options: ["Nothing - that's a great return!", "This is obviously a SCAM - easy money doesn't work this way", "The ratio seems wrong", "You should ask for proof first"], correct: 1, explanation: "If it seems too good to be true, it absolutely is. This is one of the oldest scam tactics." },
                    { question: "A social media account with 1 post and no profile info follows you. Should you follow back?", options: ["Yes - be friendly!", "NO - this is a red flag for a fake/scam account", "Maybe - if they seem nice", "Only if they have a profile picture"], correct: 1, explanation: "Fake accounts often have no posts, minimal info, and follow many accounts. Be suspicious!" },
                    { question: "You get a notification: 'Claim your free gift card - limited to 100!' Red flag?", options: ["No - sounds great!", "YES - artificial scarcity (limited quantity) is a pressure tactic", "Maybe - I should check", "Only if it's from an unknown account"], correct: 1, explanation: "Creating urgency ('only 100 left!') and artificial scarcity push people to act without thinking. This is a classic scam tactic." },
                    { question: "An email has spelling errors and asks you to 'urgently confirm details.' What should you do?", options: ["Respond with your details", "IGNORE and report it - this is a phishing email", "Ask someone else if it's real", "Click the link to see what it's about"], correct: 1, explanation: "Poor spelling + urgent requests + asking for details = phishing scam. Report it and delete it." }
                ]
            },
            {
                id: 3,
                questions: [
                    { question: "You win a free gaming controller in a contest you never entered. This is:", options: ["Great luck!", "A SCAM - you didn't enter, so you didn't win", "Maybe it's a mistake but take it", "Probably a test from the game company"], correct: 1, explanation: "If you didn't enter a contest, you can't win. Fake prize notifications are classic scam tactics." },
                    { question: "What's a common scam tactic used to create URGENCY?", options: ["Offering discounts", "\"Your account will be deleted in 24 hours!\" or \"LIMITED TIME ONLY!\"", "Explaining the product details", "Asking for your opinion"], correct: 1, explanation: "Scammers create panic to make you act without thinking. Real companies don't force rushed decisions." },
                    { question: "A message says: 'We need to verify you're human - take this survey.' Red flag?", options: ["No - seems legitimate", "YES - this is how hackers gather personal info", "Maybe - some sites do this", "Only if it seems official"], correct: 1, explanation: "Verification 'surveys' are phishing scams designed to collect personal information. Don't fill them out." },
                    { question: "Someone asks for your social security number to 'confirm your identity.' You should:", options: ["Give it - they need it", "NEVER give it to anyone online", "Give it if they seem trustworthy", "Ask your friends first"], correct: 1, explanation: "Legitimate companies don't ask for SSNs via email/text. This is definitely a scam." },
                    { question: "You get a friend request from someone who looks like your real friend. Should you accept?", options: ["Yes, it's your friend!", "Check if they're already your friend - this is a common impersonation scam", "Accept but don't message them", "Just accept to be nice"], correct: 1, explanation: "Scammers often impersonate friends. Check if the account is real before accepting." },
                    { question: "Which is NOT a red flag for a scam?", options: ["Asking for personal information", "Requesting money upfront", "A professional-looking website with contact info", "Pressure to act quickly"], correct: 2, explanation: "A professional website with real contact info is a good sign. But combine it with other warning signs to verify." },
                    { question: "You get a call from 'Apple Support' about a virus. What's the best response?", options: ["Explain the problem and let them remote in", "Hang up and call Apple directly using a number from their official website", "Ask them to prove they're from Apple", "Tell them you need to check with your parents"], correct: 1, explanation: "Tech support scams are very common. Always call the company directly using official numbers, never numbers they provide." },
                    { question: "Someone offers to 'help you make money fast' and asks for upfront payment. Is this real?", options: ["Yes - it's an opportunity", "NO - this is a classic 'get rich quick' scam", "Maybe if they seem credible", "Depends on how much they're asking"], correct: 1, explanation: "Real opportunities don't require upfront payments. Get-rich-quick schemes are almost always scams." }
                ]
            },
            {
                id: 4,
                questions: [
                    { question: "A message says: 'Congratulations! You're our special customer. Click to claim your prize.' Red flag?", options: ["No, it seems nice", "Yes - you weren't told about this contest", "Maybe - check if it's real", "No, you're definitely a special customer"], correct: 1, explanation: "Unsolicited prize notifications claiming you're 'special' are classic scams. Real contests confirm through official channels." },
                    { question: "Which is a sign of a REAL company's communication?", options: ["Poor grammar and spelling mistakes", "Generic greetings like 'Hello User'", "Professional tone with correct spelling and personalization", "Pressure to act immediately"], correct: 2, explanation: "Real companies invest in professional communication. Poor grammar and spelling are strong indicators of scams." },
                    { question: "You see an ad claiming 'Make $1000 in your first week!' This is likely:", options: ["A legitimate job opportunity", "A SCAM or pyramid scheme - get-rich-quick schemes aren't real", "Just exaggerated marketing", "An MLM that's actually successful"], correct: 1, explanation: "Get-rich-quick promises are almost always scams. Real jobs have realistic pay and requirements." },
                    { question: "What should you check before trusting a website?", options: ["How many followers it has on social media", "If it's the official website with correct spelling and real security", "If it looks professional", "If your friends have heard of it"], correct: 1, explanation: "Check that the URL is spelled correctly, the site has HTTPS security, and there's real contact info." },
                    { question: "Someone offers to 'boost your social media' for a fee. Is this trustworthy?", options: ["Yes - social media growth requires investment", "NO - these are almost always scams that steal money and info", "Maybe if they have reviews", "Only if they're verified"], correct: 1, explanation: "Social media 'growth services' are scams. Your growth comes from real engagement, not purchased services." },
                    { question: "If you think you've been scammed, what's the FIRST thing to do?", options: ["Panic and try to get your money back", "Tell a trusted adult immediately", "Try to contact the scammers", "Post about it on social media"], correct: 1, explanation: "Tell a trusted adult right away. They can help you report it and prevent further damage." },
                    { question: "A celebrity asks YOU personally to 'invest in their new product.' Red flag?", options: ["No - they're famous!", "YES - celebrities don't DM random people about investments", "Maybe - check their followers", "Only if you don't recognize them"], correct: 1, explanation: "Celebrity impersonation scams are very common. Celebrities don't randomly DM people. This is definitely fake." },
                    { question: "You get a text: 'Your bank locked your account. Click here.' What do you do?", options: ["Click immediately and log in", "Call your bank using a number from your card or bank app", "Ignore it completely", "Ask what they want"], correct: 1, explanation: "Banks never send links via text. Call them directly using official numbers to verify." }
                ]
            },
            {
                id: 5,
                questions: [
                    { question: "Someone you don't know sends you a screenshot of a 'prize' you won. Should you claim it?", options: ["Yes - it's proof you won!", "NO - this is a common scam variation", "Maybe if the prize is small", "Only if you enter many contests"], correct: 1, explanation: "Fake screenshots look convincing but are easy to make. You can't win what you didn't enter." },
                    { question: "What do hackers often do with hacked accounts?", options: ["Delete them", "Use them to scam your friends and family", "Just look at your posts", "Sell them online"], correct: 1, explanation: "Hackers often use accounts to scam friends. This is why strong passwords and privacy settings matter!" },
                    { question: "A message says: 'Your WiFi bill is unpaid - pay here.' Is this a scam?", options: ["No - my WiFi needs paying!", "YES - companies contact through official accounts, not random messages", "Maybe - I should check my bill", "Only if you don't have WiFi"], correct: 1, explanation: "ISPs contact through their own apps/websites, never via random messages or links." },
                    { question: "Someone offers to 'hack' an account for you (even if it's 'fun'). What should you do?", options: ["Say yes - it's just a prank", "STOP - this is illegal and they might scam you", "Ask how they'd do it", "Only if it's just a game account"], correct: 1, explanation: "Hacking is illegal. People offering to 'help' are likely scammers or want to steal your info." },
                    { question: "You get a complex math problem offering money to solve it. Red flag?", options: ["No - I like math problems!", "YES - this is a scam to steal your info or get you to click malware", "Maybe - what's the problem?", "Only if I'm bad at math"], correct: 1, explanation: "Scammers use tricky 'solve this' messages to get you to click malware or give personal info." },
                    { question: "What information is SAFE to share publicly online?", options: ["Your birthday and school", "Your location and phone number", "Your interests, hobbies, and general thoughts", "Your passwords and accounts"], correct: 2, explanation: "Safe to share: interests, hobbies, opinions. Never share: location, phone, email, passwords, school, birthday." },
                    { question: "If a website doesn't have 'https' at the start, should you shop there?", options: ["Yes - it doesn't matter", "NO - HTTPS means the site is encrypted and safer", "Maybe - if you trust the site", "Only on mobile"], correct: 1, explanation: "HTTPS (the 's' matters!) means the site encrypts your data. Never enter payment info on non-HTTPS sites." },
                    { question: "Someone asks you to buy gift cards and send them codes. Is this a scam?", options: ["No - I'm just being generous", "YES - scammers use gift cards because they're untraceable", "Maybe - what for?", "Only if they seem suspicious"], correct: 1, explanation: "Gift card code scams are huge. No legitimate reason to ask for gift card codes. This is definitely a scam." }
                ]
            }
        ]
    }
};

// DM and Friend Request Simulator
const dmSimulator = {
    title: "DM & Friend Request Simulator",
    description: "Is this message safe? Analyze real-world message scenarios!",
    difficulty: "Beginner",
    icon: "💬",
    scenarios: [
        { message: "Hey! I love your profile. I'm 16 and go to [random school]. Want to be friends?", sender: "Unknown Account", usersSafety: "UNSAFE - Stranger claiming to be your age, asking to be friends privately", explanation: "Only accept friend requests from people you actually know in real life." },
        { message: "Hi! It's me from math class. Do you have tomorrow's homework?", sender: "Real Classmate", usersSafety: "SAFE - Classmate asking about homework", explanation: "This is normal school communication from someone you know." },
        { message: "OMG you're so pretty 😍 I want to get to know you better. Don't tell your parents!", sender: "Older Teen", usersSafety: "UNSAFE - Compliments + secrecy = MAJOR RED FLAGS", explanation: "Real people don't ask you to keep secrets from your parents. This is grooming behavior." },
        { message: "You won a free Fortnite skin! Click here to claim: [link]", sender: "Gaming Account", usersSafety: "UNSAFE - Too good to be true with suspicious link", explanation: "Scammers use fake prizes to get you to click malware links." },
        { message: "Hey, my phone's dead, it's your friend from school. Can you send me $5?", sender: "Friend Name", usersSafety: "UNSAFE - Check if this is really your friend (account looks different?)", explanation: "Scammers impersonate friends. Ask them something only your real friend would know." },
        { message: "Can I ask you something personal? Like where you live and what school you go to?", sender: "Online Gamer", usersSafety: "UNSAFE - Asking for personal location info", explanation: "Never share your school name or address with online strangers." },
        { message: "Saw your post! That's cool. I go to your school too!", sender: "Unfamiliar Account", usersSafety: "UNSAFE - Claiming to be from your school but you don't recognize them", explanation: "Be suspicious of accounts claiming to know you or know your location." },
        { message: "This is Coach Mike. Great game yesterday! Practice 3pm tomorrow.", sender: "Coach Mike", usersSafety: "SAFE - Coach with legitimate message", explanation: "Communication from adults you know (coaches, teachers) about activities is safe." },
        { message: "URGENT! Your account will be deleted if you don't verify NOW! [link]", sender: "App Support", usersSafety: "UNSAFE - Phishing with urgency and suspicious link", explanation: "Real apps don't delete accounts via message. Go directly to the app to verify." },
        { message: "Your portfolio is amazing! Want to model for my company? Reply with your parents' contact!", sender: "Fashion Scout", usersSafety: "UNSAFE - Unsolicited modeling offer from stranger", explanation: "Real modeling scouts don't recruit via DM. This is either a scam or predatory." },
        { message: "Hey! Want to play Minecraft together this weekend?", sender: "Classmate", usersSafety: "SAFE - Friend suggesting fun activity", explanation: "Gaming with classmates is fine, especially for games without open chat." },
        { message: "I've been watching your posts for months... you seem amazing 💕", sender: "Older Account", usersSafety: "UNSAFE - Stalker behavior from stranger", explanation: "This shows unhealthy interest. Block and tell a trusted adult." },
        { message: "You owe me money. If you don't pay, I'll share your photos.", sender: "Unknown", usersSafety: "UNSAFE - Extortion/blackmail attempt", explanation: "This is a serious crime. Screenshot and tell a trusted adult and police immediately." },
        { message: "My mom wants your address for the birthday party invite", sender: "School Friend", usersSafety: "SAFE - Friend asking address for legitimate event", explanation: "Getting address info for a real event from someone you know is normal." },
        { message: "Can we keep our chats secret from your parents? They won't understand us.", sender: "Online Friend", usersSafety: "UNSAFE - Adult trying to isolate you from parents", explanation: "Adults who ask for secrecy are dangerous. Real friends don't do this." }
    ]
};

// Family Digital Dilemma
const familyDilemma = {
    title: "Family Digital Dilemma",
    description: "Navigate real-world digital decisions with family impact!",
    difficulty: "Intermediate",
    icon: "🤔",
    dilemmas: [
        {
            scenario: "Your friend texts you a funny screenshot of a private conversation where another friend said something mean. They want you to share it with the group chat.",
            options: [
                { choice: "Share it - it's funny!", consequence: "WRONG: You broke their trust and hurt someone. Others might do the same to you." },
                { choice: "Don't share it. Tell your friend it hurts people.", consequence: "CORRECT: You respected privacy and showed empathy. Good friend behavior!" },
                { choice: "Share it but ask permission first", consequence: "BETTER: Good instinct, but really the right answer is not to share private messages at all." }
            ]
        },
        {
            scenario: "A stranger online says they're 13 and asks you to FaceTime. They seem cool and know a lot about your hobbies.",
            options: [
                { choice: "FaceTime them", consequence: "DANGEROUS: This could be an adult lying. Never video chat with online strangers." },
                { choice: "Say no and block them", consequence: "CORRECT: Online strangers are not safe. You made the right call." },
                { choice: "Agree but don't show your face", consequence: "STILL RISKY: You can't verify who they really are. Block is the safest option." }
            ]
        },
        {
            scenario: "You see someone being cyberbullied in a group chat. Nobody else is saying anything.",
            options: [
                { choice: "Stay quiet so you don't become a target", consequence: "WRONG: Your silence enables the bullying. The person feels alone." },
                { choice: "Join in to fit in with the group", consequence: "VERY WRONG: This makes bullying worse and hurts someone. Never do this." },
                { choice: "Support the person and report the bullying", consequence: "CORRECT: You're an upstander. Real courage is standing up for others." }
            ]
        },
        {
            scenario: "Your parent wants to 'follow' you on all your social media to see what you post.",
            options: [
                { choice: "Refuse completely - it's an invasion of privacy", consequence: "PARTIALLY WRONG: Privacy matters, but parents have a right to know what you share publicly." },
                { choice: "Agree to everything", consequence: "OKAY, but you could discuss boundaries about what they see." },
                { choice: "Talk about privacy vs. safety - agree on reasonable monitoring", consequence: "CORRECT: Open communication is best. You can have privacy AND safety." }
            ]
        },
        {
            scenario: "You accidentally see your sibling's password when they log in. Your sibling is being mean to you.",
            options: [
                { choice: "Use it to 'prank' them by posting as them", consequence: "WRONG: This is hacking and breaks trust. Your sibling will know it was you." },
                { choice: "Tell them you saw it and suggest they change it", consequence: "CORRECT: You did the trustworthy thing." },
                { choice: "Keep it secret and save it for later", consequence: "WRONG: This is dishonest and could lead to bigger problems." }
            ]
        },
        {
            scenario: "A game you want to download says it needs access to your location, contacts, and photos.",
            options: [
                { choice: "Decline permissions - the game doesn't need them", consequence: "CORRECT: The game doesn't need this info. Protecting privacy is smart." },
                { choice: "Allow all permissions - you need the app", consequence: "WRONG: Too much data shared for something not necessary." },
                { choice: "Ask a parent before deciding", consequence: "GOOD: Parents can help you make smart decisions about apps." }
            ]
        },
        {
            scenario: "You get a text from your bank saying your account is locked and to click a link.",
            options: [
                { choice: "Click the link immediately", consequence: "VERY WRONG: This is almost certainly a phishing scam." },
                { choice: "Call your bank using the number on your card", consequence: "CORRECT: Always verify through official channels, not links in texts." },
                { choice: "Ask a friend if it's real", consequence: "NOT BEST: Ask a trusted adult instead. They can verify with the bank." }
            ]
        },
        {
            scenario: "Your friend sends you an app link saying 'Everyone's using it! You have to get it!'",
            options: [
                { choice: "Download it immediately", consequence: "RISKY: Always research apps first. Popularity doesn't mean safety." },
                { choice: "Check reviews and age rating first", consequence: "CORRECT: Good habit! Always research before downloading." },
                { choice: "Download it but don't give it permissions", consequence: "BETTER THAN RUSHING, but still check first." }
            ]
        },
        {
            scenario: "Someone online offers you free VBucks (Fortnite currency) if you give them your account info.",
            options: [
                { choice: "Give them your info - free currency!", consequence: "VERY WRONG: Your account will be stolen. This is a classic scam." },
                { choice: "Say no and block them", consequence: "CORRECT: If it's free, they want something in return (your account!)" },
                { choice: "Ask your friend if it's real", consequence: "NOT BEST: It's definitely a scam. Block them." }
            ]
        },
        {
            scenario: "Your parent catches you looking at content you probably shouldn't. They're disappointed.",
            options: [
                { choice: "Lie and say someone hacked your account", consequence: "WRONG: Lying makes it worse. Trust is broken." },
                { choice: "Tell the truth and apologize", consequence: "CORRECT: Honesty helps rebuild trust. It's hard but right." },
                { choice: "Get defensive and angry", consequence: "WRONG: This makes the situation worse and shows immaturity." }
            ]
        }
    ]
};

// Quiz Engine (Universal)
function startQuiz(quizKey, variationId = null) {
    const quiz = quizzes[quizKey];
    if (!quiz) return;

    const variation = variationId
        ? quiz.variations.find(v => v.id === variationId)
        : quiz.variations[Math.floor(Math.random() * quiz.variations.length)];

    if (!variation) return;

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

// DM Simulator
function startDMSimulator() {
    const scenarios = dmSimulator.scenarios.sort(() => Math.random() - 0.5).slice(0, 5);
    window.currentDMSimulator = {
        scenarios: scenarios,
        currentScenario: 0,
        score: 0
    };
    displayDMScenario();
}

function displayDMScenario() {
    const sim = window.currentDMSimulator;
    const scenario = sim.scenarios[sim.currentScenario];

    const html = `
        <div class="quiz-container">
            <div class="quiz-header">
                <span>${dmSimulator.icon} ${dmSimulator.title}</span>
                <span class="quiz-progress">Scenario ${sim.currentScenario + 1}/${sim.scenarios.length}</span>
            </div>

            <div class="quiz-content">
                <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; border-left: 4px solid var(--secondary);">
                    <strong style="display: block; color: var(--primary); margin-bottom: 0.5rem;">📱 From: ${scenario.sender}</strong>
                    <p style="margin: 0; font-style: italic; color: var(--text-dark);">"${scenario.message}"</p>
                </div>

                <h3>Is this message SAFE or UNSAFE?</h3>

                <div class="quiz-options">
                    <button class="quiz-option" onclick="checkDMAnswer('SAFE')">✅ SAFE</button>
                    <button class="quiz-option" onclick="checkDMAnswer('UNSAFE')">⚠️ UNSAFE</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('quizDisplay').innerHTML = html;
}

function checkDMAnswer(answer) {
    const sim = window.currentDMSimulator;
    const scenario = sim.scenarios[sim.currentScenario];
    const isCorrect = scenario.usersSafety.includes(answer);

    if (isCorrect) sim.score++;

    const html = `
        <div class="quiz-container">
            <div class="quiz-header">
                <span>${dmSimulator.icon} ${dmSimulator.title}</span>
                <span class="quiz-progress">Scenario ${sim.currentScenario + 1}/${sim.scenarios.length}</span>
            </div>

            <div class="quiz-content">
                <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; border-left: 4px solid var(--secondary);">
                    <strong style="display: block; color: var(--primary); margin-bottom: 0.5rem;">📱 From: ${scenario.sender}</strong>
                    <p style="margin: 0; font-style: italic; color: var(--text-dark);">"${scenario.message}"</p>
                </div>

                <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
                    <strong>${isCorrect ? '✓ Correct!' : '✗ Not quite!'}</strong>
                    <p><strong>Answer:</strong> ${scenario.usersSafety}</p>
                    <p><strong>Why:</strong> ${scenario.explanation}</p>
                </div>

                <button class="btn btn-primary" onclick="nextDMScenario()" style="width: 100%; margin-top: 1rem;">
                    ${sim.currentScenario < sim.scenarios.length - 1 ? 'Next Scenario' : 'See Results'}
                </button>
            </div>
        </div>
    `;

    document.getElementById('quizDisplay').innerHTML = html;
}

function nextDMScenario() {
    const sim = window.currentDMSimulator;
    if (sim.currentScenario < sim.scenarios.length - 1) {
        sim.currentScenario++;
        displayDMScenario();
    } else {
        showDMResults();
    }
}

function showDMResults() {
    const sim = window.currentDMSimulator;
    const percentage = Math.round((sim.score / sim.scenarios.length) * 100);

    const html = `
        <div class="quiz-results">
            <div class="results-header">
                <h2>Great Job! 💬</h2>
            </div>

            <div class="results-score">
                <div class="score-circle">${percentage}%</div>
                <p class="score-text">${sim.score}/${sim.scenarios.length} scenarios analyzed correctly</p>
            </div>

            <p class="results-message">You're getting better at spotting suspicious messages. Remember: when in doubt, ask a trusted adult!</p>

            <div class="results-actions">
                <button class="btn btn-primary" onclick="startDMSimulator()">Try Again</button>
                <button class="btn" onclick="document.getElementById('quizDisplay').innerHTML = ''">Back to Tools</button>
            </div>
        </div>
    `;

    document.getElementById('quizDisplay').innerHTML = html;
}

// Family Dilemma
function startFamilyDilemma() {
    const dilemmas = familyDilemma.dilemmas.sort(() => Math.random() - 0.5).slice(0, 4);
    window.currentDilemma = {
        dilemmas: dilemmas,
        currentDilemma: 0,
        score: 0
    };
    displayFamilyDilemma();
}

function displayFamilyDilemma() {
    const dilemma = window.currentDilemma;
    const current = dilemma.dilemmas[dilemma.currentDilemma];

    const html = `
        <div class="quiz-container">
            <div class="quiz-header">
                <span>${familyDilemma.icon} ${familyDilemma.title}</span>
                <span class="quiz-progress">Scenario ${dilemma.currentDilemma + 1}/${dilemma.dilemmas.length}</span>
            </div>

            <div class="quiz-content">
                <h3>${current.scenario}</h3>

                <div class="quiz-options">
                    ${current.options.map((opt, idx) => `
                        <button class="quiz-option" onclick="selectDilemmaChoice(${idx})" style="text-align: left;">
                            ${opt.choice}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('quizDisplay').innerHTML = html;
}

function selectDilemmaChoice(idx) {
    const dilemma = window.currentDilemma;
    const current = dilemma.dilemmas[dilemma.currentDilemma];
    const choice = current.options[idx];
    const isCorrect = choice.consequence.includes('CORRECT');

    if (isCorrect) dilemma.score++;

    const html = `
        <div class="quiz-container">
            <div class="quiz-header">
                <span>${familyDilemma.icon} ${familyDilemma.title}</span>
                <span class="quiz-progress">Scenario ${dilemma.currentDilemma + 1}/${dilemma.dilemmas.length}</span>
            </div>

            <div class="quiz-content">
                <h3>${current.scenario}</h3>

                <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
                    <strong>${isCorrect ? '✓ Great choice!' : '⚠️ Not the best choice'}</strong>
                    <p>${choice.consequence}</p>
                </div>

                <button class="btn btn-primary" onclick="nextDilemma()" style="width: 100%; margin-top: 1rem;">
                    ${dilemma.currentDilemma < dilemma.dilemmas.length - 1 ? 'Next Scenario' : 'See Results'}
                </button>
            </div>
        </div>
    `;

    document.getElementById('quizDisplay').innerHTML = html;
}

function nextDilemma() {
    const dilemma = window.currentDilemma;
    if (dilemma.currentDilemma < dilemma.dilemmas.length - 1) {
        dilemma.currentDilemma++;
        displayFamilyDilemma();
    } else {
        showDilemmaResults();
    }
}

function showDilemmaResults() {
    const dilemma = window.currentDilemma;
    const percentage = Math.round((dilemma.score / dilemma.dilemmas.length) * 100);

    const html = `
        <div class="quiz-results">
            <div class="results-header">
                <h2>Decisions Made! 🤔</h2>
            </div>

            <div class="results-score">
                <div class="score-circle">${percentage}%</div>
                <p class="score-text">${dilemma.score}/${dilemma.dilemmas.length} good decisions</p>
            </div>

            <p class="results-message">Digital life is full of tough choices. You're learning to think them through carefully!</p>

            <div class="results-actions">
                <button class="btn btn-primary" onclick="startFamilyDilemma()">Try Again</button>
                <button class="btn" onclick="document.getElementById('quizDisplay').innerHTML = ''">Back to Tools</button>
            </div>
        </div>
    `;

    document.getElementById('quizDisplay').innerHTML = html;
}
