# OOP in Python: A Beginner's Guide to Object-Oriented Programming

Object-Oriented Concepts

- Difference between procedural and object-oriented programming
- Advantages and areas of application of OOP

Classes and Objects in Python

- Definition and instantiation of classes
- Purpose and use of **init**

Attributes and Methods

- Difference between attributes and methods
- Accessing an object's attributes and methods

Practical Example

- Creating a simple custom class
- Creating object instances and using methods

# 🧩 Object-Oriented Concepts

<br><br><br>

## 🤔 Difference Between Procedural and Object-Oriented Programming

Imagine you want to bake a cake. There are two fundamental approaches to writing down the instructions for this. These two ways are a good metaphor for the difference between procedural and object-oriented programming.

<br><br><br>

### 📜 Procedural Programming (POP)

Procedural programming is like a classic cookbook.

**The idea:** You have a list of instructions (procedures or functions) that you work through in order. The main focus is on "What is done?". The data (the ingredients like flour, sugar, eggs) and the functions (the instructions like "Mix," "Bake," "Decorate") are separate from each other.

**The cookbook analogy:**

- **Data:** On one page you have all the ingredients you need (e.g., `int numberOfEggs = 3;`, `float amountOfFlourInGrams = 500;`). These data are often "globally" available, meaning every part of your program can access and modify them.
- **Functions/Procedures:** On another page, you have the individual steps (`mixIngredients()`, `preheatOven()`, `bakeCake()`). These functions take the data (ingredients), process them, and return a result.

**How it works:**
Your main program is like the head chef, reading the recipe from top to bottom and calling the individual functions in the correct order:

1. Call `preheatOven()`.
2. Call `mixIngredients()` with flour, sugar, and eggs.
3. Call `bakeCake()` with the mixed dough.

**The Problem:** If you have a very large cookbook with thousands of recipes, it becomes confusing. The ingredients (global data) are lying around somewhere, and many different recipes (functions) could accidentally change them. If you change the ingredient "sugar," it could suddenly affect 100 different recipes, leading to errors that are hard to track down.

<br><br><br>

### 📦 Object-Oriented Programming (OOP)

Object-oriented programming is like building an autonomous "baker robot" instead of just a recipe.

**The idea:** Instead of separating data and functions, you bundle them into "objects." An object is a self-contained unit that contains both data (properties) and the functions (methods) that process this data. The focus is on "Who does something?".

**The baker robot analogy:**

- First, you define a **blueprint** for such robots. This blueprint is called a **class** (e.g., the class `Baker`).
- In this blueprint, you specify what **attributes (properties)** a baker has (e.g., `name`, `experience`, `ingredientsList`) and what they **can do (methods)** (e.g., `bakeCake()`, `shopForIngredients()`).
- You can then create as many concrete robots as you like from this blueprint. These concrete robots are the **objects** (e.g., `bakerKarl`, `bakerAnna`).

**How it works:**
Each baker robot manages its own ingredients. As the head chef, you no longer say "Take flour, take sugar...", but simply tell your object: `bakerKarl.bakeCake()`.

- The robot `bakerKarl` knows how to bake a cake. It accesses _its own_ internal ingredients.
- You don't have to know the details of the baking process. You trust the robot to do its job. This hiding of complexity is called **encapsulation**.
- When `bakerAnna` also bakes a cake, she uses her own ingredients. They don't interfere with each other, even if they're working at the same time.

<br><br><br>

## ✅ Advantages and Areas of Application of OOP

Why bother thinking in objects? Because this approach comes with some powerful benefits, especially for large and complex projects.

<br><br><br>

### 👍 Advantages of OOP

1.  **Reusability**
    - Once you've written a good class like `Car`, you can reuse it across countless projects. You don't have to reinvent the wheel each time.
    - Thanks to the concept of **inheritance**, you can extend an existing class. You could make a `SportsCar` class inherit from `Car`. The `SportsCar` then automatically has all the properties and methods of a regular car (wheels, engine, `drive()`), and you just add the special features (e.g., `activateTurbo()`). This saves a lot of time and code.

2.  **🔒 Encapsulation (Data Protection)**
    - Imagine an object as a pill with a protective shell. The data inside is secure. No one from outside can just change it.
    - Access is only via the public methods of the object (e.g., `setSpeed(50)` instead of directly manipulating the `speed` variable).
    - This prevents accidental errors. The `setSpeed` method could, for instance, check if the value is valid (e.g., not negative and not above the top speed) before changing the internal variable. This makes the code much more robust and secure.

