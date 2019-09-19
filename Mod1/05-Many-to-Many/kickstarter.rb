require "pry"

class Backer
  attr_reader :name, :backed_projects

  def initialize(name)
    @name = name
    @backed_projects = []
  end

  def back_project(project)
    backed_projects << project
    project.backers << self
  end

end

class Project
  attr_reader :title, :backers

  def initialize(title)
    @title = title
    @backers = []
  end

  def add_backer(backer)
    backers << backer
    backer.backed_projects << self
  end

end

ann = Backer.new("Ann")
paul = Backer.new("Paul")
karaoke = Project.new("Karaoke Machine")
iron = Project.new("Ironing Board")
snacks = Project.new("Snack Bar")

paul.back_project(karaoke)
ann.back_project(snacks)
snacks.add_backer(paul)

binding.pry
