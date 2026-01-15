# Instructions for the Exercise:

1. **Create a folder** named `git-cheatsheet` on your computer.
2. **Create a file** inside it named `index.html`.
3. **Paste the code below** into `index.html` and save it.

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Git & GitHub Survival Guide</title>
    <style>
      :root {
        --bg-color: #0d1117;
        --card-bg: #161b22;
        --text-main: #c9d1d9;
        --neon-green: #3fb950;
        --neon-blue: #58a6ff;
        --neon-pink: #db61a2;
        --neon-purple: #bc8cff;
        --neon-yellow: #d29922;
        --border-color: #30363d;
        --code-bg: #000000;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
          Arial, sans-serif;
        background-color: var(--bg-color);
        color: var(--text-main);
        margin: 0;
        padding: 20px;
        line-height: 1.6;
      }

      header {
        text-align: center;
        margin-bottom: 40px;
        border-bottom: 2px solid var(--neon-purple);
        padding-bottom: 20px;
      }

      h1 {
        color: var(--neon-purple);
        font-size: 2.5rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 0 0 10px rgba(188, 140, 255, 0.4);
        margin: 0;
      }

      p.subtitle {
        color: var(--neon-blue);
        font-size: 1.2rem;
        margin-top: 10px;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 25px;
      }

      /* Specialized Sections */
      .section-setup {
        grid-column: 1 / -1;
        /* Full width */
        border-color: var(--neon-blue);
      }

      .card {
        background-color: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        transition: transform 0.2s ease;
      }

      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 15px rgba(88, 166, 255, 0.1);
      }

      h2 {
        margin-top: 0;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      /* Neon Header Colors */
      .h-setup {
        color: var(--neon-blue);
      }

      .h-workflow {
        color: var(--neon-green);
      }

      .h-undo {
        color: var(--neon-pink);
      }

      .h-branch {
        color: var(--neon-yellow);
      }

      .h-github {
        color: #fff;
      }

      .concept-box {
        background: rgba(255, 255, 255, 0.05);
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 15px;
        font-size: 0.9em;
        font-style: italic;
      }

      code {
        font-family: "Consolas", "Monaco", monospace;
        background-color: var(--code-bg);
        color: var(--neon-green);
        padding: 2px 6px;
        border-radius: 4px;
      }

      .command-block {
        background-color: var(--code-bg);
        padding: 15px;
        border-radius: 6px;
        border-left: 4px solid;
        margin-bottom: 15px;
      }

      .cmd-setup {
        border-left-color: var(--neon-blue);
      }

      .cmd-workflow {
        border-left-color: var(--neon-green);
      }

      .cmd-undo {
        border-left-color: var(--neon-pink);
      }

      .cmd-branch {
        border-left-color: var(--neon-yellow);
      }

      .command-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        border-bottom: 1px solid #333;
        padding-bottom: 8px;
      }

      .command-row:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }

      .cmd {
        color: var(--neon-blue);
        font-weight: bold;
      }

      .desc {
        color: #8b949e;
        font-size: 0.9rem;
        text-align: right;
      }

      .warning {
        color: var(--neon-pink);
        font-weight: bold;
        font-size: 0.8rem;
        margin-top: 5px;
        display: block;
      }

      footer {
        text-align: center;
        margin-top: 50px;
        color: #8b949e;
        font-size: 0.8rem;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        h1 {
          font-size: 1.8rem;
        }

        .container {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>

  <body>
    <header>
      <h1>Git & GitHub Cheatsheet</h1>
      <p class="subtitle">Your Magical Notebook for Version Control</p>
    </header>

    <main class="container">
      <section class="card section-setup">
        <h2 class="h-setup">🛠️ Initial Setup (One-Time Only)</h2>
        <div class="concept-box">
          Configure this once per computer to identify who you are. This is the
          "WHO" in version control history.
        </div>
        <div class="command-block cmd-setup">
          <div class="command-row">
            <span class="cmd">git --version</span>
            <span class="desc">Check if Git is installed</span>
          </div>
          <div class="command-row">
            <span class="cmd">sudo apt-get install git</span>
            <span class="desc">Install Git (Linux System)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git config --global user.name "Name"</span>
            <span class="desc">Set your username</span>
          </div>
          <div class="command-row">
            <span class="cmd"
              >git config --global user.email "mail@ex.com"</span
            >
            <span class="desc">Set email (must match GitHub!)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git config --global init.defaultBranch main</span>
            <span class="desc">Set default branch to "main"</span>
          </div>
          <div class="command-row">
            <span class="cmd">ssh-keygen -t ed25519 -C "mail@ex.com"</span>
            <span class="desc">Generate SSH Key</span>
          </div>
          <div class="command-row">
            <span class="cmd">eval "$(ssh-agent -s)"</span>
            <span class="desc">Start SSH Agent</span>
          </div>
          <div class="command-row">
            <span class="cmd">ssh-add ~/.ssh/id_ed25519</span>
            <span class="desc">Add SSH key to Agent</span>
          </div>
          <div class="command-row">
            <span class="cmd">cat ~/.ssh/id_ed25519.pub</span>
            <span class="desc">Show SSH Key (For copying)</span>
          </div>
          <div class="command-row">
            <span class="cmd"
              >Copy the SSH key (no whitespace after ".com") and paste into
              GitHub</span
            >
            <span class="desc">Add SSH key to GitHub</span>
          </div>
          <div class="command-row">
            <span class="cmd">ssh -T git@github.com</span>
            <span class="desc">Test SSH connection to GitHub</span>
          </div>
        </div>
      </section>

      <section class="card">
        <h2 class="h-workflow">🔄 The Daily Workflow</h2>
        <div class="concept-box">
          Think of the 3 zones: Working Directory (Store) &rarr; Staging Area
          (Cart) &rarr; Repository (Fridge).
        </div>
        <div class="command-block cmd-workflow">
          <div class="command-row">
            <span class="cmd">git init</span>
            <span class="desc">Start a new repo (create .git folder)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git status</span>
            <span class="desc">Check what has changed</span>
          </div>
          <div class="command-row">
            <span class="cmd">git add &lt;file&gt;</span>
            <span class="desc">Stage specific file (Fill the cart)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git add .</span>
            <span class="desc">Stage ALL changes (Fill the cart)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git commit -m "Message"</span>
            <span class="desc">Save snapshot (Checkout)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git remote add origin &lt;url&gt;</span>
            <span class="desc"
              >Connect local repo to GitHub (Remote repo URL - only for initial
              connection).</span
            >
          </div>
          <div class="command-row">
            <span class="cmd">git push -u origin main</span>
            <span class="desc">Upload to GitHub (First time)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git push</span>
            <span class="desc"
              >Upload changes (After initial connection and push -u)</span
            >
          </div>
        </div>
      </section>

      <section class="card">
        <h2 class="h-github">☁️ GitHub & Remotes</h2>
        <div class="concept-box">
          A Remote Repository is the online version on GitHub's servers.
        </div>
        <div class="command-block cmd-setup">
          <div class="command-row">
            <span class="cmd">HOW DO I CLONE?</span>
            <span class="desc">Clone repo from GitHub (Download)</span>
          </div>
          <div class="command-row">
            <span class="cmd">HOW DO I UPDATE?</span>
            <span class="desc">Download & merge updates</span>
          </div>
        </div>
        <span class="warning"
          >⚠️ Never push secrets or node_modules! Use .gitignore</span
        >
      </section>

      <section class="card">
        <h2 class="h-undo">⏪ Safe Undoing</h2>
        <div class="concept-box">
          Fix mistakes without destroying history. Avoid dangerous resets for
          now!
        </div>
        <div class="command-block cmd-undo">
          <div class="command-row">
            <span class="cmd">git restore &lt;file&gt;</span>
            <span class="desc">Discard local changes (Unsaved)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git restore --staged &lt;file&gt;</span>
            <span class="desc">Unstage file (Keep changes)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git commit --amend</span>
            <span class="desc">Fix last commit message</span>
          </div>
          <div class="command-row">
            <span class="cmd">git reset --soft HEAD~1</span>
            <span class="desc">Undo commit, keep changes staged</span>
          </div>
        </div>
      </section>

      <section class="card">
        <h2 class="h-branch">🌿 Branching</h2>
        <div class="concept-box">
          Work on features in isolation without endangering the "main" trunk.
        </div>
        <div class="command-block cmd-branch">
          <div class="command-row">
            <span class="cmd">git branch</span>
            <span class="desc">List all local branches</span>
          </div>
          <div class="command-row">
            <span class="cmd">git switch -c &lt;name&gt;</span>
            <span class="desc">Create & switch to new branch</span>
          </div>
          <div class="command-row">
            <span class="cmd">git switch &lt;name&gt;</span>
            <span class="desc">Switch to existing branch</span>
          </div>
          <div class="command-row">
            <span class="cmd">git merge &lt;branch&gt;</span>
            <span class="desc">Merge branch into current one</span>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>Created By Your Name | Deployed via GitHub Pages</p>
    </footer>
  </body>
</html>
```

4. **Initialize Git**, commit the file, and create a repository on GitHub.
5. **Go to Settings > Pages** on GitHub and enable GitHub Pages (Source: `main` / `root`).
6. **Wait a few seconds** and visit the provided URL to see the live infographic!
7. Paste the link you copied here:
   ```
    your-github-username.github.io/your-repo-name/
   ```
8. Commit and push this file to complete this first phase of the exercise

---

### DO this part in your "git-cheatsheet" repository:

9. The infographic is not perfect yet. FOr example there is no information on how to clone a repository.
10. **Improve the infographic** by adding a new section for cloning repositories below the "GitHub & Remotes" section.
11. Commit and push your changes.
12. Refresh your GitHub Pages URL to see the updated infographic live online!
