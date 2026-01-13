# Variables, Data Types, Operators, and Console in JavaScript

Variables and Data Types

- Definition and use of let and const
- Overview and usage of String, Number, Boolean, null, undefined
- String methods

Operators and Working with the Console

- Basics of arithmetic and logical operators
- Working with the browser console: outputting code and simple debugging

## Variables and Data Types

- Programming is all about storing and manipulating data.
- Programming languages provide us with tools to do this effectively.
- When building applications we need to store different kinds of information: user names, ages, prices, settings, and much more.
- We then need to perform operations on this data: calculations, comparisons, text manipulations, and so on.
- In JavaScript (and other programming languages), we use **variables** to store data and **data types** to define what kind of data we are dealing with in other to know how to work with it.

### What are Variables?

- Imagine you are cooking and you have lots of ingredients.
- To keep things organized, you put each ingredient in `a separate container` and write with a marker `what’s inside`: "Sugar", "Flour", "Salt" and so on.

- In programming, it’s very similar.
- A **variable** is like such a container.
- It’s a container in your computer’s memory where you can store `a value`.
- To make sure you know later what’s in which container, you give it a unique name (e.g., `userAge` or `greetingMessage`).

### What is a Data Type?

- Just like in cooking, where ingredients can be of different kinds (powder, liquid, spicy, sour), in programming, values can also be of different **data types**.
- The data type tells the computer `what kind of value` is stored in the variable.
- That’s important, because you can perform calculations with numbers, but not text.
- The computer needs to know what type of data it’s dealing with.

<br><br><br>

## Declaring Variables: `let` and `const`

- When you want to create a new "container" (a variable) in your program, this is called **"declaring"**.
- When you give it a value for the first time, this is called **"assigning"** a value.
- In modern JavaScript, you mainly use two keywords for this:
  - `let` and `const`.

### `const` (Constant)

- The word `const` stands for "constant".
- A constant is a variable whose value **must never change after its first assignment**.
- Think of it as information carved in stone.
- For example, your birth date or the value of Pi (3.14159...)— can be stored as constants because they don’t change.

#### When to Use `const`:

- You use `const` when you are sure that a variable’s value will remain the same throughout the program.

**Example:**

```javascript
// Set the birth year. It is constant.
const birthYear = 1995;

// Your name does not usually change either.
const myName = "Alex";

// The VAT rate is set by law.
const vatRate = 0.19;

// Trying to change the value (will cause an error!):
// birthYear = 2001; // TypeError: Assignment to constant variable.
```

- The computer will complain and display an error if you try to change a value carved in stone.
- This is a good thing—it protects you from accidental mistakes.

### `let` (Variable)

- The word `let` allows you to declare a variable whose value you **can change later**.

- Think of it like a scoreboard in a game. The score changes constantly.

#### When to Use `let`:

- You use `let` when you already know the value will change as your program runs.

**Example:**

```javascript
// The score at the start of the game.
let score = 0;
console.log("Current score: " + score); // Output: 0

// The player earns 50 points.
score = score + 50;
console.log("Current score: " + score); // Output: 50

// The player finds a bonus.
score = score * 2;
console.log("Current score: " + score); // Output: 100
```

- Here you see that the value of the `score` variable could be changed multiple times without any problems.

#### `let` vs. `const`: When to Use Which?

- **Always start with `const`. Only if you realize you need to reassign the variable later, change it to `let`.**

- This way, your code is safer and easier to understand, because you and others can see at a glance which values can change and which cannot.

| Property              | `const` (Constant)                      | `let` (Variable)                      |
| :-------------------- | :-------------------------------------- | :------------------------------------ |
| **Value can change?** | ❌ No, not after the first assignment.  | ✅ Yes, value can be changed anytime. |
| **Best Practice**     | Default choice. Always use if possible. | Only use if change is necessary.      |
| **Analogy**           | Birthday carved in stone.               | Changeable scoreboard in a game.      |

