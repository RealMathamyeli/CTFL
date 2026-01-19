# Arrays and Objects in JavaScript

Arrays

- Creating and accessing array elements
- Iterating over an array with forEach and map

Objects

- Creating objects and accessing properties
- Adding and removing properties

Working with nested data structures

- Arrays in objects and objects in arrays
- Accessing and manipulating complex data structures
  <br><br><br>

# Arrays

<br><br><br>

## What is an Array?

- An array is a special type of `data structure` that allows you to store multiple values in a single variable.
- Each value in an array is called an `element` or `item`.
- Arrays are ordered collections, meaning that each element(item) has a specific position, called an `index`.
- In JavaScript, arrays are created using square brackets `[]`, and elements are separated by commas.
- Although arrays can hold elements of different data types, they are often used to store collections of the same data type for consistency.

<br><br><br>

## Creating and Accessing Array Elements

### Creating an Array

- To create an array, you use square brackets `[]` and list the elements inside them, separated by commas.
- Arrays can be given any name you like, following the usual variable naming rules and using `let`, or `const`.

- **Example 1: An array of fruits (strings)**
  - Here we create an array called `meineObstArray` that contains three fruit elements or items (strings).

```javascript
let meineObstArray = ["Apfel", "Banane", "Kirsche"];
```

**Example 2: An array of numbers**
Here we create an array called `lottoZahlenArray` that contains six number elements.

```javascript
let lottoZahlenArray = [5, 12, 23, 31, 40, 49];
```

**Example 3: An empty array**

- Sometimes you want to create an empty array that you can fill later.

```javascript
let einkaufsliste = [];
```

<br>

### Accessing Array Elements

- To access a specific element or item in your array, you use its `index`.
- `index` is like the position number of the element or item in the array.
- **Very important:** The index always starts at **0**!
  - The first element has index `0`.
  - The second element has index `1`.
  - The third element has index `2`.
  - ... and so on.

- The syntax is: `arrayName[index]`

Let's look at our `meineObstArray` array: `["Apfel", "Banane", "Kirsche"]`

- To access "Apfel", you write:
  ```javascript
  console.log(meineObstArray[0]); // Outputs "Apfel"
  ```
- To access "Banane", you write:
  ```javascript
  console.log(meineObstArray[1]); // Outputs "Banane"
  ```
- To access "Kirsche", you write:

  ```javascript
  console.log(meineObstArray[2]); // Outputs "Kirsche"
  ```

- **What happens if you access an index that doesn't exist?**
- You get the value `undefined`, which means "there is nothing here."

```javascript
console.log(meineObstArray[5]); // Outputs undefined as there is no 6th element.
```

### Modifying elements

- You can also change the value of an element by assigning it a new value using its index.

```javascript
let meineObstArray = ["Apfel", "Banane", "Kirsche"];
console.log("Before change:", meineObstArray[1]); // Outputs "Banane"

meineObstArray[1] = "Mango"; // The element at index 1 is overwritten

console.log("After change:", meineObstArray[1]); // Outputs "Mango"
console.log(meineObstArray); // Outputs ["Apfel", "Mango", "Kirsche"]
```

<br><br><br>

## Iterating Over an Array

- Iteration simply means that you go through each element of an array one after the other to do something with it – just like working through a shopping list item by item.
- `forEach` and `map` are two modern and very useful methods for this.
- They work well with arrow functions, which we learned about earlier.

### The `forEach()` Method

- Think of `forEach()` as a command: "Go to each element and **do** something with it."
- This method calls a function you define for each element in the array.
- It's perfect when you want to perform an action for each element but don't need a new array as a result.

- **The key point about `forEach()` is: I do something, but I don't return anything.** The return value of `forEach()` is always `undefined`.

**Syntax:**

```javascript
yourArray.forEach((currentElement, index) => {
  // Your code that is executed for each element
});
```

- `currentElement`: The element from the array currently being processed.
- `index` (optional): The index of the current element.

