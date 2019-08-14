#### SQL Practice
- Write the SQL to create tables for Authors (id, name)
- Write the SQL to create a new author, given the author's name
- Write the SQL to get all Authors
- Write the SQL to find an Author by their id
- Write the SQL to update an Author's name (given their id)
- Write the SQL to delete an Author (given their id)




















# Intro to ORMs (Object Relational Mapping)

## Organizing Big Projects
- Gemfile, `bundle install`, and Gemfile.lock
- `environment.rb` file to set up database connection and other aspects of code environment
- db folder
- Rakefile, `rake -T`, and building our own Rake tasks
  - Have access to everything through require_relative

## Deliverables
- Create SQL tables that correspond to Ruby classes Author
- Build out methods on the Author model to perform all CRUD actions at the database level
- initialize, create, all, find, save, delete






















##### Answers
`CREATE TABLE authors (id INTEGER PRIMARY KEY, name TEXT);`
`INSERT INTO authors (name) VALUES ("Ann");`
`SELECT * FROM authors;`
`SELECT * FROM authors WHERE name = ?;`
`UPDATE authors SET name = ? WHERE id = ?;`
`DELETE FROM authors WHERE name = ?;`

#
