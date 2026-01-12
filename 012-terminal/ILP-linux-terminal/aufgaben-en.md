📚 # Individual Learning Phase (ILP) – Your Afternoon of Discoveries

A wonderful afternoon lies ahead of you, an invitation to the Individual Learning Phase, or ILP for short. It's far more than just work time; it's your personal space for discovery, a laboratory for curiosity and deep dives. Here, you have the freedom to learn at your own pace, ask questions that are burning on your mind, and intensively engage with topics that capture your attention. It's the perfect opportunity not just to consume knowledge, but to actively shape it, make connections, and develop a deep understanding of the subject matter. Use this time to challenge yourself, explore new paths, and solidify your foundation in using the Linux shell. The command line may seem intimidating at first glance, but it holds enormous power and efficiency that you will unlock step by step today. Good luck and, most importantly, have fun exploring!

---

## 🧭 Task 1: Exploring the Filesystem (approx. 45 minutes)

### Your Assignment

In this task, you will intensively engage with navigating the Linux filesystem and displaying its contents. Your goal is to develop a feel for the structure, confidently switch between different locations, and get an overview of their contents.

1.  **Setting up a Test Environment:**
    *   Create a new main directory in your home directory, name it `MeineArbeit`.
    *   Inside `MeineArbeit`, create two subdirectories: `Projekte` and `Dokumente`.
    *   In the `Projekte` directory, create another subdirectory named `Website`.
    *   Inside `Dokumente`, create a directory named `Berichte`.
2.  **Navigation Challenge:**
    *   Start in your home directory.
    *   Navigate to `MeineArbeit/Projekte/Website` using relative paths.
    *   From there, switch directly back to your home directory using an absolute path.
    *   From your home directory, navigate to `MeineArbeit/Dokumente/Berichte` using an absolute path.
    *   From `Berichte`, switch back to `MeineArbeit` using a relative path.
3.  **Viewing Contents:**
    *   In each of the directories you created earlier (e.g., `MeineArbeit`, `Projekte`, `Website`, `Dokumente`, `Berichte`), create one or more empty text files. Give them descriptive names.
    *   Display the contents of your created directories and the files they contain. Experiment with different options to get more detailed information or to make hidden files visible.
    *   Try to display the content of one of the empty files. What do you notice?

### Reflection

How has your understanding of relative and absolute paths developed during this task? Where might you have had to think for a moment, and what insight did you gain from it?

---

## 📂 Task 2: Managing Files and Directories (approx. 45 minutes)

### Your Assignment

This task focuses on the basic manipulation of files and directories. You will learn to create, copy, move, rename, and delete them.

1.  **Preparation:**
    *   Ensure that your `MeineArbeit` directory from Task 1 exists. If not, recreate it with the same structure.
    *   Create a new, empty file in the `MeineArbeit/Dokumente` directory and name it `Entwurf.txt`.
    *   Create another empty file in the `MeineArbeit/Projekte/Website` directory and name it `index.html`.
2.  **Copying and Moving Files:**
    *   Copy the file `Entwurf.txt` from `MeineArbeit/Dokumente` to the `MeineArbeit/Projekte/Website` directory.
    *   Move the original `Entwurf.txt` from `MeineArbeit/Dokumente` to the `MeineArbeit/Dokumente/Berichte` directory. Rename it to `Bericht_Q1.txt` during the move.
3.  **Managing Directories:**
    *   Create a new directory named `Backup` in `MeineArbeit`.
    *   Copy the entire `MeineArbeit/Projekte/Website` directory, including all its contents, to the `Backup` directory.
    *   Rename the directory `MeineArbeit/Projekte` to `MeineProjekte`.
4.  **Cleanup:**
    *   Delete the copied `Entwurf.txt` from `MeineArbeit/Projekte/Website` (not the original in the `Berichte` folder!).
    *   Delete the entire `Backup` directory, including its contents. Pay special attention to the correct syntax and be aware of the consequences.

### Reflection

