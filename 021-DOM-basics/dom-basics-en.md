# DOM Basics and Event Handling

DOM Basics

- Selecting HTML elements with document.querySelector and document.getElementById
- Changing text contents and attributes of DOM elements

Events and Event Handling

- Adding and removing event listeners for click events
- Accessing event objects and their properties

Practical Project

- Combining DOM manipulation and event handling in a small web application
- Testing functionality directly in the browser

# DOM Basics

<br><br><br>

## What is the DOM?

- Imagine a website (an HTML document) like a family tree.
- At the very top is the ancestor, the `<html>` element.
- This has two direct children: `<head>` and `<body>`.
- The `<body>` element, in turn, has its own children, such as a heading `<h1>`, a paragraph `<p>`, and perhaps a container `<div>`.
- This `<div>` can then have its own children again, and so on.

- The **DOM**, which stands for **D**ocument **O**bject **M**odel, is exactly this tree-like structure of your HTML document that the browser creates in its memory when it loads a website.

- The key idea is: Every single branch and every leaf in this tree—so each HTML element, each piece of text, every comment—becomes an **object**.
- And because they're objects, we can address, read, and change them with JavaScript.
- The DOM is the bridge that allows JavaScript to interact with the content and structure of a webpage.
- You can use it to
  - add or remove elements,
  - change their appearance,
  - or respond to user clicks.
- You don’t work directly with the raw HTML text, but with this living, interactive structure in the browser's memory.

<br><br><br>

## Selecting HTML Elements

- Before you can change anything about an HTML element, you first have to tell JavaScript _which_ element you mean.
- There are several methods for this.

### Selecting by ID: `document.getElementById()`

- Every element on a website can have an `id` attribute.
- This ID must be **unique** on the entire page—like your personal fingerprint.
- There must not be another element with the same ID.
- Because the ID is so unique, this is a very fast and direct way to find a specific element.

**How it works:**

- You call the `getElementById()` method on the `document` object and pass it the name of the ID (as text, i.e., in quotation marks).

**Example:**

- Suppose you have the following HTML code:

```html
<h1 id="main-heading">Welcome to my website!</h1>
```

- With JavaScript, you can save this element into a variable like this:

```javascript
let myHeading = document.getElementById("main-heading");
```

- The variable `myHeading` now contains the complete `<h1>` object, and you can work with it further.

### Selecting with CSS Selectors: `document.querySelector()`

- This method is more modern and much more flexible.
- The big advantage: You can use exactly the same selectors you already know from CSS!
- That makes it incredibly powerful.

**Important note:** `querySelector()` always stops as soon as it has found the **first matching element** and returns only this one element. Even if there are multiple elements on the page that match the selector, you always get only the first.

**Examples of use:**

1.  **Select an element by its ID** (just like with `getElementById`):
    - HTML: `<p id="intro">This is the first paragraph.</p>`
    - JavaScript: `let introText = document.querySelector('#intro');`
    - Here you must use the `#` symbol, just like in CSS.

2.  **Select an element by its class:**
    - HTML: `<p class="note">Please observe the new rules.</p>`
    - JavaScript: `let importantNote = document.querySelector('.note');`
    - Here you use the period `.` before the class name. If there were multiple elements with the class "note", only the first one would be found.

3.  **Select an element by its tag name:**
    - HTML: `<footer>Copyright 2023</footer>`
    - JavaScript: `let footer = document.querySelector('footer');`

<br><br><br>

### Changing DOM Elements

Once you have successfully selected an element and stored it in a variable, you can change its properties. The most common changes involve the content (text) and attributes (e.g., the image source of an `<img>` tag).

#### Changing Text Contents

- To change the text inside an element, there are mainly two properties you can use: `.textContent` and `.innerHTML`.

**1. The Safe Version: `.textContent`**

- This property accesses only the pure text content of an element.
- Any HTML tags inside the element are ignored or displayed as plain text.
- That makes `.textContent` very safe because users cannot inject harmful HTML or script code.

**Example:**

- Let's take our `<h1>` element from earlier:

