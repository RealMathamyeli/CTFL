# Automation with Shell Scripts

<br><br><br>

## Writing and Executing Simple Shell Scripts to Automate User and Package Management Tasks

- Imagine you have to type the same commands into your terminal over and over again.
- That's tedious and error-prone!
- A shell script is like a recipe for your computer.
- You write the sequence of commands once in a text file, and then you can run this "recipe" any time to have the task done automatically.

### What is a Shell Script?

- A shell script is simply a text file containing a series of commands for the shell (such as `bash`, the default shell on most Linux systems) to execute in order.
- Instead of entering each command manually, the shell executes all commands from the file.

- This is incredibly powerful for automating complex processes.
- An example use case is automating user account creation or system updates.

### Layout of a Simple Script

- A basic shell script usually looks like this:

1.  **The "Shebang"**: The first line should always be `#!/bin/bash` (or the path to another shell).

- The "shebang" tells the OS, "Hey, run everything in this file with `/bin/bash`."
- This ensures your script always runs under the intended shell.

2.  **Comments**: Lines starting with `#` are comments.

- The shell ignores them, but they are extremely useful for you and others to understand what the script does.
- Good code is always well commented!

3.  **The Commands**:

- This is the core of your script.
- Here you write the commands just as you'd enter them into the terminal—one per line.

- Here's a mini-example:

```bash
#!/bin/bash

# This is a comment. It is not executed.
echo "Hello World! My first script runs." # 'echo' prints text to the screen.

echo "Today's date is:"
date # The 'date' command shows the current date and time.
```

### Making a Script Executable and Running it

- After saving your script as a text file (e.g., `my_first_script.sh`), you can't run it immediately.
- You first need to tell the system this file is a program that may be executed.

1.  **Make it Executable:** Use the `chmod` command (change mode).

```bash
chmod +x my_first_script.sh
```

    `+x` adds executable rights ("e**x**ecute"). You only need to do this once per script.

2.  **Run It:** To start the script, you need to specify the path. If you're in the same directory as the script:

```bash
./my_first_script.sh
```

- The `./` at the start is important.
- It's shorthand for "in this directory." It tells the shell not to search the whole system for a program called `my_first_script.sh`, but to use the one right here.

### Example 1: Automating User Management

- Suppose you often need to create new users on a system.
- Typing `useradd`, `passwd`, etc. each time is a pain.
- Let’s automate!

#### **The script `new_user.sh`:**

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

### Example 2: Automating Package Management

Keeping a system up to date and installing standard software is a recurring task.

**The script `system_update.sh`:**

```bash
#!/bin/bash

# Script to update the system and install useful packages

echo "=== Starting System Update and Installation ==="

# 1. Refresh package lists
echo "--> Updating package lists..."
sudo apt update

# 2. Upgrade installed packages to latest versions
# The -y option answers all prompts with "yes" automatically
echo "--> Upgrading installed packages..."
sudo apt upgrade -y

# 3. Install useful standard packages
# If a package is already installed, nothing happens.
echo "--> Installing useful tools (curl, htop, git)..."
sudo apt install -y curl htop git

# 4. Remove obsolete packages and dependencies
echo "--> Cleaning up the system..."
sudo apt autoremove -y

echo "=== System is up to date! ==="
```

**What happens step by step?**

1.  `sudo apt update`: Synchronizes the local package list with servers so the system knows about new versions.
2.  `sudo apt upgrade -y`: Updates all installed packages. The `-y` is essential for scripts, as it automatically answers prompts, preventing the script from stopping.
3.  `sudo apt install -y ...`: Installs the specified programs. If they’re already present, `apt` does nothing.
4.  `sudo apt autoremove -y`: Removes unused packages (for example, old kernel versions or libraries no program needs). This keeps the system clean.

<br><br><br>

## Practical Examples of Automation in Everyday System Work

- Once you grasp the basics, you can start automating all sorts of recurring tasks.
- Here are some ideas and examples that are useful for system administrators or power-users.

### Example 1: Automatic Backup Script

- Regular backups are essential. Instead of manually copying folders, a script can do this for you—compressing them and adding a timestamp.

**The script `backup_projects.sh`:**

```bash
#!/bin/bash

# A simple script to back up a directory.

# --- Configuration ---
# Which folder should be backed up?
SOURCE_DIR="/home/your_user/important_projects"

# Where should the backups be stored?
BACKUP_DIR="/mnt/backup_drive/project_backups"

# --- Script logic ---
echo "Starting backup..."

# Create a filename with the current date and time
# Format: backup-YEAR-MONTH-DAY_HOUR-MINUTE-SECOND.tar.gz
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
FILENAME="backup-$TIMESTAMP.tar.gz"
DESTINATION="$BACKUP_DIR/$FILENAME"

# Create the compressed archive with 'tar'
# -c: create archive
# -z: gzip compression
# -f: filename follows
tar -czf "$DESTINATION" "$SOURCE_DIR"

echo "Backup created successfully at: $DESTINATION"
```

