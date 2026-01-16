# Arrow Functions

<br><br><br>

```javascript
const functionName = (parameter) => {
  // function body
};
```

```javascript
const double_arrow = (number) => {
  return number * 2;
};

console.log(double_arrow(5)); // Outputs 10 too
```

- Arrow functions come with some neat simplification rules:

  - **Rule 1: No curly braces for a single statement.**
    If your function is just _one_ line that returns something, you can omit the curly braces `{}` and the `return` keyword. This is called "implicit return".

    ```javascript
    // Rule 1 applied
    const double_arrow_short = (number) => number * 2;

    console.log(double_arrow_short(5)); // Still 10!
    ```

  - **Rule 2: No parentheses for exactly _one_ parameter.**
    If your function takes only one parameter, you can also omit the parentheses `()` around that parameter.

    ```javascript
    // Rule 2 applied
    const double_arrow_shortest = (number) => number * 2;

    console.log(double_arrow_shortest(5)); // Again 10!
    ```

    **Important:** For _zero_ or _more than one_ parameter, you **must** use parentheses:
    `() => "Hello World!"`
    `(a, b) => a + b`

<br><br><br>

# Scope

<br><br><br>

## What Is Scope, Anyway?

- Imagine your program is a big house.
- The **scope** describes in which rooms of this house a particular piece of information (a variable) is known and can be used.

- Some information is visible to everyone in the marketplace in front of the house—that's **global scope**.
- Other information is stored in a specific room and is only visible when you're in that room—that's **local scope**.

### Why is this important?

1.  **Order and Avoiding Conflicts:** If every variable were valid everywhere, chaos would reign. You could accidentally overwrite an important variable because you created another variable with the same name in another part of your code. Scope creates order and clear boundaries.
2.  **Security and Data Encapsulation:** You don't want every part of your code to access and change everything. Scope helps protect data and makes it accessible only to those parts of the code that really need it.
3.  **Efficiency:** Programs can manage memory better. If a variable is needed only in a small area (like inside a function), memory can be released once you leave that area.

In short: Scope rules determine where your variables "live" and where you can access them.

<br><br><br>

## The Difference Between Global and Block Scope

### Global Scope

A variable in global scope is declared outside of any function or code block. It's on the "ground floor" of your program and accessible from everywhere. Every function, every code block can read and change it.

**Analogy:** Imagine a public clock in the town square. Anyone, no matter where they are in the city, can look at that clock and read the time.

**Caution:** Using too many global variables is considered poor programming style. That's called "polluting the global namespace." It increases the risk of name conflicts and makes code harder to follow because a variable can be changed anywhere.

**Example:**

```javascript
// This variable is in global scope.
let playerName = "Alex";

function showWelcomeMessage() {
  // We can access the global variable from here.
  console.log("Welcome, " + playerName + "!");
}

function changePlayerName() {
  // We can also change the global variable from here.
  playerName = "Maria";
}

showWelcomeMessage(); // Output: Welcome, Alex!

changePlayerName(); // The global name is changed.

// If we call the function again, the new name is used.
showWelcomeMessage(); // Output: Welcome, Maria!

// We can also access it directly in global scope.
console.log("Current player: " + playerName); // Output: Current player: Maria
```

### Block Scope

- This is the more modern and stricter kind of scope.
- Variables declared with `let` or `const` are valid **only within the code block** in which they're created.
- A code block is anything between curly braces `{}` (like `if` statements, `for` loops, `while` loops, or just `{}`).

**Analogy:** Block scope is like a locked box _inside_ a room. You can only look inside the box when you're right in front of it. Step away from the box (leave the block), and it's locked and its contents are invisible, even if you're still in the room (function).

**Example:**

```javascript
function checkLevel() {
  let playerLevel = 5;

  if (playerLevel > 3) {
    // 'enemyType' is valid only within this if block, because declared with 'let'.
    let enemyType = "Dragon";
    console.log("Watch out, a " + enemyType + " appears!");
  }

  // The following would throw an error, because 'enemyType' does not exist outside the if block.
  // console.log(enemyType); // ReferenceError: enemyType is not defined
}

checkLevel();
// Output: Watch out, a Dragon appears!
```

<br><br><br>

