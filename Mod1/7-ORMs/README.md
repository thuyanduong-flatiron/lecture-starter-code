# Intro to ORMS

## Organizing Big Projects
- Gemfile, `bundle install`, and Gemfile.lock
- `environment.rb` file to set up database connection and other aspects of code environment
- db folder
- Rakefile, `rake -T`, and building our own Rake tasks
  - Have access to everything through require_relative

## Deliverables
- Create SQL tables that correspond to Ruby classes Author and Book
- Correctly implement foreign key relationship
- Build out methods on the Author model to perform all CRUD actions at the database level
















#### SQL Practice
- Write the SQL to create tables for Authors (id, name) and Books (id, title, author_id)
- Write the SQL to create a new author, given the author's name
- Write the SQL to create a new book, given the book's title and author's id
- Write the SQL to get all Authors
- Write the SQL to update a Book's title (given it's id)
- Write the SQL to delete a Book (given it's title)
- Write the SQL to get all Books by an author, given the author's name











#
