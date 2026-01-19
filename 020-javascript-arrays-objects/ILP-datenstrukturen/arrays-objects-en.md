# Your Individual Learning Phase: The Data Archive

Welcome to the **Data Archive**! Now, you will learn how to store and organize the data itself.
**Setup:**

1. Inside `data-archive` folder, create two files: `index.html` and `script.js`.
2. Open your `script.js` file linked to `index.html`.
3. Open the Chrome Developer Tools (Right-click -> Inspect -> Console).
4. Write your code, save, and refresh the browser to see the results.
5. Push your changes to GitHub when you're done!

---

### Task 1: The Collection (Arrays)

**Estimated Time: 30 Minutes**

In this task, you will create simple lists using **Arrays**. Remember, an array is an ordered collection where every item has a specific position called an **index**, starting at **0**.

1. **Create:** Create an array called `travelList`. Fill it with 3 destinations (strings) you want to visit (e.g., `"London"`, `"Tokyo"`, `"New York"`).
2. **Read:** Use `console.log` to output the **first** destination and the **third** destination .
3. **Modify:** You changed your mind! Overwrite the second destination with a new city (e.g., change "Tokyo" to "Sydney").
4. **Check:** Log the entire array to the console to see the change.

---

### Task 2: The Data Processor (Iteration)

**⏱️ Estimated Time: 45 Minutes**

Now you will use "machines" to process your lists automatically. You will use `forEach` to inspect items and `map` to transform them.

**Part A: The Price Checker (`forEach`)**

1. Create an array called `prices` with these numbers: `[10, 20, 50, 100]`.
2. Use the `.forEach()` method to loop through the array.
3. Inside the loop, write a `console.log` that prints: `"The price is: [number] €"`.

- _Remember:_ `forEach` does **not** return a new list; it just performs an action.

**Part B: The Discount Machine (`map`)**

1. Use the same `prices` array.
2. Use the `.map()` method to create a **new array** called `salePrices`.
3. Inside the map function, return the price divided by 2 (50% off).
4. Log the new `salePrices` array to the console. You should see `[5, 10, 25, 50]`.

---

### Task 3: The Blueprint (Objects)

**⏱️ Estimated Time: 40 Minutes**

Arrays are for lists; **Objects** are for describing specific things with properties (key-value pairs).

1. **Create:** Create an object called `book` describing your favorite book. It should have keys for:

- `title` (string)
- `author` (string)
- `pages` (number)
- `isRead` (boolean)

2. **Read (Dot Notation):** Log the `title` and `author` to the console using the dot `.` syntax.
3. **Read (Bracket Notation):** Log the `pages` using the bracket `["pages"]` syntax.
4. **Add:** You forgot the language! Add a new property `language` to the object and set it to `"English"` (or your language).
5. **Delete:** You finished reading it. Delete the `isRead` property from the object.
6. **Check:** Log the whole `book` object to see the final result.

---

### Task 4: The Master Archive (Nested Data)

**⏱️ Estimated Time: 50 Minutes**

Real-world data is complex. You often find objects inside arrays, or arrays inside objects. This is called **nesting**.
**Scenario:** You are managing a contact list for a phone book.

1. **Create:** Create an array called `contacts`. Inside this array, add **3 Objects**. Each object should represent a person and look like this:

```javascript
{
  name: "Alice",
  number: "123-456",
  hobbies: ["Reading", "Hiking"] // An Array inside an Object!
}

```

_(Make sure to create 3 different people with different hobbies)._ 2. **Deep Access:**

- Log the **name** of the **first** person in the array.
- Log the **first hobby** of the **second** person. .

1. **Manipulation:**

- The third person has a new number. Update the `number` property of the **third** object in the array.
- Add a new hobby to the **first** person's `hobbies` array using `.push()` .

1. **Final Log:** Print the entire `contacts` array to the console to verify your complex data structure.
