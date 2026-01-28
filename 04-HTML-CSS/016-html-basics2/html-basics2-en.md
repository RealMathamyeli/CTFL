# HTML Basics II: Lists, Links, Images, and Forms

Lists and Links

- Creating ordered (`<ol>`) and unordered (`<ul>`) lists with list items (`<li>`)
- Setting up hyperlinks (`<a>`) with attributes such as `href` and `target`

Embedding Images

- Inserting graphics with the `<img>` tag and assigning attributes (`src`, `alt`, `title`)
- Correct handling of relative and absolute file paths

Creating Simple Forms

- Basic form elements (`<form>`, `<input>`, `<label>`, `<button>`)
- Sending data through simple form examples

<br><br><br>

# 🔗 Lists and Links

Lists help you structure your content clearly (like a shopping list or a top-10 ranking).
Links (hyperlinks) are what connect everything together — they create the “web” that links your pages to other pages, whether that’s your own “About Me” page or an external website like Google.

<br><br><br>

## 📋 Creating Lists

Whenever you have a list of items, you should use HTML list elements instead of typing numbers or bullet points manually inside a `<p>` tag.
The reason is **semantics** — the browser (and search engines) _understand_ that this content is a list, which also helps accessibility tools like screen readers.

All lists, no matter the type, use the same tag for each entry: `<li>` (List Item).
What changes is the container around them.

<br><br><br>

### 📝 Unordered Lists (`<ul>`)

An unordered list is perfect when the **order doesn’t matter** — like a shopping list.
Whether you buy milk or eggs first makes no difference.

- The container tag is `<ul>` (Unordered List).
- Each item is wrapped in an `<li>` (List Item).

**Visual effect:** The browser displays these items with bullet points by default.

**Example:**

```html
<h2>My Shopping List</h2>
<ul>
  <li>Milk</li>
  <li>Eggs</li>
  <li>Bread</li>
</ul>
```

<br><br><br>

### 🔢 Ordered Lists (`<ol>`)

Use an ordered list when the **sequence matters** — such as a recipe, a step-by-step guide, or a “Top 3” ranking.

- The container tag is `<ol>` (Ordered List).
- Each entry is an `<li>`.

**The best part:** You don’t have to type the numbers — the browser counts automatically (1, 2, 3 …).
If you later insert a new step in the middle, the numbering updates automatically.

**Example:**

```html
<h2>Recipe: Pancakes</h2>
<ol>
  <li>Add flour and eggs to a bowl.</li>
  <li>Pour in milk and stir.</li>
  <li>Fry in a pan until golden brown.</li>
</ol>
```

<br><br><br>

<br><br><br>

## 🔗 Creating Hyperlinks (`<a>`)

A hyperlink is the clickable element that takes you to another page.
It’s one of the most important tags on the web: the `<a>` tag.

The “a” stands for **anchor**. But an `<a>` tag alone does nothing — it needs additional information, called **attributes**.

<br><br><br>

### 🎯 The `href` Attribute (Destination)

The most important attribute is `href`, which stands for **Hypertext Reference** — it defines **where** the link points to.
It’s like the address on an envelope.

- The text _between_ `<a>` and `</a>` is the clickable part (usually blue and underlined).

**Example 1: External link**
When linking to another website, include the full URL with `https://` (or `http://`):

```html
<p>The best search engine is <a href="https://www.google.com">Google</a>.</p>
```

**Example 2: Internal link (relative link)**
When linking to another page _within your own site_, omit the domain — that’s a **relative path**:

```html
<p>Also visit my <a href="contact.html">Contact Page</a>!</p>
```

<br><br><br>

### 🖱️ The `target` Attribute (Where to Open the Link)

The `target` attribute defines _how_ the link opens — in the same tab or a new one.

