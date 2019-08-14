require_relative '../lib/author.rb'
require 'bundler'

Bundler.require

DB = {
  conn: SQLite3::Database.new('db/library.db')
}

