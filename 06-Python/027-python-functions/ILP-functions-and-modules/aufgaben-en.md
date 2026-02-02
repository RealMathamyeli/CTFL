🌟 Welcome to your Individual Learning Phase (ILP)!

This is your exclusive time to dive deep into the world of programming and solidify your knowledge at your own pace. Consider this phase a personal lab where you can experiment, discover, and learn without the pressure of a fixed timeframe. It's about developing an intuitive understanding through practical application – not just understanding the concepts, but truly _feeling_ them. Use this opportunity to ask questions, try different approaches, and deepen your knowledge in a way that optimally prepares you for future challenges. Let's embark on this journey together and elevate your programming skills to the next level!

---

## Defining Your Own Functions

1.  **BMI Calculation:**
    - Develop a function `calculate_bmi` that accepts two parameters: `weight_kg` (as a float) and `height_m` (also as a float).
    - The function should calculate the Body Mass Index (BMI) using the formula `weight / (height * height)`.
    - The calculated BMI should be _returned_ as a float.
    - Test your function with at least two different individuals (different weight and height) and print their BMIs.

---

## Scope and Modularization

### Variable Scope (local vs. global) (approx. 40 minutes)

1.  **Local and Global Variables:**
    - Define a global variable `global_message` with a string of your choice outside of any function.
    - Create a function `show_variables` that:
      - Attempts to read and print `global_message`.
      - Defines a new local variable `local_message` with a different string inside the function and also prints it.
    - Call the function. Then, try to print `local_message` _outside_ the function and observe what happens. Comment on the result.

2.  **Modifying a Global Variable:**
    - Define a global variable `counter` with the value 0.
    - Write a function `increment_counter` that increases the value of `counter` by 1.
    - Pay attention to how you correctly modify a global variable within a function so that the change is visible outside the function as well.
    - Call the `increment_counter` function three times.
    - Print the value of `counter` before the calls, after the first call, and after the third call to track the changes.

### Importing and Using Modules (approx. 40 minutes)

1.  **Using Standard Modules:**
    - Import the standard `math` module.
    - Use functions from this module to perform the following calculations and print the results:
      - The square root of 144.
      - The value of Pi.
      - The power `2^5` (two to the power of five).

2.  **Creating and Importing Your Own Module:**
    - Create a new Python file named `my_functions.py`.
    - In this file, define at least two functions:
      - A function `greet_user(name)` that returns a personalized greeting.
      - A function `divide(a, b)` that divides two numbers and returns the result. Add simple error handling for division by zero.
    - Save the file.
    - Then, create a _second_ Python file (e.g., `main_program.py`) in the same directory.
    - Import your `my_functions` module into this `main_program.py` file.
    - Call both functions (`greet_user` and `divide`) from the imported module and print the results. Also test the division with the case of division by zero.

---

### Self-Reflection

At the end of this ILP phase, take a moment to reflect on your learning experiences.

- Which concepts did you learn anew or understand better today?
- Which task was the most challenging for you and why?
- What did you implement particularly well?
- Are there any open questions or areas where you would like more practice?
- How could you apply the content learned today in future projects?

Briefly note down your thoughts to consciously reflect on your learning process.
