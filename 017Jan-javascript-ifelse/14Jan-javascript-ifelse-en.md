# Control Structures in JavaScript

Conditions

- Simple if-else statements for controlling program flow
- Comparison and logical operators in the context of conditions

Branching

- switch-case structures and their scope of application
- Nesting conditions to handle more complex decision logic

## Control Structures – Conditions

- Imagine a program is like a cooking recipe.
- Most recipes you simply read from top to bottom.
- But sometimes it says something like: "If you don't have almonds, use walnuts instead."
- That's a condition! You make a decision that changes the further course of the recipe.

- In programming, control structures are exactly that: forks in the road and instructions that tell the program which path to take, based on certain conditions.
- They give us control over the "flow" of the program.
- The simplest and most important of these structures is the `if-else` statement.

<br><br><br>

### Simple if-else Statements

The `if-else` statement is the basic tool for making decisions in your code. It's like a yes/no question you ask the computer. Depending on the answer (`true` or `false`), it executes different code blocks.

<br><br><br>

#### Conditional Statement

- Conditional statements in JavaScript help us write code that `makes decisions`, depending on whether a condition is met (true) or not (false).
- With comparison operators and logical operators, we can formulate conditions.
- Many programs need to react differently to different situations.

- For example:
  - In a `game`, if the player's number of lives is 0, the game is over.
  - In a `weather app`, if viewed in the morning, show a `sunrise graphic`; show stars and a moon if it's nighttime.
  - In JavaScript, we can use `if...else` statements to make such decisions.

### The `if` Statement

- The `if` statement executes a block of code if a specified condition is true.
- Syntax:

```javascript
if (condition) {
  // Code that is executed when the condition is true
}
```

- Example:

```javascript
let hour = 10;

if (hour < 18) {
  console.log("Good day");
}

console.log("Good evening");
```

- The code is only executed when the condition is true, but the remaining lines of code are also executed.
- But if we want the remaining code to only be executed when the condition is false, we can use the `else` statement.

<br><br><br>

### The `else` Statement: The "Otherwise" Case

- The `else` statement executes a block of code if a specified condition is false.
- The `else` block is only executed when the `if` condition is `false`.
- Syntax:

  ```javascript
  if (condition) {
    // Execute code when the condition is true
  } else {
    // otherwise execute this code
  }
  ```

- Either the `if` block or the `else` block is executed.

  - Never both and never neither.
  - The program must decide on one path.

- Here we have:

  - The `if` keyword followed by a condition in parentheses.
  - A condition to decide whether the code should be executed or not.

  - These are often written with `comparison operators` like `===`, `!==`, `>`, `<`, `>=`, `<=`.
  - For example:

    - You're building an application that checks whether a user is of legal age to perform a certain operation, such as watching a movie rated 18+.

    ```javascript
    let age = 20;
    if (age >= 18) {
      console.log("Access granted");
    } else {
      console.log("Access denied");
    }
    ```

    - `if (age >= 20)` checks whether the variable `age` is greater than or equal to 20.
    - If the condition is true, the code in the `if` block is executed. (`Access granted`)
    - If the condition is false, the code in the `else` block is executed. (`Access denied`)

- In summary, an `if-else` statement consists of:
  - A block of code that is executed when the condition is true in `curly braces`.
  - The `else` keyword followed by a block of code in curly braces.
  - A block of code that is executed `when the condition is false` in curly braces.
  - The code in the curly braces is typically `indented` to improve readability.

<br><br><br>

### The `else if` Statement: Multiple Paths

- Sometimes there are more than just two options.
- Imagine a traffic light: It can be red, yellow, or green.
- With `if` and `else`, we can only represent two states (e.g., "red" and "not red").
- To check multiple conditions one after another, we use `else if`.

- Syntax:

```javascript
if (first_condition) {
  // this code is executed when first_condition is true
} else if (second_condition) {
  // this code is executed when second_condition is true
} else {
  // this code is executed when first_condition and second_condition are false
}
```

**Logic:**

