# 🐍 Introduction to Python Syntax and Operators

Basic Syntax Elements

- Structure of a Python code line (indentation and line endings)
- Comments and their purpose

Working with Variables and Data Types

- Declaration and naming of variables
- Handling integer, float, string, and boolean

Basic Operators

- Mathematical operators (addition, subtraction, multiplication, division)
- Assignment operators

Input and Output

- Simple console output with print()
- User input with input()

<br><br><br>

# 🐍 Basic Syntax Elements

- Think of the syntax of a programming language like the grammar of a human language.
- They are the rules that define how you must form "sentences" (instructions) for the computer to understand you.
- If you don't observe the grammar, your conversation partner won't understand you – and it's exactly the same in programming.
- Python is known for its very clean and readable syntax, making it a great language for beginners.

<br><br><br>

## 📏 Structure of a Python Code Line

- Each line in your Python code is `a statement` or part of a statement.

```python
print("Hello, World!")  # This is a single statement
age = 5                   # Another statement
username = "Alice"        # Yet another statement
```

- Unlike many other languages that use braces `{}` or keywords like `begin` and `end` to define code blocks, Python uses something much more visual:
  - indentation and line endings.

### ➡️ Indentation: The Heart of Python

- Indentation is not just for making code look nicer – it is a fundamental part of Python's syntax!
- It determines which lines belong together and form a block.

**What is a code block?**

- A code block is a group of statements that are executed together as a unit.
- For example, code inside an `if` condition, a `for` loop, or a function definition.

**The Rule:**

- All lines that belong to the same code block must be indented by exactly the same amount.
- The official and most widely adopted standard (called PEP 8) recommends using **four spaces** per indentation level.

**Correct code with indentation:**

```python
age = 20

# The following block is ONLY executed if 'age' is greater than or equal to 18.
# The indentation with four spaces shows this.
if age >= 18:
    print("You are of legal age.")  # This line belongs to the if block
    print("You may vote.")          # This line also belongs to the if block

# This line is no longer indented and therefore no longer belongs to the if block.
# It is always executed.
print("The program has ended.")
```

- In this example, we clearly see: the two `print()` statements are indented and form the code block that is executed if the `if` condition is true.

**Incorrect code without or with incorrect indentation:**

- If you forget the indentation, Python will report an error called an `IndentationError`.
- This is one of the most common errors for beginners.

```python
age = 20

if age >= 18:
print("You are of legal age.") # ERROR! This line must be indented.
```

- Here, the computer doesn't know whether the `print` line belongs to the `if` condition or not.
- The indentation provides this clarity.

### 🔚 Line Endings: When a statement ends

- In many programming languages (like Java or C++), you have to mark the end of each statement with a semicolon `;`.
- Python is much simpler and more readable.

**The Rule:**

- In Python, the end of a line usually also marks the end of a statement.
- You write one statement per line.

```python
name = "Anna"         # First statement
age = 25              # Second statement
print(name, age)      # Third statement
```

**What if a statement is too long for one line?**

- Sometimes you have very long code lines, which become unclear.
- There are two neat ways to split a statement over multiple lines:

1.  **Implicit line break (preferred):** If your statement is inside round parentheses `()`, square brackets `[]`, or curly braces `{}`, you can simply break the line after a comma. Python will know the statement isn’t over yet.

    ```python
    # Example with a long list in square brackets []
    my_friends = [
        "Max Mustermann",
        "Erika Mustermann",
        "John Doe",
        "Jane Doe"
    ]

    # Example with a long function call in round brackets ()
    result = my_long_function(
        argument1,
        argument2,
        argument3
    )
    ```

