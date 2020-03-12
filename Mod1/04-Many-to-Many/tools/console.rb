require_relative "../app/user.rb"
require_relative "../app/pin.rb"
require_relative "../app/favorite.rb"
require "pry"

ann = User.new("Ann", 30)
paul = User.new("Paul", 34)

pin1 = Pin.new("Cats", "So fluffy, so floofy")
pin2 = Pin.new("Dogs", "Who's a good girl! Who's a good boy!")
pin3 = Pin.new("Coding", "Hello World")

binding.pry
