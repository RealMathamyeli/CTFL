

## ### Your Interactive Business Card on the Web 🖼️

Welcome to your **I**ndividual **L**earning **P**hase (ILP)! Yesterday, you built the skeleton of your website with structured text. Today we’ll bring it to life. We’ll add the elements that make the web what it is: **links** that connect us to the world, **lists** that organize content, **images** that capture attention, and **forms** that start a conversation.

Your mission is to turn your static HTML page into a dynamic, interactive “business card.” By the end of the day, you’ll have a page that not only informs, but also navigates, shows, and even listens.

**Your tools today:** Your text editor, your browser, and a folder where you can store your `index.html` and, soon, images.

**🕒 Estimated total time:** approx. 2.5 hours

---

### ## Part 1: Structure & Connect (Lists & Links)

**🎯 Learning goal:** You can semantically structure content using lists and create hyperlinks to navigate between internal and external resources.

**Practical tasks (approx. 45 min)**
Continue working in your `index.html` file from the previous session.

1. **Bring order with lists:**

   * Under your `<h2>` heading “About Me,” create an **unordered list** (`<ul>`). Fill it with at least three list items (`<li>`) describing your hobbies or interests.
   * Elsewhere, create a new section (e.g., “My Top 3 Goals”) and this time use an **ordered list** (`<ol>`) to rank your goals.

2. **Connect to the world (external links):**

   * Choose a word in one of your paragraphs and turn it into a **hyperlink** (`<a>`).
   * This link should point to an **external website** of your choice (e.g., Wikipedia or your favorite site). Look up how the `href` attribute should be written.

3. **Optimize links (attributes):**

   * Research the `target` attribute for links. Modify your external link so it opens in a **new browser tab**.
   * Research which **two `rel` attributes** are often used together for security and performance when opening in a new tab, and add them.

4. **Plan ahead (internal links):**

   * Create a new link as a “placeholder.” Its text should be “Contact me” and it should point to a future page named `contact.html`.

---

### ## Part 2: Visualize (Images & Paths)

**🎯 Learning goal:** You can embed images in your website and understand the crucial difference between relative and absolute paths.

**Practical tasks (approx. 45 min)**

1. **Preparation:** In your project folder (where your `index.html` lives), create a **subfolder** named `images`.

2. **The relative image:**

   * Find a photo of yourself (or a placeholder profile image) and save it in your new `images` folder.
   * Insert this image at the top of your page (e.g., under your `<h1>`) using the `<img>` tag. Use a **relative path**.
   * Research and add the `alt` and `title` attributes for your image. Write suitable text for each and understand the difference in their roles.

3. **The absolute image:**

   * Find an image online (e.g., via an image search).
   * Embed this image elsewhere on your page, but this time use the **absolute path** (the full `https://...` URL) in the `src` attribute.

---

### ## Part 3: Interact (Simple Forms)

**🎯 Learning goal:** You can create a simple HTML form that collects user input using labels and input fields.

**Practical tasks (approx. 60 min)**
Create a new main section at the end of your page (e.g., under an `<h2>` heading “Write to me!”).

1. **The form container:**

   * Create the basic structure of a form with the `<form>` tag.
   * Research the `action` and `method` attributes. Configure the form to send its data to a placeholder URL (`/submit-form`) using the **appropriate method for sending sensitive data** (like names and emails).

2. **Fields and labels:**

   * Add **two input areas** to your form:

     * A field for “Name” (type: text).
     * A field for “Email” (type: email).
   * Each `<input>` must have a **properly linked label** (`<label>`). Research how the `for` and `id` attributes must match so that clicking the label focuses the input.

3. **The submit button:**

   * Add a **button** at the end of the form that submits it when clicked. The button text should be “Send message.”

---

### ## Your Self-Reflection 💡

Excellent! You’ve turned your static page into a living document with links, images, and interaction. Take a moment to reflect on your work:

* **The path problem:** What was the biggest hurdle when embedding your local image? Did the relative path (`images/picture.jpg`) click immediately?
* **The `for`/`id` connection:** Did you notice the “magic effect” when, after correctly linking `<label>` and `<input>`, clicking the label focused the input field?
* **Form methods:** Could you explain the difference between `GET` and `POST` and justify why one method is better for a contact form?
* **The next step:** Looking at your form now — which important field do you think is missing (e.g., for the actual message)? How would you add that field (for multi-line text)?
