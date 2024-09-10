---
title: Assignment 1 - Social Media Needfinding
layout: doc
---

# Assignment 1 - Social Media Needfinding

## Pre-Interview Plans

### Hunch/Theme

I wanted to explore ways to more effectively combat misinformation on social media, allowing users to easily identify misleading or fake content at a glance, even when the content is designed to look legitimate. 

### Who to Interview

I am aware of how prominent misinformation is on social media platforms, but there are many people using social media that may be much more suspectible to misinformation and the ways they are designed to look legitimate.

I would want to interview people who are not as aware of the prevalance and dangers of misinformation. This could include older generations, people who are not as tech-savvy, or people who are less familiar with the new ways of creating misinformation, such as with AI generated content. By interviewing people who are more likely to be fooled by misinformaiton, I can better identiy potential solutions of making it easier to spot fakse and misleading content on social media.

I would also prefer to interview poeple of varying ages and levels of tech-savviness to get a more diverse perspective on how people handle misinformation and fake content on social media.

**Post-interview Update**
My Interviewees:
- Cliff, 40 years old, works as a line cook, below average tech-savviness for his age (does not spend too much time online).
- Darnell, just turned 30, small business owner of a e-commerce brand, above average tech-savviness (knows how to build a website, etc).

They are in different age groups, work in different industries, and have different tech-savviness levels.

### Conversation Starters Brainstorm

I wouldn't want to dive straight into the topic of misinformation and fake AI generated content, since people would tend to believe that they themselves are capable of spotting fake content (I could also be overestimating my ability to identify fake content). Instead, I would want to start by learning about their general use of social media and getting to know how tech-savvy in order to better approach the main topic.

- How do you spend your time when you are online?
- How do you stay connected with friends and family?
- Can you describe how and why you use social media?
- Walk me though your typical day on the internet or using social media.
- How do you stay up to date with current events and whats going on in the world?

From these questions, I can get a good general understanding of someone's tech-savviness and social media usage habits. If I identify any way they use social media different from me, I can ask them to elaborate more on that to get a better understanding of other perspectives or follow up with a variation of some of the following questions that more closely relate to their previous answers.

- Have you had any experiences with misinformation on social media?
- What are some obvious signs that content on social media is fake or misleading?
- Have you ever seen ways that social media apps attempt to prevent the spread of misinformation?
- You mentioned you use *\<social media platform\>* for *\<insert hobby\>*. How reliable do you think *\<social media platform\>* is for that hobby compared to more traditional ways of learning about it?

## Interview Reports

### Interview #1

My first interview was with Cliff, a 40 year old man that works as a line cook and also loves cooking as a hobby. While he does use YouTube to learn about cooking recipes, Cliff does not spend that much time online and offers the perspective of someone who might not be as tech-savvy as the average MIT student. When talking about where he got his information on current events from, he said "I don't have Cable in the house, I just use YouTube for everything, they have a news section so I just go there and see what happened around here globally, nationally..." This was suprising since Cliff himself claimed that he does not spend a lot of time online, yet he still gets all his news and current events from YouTube. This highlights that slightly older generations who have experienced life before the social media boom can also by very reliant on social media as sources of information. Another notable thing that Cliff mentioned was that he finds a lot of clickbait on YouTube and that he "gets into the comments to see if someone is biased and just pushing one narrative." Cliff also mentioned that dislikes on a video were also a good indicator that the source might not be reliable before YouTube removed the dislike button. Cliff started to talk about how AI generated content nowadays can be quite dangerous, mentioning his experiences with fake AI content that made it all the way to CNN. Some notable takeaways from this interview were how Cliff believes that comments under video and dislikes may be good at indicating misleading content, suggesting that a potentially way to combat misinformation could be some sort of easy to see summary or metric of other people's general consensus on a social media post.

### Interview #2

