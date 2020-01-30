require "pry"

class Pin
  attr_accessor :title, :description 
  @@all = []

  def initialize(title, description)
    @title = title 
    @description = description
    @@all << self
  end

  def self.all
    @@all
  end
end 