```javascript
// 1. Select the element
let myHeading = document.getElementById("main-heading");

// 2. Read out and print the text content in the console
console.log(myHeading.textContent); // Outputs: "Welcome to my website!"

// 3. Overwrite the text content
myHeading.textContent = "Hello world! Glad you are here.";
```

- After this code, "Hello world! Glad you are here." would now appear on the website instead of the original text.

**2. The Flexible Version: `.innerHTML`**

- With `.innerHTML`, you can not only read or set the text but also the entire HTML markup _inside_ an element.
- The browser interprets the text you assign here as HTML code.

**Example:**
Let’s take a `<div>` container:

```html
<div id="info-box">Here is old information.</div>
```

```javascript
// 1. Select the element
let infoBox = document.getElementById("info-box");

// 2. Overwrite the content with new HTML code
infoBox.innerHTML = "This is <strong>important</strong> information!";
```

- The result on the website is: "This is **important** information!".
- The word "important" is bold because the browser recognized the `<strong>` tag as HTML.
- If you had used `.textContent` here, the page would display `This is <strong>important</strong> information!`—with the tags visible.

Here’s a direct comparison:

| Property           | Description                                                                         | Security                                                                                                             | Use Case                                                                                                  |
| :----------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| **`.textContent`** | Reads or sets only the plain text content. HTML tags are ignored/displayed as text. | **Very high.** Prevents cross-site scripting (XSS), since no HTML is interpreted.                                    | Ideal if you only want to swap out text that comes from a safe source or a user.                          |
| **`.innerHTML`**   | Reads or sets the entire HTML markup within an element.                             | **Caution!** If you insert user input here without sanitizing it, they can inject malicious code (e.g., `<script>`). | Useful if you want to deliberately create and insert HTML structures dynamically (e.g., a list of items). |

#### Changing Attributes

- Attributes are the extra info you specify in an HTML opening tag, like `src` in an image, `href` in a link, or `class` for styling.
- You can also easily change these with JavaScript.

- The simplest method is direct access via "dot notation", as if the attribute were a property of the object.

**Example 1: Changing an Image Source**

- Imagine this image:

```html
<img id="profile-pic" src="images/old-photo.jpg" alt="An old photo" />
```

- You can replace the image source like so:

```javascript
// 1. Select the image element
let img = document.getElementById("profile-pic");

// 2. Change the src attribute directly via dot notation
img.src = "images/new-photo.png";

// You can also change other attributes
img.alt = "A new, recent photo";
```

- As soon as the line `img.src = ...` is executed, the browser loads and displays the new image.

**Example 2: Changing a Link Target**

```html
<a id="my-link" href="https://www.old-site.com">Visit the old site</a>
```

```javascript
// 1. Select the link element
let link = document.getElementById("my-link");

// 2. Change the href attribute
link.href = "https://www.new-site.com";

// 3. We can also change the text at the same time
link.textContent = "Visit the brand new site!";
```

- Now the link leads to another URL and has new text.

**General methods: `setAttribute()` and `getAttribute()`**

Sometimes dot notation doesn’t work for all attributes (especially custom `data-*` attributes) or you want to keep things general. For this, there are two methods that always work:

- `element.getAttribute('attributeName')`: Reads the current value of an attribute.
- `element.setAttribute('attributeName', 'newValue')`: Sets the value of an attribute or adds the attribute if it does not yet exist.

**Example:**

```javascript
let link = document.getElementById("my-link");

// Read the current value of the href attribute
let currentTarget = link.getAttribute("href");
console.log(currentTarget); // Outputs "https://www.new-site.com"

// Set the title attribute (for the tooltip)
link.setAttribute("title", "Click here for more info!");
```

# Events and Event Handling

- Imagine a website like a stage.
- The HTML elements (buttons, images, text fields) are the actors on this stage.
- Events are all the things that can happen:
  - An audience member (the user) claps (clicks a button),
  - an actor enters the stage (the mouse hovers over an image),
  - someone yells something (a key is pressed).

