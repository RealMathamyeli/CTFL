# User and Group Management in Linux

- Creating, modifying and deleting users and groups using command line tools
- Managing group memberships
- Automation with Shell Scripts

<br><br><br>

## User and Group Management

- A shared computer system is like a big office building.
- Not everyone is allowed access to every room, and not everyone can do everything.
- To keep things organized and secure, there are user accounts (employees) and groups (departments).
- We are going to imagine a scenario where you are the system administrator of a Linux server for a small company.
- Your job is to manage user accounts and groups so that employees can do their work securely and efficiently.
- You will learn how to create, modify, and delete user accounts, as well as manage group memberships.
- The process of managing these users and groups is one of the core tasks of a system administrators.
- They usually do this on servers, and multi-user workstations.
- Managing users and groups typically happens via the command line (the terminal), as this is a very powerful and direct way to instruct the system.

<br><br><br>

### User Management

- Users are the individual accounts on the system.
- Each user has a unique username and associated information like user ID (UID), home directory, shell, and group memberships.
- The main commands for user management are `useradd`, `usermod`, and `userdel`.
- For these actions, you almost always need administrator rights, which is why commands often start with `sudo` (Super-User Do).

#### Creating Users

- The command used to create a new user is `sudo useradd NAME-OF-USER`.
- In its simplest form, it only creates a basic system entry.

**Simple example:**

```bash
sudo useradd anna
```

