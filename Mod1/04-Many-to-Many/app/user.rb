require "pry"

class User
  attr_accessor :username, :age
  @@all = []

  def initialize(username, age)
    @username = username 
    @age = age
    @@all << self
  end

  def self.all
    @@all
  end 
end 