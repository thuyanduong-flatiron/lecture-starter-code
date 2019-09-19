require_relative "../app/models/user.rb"
require_relative "../app/models/tweet.rb"
require "pry"

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")

tweet1 = Tweet.new("i love coffee", coffee_dad)
tweet2 = Tweet.new("drinking coffee", coffee_dad)
tweet3 = Tweet.new("making coffee", coffee_dad)
tweet4 = Tweet.new("Life is meaningless", coffee_dad)
tweet5 = Tweet.new("i like tea", tea_uncle)
tweet6 = Tweet.new("need to buy tea", tea_uncle)
tweet7 = Tweet.new("Life is wonderful", tea_uncle)

binding.pry
0