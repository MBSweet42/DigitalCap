// Conversation Scripts v2 - Age-flexible with adaptation tips
// Scripts organized by topic, not age

const parentConversationScripts = [
    {
        id: 1,
        articleId: 1,
        title: 'The Password Safety Talk',
        description: 'Foundation conversation about strong passwords and why they matter',
        script: `Parent: "Hey, I want to talk about passwords. Do you know why passwords are important?"

Child: [responds]

Parent: "Right. Your password is like a key to your room. If someone has it, they can go through your stuff, change things, and pretend to be you. That's why we need STRONG passwords."

Parent: "A strong password has at least 12 letters, numbers, and symbols mixed together. NOT your name or birthday. Can we create one together?"

Child: [you create password together]

Parent: "Great! One more important rule: NEVER give your password to anyone. Not your best friend, not your crush, nobody. People change, and relationships end. OK?"

Child: [agrees]

Parent: "If you ever think someone got your password, tell me right away. We'll change it together. No punishment, just teamwork. Deal?"`,
        whenToUse: 'When setting up a new account or periodically to check in',
        adaptationTips: [
            'Ages 6-10: Use simple examples like "video game accounts" and "house keys"',
            'Ages 11-13: Discuss peer pressure (friends asking for passwords)',
            'Ages 14+: Talk about identity theft and account takeover risks',
            'All ages: Be calm and collaborative, not scary',
            'Show YOUR password manager as an example of security'
        ]
    },
    {
        id: 2,
        articleId: 1,
        title: 'After a Hacked Account',
        description: 'Immediate response conversation when an account is compromised',
        script: `Parent: "I noticed someone got into your [app] account. I'm not angry. This happens to tons of people. Let's fix it together."

Parent: "First, can you tell me what happened? How do you think they got in?"

Child: [explains]

Parent: "OK, here's what we're doing: We're changing your password right now to something super strong. Then we're checking what they changed and fixing it. Then we're watching for anything weird."

Parent: "Going forward, let's use a password manager so you don't have to remember a bunch of passwords. And tell me ASAP if anything like this happens again. I'd rather help you fix it than find out later."

Parent: "This doesn't mean you did anything wrong. Hackers are sneaky. You're learning. We're in this together."`,
        whenToUse: 'Immediately after discovering a hacked account',
        adaptationTips: [
            'Stay calm; they\'ll be scared/embarrassed already',
            'Focus on fixing it, not blaming them',
            'Check account activity together (show what hackers changed)',
            'Discuss HOW it might have happened (weak password, phishing, reused password)',
            'Follow up in a week to check for suspicious activity',
            'Praise them if they reported it to you'
        ]
    },
    {
        id: 3,
        articleId: 2,
        title: 'Spotting Scams Talk',
        description: 'Teach critical thinking about suspicious offers and requests',
        script: `Parent: "I want to teach you about scams because they're everywhere online. Have you ever seen an ad or message that seemed too good to be true?"

Child: [responds]

Parent: "That's the trick. Scammers make things SOUND amazing so you'll click. Free Robux, free money, you won a prize... but there's always a catch."

Parent: "Here's the rule: If it's free and amazing, it's a scam. Real companies don't randomly give away stuff. And they don't ask for passwords through links or messages."

Parent: "If you ever see something that seems weird, here's what you do: (1) Don't click the link. (2) Tell me about it. (3) We'll report it together. Sound good?"

Child: [agrees]

Parent: "Let me show you how to spot the red flags. Look at this email/message. What seems weird about it?"

[Point out: spelling errors, urgent language, weird sender, asking for password, etc.]`,
        whenToUse: 'Regularly, as new scams emerge. Great after seeing a real scam together',
        adaptationTips: [
            'Ages 8-12: Focus on "nothing is free" concept with fun examples',
            'Ages 13+: Show real examples from their apps (Discord, Roblox, gaming)',
            'Always practice spotting red flags together',
            'Emphasize: "Tell me, don\'t click"',
            'Praise them for reporting suspicious stuff',
            'Remind them it\'s not their fault if they almost fall for one'
        ]
    },
    {
        id: 4,
        articleId: 3,
        title: 'Grooming Safety Talk - The Early Conversation',
        description: 'Foundation conversation about online stranger danger (Start early!)',
        script: `Parent: "I want to talk about something important. Sometimes adults online try to trick kids. Not because the kids did anything wrong, but because the adult is being creepy."

Parent: "Here's what you need to know: Adults who want to be YOUR friend online are being weird. Real friends your age are at school or in your neighborhood."

Parent: "If an adult online asks where you live, what school you go to, or wants your picture. That's a big red flag. Tell me right away."

Parent: "They might seem nice at first and even send you gifts or money. That's part of the trick. They're trying to win your trust so they can ask for something bad later."

Parent: "Your job is simple: Tell me about new online friends. Tell me if anyone asks personal questions. Tell me if anyone asks you to keep secrets from me. I promise I won't be mad. I just want to keep you safe."

Child: [you listen, reassure]

Parent: "If anything ever makes you uncomfortable, even if you're not sure why, tell me. We'll figure it out together."`,
        whenToUse: 'Start this conversation EARLY (ages 6-8), then revisit regularly',
        adaptationTips: [
            'Ages 6-10: Keep it simple. "Adults who want to be YOUR friend online = red flag"',
            'Ages 11-13: Discuss how predators build trust slowly over time',
            'Ages 14+: Discuss the reality of catfishing, sextortion, and manipulation tactics',
            'Normalize reporting suspicious behavior',
            'Emphasize: "It\'s not your fault"',
            'Review their online friends periodically',
            'Don\'t shame them if they\'ve already been contacted'
        ]
    },
    {
        id: 5,
        articleId: 3,
        title: 'Grooming Safety Talk - Red Flags Check-In',
        description: 'Regular conversation to check for warning signs',
        script: `Parent: "I want to check in with you about your online friends. Can you tell me who you\'re talking to online these days?"

Child: [tells you]

Parent: "Cool. Do any of them ask you personal questions? Like where you live, what school you go to, or want pictures of you?"

Child: [responds]

Parent: "Good question for you: Has anyone online ever said things like 'your parents wouldn\'t understand' or 'let\'s keep this between us'?"

Child: [responds]

Parent: "Those are warning signs. Adults trying to do something wrong will try to isolate you from your family. They'll be extra nice, extra understanding, extra interested in what you\'re doing."

Parent: "If that ever happens, I need you to tell me immediately. And I want you to know: if it already has happened, you did NOTHING wrong. The adult is 100% at fault. You're smart to tell me."`,
        whenToUse: 'Have this conversation every few months, especially with younger teens',
        adaptationTips: [
            'Make it casual, not scary',
            'Ask open-ended questions (not yes/no)',
            'Listen more than you talk',
            'Take it seriously if they mention something odd',
            'Don\'t overreact; stay calm so they keep talking to you',
            'Know the reporting procedures for their platforms',
            'Consult CyberTipline (cybertipline.org) if needed'
        ]
    },
    {
        id: 6,
        articleId: 4,
        title: 'Online Respect Talk',
        description: 'Foundation conversation about treating people with respect online',
        script: `Parent: "Let's talk about how we treat people online. Is it different from how you treat people in person?"

Child: [responds]

Parent: "I've noticed that people are sometimes meaner online. Maybe it's because they're behind a screen, or they think no one will know it was them. But here's the truth: Your words matter online just as much as they do in person."

Parent: "Before you post or comment, ask yourself: Would I say this to their face? Is it kind? Is it necessary?"

Parent: "If you see someone being mean to someone else, you have choices: (1) Don't join in. (2) Tell the person 'that's not cool.' (3) Support the person being attacked privately with a kind message."

Parent: "You're not responsible for fixing everything, but you ARE responsible for not making things worse."

Parent: "If someone is mean to you, remember: It says more about them than about you. You can block, report, and move on."`,
        whenToUse: 'Regularly, as they navigate social media. Model good behavior yourself',
        adaptationTips: [
            'Discuss real examples from their own social media',
            'Talk about why people might be mean (insecurity, bad day, trying to be funny)',
            'Praise them for being kind online',
            'Help them understand that their comments have impact',
            'Model good online behavior yourself; they\'re watching',
            'Check in periodically about how people are treating them'
        ]
    },
    {
        id: 7,
        articleId: 5,
        title: 'Cyberbullying Response Talk',
        description: 'Immediate conversation if they\'re experiencing cyberbullying',
        script: `Parent: "I heard that some kids have been mean to you online. I'm sorry that happened. That's not OK."

Parent: "First, I want you to know this is not your fault. The problem is with them, not with you."

Parent: "Here's what we're going to do: (1) You're going to take a break from that app for a few days. (2) We're blocking those accounts. (3) We're reporting them to the platform. (4) You're going to talk to [counselor/trusted adult] about how you're feeling."

Parent: "You don't deserve to feel scared or hurt online. And we're going to make sure this stops."

Parent: "If it keeps happening, we might need to tell the school. That's not tattling; that's getting help."

Parent: "In the meantime, lean on your real friends. Do things that make you feel good. And keep talking to me about how you're doing."

Parent: "You're stronger than you think. We're going to get through this together."`,
        whenToUse: 'Immediately after learning about cyberbullying',
        adaptationTips: [
            'Listen without minimizing their feelings',
            'Don\'t say "just ignore it" or "don\'t look at it"',
            'Take concrete action (blocking, reporting)',
            'Involve school if bullies attend the same school',
            'Get professional support (counselor) if they\'re struggling',
            'Follow up regularly to check on them',
            'Celebrate when things improve'
        ]
    },
    {
        id: 8,
        articleId: 7,
        title: 'Standing Up Online Talk',
        description: 'Conversation about empathy, pile-ons, and being kind when no one is watching',
        script: `Parent: "I want to talk about something I've been noticing. How do you think it feels when someone posts something and then gets a bunch of mean comments?"

Child: [responds]

Parent: "Yeah, it's rough. And here's the thing: Sometimes people aren't mean on purpose. They see 100 other people commenting mean things, so they think it's OK to add their comment too. That's called a pile-on."

Parent: "But just because everyone else is doing it doesn't make it right. You're still adding to someone's hurt. Does that make sense?"

Child: [responds]

Parent: "So here's what I want you to think about: Before you comment, ask yourself: 'Would I say this to their face? Is this kind?' If the answer is no, don't post it."

Parent: "Now, here's the other side: If you see someone getting piled on and you want to be kind, you have power. A single message saying 'I'm sorry people are being mean' can mean SO much to someone who's hurting."

Parent: "And if YOU say something mean and then realize it later, you can fix it. Delete the comment, or DM them and apologize. People respect that."

Parent: "Kindness online doesn't make you uncool. It makes you the person people actually trust."`,
        whenToUse: 'After they\'ve seen online pile-ons or bullying. Also great as a regular values check-in',
        adaptationTips: [
            'Use real examples from their social media (without shaming them)',
            'Discuss why people pile-on (trying to be funny, fitting in, not thinking)',
            'Practice: "What would you say in this situation?"',
            'Praise them when they show kindness online',
            'Normalize apologizing and fixing mistakes',
            'Discuss the difference between having an opinion and being mean'
        ]
    },
    {
        id: 9,
        articleId: 8,
        title: 'Digital Permanence Talk',
        description: 'Foundation conversation about digital footprints, screenshots, and thinking before posting',
        script: `Parent: "Can I ask you something? When you post something online and then delete it, do you think it's really gone?"

Child: [responds (probably not sure)]

Parent: "Right. It's not. Someone might have screenshotted it. Or the platform saved it in their servers. Once something's online, it's there forever (even if you delete it)."

Parent: "This matters because someday, colleges and employers will Google you. They might see old posts, pictures, comments (things you posted years ago and forgot about)."

Parent: "So here's what I want you to think about: Is this something I'd want my future boss to see? Is this something I'll still be OK with in 5 years? If the answer is no, don't post it."

Parent: "One more thing: Never post pictures of your friends without asking. They might not want their face online, and it's not your choice to make for them."

Parent: "If you ever post something and then realize 'oh no, that was a bad idea,' here's what we do: (1) Delete it as fast as possible. (2) Tell me about it. (3) Learn from it. We all make mistakes."

Parent: "The key is thinking BEFORE you post, not panicking AFTER."`,
        whenToUse: 'Regularly as they start social media. Great before they create any account',
        adaptationTips: [
            'Ages 9-12: Focus on "once online, forever" concept with concrete examples',
            'Ages 13+: Discuss real scenarios (job interviews, college apps, future relationships)',
            'Show them how to Google themselves',
            'Discuss privacy settings and what "private" really means',
            'Talk about screenshot culture: assume nothing is truly temporary',
            'Emphasize that mistakes can be fixed, but faster is better',
            'Model good digital footprinting yourself'
        ]
    }
];
