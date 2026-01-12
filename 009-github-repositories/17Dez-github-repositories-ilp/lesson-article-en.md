## Topics

Basics of Version Control

- Principles of version control systems
- Differences between centralized and distributed version control

Git Installation and Setup

- Requirements and installation of Git on various operating systems
- Basic configuration of Git (user.name, user.email)

Git Command Overview and Initial Usage

- Initializing a new Git repository (git init)
- Accessing Git help and self-help options

# 📚 Basics of Version Control

<br><br><br>

## 📜 Principles of Version Control Systems

Imagine you are working on a very important thesis or a book. You save your file as `work_v1.docx`. Then you make some changes and save it as `work_v2.docx`. Later, you create a "final" version: `work_final.docx`. But then you find an error and create `work_final_corrected.docx`. And your friend who works with you has his own version: `work_final_peter_version.docx`.

This quickly becomes confusing and chaotic. You no longer know which version is the latest, what exactly was changed, and by whom. If you want to restore an old paragraph, you have to search through all the old files.

This is exactly where version control systems (VCS) come into play. A VCS is like a magical, super-intelligent notebook for your projects (mostly for code, but it works for any type of file). It solves the above problems through some fundamental principles.

### 🕒 Tracking Changes

This is the heart of everything. Instead of manually renaming files, you tell the VCS: "Please remember the current state of my project." This saved state is called a **"commit"** or a **"revision"**.

For each commit, the system saves three important things:

1.  **What** was changed? (e.g., line 5 in document X was deleted, two new paragraphs were added in document Y).
2.  **Who** changed it? (The user's name).
3.  **Why** was it changed? (The developer writes a short message, e.g., "Corrected a spelling error in the preface").

This creates a seamless, traceable history of your entire project. You can look back at any time and see every single change since the start of the project.

### 🌳 Branching & Merging

Imagine the history of your project as the trunk of a tree. Each commit is a small ring in the trunk, documenting the growth. But what if you want to try something new without endangering the stable main version (the "trunk")? For example, you want to experimentally write a new chapter for your book.

For this, you create a **"branch"**. This branch is an exact copy of your project at a particular point in time. On this branch, you can now work undisturbed, make new commits, and try out anything you want. The main trunk remains completely untouched.

When you're finished and satisfied with your work on the branch, you can **"merge"** it back into the main trunk. The system will try to intelligently integrate your changes into the main version.

This principle is incredibly powerful because several people can work simultaneously on different "branches" (features, bug fixes) without interfering with each other.

### ⏪ Restoring Versions

You've made a huge mistake while working on your project and accidentally deleted half of it? Or you realize a new feature you added three days ago broke everything?

Without version control, this would be a disaster. With a VCS, it’s no problem. Since each commit is a complete snapshot of your project, you can simply travel back in time. You can:

- Restore the state of a single commit from last week.
- Reset a single file to the state from yesterday.
- Undo a specific change without losing other changes.

This gives you enormous security and freedom to experiment since you know you can’t irreversibly destroy anything.

### 🤝 Collaboration

When multiple people work on the same project, a VCS helps coordinate the work. Everyone works on their own copy of the project. When someone is done with their changes, they upload them to a central directory (a **"repository"**). Others can then download these changes and integrate them into their own working copy.

What happens if two people change the same line in the same file? The VCS recognizes this **"conflict"**. It pauses the process and says: "Warning! There are conflicting changes here. Please review and decide which version is correct." This prevents work from being accidentally overwritten.

<br><br><br>

## 🌐 Differences Between Centralized and Distributed Version Control

There are two basic architectures that version control systems can have. Both follow the above principles, but in different ways.

### 🏛️ Centralized Version Control System (CVCS)

Imagine a library. In the middle of the room is a huge shelf – that's the **central server**. On this shelf is the _only_ original copy of the entire project history.

When you want to work on something, you go to this shelf and borrow a copy of the latest version of a file (a "checkout"). You work on your copy at your desk. When you're done, you return the file and submit your changes ("commit"). Your changes are saved directly on the central server.

- **Advantages:**
  - Very easy to understand and manage.
  - There's always a clear understanding of what the "official" version is.
- **Disadvantages:**
  - **Single Point of Failure:** If the central server fails (e.g., power outage, hard drive crash), no one can work. No one can commit, compare versions, or retrieve changes. If the server fails completely and there’s no backup, the entire project history is lost.
  - **Online Requirement:** For almost all actions (committing, viewing history, creating branches), you need a connection to the central server. Offline work (e.g., on a train) is very limited.

**Famous examples:** Subversion (SVN), CVS, Perforce.

### 💻 Distributed Version Control System (DVCS)

Now imagine another system. Instead of a central library, there is a main server, but every developer receives not just the latest version when checking out, but a **complete 1:1 copy of the entire library** for their own desk. Every developer thus has the complete project history locally on their own computer.

You work on your project and make commits. These commits are stored in your _local_ copy of the repository. You can create branches, view history, compare versions – all lightning fast and without an internet connection.

Only when you want to share your work with others, you connect to the main server and push your changes there ("push"). To receive others' changes, you fetch them from the server ("pull").

- **Advantages:**

  - **No Single Point of Failure:** If the main server fails, it's annoying but not tragic. Every developer has a complete copy of the project history on their computer. The project can simply be restored from one of these copies.
  - **Excellent Offline Capability:** You can sit on a plane and make dozens of commits, create new branches, and organize all your work. Only when you have a connection again do you share your work.
  - **Speed:** Since most operations (commit, view history) happen locally, they're extremely fast. There's no network delay.
  - **Flexible Branching & Merging:** Creating branches in a DVCS is extremely easy and fast, greatly encouraging experimental and parallel development workflows.

- **Disadvantages:**
  - The learning curve is initially a bit steeper because you have to understand the distinction between the local and remote repository (e.g., concepts like push & pull).

**Famous examples:** **Git** (by far the most popular), Mercurial.

### 📊 Direct Comparison Overview

Here’s a table to make the differences even clearer:

| Feature                  | 🏛️ Centralized System (e.g. SVN)                                                                        | 💻 Distributed System (e.g. Git)                                                                                                    |
| :----------------------- | :------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| **Repository Structure** | A central server contains the whole history. Developers only have a working copy of the latest version. | Every developer has a complete copy of the entire repository, including the full history, on their local computer.                  |
| **Workflow**             | For most operations (commit, branching), a connection to the central server is necessary.               | Most operations (committing, branching, merging) are done locally and can be done offline. A connection is only needed for sharing. |
| **Speed**                | Slower, as many actions require network communication with the server.                                  | Very fast, as almost everything happens on the local hard drive.                                                                    |
| **Reliability**          | Low. If the central server fails, work stops. A total failure can destroy the entire history.           | Very high. Since there are many full copies, each local copy basically serves as a backup.                                          |
| **Branching & Merging**  | Often considered cumbersome and resource-intensive. Branches are "heavier".                             | A core feature. Branches are extremely lightweight and quick to create, making parallel work easy.                                  |
| **Examples**             | Subversion (SVN), CVS                                                                                   | Git, Mercurial (Hg)                                                                                                                 |

# 🔧 Git Installation and Setup

Think of Git as a magical notebook for your projects. Instead of saving each version of a file under a new name (like `Text_v1.txt`, `Text_v2_final.txt`, `Text_v2_final_REALLY_final.txt`), Git logs every single change you make. It remembers _who_ made the change, _when_ it was made, and _what_ exactly was changed. This allows you to always go back to a previous version of your project, compare changes, and collaborate with others without overwriting each other's work.

Before we can use this magic notebook, we need to install it on your computer and tell it who you are. This is exactly what we’ll do step by step now.

<br><br><br>

## 💻 Requirements and Installation of Git

Git is a program that you install on your computer like any text editor or browser. The good news: it's free and available for every major operating system. Installation is usually very easy.

### 🪟 Installation on Windows

For Windows, there’s a special package called "Git for Windows" that includes everything you need.

1.  **Download:** Go to the official website: [https://git-scm.com/download/win](https://git-scm.com/download/win). The download should start automatically. You’ll get a `.exe` file.
2.  **Run the installer:** Open the downloaded file with a double-click. An installation wizard will start.
3.  **Click through the wizard:** For beginners, just accept all the proposed defaults and keep clicking "Next." These settings are perfect for most use cases. The wizard installs not just Git, but also useful addons like "Git Bash," a special command-line terminal optimized for working with Git.

### 🍎 Installation on macOS

On a Mac, you have basically two easy ways to install Git.

**Method 1: Xcode Command Line Tools (often already present)**
If you’ve programmed before or used certain developer tools on your Mac, Git is probably already installed.

1.  **Check:** Open the "Terminal" app (find it via Spotlight or in the Utilities folder).
2.  Enter `git --version` and press Enter.
3.  If a version number appears (e.g., `git version 2.37.1`), you’re done! Git is already installed.
4.  If not, macOS will prompt you in a pop-up to install the "Command Line Developer Tools." Just click "Install" and follow the prompts. Git is part of this package.

**Method 2: Homebrew (recommended)**
Homebrew is a "package manager" for macOS. Think of it like an App Store for developer tools. If you plan to use developer tools regularly, Homebrew is the best way.

1.  **Install Homebrew (if not already installed):** Open Terminal and paste the command from the official Homebrew website ([https://brew.sh/](https://brew.sh/)).
2.  **Install Git:** Once Homebrew is installed, you can install Git with a single, simple command. In the terminal, type:
    ```bash
    brew install git
    ```
    Homebrew downloads and installs the latest version of Git for you. You can later easily update it with `brew upgrade git`.

### 🐧 Installation on Linux

On Linux, installing Git is extremely easy, since it’s available via the built-in package manager for each distribution. You just need to know the right command for your system.

1.  **Open your terminal.**
2.  **Enter the correct command for your distribution:**

    - **For Debian/Ubuntu (and derivatives like Mint):**

      ```bash
      sudo apt update
      sudo apt install git
      ```

    - **For Fedora/CentOS/RHEL (and similar):**
      ```bash
      sudo dnf install git
      ```
      (On older versions, the command might be `sudo yum install git`.)

You’ll be asked for your password because `sudo` is required to install software.

### ✅ Verifying the Installation

No matter what operating system you use, the last step is always the same: check that the installation was successful.

1.  Open your command line:
    - **Windows:** Open "Git Bash" (installed with Git), or "Command Prompt" / "PowerShell."
    - **macOS/Linux:** Open the "Terminal."
2.  Enter this command and press Enter:
    ```bash
    git --version
    ```
3.  If everything worked, your computer should respond with a version number, for example:
    ```
    git version 2.41.0.windows.1
    ```
    The exact number doesn’t matter, as long as something appears – that’s your confirmation that Git is ready to use on your system!

<br><br><br>

## ⚙️ Basic Git Configuration

After installing Git, we need to tell it two very important things: your name and your email address. This is absolutely essential!

**Why is this so important?**
Every single change you save with Git (a "commit") will be signed with this information, like a digital signature. This lets everyone on your team – and yourself months from now – see exactly who made what change. Without this configuration, Git will keep asking you for your info with every action or refuse to work.

We’ll do this setup once using the `--global` option. This means these settings apply to **all** your Git projects on this computer. You don’t need to redo this for every project.

### 👤 Setting Your Name (`user.name`)

This name will show as the author of your changes. It’s customary to use your real first and last name.

1.  Open your command line (Terminal, Git Bash, etc.).
2.  Enter the following command, replacing `"Max Mustermann"` with your name. The quotation marks are important if your name contains spaces.

    ```bash
    git config --global user.name "Max Mustermann"
    ```

### 📧 Setting Your Email Address (`user.email`)

This email address is also used for identification. If you use platforms like GitHub or GitLab, you should **definitely** use the same email address you registered with there. That way, your local changes can be automatically linked to your online profile.

1.  Enter this command in the command line, replacing the sample email with your own:

    ```bash
    git config --global user.email "max.mustermann@example.com"
    ```

### 🔍 Checking Your Configuration

Want to be sure everything is set correctly? That’s easy. You can view your configuration.

- **List all settings:** To list all global settings, enter:

  ```bash
  git config --global --list
  ```

  You should see lines like `user.name=Max Mustermann` and `user.email=max.mustermann@example.com`.

- **Check a specific value:** To view only a specific value:
  ```bash
  git config user.name
  ```
  The output will simply be `Max Mustermann`.

Here’s a small table summarizing the configuration commands:

| Description                    | Command                                           | Example                                              |
| :----------------------------- | :------------------------------------------------ | :--------------------------------------------------- |
| **Set username globally**      | `git config --global user.name "Your Name"`       | `git config --global user.name "Erika Musterfrau"`   |
| **Set email address globally** | `git config --global user.email "your@email.com"` | `git config --global user.email "erika@example.com"` |
| **View all global settings**   | `git config --global --list`                      | `git config --global --list`                         |
| **Check a specific value**     | `git config [setting]`                            | `git config user.name`                               |

Congratulations! Your Git is now fully installed and properly configured. You're ready to use version control for your projects.

# 🛠️ Git Command Overview and Initial Usage

<br><br><br>

## 🌱 Initializing a New Git Repository (`git init`)

Imagine you're starting a brand new project. It could be a thesis, a website, or a small program. At first, you just have an empty folder or maybe some initial files. But you want to start tracking all changes to this project from the beginning.

That's where `git init` comes in. This command is the very first step to activate Git’s magic in your project folder. You could say you’re laying the foundation of your project’s journal with `git init`.

### 🎯 What Exactly Does `git init` Do?

When you run `git init` in a folder, Git does one, but a very important thing: It creates a hidden subfolder called `.git`.

This `.git` folder is the heart, brain, and soul of your entire Git repository. Everything Git knows and stores about your project is in this one folder:

- The entire version history (every single commit).
- Information about all your branches (e.g., the `main` branch).
- Configuration settings specific to this project.
- And much more!

You can think of your project folder as a house. Before you run `git init`, it's just a house. After running `git init`, this house suddenly has a complete, invisible monitoring and recording system in the basement (the `.git` folder) that logs every single change you make, as soon as you tell it to.

**Important:** Normally you never need to work directly in this `.git` folder or change files in it manually. Git takes care of everything. It’s good to know it’s there, but treat it like the "engine room" that only the experts (i.e., Git itself) should enter.

<br><br><br>

### 📝 Step-by-Step Guide

Creating a new Git repository is very easy. Follow these steps:

1.  **Open your terminal (command line).**

    - On Windows, that's often "Command Prompt," "PowerShell," or "Windows Terminal."
    - On macOS or Linux, it’s just "Terminal."

2.  **Navigate to your project folder.**
    Suppose your project folder is called `my-new-project` and is on the desktop. You would use the `cd` (change directory) command:

    ```bash
    # First, move to Desktop
    cd Desktop

    # Then into the project folder
    cd my-new-project
    ```

    Alternatively, you can specify the full path in one go:

    ```bash
    cd Desktop/my-new-project
    ```

3.  **Run the command.**
    Now that you’re in the right folder, just type the following and press Enter:

    ```bash
    git init
    ```

4.  **Check the output.**
    Git will immediately give you a confirmation. The message typically looks like this:
    ```
    Initialized empty Git repository in /Users/YourUsername/Desktop/my-new-project/.git/
    ```
    That’s it! Your folder is now an official Git repository. You can now start adding files and making your first commits. If you enable hidden files in your file manager, you’ll now see the `.git` folder.

<br><br><br>

### 🔍 What Happens Behind the Scenes? (The `.git` Folder)

A small peek in the "engine room" can help you understand things better. If you (just for curiosity!) look in the `.git` folder, you’ll find various files and subfolders. Here are the most important ones, simply explained:

| Folder / File | 📜 Simple Explanation                                                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `HEAD`        | A simple text file that works like a bookmark. It always points to the branch you’re working on. At first, that's usually the `main` or `master` branch.                       |
| `config`      | Contains special settings just for this repository. For example, your name or email if you want to set them per project.                                                       |
| `objects/`    | This is Git’s database. Every file content, every commit, everything is stored here as an "object" in a highly efficient way.                                                  |
| `refs/`       | This folder stores "labels" or "pointers" to your commits. Under `refs/heads/`, for example, you’ll find a file for every branch pointing to the latest commit in that branch. |
| `hooks/`      | A folder for advanced users. Here you can put scripts that automatically run for certain Git actions (e.g., before a commit).                                                  |

You don’t need to memorize these details. The key point is: The seemingly simple `git init` command creates this whole complex and powerful structure for you so you can immediately start writing your project’s history.

<br><br><br>

## 📖 Accessing Git Help and Self-Help Options

Git is an incredibly powerful tool with hundreds of commands and even more options for each of them. It's absolutely impossible (and unnecessary) to memorize it all.

A really good developer isn’t someone who knows everything by heart, but someone who knows how to help themselves quickly and efficiently. Git has excellent built-in help functions. You never need to leave your terminal to find an answer.

<br><br><br>

### 🥇 First Stop: `git help <command>`

This is the most comprehensive way to get help for a specific command.

- **How does it work?** Simply type `git help` followed by the name of the command you want more info about.
- **Example:** You forgot how `git commit` works or what options it has.
  ```bash
  git help commit
  ```
- **What happens?** Git opens the official, very detailed documentation (the so-called "man page" for manual page) for this command. This usually appears directly in your terminal in a special reading mode (often with the program `less`).
  - You can scroll with the arrow keys.
  - Press `q` (for "quit") to exit the help view and return to your normal command line.

This help is extremely detailed. It includes a description, an overview of all possible options, configuration info, and often usage examples. If you want to really understand a command in detail, this is the way to go.

<br><br><br>

### 💨 The Quick Way: The `--help` Option

Sometimes you want it a bit shorter. The `--help` option is an alternative that produces exactly the same result.

- **How does it work?** Just add the `--help` option to the command.
- **Example:**
  ```bash
  git commit --help
  ```
- **What happens?** Exactly the same as `git help commit`. The full "man page" opens. Whether you use `git help command` or `git command --help` is just personal preference.

<br><br><br>

### 💡 For a Quick Overview: The `-h` Option

Sometimes the full "man page" is too much. You don’t want a novel, just want to quickly check what a certain option was called. For that, there’s the short help.

- **How does it work?** Just add the shorter `-h` option to the command.
- **Example:**
  ```bash
  git branch -h
  ```
- **What happens?** Instead of opening the full documentation, Git prints a short, clear summary of the most common options right in your terminal. You stay in your current view and can keep working immediately. Perfect for a quick refresher.

<br><br><br>

### 📊 Comparison of Help Options

Here’s a table to clarify the differences:

| Command / Option                    | 📜 Result                                                                            | 🤔 When to use?                                                                 |
| ----------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| `git help commit`                   | Opens the **complete, detailed** documentation in its own view.                      | When you really want to understand a command from scratch or need rare options. |
| `git commit --help`                 | **Identical** to `git help commit`.                                                  | Just preference which style you like.                                           |
| `git commit -h`                     | Shows a **short, compact summary** of the most common options right in the terminal. | When you need a quick reminder what an option is called or what it does.        |
| `git help --all` or `git --help -a` | Lists **all available Git commands** installed on your system.                       | If you want an overview of what Git can do or forgot a command’s name.          |

Mastering these three help variants (`help`, `--help`, and `-h`) is a kind of superpower. It makes you independent of Google or other external sources and lets you work fluently on the command line, even if you’re unsure about a command.
