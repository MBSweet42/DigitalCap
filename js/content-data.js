// Digital Safety & Etiquette Content
// Adapted from FTC OnGuardOnline, NCMEC/NetSmartz, Common Sense Media, ConnectSafely

const safetyArticles = [
    {
        id: 1,
        category: 'Digital Safety',
        title: 'Password Safety: Protecting Your Digital Life',
        content: `
            <h3>Why Strong Passwords Matter</h3>
            <p>Your password is like a key to your digital home. A weak password makes it easy for hackers to access your accounts, steal your information, and impersonate you.</p>

            <h3>Creating Strong Passwords</h3>
            <ul>
                <li><strong>Use at least 12 characters</strong> — longer is better</li>
                <li><strong>Mix it up:</strong> Use uppercase letters, lowercase letters, numbers, and symbols (!@#$%)</li>
                <li><strong>Avoid personal information:</strong> Don't use your name, birthday, or address</li>
                <li><strong>Don't use dictionary words</strong> — hackers use password-cracking software that tries common words</li>
                <li><strong>Make it unique:</strong> Use different passwords for important accounts (email, banking, school)</li>
            </ul>

            <h3>Password Security Tips</h3>
            <ul>
                <li><strong>Never share your password</strong> — not even with close friends (people change, relationships end)</li>
                <li><strong>Don't write it down</strong> or save it in unsecured places</li>
                <li><strong>Use a password manager</strong> like Bitwarden, 1Password, or KeePass if you have many accounts</li>
                <li><strong>Enable two-factor authentication (2FA)</strong> on important accounts — it adds a second step even if someone has your password</li>
                <li><strong>Change passwords regularly</strong> (every 3-6 months for important accounts)</li>
                <li><strong>If hacked, change it immediately</strong> and check account activity</li>
            </ul>

            <h3>Red Flags</h3>
            <ul>
                <li>Someone asking for your password (legitimate companies never ask)</li>
                <li>Apps that force you to enter a password multiple times</li>
                <li>Websites that don't use HTTPS (check for the lock icon in your address bar)</li>
            </ul>
        `
    },
    {
        id: 2,
        category: 'Digital Safety',
        title: 'Spotting Scams & Phishing Attacks',
        content: `
            <h3>What Are Scams and Phishing?</h3>
            <p><strong>Scams</strong> are tricks to steal your money or information. <strong>Phishing</strong> is when scammers pretend to be a trusted company (like Instagram, Apple, or your bank) to get you to click a link or enter your password.</p>

            <h3>Common Types of Scams</h3>
            <ul>
                <li><strong>Free Robux/V-Bucks offers:</strong> Nothing is free. If someone is offering free gaming currency, they're likely trying to steal your account or money.</li>
                <li><strong>"You've won a prize!":</strong> If you didn't enter a contest, you didn't win. Scammers use this to get you to click links.</li>
                <li><strong>Account verification requests:</strong> Instagram, TikTok, etc. don't ask you to "verify your account" by clicking a link.</li>
                <li><strong>Job scams:</strong> "Easy money working from home!" Usually requires you to pay upfront or give personal info.</li>
                <li><strong>Romance scams:</strong> Strangers building relationships to eventually ask for money or gift cards.</li>
            </ul>

            <h3>How to Spot a Phishing Email or Message</h3>
            <ul>
                <li><strong>Suspicious sender:</strong> Look at the actual email address, not just the display name. Scammers spoof addresses that look almost real.</li>
                <li><strong>Urgency:</strong> "Click now or your account will be closed!" Real companies give you time.</li>
                <li><strong>Asking for sensitive info:</strong> Banks and apps never ask for passwords via email/message.</li>
                <li><strong>Suspicious links:</strong> Hover over links (don't click) to see where they really go.</li>
                <li><strong>Poor grammar/spelling:</strong> Many phishing emails have errors.</li>
                <li><strong>Strange requests:</strong> "Confirm your password," "Update payment information," etc.</li>
            </ul>

            <h3>If You Think You've Been Scammed</h3>
            <ul>
                <li><strong>Change your password immediately</strong></li>
                <li><strong>Contact the real company directly</strong> (not via a link in the scam message)</li>
                <li><strong>Report the scam</strong> to the platform (Instagram, Discord, etc.)</li>
                <li><strong>Tell an adult</strong> if money or credit card info was involved</li>
                <li><strong>Monitor your accounts</strong> for suspicious activity</li>
            </ul>
        `
    },
    {
        id: 3,
        category: 'Digital Safety',
        title: 'Recognizing Grooming & Predatory Behavior',
        content: `
            <h3>What Is Grooming?</h3>
            <p>Grooming is when an adult builds a relationship with a young person to gain trust and eventually exploit them. It can happen online, and predators often target kids without realizing they're being manipulated.</p>

            <h3>Warning Signs of Grooming</h3>
            <ul>
                <li><strong>Adults asking unusual personal questions:</strong> "Where do you go to school?" "What does your bedroom look like?" "When are your parents home?"</li>
                <li><strong>An older person claiming to be your age:</strong> "I'm actually 14 too!" — often a lie to seem relatable.</li>
                <li><strong>Compliments about appearance or sexuality:</strong> "You're so mature for your age," "Send me a picture of yourself"</li>
                <li><strong>Isolation tactics:</strong> "Don't tell your parents about our chats. They'd just ground you."</li>
                <li><strong>Gifts or money:</strong> "I want to send you a gift card," "Let me donate to your Patreon"</li>
                <li><strong>Gradually pushing boundaries:</strong> Starting innocent, then asking for inappropriate photos, video calls, or meetings</li>
                <li><strong>Guilt-tripping:</strong> "After everything I've done for you?" when you express discomfort</li>
            </ul>

            <h3>What to Do</h3>
            <ul>
                <li><strong>Trust your gut:</strong> If something feels weird, it probably is.</li>
                <li><strong>Don't engage alone:</strong> If someone is making you uncomfortable in a chat, don't continue the conversation.</li>
                <li><strong>Tell an adult immediately:</strong> A parent, school counselor, or trusted teacher — not your friends.</li>
                <li><strong>Don't delete the evidence:</strong> Keep screenshots; they help authorities.</li>
                <li><strong>Block and report:</strong> Use the platform's reporting tools.</li>
                <li><strong>Remember: It's not your fault.</strong> If someone is trying to exploit you, that's 100% on them, not you.</li>
            </ul>

            <h3>Resources</h3>
            <ul>
                <li><strong>CyberTipline:</strong> cybertipline.org (report exploitation to the National Center for Missing & Exploited Children)</li>
                <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
            </ul>
        `
    },
    {
        id: 4,
        category: 'Digital Safety',
        title: 'Privacy Settings: Taking Control of Your Information',
        content: `
            <h3>Why Privacy Matters</h3>
            <p>Your personal information is valuable. Companies, advertisers, and bad actors can use it to target you, track you, or steal from you. Taking control of your privacy settings is one of the best defenses.</p>

            <h3>Basic Privacy Steps for Every Account</h3>
            <ul>
                <li><strong>Make accounts private:</strong> On Instagram, TikTok, Snapchat, and others, switch to a private account so only approved followers can see your posts.</li>
                <li><strong>Review who you've approved:</strong> Go through your followers list and remove accounts you don't know or trust.</li>
                <li><strong>Turn off location sharing:</strong> Disable location tagging and geolocation features. Don't check in at home.</li>
                <li><strong>Limit who can message you:</strong> Restrict DMs to friends only or people you follow.</li>
                <li><strong>Control who can comment:</strong> Disable comments or require approval.</li>
                <li><strong>Adjust notification settings:</strong> Turn off notifications that reveal your location or activity.</li>
            </ul>

            <h3>What NOT to Share Online</h3>
            <ul>
                <li>Your home address or school name</li>
                <li>Your phone number or email</li>
                <li>Your daily schedule or routine</li>
                <li>Exact location in real-time</li>
                <li>Your birthday or other personal information</li>
                <li>Passwords or sensitive account info</li>
                <li>Intimate photos (they can be saved, shared, or used for blackmail)</li>
            </ul>

            <h3>Privacy Settings by Platform</h3>
            <ul>
                <li><strong>Instagram:</strong> Settings → Privacy → Make account private</li>
                <li><strong>TikTok:</strong> Me → Three dots → Privacy and safety → Private account</li>
                <li><strong>Snapchat:</strong> Settings → View My Story → Private (only friends)</li>
                <li><strong>Discord:</strong> Settings → Privacy and safety → Restrict DMs and voice calls</li>
            </ul>
        `
    },
    {
        id: 5,
        category: 'Digital Safety',
        title: 'Screen Time & Digital Wellness',
        content: `
            <h3>Why Balance Matters</h3>
            <p>Spending too much time on screens can affect your sleep, mental health, schoolwork, and real-world relationships. Finding a healthy balance is important.</p>

            <h3>Signs You Might Have Too Much Screen Time</h3>
            <ul>
                <li>Staying up late on your phone, feeling tired at school</li>
                <li>Feeling anxious when you don't have your phone</li>
                <li>Choosing gaming or social media over time with friends/family</li>
                <li>Your grades are slipping</li>
                <li>You're experiencing eye strain, headaches, or neck pain</li>
                <li>You're experiencing anxiety, depression, or low self-esteem from social media comparison</li>
            </ul>

            <h3>Tips for Healthier Screen Time</h3>
            <ul>
                <li><strong>Set a schedule:</strong> Decide when you'll use apps and stick to it. No screens 1 hour before bed.</li>
                <li><strong>Use app timers:</strong> Most phones have built-in screen time limits you can set.</li>
                <li><strong>Charge your phone outside your bedroom:</strong> Reduces nighttime temptation.</li>
                <li><strong>Take breaks:</strong> Every 20-30 minutes, look away from your screen for 20+ seconds.</li>
                <li><strong>Use blue light filters:</strong> Enable "Night Shift" or similar to reduce eye strain.</li>
                <li><strong>Prioritize in-person time:</strong> Hang out with friends without phones.</li>
                <li><strong>Have phone-free meals:</strong> Family time without devices.</li>
                <li><strong>Find offline hobbies:</strong> Reading, sports, art, music — things that don't involve screens.</li>
            </ul>

            <h3>Having the Conversation with Parents</h3>
            <p>If you think your screen time is unhealthy, talk to your parents. Suggest a family plan together — it's more likely to work if everyone participates.</p>
        `
    },
    {
        id: 6,
        category: 'Digital Safety',
        title: 'Spotting Misinformation & Fake News',
        content: `
            <h3>What Is Misinformation?</h3>
            <p>Misinformation is false or inaccurate information spread online. It can be spread by accident (someone believed it and shared it) or intentionally (to mislead or manipulate).</p>

            <h3>How Misinformation Spreads</h3>
            <ul>
                <li>Social media algorithms promote engaging content (even if false)</li>
                <li>People share posts without fact-checking</li>
                <li>News headlines are taken out of context</li>
                <li>Deepfakes (AI-manipulated videos) look convincing</li>
                <li>Bots amplify false information</li>
            </ul>

            <h3>How to Spot Fake News</h3>
            <ul>
                <li><strong>Check the source:</strong> Is this a reputable news organization? Or is it an unknown blog?</li>
                <li><strong>Look for bias:</strong> Does the article seem one-sided or sensational?</li>
                <li><strong>Check the date:</strong> Old news taken out of context can seem recent.</li>
                <li><strong>Look for sources:</strong> Legitimate news cites expert sources. Fake news often doesn't.</li>
                <li><strong>Reverse image search:</strong> Use Google Images to see where a photo really came from.</li>
                <li><strong>Check fact-check sites:</strong> Snopes, FactCheck.org, PolitiFact verify claims.</li>
                <li><strong>Trust your skepticism:</strong> If a headline seems too wild to be true, it probably is.</li>
            </ul>

            <h3>Being Part of the Solution</h3>
            <ul>
                <li>Don't share posts that sound too outrageous without verifying</li>
                <li>Check sources before sharing</li>
                <li>Call out misinformation respectfully if you see it</li>
                <li>Report obvious fake news to the platform</li>
            </ul>
        `
    }
];

