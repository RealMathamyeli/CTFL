# JavaScript Intro Overview

- Historical development and significance
- Typical applications of JavaScript

Setting Up the Development Environment

- Overview of recommended browsers and their DevTools
- Installation and basic usage of a code editor (e.g., VS Code)

First JavaScript Program

- Integrating JavaScript into HTML
- Running and testing your first simple scripts

<br><br><br>

## Historical Development and Significance

Imagine the Internet in the early 90s was like a newspaper. You could read text and look at pictures, but you couldn’t interact with anything. It was static—immovable and not interactive. Browser developers wanted to change that.

<br><br><br>

### The Birth of "Mocha" (1995)

In 1995, a programmer named Brendan Eich was working at Netscape, the company behind the then-popular "Netscape Navigator" browser. He was tasked with creating a new, simple programming language that would run directly in the browser. The goal was to make web pages come alive.

The incredible part: **He developed the first version of this language in just 10 days!**

At first, he named it "Mocha," then it was briefly called "LiveScript." Around this time, another programming language called "Java" was extremely popular. For marketing reasons, Netscape decided to rename the language "JavaScript" to ride the wave of the Java hype.

**Important note:** This is one of the biggest sources of confusion in programming! **JavaScript has almost nothing to do with Java.** They are two totally different languages, just like a hamster has nothing to do with a house cat, even if both can be pets.

<br><br><br>

### The First Browser War and Standardization (Late 1990s)

Microsoft saw the potential and built its own version of JavaScript for Internet Explorer, called "JScript." The problem was, JScript and JavaScript were not 100% compatible. Web developers often had to write code separately for each browser—that was tedious.

To end this chaos, JavaScript was submitted to an international standards organization, **ECMA** (European Computer Manufacturers Association). They published a standard for the language called **ECMAScript**.

JavaScript is essentially the brand name for the most popular implementation of this ECMAScript standard. When you hear about new versions like ES6, ES2015, ES2020, etc., those are simply new versions of the ECMAScript standard introducing new features to the language.

<br><br><br>

### The Renaissance and Power of AJAX (Mid-2000s)

For a long time, JavaScript was only used for small tricks like blinking text or validating form inputs. That changed in the mid-2000s with the introduction of **AJAX** (Asynchronous JavaScript and XML).

Think of it like this: Previously, whenever you clicked a link on a website, you always had to wait for the entire new page to load. That was slow and interrupted the user experience.

With AJAX, JavaScript could now ask the server for data in the background and update parts of a webpage **without having to reload the entire page**.

A perfect example is Google Maps. If you move the map, only the new map sections are loaded—not the whole page. That was revolutionary and paved the way for the complex web applications we know today from Facebook, Gmail, and Twitter.

<br><br><br>

### The Modern Age: Node.js and Frameworks (Since 2009)

The next big leap came in 2009 with the release of **Node.js**. Up until then, JavaScript could only run in a web browser. Node.js is a runtime environment that lets you execute JavaScript code directly on a computer or server—so **outside the browser**.

Suddenly, JavaScript could be used not only for the "frontend" (what the user sees in the browser) but also for the "backend" (the server logic, databases, user management, etc.). JavaScript became a "full-stack" language.

At the same time, web applications became more and more complex. To manage this complexity, so-called **frameworks and libraries** emerged. These are essentially toolkits and ready-made building blocks that help developers code faster and in a more structured way. The most well-known today are:

- **React** (developed by Facebook)
- **Angular** (developed by Google)
- **Vue.js** (developed by the community)

<br><br><br>

### Significance Today

Today, JavaScript is one of the most important and widely used programming languages in the world. Its significance can hardly be overstated:

| Aspect                      | Explanation                                                                                                                                                                                                                      |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The Language of the Web** | Every modern web browser understands JavaScript. It is the only language that can run directly in the user's browser without plugins. Alongside HTML (structure) and CSS (design), it forms the three pillars of the modern web. |
| **Incredible Versatility**  | As you'll see shortly, you can do almost anything with JavaScript: websites, servers, mobile apps, desktop programs, and even control robots.                                                                                    |
| **Huge Community**          | There are millions of JavaScript developers worldwide. That means countless tutorials, courses, forums, and ready-made code packages (via `npm`, the Node Package Manager) to make your work easier.                             |
| **Continuous Evolution**    | Thanks to the ECMAScript standard, the language gets useful new features every year and remains modern and powerful.                                                                                                             |