3.  **🔧 Better Maintainability and Readability**
    - The code is divided into logical units (objects) modeled after the real world (a `Customer`, an `Invoice`, a `Product`), making it much easier to understand.
    - If there's a bug in a `Car`'s behavior, you know exactly where to look: in the `Car` class. You don't have to search the entire program. Changes to a class rarely have unexpected side effects on completely different parts of the program.

4.  **🎭 Polymorphism (Many Forms)**
    - This is a very powerful concept. It means that different objects can respond differently to the same message.
    - **Example:** You have different shapes (Circle, Square, Triangle), all inheriting from a base class `Shape`. Each of these classes has a method called `draw()`.
    - If you now have a list of different shapes and call `shape.draw()` for each, the right thing always happens: the circle draws a circle, the square draws a square. You don't have to check: "If it's a Circle, do this, if it's a Square, do that...". This makes the code much cleaner and more flexible.

5.  **🧠 Abstraction**
    - OOP allows complexity to be hidden. When you drive a car, you use the steering wheel, pedals, and gearshift. You don't need to know exactly how the engine, transmission, or injection system work.
    - It's the same with objects. You use their simple, public methods (`car.accelerate()`), without needing to understand the complicated internal logic. You only need to know _what_ the object does, not _how_ it does it.

<br><br><br>

### 💻 Areas of Application for OOP

OOP isn't always the best solution for every problem, but in many areas it's the absolute standard, because the problems can be translated so well into objects.

| Area of Application                      | Why OOP is Ideal Here                                                                                                                                                                                                                                                                  |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game Development**                     | Every character (player, enemy), every item (weapon, potion), every level element can be perfectly modeled as an object. An `Enemy` object has attributes like `healthPoints` and `attackStrength` and methods like `attack()` and `move()`.                                           |
| **Large Enterprise Software (ERP, CRM)** | Systems for managing customers, products, orders, and invoices are made for OOP. You have `Customer` objects, `Product` objects, and `Order` objects, which relate to one another. This makes the huge complexity of such systems manageable.                                          |
| **Simulations**                          | Whether building a traffic simulation (each `Car`, each `TrafficLight` is an object), a physics simulation (each `Planet` is an object), or a biological simulation (each `Cell` is an object)—OOP allows the behavior and interaction of individual parts to be modeled true to life. |
| **Web Frameworks (Backend)**             | Modern frameworks like Django (Python) or Spring (Java) use OOP extensively. A blog post is an object, a user is an object, a comment is an object. This makes database interaction and business logic organization much easier.                                                       |
| **Mobile App Development (iOS/Android)** | Mobile development is heavily object-oriented. A screen (`ViewController`), a table (`TableView`), or an image (`ImageView`) are all objects whose properties you change programmatically to control the app.                                                                          |

<br><br><br>

# 🧱 Classes and Objects in Python

<br><br><br>

## 🏗️ Definition and Instantiation of Classes

Imagine you are an architect. Before you can build an actual house, you draw up a blueprint. This plan specifies everything: how many rooms the house will have, where the windows go, what the roof looks like. But the plan itself is not yet a house you can live in. It's just the template, the description.

That's exactly the relationship between classes and objects in programming.

<br><br><br>

### 💡 What is a Class?

A **class** is like the **blueprint** for a house. It's a template or stencil that describes how something should be constructed.

A class defines two things:

1.  **Attributes**: These are the properties or data that a thing should have. In the blueprint for a house, these would be, for example, `number_of_rooms`, `living_area`, or `facade_color`.
2.  **Methods**: These are the capabilities or behaviors that a thing should have. For a house, these could be `open_door()` or `turn_on_light()`. Methods are essentially functions belonging to a class.

Here's a very simple blueprint for a car in Python. Right now, it's still empty—it only defines that something like a "Car" should exist.

```python
class Car:
    pass # 'pass' is a placeholder and means "more will follow here"
```

This code does not yet create an actual car. It only creates the _idea_, the template, the blueprint called `Car`.

<br><br><br>

### 🏠 What is an Object?

An **object** is the **real, built house** that was constructed from the blueprint. It's a concrete **instance** of a class.

