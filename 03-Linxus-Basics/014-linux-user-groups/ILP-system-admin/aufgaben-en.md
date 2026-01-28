🚀 # Your Afternoon in the Individual Learning Phase (ILP)

Welcome to your Individual Learning Phase (ILP) this afternoon! This is your personal space to delve deep into the subject matter and independently deepen your knowledge. Consider this phase an expedition where you hold the helm. You have the freedom to set your own pace, discover new things, and sharpen your skills through practical application. Use this opportunity to master the provided concepts and solidify your competencies through targeted assignments. Every step you take here brings you closer to your goal of becoming a skilled System Administrator. Good luck and exciting insights on your learning journey!

---

## 1. User and Group Management (approx. 40 minutes)

### Objective

Understand and apply command-line tools for managing users and groups, as well as controlling group memberships.

### Tasks

1.  **Create User:** Create a new user with a unique name and a secure password. Ensure the user gets their own home directory.
2.  **Create Group:** Create a new group with a descriptive name.
3.  **Manage Group Memberships:** Add the newly created user to the previously created group. Also, add the same user to another existing system group (e.g., `sudo` or `adm`, if available and suitable for your learning environment), without changing the user's primary group.
4.  **Change User Properties:** Change the user's default shell to another available shell (e.g., `/bin/sh` or `/bin/zsh`, if installed).
5.  **Delete User and Group:** Delete the created user and group. Ensure that the user's home directory is also removed upon deletion.

### Self-Reflection

- Which command-line tools did you use for creating, modifying, and deleting users and groups?
- How did you verify that group memberships were successfully adjusted?
- What challenges did you face and how did you resolve them?
- Why is careful user and group management so important for system security?

---

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
    - `entwicklungs_code` (for developers only)
    - `test_scripte` (for testers only)
    - `gemeinsame_dokumente` (for both teams)
3.  Set the ownership and group permissions such that:
    - `entwicklungs_code`: Owned by `root:projekt_dev`. Only members of `projekt_dev` should have full read, write, and execute permissions. Others should have no permissions.
    - `test_scripte`: Owned by `root:projekt_test`. Only members of `projekt_test` should have full read, write, and execute permissions. Others should have no permissions.
    - `gemeinsame_dokumente`: Owned by `root:projekt_shared`. Members of `projekt_shared` should have full read, write, and execute permissions. Ensure that _new files and directories_ created in this directory automatically inherit the `projekt_shared` group and that members of this group have full permissions on them, while others have no permissions.
    - The main directory `/srv/projekt_data` should be permissioned such that only `root` can make changes to the structure, but the respective teams can navigate into their subdirectories.

### Task 2.2: Verification of Permissions

1.  As `root`, create an empty file named `readme.md` in the `gemeinsame_dokumente` directory. Verify the ownership and permissions of this file.
2.  Switch user to `dev_alice` (without using `sudo` or `su root`, only with `su dev_alice`). Try to create a file in `entwicklungs_code` and a file in `test_scripte`. Document what happens?
3.  As `test_charlie`, try to create a file in `test_scripte` and a file in `entwicklungs_code`. Document what happens?
4.  Switch user to `dev_alice` and create a file named `plan_a.txt` in the `gemeinsame_dokumente` directory. Verify the ownership and group permissions of this file. Does this confirm your setting?
5.  Switch user to `test_diana` and try to edit or delete the `plan_a.txt` file. What do you observe?

### Self-Reflection

- How did you ensure that the directory permissions aligned with the team structure?
- What challenges did you encounter while setting up the permissions, and how did you overcome them?
