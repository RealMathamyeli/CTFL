###### Topics

Track files and changes
- Add files to the repository (git add)
- Create snapshots of changes (git commit)

Check work status and history
- Overview of current status (git status)
- Display changes and history (git log)

Undo files and changes
- Revert changes (git checkout, git restore)
- Undo commits (git reset)

Basic branch management
- Display and create branches (git branch)
- Switch between branches (git switch)

Error handling and conflict resolution
- Interpreting typical error messages in daily work
- Recognize and resolve simple merge conflicts

<br><br><br>

# 📂 Tracking Files and Changes

Imagine you’re writing a book. Git is like a magical notebook that not only stores the current version of your book, but also remembers every single change you have ever made. The following commands are the fundamental tools for telling this magical notebook *what* to remember and *when*.

<br><br><br>

## 🛒 Adding Files to the Repository (git add)

Before talking about the `git add` command, it’s important to understand that Git conceptually works with three "zones":

1. **Working Directory**: This is simply the folder on your computer where your project lives. This is where you write and edit your files, just as usual.
2. **Staging Area (or “Index”)**: This is a preparation area. Here, you put all changes that you want to save permanently in the next step.
3. **Repository (.git directory)**: This is Git’s “database”, where all your saved versions (the so-called “commits”) are safely stored.

The best analogy for this is shopping:
*   Your **Working Directory** is the entire supermarket with all its shelves.
*   The **Staging Area** is your shopping cart.
*   The **Repository** is your fridge at home.

The `git add` command is the act of taking something off the supermarket shelf and putting it into your shopping cart. You haven’t bought it yet, and it’s not at home yet, but you’ve *reserved* it for purchase.

### 🤔 What does `git add` actually do?

When you change a file, Git notices. But just because you changed it doesn't mean it's automatically marked for saving. You have to explicitly tell Git: “Hey, this change to this file is important, please prepare it for the next snapshot.”

That’s exactly what `git add` does. It takes the current version of a file (or multiple files) from your working directory and copies it into the Staging Area.

### 📝 The most important `git add` commands

There are various ways to add files to the staging area. Here are the most common ones in a table:

| Command | Description | Use Case |
| :--- | :--- | :--- |
| `git add <filename.txt>` | Adds only this specific file to the staging area. | You’ve worked on three files, but only the changes to `filename.txt` are done and should be saved next. |
| `git add file1.js file2.css` | Adds multiple specific files at once. | You’ve made a logical change that affects several, but not all, files (e.g., a new feature in JS and its related CSS). |
| `git add .` | Adds all new and modified files in the current folder (and all subfolders) to the staging area. Deleted files are often not included. | You’ve made a number of changes and want to prepare them all for the next commit at once. This is the most common command. |
| `git add -A` (or `--all`) | Adds **all** changes in the whole project to the staging area. This includes new, modified **and deleted** files. | You’ve renamed, deleted, and changed files and want Git to consider absolutely all those actions for the next commit. |
| `git add -p` | Starts “patch” mode. Git goes through each change in your files piece by piece and asks you whether you want to add that change to the staging area (y/n). | Extremely useful! You modified a file and did two different things in it (e.g., fixed a bug and started work on a new feature). With `-p`, you can add just the bugfix parts and leave the incomplete code for later. |

### 💡 Why this extra step at all?

The staging area is one of Git’s most powerful concepts. Why?

* **Control:** It gives you full control over what goes into the next “snapshot”. You can leave unfinished work or test code in your working directory and not have to save it.
* **Atomic commits:** It allows you to wrap your changes into logical, clean packages. Imagine you’ve fixed three different bugs in three different files. Instead of making one big commit with the message “various bugs fixed,” you can do:
    1.  `git add bugfile_1.py`
    2.  `git commit -m "Fix: Fixes login issue"`
    3.  `git add bugfile_2.html`
    4.  `git commit -m "Fix: Corrects footer display"`
    
    This makes your project history much more readable and understandable.

<br><br><br>

## 📸 Creating Snapshots of Changes (git commit)

When you are happy with the contents of your cart (the staging area), you go to the register to buy everything and take it home permanently. In Git, this is the `git commit` command.

A “commit” is a permanent snapshot of your project at a specific time. More precisely: it’s a snapshot of the state of your **staging area** at the moment you run the command.

### 🤔 What is a “commit”?