**Example 1: Outputting each name**
We have an array of names and want to greet each name in the console.

```javascript
let gaeste = ["Anna", "Bernd", "Carla"];

gaeste.forEach((name) => {
  console.log("Hello, " + name + "!");
});

// Output:
// Hello, Anna!
// Hello, Bernd!
// Hello, Carla!
```

**Example 2: Working with indices**

- We want to print out a numbered list of our fruits.

```javascript
let meineObstArray = ["Apfel", "Banane", "Kirsche"];

meineObstArray.forEach((frucht, index) => {
  console.log(index + 1 + ". " + frucht);
});

// Output:
// 1. Apfel
// 2. Banane
// 3. Kirsche
```

<br>

#### The `map()` Method

- Think of `map()` as a transformation machine.
- You put an array in, and a **completely new array** comes out.
- Each element of the new array is the result of a transformation of the corresponding element from the old array.
- The original array remains unchanged.

- **The key point of `map()` is: I take each element, transform it, and return a new array with the transformed elements.**

**Syntax:**

```javascript
let neuesArray = deinAltesArray.map((currentElement, index) => {
  // Your code that transforms the element
  return transformedElement; // VERY IMPORTANT: the 'return'!
});
```

- The crucial difference from `forEach` is the `return`. Whatever you return here becomes the element in the new array.

**Example 1: Doubling numbers**

- We have an array of numbers and want to create a new array where each number is doubled.

```javascript
let zahlen = [1, 2, 3, 4, 5];

let verdoppelteZahlen = zahlen.map((zahl) => {
  return zahl * 2;
});

console.log(verdoppelteZahlen); // Outputs [2, 4, 6, 8, 10]
console.log(zahlen); // Outputs [1, 2, 3, 4, 5] (the original is unchanged!)
```

**Example 2: Transforming names to uppercase**

- We want to create a new array from our guest array where all names are in uppercase.

```javascript
let gaeste = ["Anna", "Bernd", "Carla"];

let grosseNamen = gaeste.map((name) => {
  return name.toUpperCase();
});

console.log(grosseNamen); // Outputs ["ANNA", "BERND", "CARLA"]
```

- **What happens if you forget `return`?**
  If you forget `return` in the `map` function, `undefined` is returned by default. Your new array will then be full of `undefined` values.

```javascript
let zahlen = [1, 2, 3];

let falschesErgebnis = zahlen.map((zahl) => {
  // Oops, forgot 'return'!
  zahl * 2;
});

console.log(falschesErgebnis); // Outputs [undefined, undefined, undefined]
```

<br>

#### `forEach()` vs. `map()`: The Main Difference

The choice between `forEach` and `map` depends on what you want to achieve. The following table summarizes the most important differences:

| Feature          | `forEach()`                                   | `map()`                                                      |
| :--------------- | :-------------------------------------------- | :----------------------------------------------------------- |
| **Purpose**      | Perform an action for each element            | Transform each element and create a new array                |
| **Return Value** | Always `undefined`                            | A new array with transformed elements                        |
| **Mutability**   | Does not change the original array            | Does not change the original array                           |
| **Use Case**     | When you want to do something (e.g., logging) | When you want to create a new array based on transformations |

<br><br><br>

# Objects

<br><br><br>

## What is an Object?

- An object is a complex data structure that allows you to store multiple related values as `key-value pairs`.
- Each key (also called a `property`) is a string that acts as a label for its corresponding `value`.
- Values can be of any data type, including numbers, strings, arrays, functions, or even other objects.
- Objects are created using curly braces `{}`, with each key-value pair separated by commas.
- Objects are ideal for representing real-world entities with multiple attributes, such as a person, a car, or a product.

## Creating Objects and Accessing Properties

- To create an object, you just use curly braces `{}` and list the key-value pairs inside.

**Syntax:**

- The key is always a string (even if you can often omit the quotation marks), followed by a colon `:`, then the value.
- The individual pairs are separated by a comma `,`.

