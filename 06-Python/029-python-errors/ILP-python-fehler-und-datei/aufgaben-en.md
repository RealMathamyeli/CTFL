🧑‍💻 Your Individual Learning Phase (ILP) this afternoon

Welcome to your Individual Learning Phase (ILP)! This is your time to delve deep into the subject matter, research independently, and solidify your understanding. The ILP is more than just a work phase – it's a journey of discovery where you take the helm and design your own learning path. Use this opportunity to experiment, ask questions (of yourself and later your coach), and not only understand the concepts but also apply them in practice. We have prepared exciting topics for you that will challenge you and enrich your knowledge. Dive in, be curious, and enjoy learning at your own pace!

---

## Error Handling in Python: Writing Robust Code

In this task, you will focus on a crucial aspect of programming: error handling. No code is perfect, and errors are inevitable. The art lies in elegantly catching them and teaching your programs how to deal with unexpected situations without simply crashing.

### 1. Understanding the Basics of Exceptions and Error Types (approx. 45 min)

*   **Research and Definition of Terms:** Begin by researching the concepts of "exceptions" and "errors" in Python. What is the difference between a syntax error and an exception?
*   **Common Exception Types:** Find out what the most common built-in exception types in Python are (e.g., `TypeError`, `ValueError`, `FileNotFoundError`, `IndexError`, `KeyError`, `ZeroDivisionError`). For each type, note down a short example that would provoke this error.
*   **Why Error Handling is Important:** Briefly consider and formulate why good error handling is essential for the stability and user-friendliness of software.

### 2. Applying `try`, `except` for Error Control (approx. 30 min)

*   **Simple Error Handling:** Write a Python script that accepts user input and converts it into an integer. Implement a `try-except` block to catch a `ValueError` if the input is not a valid number. Print a friendly error message instead of letting the program crash.
*   **Specific and Generic Exceptions:** Create another script that divides two numbers. Catch both the `ZeroDivisionError` and a general `Exception` type. Experiment with how the order of `except` blocks affects execution.
*   **Optional: `else` and `finally`:** Research the use of `else` and `finally` in `try-except` blocks. Add them to one of your examples and observe when the code in these blocks is executed.

---

## Simple File Processing: Interacting with Files

In this task, you will learn how to interact with files on your system. Opening, reading, and writing data is a fundamental skill in programming and allows your applications to store and retrieve persistent information.

### 1. Opening, Reading, and Writing Files with `open()` (approx. 45 min)

*   **Writing a New File:** Write a Python script that creates a new text file named `my_notes.txt`. Add several lines of text to this file. Remember to close the file after writing!
*   **Appending Text to a File:** Extend your script or write a new one that appends additional lines to the existing `my_notes.txt` without overwriting the previous content.
*   **Reading a File:** Write a script that reads the entire content of `my_notes.txt` and prints it to the console.
*   **Reading Line by Line:** Modify the reading script to read the file line by line and print each line individually.

### 2. Using Context Managers: `with`-Statement for File Access (approx. 30 min)

*   **Advantages of the `with`-Statement:** Research what a "context manager" is and what advantages the `with`-statement offers for file access (keywords: resource management, automatic closing).
*   **Safely Writing Files:** Write a new script that performs the same writing operations (creating and appending) as in task 1.1, but this time exclusively uses the `with`-statement.
*   **Safely Reading Files:** Implement a reading script that also uses the `with`-statement to read `my_notes.txt` and print its content.
*   **Combining Error Handling and Files:** Add the concepts of error handling. Write a script that tries to open a non-existent file. Catch the `FileNotFoundError` that occurs with a `try-except` block and print an appropriate error message.

---

### Your Self-Reflection

At the end of your ILP, take a moment to reflect on your experiences:

*   What were the biggest challenges in these tasks, and how did you overcome them?
*   What new insights have you gained that have expanded your understanding of Python and programming in general?
*   Are there any concepts that are still unclear to you or where you feel you need more practice? Note these points for discussion with your coach.
*   How could you apply the learned skills in future projects?