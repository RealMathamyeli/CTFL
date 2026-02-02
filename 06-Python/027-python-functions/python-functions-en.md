# Introduction to Python Functions and Modularization

Defining your own functions

- Defining functions with def and meaningful naming
- Designing functions with parameters and return values

Scope and modularization

- Validity of variables inside and outside functions (local/global)
- Importing and using your own modules as well as standard modules

# ⚙️ Defining your own functions

Imagine you are building something with LEGO bricks. Instead of repeatedly assembling the same four pieces for a wheel, you build one perfect wheel and set it aside. Whenever you need a wheel, you simply use this ready-made part.

Functions in programming are exactly that: reusable components for your code. You write an instruction or a set of instructions once, give this block a name, and can then call it as often as you like, whenever you need it. This makes your code shorter, clearer, and much easier to maintain.

<br><br><br>

## ✍️ Defining functions with `def` and meaningful naming

### 🧱 What is a function, anyway?

A function is a named block of code that accomplishes a specific task. You can think of a function like a recipe in a cookbook:

- **The name of the recipe** is the **function name** (e.g., `bake_cake`).
- **The ingredients list** are the **parameters** you give the recipe (e.g., flour, sugar, eggs).
- **The cooking instructions** are the **code** inside the function.
- **The finished cake** is the **return value**.

By breaking your code into functions, you create structure. If something doesn't work, you don't have to search your entire code, just the "recipe" responsible for the faulty task.

<br><br><br>

### 📜 The `def` statement: The basic structure

To create your own function in Python, you use the keyword `def`, which stands for "define". The basic structure always looks the same:

1.  **`def`**: The keyword that tells Python: "Attention, now comes a function definition."
2.  **Function name**: A name of your choice for the function (e.g., `show_greeting`).
3.  **Parentheses `()`**: Right after the name. This is where the "ingredients" (parameters) will go later. For now, we'll leave them empty.
4.  **Colon `:`**: This closes the "header" of the function.
5.  **Indented code block**: Everything belonging to this function must be indented underneath (usually with 4 spaces). This indentation is extremely important in Python, as it defines what is part of the function and what isn't.

Let's look at a simple example:

```python
# Definition of the function
def display_greeting():
  print("Hello, World!")
  print("Welcome to the programming course.")
  print("I am a function.")

# Calling the function
# The indented block now ends.
# This part of the code is only executed when the function is called.

print("The program starts here.")
display_greeting() # Here the function is "activated"
print("The function has been executed.")
display_greeting() # I can call it as often as I like
```

**What happens here?**

1.  Python reads the `def` line and remembers: "Aha, there is a function called `display_greeting`. But I won't execute the code inside yet."
2.  The program continues and outputs "The program starts here."
3.  Then it encounters `display_greeting()`. Now it remembers and jumps into the code block of the function. It executes all the `print` statements inside it.
4.  After the function is finished, the program jumps back to where it left off and prints "The function has been executed."
5.  Then the function is called a second time and the whole process repeats.

<br><br><br>

### 🏷️ The art of naming

The name of a function is like the sign above a shop door. It should clearly and directly state what you can expect inside. A function named `f()` or `do_something()` is not helpful.

**Rules and best practices for function names:**

- **Use verbs**: Functions do something. Their name should describe that action. `calculate_sum` is better than `sum`. `send_email` is better than `email`.
- **Be descriptive, but not too long**: `calculate_average_age_of_users` is exact, but very long. `calculate_average_age` is a good compromise.
- **Use lowercase and underscores (Snake Case)**: This is the official convention in Python for function and variable names. So `my_cool_function` instead of `myCoolFunction` (called Camel Case) or `MyCoolFunction` (Pascal Case).
- **Be consistent**: If you choose a style, stick with it.

Here is a small table to clarify the difference:

| 📛 Bad name | 👍 Good name              | 🤔 Why is it better?                                                                                                   |
| :---------- | :------------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| `f(x, y)`   | `add_numbers(num1, num2)` | You immediately know the function adds numbers.                                                                        |
| `process()` | `process_user_data()`     | "Process" is too vague. Here, it's clear which data is being processed.                                                |
| `print()`   | `print_invoice()`         | `print` is too general (and overrides the built-in function!). The new name clearly describes _what_ is being printed. |

A good function name is one of the best pieces of documentation you can write for your code!

<br><br><br>

## 📦 Designing functions with parameters and return values