```javascript
const person = {
  vorname: "Max",
  nachname: "Mustermann",
  alter: 30,
  istStudent: false,
  adresse: {
    strasse: "Musterstraße 1",
    stadt: "Musterstadt",
  },
};
```

In this example, we have an object `person`.

- The key `vorname` has the value `"Max"` (a string).
- The key `alter` has the value `30` (a number).
- The key `istStudent` has the value `false` (a Boolean).
- The key `adresse` has another object as its value! Objects can therefore also be nested inside each other.

#### Accessing with Dot Notation

- Once you've created the object, of course you want to read out the values.
- The most direct way is dot notation.
- You write the name of the object, a dot `.`, and then the `key name` you want to access.

**Example:**

```javascript
// We use the "person" object from above
console.log(person.vorname); // Outputs: "Max"
console.log(person.alter); // Outputs: 30

// Accessing a nested object
console.log(person.adresse.stadt); // Outputs: "Musterstadt"
```

- This method is very readable and intuitive.
- However, it only works if the key is a valid JavaScript identifier (i.e. it cannot contain spaces, hyphens, or other special characters and cannot start with a number).

#### Accessing with Bracket Notation

- Bracket notation is more flexible and powerful.
- Here you write the name of the object followed by square brackets `[]`.
- Inside the brackets is the key name as a string (i.e., in single or double quotes).

**Example:**

```javascript
// Again, we use the "person" object
console.log(person["nachname"]); // Outputs: "Mustermann"
console.log(person["istStudent"]); // Outputs: false

// Accessing nested objects also works here
console.log(person["adresse"]["strasse"]); // Outputs: "Musterstraße 1"
```

### Comparison of Access Methods

| Feature         | Dot notation (`.`)         | Bracket notation (`[]`)                |
| :-------------- | :------------------------- | :------------------------------------- |
| **Syntax**      | `object.property`          | `object['property']`                   |
| **Readability** | Very good, often preferred | A bit more cumbersome to write         |
| **Keys**        | Only valid JS identifiers  | Any string can be used as a key        |
| **Dynamic use** | No, name must be fixed     | Yes, key name can come from a variable |

<br><br><br>

## Adding and Removing Properties

- Once created, objects are not set in stone.
- You can add new properties or remove existing ones at any time.
- That makes them very flexible.

### Adding Properties

- Adding a new property is surprisingly easy.
- You act as if the property already exists and simply assign it a value.
- You can use both dot and bracket notation.

**Example:**

```javascript
const auto = {
  marke: "Volkswagen",
  modell: "Golf",
};

console.log(auto); // Outputs: { marke: 'Volkswagen', modell: 'Golf' }

// Add new property 'farbe' with dot notation
auto.farbe = "blue";

// Add new property 'baujahr' with bracket notation
auto["baujahr"] = 2021;

console.log(auto);
// Now outputs the extended object:
// { marke: 'Volkswagen', modell: 'Golf', farbe: 'blue', baujahr: 2021 }
```

- If a property already exists, its value is simply overwritten by the assignment.

```javascript
auto.farbe = "red"; // Changes the value from 'blue' to 'red'
console.log(auto.farbe); // Outputs: "red"
```

### Removing Properties

- To delete a property completely from an object (i.e., the entire key-value pair), you use the `delete` operator.

**Syntax:**
`delete object.property;` or `delete object['property'];`

**Example:**

```javascript
const fahrrad = {
  marke: "Cube",
  farbe: "black",
  gaenge: 21,
  hatLicht: true,
};

console.log(fahrrad);
// Outputs: { marke: 'Cube', farbe: 'black', gaenge: 21, hatLicht: true }

// Let's remove the property 'gaenge'
delete fahrrad.gaenge;

console.log(fahrrad);
// Now outputs: { marke: 'Cube', farbe: 'black', hatLicht: true }
// The property 'gaenge' is completely gone.
```

- What happens if you try to access a removed property?
- You get the special value `undefined`, which means in JavaScript that something has no value.

