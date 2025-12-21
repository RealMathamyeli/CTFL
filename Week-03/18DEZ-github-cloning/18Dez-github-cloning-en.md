# Working with GitHub Remote Repositories

- Objective:
  - Learn how to clone existing GitHub repositories to your local machine.
  - Understand how to work with cloned repositories.
- Prerequisites:

  - Basic understanding of Git and version control concepts.
  - Good understanding of the content covered in "17Dez-github-repositories".

- What we will cover:
  - What does it mean to clone a repository?
  - Cloning our class GitHub repository to your local machine.
  - Cloning and submitting an exercise repository through GitHub classroom.

---

<br>

## What does it mean to clone a repository?

- There are many ways to get a GitHub repository onto your local machine.
- One common way is to `clone` it.
- Cloning a repository means creating `a local copy of a remote repository` hosted on GitHub.
- When you clone a repository, you get
  - all the files,
  - commit history,
  - and branches from the remote repository.
- If the remote repository gets updated, you can get the latest changes by pulling them into your local copy through `git pull`.

### Other ways to get a repository locally

- **Download as ZIP**
  - You can also download a repository as a `ZIP file` from GitHub.
  - Use this method if you just want to have the files and don't intend to push to the repository.
  - For example if you see a tutorial on Youtube and just want to get the code files.
- **Forking**
  - Forking is another way to create a copy of a repository on your own GitHub account.
  - This is useful when you want to contribute to someone else's project.
  - After forking, you can clone your forked repository to your local machine.

---

- The main difference between cloning and forking is that cloning creates `a local copy of the repository`, while forking `creates a remote copy directly on your GitHub account`, which you then have to clone to your local machine if you want to work on it locally.

---

### Contributing to a cloned repository

- You can only push changes to a cloned repository if you have the necessary permissions.
- If you cloned a repository that you don't own and don't have write access to, you won't be able to push changes directly.
- Our class repositor is an example of this.
- On the other hand, if you cloned your own repository or a repository where you have write access, you can push changes as needed.
- Examples:
  - Cloning your own project repository to work on it locally on another machine or maybe deleted the original local copy.
  - Cloning an exercise repository from GitHub Classroom to complete and submit assignments.

---

## Cloning our class GitHub repository to your local machine

- This is the link to our class repository: [CTF-Unterricht](https://github.com/dci-fbw-ctf25-d02/ctf-unterricht)
- To clone the repository, follow these steps:
  - Open your terminal or command prompt.
  - Navigate to the directory where you want to clone the repository.
  - Run the following command:
    ```bash
    git clone git@github.com:dci-fbw-ctf25-d02/ctf-unterricht.git
    ```
  - This will create a local copy of the repository in a folder named `ctf-unterricht`.
- After cloning, navigate into the cloned repository:
  ```bash
  cd ctf-unterricht
  ```
- You will see all the files created by the instructor.
- NEVER MAKE CHANGES DIRECTLY IN THIS REPOSITORY!
- If you want to make changes, please copy the files to your own repository or local directory!

### Thing to remember

- NEVER ClONE A REPOSITORY INTO ANOTHER REPOSITORY!
- Always clone repositories into separate directories to avoid nested Git repositories, which can lead to confusion and complications when managing version control.

---

## Cloning and submitting an exercise repository through GitHub Classroom

- GitHub Classroom is a tool that helps instructors manage programming assignments.
- When you are assigned an exercise repository through GitHub Classroom, you will receive a link to clone the repository.
- Follow these steps to clone an exercise repository and submit your work:
  - Click on the link you received from GitHub Classroom.
  - This will take you to your personal exercise repository on GitHub.
  - Click on the green `Code` button and copy the SSH URL.
  - Open your terminal or command prompt.
  - Navigate to the directory where you want to clone the repository.
  - Run the following command:
    ```bash
    git clone <SSH-URL>
    ```
  - Replace `<SSH-URL>` with the URL you copied.
  - After cloning, navigate into the cloned repository:
    ```bash
    cd <repository-name>
    ```
  - Replace `<repository-name>` with the name of the cloned repository.
- Now you can work on the tasks in the repository.
  - The tasks or instructions are usually provided in a README file or other documentation within the repository.
- After making your changes, you can submit them using the following commands:

  ```bash
  git add .
  git commit -m "My solutions for the exercise"
  git push origin main
  ```

- Your work will now be submitted to your exercise repository on GitHub.
