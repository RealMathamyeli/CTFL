# Arbeiten mit GitHub-Repositories

- Ziel:
  - Lerne die grundlegenden Git-Befehle, um persönliche Repositories zu erstellen und zu verwalten.
  - Verstehe, wie du Änderungen zu einem Git-Repository hinzufügst, committest und pushst.
- Voraussetzungen:
  - Grundlegendes Verständnis von Versionskontrollkonzepten.
  - Git ist auf deinem lokalen Rechner installiert.
  - Ein GitHub-Konto, das über SSH-Schlüssel mit deiner lokalen Git-Konfiguration verbunden ist.
  - Du musst `in VS Code bei GitHub angemeldet sein`.
- Was wir behandeln werden:
  - Was ist ein GitHub-Repository?
  - Verschiedene Arten von GitHub-Repositories (lokal vs. remote).
  - Erstellen eines neuen Git-Repositorys lokal (auf deinem Rechner).
  - Committen und Pushen von Änderungen nach GitHub.
  - Pushen von Änderungen in ein Remote-Repository (GitHub).
  - Sichtbarkeitseinstellungen für Repositories (privat vs. öffentlich).
  - Wichtige Git-Befehle im Überblick.
  - Best Practices für die Repository-Verwaltung.

---

## Was ist ein GitHub-Repository?