A commit is more than just a bundle of files. Each commit is a fixed package containing:

* **The data**: A reference to the exact state of all files you prepared with `git add`.
* **A unique ID (hash):** A long string of numbers and letters (e.g., `a1b2c3d4...`) that permanently identifies this commit.
* **Metadata:** Who made the commit (author) and when (date and time).
* **A commit message:** A description you write yourself to explain **what** and **why** you made these changes.

### 💬 The `git commit` command and commit message

The most common way to create a commit is:

```bash
git commit -m "A short, meaningful message"
```

*   `git commit`: The command to create the snapshot.
*   `-m`: Stands for "message". You tell Git that the message directly follows.
*   `"..."`: The text in quotes is your description.

**The art of the good commit message is extremely important!** A good message doesn’t explain *what* you changed (that’s visible in the code) but *why*.

| Bad message | Good message |
| :--- | :--- |
| "Changes" | "Feat: Add 'Forgot password' button" |
| "Bugfix" | "Fix: Prevent crash when username is empty" |
| "Update file.js" | "Refactor: Improve readability of calculation function" |

If you run `git commit` without the `-m` option, Git opens a text editor (like Vim or Nano) where you can write a more detailed message. It’s common to have a title line and a more detailed description underneath.

### 🔄 The workflow: `add` and `commit` together

The basic Git workflow, which you’ll repeat hundreds of times, looks like this:

1. **Work:** You write code, change text, delete images — just normal file work in the **working directory**.
2. **Stage (prepare):** You decide which changes belong together as a logical package. You select these and use `git add` to put them in your “cart,” the **staging area**. You can repeat this step as often as you want, adding more.
3. **Save (commit):** When your package is complete and you’re happy with the staging area, you use `git commit` to take a permanent snapshot. You give it a good description and then “store” it safely in your **repository**.

After committing, your staging area is empty again and the cycle can start over. Every time you make a commit, you add a new, safe checkpoint to your project’s history.

---

# 📖 Checking Work Status and History

<br><br><br>

## 🔍 Overview of Current Status (git status)

<br><br><br>

### 🤔 What is 'git status'?

Think of `git status` as a snapshot of your workspace. It is one of the most important and frequently used commands in Git. At any time it answers: “What has happened since my last save (commit)?”

This command scans your project directory and compares it with the state from your last commit and the so-called "staging area" (which we covered above). It provides you a clear, concise report about the state of your files.

Most importantly, it answers three questions:
1. Which known files have I changed?
2. Which new files are there that Git doesn’t know about yet?
3. Which changes are already staged for the next commit?

`git status` is your best friend to keep track and make sure you only commit the changes you really want to commit.

<br><br><br>

### 🌳 The Three States of Files

To really understand `git status` output, you need to know the three main zones or states your files can be in with Git.

1. **Working Directory:** The folder on your computer with your project. Here you create, edit, and delete files as usual.
2. **Staging Area:** This is a kind of “intermediate storage”. Before you permanently store a change in project history (commit), you add it to the staging area. Think of it as a shopping cart: you put all changes that belong together in the cart (`git add`) before you go to checkout (commit).
3. **Git Repository (.git directory):** The database where Git stores your project’s entire history. Each commit is a permanent snapshot safely kept here.

`git status` shows you the differences between these three areas.

Here’s an overview of file states `git status` reports:

| State (English) | German term | Description | What does it mean? |
| :--- | :--- | :--- | :--- |
| **Untracked** | **Unverfolgt** | This is a totally new file you created. Git has noticed it exists but doesn’t know if you want it in the project. | Git ignores this file until you tell it (`git add <filename>`) that it’s important. |
| **Modified** | **Geändert** | You’ve edited a file Git already knows and that was in previous commits. | The change exists only in your working directory. You must add it to the staging area with `git add` to prepare it for the next commit. |
| **Staged** | **Vorgemerkt** | You’ve used `git add` to put a changed or new file in the staging area. | This file is now in the “cart”. It will be written to project history on the next `git commit`. |
| **Clean** | **Sauber** | All known files in your working directory are identical to the last commit, and there are no staged changes. | Your workspace is tidy. There’s nothing new to save. |

<br><br><br>

### 💻 A Practical Example

Let’s imagine a little scenario. Your project has a file called `instructions.md`.

