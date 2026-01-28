## 1. DOM Basics: Your Look Behind the Scenes (approx. 50 minutes)

In this task, you will dive into the Document Object Model (DOM), the foundation of every dynamic website. You will learn how to access HTML elements and manipulate them as you wish.

### Your Mission: Transform the Static into the Dynamic

1.  **Preparation:**
    - Create a new project folder with a name of your choice.(e.g., `dom-basics-challenge`).
    - Create a new HTML file (`index.html`) and a corresponding JavaScript file (`script.js`). Link `script.js` at the end of the `<body>` in your `index.html`.
    - Add various elements to your `index.html`:
      - An `<h1>` heading.
      - A `<p>` tag with the `id="beschreibung"` (description).
      - Several `<div>` elements, all sharing the common `class="kachel"` (tile).
      - An `<img>` tag with any `src` and `alt` attribute.
      - An empty `<span>` element with the `id="status-anzeige"` (status-display).

2.  **Select and Modify Elements:**
    - Use `document.getElementById()` to select the `<p>` element with the `id="beschreibung"`. Change its `textContent` to a completely new, exciting sentence.
    - Select the `<h1>` heading with `document.querySelector()` and change its `innerHTML` so that, in addition to its text, it contains a `<strong>` element.
    - Use `document.querySelectorAll()` to select _all_ `<div>` elements with the `class="kachel"`. Iterate over these elements (e.g., with a `for` loop or `forEach`) and:
      - Change their background color with `element.style.backgroundColor`.
      - Add a new CSS class (e.g., `activated`) to each element (`element.classList.add()`).
    - Select the `<img>` tag and change its `src` and `alt` attributes to display a new image. Use a URL for any online image (e.g., from unsplash.com).
    - Add a new, custom `data-`attribute to the `<span>` element with the `id="status-anzeige"` (e.g., `data-initial-status="ready"`).

### Self-Reflection

What new insights have you gained about the structure of the DOM? Was there a selector or manipulation method that you found particularly useful? How confident do you feel now about finding and modifying any elements on a webpage?

## 2. Events and Event Handling: Bringing Your Website to Life (approx. 50 minutes)

Now it's about breathing interactivity into your website! You will learn how to react to user actions and manage events like mouse clicks.

### Your Mission: Interact with the User

1.  **Preparation:**
    - Extend your `index.html` with a button with the `id="klick-mich"` (click-me) and an empty `<div>` with the `id="meldung"` (message).
    - Add another button with the `id="toggle-stil"` (toggle-style).

2.  **Register Events:**
    - Select the button with the `id="klick-mich"`.
    - Add a `click` event listener to it (`addEventListener`).
    - When the button is clicked, the `textContent` of the `<div>` with the `id="meldung"` should change and display a greeting.
    - Select the button with the `id="toggle-stil"`.
    - Also add a `click` event listener to this button.
    - When this button is clicked, it should add or remove (`element.classList.toggle()`) a specific CSS class (e.g., `highlighted`) to the `<div>` with the `id="meldung"`. Create this CSS class in the `<style>` tag of your HTML file, for example, to change the background color.

3.  **Understand the Event Object:**
    - Extend one of your event listener functions. Output the `event` object itself (`event`) and specifically `event.target` to the console (`console.log()`) when the button is clicked. What do you see?

4.  **Remove Events:**
    - Implement logic where the button with `id="klick-mich"` performs _no_ further actions after the fifth click. Hint: You will need a counter and a named function for your event listener to use `removeEventListener()`.

### Self-Reflection

How has your website's interaction changed through events? What is the advantage of dynamically registering and also removing events? Can you already imagine what other event types could be useful to make a webpage more lively?

## 3. Application Project: Interactive Color Picker (approx. 50 minutes)

Now it's time to combine what you've learned and create a small, functional web application. Your goal is a simple color picker.

### Your Mission: Build a Color Picker

1.  **HTML Structure (`index.html`):**
    - Create a large `<div>` with the `id="farb-anzeige"` (color-display), which is initially empty and whose background color will change. Give it a minimum height and width via CSS to make it visible.
    - Below it, place several `<button>` elements. Each button represents a color (e.g., "Red", "Blue", "Green", "Yellow").
    - Give each of these color buttons a custom `data-`attribute, e.g., `data-color="red"` for the red button, `data-color="blue"` for the blue button, etc.

2.  **JavaScript Logic (`script.js`):**
    - Select the `<div>` with the `id="farb-anzeige"`.
    - Select _all_ color buttons (e.g., via a common class or with `querySelectorAll('button[data-color]')`).
    - Iterate over these buttons and add a `click` event listener to each.
    - Inside the event listener:
      - Access the `data-color` attribute of the clicked button. (Hint: `event.target.dataset.color`).
      - Set the `background-color` property of the `<div>` with the `id="farb-anzeige"` to the value you read from the `data-color` attribute.
      - (Optional): Additionally, update the `textContent` of the `<div>` with the `id="farb-anzeige"` to display the name of the currently selected color.

3.  **Styling (optional, but recommended):**
    - Add some CSS to make your color picker panel and buttons visually appealing.

### Self-Reflection

How did the interplay of DOM manipulation and event handling feel in this project? What challenges did you encounter during implementation, and how did you solve them? What ideas do you have to extend this project or develop a similar interactive application based on the fundamentals learned today?
