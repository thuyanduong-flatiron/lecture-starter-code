require_relative '../app/user.rb'
require 'bundler'

Bundler.require

DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}
