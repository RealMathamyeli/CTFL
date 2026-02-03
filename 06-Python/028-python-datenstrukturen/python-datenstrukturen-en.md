# Data Structures in Python

- Differences and use cases for lists, tuples, dictionaries, and sets
- Creating and initializing lists, tuples, dictionaries, and sets

Element Access and Manipulation

- Reading and modifying elements from lists, tuples, dictionaries, and sets
- Methods for adding and removing elements in the various data types

Using Data Structures

- Iterating over lists, tuples, dictionaries, and sets
- Typical use cases in programs: e.g., counting, grouping, looking up values

# 🐍 Data Structures in Python

<br><br><br>

## 📜 Lists

### 🤔 What is a list and what do I use it for?

Imagine a list like a shopping list. You write down the things you want to buy, one below the other.

- **Ordered:** The order in which you write things down is preserved. "Milk, Bread, Eggs" is a different order than "Bread, Eggs, Milk". In Python, this means each element has a fixed place (an index), starting at 0.
- **Mutable:** Your shopping list is dynamic. You can add things ("Oh, I also need butter!"), cross things off that you already have, or replace something on the list with something else ("Instead of regular milk I'll take oat milk").
- **Allows duplicates:** You can easily write "Milk" twice in your list if you need two packs. A list in Python does not mind duplicate values.

**Summary:** A list is the perfect choice when you have a collection of elements whose order matters and that may change during your program (add, remove, or change elements).

**Typical use cases:**

- A list of usernames that have registered.
- The individual steps in a recipe.
- The highscore list in a game.

<br><br><br>

### ➕ How do I create and initialize a list?

Creating lists is very simple. You use square brackets `[]`.

**1. Creating an empty list:**
If you want to create a list that you'll fill later, you can initialize it as empty.

```python
# Option 1: With square brackets (most commonly used)
my_shopping_list = []

# Option 2: With the list() constructor
my_other_list = list()

print(my_shopping_list)
# Output: []
```

**2. Creating a list with initial values:**
Most of the time, you already know which elements should be in the list. You simply write them, separated by commas, within the square brackets.

```python
# A list with numbers (integers)
my_grades = [1, 3, 2, 1, 4]

# A list with text (strings)
fruits = ["Apple", "Banana", "Cherry"]

# A list with mixed data types (absolutely possible!)
mixed_list = ["Max", 25, True, 3.14]

print(fruits)
# Output: ['Apple', 'Banana', 'Cherry']

print(mixed_list)
# Output: ['Max', 25, True, 3.14]
```

<br><br><br>

## 📦 Tuples

### 🤔 What is a tuple and what do I use it for?

A tuple is like a "list set in stone". Imagine it like fixed coordinates on a map (e.g., 48.137154, 11.576124 for Munich). These coordinates do not change.

- **Ordered:** Just like a list, each element has a fixed position (index). The order is important and always remains the same.
- **Immutable:** This is the main difference from a list! Once created, you can no longer change a tuple. You can't add, remove, or replace elements. If you try, Python will raise an error.
- **Allows duplicates:** A tuple can also contain the same values multiple times, e.g., `(1, 2, 2, 3)`.

**Summary:** You use a tuple whenever you have a collection of data that belongs together and must never change. This makes your code safer and often a bit faster compared to lists.

**Typical use cases:**

- GPS coordinates (latitude, longitude).
- RGB color values (red, green, blue).
- Fixed configuration data that must not change.

<br><br><br>

### ➕ How do I create and initialize a tuple?

Tuples are created with parentheses `()`.

**1. Creating an empty tuple:**

```python
# Option 1: With parentheses
empty_tuple = ()

# Option 2: With the tuple() constructor
empty_tuple_2 = tuple()

print(empty_tuple)
# Output: ()
```

**2. Creating a tuple with initial values:**
Similar to lists, you write the values separated by commas within the parentheses.

```python
# A tuple with RGB values for the color red
red_color = (255, 0, 0)

# A tuple with mixed data types
person_data = ("Müller", 42, "Berlin")

print(red_color)
# Output: (255, 0, 0)
```

**Important special case: Tuple with only one element**
If you want to create a tuple with only one element, you must put a comma after the element. Otherwise, Python thinks it's just a regular number or string in parentheses.