My second interview was with Darnell, a 30 year old man that owns a small e-commerce brand and also sells catering/food services on the side. Darnell is more tech-savvy than Cliff, being able to build his own website and regularly using several social media platforms like Instagram and Facebook to advertise his business. Darnell mentions that he tends to spend several hours a day on Instagram, especially Instagram reels and short-form content. Like Cliff, Darnell also gets much of his news and current events from social media, stating that "I don't really watch the news often. I mostly use my phone for current events. Twitter is where I get most of my news, I believe a lot of stuff I see on there." Darnell's strong trust in most of the things he sees online suprised me, since I assumed that his above-average tech-savviness would make him more skeptical of online content. Darnell mentioned that he tries to scroll past clickbait and AI generated content, so that his personalized feeds would not contain as much misinformation. Contrasting Cliff's opinion that a dislike button could combat misinformation, Darnell suggested that "if we limit the negativity on social media, we could reduce misinformation and clickbait." This suggests that a simple dislike button on social media platforms such as Twitter or Instagram may not be the best solution to combating misinformation, since it encourages negativity and may cause other side-effects. When Darnell was expressing his experiences with clickbait, he mentioned that "clickbait is very effective at getting a channel's metrics up, but if a channel had enough identity online or if they built a repuation of using clickbait, people would know if someone was a scammer or hateful person." This suggested that if each social media account (YouTube channel, Twitter account, etc) had some sort of reputation/reliability metric that was easily visible, it may allow people to more easily identify misinformation or fake content.

## Design Opportunities

- **Reliability metric for social media posts**
  - A metric or score from 0-100 that is displayed on each social media post that indicates how reliable the post is based on the general consensus of comments under the post.
  - Cliff mentioned that dislikes and comments are a good indicator for a video's reliability, yet Darnell mentioned that dislikes may foster more negativity. One good solution is to have a reliability metric for each post that automatically calculates the reliability of a post based on the comments.
  - This reliability metric could use some sort of NLP model to analyze the comments to see if people are calling out the video for being fake or misleading. The NLP model, if trained properly, would know if negative comments in a post are being hateful or trying to call out misinformation, preventing any toxicity or hateful negativity from affecting the reliability metric. The NLP model would then estimate the reliability and authenticity of a post and display it as an easy to see metric. 
  - There are alot of publically available posts from various social media platforms that can be used to train our model, but the NLP model must be carefully trained to not make incorrect assumptions (for exmaple, when a post is so obviously fake that comments are sarcasically agreeing with it).
  - This feature may also encourages people to leave more constructive comments, since they know that their comments are actually helpful in determining the reliability of a post.

- **Overall reputation metric for social media accounts**
  - Darnell mentioned that some accounts are widely known for being misleading and using clickbait, making it easier to avoid misinformation from them. If there was a relaibility/reputation metric for every social media account, then we could identify generally unreliable accounts even if he haven't heard of them before.
  - Instead of just having a reliability metric for one single post, we could track the overall reliability and reputation of a social media account. For example, if an account tends to have a low reliability metric for all their posts, then the account itself would have an easy to see metric that warns of low reliability.
  - Not only would it be easier to identify accounts that regularly post misleading content, regular users would also think twice about occationally posting something misleading for attention or virality, since it may affect their overall account reputation in the long run.

- **Recommendation algorithms that prioritize post reliability and account reliability**
  - My previous two design opportunities were focused on making it easier to identify misleading content, but we could also make it harder to spread or see misleading content in the first place.
  - Most social media platforms recommend you content based on what you tend to like or watch for the longest, as well as viral posts with the most views and click-rate. However, if we prioritize recommending posts that have a high reliability metric or come from accounts with high reputation/reliabiility, then we could make it harder for misleading content to spread.
  - Of course, views and click-rate are still metrics we would consider when recommending posts, but we are simply giving more weight to reliability and reputation, which decreases the chance of misinformation to become widespread while still allowing posts to go viral and reach larger audiences for the right reasons. This would also lead to less negativity and hateful content being recommended, as Darnell suggested.

Overall, these three design opportunities would work well on their own to combat misinformation on social media, but would also work even better when being implemented together. The reliability metric of a post can be used to calculate the overall reputation and reliability of a social media account. Both the post-reliability metric and the account-reliability metric can be used as data-points in our recommendation engine to prioritize reliable and repuatable content.

## Interview Notes

### Interview #1 - Cliff

