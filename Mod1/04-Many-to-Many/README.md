# Many to Many Relationships

# Problems with Many-To-Many relationships
 - One model does NOT belong to another
 - So whos' job is it store the relationship?
 - And how would we even store this information in a database?

# Solution
 - Another class or table!

# Pinterest
We're going to be exploring yet another social media application! The minimum version of Pinterest is that a user has the ability to curate "Pins" by saving them. There are thousands of Pins and thousands of Users. A user can save many pins, and the same pin can be saved by many users! We describe this specific relationship between users and pins as a Many-to-Many relationship, or a Has-Many-Through relationship

## The world so far
* Create a User class. The class should have these methods:
  * `User#initialize` which takes a username and an age
  * `User#username` returns the username
  * `User#age` returns the age
  * `User.all` returns all users

* Create a Pin class. The class should have these methods:
  * `Pin#initialize` which takes a title and a description
  * `Pin#title`returns the title
  * `Pin#description` returns the description
  * `Pin.all` returns all the users 

## Deliverables:
* Create a Save class which will act as the join table for User and Pin 
  * `Favorite#initialize` which takes a user and a favorite 
  * `Favorite#user`
  * `Favorite#pin`
  * `Favorite.all`

### Building out meaningful relationships:
* `User#pins` returns a list of pins favorited by the user
* `Pin#users` return a list of users that favorited this pin
* `User#favorite_pin` A user should be able to favorite a pin and that pin should be added to the user's list of pins. This methods should take in a pin instance as an argument 

### Stretch features
* `User#number_of_favorited_pins` returns the total number of pins that user like favorited
* `Pin#average_user_age` returns the average age of all users that saved this pin 