The great thing about a blueprint (a class) is that you can use it over and over to build many different, yet similar houses (objects). You can build a red house with five rooms and a blue house with three rooms—both based on the same general blueprint, but each with their own individual properties (attributes).

Each object you create from a class is independent. If you change the wall color in one house, it doesn't affect the others.

<br><br><br>

### ✨ How Do I Create an Object? (Instantiation)

The process of creating a concrete object from a class (the blueprint) is called **instantiation**. It's like telling the construction team: "Now build me a house according to this plan!"

In Python, it's super easy. You take the class name and put parentheses `()` after it.

```python
# This is our blueprint (the class)
class Car:
    pass

# Now we build two real, concrete cars (objects/instances)
# We call the class like a function.
my_golf = Car()
your_tesla = Car()

# my_golf and your_tesla are now two completely independent objects.
# They were both created from the blueprint "Car."
print(my_golf)
print(your_tesla)
```

When you run this code, you'll see an output telling you these are two different `Car` objects at different memory locations on your computer. So they really are two separate things.

<br><br><br>

## 🛠️ Purpose and Use of `__init__`

Okay, so we can now create empty blueprints and build empty objects from them. That's not very useful yet. A car should have a make, model, and color from the start, right?

This is where the special `__init__` method comes into play.

<br><br><br>

### ⚙️ The Constructor: The `__init__` Method

The method `__init__` (the underscores at the start and end matter!) is a very special method. Its name stands for "initialization." It's also called the **constructor**.

Imagine your blueprint has a section "Instructions for the construction team at the start of construction." That's exactly what `__init__` is. This method is **automatically and only ever called once**, exactly at the moment when a new object is created (instantiated).

Its main job is to give the brand-new object its initial attributes (properties) and set it up in a ready-to-use state.

```python
class Car:
    # This is the constructor. It gets called on Car()
    def __init__(self):
        print("A new car has been built!")
        # We give the car default initial values
        self.make = "Unknown"
        self.model = "Unknown"
        self.hp = 0

# As soon as this line runs, the __init__ method is called.
my_car = Car() # Prints: "A new car has been built!"

# Now we can access the attributes set in __init__.
print(f"Make of my car: {my_car.make}") # Outputs: Make of my car: Unknown
```

<br><br><br>

### 👉 The Magic Word `self`

You probably noticed the word `self`. It's one of the most important concepts in classes and often confusing for beginners. But it's actually quite logical:

`self` is a placeholder for **the object itself**.

Think again of our two cars, `my_golf` and `your_tesla`. When the `__init__` method is executed for `my_golf`, then `self` inside this method is a reference to `my_golf`. When it's executed for `your_tesla`, it's a reference to `your_tesla`.

With `self.make = "Unknown"` you're saying: "Hey, you concrete object that's being created! Take your attribute called `make` and set its value to 'Unknown'." This binds the attribute firmly to the particular object. Without `self`, Python wouldn't know _whose_ make to set.

<br><br><br>

### 📥 Passing Attributes When Creating an Object

It's impractical if every car starts as "Unknown" and we have to change the values later. Wouldn't it be nice if we could specify the properties right when we build the car? That's exactly what `__init__` is for!

We can give the constructor parameters, just like a regular function. The first parameter is _always_ `self`, but you can define as many additional ones as you like after that.

```python
class Car:
    # We extend the constructor with parameters for make, model, and color
    def __init__(self, make, model, color):
        print(f"A new {make} {model} in color {color} is being built!")

        # We assign the given values to the object's attributes.
        # self.make is the object's attribute.
        # make (without self) is the value provided from outside.
        self.make = make
        self.model = model
        self.color = color

# Now we provide values directly during instantiation.
# Python automatically passes those values to __init__.
my_golf = Car("VW", "Golf 8", "Blue")
your_tesla = Car("Tesla", "Model 3", "Red")

# Now the objects have their individual values.
print(f"My car is a {my_golf.make} {my_golf.model} in {my_golf.color}.")
# Output: My car is a VW Golf 8 in Blue.

print(f"Your car is a {your_tesla.make} {your_tesla.model} in {your_tesla.color}.")
# Output: Your car is a Tesla Model 3 in Red.
```

<br><br><br>

### 🚗 A Practical Example at a Glance