```python
# WRONG: This is not a tuple but just the number 50
not_a_tuple = (50)
print(type(not_a_tuple))
# Output: <class 'int'>

# CORRECT: The comma makes it a tuple
single_element_tuple = (50,)
print(type(single_element_tuple))
# Output: <class 'tuple'>
```

<br><br><br>

## 📚 Dictionaries

### 🤔 What is a dictionary and what do I use it for?

A dictionary works exactly like a real dictionary or a phonebook. You have a term (the **key**, e.g., the word "apple") and a corresponding explanation (the **value**, e.g., "a pome fruit"). You don't look for the "third definition in the book", but directly for the word "apple".

- **Unordered (or accessed via key):** In the past, dictionaries were totally unordered. In Python 3.7 and later, insertion order is preserved, but the main point is not access by index (like lists), but direct access via a unique **key**.
- **Mutable:** You can add new key-value pairs at any time, change existing values, or remove entire pairs.
- **No duplicate keys:** Each key in a dictionary must be unique. You can't have two entries for "Max Mustermann" in your phonebook. If you try to add a key that's already present, the old value will simply be overwritten.

**Summary:** A dictionary is ideal when you want to store data as pairs, and need quick access to a value via a unique identifier (the key).

**Typical use cases:**

- A user profile: `{"username": "Max", "age": 30, "city": "Munich"}`
- A phonebook: `{"Mom": "0123-45678", "Office": "089-12345"}`
- Settings in a program.

<br><br><br>

### ➕ How do I create and initialize a dictionary?

Dictionaries are created with curly braces `{}` and consist of `key: value` pairs.

**1. Creating an empty dictionary:**

```python
# Option 1: With curly braces (most commonly used)
my_profile = {}

# Option 2: With the dict() constructor
my_phonebook = dict()

print(my_profile)
# Output: {}
```

**2. Creating a dictionary with initial values:**
You list the `key: value` pairs, separated by commas. The key and value are separated by a colon `:`.

```python
# A dictionary describing a car
my_car = {
    "brand": "Volkswagen",
    "model": "Golf",
    "year": 2022,
    "has_tuv": True
}

print(my_car)
# Output: {'brand': 'Volkswagen', 'model': 'Golf', 'year': 2022, 'has_tuv': True}

# You can access a value via its key
print(my_car["model"])
# Output: Golf
```

<br><br><br>

## 🧩 Sets

### 🤔 What is a set and what do I use it for?

A set is like a box of Lego bricks, where each brick is unique in shape and color. You cannot have two exactly identical bricks in the box.

- **Unordered:** The elements in a set have no fixed order or index. You cannot ask for the "first" or "third" element. You can only check _if_ a certain element is in the set.
- **Mutable:** You can add or remove elements from a set.
- **No duplicates:** This is the most important property! Every element in a set is unique. If you try to add an element that's already present, nothing happens.

**Summary:** A set is the right choice when you want to manage a collection of elements and only care _if_ an element is present—not how often or at what position. They're extremely fast when it comes to checking if an element is in the collection.

**Typical use cases:**

- Remove duplicates from a list.
- Manage unique tags for a blog article.
- Quickly check if a user has a certain permission.
- Mathematical set operations (intersection, union, etc.)

<br><br><br>

### ➕ How do I create and initialize a set?

Sets are also created with curly braces `{}`, but they contain no `key: value` pairs.

**1. Creating an empty set:**
**Watch out!** `empty_set = {}` does not work, since that would create an empty dictionary. You must use the `set()` constructor.

```python
# This is the only way to create an empty set!
empty_set = set()

print(empty_set)
# Output: set()
```

**2. Creating a set with initial values:**
Here you can again use curly braces. Python recognizes a set by the absence of colons.

```python
# Note the duplicate values "blue" and 10
colors = {"red", "green", "blue", "red", "yellow"}
numbers = {10, 20, 30, 10, 40}

# Duplicates are automatically removed in the output.
# Order may vary.
print(colors)
# Possible output: {'yellow', 'blue', 'green', 'red'}

print(numbers)
# Possible output: {40, 10, 20, 30}
```

