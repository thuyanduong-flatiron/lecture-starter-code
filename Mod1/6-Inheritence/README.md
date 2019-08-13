# Class Inheritance

## Review "Everything Is an Object"
- `puts "hi".methods`
- Inheritance in real life
- What is all this stuff and where does it come from?
  - `"hi".class`
  - `"hi".class.ancestors`

## Let's Practice It
- Define Animal class `#speak`, `#walk`
- The`<` syntax is used for specifying inheritance
    - `class Dog < Animal`
    - Vocab:  *Child class, Parent class, Sub class, Super class, inherits from*
  - `fido.walk` and `fido.speak` works!
- What happens if we have `#speak` in child classes
  - We can _override_ methods
  - Method Resolution Order (MRO)
  - We can also overide initialize()

- Refactor to show ancestor chain inheritance:  `Dog/Cat < Mammal < Animal`.
    - `fido.class`
    - `fido.class.superclass`
    - `fido.class.ancestors`
    - `is_a?` vs `instance_of?`

## super(), When you want to call the parent from the child
- `super()` is common used in the initialize method
- We can also call `super()` in any instance method


## Modules  
- Build `Fish < Animal` class  
- But now your fish can walk... So let's build a `Mammal` class
- Let's build a `#swim` for the `Fish` class.  
  - But this is problematic, some animals that aren't fish can swim

- What's the ancestor chain now?
- Namespacing--used for organization and prevent *naming collisions*:

# Private vs Public methods

```
class Dog
  DOG_YEARS = 7

  private
  def human_years
    age * DOG_YEARS
  end
end

sparky.human_years # => error
```