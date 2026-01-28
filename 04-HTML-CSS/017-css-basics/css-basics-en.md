# CSS basics and syntax

- Basic structure of a CSS rule: selector, property, value
- Linking external and internal stylesheets

Important CSS selectors and colors

- Application of different selector types: class, ID, attribute selectors
- Defining and using color values: Hex, RGB, HSL

Fonts and text styling

- Embedding and adjusting web fonts
- Formatting: font size, style, weight, line height

Layout with box model and Flexbox

- Understanding the box model: margin, border, padding, content
- Creating flexible layouts with Flexbox: main axis, alignment, order

Practical application

- Building a simple, styled sample website using the content
- Troubleshooting: Common sources of error in CSS design<br><br><br>

# 🎨 CSS Basics and Syntax

- Imagine your website as a house.
- HTML is the foundation, the walls, and the roof—pure structure.
- CSS (Cascading Style Sheets) is everything that makes the house beautiful and livable: wall color, furniture, curtains, decoration.
- CSS is the language you use to define the look and design of your website.

<br><br><br>

## 🧱 Basic Structure of a CSS Rule

Every instruction you write in CSS follows a very specific pattern, called a "rule." A rule is like a command to the browser, for example: "Hey browser, make all paragraphs blue!" Such a rule always consists of the same building blocks.

Let’s look at a simple rule:

```css
p {
  color: blue;
  font-size: 16px;
}
```

This rule consists of three main parts: the selector (`p`) and a declaration block (everything in the `{ }`), which contains properties (`color`, `font-size`) and associated values (`blue`, `16px`).

Let’s break it down in a table:

| Component             | Example        | Explanation                                                                       |
| :-------------------- | :------------- | :-------------------------------------------------------------------------------- |
| **Selector**          | `p`            | Selects the HTML element to be styled. In this case, all `<p>` tags (paragraphs). |
| **Declaration Block** | `{ ... }`      | Curly braces enclose all style instructions for the selected selector.            |
| **Declaration**       | `color: blue;` | A single style instruction. Always consists of a property and a value.            |
| **Property**          | `color`        | The feature you want to change (e.g., text color, font size, background).         |
| **Value**             | `blue`         | The exact setting for how the property should look.                               |
| **Separator**         | `:` and `;`    | Colon separates property and value. Semicolon ends a declaration.                 |

Let’s go through the most important parts in detail.

### 🎯 The Selector

The selector is the first and one of the most important parts of a CSS rule. It answers the question: **"What or who do I want to style?"**

Think of it as an address on a letter. You must specify exactly who gets the letter (the style instruction). In CSS, you can use various types of selectors to select elements:

- **Element Selector:** You address an HTML tag directly by its name.
  - `h1` selects all `<h1>` headings.
  - `p` selects all `<p>` paragraphs.
  - `img` selects all `<img>` images.
- **Class Selector:** In HTML, give one or more elements a "class" (e.g., `class="important"`). In CSS, reference this class with a dot in front.
  - `.important` selects _all_ elements that have the attribute `class="important"`.
- **ID Selector:** In HTML, give a _single, unique_ element an ID (e.g., `id="mainlogo"`). In CSS, reference it with a hash (`#`) in front.
  - `#mainlogo` selects the _one_ element with the attribute `id="mainlogo"`.

The selector is thus the target of your styling instruction.

### 🔧 The Property

The property answers the question: **"Which feature of the selected element do I want to change?"**

After targeting with the selector, you use the property to state exactly what you want to change about the target. CSS offers you an extensive toolbox with hundreds of properties.

A few basic examples:

- `color`: Changes the text color.
- `background-color`: Changes the background color.
- `font-size`: Changes the font size.
- `font-family`: Changes the font (e.g., Arial, Times New Roman).
- `border`: Adds a border around the element.
- `width`: Sets the element's width.
- `margin`: Sets the outer spacing to other elements.

You always write the property followed by a colon (`:`).

### 🎨 The Value

The value answers the final question: **"What exactly should the property look like?"**

The value is the specific setting you assign to the property. Each property can accept different types of values.

Let’s look at the above examples:

- For `color` the value could be a color name (`red`, `green`, `blue`) or a hex code (`#FF5733`).
- For `font-size` the value could be a pixel value (`18px`) or a relative unit like `em` (`1.2em`).
- For `font-family` the value is the name of a font (`"Helvetica"`).
- For `border` the value is more complex and usually consists of three parts: thickness, style, and color (`1px solid black`).

Each declaration (the pair of property and value) ends with a semicolon (`;`). This is very important, as it tells the browser: "This instruction ends here, next one follows."

<br><br><br>

## 🔗 Linking Stylesheets

Great, now you know how a CSS rule is structured. But how does this rule get to your HTML file so the browser can use it? HTML (structure) and CSS (design) are separate languages. You have to connect them. There are mainly two methods for this.

### 📁 External Stylesheet

This is the most common and recommended method.

**The idea:** Write all your CSS code in a separate file with the `.css` extension (e.g., `style.css`). You then link this file to your HTML file (or even several HTML files).

**How to:**

1.  Create a new file, save it as `style.css` in the same folder as your HTML file.
2.  Write your CSS rules in this `style.css` file.
3.  Open your HTML file and add the following line in the `<head>` area:

```html
<head>
  <meta charset="UTF-8" />
  <title>My Website</title>
  <link rel="stylesheet" href="style.css" />
</head>
```

**What does the `<link>` tag mean?**

- `rel="stylesheet"`: `rel` stands for "relationship." You tell the browser: "The file I'm linking here is a stylesheet."
- `href="style.css"`: `href` stands for "hypertext reference." Here you specify the path to your CSS file. If it's in the same folder, the filename is enough.

**Advantages of this method:**

