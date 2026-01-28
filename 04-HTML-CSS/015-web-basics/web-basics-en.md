# Understanding the Web

- How the Internet works (Client, Server, Transmission paths)
- HTTP/HTTPS protocols: basics and importance

**Structure of a Webpage**

- Composition of web documents (HTML, DOM)
- Introduction to frontend technologies: HTML, CSS, and JavaScript

**Basic Structure of HTML**

- Writing a minimal HTML5 document with essential elements (DOCTYPE, html, head, body)
- Purpose of elements like `<title>` and `<meta>`

**Text Formatting in HTML**

- Using headings (`<h1>`–`<h6>`), paragraphs (`<p>`), and text emphasis (`<strong>`, `<em>`)
- Working with line breaks (`<br>`) and horizontal lines (`<hr>`)

<br><br><br>

# 🌐 Understanding the Web

When we talk about the “Web” (World Wide Web), we usually mean the colorful websites, videos, and content we access through a browser. The “Internet” is the underlying network — the roads on which the data travels.

<br><br><br>

## 🌍 How the Internet Works (Client, Server, Transmission Paths)

The entire system is based on a simple idea: someone **requests** something (the client), and someone **responds** (the server).

<br><br><br>

### 💻 The Client (The Customer)

The **client** is you — or more precisely, your device. That can be your laptop, smartphone, or smart TV.

- **What does it do?** The client is the “customer” who makes a request. When you type `www.google.com` into your browser and press Enter, your client _asks_ the Internet: “Please give me Google’s website.”
- **The tool:** The main tool of the client is the **web browser** (e.g. Chrome, Firefox, Safari). The browser is like a translator and operator: it takes your input (the domain name), formats it into an official request (an HTTP request), and sends it off. When the response comes back, it assembles the code (HTML, CSS, JavaScript) into the visual website you see.

<br><br><br>

### 🖥️ The Server (The Service Provider)

The **server** is the destination of your request. Think of it as the restaurant you order from.

- **What is it?** A server is essentially just another computer — but a very powerful one with a high-speed Internet connection, designed to handle thousands of requests simultaneously. It runs 24/7.
- **What does it do?** It “serves” (hence the name) data. It waits for requests. When a request like “Please give me Google’s website” arrives, the server finds the right file on its hard drive and sends it back as a response.

![alt text](licensed-image.jpg)

<br><br><br>

### 📬 The Transmission Paths (The Delivery System)

Now we have a customer (client) and a restaurant (server). But how does the order reach the restaurant and the pizza (the website) get back to you? That’s the job of the transmission system — the Internet itself.

Think of it as a massive global postal network:

1. **The Address Problem (IP & DNS):**
   Every server in the world has a unique address — like a house number. This is the **IP address** (e.g. `172.217.16.14`). Since no one can remember those numbers, we use names called **domains** (e.g. `google.com`).
   When you type `google.com`, your client first has to look up the corresponding IP address in the “phonebook of the Internet,” called **DNS (Domain Name System)**.

2. **The Transport Problem (TCP/IP):**
   A website is too large to send in one piece. The Internet breaks it down into thousands of tiny **data packets** (pizza slices). Each packet gets a sender IP (yours) and a receiver IP (the server’s).
   The **TCP/IP protocol** is the rulebook for this delivery.
   - **TCP** (Transmission Control Protocol) is the logistics manager. It numbers all packets (slice 1/1000, 2/1000...) and checks at the end whether they all arrived and reassembles them in the correct order. If one is missing, it requests it again.
   - **IP** (Internet Protocol) is the mailman that handles addressing and routing the packet to the next stop.

The packets then travel through **routers** (postal sorting centers) and via **undersea cables, fiber optics, or satellites** (highways and airplanes) around the world to the server — which does the same in reverse to send data back to you.

<br><br><br>

## 🔒 HTTP/HTTPS Protocols: Basics and Importance

We now know _that_ clients and servers communicate — but _how_ do they talk? They need a shared language, called a **protocol**.

<br><br><br>

### 📜 What Is a Protocol?

A protocol is simply an agreed set of rules for communication.
When you meet someone, you say “hello” and shake hands — you don’t start whistling. That’s a social protocol.

In IT, a protocol defines what a request looks like (e.g. `GET /index.html`) and how a response is formatted (e.g. `200 OK` – here’s the file).

<br><br><br>

### 📨 HTTP: The Standard Protocol (Hypertext Transfer Protocol)

**HTTP** stands for **Hypertext Transfer Protocol** — the standard language of the web. It was designed to transfer web pages (hypertext documents) from servers to clients.

**The big problem with HTTP: It’s a postcard!** ✉️
HTTP is _unencrypted._ When you visit a website over HTTP, it’s like sending a postcard — anyone along the way (your Wi-Fi provider, your ISP, or a hacker in the same café) can read it in plain text.

If you type your password or credit card number on an HTTP site, it’s sent openly. That’s extremely insecure.

<br><br><br>

### 🔐 HTTPS: The Secure Protocol (HTTP Secure)

**HTTPS** is the modern, secure version. The “S” stands for **Secure**.

**The difference: HTTPS is a sealed vault!** 📦
It’s the same HTTP protocol but wrapped in an extra security layer called **SSL/TLS** (Secure Sockets Layer / Transport Layer Security).

Think of it like this: Instead of sending a postcard, you place your message in a locked vault and send that. Only you (the client) and the recipient (the server) have the keys. Anyone intercepting the vault sees only a locked metal box — they can’t read the contents.

<br><br><br>

### 🔑 How HTTPS Encryption Works

This vault magic happens in two steps:

1. **Authentication (The ID Check):**
   When you visit `mybank.com` via HTTPS, you’ll see a **lock icon** 🔒 in the browser. That means the server had to present a digital ID (an **SSL/TLS certificate**) issued by a trusted **Certificate Authority (CA)** confirming that this really is `mybank.com` and not an imposter.

2. **Encryption (The Handshake):**
   After verifying the ID, your browser and the server agree on a unique secret code (a “session key”) during a process called the **TLS handshake**. From then on, all communication is encrypted with this code.

<br><br><br>

### 📊 HTTP vs. HTTPS: Direct Comparison

| Feature             | HTTP (Hypertext Transfer Protocol)                                                  | HTTPS (HTTP Secure)                                                                  |
| :------------------ | :---------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **🔒 Encryption**   | **No.** Data sent in plain text.                                                    | **Yes.** Data is strongly encrypted via SSL/TLS.                                     |
| **🚪 Default Port** | Port 80                                                                             | Port 443                                                                             |
| **🛡️ Security**     | **Insecure.** Vulnerable to “Man-in-the-Middle” attacks (eavesdropping, tampering). | **Secure.** Protects against interception and data manipulation.                     |
| **🔑 Authenticity** | **No.** You can’t verify the real server’s identity.                                | **Yes.** SSL/TLS certificates verify the server’s authenticity.                      |
| **🌐 Modern Use**   | Outdated. Only used for non-sensitive content or redirects.                         | **Standard.** Required for logins, banking, e-commerce, and nearly all modern sites. |

<br>
<br>
<br>

## Questions

- What does a client do in the context of the Internet? Give 2 examples of client devices.
- Explain the role of a server in web communication.
- Describe the process of how data is transmitted from a client to a server and back.
- What is an IP address?
- What is the purpose of DNS in Internet communication?
- What is the full form of TCP?
- What is the full form of IP?
- What is a Protocol? Give an example in the context of web communication.
- What does HTTP stand for?
- Why is HTTP considered insecure?
- What does HTTPS stand for?
- How does HTTPS ensure secure communication between a client and a server?
