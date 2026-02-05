# Python Errors and File Handling

Error Handling in Python
- Basics of exceptions and types of errors
- Using try and except for error control

Simple File Handling
- Opening, reading and writing files with open()
- Using context managers: the with statement for file access<br><br><br>

# 🛡️ Error Handling in Python

Imagine you're writing a program. It's like building with Lego bricks: most of the time, everything fits together nicely. But sometimes you try to put a brick where it doesn't belong, or a brick is missing entirely. Programming is quite similar. An error isn't necessarily a bad thing; often, it's an important sign from your program that something didn't go as planned. Error handling is your way to be prepared for these unexpected situations and to prevent your program from simply "crashing." Instead of everything falling apart, you elegantly catch the error and decide what should happen next.

<br><br><br>

## 💥 Basics of Exceptions and Types of Errors

In Python, we refer to errors that occur during program execution as **exceptions**. An exception is an event that interrupts the normal flow of a program. Python "raises" an exception when it encounters a problem. If this exception isn't "caught," the program terminates with an error message.

You can basically distinguish between two main types of errors:

### 🧐 Syntax Errors

These are the simplest errors. You can think of them like grammar or spelling mistakes in a sentence. Python reads your code before running it, and if the "grammar" is wrong, it doesn't even understand what you want. The program won't even start.

A classic example is a missing colon after an `if` statement or a `for` loop:

```python
name = "Alex"
if name == "Alex"  # Missing colon here!
    print("Hello Alex!")
```

If you try to run this code, Python will immediately complain and report a `SyntaxError`. These errors are usually easy to fix, as the error message often points directly to the problematic line.

### 💣 Runtime Errors (Runtime Errors / Exceptions)

These errors are trickier. Your code is grammatically correct (no `SyntaxError`), but while the program is running, something unexpected happens.

Imagine you have a recipe (your program). The recipe is perfectly written. But one instruction says, "Take an egg from the fridge." You open the fridge, but there are no eggs left. The recipe itself isn't wrong, but the situation during execution causes a problem. That's a runtime error.

Here are some of the most common runtime errors (exceptions) in Python:

| Emoji | Exception Name        | Explanation                                                                                               | Example Code                                   |
| :---: | --------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| ➕    | `TypeError`           | Occurs when an operation is applied to an inappropriate data type.                                         | `print("Hello" + 5)` (adding string and number)  |
| 🔢    | `ValueError`          | Occurs when a function receives an argument of the correct type but an inappropriate value.                | `int("Hello")` (convert text to number)        |
| ❓    | `NameError`           | Occurs when a variable or function is used that hasn't been defined yet.                                  | `print(my_variable)` (variable doesn't exist) |
| 📈    | `IndexError`          | Occurs when you try to access an index in a list that doesn't exist.                                      | `my_list = [1, 2, 3]; print(my_list[5])`  |
| 🔑    | `KeyError`            | Similar to `IndexError`, but for dictionaries. Occurs when a key doesn't exist in the dictionary.         | `my_dict = {"a": 1}; print(my_dict["b"])`     |
| ➗    | `ZeroDivisionError`   | Occurs when you try to divide a number by zero.                                                           | `result = 10 / 0`                            |

These errors will crash your program, *unless* you catch them. That's exactly what `try` and `except` are for.

<br><br><br>

## 👷 Using try and except for Error Control

Imagine a trapeze artist at the circus. The daring jump is the "risky" part of your code. The safety net underneath is your `try...except` block. If the jump succeeds, everything is great. But if the artist falls, the net catches them and nothing bad happens.

The basic structure looks like this:

```python
try:
    # "Risky" code that COULD raise an exception.
    # The trapeze jump.
    pass
except:
    # This code ONLY runs if an error occurs in the try block.
    # The safety net.
    pass
```

### 🧱 The `try` Block

Here you write code that you suspect could cause an error. For example, if you want to convert user input to a number or open a file that might not exist.

### 🥅 The `except` Block

This block is your "Plan B." It is ignored if everything goes well in the `try` block. But if an exception occurs in the `try` block, Python immediately stops executing that block and jumps to the matching `except` block. There you can respond to the error, e.g., print a friendly error message, use a default value, or retry the operation.

**A practical example:** We ask the user for their age and want to convert it to a number. What happens if the user enters "Hello" instead of "25"?

```python
try:
    # Try to convert the input to an integer
    user_input = input("Please enter your age: ")
    age = int(user_input)
    print(f"In one year you will be {age + 1} years old.")

except ValueError:
    # This block runs if int() raises an error,
    # because the input wasn't a valid number (e.g., "Hello").
    print("That wasn't a valid number! Please enter digits only.")
```
Here we catch a `ValueError` specifically. That's very good practice! A general `except:` without the error type would also work, but it's like a giant net that catches everything. It's better to know *what kind* of error you expect so you can respond specifically.

