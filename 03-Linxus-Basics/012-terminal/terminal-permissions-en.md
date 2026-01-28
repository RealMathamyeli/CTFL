# Filesystem Permissions and Package Management

- If you run the command `ls -l` in your terminal, you'll see these permissions at the far left of the output.
- One of the lines might look like:

```bash
drwxrwxrwx 11 aretas sudo        4096 Jan  5 15:27  Documents
```

<br><br><br>

## The Basic Permission System

- Files and folder on your computer are like houses.
- The permission system is a set of rules that determines:
  - who can enter the house,
  - who can change things inside, and
  - who can make copies of the keys for others.
- In Unix-like systems (such as Linux or macOS), there are three "levels of people" for whom these rules apply:
  - the owner of the file,
  - the group associated with the file, and
  - all other users (others).
- We will handle groups and users when we discuss Virtual Machines later in the course.

<br><br><br>

### The Owner

- This is the person who owns the file or folder—typically the one who created it.
- Think of them as the "owner" of the house.
- The owner generally has the most rights and can decide who else gets access.
- On the command line, owner is abbreviated with `u` ("user").

<br><br><br>

### The Group

- Each file also belongs to a specific group.
- Think of this as a family, team, or club.
- All users who are members of this group have the same group permissions for the file.
- This is useful if you're working on a project with others.
- Instead of giving each user rights separately, you give the rights to the group.
- On the command line, group is abbreviated with `g`.

<br><br><br>

### Others

- This is basically the rest of the world.
- Every user on the system who is neither the owner of the file nor a member of the file's group falls into this category.
- The permissions for "others" are usually the most restricted, to protect the file from unauthorized access.
- On the command line, others are abbreviated with `o`.

<br><br><br>

### The Three Basic Permissions (r, w, x)

For each of the three levels (owner, group, others), you can grant three basic rights, represented by the letters `r`, `w`, and `x`.

- **`r` (read):** The right to read the contents of a file, or list the contents of a directory.
- **`w` (write):** The right to modify a file or to create, delete, or rename files in a folder.
- **`x` (execute):** The right to run a file as a program or script, or to enter a directory ("cd" into it).

- The meaning of these rights differs slightly depending on whether it’s a file or a folder.
- Here's a table for clarification:

| Permission        | Meaning for a **file**                                    | Meaning for a **directory (folder)**                                                                                      |
| :---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **`r` (read)**    | You may view/read the content (e.g., with `cat`, `less`). | You may list contents (see file/subfolder names, e.g., with `ls`).                                                        |
| **`w` (write)**   | You may modify, overwrite or empty the file.              | You may create, delete, or rename files/folders in the directory. **Note:** This applies to the directory, not its files! |
| **`x` (execute)** | You may run the file as a program or script.              | You may enter (`cd`) the directory and access its content (as long as you have appropriate permissions for those files).  |

If you run the command `ls -l` in your terminal, you'll see these permissions at the far left of the output. A line might look like:

```
drwxrwxrwx 11 aretas sudo        4096 Jan  5 15:27  Documents
```

Let's break down `-rwxr-xr--`:

- **First character (`-`):** File type. `-` means a regular file, `d` would mean directory.
- **Characters 2-4 (`rwx`):** Permissions for **owner**. Here, owner may read, write and execute.
- **Characters 5-7 (`r-x`):** Permissions for **group**. Here, group may read and execute, but **not** write (`-` means permission is missing).
- **Characters 8-10 (`r--`):** Permissions for **others**. Here, others may only read, not write or execute.

<br><br><br>

## Tools to Manage Permissions

- To change owner and permissions, there are three important command line tools: `chmod`, `chown`, and `chgrp`.

<br><br><br>

### `chmod`: Change Access Rights

- `chmod` stands for "change mode," used to change `rwx` permissions on a file or folder.
- There are two ways to use `chmod`:
  - symbolic and
  - numeric (octal) methods.

