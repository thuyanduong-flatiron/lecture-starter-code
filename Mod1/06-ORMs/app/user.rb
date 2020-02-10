class User
	attr_accessor :username, :id
	@@all = []

	def initialize(username, id=nil)
		@username = username
		@id = id
		@@all << self
	end

	def self.all
		@@all
	end
end
