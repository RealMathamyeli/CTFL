# Anleitung für die Übung:

1. **Erstelle einen Ordner** namens `git-cheatsheet` auf deinem Computer.
2. **Erstelle darin eine Datei** namens `index.html`.
3. **Füge den untenstehenden Code** in die `index.html` ein und speichere sie.

---

```html
<!DOCTYPE html>
<html lang="de">
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
      <h1>Git & GitHub Spickzettel</h1>
      <p class="subtitle">Dein magisches Notizbuch für die Versionskontrolle</p>
    </header>

    <main class="container">
      <section class="card section-setup">
        <h2 class="h-setup">🛠️ Ersteinrichtung (Einmalig)</h2>
        <div class="concept-box">
          Konfiguriere dies einmal pro Computer, um dich zu identifizieren. Das
          ist das "WER" in der Versionshistorie.
        </div>
        <div class="command-block cmd-setup">
          <div class="command-row">
            <span class="cmd">git --version</span>
            <span class="desc">Prüfen, ob Git installiert ist</span>
          </div>
          <div class="command-row">
            <span class="cmd"> sudo apt-get install git</span>
            <span class="desc">Git installieren (Linux System)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git config --global user.name "Name"</span>
            <span class="desc">Deinen Benutzernamen setzen</span>
          </div>
          <div class="command-row">
            <span class="cmd"
              >git config --global user.email "mail@ex.com"</span
            >
            <span class="desc"
              >E-Mail setzen (muss mit GitHub übereinstimmen!)</span
            >
          </div>
          <div class="command-row">
            <span class="cmd">git config --global init.defaultBranch main</span>
            <span class="desc">Standard-Branch auf "main" setzen</span>
          </div>
          <div class="command-row">
            <span class="cmd">ssh-keygen -t ed25519 -C "mail@ex.com"</span>
            <span class="desc">SSH-Schlüssel generieren</span>
          </div>
          <div class="command-row">
            <span class="cmd">eval "$(ssh-agent -s)"</span>
            <span class="desc">SSH-Agent starten</span>
          </div>
          <div class="command-row">
            <span class="cmd">ssh-add ~/.ssh/id_ed25519</span>
            <span class="desc">SSH-Schlüssel zum Agent hinzufügen</span>
          </div>
          <div class="command-row">
            <span class="cmd">cat ~/.ssh/id_ed25519.pub</span>
            <span class="desc">SSH-Schlüssel anzeigen (Zum Kopieren)</span>
          </div>
          <div class="command-row">
            <span class="cmd"
              >Kopiere den SSH-Schlüssel(ohne leeren Platz nach dem Ende ".com")
              und füge ihn in GitHub ein</span
            >
            <span class="desc">SSH-Schlüssel zu GitHub hinzufügen</span>
          </div>
          <div class="command-row">
            <span class="cmd">ssh -T git@github.com</span>
            <span class="desc">SSH-Verbindung zu GitHub testen</span>
          </div>
        </div>
      </section>

      <section class="card">
        <h2 class="h-workflow">🔄 Der tägliche Workflow</h2>
        <div class="concept-box">
          Denk an die 3 Zonen: Arbeitsverzeichnis (Laden) &rarr; Staging Area
          (Einkaufswagen) &rarr; Repository (Kühlschrank).
        </div>
        <div class="command-block cmd-workflow">
          <div class="command-row">
            <span class="cmd">git init</span>
            <span class="desc">Neues Repo starten (.git Ordner erstellen)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git status</span>
            <span class="desc">Prüfen, was sich geändert hat</span>
          </div>
          <div class="command-row">
            <span class="cmd">git add &lt;datei&gt;</span>
            <span class="desc"
              >Um nur eine bestimmte Datei vorzumerken (In den
              Einkaufswagen)</span
            >
          </div>
          <div class="command-row">
            <span class="cmd">git add .</span>
            <span class="desc"
              >Um ALLE Änderungen vorzumerken (In den Einkaufswagen)</span
            >
          </div>
          <div class="command-row">
            <span class="cmd">git commit -m "Nachricht"</span>
            <span class="desc">Schnappschuss speichern (Zur Kasse)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git remote add origin &lt;url&gt;</span>
            <span class="desc"
              >Um das lokale Repo mit GitHub zu verbinden (URL des Remote-Repos
              - nur bei Erstverbindung).</span
            >
          </div>
          <div class="command-row">
            <span class="cmd">git push -u origin main</span>
            <span class="desc">Auf GitHub hochladen (Erstes Mal)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git push</span>
            <span class="desc"
              >Änderungen hochladen (Nach Erstverbindung und Erstes push
              -u)</span
            >
          </div>
        </div>
      </section>

      <section class="card">
        <h2 class="h-github">☁️ GitHub & Remotes</h2>
        <div class="concept-box">
          Ein Remote Repository ist die Online-Version auf den Servern von
          GitHub.
        </div>
        <div class="command-block cmd-setup">
          <div class="command-row">
            <span class="cmd">WIE KANN ICH KLONEN?</span>
            <span class="desc">Repo von GitHub klonen (Herunterladen)</span>
          </div>
          <div class="command-row">
            <span class="cmd">WIE KANN ICH UPDATEN?</span>
            <span class="desc">Updates herunterladen & zusammenführen</span>
          </div>
        </div>
        <span class="warning"
          >⚠️ Niemals Geheimnisse oder node_modules pushen! Nutze
          .gitignore</span
        >
      </section>

      <section class="card">
        <h2 class="h-undo">⏪ Sicheres Rückgängigmachen</h2>
        <div class="concept-box">
          Fehler beheben, ohne die Historie zu zerstören. Vermeide vorerst
          gefährliche Resets!
        </div>
        <div class="command-block cmd-undo">
          <div class="command-row">
            <span class="cmd">git restore &lt;datei&gt;</span>
            <span class="desc"
              >Lokale Änderungen verwerfen (Ungespeichert)</span
            >
          </div>
          <div class="command-row">
            <span class="cmd">git restore --staged &lt;datei&gt;</span>
            <span class="desc">Vormerkung aufheben (Änderungen behalten)</span>
          </div>
          <div class="command-row">
            <span class="cmd">git commit --amend</span>
            <span class="desc">Letzte Commit-Nachricht korrigieren</span>
          </div>
          <div class="command-row">
            <span class="cmd">git reset --soft HEAD~1</span>
            <span class="desc"
              >Commit rückgängig, Änderungen bleiben gestaged</span
            >
          </div>
        </div>
      </section>

      <section class="card">
        <h2 class="h-branch">🌿 Branching</h2>
        <div class="concept-box">
          Isoliert an Features arbeiten, ohne den "main"-Stamm zu gefährden.
        </div>
        <div class="command-block cmd-branch">
          <div class="command-row">
            <span class="cmd">git branch</span>
            <span class="desc">Alle lokalen Branches auflisten</span>
          </div>
          <div class="command-row">
            <span class="cmd">git switch -c &lt;name&gt;</span>
            <span class="desc">Neuen Branch erstellen & wechseln</span>
          </div>
          <div class="command-row">
            <span class="cmd">git switch &lt;name&gt;</span>
            <span class="desc">Zu existierendem Branch wechseln</span>
          </div>
          <div class="command-row">
            <span class="cmd">git merge &lt;branch&gt;</span>
            <span class="desc">Branch in den aktuellen integrieren</span>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>Erstellt von Dein Name | Bereitgestellt über GitHub Pages</p>
    </footer>
  </body>
</html>
```

4. **Initialisiere Git**, committe die Datei und erstelle ein öffentliches Repository auf GitHub.
5. **Gehe zu Settings > Pages** auf GitHub und aktiviere GitHub Pages (Source: `main` / `root`).
6. **Warte ein paar Sekunden** und besuche die bereitgestellte URL, um deinen Spickzettel live zu sehen!
7. Füge den Link die du gerade kopiert hast hier ein:
   ```
   dein-github-benutzername.github.io/dein-repo-name/
   ```
8. Comitte und pushe diese Datei, um die Übung abzuschließen

---

### MACHE diesen Teil in deinem "git-cheatsheet" Repository:

9. Die Infografik ist noch nicht perfekt. Zum Beispiel gibt es keine Informationen zum Klonen eines Repositories.
10. **Verbessere die Infografik**, indem du einen neuen Abschnitt für das Klonen von Repositories unter dem Abschnitt "GitHub & Remotes" hinzufügst.
11. Comitte und pushe deine Änderungen.
12. Aktualisiere deine GitHub Pages URL, um die aktualisierte Infografik live online zu sehen!
