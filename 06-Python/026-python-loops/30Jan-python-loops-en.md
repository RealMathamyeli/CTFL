# Control Structures, Conditions, and Loops in Python

Understanding control structures

- Significance and usefulness of control structures in everyday programming
- Difference between sequential and branched execution

Conditions with if, elif, else

- Structure and syntax of an if statement
- Linking conditions with elif and else

Comparison and logical operators

- Using comparison operators (==, !=, <, >, <=, >=)
- Using logical connectors (and, or, not) in conditions

Loops in Python

- for loops: use cases and syntax
- while loops: how they work and typical use cases

Break and Continue

- Using break to exit loops early
- Using continue to proceed to the next loop iteration

Practical use cases

- Control flow for input validation
- Controlling program loops based on user interaction

# 🧠 Understanding Control Structures

<br><br><br>

## 🛠️ Significance and Usefulness of Control Structures in Everyday Programming

Imagine you're writing a computer program. Without control structures, your program would be like a very simple recipe where you have to work through every step from top to bottom, without exception and without repetition. For example, you'd have to write:

1.  Take an ingredient.
2.  Cut the ingredient.
3.  Put it in the bowl.
4.  Take the next ingredient.
5.  Cut the ingredient.
6.  Put it in the bowl.

... and so on. That would be extremely cumbersome and not at all flexible.

This is exactly where **control structures** come into play. They are the brain of your program. They allow you to control the "flow" of execution—that is, deciding _which_ section of code runs _when_ and _how often_.

Put simply, control structures are the tools that give your program intelligence. They enable your code to react to different situations, make decisions, and repeat tasks.

The usefulness in everyday programming is huge:

- **Making decisions:** Your program can react to user input or certain states. For example: _If_ the user enters the correct password, _then_ grant access. _Otherwise_, show an error message. Without this structure, nobody could log in.
- **Repeating tasks (loops):** Instead of copying code a hundred times, you can tell the program to repeat a task _until_ a condition is met. For example: Process _each_ entry in a long customer list. This saves a lot of time and makes the code shorter and more readable.
- **Flexibility and dynamics:** Programs become interactive and dynamic. A game could check _if_ the player still has health points. An online shop checks _if_ an item is in stock. A weather app checks _if_ the temperature is below 0 degrees to display a frost warning.
- **Error handling:** You can check _if_ an error has occurred during an operation. _If so_, you can respond instead of letting the program crash.

Control structures are not just "nice to have"; they are the absolute foundation of any non-trivial programming. They are the switches that guide the train (your program) onto the right tracks so that it reaches its destination.

<br><br><br>

## 🚦 Difference between Sequential and Branched Execution

To understand how powerful control structures are, we need to look at the difference between the "normal" program flow and a controlled flow.

### 🚶‍♂️ Sequential Execution

This is the standard way a computer reads code: line by line, from top to bottom, without skipping or repeating a single line. It's like a straight road without any turns. Each command is executed exactly once, in the order you've written it.

**Analogy: A Checklist**
Imagine a simple morning checklist:

1.  Get up.
2.  Brush your teeth.
3.  Make coffee.
4.  Have breakfast.

You work through this list strictly from point 1 to 4. There's no decision. You always brush your teeth, even if you're out of toothpaste. You always make coffee, even if you would prefer tea. The process is rigid and predictable.

**Example in code (simplified):**

```python
print("Good morning!")
ask_for_name()
read_name()
print("Hello, " + name)
```

This program will _always_ execute these four steps in exactly this order.

### 🔀 Branched Execution

This is where the magic happens. Branched execution means that the program arrives at a point where it has to make a decision—a fork in the road. Based on a **condition** (a question answerable with "true" or "false"), the program chooses one of two or more possible paths. Only a specific code block will be executed, while the other is completely ignored.

The most important structure for this is the **if-else statement**.

**Analogy: A Fork in the Road**
You stand at a fork. A sign says: "**If** you want to go to the lake, turn left. **Otherwise** (if you want to go to the mountain), turn right."
You will never take both paths at once. You make a decision based on a condition (your destination) and choose one path. The other path remains untaken.

**Example in code (simplified):**

```python
ask_for_age()
read_age()

IF age >= 18 THEN
    print("You are an adult and may watch the movie.")
ELSE
    print("Unfortunately, you are too young for this movie.")
```

Here, the program decides based on the entered age. It will print _either_ one message _or_ the other, but never both. The program flow has thus "branched."

### 📊 Comparison at a glance

To make the difference clear, here's a table:

| Characteristic       | 🚶‍♂️ Sequential Execution                                        | 🔀 Branched Execution                                         |
| :------------------- | :------------------------------------------------------------- | :------------------------------------------------------------ |
| **Flow**             | Strictly linear, from top to bottom. Each command is run once. | Non-linear. The program makes decisions at "junctions."       |
| **Predictability**   | The flow is always exactly the same and rigid.                 | The flow depends on conditions (e.g. user input, data).       |
| **Flexibility**      | Very low. The program can't react to different situations.     | Very high. The program becomes dynamic and "intelligent."     |
| **Analogy**          | A recipe, a checklist.                                         | A fork in the road, a yes/no question, a switchman.           |
| **Typical keywords** | (No special control keywords)                                  | `if`, `else`, `else if`, `switch`, `case`                     |
| **Result**           | Always produces exactly the same result.                       | Produces different results depending on which path is chosen. |

<br><br><br>

# 💡 Conditions with if, elif, else

Imagine you're writing a program. This program shouldn't always just take the same path but should be able to react differently in various situations. It should make decisions. This is where conditions come into play. With `if`, `elif`, and `else` you're giving your program the ability to act like a switchman on a train track and guide the code down the correct paths.

<br><br><br>

## 🤔 The Structure and Syntax of an if Statement

### ### What is an `if` statement?

The `if` statement is the simplest form of a condition. You can imagine it as a question that can only be answered "yes" or "no" (in programming, `True` or `False`).

The basic idea: **IF** a certain condition is met, **THEN** execute a certain code block. If the condition is not met, this code block is simply skipped.

Imagine you look out the window: **If** it's raining, **then** you take an umbrella. That's exactly the logic of an `if` statement.

### ### The syntax: How do you build an `if` statement?

The structure is always the same in Python and is very strictly regulated:

1.  **The keyword `if`:** This is how it always starts. You're telling Python: "Attention, here comes a condition!"
2.  **The condition:** This is the actual "question" you're asking. The result must always be either `True` or `False`. For example `age > 18` or `name == "Peter"`.
3.  **The colon `:`:** You _always_ have to put a colon after the condition. It signals the end of the condition line and begins the corresponding code block.
4.  **The indented code block:** The code to be executed _if_ the condition is true must start on the next line and be indented. Indentation (usually 4 spaces) is extremely important in Python! It shows which code belongs to the `if` statement.

Let's look at a concrete example:

```python
age = 20

# This is the start of the if statement.
# The condition is: Is the value in the variable 'age' greater than or equal to 18?
# Since 20 >= 18, the condition is TRUE.
if age >= 18:
    # Because the condition is true, this indented code block is executed.
    print("You are an adult.")
    print("You may drive a car and vote.")

# This code is NOT indented anymore.
# So it no longer belongs to the if-statement and always runs,
# regardless of whether the condition was true or false.
print("Age check complete.")
```

If `age` had been `16` in the example, the condition `16 >= 18` would be false. The indented block would have been completely skipped and the program would only have output "Age check complete".

### ### Comparison Operators: Tools for Your Conditions

To formulate meaningful conditions, you need comparison operators. Here are the most important ones:

| Operator | English meaning     | Example (if `a = 10`, `b = 20`) | Example Result |
| :------- | :------------------ | :------------------------------ | :------------- |
| `==`     | Is equal            | `a == 10`                       | `True`         |
| `!=`     | Is not equal        | `a != 20`                       | `True`         |
| `>`      | Is greater than     | `a > b`                         | `False`        |
| `<`      | Is less than        | `a < b`                         | `True`         |
| `>=`     | Is greater or equal | `a >= 10`                       | `True`         |
| `<=`     | Is less or equal    | `b <= 10`                       | `False`        |

**Important note:** Never confuse `==` (the comparison: "are they equal?") with `=` (the assignment: "store this value"). That's a very common beginner's mistake!

<br><br><br>

## 🔗 Linking Conditions with elif and else

A single `if` statement is already useful, but what if you want to respond to the case that the condition is _not_ met? Or if you want to check several different conditions in turn? This is where `else` and `elif` come into play.

### ### 🤷‍♂️ The "otherwise" case: `else`

`else` is your backup plan. It offers an alternative if the `if` condition was `False`. You can directly translate it as "otherwise" or "else".

- `else` is always tied to a preceding `if` statement.
- `else` has **no condition of its own**. It just catches anything not covered by the `if` condition.
- Just like with `if`, a colon follows `else`, and then an indented code block.

Let's expand our age example:

```python
age = 15

# The first check:
if age >= 18:
    # This block runs if age is 18 or more.
    print("You are an adult.")
# If the above if-condition was FALSE (which it is for 15)...
else:
    # ... then THIS block runs.
    print("You are still a minor.")

print("Age check complete.")
```

Here, there are only two possible outcomes: Either the `if` block runs or the `else` block does. One of them will always run.

### ### 🧐 Multiple Possibilities: `elif`

But what if you have more than just two states? For example: child, teenager, adult. With just `if` and `else` this gets complicated. That's what `elif` is for, which is short for "else if".

With `elif` you can build a chain of conditions. Python checks this chain from top to bottom and executes the code block of the **first true condition** it finds. After that, the rest of the chain (the further `elif`s and `else`) are skipped.

The order looks like this:

1.  **`if`**: Always begins the chain. Checked first.
2.  **`elif`**: Any number of `elif` blocks can follow. Each has its own condition and is checked only if all previous `if` and `elif` conditions were `False`.
3.  **`else`**: Can optionally be at the end. This block runs if _not a single_ of the previous `if` or `elif` conditions was `True`. It's the "catchall" for any leftover cases.

Let's look at a grading system as an example:

```python
points = 78

# 1st check: Are the points 90 or more? No (78 is not >= 90).
if points >= 90:
    print("Grade: Very Good")

# 2nd check (since the first was false): Are the points 80 or more? No (78 is not >= 80).
elif points >= 80:
    print("Grade: Good")

# 3rd check (since the second was false): Are the points 65 or more? Yes (78 is >= 65).
# --> THIS CONDITION IS TRUE!
elif points >= 65:
    # The code in this block runs.
    print("Grade: Satisfactory")
    # The whole if-elif-else chain is immediately exited after this.

# 4th check: WON'T EVEN BE REACHED.
elif points >= 50:
    print("Grade: Sufficient")

# The "otherwise" case: WON'T EVEN BE REACHED.
else:
    print("Grade: Fail")

print("Grading complete.")
```

In this example, "Grade: Satisfactory" is output. Although `78 >= 50` would also be true, that `elif` block is never even checked because a previous condition was already `True`. Python always takes the first hit in the chain.

# 🤔 Comparison and Logical Operators

<br><br><br>

## ⚖️ Comparison Operators: The Great Compare

Imagine you're a detective and need to compare two clues or pieces of evidence. Comparison operators do exactly this in programming: They compare two values. The result of this investigation is always one of two simple answers: **True** or **False** (in programming, `True` or `False`). There is no other answer. These `True`/`False` values are called Booleans.

Let’s take a look at each "comparison tool" more closely. Here’s a quick overview:

| Operator | Name                  | Meaning                                | Example  | Result |
| :------: | :-------------------- | :------------------------------------- | :------: | :----: |
|   `==`   | Equal                 | Is value A exactly equal to value B?   | `5 == 5` | `True` |
|   `!=`   | Not equal             | Is value A different from value B?     | `5 != 3` | `True` |
|   `<`    | Less than             | Is value A less than value B?          | `3 < 5`  | `True` |
|   `>`    | Greater than          | Is value A greater than value B?       | `5 > 3`  | `True` |
|   `<=`   | Less than or equal    | Is value A less than or equal to B?    | `5 <= 5` | `True` |
|   `>=`   | Greater than or equal | Is value A greater than or equal to B? | `5 >= 3` | `True` |

<br>

### 🤝 The Equal Operator (`==`)

This operator acts like a precise scale. It checks if the value on the left is exactly equal to the value on the right.
Very important: Do not confuse it with the simple equals (`=`), which is used to assign values to variables (like `age = 25`). The double equals (`==`) on the other hand asks a question: "Are you two equal?"

**Examples:**

- `10 == 10` asks: "Is 10 equal to 10?" The answer is `True`.
- `10 == 5` asks: "Is 10 equal to 5?" The answer is `False`.
- `'hello' == 'hello'` asks: "Is the text 'hello' equal to the text 'hello'?" The answer is `True`.
- `'hello' == 'Hello'` asks: "Is the text 'hello' equal to the text 'Hello'?" The answer is `False`, because the capitalization is different.

### 🚫 The Not Equal Operator (`!=`)

This is the exact opposite of the Equal operator. The exclamation point stands for "not." So you’re asking: "Are you **not** equal?"

**Examples:**

- `10 != 5` asks: "Is 10 not equal to 5?" The answer is `True`, since they are indeed different.
- `10 != 10` asks: "Is 10 not equal to 10?" The answer is `False`, since they are the same.

### 🤏 The Less Than Operator (`<`)

This operator checks if the value on the left is strictly less than the value on the right. Imagine a number line: the number further to the left is smaller.

**Examples:**

- `7 < 10` asks: "Is 7 less than 10?" The answer is `True`.
- `10 < 7` asks: "Is 10 less than 7?" The answer is `False`.
- `7 < 7` asks: "Is 7 less than 7?" The answer is `False`, because they are equal and not strictly less.

### 💪 The Greater Than Operator (`>`)

This is the counterpart to Less Than. It checks if the left value is strictly greater than the right.

**Examples:**

- `10 > 7` asks: "Is 10 greater than 7?" The answer is `True`.
- `7 > 10` asks: "Is 7 greater than 10?" The answer is `False`.
- `10 > 10` asks: "Is 10 greater than 10?" The answer is `False`, because they are equal.

### 🟰 The Less Than or Equal Operator (`<=`)

This operator is a combination. It replies `True` if the left value is **either less than** the right value **or if they are exactly equal**. It is satisfied if either condition is met.

**Examples:**

- `4 <= 5` asks: "Is 4 less than or equal to 5?" The answer is `True`, since 4 is less.
- `5 <= 5` asks: "Is 5 less than or equal to 5?" The answer is `True`, since 5 equals 5.
- `6 <= 5` asks: "Is 6 less than or equal to 5?" The answer is `False`.

