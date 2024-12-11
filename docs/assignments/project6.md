---
title: Project Phase 6 - User Testing & Final Release
layout: doc
---

# Project Phase 6 - User Testing & Final Release

## Important Links

### Frontend Code Repository

https://github.com/aschueppert/ReCycle

### Deployed Service on Vercel

https://re-cycle-pi.vercel.app/

https://recycle-gt26p9xbd-amelia-schuepperts-projects.vercel.app/

## User Test Reports

### User 1 (Anonymous)

The participant navigated the item classification task seamlessly. They granted camera access, which correctly classified the item, and then allowed location access to press the nearest recyclable bin. The flow was largely intuitive, demonstrating that the interface effectively guided the participant through the classification process. However, confusion arose when the participants encountered map navigation, as they were unsure which pin represented the origin and which represented the destination. “I was confused because sometimes when I refreshed the map page, my location would change.” The user thought that their location was changing when it was their destination that was changing. This suggests a need for clearer labeling or visual differentiation of pins. Despite this, the participant completed the task successfully, which highlights the usability of the primary classification and location flow.

The participant located the friend's tab and performed a search to add a friend. When I clicked on the add friend button, nothing changed on the website, so I wasn’t sure if my friend request went through.” This lack of visual response created uncertainty about the task’s outcome, breaking the interaction flow. Additionally, while they easily found themselves on the leaderboard, the user suggested that highlighting their username would improve usability. This feedback points to an opportunity to provide more visual feedback and acknowledgment of user actions to enhance clarity and confidence in task completion.

The participant performed the bin-adding task with ease. They navigated to the map, pressed “add a bin,” used their current location, and successfully added a recycling bin. Each step in the process felt intuitive and required no external guidance. This smooth interaction reinforces the design's strength in guiding users through the task and suggests no immediate changes are necessary.

Exploring the garden for cosmetics was mostly intuitive. The participant clicked “buy more plants” and experienced a bug where the button only worked if they pressed the text, not the surrounding button area. Once the plant was purchased, they moved and interacted with it effortlessly. This observation underscores the need to fix the button’s hitbox while reaffirming that the broader functionality is user-friendly and aligns with participant expectations.

Overall, the user study revealed that while most tasks were intuitive and well-designed, minor usability issues—such as unclear map pin labeling, lack of feedback for actions, and a button hitbox bug—present opportunities for improvement.

### User 2 (Anonymous)

The user initially struggled with classifying items, unsure what to do with the camera. It eventually required me to step in and provide clarification. They missed several labels due to the load time of the API. Once they finally succeeded in classifying an item, they suggested adding clear instructions to explain both how to use the tool and the meaning of the labels. Despite these challenges, once they figured out how to use the camera they found the feature engaging and used it repeatedly with various objects.

The user described the map feature as intuitive but emphasized the need for directions. They pointed out that “you can’t expect the person using the app to be smart.” The user expected that when adding a bit the app would autofill the latitude and longitude values based on a map click. When it did not, they described the process of manually inputting coordinates as tedious compared to the ease of using the current location. Furthermore, it was unclear to them whether a bin was successfully added to the map because they missed the confirmation alert.

For the friend page, the user clicked on sending the friend request several times expecting a visual or textual indication that the request was sent. They found the leaderboard intuitive and quickly realized that adding bins and classifying items would earn them points, but they again suggested adding an explanation of that fact. They also suggested renaming the “social” tab to “leaderboard” for clarity. 

The user remarked that they did not really think the garden was necessary but thought it was fun to use. They were a bit confused about the relationship between seeds and points and repeatedly navigated between the garden and leaderboard pages to determine if purchasing seeds affected their ranking.

### User 3 (Pris)

I conducted a user test of the recycling app with Pris, a PhD student in Chemical Engineering at Northwestern University. Pris is environmentally conscious and regularly uses apps for fitness tracking, but this was her first time engaging with a recycling-focused application.

#### Classification Interface

Pris’ first task was to classify an item. The interface felt immediately intuitive—she simply picked up a plastic bottle, held it in front of the camera, and clicked "classify." She appreciated the simplicity of the process, which closely resembled taking a picture with a camera app. However, she noted that the app took a relatively long time to display the result (“Recycle”). The machine learning API’s longer runtime, compared to other app functions, might discourage frequent use. Implementing faster models could improve user engagement.

#### Bin Feature

Pris found the Bin feature clear and easy to navigate. She quickly located her nearest bins and successfully added new ones, demonstrating the strong learnability of the map interface. However, she pointed out the lack of a feature to remove added bins, expressing concern about accidentally marking the wrong location and being unable to correct it. Adding an option to remove bins would address this issue. Additionally, she found the process of adding a bin by entering latitude and longitude coordinates tedious. Allowing users to tap directly on the map to mark bin locations would likely be more user-friendly.

#### Social Tab

Pris enjoyed the Social tab’s leaderboard and activity feeds, describing them as visually appealing and easy to navigate. However, she encountered two usability challenges. First, when tasked with finding the leaderboard, she experienced a moment of confusion while browsing the tabs before discovering it under the Social section. She felt that the heading “Social” was slightly misleading, as it is typically associated with friending features in other apps. Renaming this section to better reflect its contents could improve navigation clarity.

Second, Pris had to scroll significantly to find her standing on the global leaderboard. She observed that this process could become overwhelming as the user base grows. To address scalability, adopting a leaderboard design similar to those in video games—displaying top performers along with users near the participant’s rank—would make the feature more manageable.

#### Garden Feature