#### Basic Rules for Naming Variables in JavaScript

- Variable names should be written in `camelCase` (e.g., `userName`, `totalPrice`).
- They can only contain letters, numbers, underscores, or dollar signs. No spaces or special characters.
- Variable names are case-sensitive (`myVar` and `myvar` are different).
- They should be descriptive and meaningful.
- Avoid using reserved words (like `let`, `const`, `if`, `else`, etc.) as variable names.

<br><br><br>

## The Basic Data Types

- Let’s now look at which types of "ingredients" we can put in our `let` and `const` containers.
- Javascript has several built-in data types.
- Each datatype has "built-in" methods (tools) to work with them.
- The most important ones are:
  - `String` (text)
  - `Number`
  - `Boolean` (true/false)
  - `null` (nothing)
  - `undefined` (undefined)
  - `Object` (complex data structures, covered later)
- To find out which datatype a variable has, you can use the `typeof` operator followed by the variable name. `typeof variableName`.

### String (Text)

- A string is simply text—a chain of characters.
- These can be letters, numbers, punctuation marks or symbols.
- To tell the computer it’s a string, you enclose the text in quotation marks.

* Single quotes: `'Hello World'`
* Double quotes: `"Hello World"`
* Backticks: `` `Hello World` `` (these have special capabilities)

**Example:**

```javascript
const firstName = "Maria";
const message = "I am currently learning JavaScript!";
const city = `Berlin`;

console.log(message); // Output: I am currently learning JavaScript!
console.log(typeof firstName); // Output: "string"
```

#### Useful String Methods

- Methods are tools to work with the datatypes.
- with string methods you can:
  - make it longer,
  - cut parts off,
  - turn it into uppercase, etc.
- Important: the original string is not changed. You always get back a new, modified piece.

- Here are some of the most important tools (methods):

| Method/Property             | 📜 Description                                                                                                        | 🛠️ Example                                                                                                                                                |
| :-------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`.length`**               | This is a **property**, not a method. It returns the number of characters in the string (spaces included!).           | `const text = "Hello";`<br>`console.log(text.length); // 5`                                                                                               |
| **`.toUpperCase()`**        | Turns the entire string to UPPERCASE.                                                                                 | `const text = "I am quiet";`<br>`const louderText = text.toUpperCase();`<br>`// louderText is "I AM QUIET"`                                               |
| **`.toLowerCase()`**        | Turns the entire string into lowercase.                                                                               | `const text = "I AM SHOUTING";`<br>`const quieterText = text.toLowerCase();`<br>`// quieterText is "i am shouting"`                                       |
| **`.trim()`**               | Removes whitespace at the beginning and end of the string. Super helpful for form input!                              | `const input = "   max.mustermann@mail.de   ";`<br>`const cleanInput = input.trim();`<br>`// cleanInput is "max.mustermann@mail.de"`                      |
| **`.includes(searchText)`** | Checks whether a string contains another string. Returns `true` or `false`.                                           | `const sentence = "The quick brown fox.";`<br>`console.log(sentence.includes("fox")); // true`<br>`console.log(sentence.includes("cat")); // false`       |
| **`.slice(start, end)`**    | Cuts out a part of the string and returns it. First parameter is the start index, second (optional) is the end index. | `const text = "JavaScript";`<br>`const part1 = text.slice(0, 4); // "Java"`<br>`const part2 = text.slice(4); // "Script"`                                 |
| **`.replace(what, with)`**  | Searches for text in the string and replaces the **first** occurrence.                                                | `const greeting = "Good morning, World!";`<br>`const newGreeting = greeting.replace("morning", "evening");`<br>`// newGreeting is "Good evening, World!"` |

#### Number

