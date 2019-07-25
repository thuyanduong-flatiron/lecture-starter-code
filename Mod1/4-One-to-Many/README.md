# One to Many Relationships

## Review
- Let's build a school class
- Our school should have @instructors = []
- But what if we want our instructors to be more robust?

#### Let's build Twitter!
 - Or... at least the Minimum Viable Product(MVP) aka Skateboard
 - https://i.pinimg.com/originals/18/11/c7/1811c7266a60cf87b8765de2a4c99edc.jpg

## Objectives

* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Demonstrate single source of truth
* Infer type of method (class or instance) through naming conventions
* Practice passing custom objects as arguments to methods

## Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `#initialize` which takes a message and have a reader method for the message
  * `#message` that returns a string
  * `#user` that returns an instance of the user class
  * `.all` that returns all the Tweets created.
  * `#username` that returns the username of the tweet's user