| `target` value | Behavior                                | When to use                                                        |
| :------------- | :-------------------------------------- | :----------------------------------------------------------------- |
| **`_self`**    | (Default) Opens in the **current tab**. | When linking _within your own website_.                            |
| **`_blank`**   | Opens in a **new browser tab**.         | When linking to **external websites**, so users don’t leave yours. |

**Example using `target="_blank"`:**

```html
<p>
  Visit <a href="https://www.wikipedia.org" target="_blank">Wikipedia</a> (opens
  in a new tab).
</p>
```

<br><br><br>

### 🔒 Important Security Note for `target="_blank"`

Whenever you use `target="_blank"`, you should **always** add `rel="noopener noreferrer"` for security reasons:

```html
<a
  href="https://www.external-site.com"
  target="_blank"
  rel="noopener noreferrer"
  >External Link</a
>
```

**Why?**
It prevents the newly opened page (which you don’t control) from accessing the original window via JavaScript.
It’s a small but essential habit for safer web development.

<br>
<br>
<br>

# 🖼️ Embedding Images

To display an image in HTML, we use the `<img>` tag. It’s one of the most important tags in the entire language.

A special thing about the `<img>` tag: it’s a **“void element”**, meaning it has **no closing tag** (like `</img>`).
Just like `<br>` or `<hr>`, it cannot wrap any content — it stands alone.

However, for the browser to know _which_ image to show and _how_ to handle it, the `<img>` tag needs additional information.
These are called **attributes**.

<br><br><br>

## 🏷️ Inserting Images Using the `<img>` Tag and Assigning Attributes

Think of the `<img>` tag as an empty picture frame.
The attributes are the instructions you give the browser to fill that frame.

<br><br><br>

### 📍 The `src` Attribute (The Source)

The **`src`** attribute is by far the most important one. It stands for **“Source.”**

- **Purpose:** It tells the browser **where** to find the image — the address or path to the file.
- **Without `src`:** The browser can’t display anything.

```html
<img src="cat-photo.jpg" />
```

<br><br><br>

### 💬 The `alt` Attribute (The Alternative Text)

The **`alt`** attribute is the second most important and should **never be omitted**.
It stands for **“Alternative Text.”**

- **Purpose:** Provides a short, clear **description** of what the image shows.
- It’s crucial for three main reasons:
  1. **Accessibility:** Screen readers (used by blind or visually impaired users) read out the `alt` text. Without it, they wouldn’t know what’s in the image.
  2. **Error Handling:** If the image can’t be loaded (e.g., wrong `src` path), the browser displays the `alt` text instead.
  3. **SEO (Search Engine Optimization):** Google and other search engines can’t “see” images perfectly. They use the `alt` text to understand and index the content for image search.

```html
<img
  src="puppy.jpg"
  alt="A small golden retriever puppy sitting in green grass" />
```

<br><br><br>

### 🖱️ The `title` Attribute (The Title)

The **`title`** attribute is an optional piece of extra information.

- **Purpose:** Adds additional, non-critical context about the image.
- **Visual Effect:** Most browsers show it as a small tooltip when hovering the mouse over the image.
- **Difference from `alt`:**
  - `alt` describes _what_ the image is (important).
  - `title` provides _extra context_ (optional).

```html
<img
  src="paris-eiffel-tower.jpg"
  alt="The Eiffel Tower in Paris at night"
  title="Taken during my 2024 trip to Paris" />
```

<br><br><br>

## 🧭 Correct Use of Relative and Absolute Paths

Just like the `href` attribute in links, the `src` attribute in `<img>` needs a file path.
There are two fundamental types of “path descriptions” you can give the browser.

Imagine your HTML file is your “home base.”

<br><br><br>

### 🏠 Relative Paths (Internal Images)

A relative path describes the location of a file **relative to your current HTML file**.
This is the standard method for all images that belong to your own web project.

**Main advantage:**
If you upload your entire project folder to a server or share it with someone, all images will still work, because their relative structure remains the same.

Here are the three most common scenarios:

| Scenario                     | Folder Structure (your “home” is `index.html`)                      | Code Example (inside `index.html`) | Explanation (the “directions”)                                        |
| :--------------------------- | :------------------------------------------------------------------ | :--------------------------------- | :-------------------------------------------------------------------- |
| **Image in the same folder** | `project/`<br> `├── index.html`<br> `└── logo.png`                  | `<img src="logo.png">`             | “Take the file `logo.png` from this same directory.”                  |
| **Image in a subfolder**     | `project/`<br> `├── index.html`<br> `└── images/`<br> `└── cat.png` | `<img src="images/cat.png">`       | “Go into the `images` folder and use `cat.png`.”                      |
| **Image in a parent folder** | `project/`<br> `├── logo.png`<br> `└── html/`<br> `└── index.html`  | `<img src="../logo.png">`          | “Go **up one level** (out of the `html` folder) and take `logo.png`.” |

<br><br><br>

### 🌍 Absolute Paths (External Images)

An absolute path is the **full, global URL** of an image on the web.
It always begins with `https://` (or `http://`).

You use this when you want to display an image hosted on a **different website** — this is called “hotlinking.”

```html
<img
  src="https://upload.wikimedia.org/wikipedia/commons/3/30/Vulpes_vulpes_ssp_fulvus_in_NW_USA.jpg"
  alt="A red fox sitting on a tree trunk" />
```

**Important warnings about absolute paths:**

1. **Copyright:** You don’t own the image! Make sure you have permission to use it.
2. **Dependency:** If the external website deletes, renames, or moves the image, it will break on your site (and only show the `alt` text).
3. **Traffic Usage:** You’re consuming the other site’s bandwidth — some servers actively block this.

# 📝 Creating Simple Forms

Let’s look at how to tell the browser that we want to collect data — and what tools we need to do it.

<br><br><br>

## 🧱 The Basic Elements of a Form

A form always consists of several parts:
the **container** (`<form>`), the **labels** (`<label>`), the **input fields** (`<input>`), and a **submit button** (`<button>`).

<br><br><br>

### 📦 The `<form>` Element: The Container

Think of the `<form>` tag as a **mail envelope** or a **shipping box**.

Everything that belongs to the form (all input fields, buttons, etc.) must be placed _inside_ the `<form>`...`</form>` container.
By itself, the `<form>` tag is invisible.

It needs two very important attributes to know what to do:

1. **`action` (Action):** This is the “address” where the envelope will be sent. It specifies the URL or file path of the server script (for example, a PHP, Python, or Node.js file) that will receive and process the form data.
   Example: `action="/process-login.php"`
2. **`method` (Method):** This is the “delivery type.” It defines _how_ the data will be sent. The two most common methods are `GET` and `POST` (more on that below).

```html
<form action="/search" method="GET"></form>
```

<br><br><br>

### 🏷️ The `<label>` Element: The Caption

A `<label>` (caption) is the text that tells the user **what** to enter in a field (for example, “Username:” or “Email:”).

You _could_ use a `<p>` tag, but `<label>` is far better — especially for accessibility and usability.

A `<label>` is linked to an input field through the `for` attribute.
The value of `for` must exactly match the value of the input’s `id` attribute.

**The magic effect:**

1. Screen readers now know that the label “Email:” belongs to the corresponding input field.
2. Even better — when the user **clicks the label text**, the cursor automatically jumps into the linked input field. Super useful, especially on mobile!

```html
<label for="username">Username:</label> <input type="text" id="username" />
```

<br><br><br>

### ⌨️ The `<input>` Element: The Input Field

The `<input>` tag is the “workhorse” of every form.
It’s a **void element**, so it has no closing tag.
It’s incredibly flexible — its appearance and behavior depend on its most important attribute: `type`.

**Key attributes for `<input>`:**