- **Event handling** is the director’s instruction for your actors.
- You tell a specific actor (e.g., a button) what to do _when_ a certain event occurs.
- You “listen” for an event and define a reaction to it.
- This process turns a website from a static document into an interactive application.
- Without event handling, every website would be like a painted picture—nice to look at, but you can’t do anything with it.

<br><br><br>

## Adding and Removing Event Listeners

- An "event listener" is like a little spy you assign to an HTML element.
- You give it the task: "Listen closely! As soon as you hear a 'click' sound on this element, immediately execute these instructions."

### Adding an Event Listener (`addEventListener`)

- The most common method for listening for events is `addEventListener()`.
- The basic structure looks like this:

```javascript
htmlElement.addEventListener("event-type", functionName);
```

- Let’s break this down:

1.  **`htmlElement`**: This is the specific element from your HTML you want to listen to. You have to select it with JavaScript first, e.g., with `document.getElementById('myButton')`.
2.  **`'event-type'`**: This is a string (text) that describes what event you’re waiting for. For a click, it’s `'click'`. Other examples would be `'mouseover'` (mouse moves over), `'keydown'` (key is pressed), or `'submit'` (form is submitted).
3.  **`functionName`**: This is the function that is to be executed _when the event occurs_. This function is also called a "callback function" or "event handler". You can provide the name of an already existing function or write an anonymous function (a function without a name) directly.

**Example:**

- Imagine you have this HTML button:

```html
<button id="myButton">Click me!</button>
<p id="message"></p>
```

- Now we’ll add an event listener with JavaScript that outputs a message when clicked:

```javascript
// 1. Select the HTML element and save in a variable
const button = document.getElementById("myButton");
const messageParagraph = document.getElementById("message");

// 2. Define the function to be executed on click
function showMessage() {
  messageParagraph.textContent = "Yay, you clicked the button!";
  console.log("The button was clicked.");
}

// 3. Add the event listener to the button
// We tell the button: "When someone 'clicks' you, execute the function 'showMessage'."
button.addEventListener("click", showMessage);
```

### Removing an Event Listener (`removeEventListener`)

- Sometimes you want an element to stop listening for an event.
- For example, after it’s been clicked once, or if the state of your application changes.
- For this, there’s `removeEventListener()`.

**Very important:** You can only remove an event listener if you defined the handler function as a named function (like `showMessage` in the example above) and not as an anonymous function. JavaScript needs to know _which_ function to remove exactly.

The structure is almost identical to adding:

```javascript
htmlElement.removeEventListener("event-type", functionName);
```

**Example:**

Let’s extend our previous example. We’ll add a second button that removes the event listener from the first button.

```html
<button id="clickMeButton">Click me!</button>
<button id="removeListenerButton">Deactivate the first button</button>
<p id="message"></p>
```

```javascript
// 1. Select the elements
const clickMeButton = document.getElementById("clickMeButton");
const removeListenerButton = document.getElementById("removeListenerButton");
const messageParagraph = document.getElementById("message");

// 2. Define the handler function with a name (IMPORTANT!)
function showClickMessage() {
  messageParagraph.textContent = "This button still works!";
  // Reset the text after 2 seconds so you can see the effect multiple times
  setTimeout(() => {
    messageParagraph.textContent = "";
  }, 2000);
}

// 3. Add the event listener
clickMeButton.addEventListener("click", showClickMessage);

// 4. Add a second event listener for the "Remove" button
removeListenerButton.addEventListener("click", function () {
  // Now we remove the listener from the first button
  clickMeButton.removeEventListener("click", showClickMessage);

  // Feedback for the user
  messageParagraph.textContent =
    "The first button has been deactivated. It will no longer respond to clicks.";
  console.log("Event listener removed.");
});
```

- Now if you click the first button, the message appears.
- If you then click the second button and then the first again, nothing happens anymore.
- The spy has been pulled out.

<br><br><br>

## Accessing Event Objects and Their Properties

- When an event occurs and your event listener is triggered, something magical happens in the background: The browser automatically creates a special object that’s packed with useful information about exactly this event. This object is called the **event object**.

