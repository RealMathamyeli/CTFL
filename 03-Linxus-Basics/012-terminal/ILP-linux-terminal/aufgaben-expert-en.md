✨ Individual Learning Phase (ILP) – Your Path to Shell Mastery

Welcome to your Individual Learning Phase! This is not just a chain of tasks, but a carefully curated journey that will lead you deep into the heart of the Linux operating system: the shell. Here you have the unique opportunity to consolidate your knowledge, refine your skills, and develop an intuitive understanding of the powerful command line. Consider this phase your personal laboratory, where you can experiment, discover, and learn without pressure, but with a clear focus on your development. The following tasks are designed to challenge you, stimulate networked thinking, and empower you to solve typical everyday problems elegantly and efficiently. Dive in, experiment boldly, and become a confident master of your command line!

---

## 🌎 Task 1: Exploring the Depths of the File System (approx. 45 minutes)

In this task, you will put your navigation skills to the test and delve deeper into the structure of directories and files. You will create a complex file structure and then use various commands to move around within it and extract information.

### 1.1 Preparation: Creating a Complex Structure

In your home directory, create a new folder named `ProjektX`. Within this folder, create a structure that contains at least three nested directory levels (e.g., `docs/reports/Q4`). In various directories of the `ProjektX` folder, create at least five different files with names like `readme.txt`, `config.ini`, `data_log.txt`, `secret_note.md`, `backup.tar.gz`. Fill at least two of these text files with a few lines of sample text.

### 1.2 Navigation and Inspection

*   From the root directory of your `ProjektX` folder, navigate to the deepest nested directory using **relative paths**. Then, return to the `ProjektX` root directory with a single command.
*   Display the content of your entire `ProjektX` folder, including all subdirectories and their files, in a clear, recursive list. Ensure that hidden files (if any) would also be displayed.
*   Find the `data_log.txt` file and display its content on the command line, so that you can scroll to the end of the file, but also have the option to search within it.
*   Identify which subdirectory contains the `secret_note.md` file without recursively displaying the entire folder content. Then, display only the first 5 lines of this file.

---

## 🛠️ Task 2: Project Management and Access Control (approx. 45 minutes)

You are taking over the management of a small software project. Your task is to organize the project structure, manipulate files, and ensure that access rights are set correctly.

### 2.1 Building and Managing Project Structure

*   In your `ProjektX` folder (from Task 1), create a new subfolder named `entwicklung`.
*   Within `entwicklung`, the directories `frontend`, `backend`, and `tests` should be created.
*   In the `frontend` folder, create an empty file named `index.html`, and in the `backend` folder, an empty file named `server.js`.
*   Move the previously created `config.ini` from the `ProjektX` root directory to the `entwicklung/backend` folder.
*   Copy `readme.txt` from the `ProjektX` root directory into all three subfolders (`frontend`, `backend`, `tests`) of `entwicklung`. Rename the copy to `README.md` once it is in the target folder.
*   Create a temporary folder named `temp_assets` in the `frontend` directory and move `index.html` there. Then, rename `temp_assets` to `assets`.
*   Delete the `tests` directory along with the `README.md` file contained within it.

### 2.2 Setting File Permissions

*   Set the permissions for the `server.js` file so that it can only be read, written, and executed by the owner. The group and other users should have no rights whatsoever.
*   Change the permissions of the `README.md` file in the `frontend` folder so that the owner has read and write permissions, the group has only read permissions, and other users have no permissions whatsoever.
*   Verify all file permission changes with the appropriate command.

---

## 📝 Task 3: Maintaining Configuration Files with Nano (approx. 30 minutes)

Maintaining configuration files is a core skill on the command line. You will use the `nano` text editor to edit a sample configuration file and make specific adjustments.

### 3.1 Creating a Configuration File

*   In your `ProjektX` folder, create a new file named `application_settings.conf`.
*   Add the following content to this file (you can use `nano` directly for this):

```
[General]
ApplicationName=MyAwesomeApp
Version=1.0.0
Environment=Development
DebugMode=false

[Database]
Type=PostgreSQL
Host=localhost
Port=5432
User=admin
Password=secure_password

[Logging]
Level=INFO
LogFilePath=/var/log/myawesomeapp/app.log
```

### 3.2 Adjustments with Nano

*   Open `application_settings.conf` with `nano`.
*   Change the value of `DebugMode` from `false` to `true`.
*   Find the line starting with `Environment=` and change its value from `Development` to `Production`.
*   Below the `[Database]` section, add a new line `MaxConnections=50`.
*   Search for "LogFilePath" and change the path so that it points to a relative directory within your `ProjektX` folder (e.g., `./logs/myawesomeapp.log`). Do not manually create the `logs` directory; simply specify the path.
*   Save the changes and exit `nano`.

---

## 🐞 Task 4: Bug Detective and Command Choreography (approx. 30 minutes)

This task focuses on recognizing and fixing common errors, as well as correctly chaining a series of commands to achieve a specific result.

### 4.1 Error Analysis and Correction

*   **Scenario A – The Misplaced Command:** You are in the `ProjektX` folder and want to move `server.js` (located in `entwicklung/backend`) to a newly created directory `production`, which should be directly in the `ProjektX` folder. You try `mv entwicklung/backend/server.js production/`. What happens? Analyze the error and correct the necessary steps to successfully move the file.
*   **Scenario B – The Non-Executable Script:** You have created an empty file `script.sh` in the `ProjektX` folder. You try to execute it with `./script.sh`, but the shell reports "Permission denied". What is the reason for this, and how do you fix the problem?
*   **Scenario C – The Missing Content:** You want to display the content of a file, but you are not sure if the file even exists or if it is empty. You try `cat non_existent_file.txt`. What is the error message? How can you check *before* using `cat` whether the file exists and is not empty, without displaying its content?

### 4.2 Command Chains for a Goal

*   Create a new folder `archive` in the `ProjektX` directory.
*   Find all files in the `ProjektX` folder (and its subfolders) whose name ends with `.log` (e.g., `data_log.txt`, `app.log` from the nano task).
*   Copy all these `.log` files into the `archive` folder. Ensure that they land directly in the `archive` folder and their original directory structure is not copied along.
*   Then, delete all original `.log` files from their respective source directories.

---

## 💡 Self-Reflection

Take a moment to reflect on the tasks and your approach:

1.  Which task challenged you the most and why?
2.  Were there any commands or concepts that were unclear to you before and that you now understand better?
3.  How would you rate your current understanding and efficiency in using the Linux shell on a scale of 1 (Beginner) to 10 (Expert)?
4.  Are there any areas where you feel you would like to delve deeper?
5.  What strategies did you use to fix errors or understand unknown commands?

Congratulations on successfully completing this ILP phase! Your command-line skills have certainly sharpened further.