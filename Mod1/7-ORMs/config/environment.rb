require 'bundler'
Bundler.require

DB = {
  conn: SQLite3::Database.new('db/library.db')
}

require_relative '../lib/book.rb'
require_relative '../lib/author.rb'