```javascript
console.log(fahrrad.gaenge); // Outputs: undefined
```

# Working with Nested Data Structures

<br><br><br>

- Imagine you have a box. In this box are more boxes, and in some of these boxes are folders.
- In the folders, there are individual sheets of paper.
- This is essentially the whole secret behind nested data structures.
- We simply put data structures (like boxes or folders) into other data structures.

- In programming, our "boxes" and "folders" are mainly **objects** and **arrays**.

- **Object `{}`**: Like a dresser with labeled drawers. Each drawer (a _key_) contains a certain content (a _value_). You find things by opening the right drawer. `dresser.sockDrawer`
- **Array `[]`**: Like a stack of numbered boxes. You access the content by knowing the number of the box (the _index_). The stack always starts counting at 0. `boxStack[0]`

- Nested data structures arise when the content of a drawer (object) is a whole stack of boxes (array), or when there is a complete dresser (object) in a box (array).

<br><br><br>

## Arrays in Objects and Objects in Arrays

<br><br><br>

Here we take a closer look at the two most common combinations. This is the absolute foundation for understanding complex data—like those you get from websites or databases.

### Arrays in Objects

- Imagine a user profile. A user has various properties, such as a name and age.
- This begs for an object, since we have labeled "drawers": `name` and `age`.
- But what if the user has several hobbies?
- We can't just say `hobby = "Reading, Cooking, Hiking"`. This is impractical if we want to know just the second hobby.

- The solution: We put the hobbies in their own list (an array) and place this list in the user's "hobby drawer" in our user object.

**Example:**

An object `benutzer` containing a name (string), an age (number), and a list of hobbies (array).

```javascript
let benutzer = {
  name: "Anna",
  alter: 28,
  istAktiv: true,
  hobbys: ["Reading", "Cooking", "Hiking", "Photography"],
  adresse: {
    strasse: "Musterstraße 1",
    stadt: "Berlin",
  },
};
```

Here you see:

- The entire `benutzer` thing is an object (recognized by `{}`).
- The properties `name`, `alter`, and `istAktiv` have simple values (text, number, true/false).
- The property `hobbys` has an array `[...]` as its value. That's an **array in an object**.
- The property `adresse` even has another object as a value. That's an **object within an object**.

### Objects in Arrays

- Now let's reverse the scenario.
- Imagine you have an entire school class.
- The class is a list of students. Each student, in turn, is a complex unit with name, grade, and maybe an ID.

- The solution: We create a list (an array), and each entry in this list is a complete object that describes a student.

**Example:**

An array `schulklasse` that contains a list of student objects.

```javascript
let schulklasse = [
  {
    id: 101,
    name: "Max Mustermann",
    note: 1.7,
    faecher: ["Math", "German"],
  },
  {
    id: 102,
    name: "Erika Mustermann",
    note: 2.1,
    faecher: ["English", "Art", "History"],
  },
  {
    id: 103,
    name: "Peter Pan",
    note: 3.5,
    faecher: ["PE", "Biology"],
  },
];
```

Here you see:

- The entire `schulklasse` is an array (recognized by `[]`).
- Each element in this array is a complete object `{...}`. That's an **object in an array**.
- Within these student objects, there is again a nested structure: the property `faecher` contains an array with the subjects of the particular student.

<br><br><br>

## Accessing and Manipulating Complex Data Structures

<br><br><br>

Alright, now we've built these complex box-in-a-case structures. But how do we get to the things we need? And how can we change, add, or remove something? Think of it as giving directions: "Go to the dresser, open the third drawer, take the second sock from the left."

### 👉 How Do I Access Data? (Read)

We simply combine the access methods for objects (dot notation or bracket notation) and arrays (bracket notation with index).

