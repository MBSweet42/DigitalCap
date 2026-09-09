// Conversation Scripts v2 - Age-flexible with adaptation tips
// Scripts organized by topic, not age

const parentConversationScripts = [
    {
        id: 1,
        articleId: 1,
        title: 'The Password Safety Talk',
        description: 'Foundation conversation about strong passwords and why they matter',
        script: `You: "Hey, I want to talk about passwords. Do you know why they're important?"

Other person: [responds]

You: "Right. Your password is like a key to your account. If someone has it, they can change things, read your messages, and pretend to be you. That's why we need passwords that are hard to guess."

You: "A longer password is generally stronger. It can be words strung together—like a passphrase—or a mix of letters and numbers. Whatever you can remember or keep secure. And it should be different for each account that matters."

Other person: [you talk about creating one]

You: "One thing to think about: Be selective about who you share your passwords with. Some relationships shift over time. If you need to share access with someone you trust, a password manager is safer than writing it down or texting it."

Other person: [responds]

You: "If you ever think someone got your password, let me know. We'll change it and check what they might have done. No judgment—this happens to lots of people."`,
        whenToUse: 'When setting up a new account or periodically to check in',
        adaptationTips: [
            'Ages 6-10: Use simple examples like "video game accounts" and "house keys"',
            'Ages 11-13: Discuss peer pressure and why keeping passwords private matters',
            'Ages 14+: Talk about account security, identity theft, and password managers',
            'All ages: Be calm and collaborative, not scary',
            'Show a password manager as an example of secure access',
            'Adapt the language to your relationship; not all conversations need "Parent/Child" structure'
        ]
    },
    {
        id: 2,
        articleId: 1,
        title: 'After a Hacked Account',
        description: 'Immediate response conversation when an account is compromised',
        script: `You: "I noticed someone got into your [app] account. This happens to a lot of people. Let's work through it together and get it secured."

Other person: [responds with concern]

You: "First, can you tell me what you think happened? Do you remember clicking anything unusual, or did your password get used somewhere else?"

Other person: [explains]

You: "OK. Here's what we'll do: First, let's change your password to something new and strong. Then we'll check what they accessed or changed. Then we can enable two-factor authentication if the app offers it—that adds an extra layer of protection."

Other person: [works through steps together]

You: "Going forward, a password manager can help so you don't have to remember a bunch of passwords. And if you notice anything else unusual, let me know right away."

Other person: [responds]

You: "This doesn't mean you did anything wrong. Account compromises happen. What matters is how we respond. You did the right thing by telling me."`,
        whenToUse: 'Immediately after discovering a hacked account',
        adaptationTips: [
            'Stay calm; they may already feel scared or embarrassed',
            'Focus on fixing it and moving forward, not on blame',
            'Check account activity together (show what was changed)',
            'Ask how it happened without judgment (weak password, phishing link, reused password)',
            'Walk through securing the account and enabling 2FA',
            'Follow up later to check for suspicious activity',
            'Recognize that they reported it to you - that\'s good'
        ]
    },
    {
        id: 3,
        articleId: 2,
        title: 'Spotting Scams Talk',
        description: 'Teach critical thinking about suspicious offers and requests',
        script: `You: "I want to talk about scams because they're everywhere online. Have you ever seen an offer that seemed too good to be true, or a message asking you to do something unusual?"

Other person: [responds]

You: "Scammers often try to create urgency or offer something exciting to get you to act fast without thinking. Free Robux, you've won a prize, your account needs to be verified right now... they're counting on you clicking before you second-guess."

You: "Here's what to watch for: Unexpected requests for your password or personal information. Urgency or threats. Asking you to click a link or download something. Offers that seem unreasonable. Messages from accounts that look official but aren't quite right."

Other person: [responds]

You: "If something seems off, here's what helps: Stop. Don't click the link. Go directly to the official app or website instead—type the address yourself. If there's a real problem, you can find out by going straight to the source. And tell me what you saw; I might have more context."

Other person: [discusses]

You: "The trick is taking a breath before clicking. Most scams rely on quick reactions. A few extra seconds of checking can protect you."`,
        whenToUse: 'Regularly, as new scams emerge. Great after noticing one together online',
        adaptationTips: [
            'Use real examples from their apps and platforms',
            'Discuss why people fall for scams (urgency works, offers are tempting)',
            'Practice spotting red flags together on real messages',
            'Emphasize the "stop, don\'t click, verify independently" approach',
            'Recognize when they report suspicious stuff - that\'s learning',
            'Remind them scams are designed to be convincing; it\'s not a reflection on them if one almost worked',
            'Note: Spelling/grammar isn\'t reliable anymore; scams can be well-written'
        ]
    },
    {
        id: 4,
        articleId: 3,
        title: 'Grooming Safety Talk - The Early Conversation',
        description: 'Foundation conversation about online safety and concerning behavior',
        script: `You: "I want to talk about something important. Sometimes people online do things that aren't safe, and I want you to know what to look for and what to do."

Other person: [listens]

You: "Online friendships can be real and good. But some people online do things that aren't OK - they might ask you personal questions, want to move conversations to private apps, or ask you to keep them secret. Those are warning signs."

You: "Here's what matters: If anyone online asks where you live, what school you go to, asks for pictures, or wants to keep talking a secret from the people you trust - that's a red flag. Tell me right away."

Other person: [responds]

You: "Sometimes people who aren't safe will seem really nice or understanding at first. They might say they get you better than anyone else, or send gifts. That's sometimes how they build trust. But the goal is to move the relationship somewhere private, where no one else can see."

You: "Your job is simple: Tell me about online friends, especially if anyone asks personal questions or wants private conversations. Tell me if anyone asks you to keep something secret from me or other trusted adults. I promise I won't be mad - I just want to help keep you safe."

Other person: [responds]

You: "If anything makes you uncomfortable - even if you're not sure why - that's worth telling me about. We can figure it out together."`,
        whenToUse: 'Start this conversation EARLY (ages 6-8), then revisit regularly',
        adaptationTips: [
            'Ages 6-10: Keep it simple and focused on behavior ("If they ask personal questions or want to keep talking secret")',
            'Ages 11-13: Discuss how people build trust over time and move conversations to private spaces',
            'Ages 14+: Talk about catfishing, sextortion, manipulation, and how predators use pressure or shame',
            'Normalize reporting concerning behavior without judgment',
            'Emphasize: "It\'s not your fault"',
            'Check in regularly about online friendships without being invasive',
            'Don\'t shame them if they\'ve already had contact with someone concerning'
        ]
    },
    {
        id: 5,
        articleId: 3,
        title: 'Grooming Safety Talk - Red Flags Check-In',
        description: 'Regular conversation to check for warning signs',
        script: `You: "I want to check in about your online friends. Who are you talking to these days?"

Other person: [tells you]

You: "Do any of them ask you personal questions - like where you live, what school you go to, or for pictures?"

Other person: [responds]

You: "Has anyone online ever said things like 'your parents wouldn't understand' or 'let's keep this between us'?"

Other person: [responds]

You: "Those are warning signs. People trying to do something wrong often try to create a secret relationship. They might be extra understanding, extra interested in your problems, or make you feel special. It can feel good at first, but it's actually a way of isolating you from people who could help."

Other person: [listens]

You: "If anything like that happens - or if someone pressures you, sends explicit messages, or asks to meet - I need to know. And I want you to be clear: if it's already happened, it's not your fault. The adult's behavior is 100% their responsibility. You did the right thing by telling me."`,
        whenToUse: 'Have this conversation every few months, especially with younger teens',
        adaptationTips: [
            'Keep it casual and supportive, not scary',
            'Ask open-ended questions and listen more than you talk',
            'Take what they share seriously',
            'Stay calm so they feel safe continuing the conversation',
            'Don\'t shame them if they\'ve mentioned something concerning',
            'Know how to report on their platforms if needed',
            'If serious concerns emerge, know when to involve school or authorities'
        ]
    },
    {
        id: 6,
        articleId: 4,
        title: 'Online Respect Talk',
        description: 'Foundation conversation about treating people with respect online',
        script: `You: "Let's talk about how we treat people online. Is it different from how you treat people in person?"

Other person: [responds]

You: "People are sometimes different online - maybe because of the distance, or they think it's anonymous. But here's what matters: your words have impact online just like they do in person."

You: "Before you post, something useful to think about: Would this feel OK to say to the person's face? Is this what I want to say?"

You: "If you see someone being treated badly, you have options: Don't participate. Offer support privately. Report it if you think it crosses a line. You're not responsible for fixing everything, but you can choose not to add to it."

Other person: [responds]

You: "And if someone's mean to you, remember - it usually says more about what they're dealing with than about you. You can mute, block, or step away."`,
        whenToUse: 'Regularly, as they navigate social media. Model good behavior yourself',
        adaptationTips: [
            'Use real examples from their social media if helpful',
            'Explore why people might post mean things (stress, wanting attention, not thinking)',
            'Notice when they\'re being kind online',
            'Help them see their comments matter',
            'Show them what respectful participation looks like in your own posts',
            'Check in about how people are treating them'
        ]
    },
    {
        id: 7,
        articleId: 5,
        title: 'Cyberbullying Response Talk',
        description: 'Immediate conversation if they\'re experiencing cyberbullying',
        script: `You: "I heard that some people have been mean to you online. I'm sorry that happened. That's not OK."

Other person: [responds with emotion]

You: "First, I want to be clear - this is not your fault. The behavior of others is not a reflection of you."

You: "What happened? Can you tell me what's going on?"

Other person: [explains]

You: "Here are some options we can consider: You can mute or block those accounts. We can report what happened to the platform. If these people go to your school, telling school leadership might help. And talking with a counselor or someone you trust can help with how you're feeling."

Other person: [responds]

You: "You don't deserve to feel scared or hurt online. What would feel most helpful to you right now - do you need space from that app, or would you rather keep going and we help secure your account?"

Other person: [expresses preferences]

You: "Let's work through this together. I'm here to listen and help with next steps."`,
        whenToUse: 'Immediately after learning about cyberbullying',
        adaptationTips: [
            'Listen without dismissing their feelings',
            'Avoid "just ignore it" - that dismisses real impact',
            'Ask what would help them, not just take action for them',
            'Take concrete steps (blocking, reporting) when appropriate',
            'Involve school if the bullies are from their school',
            'Connect with professional support if they\'re struggling emotionally',
            'Follow up regularly to check on how they\'re doing'
        ]
    },
    {
        id: 8,
        articleId: 8,
        title: 'Standing Up Online Talk',
        description: 'Conversation about empathy, pile-ons, and choices in online spaces',
        script: `You: "I want to talk about something. How do you think it feels when someone posts something and then a bunch of people start piling on with criticism or mean comments?"

Other person: [responds]

You: "Yeah, that can be really rough. And here's what often happens - a lot of people see others commenting negatively, so it feels normal to add their comment too. That's called a pile-on, and it multiplies the impact."

Other person: [listens]

You: "So before you comment on something, it's worth asking: Would I want to have this conversation if the person could hear me? Is this kind of feedback something they asked for? If not, I don't have to participate."

You: "But here's the other side - if you see someone getting attacked and you want to do something, you have options. A private message saying 'People are being rough, but that says more about them' can actually mean something. You don't have to publicly call everything out."

You: "And if you post something and then realize it wasn't cool, you can change it. Delete it, or DM an apology. That's not weakness - that's integrity."

Other person: [responds]

You: "People trust those who can think for themselves, not just follow the crowd."`,
        whenToUse: 'After they\'ve noticed pile-ons online. Also good as a regular conversation about online choices',
        adaptationTips: [
            'Reference examples from their social media if relevant',
            'Explore why people join in (fitting in, group energy, peer pressure)',
            'Ask: "What would you actually want someone to say if that was you?"',
            'Notice when they show thoughtfulness online',
            'Talk about consequences of pile-ons',
            'Normalize changing your mind and fixing mistakes'
        ]
    },
    {
        id: 9,
        articleId: 9,
        title: 'Digital Permanence Talk',
        description: 'Foundation conversation about digital footprints and informed choices about what to post',
        script: `You: "Let's talk about something that matters with online sharing. When you post something and then delete it, what do you think happens?"

Other person: [responds]

You: "Right - deleting helps, but it's also possible someone screenshotted it, or the platform has archived versions. So deletion reduces how available something is, but doesn't guarantee it was never copied. That's why thinking before posting matters."

You: "Also, different information stays available in different ways. A public post might appear in search results. Something you thought was private might have different visibility depending on platform settings."

Other person: [listens]

You: "This matters because information about you online can affect things. Not because it's definitely there forever - but because some things might stick around longer than you'd want, or be visible to people you didn't plan for."

You: "That's why it helps to think: Would I be OK if [person I care about] saw this? Could this bother me later? Does it match what I want people to know about me? If yes to any hesitation, I can wait or decide not to post."

Other person: [responds]

You: "One more thing: Be thoughtful before posting other people's images or information. It's their choice what they share about themselves."

You: "And if you post something and later wish you hadn't, you can delete it. That reduces what's out there."`,
        whenToUse: 'Regularly as they use social media. Good before they start new accounts',
        adaptationTips: [
            'Ages 9-12: Talk about who might see what they post (friends, family, teachers, future)',
            'Ages 13+: Discuss how information they share now might show up in different contexts',
            'Help them understand privacy settings on their platforms',
            'Explore screenshot culture and how things spread',
            'Practice: "Who do I want to see this? Who might actually see it?"',
            'If they regret posting: deletion works, but faster is better',
            'Model thoughtful sharing in your own posts'
        ]
    }
];