- **Clean separation:** Your HTML code remains clear and contains only the content structure. Your design code stays neatly in its own file.
- **Maintainability:** If you want to change the design of your entire website (e.g., a different font), you only need to change this one `.css` file, and the change applies to all linked HTML pages.
- **Load times:** Browsers can cache the CSS file. When a visitor visits another page on your site, `style.css` doesn't have to be downloaded again, making the site faster.

### 📄 Internal Stylesheet

This method is less common but can be useful in certain cases.

**The idea:** Write your CSS rules directly in the HTML file's `<head>` area, enclosed in a `<style>` tag.

**How to:**
Add the following block to your HTML file’s `<head>` area:

```html
<head>
  <meta charset="UTF-8" />
  <title>My Single Page</title>
  <style>
    body {
      background-color: lightblue;
    }
    h1 {
      color: navy;
    }
  </style>
</head>
```

The CSS rules inside the `<style>` tag apply **only to this one HTML file**.

**When is this used?**

- When you have a single, standalone HTML page (e.g., a special landing page) for which a separate CSS file isn't worthwhile.
- If you have styles that should only ever apply to this page and nowhere else.

For most projects, especially those with more than one page, the **external stylesheet** is clearly the better choice.

# 🎨 Important CSS Selectors and Colors

<br><br><br>

## 🎯 The Different Types of Selectors

Imagine your HTML page is a room full of furniture. CSS is your toolbox for styling (changing color, adjusting size, etc.). **Selectors** are your instructions for _which_ piece of furniture you want to work on. You can say: “Style all chairs” (element selector), “Style only the furniture with the red label” (class selector), or “Style the one unique sofa with serial number 123” (ID selector).

Let’s look at the main types in detail.

<br><br><br>

### 🏷️ Class Selector (`.classname`)

A **class** is like a label or sticker you can put on as many HTML elements as you want. All elements with the same “label” (the same class name) can then be styled at once with a single CSS rule. This is extremely useful for defining recurring styles.

**How does it work?**

1.  **In HTML:** Add the `class` attribute to one or more elements. For example: `<p class="warning">`.
2.  **In CSS:** Reference this class with a dot (`.`) followed by the class name. Example: `.warning { ... }`.

**Example:**
You want all important notices on your page to appear red and bold.

**HTML code:**

```html
<h2>A regular heading</h2>
<p class="warning">Attention: This is important information!</p>
<div>
  <p>This is a regular paragraph.</p>
  <span class="warning">Also note this advice.</span>
</div>
```

**CSS code:**

```css
.warning {
  color: red;
  font-weight: bold;
}
```

**Result:**
Both the `<p>` paragraph and the `<span>` element with the `warning` class will be bold and red. The `<h2>` heading and the normal `<p>` paragraph are unaffected because they don’t have this "label".

<br><br><br>

### 🆔 The ID Selector (`#idname`)

An **ID** is like a unique personal identification number. Each ID must be used **only once per HTML page**. It is absolutely unique. IDs are used to target one specific element, for example, the main navigation area, the footer, or a special contact form.

**How does it work?**

1.  **In HTML:** Add the `id` attribute to a _single_ element. For example: `<header id="siteheader">`.
2.  **In CSS:** Reference this ID with a hash (`#`) followed by the ID name. For example: `#siteheader { ... }`.

**Example:**
You want to give your page’s main content area a special border and some padding.

**HTML code:**

```html
<header id="siteheader">
  <h1>My Website</h1>
</header>

<main id="maincontent">
  <p>This is all the important content of the page.</p>
</main>

<footer>
  <p>Copyright 2023</p>
</footer>
```

**CSS code:**

```css
#maincontent {
  border: 2px solid #cccccc;
  padding: 20px;
  background-color: #f9f9f9;
}
```

**Result:**
Only the `<main>` element with the ID `maincontent` receives the gray border, padding, and light gray background. The header and footer remain unchanged.

<br><br><br>

### 📝 Attribute Selector (`[attribute=value]`)

With this selector, you become a detective. You can find elements not only by their name, class, or ID, but also by their **attributes** and their values. An attribute is an extra piece of information within an HTML tag, like `href` in a link or `type` in an input field.

**How does it work?**

1.  **In HTML:** Elements already have different attributes.
2.  **In CSS:** Use square brackets `[]` to search for attributes.

There are several variants:

- `[attribute]` – Selects all elements that have this attribute, regardless of value.
- `[attribute="value"]` – Selects all elements whose attribute equals this value.
- `[attribute^="value"]` – Selects elements whose attribute value _starts_ with "value".
- `[attribute$="value"]` – Selects elements whose attribute value _ends_ with "value".

**Example:**
You want to mark all links that open in a new tab (`target="_blank"`) with a small icon to inform users.

**HTML code:**

```html
<a href="internal-page.html">Internal Link</a>
<br />
<a href="https://www.google.com" target="_blank">Open Google in new tab</a>
<br />
<a href="https://www.wikipedia.org" target="_blank"
  >Open Wikipedia in new tab</a
>
```

**CSS code:**

```css
/* Select ALL a-tags with the target="_blank" attribute */
a[target="_blank"] {
  /* Add a small icon after the link text */
  padding-right: 20px;
  background-image: url("icon-external-link.svg");
  background-repeat: no-repeat;
  background-position: center right;
}
```

**Result:**
Only the links to Google and Wikipedia with the `target="_blank"` attribute receive the small icon. The internal link remains unchanged.

| Selector Type | CSS Syntax            | Use Case                                                        | Uniqueness                               |
| :------------ | :-------------------- | :-------------------------------------------------------------- | :--------------------------------------- |
| **Class**     | `.classname`          | For styling **groups** of elements.                             | Can be used as often as needed per page. |
| **ID**        | `#idname`             | For styling a **single, unique** element.                       | Must occur only **once per page**.       |
| **Attribute** | `[attribute="value"]` | For styling elements based on their HTML attributes and values. | Depends on the attribute/value.          |

