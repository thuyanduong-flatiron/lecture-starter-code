# ActiveRecord Associations

## Review
- Gemfile
- Rakefile
- config/environment.rb
- app/models

#### Domain
- One patient can have multiple doctors
- One doctor can have multiple patients
- A doctor belongs to a single hospital
- One hospital can have many doctors

## Migrations
- Addition to the database
- "Version Control"
- Set of changes to the shape of our database

## ActiveRecord Modeling Conventions
- File called `doctor.rb` defines a class `Doctor`
- Table is called `doctors`
- Migration often called `create_doctors`
  - File name and class name must match (words, not title case)
`belongs_to :hospital`
`has_many :hospitals`

### Steps
1. Create migration
2. Run migration
3. Create the model
  * Remember, models MUST be singular, tables plural
4. Build custom methods