1. **Starting state: Everything is clean**
    You run `git status` and get this message:
    ```shell
    On branch main
    Your branch is up to date with 'origin/main'.

    nothing to commit, working tree clean
    ```
    This means: Everything is saved, no changes. Perfect.

2. **You edit a file**
    Now you open `instructions.md` and add a new paragraph. If you now run `git status`, it looks like this:
    ```shell
    On branch main
    Your branch is up to date with 'origin/main'.

    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)
        modified:   instructions.md

    no changes added to commit (use "git add" and/or "git commit -a")
    ```
    Git tells you clearly: “Hey, you changed `instructions.md` (modified) but this change is not staged for the next commit (Changes not staged for commit).” It even gives you tips – use `git add` to stage, `git restore` to discard.

3. **You create a new file**
    Now you create a new file called `ideas.txt` and write something inside. `git status` now shows:
    ```shell
    On branch main
    Your branch is up to date with 'origin/main'.

    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)
        modified:   instructions.md

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
        ideas.txt

    no changes added to commit (use "git add" and/or "git commit -a")
    ```
    Now you see both states: the modified file `instructions.md` and the new, untracked file `ideas.txt`.

4. **You stage a change**
    You decide that the change to `instructions.md` is ready to save. You use `git add`:
    ```shell
    git add instructions.md
    ```
    If you run `git status` now, the output changes:
    ```shell
    On branch main
    Your branch is up to date with 'origin/main'.

    Changes to be committed:
      (use "git restore --staged <file>..." to unstage)
        modified:   instructions.md

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
        ideas.txt
    ```
    The file `instructions.md` is now under “Changes to be committed”; it’s in the staging area. The `ideas.txt` file is still untracked. You could now make a commit that only includes the changes to `instructions.md`.

<br><br><br>

## 📜 Displaying Changes and History (git log)

<br><br><br>

### 🤔 What is 'git log'?

While `git status` shows you the *present*, `git log` is your window into the *past* of your project. Think of it as a detailed journal or logbook. Every time someone performs a `git commit`, a new entry is added to this log.

With `git log`, you can view all previous commits in chronological order, with the newest on top. This allows you to find out:
-   **Who** made what changes when?
-   **What exactly** changed in a particular commit?
-   **Why** a change was made (if the commit message is well-written)?

It’s an indispensable tool to understand project evolution, find errors, or return to a previous state.

<br><br><br>

### 🧱 The Structure of a Log Entry

A standard `git log` entry looks roughly like this and contains four important pieces of information:

```shell
commit a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0 (HEAD -> main, origin/main)
Author: Jane Doe <jane.doe@example.com>
Date:   Thu Oct 26 10:30:00 2023 +0200

    Add detailed installation guide

    This guide explains step by step how to set up the project
    on a local system and install dependencies.
```

Let’s break it down:

1. **Commit Hash:** The long string (`a1b2c3d...`). This is a unique ID (a so-called SHA-1 hash) for this specific commit. Think of it as a serial number. Every commit has its own, unambiguous ID. This is often needed if you want to refer to a specific commit.
2. **Author:** Who made this commit? You see the developer’s name and email.
3. **Date:** When was this commit created?
4. **Commit Message:** This is the most important part for human understanding. It’s written by the author during `git commit` and should explain *why* the changes were made. It typically consists of a short subject line and optionally a longer description.

<br><br><br>

### 🛠️ Customizing the Output (Useful Options)

The default output of `git log` can be very long and hard to sort through. Fortunately, there are plenty of options to format it however you need. Here are some of the most useful:

| Option | Description | Example Usage |
| :--- | :--- | :--- |
| **`--oneline`** | Shows each commit in a single, compact line. Perfect for a quick overview. It shows only the abbreviated commit hash and the commit message subject. | `git log --oneline` |
| **`--graph`** | Draws a text-based ASCII graph showing the branching and merging history. Extremely useful for visualizing project structure. | `git log --graph` |
| **`--stat`** | Under each commit, shows a small summary: which files were changed, how many lines added (`+`) and how many removed (`-`). | `git log --stat` |
| **`-p` or `--patch`** | Shows the “patch” for each commit—i.e., the actual code changes made. You can see which lines were added or removed. | `git log -p` |
| **`-<n>`** | Limits output to the last `n` commits. For example, `git log -5` shows only the last 5 commits. | `git log -3` |
| **`--author="Name"`** | Filters the log to show only commits by a specific author. | `git log --author="Jane Doe"` |
| **`--since="date"`**<br>**`--until="date"`** | Filters commits by a date window. You can use relative terms like `"2 weeks ago"` or absolute dates like `"2023-01-01"`. | `git log --since="1 month ago"` |