Let's summarize what we've learned in a table. We have a class (blueprint) and from it we create two different objects (cars).

| Concept          | Blueprint (`class Car`)                                                                                                                       | Object 1 (`my_golf`)                                            | Object 2 (`your_tesla`)                                     |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------- | :---------------------------------------------------------- |
| **What is it?**  | The template. Specifies that a car has a make, model, and color.                                                                              | A concrete instance of class `Car`. A real, independent entity. | Another concrete instance of class `Car`. Also independent. |
| **Creation**     | `class Car:`<br>`  def __init__(self, make, model, color):`<br>`    self.make = make`<br>`    self.model = model`<br>`    self.color = color` | `my_golf = Car("VW", "Golf 8", "Blue")`                         | `your_tesla = Car("Tesla", "Model 3", "Red")`               |
| **`self.make`**  | Defines the attribute `make`.                                                                                                                 | "VW"                                                            | "Tesla"                                                     |
| **`self.model`** | Defines the attribute `model`.                                                                                                                | "Golf 8"                                                        | "Model 3"                                                   |
| **`self.color`** | Defines the attribute `color`.                                                                                                                | "Blue"                                                          | "Red"                                                       |

The `Car` class is the general blueprint. The `__init__` method is the instruction for how to assemble a new car and provide it with initial values (make, model, color). `my_golf` and `your_tesla` are the finished products built from this plan, each with its own specific details.

<br><br><br>

# 🧱 Attributes and Methods

Imagine you have a blueprint for a house. This blueprint is a **class** in programming. It describes exactly what a house should look like and what you can do in it.

If you now build an actual house from this blueprint, this house is an **object**. You can even build several houses (objects) from the same blueprint (class). Each house is independent, but they all share the basic properties and functions defined in the blueprint.

Within this blueprint, there are two very important things:

1.  **The properties of the house:** How many windows does it have? What color are the walls? Does it have a garage? These are the **attributes**.
2.  **The things you can do in the house:** You can open the door, turn on the light, or turn up the heating. These are the **methods**.

Each built house (object) has its own properties (attributes) and can perform the same actions (methods).

<br><br><br>

## ⚖️ The Difference Between Attributes and Methods

Let's break this down further. The difference is fundamental, but easy to understand if you remember the analogy: Attributes are **what an object is**, and methods are **what an object can do**.

<br><br><br>

### 📝 What are Attributes?

Attributes are the data or properties that describe an object. Think of them as the "adjectives" or "nouns" that define an object's state. They are essentially variables belonging to a specific object.

Let's use a `Dog` object as an example. Possible attributes for a dog would be:

- `name` (e.g., "Buddy")
- `breed` (e.g., "Golden Retriever")
- `age` (e.g., 5)
- `isHungry` (e.g., `true` or `false`)

Every dog we create as an object has these attributes, but the values can be different for each dog. One dog is "Buddy" and 5 years old, another is "Luna" and 2 years old. The attributes store the individual state of each object.

<br><br><br>

### ⚙️ What are Methods?

Methods are the actions or behaviors that an object can perform. Think of them as "verbs." They are essentially functions that belong to an object and are often used to modify or work with the object's attributes.

Staying with our `Dog` object. Possible methods could be:

- `bark()`
- `eat()`
- `celebrateBirthday()`
- `wagTail()`

If we call the `eat()` method, the code inside this method might change the `isHungry` attribute from `true` to `false`. When we call `celebrateBirthday()`, this method could increase the `age` attribute by 1.

Methods thus define the behavior of an object. You can usually recognize them by the parentheses `()` after the name.

<br><br><br>

### 📊 Table for Direct Comparison

To make the difference even clearer, here is a table:

| Feature              | Attributes (Properties)                             | Methods (Abilities)                              |
| :------------------- | :-------------------------------------------------- | :----------------------------------------------- |
| **Analogy**          | Nouns/adjectives (what it _is_)                     | Verbs (what it _can do_)                         |
| **Purpose**          | Store the state and data of an object.              | Define the behavior and actions of an object.    |
| **Examples (Car)**   | `color`, `make`, `numberOfDoors`, `currentSpeed`    | `start()`, `accelerate()`, `brake()`, `honk()`   |
| **Technical Nature** | Variables that belong to an object.                 | Functions that belong to an object.              |
| **Syntax Note**      | Referred to directly by name (e.g., `myCar.color`). | Called with parentheses (e.g., `myCar.start()`). |

