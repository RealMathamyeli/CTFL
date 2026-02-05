# Python OOP Exercises

## Exercise 1: Create a Book Class 📚

**Objective:** Practice creating a class with attributes and the `__init__` constructor.

Create a `Book` class with the following specifications:

- Attributes: `title`, `author`, and `pages`
- When creating a book, print: `"A new book '{title}' by {author} has been added!"`

**Tasks:**

1. Define the `Book` class with an `__init__` method
2. Create at least two different book objects
3. Print out the title and author of each book using dot notation

**Example Expected Output:**

```
A new book 'Harry Potter' by J.K. Rowling has been added!
A new book '1984' by George Orwell has been added!
The first book is: Harry Potter by J.K. Rowling
The second book is: 1984 by George Orwell
```

---

## Exercise 2: Bank Account Class 💰

**Objective:** Practice creating a class with both attributes and methods.

Create a `BankAccount` class with the following specifications:

- Attributes: `owner_name`, `balance` (starting balance)
- Methods:
  - `deposit(amount)`: Adds money to the balance and prints the new balance
  - `withdraw(amount)`: Removes money from the balance (only if sufficient funds exist) and prints the new balance or an error message
  - `show_balance()`: Displays the current balance

**Tasks:**

1. Define the `BankAccount` class with `__init__` and the three methods
2. Create an account with an initial balance of 100
3. Deposit 50
4. Withdraw 30
5. Try to withdraw 200 (should show an error)
6. Show the final balance

**Example Expected Output:**

```
Account created for John with balance: 100€
Deposited 50€. New balance: 150€
Withdrew 30€. New balance: 120€
Error: Insufficient funds! You only have 120€
Current balance: 120€
```

---

## Exercise 3: Student Grade Manager 🎓

**Objective:** Practice working with multiple objects and methods that modify object state.

Create a `Student` class with the following specifications:

- Attributes: `name`, `grades` (an empty list initialized in `__init__`)
- Methods:
  - `add_grade(grade)`: Adds a grade (0-100) to the grades list
  - `get_average()`: Calculates and returns the average of all grades
  - `show_report()`: Displays the student's name, all grades, and average

**Tasks:**

1. Define the `Student` class with `__init__` and the three methods
2. Create two different student objects
3. Add at least 3 grades to each student
4. Display a report for each student showing their name, grades, and average

**Example Expected Output:**

```
Student Report for Alice:
Grades: [85, 92, 78]
Average: 85.0

Student Report for Bob:
Grades: [90, 88, 95, 87]
Average: 90.0
```

**Bonus Challenge:** Add a method `is_passing()` that returns `True` if the average is 60 or above, and `False` otherwise.

---

## Tips for Success

- Remember that `self` is always the first parameter in methods
- Use `self.attribute_name` to access or modify an object's attributes
- Don't forget the parentheses `()` when calling methods
- Test your code frequently as you build each class
- Make sure to create multiple objects to see how they remain independent

## Key Concepts to Remember

- **Classes** are blueprints that define attributes and methods
- **Objects** are concrete instances created from classes
- **`__init__`** is the constructor that initializes new objects
- **Attributes** store the state/data of an object
- **Methods** define the behaviors/actions of an object
