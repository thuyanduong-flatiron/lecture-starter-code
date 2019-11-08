require 'bundler/setup'
Bundler.require
require 'require_all'
require_all './lib'

# setting up the database connection (old way)
DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

# setting up the database connection (new way)
# ActiveRecord::Base.establish_connection(
#   adapter: 'sqlite3',
#   database: "db/user.db"
# )
#
# ActiveRecord::Base.logger = Logger.new(STDOUT)
