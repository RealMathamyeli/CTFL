# Arbeiten mit GitHub Remote-Repositories

- Ziel:
  - Lerne, wie du bestehende GitHub-Repositories auf deinen lokalen Rechner klonst.
  - Verstehe, wie du mit geklonten Repositories arbeitest.
- Voraussetzungen:

  - Grundlegendes Verständnis von Git und Versionskontrollkonzepten.
  - Gutes Verständnis der Inhalte aus "17Dez-github-repositories".

- Was wir behandeln werden:
  - Was bedeutet es, ein Repository zu klonen?
  - Klonen unseres Klassen-GitHub-Repositorys auf deinen lokalen Rechner.
  - Klonen und Einreichen eines Übungs-Repositorys über GitHub Classroom.

---

<br>

## Was bedeutet es, ein Repository zu klonen?

- Es gibt viele Möglichkeiten, ein GitHub-Repository auf deinen lokalen Rechner zu bekommen.
- Eine gängige Methode ist das `Klonen`.
- Das Klonen eines Repositorys bedeutet, `eine lokale Kopie eines auf GitHub gehosteten Remote-Repositorys` zu erstellen.
- Wenn du ein Repository klonst, erhältst du
  - alle Dateien,
  - die gesamte Commit-Historie,
  - und alle Branches aus dem Remote-Repository.
- Wenn das Remote-Repository aktualisiert wird, kannst du die neuesten Änderungen erhalten, indem du sie mit `git pull` in deine lokale Kopie ziehst.

### Andere Möglichkeiten, ein Repository lokal zu erhalten

- **Als ZIP herunterladen**
  - Du kannst ein Repository auch als `ZIP-Datei` von GitHub herunterladen.
  - Verwende diese Methode, wenn du nur die Dateien haben möchtest und nicht vorhast, Änderungen in das Repository zu pushen.
  - Zum Beispiel, wenn du ein Tutorial auf YouTube siehst und nur die Codedateien haben möchtest.
- **Forking**
  - Forking ist eine weitere Möglichkeit, eine Kopie eines Repositorys in deinem eigenen GitHub-Konto zu erstellen.
  - Dies ist nützlich, wenn du zu einem Projekt von jemand anderem beitragen möchtest.
  - Nach dem Forken kannst du dein geforktes Repository auf deinen lokalen Rechner klonen.

---

- Der Hauptunterschied zwischen Klonen und Forken besteht darin, dass das Klonen `eine lokale Kopie des Repositorys` erstellt, während das Forken `eine Remote-Kopie direkt in deinem GitHub-Konto` erstellt, die du dann auf deinen lokalen Rechner klonen musst, wenn du lokal daran arbeiten möchtest.

---

### Zu einem geklonten Repository beitragen

- Du kannst Änderungen nur dann in ein geklontes Repository pushen, wenn du die erforderlichen Berechtigungen hast.
- Wenn du ein Repository geklont hast, das dir nicht gehört und für das du keinen Schreibzugriff hast, kannst du keine Änderungen direkt pushen.
- Unser Klassen-Repository ist ein Beispiel dafür.
- Andererseits, wenn du dein eigenes Repository oder ein Repository geklont hast, für das du Schreibzugriff hast, kannst du Änderungen nach Bedarf pushen.
- Beispiele:
  - Klonen deines eigenen Projekt-Repositorys, um auf einem anderen Rechner lokal daran zu arbeiten oder wenn du vielleicht die ursprüngliche lokale Kopie gelöscht hast.
  - Klonen eines Übungs-Repositorys von GitHub Classroom, um Aufgaben zu erledigen und einzureichen.

---

## Klonen unseres Klassen-GitHub-Repositorys auf deinen lokalen Rechner

- Dies ist der Link zu unserem Klassen-Repository: [CTF-Unterricht](https://github.com/dci-fbw-ctf25-d02/ctf-unterricht)
- Um das Repository zu klonen, befolge diese Schritte:
  - Öffne dein Terminal oder deine Kommandozeile.
  - Navigiere zu dem Verzeichnis, in das du das Repository klonen möchtest.
  - Führe den folgenden Befehl aus:
    ```bash
    git clone git@github.com:dci-fbw-ctf25-d02/ctf-unterricht.git
    ```
  - Dies erstellt eine lokale Kopie des Repositorys in einem Ordner namens `ctf-unterricht`.
- Navigiere nach dem Klonen in das geklonte Repository:
  ```bash
  cd ctf-unterricht
  ```
- Du wirst alle vom Lehrer erstellten Dateien sehen.
- MACHE NIEMALS ÄNDERUNGEN DIREKT IN DIESEM REPOSITORY!
- Wenn du Änderungen vornehmen möchtest, kopiere bitte die Dateien in dein eigenes Repository oder lokales Verzeichnis!

### Was du beachten solltest

- KLONE NIEMALS EIN REPOSITORY IN EIN ANDERES REPOSITORY!
- Klone Repositories immer in separate Verzeichnisse, um verschachtelte Git-Repositories zu vermeiden, die zu Verwirrung und Komplikationen bei der Verwaltung der Versionskontrolle führen können.

---

## Klonen und Einreichen eines Übungs-Repositorys über GitHub Classroom

- GitHub Classroom ist ein Tool, das Lehrern hilft, Programmieraufgaben zu verwalten.
- Wenn dir ein Übungs-Repository über GitHub Classroom zugewiesen wird, erhältst du einen Link zum Klonen des Repositorys.
- Befolge diese Schritte, um ein Übungs-Repository zu klonen und deine Arbeit einzureichen:
  - Klicke auf den Link, den du von GitHub Classroom erhalten hast.
  - Dies führt dich zu deinem persönlichen Übungs-Repository auf GitHub.
  - Klicke auf die grüne Schaltfläche `Code` und kopiere die SSH-URL.
  - Öffne dein Terminal oder deine Kommandozeile.
  - Navigiere zu dem Verzeichnis, in das du das Repository klonen möchtest.
  - Führe den folgenden Befehl aus:
    ```bash
    git clone <SSH-URL>
    ```
  - Ersetze `<SSH-URL>` durch die URL, die du kopiert hast.
  - Navigiere nach dem Klonen in das geklonte Repository:
    ```bash
    cd <repository-name>
    ```
  - Ersetze `<repository-name>` durch den Namen des geklonten Repositorys.
- Jetzt kannst du die Aufgaben im Repository bearbeiten.
  - Die Aufgaben oder Anweisungen werden normalerweise in einer README-Datei oder anderer Dokumentation im Repository bereitgestellt.
- Nachdem du deine Änderungen vorgenommen hast, kannst du sie mit den folgenden Befehlen einreichen:

  ```bash
  git add .
  git commit -m "Meine Lösungen für die Übung"
  git push origin main
  ```

- Deine Arbeit wird jetzt in dein Übungs-Repository auf GitHub eingereicht.