Our first function was like a toaster without a bread slot. It could only do a single, hard-coded thing. Functions become really useful when we can pass them information (parameters) and get results back (return values).

<br><br><br>

### 📥 Parameters: The ingredients for your function

Parameters are variables you define in the parentheses `()` of a function. They are placeholders for the values (called arguments) you provide to the function when calling it.

Imagine a function that is supposed to greet a person personally. Without parameters, this would be very awkward. With a parameter, it's elegant:

```python
# 'name' is the parameter here. It's a placeholder.
def greet_person(name):
  print(f"Hello {name}, nice to see you!")
  print("Welcome!")

# Now we call the function and pass specific values, the arguments.
greet_person("Anna")  # "Anna" is the argument for 'name'.
greet_person("Max")   # "Max" is the argument.
```

On the first call, the value `"Anna"` is put into the "drawer" `name`. Within the function, `name` has the value `"Anna"`. On the second call, the drawer is emptied and repopulated with `"Max"`.

You can also pass multiple parameters by separating them with commas:

```python
def calculate_rectangle_area(length, width):
  area = length * width
  print(f"The area of the rectangle is: {area}")

calculate_rectangle_area(10, 5) # length becomes 10, width becomes 5
calculate_rectangle_area(7, 3)  # length becomes 7, width becomes 3
```

Here's a table to clarify commonly mixed-up terms:

| 🏷️ Term       | 📖 Explanation                                                                                           | 🔍 Example                   |
| :------------ | :------------------------------------------------------------------------------------------------------- | :--------------------------- |
| **Parameter** | The variable in the parenthesis at the **definition** of the function. It's the name of the placeholder. | `name` in `def greet(name):` |
| **Argument**  | The actual value you write in the parenthesis at the **call** of the function.                           | `"Anna"` in `greet("Anna")`  |

<br><br><br>

### 📤 The `return` value: The finished dish

So far, our functions only output their results to the screen using `print()`. But what if we want to store the result in a variable and work with it further? That's where the keyword `return` comes in.

`return` does two things:

1.  It immediately ends the function.
2.  It sends a value back to the spot where the function was called.

Let's look at our area calculation function again, this time with `return`:

```python
def calculate_rectangle_area(length, width):
  area = length * width
  return area # The function ends here and returns the value of 'area'

# The function call itself now becomes the value the function returns.
living_room_area = calculate_rectangle_area(8, 6)
kitchen_area = calculate_rectangle_area(4, 5)

total_area = living_room_area + kitchen_area

print(f"The living room area is {living_room_area} sqm.")
print(f"The kitchen area is {kitchen_area} sqm.")
print(f"The total area is {total_area} sqm.")
```

Here you see the true power: We can store the result (`48`) in the variable `living_room_area` and use it later for further calculations. A function that only uses `print()` could not do this.

**What happens if a function has no `return`?**
Every function in Python returns something. If you don't explicitly use `return`, the function automatically returns the special value `None`. `None` stands for "nothing" or "no value".

```python
def no_return_value():
  print("I return nothing.")

result = no_return_value()
print(result) # Output: None
```

<br><br><br>

### 🧩 Interaction: Parameters in, return value out

Functions reach their full potential when they combine both: they take in data, process it, and return a result. They are like little specialized machines in a factory.

Here's a complete example: A function that calculates the gross price from a net price and a VAT rate.

```python
def calculate_gross_price(net, vat_percent):
  """
  This function calculates the gross price from a net amount and a VAT rate.
  The VAT rate is given as a percentage (e.g., 19 for 19%).
  """
  if net < 0 or vat_percent < 0:
    return 0 # For invalid inputs, we return 0 and end the function.

  vat_factor = 1 + (vat_percent / 100) # from 19 becomes 1.19
  gross = net * vat_factor
  return gross

# --- Using the function ---

laptop_price_net = 1200
vat_germany = 19

# Parameter in -> processing -> return value out
laptop_price_gross = calculate_gross_price(laptop_price_net, vat_germany)

print(f"Net price: {laptop_price_net} EUR")
print(f"Gross price (incl. {vat_germany}% VAT): {laptop_price_gross:.2f} EUR") # .2f formats to 2 decimal places

# We can reuse the function!
book_price_net = 20
reduced_vat = 7
book_price_gross = calculate_gross_price(book_price_net, reduced_vat)

print(f"\nNet price of book: {book_price_net} EUR")
print(f"Gross price of book (incl. {reduced_vat}% VAT): {book_price_gross:.2f} EUR")
```