### 🔝 The Greater Than or Equal Operator (`>=`)

This operator works just like Less Than or Equal but in the other direction. It returns `True` if the left value is **either greater than** the right or if they are exactly equal.

**Examples:**

- `8 >= 5` asks: "Is 8 greater than or equal to 5?" The answer is `True`, since 8 is greater.
- `8 >= 8` asks: "Is 8 greater than or equal to 8?" The answer is `True`, since they are equal.
- `7 >= 8` asks: "Is 7 greater than or equal to 8?" The answer is `False`.

<br><br><br>

## 🧠 Logical Operators: Clever Combinations

Now that we can make individual comparisons (which yield `True` or `False`), we often want to link these results. Imagine you're a bouncer at a club. You have multiple rules: "The person must be over 18 **AND** have a ticket." Or: "For a discount, you must be a student **OR** over 65." Logical operators are made for such combinations. They take `True`/`False` values and return a single combined `True`/`False` at the end.

### ➕ The `and` operator

The `and` operator is the strict bouncer. He only says "yes" (`True`) if **all** conditions he links are `True`. As soon as even one condition is `False`, the combined result is `False`.

Think of the example: To get dessert, you must eat your veggies (`True`) **and** clean your room (`True`). Only if both are done there’s dessert (`True`). If you only eat veggies but don't clean your room, you get no dessert (`False`).

Here is the "truth table" for this:

| Condition A | Condition B | A `and` B  |
| :---------: | :---------: | :--------: |
|   `True`    |   `True`    | **`True`** |
|   `True`    |   `False`   |  `False`   |
|   `False`   |   `True`    |  `False`   |
|   `False`   |   `False`   |  `False`   |

**Code example:**

```python
veggies_eaten = True
room_cleaned = False
if veggies_eaten and room_cleaned:
    print("Dessert is allowed.")
else:
    print("No dessert.")
```

### ⚖️ The `or` operator

The `or` operator is the relaxed bouncer. He only needs **at least one** of the linked conditions to be `True` for the combined result to be `True`. Only when **all** are `False` is the total result `False`.

Think of the discount example: You get the discount if you're a student **or** a senior. If you’re both, of course you get it too. Only if you’re neither, you don’t get the discount.

The truth table for `or`:

| Condition A | Condition B |  A `or` B   |
| :---------: | :---------: | :---------: |
|   `True`    |   `True`    |   `True`    |
|   `True`    |   `False`   |   `True`    |
|   `False`   |   `True`    |   `True`    |
|   `False`   |   `False`   | **`False`** |

**Code example:**

```python
is_student = False
is_senior = True
if is_student or is_senior:
    print("Discount granted.")
else:
    print("No discount.")
```

### 🔄 The `not` operator

This is the simplest of all. It's like a light switch: It simply inverts any single Boolean value. `True` becomes `False` and `False` becomes `True`. This is used to check whether something is **not** the case.

**Examples:**

- `not True` becomes `False`.
- `not False` becomes `True`.

**Code example:**
```python
door_is_open = False

if not door_is_open:
    print("Please close the door.")
else:
    print("The door is already closed.")
```

This is especially useful for readable code. Instead of writing `(door_is_open == False)`, you can usually just write `not door_is_open`, which reads almost like a normal sentence: "if the door is not open".

# 🔄 Loops in Python

Imagine you have to do a task again and again. For example, send 100 emails or call every single contact in your phone book. Doing this manually would be very tedious and time-consuming. In programming, we have a powerful tool for precisely such repetitive tasks: **loops**.

A loop is a control structure that allows you to execute a code block as often as a specific condition is met, or until all elements in a collection have been processed. They automate repetitive tasks and make your code shorter, cleaner, and more efficient. Python mainly offers two types of loops: the `for` loop and the `while` loop. Let's take a closer look at both.

<br><br><br>

## 📜 The for loop

The `for` loop is your tool of choice when you have a fixed number of repetitions or want to iterate over the elements of a sequence (like a list, string, or dictionary). You can think of it like checking off a checklist: You go through each item on the list one by one, do the related task, and when the list is empty, you're done. You know in advance how many items there are on the list.

<br><br><br>

### ### ⚙️ Syntax and Operation

The basic structure of a `for` loop in Python is always the same:

```python
for variable in sequence:
    # Code block executed for each element in the sequence
    # This block must be indented!
    print(variable)
```

Let's break it down:

- **`for`**: The keyword that starts the loop.
- **`variable`**: This is a placeholder name you choose. In each loop iteration, this variable takes on the value of the _current_ element from the sequence. If you have a list of fruits, the variable might be called `fruit`.
- **`in`**: Another keyword linking `variable` to `sequence`.
- **`sequence`**: This is the object you want to iterate over. It could be a list, tuple, string, dictionary, or a `range` object.
- **`:`**: The colon at the end of the line is important. It tells Python that now comes the code block to be repeated.
- **Indented code block**: All lines below the `for` line that are indented (usually by 4 spaces) belong to the loop. This code is executed once for each element in the sequence.

