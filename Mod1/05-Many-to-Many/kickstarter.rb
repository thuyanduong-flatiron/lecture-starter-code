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

trevor = Backer.new("Trevor")
chine = Backer.new("Chine")
karaoke = Project.new("Karaoke Machine")
iron = Project.new("Iron Board")
snacks = Project.new("Snack Bar")

trevor.back_project(snacks)
chine.back_project(karaoke)
snacks.add_backer(chine)

binding.pry