#### Symbolic Method

- This is intuitive and easy to read.
- The structure is: `chmod [Who][Action][Permission] [filename]`.

- **Who?**
  - `u` (user/owner)
  - `g` (group)
  - `o` (others)
  - `a` (all — equivalent to `u`, `g`, and `o` together)
- **Action?**
  - `+` (add a right)
  - `-` (remove a right)
  - `=` (set rights exactly as specified, overwriting previous setting)
- **Permission?**
  - `r` (read)
  - `w` (write)
  - `x` (execute)

**Examples:**

- If You want to make a script executable for yourself:

  ```bash
  chmod u+x my_script.sh
  ```

  (Adds execute permission for the **u**ser)

- If You want to remove write permission for your group:

  ```bash
  chmod g-w projectfile.txt
  ```

  (Removes **w**rite for **g**roup)

- If You want the owner to have all rights, the group only read, and others none:
  ```bash
  chmod u=rwx,g=r,o= project.conf
  ```
  (Sets **u**ser rights to **rwx**, **g**roup to **r**, and **o**thers to none)

#### Numeric (Octal) Method

Popular among experienced users for speed and brevity. Each right has a numeric value:

- `r` (read) = **4**
- `w` (write) = **2**
- `x` (execute) = **1**
- No right = **0**

For each level (owner, group, others), add the values to set the permissions.

| Permission | Sum           | Meaning                                |
| :--------- | :------------ | :------------------------------------- |
| `---`      | 0+0+0 = **0** | No rights                              |
| `--x`      | 0+0+1 = **1** | Execute only                           |
| `-w-`      | 0+2+0 = **2** | Write only                             |
| `-wx`      | 0+2+1 = **3** | Write and execute                      |
| `r--`      | 4+0+0 = **4** | Read only                              |
| `r-x`      | 4+0+1 = **5** | Read and execute                       |
| `rw-`      | 4+2+0 = **6** | Read and write                         |
| `rwx`      | 4+2+1 = **7** | Read, write, and execute (full access) |

You use a three digit number: first digit for owner, second for group, third for others.

**Examples:**

- Give a text file typical rights: owner can read and write, group and others read only.

  - Owner: `rw-` = 4 + 2 = **6**
  - Group: `r--` = **4**
  - Others: `r--` = **4**
  - The command:
    ```bash
    chmod 644 important_note.txt
    ```

- Give script typical rights: owner can do everything, group and others can read and execute.

  - Owner: `rwx` = 4 + 2 + 1 = **7**
  - Group: `r-x` = 4 + 1 = **5**
  - Others: `r-x` = 4 + 1 = **5**
  - The command:
    ```bash
    chmod 755 important_script.sh
    ```

- A very private file, only you may read and write:
  - Owner: `rw-` = 4 + 2 = **6**
  - Group: `---` = **0**
  - Others: `---` = **0**
  - The command:
    ```bash
    chmod 600 my_secret.txt
    ```

<br><br><br>

### `chown`: Change Owner

- `chown` stands for "change owner" and does exactly that: changes the owner and/or group of a file or folder.
- This command is especially important for system administrators (`root`), as regular users usually can’t arbitrarily transfer ownership of their files to others.

- Syntax: `chown [new_owner] [filename]`

#### Example:

- The file `report.docx` currently belongs to user `peter`.
- You (as `root`) want to assign it to user `anna`.

```bash
chown anna report.docx
```

- A practical trick: change both owner and group at once by separating them with a colon `:`.

- Syntax: `chown [new_owner]:[new_group] [filename]`

#### Example:

- The folder `/var/www/project_alpha` needs to belong to user `www-data` and group `www-data`.

  ```bash
  chown www-data:www-data /var/www/project_alpha
  ```

- If you want the change to apply to all files and subfolders within a folder, use the `-R` (recursive) option.

#### Example:

- Assign entire project folder and all its contents to user `max` and group `developers`:

```bash
chown -R max:developers /home/max/projects/super_project
```

<br><br><br>

### `chgrp`: Change Group Membership

`chgrp` stands for "change group". It's like the little sister of `chown`. While `chown` can change both owner and group, `chgrp` is solely for changing the group of a file or folder.

Syntax: `chgrp [new_group] [filename]`

#### Example:

- A log file `server.log` needs to belong to group `admins`, so all admins can read it.

```bash
chgrp admins server.log
```

As with `chown`, use the `-R` (recursive) flag to change group ownership throughout a folder tree at once.

#### Example:

- Make all files in `/srv/data/shared` belong to group `marketing`.

```bash
chgrp -R marketing /srv/data/shared
```

<br><br><br>

## Package Management in Linux Systems

- Think of package management as a gigantic app store for your Linux system.
- Instead of manually downloading software from websites and installing it yourself, you have a centralized tool that does it all for you.
- This tool is called a `package manager`.

- A **"package"** is more than just the program itself.
- It's a carefully packed bundle containing:

  - The actual software (the executable files).
  - Information about which other packages ("dependencies") are needed for the software to work.
  - Configuration files.
  - Instructions for the package manager on how to install, update, or remove everything properly.

- The three most well-known package manager families in the Linux world are `apt`, `yum`, and `dnf`.
- Which you use depends on your distribution.
- Since we mostly work with Debian-based systems in this course, `apt` will be our main focus.

<br><br><br>

### Apt (Advanced Package Tool) Packages Manager

- `apt` is mainly used on Debian-based distributions, such as:

  - **Debian**
  - **Ubuntu** (and its variants like Kubuntu, Xubuntu, etc.)
  - **Linux Mint**
  - **Raspberry Pi OS**

- `apt` is known for its stability and the huge range of available software in its repositories.

#### Basics: Installing and Removing Packages

- In order to install or remove software packages, you use specific commands with your package manager.
- These commands almost always require `sudo`, since you're changing system files and need administrator rights.

##### ➕ Installing a Package

- The basic installation command is almost always `install` followed by the package name.
- The package manager automatically downloads and installs it and all needed dependencies.

| Package Manager | Command                          | Example (installs process manager `htop`) |
| :-------------- | :------------------------------- | :---------------------------------------- |
| **apt**         | `sudo apt install [packagename]` | `sudo apt install htop`                   |

- Before installation begins, the package manager will show which packages (the desired one and its dependencies) will be installed and how much space will be required.
- You usually need to confirm by answering `y` (yes).

##### ➖ Removing a Package

- If you no longer need software, you can neatly uninstall it; the package manager ensures nothing breaks that other programs still need.

| Package Manager | Command                         | Example (removes the process manager `htop`) |
| :-------------- | :------------------------------ | :------------------------------------------- |
| **apt**         | `sudo apt remove [packagename]` | `sudo apt remove htop`                       |

**Important note with `apt`:**

- `apt remove`: Removes only the program package. System-wide config files are kept. This is useful if you might reinstall later.
- `apt purge`: Removes the program package **and** all its system-wide config files. This is a more "radical" uninstall, leaving the system cleaner if you never want the software again.

<br><br><br>

#### 🔄 Updating Software Packages

- Keeping your system up to date is critical.
- Updates fix security vulnerabilities, correct bugs, and sometimes add features.
- The process varies slightly between package managers, but follows similar logic.

- the update process with `apt` is split in two steps:

1.  **Step 1: Update shopping list.**

- `sudo apt update`
- Your system checks with the repositories: "What's new since my last visit?"
- It downloads a fresh list of all available packages and versions. **No software is actually updated yet!**

2.  **Step 2: Do the shopping.**

- `sudo apt upgrade`
- Now that your system has the new list, you compare it with what you have installed.
- The upgrade command says, "OK, now download and install new versions for all my installed packages."

## 📋 Summary of Important Commands