This function is:

- **Reusable**: We can use it for laptops, books, or anything else.
- **Readable**: The name `calculate_gross_price` tells you exactly what it does.
- **Abstract**: When calling, we don't have to worry about the formula. We just feed in the ingredients and get the result.
- **Maintainable**: If the calculation formula changes, we only have to update the function in one place.<br><br><br>

# 🏗️ Scope and Modularization

<br><br><br>

## 🎯 The scope of variables

Imagine your program is a big house. In this house are different rooms (your functions) and a large hallway connecting all rooms (the global scope). The "scope" of a variable determines in which part of this house the variable is known and can be used. There are mainly two scopes: local and global.

<br><br><br>

### 🏠 Local variables: The homebodies

A local variable is one that is **declared within a function**. It's a true homebody: It only exists in this one "room" (the function).

- **Birth:** It is created as soon as the function is called.
- **Life:** It can only be read and changed within this function.
- **Death:** As soon as the function finishes and the program leaves the function, the local variable is destroyed and its value is gone forever.

If you try to access this variable from outside the function (e.g., from the "hallway"), the program doesn't know it and gives you an error.

**Example:**

```python
def my_party():
    # 'drink' is a LOCAL variable. It only exists in here.
    drink = "Lemonade"
    print(f"At my party there is: {drink}")

# We call the function. Everything inside will be executed.
my_party()
# Output: At my party there is: Lemonade

# Now we try to access 'drink' from outside.
# This will cause an error!
print(drink)
# NameError: name 'drink' is not defined
```

The `NameError` is like a bouncer who says: "Sorry, I don't know the name 'drink' out here. He must still be in the party room."

<br><br><br>

### 🌍 Global variables: The globetrotters

A global variable is **declared outside any function**, so to speak in the "hallway" of your program-house. It's a globetrotter: Every room (every function) can see it and access it.

- **Birth:** It is created as soon as the program starts and the line is read.
- **Life:** It exists as long as the whole program runs.
- **Access:** Every function in the program can **read** its value.

**Example:**

```python
# 'player_name' is a GLOBAL variable. Everyone knows it.
player_name = "Alex"

def show_highscore():
    # This function can read the global variable 'player_name'.
    print(f"The current highscore holder is: {player_name}")

def start_new_game():
    # This function can also read 'player_name'.
    print(f"A new game is starting for {player_name}.")

show_highscore()
start_new_game()

# Output:
# The current highscore holder is: Alex
# A new game is starting for Alex.
```

<br><br><br>

### 💥 Local and global variables interacting (and the dangers)

Now it gets interesting. What happens if a local and a global variable have the same name? Or if a function tries to **change** a global variable?

Rule: Python always prefers the local variable! If you assign a value to a variable inside a function, Python by default creates a **new, local** variable. The global variable of the same name is not touched. It's kind of "overshadowed" by the local one.

**Example:**

```python
money = 100 # Global variable

def casino_visit():
    # WARNING: This creates a NEW, LOCAL variable 'money'.
    # It overshadows the global variable only inside this function.
    money = 10
    print(f"In the casino I only have {money} euros left.")

print(f"Before the casino I have {money} euros.")
casino_visit()
print(f"After the casino I still have {money} euros.")

# Output:
# Before the casino I have 100 euros.
# In the casino I only have 10 euros left.
# After the casino I still have 100 euros.
```

As you can see, the change inside `casino_visit()` did not affect the global variable `money` at all. This is often a source of bugs!

<br><br><br>

### 🔑 The `global` keyword: The door to the outside

But what if you really want to change the global variable inside a function? That's what the `global` keyword is for. With it, you explicitly tell the function: "Hey, the variable I'm referring to here is not a new local one. I mean the global variable out there in the hallway!"

**Example (corrected):**

```python
money = 100 # Global variable

def real_casino_visit():
    # With 'global' we say we mean the global variable 'money'.
    global money
    print(f"I'm going to the casino with {money} euros.")
    money = 10 # Now the GLOBAL variable is changed.
    print(f"Damn, now I only have {money} euros.")

print(f"Before the casino I have {money} euros.")
real_casino_visit()
print(f"After the casino I actually have only {money} euros.")

# Output:
# Before the casino I have 100 euros.
# I'm going to the casino with 100 euros.
# Damn, now I only have 10 euros.
# After the casino I actually have only 10 euros.
```