2.  **Explicit line break (rarely used):** You can use a backslash `\` at the end of a line to tell Python, "Attention, this statement continues on the next line."

    ```python
    # Not as readable, but works
    x = 100 + 200 + 300 + \
        400 + 500
    ```

<br><br><br>

## 📝 Comments and Their Purpose

- A comment is text in your source code that is completely ignored by the Python interpreter.
- So it’s not for the computer, but for humans – for yourself in the future or other developers reading your code.

- Good comments are like notes or signposts in your code.
- They make it more understandable and maintainable.
- There are mainly three reasons why you should use comments:

1.  **Explaining code:** To describe complex or not immediately obvious parts of your code. You explain _why_ you did something a certain way, not _what_ the code does (that should be clear from the code itself).
2.  **Leaving notes:** For marking "to-do" items or reminders for future improvements.
3.  **Temporarily disabling code:** To "comment out" one or more lines, so they aren't executed. Very useful for testing or debugging.

### ﹟ Single-Line Comments

- A single-line comment starts with a hash sign (`#`).
- Everything after the `#` in that line is ignored by the interpreter.

**Example 1: Standalone comment line**

```python
# This is a comment. It explains what the next line does.
# Here we calculate 19% sales tax.
price_net = 100
tax_rate = 0.19
price_gross = price_net * (1 + tax_rate)
```

**Example 2: Inline comment at the end of a code line**

```python
x = 5  # Set the starting variable x to 5
```

### """ Multiline Comments (Docstrings) """

- Officially, Python has no special syntax for multiline comments like other languages.
- Instead, a little trick is used: you use multiline strings.
- These start and end with three consecutive quotation marks `"""` or three apostrophes `'''`.
- Everything in between is treated as a single string.
- If you don't assign the string to a variable, Python simply ignores it—so it works like a multiline comment.

```python
"""
This is a multiline comment.
It can span any number of lines
and is often used to explain larger sections.
"""
x = 10
y = 20
```

- This kind of multiline string has a very special and important function: as **docstrings**.
- A docstring is such a block directly at the beginning of a function, class, or module.
- It serves as the official documentation for that code block.
- Special tools can automatically read these docstrings and generate documentation for your program.

**Example of a docstring in a function:**

```python
def add(a, b):
    """
    This function adds two numbers and returns the result.

    Args:
        a (int): The first summand.
        b (int): The second summand.

    Returns:
        int: The sum of a and b.
    """
    return a + b
```

### Useful Applications of Comments

Here is a table summarizing the use of comments:

| Kind of Comment      | When to use?                                                                  | Example                                                          |
| :------------------- | :---------------------------------------------------------------------------- | :--------------------------------------------------------------- | ------------------------------------------ |
| **Explain code**     | When logic is complex or the reason for a decision isn't clear.               | `radius = diameter / 2 # Formula for calculating radius`         |
| **Leave a note**     | To point out something that still needs to be done.                           | `# TODO: Need to add error handling for negative numbers.`       |
| **Comment out code** | To temporarily disable code during debugging or testing, without deleting it. | `# print("Debug value:", age)` <br> `print("Program continues")` | # 📦 Working with Variables and Data Types |

<br><br><br>

## 🏷️ Declaration and Naming of Variables

- Think of a variable like a box or a labeled container.
- You can put information in this box to find and use later.
- The variable name is the label on the box, so you know what's inside.
- We need variables to remember things while a program is running, for example a user's name, an age, or the result of a calculation.

### ✏️ What is Declaration?

- Declaration is the moment you tell the computer: "Hey, I need a new box! And it should have this name."
- So you are creating an empty container.

- In many modern programming languages (like Python or JavaScript), declaration and initial assignment often happen in a single step.

**Example:**

```python
# Here we declare the variable 'username' and immediately assign it a value.
username = "MaxMustermann"
```

- In this example, the variable `username` is created (declared) and is immediately assigned the value `"MaxMustermann"`.
- The box labeled `username` is now no longer empty but contains this text.

### ✨ What is Initialization?

- Initialization is the first time you put something in your box.
- Declaring a variable without giving it a value is like putting an empty box there.
- You can't really do much with that.
- Only when you put a value in does it become useful.