- **`type`:** Defines what kind of data is expected.
- **`id`:** A **unique identifier** for the element on the page (used for `<label for="...">`).
- **`name`:** The **key** for the submitted data — it’s how the server receives it.
  If you specify `name="email"` and the user enters “[test@mail.com](mailto:test@mail.com)”, the server receives:
  `email=test@mail.com`.
  **Without a `name` attribute, the data won’t be sent!**

**Common `type` values:**

| `type` Value | Description                                                                                            |
| :----------- | :----------------------------------------------------------------------------------------------------- |
| `text`       | Standard single-line text input (e.g. name, username).                                                 |
| `password`   | Like `text`, but input is masked (••••).                                                               |
| `email`      | A text field optimized for email input; mobile devices show an email keyboard and validate the format. |
| `checkbox`   | A check box for on/off selections (e.g. “Accept Terms”).                                               |
| `radio`      | A radio button — when multiple have the same `name`, only one can be selected.                         |
| `number`     | Numeric field, often with up/down arrows.                                                              |
| `submit`     | (Legacy but still works) A clickable button that submits the form.                                     |

<br><br><br>

### 🖱️ The `<button>` Element: The Submit Button

Every form needs a button to send it.
The modern way is to use the `<button>` tag.

By default, a `<button>` _inside_ a `<form>` automatically behaves like a submit button (`type="submit"`).

```html
<button type="submit">Send Now</button>
```

- `type="submit"` – (default) triggers the form’s `action` and submits the data.
- `type="reset"` – clears all input fields and resets the form (rarely used today).
- `type="button"` – a “dumb” button that does nothing; used for JavaScript.

<br><br><br>

## 📤 Sending Data Through Simple Form Examples

Now let’s take a closer look at the `GET` and `POST` methods you specify in `<form method="...">`.

<br><br><br>

### 📬 The `method` Attribute: GET vs. POST

The choice of method is crucial for both security and functionality.

| Property               | `method="GET"` (The Postcard)                                               | `method="POST"` (The Envelope)                                                                    |
| :--------------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **How are data sent?** | Data are **attached to the URL** (e.g. `.../search?q=cats`).                | Data are sent **in the invisible body** of the request.                                           |
| **Visibility**         | **Everyone** can see the data in the URL, browser history, and server logs. | **Invisible.** Data are not shown in the URL.                                                     |
| **Limit**              | URL length is limited (≈ 2000 characters). For small data only.             | No practical limit — good for large data (e.g. file uploads).                                     |
| **Security**           | **Not secure!** Never use for passwords or private data.                    | **More secure.** Standard for logins, contact forms, etc. (Combine with HTTPS for true security!) |
| **Use Case**           | **Reading/searching:** filters, bookmarks (e.g. Google search).             | **Writing/sending:** logins, registrations, messages.                                             |

<br><br><br>

### ✉️ Example 1: Contact Form Using `POST`

Here’s how all the pieces fit together.
We use `POST` because names and emails are private.

```html
<form action="/scripts/contact.php" method="POST">
  <div>
    <label for="username">Your Name:</label>
    <input type="text" id="username" name="user_name" />
  </div>

  <div>
    <label for="email">Your Email:</label>
    <input type="email" id="email" name="user_email" />
  </div>

  <div>
    <label for="message">Your Message:</label>
    <textarea id="message" name="user_message" rows="5"></textarea>
  </div>

  <div>
    <button type="submit">Send Message</button>
  </div>
</form>
```

<br><br><br>

### 🔍 Example 2: Search Form Using `GET`

Here we use `GET` because searches aren’t private and we want the URL to be shareable.

```html
<form action="/search" method="GET">
  <label for="searchfield">Search:</label>
  <input type="text" id="searchfield" name="q" />
  <button type="submit">Search</button>
</form>
```

If you type “cat videos” and submit, your browser’s URL changes to:
`https://www.your-site.com/search?q=cat+videos`
You can see the data right in the address bar — key `q`, value `cat videos`.