**3. Creating a set from a list (common use case):**
You can convert any sequence (e.g., a list) to a set to get rid of duplicates.

```python
guest_list = ["Anna", "Peter", "Maria", "Anna", "David", "Peter"]

# Converting to a set removes duplicates
unique_guests = set(guest_list)

print(unique_guests)
# Possible output: {'Maria', 'Anna', 'Peter', 'David'}
```

<br><br><br>

## ⚖️ Direct Comparison: The Four Data Structures at a Glance

To make it easier for you to decide when to use what, here's a clear table of their main properties.

| Property         | 📜 List                        | 📦 Tuple                             | 📚 Dictionary              | 🧩 Set                         |
| :--------------- | :----------------------------- | :----------------------------------- | :------------------------- | :----------------------------- |
| **Syntax**       | `[1, 2, 3]`                    | `(1, 2, 3)`                          | `{'a': 1, 'b': 2}`         | `{1, 2, 3}`                    |
| **Mutable?**     | ✅ Yes                         | ❌ No                                | ✅ Yes                     | ✅ Yes                         |
| **Ordered?**     | ✅ Yes (Index)                 | ✅ Yes (Index)                       | ✅ Yes (since Python 3.7)  | ❌ No                          |
| **Duplicates?**  | ✅ Yes                         | ✅ Yes                               | ❌ No (keys)               | ❌ No                          |
| **Access via**   | Index (e.g., `list[0]`)        | Index (e.g., `tuple[0]`)             | Key (e.g., `dict['a']`)    | No direct access               |
| **Main purpose** | An ordered, mutable collection | An ordered, **im**mutable collection | Storage of key-value pairs | Storage of **unique** elements |

# 🔧 Element Access and Manipulation

Imagine you have different containers for your data: a shopping list, an unchangeable birth certificate, a phonebook, and a box of unique trading cards. Each of these containers (in Python: list, tuple, dictionary, set) has its own rules for how you can put in, take out, view, or change things. Now we'll look at all this in detail!

<br><br><br>

## 📝 Lists

A list is like an ordered shopping list. You can change the order, add things, cross things off (remove), and write down the same item more than once. It is very flexible.

### 🔍 Reading Elements (Access)

To access elements in a list, you use their **index**. The index is like the line number on your shopping list. Important: **In computer science, we always start counting at 0!**

- **Access via positive index:**

  ```python
  fruits = ["Apple", "Banana", "Cherry", "Orange"]
  # The first element has index 0
  print(fruits[0])  # Output: Apple

  # The third element has index 2
  print(fruits[2])  # Output: Cherry
  ```

- **Access via negative index:**
  You can also count from the end. `-1` is the last element, `-2` the second to last, and so on.

  ```python
  fruits = ["Apple", "Banana", "Cherry", "Orange"]
  print(fruits[-1]) # Output: Orange
  print(fruits[-3]) # Output: Banana
  ```

- **Slicing (reading slices):**
  You can also read a whole range of elements at once. The syntax is `[start:end]`. The `start` element is inclusive and the `end` element is exclusive.

  ```python
  fruits = ["Apple", "Banana", "Cherry", "Orange", "Mango"]
  # Give me the elements from index 1 to (but not including) index 4
  print(fruits[1:4]) # Output: ['Banana', 'Cherry', 'Orange']

  # Give me everything from the start up to index 3 (exclusive)
  print(fruits[:3]) # Output: ['Apple', 'Banana', 'Cherry']

  # Give me everything from index 2 to the end
  print(fruits[2:]) # Output: ['Cherry', 'Orange', 'Mango']
  ```

### ✏️ Modifying Elements (Manipulation)

Since lists are mutable, you can overwrite the value of an element simply by addressing it with its index.

```python
fruits = ["Apple", "Banana", "Cherry"]
print("Before:", fruits) # Output: Before: ['Apple', 'Banana', 'Cherry']

# Replace "Banana" (at index 1) with "Blueberry"
fruits[1] = "Blueberry"
print("After:", fruits) # Output: After: ['Apple', 'Blueberry', 'Cherry']
```

You can even replace a whole range (slice) at once:

