# Basic Structure of HTML

[HTML Tag List](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)

Here we’ll look at the foundation that _every_ modern website needs so that a browser can display it correctly.

<br><br><br>

## Writing a Minimal HTML5 Document

An HTML document is basically just a plain text file saved with the `.html` extension (e.g., `index.html`).
For a browser to understand what it’s reading, the file must follow a very specific structure. This structure is standardized and often referred to as a **boilerplate**.

<br><br><br>

### The Skeleton: A Minimal Example

Here’s the absolute minimum an HTML5 file must contain.
Every line serves an important purpose.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>This is the page title</title>
  </head>
  <body>
    <h1>My first website</h1>
    <p>Hello world! This is the visible content.</p>
  </body>
</html>
```

<br><br><br>

### The Building Blocks Explained

Let’s go through this structure line by line.
HTML consists of **tags**, which almost always come in pairs — an opening tag (e.g. `<p>`) and a closing tag (e.g. `</p>`).

- `<!DOCTYPE html>`
  This is _not_ an HTML tag but a **declaration**. It must always be the very first line.
  It tells the browser: “Heads up! The following content is modern HTML5. Don’t switch into an outdated compatibility mode.”

- `<html> ... </html>`
  This is the **root element**. Think of this tag pair as a big box that contains _everything else_ (except the DOCTYPE). It wraps the entire document.
  - The attribute `lang="en"` tells the browser (and search engines like Google) that the main language of the page is English.

- `<head> ... </head>`
  This is the **head section** of the document — like the brain or backpack of the webpage.
  The contents here are **not directly visible** to visitors (except the title).
  It contains _metadata_ — information _about_ the page.

- `<body> ... </body>`
  This is the **body** of the document — the part you actually **see** in the browser window.
  All visible elements such as text, images, videos, links, and headings (like `<h1>` and `<p>`) go here.

<br><br><br>

## The Role of `<title>` and `<meta>`

These two elements are the most important residents of the `<head>` section. They are crucial for browsers and search engines.

<br><br><br>

### The `<title>` Element (The Title)

The `<title>` tag, as the name suggests, defines the official title of your document — and it’s extremely important.

**Where do you see it?**

1. **In the browser tab:** It’s the text displayed at the top of your browser tab. It helps users identify the page when multiple tabs are open.
2. **In Google search results:** It’s the clickable blue headline shown by Google for your page.
3. **In bookmarks/favorites:** When someone saves your page, this title is used as the bookmark name.

[Image showing where the `<title>` tag appears: in a browser tab and a Google search result]

A good title is short, precise, and clearly describes what the page is about (e.g., “Crispy Bread Recipe – Bake the Perfect Loaf | Kalle’s Bakery”).

<br><br><br>

### The `<meta>` Element (Additional Information)

“Meta” means “data about data.”
`<meta>` tags provide browsers and search engines with extra technical or descriptive information about your page.
There are dozens of different meta tags, but one is absolutely essential:

- `<meta charset="UTF-8">`
  This is usually the very first tag inside `<head>`. It defines the **character encoding** — basically the “alphabet” your browser should use to interpret the page.
  - **Why UTF-8?** UTF-8 is a universal standard that supports nearly all characters in all languages, including accented letters (ä, ö, ü) and special symbols (€ , @ , …).
  - **What if you forget it?** The browser might guess the wrong alphabet, causing weird text issues — for example, `fÃ¼r` instead of `für`.

**Other important `<meta>` tags**
You’ll often see several additional ones. Here are the most common examples:

| Meta Tag        | Purpose                                                                                                           | Example                                                                              |
| :-------------- | :---------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **Viewport**    | **Crucial for mobile devices!** Tells mobile browsers to fit the page to the screen width instead of zooming out. | `<meta name="viewport" content="width=device-width, initial-scale=1.0">`             |
| **Description** | The short description (“snippet”) that Google often shows below the title in search results.                      | `<meta name="description" content="Learn how to bake crispy bread easily at home.">` |
| **Author**      | Specifies the page’s author.                                                                                      | `<meta name="author" content="Kalle Baker">`                                         |
| **Keywords**    | (Obsolete) Used to list search terms; Google mostly ignores it now.                                               | `<meta name="keywords" content="bread, baking, recipe">`                             |

<br><br><br>

# Text Formatting in HTML

HTML gives you tools to structure your text **semantically**.
“Semantically” means that you tell the browser (and search engines!) what _meaning_ a piece of text has. Is it a heading? A regular paragraph? Is it something important?

<br><br><br>

## The Building Blocks: Headings and Paragraphs

These are the most important elements for structuring a page.
Imagine you’re writing a document in Word or Google Docs.

<br><br><br>

### `<h1>` to `<h6>`: The Hierarchy of Headings

Headings are the table of contents of your webpage.
They divide your content into logical sections and subsections.

- **`<h1>` (Heading 1):** This is the **main heading** of your page. It’s like the title of a book. There should be **only one `<h1>` per page**, describing what the entire page is about.
- **`<h2>` (Heading 2):** These are the **main chapters** of your page. You can have several of them.
- **`<h3>` to `<h6>`:** These are **subsections** (`h3`), sub-subsections (`h4`), and so on. They further break down your `<h2>` sections.

**Important:** Never use headings just because you want the text to “look big” or “bold”!
Always use them in the correct logical order for **structure**. For example, don’t jump from an `<h1>` straight to an `<h3>` without an `<h2>` in between.

Screen readers (software that reads web pages aloud to visually impaired users) rely on this heading structure for navigation — so a clean hierarchy is essential for accessibility.

**Example structure:**

```html
<body>
  <h1>The Ultimate Guide to Baking Bread</h1>
  <p>Welcome to my guide...</p>

  <h2>1. The Ingredients</h2>
  <p>Everything you need for a perfect loaf...</p>
  <h3>1.1 Choosing the Right Flour</h3>
  <p>Wheat flour type 550 works great...</p>
  <h3>1.2 Yeast vs. Sourdough</h3>
  <p>Yeast is quick, sourdough is...</p>

  <h2>2. The Recipe</h2>
  <p>Here’s the step-by-step process...</p>
