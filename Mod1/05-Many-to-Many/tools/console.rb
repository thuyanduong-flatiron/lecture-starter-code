require_relative "../app/user.rb"
require_relative "../app/pin.rb"
require_relative "../app/save.rb"
require "pry"

ann = User.new("Ann", 30)
paul = User.new("Paul", 34)
su = User.new("Su", 32)

pin1 = Pin.new("Low Carb Recipes", "Cook things without bread or rice")
pin2 = Pin.new("Poetry", "One fish, two fish, red fish, blue fish")
pin3 = Pin.new("Painting", "Oooooh, the colors....")

binding.pry
