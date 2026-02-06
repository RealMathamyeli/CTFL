# 📅 Day 1: The Database Environment & Conceptual Foundation

## 🎯 Learning Objectives

By the end of today you will be able to:

- Explain what a database is and why it exists
- Describe the core problems that databases solve (redundancy, integrity, concurrency)
- Identify **Entities**, **Attributes**, and **Relationships** in a real-world scenario
- Distinguish between a logical model and a physical model
- Install PostgreSQL and DBeaver on Ubuntu 22.04
- Connect DBeaver to your local PostgreSQL server

---

## Theory & Environment Setup

### 1. Introduction to Databases

**What is a Database Management System (DBMS)?**

- A DBMS is **software** that sits between the user and the raw data.
- It receives requests (queries), processes them, and returns results.
- Think of it as a **librarian**: you ask for a book, the librarian knows where it is and brings it to you. You never have to search the shelves yourself.
- Common DBMS examples: MySQL, PostgreSQL, Oracle, SQL Server.

**History & Milestones**

| Era        | Technology                    | Key Idea                                                                  |
| ---------- | ----------------------------- | ------------------------------------------------------------------------- |
| **1960s**  | Flat file systems             | Data stored in plain text files. No structure, lots of duplication.       |
| **1970**   | E. F. Codd's relational model | Data organised in **tables** with **rows** and **columns**. Birth of SQL. |
| **1990s**  | Internet boom                 | MySQL, PostgreSQL become popular. Databases power every website.          |
| **2000s+** | NoSQL & Big Data              | MongoDB, Redis – handling huge volumes of unstructured data.              |

> **Key takeaway:** We will focus on the **relational model** (1970) because it is still the backbone of most business applications today.

---

### 2. Why Do We Need Databases?

Without a database, applications store data in files (text, CSV, Excel). This creates three critical problems:

| Problem             | Without a DB                                                                             | With a DB                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Data Redundancy** | The same customer address is stored in 5 different files. A change must be made 5 times. | The address is stored **once**. All parts of the system read from a single source.   |
| **Data Integrity**  | Nothing stops someone from entering "banana" in the Age field.                           | **Constraints** enforce rules: Age must be an integer, Email must contain `@`.       |
| **Concurrency**     | Two users buying the last concert ticket at the same time → both get a confirmation.     | **Transactions** ensure only one succeeds; the other is informed the ticket is sold. |

**Real-World Use Cases**

- **Healthcare:** Patient records, medication history, appointment scheduling.
- **Retail / E-Commerce:** Product catalogue, inventory counts, order tracking.
- **Banking:** Account balances, transaction logs, fraud detection.
- **Social Media:** User profiles, posts, friend/follower connections.

---

### 3. Thinking in Data: Modeling Basics

Before you write any code, you plan your database on paper. This is called **data modeling**.

**Three Core Concepts**

| Concept          | What it is                  | Real-world example              | Becomes in SQL    |
| ---------------- | --------------------------- | ------------------------------- | ----------------- |
| **Entity**       | A "thing" you want to track | _Student_, _Car_, _Order_       | A **Table**       |
| **Attribute**    | A property of that thing    | _Student Name_, _Car Color_     | A **Column**      |
| **Relationship** | How two entities connect    | _Student **enrolls in** Course_ | A **Foreign Key** |

**Logical vs. Physical Model**

- **Logical model** – describes _what_ data you need in human language.
  - Example: "A user has a name and an email."
- **Physical model** – describes _how_ the data is stored in the computer.
  - Example: "The table `users` has a column `username` of type `VARCHAR(50)`."

> You always start with the logical model (understanding the problem) before moving to the physical model (writing code).

**Quick Exercise:**
Think about a **pizza delivery service**. Ask yourself:

1. What are the main _things_ (entities)? → _Customer, Pizza, Order_
2. What _properties_ (attributes) does each have? → _Customer: name, phone, address_
3. How do they _relate_? → _A Customer places many Orders; an Order contains many Pizzas_

---

### 4. DBMS Installation Lab – Ubuntu 22.04

