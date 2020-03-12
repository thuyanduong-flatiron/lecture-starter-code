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
  * `Save#initialize` which takes a User and a Pin 
  * `Save#user`
  * `Save#pin`
  * `Save.all`

### Building out meaningful relationships:
* `User#pins` returns a list of pins saved by the user
* `Pin#users` return a list of users that saved this pin
* `User#save_pin` A user should be able to save a pin and that pin should be added to the user's list of pins. This methods should take in a pin instance as an argument 

### Stretch features
* `User#number_of_saved_pins` returns the total number of pins that user like saved
* `Pin#average_user_age` returns the average age of all users that saved this pin 

