🚀 Individual Learning Phase (ILP): Your Deep Dive into System Administration

Welcome to your individual learning phase! This is your time to fully dedicate yourself to developing your skills and deepening your knowledge in system administration. Forget the lectures – now you're in control! Use these hours not just to understand the presented concepts, but to actively apply, experiment with, and master them. Imagine you are a senior system administrator facing real-world challenges. These tasks are designed to challenge you, stimulate your critical thinking, and help you develop robust solutions. Dive in, experiment, and solidify your know-how – success is in your hands!

## 👥 User and Group Management: Building a Team Structure (approx. 30 minutes)

Imagine you are responsible for setting up a new project team on a Linux server. The team consists of developers and testers who need access to different, as well as shared, resources.

### Task 1.1: Preparation of User and Group Structure

1.  Create a new primary group named `projekt_dev` for the developers.
2.  Create another primary group named `projekt_test` for the testers.
3.  Create a common group named `projekt_shared` to be used by both teams.
4.  Create two new users: `dev_alice` and `dev_bob`. Both should have `projekt_dev` as their primary group and also be members of the `projekt_shared` group. Their home directories should each be located under `/home/projekt_dev` (e.g., `/home/projekt_dev/dev_alice`).
5.  Create two additional users: `test_charlie` and `test_diana`. Both should have `projekt_test` as their primary group and also be members of the `projekt_shared` group. Their home directories should each be located under `/home/projekt_test` (e.g., `/home/projekt_test/test_charlie`).
6.  Ensure that all newly created users are assigned an initial password (e.g., `Passwort123!`).
7.  After creation, verify the group memberships and home directories of the users.

### Task 1.2: Adjustment and Validation