**Tip:** You can combine these options! A very popular and useful command is:

```shell
git log --graph --oneline --decorate
```

- `--graph` draws the branches.
- `--oneline` keeps it compact.
- `--decorate` shows branch and tag names right by each commit.

The result is a very clear and informative overview of your entire project history.

---

# 📂 Undoing Files and Changes

Think of Git as a time machine for your code. Sometimes you code something, then realize it was a mistake or you simply want to go back to an earlier state. That’s what commands to undo changes are for.

It’s very important to distinguish between two situations:

1. **Changes not yet committed:** Things you’ve recently changed in your files that aren’t yet saved in the project history. They’re either in your working directory or in the staging area.
2. **Changes already committed:** Changes you’ve already “written down” as a checkpoint in your history using `git commit`.

Now we’ll examine the tools for both cases.

<br>
<br>
<br>

## ↩️ Reverting Changes (Before a Commit)

This is about changes you haven’t “written down” yet—i.e., not committed. Maybe you experimented in a file and want to reset it to the state of the last commit. In the past, `git checkout` was the command for everything, which was a bit confusing. These days, there’s the much clearer `git restore` command. We’ll look at both so you can understand older tutorials.

<br>
<br>
<br>

### 🧐 `git checkout` (The Old Way)

`git checkout` is a bit like a Swiss Army knife in Git. It can do many things, including switching between branches, but also reverting individual files. This flexibility can be confusing.

**What does it do?**
If you use `git checkout` with a filename, it discards all changes to that file in your working directory, restoring its state from the last commit.

**The command:**
The command is: `git checkout -- <filename>`

*   **Important:** The double dashes `--` are crucial. They tell Git what follows is a filename and not a branch name, preventing confusion and errors.

**Example:**
You made changes in `style.css` that you don’t want to keep. You haven’t added the file to the staging area with `git add`.

```bash
# Resets style.css to the state in the last commit.
# All your unsaved changes in this file are lost!
git checkout -- style.css
```

Today, `git restore` is recommended for this task, as its name is clearer.

<br>
<br>
<br>

### ✨ `git restore` (The New, Better Way)

`git restore` was introduced to make reverting files clearer and safer. It’s no longer a Swiss Army knife, but a specialized tool just for this purpose. It has two main uses:

#### 1. Discarding changes in the working directory

Exactly as above with `git checkout`. You’ve changed a file but haven’t staged it (with `git add`), and you want to discard those changes entirely.

**The command:**
`git restore <filename>`

**Example:**
You experimented in `index.html` and want to abandon everything.

```bash
# Resets index.html to the state of the last commit.
# All changes to this file since the last commit are lost.
git restore index.html
```

#### 2. Removing a file from the staging area (“unstaging”)

Sometimes you accidentally add a file to the staging area with `git add` that isn’t ready to be committed. You want to undo the `git add` but keep the changes in the file itself.

**The command:**
`git restore --staged <filename>`

**Example:**
You changed `script.js` and did `git add script.js`. Now you realize you forgot something. You want to remove the file from the staging area to add it again later.

```bash
# Removes 'script.js' from the staging area.
# Your file changes are kept!
git restore --staged script.js
```
After this command, `script.js` is back in the “modified” state and is no longer “staged for commit”.

Here’s a table to clarify the difference:

| Action | Old command | New command (`restore`) | What happens? |
| :--- | :--- | :--- | :--- |
| Discard changes from working directory | `git checkout -- <file>` | `git restore <file>` | The file is reset to the state of the last commit. Changes are lost. |
| Remove file from staging area | `git reset HEAD <file>` | `git restore --staged <file>` | The file is unstaged, but changes are kept in the working directory. |

As you can see, `git restore` makes the intention much clearer and combines two actions that previously required different commands.

<br>
<br>
<br>

## ⏪ Undoing Commits (git reset)

Now we come to the “heavier artillery”: `git reset` is a very powerful command that alters the history of your project. It is used to undo commits. Imagine making one, two, or more commits, then realizing: “That was all wrong, I need to go back to an earlier point.”