<br><br><br>

## 🌈 Defining and Using Colors in CSS

Colors are at the heart of design. Computers need to know exactly which color you mean, so there are various "languages" or formats for describing colors. The three most common are HEX, RGB, and HSL.

<br><br><br>

### 🔢 HEX (Hexadecimal Color Values)

This is probably the most widely used format on the web. A HEX value is a six-digit combination of numbers (0-9) and letters (A-F), preceded by a hash (`#`).

**How does it work?**
The code is split into three pairs: `#RRGGBB`.

- `RR`: Red component.
- `GG`: Green component.
- `BB`: Blue component.

Each pair can range from `00` (none of that color) to `FF` (maximum of that color).

- `#FF0000` is pure red (max red, no green, no blue).
- `#000000` is black (no color).
- `#FFFFFF` is white (all colors at maximum).
- `#33CC99` is a turquoise tone.

**Short notation:** If all three pairs are identical characters, you can abbreviate. For example, instead of `#FF00CC`, you can write `#F0C`. Instead of `#666666`, write `#666`.

**CSS Example:**

```css
body {
  background-color: #f2f2f2; /* A very light gray */
}

h1 {
  color: #3a5fcd; /* A nice blue */
}

p {
  color: #333; /* A dark gray (short for #333333) */
}
```

<br><br><br>

### 🔴🟢🔵 RGB and RGBA (Red, Green, Blue, Alpha)

This format is often easier to read because it uses the decimal system. It also mixes red, green, and blue.

**How does it work?**
Use the `rgb()` function and supply three values, each from `0` (no component) to `255` (maximum).

`rgb(red, green, blue)`

- `rgb(255, 0, 0)` is pure red.
- `rgb(0, 0, 0)` is black.
- `rgb(255, 255, 255)` is white.

**RGBA for transparency:**
**RGBA** adds a fourth value: the **alpha channel**. This controls the opacity (transparency) of the color.

- Alpha value is between `0.0` (completely transparent) and `1.0` (completely opaque).
- A value of `0.5` is 50% opacity.

`rgba(red, green, blue, alpha)`

This is very useful for effects like semi-transparent backgrounds where the content behind still shows.

**CSS Example:**

```css
.infobox {
  /* Solid blue background */
  background-color: rgb(58, 95, 205);
  color: white;
}

.overlay {
  /* Semi-transparent black background */
  background-color: rgba(0, 0, 0, 0.7);
}
```

<br><br><br>

### ☀️ HSL and HSLA (Hue, Saturation, Lightness, Alpha)

HSL is the most intuitive format, especially if you want to fine-tune colors. It describes a color by its properties—just as a human would.

**How does it work?**
Use the `hsl()` function with three values:

1.  **Hue:** The actual color on a color wheel from 0 to 360 degrees.
    - `0` or `360` is red.
    - `120` is green.
    - `240` is blue.
2.  **Saturation:** The intensity or "colorfulness," in percent (`%`).
    - `0%` is a gray tone.
    - `100%` is the purest, most vibrant version.
3.  **Lightness:** How light or dark the color is, also in percent (`%`).
    - `0%` is always black.
    - `50%` is the “normal” color.
    - `100%` is always white.

**HSLA for transparency:**
Just as with RGBA, **HSLA** adds a fourth value for opacity (`0.0`–`1.0`).

The big advantage of HSL: If you want a lighter or darker variant of a color, simply change the lightness value!

**CSS Example:**

```css
/* Brand's primary color is a rich blue */
.button-primary {
  background-color: hsl(225, 73%, 57%);
}

/* On mouseover, the button gets lighter */
.button-primary:hover {
  background-color: hsl(
    225,
    73%,
    67%
  ); /* Only lightness changed from 57% to 67%! */
}

.transparent-box {
  background-color: hsla(0, 100%, 50%, 0.3); /* 30% transparent red */
}
```

| Color Format | Syntax Example       | Strengths                                                                | Typical Use Case                                               |
| :----------- | :------------------- | :----------------------------------------------------------------------- | :------------------------------------------------------------- |
| **HEX**      | `#3A5FCD`            | Compact, widely used in design tools.                                    | Defining solid, opaque colors in a stylesheet.                 |
| **RGB(A)**   | `rgb(58, 95, 205)`   | Easy to understand (0-255), RGBA great for transparency.                 | Backgrounds, overlays, where opacity is important.             |
| **HSL(A)**   | `hsl(225, 73%, 57%)` | Very intuitive for humans, easy to adjust (lighten, darken, desaturate). | Creating color palettes, hover effects, dynamic color changes. |

# 🖋️ Fonts and Text Styling

Imagine a website like a book or magazine. The content is important, but _how_ it’s presented makes people want to read it. Choosing the font, its size, and layout is crucial for readability and design. In this chapter, let’s see how to master your website typography.

<br><br><br>

## 🌐 Embedding and Adapting Web Fonts

Back in the day, you were limited to a handful of “web safe” fonts pre-installed on most computers (Arial, Times New Roman, Verdana, etc.). That was pretty boring. Web fonts changed everything!

### 🧐 What Are Web Fonts and Why Are They Important?

A web font is a font that does not need to be installed on the visitor’s computer. Instead, just like images or other content, it’s downloaded directly from the server when the website is loaded.

**The decisive advantage:** You can use almost any font you can think of and be sure that **every visitor sees the website exactly as you designed it.** This opens endless creative opportunities and ensures a consistent brand experience.

The most popular and easiest way to use web fonts is with services like **Google Fonts**. They offer a huge library of free fonts that are very easy to integrate into a website.

