###### Topics

File System Basics

- Understanding folder structure and hierarchy
- Difference between files and folders

File Operations

- Creating, naming, and saving files and folders
- Copying, moving, and deleting files and folders

Working with Applications

- Basic word processing: opening, saving, and printing documents
- Using the calculator for simple calculations

<br>
<br>
<br>

# 📂 File System Basics

Imagine your computer as a giant filing cabinet. The file system is the system that organizes the drawers, hanging folders, and individual documents so you can quickly find everything. It defines how and where your data is stored, named, and retrieved. Without a file system, your computer would just be a collection of unsorted information – pure chaos!

<br><br><br>

## 🌳 Understanding Folder Structure and Hierarchy

The way data is organized in a file system is called **hierarchy**. That may sound complicated, but it’s actually simple. Think of a family tree: there are grandparents, then parents, then children. Everyone has their fixed place in the structure.

### 🗺️ The Root

Every file system has a starting point, the “main trunk” of the tree. This is called the **root directory** or simply **root**. From here, everything else branches out. On Windows systems, this is often a drive letter like `C:\`. On Linux or macOS, it’s just a forward slash `/`.

### 📂 Folders and Subfolders

A **folder** (sometimes also called a **directory**) is like a drawer in your filing cabinet. You can store things inside. To improve organization, you can place smaller boxes inside the drawer – these are the **subfolders**.

A typical example might look like this:

- `C:\` (This is the root, your main drive)

  - `Users` (A folder directly in the root)

    - `YourName` (A subfolder inside “Users”)

      - `Documents`
      - `Pictures`

        - `Vacation 2025` (A subfolder inside “Pictures”)

      - `Music`

This nested structure helps you stay organized. You know exactly that your vacation photos are in the “Vacation 2025” folder, which is inside “Pictures,” which is inside your user folder, and so on.

### 📍 The Path

The exact “address” of a file or folder is called its **path**. The path to your vacation folder in the example above would be:
`C:\Users\YourName\Pictures\Vacation 2025`.
It’s like a precise address for your data.

<br><br><br>

## 📁 Difference Between Files and Folders

Although they’re often mentioned together, files and folders are two fundamentally different things. It’s important to know the difference in order to use your computer effectively.

### 📄 What is a File?

A **file** is the actual container for your information. It could be a text you’ve written, a photo you’ve taken, a song you’re listening to, or a program you run. Every file has a name and an extension (e.g. `.txt`, `.jpg`, `.mp3`) that tells the computer what type of file it is and which program should open it.

**Examples of files:**

- `Resume.docx` (a text document)
- `Sunset.jpg` (a picture)
- `FavoriteSong.mp3` (a music file)
- `Photoshop.exe` (an executable program file)

### 📂 What is a Folder?

A **folder** (also called a directory) is just a **container**. It doesn’t hold direct information like text or pictures itself. Its only job is to store and organize other files and folders. It’s the drawer, while the file is the document inside.

### ⚖️ The Differences at a Glance

| Property    | 📄 File                                            | 📂 Folder                                |
| ----------- | -------------------------------------------------- | ---------------------------------------- |
| **Purpose** | Stores actual data (text, images, music, etc.)     | Used to organize files and other folders |
| **Content** | Contains information that can be read by a program | Contains a list of files and subfolders  |
| **Analogy** | A sheet of paper, a photo, a CD                    | A binder, a drawer, a filing cabinet     |
| **Size**    | Has a specific size (e.g. 2 MB)                    | Generally has no notable size itself     |
| **Symbol**  | Often shows a preview or a program icon            | Usually displayed as a folder icon       |

In short: **Files hold the work, folders create the order.** You place your `files` into `folders` so you don’t lose them and can group them logically.

<br>
<br>
<br>

# 🛠️ File Operations

File operations are all the basic things you do with your files and folders. Think of it as working with real documents and folders on your desk: you take a new sheet of paper, label it, put it in a folder, move the folder to another shelf, or throw an old sheet into the trash bin.

<br><br><br>

## ✨ Creating, Naming, and Saving Files and Folders

These are the first steps to bringing order into your digital life. You create new items and give them meaningful names so you can find them later.

### 🆕 Creating

**Creating a new folder:**
If you’re starting a new project, for example a school paper on “The Planets,” it’s smart to first create a suitable folder for it.

1. Go to the location where the folder should be placed (e.g. on the Desktop or in your “Documents” folder).
2. **Right-click** on a free space.
3. In the menu that appears, choose **“New”** and then **“Folder.”**
4. A new folder will appear with its name highlighted. You can immediately give it a name.

**Creating a new file:**
Creating a new file usually happens directly from within a program.

1. Open the program you want to use (e.g. a word processor like Word or an image editing program).
2. In the program, click on **“File”** and then on **“New.”**
3. You now have a blank file (an empty document, an empty image, etc.) that you can work on. But so far, it only exists in your computer’s memory. To keep it permanently, you must save it.

### ✏️ Naming and Renaming

A good name is worth gold! `Document1.docx` won’t help much if you want to know what it is three weeks later. Be as specific as possible! `Report_Planets_Mars.docx` is much better.

**Naming when creating:**
As described above, you can name a new folder immediately when creating it. For files, you assign the name when saving for the first time.

**Renaming something:**
If you made a typo or need a better name:

1. Click once on the file or folder to highlight it.
2. **Right-click** on the highlighted item.
3. In the menu, choose **“Rename.”**
4. The name becomes editable, and you can change it. Press **Enter** when finished.

### 💾 Saving

Saving is like filing a document in your real filing cabinet. If you don’t do it, all your work is gone as soon as you close the program or if there’s a power outage.

1. In your program, go to the menu and click **“File”** and then **“Save”** or **“Save As…”**

   - **“Save”:** If the file already has a name and location, it’s simply updated with the latest changes.
   - **“Save As…”:** Use this when saving a file for the first time or when you want to create a copy with a different name or in a different location.

2. A window (the “Save dialog”) opens.
3. Choose the **location** (the folder) where the file should be saved.
4. At the bottom, enter the **file name.**
5. Click the **“Save”** button, and your file is safely stored on the hard drive.

<br><br><br>

## 📦 Copying, Moving, and Deleting Files and Folders

These are the actions you use to manage and tidy up your existing organization.

### 👯 Copying (Duplicating)

Copying creates an exact duplicate of a file or folder (including all its contents) in another location. The original remains untouched in its old place. This is useful for making a backup copy or creating a template for something new.

**Here’s how:**

1. **Right-click** on the file/folder you want to copy.
2. Choose **“Copy.”**
3. Go to the folder where the copy should be placed.
4. **Right-click** on a free space in this folder.
5. Choose **“Paste.”** Done!

### 🚚 Moving (Cut and Paste)

Moving removes the file or folder from its original location and places it in a new one. No copy is made; the item simply changes its “home.”

**Here’s how:**

1. **Right-click** on the file/folder you want to move.
2. Choose **“Cut.”** Often you’ll see the item’s icon appear slightly transparent.
3. Go to the new destination folder.
4. **Right-click** on a free space.
5. Choose **“Paste.”** The item disappears from the old location and appears in the new one.

#### Comparison: Copying vs. Moving

| Action           | 👯 Copy & Paste                                                             | 🚚 Cut & Paste (Move)                                                     |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Result**       | The original stays where it was. An exact copy appears in the new location. | The original is removed from the old location and appears in the new one. |
| **Count after**  | You now have the item **twice** (or more).                                  | You still have the item only **once.**                                    |
| **Analogy**      | **Photocopying** a document.                                                | **Taking a document** out of one folder and putting it into another.      |
| **Menu command** | `Copy`                                                                      | `Cut`                                                                     |

### 🗑️ Deleting

If you no longer need a file or folder, you can delete it to free up space and keep things tidy.

**Here’s how:**

1. **Right-click** on the item you want to delete.
2. Choose **“Delete.”**
3. The system will usually ask you again: “Do you really want to delete this file?” Confirm with “Yes.”

**What happens then?**
Most operating systems (like Windows or macOS) don’t immediately delete the file permanently. Instead, it’s moved to the **Recycle Bin** (Windows) or **Trash** (macOS). That’s a safety net! If you deleted something by mistake, you can open the bin, right-click the file, and choose **“Restore.”** It will go back to its original location.

To delete a file permanently and free up the space, you must empty the Recycle Bin/Trash (right-click on the bin icon → “Empty Recycle Bin/Trash”). **But be careful:** after that, the file is really gone!

<br>
<br>
<br>

# 🖥️ Working with Applications

Applications – or simply “apps” – are the tools of your computer. Just like a craftsman uses a hammer or a saw, you use a word processor to write or a calculator to do math. Each application is made for a specific task. Let’s look at two absolute classics.

<br><br><br>

## ✍️ Basic Word Processing: Opening, Saving, and Printing Documents

A word processor (like Microsoft Word, LibreOffice Writer, or even the simple Notepad/Editor) is basically your digital sheet of paper with a super pen. You can write texts, format them, correct mistakes, and much more.

### 📄 Opening Documents

Imagine your hard drive is a big filing cabinet. Opening a document is like taking a specific folder out of this cabinet to look at it or continue working on it.

**How to open an existing file:**

1. **Start the word processing program.**
2. In the menu at the top of the window, click **“File.”**
3. Choose the option **“Open.”**
4. A new window appears, the so-called “Open Dialog.” This is basically a little map of your computer.
5. Navigate to the folder where you saved your file (e.g. “Documents” → “School” → “English”).
6. Click once on the desired file, then press the **“Open”** button. Your text will now appear in the program.

### 💾 Saving Documents

Saving is one of the most important steps! Unsaved work is like a thought you didn’t write down – it can vanish instantly (for example, if there’s a power outage).

We distinguish between two commands, both found in the **“File”** menu:

| Command      | When to use it                                                                 | What it does                                                                                     |
| ------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **Save**     | When you’re working on a file that has **already been saved** before.          | Updates the file at its existing location with your newest changes. Quick and without questions. |
| **Save As…** | When you’re saving a file for the **first time** or want to create a **copy**. | Opens the “Save Dialog,” where you must choose the file’s **name** and **location.**             |

**Remember:** If you’ve worked on a text for an hour, it’s a good habit to click “Save” every now and then (or use the keyboard shortcut `Ctrl + S`).

### 🖨️ Printing Documents

If you want to bring your digital text onto real paper, printing comes into play.

1. Make sure your printer is turned on and connected to the computer.
2. In your text program, go again to the **“File”** menu.
3. Choose the option **“Print.”**
4. A “Print Dialog” window opens. Here you can adjust important settings:

   - **Select printer:** If multiple printers are available, choose the correct one.
   - **Number of copies:** Decide how many times the document should be printed.
   - **Page range:** You can print the whole document or just specific pages (e.g. “Pages: 2–4”).

5. When everything looks good, click the **“Print”** button. The printer should now start working.

<br><br><br>

## 🧮 Using the Calculator for Simple Calculations

Every computer has a built-in calculator app, perfect for quick calculations – whether for math homework or adding up shopping costs.

### ▶️ Finding and Starting the Calculator

You usually find the calculator through your operating system’s start menu. Simply type “Calculator” in the search bar and click the icon that appears.

### 🔢 Understanding the User Interface

The app looks like a normal calculator you could hold in your hand.

- **Number pad (0–9):** Enter your numbers here. You can either click the buttons with the mouse or use your keyboard.
- **Basic operations:** The most important buttons are **+** (addition), **-** (subtraction), **\*** (multiplication, often shown as “x”), and **/** (division, often shown as “÷”).
- **Equals sign (=):** This button calculates the result of your input.
- **Clear buttons:**

  - **C:** Stands for “Clear” (clear everything). Resets the calculator completely to zero.
  - **CE:** Stands for “Clear Entry.” Deletes only the last number you typed, not the whole calculation.
  - **Backspace (←):** Deletes the last digit of the current number.

### 🛒 Doing a Simple Calculation

Let’s imagine you’re buying a few items and want to know the total cost:

- Bread: €3.50
- Milk: €1.20
- Apples: €2.80

**Here’s how to calculate it in the calculator:**

1. Open the calculator app.
2. Enter the first number: `3.5` (decimals are usually entered with a dot).
3. Press the **plus button (+).**
4. Enter the second number: `1.2`.
5. Press the **plus button (+)** again.
6. Enter the third number: `2.8`.
7. Finally, press the **equals button (=).**

The result `7.5` should now appear in the display. You now know that your shopping costs €7.50. To start a new calculation, simply press the **C button.**
