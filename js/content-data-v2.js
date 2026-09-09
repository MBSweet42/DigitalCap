// Digital Safety & Etiquette Content - Version 2 (Expanded & Interactive)
// Adapted from FTC OnGuardOnline, NCMEC/NetSmartz, Common Sense Media, ConnectSafely

const articlesV2 = [
    {
        id: 1,
        category: 'Digital Safety',
        title: 'Password Safety: Protecting Your Digital Life',
        intro: 'Your password protects your accounts from unauthorized access. A few practical habits like using a long, unique password and enabling multi-factor authentication can significantly reduce the risk of someone else gaining access to your accounts.',
        sections: [
            {
                title: 'Why Strong Passwords Matter',
                type: 'text',
                content: 'Every account you have (Instagram, Discord, email, games) is protected by a password. If someone cracks it, they can pretend to be you, steal your photos, change your settings, and hurt your reputation.'
            },
            {
                title: 'Creating Strong Passwords',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Make it long:</strong> A longer password or passphrase is generally stronger. When a service allows it, aim for a long password that is unique to that account.</li>
                        <li><strong>Avoid easily guessed information:</strong> Don't use your name, birthday, address, or other personal details that people might know about you.</li>
                        <li><strong>Avoid common passwords:</strong> Don't use passwords that appear on lists of most common passwords or ones known to be compromised.</li>
                        <li><strong>Make it unique:</strong> Use a different password for each important account (email, banking, school, social media). If one is compromised, the others stay safe.</li>
                        <li><strong>Use a password manager:</strong> Tools like Bitwarden, 1Password, or KeePass can generate and store strong passwords for you so you don't have to remember them all.</li>
                    </ul>
                `
            },
            {
                title: 'Support Note: How to Talk About Passwords',
                type: 'parent-popup',
                content: `
                    <p><strong>If you're helping someone with their passwords:</strong></p>
                    <p><strong>Start with:</strong> Ask if they've thought about password safety for their accounts and whether they'd like help.</p>
                    <p><strong>Explain the practical stakes:</strong> "A password keeps your account from being accessed by someone else. If someone gets your password, they could change your settings, read your messages, or post as you."</p>
                    <p><strong>Make it collaborative:</strong> Work together on a password strategy. Suggest a password manager if they have many accounts. Show how it works.</p>
                    <p><strong>If an account was compromised:</strong> Stay calm and matter-of-fact. Change the password right away, check the account for any unexpected activity, and review security settings. Use this as a learning moment, not a scare moment.</p>
                `
            },
            {
                title: 'Password Security Tips',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Be thoughtful about password sharing:</strong> Avoid sharing passwords casually or in response to unexpected requests. If someone you trust genuinely needs shared access, consider safer options such as a password manager's sharing feature or another account-access method when available.</li>
                        <li><strong>Store passwords securely:</strong> A password manager is the safest choice. If you need to write a password down for backup, keep it in a secure location (a locked drawer, safe, or with a trusted person).</li>
                        <li><strong>Enable two-factor authentication (2FA):</strong> This adds a second step even if someone learns your password. Most important accounts offer this option.</li>
                        <li><strong>Change a password when appropriate:</strong> You don't need to change passwords on a schedule. Do change them if you suspect the account was compromised, if the service notifies you of a breach, or if someone else may know the password.</li>
                        <li><strong>Consider passkeys:</strong> Some services now offer passkeys (fingerprint, face recognition, or a device confirmation). These are becoming a safer alternative to passwords. If available, you can set them up alongside or instead of passwords.</li>
                        <li><strong>If an account is compromised:</strong> Change the password immediately using the official service, check the account activity for anything unusual, and enable 2FA if you haven't already.</li>
                    </ul>
                `
            },
            {
                title: 'When to Be Cautious',
                type: 'callout',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Unexpected password requests:</strong> Be cautious of requests to enter your password or account information through an unexpected link or message. Go directly to the official website or app instead to check if anything actually needs attention.</li>
                        <li><strong>Apps or websites asking you to re-enter passwords:</strong> If a service keeps asking you to enter your password, it could be a phishing attempt. Use the official app or website instead.</li>
                        <li><strong>About HTTPS and the lock icon:</strong> HTTPS encrypts your connection to a website. A website using HTTPS is safer for your data in transit, but it doesn't prove the website itself is trustworthy. Phishing and scam sites can also use HTTPS. Always verify the web address and check that it matches the official service you expect.</li>
                    </ul>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Use long, unique passwords.</strong> Length matters more than complexity rules.</li>
                        <li><strong>Use a password manager.</strong> It's easier and safer than remembering or writing down passwords.</li>
                        <li><strong>Be thoughtful about sharing access.</strong> Avoid casual password sharing, and use safer account-sharing options when available.</li>
                        <li><strong>Enable 2FA when available.</strong> It adds important protection even if your password is compromised.</li>
                        <li><strong>Be cautious of unexpected password requests,</strong> even if they look official. Go directly to the service instead.</li>
                    </ul>
                    <p style="margin-top: 1.5rem;"><strong>If an account has been compromised:</strong> <a href="/respond" style="color: var(--primary); text-decoration: underline;">Get help with a hacked or compromised account</a></p>
                `
            }
        ]
    },
    {
        id: 2,
        category: 'Digital Safety',
        title: 'Spotting Scams & Phishing Attacks',
        intro: 'Scammers pretend to be trusted companies to steal your money or information. Learning to spot the tricks is your best defense.',
        sections: [
            {
                title: 'What Are Scams and Phishing?',
                type: 'text',
                content: '<strong>Scams</strong> are tricks to steal your money or information. <strong>Phishing</strong> is when scammers pretend to be a trusted company (like Instagram, Apple, or your bank) to get you to click a link or enter your password.'
            },
            {
                title: 'Common Scams You Might See',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>"Free gaming currency":</strong> If someone offers free Robux, V-Bucks, or other gaming currency, they're likely trying to steal your account credentials or money.</li>
                        <li><strong>"You've won a prize!":</strong> If you didn't enter a contest or promotion, you didn't win. Scammers use unexpected prize notifications to get you to click links or enter information.</li>
                        <li><strong>"Account verification requests":</strong> Be cautious of messages asking you to verify your account by clicking a link. Real companies usually ask you to verify directly in their official app or website.</li>
                        <li><strong>Job scams:</strong> Offers of easy money working from home often require upfront payment or personal information before you can start.</li>
                        <li><strong>Romance scams:</strong> Someone builds a relationship with you over time, then asks for money, gift cards, or personal information.</li>
                    </ul>
                `
            },
            {
                title: 'Support Note: If Someone You Know May Have Been Scammed',
                type: 'parent-popup',
                content: `
                    <p><strong>Warning signs:</strong> Unexpected charges, lost accounts, strange messages, device problems, or reports of clicking suspicious links.</p>
                    <p><strong>What to do:</strong> Stay calm and supportive. Find out what happened: Did they click a link? Enter their password? Send money? Each situation needs a different response.</p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>If they clicked a suspicious link:</strong> Stop interacting with it. Check the account for unexpected activity.</li>
                        <li><strong>If they entered their password:</strong> Change the password immediately. Check account activity. Enable 2FA if available.</li>
                        <li><strong>If money or payment info was shared:</strong> Contact the bank, card issuer, or payment provider right away.</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Most importantly:</strong> Don't blame them. Scams are designed to be convincing. Help them report it and move forward.</p>
                `
            },
            {
                title: 'How to Spot a Suspicious Message',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Unexpected requests for action:</strong> Any message asking you to click a link, confirm information, update payment details, or verify your account should be treated carefully, especially if unexpected.</li>
                        <li><strong>Urgent or threatening language:</strong> "Click now or your account will close!" or "Confirm your information within 24 hours!" Creating pressure is a common scam tactic. Real companies usually give you time to respond.</li>
                        <li><strong>Suspicious sender address:</strong> In email, check the actual sender address (not just the display name). Scammers may use addresses that look almost real.</li>
                        <li><strong>Requests for passwords or sensitive information:</strong> Banks and legitimate companies do not ask for passwords, PIN numbers, or full credit card information through email or text messages.</li>
                        <li><strong>Links that don't match:</strong> On a computer, you can hover over a link to see where it actually goes. On phones or tablets, this may not be possible. The safest approach is to not use unexpected links.</li>
                        <li><strong>Professional appearance doesn't guarantee legitimacy:</strong> Modern scams, including AI-generated messages, can look professional with correct logos, proper grammar, and realistic formatting. Good writing and professional appearance are not proof that a message is real.</li>
                    </ul>
                `
            },
            {
                title: 'Verify Important or Unexpected Requests',
                type: 'expandable',
                content: `
                    <p style="margin: 0 0 1rem 0;">When a message asks you to do something important or unusual, don't use the link in the message. Instead, verify it independently:</p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Open the official app:</strong> Use an app you already have installed and know is real.</li>
                        <li><strong>Go to the official website:</strong> Type the address yourself in the address bar, not using a link from the message.</li>
                        <li><strong>Call the company:</strong> Use a phone number from a statement, bill, card, or the official website (not from a search result or the suspicious message).</li>
                        <li><strong>Check your account directly:</strong> Log in to your account and see if anything actually requires attention.</li>
                    </ul>
                    <p style="margin-top: 1rem;">This approach protects you whether the message is legitimate but accidentally sent in a suspicious way, or whether it's actually a scam.</p>
                `
            },
            {
                title: 'What to Do If You\'ve Interacted with a Scam',
                type: 'callout',
                content: `
                    <p style="margin: 0 0 1rem 0;"><strong>If you clicked a suspicious link but didn't enter anything:</strong></p>
                    <ul style="margin: 0.5rem 0 1rem 1.5rem;">
                        <li>Stop interacting with the page</li>
                        <li>Check the account for unexpected activity or changes</li>
                        <li>Report and block if it's on a social platform</li>
                    </ul>
                    <p style="margin: 0 0 1rem 0;"><strong>If you entered your password or account information:</strong></p>
                    <ul style="margin: 0.5rem 0 1rem 1.5rem;">
                        <li>Change your password immediately using the official app or website</li>
                        <li>If you used the same password elsewhere, change it on those accounts too</li>
                        <li>Check account activity for suspicious logins</li>
                        <li>Enable 2FA if you haven't already</li>
                        <li>Tell a trusted adult</li>
                    </ul>
                    <p style="margin: 0 0 1rem 0;"><strong>If you sent money, payment information, or gift cards:</strong></p>
                    <ul style="margin: 0.5rem 0 1rem 1.5rem;">
                        <li>Tell a trusted adult or parent immediately</li>
                        <li>Contact your bank, credit card company, or payment service (PayPal, Venmo, etc.) as soon as possible</li>
                        <li>Report the scam to the platform where the conversation happened</li>
                        <li>Keep all records of the conversation and transaction</li>
                    </ul>
                    <p>Report the scam to the platform using their reporting tools. Get help from a trusted adult with next steps.</p>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Don't decide if something is legitimate based only on how professional it looks.</strong> Modern scams can be convincing.</li>
                        <li><strong>When in doubt, verify independently.</strong> Use the official app or website, not the link in the message.</li>
                        <li><strong>If something already happened, respond based on what happened:</strong> Did you click a link? Enter a password? Send money? Each situation needs different action.</li>
                        <li><strong>Tell a trusted adult if you're unsure</strong> or if something goes wrong.</li>
                    </ul>
                    <p style="margin-top: 1.5rem;"><a href="/respond" style="color: var(--primary); text-decoration: underline;">Work through what happened and what to do next</a></p>
                `
            }
        ]
    },
    {
        id: 3,
        category: 'Digital Safety',
        title: 'Recognizing Grooming & Predatory Behavior',
        intro: 'Grooming is when an adult builds a relationship with a young person to gain their trust and eventually exploit them. Adults who do this are skilled at manipulation and deception. Young people who experience grooming are not at fault. They don\'t recognize it as wrong because the adult is deliberately hiding their true intentions.',
        sections: [
            {
                title: 'What Is Grooming?',
                type: 'text',
                content: 'Grooming happens gradually. An adult starts with innocent conversation, builds trust, isolates you from friends/family, then pushes for inappropriate contact. It\'s manipulation, and it\'s not your fault if it happens.'
            },
            {
                title: 'Red Flags of Grooming',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Adults asking unusual personal questions:</strong> "Where do you go to school?" "What does your bedroom look like?" "When are your parents home?"</li>
                        <li><strong>An older person claiming to be your age:</strong> "I'm actually 14 too!" This is often a lie to seem relatable.</li>
                        <li><strong>Compliments about appearance or sexuality:</strong> "You're so mature for your age," "Send me a picture of yourself"</li>
                        <li><strong>Isolation tactics:</strong> "Don't tell your parents about our chats. They'd just ground you."</li>
                        <li><strong>Gifts or money:</strong> "I want to send you a gift card," "Let me donate to your Patreon"</li>
                        <li><strong>Gradually pushing boundaries:</strong> Starting innocent, then asking for inappropriate photos, video calls, or meetings</li>
                        <li><strong>Guilt-tripping:</strong> "After everything I've done for you?" when you express discomfort</li>
                    </ul>
                `
            },
            {
                title: 'Support Note: How to Have This Conversation',
                type: 'parent-popup',
                content: `
                    <p><strong>For younger children (8-12):</strong> Keep it simple and direct. "Some adults online try to trick kids. They might ask where you live or want to send you things. If that happens, tell me right away. It's not your fault."</p>
                    <p><strong>For teens:</strong> Have a real conversation, not a lecture. "I want to talk about something serious. Some adults online try to build friendships with young people so they can eventually ask for inappropriate things. If anyone does this, makes you uncomfortable, or asks you to keep secrets, I want you to tell me. I won't be mad. I need to help keep you safe."</p>
                    <p><strong>General approach:</strong></p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li>Make it safe to tell you. Avoid punishment or blame if they share something.</li>
                        <li>Emphasize that manipulation is not the young person's fault.</li>
                        <li>Check in periodically, not just once.</li>
                        <li>Know where to get help if needed (school counselor, therapist, or reporting agencies).</li>
                    </ul>
                `
            },
            {
                title: 'What to Do',
                type: 'callout',
                content: `
                    <ol style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>You don't have to be certain something is wrong before asking for help.</strong> If something makes you uncomfortable, unsafe, or unsure, that's enough reason to reach out.</li>
                        <li><strong>Stop the conversation if someone makes you uncomfortable.</strong> You can block, delete, or ignore them.</li>
                        <li><strong>Tell a trusted adult.</strong> A parent, school counselor, teacher, or another trusted adult who can help. If the first person you tell is a friend, ask them to help you reach a trusted adult.</li>
                        <li><strong>Save messages or screenshots if you feel safe doing so.</strong> Don't continue engaging with the person just to collect evidence. If you have saved messages, they can help with reporting.</li>
                        <li><strong>Report on the platform.</strong> Most services have a report or block function.</li>
                        <li><strong>It is not your fault.</strong> Adults who manipulate young people are committing a crime. The adult is 100% responsible.</li>
                    </ol>
                    <p style="margin-top: 1.5rem;"><strong>Reporting and support resources:</strong></p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>To report suspected online child sexual exploitation:</strong> CyberTipline at cybertipline.org</li>
                        <li><strong>If you're in crisis or having thoughts of self-harm:</strong> Crisis Text Line (text HOME to 741741) or 988 (Suicide & Crisis Lifeline)</li>
                        <li><strong>To get help navigating what happened:</strong> Talk to a trusted adult, school counselor, or therapist</li>
                    </ul>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Grooming is manipulation and a crime.</strong> It's not a relationship. It's not the young person's fault.</li>
                        <li><strong>Adults who try to manipulate young people are deliberately deceptive.</strong> They hide their true intentions.</li>
                        <li><strong>You don't need to be certain something is wrong before asking for help.</strong> If something feels uncomfortable or unsafe, that's enough.</li>
                        <li><strong>Tell a trusted adult.</strong> They can help you figure out what's happening and what to do next.</li>
                        <li><strong>You are not responsible for an adult's behavior.</strong> Even if you were curious, responded to messages, or accepted gifts, that doesn't make the adult's behavior your fault.</li>
                    </ul>
                    <p style="margin-top: 1.5rem;"><a href="/respond" style="color: var(--primary); text-decoration: underline;">Work through what happened and possible next steps</a></p>
                    <p style="margin-top: 1rem; font-size: 0.95rem; color: var(--text-gray);">DigitalCap helps you navigate what happened. For immediate safety concerns, emergency support, law enforcement, or professional counseling, reach out to the resources and trusted adults mentioned above.</p>
                `
            }
        ]
    },
    {
        id: 4,
        category: 'Digital Etiquette',
        title: 'Online Respect: Communicating with Boundaries',
        intro: 'Online respect is about communicating clearly, respecting boundaries, and understanding that tone is harder to read through text. Different people have different communication styles, and that\'s okay.',
        sections: [
            {
                title: 'Foundations of Respectful Communication',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Be aware that tone is lost online.</strong> A message that seems funny to you might land as harsh. Consider how your words might be read.</li>
                        <li><strong>Respect consent around sharing.</strong> Don't share someone's photos, messages, or private information without permission. Screenshots included.</li>
                        <li><strong>Recognize that people communicate differently.</strong> Some prefer quick replies; others prefer thoughtful messages. Some use emoji; others don't. These are just different styles.</li>
                        <li><strong>Respect people's choice not to respond.</strong> Someone's silence or brief answer doesn't necessarily mean disrespect. They might be busy, tired, or prefer less frequent communication.</li>
                        <li><strong>Pause before escalating.</strong> Before a disagreement becomes heated, take time. Step away if you need to.</li>
                        <li><strong>Understand that disagreement itself isn't harmful.</strong> People can respectfully disagree. The goal is avoiding harassment or deliberate harm.</li>
                    </ul>
                `
            },
            {
                title: 'Support Note: Supporting Someone with Respectful Communication',
                type: 'parent-popup',
                content: `
                    <p><strong>Model thoughtful communication.</strong> The way you interact online—whether in comments, arguments, or conversations—shows what respectful (or disrespectful) communication looks like.</p>
                    <p><strong>Have conversations about:</strong></p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li>Why misunderstandings happen in texts and how to prevent them</li>
                        <li>What boundaries matter to them (when they like replies, what's okay to share, etc.)</li>
                        <li>How to tell if someone is joking vs. being mean</li>
                        <li>What to do when they disagree with someone online</li>
                    </ul>
                `
            },
            {
                title: 'Handling Conflict Online',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Avoid pile-ons:</strong> Multiple people attacking one person is a form of harassment. Don't participate even if you disagree with them.</li>
                        <li><strong>Don't bring up old issues in new conflicts.</strong> Starting fresh in a disagreement is more likely to actually resolve things.</li>
                        <li><strong>If someone is clearly struggling or in distress, take it seriously.</strong> Reach out to someone trusted. A post suggesting someone might hurt themselves deserves concern, not dismissal.</li>
                        <li><strong>Know when to take it to DMs.</strong> Public arguments often escalate. A private conversation is sometimes better.</li>
                        <li><strong>It's okay to disengage.</strong> You don't have to respond to every comment or argument. Stepping away is not rude; it's self-care.</li>
                    </ul>
                `
            },
            {
                title: 'Group Chat Considerations',
                type: 'callout',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li>Be aware of group size and communication speed. Not everyone wants rapid-fire messages or constant notifications.</li>
                        <li>Respect the group's purpose. If it's for homework, keep the conversation on topic or move off-topic chat elsewhere.</li>
                        <li>Ask before adding someone new to a group chat.</li>
                        <li>Notice if someone is being excluded or targeted. Stepping up to include them matters.</li>
                    </ul>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Respectful communication is a choice.</strong> Being aware of how your words might land and thinking before you post matters.</li>
                        <li><strong>Tone is hard online.</strong> Assume good intent when possible, and clarify if something sounds off.</li>
                        <li><strong>Boundaries and consent matter.</strong> Don't share someone's photos, messages, or information without permission.</li>
                        <li><strong>Different communication styles are valid.</strong> Not everyone responds quickly or communicates the same way, and that's okay.</li>
                        <li><strong>You have choices in conflict.</strong> You can disengage, take it to DMs, or step away.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 5,
        category: 'Digital Etiquette',
        title: 'Cyberbullying: Recognizing & Responding',
        intro: 'Online harassment happens when someone repeatedly targets, humiliates, threatens, or isolates another person using digital platforms. It can be direct or coordinated, and it can have real effects on someone\'s wellbeing.',
        sections: [
            {
                title: 'Forms of Online Harassment',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Repeated insults or mocking:</strong> Mean replies, comments, or messages that target someone repeatedly</li>
                        <li><strong>Deliberate exclusion:</strong> Being left out of group chats or deliberately ignored as a tactic to isolate</li>
                        <li><strong>Spreading rumors or false information:</strong> Sharing embarrassing or false information to damage someone's reputation</li>
                        <li><strong>Impersonation:</strong> Pretending to be someone else online to damage their reputation</li>
                        <li><strong>Threats:</strong> Messages threatening violence, harm, or other serious consequences</li>
                        <li><strong>Unwanted contact:</strong> Repeated messages that someone has asked to stop</li>
                        <li><strong>Sharing private content without consent:</strong> Screenshots, photos, or videos shared publicly without permission</li>
                        <li><strong>Coordinated targeting:</strong> Multiple people directing harassment at one person</li>
                        <li><strong>Sharing personal information publicly:</strong> Addresses, phone numbers, or other identifying information shared to harm or embarrass</li>
                    </ul>
                `
            },
            {
                title: 'Support Note: If Someone You Know Is Being Targeted',
                type: 'parent-popup',
                content: `
                    <p><strong>Listen and take it seriously.</strong> Harassment can be frightening and isolating. Don't minimize it.</p>
                    <p><strong>Understand their specific situation.</strong> What's happening? How long? Is it affecting their safety or wellbeing?</p>
                    <p><strong>Help them consider options depending on what's happening:</strong></p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>If it's ongoing:</strong> Mute, block, or report the person. Document what's happening with screenshots.</li>
                        <li><strong>If it's coordinated:</strong> Report to the platform. If it involves school, involve school leadership. If there are threats, consider law enforcement.</li>
                        <li><strong>If it's escalating:</strong> Taking a break from that platform or account may be necessary and healthy.</li>
                        <li><strong>In any case:</strong> It's not their fault. They may feel ashamed; remind them that the behavior of others is not a reflection of their worth.</li>
                    </ul>
                `
            },
            {
                title: 'If You\'re Being Targeted',
                type: 'callout',
                content: `
                    <p style="margin-bottom: 1rem;"><strong>You have choices. Here are some options depending on what's happening:</strong></p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Mute or block:</strong> You don't have to see it. Most platforms let you silence notifications or block people entirely.</li>
                        <li><strong>Don't engage.</strong> Responding, even to defend yourself, often makes it worse. It gives the person attention they may be seeking.</li>
                        <li><strong>Save evidence if it's serious.</strong> Screenshots with dates can be useful if you need to report to a platform, school, or authorities.</li>
                        <li><strong>Report to the platform.</strong> Most social media sites have tools for reporting harassment.</li>
                        <li><strong>Tell someone you trust:</strong> A parent, counselor, teacher, or friend. You don't have to handle it alone.</li>
                        <li><strong>If there are threats or your safety feels at risk:</strong> Tell an adult and consider reporting to law enforcement.</li>
                        <li><strong>Take a break if you need to.</strong> Stepping away from that platform or account is healthy, not weakness.</li>
                    </ul>
                `
            },
            {
                title: 'When You See It Happening',
                type: 'expandable',
                content: `
                    <p style="margin-bottom: 1rem;"><strong>You have options here too. You can:</strong></p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Not participate.</strong> Don't add your own comment even if you disagree with the person.</li>
                        <li><strong>Check in privately with the targeted person.</strong> A DM saying "That wasn't okay" or "I'm sorry people were mean" can actually help.</li>
                        <li><strong>Report the harmful content.</strong> You don't have to be the target to report harassment to the platform.</li>
                        <li><strong>Stay quiet, which is also a choice.</strong> Not joining in is different from actively standing up, but it still matters.</li>
                        <li><strong>Speak up if you feel safe doing so.</strong> Sometimes a comment like "That's not cool" or "Leave them alone" does change the dynamic. Sometimes it doesn't. You get to decide what feels safe.</li>
                    </ul>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Online harassment is harmful.</strong> Repeated targeting, threats, or coordinated attacks have real effects.</li>
                        <li><strong>It's not about one interaction.</strong> One mean comment is upsetting but not necessarily harassment. Patterns matter.</li>
                        <li><strong>It's not your fault.</strong> If you're being targeted, the behavior of others is not a reflection of your worth or something you did wrong.</li>
                        <li><strong>You have options.</strong> Muting, blocking, reporting, talking to someone, and taking a break are all valid.</li>
                        <li><strong>DigitalCap can help you work through what happened.</strong> <a href="/respond" style="color: var(--primary); text-decoration: underline;">Work through what happened and possible next steps</a></li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 6,
        category: 'Digital Safety',
        title: 'Screen Time & Sleep: Finding What Works for You',
        intro: 'Digital use can be helpful, entertaining, and connecting. It can also sometimes make it harder to stop or wind down. Understanding your own patterns can help you figure out what balance works for you.',
        sections: [
            {
                title: 'How Digital Use Can Affect Sleep',
                type: 'text',
                content: 'Research has found associations between nighttime digital-media use and later bedtimes, shorter sleep, and poorer sleep quality. Some practical reasons: the time itself, notifications that interrupt, engaging content that keeps you interested, social pressure to respond, and light exposure that may affect your body\'s sleep signals. It\'s not that one thing causes sleep loss; it\'s a combination of factors that can add up.'
            },
            {
                title: 'Noticing Your Own Patterns',
                type: 'expandable',
                content: `
                    <p style="margin-bottom: 1rem;"><strong>Everyone\'s different.</strong> Some people can use their phone right before bed; others find it keeps them awake. Pay attention to what\'s true for you:</p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li>"Do I keep using it longer than I meant to?"</li>
                        <li>"Am I going to sleep later because of what I\'m doing?"</li>
                        <li>"Do notifications wake me up at night?"</li>
                        <li>"Do I feel rested the next day?"</li>
                        <li>"Is my digital use interfering with something I care about (school, sports, time with people)?"</li>
                    </ul>
                    <p style="margin-top: 1rem;">Paying attention to these patterns helps you figure out what actually needs to change for you, rather than following a rule that might not fit your life.</p>
                `
            },
            {
                title: 'Support Note: Supporting Someone with Digital Habits',
                type: 'parent-popup',
                content: `
                    <p><strong>Start with curiosity, not control.</strong> "Tell me what you\'re using your phone for" is different from "Put that away."</p>
                    <p><strong>Understand their situation.</strong> Are they losing sleep? Falling behind in school? Anxious about notifications? The problem might be specific, not general screen time.</p>
                    <p><strong>Make expectations collaborative.</strong> Different households will have different boundaries based on age, needs, schedules, and what\'s actually causing problems. "What would help you sleep better?" is more useful than a universal rule.</p>
                    <p><strong>Model the behavior you want.</strong> If you want them to put phones away at dinner, you put yours away too.</p>
                    <p><strong>If digital use feels out of control:</strong> That\'s worth taking seriously. A conversation with a counselor or doctor can help figure out what\'s happening.</p>
                `
            },
            {
                title: 'Possible Experiments to Try',
                type: 'expandable',
                content: `
                    <p style="margin-bottom: 1rem;"><strong>If you\'re noticing your digital use is affecting your sleep or other parts of your life, here are some things you might try:</strong></p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Silence non-essential notifications.</strong> You don\'t need every app pinging you every moment.</li>
                        <li><strong>Use Do Not Disturb or Focus Mode.</strong> Most phones have built-in ways to limit notifications and access during certain times.</li>
                        <li><strong>Charge your device somewhere less reachable at night.</strong> If it helps you sleep, keeping it out of arm\'s reach matters.</li>
                        <li><strong>Set a timer or reminder.</strong> Some apps let you set limits on daily use. Notifications can help.</li>
                        <li><strong>Choose a stopping point before you start.</strong> "I\'ll use Instagram for 15 minutes" is clearer than "I\'ll use it a little."</li>
                        <li><strong>Reduce stimulating content close to bedtime.</strong> If drama, competitions, or upsetting news keep you awake, save those for earlier in the day.</li>
                        <li><strong>Try a screen-free wind-down period.</strong> Reading, stretching, or talking with someone might help you sleep better.</li>
                        <li><strong>Adjust brightness or use night settings.</strong> Less blue light may help some people fall asleep.</li>
                        <li><strong>Talk with someone if it feels difficult to control.</strong> A parent, counselor, or doctor can help.</li>
                    </ul>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Digital use is normal and can be helpful.</strong> The goal isn\'t zero screen time; it\'s understanding what balance works for you.</li>
                        <li><strong>Sleep matters.</strong> If digital use is keeping you awake or affecting school or other things you care about, that\'s worth paying attention to.</li>
                        <li><strong>Everyone\'s different.</strong> What works for one person might not work for another. Notice your own patterns.</li>
                        <li><strong>You have options.</strong> Notifications, timers, focus modes, and different routines can all help if you want to change your habits.</li>
                        <li><strong>It\'s okay to ask for help.</strong> If digital use feels out of control, talking with someone you trust is a reasonable step.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 7,
        category: 'Digital Safety',
        title: 'Social Comparison & Mental Health: Understanding Online and Offline Life',
        intro: 'People naturally compare themselves with others. Online spaces can affect how we make those comparisons, since what people choose to share—selected moments, edited photos, accomplishments—may be different from their everyday experience.',
        sections: [
            {
                title: 'How Online Sharing Works',
                type: 'text',
                content: 'Online platforms give people control over what they share. Someone might post their best moment from a week, their most flattering photo, their biggest accomplishment. That\'s very different from a full picture of their daily life—which includes ordinary moments, difficult days, and things they don\'t post.'
            },
            {
                title: 'When Comparison Affects How We Feel',
                type: 'expandable',
                content: `
                    <p style="margin-bottom: 1rem;"><strong>People\'s experiences with social media vary widely.</strong> Some things to notice about your own experience:</p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>How do I usually feel after using this?</strong> Do I feel inspired, entertained, connected? Or do I feel worse about myself?</li>
                        <li><strong>Am I comparing myself more than feels helpful?</strong> With how people look? With what they accomplish? With how many friends they have?</li>
                        <li><strong>Is certain content affecting how I feel about my body, my life, or my worth?</strong></li>
                        <li><strong>Am I losing sleep or avoiding things I normally enjoy?</strong></li>
                        <li><strong>Does it change how I feel if I follow different accounts?</strong></li>
                    </ul>
                `
            },
            {
                title: 'Research on Social Media and Wellbeing',
                type: 'callout',
                content: 'Research has found associations between some patterns of social media use and concerns about mental health, self-image, and sleep. But experiences vary widely: the same platform or account might feel helpful to one person and unhelpful to another. Many factors affect mental health beyond social media.'
            },
            {
                title: 'What Might Help',
                type: 'expandable',
                content: `
                    <p style="margin-bottom: 1rem;">If you notice social media is affecting how you feel, here are some things you might try:</p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Mute or unfollow accounts that consistently make you feel worse.</strong> This includes accounts of people you know if their content affects you negatively.</li>
                        <li><strong>Seek out content that feels useful, enjoyable, or supportive.</strong> Look for accounts that show real moments, not just highlights.</li>
                        <li><strong>Try taking a break if you want to.</strong> See what shifts when you use it less or take a few days off.</li>
                        <li><strong>Change notification or habit settings.</strong> Remove the app from your home screen, turn off notifications, or use app limits.</li>
                        <li><strong>Spend time on activities or relationships that feel grounding.</strong> Things that help you feel connected to yourself or people you trust.</li>
                        <li><strong>Talk with someone you trust if you\'re noticing persistent feelings of sadness, anxiety, or changes in how you view yourself.</strong></li>
                    </ul>
                `
            },
            {
                title: 'Support Note: If Someone Is Struggling with Self-Image or Comparison',
                type: 'parent-popup',
                content: `
                    <p><strong>Watch for:</strong> Changes in how they talk about themselves, avoiding photos or activities, spending a lot of time on certain apps, or talking more about comparing themselves to others.</p>
                    <p><strong>Create space to talk about it.</strong> "I\'ve noticed you seem down after being on [platform]. Do you want to talk about that?" is better than assuming or criticizing.</p>
                    <p><strong>Talk about reality:</strong> Explain that people choose what they share online. Real life includes ordinary moments, bad days, and messiness. That\'s not unique to them.</p>
                    <p><strong>Model healthy online use.</strong> Let them see you being selective, taking breaks, or following content that feels good to you.</p>
                    <p><strong>If concerns persist:</strong> Changes in sleep, mood, appetite, interest in activities, or talk of self-harm deserve professional support. A counselor, therapist, or doctor can help.</p>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>People naturally compare themselves with others.</strong> Online platforms make this easier and sometimes more frequent.</li>
                        <li><strong>What you see online is a selection.</strong> It\'s not a full picture of someone\'s life.</li>
                        <li><strong>Your experience matters.</strong> Pay attention to how different content makes you feel and what actually helps.</li>
                        <li><strong>You have choices.</strong> Follow different accounts, adjust settings, take breaks, or spend time on things that feel grounding.</li>
                        <li><strong>If you\'re struggling with how you see yourself or persistent sadness, talk with someone you trust.</strong> That\'s a reasonable step, not a weakness.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 8,
        category: 'Digital Etiquette',
        title: 'Online Kindness: Respectful Participation',
        intro: 'Online spaces give us distance from the people we interact with. How we choose to communicate matters—both for the impact on others and for the kind of online spaces we create together.',
        sections: [
            {
                title: 'What Online Kindness Actually Means',
                type: 'text',
                content: 'Being kind online does not mean agreeing with everyone, always being positive, or responding to every comment. It means respecting boundaries, considering impact, not piling onto someone, and stepping away from interactions that feel harmful. Kindness and disagreement can coexist.'
            },
            {
                title: 'How to Participate Respectfully',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Disagree without attacking the person.</strong> You can have different opinions without being cruel or humiliating.</li>
                        <li><strong>Think before sharing someone else\'s content.</strong> Did they consent? Could sharing embarrass or expose them? If unsure, ask.</li>
                        <li><strong>Correct misinformation without humiliating.</strong> A private message or calm correction is usually more effective than a public callout.</li>
                        <li><strong>Notice pile-ons.</strong> If many people are already attacking someone, adding your comment just adds weight. Consider stepping away.</li>
                        <li><strong>Respect different communication styles.</strong> Some people prefer quick replies; others like thoughtful messages. Some use emoji; others don\'t. These are just differences.</li>
                        <li><strong>Step away if an interaction feels harmful or exhausting.</strong> You don\'t owe engagement to someone who\'s attacking you.</li>
                        <li><strong>Acknowledge mistakes and repair harm when you can.</strong> If you were unkind, an apology or changed behavior matters.</li>
                    </ul>
                `
            },
            {
                title: 'Support Note: Modeling and Teaching Online Respect',
                type: 'parent-popup',
                content: `
                    <p><strong>Model what you want to see.</strong> Be kind, respectful, and thoughtful in how you participate online. Young people watch.</p>
                    <p><strong>Talk about impact:</strong> "That person read your comment. How do you think they felt?"</p>
                    <p><strong>If they were unkind:</strong> Help them understand why and make repair if appropriate. An apology or changed behavior shows that mistakes can be fixed.</p>
                    <p><strong>Discuss boundaries:</strong> "You don\'t have to respond to every comment or engage with people who are being disrespectful."</p>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Kindness is a choice.</strong> So is stepping away from unkind interactions.</li>
                        <li><strong>Disagreement is not cruelty.</strong> You can have different opinions and still respect someone.</li>
                        <li><strong>Consider impact.</strong> Think about how your words or shared content might affect someone.</li>
                        <li><strong>Respect boundaries.</strong> Don\'t share someone\'s content or information without permission.</li>
                        <li><strong>You have choices in how you participate.</strong> You can engage, step back, correct respectfully, or disengage entirely.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 9,
        category: 'Digital Etiquette',
        title: 'Your Digital Footprint: What You Share Online',
        intro: 'A digital footprint is information connected to someone\'s online activity—posts, comments, likes, photos, or information shared. Understanding how information can be used or shared helps you make choices about what to post.',
        sections: [
            {
                title: 'What Stays Online, What Changes',
                type: 'text',
                content: 'Deleting content can reduce how widely available it is. Privacy settings can limit who normally sees something. But neither guarantees that something was never copied, screenshotted, forwarded, or saved elsewhere. Also, visibility can change over time—content that\'s private on one platform might appear in search results, or platform defaults might shift. Understanding these possibilities helps you make informed choices about what to share.'
            },
            {
                title: 'Think Before Posting',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Is this something I want to share beyond my intended audience?</strong> Privacy settings help, but they\'re not guarantees.</li>
                        <li><strong>If I\'m unsure, I can wait.</strong> Giving yourself time before posting—especially when you\'re emotional or uncertain—can help.</li>
                        <li><strong>Consider other people\'s privacy.</strong> Don\'t share someone else\'s photos, messages, or information without permission, even as a story or private message.</li>
                        <li><strong>Location information can reveal more than you intend.</strong> Check your location permissions and decide what you want to share.</li>
                        <li><strong>Different audiences, different impact.</strong> What feels fine to share with friends might feel different if it\'s public.</li>
                    </ul>
                `
            },
            {
                title: 'Managing Your Digital Footprint',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Review your privacy settings.</strong> Limit who can see your posts, tag you, or comment. These settings matter.</li>
                        <li><strong>Look at your old content.</strong> Delete things you no longer want available if platforms allow it. You can change what you share over time.</li>
                        <li><strong>Delete content you no longer want public.</strong> This reduces its availability, even if someone may have copied it elsewhere.</li>
                        <li><strong>Use platform tools to request removal.</strong> Some platforms have tools to request deletion or removal from search results.</li>
                        <li><strong>Check what information is publicly searchable.</strong> Knowing what appears when someone searches your name can help you decide what to adjust.</li>
                    </ul>
                `
            },
            {
                title: 'Support Note: Talking About Digital Permanence',
                type: 'parent-popup',
                content: `
                    <p><strong>Explain that information can persist in multiple ways:</strong> As a public post, as a screenshot, in archive sites, as a forward. But that doesn\'t mean everything is inevitably permanent or that they can\'t control their presence.</p>
                    <p><strong>Focus on informed choice:</strong> "Information you share can potentially be copied or remain available. That\'s something to think about when you\'re deciding what to post. It doesn\'t mean never post anything—it means being thoughtful about what you share and with whom."</p>
                    <p><strong>Normalize changing your mind.</strong> "You can delete things, adjust your privacy settings, and make new choices about what you share. Your digital presence can change as you change."</p>
                    <p><strong>Have conversations about:</strong> What feels okay to share publicly, what feels more private, who they trust with sensitive information, and what to do if they regret posting something.</p>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>A digital footprint is information connected to your online activity.</strong> You create it through what you post, like, and share.</li>
                        <li><strong>Privacy controls and deletion matter.</strong> They reduce availability even if someone may have copied something.</li>
                        <li><strong>Different information stays available in different ways.</strong> Deletion doesn\'t guarantee erasure, and visibility can change.</li>
                        <li><strong>You can make new choices.</strong> Delete content, adjust settings, change who you follow, and change what you share over time.</li>
                        <li><strong>Being thoughtful about what you share helps.</strong> Think about audience, timing, and whether you\'d want it visible to different people.</li>
                    </ul>
                `
            }
        ]
    }
];
