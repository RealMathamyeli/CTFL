# Working with GitHub Repositories

- Objective:
  - Learn the basic Git commands to create and manage personal repositories.
  - Understand how to add, commit, push, changes to a Git repository.
- Prerequisites:
  - Basic understanding of version control concepts.
  - Git installed on your local machine.
  - A GitHub account which is connected to your local Git configuration using SSH keys.
  - You have to be `logged in to GitHub in VS Code`.
- What we will cover:
  - What is a GitHub repository?
  - Different types of GitHub repositories (local vs remote).
  - Creating a new Git repository locally(on your machine).
  - Committing and Pushing Changes to GitHub.
  - Pushing changes to a remote repository (GitHub).
  - Repository visibility settings (private vs public).
  - Important Git commands overview.
  - Best practices around repository management.

## What is a GitHub Repository?

- A GitHub Repository is the most basic element of GitHub.
- It's a place where you can store your `code`, your `files`, their revision history and collaborate with others.
- It is saved like a directory on GitHub's servers.
- Repositories can be either `public` (anyone can see) or `private` (only you and people you choose can see).
- Read more about repositories on [GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories).

### Types of GitHub Repositories

- There are two main types of GitHub repositories:
  - **Local Repository**:
    - exists on your local machine.
    - You can create, modify, and manage files here before pushing them to a remote repository.
  - **Remote Repository**:
    - is the online repository hosted on GitHub's servers.
    - It allows you to save your code and share with others if needed.

### Creating a New Git Repository

- There are two approaches to creating a new Git repository:
  - **Remote-first approach:**
    - Create a new repository on GitHub first.
    - Clone it to your local machine using:
      ```bash
      git clone <repository-url>
      ```
  - **Local-first approach:**
    - Create a new directory(What is a directory again?) on your local machine.
    - Initialize it as a Git repository using:
      ```bash
      git init
      ```
    - make your changes and then push it to GitHub.

#### Creating a new Git Repository Locally (Local-first approach)

- We will focus on the local-first approach.
- This requires the following command:
  - `git init`: Initializes a new Git repository.

### Committing and Pushing Changes

- Once you have a local repository set up, you can start adding files, committing changes, and pushing them to a remote repository on GitHub.
- The basic commands are:
  - `git add <file(s)>`: Stages files for commit.
  - `git commit -m "commit message"`: Commits the staged files with a message.
  - `git push -u origin main`: Pushes the committed changes to the remote repository.

#### Step-by-step Guide to Create a Local Repository(in VS Code):

- Use VS Code in order to see the changes visually.
- Make sure you sign in to GitHub in VS Code.
- Follow these steps:

1. Open your interested directory in VS Code (`it should have at least one markdown file in it`. This is because Git does not track empty directories).
2. Open the terminal in VS Code (`ctrl + J`)
3. Initialize a new Git repository **`(do this only once per project)`**:
   ```bash
   git init
   ```
   - This creates a `.git` folder in your project directory.
   - You will see that all files are now green with a U (untracked) symbol in the Source Control tab.
   - This means that Git is tracking these files but they are not yet staged for commit.
4. Stage the files for commit:
   ```bash
   git add .
   ```
   - The `.` after `git add` means `PLEASE ADD ALL FILES` in the current directory.
   - The `U` symbols will change to `A` (added) in the Source Control tab.
   - Optionally, you can stage specific files by replacing `.` with the file name. For example if you want to stage only `README.md`, you would run:
     ```bash
     git add README.md
     ```
5. Commit the staged files with a message:
   ```bash
   git commit -m "Initial commit"
   ```
   - The `-m` flag allows you to add a commit message to your changes.
6. At this point we will use the `source control` tab in VS Code to connect to a remote repository on GitHub.
   - Click on the `Publish to GitHub` button.
   - In the search box, type the name of your new repository (if required).
   - Choose the visibility of your repository (public or private).
   - Click on `Publish Repository`.
   - VS Code will automatically add the remote URL and push your changes.
7. Verify that your changes are pushed to GitHub by visiting your repository on the GitHub website.

##### Things to watch out for:

- Make sure your directory name is in lowercase and if it contains multiple words, use hyphens (`-`) to separate them. For example: `my-git-repo`.
  - This is a common convention for repository names on GitHub,
  - and during the publishing step, VS Code will use the directory name as the repository name by default.
- NEVER EVER push default system directories like:
  - My Documents
  - Desktop
  - Downloads
- NEVER create a repository within a repository.
  - This will lead to confusion and complications with version control.
  - Always create separate repositories for different projects.
- NEVER push sensitive information to GitHub (even in private repositories) like:
  - Passwords
  - API keys
  - Personal data

### Repository Visibility Settings

- When creating a repository on GitHub, you have the option to set its visibility to either `public` or `private`.
- This options appears in VS Code after you click on `Publish to GitHub`.
- You can also change the visibility settings later on GitHub website.
  - **Public Repository**:
    - Anyone can see the repository and its contents.
    - Ideal for projects you want to share with potential employers or pin on your GitHub profile.
  - **Private Repository**:
    - Only you and other github users you explicitly share access with can see the repository.
    - Suitable for personal projects or work that you do not want to share publicly for example your daily CTF notes.

### Important Git Commands Overview

- Here are some basic Git commands related to working with local repositories:
  - `git inti`: Initializes a new Git repository (do this only once per project).
  - `git status`: Shows the status of your working directory and staging area. This helps you see which changes have been staged, which haven't, and which files aren't being tracked by Git.
  - `git add <file(s)>`: Stages files for commit. You can use `git add .` to stage all changes in the current directory.
  - `git commit -m "commit message"`: Commits the staged files with a descriptive message.
  - `git push -u origin main`: Pushes the committed changes to the remote repository on GitHub (only the first time you push, after that you can use `git push`).
  - `git log`: Displays the commit history for the repository.

### Best Practices for Repository Management

- Add a meaningful `README.md` file to your repository to explain its purpose and usage.
  - This is automatically recognized by GitHub and displayed on the main page of your repository.
- Use `.gitignore` files to exclude files and directories that you `don't want to track` with Git.
  - This is done by creating a file named `.gitignore` in the root of your repository
  - then adding the names or patterns of files/directories to ignore.
  - For example, to ignore all `node_modules` directories, you would add:
    ```
    node_modules/
    ```
  - To add a particular file to `.gitignore`, simply add its name to the file. For example, to ignore a file named `secret.md`, you would add:
    ```
    secret.md
    ```

## Summary

- A GitHub Repository is a place to store your code and files, either publicly or privately.
- You can create a local repository on your machine using `git init` and then push it to GitHub.
- Important Git commands include `git add`, `git commit`, and `git push`.
- Always follow best practices like adding a `README.md` and using `.gitignore` files to manage your repository effectively.
- NEVER push sensitive information to GitHub.
- NEVER EVER push default system directories like My Documents, Desktop, Downloads.
- NEVER create a repository within a repository!!!!!!

## Practice Time!

- Let's create a Profile README for your GitHub profile by following the steps we discussed.
- Let try to create a `.gitignore` file to ignore any sensitive files you might have in your project directory.
