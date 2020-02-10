Given that we create a table using the SQL command:

`CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT);`


#### How would we....
- Write the SQL to create a new user with a username of 'CoffeeDad'?
- Write the SQL to get all Users?
- Write the SQL to find the User with id of 1?
- Write the SQL to update the the username of the User with id of 1 to be 'CoffeeDude'?
- Write the SQL to delete an User with an id of 1?

























## Let's build Twitter app

## Problem: What happens to all of our data when we restart our app?

# Intro to ORMs (Object Relational Mapping)
 - No coding along, sit back and relax

## Organizing Big Projects
- Gemfile and Gemfile.lock
- environment.rb has some new code
- twitter.db

## Solution...
- We already know OO Programming
 - We already have a User class
 - We can make instances of User
 - And can call instance methods of those instance

- Create methods that will SAVE to our DB table!!!
  - CRUD






















##### Answers
`CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT);`
`INSERT INTO users (username) VALUES ("CoffeeDad");`
`SELECT * FROM users;`
`SELECT * FROM users WHERE id = 1;`
`UPDATE users SET name = 'CoffeeDude' WHERE id = 1;`
`DELETE FROM users WHERE id = 1;`

SELECT LAST_INSERT_ROWID()