- The Number data type represents numbers (both whole numbers and decimals).
- These can be whole numbers (e.g., 10, -5, 0) or decimals (e.g., 3.14, -0.5).
- Unlike strings, numbers do _not_ require quotes.
- You can perform mathematical operations with numbers: addition, subtraction, multiplication, division, and more.

**Example:**

```javascript
const age = 28;
const price = 19.99;
const temperature = -5.5;

const numApples = 12;
const numBananas = 8;
const totalFruit = numApples + numBananas; // Calculation!
console.log(totalFruit); // Output: 20
```

#### Boolean (Truth Value)

- A Boolean is the simplest data type.
- It can only be one of two states: `true` or `false`.
- No quotation marks are used.
- Booleans are super important for making decisions in code.
- For example: "Is the user logged in? `true`." or "Is the light on? `false`."

**Example:**

```javascript
const isAdult = true;
const hasPaid = false;
const isAdmin = true;
```

#### `null` (Nothing)

- `null` is a special value.
- It means: "There is intentionally nothing here".
- As a programmer, you set a variable to `null` to express explicitly that it has no value.

**Example:**

- Imagine you have an app where a user can select a profile picture.
- At first, the user hasn’t selected any.

```javascript
let selectedProfilePicture = null;

// ...later in the code, the user selects a picture...
selectedProfilePicture = "sunset_picture.jpg";
```

#### `undefined` (Undefined)

- `undefined` means that a variable has been declared (created), but hasn't yet been assigned any value.
- This happens mostly automatically, not by you.
- The computer uses `undefined` to indicate: "I know this variable exists, but I don’t know what value it should have yet."

**Example:**

```javascript
let username;

console.log(username); // Output: undefined
```

- Here the "container" `username` was created, but nothing put in yet. The computer says: "I know this name, but don’t know what should be there. It is undefined."

**Analogy:** `undefined` is like a brand new, empty picture frame you just took out of the box. Nothing has ever been put in it.

| Type        | Meaning                                 | Who sets the value?          | Analogy                      |
| :---------- | :-------------------------------------- | :--------------------------- | :--------------------------- |
| `null`      | "Intentionally empty"                   | The Programmer               | Frame with "No picture" note |
| `undefined` | "Accidentally empty"/"Not assigned yet" | The computer (automatically) | Brand new, empty frame       |

<br><br><br>

## Operators and Working with the Console

- In JavaScript (and other programming languages), **operators** are special symbols or keywords that perform operations on values and variables.
- We have
  - Arithmetic Operators (for math),
  - comparison operators (for comparing values), and
  - logical operators (for combining true/false values).

<br><br><br>

### Basics of Arithmetic and Logical Operators

- Think of operators as the verbs in a language.
- They tell the computer what to do with values (like numbers or text).
- Just as you would say "add 5 and 3", you tell the computer `5 + 3`.
- We divide them into different groups, depending on what task they perform.

<br><br><br>

### Arithmetic Operators

- These are the operators you know from math class.
- They carry out basic mathematical calculations.
- They take two numbers and return a new number as a result.

- Here’s an overview of the most important arithmetic operators in JavaScript:

| Operator | Name           | Example  | Result | Explanation                                                               |
| :------- | :------------- | :------- | :----- | :------------------------------------------------------------------------ |
| `+`      | Addition       | `10 + 5` | `15`   | Adds two numbers.                                                         |
| `-`      | Subtraction    | `10 - 5` | `5`    | Subtracts the second number from the first.                               |
| `*`      | Multiplication | `10 * 5` | `50`   | Multiplies two numbers.                                                   |
| `/`      | Division       | `10 / 5` | `2`    | Divides the first number by the second.                                   |
| `%`      | Modulo         | `10 % 3` | `1`    | Returns the remainder of a division. (10 / 3 = 3 with remainder 1)        |
| `**`     | Exponentiation | `2 ** 3` | `8`    | Raises the first number to the power of the second (2 to the power of 3). |

