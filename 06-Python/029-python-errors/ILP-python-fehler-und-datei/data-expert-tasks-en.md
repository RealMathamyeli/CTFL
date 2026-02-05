Here are structured exercises designed specifically for aspiring Data Engineers. These examples bridge the gap between abstract Python concepts and the day-to-day reality of moving and cleaning data (ETL - Extract, Transform, Load).

These exercises focus on:

- **Data Structures**,
- **Control Flow**, and
- **Functions**.

---

### Exercise 1: The "Dirty Data" Cleaner (ETL Basics)

**Topic:** Lists, Type Conversion, and Loops.
**Context** Data Engineers often receive "raw" data from text files or APIs where numbers are formatted as text (strings) or contain messy characters (like currency symbols). Before we can analyze revenue, we must "clean" this data.

**The Problem:**
You have a list of raw transaction strings. Your goal is to:

1. Remove the "$" symbol.
2. Convert the string to a floating-point number.
3. Calculate the total revenue.

**The Data:**

```python
raw_transactions = ["$10.50", "$2.00", "$5.25", "$99.99", "$5.00"]

```

---

### Exercise 2: The "Data Firewall" (Validation Logic)

**Topic:** Conditions (`if`/`else`), Boolean Logic, and Control Flow.
**Context** Bad data breaks pipelines. A Data Engineer builds "firewalls" to reject invalid records. If a user's age is negative or a name is missing, that record should be moved to an "error list" rather than the database.

**The Problem:**
You have a list of user dictionaries. Iterate through them and split them into `valid_users` and `failed_records`.

- **Rule:** A user is valid ONLY if they have a name (not empty) AND age is greater than 0.

**The Data:**

```python
users = [
    {"name": "Alice", "age": 30},
    {"name": "", "age": 25},        # Invalid: No name
    {"name": "Bob", "age": -5},     # Invalid: Negative age
    {"name": "Charlie", "age": 45}
]

```

---

### Exercise 3: The "Duplicate Destroyer" (Sets)

**Topic:** Sets and List Conversion.
**Context** When merging data from two different sources (e.g., Marketing data and Sales data), you often end up with duplicate customer IDs. A Data Engineer needs to find the _unique_ total audience size.

**The Problem:**
You have two lists of customer IDs.

1. Merge them into one list.
2. Count how many _unique_ customers you have.
3. Check if a specific customer (ID `105`) exists in the unique set.

**The Data:**

```python
source_a = [101, 102, 103, 101, 104]
source_b = [103, 104, 105, 106]

```

**_Expected Output:_**

```python
print(unique_customers)
# Expected Output: {101, 102, 103, 104, 105, 106}
# Unique Customers Count: 6
# Does customer ID 105 exist? True
```

---

## Log Entries

```python
log_entries = [
   ('user_001', 'Login',       '2023-10-26 09:00:00'),
    ('user_002', 'ProductView', '2023-10-26 09:01:15'),
    ('user_001', 'ProductView', '2023-10-26 09:02:30'),
    ('user_003', 'Login',       '2023-10-26 10:03:00'),
    ('user_002', 'AddToCart',   '2023-10-26 10:04:00'),
    ('user_001', 'Logout',      '2023-10-26 10:05:00'),
    ('user_004', 'Login',       '2023-10-26 11:06:00'),
    ('user_003', 'ProductView', '2023-10-26 11:07:00'),
    ('user_002', 'ProductView', '2023-10-26 11:08:00'),
    ('user_001', 'Login',       '2023-10-26 14:09:00'),
    ('user_004', 'AddToCart',   '2023-10-26 14:10:00'),
    ('user_003', 'Logout',      '2023-10-26 14:11:00')
]
```

Based on the `log_entries` structure (a list of tuples representing an "Event Stream"), here are four progressive exercises.
These mimic the real-world Data Engineering tasks of:

- **Filtering**,
- **Aggregation**,
- **Set Operations**, and
- **Transformation**.

### Exercise 4: The "Cart Watcher" (Filtering Data)

**Data Engineering Concept:** Filtering. In SQL, this is a `WHERE` clause. You are building a pipeline tfour hat ignores "noise" (like logins/logouts) and focuses only on high-value business events (Add to Cart).

**The Task:**
Create a new list called `sales_leads`. Iterate through the log and extract only the tuples where the action is `'AddToCart'`.

**Expected Output:**

```python
print(sales_leads)
# Expected Output:[
#     ('user_002', 'AddToCart', '2023-10-26 10:04:00'),
#     ('user_004', 'AddToCart', '2023-10-26 14:10:00'),
# ]
```

---

### Exercise 5: User Activity Counter (Aggregation / Group By)

**Data Engineering Concept:** Aggregation. In SQL, this is `GROUP BY` and `COUNT`. You need to convert raw log lines into a summary table that tells us how active each user is.

**The Task:**
Create a dictionary where the **Key** is the `user_id` and the **Value** is the total number of actions they performed.

**Expected Output:**

```python
print(activity_count)
# Expected Output: {
#     'user_001': 4,
#     'user_002': 3,
#     'user_003': 3,
#     'user_004': 2
# }
```

---

### Exercise 6: The "Window Shopper" Analysis (Set Operations)

**Data Engineering Concept:** Set Analysis. You often need to compare two groups of users to find overlaps or exclusions (e.g., "Users who viewed items but NEVER added anything to the cart").

**The Task:**

1. Create a set of users who performed a `'ProductView'`.
2. Create a set of users who performed an `'AddToCart'`.
3. Find the "Window Shoppers": Users who are in the "View" set but **NOT** in the "Cart" set.

**Expected Output:**

```python

print(f"Window Shoppers (Viewed but didn't add to cart): {window_shoppers}")
# Expected Output: Window Shoppers (Viewed but didn't add to cart): {'user_003', 'user_005', 'user_004'}

```

---