Which commands stuck in your mind most easily, and with which ones did you have to concentrate more to avoid errors? What did you learn about the importance of path specifications?

---

## 🔐 Task 3: File Attributes and Permissions (approx. 30 minutes)

### Your Assignment

In this task, you will dive into the world of file attributes and access permissions. You will learn how to display and fundamentally change them to ensure security and control over files and directories.

1.  **Checking Permissions:**
    *   Navigate to your `MeineArbeit` directory (or where you created your files from previous tasks).
    *   Display the detailed file attributes and permissions of all files and directories in `MeineArbeit` and its immediate subdirectories. Pay special attention to the meanings of the individual columns.
    *   Note down the default permissions that are set when creating files and directories in your environment.
2.  **Changing Permissions (Files):**
    *   Create a new, empty file named `Geheimnis.txt` in `MeineArbeit/Dokumente/Berichte`.
    *   Set the permissions for `Geheimnis.txt` so that only the owner can read and write to it, but no one else has access (no read, write, execute for group and others).
    *   Then, change the permissions so that the owner has full rights (read, write, execute), the group can only read, and others have no rights.
3.  **Changing Permissions (Directories):**
    *   Create a new directory `Projekt_Shared` in `MeineArbeit/Projekte`.
    *   Set the permissions for `Projekt_Shared` so that the owner has full rights, the group can only read and execute (but not write), and others have no rights.
    *   Try to understand the meaning of the "execute" permission for directories. What happens if it's missing?

### Reflection

What was your 'aha' moment in understanding file and directory permissions? Which commands were particularly powerful here, and what risks do you see with incorrect application?

---

## ✍️ Task 4: Text Editing with Nano (approx. 30 minutes)

### Your Assignment

This task introduces you to the text editor `nano`, a simple but effective tool for direct text file editing on the command line.

1.  **Creating and Editing a File:**
    *   Create a new text file in `MeineArbeit/Dokumente` and name it `Notizen.txt`.
    *   Open `Notizen.txt` with `nano`.
    *   Add at least five lines of arbitrary text. For example, write down some of your learning experiences from this afternoon.
    *   Insert a blank line and then another paragraph.
    *   Save the changes and exit `nano`.
    *   Open `Notizen.txt` again to verify that your changes were saved.
2.  **Navigation and Searching:**
    *   Open `Notizen.txt` again with `nano`.
    *   Navigate to the beginning of the file, then to the end, using `nano` commands (without a mouse).
    *   Jump to a specific line in the middle of the file.
    *   Search for a word you previously inserted into the text. Perform the search several times to find all occurrences.
    *   Exit `nano` without saving the file again.

### Reflection

How helpful is a command-line text editor like `nano` compared to graphical editors? What do you see as its strengths and typical use cases?

---

## ⚡ Task 5: Practice Challenge and Troubleshooting (approx. 20 minutes)

### Your Assignment

This task challenges you to apply the commands you've learned in a small scenario and intentionally provoke errors to learn how to recognize and fix them.

1.  **Scenario "Project Start":**
    *   You want to start a new project named `Webshop` in your `MeineProjekte` directory (which you renamed in Task 2).
    *   Create a `Webshop` directory there.
    *   Within the `Webshop` directory, you need the subdirectories `frontend` and `backend`.
    *   Copy the `index.html` file from the `MeineProjekte/Website` directory to the `Webshop/frontend` directory.
    *   Create an empty file named `server.js` in the `Webshop/backend` directory and give the owner full permissions, the group read permissions, and others no permissions.
2.  **Intentionally Provoking Error Analysis:**
    *   Try to delete a directory that is not empty without using the recursive deletion option. What happens? Read the error message carefully.
    *   Try to rename a file that does not exist. What message do you receive?
    *   Try to enter a command with an obvious typo (e.g., `ls` instead of `ls`). What does the shell tell you?
3.  **Fixing Errors:**
    *   Fix the errors you provoked in step 2 by using the correct commands or adding the missing options.

### Reflection

What strategies have you developed to interpret error messages in the shell? Was there an error that particularly surprised you or gave you new insight?