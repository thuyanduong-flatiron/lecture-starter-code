# Class Inheritance

## Review "Everything Is an Object"
- `puts "hi".methods` in irb
- What is all this stuff and where does it come from?
  - `"hi".class`
  - `"hi".class.ancestors`
- Method Resolution Order (MRO)

## Let's Practice It
- Define Animal class with Dog and Cat inheriting
- The`<` syntax is used for specifying inheritance
    - `class Dog < Animal` means that Dog inherits form Animal
    - Vocab:  *Child class, Parent class, Sub class, Super class, inherits from*
- Give Animal basic methods like `#walk` and `#speak`.  
  - `ella.walk` and `ella.speak` works!
- What happens if we have `#speak` in child classes
  - We can _override_ methods

- Refactor to show chain inheritance:  `Dog/Cat < Mammal < Animal`.
    - `ella.class`
    - `ella.class.superclass`
    - `ella.class.ancestors`
    - `is_a?` vs `instance_of?`

## super(), When you want to call the parent from the child
- `super()` is common used in the initialize method
- We can also call `super()` in any instance method


## Modules  
- Build `Fish < Animal` class  
- Let's build a `#can_swim?` for the `Fish` class.  
  - But this is problematic--some animals can swim, but doesn't really fit on `Mammal` class

```
module Swimmable
    def swim
        return "going for a dip"
    end
end
```
- Namespacing--used for organization and prevent *naming collisions*:

# Private vs Public methods

```
class Dog
  DOG_YEARS = 7

  attr_accessor :name, :age

  def initialize(name, age)
    self.name = name
    self.age = age
  end

  private

  def human_years
    age * DOG_YEARS
  end
end

sparky = Dog.new("Sparky", 4)
sparky.human_years
```