- An important point is **operator precedence** (order of operations), which you know as "multiplication/division before addition/subtraction".
- Multiplication (`*`) and division (`/`) are always carried out before addition (`+`) and subtraction (`-`).
- If you want to change the order, you must use parentheses `()`, just like in math.

- Example: `5 + 3 * 2` gives `11` (because `3 * 2` is calculated first).
- But if you write `(5 + 3) * 2`, the result is `16` (because the parenthesis is calculated first).

<br><br><br>

### Comparison Operators

- Comparison operators are like questions you ask the computer.
- The answer is always either "yes" (`true`) or "no" (`false`).
- You use them to compare two values.
- The result is always a **Boolean** value (`true` or `false`).

| Operator | Meaning            | Example     | Result  | Explanation                                                              |
| :------- | :----------------- | :---------- | :------ | :----------------------------------------------------------------------- |
| `==`     | Equal              | `5 == "5"`  | `true`  | Checks if the values are equal. **Warning:** tries to convert types!     |
| `===`    | Strictly equal     | `5 === "5"` | `false` | Checks if values **and** types are equal. **Usually the better choice!** |
| `!=`     | Not equal          | `5 != 8`    | `true`  | Checks if the values are not equal.                                      |
| `!==`    | Strictly not equal | `5 !== "5"` | `true`  | Checks if values **or** types are different.                             |
| `>`      | Greater than       | `10 > 5`    | `true`  | Checks if the left is greater than the right.                            |
| `<`      | Less than          | `10 < 5`    | `false` | Checks if the left is less than the right.                               |
| `>=`     | Greater or equal   | `5 >= 5`    | `true`  | Checks if the left is greater than or equal to the right.                |
| `<=`     | Less or equal      | `4 <= 5`    | `true`  | Checks if the left is less than or equal to the right.                   |

- The difference between `==` and `===` is very important.
- Imagine you have a “5” as a number and a “5” as text. For `==` this is the same.
- For `===` it is not, because one is a number, the other is text (a "string").
- In 99% of cases, you should use `===` and `!==` to avoid unexpected bugs.

<br><br><br>

### Logical Operators

- Logical operators are used to link `true` or `false` values together.
- They are the building blocks for decisions in your code.

| Operator | Name | Description                                              | Example                                                                 |
| :------- | :--- | :------------------------------------------------------- | :---------------------------------------------------------------------- | -------------------------------------------------- | --------- | --- | ---------------------------------------------- |
| `&&`     | AND  | Returns `true` if **both** sides are `true`.             | `(5 > 3) && (10 < 20)` is `true` because both comparisons are true.     |
| `        |      | `                                                        | OR                                                                      | Returns `true` if **at least one** side is `true`. | `(5 > 10) |     | (10 < 20)`is`true` because the second is true. |
| `!`      | NOT  | Flips a value: turns `true` into `false` and vice versa. | `!(5 > 10)` is `true` because `5 > 10` is `false` and the `!` flips it. |

For `&&` (AND), think of a condition like: "I'll go to the movies if I have a ticket **and** if I have time." If either is missing, it doesn’t work.

For `||` (OR), think of: "For breakfast I drink coffee **or** tea." It’s fine if only one is true.

<br><br><br>

## Working with the Browser Console

- The browser console is the most important tool for any web developer.
- It’s like a cockpit or control center for your website.
- You can open it in any modern browser, usually by pressing `F12` or by right-clicking on the page and selecting "Inspect".
- In the new window, find the "Console" tab.

Here you can:

- Output messages and values from your code.
- See error messages your code produces.
- Directly run and test JavaScript code.

<br><br><br>

### Outputting Code: `console.log()` and Friends

- To understand what’s happening in your code, you need to be able to look inside.
- Suppose you want to know what value a variable has at a particular moment.
- That’s what the `console.log()` command is for.
- It is like a window into your code.

- The basic command is `console.log()`.
- Everything you put in the parentheses is displayed in the console.

**Example:**