const etiquetteArticles = [
    {
        id: 1,
        category: 'Digital Etiquette',
        title: 'Online Respect: Netiquette Basics',
        content: `
            <h3>What Is Netiquette?</h3>
            <p>Netiquette is internet etiquette — the rules of respect and kindness that should guide how we interact online. Just because you're behind a screen doesn't mean you can be disrespectful.</p>

            <h3>Golden Rules of Netiquette</h3>
            <ul>
                <li><strong>Treat people online like you'd treat them in person.</strong> Would you say that to their face?</li>
                <li><strong>Assume good intent.</strong> That message might sound rude, but the person might not have meant it that way.</li>
                <li><strong>Think before you post.</strong> Take a moment before hitting send. Is this kind, true, and necessary?</li>
                <li><strong>Don't use all caps.</strong> It looks like you're YELLING.</li>
                <li><strong>Respect people's time.</strong> Don't spam, send excessive messages, or demand immediate responses.</li>
                <li><strong>Respect privacy.</strong> Don't share others' information, photos, or messages without permission.</li>
                <li><strong>Use emoji and tone carefully.</strong> Written words can be misunderstood without tone of voice.</li>
                <li><strong>Don't embarrass people publicly.</strong> If you have a problem, talk privately first.</li>
            </ul>

            <h3>Common Netiquette Mistakes</h3>
            <ul>
                <li><strong>Dragging old drama:</strong> "You said [mean thing] 3 months ago!" Bringing up the past in a conflict just makes things worse.</li>
                <li><strong>Pile-ons:</strong> Multiple people attacking one person. Don't join in.</li>
                <li><strong>Fishing for attention:</strong> Fake drama, suicidal posts, or outrage just for comments/likes.</li>
                <li><strong>One-word responses:</strong> "Ok" or "sure" can come across as dismissive. Engage genuinely.</li>
                <li><strong>Ignoring people:</strong> If someone reaches out, a quick response shows respect.</li>
            </ul>

            <h3>Group Chat Etiquette</h3>
            <ul>
                <li>Don't spam the chat with rapid-fire messages</li>
                <li>Respect the group's topic — if it's for homework help, don't flood it with memes</li>
                <li>Don't add people to groups without asking first</li>
                <li>If you disagree, keep it respectful</li>
                <li>Know when to take a conversation to DMs instead</li>
            </ul>
        `
    },
    {
        id: 2,
        category: 'Digital Etiquette',
        title: 'Cyberbullying: Recognizing & Responding',
        content: `
            <h3>What Is Cyberbullying?</h3>
            <p>Cyberbullying is using digital platforms to harass, embarrass, threaten, or isolate someone. Unlike in-person bullying, it's public, permanent, and follows you everywhere.</p>

            <h3>Forms of Cyberbullying</h3>
            <ul>
                <li><strong>Mocking comments:</strong> Mean replies on posts or videos</li>
                <li><strong>Exclusion:</strong> Being left out of group chats or deliberately ignored</li>
                <li><strong>Spreading rumors:</strong> Sharing false or embarrassing information about someone</li>
                <li><strong>Impersonation:</strong> Pretending to be someone else to damage their reputation</li>
                <li><strong>Harassment:</strong> Repeated unwanted messages or DMs</li>
                <li><strong>Doxxing:</strong> Sharing someone's personal information publicly</li>
                <li><strong>Screenshots & sharing:</strong> Saving and sharing private messages or embarrassing photos without consent</li>
                <li><strong>Hate groups:</strong> Being targeted by a coordinated group</li>
            </ul>

            <h3>If You're Being Cyberbullied</h3>
            <ul>
                <li><strong>Don't respond in kind.</strong> Fighting back often makes it worse.</li>
                <li><strong>Save evidence.</strong> Screenshot mean messages and posts (they may delete them).</li>
                <li><strong>Block the person.</strong> Use the platform's block feature.</li>
                <li><strong>Report them.</strong> Most platforms have reporting tools for harassment.</li>
                <li><strong>Tell an adult.</strong> A parent, school counselor, or teacher.</li>
                <li><strong>Take a break from social media if needed.</strong> It's okay to step back to protect your mental health.</li>
                <li><strong>Remember: It's not about you.</strong> Bullies are often dealing with their own stuff.</li>
            </ul>

            <h3>If You've Done the Bullying</h3>
            <ul>
                <li>Recognize what you did was wrong</li>
                <li>Apologize genuinely (not sarcastically)</li>
                <li>Stop the behavior</li>
                <li>Ask yourself why you did it — what were you trying to get out of it?</li>
                <li>Talk to an adult if you're struggling</li>
            </ul>

            <h3>Being an Upstander, Not a Bystander</h3>
            <ul>
                <li><strong>Don't participate in pile-ons.</strong> Scrolling past mean comments is one thing; adding your own is another.</li>
                <li><strong>Support the target privately.</strong> A DM saying "that wasn't cool" or "I'm sorry people were mean" helps.</li>
                <li><strong>Call out the bullying.</strong> "That's not funny" or "Leave them alone" can actually change the dynamic.</li>
                <li><strong>Report bullying when you see it.</strong> You don't have to be the target to report it.</li>
            </ul>
        `
    },
    {
        id: 3,
        category: 'Digital Etiquette',
        title: 'Your Digital Footprint: What You\'re Leaving Behind',
        content: `
            <h3>What Is a Digital Footprint?</h3>
            <p>Your digital footprint is everything about you on the internet — posts, photos, comments, likes, logins, and data collected about you by companies. It's permanent and can affect your future.</p>

            <h3>Why It Matters</h3>
            <ul>
                <li><strong>Colleges and employers check social media.</strong> A mean post from 2 years ago can hurt your opportunities.</li>
                <li><strong>Scammers use your info.</strong> Sharing too much makes it easy to impersonate you or target you.</li>
                <li><strong>Nothing is truly deleted.</strong> Even "deleted" posts are often backed up or screenshotted.</li>
                <li><strong>Photos can be manipulated.</strong> A photo you shared innocently could be edited or misused.</li>
                <li><strong>Your behavior is recorded.</strong> Websites track your activity to build profiles for advertisers.</li>
            </ul>

            <h3>Building a Positive Digital Footprint</h3>
            <ul>
                <li><strong>Think before you post.</strong> Ask: "Would I be proud if this was in the school newspaper?"</li>
                <li><strong>Be kind online.</strong> Supportive comments help build a good reputation.</li>
                <li><strong>Share accomplishments.</strong> Post about things you're proud of — awards, achievements, hobbies.</li>
                <li><strong>Engage thoughtfully.</strong> Comment on others' posts in constructive ways.</li>
                <li><strong>Avoid oversharing.</strong> You don't need to post every meal, location, or thought.</li>
            </ul>

            <h3>Cleaning Up Your Old Posts</h3>
            <ul>
                <li>Go through your posts from a few years ago</li>
                <li>Delete anything you'd be embarrassed about or that doesn't represent you now</li>
                <li>Remove old photos that reveal your routine or location</li>
                <li>Untag yourself from posts you don't like</li>
                <li>Review comments you've made and delete inappropriate ones</li>
            </ul>

            <h3>Privacy vs. Authenticity</h3>
            <p>You don't have to be fake or boring to protect your privacy. You can be authentic without sharing everything. Share what you're comfortable with, not what you think will get likes.</p>
        `
    },
    {
        id: 4,
        category: 'Digital Etiquette',
        title: 'Healthy Digital Relationships: Friends, Dating, & Community',
        content: `
            <h3>Digital Friendships</h3>
            <ul>
                <li><strong>Be consistent:</strong> If you're going to be friends online, show up regularly.</li>
                <li><strong>Don't overstep boundaries:</strong> Not everyone wants to be texted constantly.</li>
                <li><strong>Handle conflict respectfully:</strong> If there's a disagreement, talk about it thoughtfully (maybe in DMs, not public comments).</li>
                <li><strong>Respect their privacy:</strong> Don't screenshot and share their messages.</li>
                <li><strong>Balance online and offline:</strong> Don't let online friendships completely replace in-person relationships.</li>
            </ul>

            <h3>Online Dating (For Teens)</h3>
            <ul>
                <li><strong>Meet in safe spaces first:</strong> Game lobbies, Discord servers — places where people congregate.</li>
                <li><strong>Take your time getting to know people.</strong> Don't rush into DMs or voice calls.</li>
                <li><strong>Verify who people are.</strong> Ask questions that would be weird for a scammer to answer.</li>
                <li><strong>Don't send intimate photos.</strong> Even if you trust them now, it's not worth the risk.</li>
                <li><strong>Tell someone if you meet up in person.</strong> Always meet in public; bring a friend.</li>
                <li><strong>Trust your instincts.</strong> If something feels off, it probably is.</li>
            </ul>

            <h3>Being Part of Online Communities</h3>
            <ul>
                <li><strong>Lurk before you leap.</strong> Spend time reading posts to understand community norms before participating.</li>
                <li><strong>Respect the community's values.</strong> If it's a supportive space, be supportive. If it's for gaming, don't just spam memes.</li>
                <li><strong>Don't start drama.</strong> Every community has conflicts. Don't deliberately provoke them.</li>
                <li><strong>Be cautious with strangers.</strong> You don't know who's behind the screen.</li>
                <li><strong>Know when to leave.</strong> If a community is toxic, cruel, or making you feel bad, it's okay to leave.</li>
            </ul>

            <h3>Red Flags in Online Relationships</h3>
            <ul>
                <li>Someone asking you to move conversations to private apps quickly</li>
                <li>Someone asking for personal information or photos</li>
                <li>Possessiveness or controlling behavior ("You can't talk to them")</li>
                <li>Love-bombing early on (excessive compliments very quickly)</li>
                <li>Someone lying about basic facts (age, where they live)</li>
                <li>Pressure to keep the relationship secret</li>
            </ul>
        `
    }
];
