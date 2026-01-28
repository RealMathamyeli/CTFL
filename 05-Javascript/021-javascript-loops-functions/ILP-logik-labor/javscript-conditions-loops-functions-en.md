# 🚀 Your Individual Learning Phase: The Logic Lab

Welcome to your afternoon session! You have spent the morning learning the theory; now it is time to put your hands on the keyboard.

**Setup Instructions:**

1. Create a folder named `js-exercises`.
2. Inside, create an `index.html` file (standard boilerplate) and a `script.js` file.
3. Link them using `<script src="script.js"></script>` in your HTML body.
4. Open `index.html` in Chrome, right-click, select **Inspect**, and open the **Console** tab.
5. **How to test:** For every task, write your code in `script.js`. To "input" different data, change the values of your variables in the code, save, and refresh your browser to see the new result in the console.

---

### Task 1: The Decision Maker (Conditions & Switch)

**⏱️ Estimated Time: 45 Minutes**

In this task, you will practice teaching your program how to make decisions based on different values, using the concepts from the `Control Structures` material.

**Part A: The Translator**
Create a program that translates a native language code (e.g., "en", "de", "fr") into a greeting.

1. Define a variable named `language` and set it to a string (e.g., `"de"`).
2. Use a **`switch-case`** statement to check the variable:

- Case "en": Log "Hello World"
- Case "es": Log "Hola Mundo"
- Case "fr": Log "Bonjour le monde"
- Case "de": Log "Hallo Welt"
- **Default**: Log "Language not recognized"

3. **Test:** Change the variable `language` to different codes and refresh to ensure the correct message appears.

**Part B: The Budget Checker**
You are building a logic check for an online store.

1. Define two variables: `accountBalance` (a number) and `purchaseAmount` (a number).
2. Use an **`if-else`** statement to check if you can afford the purchase.
3. **Bonus:** Nest a condition! If the purchase is successful, check if the `accountBalance` is now less than 10. If so, log a warning: "Warning: Low balance!"

---

### Task 2: The Automation Station (Loops)

**⏱️ Estimated Time: 50 Minutes**

Computers are great at doing boring tasks repeatedly. Use loops to automate processes, as described in the `Loops – Fundamentals` material.

**Part A: The Odd Number Hunter (`for` loop)**
We need to find all odd numbers up to a certain limit.

1. Write a **`for` loop** that runs from 0 to 20.
2. Inside the loop, use an `if` statement to check if the current number `i` is odd.

- _Tip:_ You can check for odd numbers using the remainder operator `%` (e.g., `i % 2 !== 0`).

3. If it is odd, `console.log` the number.

**Part B: The Countdown (`while` loop)**
Simulate a rocket launch countdown.

1. Define a variable `counter` and set it to 10.
2. Create a **`while` loop** that runs as long as `counter` is greater than 0.
3. Inside the loop:

- Log the value of `counter`.
- **Crucial:** Decrease `counter` by 1 (`counter--`).

4. After the loop finishes, log "Liftoff! 🚀".

---

### Task 3: The Code Factory (Functions)

**⏱️ Estimated Time: 50 Minutes**

As stated in the material, a function is like a "small, specialized machine". You will build two reusable machines.

**Part A: The Personal Greeter (Function Declaration)**

1. Write a **function declaration** named `greetUser`.
2. It should accept one **parameter**: `name`.
3. Inside the function, log "Welcome back, [name]!" to the console.
4. **Call** the function three times with different names (e.g., "Alice", "Bob", "Charlie").

**Part B: The Unit Converter (Return Values)**

1. Write a function named `celsiusToFahrenheit`.
2. It should accept `celsius` as a parameter.
3. Inside, calculate the Fahrenheit value (Formula: `celsius * 1.8 + 32`).
4. **Return** the result.
5. Outside the function, call it, save the result in a variable (e.g., `const tempInFahrenheit = ...`), and log the result.

---

### Task 4 (expert optional): The Final Challenge (Integration)

**⏱️ Estimated Time: 35 Minutes**

Now, let's combine everything! You will build a "Shopping Cart Calculator."

1. **The Goal:** Calculate the total price of items in a list and apply a discount if the total is high.
2. **Step 1 (Data):** Create an array of prices: `const prices = [10, 20, 45, 100, 5];`
3. **Step 2 (The Function):** Create a function named `calculateTotal` that takes an array as a parameter.
4. **Step 3 (The Logic inside the function):**

- Initialize a variable `total` to 0.
- Use a **`for` loop** to go through the array.
- Add each price to the `total`.
- **Condition:** After the loop, use an `if` statement. If the `total` is greater than 100, apply a 10% discount (multiply total by 0.9).
- **Return** the final `total`.

5. **Step 4 (Execution):** Call your function with the `prices` array and log the final price to the console.

**Done?**
If you have extra time, try to add a `console.log` inside the loop in Task 4 to show the running total as it adds up!