<br><br><br>

## 🔑 Accessing an Object's Attributes and Methods

Once you have a concrete object (e.g., a red car of brand VW), of course you want to access its properties (attributes) and make use of its abilities (methods). In most programming languages, this is done using what's called **dot notation**.

The general rule is: `objectName.propertyName`

Imagine we have an object called `myCar`.

<br><br><br>

### 📖 Reading Attributes

You can simply "read" the value of an attribute to find out what state the object currently has.

**Syntax:** `objectName.attributeName`

**Example:**
You want to know what color your car is.

```
// Assume there's an object 'myCar' with the attribute 'color'
currentColor = myCar.color
// The variable 'currentColor' now holds the value of the attribute, e.g., "Red"
```

So you access the attribute directly to get its value.

<br><br><br>

### ✏️ Writing to Attributes

You can also change the value of an attribute. Just assign a new value to it. This changes the object's state.

**Syntax:** `objectName.attributeName = newValue`

**Example:**
You have your car repainted and want to change the color from "Red" to "Blue."

```
// Assume: The current value of myCar.color is "Red"
myCar.color = "Blue"
// Now the object's state has changed. The attribute 'color' has the new value "Blue."
```

<br><br><br>

### 🏃 Calling Methods

To perform an action, you "call" a method. This means you tell the object to do something now. It's important that you always put parentheses `()` after the method name.

**Syntax:** `objectName.methodName()`

**Example:**
You want your car to honk.

```
// The object 'myCar' should perform the action 'honk'
myCar.honk()
// The code inside the honk() method now runs.
```

Sometimes methods need extra information to do their job. These are called **parameters** and are written inside the parentheses.

**Example:**
You want your car to accelerate by 10 km/h. The `accelerate` method needs to know by how much.

```
// We pass the value 10 to the 'accelerate' method
myCar.accelerate(10)
// The method can now work with this value and e.g. increase the 'currentSpeed' attribute by 10.
```

Even if a method needs no extra information, the empty parentheses `()` are always necessary. They signal that you’re performing an action, not just accessing a property.

# 🏗️ Practical Example: Classes and Objects in Action

<br><br><br>

## 📐 Creating a Simple Custom Class

Think of a class as a blueprint or recipe. The blueprint for a house is not the house itself, but it describes precisely how a house of this kind is to be built: how many rooms it has, what color the walls should be, and so on. A class in programming is the blueprint for objects. It defines what properties (attributes) and abilities (methods) an object of this type will have.

We'll now create a "blueprint" for a dog. Every dog we "build" later will be based on this plan.

### 📜 ### The Basic Structure

A class definition in Python always starts with the keyword `class`, followed by the name of the class. By convention, class names are written with an uppercase letter and in so-called "PascalCase" or "CamelCase" notation (e.g., `MyFirstCar`).

```python
class Dog:
    # The whole blueprint for a dog goes here.
    pass # This is a placeholder so Python doesn't throw an error.
```

### 🧠 ### The Constructor: `__init__`

This is a very special method. You recognize such special methods by the double underscores at the beginning and end (`__init__`). The constructor is **automatically always called whenever a new object** is created from the class. Its main job is to "initialize" the object, i.e., give it its initial properties.

- **`self`**: The first parameter of every method in a class is always `self`. It's a placeholder for the future object itself. When we later create a dog named "Buddy," `self` refers to "Buddy." When we create a dog named "Luna," `self` refers to "Luna." That way, the method knows exactly which object it's referring to.
- **Other parameters**: After `self` come the properties each dog should receive at its "birth," for example, a name, a breed, and an age.

```python
class Dog:
    # The constructor
    def __init__(self, name, breed, age):
        # We take the given values and store them
        # as properties (attributes) of the specific object (self).
        self.name = name
        self.breed = breed
        self.age = age

        print(f"Woof! A new dog named {self.name} has been created!")
```

Here's what's happening:

1. We define that every new `Dog` must be created with a `name`, a `breed`, and an `age`.
2. `self.name = name` means: "Take the value that was given for `name` and store it in a variable called `name` that belongs to this specific object (`self`)."

### 🗣️ ### Defining Methods: What the Object Can Do

