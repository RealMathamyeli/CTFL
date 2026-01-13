# 📝 Git & GitHub Knowledge Check

**Instructions:** Please answer the following questions in the space provided.

### Part 1: Version Control Basics

- **Question 1:** Explain the core difference between a Centralized Version Control System (CVCS) and a Distributed Version Control System (DVCS) regarding how the history is stored.
- **Answer:** In a CVCS, the server holds the entire history while you only have a single snapshot; in a DVCS, every user's computer contains a complete copy of the entire project history.
- **Question 2:** In the context of version control, what are the three specific things a "commit" records about a change?
- **Answer:** A commit records a snapshot of the project state, the metadata (author, date, and message), and a pointer to its parent commit to maintain the history.
- **Question 3:** True or False: In a Distributed Version Control System like Git, you must be online to make commits or view the project history.
- **Answer:** Because a DVCS stores a complete copy of the entire project history on your local machine, you can commit changes, create branches, and view the full history logs while completely offline.

---

### Part 2: Git Setup and Workflow

- **Question 4:** Which command creates a new, hidden `.git` folder in your directory, effectively turning it into a Git repository?
- **Answer:** git init
- **Question 5:** Before making your first commit on a new computer, you must configure your identity. Write the two commands used to set your name and email globally.
- **Answer:**   git config --global user.name "Your Name"
                git config --global user.email "youremail@example.com"
- **Question 6:** Git works with three main "zones" or states. Name them and briefly explain the "Staging Area" (or Index).
- **Answer:**   Working Directory, Staging Area (Index), Local Repository
                The Staging Area is a "prep zone" where you selectively gather and preview specific changes before permanently recording them in a commit.
- **Question 7:** What is the specific command to move _all_ changed files in your current directory to the staging area?
- **Answer:** git add .
- **Question 8:** Why is it important to write a descriptive commit message (e.g., "Fix: Prevent crash on login") instead of a generic one (e.g., "Changes")?
- **Answer:** Descriptive commit messages provide essential context for why a change was made, allowing you and your team to quickly troubleshoot, audit history, and understand the project’s evolution without reading the raw code.
- **Question 9:** True or False: `git status` shows you the history of previous commits.
- **Answer:** False: "git status" only shows you the current state of the working directory and staging area; to view the history of previous commits, you must use the "git log" command.
- **Question 10:** If you want to view a chronological log of all changes, including author and date, which command should you use?
- **Answer:** git log

---

### Part 3: Managing Changes and History

- **Question 11:** You have modified a file named `mistake.txt` but have _not_ yet staged it. What command would you use to discard your changes and restore the file to its last committed state?
- **Answer:** git restore mistake.txt
- **Question 12:** Explain the danger of using `git reset --hard`. What happens to your unsaved changes in the working directory?
- **Answer:** The danger that it is destructive and permanent: it instantly overwrites your current work with the state of a previous commit.
- **Question 13:** True or False: `git reset --soft` undoes the commit but keeps your changes in the Staging Area, allowing you to commit them again easily.
- **Answer:** It is a "safe" way to undo a commit because it only moves the branch pointer back. It leaves your actual code changes exactly where they are in the Staging Area, ready for you to edit the files or simply re-commit them with a new message.

---

### Part 4: Branches and Merging

- **Question 14:** What is the purpose of creating a "branch" in Git?
- **Answer:** The purpose of a branch is to provide an isolated "workspace" where you can safely change your code without affecting the main project.
- **Question 15:** Write the single command to **create** a new branch named `feature/login` AND **switch** to it immediately.
- **Answer:** git switch -c feature/login
- **Question 16:** When a merge conflict occurs, Git adds markers to the file (e.g., `<<<<<<< HEAD`). What do you need to do to resolve the conflict?
- **Answer:** To resolve a merge conflict, you must manually edit the file to choose which changes to keep, remove the Git markers. Then stage the fix with "git add <filen-ame>" and complete the merge with "git commit -m "Resolve merge conflict in <file-name>
---

### Part 5: GitHub and Remotes

- **Question 17:** Briefly explain the difference between **Git** and **GitHub**.
- **Answer:** Git is the local engine that tracks your work, while GitHub is the cloud platform where you share that work with others.
- **Question 18:** True or False: A "Remote Repository" is stored on your local computer, while a "Local Repository" is stored on GitHub's servers.
- **Answer:** False, it is actually the opposite.
- **Question 19:** What is the purpose of a `.gitignore` file? Give one example of a file type you should ignore.
- **Answer:** "gitignore" tells Git which files or directories to IGNORE AND NEVER TRACK. It prevents sensitve, temporary, or bulky machine-generated files from being commited to your project's history. .env files for example often contain private API keys or database passwords that should never be accessible to public repositroies like GitHub.
- **Question 20:** True or False: You should always push your `node_modules` folder and files containing API keys or passwords to your public GitHub repository.
- **Answer:** Apart from my previous answer regarding security node_modules can contain big amounts of data.