class User
  attr_accessor :username, :id

  def initialize(username, id=nil)
    @username = username
    @id = id
  end

  def self.welcome
    puts "Welcome to Twitter"
  end

  def self.create(name)
    user = User.new(name)
    create_user_sql = <<-SQL
      INSERT INTO user (username) VALUES (?)
    SQL
    DB[:conn].execute(create_user_sql, name)
    new_id = DB[:conn].execute("SELECT last_insert_rowid()")[0][0]
    user.id = new_id
    user
  end

  def self.all
    get_all_sql = <<-SQL
      SELECT * FROM users
    SQL
    db_users_array = DB[:conn].execute(get_all_sql)
    db_users_array.map{ |row|
      self.make_instance_from_row(row)
    }
  end

  def self.make_instance_from_row(row)
    User.new(row[1], row[0])
  end

end
