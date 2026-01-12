# Working with the Linux Shell

## Plan

- Navigating the file system with relative and absolute paths
- Displaying directory contents and files with ls, cat and less

Working with files and directories

- Creating, renaming, moving and deleting files and directories with mkdir, mv, cp, rm
- Displaying and changing file attributes and permissions with chmod and ls -l

Text editing on the command line

- Introduction to the nano text editor (opening, editing, saving files)
- Searching for text positions and navigation within a file using nano

## Linux Terminal

- Terminal
- Console
- Shell (bash, zsh)

## Terminal

- Navigation (finding files and information)
- Working with files and folders (editing)

## Navigating the File System

- Before you can start, you need to know where you are.

### Displaying Directory Contents and Files

- `ls`
- `ls -a`
- `clear`
- The arrow keys (Up and Down)
- Command `--help`. e.g. `ls --help`

### Navigating the File System

- `cd`: (change Directory)
  - cd FOLDERNAME
  - cd .. (one level up)
  - cd (Home directory)

#### Working with Paths

- When you navigate with the terminal, you move through paths.
- A path is the address to a folder or file in the file system.
- There are two types of paths:
  - Relative paths
  - Absolute paths
- Relative paths:
  - Start from the current directory
  - You ask yourself "How can I get from my current location to another location?"
  - Example: `cd ../otherFolder/file.txt` (goes one level up and then into "otherFolder")
- Absolute paths:
  - Always start from the `root directory` (`/`) or `home directory` (`~`)
  - You ask yourself "How do I get from the root to this location?"
  - Example: `cd ~/documents/file.txt`
- `pwd`: (print working directory)
  - Displays the current path

---

## File and Folder Operations in Terminal

- You can work with files and folders directly through the terminal:
  - Create
  - Rename (Edit)
  - Copy
  - Move
  - Delete

### Creating Files and Folders

- `mkdir`: (make directory)
- `touch`: (creates an empty file)
- `mkdir foldername`: Creates a new folder named "foldername"
- `touch filename.txt`: Creates a new empty file named "filename.txt"

### Renaming Files and Folders

- `mv`: (move)
- `mv oldName.txt newName.txt`: Renames "oldName.txt" to "newName.txt"
- `mv oldFolder newFolder`: Renames "oldFolder" to "newFolder"

### Displaying File Contents

- `cat`: (concatenate)

- `less`: (Page-wise display of text files) - exit with `q`.

### Editing File Contents

- `nano`: (text editor)
- `nano filename.txt`: Opens the file "filename.txt" in the Nano editor for editing
  - Save: `CTRL + O`,
  - Exit: `CTRL + X`

### Copying Files and Folders

- `cp`: (copy)
- `cp source.txt destination.txt`: Copies "source.txt" to "destination.txt"

#### Copying Files

- The basic structure is always `cp [WHAT should be copied] [WHERE should it be copied to]`.

**Syntax:**

```bash
cp [Options] [Source] [Destination]
```

#### Copying Folders

- To copy a folder and its entire contents, use the `-r` option (recursive).

### Moving Files and Folders

- `mv`: (move)
- `mv source.txt destination.txt`: Moves "source.txt" to "destination.txt"
- The basic structure is always `mv [WHAT should be moved] [WHERE should it be moved to]`.

### Deleting Files and Folders

- `rm`: (remove)
- `rm filename.txt`: Deletes the file "filename.txt"
- `rm -r foldername`: Deletes the folder "foldername" and its entire contents
- Be careful with the `rm` command, as deleted files and folders cannot be restored!