**How it works:**

1.  **Variables:** At the top, you set source and destination directories, making it easy to adjust the script later.
2.  **Timestamp:** `$(date +"...")` executes the date command and captures its output, nicely formats a timestamp for the filename.
3.  **tar command:** `tar` is a classic Linux tool for packing files. It packs the whole content of `SOURCE_DIR` into a single file (`.tar`) and compresses it (`.gz`).

**Next step?** You could connect this script to a cron job, so it automatically runs every day at 3am. That's true automation!

### Example 2: Simple System Check

- You want a quick overview of your system status—without typing several commands?
- A check script can summarize key information for you.

**The script `system_check.sh`:**

```bash
#!/bin/bash

# Script to display key system information

# Format output with separators
echo "========================================="
echo "         System Status Report"
echo "========================================="
echo ""

# 1. Disk usage of main partition (/)
# df -h: human-readable disk usage
# grep "/$": filters the line ending with "/"
DISK_USAGE=$(df -h | grep "/$")
echo "### Disk Usage ###"
echo "$DISK_USAGE"
echo ""

# 2. RAM and swap usage
# free -h: shows RAM usage in human-readable form
echo "### Memory Usage ###"
free -h
echo ""

# 3. CPU load averages over the last 1, 5, and 15 minutes
# uptime: shows how long the system was up and the "Load Average"
LOAD_AVG=$(uptime | awk -F'load average: ' '{print $2}')
echo "### CPU Load (Load Average) ###"
echo "Last 1, 5, 15 minutes: $LOAD_AVG"
echo ""

echo "========================================="
```

**How it works:**

1.  **Store command outputs in variables:** `VARIABLE=$(command)` runs the command and stores its output.
2.  **Text processing:** Tools like `grep` and `awk` filter output so you only display what's relevant. This is a common shell scripting technique.
3.  **Formatted output:** Strategic use of `echo` and separators makes a readable report at-a-glance.

### Example 3: Cleaning Up Old Log Files

Servers and apps generate a lot of log files. If you don't clean them up regularly, they can fill up your drive.

**The script `log_cleanup.sh`:**

```bash
#!/bin/bash

# WARNING: This script deletes files!
# Always run without '-delete' first to test!

# --- Configuration ---
LOG_DIR="/var/log/my_app_logs"
DAYS_TO_KEEP=30 # Delete all log files older than 30 days

# --- Script logic ---
echo "Searching for log files in '$LOG_DIR' older than $DAYS_TO_KEEP days..."

# The 'find' command is extremely powerful for searching files.
# find [path] -type f -name "*.log" -mtime +[days]
#
# Explanation:
# [path]: directory to search
# -type f: files only, not folders
# -name "*.log": files ending with .log
# -mtime +30: files modified more than 30 days ago

# FIRST TEST! This command shows what would be deleted:
echo "The following files would be deleted:"
find "$LOG_DIR" -type f -name "*.log" -mtime +$DAYS_TO_KEEP
echo ""

# When sure, uncomment the next line to really delete:
# find "$LOG_DIR" -type f -name "*.log" -mtime +$DAYS_TO_KEEP -delete

echo "Cleanup check finished."
echo "To actually delete files, you must edit the script."
```

**How it works & important warning:**

1.  **The `find` command:** This is the core. `find` is a versatile tool for finding files/folders based on criteria like name, size, and modification date.
2.  **Safety first:** **Never blindly delete files with a script!** The strategy here:
    - Let the script first _display_ what would be deleted (run `find ...` without `-delete`).
    - Review the output. Are those really the files to be deleted?
    - Only when absolutely sure, add `-delete` (or pipe to `xargs rm`) to really delete the files.

### Practical Exercise - My First Shell Script

- Create a simple shell script that shows the current date and time.

1. Open your Linux terminal.
2. Create a new file called `mein-erstes-skript.sh`.
3. Open it in a text editor (like `nano mein-erstes-skript.sh`).
4. Add the following lines:

```bash
#!/bin/bash

# This is a comment. It is not executed.
echo "Hello World! My first script runs." # 'echo' prints text to the screen.

echo "Today's date is:"
date # The 'date' command shows the current date and time.
```

5. Save and exit the editor.
6. Make the script executable with `chmod` command we learned yesterday.
7. Run your script with `./mein-erstes-skript.sh`.
8. What output do you see?