### 🛠️ How to Embed Web Fonts (Using Google Fonts Example)

Let’s go step by step. Let’s say you want to use the popular font “Roboto.”

**Step 1: Select font on Google Fonts**
Go to [fonts.google.com](https://fonts.google.com), search for "Roboto," and click it.

**Step 2: Click "Get font"**
On the Roboto page, click the "Get font" button (top right). A sidebar appears with embedding options (choose Get Embed Code).

**Step 3: Insert the code into your website**
Google Fonts provides two main methods: `<link>` and `@import`.

#### Method 1: The `<link>` Method (Recommended)

This is best because it's fast and high-performing. Copy the code into your HTML file’s `<head>` section.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>My Website</title>

    <!-- Google Fonts integration -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet" />

    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Your content -->
  </body>
</html>
```

- `preconnect`: These lines establish an early connection to the Google servers, speeding up font loading.
- `href`: This is the actual link to the CSS file that makes the font available to the browser.

#### Method 2: The `@import` Method

This is simpler: just one line of code, which you add **at the very top** of your CSS file.

```css
/* style.css */

/* Google Fonts import AT THE TOP of the file */
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap");

/* Your other CSS */
body {
  /* ... */
}
```

**Drawback:** This can slightly block your website’s loading, so `<link>` is generally preferred.

### 🎨 Using Web Fonts in CSS

Once the font is embedded, you need to tell the browser which elements should use it, via the CSS property `font-family`.

It’s good practice to always add a fallback font. If Google Fonts is unavailable, the browser will try the next in the list. At the end is a generic family (`sans-serif` or `serif`).

```css
/* style.css */

body {
  /*
    Assigns 'Roboto' for the whole body.
    If Roboto fails, browser tries Arial.
    If Arial isn't available, it uses any available sans-serif font.
  */
  font-family: "Roboto", Arial, sans-serif;
}

h1 {
  /* Headlines can have another font family */
  font-family: "Georgia", serif;
}
```

<br><br><br>

## ✍️ Formatting: Font Size, Style, Weight, Line Height

After picking the right font, it’s time to fine-tune. These four CSS properties are the basics for every web designer.

### 📏 `font-size`: The Font Size

This property controls how big the text appears. There are different units you can use. Picking the right one is key for flexible and accessible sites.

| Unit                      | Description                                                                         | Example              | Pros and Cons                                                                                                                          |
| :------------------------ | :---------------------------------------------------------------------------------- | :------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **`px`** (pixels)         | **Absolute unit.** One pixel is a fixed screen dot. Size won’t change.              | `font-size: 16px;`   | **+** Easy to understand, pixel precision.<br> **-** Does not scale with browser user settings (bad for accessibility).                |
| **`em`**                  | **Relative unit.** 1em equals the font size of the parent element.                  | `font-size: 1.2em;`  | **+** Scales well inside components.<br> **-** Can become confusing because `em` values nest and multiply (1.2em of 1.2em of 16px...). |
| **`rem`** (root em)       | **Relative unit.** 1rem always equals the font size of the root (`<html>`) element. | `font-size: 1.2rem;` | **+** **Best for general scalability!** Avoids the nesting issue of em. Adapts to user settings. Very predictable.                     |
| **`%`** (percent)         | **Relative unit.** Like em, based on parent font size.                              | `font-size: 120%;`   | **+** Intuitive. <br> **-** Same nesting issues as em.                                                                                 |
| **`vw`** (viewport width) | **Relative unit.** Refers to browser window width—`1vw` is 1% of window width.      | `font-size: 5vw;`    | **+** Good for huge, responsive headlines that scale with the window.<br> **-** Can be extreme on very small or very large screens.    |

**Pro tip:** Set a base font size in `rem` for `<html>` and use `rem` for other sizes. This makes your site flexible and accessible.

```css
html {
  font-size: 16px; /* Base: 1rem = 16px */
}

body {
  font-size: 1rem; /* Equals 16px */
}

h1 {
  font-size: 2.5rem; /* Equals 2.5 * 16px = 40px */
}

p {
  font-size: 1rem; /* Equals 16px */
}
```

### 🎭 `font-style`: Font Style

This property sets whether text is normal, italic, or slanted.

- `font-style: normal;`
  - Default value. Text is upright.

- `font-style: italic;`
  - Italicizes text. Ideally uses a real italic font style that you've loaded; otherwise, the browser fakes it.

- `font-style: oblique;`
  - Slants the text artificially if no true italic version is available. Looks slightly different; `italic` usually looks better.

```css
.highlight {
  font-style: italic;
}

.warning {
  font-style: oblique;
}
```

### 💪 `font-weight`: Font Weight (Thickness)

`font-weight` controls how bold or light letters are.

You can use keywords or numbers:

| Keyword  | Numeric value | Description       |
| :------- | :------------ | :---------------- |
| `normal` | `400`         | Regular weight.   |
| `bold`   | `700`         | Bold text.        |
| (none)   | `100`         | Thin (very light) |
| (none)   | `300`         | Light             |
| (none)   | `500`         | Medium            |
| (none)   | `900`         | Black (very bold) |

**IMPORTANT:** For a `font-weight` to work, you have to load the corresponding style via Google Fonts or `@font-face`! If you only load `Roboto Regular (400)` and set `font-weight: 700;`, the browser tries to fake bold ("Faux Bold"). This can look ugly and blurry.

```css
p {
  font-weight: 400; /* Regular text */
  /* Same as: font-weight: normal; */
}

h2 {
  font-weight: 700; /* Bold heading */
  /* Same as: font-weight: bold; */
}

.subtle-text {
  font-weight: 300; /* Lighter, if "Light" style loaded */
}
```

### ↕️ `line-height`: Line Spacing

`line-height` sets the space between lines in a text block. Good line spacing is **vital for readability** in long texts. Too tight looks cramped; too wide looks scattered.

`line-height` is the total height for a line, with the text vertically centered inside. The space above and below the text is the actual gap.

Different units are possible, but one is best:

| Unit           | Example               | Explanation and Recommendation                                                                                                                                                                                |
| :------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`px`**       | `line-height: 24px;`  | **Not recommended.** Fixed px is inflexible; if the user raises font size, line spacing stays and can overlap.                                                                                                |
| **`em` / `%`** | `line-height: 1.5em;` | Works, but not ideal. Value is inherited from parent, can yield unexpected results if nested.                                                                                                                 |
| **Unitless**   | `line-height: 1.5;`   | **BEST PRACTICE!** This multiplies the element’s `font-size`. `line-height: 1.5;` at `font-size: 16px;` = 24px. If the font increases to 20px, line height is 30px. It scales perfectly and inherits cleanly. |

A good starter value for readable body text is line height between `1.5` and `1.7`.

```css
p {
  font-size: 1rem; /* 16px */
  /* Line height will be 1.6 * 16px = 25.6px. */
  line-height: 1.6;
}

h1 {
  /* Headlines often need less line spacing, since they're rarely multiline. */
  line-height: 1.2;
}
```

## Questions

- What are the different parts of a CSS rule?
- List the different ways to select elements in CSS.
- What is the recommended way to link CSS with HTML files?
- What are the three main color formats in CSS?
- How do you embed a Google Font into your website?
- What are the differences between `px`, `em`, and `rem` units for font size?
- How do you define a semi-transparent background color in CSS?

# 📦 Layout with Box Model and Flexbox

<br><br><br>

## 🧱 The Box Model: The Building Blocks of Every Website

Imagine every single element—a paragraph, image, or button—is packed in an invisible box. That’s the box model. It describes how these boxes are built and how they take up space on the page. Each box consists of four layers, like the rings of an onion. Let’s go from the inside out.

### 📜 The Content

This is the core: the text you read, the image you see, the video you watch. The size of this innermost layer is set with `width` and `height`. If you set an element’s width to 200px, by default you’re talking about the content width.

- **What it is:** Your actual text, image, video, etc.
- **CSS properties:** `width`, `height`

<br><br><br>

### 🛋️ Padding (Inner Spacing)

Imagine wrapping a fragile gift in a box: you’d put in bubble wrap. That’s padding! It’s the transparent space _inside_ the box, between the content and the border. Padding ensures your content isn’t right at the edge and gives it room to "breathe."

- **What it is:** The space between the content and the border.
- **Analogy:** The padding in a package.
- **CSS properties:** `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`.

<br><br><br>

### 🖼️ The Border

The border is the actual wall of the box. It surrounds content and padding. You can make it visible by giving it width, style, and color. Borders are great for visually separating elements, like buttons or input fields.

- **What it is:** The line enclosing content and padding.
- **Analogy:** The cardboard of a package or the frame of a picture.
- **CSS properties:** `border`, `border-width`, `border-style` (e.g., `solid`, `dashed`), `border-color`.

<br><br><br>

### 🧍↔️🧍 Margin (Outer Spacing)

When you line up multiple packages, you want a little space between them. That’s margin—the transparent space _outside_ the box, after the border. Margin is the gap between one element and its neighbors. It’s the "personal space" for every element.

- **What it is:** The space between your element’s border and other elements.
- **Analogy:** The safety space between two cars parked next to each other.
- **CSS properties:** `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.

Here’s a table for clarity:

| Property    | Location                 | Purpose                       | Analogy                      |
| :---------- | :----------------------- | :---------------------------- | :--------------------------- |
| **Content** | Innermost                | Contains the actual content.  | The gift inside a package    |
| **Padding** | Inside border            | Adds space around content.    | Padding in a package         |
| **Border**  | Between padding & margin | Visual boundary/edge.         | The cardboard box            |
| **Margin**  | Outermost                | Adds space to other elements. | Distance to the next package |

<br><br><br>

### 📏 Box Sizing Calculation (`box-sizing`)

By default (`box-sizing: content-box;`), the set `width` and `height` refer **only to content**. If you add padding and border, the total box gets _wider_ and _taller_ than you set. Confusing!

Say you use: `width: 200px; padding: 10px; border: 5px solid black;`
The actual rendered width:
`200px (content) + 10px (padding left) + 10px (padding right) + 5px (border left) + 5px (border right) = 230px`

That’s awkward! That's why almost every developer uses `box-sizing: border-box;` nowadays. With that, you say: "If I set width 200px, I mean the **total** width, including padding and border." The browser then calculates content’s space. It’s much more intuitive.

#### Soft reset for all elements

- To make sure all elements use `border-box`, have a zero `padding` and `margin` by default, use the so called "soft reset" at the start of your CSS:

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

## The Box Model and Semantic HTML

- Before HTML5, developers often used `<div>` elements as generic containers to seperate content sections.
- With semantic HTML5 elements like `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`, you can give meaning to your content structure before applying CSS styles.

### Example:

- Instead of using multiple `<div>`s:

```html
<body>
  <div class="header"><div class="nav">...</div></div>

  <div class="main">...</div>
  <div class="footer">...</div>
</body>
```

- Use semantic elements:

```html
<body>
  <header><nav>...</nav></header>
  <main>...</main>
  <footer>...</footer>
</body>
```

- This improves accessibility, SEO, and code readability while still allowing you to style these elements using the box model in CSS.

  <br><br><br>

## 🤸 Flexbox: Flexible and Dynamic Layouts

The box model describes how a _single_ element works. Flexbox is a modern technique to lay out _multiple_ elements (the "boxes") flexibly and smartly inside a container. Imagine lining up blocks in a row or stacking them, with the layout adjusting to the size of the container. Flexbox is perfect for this.

### 👨‍👩‍👧‍👦 The Basic Principle: Container and Items

Flexbox always works with two parts:

1.  **Flex Container:** The parent element, the "box" you put your items in. To activate Flexbox, set `display: flex;` on this container.
2.  **Flex Items:** The direct children of the container. Once the container is a flex container, its children automatically become flexible items.

<br><br><br>

### ↔️ Main Axis and Cross Axis

The key concept in Flexbox is two axes. Unlike a fixed coordinate grid, these axes can change direction.

- **Main Axis:** The primary direction flex items are arranged. You set this using `flex-direction`.
- **Cross Axis:** At a 90-degree angle to the main axis.

The `flex-direction` property is the switch that controls the orientation of your entire layout:

| `flex-direction` | Main Axis Direction        | How Items Behave                                              |
| :--------------- | :------------------------- | :------------------------------------------------------------ |
| `row` (default)  | Horizontal (left to right) | Items are lined up side by side.                              |
| `row-reverse`    | Horizontal (right to left) | Items are lined up side by side, but in reverse order.        |
| `column`         | Vertical (top to bottom)   | Items are stacked on top of each other.                       |
| `column-reverse` | Vertical (bottom to top)   | Items are stacked on top of each other, but in reverse order. |

<br><br><br>

### 🎯 Aligning Items

Once you’ve set your axes, Flexbox lets you align items on them with millimeter precision. This is one of Flexbox’s greatest strengths.

#### Aligning on the Main Axis (`justify-content`)

This property controls how items are distributed **along the main axis**. Very useful when there’s more space than the items occupy.

| `justify-content` | Description                                                     | Visual Example (`flex-direction: row`) |
| :---------------- | :-------------------------------------------------------------- | :------------------------------------- |
| `flex-start`      | Items packed at the start of the axis.                          | `[item][item]...`                      |
| `flex-end`        | Items packed at the end of the axis.                            | `...[item][item]`                      |
| `center`          | Items centered on the axis.                                     | `..[item][item]..`                     |
| `space-between`   | First item at start, last at end, others spaced evenly between. | `[item]...[item]...[item]`             |
| `space-around`    | Even space around each item (double space _between_ items).     | `.[item]..[item]..[item].`             |
| `space-evenly`    | Even space everywhere, including ends.                          | `.[item].[item].[item].`               |

#### Aligning on the Cross Axis (`align-items`)

This property controls how items are aligned **on the cross axis**. Useful if items are various heights (or widths in `column` direction).

| `align-items`       | Description                                                        |
| :------------------ | :----------------------------------------------------------------- |
| `stretch` (default) | Items are stretched to fill the container’s cross axis completely. |
| `flex-start`        | Items packed at the start of the cross axis.                       |
| `flex-end`          | Items packed at the end of the cross axis.                         |
| `center`            | Items centered on the cross axis.                                  |
| `baseline`          | Items are aligned by their text baseline.                          |

<br><br><br>

### 🔢 Changing the Order

A very powerful feature! Normally, the visual order on the webpage matches the HTML order. With the `order` property, you can **change the visual order only**, without changing your HTML.

- All flex items default to `order: 0`.
- Items are shown by their `order` value, lowest to highest.
- You can also use negative values; `order: -1;` places that item before all items with `order: 0;`.

**Example:**
You have three boxes (A, B, C) in HTML.

```html
<div>Box A</div>
<div>Box B</div>
<div>Box C</div>
```

If you give Box C `order: -1;`, the visual order on the website is **C, A, B** even though the HTML hasn’t changed. That’s great for responsive layouts where you may want a different order on small screens.

# ⚙️ Practical Application and Troubleshooting

<br><br><br>

## 🏗️ Building a Simple, Styled Sample Website

Let’s build a little digital calling card for a hobby, like “Urban Gardening.” We’ll go step by step: build the skeleton with HTML, then dress it up with CSS.

<br><br><br>

### 📝 Planning

- Every good project, no matter how small, starts with a plan.
- Some teams have dedicated UI/UX designers for this, but as a solo developer, you have to seek out inspiration yourself.
- Look at other websites you like. What do you like about them? Colors, fonts, layout?
- Sketch a rough layout on paper or a whiteboard. Where should the header go? The main content? The footer?
- A good approach is to write HTML first for structure, then CSS for styling and then JavaScript for interactivity.
- Doing all three at once can get messy quickly.
- Sometimes projects take several days or weeks.

#### Here’s our plan for the sample portfolio website:

- **Header:** With navigation links (Home, Projects, Contact).
- **Hero Section:** A big welcome message and a short intro.
- **Projects Section:** A grid of project cards with title, description, and technologies used.
- **Contact Section:** A simple contact form with name, email, message fields, and a submit button.
- **Footer:** With copyright information.

<br><br><br>

### 🦴 Basic HTML Structure (`index.html`)

This is our skeleton. Create a file called `index.html` and fill it as follows. Each part is commented so you know what it does.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <header class="header">
      <nav class="navigation">
        <div class="navigation__brand">
          <h2 class="navigation__logo">Max Mustermann</h2>
        </div>

        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#hero" class="navigation__link">Home</a>
          </li>
          <li class="navigation__item">
            <a href="#projects" class="navigation__link">Projects</a>
          </li>
          <li class="navigation__item">
            <a href="#contact" class="navigation__link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main">
      <section id="hero" class="hero">
        <div class="hero__content">
          <h1 class="hero__title">Welcome to My Portfolio</h1>
          <p class="hero__description">
            I am a web developer creating modern, user-friendly websites.
          </p>
        </div>
      </section>

      <section id="projects" class="projects">
        <h2 class="projects__title">My Projects</h2>

        <div class="projects__container">
          <article class="project-card">
            <h3 class="project-card__title">Portfolio Website</h3>
            <p class="project-card__description">
              A personal portfolio website with modern design.
            </p>
            <p class="project-card__tech">
              <strong>Technologies:</strong> HTML, CSS, JavaScript
            </p>
          </article>

          <article class="project-card">
            <h3 class="project-card__title">Blog Platform</h3>
            <p class="project-card__description">
              A simple blog platform for sharing articles.
            </p>
            <p class="project-card__tech">
              <strong>Technologies:</strong> HTML, CSS, JavaScript
            </p>
          </article>

          <article class="project-card">
            <h3 class="project-card__title">To-Do App</h3>
            <p class="project-card__description">
              An app for managing daily tasks.
            </p>
            <p class="project-card__tech">
              <strong>Technologies:</strong> HTML, CSS, JavaScript
            </p>
          </article>
        </div>
      </section>

      <section id="contact" class="contact">
        <h2 class="contact__title">Contact Me</h2>

        <form class="contact-form" id="contact-form">
          <div class="contact-form__group">
            <label for="name" class="contact-form__label"> Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              class="contact-form__input"
              required />
          </div>

          <div class="contact-form__group">
            <label for="email" class="contact-form__label"> Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              class="contact-form__input"
              required />
          </div>

          <div class="contact-form__group">
            <label for="message" class="contact-form__label"> Message: </label>
            <textarea
              id="message"
              name="message"
              class="contact-form__textarea"
              rows="5"
              required></textarea>
          </div>

          <button type="submit" class="contact-form__button">Send</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <p class="footer__text">
        &copy; <span id="current-year"></span> Max Mustermann. All rights
        reserved.
      </p>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
```

<br><br><br>

### 🎨 CSS Styling (`style.css`)

Now for the fun part! Create a file named `style.css` in the same folder. This file is like the wardrobe for our site: where you set colors, spacing, fonts, and layout.

```css
/* ===================================
   GLOBAL STYLES / GLOBALE STILE
   =================================== */

/* Reset default browser styles / Browser-Standardstile zurücksetzen */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styling / Body-Styling */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333333;
  background-color: #f4f4f4;
}