```python
fruits = ["Apple", "Banana", "Cherry", "Orange"]
# Replace elements at index 1 and 2
fruits[1:3] = ["Mango", "Pineapple"]
print(fruits) # Output: ['Apple', 'Mango', 'Pineapple', 'Orange']
```

### ✨ Adding Elements

There are various methods to add new elements to a list.

| Method     | 📝 Description                                                                                     | 💻 Example code                                                    |
| :--------- | :------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| `append()` | Adds **one** element to the **end** of the list.                                                   | `fruits.append("Kiwi")`                                            |
| `insert()` | Adds **one** element at a **specific index**. Subsequent elements are shifted one place.           | `fruits.insert(1, "Lemon")`                                        |
| `extend()` | Appends **all elements** from another list (or other iterable) to the **end** of the current list. | `more_fruits = ["Grape", "Melon"]`<br>`fruits.extend(more_fruits)` |

### 🗑️ Removing Elements

There are also several ways to remove elements, depending on exactly what you want to do.

| Method / Command | 📝 Description                                                                                                        | 💻 Example code                                                |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------- |
| `remove()`       | Removes the **first occurrence** of a specific **value**. If the value doesn't exist, you get an error.               | `fruits.remove("Banana")`                                      |
| `pop()`          | Removes an element at a specific **index** and **returns it**. If no index is given, the **last** element is removed. | `removed_fruit = fruits.pop(1)`<br>`last_fruit = fruits.pop()` |
| `del`            | The `del` keyword can delete an element at a certain **index** or an entire **slice**.                                | `del fruits[0]`<br>`del fruits[1:3]`                           |
| `clear()`        | Removes **all** elements from the list. The list itself remains as an empty list.                                     | `fruits.clear()`                                               |

<br><br><br>

## 📦 Tuples

A tuple is like a list set in stone, for example a list of your birth data (day, month, year). The order is fixed, but you **cannot change** the values after the tuple has been created. This is called **immutable**.

### 🔍 Reading Elements (Access)

Reading elements works **exactly the same as with lists**: by index (positive or negative) and slicing.

```python
birth_data = (15, 5, 1995)
# Access by index
print(birth_data[0]) # Output: 15

# Access by negative index
print(birth_data[-1]) # Output: 1995

# Slicing
print(birth_data[0:2]) # Output: (15, 5)
```

### ✏️ Modifying Elements (Manipulation)

This is the main point with tuples: **You cannot change them!** Any attempt to assign a new value to an index will result in an error.

```python
birth_data = (15, 5, 1995)
# This code will raise a TypeError!
# birth_data[0] = 16
```

**Trick:** If you must "change" a tuple, you actually create a completely **new tuple** from parts of the old tuple and new values.

```python
old_tuple = ("A", "B", "D")
# Create a new tuple to insert "C"
new_tuple = old_tuple[0:2] + ("C",) + old_tuple[2:]
print(new_tuple) # Output: ('A', 'B', 'C', 'D')
```

_Note the comma in `("C",)`. It's important so Python knows it's a tuple with one element._

### ✨ Adding Elements & 🗑️ Removing Elements

As with modification, the same applies here: Since tuples are immutable, you cannot directly add or remove elements. You always have to create a **new tuple**.

<br><br><br>

## 📚 Dictionaries

A dictionary is like a phonebook or an encyclopedia. You don't have an index (no page number), but you look for a unique **key** (e.g., a name) and get the corresponding **value** (e.g., phone number). The order is not that important (although it's preserved in modern Python versions).

### 🔍 Reading Elements (Access)

Access is always via the **key** in square brackets.

- **Access by key:**

  ```python
  phonebook = {
      "Anna": "123-456",
      "Ben": "789-101",
      "Clara": "112-131"
  }
  print(phonebook["Anna"]) # Output: 123-456
  ```

  **Caution:** If you use a key that doesn't exist, you'll get a `KeyError`.

- **Safe access with `.get()`:**
  The `.get()` method is safer. If the key doesn't exist, it returns `None` by default (or a default value you specify), instead of causing an error.

  ```python
  # Safe access to an existing key
  print(phonebook.get("Ben")) # Output: 789-101

  # Access to a non-existent key
  print(phonebook.get("David")) # Output: None

  # With a default value if the key doesn't exist
  print(phonebook.get("David", "Contact not found")) # Output: Contact not found
  ```

