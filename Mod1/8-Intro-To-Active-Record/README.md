# Intro to Active Record

### Review on ORMs

### Active Record Set Up (and how that's different)
- new gems in your `Gemfile`
- `Rakefile` has 1 task, but if we utilize our new gems...
  - We get access to all these new tasks we can see with `rake -T`
- `environment.rb` is a little different too

### Migration Files and DB Migrations
- Migration files are used to track our database changes over time
  - Tracks the architectural (schema) changes from creation to present snapshot
- With ActiveRecord, to create a migration file
  `rake db:create_migration NAME=create_authors_table`
- What's the timestamp in the file name?
- Migrations are "down" or "up" and have a def change method
  - See ActiveRecord::Migration docs
- `db:migrate:status` to see the migration status
- `rake db:migrate` to run the migration
- Check your `schema.rb` to see the current snapshot of your database
- `rake db:rollback` to undo the last migration
- Spelling matters :/

### ActiveRecord::Base
- Let's clear out our Author class
  - Now nothing works
- Let's Inherit from ActiveRecord::Base
  - Everything works again! But how?
    - Review inheritance
  - you can have both regular instance/class methods with ActiveRecord methods
- Again, spelling and pluralization matters :/

### Seed File/Data
- `rake db:seed` and source code
- To set up your project
- Create migration files to make your DB
    `rake db:create_migration NAME=create_authors_table`
- `rake db:migrate` to make your DB and its tables
- `rake db:seed` to add in some starter data
- Now you're ready to go!