**A simple example:**

Imagine we have a shopping list and want to print out each item individually.

```python
shopping_list = ["Apples", "Milk", "Bread", "Cheese"]

# The for loop goes through the list item by item
for item in shopping_list:
    # In each iteration, the variable 'item' has a different value
    # 1st run: item = "Apples"
    # 2nd run: item = "Milk"
    # ... and so on.
    print(f"I still need to buy {item}.")

print("Shopping list complete!") # This code runs after the loop
```

<br><br><br>

### ### 🎯 Use Cases

`for` loops are extremely versatile. Here are the most common use cases:

#### Iterate over a list

That's the classic case, which we just saw. You go through every element of a list.

```python
numbers = [1, 2, 3, 4, 5]
total = 0
for number in numbers:
    total = total + number # Add the current number to the total
print(f"The sum of all numbers is: {total}")
```

#### Iterate over a string

A string is essentially a sequence of characters. So you can loop through it letter by letter with a `for` loop.

```python
word = "Python"
for letter in word:
    print(letter)
```

Output:

```
P
y
t
h
o
n
```

#### Using the `range()` function

Sometimes you want to run a code block a certain number of times, without a pre-existing list. The `range()` function is perfect for this. It generates an immutable sequence of numbers.

| Function                   | Description                                                    | Example                              | Result              |
| :------------------------- | :------------------------------------------------------------- | :----------------------------------- | :------------------ |
| `range(stop)`              | Generates numbers from 0 to (but not including) `stop`.        | `for i in range(5): print(i)`        | `0, 1, 2, 3, 4`     |
| `range(start, stop)`       | Generates numbers from `start` to (not including) `stop`.      | `for i in range(2, 6): print(i)`     | `2, 3, 4, 5`        |
| `range(start, stop, step)` | Generates numbers from `start` to `stop` in `step` increments. | `for i in range(0, 11, 2): print(i)` | `0, 2, 4, 6, 8, 10` |

```python
# Do something 3 times
for i in range(3):
    print(f"This is run number {i+1}")
```

#### Iterate over dictionaries

With dictionaries, you have several ways to loop through.

1.  **Over keys (default):**

    ```python
    capitals = {"Germany": "Berlin", "France": "Paris", "Italy": "Rome"}
    for country in capitals:
        print(f"The country is: {country}") # Only prints the keys
    ```

2.  **Over the values with `.values()`:**

    ```python
    capitals = {"Germany": "Berlin", "France": "Paris", "Italy": "Rome"}
    for city in capitals.values():
        print(f"The capital is: {city}") # Only prints the values
    ```

3.  **Over keys and values at the same time with `.items()`:** This is often most useful.
    ```python
    capitals = {"Germany": "Berlin", "France": "Paris", "Italy": "Rome"}
    for country, city in capitals.items():
        print(f"The capital of {country} is {city}.")
    ```

<br><br><br>

## ⏳ The while loop

The `while` loop is different. Instead of having a fixed number of runs, a `while` loop runs as long as **a certain condition is true**. You can imagine it as a guard at a door. He lets you walk through and do a task over and over, as long as his condition is met (e.g., "as long as it is daylight outside"). You don’t necessarily know in advance how many times the loop will run. It could be 5 times or 1000 times.

<br><br><br>

### ### ⚙️ Operation and Syntax

The structure is also very simple:

```python
while condition:
    # Code block that is executed as long as the condition is True
    # This block must be indented!
    # IMPORTANT: Something inside should influence the condition!
```

- **`while`**: The keyword starting the loop.
- **`condition`**: An expression that evaluates as `True` or `False` (e.g., `x < 10`, `answer != "yes"`).
- **`:`**: The colon again begins the code block.
- **Indented code block**: This code is repeated. The crucial point: Within this block, usually something must happen that will eventually make the `condition` `False`. Otherwise, you’ve created an **infinite loop**, and your program will be stuck here forever!

**A simple counting example:**

```python
# 1. Initialize the counter variable
counter = 1

# 2. The loop condition is checked
while counter <= 5:
    print(f"The counter is: {counter}")

    # 3. IMPORTANT: Change the variable affecting the condition!
    counter = counter + 1 # or shorter: counter += 1

print("Loop ended.")
```

In this example, the condition `counter <= 5` is checked before every run. Since we increase `counter` by 1 in each iteration, after the fifth run (`counter` becomes 6), the condition is `False` and the loop stops.

<br><br><br>

### ### 💡 Typical Use Cases

`while` loops are perfect for situations where the number of repetitions is unknown and depends on external factors or calculations.

#### Waiting for a specific user input

A classic case is asking the user for an input until it’s valid.

