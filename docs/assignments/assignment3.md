---
title: Assignment 3 - Convergent Design
layout: doc
---

# Assignment 3 - Convergent Design

## Pitch

**Rely** is revolutionary social media platform that emphasizes reliability and misinformation prevention, allowing anyone to easily identify misinformation or fake content even when it is designed to look legitamite. This allows people who not tech-savvy enough to identify signs of misinformation to be able to easily spot when a piece of content is unreliable or fake. 

Every post and comment on Rely has a reliability score that allows users to easily identify if a piece of content is fake or not. Rely takes into account the sentiment of the reactions and comments from other users, the historial reliability of the user who posted the content, third-party fact-checking, and other factors in give a holistic and accurate reliability score for each post and comment.

Every user on Rely also has a reliability rating that is displayed on their profile, posts, and comments, allowing other users to easy spot historically untrustworthy sources. A user's reliability rating is calculated based on the reliability of their posts and comments, the reliability of users who interact with their content, historical content offenses, and other factors.

Rely's recommendation algorithm and personalized feeds also prioritize the reliability of content, ensure that misinformation and fake content is distributed less on the platform to prevent them from going viral, while also promoting and incentivizing the consistent creation of reliable content. Rely will foster a safe and trustworthy environment for users to share and consume content while also having the same social media experience they are used to, exploring entertaining content and connecting with others.

## Functional Design

### Concept 1: User

*\*Inspired by example given in The Essense of Software: Concept composition and sync.\**

#### Purpose

Authenticates users.

#### Operational Principle

After a user registers with a username and password, they can authenticate as that user with the correct corresponding username and password pair.

#### State

registered: **set** User

username: registered -> **one** String

password: registered -> **one** String

#### Actions

register (n: String, p: String, **out** u: User)
```
u not in registered
registered += u
u.username := n
u.password := p
```

authenticate (n: String, p: String, **out** u: User)
```
for user in registered:
    if user.username == n and user.password == p:
        u := user
```

### Concept 2: Session [Account]

^ NOT a intrinsic dependency!!!

("Account" is just a placeholder data type, where "Account" here does not necessarily need to be the aforementioned User concept. The Session concept does not rely on any specfic properties of "Account" and thus has no intrinsic dependencies on it.)

*\*Inspired by example given in The Essense of Software: Concept composition and sync.\**

#### Purpose

Allows accounts to stay authenticated for an extended period of time.

#### Operational Principle

After a session strts and before it ends, the getAccount action returns the currently authenticated account that was identified at the start of the session.

#### State

active: **set** Session

account: active -> **one** Account

#### Actions

start (a: Account, **out** s: Session)
```
s not in active
active += s
s.account := a
```

getAccount (s: Session, **out** a: Account)
```
s in active
a := s.Account
```

end (s: Session)
```
active -= s
```

### Concept 3: Post [Account, Content]

^ NOT intrinsic dependencies!!!

(Again, "Account" and "Content" are just placeholder data types, where their properties are not relevant to the Post concept.)

#### Purpose

Allows accounts to share content. 

#### Operational Principle

A post containing content can be created associated with an account. A post can be deleted after it is created. getAccountPosts returns all created-but-not-deleted-yet posts associated with an account.

#### State

posts: **set** Post

account: posts -> **one** Account

content: posts -> **one** Content

#### Actions

createPost (a: Account, c: Content, i: int, **out** p: Post)
```
p not in posts
posts += p
p.account := a
p.content := c
```

getAccountPosts (a: Account, **out** ps: set Post)
```
for post in posts:
    if post.account == a:
        ps += post
```

deletePost (p: Post)
```
p in posts
posts -= p
```

### Concept 4: Comment [Account, Content, Item]

Once again, "Account", "Content", and "Item" are just placeholder data types that are not intrinsic dependencies of the Comment concept. From the implementation perspective, the "Item" data type prevents intrinsic dependencies while allowing comments to be linked to posts or other comments (or other stuff potentially).

#### Purpose

Allows users to comment on items.

#### Operational Principle

A comment containing content can be created associated with an account and referencing an item. A comment can be deleted after it is created. getItemComments returns all created-but-not-deleted-yet comments that reference an item. getAccountComments returns all created-but-not-deleted-yet comments associated with an account.

#### State

comments: **set** Comment

account: comments -> **one** Account

content: comments -> **one** Content

item: comments -> **one** Item

#### Actions

createComment (a: Account, c: Content, i: Item, **out** cm: Comment)
```
cm not in comments
comments += cm
cm.account := a
cm.content := c
cm.item := i
```

getItemComments (i: Item, **out** cms: set Comment)
```
for comment in comments:
    if comment.item == i:
        cms += comment
```

getAccountComments (a: Account, **out** cms: set Comment)
```
for comment in comments:
    if comment.account == a:
        cms += comment
```

deleteComment (cm: Comment)
```
cm in comments
comments -= cm
```

### Concept 5: Score [Item]

*While this score is meant to be the reliability score/rating for posts, comments, and users, it is generalized to be a score for any item with no intrinsic dependencies.*

#### Purpose

Calculates a score for an item.

#### Operational Principle

A score can be created for an item with an associated value. A score can be deleted after it is created. Each item can only have one score. The value of the score can be viewed or modified after the score is created and before it is deleted.

#### State

scores: **set** Score
item: scores -> **one** Item
value: scores -> **one** int

#### Actions

createScore (i: Item, v: int, **out** s: Score)
```
score.item != i for score in scores
s not in scores
scores += s
s.item := i
s.value := v
```

getScoreValue (s: Score, **out** v: int)
```
s in scores
v := s.value
```

updateScoreValue (s: Score, v: int)
```
s in scores
s.value := v
```

deleteScore (s: Score)
```
s in scores
scores -= s
```

### Syncronizations

**app** Rely

### Dependency Diagram

## Wireframes

text

## Design Iteration

text

## Design Tradeoffs

### 1. issue name

text

