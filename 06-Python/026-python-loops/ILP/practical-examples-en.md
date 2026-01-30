# ILP Practical Exercises

In this ILP Phase, you will continue practicing the concepts of loops and conditional statements by creating simple interactive programs. Below are three tasks from our lessons this morning.

- As usual, create a new Python file for each task and write the code to accomplish the specified functionality.

Happy coding!

## Tasks

1. A simple text-based interactive prompt that asks the user to either type "yes" or "no". If the user types the right answer, it prints a success message and breaks the loop; otherwise, it keeps asking.
   - Tips:
     - Use a while loop to keep prompting the user until they type "yes" or "no".
     - Use if statements to check the user's input.
     - use the break statement to exit the loop when the correct input is received.
   - Example Output:
     - "Correct! You typed 'yes'."
2. A simple caulator that asks the user to input two numbers and an operator (+, -, \*, /). The program performs the calculation based on the operator and prints the result. If the user inputs an invalid operator, it prompts them to enter a valid one.
   - Tips:
     - Use if, elif, else statements to handle different operators.
     - Use a while loop to keep asking for a valid operator if the input is invalid.
     - Use break to exit the loop once a valid operator is provided.
   - Example Output:
     - "The result of 5 + 3 is 8."

3. A simple interactive app that calculates the cost of a pizza order.

- The program asks the user for the size of the pizza they want to order.
  - Small Pizza(S) = €15
  - Medium Pizza(M) = €20
  - Large Pizza(L) = €25
- It then asks the user if they want pepperoni on their pizza or extra cheese.
  - Pepperoni for Small Pizza = +€2
  - Pepperoni for Medium or Large Pizza = +€3
  - Extra cheese for any size pizza = +€1
- Finally it calculates the total cost of the pizza order.
- Example Output:
  - "Your final bill is: €23"
