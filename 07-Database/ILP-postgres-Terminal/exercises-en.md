# Exercise 1: The "City Library" (Paper Modeling)

**Goal:** Practice identifying Entities and Attributes without a computer.

**Scenario:**

> _The City Library needs a system. They have thousands of **Books**. Each book has a Title, an ISBN, and a Publication Year. The library has **Members** who borrow these books. We need to know the Member's Name, Email, and Card Number. When a member borrows a book, we create a **Loan** record that tracks the Date Borrowed and Due Date._

**Task:**

1. Take a piece of paper.
2. Identify the **3 main Entities**.
3. List the **Attributes** for each Entity.
4. Draw lines between them to show how they relate.

**Expected Result:**

| Entity     | Attributes                    |
| ---------- | ----------------------------- |
| **Book**   | Title, ISBN, Publication Year |
| **Member** | Name, Email, Card Number      |
| **Loan**   | Date Borrowed, Due Date       |

Relationships:

- A **Member** can have many **Loans**.
- A **Loan** belongs to one **Book** and one **Member**.
- A **Book** can appear in many **Loans** (borrowed multiple times over time).

---

# Exercise 2: Exploration

**Goal:** Get familiar with DBeaver's interface.

**Task:**

1. In the **Database Navigator** panel (left side), expand your connection.
2. Navigate to: `postgres` → `Schemas` → `public`.
3. Click on **Tables**. It is empty right now – **this is where your work begins tomorrow!**
4. Explore the other nodes: Functions, Sequences, Views. You don't need to understand them yet – just know they exist.

# Exercise 3: Learn Draw.io

- Watch the tutorial on how to use Draw.io for data modeling: https://www.youtube.com/watch?v=lAtCySGDD48
- Try to recreate the "City Library" model from Exercise 1 using Draw.io. It must not be perfect, just get familiar with the tool.

# Working with postgresql in the terminal

- Open your terminal and to connect to the PostgreSQL database.
- List all databases and paste the output here:

```bash
# List all databases
```

- create a new database called `library` and paste the command you used here:

```bash
# Create a new database called library
```

- list all databases again to confirm that `library` was created and paste the output here:

```bash
# List all databases again
```

- commit and push your changes to submit your work for this week!

---