<br><br><br>

## Typical Applications of JavaScript

JavaScript is like a Swiss Army knife for programmers. Here are the most important areas where it's used today:

<br><br><br>

### Interactive Websites (Frontend Development)

This is the classic and best-known usage. Any time something happens on a website without a reload, JavaScript is probably involved.

- **Examples:**
  - Validating form input (e.g., "This email address is invalid!").
  - Showing and hiding menus and elements.
  - Interactive maps (Google Maps).
  - Sliders and image galleries.
  - Games that run directly in the browser.
  - Real-time content updates (e.g., news tickers or social media feeds).

<br><br><br>

### Server Applications (Backend Development)

Thanks to **Node.js**, JavaScript can now handle tasks that were traditionally done by languages like PHP, Python, or Java. The backend is basically the heart and brain of an application.

- **Backend Tasks:**
  - Communicating with databases (storing, reading, updating, deleting data).
  - User management (registration, login, password management).
  - Providing data to the frontend (e.g., via an API).
  - Executing complex business logic.
- **Popular technology:** The **Express.js** framework is often used together with Node.js to simplify server application development.

<br><br><br>

### Mobile Apps

You can also use JavaScript to develop apps for iOS and Android. You write your code once in JavaScript, and a framework translates it to run on both platforms.

- **Advantage:** You don't have to develop two separate apps (one in Swift/Objective-C for iOS, one in Kotlin/Java for Android), saving time and money.
- **Popular technologies:**
  - **React Native:** Allows the creation of apps that feel and behave like "real" native apps. Instagram and Airbnb use it.
  - **NativeScript:** A similar approach to React Native.
  - **Progressive Web Apps (PWAs):** These are basically websites that behave like apps. They can be installed on the home screen, work offline, and send push notifications.

<br><br><br>

### Desktop Applications

Yes—even traditional programs for Windows, macOS, and Linux can be written with JavaScript! Here, the web application (written in HTML, CSS, and JS) is packaged into a mini-browser that looks like a regular program.

- **Popular technology:** **Electron** is the leading framework for this.
- **Famous examples built with Electron:**
  - **Visual Studio Code** (one of the most popular code editors)
  - **Slack** (communication tool)
  - **Discord** (chat for gamers)
  - **WhatsApp Desktop**

<br><br><br>

### Game Development

Even though large, AAA games are usually written in C++, JavaScript also has its niche here.

- **Browser Games:** Using HTML5 (the `<canvas>` element) and JavaScript libraries like **Three.js** (for 3D) or **Phaser** (for 2D), impressive games can be created directly in the browser.
- **Game Engines:** Some engines use JavaScript as a scripting language to control the behavior of game objects.

<br><br><br>

### Internet of Things (IoT) and Robotics

This is a rather new but growing area. With special frameworks, JavaScript can run on tiny microcontrollers (like the Raspberry Pi or Arduino) to control hardware.

- **Popular technology:** **Johnny-Five** is a popular JavaScript library for robotics and IoT.
- **Examples:**
  - Controlling a drone with JavaScript.
  - Building a weather station that sends its data to a website.
  - Automating lights and other devices in a smart home.

<br><br><br>

### Application Areas Overview Table

| Area of Application      | Typical Technology / Framework | Concrete Example                                 |
| :----------------------- | :----------------------------- | :----------------------------------------------- |
| **Frontend (Web)**       | React, Angular, Vue.js         | An interactive shopping cart in an online store. |
| **Backend (Server)**     | Node.js, Express.js            | The login function for a social media platform.  |
| **Mobile Apps**          | React Native, NativeScript     | The Instagram app on your smartphone.            |
| **Desktop Applications** | Electron                       | The Discord client on your computer.             |
| **Games**                | Three.js, Phaser               | A 2D platformer game in the browser.             |
| **IoT / Robotics**       | Johnny-Five, Cylon.js          | An LED lamp controlled via a web interface.      |

<br><br><br>