/* ===================================
   HEADER & NAVIGATION / KOPFZEILE & NAVIGATION
   =================================== */

/* Header container / Header-Container */
.header {
  background-color: #2c3e50;
  padding: 20px 0;
  position: sticky;
  top: 0;
  width: 100%;
}

/* Navigation container / Navigations-Container */
.navigation {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Brand/Logo area / Marken-/Logo-Bereich */
.navigation__brand {
  color: white;
}

.navigation__logo {
  font-size: 24px;
  color: #ffffff;
}

/* Navigation list / Navigationsliste */
.navigation__list {
  list-style: none;
  display: flex;
  gap: 30px;
}

.navigation__item {
  display: inline;
}

/* Navigation links / Navigationslinks */
.navigation__link {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
}

/* ===================================
   HERO SECTION / HERO-BEREICH
   =================================== */

/* Hero container / Hero-Container */
.hero {
  background-color: #3498db;
  color: white;
  text-align: center;
  padding: 100px 20px;
}

/* Hero content wrapper / Hero-Inhalts-Wrapper */
.hero__content {
  width: 90%;
  margin: 0 auto;
}

/* Hero title / Hero-Titel */
.hero__title {
  font-size: 42px;
  margin-bottom: 20px;
}

/* Hero description / Hero-Beschreibung */
.hero__description {
  font-size: 18px;
  margin-bottom: 15px;
}

/* Hero date display / Hero-Datumsanzeige */
.hero__date {
  font-size: 16px;
  margin-top: 30px;
}

.hero__date-value {
  font-weight: bold;
}

/* ===================================
   PROJECTS SECTION / PROJEKTE-BEREICH
   =================================== */

/* Projects container / Projekte-Container */
.projects {
  padding: 60px 20px;
  background-color: #ffffff;
}

/* Projects title / Projekte-Titel */
.projects__title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  color: #2c3e50;
}