### 🤹 Handling Multiple Errors

What if your `try` block can cause different types of errors? You have two options:

#### 1. Multiple `except` Blocks

You can write a separate `except` block for each expected error type.

```python
my_list = [10, 2, 0]

try:
    index = int(input("Enter an index (0, 1 or 2): "))
    divisor = my_list[index]
    result = 100 / divisor
    print(f"The result is: {result}")

except ValueError:
    # If the input is not a number
    print("Error: You must enter a number!")

except IndexError:
    # If the index is out of range (e.g., 5)
    print("Error: The index is invalid! Choose 0, 1, or 2.")

except ZeroDivisionError:
    # If dividing by zero (at index 2)
    print("Error: Division by zero is not allowed!")
```

#### 2. Group Multiple Exceptions in One Block

If you want the same response for different error types, you can group them in a tuple.

```python
try:
    # ... risky code ...
    pass
except (ValueError, TypeError):
    # This runs if either a ValueError OR a TypeError occurs
    print("An input or type error occurred.")
```

### ✅ The `else` Block

Sometimes you want to execute code, but only if *no* error occurred in the `try` block. That's what the `else` block is for. It's executed directly after the `try` block, but only if no `except` block was triggered.

```python
try:
    age_str = input("Enter your age: ")
    age = int(age_str)
except ValueError:
    print("Invalid input.")
else:
    # This part ONLY runs if the conversion to int() succeeded.
    print(f"You are {age} years old.")
    print("Input was successful!")
```
This is useful to keep the code that depends on the success of the `try` block separate from the `try` block itself.

### 🧹 The `finally` Block

Imagine you're opening an important file or making a connection to a database. No matter if everything goes well or an error occurs — you absolutely *must* close that connection at the end to free up resources. That's exactly what `finally` is for.

The code in a `finally` block is **always** executed, no matter what:
*   If the `try` block is successful.
*   If an error occurs in the `try` block and is caught by an `except`.
*   If an error occurs in the `try` block and is **not** caught by any `except` (the program will still crash afterwards, but `finally` will still run).

```python
file = None  # Define variable outside
try:
    print("Opening a file...")
    file = open("important_data.txt", "w")
    # Intentionally cause an error
    result = 10 / 0
    file.write("This line will never be written.")

except ZeroDivisionError:
    print("An error occurred: division by zero!")

finally:
    # This block ALWAYS gets executed.
    print("Cleanup operations are being performed...")
    if file:
        file.close()
        print("File has been safely closed.")
```
In this example, the file is opened, then a `ZeroDivisionError` occurs. The `except` block runs. And at the very end, the `finally` block runs, which ensures the opened file is closed.

Here's a table visualizing the flow:

| Scenario                                         | `try` runs | `except` runs | `else` runs | `finally` runs |
| ------------------------------------------------ | :--------: | :-----------: | :---------: | :------------: |
| No error in `try` block                          |     ✅     |      ❌       |     ✅      |      ✅        |
| A matching error occurs in `try` block           | Partial ✅ |      ✅       |     ❌      |      ✅        |
| A non-matching error occurs in `try` block       | Partial ✅ |      ❌       |     ❌      |      ✅        |# 📂 Simple File Handling

Imagine your computer has two types of memory: short-term memory (RAM) and long-term memory (the hard drive). When you run a Python program, all variables and data are stored in the short-term memory. Once the program ends, this memory is erased — everything is gone!

To save data permanently, so that you can reuse it later, you need the long-term memory. This is where files come in. Files are like notebooks on your hard drive into which your program can write information — and read it back later. File handling is the process of working with these "notebooks."

<br><br><br>

## 📖 Opening, Reading, and Writing Files with `open()`

The very first step to working with a file is to "open" it. In Python, we use the built-in `open()` function for this. You can think of it as going to a filing cabinet (your hard drive) and pulling out a specific file (a document) to work on it.

The `open()` function needs at least two important pieces of information (arguments):

1.  **Filename:** Which "notebook" do you want to open? (e.g., `"my_notes.txt"`)
2.  **Mode:** What do you want to do with the notebook? Just read, write into, or add something to it?

The mode is crucial because it determines what operations you can perform on the file.

### 📜 Overview of the Most Important Modes

Here's a table explaining the most common modes. This is really important, so look at it carefully!