- Ein GitHub-Repository ist das grundlegendste Element von GitHub.
- Es ist ein Ort, an dem du deinen `Code`, deine `Dateien`, deren Revisionsverlauf speichern und mit anderen zusammenarbeiten kannst.
- Es wird wie ein Verzeichnis(directory) auf den Servern von GitHub gespeichert.
- Repositories können entweder `öffentlich` (Public) (jeder kann sie sehen) oder `privat` (Private)(nur du und von dir ausgewählte Personen können sie sehen) sein.
- Lies mehr über Repositories in den [GitHub Docs](https://docs.github.com/de/repositories/creating-and-managing-repositories/about-repositories).

### Arten von GitHub-Repositories

- Es gibt zwei Haupttypen von GitHub-Repositories:
  - **Lokales Repository**:
    - existiert auf deinem lokalen Rechner.
    - Hier kannst du Dateien erstellen, ändern und verwalten, bevor du sie in ein Remote-Repository pushst.
  - **Remote-Repository**:
    - ist das Online-Repository, das auf den Servern von GitHub gehostet wird.
    - Es ermöglicht dir, deinen Code zu speichern und bei Bedarf mit anderen zu teilen.

### Ein neues Git-Repository erstellen

- Es gibt zwei Ansätze, um ein neues Git-Repository zu erstellen:
  - **Remote-first-Ansatz:**
    - Erstelle zuerst ein neues Repository auf GitHub.
    - Klone es mit folgendem Befehl auf deinen lokalen Rechner:
      ```bash
      git clone <repository-url>
      ```
  - **Local-first-Ansatz:**
    - Erstelle ein neues Verzeichnis (Was war nochmal ein Verzeichnis?) auf deinem lokalen Rechner.
    - Initialisiere es als Git-Repository mit:
      ```bash
      git init
      ```
    - mache deine Änderungen und pushe sie dann nach GitHub.

#### Ein neues Git-Repository lokal erstellen (Local-first-Ansatz)

- Wir konzentrieren uns auf den Local-first-Ansatz.
- Dieser erfordert den folgenden Befehl:
  - `git init`: Initialisiert ein neues Git-Repository.

### Änderungen committen und pushen

- Sobald du ein lokales Repository eingerichtet hast, kannst du anfangen, Dateien hinzuzufügen, Änderungen zu committen und sie in ein Remote-Repository auf GitHub zu pushen.
- Die grundlegenden Befehle sind:
  - `git add <datei(en)>`: Staged Dateien für den Commit.
  - `git commit -m "commit-nachricht"`: Committet die gestageten Dateien mit einer Nachricht.
  - `git push -u origin main`: Pusht die committeten Änderungen in das Remote-Repository.

#### Schritt-für-Schritt-Anleitung zum Erstellen eines lokalen Repositorys (in VS Code):

- Verwende VS Code, um die Änderungen visuell zu sehen.
- Stelle sicher, dass du dich in VS Code bei GitHub anmeldest.
- Befolge diese Schritte:

1. Öffne dein gewünschtes Verzeichnis in VS Code (`es sollte mindestens eine Markdown-Datei enthalten`. Dies liegt daran, dass Git keine leeren Verzeichnisse verfolgt).
2. Öffne das Terminal in VS Code (`Strg + J`)
3. Initialisiere ein neues Git-Repository **`(tue dies nur einmal pro Projekt)`**:
   ```bash
   git init
   ```
   - Dies erstellt einen `.git`-Ordner in deinem Projektverzeichnis.
   - Du wirst sehen, dass alle Dateien jetzt grün mit einem U-Symbol (untracked/unverfolgt) im Source Control-Tab sind.
   - Das bedeutet, dass Git diese Dateien verfolgt, sie aber noch nicht für den Commit gestaged sind.
4. Stage die Dateien für den Commit:
   ```bash
   git add .
   ```
   - Der `.` nach `git add` bedeutet `BITTE ALLE DATEIEN HINZUFÜGEN` im aktuellen Verzeichnis.
   - Die `U`-Symbole ändern sich zu `A` (added/hinzugefügt) im Source Control-Tab.
   - Optional kannst du bestimmte Dateien stagen, indem du `.` durch den Dateinamen ersetzt. Wenn du zum Beispiel nur `README.md` stagen möchtest, würdest du ausführen:
     ```bash
     git add README.md
     ```
5. Committe die gestageten Dateien mit einer Nachricht:
   ```bash
   git commit -m "Initial commit"
   ```
   - Das `-m`-Flag ermöglicht es dir, eine Commit-Nachricht zu deinen Änderungen hinzuzufügen.
6. An diesem Punkt verwenden wir den `Source Control`-Tab in VS Code, um eine Verbindung zu einem Remote-Repository auf GitHub herzustellen.
   - Klicke auf den `Publish to GitHub`-Button.
   - Gib im Suchfeld den Namen deines neuen Repositorys ein (falls erforderlich).
   - Wähle die Sichtbarkeit deines Repositorys (öffentlich oder privat).
   - Klicke auf `Publish Repository`.
   - VS Code fügt automatisch die Remote-URL hinzu und pusht deine Änderungen.
7. Überprüfe, ob deine Änderungen nach GitHub gepusht wurden, indem du dein Repository auf der GitHub-Website besuchst.

##### Dinge, auf die du achten solltest:

- Stelle sicher, dass dein Verzeichnisname in Kleinbuchstaben ist und, wenn er mehrere Wörter enthält, Bindestriche (`-`) zur Trennung verwendet. Zum Beispiel: `mein-git-repo`.
  - Dies ist eine gängige Konvention für Repository-Namen auf GitHub,
  - und während des Veröffentlichungsschritts verwendet VS Code standardmäßig den Verzeichnisnamen als Repository-Namen.
- Pushe NIEMALS Standard-Systemverzeichnisse wie:
  - Eigene Dokumente
  - Desktop
  - Downloads
- Erstelle NIEMALS ein Repository innerhalb eines Repositorys.
  - Dies führt zu Verwirrung und Komplikationen bei der Versionskontrolle.
  - Erstelle immer separate Repositories für verschiedene Projekte.
- Pushe NIEMALS sensible Informationen nach GitHub (auch nicht in privaten Repositories) wie:
  - Passwörter
  - API-Schlüssel
  - Persönliche Daten

### Wichtige Git-Befehle im Überblick

- Hier sind einige grundlegende Git-Befehle im Zusammenhang mit der Arbeit mit lokalen Repositories:
  - `git init`: Initialisiert ein neues Git-Repository (tue dies nur einmal pro Projekt).
  - `git status`: Zeigt den Status deines Arbeitsverzeichnisses und des Staging-Bereichs an. Dies hilft dir zu sehen, welche Änderungen gestaged wurden, welche nicht und welche Dateien von Git nicht verfolgt werden.
  - `git add <datei(en)>`: Staged Dateien für den Commit. Du kannst `git add .` verwenden, um alle Änderungen im aktuellen Verzeichnis zu stagen.
  - `git commit -m "commit-nachricht"`: Committet die gestageten Dateien mit einer beschreibenden Nachricht.
  - `git push`: Pusht die committeten Änderungen in das Remote-Repository auf GitHub.
  - `git log`: Zeigt den Commit-Verlauf für das Repository an.

### Best Practices für die Repository-Verwaltung

- Füge eine aussagekräftige `README.md`-Datei zu deinem Repository hinzu, um dessen Zweck und Verwendung zu erklären.
  - Diese wird von GitHub automatisch erkannt und auf der Hauptseite deines Repositorys angezeigt.
- Verwende `.gitignore`-Dateien, um Dateien und Verzeichnisse auszuschließen, die du `nicht mit Git verfolgen` möchtest.
  - Dies geschieht durch Erstellen einer Datei namens `.gitignore` im Stammverzeichnis deines Repositorys
  - und Hinzufügen der Namen oder Muster von zu ignorierenden Dateien/Verzeichnissen.
  - Um beispielsweise alle `node_modules`-Verzeichnisse zu ignorieren, würdest du hinzufügen:
    ```
    node_modules/
    ```
  - Um eine bestimmte Datei zu `.gitignore` hinzuzufügen, füge einfach ihren Namen zur Datei hinzu. Um beispielsweise eine Datei namens `geheim.md` zu ignorieren, würdest du hinzufügen:
    ```
    geheim.md
    ```

## Zusammenfassung

- Ein GitHub-Repository ist ein Ort, an dem du deinen Code und deine Dateien speichern kannst, entweder öffentlich oder privat.
- Du kannst ein lokales Repository auf deinem Rechner mit `git init` erstellen und es dann nach GitHub pushen.
- Wichtige Git-Befehle sind `git add`, `git commit` und `git push`.
- Befolge immer Best Practices wie das Hinzufügen einer `README.md` und die Verwendung von `.gitignore`-Dateien, um dein Repository effektiv zu verwalten.
- Pushe NIEMALS sensible Informationen nach GitHub.
- Pushe NIEMALS Standard-Systemverzeichnisse wie Eigene Dokumente, Desktop, Downloads.
- Erstelle NIEMALS ein Repository innerhalb eines Repositorys!!!!!!
