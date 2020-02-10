# One to Many Relationships

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
  * `#initialize` initializes the user with a username
  * `#username` returns the username 
  * `#tweets` returns an array of Tweet instances
  * `#post_tweet` takes a message, creates a new tweet, and adds it to the user's tweets list

* Create a Tweet class. The class should have these methods:
  * `#initialize` initializes the tweet with a message and the user
  * `#message` returns the message
  * `#user` returns the user instance that created the tweet
  * `.all` returns all the Tweets ever created
  * `#username` returns the username of that tweet's user