Pris described the Garden feature as neat and straightforward, quickly navigating to the plant's page to purchase flowers. She noted, however, that she had accumulated dozens of experience points without understanding how they were earned. Including instructions on how experience points are awarded (e.g., classifying items, using the Bin feature) would improve clarity for users.

Because Pris had so many points, she purchased multiple plants in succession. However, the app currently redirects users to their Garden after each purchase to adjust the plant’s location, which became tedious as she repeatedly clicked back and forth. Introducing a shopping cart feature for bulk purchases could streamline this process.

Pris also questioned the motivational value of the Garden feature, citing its lack of interactivity and tangible rewards. She suggested adding features like watering plants or tying achievements (e.g., adding five bins) to unlocking rare or unique plants. These enhancements could foster a greater sense of accomplishment and encourage continued engagement.

#### Visual Design

Pris appreciated the app’s green-and-white color scheme, noting that it aligned well with its environmental theme. She found the buttons clear, readable, and visually appealing, especially with their highlighting feature. However, she observed that the transparency of the plants caused them to blend into the green background, making them less visually distinct. Adjusting the background color or the plant design could improve the visual appeal of the Garden.

#### Overall Experience

Pris described the app as generally user-friendly but identified several areas for improvement to enhance usability and engagement. Her feedback highlighted opportunities to refine navigation, reduce friction in key workflows, and increase the app’s motivational features.

## Design Flaws/Opportunities

### 1. Confusion with Map Pins in Classification Task - Physical, Minor

#### What

The participant struggled to distinguish between the origin and destination pins on the map, leading to momentary confusion during the task.

#### Why

This issue likely arises from insufficient visual differentiation or a lack of labeling for the pins.

#### Solution

Use distinct colors or shapes for the origin and destination pins, and include tooltips or labels (e.g., "Your Location" and "Recycling Bin") to clarify their roles. Additionally, provide a brief onboarding tutorial or legend that explains the map elements to further reduce confusion.

### Inability to Remove Bin Markers - Physical, Critical

#### What

Users cannot remove a bin after adding it.

#### Why

This limitation prevents users from correcting mistakes, leading to inaccurate information and cluttered maps.

#### Solution

Allow users to access and manage their marked bins, including the ability to remove or edit them as needed. This could be implemented through a simple interface where users view their added bins and make adjustments.

### Lack of Instructions for App Flow - Linguistic, Moderate

#### What

Users did not understand how to initially classify an item or use the map. They were also confused about how the experience point system worked or how it related to the Garden feature.

#### Why

The app does not provide instructions or explanations about these elements, leaving users unsure of their purpose or value.

#### Solution

Include a clear and accessible help section or onboarding flow that explains how experience points are earned (e.g., classifying items, adding bins) and how they can be used in the Garden feature. Visual cues, such as progress bars or tooltips, could also provide ongoing guidance.

### Shopping Cart Feature for Plants - Conceptual, Minor

#### What

The app forces a redirect to the Garden after purchasing a single plant, which becomes tedious when buying multiple plants.

#### Why

The current workflow does not account for bulk purchases, requiring users to repeatedly navigate to the store.

#### Solution

Implement a shopping cart feature that allows users to select multiple plants and quantities before checking out. After finalizing their purchases, users could then be redirected to the Garden to place their items, accommodating both single and bulk buyers.

### Enhancing Plant Interactivity in the Garden - Conceptual, Moderate

#### What

The Garden feature lacks interactivity, limiting its user engagement ability.

#### Why

Without interactive elements or a sense of progression, the Garden feels static and less rewarding.

#### Solution

Introduce features such as watering plants, watching them grow over time, and unlocking unique plants through specific achievements (e.g., adding five bins, classifying 10 items). Plant growth can be tied to recycling achievements to further encourage proper app usage. These additions would create a greater sense of accomplishment and encourage long-term user engagement.

## Design Revisions

### Removing Daily Streaks

After evaluating the integration of daily streaks, we determined that they did not align well with our app's other motivational features. Streaks are typically effective for habit-forming apps but felt redundant given our robust scoring, leaderboards, and cosmetic rewards systems, which already drive user engagement and reinforce recycling habits. By focusing on these alternative motivational mechanisms, we avoid unnecessary overlap and ensure a streamlined user experience.

### Not Implementing Clubs

While clubs were initially considered as a way to enhance social competition, they introduced unnecessary complexity that could overshadow the simplicity and effectiveness of the "friends" feature. Competing directly with friends creates a more personal and relatable dynamic, which we believe better aligns with users' motivations. By narrowing the scope to friends, we maintain the competitive spirit without overcomplicating social interactions within the app.


### Not Implementing Badges

Badges were considered as a potential reward system but felt redundant alongside the garden feature, which already provides a meaningful and visually engaging way to track progress. Adding badges could create clutter and dilute the impact of our primary reward system. By focusing solely on the garden feature, we ensure a cohesive and satisfying user experience while maintaining a strong incentive for recycling.

### Points Do Not Reset

The concept of resetting points weekly was intended to create a recurring competition. However, we found that this mechanic could disrupt the sense of cumulative achievement and potentially confuse users. Maintaining a persistent points system allows users to focus on long-term progress and feel a stronger sense of accomplishment. This approach also better aligns with the overall design of the leaderboard, ensuring a smoother integration with the app's competitive aspects.

### No Notifications

Our initial concept of the app included a feature to notify users to remind them to use the app if they had not used it for some time. We removed this feature for two reasons. The first reason is that we did not think this feature ended up being necessary. The cumulative nature of the points system, combined with the number of features we had already implemented, already provides ample motivation to continue using the app. Moreover, we felt we did not have sufficient time to determine how best to deliver these notifications in a reactive framework.
