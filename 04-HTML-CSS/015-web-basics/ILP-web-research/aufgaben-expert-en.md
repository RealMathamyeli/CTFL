## ### HTML Masterclass: Semantics, Protocols, and Performance 🚀

Welcome to your **I**ndividual **L**earning **P**hase (ILP) for advanced learners!
You already know the basics of HTML and the concepts of client and server. Today, we’ll take a decisive step forward. We’ll look at these “basics” from a developer’s high-level perspective — with a focus on performance, search engine optimization (SEO), and accessibility.

Your mission is to uncover the hidden details behind web protocols, master the *true* semantic meaning of HTML structures, and create a document that not only “works” but is technically clean, efficient, and professional.

**Your tools today:** Your browser (including developer tools via F12), your text editor, and your analytical mindset to read and interpret technical documentation.

**🕒 Estimated total duration:** approx. 2.5 hours

---

### ## Part 1: Analysis Phase – Protocols Under the Microscope

**🎯 Learning Goal:** You will analyze real data exchange on the web and understand the performance implications of modern web protocols.

**Analysis Tasks (approx. 60 min)**

1. **HTTP Headers in Action:**

   * Open any complex website (e.g., a news site or GitHub) in your browser and launch the **Developer Tools (F12)**. Switch to the **Network tab**.
   * Reload the page and inspect the first request (usually the HTML document itself).
   * Analyze the **request and response headers**. Identify and note the purpose of at least four different headers (e.g., `User-Agent`, `Accept-Language`, `Content-Type`, `Cache-Control`, `Set-Cookie`).

2. **Sketching the HTTPS Handshake:**

   * We know HTTPS is “secure” — but how is that security established?
   * Research the **TLS Handshake** process. Create a simplified text flowchart or bullet list describing the steps that client and server go through *before* the first “secure” data packet is sent.

3. **The Evolution of HTTP:**

   * Research the main differences between **HTTP/1.1** and **HTTP/2**.
   * What fundamental performance issue in HTTP/1.1 (hint: *Head-of-Line Blocking*) does HTTP/2 solve — and how?

---

### ## Part 2: Structure Phase – The Semantic HTML Document

**🎯 Learning Goal:** You will create an HTML document that is not only well-written but also semantically and technically structured at a professional level.

**Practical Tasks (approx. 45 min)**
Create a new file called `index.html` and write a short technical article based on your findings from Part 1 (e.g., “What Is HTTP/2?”).

1. **The “Perfect” Boilerplate:**

   * Create a valid HTML5 boilerplate document.

2. **Meta Optimization (The Invisible Value):**

   * Add not only the standard `<meta charset>` tag but also research and include the following SEO- and social-media-relevant meta tags:

     * The `viewport` tag for proper mobile rendering.
     * A `description` tag for search engine snippets.
     * Basic **Open Graph** tags (`og:title`, `og:description`, `og:type`) for better presentation when sharing your page on platforms like Facebook or LinkedIn.

3. **Semantic Text Hierarchy:**

   * Structure your article properly using `<h1>` to `<h6>`.
   * Ensure the hierarchy is logical (no `<h3>` directly after an `<h1>`).
   * Use `<p>` tags for paragraphs.

---

### ## Part 3: Synthesis Phase – Semantics vs. Presentation

**🎯 Learning Goal:** You will be able to analyze and apply the subtle but crucial differences between semantically similar HTML tags.

**Analysis & Application Tasks (approx. 45 min)**
Continue working with your `index.html` file from Part 2.

1. **`<strong>` vs. `<b>` and `<em>` vs. `<i>`:**

   * Research the **semantic difference** between `<strong>` and `<b>`. When would you use each?
   * Research the **semantic difference** between `<em>` and `<i>`.
   * Use all four tags appropriately within your article and add a short HTML comment (`<!-- ... -->`) explaining why you chose each tag.

2. **Structural vs. Visual Separation:**

   * Research the *modern*, semantic meaning of the `<hr>` tag. Where in your article would it make sense as a thematic break? Add it.
   * Research why using multiple `<br><br>` tags to create spacing is considered *bad practice*. Which technology should be used instead for layout and spacing?

3. **Validation:**

   * Use the **W3C Markup Validation Service** (online tool). Upload or paste your HTML code.
   * Analyze the result. If any errors or warnings appear, correct them until your document is validated as proper HTML5.

---

### ## Your Self-Reflection 💡

Excellent work! Today you went beyond the “simple” web topics and explored their professional depth. Take a moment to reflect:

* **Under the Hood:** Did analyzing HTTP headers change your perception of what actually happens behind the scenes during a simple page load?
* **Semantic Precision:** How challenging was it to grasp and apply the exact semantic difference between `<strong>` and `<b>`?
* **The Value of Metadata:** Were you aware of how much invisible information is contained in a page’s `<head>` — crucial for SEO and social sharing?
* **Next Level:** Which topic fascinated you the most — the depths of network protocols, semantic optimization, or technical SEO preparation?
