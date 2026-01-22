## ### HTML Masterclass: Interactive & Semantic Structures 🚀

Welcome to today’s **I**ndividual **L**earning **P**hase (ILP) for advanced learners!
You already know what an `<a>` tag is and how to insert an image. Today, we’re taking a major step forward. It’s no longer just about *making things work* — it’s about *how* they work: professionally, semantically correct, and architecturally structured.

Your mission is to design a **Project Showcase Page**. You’ll create navigation elements that go beyond simple lists, use images as interactive components, and design forms that not only collect data but structure it intelligently.
Today’s focus is the *architecture* of your HTML page.

**Your tools today:** Your text editor, your browser, the browser developer tools (F12), and your ability to research technical documentation (e.g., MDN Web Docs).

**🕒 Estimated total time:** approx. 2.5 hours

---

### ## Part 1: Complex Navigation & Path Management

**🎯 Learning goal:** You can create complex, nested lists for navigation and manage a professional folder structure using relative paths.

**Architecture tasks (approx. 60 min)**

1. **Set up the folder structure:**

   * Create a clean project structure. Your main folder should be named `project-showcase`.
   * Inside, create an `index.html` (your main page).
   * Create a subfolder named `assets`, and inside it, another subfolder named `img`.
   * Create another subfolder named `pages`, and inside it, add an empty `contact.html`.

2. **Nested navigation list:**

   * In your `index.html`, create a main navigation menu.
   * This navigation should be a **nested unordered list**.
   * The main items should be “Home,” “Projects,” and “Contact.”
   * The “Projects” item should contain a sublist with “Project Alpha” and “Project Beta.”

3. **Advanced linking:**

   * Turn all navigation items into clickable links (`<a>`).
   * “Home” should link to `index.html`.
   * “Contact” should link to your (still empty) `contact.html` in the `pages` folder. (Be careful with the **relative path!**)
   * The “Project” links should be **internal anchor links**, jumping to sections further down on the same `index.html` page (e.g., `<section id="project-alpha">`).
   * Add one external link (e.g., to a GitHub profile). Research and implement the `target` and `rel` attributes to make the link open securely in a new tab.

---

### ## Part 2: Images as Interactive Elements

**🎯 Learning goal:** You can embed images semantically, use their attributes effectively, and integrate them as clickable, interactive elements.

**Practical tasks (approx. 45 min)**
Now create the project sections that you linked to in Part 1 on your `index.html`.

1. **Create project sections:**

   * Add two sections with the IDs you referenced above: `id="project-alpha"` and `id="project-beta"`.

2. **Relative image paths:**

   * Download two placeholder “project screenshots” and save them in your `assets/img` folder.
   * Embed one image into each project section, using the correct **relative path** from `index.html`.

3. **Semantic attributes (`alt` vs. `title`):**

   * Research the exact **semantic difference** between the `alt` and `title` attributes.
   * Write an excellent, descriptive `alt` text (for accessibility) and a distinct, informative `title` text (for hover tooltips).

4. **Images as links:**

   * Turn one of your project images into a clickable link that points to an external URL (e.g., a live demo hosted on `github.io`).

---

### ## Part 3: The Intelligent Request Form

**🎯 Learning goal:** You can create a semantically rich form with multiple input types and understand the differences between data submission methods.

**Form tasks (approx. 45 min)**
Now switch to your `contact.html` file.

1. **Form design (`GET` vs. `POST`):**

   * Create a “Project Inquiry” form on the page.
   * Configure the form’s `method` attribute. Research the difference between `GET` and `POST` and choose the method appropriate for sending potentially sensitive data (like name and email).

2. **Semantic fields (`label`, `id`, `name`):**

   * Build a form that includes the following fields. Ensure each input field has a correctly linked `<label>` (via `for`/`id`) and a `name` attribute for data transmission:

     * A field for the name (`type="text"`)
     * A field for the email (`type="email"`)
     * A **radio button group** (e.g., “Inquiry Type” with the options “Offer” and “General Question”). Research how the `name` attribute must be used so only one option can be selected.
     * A **multi-line text field** for the actual message (research which HTML tag is needed for that).
     * A **checkbox** for users to confirm that they accept the “Privacy Policy.”
     * A **submit button** labeled “Send Inquiry.”

---

### ## Your Self-Reflection 💡

Excellent! Today, you designed a complex, multi-section web structure using professional HTML techniques. Take a moment to reflect:

* **Path navigation:** How confident did you feel navigating the relative paths between `index.html`, `pages/contact.html`, and `assets/img/image.jpg`?
* **Semantic depth:** What was your biggest insight when comparing `alt` vs. `title`, or when configuring the `name` attributes for your radio buttons?
* **The bigger picture:** Did you notice how everything — internal links in navigation, `id` attributes in sections, and embedded images — worked together to create a functional single-page navigation experience?
* **Open question:** Which form element (`<input>` type) would you like to research next to make your form even more professional?