- [For Linux](https://www.postgresql.org/download/linux/ubuntu)

#### Step 1 – Install PostgreSQL

- Open your terminal and run:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install postgresql
```

- `postgresql` → the database server itself

#### Step 2 – Verify the Service

```bash
sudo systemctl status postgresql
```

- You should see **active (running)** in green.
- Press `q` to exit the status view.

#### Step 3 – Set the Password

By default, PostgreSQL creates a system user called `postgres` with no password. You need to set one so that DBeaver can connect.

```bash
sudo systemctl status postgresql
sudo -i -u postgres
psql
```

Now you are inside the PostgreSQL prompt (`postgres=#`). Run:

```sql
\password postgres
```

- Enter a password you will remember (e.g. `postgres`).
- Confirm the password.
- Exit with:

```sql
\q
```

- Then type `exit` to return to your normal terminal.

##### Some useful postgres commands:

1. To see all databases:

```bash
sudo -u postgres psql -c "\l"
```

- Example output:

```
                                   List of databases
    Name     |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges
-------------+----------+----------+-------------+-------------+-----------------------
 postgres    | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0   | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
             |          |          |             |             |
```

2. To connect to a database:

```bash
sudo -u postgres psql -d NAME_OF_DATABASE
```

- `sudo -u postgres` → run the command as the `postgres` user
- `psql` → the command-line client for PostgreSQL
- `-d NAME_OF_DATABASE` → connect to the specified database (replace `NAME_OF_DATABASE` with your database name)
- By default, there is a database called `postgres` that you can connect to with `-d postgres`.
- Example:

```bash
sudo -u postgres psql -d postgres
```

3. To quit psql:

- Type `\q` or
- Type `ctrl + c` and press Enter
- or type `exit` and press Enter

4. To create a new database,
   - first connect to `postgres` database, - `sudo -u postgres psql -d postgres`
   - then run:

```sql
CREATE DATABASE my_database;
```

- `CREATE DATABASE` → Creates a new database named `my_database`
- replace `my_database` with your desired name.

5. To delete a database, first connect to the default `postgres` database, then run:

```sql
DROP DATABASE my_database;
```

- `DROP DATABASE` → Deletes the database named `my_database`
- replace `my_database` with the name of the database you want to delete.
- **Warning:** This action is irreversible. Make sure you have backups if needed.

6. To list all tables in the current database:

```sql
\dt
```

- `\dt` → Lists all tables in the connected database.
- Run this command to create a table first, otherwise you will see "No relations found". (We will look at the syntax details tomorrow.)

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
```

- Example output:

```
               List of relations
 Schema |      Name       | Type  |  Owner
--------+-----------------+-------+----------
 public | students        | table | postgres
```

- This shows the tables `students`, `courses`, and `enrollments` in the `public` schema.
- If you see "No relations found", it means there are no tables in the database yet.

1. To see the structure of a table:

```sql
\d table_name
```

- `\d table_name` → Describes the structure of the specified table.
- Example:
- If you have a table called `students`, run:

```sql
\d students
```

- Example output:

```
                                     Table "public.students"
   Column   |          Type          | Collation | Nullable |              Default
------------+------------------------+-----------+----------+---------------------------------------------------
 id         | integer                |           | not null | nextval('students_id_seq'::regclass)
 name       | character varying(100) |           | not null |
 email      | character varying(100) |           | not null |
 registration_date | date                 |           |          | CURRENT_DATE
Indexes:
    "students_pkey" PRIMARY KEY, btree (id)
    "students_email_key" UNIQUE CONSTRAINT, btree (email)
```

8. To switch to a different database:

```sql
\c another_database
```

- `\c another_database` → Connects to the specified database.
- Replace `another_database` with the name of the database you want to connect to.

#### Step 4 – Install DBeaver (GUI Client)

- https://dbeaver.io/download/#requirements

```bash
sudo wget -q -O - https://dbeaver.io/debs/dbeaver.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/dbeaver.gpg.key
echo "deb [signed-by=/usr/share/keyrings/dbeaver.gpg.key] https://dbeaver.io/debs/dbeaver-ce /" | sudo tee /etc/apt/sources.list.d/dbeaver.list
sudo apt-get update && sudo apt-get install dbeaver-ce
```

Launch it:

```bash
dbeaver-ce
```

> **What is DBeaver?** It is a graphical tool that lets you browse databases, run SQL queries, and visualise table structures – like a "file manager" for your data.

---

## Connect DBeaver to your PostgreSQL server.

**Steps:**

1. Open DBeaver.
2. Click the **New Database Connection** icon (plug with a `+` sign).
3. Select **PostgreSQL** from the list.
4. Enter these credentials:

   | Field    | Value                            |
   | -------- | -------------------------------- |
   | Host     | `localhost`                      |
   | Port     | `5432`                           |
   | Database | `postgres`                       |
   | Username | `postgres`                       |
   | Password | _(the one you set this morning)_ |

5. Click **Test Connection**.
6. If you see "Connected" → you are done!

> **Troubleshooting:** If the connection fails, make sure the PostgreSQL service is running (`sudo systemctl start postgresql`) and that you typed the password correctly.

---



## 📝 Day 1 Summary

| Topic        | Key Point                                   |
| ------------ | ------------------------------------------- |
| DBMS         | Software that manages data for you          |
| Redundancy   | Storing data once avoids duplication errors |
| Integrity    | Constraints enforce data rules              |
| Concurrency  | Transactions prevent conflicts              |
| Entity       | A "thing" → becomes a Table                 |
| Attribute    | A property → becomes a Column               |
| Relationship | A connection → becomes a Foreign Key        |
| PostgreSQL   | Our database engine (server)                |
| DBeaver      | Our graphical SQL client                    |