**Important advice:** Be very careful with the `global` keyword. If many functions change global variables, your code can quickly become messy and hard to follow. It's often better to pass values as parameters to functions and return them with `return`.

<br><br><br>

## 📦 Modularization: Packing code into boxes

Imagine you're writing a very large program, such as a game. You could write all your code in one gigantic file. But that would be like a huge pile of LEGO bricks without instructions. You would quickly lose track.

Modularization is the art of organizing your code into logical, reusable parts – called **modules**. A module is basically just a Python file (`.py`) that contains related code (e.g., functions, classes, or variables).

**Advantages:**

- **Order:** Your project stays organized.
- **Reusability:** You can use a module in many different projects.
- **Maintainability:** If an error occurs, you only need to search the relevant module, not the whole program.
- **Collaboration:** Different people can work on different modules without getting in each other's way.

<br><br><br>

### 📚 Standard modules: The built-in toolbox

Python comes with a huge "toolbox," the so-called **Standard Library**. It contains countless ready-made modules for all kinds of tasks. You don't have to reinvent the wheel!

Want to work with random numbers? There's the `random` module for that.
Need to do math calculations? Use the `math` module.
Want to work with dates and times? The `datetime` module will help you.

To use a module, you need to "bring it into" your program using the `import` keyword.

**Example with the `random` module:**

```python
# We import the whole 'random' module.
# Now we have access to all tools (functions) inside it.
import random

# We use the 'randint()' function from the 'random' module.
# The syntax is always: modulename.functionname()
random_number = random.randint(1, 100)
print(f"My random number between 1 and 100 is: {random_number}")

# We use another function, 'choice()', to pick a random item from a list.
players = ["Anna", "Ben", "Carla"]
winner = random.choice(players)
print(f"And the winner is... {winner}!")
```

<br><br><br>

### 🛠️ Your own modules: Your personal workshop

The true magic of modularization unfolds when you start creating your own modules. This is amazingly easy.

**Step 1: Create the module**
Create a new Python file. Let's call it `tools.py`. In this file, write useful functions you might need often.

```python
# Contents of file: tools.py

def greeting(name):
    """A simple function that greets a name."""
    print(f"Hello, {name}! Nice to see you.")

def rectangle_area(length, width):
    """Calculates the area of a rectangle."""
    return length * width

PI = 3.14159 # We can also define variables/constants
```

**Step 2: Use the module in your main program**
Now create a second Python file **in the same folder**. Let's call it `main_program.py`. From here, we import and use our self-made `tools` module.

```python
# Contents of file: main_program.py

# We import our own module. Python finds it because it's in the same folder.
# Note: we write 'import tools', not 'import tools.py'.
import tools

# Now we can use the functions and variables from our module.
# Again, with the syntax: modulename.elementname
tools.greeting("Maria")

table_length = 2
table_width = 1.5
area = tools.rectangle_area(table_length, table_width)

print(f"The area of the table is: {area} square meters.")
print(f"The value of PI from our module is: {tools.PI}")
```

<br><br><br>

### 📥 Different ways of importing

There are different ways to import code from modules. Each has its pros and cons.

| Syntax                                | Example                         | Usage                     | Advantage                                                                                                 | Disadvantage                                                                                                                                                                                              |
| :------------------------------------ | :------------------------------ | :------------------------ | :-------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `import module`                       | `import math`                   | `math.sqrt(16)`           | **Very clear:** You immediately see where (`math`) the function (`sqrt`) comes from. No naming conflicts. | You must always prepend the module name (more typing).                                                                                                                                                    |
| `from module import element`          | `from math import sqrt, pi`     | `sqrt(16)`<br>`print(pi)` | You can call the function/variable by its name directly. Shorter to write.                                | If you have your own function named `sqrt`, there is a conflict. The origin is not immediately obvious.                                                                                                   |
| `from module import element as alias` | `from math import sqrt as root` | `root(16)`                | You can give elements a new, perhaps shorter or more understandable name. Resolves naming conflicts.      | You have to remember the new name.                                                                                                                                                                        |
| `from module import *`                | `from math import *`            | `sqrt(16)`<br>`print(pi)` | You import **everything** from the module and can use it directly.                                        | **⚠️ Very dangerous!** You load lots of names into your program, many of which you don't know. The risk of naming conflicts is huge and the code becomes unreadable. **Should almost always be avoided!** |