</body>
```

<br><br><br>

### `<p>`: Flowing Text in Paragraphs

The `<p>` tag (Paragraph) is the **workhorse** for your main body text.

- **What it does:** It wraps a block of text. The browser automatically adds small margins before and after each paragraph so that the text doesn’t appear squashed together.
- **Important:** Pressing the Enter key in your HTML editor _does not_ create a new paragraph in the browser. The browser ignores plain line breaks. You must always use a new `<p>...</p>` pair to start a new paragraph.

```html
<p>
  This is the first paragraph. It contains lots of interesting text about HTML.
</p>

<p>
  This is the second paragraph. Even if you add many blank lines between them in
  the code, the browser only shows the standard spacing.
</p>
```

<br><br><br>

## Highlighting and Emphasizing Text

Sometimes you want to draw attention to specific words or phrases inside a paragraph.

<br><br><br>

### `<strong>`: Strong Importance

The `<strong>` tag tells the browser: “This text is **very important**, serious, or urgent!”

- **Visual effect:** Browsers display it **bold** by default.
- **Semantic meaning:** A screen reader may read this part with a stronger or louder tone — it’s more than just decoration.
- **Example:**
  `<p><strong>Warning:</strong> Do not touch the hot surface!</p>`

<br><br><br>

### `<em>`: Emphasized Meaning

The `<em>` tag (short for _emphasis_) tells the browser: “This word or phrase should be **emphasized**.”
Imagine you’re stressing that word while speaking to shift the meaning of the sentence.

- **Visual effect:** Browsers display it _italicized_ by default.
- **Semantic meaning:** It changes the focus or nuance of the sentence.
- **Example:**
  `<p>I would <em>really</em> like some ice cream.</p>`
  (vs. `<p>I would really like some <em>ice cream</em>.</p>`)

<br><br><br>

## Visual Structuring: Line Breaks and Horizontal Rules

These elements are special because they mostly affect **layout**, not meaning.
They should be used sparingly.

<br><br><br>

### `<br>`: The Forced Line Break

The `<br>` tag (Break) is a so-called “empty element” — it has no closing tag (`</br>`).

- **What it does:** It forces an immediate line break **without** creating a new paragraph with extra spacing.
  It’s like pressing **Shift + Enter** in Word.
- **Use case:** Common for addresses or poetry, where lines should appear directly underneath each other.
- **Warning:** Never use `<br><br><br>` to fake vertical spacing between paragraphs. That’s “dirty” HTML. Use CSS for spacing instead.

**Example:**

```html
<p>
  Max Mustermann<br />
  Example Street 1<br />
  12345 Example City
</p>
```

<br><br><br>

### `<hr>`: The Horizontal Divider

The `<hr>` tag (Horizontal Rule) is also an empty element.

- **What it does:** It marks a **thematic break** in your content — like moving to a new idea or scene.
- **Visual effect:** The browser draws a horizontal line across the page by default.

**Example:**

```html
<p>...and thus ended the story of the first baker.</p>

<hr />

<h2>A New Chapter Begins</h2>
<p>The second baker had a completely different idea...</p>
```