1.  A new junior developer, `dev_eve`, joins the team. Create her account. She should also belong to the primary group `projekt_dev` and the secondary group `projekt_shared`. Her home directory should follow the pattern of the other developers.
2.  `dev_bob` moves to another project and no longer needs access to `projekt_shared`. Remove him from this group without deleting his account or changing his primary group.
3.  `test_charlie` is a power user and should additionally receive access to a special admin group (let's call it `projekt_ops`), which you must create first. Add him to this group.
4.  Display the group memberships for all five users (`dev_alice`, `dev_bob`, `test_charlie`, `test_diana`, `dev_eve`) to confirm your changes.

## 📁 Filesystem Permissions: Secure Team Collaboration (approx. 30 minutes)

To enable team collaboration while ensuring data integrity, you must implement a robust permission concept for the project directories.

### Task 2.1: Implementation of the Project Directory Structure

1.  Create a main directory for all project files under `/srv/projekt_data`.
2.  Within `/srv/projekt_data`, create the following subdirectories:
    *   `entwicklungs_code` (for developers only)
    *   `test_scripte` (for testers only)
    *   `gemeinsame_dokumente` (for both teams)
3.  Set the ownership and group permissions such that:
    *   `entwicklungs_code`: Owned by `root:projekt_dev`. Only members of `projekt_dev` should have full read, write, and execute permissions. Others should have no permissions.
    *   `test_scripte`: Owned by `root:projekt_test`. Only members of `projekt_test` should have full read, write, and execute permissions. Others should have no permissions.
    *   `gemeinsame_dokumente`: Owned by `root:projekt_shared`. Members of `projekt_shared` should have full read, write, and execute permissions. Ensure that *new files and directories* created in this directory automatically inherit the `projekt_shared` group and that members of this group have full permissions on them, while others have no permissions.
    *   The main directory `/srv/projekt_data` should be permissioned such that only `root` can make changes to the structure, but the respective teams can navigate into their subdirectories.

### Task 2.2: Verification of Permissions

1.  As `root`, create an empty file named `readme.md` in the `gemeinsame_dokumente` directory. Verify the ownership and permissions of this file.
2.  Switch user to `dev_alice` (without using `sudo` or `su root`, only with `su dev_alice`). Try to create a file in `entwicklungs_code` and a file in `test_scripte`. Document what happens.
3.  As `test_charlie`, try to create a file in `test_scripte` and a file in `entwicklungs_code`. Document what happens.
4.  Switch user to `dev_alice` and create a file named `plan_a.txt` in the `gemeinsame_dokumente` directory. Verify the ownership and group permissions of this file. Does this confirm your setting?
5.  Switch user to `test_diana` and try to edit or delete the `plan_a.txt` file. What do you observe?

## 📦 Package Management: System Maintenance and Research (approx. 25 minutes)

As a system administrator, package management is your daily bread. It's not just about installing packages, but also about keeping the system up-to-date and clean, and finding specific information when needed.

### Task 3.1: System Check and Research

1.  Perform a full update of the package lists and installed packages on your system. Document the steps.
2.  Suppose you want to install a small HTTP server application, but you don't know the exact package name. Find a common, lightweight HTTP server package (e.g., `nginx` or `apache2` or `lighttpd`) solely by searching in the package manager. Then install it.
3.  Find out which package the executable file `/bin/ls` belongs to.
4.  Find out which files the previously installed HTTP server package has placed on your system.
5.  Completely uninstall the HTTP server package again, ensuring no configuration files are left behind.

### Task 3.2: Understanding Package Status and Dependencies

1.  Simulate a problem: Try to install the `python3-pip` package without `python3` or `python3-distutils` (or similar necessary packages) being installed. What happens? Explain the message you receive and why this occurs. (Hint: This might mean you first need to uninstall dependencies if they are already present, or use a new machine for this task where these packages are not yet installed.)
2.  Then, install `python3-pip` correctly, including all necessary dependencies.
3.  Display all installed packages that start with or contain the word "net" (e.g., `net-tools`, `netcat`). Filter the output appropriately.

## 🤖 Automation with Shell Scripts: Your Admin Assistant (approx. 60 minutes)

Now it's time to consolidate your knowledge and automate the tasks you've performed manually. Shell scripts are the heart of system administration.

### Task 4.1: Script for User and Group Management

Create a shell script named `manage_team_users.sh` that provides the following functions:

1.  **User Creation:** The script should be able to create a new user (e.g., `team_user_x`) with a specific primary group (e.g., `projekt_dev` or `projekt_test`) and a secondary group (`projekt_shared`). The home directory should be located in a suitable subdirectory under `/home`, based on the primary group (e.g., `/home/projekt_dev/team_user_x`). The password should be securely generated or interactively requested.
2.  **Change Group Membership:** The script should provide the option to add an existing user to an additional group or remove them from a group.
3.  **Error Handling:** The script should verify if the specified groups exist before attempting to add users. It should also output error messages if a user already exists or is not found.
4.  **Logging:** All actions (creation, modification) and errors should be logged in a log file under `/var/log/team_management.log`, including a timestamp.
5.  **Interactivity:** The necessary information (username, groups, action) should either be passed as arguments or interactively requested from the user if no arguments are provided.

### Task 4.2: Script for Package Maintenance

Create a shell script named `system_health_check.sh` that regularly checks and maintains your system:

1.  **Update:** Update package lists and install pending updates.
2.  **Cleanup:** Remove no longer needed packages and clean the package cache.
3.  **Status Report:** Generate a short report on:
    *   The last 5 kernel error messages from the system log (e.g., `dmesg` or `journalctl`).
    *   The current disk usage of the root filesystem.
    *   A list of the 5 largest files in the `/var/log` directory.
4.  **Logging:** All actions (updates, cleanup, status report) should be logged with a timestamp in a log file under `/var/log/system_health.log`.
5.  **Executability:** The script should be executable and run as `root` without further interaction (ideal for a Cron job, but this is not a requirement for this task).

*(Hint: For both scripts, pay attention to using appropriate command-line tools and ensuring they are robust and self-explanatory.)*

## 🧠 Self-Reflection: Your Learning Journey

Take a moment to reflect on the tasks you've just completed. This reflection is an important part of your learning process and helps you consolidate your understanding and better tackle future challenges.

1.  **Challenges:** Which of the tasks or aspects of the task description did you find most difficult? Were there moments when you felt stuck? How did you deal with them?
2.  **Aha-Moments:** Were there specific insights or "aha moments" that gave you a deeper understanding of a topic? Which ones were they?
3.  **Efficiency:** Were there instances where you felt you could have solved things more efficiently or elegantly? If so, how?
4.  **Relevance:** How do you assess the practical relevance of these tasks for day-to-day system administration? Which of the learned skills do you expect to use most frequently?
5.  **Improvement:** What other topics or techniques would you like to delve into next to further develop your system administration skills?

Thinking about these questions not only helps you internalize what you've learned but also to better understand and manage your own learning process. Well done!