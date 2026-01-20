# Challenge: The Profile Switcher

**Goal:** Write JavaScript code that changes the profile picture and the name on the card as soon as the button is clicked.

#### 1. The Starter Code (HTML)

Copy this HTML code into a file (e.g., `index.html`). It contains an image, a heading, and a button.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Profile Switcher</title>
  </head>
  <body>
    <main>
      <img
        id="profile-pic"
        width="150px"
        src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
        alt="Civilian" />

      <h1 id="profile-name">The Civilian</h1>

      <button id="cloak-button">Activate Cloak</button>
    </main>
  </body>
</html>
```

#### 2. Your Tasks

1. Create a corresponding JavaScript file (`script.js`). Link `script.js` at the end of the `<body>` in your `index.html`.

2. **Select:** Create three variables and store the following elements in them:

- The image element (use the ID `profile-pic`).
- The heading (use the ID `profile-name`).
- The button (use the ID `cloak-button`).

3. **Function:** Write a function (e.g., named `switchIdentity`) that does the following:

- Change the text of the heading (`.textContent`) to **"Agent 007"**.
- Change the source of the image (`.src`) to this URL: `"https://cdn.pixabay.com/photo/2015/10/31/12/32/james-bond-1015612_1280.jpg"`.

4. **Event:** Add an **event listener** to the button. When the user clicks it (`'click'`), your function should be executed.

---

### Need Help? (Tips)

- Remember to use `document.getElementById('id-name')` or `document.querySelector('#id-name')` to select the elements.
- To swap the image, you need to access the `.src` attribute directly.