/* Projects cards container / Projekte-Karten-Container */
.projects__container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

/* Individual project card / Einzelne Projektkarte */
.project-card {
  background-color: #f9f9f9;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 30px;
  width: 300px;
}

/* Project card title / Projektkarten-Titel */
.project-card__title {
  font-size: 22px;
  color: #2c3e50;
  margin-bottom: 15px;
}

/* Project card description / Projektkarten-Beschreibung */
.project-card__description {
  font-size: 14px;
  color: #555555;
  margin-bottom: 10px;
  line-height: 1.5;
}

/* Project card technologies / Projektkarten-Technologien */
.project-card__tech {
  font-size: 14px;
  color: #3498db;
  margin-top: 15px;
}

/* ===================================
   CONTACT SECTION / KONTAKT-BEREICH
   =================================== */

/* Contact container / Kontakt-Container */
.contact {
  padding: 60px 20px;
  background-color: #ecf0f1;
}

/* Contact title / Kontakt-Titel */
.contact__title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  color: #2c3e50;
}

/* Contact form / Kontaktformular */
.contact-form {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  border: 1px solid #dddddd;
}

/* Form group / Formulargruppe */
.contact-form__group {
  margin-bottom: 20px;
}

/* Form labels / Formularbeschriftungen */
.contact-form__label {
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: #2c3e50;
  font-weight: bold;
}

