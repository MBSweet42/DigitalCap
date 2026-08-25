// Digital Safety & Etiquette Content - Version 2 (Expanded & Interactive)
// Adapted from FTC OnGuardOnline, NCMEC/NetSmartz, Common Sense Media, ConnectSafely

const articlesV2 = [
    {
        id: 1,
        category: 'Digital Safety',
        title: 'Password Safety: Protecting Your Digital Life',
        intro: 'Your password is like a key to your digital home. A weak password makes it easy for hackers to access your accounts, steal your information, and impersonate you.',
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
                        <li><strong>Use at least 12 characters:</strong> longer is better</li>
                        <li><strong>Mix it up:</strong> Use uppercase letters, lowercase letters, numbers, and symbols (!@#$%)</li>
                        <li><strong>Avoid personal information:</strong> Don't use your name, birthday, or address</li>
                        <li><strong>Don't use dictionary words:</strong> hackers use password-cracking software that tries common words</li>
                        <li><strong>Make it unique:</strong> Use different passwords for important accounts (email, banking, school)</li>
                    </ul>
                    <div style="margin-top: 1rem; padding: 1rem; background: #e8f4f8; border-radius: 8px; border-left: 4px solid var(--secondary);">
                        <strong>💡 Pro Tip:</strong> Use a password manager like Bitwarden or 1Password. It creates and stores strong passwords for you.
                    </div>
                `
            },
            {
                title: 'Parent Pop-Up: How to Talk About Passwords',
                type: 'parent-popup',
                content: `
                    <p><strong>Start with:</strong> "I want you to have a really strong password so no one can hack your account. Can I help you create one?"</p>
                    <p><strong>Explain the stakes:</strong> "If someone gets your password, they could pretend to be you online, see your private messages, post mean things as you, or steal your photos."</p>
                    <p><strong>Make it collaborative:</strong> "Let's use a password manager together so you don't have to remember a bunch of passwords."</p>
                    <p><strong>Red flag to discuss:</strong> If your child's account was hacked before, ask what happened and help them change passwords on ALL accounts.</p>
                `
            },
            {
                title: 'Password Security Tips',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Never share your password:</strong> not even with close friends (people change, relationships end)</li>
                        <li><strong>Don't write it down</strong> or save it in unsecured places</li>
                        <li><strong>Use a password manager</strong> like Bitwarden, 1Password, or KeePass if you have many accounts</li>
                        <li><strong>Enable two-factor authentication (2FA)</strong> on important accounts: it adds a second step even if someone has your password</li>
                        <li><strong>Change passwords regularly</strong> (every 3-6 months for important accounts)</li>
                        <li><strong>If hacked, change it immediately</strong> and check account activity</li>
                    </ul>
                `
            },
            {
                title: 'Red Flags: Don\'t Fall For These',
                type: 'callout',
                content: `
                    <div style="margin: 1rem 0;">
                        <p style="margin: 0.5rem 0;"><strong>🚩 Someone asking for your password:</strong> Legitimate companies never ask. Period.</p>
                        <p style="margin: 0.5rem 0;"><strong>🚩 Apps that force you to enter a password multiple times:</strong> Could be a phishing trap.</p>
                        <p style="margin: 0.5rem 0;"><strong>🚩 Websites without the lock icon:</strong> Check for HTTPS in the address bar. No lock = not secure.</p>
                    </div>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div style="padding: 1rem; background: rgba(46, 204, 113, 0.1); border-radius: 8px; border-left: 4px solid var(--success);">
                            <p style="margin: 0; font-weight: 600; color: var(--success);">✅ DO</p>
                            <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem;">Use 12+ characters with mixed case, numbers, symbols. Use different passwords per account.</p>
                        </div>
                        <div style="padding: 1rem; background: rgba(231, 76, 60, 0.1); border-radius: 8px; border-left: 4px solid var(--danger);">
                            <p style="margin: 0; font-weight: 600; color: var(--danger);">❌ DON'T</p>
                            <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem;">Share passwords, use your name/birthday, reuse passwords, write them down.</p>
                        </div>
                    </div>
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
                title: 'Common Scams Kids Face',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>"Free Robux/V-Bucks offers":</strong> Nothing is free. If someone is offering free gaming currency, they're trying to steal your account or money.</li>
                        <li><strong>"You've won a prize!":</strong> If you didn't enter a contest, you didn't win. Scammers use this to get you to click dangerous links.</li>
                        <li><strong>"Account verification requests":</strong> Instagram, TikTok, etc. don't ask you to "verify your account" by clicking a link. Real companies send links only through the app itself.</li>
                        <li><strong>Job scams:</strong> "Easy money working from home!" Usually requires you to pay upfront or give personal info.</li>
                        <li><strong>Romance scams:</strong> Strangers building relationships to eventually ask for money or gift cards.</li>
                    </ul>
                `
            },
            {
                title: 'Parent Pop-Up: Warning Signs Your Child Has Been Scammed',
                type: 'parent-popup',
                content: `
                    <p><strong>Look for:</strong></p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li>Unexpected charges on your credit card or PayPal</li>
                        <li>Your child lost a gaming account they had for years</li>
                        <li>They received a "verify your account" message that seemed weird</li>
                        <li>They clicked on a link from an unknown person and their device is acting strange</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>What to do:</strong> Stay calm (don't punish them), change passwords immediately, check account activity, report it to the platform.</p>
                `
            },
            {
                title: 'How to Spot a Phishing Email or Message',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Suspicious sender:</strong> Look at the actual email address, not just the display name. Scammers spoof addresses that look almost real (instagam.com instead of instagram.com).</li>
                        <li><strong>Urgency:</strong> "Click now or your account will be closed!" Real companies give you time.</li>
                        <li><strong>Asking for sensitive info:</strong> Banks and apps never ask for passwords via email/message.</li>
                        <li><strong>Suspicious links:</strong> Hover over links (don't click) to see where they really go.</li>
                        <li><strong>Poor grammar/spelling:</strong> Many phishing emails have errors.</li>
                        <li><strong>Strange requests:</strong> "Confirm your password," "Update payment information," etc.</li>
                    </ul>
                `
            },
            {
                title: 'If You Think You\'ve Been Scammed',
                type: 'callout',
                content: `
                    <ol style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Change your password immediately</strong></li>
                        <li><strong>Tell a trusted adult</strong> (parent, teacher, counselor)</li>
                        <li><strong>Report the scam</strong> to the platform (Instagram, Discord, etc.) using their report button</li>
                        <li><strong>Check your account activity</strong> for suspicious logins or changes</li>
                        <li><strong>Monitor your accounts</strong> for unauthorized purchases</li>
                        <li><strong>If money was involved, tell your parents immediately</strong> so they can contact the bank</li>
                    </ol>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <div style="padding: 1.5rem; background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%); border-radius: 8px; border-left: 4px solid var(--primary);">
                        <p><strong>🎯 Remember:</strong> Legitimate companies never ask for passwords via email or links. If something feels fishy, trust your gut and ask a trusted adult.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: 3,
        category: 'Digital Safety',
        title: 'Recognizing Grooming & Predatory Behavior',
        intro: 'Grooming is when an adult builds a relationship with a young person to gain trust and eventually exploit them. It can happen online, and predators often target kids without realizing they\'re being manipulated.',
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
                title: 'Parent Pop-Up: How to Have This Conversation',
                type: 'parent-popup',
                content: `
                    <p><strong>Age 8-12:</strong> "Sometimes adults online pretend to be kids to trick you. If someone online asks you where you live or sends you gifts, tell me right away. It's not your fault."</p>
                    <p><strong>Teens:</strong> "I need to be real with you about something hard. Some adults online try to build friendships with young people to eventually ask for inappropriate things. If anyone makes you uncomfortable, asks to keep secrets, or asks for photos, tell me. I won't punish you."</p>
                    <p style="margin-top: 1rem;"><strong>Always emphasize:</strong> "It's not your fault. Predators are manipulative and good at lying. If it happens, you did nothing wrong."</p>
                `
            },
            {
                title: 'What to Do',
                type: 'callout',
                content: `
                    <ol style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Trust your gut:</strong> If something feels weird, it probably is.</li>
                        <li><strong>Don't engage alone:</strong> If someone is making you uncomfortable in a chat, don't continue the conversation.</li>
                        <li><strong>Tell an adult immediately:</strong> A parent, school counselor, or trusted teacher (not your friends).</li>
                        <li><strong>Don't delete the evidence:</strong> Keep screenshots; they help authorities.</li>
                        <li><strong>Block and report:</strong> Use the platform's reporting tools.</li>
                        <li><strong>Remember: It's not your fault.</strong> If someone is trying to exploit you, that's 100% on them, not you.</li>
                    </ol>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(231, 76, 60, 0.1); border-radius: 8px;">
                        <strong>🆘 Get Help Now:</strong><br>
                        <strong>CyberTipline:</strong> cybertipline.org<br>
                        <strong>Crisis Text Line:</strong> Text HOME to 741741<br>
                        <strong>National Suicide Prevention Lifeline:</strong> 988
                    </div>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <div style="padding: 1.5rem; background: rgba(231, 76, 60, 0.1); border-radius: 8px; border-left: 4px solid var(--danger);">
                        <p><strong>⚠️ Grooming is a crime.</strong> It's not flirting, not a relationship, not your fault. Adults who do this are predators, period.</p>
                        <p style="margin-top: 0.5rem;"><strong>Trust your instincts.</strong> Tell an adult immediately if anyone makes you uncomfortable.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: 4,
        category: 'Digital Etiquette',
        title: 'Online Respect: Netiquette Basics',
        intro: 'Netiquette is internet etiquette: the rules of respect and kindness that should guide how we interact online. Just because you\'re behind a screen doesn\'t mean you can be disrespectful.',
        sections: [
            {
                title: 'Golden Rules of Netiquette',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Treat people online like you'd treat them in person.</strong> Would you say that to their face?</li>
                        <li><strong>Assume good intent.</strong> That message might sound rude, but the person might not have meant it that way.</li>
                        <li><strong>Think before you post.</strong> Take a moment before hitting send. Is this kind, true, and necessary?</li>
                        <li><strong>Don't use all caps.</strong> It looks like you're YELLING.</li>
                        <li><strong>Respect people's time.</strong> Don't spam, send excessive messages, or demand immediate responses.</li>
                        <li><strong>Respect privacy.</strong> Don't share others' information, photos, or messages without permission.</li>
                        <li><strong>Use emoji and tone carefully.</strong> Written words can be misunderstood without tone of voice.</li>
                        <li><strong>Don't embarrass people publicly.</strong> If you have a problem, talk privately first.</li>
                    </ul>
                `
            },
            {
                title: 'Parent Pop-Up: Model Good Behavior',
                type: 'parent-popup',
                content: `
                    <p><strong>Kids learn by watching.</strong> If you're rude in online comments, argue on social media, or text passive-aggressive messages, your child will too.</p>
                    <p><strong>Have conversations about:</strong></p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li>Why they think tone gets misunderstood in texts</li>
                        <li>What they would do if they received a mean comment</li>
                        <li>How they know if someone is joking vs. being mean</li>
                    </ul>
                `
            },
            {
                title: 'Common Netiquette Mistakes',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Dragging old drama:</strong> "You said [mean thing] 3 months ago!" Bringing up the past in a conflict just makes things worse.</li>
                        <li><strong>Pile-ons:</strong> Multiple people attacking one person. Don't join in.</li>
                        <li><strong>Fishing for attention:</strong> Fake drama, suicidal posts, or outrage just for comments/likes.</li>
                        <li><strong>One-word responses:</strong> "Ok" or "sure" can come across as dismissive. Engage genuinely.</li>
                        <li><strong>Ignoring people:</strong> If someone reaches out, a quick response shows respect.</li>
                    </ul>
                `
            },
            {
                title: 'Group Chat Etiquette',
                type: 'callout',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li>Don't spam the chat with rapid-fire messages</li>
                        <li>Respect the group's topic: if it's for homework help, don't flood it with memes</li>
                        <li>Don't add people to groups without asking first</li>
                        <li>If you disagree, keep it respectful</li>
                        <li>Know when to take a conversation to DMs instead</li>
                    </ul>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
                        <div style="padding: 1rem; background: rgba(78, 205, 196, 0.1); border-radius: 8px; border-left: 4px solid var(--secondary);">
                            <p style="margin: 0; font-weight: 600;">💡 Golden Rule:</p>
                            <p style="margin: 0.5rem 0 0 0;">Treat people online exactly like you'd treat them in person. Your words have impact.</p>
                        </div>
                    </div>
                `
            }
        ]
    },
    {
        id: 5,
        category: 'Digital Etiquette',
        title: 'Cyberbullying: Recognizing & Responding',
        intro: 'Cyberbullying is using digital platforms to harass, embarrass, threaten, or isolate someone. Unlike in-person bullying, it\'s public, permanent, and follows you everywhere.',
        sections: [
            {
                title: 'Forms of Cyberbullying',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Mocking comments:</strong> Mean replies on posts or videos</li>
                        <li><strong>Exclusion:</strong> Being left out of group chats or deliberately ignored</li>
                        <li><strong>Spreading rumors:</strong> Sharing false or embarrassing information about someone</li>
                        <li><strong>Impersonation:</strong> Pretending to be someone else to damage their reputation</li>
                        <li><strong>Harassment:</strong> Repeated unwanted messages or DMs</li>
                        <li><strong>Doxxing:</strong> Sharing someone's personal information publicly</li>
                        <li><strong>Screenshots & sharing:</strong> Saving and sharing private messages or embarrassing photos without consent</li>
                        <li><strong>Hate groups:</strong> Being targeted by a coordinated group</li>
                    </ul>
                `
            },
            {
                title: 'Parent Pop-Up: If Your Child Is Being Bullied',
                type: 'parent-popup',
                content: `
                    <p><strong>Listen without judgment.</strong> Don't blame them or say "just ignore it."</p>
                    <p><strong>Take it seriously.</strong> Cyberbullying can lead to anxiety, depression, and self-harm.</p>
                    <p><strong>Document everything:</strong> Screenshot mean messages, posts, and comments with dates.</p>
                    <p><strong>Report it:</strong> Use the platform's reporting tools AND contact your child's school if bullies attend the same school.</p>
                    <p><strong>Support your child:</strong> Let them take a break from social media if needed. This is not weakness.</p>
                `
            },
            {
                title: 'If You\'re Being Cyberbullied',
                type: 'callout',
                content: `
                    <ol style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Don't respond in kind.</strong> Fighting back often makes it worse.</li>
                        <li><strong>Save evidence.</strong> Screenshot mean messages and posts (they may delete them).</li>
                        <li><strong>Block the person.</strong> Use the platform's block feature.</li>
                        <li><strong>Report them.</strong> Most platforms have reporting tools for harassment.</li>
                        <li><strong>Tell an adult.</strong> A parent, school counselor, or teacher.</li>
                        <li><strong>Take a break from social media if needed.</strong> It's okay to step back to protect your mental health.</li>
                        <li><strong>Remember: It's not about you.</strong> Bullies are often dealing with their own stuff.</li>
                    </ol>
                `
            },
            {
                title: 'Being an Upstander, Not a Bystander',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Don't participate in pile-ons.</strong> Scrolling past mean comments is one thing; adding your own is another.</li>
                        <li><strong>Support the target privately.</strong> A DM saying "that wasn't cool" or "I'm sorry people were mean" helps.</li>
                        <li><strong>Call out the bullying.</strong> "That's not funny" or "Leave them alone" can actually change the dynamic.</li>
                        <li><strong>Report bullying when you see it.</strong> You don't have to be the target to report it.</li>
                    </ul>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <div style="padding: 1.5rem; background: rgba(46, 204, 113, 0.1); border-radius: 8px; border-left: 4px solid var(--success);">
                        <p><strong>✊ You have power here.</strong> You can be an upstander, report bullying, and support targets. Bullies lose power when everyone stands together.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: 5,
        category: 'Digital Safety',
        title: 'Screen Time & Sleep: Taking Care of Your Health',
        intro: 'Your phone is designed to keep you scrolling. Apps use psychology and algorithms to make them addictive. But your sleep, school, and mental health matter more than screen time.',
        sections: [
            {
                title: 'Why Screen Time Matters',
                type: 'text',
                content: 'Social media apps make money when you use them more. They\'re literally designed to be addictive. The notifications, the algorithm, the infinite scroll: all engineered to keep you hooked. But constant scrolling impacts sleep, grades, mental health, and real relationships.'
            },
            {
                title: 'How Late-Night Scrolling Kills Sleep',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Screen use close to bedtime can interfere with sleep:</strong> Light exposure may affect melatonin, while stimulating content, notifications, and staying online longer can also make it harder to wind down</li>
                        <li><strong>Social media is stimulating.</strong> Your brain gets excited by notifications, likes, and drama: the opposite of sleep</li>
                        <li><strong>You lose track of time.</strong> "Just 5 more minutes" becomes 2 hours</li>
                        <li><strong>One more scroll...</strong> The algorithm never ends. It\'s infinite</li>
                        <li><strong>Tired brain = bad decisions.</strong> Sleep-deprived kids get worse grades, make bad choices, and have worse moods</li>
                    </ul>
                    <div style="margin-top: 1rem; padding: 1rem; background: #fff3cd; border-radius: 8px; border-left: 4px solid var(--accent);">
                        <strong>Real talk:</strong> National estimates show adolescents average about 7 to 9 hours a day on entertainment screens. (U.S. Surgeon General, Advisory on the Harms of Screen Use, 2026)
                    </div>
                `
            },
            {
                title: 'Parent Pop-Up: Setting Screen Time Limits',
                type: 'parent-popup',
                content: `
                    <p><strong>Start the conversation:</strong> "I\'ve learned that apps are designed to be addictive. I want to help you stay healthy."</p>
                    <p><strong>Make it collaborative:</strong> "What do you think would be a healthy amount of screen time? When should phones be off-limits?"</p>
                    <p><strong>Set boundaries together:</strong> No phones during meals, homework, or after 10pm. No phones in bedrooms overnight.</p>
                    <p><strong>Model it:</strong> Put YOUR phone away during family time. Kids notice.</p>
                    <p><strong>Use tools:</strong> Apple Screen Time, Google Family Link, or app timers can help enforce limits without being the "bad guy."</p>
                `
            },
            {
                title: 'Healthy Screen Time Habits',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Set a bedtime cutoff:</strong> No screens 30-60 minutes before bed</li>
                        <li><strong>Use Do Not Disturb:</strong> Turn off notifications so you\'re not tempted to check</li>
                        <li><strong>Delete apps that are designed to addict you.</strong> Seriously. If you\'re scrolling for 3 hours, that app is working against you</li>
                        <li><strong>Use grayscale.</strong> A black-and-white phone is way less addictive</li>
                        <li><strong>Put your phone in another room during homework.</strong> You concentrate better</li>
                        <li><strong>Have phone-free activities.</strong> Sports, art, hanging out with friends IRL (in real life)</li>
                        <li><strong>If you\'re feeling anxious or bad about yourself, take a break.</strong> It probably means the app is making you feel worse</li>
                    </ul>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <div style="padding: 1.5rem; background: rgba(46, 204, 113, 0.1); border-radius: 8px; border-left: 4px solid var(--success);">
                        <p><strong>🌙 Your sleep and health come first.</strong> Apps can wait. Your brain needs rest to learn, think, and be happy.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: 6,
        category: 'Digital Safety',
        title: 'Social Comparison & Mental Health: You\'re Not Your Highlight Reel',
        intro: 'Instagram shows you people\'s best moments. YouTube shows you people at their peak. But real life is messier, sadder, and more average. Comparing your real life to someone\'s highlight reel will make you miserable.',
        sections: [
            {
                title: 'The Highlight Reel Effect',
                type: 'text',
                content: 'Nobody posts photos when they\'re having a bad day. Nobody posts their actual body on Instagram: they post their best angle, best lighting, best filter. What you see is 1% of someone\'s life, curated and edited. Comparing your entire real life to someone else\'s 1% is a recipe for depression and anxiety.'
            },
            {
                title: 'How Social Media Affects Mental Health',
                type: 'expandable-cards',
                cards: [
                    {
                        label: 'Constant comparison',
                        content: '"Why don\'t I look like them?" "Why isn\'t my life that fun?" "Why don\'t I have that many friends?"'
                    },
                    {
                        label: 'Validation through likes',
                        content: 'Your self-worth shouldn\'t depend on Instagram likes, but the algorithm is designed to make it'
                    },
                    {
                        label: 'FOMO (Fear of Missing Out)',
                        content: 'Everyone else seems to be having fun without you'
                    },
                    {
                        label: 'Cyberbullying amplification',
                        content: 'Mean comments are public and permanent'
                    },
                    {
                        label: 'Body image issues',
                        content: 'Constant exposure to "perfect" bodies leads to eating disorders, anxiety, and self-harm'
                    },
                    {
                        label: 'Sleep deprivation',
                        content: 'Can\'t put the phone down = can\'t sleep = depression'
                    }
                ],
                researchBox: '<strong>Research:</strong> The U.S. Surgeon General reports that young people who spend more than three hours a day on social media face double the risk of mental health problems, including symptoms of depression and anxiety.'
            },
            {
                title: 'Parent Pop-Up: If Your Child Is Struggling',
                type: 'parent-popup',
                content: `
                    <p><strong>Watch for:</strong> Sudden mood changes, obsession with appearance, comparing themselves to others, anxiety about posting, self-harm language</p>
                    <p><strong>Take action:</strong> Suggest a social media break. A week off can reset your brain.</p>
                    <p><strong>Talk about reality:</strong> "Instagram is a highlight reel. Real people have bad days, messy hair, and pimples."</p>
                    <p><strong>Get help if needed:</strong> If your child shows signs of depression, eating disorder, or self-harm, contact a therapist immediately. This is serious.</p>
                `
            },
            {
                title: 'How to Protect Your Mental Health',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Unfollow people who make you feel bad.</strong> Yes, even if they\'re friends. Your mental health matters more</li>
                        <li><strong>Follow accounts that are real and honest.</strong> Look for people who post about struggles, not just highlight reels</li>
                        <li><strong>Mute or hide accounts.</strong> Instagram lets you hide stories from people without unfollowing them</li>
                        <li><strong>Take breaks.</strong> Delete the app for a week. See how you feel</li>
                        <li><strong>Remember: The algorithm is designed to keep you hooked, not to make you happy.</strong> If you feel bad after scrolling, that\'s working as intended</li>
                        <li><strong>Focus on real relationships.</strong> Text a friend, hang out IRL, have a real conversation</li>
                        <li><strong>If you\'re struggling: Tell an adult.</strong> A parent, school counselor, or therapist</li>
                    </ul>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <div style="padding: 1.5rem; background: rgba(46, 204, 113, 0.1); border-radius: 8px; border-left: 4px solid var(--success);">
                        <p><strong>🌟 Your real life is enough.</strong> You don\'t need to perform for the internet. Your imperfect, messy real life is more valuable than any highlight reel.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: 7,
        category: 'Digital Etiquette',
        title: 'Online Kindness: Being a Good Human Online',
        intro: 'The keyboard makes us feel brave. We say things online that we\'d never say to someone\'s face. But every mean comment hurts someone real.',
        sections: [
            {
                title: 'Why Kindness Matters Online',
                type: 'text',
                content: 'The internet is full of cruelty. Racism, sexism, homophobia, bullying: it all happens because people think there are no consequences. But there are. Someone reads your mean comment and feels hurt. They might hurt themselves. Kindness is a choice, and it\'s powerful.'
            },
            {
                title: 'How to Be Kind Online',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Think before you post.</strong> "Would I say this to their face?" If no, don\'t post it</li>
                        <li><strong>Assume the best.</strong> Text can be misunderstood. Maybe they didn\'t mean to be rude</li>
                        <li><strong>Compliment people publicly.</strong> Like their posts, comment something nice, tell them they\'re doing great</li>
                        <li><strong>Criticize privately.</strong> If you have feedback, DM them. Don\'t call them out publicly</li>
                        <li><strong>Don\'t dogpile.</strong> If 100 people are already roasting someone, adding your comment just piles on</li>
                        <li><strong>Stand up against bullying.</strong> If you see mean comments, report them or leave a supportive comment</li>
                        <li><strong>Be authentic.</strong> Real people connect with real emotions, not perfect personas</li>
                    </ul>
                `
            },
            {
                title: 'Parent Pop-Up: Teaching Digital Kindness',
                type: 'parent-popup',
                content: `
                    <p><strong>Model it:</strong> Be kind online. Your kids watch what you post and how you comment</p>
                    <p><strong>Discuss impact:</strong> "That person read your comment. How do you think they felt?"</p>
                    <p><strong>If they were mean:</strong> Apologize. Have them DM the person and say sorry. Show that mistakes can be fixed</p>
                `
            }
        ]
    },
    {
        id: 8,
        category: 'Digital Etiquette',
        title: 'Your Digital Footprint: Everything You Post Stays Forever',
        intro: 'Delete button doesn\'t mean deleted. Screenshots exist. The internet remembers. Your embarrassing post from age 13 could affect your job, your relationships, and your reputation for life.',
        sections: [
            {
                title: 'What Is a Digital Footprint?',
                type: 'text',
                content: 'Everything you post, like, comment on, or share creates a digital footprint. Screenshots, archives, cached versions: once it\'s online, it\'s out there. Future schools, employers, and partners will Google you. What will they find?'
            },
            {
                title: 'Think Before You Post',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Would you want your grandparent/teacher/boss to see this?</strong> If not, don\'t post it</li>
                        <li><strong>Is this a moment or a permanent record?</strong> A story disappears, but a post is forever</li>
                        <li><strong>Never post when you\'re emotional.</strong> Angry, sad, drunk? Sleep on it. Check in the morning</li>
                        <li><strong>Don\'t share other people\'s secrets or photos without permission</strong></li>
                        <li><strong>Watch what you like and comment on.</strong> People judge you by what you engage with</li>
                        <li><strong>Be careful with location data.</strong> Don\'t tag your location on every post. Predators use this</li>
                        <li><strong>Memes and jokes age badly.</strong> That joke about a group or person might not age well</li>
                    </ul>
                `
            },
            {
                title: 'Managing Your Digital Footprint',
                type: 'expandable',
                content: `
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li><strong>Google yourself.</strong> See what comes up. If something bad is there, consider deleting it or reporting it</li>
                        <li><strong>Make your accounts private.</strong> Only friends can see your posts</li>
                        <li><strong>Review your old posts.</strong> Delete anything you\'re not proud of</li>
                        <li><strong>Adjust privacy settings.</strong> Limit who can see your posts, tag you, or comment</li>
                        <li><strong>Be careful on TikTok.</strong> What you post there can go viral and be seen by millions</li>
                    </ul>
                `
            },
            {
                title: 'Parent Pop-Up: Digital Permanence & Consent',
                type: 'parent-popup',
                content: `
                    <p><strong>The internet never forgets.</strong> Screenshots, archives, and forwards mean anything your child posts today could resurface years later (in college applications, job interviews, or conversations with future partners). Help them think long-term: "Would you be proud if everyone saw this in 10 years?"</p>
                    <p><strong>Have conversations about:</strong></p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li>Never posting pictures or personal information about other people without asking first</li>
                        <li>What to do if they regret something they posted (delete it, apologize if needed, move forward)</li>
                        <li>Why disappearing or temporary posts can still be saved, screenshotted, or shared</li>
                    </ul>
                `
            },
            {
                title: 'Key Takeaways',
                type: 'takeaway',
                content: `
                    <div style="padding: 1.5rem; background: rgba(46, 204, 113, 0.1); border-radius: 8px; border-left: 4px solid var(--success);">
                        <p><strong>📝 The internet has a long memory.</strong> Your 13-year-old self\'s posts will still exist when you\'re applying for jobs. Make choices you\'ll be proud of later.</p>
                    </div>
                `
            }
        ]
    }
];