Q: Tell me a little about yourself. What do you do for a living? How do you spend your free time?
- Cliff, 40 years old, works as a line cook.
- Spends free time cooking, walk in the beach, go to the gym.

Q: Speaking of cooking, how do you learn new recipes or cooking techniques?
- YouTube, watch video and make small portions
- Reading cookbooks
- Look up plant/vegan dishes

Q: Compare YouTube and recipe books when it comes to learning new recipes. What do you like about each?
- Books are more in depth
- YouTube shows actual product for visual learning

Q: Between YouTube and cookbooks, which has more reliable and accurate recipes?
- Looks at both YT and books to get general vibe, then try cooking it his own way to mimic it

Q: Moving away from that, how do you stay connected with friends and family when you are away from them?
- Text Message, calling them

Q: What about staying connected with the world in general? Current events, news, etc
- Before and after work, I go on YT and check out whats going on: world events or politics, etc

Q: Tell me how you feel about the reliability of these YT news sources
- Feel like its hit or miss
- If something feels off, google it to see if anything feels off
- Influences might not know what theyre talking about

Q: How common do you think people say something misleading or false
- You can tell if someone is biased if theyre only presenting 1 POV
- Pretty common on YT for clickbait
- Usually see poeple in the comments calling out the video, can also google it

Q: So you think comments are a good way to see if a source is accurate?
- Yes, people might leave comments if they think something is off
- Dislikes were also a good indicator, YT removed it thought, but dislikes allow people to see and click off a video right away
- I also think flagging a video is a good way to report it, but currently it takes a while to take a video down
- Maybe if flagging a video enough times could temporarily stop it from being recommended immediately, then unflag if its not actually misleading

Q: How do you think misinformation or fake content on YT has changed recently.
- Nowadays AI can do fake voiceovers
- I saw a Joe Rogan fake AI was used by CNN once and that was a whole ordeal
- Musicians' voices are also being used to create AI covers and it feels like stealing from these artists, I once saw a fake album sang by the Beetles, but it was all AI


### Interview #2 - Darnell

Q: Can you tell me a little about yourself? What do you do for a living? How do you spend your free time?
- Darnell, just turned 30.
- Small business owner of a e-commerce brand and sells catering/food services. 
- Plans on getting a food truck as a next step.

Q: For your e-commerce brand, how do you sell your products and advertise them?
- Builds basic websites for his e-commerce brand, nothing too fancy, just templates
- Uses social media as #1 way to advertise
- Uses mainly Instagram, Facebook, Snapchat, and Twitter/X.

Q: Speaking of the social media you use, how do you feel about the pros and cons of each social media platform?
- Instagram: has pictures which is good for advertising with images
- Instagram reels also are personalized to keep me there longer than I normally would be. 2-3 hrs per day.
- Twitter: mostly for news content, spend 1-2 hrs per day
- Snapchat: mostly for personal life, only a couple minutes per day

Q: Where do you get most of your information and keep up with the world around you?
- Dont really watch the news often. Steams alot, but mostly phone for current events
- Twitter is where I get most of my news, I believe alot of stuff I see on there

Q: You mentioned that you believe the news on Twitter. Is there any situations where you have seen something that was misleading or false?
- Nowadays there is AI content that can be used to make outlandish things
- Some things are obviously not true, but some things that are "misleading" are more like fun conspiracies
- Tend to block out truth on social media alot

Q: Do you think you are good at spotting fake content on social media? What are some obvious signs that content on social media is fake or misleading?
- Most obvious is clickbait, they want to get you to click on it
- I try to stay away from the clickbait and AI generated content, scroll past it
- Twitter/X has alot of fake and AI generated content, hard to avoid and keep you unfocus
- Maybe limit the amount of negativity
- Theres places that suffer that needs more awareness, but theres also mindless negative hateful content that is not needed
- Clickbait is a big issue so find a way to limit clickbait

Q: Why do you think clickbait is such a big issue?
- It allows certain metrics like watchtime or click rate to be higher
- If there was enough identity online to know if a person is a scammer or hateful person, that could stop alot of negative content that is misleading
- Perhaps a way to track an account's reliablity so that people can see at a glance if someone is known for posting misleading content.