| Mode      | Shortcut | Description | What if the file doesn’t exist?           |
| :-------- | :------- | :---------- | :---------------------------------------- |
| **Read**      | `'r'`     | **r**ead. Opens a file for reading only. You can't change anything. This is the default mode if you don't specify one. | The program crashes with an error.          |
| **Write**     | `'w'`     | **w**rite. Opens a file for writing. **Warning:** If the file already exists, its entire content will be deleted! | The file is created anew.                   |
| **Append**    | `'a'`     | **a**ppend. Opens a file to add to its end. Existing content is preserved.           | The file is created anew.                   |

Let’s look at this in practice.

### 📝 Writing a File (Mode 'w')

Suppose we want to create a shopping list and save it in a file called `shopping_list.txt`.

```python
# 1. Open the file in write mode ('w').
#    Python returns a "file object" that we store in a variable.
#    We call the variable "file" here.
file = open('shopping_list.txt', 'w')

# 2. Now we can use the .write() method to write text to the file.
#    The '\n' at the end creates a new line, like pressing Enter.
file.write('Milk\n')
file.write('Eggs\n')
file.write('Bread\n')

# 3. VERY IMPORTANT: Close the file!
#    It's like putting the file back in the drawer.
#    If you forget, data may be lost or the file may be locked.
file.close()
```

After running this code, you'll find a new file `shopping_list.txt` in the same folder as your Python script. If you open it, you'll see:

```
Milk
Eggs
Bread
```

### 📖 Reading a File (Mode 'r')

Great, we've saved our list. Now we want to see it again in another part of our program. For that, we open the file in read mode (`'r'`).

```python
# 1. Open the file in read mode ('r').
file = open('shopping_list.txt', 'r')

# 2. Read the entire contents of the file at once and store it in a variable.
#    The .read() method reads everything from start to end.
all_content = file.read()

# 3. Important: Always close the file after reading!
file.close()

# 4. Print the content read.
print("--- Full Content: ---")
print(all_content)
```

There are other ways to read:

*   `.readline()`: Reads only a single line.
*   `.readlines()`: Reads all lines and returns them as a list of texts (strings).

Here's an example using `.readlines()`:

```python
file = open('shopping_list.txt', 'r')

# Read all lines as a list
all_lines = file.readlines()

file.close()

print("--- Content as list of lines: ---")
print(all_lines) # Output: ['Milk\n', 'Eggs\n', 'Bread\n']

# We can now go through the list
print("\n--- Each line separately: ---")
for line in all_lines:
    # .strip() removes invisible characters like the line break '\n'
    print(line.strip())
```

### ➕ Appending to a File (Mode 'a')

Oh, we forgot the butter! We want to add it to the list without deleting the rest. The append mode (`'a'`) is perfect for this.

```python
# 1. Open the file in append mode ('a').
file = open('shopping_list.txt', 'a')

# 2. Add something new to the end of the file.
file.write('Butter\n')

# 3. As always: close the file.
file.close()
```

If you now run the read code from above again, you'll see that `shopping_list.txt` now looks like this:

```
Milk
Eggs
Bread
Butter
```

<br><br><br>

## 🤝 Using Context Managers: The `with` Statement

You saw above how I kept emphasizing the importance of `file.close()`. What happens if you forget it? Or what if your program crashes *before* it reaches `file.close()`? The file could remain open, which can cause issues.

That’s exactly why Python provides a more elegant and safer solution: the `with` statement.

A `with` statement is a **context manager**. Picture it as a reliable assistant. You tell them: “Assistant, please open this file and give it to me under the name `file`.” The assistant does so, and you work with the file inside an indented block. The trick is: as soon as you leave this block (whether normally or because of an error), the assistant **automatically** and **guaranteed** ensures the file is properly closed. You never have to worry about `file.close()` again!

### ✅ Writing with `with`

Let’s look at the earlier write example, but this time with the magic of `with`:

```python
# The "with open(...) as file:" takes care of everything.
# "file" here is again our variable for the file object.
# Everything that is indented is done while the file is open.
with open('shopping_list_new.txt', 'w') as file:
    file.write('Apples\n')
    file.write('Bananas\n')
    # A little magic happens here...

# As soon as the code block ends (the indentation stops),
# the file is automatically closed. No file.close() necessary!
# The file is now safely saved.
```

This code is not only shorter and more readable, but above all much safer.

### ✅ Reading with `with`

Of course, the same applies to reading:

```python
# Opening the file with the with statement
with open('shopping_list_new.txt', 'r') as file:
    # Read the content while the block is active
    content = file.read()

# Out here, the file is already closed.
# But we can still work with the variable 'content'.
print("--- Safely read with 'with': ---")
print(content)
```

**Conclusion about the `with` statement:**
It’s the modern, safer, and recommended way to work with files in Python. Make it a habit to **always** use the `with` statement for file access. It takes away your worry about closing the file completely and makes your code more robust.