**Example:**

```python
# Declaration and initialization in one step
age = 25

# You can also declare first (in some languages) and then initialize
# (In Python, this is uncommon, but for illustration)
score = None # A kind of "empty" placeholder
score = 100  # Now the first value is assigned (initialization)
```

- The big advantage of variables is that their content can change.
- You can replace the value at any time.

**Example of changing a value:**

```python
account_balance = 500
print(account_balance) # Output: 500

# You make a withdrawal
account_balance = account_balance - 50
print(account_balance) # Output: 450
```

### 📜 What are the rules and conventions for naming?

- To make your code easily readable by yourself and others, there are fixed rules and recommended style conventions for naming variables.

**Strict rules (Must be followed):**

1.  **No number at the beginning:** A variable name cannot begin with a number (`1_place` is wrong, `place_1` is right).
2.  **No spaces:** `my name` is invalid. Instead, use an underscore (`my_name`) or write the words together (`myName`).
3.  **No special characters:** Apart from the underscore (`_`), most special characters like `!`, `?`, `-`, `+`, `%` are forbidden.
4.  **No reserved keywords:** Every programming language has words with fixed meanings (like `if`, `for`, `while`, `class`). You can't use these as variable names.

**Conventions (Should be followed for good style):**

1.  **Descriptive names:** Choose names that describe the variable's content. `user_age` or `age_of_user` is much better than `x` or `a`.
2.  **Consistent style:** Decide on a style and stick to it. The two most common are:

| Style          | Description                                                                                                             | Example                           |
| :------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| **snake_case** | All words are lowercase and separated by an underscore `_`. Widely used in Python.                                      | `first_username`, `maximum_count` |
| **camelCase**  | The first word starts lowercase. Each subsequent word starts with a capital letter. Widely used in JavaScript and Java. | `firstUsername`, `maximumCount`   |

<br><br><br>

## 🔬 Handling Integer, Float, String, and Boolean Datatypes in Python

- A data type determines what kind of data a variable can store.
- This is important because the computer needs to know if it should do math, display text, or make a yes/no decision.
- Imagine you have different boxes: one for toy cars (numbers), one for books (texts), and one for a light bulb that can be on or off (yes/no).

### 🔢 Integer (Whole Numbers)

- An integer (often abbreviated as `int`) is a whole number without a decimal point. These can be positive, negative, or zero.
  - **Description:** Whole numbers.
  - **Examples:** `-10`, `-1`, `0`, `5`, `12345`.
  - **What is it for?** Counting things, age, number of items in a cart, points in a game. Whenever there are no "halves".

**Code example:**

```python
number_of_students = 30
temperature_in_celsius = -5
floor = 7
```

You can do all basic mathematical operations with integers:

```python
x = 10
y = 5

sum_ = x + y         # Result: 15
difference = x - y   # Result: 5
product = x * y      # Result: 50
quotient = x / y     # Result: 2.0 (note: division can result in a float!)
```

### 🌡️ Float (Decimal Numbers)

- A float is a number with decimal places.
- The name "floating-point" comes from the decimal point "floating" to different places to represent precision.

- **Description:** Numbers with decimals.
- **Examples:** `-3.14`, `0.5`, `1.0`, `99.99`, `2.71828`.
- **What is it for?** Anything needing precise measurement: prices (€19.99), heights (1.82 meters), scientific data, percentages.

**Code example:**

```python
item_price = 24.95
pi_approx = 3.14159
body_temperature = 36.6
```

- Floats are used for mathematical calculations just like integers, but with higher precision.

### 📝 String (Character Strings)