`git reset` essentially moves the `HEAD` pointer of your current branch to an earlier commit. `HEAD` simply refers to your current place in project history.

The true magic (and danger) of `git reset` lies in its three main modes: `--soft`, `--mixed`, and `--hard`. They control what happens to your changes after the commits are "removed".

Remember Git’s three zones:
1. **Commit history:** The chain of commits.
2. **Staging area:** Files prepared for the next commit.
3. **Working directory:** Files you see and edit on your computer.

`git reset` always affects the commit history. The modes decide what happens to your staging area and working directory.

<br>
<br>
<br>

### 🧸 `git reset --soft`

This is the gentlest and safest form of reset.

**Analogy:** Imagine three boxes (your commits) stacked up. With `git reset --soft`, you remove the top box but don’t empty its contents—you put them in “ready to pack” (the staging area).

**What happens?**
*   **Commit history:** The `HEAD` pointer is moved to the specified earlier commit; the later commits are now "gone" from this branch’s history.
*   **Staging area:** **Unchanged**; all changes from the reset commits are now in your staging area, as if you just added them.
*   **Working directory:** **Unchanged**; your files still look just like before the reset.

**When to use it?**
Perfect if you realize the last few commits should be one better commit. You reset them, all changes are staged, and you can just run `git commit -m "A new, better commit message"`.

**The command:**
```bash
# Rewinds one commit; all changes are now in the staging area.
git reset --soft HEAD~1 
```
(`HEAD~1` means “one commit before current HEAD”)

<br>
<br>
<br>

### 🧹 `git reset --mixed` (Default Mode)

This is the default mode. If you run `git reset` without `--soft` or `--hard`, `--mixed` is used.

**Analogy:** Again, you remove the top box from the stack. But this time, you dump its contents onto your desk (the working directory). The changes are still there, but no longer prepared for shipping.

**What happens?**
*   **Commit history:** The `HEAD` pointer is moved back.
*   **Staging area:** **Reset**; the staging area is emptied. Changes from the reset commits are now “unstaged changes” in your working directory.
*   **Working directory:** **Unchanged**; changes are still in your files.

**When to use it?**
Useful if you made a commit but want to revise the changes before re-staging and committing. Undo the commit, start over with staging, but keep the code changes.

**The command:**
```bash
# Rewinds one commit; all changes are now in the working directory (unstaged).
git reset --mixed HEAD~1

# As this is the default, this also works:
git reset HEAD~1
```

<br>
<br>
<br>

### 💥 `git reset --hard`

This is the most dangerous and destructive mode. Use extreme caution!

**Analogy:** You remove the top box from the stack and throw it, with all its contents, straight into the incinerator. Everything is completely gone.

**What happens?**
*   **Commit history:** The `HEAD` pointer is moved back.
*   **Staging area:** **Reset and emptied**.
*   **Working directory:** **Reset**. All changes from the reset commits are **permanently erased** from your files. Your project folder looks exactly as it did at the earlier commit.

**When to use it?**
Only if you’re 100% sure the last commits were junk and you want to destroy them and all changes associated with them, with no chance of recovery. A failed experiment is a good example.

**WARNING:** If you use `git reset --hard`, your file changes are gone. There’s (almost) no easy way to get them back. Use this command with the utmost respect and caution!

**The command:**
```bash
# Rewinds one commit and DELETES ALL CHANGES from this commit
# irreversibly from the staging area AND your working directory.
git reset --hard HEAD~1
```

**Summary Table for `git reset`:**

| Mode | `HEAD` pointer | Staging Area (Index) | Working Directory |
| :--- | :--- | :--- | :--- |
| **`--soft`** | ✅ Moves | untouched | untouched |
| **`--mixed`** | ✅ Moves | 🔄 Reset | untouched |
| **`--hard`** | ✅ Moves | 🔄 Reset | 🔄 Reset |

---

# 🌳 Branch Management (Basics)

Think of your project as a book. The `main` branch (previously often `master`) is the main storyline. Anytime you want to develop a new feature, fix a bug, or try something out without risking the stable main story, you open a new chapter on a separate page. This “new chapter” is a **branch**.

A branch is essentially an independent line of development or a snapshot of your project at a certain point. You can work on this branch, make changes, commit — all without affecting the `main` branch or other branches. When you’re done and satisfied, you can merge this “chapter” (your branch) back into the main story (`main` branch). This process is called “merging”.