### ✏️ Modifying Elements (Manipulation)

To change the value of an existing key-value pair, reference the key and simply assign it a new value.

```python
phonebook = {"Anna": "123-456", "Ben": "789-101"}
print("Anna's old number:", phonebook["Anna"]) # Output: Anna's old number: 123-456

# Anna's number has changed
phonebook["Anna"] = "999-888"
print("Anna's new number:", phonebook["Anna"]) # Output: Anna's new number: 999-888
```

### ✨ Adding Elements

Adding works syntactically just like modification: If the key doesn't yet exist in the dictionary, it will simply be created.

```python
phonebook = {"Anna": "123-456"}
# Add a new entry for David
phonebook["David"] = "555-444"
print(phonebook) # Output: {'Anna': '123-456', 'David': '555-444'}
```

### 🗑️ Removing Elements

| Method / Command | 📝 Description                                                                                                        | 💻 Example code                      |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| `pop()`          | Removes the key-value pair for the given **key** and **returns the value**. Causes an error if the key doesn't exist. | `bens_number = phonebook.pop("Ben")` |
| `popitem()`      | Removes the **most recently added** key-value pair and returns it as a tuple `(key, value)`.                          | `last_entry = phonebook.popitem()`   |
| `del`            | The `del` keyword deletes the key-value pair for the given **key**.                                                   | `del phonebook["Clara"]`             |
| `clear()`        | Removes **all** key-value pairs from the dictionary.                                                                  | `phonebook.clear()`                  |

<br><br><br>

## 🧩 Sets

A set is like a box of unique trading cards. There are two important rules: **Order is not guaranteed** and **each element may only occur once**.

### 🔍 Reading Elements (Access)

Since sets have no ordered sequence and no indices, you **cannot** access a single element directly like in a list (`my_set[0]` does not work).

Instead, you check if an element is **contained** in the set or you loop over all elements.

- **Check membership:**
  ```python
  my_cards = {"Pikachu", "Charmander", "Squirtle"}
  print("Pikachu" in my_cards)  # Output: True
  print("Bulbasaur" in my_cards)  # Output: False
  ```
- **Iterate through all elements:**
  ```python
  for card in my_cards:
      print(card)
  # Possible output (order not guaranteed):
  # Squirtle
  # Charmander
  # Pikachu
  ```

### ✏️ Modifying Elements (Manipulation)

You cannot **directly modify** an element in a set. An element is either in the set or it is not. If you want to "change" it, you have to **remove** the old element and **add** the new one.

### ✨ Adding Elements

Since each element can only appear once, if you add an element that already exists, it is simply ignored.

| Method     | 📝 Description                                                                                           | 💻 Example code                                                                                                                         |
| :--------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `add()`    | Adds **a single** element to the set.                                                                    | `my_cards.add("Bulbasaur")`                                                                                                             |
| `update()` | Adds **all elements** from another set (or list, etc.) to the set. Duplicates are ignored automatically. | `new_cards = {"Eevee", "Pikachu"}`<br>`my_cards.update(new_cards)`<br>`# The set is now {"Pikachu", "Charmander", "Squirtle", "Eevee"}` |

### 🗑️ Removing Elements

There is an important difference between two methods, depending on whether you want an error to be triggered or not.

| Method      | 📝 Description                                                                                                                                              | 💻 Example code                 |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------ |
| `remove()`  | Removes a specific element. If the element is **not in the set**, a **`KeyError`** is raised.                                                               | `my_cards.remove("Charmander")` |
| `discard()` | Removes a specific element. If the element is **not in the set**, **nothing happens**. This is the safer method.                                            | `my_cards.discard("Mewtwo")`    |
| `pop()`     | Removes a **random** (i.e., arbitrary) element from the set and returns it. Since sets have no order, you never know exactly which element will be removed. | `random_card = my_cards.pop()`  |
| `clear()`   | Removes **all** elements from the set.                                                                                                                      | `my_cards.clear()`              |

# 🏗️ Using Data Structures

<br><br><br>

## 🔄 Iterating Over Data Structures