- A string is a sequence of characters. It can be a single letter, a word, a sentence, or even a whole text. Strings are always enclosed in quotes (either `"` or `'`).
  - **Description:** Text.
  - **Examples:** `"Hello world"`, `'Max Mustermann'`, `"I am 25 years old."`, `"12345"`.
  - **Important:** The string `"123"` is not the same as the number `123`. You can't do math with the string, you can only treat it as text.
  - **What is it for?** For usernames, passwords, addresses, messages, product descriptions – basically all text-based information.

**Code example:**

```python
first_name = "Anna"
last_name = 'Schmidt'
greeting = "Welcome to our website!"
```

- One of the most common string operations is **concatenation**, joining several strings together.

```python
full_name = first_name + " " + last_name  # Results in: "Anna Schmidt"
print(full_name)
```

### ✅ Boolean (Truth Values)

- A Boolean (often abbreviated as `bool`) is the simplest data type. It can only have two possible values: `True` or `False`.

- **Description:** A truth value – only yes or no (true or false).
- **Possible values:** `True`, `False`.
- **What is it for?** Booleans are the foundation of decisions and logic in programs. They answer yes/no questions: Is the user logged in? Is the light on? Does the player still have lives?

**Code example:**

```python
is_logged_in = True
has_paid = False
is_of_age = True
```

- Booleans are essential for control structures like `if` statements, allowing a program to take different paths depending on conditions.

```python
if is_logged_in == True:
    print("Welcome back!")
else:
    print("Please log in.")
```

# ⚙️ Basic Operators

- Imagine you’re working with numbers or other data in a program.
- You want to _do_ something with this data – add it, change it, store it somewhere.
- That’s exactly what operators are for.
- Operators are special symbols that tell the computer what action to perform.
- They’re like the verbs in programming.
- They take one or more values ("operands") and perform an operation on them.

<br><br><br>

## ➕➖✖️➗ Mathematical Operators

- You already know these operators from math class.
- They are the essential tools for all calculations in almost any programming language.
- With them, you do the four basic arithmetic operations.

<br><br><br>

### 1. ➕ Addition

- The addition operator is the plus sign (`+`).
- It is used to add two numbers together.
- The result is the sum of the two numbers.

- Imagine you have two variables, `apple` and `pear`, storing the number of fruits.

```python
apple = 5
pear = 3
totalFruit = apple + pear  # The result is 8
```

Here, the `+` operator takes the value of `apple` (5) and `pear` (3), adds them together, and the result (8) is stored in the new variable `totalFruit`.

<br><br><br>

### 2. ➖ Subtraction

- The subtraction operator is the minus sign (`-`).
- It’s used to subtract one number from another.

- Let’s say you have an account balance and withdraw some money.

```python
accountBalance = 100
withdrawal = 20
newBalance = accountBalance - withdrawal  # The result is 80
```

The computer takes the value of `accountBalance` (100), subtracts `withdrawal` (20), and stores the result (80) in `newBalance`.

<br><br><br>

### ✖️ Multiplication

For multiplication, we use the asterisk (`*`), not the `x` or dot as in school. This operator multiplies two numbers together.

Suppose you buy several of the same product at a fixed price.

```python
numberOfProducts = 4
pricePerProduct = 10
totalPrice = numberOfProducts * pricePerProduct  # The result is 40
```

- Here, `numberOfProducts` (4) is multiplied by `pricePerProduct` (10).
- The result (40) is stored in `totalPrice`.

<br><br><br>

### ➗ Division

- The division operator is the slash (`/`).
- It divides one number by another.
- Suppose you want to split a bill fairly among several friends.

```python
billAmount = 50
numberOfFriends = 5
sharePerPerson = billAmount / numberOfFriends  # The result is 10
```

- The `billAmount` (50) is divided by the `numberOfFriends` (5), and the result (10) is stored in the variable `sharePerPerson`.

- Here’s a summary table:

| Operator | Name           | Description                          | Example  | Result |
| :------- | :------------- | :----------------------------------- | :------- | :----- |
| `+`      | Addition       | Adds two values.                     | `12 + 3` | `15`   |
| `-`      | Subtraction    | Subtracts the right value from left. | `12 - 3` | `9`    |
| `*`      | Multiplication | Multiplies two values.               | `12 * 3` | `36`   |
| `/`      | Division       | Divides the left value by right.     | `12 / 3` | `4`    |

## Order of Mathematical Operations

- Just like in regular math, there is an order in which operations are performed. This is called the "order of operations" or "operator precedence".
- The order is:
  1. Parentheses `()`
  2. Multiplication `*` and Division `/` (from left to right)
  3. Addition `+` and Subtraction `-` (from left to right)
- For example:

```python
result = 10 + 2 * 3  # Multiplication first: 2 * 3 = 6, then addition: 10 + 6 = 16

print(result)  # Output: 16

# Using parentheses to change the order
result_with_parentheses = (10 + 2) * 3  # Parentheses first: 10 + 2 = 12, then multiplication: 12 * 3 = 36
print(result_with_parentheses)  # Output: 36
```

- Use the acronym `PEMDAS` (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction) to remember the order of operations.

<br><br><br>

## ✅ Assignment Operators

- Assignment operators are fundamentally important.
- Their main job is to assign a value to a variable.
- Think of them as a command that says: "Take this value and put it in this box (variable)!"

<br><br><br>

### 🟰 The Simple Assignment Operator (`=`)

- The equals sign (`=`) is the most basic assignment operator. **Important:** In programming, it does **not** mean "equals" as in math.
- It means "is assigned" or "store the value on the right in the variable on the left".
- Evaluation always happens from right to left.

**Example 1: A simple value**

```python
age = 25  # The value 25 is assigned to the box 'age'.
```

- Here, the number `25` is taken and stored in the variable `age`.

**Example 2: The result of a calculation**

- You can also directly assign the result of a mathematical operation to a variable.

```python
width = 10
height = 5
area = width * height  # First 10 * 5 is calculated (result: 50), THEN 50 is assigned to 'area'.
```

- So, the computer first calculates the right side (`width * height`) and then stores the final result in the variable on the left (`area`).

<br><br><br>

### ➕🟰 Combined Assignment Operators

- Often, you want to change the current value of a variable by performing a calculation with it, and then storing the result back in the same variable.

- Imagine you have a variable `points` with the value 100.
- Now you earn 10 points. The long way would be:

```python
points = 100
points = points + 10  # Take the current value of 'points' (100), add 10 (get 110), and store the result in 'points'.
```

- After this line, `points` has the value `110`.

- Since this is so common, there are shortcuts: combined assignment operators.
- They combine a math operation with the assignment.

The above code can be shortened to:

```python
points = 100
points += 10  # This is exactly the same as 'points = points + 10'
```

- This works for all basic arithmetic operations.
- Here is a table:

| Operator | Example  | Long Form   | Description                                         |
| :------- | :------- | :---------- | :-------------------------------------------------- |
| `+=`     | `x += y` | `x = x + y` | Adds `y` to `x` and saves it back into `x`.         |
| `-=`     | `x -= y` | `x = x - y` | Subtracts `y` from `x` and saves the result in `x`. |
| `*=`     | `x *= y` | `x = x * y` | Multiplies `x` by `y` and saves the result in `x`.  |
| `/=`     | `x /= y` | `x = x / y` | Divides `x` by `y` and saves the result in `x`.     |

- These combined operators make your code shorter, cleaner, and often easier to read once you get used to them.

# ↔️ Input and Output

<br><br><br>

## 🖥️ Simple Console Output with `print()`

### 📝 What is the `print()` function?

- Imagine you are writing a program and want the computer to show you a message, a result, or just a status.
- The `print()` function is your tool for that.
- It is the "mouthpiece" of your program.
- Everything you put in the parentheses of `print()` is output to the console (your code editor’s output window or the terminal).