/* Form inputs / Formulareingaben */
.contact-form__input {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

/* Form textarea / Formular-Textbereich */
.contact-form__textarea {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  resize: vertical;
}

/* Form submit button / Formular-Senden-Button */
.contact-form__button {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #3498db;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* ===================================
   FOOTER / FUßZEILE
   =================================== */

/* Footer container / Footer-Container */
.footer {
  background-color: #2c3e50;
  color: #ffffff;
  text-align: center;
  padding: 30px 20px;
}

/* Footer text / Footer-Text */
.footer__text {
  font-size: 14px;
}
```

Now if you open `index.html` in your browser, you’ll see a simple but neatly styled site. You just combined the basics of HTML (structure) and CSS (design) to make something visible and attractive!

### JavaScript Functionality (`script.js`)

To make our portfolio site a bit more dynamic, let’s add a small JavaScript snippet that automatically updates the copyright year in the footer and collects the form data when the user submits the contact form.

```javascript
// ===================================
// DISPLAY CURRENT YEAR / AKTUELLES JAHR ANZEIGEN
// ===================================

// Get the year element / Jahreselement abrufen
const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// ===================================
// CONTACT FORM HANDLING / KONTAKTFORMULAR-VERARBEITUNG
// ===================================

// Get the form element / Formularelement abrufen
const form = document.getElementById("contact-form");

// Add event listener for form submission / Event-Listener für Formularübermittlung hinzufügen
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log("Kontaktformular eingereicht / Form Submitted:", data);
  alert(
    "Vielen Dank für Ihre Nachricht! / Thank you for your message! Check console log.",
  );
  form.reset();
});
```

<br><br><br>

## 🔍 Troubleshooting: Common CSS Styling Mistakes

Everyone working with CSS—beginners or pros!—will make mistakes. That’s normal. Here are the most common pitfalls and how to overcome them.

<br><br><br>

### ⌨️ Misspellings and Typos

By far the most common source of errors. A single wrong letter and the browser ignores the rule.

- **Problem:** You write `background-coler` instead of `background-color` or `pading` instead of `padding`. Also with class names: in HTML it's `class="main-content"`, but in CSS you write `.main-conten`.
- **Solution:** Look carefully! Modern code editors like VS Code colorize known CSS properties. If something isn’t the right color, you likely have a typo. Also check class and ID names character-for-character.

<br><br><br>

### 🔗 Incorrect CSS File Linking

Your HTML and CSS are perfect, but nothing happens? Maybe the files aren’t connected.

- **Problem:** The path in the HTML `<link>` tag is wrong.
  - `href="styles.css"` instead of `href="style.css"` (wrong filename).
  - `href="css/style.css"` but the file is actually in the same folder.
- **Solution:** Check the `href` path in your HTML `<head>`.
  - If `index.html` and `style.css` are in the same folder, use `href="style.css"`.
  - If `style.css` is in a subfolder called `css`, you need `href="css/style.css"`.

<br><br><br>

### 🎯 CSS Specificity

This is a tricky early concept. Imagine it as a card game where certain cards beat others. A more specific rule always beats a general one.

- **Problem:** You have a rule for all `<p>` elements (`color: blue;`), but a particular paragraph with a class (`.special-text`) does not show blue because another rule (`.special-text { color: red; }`) exists.
- **Explanation:** An ID is always stronger than a class; a class beats an element type.
- **Solution:** Use your browser’s developer tools (press F12) and inspect the element. You’ll see which CSS rules apply and which are crossed out because they’re overridden by a more specific rule.

Here is a simple specificity ranking (lowest to highest):

| Selector Type        | Specificity (Example)      | Sample Code                   |
| -------------------- | -------------------------- | ----------------------------- |
| **Element selector** | Low                        | `p { color: black; }`         |
| **Class selector**   | Medium                     | `.info-text { color: blue; }` |
| **ID selector**      | High                       | `#intro { color: green; }`    |
| **Inline style**     | Very high (overrides most) | `<p style="color: red;">`     |

