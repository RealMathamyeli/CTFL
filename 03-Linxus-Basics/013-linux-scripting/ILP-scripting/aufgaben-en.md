🚀 # Your Afternoon in the Individual Learning Phase (ILP)

Welcome to your Individual Learning Phase (ILP) this afternoon! This is your personal space to delve deep into the subject matter and independently deepen your knowledge. Consider this phase an expedition where you hold the helm. You have the freedom to set your own pace, discover new things, and sharpen your skills through practical application. Use this opportunity to master the provided concepts and solidify your competencies through targeted assignments. Every step you take here brings you closer to your goal of becoming a skilled System Administrator. Good luck and exciting insights on your learning journey!

---

## 1. File System Permissions (approx. 35 minutes)

### Objective
Gain an overview of the Linux permission system and apply `chmod`, `chown`, and `chgrp` safely.

### Tasks
1.  **Create Files and Directories:** Create a new directory named `my_project` and within it, create two files: `report.txt` and `script.sh`.
2.  **Analyze Permissions with `ls -l`:** Display the default permissions of these newly created objects and explain what each character (`r`, `w`, `x`, `-`) and position (Owner, Group, Others) means.
3.  **Apply `chmod` (symbolic):**
    *   Set permissions for `report.txt` so that only the owner has read and write access, the group has only read access, and others have no access at all.
    *   Make `script.sh` executable for the owner, but only readable for the group and others.
4.  **Apply `chmod` (octal):**
    *   Set permissions for the `my_project` directory to `750`. Explain what this octal notation means.
    *   Set permissions for `report.txt` again, this time to `644`, and explain this as well.
5.  **Apply `chown` and `chgrp`:**
    *   Change the owner of the `report.txt` file to another user existing on the system (e.g., `root` or another test user).
    *   Change the group of the `script.sh` file to another, already existing group (e.g., `users` or `staff`).

### Self-Reflection
*   Describe the difference and use cases of symbolic and octal permissions with `chmod`.
*   How do `chown` and `chgrp` affect file access?
*   What impact does the `x`-bit have for directories compared to files?
*   How does the permission system contribute to the security and integrity of a Linux system?

---

## 2. Package Management (approx. 30 minutes)

### Objective
Understand the basics of package management in Linux and apply the main commands for installing, removing, and updating software packages.

### Tasks
1.  **Identify Package Manager:** Determine which package manager is used on your current system (apt, yum, or dnf).
2.  **Search for Packages:** Search for a common utility that is not yet installed (e.g., `htop`, `tree`, or `figlet`).
3.  **Install Package:** Install the found package on your system.
4.  **Remove Package:** Remove the previously installed package.
5.  **Update System:**
    *   Update the list of available packages from the repositories.
    *   Then perform an upgrade of all installed packages to the latest version.
    *   Finally, remove any no longer needed dependencies.

### Self-Reflection
*   Why is centralized package management preferable to manual compilation and installation of software?
*   What are the core commands of your package manager for installation, removal, and updating?
*   What role do package repositories play in package management?
*   Why is it important to regularly update the system?

---

## 3. Automation with Shell Scripts (approx. 45 minutes)

### Objective
Write simple shell scripts to automate user and package management tasks and understand their practical benefits in everyday system administration.

### Tasks
1.  **User Creation Script:** Write a shell script (`create_user.sh`) that automates the following actions:
    *   It should accept a username as an argument.
    *   It should check if the user already exists, and if so, output an appropriate message and abort.
    *   If the user does not exist, it should be created, given a home directory, and added to a specific group (e.g., `developers` or `operators`, which can be created manually beforehand).
    *   The script should output a success message at the end.
2.  **Package Installation Script:** Write a shell script (`install_packages.sh`) that accepts a list of packages (e.g., `htop`, `tree`, `vim-nox`) and installs them if they are not already installed. It should report at the end which packages were installed and which were already present. Note that whether you use `apt`, `yum`, or `dnf` is system-dependent.
3.  **System Check Script:** Write a shell script (`check_system.sh`) that:
    *   Checks if system updates are available and reports this.
    *   Displays the current memory usage in percentage.
    *   Displays the number of logged-in users.
4.  **Make Scripts Executable and Run:** Ensure all three scripts are executable and run them successfully.

### Self-Reflection
*   What advantages does automating administrative tasks with shell scripts offer?
*   Which shell commands and constructs (e.g., `if` statements, variables) were most important for creating the scripts?
*   What other system administration tasks could be usefully automated?
*   What do you need to consider when running scripts with administrative privileges?