Imagine you have a box with different things in it. "Iteration" simply means that you take each thing out of this box in turn and look at it. In programming it's no different. We have different "boxes" (our data structures like lists, tuples, dictionaries, and sets), and we want to go through the elements one by one to do something with them. The tool for this is usually a `for` loop.

<br><br><br>

### 🚶‍♂️ Iterating Over Lists (`list`)

A list is like a shopping list: Order is important, and you can add or remove things. When you iterate over a list, you simply go through it from top to bottom, in exactly the order in which the elements are stored.

**Example:**
Suppose you have a list of fruits. The loop takes "Apple", then "Banana", then "Cherry", prints them, and is done.

```python
# A simple list of fruits
fruits_list = ["Apple", "Banana", "Cherry"]

print("Fruits in my list:")
# The for loop goes through each element in the list
# In each iteration, the current element is stored in the variable 'fruit'
for fruit in fruits_list:
  # We print the current element
  print(fruit)
```

**Result:**

```
Fruits in my list:
Apple
Banana
Cherry
```

<br><br><br>

### 🚶‍♂️ Iterating Over Tuples (`tuple`)

A tuple is like a list set in stone. You can no longer change the elements after creation. The good news: Iterating works _exactly_ like with a list. You go through the elements in their set order from front to back.

**Example:**
A tuple could store the coordinates of a point in space. The loop takes 10, then 20, then 30.

```python
# A tuple representing RGB color values
color_values_tuple = (255, 128, 0) # Orange

print("The individual color values:")
# Iteration works just like lists
# 'value' will take the values 255, 128, and 0 in turn
for value in color_values_tuple:
  print(value)
```

**Result:**

```
The individual color values:
255
128
0
```

<br><br><br>

### 🗂️ Iterating Over Dictionaries (`dict`)

A dictionary is like a phonebook. You have a "key" (a person's name) and a "value" (the phone number). When iterating, you have several options, depending on what you need.

**1. Iterating Over Keys (Default)**
If you simply write `for x in my_dict:`, you get only the keys one by one.

```python
# A dictionary mapping countries to their capitals
capitals = {
  "Germany": "Berlin",
  "France": "Paris",
  "Italy": "Rome"
}

print("Only countries (keys):")
for country in capitals:
  print(country)
```

**Result:**

```
Only countries (keys):
Germany
France
Italy
```

**2. Iterating Over Values**
If you're only interested in the values (the capitals), you can use the `.values()` method.

```python
# The same dictionary as above
capitals = {
  "Germany": "Berlin",
  "France": "Paris",
  "Italy": "Rome"
}

print("\nOnly capitals (values):")
for city in capitals.values():
  print(city)
```

**Result:**

```
Only capitals (values):
Berlin
Paris
Rome
```

**3. Iterating Over Keys and Values Simultaneously (most common!)**
This is the most useful way. With the `.items()` method you get both the key and its corresponding value as a pair in each loop round.

```python
# The same dictionary as above
capitals = {
  "Germany": "Berlin",
  "France": "Paris",
  "Italy": "Rome"
}

print("\nCountries and their capitals (key and value):")
# .items() gives us pairs of (key, value)
for country, city in capitals.items():
  print(f"The capital of {country} is {city}.")
```

**Result:**

```
Countries and their capitals (key and value):
The capital of Germany is Berlin.
The capital of France is Paris.
The capital of Italy is Rome.
```

<br><br><br>

### 🎲 Iterating Over Sets (`set`)

A set is like a bag full of unique marbles. Each marble (each element) exists only once, and the marbles lie unordered in the bag. When you iterate, you take out the marbles one by one, but you can't rely on which order they come out.

**Example:**
We create a set with numbers and deliberately add duplicates. The set will automatically remove them. When you print the set, you see each element only once, but the order won't necessarily match the original.

```python
# A set of numbers. Duplicates (3 and 5) are ignored.
unique_numbers = {1, 5, 3, 8, 3, 5, 2}

print("Unique numbers in the set (order not guaranteed):")
# The for-loop goes through every unique element
for number in unique_numbers:
  print(number)
```

**Possible Result (order may vary!):**

```
Unique numbers in the set (order not guaranteed):
1
2
3
5
8
```

<br><br><br>