<br><br><br>

### 🚧 Syntax Errors: The Grammar of CSS

CSS has a very simple grammar, but you must obey it.

- **Problem:**
  - **Missing semicolon (`;`):** `p { color: blue margin-top: 10px }` -> Wrong! Browser can’t tell where the first rule ends.
  - **Missing curly braces (`{}`):** `body background-color: lightblue;` -> Wrong! Rules must always be inside `{}`.
  - **Missing colon (`:`):** `h1 { color blue; }` -> Wrong! There must be a colon between property and value.
- **Solution:** Be careful with these characters. Editors help by underlining errors. Check your code line by line.

<br><br><br>

### 📦 Box Model Issues (`margin` vs `padding`)

Beginners often mix up inner and outer spacing.

- **Problem:** You want more space _inside_ a box around the text, but use `margin`. This increases the space _outside_ the box instead, moving the whole box away from others.
- **Solution:** Remember this:
  - `padding` is like the cushioning _inside_ a package. It enlarges and protects the content.
  - `margin` is the safety space _between_ packages.
  - **Pro tip:** Put `* { box-sizing: border-box; }` at the very top of your CSS. This changes the box model so that `padding` and `border` are included in the defined `width` and `height`, making layouts intuitive.

<br><br><br>

### 🔄 Browser Caching

Sometimes your code is perfect but you don’t see the changes.

- **Problem:** The browser keeps an old version of `style.css` in the cache, not loading your new one.
- **Solution:** Force a hard reload:
  - **Windows/Linux:** `Ctrl + Shift + R` or `Ctrl + F5`
  - **Mac:** `Cmd + Shift + R`

<br><br><br>

### 🛠️ Your Best Tool: The Developer Tools

Every modern browser has built-in developer tools. They are your best friend!

- **How to open:** Press `F12` or right-click an element and choose “Inspect” or “Inspect Element.”
- **What they do:**
  - In the "Elements" or "Inspector" tab, you see all HTML code.
  - Click on an element to see all CSS rules (“Styles” or “Rules”) applied to it.
  - You see crossed-out rules which are overridden (see specificity).
  - You can turn CSS rules on/off or edit CSS live in the browser. This is great for experimentation.