- **If** the traffic light is green, **then** drive.
- **Otherwise, if** the traffic light is yellow, **then** slow down.
- **Otherwise** (if it's neither green nor yellow, so it must be red), **then** stop.

```javascript
let trafficLightColor = "yellow";

if (trafficLightColor === "green") {
  console.log("Drive");
} else if (trafficLightColor === "yellow") {
  console.log("Slow down");
} else {
  console.log("Stop");
}
```

- The program checks the conditions from top to bottom.
- As soon as it finds a condition that is `true`, it executes the associated code block and skips all remaining `else if` and `else` blocks of this chain.

<br><br><br>

## Logical Operators: Linking Conditions

- Sometimes a decision doesn't depend on just a single condition.
- For example, to watch a movie rated 18+ in the cinema, you need to be **both** of legal age **and** have a ticket.
- For this, we use logical operators.

The three most important logical operators are:

- `&&` - AND operator
- `||` - OR operator
- `!` - NOT operator

### The AND (`&&`)

- Imagine you want to order something online.
- You need enough money in the account **AND** the item must be in stock.

```javascript
let accountBalance = 100.0;
let itemInStock = true;

if (accountBalance >= 50.0 && itemInStock == true) {
  console.log("Order successful!");
} else {
  console.log("Order failed.");
}
```

- If only one of the two conditions were false (e.g., `accountBalance = 30.0`), the entire `&&` condition would be false and the `else` block would be executed.

### The OR (`||`)

- Imagine you get a discount if you are either a student **OR** a retiree.
- It's enough if one of the two conditions is met.

```javascript
let isStudent = false;
let isRetiree = true;

if (isStudent == true || isRetiree == true) {
  console.log("You get a discount!");
} else {
  console.log("Unfortunately no discount for you.");
}
```

- Here you would get the discount because you are a retiree. It doesn't matter that you're not a student.

### The NOT (`!`)

- This operator is simple but very useful.
- It simply reverses a truth value.

```javascript
let doorIsClosed = true;

// We want to check if the door is NOT closed (i.e., open).
if (!doorIsClosed) {
  console.log("The door is open.");
} else {
  console.log("The door is closed.");
}
```

- In this case, `doorIsClosed` is `true`.
- The `!` in front of it turns it into `false`.
- Therefore, the `if` condition is evaluated as `false` and the `else` block is executed.
  <br><br><br>

### Switch-Case Statements

- `switch`-`case` statements are also used to make decisions
- It's a special type of branching that is ideal when you want to compare a single variable with multiple possible, constant values.
- Syntax:

```javascript
switch (variable) {
  case value1:
    // Code that is executed when variable === value1
    break;
  case value2:
    // Code that is executed when variable === value2
    break;
  // more case blocks...
  default:
    // Code that is executed when none of the above conditions apply
    break;
}
```

#### How does a switch-case structure work?

- The structure is always the same and consists of four important keywords:
  - `switch`,
  - `case`,
  - `break`, and
  - `default`.

1.  **`switch (variable)`**:

- This is where the structure begins.
- In the parentheses, you write the variable whose value you want to check.
- This can be understood as "Switch based on the value of `variable`".

2.  **`case value:`**:

- For each possible value that your variable could take, you create a `case` (a "case").
- So you write `case` followed by the concrete value (e.g., a number like `5` or text like `"Monday"`).

3.  **`break;`**:
    - This is extremely important! After the code for a matching `case` has been executed, `break` ensures that the entire `switch` structure is immediately exited.
    - Without `break`, the program would simply continue with the next `case`, which is usually not desired (this behavior is called "fall-through").
4.  **`default:`**:

- This is the "what-else" block.
- If none of your defined `case` cases apply, the code in the `default` block is executed.
- It's comparable to the `else` part of an `if-else` structure.

- **A simple example:** We want to convert the day of the week as a number (1-7) into text.

```javascript
let dayNumber = 3;
let dayName = null;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    console.log("Today is Monday");
    break; // Exits the switch block
  case 2:
    dayName = "Tuesday";
    console.log("Today is Tuesday");
    break;
  case 3:
    dayName = "Wednesday"; // This case applies!
    console.log("Today is Wednesday");
    break; // dayName is now "Wednesday", switch is exited.
  case 4:
    dayName = "Thursday";
    console.log("Today is Thursday");
    break;
  case 5:
    dayName = "Friday";
    console.log("Today is Friday");
    break;
  case 6:
    dayName = "Saturday";
    console.log("Today is Saturday");
    break;
  case 7:
    dayName = "Sunday";
    console.log("Today is Sunday");
    break;
  default:
    dayName = "Invalid day"; // Is executed if dayNumber were, e.g., 9.
    console.log("Invalid day");
    break;
}
```

### 💡 When should you use switch-case? (Scope of Application)

- `switch-case` is not always the best choice. Its strength lies in very specific situations. An `if-else if-else` chain can do everything that `switch-case` can, but `switch-case` is much more readable and clearer in some cases.

Here's a comparison to help you decide:

| Criterion              | ✅ switch-case                                                                                                                                                                          | 🔄 if-else if-else                                                                                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Type of Comparison** | Only checks for **strict equality** (`===`). A variable is compared with fixed values.                                                                                                  | Can check **any conditions** (`>`, `<`, `!=`, `&&`, `\|\|`, function calls).                                                                                                   |
| **Checked Value**      | Always checks **the same variable** against different values.                                                                                                                           | Can check a **completely different condition** or variable in each `else if` block.                                                                                            |
| **Readability**        | **Very high** when you compare a variable with 5 or more fixed values (e.g., menu selection).                                                                                           | **Better suited** for complex logic, ranges (e.g., `age > 18`), or multiple different conditions.                                                                              |
| **Typical Use Cases**  | - Menu selection (user selects 1, 2, 3...)<br>- State machines (traffic light: red, yellow, green)<br>- Evaluation of command-line arguments<br>- Error codes (Code 404 -> "Not found") | - Checking value ranges (grades: 1.0-1.5 -> "Very Good")<br>- Combination of different conditions (`if (isOnline && hasPaid)`)<br>- Logic that is not based on simple equality |

**Rule of thumb**: If you find yourself writing a long chain of `if (x === 1) { ... } else if (x === 2) { ... } else if (x === 3) { ... }`, that's a perfect candidate for a `switch-case` structure.

<br><br><br>

## Nesting Conditions

Imagine you're planning your day. _If_ the weather is nice, you go out. That's a simple decision. But now it gets more complex: _If_ the weather is nice, you think further: _If_ you also have enough time, you drive to the lake. _Otherwise_ (if you have little time) you just take a walk in the park.

You've made a decision within another decision here. This is called **nesting**. In programming, this means that you write a complete `if-else` structure into the block of another `if` or `else` statement.

### Why and when do you nest conditions?

Nesting is used to represent finer, more detailed decision logic. You need it when a second condition only becomes relevant if a first, higher-level condition is already met.

**Main reasons for nesting:**

1.  **Hierarchical Logic**: Decisions build on each other. The inner check doesn't make sense without the outer check.
    - _Example_: Check if a user has admin rights. This check only makes sense _if_ the user is logged in at all.
2.  **Data Filtering**: You filter step by step through multiple criteria.
    - _Example_: Find all products that belong to the "Electronics" category. _Within this category_, find all that cost less than €50.
3.  **Error Prevention**: You ensure that an operation is only performed if all preconditions are met.
    - _Example_: Access the first element of a list. This is only safe _if_ the list contains elements at all (i.e., is not empty).

### A Practical Example: User Authentication

Let's look at the example with admin login more closely. We have two conditions:

1.  Is the user logged in? (`isLoggedIn`)
2.  If yes, does the user have the role "Admin"? (`userRole`)

```javascript
let isLoggedIn = true;
let userRole = "Guest"; // Possible roles: "Admin", "User", "Guest"

// Outer condition: Is the user logged in at all?
if (isLoggedIn === true) {
  console.log("Welcome! Your login status is being checked...");

  // Inner, nested condition: What role does the logged-in user have?
  // This check ONLY takes place if the outer condition (isLoggedIn) is true.
  if (userRole === "Admin") {
    console.log("Access to the admin dashboard granted.");
  } else if (userRole === "User") {
    console.log("Access to your personal area granted.");
  } else {
    console.log("You are logged in as a guest and have read-only access.");
  }
} else {
  // This block is only executed if the outer condition is false.
  console.log("Please log in first to continue.");
}
```

This structure perfectly represents the logical dependency. The question about the role is never asked if the user is not logged in.

### Dangers and Alternatives to Nesting

- Although nesting is very powerful, it can also lead to problems. If you nest too many levels into each other, the code becomes very difficult to read and maintain very quickly. This is then called "arrow code" or the "pyramid of doom", because the code keeps moving further to the right through the indentations.

```javascript
if (a) {
  if (b) {
    if (c) {
      if (d) {
        // ... very difficult to read what's happening here
      }
    }
  }
}
```

**Better alternatives to avoid deep nesting:**

1.  **Logical Operators (`&&`, `||`)**: Often you can combine two nested `if` queries into a single one.

    - **Instead of:**
      ```javascript
      if (isLoggedIn) {
        if (userRole === "Admin") {
          // ...
        }
      }
      ```
    - **Better:**
      ```javascript
      if (isLoggedIn && userRole === "Admin") {
        // ...
      }
      ```

2.  **"Guard Clauses" (Early Exit)**: Instead of putting the "good" case in an `if`, you check at the beginning of a function for the negative or invalid cases and abort immediately (e.g., with `return`). This makes the main code flat and not further indented.

    - **Instead of (nested):**
      ```javascript
      function showAdminDashboard() {
        if (isLoggedIn) {
          if (userRole === "Admin") {
            console.log("Dashboard is loading...");
            // ... much more code
          } else {
            console.log("No admin rights!");
          }
        } else {
          console.log("Not logged in!");
        }
      }
      ```
    - **Better (flat with Guard Clauses):**

      ```javascript
      function showAdminDashboard() {
        if (!isLoggedIn) {
          console.log("Not logged in!");
          return; // Exit function immediately
        }

        if (userRole !== "Admin") {
          console.log("No admin rights!");
          return; // Exit function immediately
        }

        // If we arrive here, all conditions are met.
        // The main code is no longer nested.
        console.log("Dashboard is loading...");
        // ... much more code
      }
      ```