```javascript
let name = "Anna";
let age = 28;

console.log("Hello, here is my code!");
console.log("The name is:", name);
console.log("The age is:", age);
```

- If you run this code, you’ll see three lines in the console:

1.  `Hello, here is my code!`
2.  `The name is: Anna`
3.  `The age is: 28`

- There are also other useful `console` commands to help you organize your outputs:

| Command           | Description                                                                                                  | Example Usage                                                                            |
| :---------------- | :----------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `console.log()`   | Standard output. For general information.                                                                    | `console.log("Variable x has value:", x);`                                               |
| `console.warn()`  | Outputs a warning. Often highlighted in yellow. Useful for things that are not critical but should be noted. | `console.warn("Warning: This value should not be negative.");`                           |
| `console.error()` | Outputs an error message. Often red and looks like a real error. Ideal for showing critical problems.        | `console.error("Failed to connect to database!");`                                       |
| `console.table()` | Outputs structured data (arrays or objects) as a neat table. Super useful!                                   | `const users = [{name: "Max", age: 30}, {name: "Lisa", age: 25}]; console.table(users);` |

<br><br><br>

### Simple Debugging

- "Debugging" means finding and fixing errors ("bugs") in your code. It’s like detective work. The console is your magnifying glass.

#### Reading and Understanding Error Messages

- If your JavaScript code has an error, the browser will stop running it and print an error message in the console.
- These messages can be intimidating at first, but they contain extremely valuable clues.

- A typical error message might look like this:
  `Uncaught TypeError: document.getElementByID is not a function at script.js:12`

Let’s break this down:

1.  **`Uncaught TypeError`**: This is the kind of error. `TypeError` means you tried to do something with the wrong data type. For example, call a number like a function.
2.  **`document.getElementByID is not a function`**: This is the actual message. It tells you what the problem is. The computer says: "I don’t know `getElementByID` as a function." An experienced developer will immediately see there’s a typo. The correct command is `getElementById` (with a lowercase ‘d’).
3.  **`at script.js:12`**: This is the most important clue! It tells you exactly where the error happened: in the file `script.js` at line `12`. You can click it, and the browser shows you the problematic code line.

#### The "console.log" Strategy

- The simplest way of finding bugs as a beginner is with `console.log()` at different places.
- This lets you track your data’s journey and see where things go wrong.

- Suppose a function returns a wrong result:

```javascript
function calculatePrice(basePrice, quantity) {
  // Something seems to go wrong here.
  const taxRate = 1.19;
  let finalPrice = basePrice * quantity * taxRate;
  return finalPrice;
}

let resultPrice = calculatePrice("10", 5); // Careful: basePrice is text!
console.log(resultPrice); // Outputs NaN (Not a Number), which is wrong.
```

- Why is the result `NaN`? We can find out by using `console.log()` inside the function:

```javascript
function calculatePrice(basePrice, quantity) {
  // Step 1: What values are passed in?
  console.log("Function started. basePrice:", basePrice, "quantity:", quantity);
  console.log("Type of basePrice:", typeof basePrice); // typeof tells us the data type!

  const taxRate = 1.19;
  let finalPrice = basePrice * quantity * taxRate;

  // Step 2: What is the result before return?
  console.log("Calculated final price:", finalPrice);

  return finalPrice;
}
```

- When you run this code, you’ll see in the console:

1.  `Function started. basePrice: 10 quantity: 5`
2.  `Type of basePrice: string` --> **Aha! That’s the error!**
3.  `Calculated final price: NaN`

- The console has shown us that `basePrice` is text ("string"), not a number.
- Multiplying text by a number gives `NaN` (Not a Number).
- Now we know exactly where to fix the problem: we need to make sure `basePrice` is a number before we do the math.

- An advanced way to debug is to use the browser’s built-in debugger tool or the `debugger;` statement in your code, but that’s a topic for another lesson.