**Example with text:**
If you want to print text, you must put it in quotation marks. These quotation marks tell Python: "Hey, this is plain text, a so-called string." You can use single (`'`) or double (`"`) quotes, but don't mix them.

```python
# Example with double quotes
print("Hello World!")

# Example with single quotes
print('This is a simple sentence.')
```

**Output:**

```
Hello World!
This is a simple sentence.
```

### 🧐 What can I print?

You are not limited to plain text. `print()` is very versatile.

#### Texts (Strings)

- As shown above, you can print any text.

#### Numbers

You can also print numbers directly. Note that numbers do **not** need quotation marks.

```python
print(123)       # An integer
print(3.14159)   # A floating-point number
print(-50)       # A negative number
```

**Output:**

```
123
3.14159
-50
```

#### Variables

- One of the most important uses is printing the contents of variables.
- A variable is like a container or a box with a name in which you store data. `print()` looks inside the box and shows you what's in it.

```python
# Let's create some variables
name = "Maria"
age = 28
height_in_meters = 1.72

# Now let's print the contents of the variables
print(name)
print(age)
print(height_in_meters)
```

**Output:**

```
Maria
28
1.72
```

#### More than one thing at once

- You can pass several things to `print()` at once.
- Just separate them with a comma `,`. Python then automatically puts a space between each item.

```python
name = "Alex"
age = 35

print("The name is:", name)
print(name, "is", age, "years old.")
```

**Output:**

```
The name is: Alex
Alex is 35 years old.
```

### 🛠️ Advanced Customization of `print()`

- You can control `print()`'s behavior with special "arguments".
- The two most important are `sep` (separator) and `end` (ending).

#### Changing the separator with `sep`

- By default, `print()` separates multiple items with a space.
- With `sep` (short for separator) you can specify your own separator.

| Code                                           | Explanation                                              | Output                  |
| :--------------------------------------------- | :------------------------------------------------------- | :---------------------- |
| `print("Apple", "Banana", "Cherry")`           | **Default:** The comma creates a space as separator.     | `Apple Banana Cherry`   |
| `print("Apple", "Banana", "Cherry", sep=", ")` | **Custom:** A comma plus space is used as separator.     | `Apple, Banana, Cherry` |
| `print("Day", "Month", "Year", sep="-")`       | **Custom:** A hyphen is used as separator.               | `Day-Month-Year`        |
| `print("Bread", "Butter", sep="")`             | **Custom:** No separator at all, words are concatenated. | `BreadButter`           |

#### Changing the end with `end`

- Normally, `print()` adds a newline at the end of every output.
- That means the next `print()` starts a new line.
- This is controlled by the invisible end code `\n` (newline character).
- The `end` argument lets you change this behavior.

| Code                                                                                  | Explanation                                                     | Output                                                |
| :------------------------------------------------------------------------------------ | :-------------------------------------------------------------- | :---------------------------------------------------- |
| `print("First line")`<br>`print("Second line")`                                       | **Default:** `end="\n"` by default. New line after first print. | `First line`<br>`Second line`                         |
| `print("No new line here... ", end="")`<br>`print("...continuing on the same line.")` | **Custom:** `end=""` means no newline after first print.        | `No new line here... ...continuing on the same line.` |
| `print("A word", end=" --- ")`<br>`print("Another word")`                             | **Custom:** Instead of a newline, three hyphens are inserted.   | `A word --- Another word`                             |

#### Formatting with f-Strings (Python 3.6+)

- f-Strings (formatted string literals) are a powerful way to create strings that include variable values directly within the text.
- To create an f-String, prefix the string with the letter `f` or `F` and include variables inside curly braces `{}`.

```python
name = "Sophie"
age = 30
print(f"{name} is {age} years old.")
```

**Output:**

```text
Sophie is 30 years old.
```

<br><br><br>

## ⌨️ User Input with `input()`

### ❓ What is the `input()` function?