```python
answer = ""
# As long as the answer isn’t "yes" or "no," keep asking.
while answer.lower() not in ["yes", "no"]:
    answer = input("Do you agree? (yes/no): ")

print("Thanks for your valid answer!")
```

#### Game or event loops

In games or interactive programs, the program often runs in a main loop until the user decides to end it.

```python
game_running = True
lives = 3

while game_running:
    print("You are playing the game...")

    # Imagine something is happening in the game here
    # For example, the player loses a life
    entry = input("Press 'q' to quit or another key to continue: ")

    if entry.lower() == 'q':
        game_running = False # This makes the condition False and ends the loop

print("Game over.")
```

#### Processing data until none remains

Imagine you have a list of tasks and want to always do the first task, then remove it from the list, until the list is empty.

```python
tasks = ["Check email", "Write report", "Make coffee"]

while len(tasks) > 0: # As long as list length is greater than 0...
    current_task = tasks.pop(0) # Take and remove the first item
    print(f"Now doing: {current_task}")

print("All tasks for today are done!")
```

<br><br><br>

## 📊 for vs. while: A Comparison

To help you decide which loop to use when, here’s a direct comparison:

| Criterion          | `for` loop                                                                                                     | `while` loop                                                                                                        |
| :----------------- | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| **When to use?**   | When you have a **known number** of repetitions or want to iterate over every element in a **given sequence**. | When the number of repetitions is **unknown** and depends on a **condition** that changes during program execution. |
| **Typical phrase** | "For every element in this list..."                                                                            | "As long as this condition is true..."                                                                              |
| **Structure**      | `for element in sequence:`                                                                                     | `while condition:`                                                                                                  |
| **Main risk**      | Rarely dangerous.                                                                                              | **Infinite loops!** If the condition never becomes `False`, the loop runs forever.                                  |
| **Example**        | Print all names in a list.                                                                                     | Show a menu until the user chooses "quit."                                                                          |

# 🔄 Break and Continue

Imagine you’re working through a long to-do list, one task after another. Sometimes, you might not want to go through the whole list. Maybe you found what you were looking for and can stop. Or maybe a particular task isn’t relevant right now, so you want to skip it and move directly to the next one.

That’s exactly what the `break` and `continue` statements are for in programming. They give you more control over how a loop runs (that is, working through your to-do list).

<br><br><br>

## 🛑 The `break` statement: The Emergency Exit from the Loop

`break` is like an emergency stop button for your loop. As soon as the program encounters a `break`, the loop it is in is **completely and immediately terminated**. It doesn’t matter if the loop condition would actually allow more runs. The program then jumps directly to the first line _after_ the loop.

### 🤔 What does `break` do exactly?

- It immediately ends the **entire** loop.
- Any code inside the loop _after_ the `break` is not executed.
- All further trips through the loop are skipped as well.
- Execution of the program continues after the loop block.

### 👨‍🏫 A Clear Example

Imagine you have a box of numbered balls and you're looking for the ball with number 5. As soon as you find it, there’s no need to search further, right? You can stop. That's what `break` does.

```python
# A list of numbers representing our box of balls
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print("Searching for number 5...")

# We check the list number by number
for number in numbers:
    print(f"Checking current number: {number}")

    # If we find the number 5...
    if number == 5:
        print("Hit! I found the 5.")
        # ... we exit the loop immediately with 'break'.
        break
        # Any code here would never be reached.

# This code runs after the loop (after 'break').
print("Search is over. The program continues here.")
```

**Step by step:**

1. The loop starts and checks `1`. `1` isn’t `5`, so it goes on.
2. Checks `2`, `3`, and `4` in the same way.
3. Then comes `5`. The `if` condition `number == 5` is true.
4. The text "Hit! I found the 5." is printed.
5. The program hits `break`. **BAM!** The `for` loop ends immediately.
6. Numbers `6`, `7`, `8`, `9`, and `10` are **never** checked.
7. The program continues at `print("Search is over...")` and executes it.

### 💡 When should you use `break`?

`break` is extremely useful when you want to stop early due to a condition.

| Use case                 | Description                                                                                                                                                   |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **🔎 Finding something** | Searching a list or data structure for the **first** occurrence of a specific element. Once found, further searching is unnecessary.                          |
| **🗣️ User input**        | You wait in an infinite loop (`while True`) for user input. The loop is only exited with `break` once the user types a specific word (like "exit" or "quit"). |
| **🚨 Error handling**    | If a critical error occurs inside a loop that makes further processing impossible or pointless, use `break` to exit.                                          |
| **✅ Validation loops**  | You repeatedly ask the user for input until it is valid. Once a valid input is made, you leave the loop with `break`.                                         |

<br><br><br>

## ⏩ The `continue` Statement: Skip and Move On

`continue` is different from `break`. It's not an emergency stop button, but more like a "skip" switch. If the program hits `continue`, it **ends only the current iteration** of the loop and jumps directly to the **beginning of the next iteration**. The loop itself keeps running as long as its condition is satisfied.

### 🤔 What does `continue` do exactly?