Methods are essentially functions belonging to a class. They define what an object can do. Our dogs should be able to bark and celebrate birthdays.

Just like for the constructor, the first parameter must always be `self` so the method knows which dog it is referring to.

```python
class Dog:
    # Constructor (from above)
    def __init__(self, name, breed, age):
        self.name = name
        self.breed = breed
        self.age = age
        print(f"Woof! A new dog named {self.name} has been created!")

    # A method for barking
    def bark(self):
        print(f"{self.name} says: Woof, woof!")

    # A method to increase the dog's age
    def celebrate_birthday(self):
        self.age = self.age + 1
        print(f"Happy Birthday, {self.name}! You are now {self.age} years old.")
```

Now our blueprint (the class `Dog`) is ready. It declares that every dog has a name, a breed, and an age, and can bark and celebrate birthdays.

<br><br><br>

## 🐕 Creating Object Instances and Using Methods

Now that we have the blueprint, we can finally "build" real, individual dogs. Each dog we create from this blueprint is called an **instance** or **object** of the `Dog` class.

### 💡 ### What Is an Object Instance?

The instance is the concrete product built from the blueprint. If the class `Dog` is the blueprint for a house, the instance is the actual house at Main Street 12. Another house at Park Avenue 5, also built from the same blueprint, is another, separate instance. Both have the same structure (same number of rooms), but different properties (perhaps a different wall color, different furniture).

| The Class (The Blueprint) 📝                                     | The Object (The Concrete Product) 🏠                                                            |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Defines the general properties (e.g., `name`, `breed`).          | Has specific values for these properties (e.g., `name = "Buddy"`, `breed = "German Shepherd"`). |
| Defines the general abilities (e.g., the method `bark()`).       | Can perform these abilities (Buddy can bark).                                                   |
| Is an abstract template. You can't "play" with the class itself. | Is a concrete, tangible unit in computer memory you can work with.                              |

### ➕ ### Creating an Instance

To create an instance, you "call" the class like a function, passing the values the `__init__` constructor expects (except for `self`, which Python inserts automatically).

```python
# We create our first instance of the Dog class.
# Python calls Dog.__init__(buddy, "Buddy", "Golden Retriever", 3) in the background.
buddy = Dog("Buddy", "Golden Retriever", 3)

# We create a second, completely independent instance.
luna = Dog("Luna", "Labrador", 5)
```

When you run this code, you see the print outputs from our constructor:

```
Woof! A new dog named Buddy has been created!
Woof! A new dog named Luna has been created!
```

We now have two different dog objects in memory: `buddy` and `luna`.

### 🔍 ### Accessing Attributes

To view the properties of a particular instance, we use "dot notation": `objectName.attributeName`.

```python
# Display Buddy's properties
print(f"The first dog is named {buddy.name}.")
print(f"He is a {buddy.breed} and {buddy.age} years old.")

print("---") # Separator for better readability

# Display Luna's properties
print(f"The second dog is named {luna.name}.")
print(f"She is a {luna.breed} and {luna.age} years old.")
```

You can see, even though both were created from the same blueprint (`Dog`), they each have their own individual data. Changing Buddy's age would not affect Luna's age.

### 🗣️ ### Using (Calling) Methods

Just like we access attributes, we can call methods for a particular instance. We're telling the object to use one of its abilities. Again, we use dot notation, but with parentheses `()` at the end, since we want to perform an action.

```python
# Let the dogs use their abilities

# Buddy should bark
buddy.bark()

# Luna should bark too
luna.bark()

print("---")

# Let's see Luna's age before her birthday
print(f"Before the party, Luna is {luna.age} years old.")

# Luna celebrates her birthday. The method changes Luna's 'age' attribute.
luna.celebrate_birthday()

# Let's see Luna's age after her birthday
print(f"After the party, Luna is {luna.age} years old.")

# Buddy's age, of course, has not changed
print(f"Buddy is still {buddy.age} years old.")
```

The output of this code would be:

```
Buddy says: Woof, woof!
Luna says: Woof, woof!
---
Before the party, Luna is 5 years old.
Happy Birthday, Luna! You are now 6 years old.
After the party, Luna is 6 years old.
Buddy is still 3 years old.
```

Here you see perfectly how a method (`celebrate_birthday`) can change the internal state (`self.age`) of a particular object (`luna`) without affecting other objects of the same class.
