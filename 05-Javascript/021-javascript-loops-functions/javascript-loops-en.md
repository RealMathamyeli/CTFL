# Loops – Fundamentals

- Imagine you're baking cookies and the recipe says: "Place 12 dough balls on the baking tray."
- You could write down the instruction 12 times: "Place one dough ball on the tray. Place one dough ball on the tray. Place one..."
- That would be very cumbersome and repetitive.

- In programming, it's just the same.
- Often you'll need to execute a particular instruction or a block of instructions again and again.
- That's exactly what loops are for!
- They are a basic tool for automating code and keeping it short and efficient.
- Instead of writing out the code multiple times, we simply tell the computer: "Do this so and so many times" or "Do this as long as a certain condition is met."

- Loops take the boring, repetitive chores off of us and are at the heart of many programs. Let's look at the three main types of loops in detail.

<br><br><br>

## Basic Loops in programming

- There are different kinds of loops, each best suited for different situations.
- The three fundamental types are:
  - the `for` loop,
  - the `while` loop, and
  - the `do-while` loop.

<br><br><br>

### The for Loop

- The `for` loop is like the cookie baker who knows from the start that he has to bake 12 cookies.
- You typically use it when you know the exact number of repetitions in advance.

**Syntax:**
It starts with the `for` keyword and consists of three parts, separated by semicolons:

```javascript
for (initialization; condition; increment / decrement) {
  // Code block to be repeated
}
```

**Example:**
Here’s a `for` loop that prints the numbers 0 to 9 to the console

```javascript
for (let i = 0; i < 10; i++) {
  console.log("Current number is: " + i);
}
```

Let’s break down these three parts:

1.  **Initialization:** `let i = 0;`

    - This part is **executed once** at the very beginning, before the loop starts.
    - Usually a counter variable (often `i` for "index" or "iterator") is created and given a start value (usually 0).

2.  **Condition:** `i < 10;`

    - **Before every** repetition (including the first), this condition is checked.
    - As long as the condition is `true`, the code block inside the loop is executed.
    - As soon as the condition is `false`, the loop ends and the program continues after the loop.

3.  **Increment/Decrement:** `i++`
    - This part is **executed at the end of every** repetition, _after_ the code block runs.
    - `i++` is a shorthand for `i = i + 1`. It increases the value of the counter variable by one
    - You could also use `i--` (decrement) or `i = i + 2` (increase in twos).

- The `for` loop is extremely useful for iterating over all elements in a list (an array).

<br><br><br>

### The while Loop

- The `while` loop is more flexible.
- You use it when you don't know in advance how many times the code block needs to be repeated.
- Instead, the loop continues **as long as a certain condition is true**.
- It's also called a **head-controlled loop** because the condition is checked _before_ each execution of the code block.
- If the condition is `false` from the start, the code inside the loop won’t run even once.

**Syntax:**

```javascript
while (condition) {
  // Code block to be repeated
}
```

- **Important:** Inside a `while` loop, you must make sure the condition eventually becomes `false`. Otherwise, you'll create an **infinite loop** and your program will crash!

**Example:**

- We can use a `while` loop to stop generating random numbers once the computer generates a number equal to 5.
- In order to know how many number of times we generated a number, we use a counter variable `counter`.

```javascript
let counter = 0; // Initialize counter
let randomNumber = Math.floor(Math.random() * 10); // Generate the first random number
while (randomNumber !== 5) {
  // Continue as long as the number is not 5
  console.log("Generated number: " + randomNumber);
  counter++; // Increase the counter
  randomNumber = Math.floor(Math.random() * 10); // Generate a new random number
}
console.log("Stopped! It took " + counter + " attempts to generate a 5.");
```

<br><br><br>

### The do-while Loop

- The `do-while` loop is a little sibling of the `while` loop.
- It is used in similar situations where you want to repeat a code block as long as a condition is true.
- The crucial difference: it's a **foot-controlled loop**, which means the code block is **executed first** and _then_ the condition is checked.
- This ensures that the code block is **executed at least once**, no matter if the condition is true or false.

**Syntax:**
Note the semicolon after the `while(...)` parentheses!

```javascript
do {
  // Code block that is executed at least once
} while (condition);
```

**Example:**
A classic use case is querying a user input that must be validated. We want to keep asking the user for a number until he enters a number greater than 10.

```javascript
let number = 0;

do {
  // This block will be executed at least once, no matter what.
  // In a real program, user input would be read here.
  // Here, we'll simulate it with a random number.
  number = Math.floor(Math.random() * 20); // a random number between 0 and 19
  console.log("The attempt was: " + number);
} while (number <= 10); // The loop repeats as long as the number is not greater than 10.

console.log("Success! The number " + number + " is greater than 10.");
```

Here, a number is "entered" first (`do`), and only then is it checked if it meets the condition (`while`). If it is 10 or less, the `do` block runs again.

<br><br><br>

## Usage and Use Cases

- Now that you know the syntax, let's look at when to use which loop.
- Picking the right loop type makes your code more readable and logical.

### Comparison of Loop Types

Here's a table that compares the three loops directly:

| Loop Type      | Main Feature                                           | When to use?                                                                                  |
| :------------- | :----------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| **`for`**      | Counter-controlled                                     | When the number of repetitions is known in advance                                            |
| **`while`**    | Head-controlled (condition checked _before_ execution) | When the number of repetitions is unknown and depends on a condition. The code may never run. |
| **`do-while`** | Foot-controlled (condition checked _after_ execution)  | When the code block must be run at least once, regardless of the condition.                   |

<br><br><br>

### Typical Use Cases

#### Use cases for the `for` loop

- **Iterating over a list of items:** You have a shopping list (an array) and want to print each item.
  ```javascript
  let shopping_list = ["milk", "bread", "eggs", "butter"];
  for (let i = 0; i < shopping_list.length; i++) {
    console.log("Buy: " + shopping_list[i]);
  }
  ```
- **Performing a mathematical calculation:** Computing the sum of numbers from 1 to 100.
- **Drawing graphics:** Draw 10 circles side by side on a screen.

#### Use cases for the `while` loop

- **Waiting for user interaction:** In a game, the main loop runs as long as the player hasn't clicked "quit".
  ```javascript
  let gameRunning = true;
  while (gameRunning) {
    // Logic for one frame of the game
    // If the player clicks "quit", set gameRunning to false.
  }
  ```
- **Processing data until none is left:** Reading a file line by line until the end of the file.
- **Reaching a target through approximation:** Running an algorithm until the result reaches a desired accuracy.

#### Use cases for the `do-while` loop

- **Showing a menu:** Displaying a menu with options to the user and having them choose until a valid option (e.g. a number between 1 and 4) is entered.
- The menu must be shown at least once.
  ```javascript
  let selection;
  do {
    console.log("--- MENU ---");
    console.log("1. Start game");
    console.log("2. Show high score");
    console.log("3. Quit");
    // selection = readUserInput(); // Read input
  } while (selection < 1 || selection > 3); // Repeat if the input is invalid.
  ```
- **Prompting for a password:** Asking the user for a password. If it's wrong, the prompt is repeated. The first prompt must always occur.
  <br><br><br>
