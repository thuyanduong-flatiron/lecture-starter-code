class Author
  attr_accessor :name, :id

  def initialize(name, id=nil)
    @name = name
    @id = id
  end

  def self.create(name)
    author = Author.new(name)
    create_author_sql = <<-SQL
      INSERT INTO authors (name) VALUES (?)
    SQL
    DB[:conn].execute(create_author_sql, name)
    new_id = DB[:conn].execute("SELECT last_insert_rowid()")[0][0]
    author.id = new_id
    author
  end

  def self.all
    get_all_sql = <<-SQL
        SELECT * FROM authors
    SQL
    db_authors_array = DB[:conn].execute(get_all_sql)
    db_authors_array.map{ |row|
      self.make_instance_from_row(row)
    }
  end

  def self.make_instance_from_row(row)
    Author.new(row[1], row[0])
  end

  def self.find(id)
    find_author_sql = <<-SQL
      SELECT * FROM authors WHERE id = ?
    SQL
    row = DB[:conn].execute(find_author_sql, id)[0]
    self.make_instance_from_row(row)
  end

  def save
    update_sql = <<-SQL
      UPDATE authors SET name = ? WHERE id = ?
    SQL
    DB[:conn].execute(update_sql, self.name, self.id)
    self
  end

  def delete
    delete_sql = <<-SQL
      DELETE FROM authors WHERE id = ?
    SQL
    DB[:conn].execute(delete_sql, self.id)
  end
end
