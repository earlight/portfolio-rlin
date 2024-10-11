---
title: Assignment 4 (Beta) - Backend Design & Implementation
layout: doc
---

# Assignment 4 (Beta) - Backend Design & Implementation

## Important Links

### Backend Code Repository

https://github.com/earlight/61040-backend

### Deployed Service on Vercel

https://61040-backend-plum.vercel.app/

## App Definition

For refereance, the (outdated) full concept definitions from Assignment 3 can be found here:  
https://earlight.github.io/portfolio-rlin/assignments/assignment3.html#functional-design-concepts

```
app Rely
    include Authenticating
    include Sessioning[Authenticating.User]
    include Posting[Authenticating.User]
    include Commenting[Authenticating.User, Posting.Post], Commenting[Authenticating.User, Commenting.Comment]
    include Score[Posting.Post], Score[Commenting.Comment], Score[Authenticating.User]
    include Reacting[Authenticating.User, Posting.Post], Reacting[Authenticating.User, Commenting.Comment]
    include Following[Authenticating.User]
```

## Abstract Data Models

### Concept 1: Authenticating

#### State

username: User -> **one** String

password: User -> **one** String

### Concept 2: Sessioning [User]

#### State

user: Session -> **one** User

### Concept 3: Posting [User]

#### State

author: Post -> **one** User

content: Post -> **one** Content

### Concept 4: Commenting [User, Parent]

#### State

author: Comment -> **one** User

content: Comment -> **one** Content

parent: Comment -> **one** Parent

### Concept 5: Scoring [Item]

#### State

item: Score -> **one** Item

value: Score -> **one** int

### Concept 6: Reacting [User, Item]

#### State

author: Reaction -> **one** User

item: Reaction -> **one** Item

type: Reaction -> **one** String

### Concept 7: Following [User]

#### State

follower: Follow -> **one** User

followee: Follow -> **one** User

## Data Model Diagram

<img src="./assets/images/A4/data-model-diagram.png" alt="Data Model Diagram" style="width:100%; margin-top: 10px; margin-bottom: 10px;"/>

## Design Reflection

I found that since my Rely app needs to calculate reliability scores for every post/comment/user, certain interesting design decisions had to be made during implementation.

Once important design decision is to not delete comments/nested-comments when their parent is deleted. When the users look at a deteched comment, it would say that the parent was "deleted" but still show and allow interactions with the detached comment. This is because deleting all comments could be abused by users to remove the content of other users. Additionally, the score of the deleted item will also not be deleted and will still be able to be used to calculate a user's reliability score. This prevents users from deleting posts that get negative attention to avoid losing reliability or hiding their bad reputation.

Another design decision I made was to allow each user to only have one reaction to each post/comment. It wouldn't make much sense for someone to be able to "like" and "dislike" the same piece of content (e.g. YouTube like/dislike system and Reddit's update/downvote system). Thus, I implemented checks to prevent duplicate reactions from the same user on a unique post/comment. Now, you can update and delete reactions based on the current session user & specified item rather than the reaction ObjectID.

Another design decision I made was to remove the ability to update posts/comments, since it would be difficult to calculate the score of the updated content. Should we reset the reliability score of a post/comment once it has been updated? Then users can abuse edits to reset their content's score whenever it gets negative attention. Should we keep the old score and score it seperately? Having multiple scores for a post/comment may be unintuitive for users.