This approach has big advantages:
*   **Safety:** The main version of your project (`main`) always remains stable and functional.
*   **Parallelism:** Several developers can work simultaneously on different features (in different branches) without stepping on each other's toes.
*   **Experimentation:** You can try out new ideas risk-free. If an idea doesn’t work, you simply discard the branch without affecting your main project.
*   **Organization:** Each branch has a clear purpose (e.g., "feature-login-button", "bugfix-header-alignment"), making project history much clearer.

<br><br><br>

## 🌿 Displaying and Creating Branches (git branch)

The `git branch` command is your central tool for managing branches. You can use it to see which “chapters” your project currently has and to create “blank pages” for new chapters.

<br><br><br>

### 📜 Show All Branches

To see a list of all branches currently on your computer, just use the command with no arguments.

```bash
git branch
```

**What you see:**
Git lists all your local branches in a list. The branch you are currently on (your active workspace) is highlighted with an asterisk `*` and often in color.

**Example output:**

```
  feature/user-profile
* main
  hotfix/typo-in-readme
```

**Interpretation:**
*   There are three branches: `feature/user-profile`, `main`, and `hotfix/typo-in-readme`.
*   The `*` before `main` shows: "You’re currently working on the `main` branch. All changes you make now will go here."

| Command | Description |
| :--- | :--- |
| `git branch` | Shows all local branches. The current branch is marked with `*`. |
| `git branch -r` | Shows all branches on the remote server (e.g., GitHub). |
| `git branch -a` | Shows **all** branches, both local and remote. |

<br><br><br>

### ✨ Create a New Branch

When you want to develop a new feature, create a new branch for it. This is `git branch` followed by the desired branch name.

**Important:** A good branch name is short but descriptive. Prefixes like `feature/`, `bugfix/`, or `hotfix/` are often used to make a branch’s purpose clear.

**Command syntax:**

```bash
git branch <new-branch-name>
```

**Example:**
Say you’re on `main` and want to add a login feature. You create a new branch called `feature/login-page`.

```bash
git branch feature/login-page
```

**What happens now:**
*   Git creates a branch named `feature/login-page`.
*   This branch is an exact copy of your current branch (`main` here).
*   **Very important:** You’ve only created the branch, but you’re **still** on your old branch (`main`). To work in the new branch, you need to switch to it. Think of it as entering the new chapter title in the table of contents, but the new page isn’t open yet.

If you run `git branch` again, you’ll see:

```
  feature/login-page
  feature/user-profile
* main
  hotfix/typo-in-readme
```
The new branch is there, but the `*` is still next to `main`.

<br><br><br>

## ↔️ Switching Between Branches (git switch)

After creating a branch (or when you want to switch to an existing one), use the `git switch` command. This command is newer and more specific than the older `git checkout`, which did many different things. `git switch` has just one job: switching branches.

When you switch branches, something magical happens: Git adjusts all the files and folders in your working directory to match the state of the branch you’re switching to. Files that only exist in the new branch appear. Files that don’t exist there disappear. Changes become visible.

<br><br><br>

### 🚶‍♀️ Switch to an Existing Branch

To switch to an already existing branch, use `git switch` followed by the branch name.

**Command syntax:**

```bash
git switch <branch-name>
```

**Example:**
Earlier, we created the `feature/login-page` branch. Now we want to move there to begin working.

```bash
git switch feature/login-page
```

**Output:**

```
Switched to branch 'feature/login-page'
```

If you run `git branch`, you’ll see the `*` has moved:

```
* feature/login-page
  feature/user-profile
  main
  hotfix/typo-in-readme
```

You are now "in" the new branch. All commits you make now are on this branch’s timeline and don’t affect `main` for now.

<br><br><br>

### 🚀 Create a Branch and Switch to It Immediately

In practice, you almost always want to create a branch and instantly switch to it. Doing this with two commands (`git branch ...` and then `git switch ...`) is tedious. Luckily, there’s a handy shortcut!

With the `-c` flag (“create”), you can tell `git switch` to create the branch if it doesn’t exist and switch to it immediately.

**Command syntax:**

```bash
git switch -c <new-branch-name>
```

**Example:**
Suppose you want to add a contact form. You can do it in one step:

```bash
git switch -c feature/contact-form
```

**Output:**

```
Switched to a new branch 'feature/contact-form'
```

This one command does exactly the same as `git branch feature/contact-form` plus `git switch feature/contact-form` together. This is probably the command you’ll use most in daily work.

| Command | Description |
| :--- | :--- |
| `git switch <branch-name>` | Switches to the named, existing branch. |
| `git switch -c <new-branch-name>` | **C**reates a new branch and switches to it immediately. |
| `git switch -` | Switches to the previously active branch. Great for quickly toggling between two branches. |

---

# 🔧 Error Handling and Conflict Resolution

<br><br><br>

## 🚨 Interpreting Typical Error Messages in Daily Work

Imagine Git as a very precise but helpful colleague. When something is wrong, it doesn’t yell at you, but gives you a message explaining what it thinks the problem is. Our job is to learn its language. Errors aren’t a disaster, but helpful hints to get things right.

Here are some of the most common “conversations” you’ll have with Git and what they mean.

<br>

### 📂 `fatal: not a git repository (or any of the parent directories): .git`

| Error Message (or part) | What Git Means (in plain English) | What You Can Do (solution) |
| :--- | :--- | :--- |
| `fatal: not a git repository` | "Sorry, but there’s no Git project in the folder you’re currently in. I don’t see the hidden `.git` folder I need to work. I don’t know which project you belong to." | **1. Check your location:** Are you in the right folder? Use `pwd` (print working directory) or check in your explorer/finder. Switch to the right folder with `cd path/to/project`. <br><br> **2. Initialize a repository:** If you wanted to start a *new* project here, you forgot to initialize it. Run `git init` to create the `.git` folder. |

<br>

### ⬆️ `Your branch is ahead of 'origin/main' by X commits.`

| Status Message | What Git Means (in plain English) | What You Can Do (solution) |
| :--- | :--- | :--- |
| `Your branch is ahead of 'origin/main' by X commits.` | "Hey, good job! You’ve made X commits on your computer (locally) that the server (origin) doesn’t know about yet. Your local version is ahead of the server version." | This isn’t usually an error, just a normal state while working. If you want to share your changes, upload them to the server with `git push`. |

<br>

### ⬇️ `Your branch is behind 'origin/main' by X commits and can be fast-forwarded.`

| Status Message | What Git Means (in plain English) | What You Can Do (solution) |
| :--- | :--- | :--- |
| `Your branch is behind 'origin/main' by X commits...` | "Warning, something happened on the server (origin)! Someone else uploaded X new commits you don’t have yet. Your local version is outdated." | To get up-to-date and receive others’ changes, run `git pull`. This downloads changes (`fetch`) and tries to merge them into your code (`merge`). |

<br>

### 🛑 `error: failed to push some refs to '... '`

| Error Message (or part) | What Git Means (in plain English) | What You Can Do (solution) |
| :--- | :--- | :--- |
| `hint: Updates were rejected because the remote contains work that you do` <br> `hint: not have locally. This is usually caused by another repository pushing` <br> `hint: to the same ref. You may want to first integrate the remote changes` <br> `hint: (e.g., 'git pull ...') before pushing again.` | "Stop! I can’t just upload your changes to the server. Someone else has already pushed their own changes since you started. Your local version is no longer current. If I just overwrote, the other person’s changes would be lost. I’m not allowed to do that." | **1. Get changes from server:** As the hint says, you need to fetch the server changes and integrate them. Run `git pull`. <br><br> **2. Resolve conflicts (if needed):** `git pull` might result in a merge conflict (see next section), if both you and the other user changed the same lines in the same file. <br><br> **3. Push again:** After you’ve integrated (and possibly resolved conflicts), push your work again with `git push`. |

<br>

### 🛡️ `error: Your local changes to the following files would be overwritten by merge...`

