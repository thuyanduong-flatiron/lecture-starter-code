require "pry"

class Doctor
  attr_accessor :name, :specialty
  @@all = []

  def initialize(name, specialty)
    @name = name 
    @specialty = specialty
    @@all << self
  end

  def self.all
    @@all
  end 
end 