- It only ends the **current** loop iteration.
- The rest of the code in the current loop run is skipped.
- The loop jumps to the next iteration and checks the loop condition again (for `while` loops) or takes the next element (for `for` loops).
- The loop as a whole is **not** ended.

### 👨‍🏫 A Clear Example

Imagine you have a list of fruits, and you should only wash the ripe fruits. Unripe fruits (say, all those with "unripe" in the name) should be left alone and you move on to the next fruit.

```python
# A list of fruits, some are not ready
fruits = ["Apple", "Banana (unripe)", "Cherry", "Mango", "Orange (unripe)"]

print("Wash only the ripe fruits...")

# Go through the list, fruit by fruit
for fruit in fruits:

    # If "unripe" is in the fruit's name...
    if "(unripe)" in fruit:
        print(f"--> {fruit} is skipped.")
        # ... we skip the rest of this run with 'continue'
        # and continue with the next fruit.
        continue

    # This code only runs for ripe fruits,
    # since for unripe fruits it is skipped by 'continue'.
    print(f"Washing {fruit}... 🧼")

print("\nAll fruits checked!")
```

**Step by step:**

1. The loop starts with "Apple". The `if` condition is false, so "Washing Apple... 🧼" is printed.
2. Next: "Banana (unripe)". The `if` condition `"(unripe)" in fruit` is true.
3. The text "--> Banana (unripe) is skipped." is printed.
4. The program hits `continue`. **ZAP!** The rest of that run (`print(f"Washing {fruit}... 🧼")`) is skipped.
5. The program immediately goes to the start of the loop and takes the next element: "Cherry".
6. For "Cherry" the `if` is false and the fruit is washed.
7. Same for "Mango".
8. For "Orange (unripe)" the washing step is again skipped.
9. Once all elements have been checked, the loop ends normally.

### 💡 When should you use `continue`?

`continue` is perfect for skipping certain elements or cases within a loop but letting the loop continue.

| Use case               | Description                                                                                                                                                                  |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **🗑️ Filter data**     | You process a data list and only want to work on elements meeting certain criteria. Use `continue` to skip the rest (e.g., process only positive numbers, ignore negatives). |
| **🚫 Invalid entries** | You're reading lines from a file. Blank lines or lines starting with a comment sign (`#`) should be ignored. `continue` is ideal.                                            |
| **⚙️ Special cases**   | Sometimes an element in a loop needs no further processing. Instead of using a complex `if-else`, check the special case and use `continue` early to jump to the next item.  |

<br><br><br>

## ⚖️ The Big Difference: `break` vs. `continue` Compared

The key to understanding is what exactly is being ended: the whole loop or just the current iteration.

| Criterion           | 🛑 `break` (The Stop Button)                                                                                                               | ⏩ `continue` (The Skip Button)                                                                          |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Effect**          | Ends the **entire loop** immediately.                                                                                                      | Ends only the **current iteration** of the loop.                                                         |
| **Loop afterwards** | The loop is **not** continued. Code runs after the loop.                                                                                   | The loop **continues** with the next iteration (if the condition is still true).                         |
| **Analogy**         | You're reading a book. You find the info you need on page 50. You close the book (`break`) and put it away. You don't read up to page 300. | You're reading a book. Page 51 is a blank ad page. You skip it (`continue`) and keep reading on page 52. |

# 💡 Practical Use Cases

<br><br><br>

## 🛡️ Control Flow in Input Validation