| Error Message (or part) | What Git Means (in plain English) | What You Can Do (solution) |
| :--- | :--- | :--- |
| `error: Your local changes to the following files would be overwritten by merge/checkout` <br> `Please commit your changes or stash them before you switch branches.` | "Careful! You’ve made unsaved changes (neither committed nor stashed) to some files. Now you’re trying something (e.g., `git pull` or `git checkout`) that would also modify those files. To protect your unsaved work, I’m stopping the action." | You have three main options: <br><br> **1. Commit:** If your changes are ready, make a commit: `git add .` then `git commit -m "your message"`. Try your original action (e.g., `git pull`) again afterwards. <br><br> **2. Stash:** If your changes aren’t finished, “stash” them for now. Use `git stash`. Your changes disappear temporarily and your workspace is clean. Do your action (e.g., `git pull`). Afterwards, recover your parked changes with `git stash pop`. <br><br> **3. Discard:** If you no longer need your unsaved changes, just discard them. Use `git checkout -- <filename>` to reset a specific file. With `git reset --hard` you can discard *all* unsaved changes in the project (Careful: these are then permanently lost!). |

<br><br><br>

## ⚔️ Recognizing and Resolving Simple Merge Conflicts

A merge conflict might sound intimidating, but it is basically a question from Git. Git says: “I have two different versions of the same bit of text. I’m just a machine and can’t decide which is right or how to combine them. Please, you as a human, decide.”

Don’t panic! This is a normal part of teamwork.

### 🧐 How do I know there’s a conflict?

If you run a command like `git pull` or `git merge other-branch`, Git will make it very clear in your terminal if something’s wrong. You’ll see output like:

```bash
Auto-merging project/file.html
CONFLICT (content): Merge conflict in project/file.html
Automatic merge failed; fix conflicts and then commit the result.
```

The key lines are `CONFLICT` and `Automatic merge failed`. That’s your signal.

If you now run `git status`, you’ll see a new section called `Unmerged paths`. All files with conflicts are listed there.

```bash
Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   project/file.html
```

### 📝 What will I see in the file?

When you open the affected file (in this example, `project/file.html`) in a text editor, you’ll see some strange new lines Git added. These are **conflict markers**.

They look like this:

```html
<<<<<<< HEAD
<h1>Our fantastic website</h1>
=======
<h1>The best website in the world</h1>
>>>>>>> feature-new-title
```

Let’s translate that:

* **`<<<<<<< HEAD`**: The start of the problematic block. `HEAD` always means **your current, local version**. Everything between here and the next marker (`=======`) is your code.
* **`=======`**: The separator. Think of it as a “versus” line.
* **`>>>>>>> feature-new-title`**: The end of the problem block. The name after it (`feature-new-title`) is the branch name containing the **incoming changes** that caused the conflict. Everything between `=======` and this line is the code coming “from the outside”.

Git shows you both versions side by side and is asking you to clean things up.

### ✅ How do I resolve the conflict?

The resolution process always involves three steps: decide, clean up, save, and inform Git.

**Step 1: Open the file and make a decision**

Look at the code between the conflict markers. You can:

1. **Keep your version:** Delete the separation marker (`=======`) and the entire incoming block (`>>>>>>>`). Only keep the code under `<<<<<<< HEAD`.
2. **Take the incoming version:** Delete the separation marker (`=======`) and your block (`<<<<<<< HEAD`). Only keep the code under `>>>>>>>`.
3. **Combine them:** Sometimes you want parts of both, or to create something new from both.
4. **Rewrite completely:** In some cases, both are outdated and you write something new.

**Step 2: Remove the conflict markers**

This is critical! Once you’ve decided how the code should look, **delete all conflict markers manually**.

*   `<<<<<<< HEAD` must go.
*   `=======` must go.
*   `>>>>>>> feature-new-title` must go.

In the end, the file should be clean—just normal code.

**Example resolution (keeping the incoming version):**

*Before:*
```html
<<<<<<< HEAD
<h1>Our fantastic website</h1>
=======
<h1>The best website in the world</h1>
>>>>>>> feature-new-title
```

*After cleaning up:*
```html
<h1>The best website in the world</h1>
```

**Step 3: Save the file and notify Git**

1. **Save** the file in your editor.
2. Go back to your terminal. Now you need to tell Git: “I have resolved the conflict in this file.” Do this with `git add`. Even if nothing is new, this tells Git you’re done here.
    ```bash
    git add project/file.html
    ```
3. When you’ve resolved all conflicts in all files and added them with `git add`, close the merge process with a regular `git commit`:
    ```bash
    git commit
    ```
    Git often automatically opens a text editor with a pre-written commit message, like `Merge branch 'feature-new-title'`. You can usually just accept it, save, and close the editor.

That’s it! The conflict is resolved, the merge is complete, and you can continue working as normal.