- The browser automatically passes this object as the first argument to your handler function. You just have to accept it by defining a parameter in your function. Usually, this parameter is called `event` or just `e`.

```javascript
htmlElement.addEventListener("click", function (event) {
  // In here, you have access to the 'event' object
  console.log(event);
});
```

- This `event` object is like a toolbox full of tools and information.
- Here are some of the most important properties and methods you’ll find in it:

| Property / Method                     | Description                                                                                                                                                                                                                                                                                                           |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`event.target`**                    | This is the specific element that _triggered_ the event. If you have a click listener on a `<div>` that contains a `<strong>` text, and the user clicks on the bold text, `event.target` is the `<strong>` element.                                                                                                   |
| **`event.currentTarget`**             | This is the element that the event listener was _attached_ to. In the above example, `event.currentTarget` is always the `<div>` element, no matter where within the div the user clicks.                                                                                                                             |
| **`event.type`**                      | A simple string that indicates the type of event, e.g., `'click'` or `'mouseover'`. Useful if the same function listens for different events.                                                                                                                                                                         |
| **`event.preventDefault()`**          | This is a **method** (a function on the object). It prevents the browser’s default behavior for this event. Clicking on a link (`<a>`) by default navigates to a new page. Clicking a "Submit" button in a form by default submits the form and reloads the page. With `event.preventDefault()`, you can stop this.   |
| **`event.stopPropagation()`**         | Also a **method**. It prevents the event from "bubbling up". If you click an element inside another element (e.g., a button in a div), the click event first fires on the button, then the div, then `<body>`, etc., all the way up to `window`. `event.stopPropagation()` stops this journey at the current element. |
| **`event.clientX` / `event.clientY`** | These properties give you the X and Y coordinates of the mouse pointer in the visible part of the window (the viewport) at the time of the click.                                                                                                                                                                     |

### Practical Example for the Event Object

- Let’s look at an example that uses some of these properties.

```html
<a id="myLink" href="https://www.google.com" target="_blank"
  >Go to Google (will be prevented)</a
>
<div
  id="box"
  style="width: 200px; height: 200px; background-color: lightblue; margin-top: 10px; padding: 20px;">
  Outer Box
  <button id="innerButton">Inner Button</button>
</div>
```

```javascript
// Example for preventDefault()
const link = document.getElementById('myLink');

link.addEventListener('click', function(event) {
  // Prevent the default link behavior (navigating to Google)
  event.preventDefault();

  // Instead, output a message in the console
  console.log('Link click was intercepted!');
  console.log('The target element was:', event.target);
  alert('Opening Google was prevented by preventDefault()!');
});


// Example for target, currentTarget, and stopPropagation()
const box = document.getElementById('box');
const innerButton = document.getElementById('innerButton');

// Listener on the outer box
box.addEventListener('click', function(event) {
  console.log('--- Click on the box ---');
  console.log('event.target:', event.target); // The element that originally received the click
  console.log('event.currentTarget:', event.currentTarget); // Always the box, since that's where the listener is attached
  alert('Click on the OUTER box!');
});

// Listener on the inner button
innerButton.addEventListener('click', function(event) {
  // Stop the event from bubbling up to the box
  // Try it out by commenting this line!
  event.stopPropagation();

  console.log('--- Click on the inner button ---');
  console.log('event.target:', event.target); // Is the button itself
  console.log('event.currentTarget:', event.currentTarget); // Also the button itself
  alert('Click on the INNER button! The box won't know about this.');
});
```

- If you run this code, you’ll see:

1.  A click on the link does _not_ open Google but shows an `alert` box. `event.preventDefault()` worked.
2.  A click on the inner button only shows the `alert` for the button. The click event is stopped before it reaches the outer box, thanks to `event.stopPropagation()`. If you comment out that line and click again, you’ll see the "button" message and then the "box" message.
3.  The console outputs show you exactly the difference between `target` (who threw the stone into the water?) and `currentTarget` (who heard the splash because they had the listener attached?).