Imagine your program is a diligent bouncer at a club. Not everyone is allowed in. The bouncer (your program) must check whether a guest (the user's input) meets the rules. **Control flow** is the exact plan the bouncer follows mentally. Depending on what the guest says or shows, the bouncer responds differently and steers the guest in a certain direction.

That is exactly what we do in programming during **input validation**. We ensure that data entered by a user is valid, meaningful, and in the correct format before our program continues to use it. If we don't, this can cause errors, crashes, or even security problems.

### 🤔 ### Why is this so important?

Imagine a simple app that asks for the user’s age to check if they’re an adult.

- **What if the user enters "hello" instead of a number?** The program would crash if it tries to do math with the text "hello".
- **What if the user types `-10`?** Negative age doesn’t exist. That's logically invalid.
- **What if the user types `200`?** That's a number, but almost certainly an invalid entry.

Input validation catches all these problems and ensures that only clean and correct data is processed.

### 🚦 ### Flowchart (Control Flow) of Typical Input Validation

Let’s see the step-by-step process for how a program would validate an input (for example, age).

1.  **Prompt for input:** The program asks the user to enter their age.
    - `"Please enter your age:"`

2.  **Read the input:** The program gets the user's input. Important: At this point, the input is usually only text (a "string"), even if the user typed `18`.

3.  **First decision: Is it even a number?**
    - The program checks if the entered text can be converted into a number.
    - **YES:** Great, continue.
    - **NO:** (e.g. when "hello" is entered): The program gives an error, like `"Please enter a valid number."` and prompts again for input. The normal flow is interrupted and we return to step 1.

4.  **Second decision: Is the number in the permitted range?**
    - Now that we know we have a number, check the logical conditions. Let’s say the age must be between 0 and 120.
    - **Test 1:** Is age `>= 0`?
    - **Test 2:** Is age `<= 120`?
    - **BOTH TRUE:** Perfect! The input is valid. The program can proceed (e.g., check if `>= 18`).
    - **EITHER OR BOTH FALSE:** (e.g., input `-10` or `200`): The program gives a specific error such as `"Age must be between 0 and 120."` and again returns to step 1.

This constant checking and returning until a correct input is made is usually done with a loop. The loop runs until a variable, say `isInputValid`, is set to true.

### 📊 ### Example Table: Control Flow for Age Query

| User input | Test 1: Is it a number? | Result | Test 2: In [0, 120]?         | Result | Final Program Status        |
| :--------- | :---------------------- | :----- | :--------------------------- | :----- | :-------------------------- |
| `25`       | ✅ Yes                  | OK     | ✅ `25 >= 0` and `25 <= 120` | OK     | Input accepted ✅           |
| `-10`      | ✅ Yes                  | OK     | ❌ `-10 >= 0` is false       | Error  | Error message, new input 🔄 |
| `150`      | ✅ Yes                  | OK     | ❌ `150 <= 120` is false     | Error  | Error message, new input 🔄 |
| `Hello`    | ❌ No                   | Error  | - (not checked)              | -      | Error message, new input 🔄 |
| `(empty)`  | ❌ No                   | Error  | - (not checked)              | -      | Error message, new input 🔄 |

So the control flow acts like an intelligent filter system, letting only "good" data through and catching "bad" data by prompting the user again.

<br><br><br>

## 🔄 Controlling Program Loops Based on User Interaction

A **program loop** is like a robot doing a task over and over again. But what if the robot shouldn’t stop by itself? What if _you_ as the user should decide when the robot should finish? This is exactly what user-controlled loops are for.

Instead of making a loop run a fixed number of times (like "do this 10 times"), or until a technical condition is met (like "search until the file is found"), we let the loop keep running until the user explicitly says: "Stop!".

This is the foundation for almost all interactive programs—from simple text menus in the console to complex applications with graphical user interfaces. The program sits in a "waiting loop" (often called the "event loop" or "main loop") and awaits your commands.

### 🤔 ### Why is this useful?

Think of a calculator app. After you do a calculation (like 5 + 3), the program shouldn’t just end. You probably want to do another calculation right after. So the program must keep looping and, after each calculation, ask you (or wait for) what you want to do next. Only when you click an "exit" button or type "exit" does the loop end.

### 📜 ### The Classic Menu Example

A very frequent use case is a text-based menu in a console app. The program shows the user a list of options and waits for their choice.

**The flow looks like this:**

1.  **Loop start:** The program starts a loop that could go on forever (e.g., `while (true)`).
2.  **Show menu:** Within the loop, the menu is shown to the user each time:
    - `--- MAIN MENU ---`
    - `1. Run option A`
    - `2. Run option B`
    - `3. Show help`
    - `q. Exit program`
    - `Your choice:`
3.  **Wait for input:** The program pauses and waits until the user types something and presses Enter.
4.  **Evaluate input:** The program reads the input (e.g., `1`, `2`, `3` or `q`) and decides what to do. This is usually done with an `if-else-if` chain or a `switch` statement.
    - If the user types `1`, the function for option A is called.
    - If user types `2`, the function for option B is called.
    - ... and so on.
5.  **The crucial check:** There is a special input that serves as an "exit condition." In our example, that’s `q`.
    - If the user types `q`, the program runs a `break` statement. This immediately exits the loop.
    - If the user types anything else, the appropriate action is performed and the loop returns to step 2 and shows the menu again.

### ⚙️ ### The Logic Behind Loop Control

The key is a variable or condition that is influenced by the user.

| Loop type                      | Description                                                                                                                                                                                              | Typical Use Case                                                                                                |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **`while` loop**               | The loop runs as long as a condition is true. The condition is checked _before_ each run. `while (choice != "q") { ... }`                                                                                | Good if the exit condition is known from the start. For example, a game: `while (player.isAlive()) { ... }`     |
| **`do-while` loop**            | The loop runs as long as a condition is true. But the code in the loop is run _at least once_, since the condition is only checked _at the end_.                                                         | **Perfect for menus!** You want to display the menu at least once before you ask the user if they want to stop. |
| **Infinite loop with `break`** | You start a deliberate infinite loop (`while (true)`). Inside, you ask the user for input and check it. If input equals the exit condition (e.g. `if (choice == "q")`), you leave the loop with `break`. | Very flexible and easy to read. It's immediately clear that only a user action inside can end the loop.         |

With this technique, you give the user full control of the program flow. The program becomes an interactive tool that responds to commands instead of just blindly following a preset path from start to finish.