- This creates a user called "anna".
- But beware: this user does not yet have a password (so they can't log in) or a home directory.
- Therefore, `useradd` is almost always used with additional options (called flags).

| Option | Description                                                                                                                                     | Example                                  |
| :----- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| `-m`   | **m**ake home directory: Automatically creates a home directory for the user (usually `/home/username`). **This is the most important option!** | `sudo useradd -m anna`                   |
| `-s`   | **s**hell: Sets the default shell for the user. `/bin/bash` is the usual choice for regular users.                                              | `sudo useradd -m -s /bin/bash anna`      |
| `-c`   | **c**omment: Adds a descriptive comment, often the full name.                                                                                   | `sudo useradd -m -c "Anna Schmidt" anna` |
| `-g`   | **g**roup: Sets the primary group for the user. If not specified, often a new group with the same name as the user is created.                  | `sudo useradd -m -g users anna`          |

**A complete, practical example:**

```bash
sudo useradd -m -s /bin/bash -c "Anna Schmidt" anna
```

This command does the following:

1.  Creates the user `anna`.
2.  Creates a home directory at `/home/anna/` (`-m`).
3.  Sets the default shell to bash (`-s /bin/bash`).
4.  Adds the name "Anna Schmidt" as information (`-c`).

**Important last step:** The user needs a password!

```bash
sudo passwd anna
```

- The system will now prompt you to set and confirm a password for Anna.
- Only now can Anna log in to the system.

### Modifying Users

- When something changes for a user (name, department, etc.), use the command `usermod` (user modify).

| Option | Description                                                                                    | Example                                                        |
| :----- | :--------------------------------------------------------------------------------------------- | :------------------------------------------------------------- |
| `-l`   | **l**ogin name: Changes the user's login name.                                                 | `sudo usermod -l annas schmidt` (renames `schmidt` to `annas`) |
| `-d`   | **d**irectory: Changes the home directory. Usually used with `-m` (move) to move the contents. | `sudo usermod -d /home/anna_new -m anna`                       |
| `-s`   | **s**hell: Changes the user's login shell.                                                     | `sudo usermod -s /bin/zsh anna`                                |
| `-c`   | **c**omment: Changes the comment (e.g., full name).                                            | `sudo usermod -c "Anna Meier-Schmidt" anna`                    |
| `-L`   | **L**ock: Locks the user's account. They can no longer log in, but the account still exists.   | `sudo usermod -L anna`                                         |
| `-U`   | **U**nlock: Unlocks a locked account.                                                          | `sudo usermod -U anna`                                         |

### Deleting Users

To fully remove a user, use `userdel` (user delete). There's an important distinction here.

**Option 1: Delete user only**

```bash
sudo userdel anna
```

- This command only removes the user entry from the system. The home directory (`/home/anna/`) and all its files remain!
- This can be useful if you want to archive the user's data.

**Option 2: Delete user AND their home directory**

```bash
sudo userdel -r anna
```

- The `-r` option stands for **r**emove. This is the "clean" way to completely get rid of a user. It deletes the user and their entire home directory, including all data contained therein. **This process cannot be undone!**

<br><br><br>

## Group Management

- Now for the "departments". As mentioned, groups are simply collections of users.

### Creating Groups

- To create a new group, use `groupadd`.

```bash
sudo groupadd accounting
```

- That's it! A new (empty) group called "accounting" now exists.

### Modifying Groups

- If you want to rename a group, use `groupmod`.
- The main option here is `-n` for **n**ew name.

```bash
# Renames the group "accounting" to "finance"
sudo groupmod -n finance accounting
```

### Deleting Groups

To delete a group, use the command `groupdel`.

```bash
sudo groupdel finance
```

**Important note:**

- You can't delete a group if it is still the primary group of any user.
- You must first change the user's primary group with `usermod` before deleting the old group.

<br><br><br>

## Managing Group Memberships

- Creating users and groups is one thing.
- The real work is assigning users to the right groups.

### Adding a User to a Group

- To add a user to one or more _additional_ groups, use `usermod` again. The key options are `-a` and `-G`.

  - `-G` (Groups): Specifies a list of groups the user should belong to.
  - `-a` (Append): Adds the user to the groups **without removing them from other groups**.

**!! CAUTION !!** If you use `-G` alone without `-a`, the user will be removed from all other additional groups they were previously in! This is a very common source of errors.

**The correct way:**

```bash
# Adds the user "anna" to the group "accounting"
sudo usermod -aG accounting anna
```

- You can also add a user to several groups at once, separated by commas (no spaces!).

```bash
# Adds user "tom" to groups "it" and "projects"
sudo usermod -aG it,projects tom
```

### Removing a User from a Group

- For this, the `gpasswd` command is often more convenient than `usermod`.
- Use the `-d` (**d**elete) option to remove a user from a group.

**Syntax:** `gpasswd -d <username> <groupname>`

**Example:**

```bash
# Removes user "anna" from group "accounting"
sudo gpasswd -d anna accounting
```

### Checking Memberships

- How do you know which groups a user belongs to?
- There are two useful commands.

1.  **`groups`**: Quickly lists all groups a user is part of.

    ```bash
    groups anna
    ```

    _Possible output:_ `anna : anna adm cdrom sudo dip plugdev lpadmin sambashare accounting`

2.  **`id`**: Gives more detailed info, including user ID (UID) and primary group ID (GID).

    ```bash
    id anna
    ```

    _Possible output:_ `uid=1001(anna) gid=1001(anna) groups=1001(anna),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),118(lpadmin),128(sambashare),1002(accounting)`

- Here you see that the primary group of `anna` is the group `anna` (default behavior upon creation), and she is also a member of many other groups.

## Automation with Shell Scripts

- Managing users and groups can involve repetitive tasks.
- Shell scripts can help automate these tasks, saving time and reducing errors.
  <br><br><br>

### Example : Automating User Management

- Suppose you often need to create new users on a system.
- Typing `useradd`, `passwd`, etc. each time is a pain.
- Let’s automate!

- **The script `new_user.sh`:**

```bash
#!/bin/bash

# Script to automate the creation of a new user

echo "=== Create New User Account ==="

# 1. Ask for the username
echo -n "Please enter the new username: "
read USERNAME

# 2. Ask for the full name (comment)
echo -n "Please enter the user's full name: "
read FULLNAME

# 3. Create the user with useradd
# -m creates the home directory
# -c adds a comment (full name)
sudo useradd -m -c "$FULLNAME" $USERNAME

# 4. Check if user creation was successful
if [ $? -eq 0 ]; then
    echo "User '$USERNAME' was created successfully."

    # 5. Set a random initial password for the user
    echo "Setting a random initial password..."
    sudo passwd $USERNAME
    echo "The user must change their password at first login."
    sudo chage -d 0 $USERNAME
else
    echo "ERROR: User '$USERNAME' could not be created."
fi

echo "====================================="
```

**What happens step by step?**

1.  `read USERNAME`: The script waits for your input. What you type is stored in the `USERNAME` variable.
2.  `sudo useradd ...`: The actual command to create the user. Since this needs admin rights, it uses `sudo`. You'll be asked for your password.
3.  `if [ $? -eq 0 ]`: This checks the return code of the last command (`$?`). A `0` means "all is good." If successful, runs the `if` block; otherwise the `else` block.
4.  `sudo passwd ...` and `sudo chage ...`: Set the password for the new user and force them to change it at first login. This is good security practice.

### Running the Script

1.  Save the script as `new_user.sh`.
2.  Make it executable:
    ```bash
    chmod +x new_user.sh
    ```
3.  Run the script:
    ```bash
    ./new_user.sh
    ```
4.  Follow the prompts to create a new user.
5.  The script handles the rest!