- While `print()` is for your program to "speak", `input()` is for it to "listen".
- The `input()` function lets your program pause and prompt the user to type something using the keyboard.
- The program patiently waits until the user has entered something and pressed `Enter`.

### 📥 How do I capture the input?

- The user's input would simply disappear if you didn't store it in a variable.
- The `input()` function "returns" the entered text and you capture it with a variable.

```python
# The program asks for the user's name and stores the input in the variable 'username'
username = input("Please enter your name: ")

# Now we can work with the input
print("Hello,", username, "! Nice to meet you.")
```

If you run this code, this happens:

1. The text "Please enter your name: " appears on the console.
2. A blinking cursor appears after it. The program waits.
3. You type, for example, "Lisa" and press Enter.
4. The text "Lisa" is stored in the variable `username`.
5. The program continues and prints: `Hello, Lisa ! Nice to meet you.`

The text inside `input()` is optional for Python, but highly recommended. It’s called a "prompt." It tells the user what to do. Without it, the user would just see a blinking cursor and wouldn’t know what is expected.

### ⚠️ The most important thing: The data type!

- This is one of the most common beginner mistakes, so remember this well: **The `input()` function ALWAYS returns text (a string)!**

- No matter whether the user enters `Hello`, `123`, or `3.14` – for Python, after `input()` it’s just a string.

See this problem:

```python
age_str = input("How old are you? ")

# We try to increase the age by 1, to calculate the age next year.
# This will cause an error!
next_year = age_str + 1

print(next_year)
```

- If you enter `25` here, the program will crash with a `TypeError: can only concatenate str (not "int") to str`.
- Why? Because you are trying to add a number (`1`) to text (`"25"`).
- That’s like trying to add the word "apple" and the number 5 – it makes no sense.

### 🔄 Conversion of Data Types (Type Casting)

- To do math with the input, you have to explicitly tell Python to treat the text as a number.
- This process is called type conversion or "`type casting`".

#### From text to integer (`int()`)

- When you expect a whole number (like an age or a quantity), use the `int()` function.

```python
age_str = input("How old are you? ")

# Here we convert the text into an integer
age_number = int(age_str)

# Now we can do math!
next_year = age_number + 1

print("Next year you will be", next_year, "years old.")
```

If you enter `25`, everything works:

1. `input()` gives the string `"25"`.
2. `int("25")` converts it to the number `25`.
3. The calculation `25 + 1` results in `26`.
4. The output is correct.

- **Caution:** If the user enters "twenty five" or "abc", the program will crash with a `ValueError`, as those texts cannot be converted to a number.

#### From text to float (`float()`)

- When you expect a decimal (like a price, height, or temperature), use the `float()` function.

```python
height_str = input("How tall are you in meters? (e.g. 1.75) ")

# We convert the text into a float
height_number = float(height_str)

double_height = height_number * 2

print("Your double height would be:", double_height, "meters.")
```

- Here is an overview of the most important conversion functions:

| Function  | Description                                               | Example                                    |
| :-------- | :-------------------------------------------------------- | :----------------------------------------- |
| `int()`   | Converts a string (or a float) to an **integer**.         | `int("101")` becomes the number `101`.     |
| `float()` | Converts a string (or an integer) to a **float**.         | `float("3.14")` becomes the number `3.14`. |
| `str()`   | Converts a number (or another data type) to a **string**. | `str(42)` becomes the text `"42"`.         |

## Practice Exercises

1. Write a Python program that asks the user for their name and age, then prints a message saying how old they will be next year.
2. Create a program that calculates the BMI (Body Mass Index) of a person. The program should ask for weight in kilograms and height in meters, then compute and print the BMI.
3. Write a program that asks for a user's name and tells them how many characters are in their name.

4. Create a program that takes two numbers as input and prints their sum, difference, product, and quotient.
5. Write a program that asks the user for a temperature in Celsius and converts it to Fahrenheit