| What do I want to know?                     | The "directions"                                                                                                                                                  | The Code                    | The Result           |
| :------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------- | :------------------- |
| Anna's name                                 | Go to the `benutzer` object, open the `name` drawer.                                                                                                              | `benutzer.name`             | `"Anna"`             |
| Anna's second hobby                         | Go to the `benutzer` object, open the `hobbys` drawer (which is an array). Take the element at position 1 (we count from 0!).                                     | `benutzer.hobbys[1]`        | `"Cooking"`          |
| The city where Anna lives                   | Go to the `benutzer` object, open `adresse` (an object). Then open `stadt`.                                                                                       | `benutzer.adresse.stadt`    | `"Berlin"`           |
| The name of the second student in the class | Go to the `schulklasse` list. Take the element at position 1 (which is an object). From this object, open the `name` drawer.                                      | `schulklasse[1].name`       | `"Erika Mustermann"` |
| The first subject of the third student      | Go to the `schulklasse` list. Take the element at position 2 (an object). From this object, open the `faecher` drawer (an array). Take the element at position 0. | `schulklasse[2].faecher[0]` | `"PE"`               |

So you hop from point to point, index to index, along the structure until you reach your target. This is also called "chaining."

### ✍️ How Do I Manipulate Data? (Modify, Add, Delete)

Manipulation works on the same principle: First, you navigate to the place you want to edit, and THEN perform the desired action.

#### Changing values

To change a value, navigate there and assign a new value with the equals sign (`=`).

- **Correct Anna's age:** She just had a birthday.
  ```javascript
  benutzer.alter = 29;
  // benutzer.alter is now 29
  ```
- **Improve Erika's grade:**
  ```javascript
  schulklasse[1].note = 1.9;
  // The grade in Erika's object is now 1.9
  ```

#### Adding elements

There are various methods, depending on where you want to add something.

- **Add a new hobby for Anna:** We use the `.push()` method for arrays to add an element at the end.
  ```javascript
  benutzer.hobbys.push("Traveling");
  // benutzer.hobbys is now ["Reading", "Cooking", "Hiking", "Photography", "Traveling"]
  ```
- **Add a new student to the class:** We add a completely new object to the `schulklasse` array.
  ```javascript
  let neuerSchueler = {
    id: 104,
    name: "Sandra Schmidt",
    note: 2.0,
    faecher: ["Physics", "Chemistry"],
  };
  schulklasse.push(neuerSchueler);
  // The 'schulklasse' array now has 4 student objects
  ```
- **Add a new property to an object:** We simply define a new "drawer" and give it a value.
  ```javascript
  benutzer.beruf = "software developer";
  // The 'benutzer' object now has a 'beruf' property
  ```

#### Deleting elements

There are also various ways here.

- **Remove Anna's third hobby ("Hiking"):** We use the `.splice()` method for arrays. It's very powerful. `splice(startIndex, numberOfElements)` means: Go to the start index and remove X elements from there.
  ```javascript
  // "Hiking" is at index 2
  benutzer.hobbys.splice(2, 1);
  // benutzer.hobbys is now ["Reading", "Cooking", "Photography", "Traveling"]
  ```
- **Delete a property from an object:** For this we use the `delete` keyword.
  ```javascript
  // We want to remove the 'istAktiv' property from Anna
  delete benutzer.istAktiv;
  // The 'istAktiv' property no longer exists in the 'benutzer' object
  ```

Here's a summary table for manipulation:

| Action     | Target               | Method                     | Example code                                            |
| :--------- | :------------------- | :------------------------- | :------------------------------------------------------ |
| **Modify** | Value in an object   | Assignment (`=`)           | `benutzer.name = "Anna Schmidt";`                       |
|            | Value in an array    | Assignment (`=`) via index | `benutzer.hobbys[0] = "Reading novels";`                |
| **Add**    | Property to object   | New assignment (`=`)       | `benutzer.sprachen = ["German", "English"];`            |
|            | Element to array     | `.push()` (at end)         | `schulklasse.push({id: 105, ...});`                     |
| **Delete** | Property from object | `delete` operator          | `delete benutzer.alter;`                                |
|            | Element from array   | `.splice(index, number)`   | `schulklasse.splice(0, 1);` (removes the first student) |
