## Object Oriented Programming

### Everything in Ruby is an Object? Why?
- grouping 'like' data together
- 'like' things should have the same behavior

#### What is the data type of x?
x = 3
puts x.class

#### What is length and where does it come from?
y = "flatiron"
puts y.class
puts y.length

#### See all methods for some data
puts y.methods

#### Objects complain when they don't know how to execute methods
y.respond_to_undefined_method

#### Everything is probably just a method or syntactic sugar/vinegar
y[1] is just shorthand for y.[](1)

```rb
class String

  def length
    # return length of string
  end

  def [](index)
    # get char at index and return that char
  end

end
```

- build a Cat hash
- `ella = {name: "Ella", fluffiness: 10}`
- This is fine but `ella` is just a hash.  We can't extend this to have any behavior we might want a cat to do.  

### Important Terminology
 - Object vs Class vs Instance

Make a basic Cat class.
- `Cat.new`
```rb
class Cat
    def meow
        puts "meow..."
    end
end
```

### Classes should have an initialize method
 - Gets called when you type .new()
```rb
class Cat
    def initialize(name)
      @name = name
    end
end
```
### Instance Variable
- What is the "@"?
    - Accessible throughout the class
    - Scope (local variables vs instance variables)

- Add a getter method (doesn't have to have same variable name)
```rb
    def color
        @color
    end
```
- Define getter/setter for color and fluffiness
```rb
    def color=(new_color)
        @color = new_color
    end
```
- custom getter/setters:
```rb
    def fluffiness
        if @fluffiness > 5
            return "Very fluffy"
        else
            return "Not so fluffy"
        end
    end

    def fluffiness=(fluffiness)
      if @fluffiness > 10
        @fluffiness = 10
      elsif < 0
        @fluffiness = 0
      else
        @fluffiness = fluffiness
      end
    end
```

- attr_accessor :color
- attr_reader :name
- attr_writer :fluffiness

- default argument for `number_of_legs`

#### self
```rb
    def talking_cat
        "My name is #{self.name}"
    end
```
- `@name vs self.name` -- often the same in practice, but the former accesses the variable
directly while self.name gets the accessor method
```rb
def talking_cat
        "My name is #{self.name} and I have a fluffiness score of #{@fluffiness}.  I am #{self.fluffiness}"
end
```

#### Class Methods
```rb
self.say_class_name
  puts "I am the Cat class"
end
```

#### Class variable @@all
  - it seemed to work to make this an instance method first, and then change it to a class method to demonstrate the difference
