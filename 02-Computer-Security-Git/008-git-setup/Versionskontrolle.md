# Einführung in die Versionskontrolle mit Git und GitHub

Weitere Informationen findest du in der [offiziellen GitHub-Dokumentation](https://docs.github.com/de/get-started/start-your-journey/about-github-and-git).

## Was wir behandeln werden:

- Grundlagen der Versionskontrolle

  - Prinzipien von Versionskontrollsystemen
  - Unterschiede zwischen zentralisierter und verteilter Versionskontrolle

- Einführung in Git und GitHub

  - Git-Einführung

    - Was ist Git?
    - Voraussetzungen und Installation von Git auf verschiedenen Betriebssystemen
    - Grundlegende Konfiguration von Git (user.name, user.email)

  - GitHub-Einführung

    - Was ist GitHub und warum solltest du es verwenden?
    - Erstellen eines GitHub-Kontos

  - Git mit GitHub verbinden

    - Einrichten von SSH-Schlüsseln für die sichere Kommunikation mit GitHub

      - Generieren von SSH-Schlüsseln
      - Hinzufügen von SSH-Schlüsseln zu deinem GitHub-Konto

  - Arbeiten mit persönlichen Repositories
    - Initialisierung eines neuen Git-Repositorys (git init)
    - Überprüfen des Status deines Repositorys (git status)
    - Hinzufügen von Änderungen zum Staging-Bereich (git add)
    - Committen von Änderungen in das Repository (git commit)
    - Speichern von Änderungen in einem Remote-Repository auf GitHub (git push)
    - Aufrufen der Git-Hilfe und Selbsthilfeoptionen

---

<br>

## Grundlagen der Versionskontrolle

- Stell dir vor, du arbeitest an einem Dokument und möchtest:
  - Änderungen, die du vornimmst, nachverfolgen
  - Bei Bedarf zu früheren Versionen zurückkehren
  - Andere einladen, mit dir zusammenzuarbeiten
  - Änderungen von anderen annehmen, ohne deine Arbeit zu überschreiben
- Versionskontrollsysteme (VCS) helfen dir, dies und mehr zu erreichen.

### Was ist Versionskontrolle?

- Ein System, das Änderungen an einer Datei oder einer Reihe von Dateien im Laufe der Zeit aufzeichnet.
- Stell es dir wie ein intelligentes Notizbuch vor, das jede von dir vorgenommene Änderung festhält.
- Ermöglicht es dir, zu früheren Versionen zurückzukehren, Änderungen zu vergleichen und mit anderen zusammenzuarbeiten.
- Ein Versionskontrollsystem verfolgt vier Hauptaspekte:
  - **WAS wurde geändert** (der Inhalt): _Zeile 5 in Dokument X wurde gelöscht, ein Absatz in Datei Y wurde geändert, Bild Z wurde hinzugefügt_
  - **WER hat die Änderung vorgenommen** (der Autor): _der Benutzername der Person, die die Änderung vorgenommen hat_
  - **WANN wurde die Änderung vorgenommen** (der Zeitstempel): _Datum und Uhrzeit der Änderung_
  - **WARUM wurde die Änderung vorgenommen** (die Commit-Nachricht): _eine kurze Beschreibung des Grundes für die Änderung, die vom Autor verfasst wurde_

#### Unterschiede zwischen zentralisierter und verteilter Versionskontrolle

- Es gibt zwei grundlegende Architekturen, die Versionskontrollsysteme haben können.
  - Zentralisiertes Versionskontrollsystem (CVCS)
  - Verteiltes Versionskontrollsystem (DVCS)
- Beide folgen den oben genannten Prinzipien, aber auf unterschiedliche Weise.

##### Zentralisiertes Versionskontrollsystem (CVCS)

- Stell dir eine Bibliothek mit einem einzigen, großen Bücherregal in der Mitte des Raumes vor
- das ist der **zentrale Server**.
- In diesem Regal befindet sich die **EINZIGE** Originalkopie der gesamten Projekthistorie.
- Wenn du an etwas arbeiten möchtest,
  - gehst du zu diesem Regal,
  - leihst dir eine Kopie der neuesten Version einer Datei aus (ein "Checkout").
  - und arbeitest an deiner Kopie an deinem Schreibtisch.
- Wenn du fertig bist,
  - gibst du die Datei zurück
  - reichst deine Änderungen ein ("commit").
  - Deine Änderungen werden direkt auf dem zentralen Server gespeichert.
- **Vorteile:**
  - Sehr einfach zu verstehen und zu verwalten.
  - Es gibt immer ein klares Verständnis davon, was die "offizielle" Version ist.
- **Nachteile:**

  - **Single Point of Failure:**
    - Wenn der zentrale Server ausfällt (z. B. Stromausfall, Festplattencrash), kann niemand arbeiten.
    - Niemand kann Commits durchführen, Versionen vergleichen oder Änderungen abrufen.
    - die gesamte Projekthistorie geht verloren.
  - **Online-Anforderung:**
    - Für fast alle Aktionen (Committen, Verlauf anzeigen, Branches erstellen) benötigst du eine Verbindung zum zentralen Server.
    - Offline-Arbeit (z. B. im Zug) ist sehr eingeschränkt.

- **Bekannte Beispiele:** Subversion (SVN), CVS, Perforce.

##### Verteiltes Versionskontrollsystem (DVCS)

- Stell dir nun ein anderes System vor.
- Anstelle einer zentralen Bibliothek gibt es einen Hauptserver, aber jeder Entwickler erhält beim Auschecken nicht nur die neueste Version, sondern eine **vollständige 1:1-Kopie der gesamten Bibliothek** für den eigenen Schreibtisch.
- Jeder Entwickler hat also die vollständige Projekthistorie lokal auf seinem eigenen Computer.
- Du arbeitest an deinem Projekt und machst Commits.
  - Diese Commits werden in deiner _lokalen_ Kopie des Repositorys gespeichert.
  - Du kannst Branches erstellen, den Verlauf anzeigen, Versionen vergleichen – alles blitzschnell und ohne Internetverbindung.
- Nur wenn du deine Arbeit mit anderen teilen möchtest, kannst du

  - dich mit dem Hauptserver verbinden und
  - deine Änderungen dorthin pushen ("push").
  - Um die Änderungen anderer zu erhalten, holst du sie vom Server ab ("pull").

- **Vorteile:**

  - **Kein Single Point of Failure:**
    - Wenn der Hauptserver ausfällt, ist das ärgerlich, aber nicht tragisch.
    - Jeder Entwickler hat eine vollständige Kopie der Projekthistorie auf seinem Computer.
    - Das Projekt kann einfach aus einer dieser Kopien wiederhergestellt werden.
  - **Hervorragende Offline-Fähigkeit:**
    - Du kannst im Flugzeug sitzen und Dutzende von Commits machen, neue Branches erstellen und deine gesamte Arbeit organisieren.
    - Erst wenn du wieder eine Verbindung hast, teilst du deine Arbeit.
  - **Geschwindigkeit:**
    - Da die meisten Operationen (Commit, Verlauf anzeigen) lokal stattfinden, sind sie extrem schnell.
    - Es gibt keine Netzwerkverzögerung.
  - **Flexibles Branching & Merging:**
    - Das Erstellen von Branches in einem DVCS ist extrem einfach und schnell, was experimentelle und parallele Entwicklungsworkflows stark fördert.

- **Nachteile:**

  - Die Lernkurve ist anfangs etwas steiler, da du die Unterscheidung zwischen dem lokalen und dem Remote-Repository verstehen musst (z. B. Konzepte wie Push & Pull).

- **Bekannte Beispiele:** **Git** (mit Abstand das beliebteste), Mercurial.

---

<br>

## Einführung in Git und GitHub

### Git-Einführung

- **Was ist Git?**
  - Git ist ein verteiltes Versionskontrollsystem (DVCS), das 2005 von Linus Torvalds entwickelt wurde.
  - Es ermöglicht mehreren Entwicklern, gleichzeitig am selben Projekt zu arbeiten, ohne die Änderungen der anderen zu überschreiben.
  - Git verfolgt Änderungen an Dateien, sodass du zu früheren Versionen zurückkehren, Änderungen vergleichen und effektiv zusammenarbeiten kannst.

#### Voraussetzungen und Installation von Git

- Git ist eine kostenlose und quelloffene(Open-source) Software.
- Es kann auf verschiedenen Betriebssystemen installiert werden, einschließlich Windows, macOS und Linux.
- Hier ist die offizielle Git-Website für Download- und Installationsanweisungen: [https://git-scm.com/install/](https://git-scm.com/install/)

- **Installation von Git unter Linux:([Link zur offiziellen Git-Installationsseite](https://git-scm.com/install/linux))**
  - Öffne dein Terminal (Strg + Alt + T)
  - Überprüfe, ob du Git installiert hast mit:
    ```bash
    git --version
    ```
- Wenn Git nicht installiert ist, kannst du es mit deinem Paketmanager installieren.
  - Aktualisiere und upgrade nun deine Paketlisten:
    ```bash
    sudo apt update
    sudo apt upgrade
    ```
- Installiere dann Git mit:
  ```bash
  sudo apt-get install git
  ```
- **Installation von Git unter Windows:**
  - Lade den Git- (und Git Bash-) Installer von [https://gitforwindows.org/](https://gitforwindows.org/) herunter.
  - Führe den Installer aus und folge den Einrichtungsanweisungen.

#### Grundlegende Konfiguration von Git

- Nach der Installation von Git ist es wichtig, deine Benutzerinformationen zu konfigurieren (Das WER, das die Versionskontrolle benötigt).
- Diese Informationen werden mit deinen Commits (dem WARUM-Teil) verknüpft.
- Dies ist eine **EINMALIGE Einrichtung**, wenn du Git zum ersten Mal auf einem neuen Computer installierst.
- Du musst **DIESELBE E-MAIL-ADRESSE** angeben, die du für dein GitHub-Konto verwendest.
- Öffne dein Terminal (oder Git Bash unter Windows) und führe die folgenden Befehle aus:
  ```bash
  git config --global user.name "Dein Name"
  git config --global user.email "deine.email@example.com"
  ```
- Du kannst deine Konfiguration überprüfen mit:
  ```bash
  git config --list
  ```
- Falls erforderlich, setze deinen Standard-Branch-Namen auf "main":
  ```bash
  git config --global init.defaultBranch main
  ```
  - Dies stellt sicher, dass neue von dir erstellte Repositories "main" als Standard-Branch-Namen anstelle von "master" verwenden.
  - Diese Änderung wurde vorgenommen, um eine inklusive Sprache in der Softwareentwicklung zu fördern.
  - Viele Plattformen, einschließlich GitHub, haben "main" als Standard-Branch-Namen für neue Repositories übernommen.
- Überprüfe deine Konfiguration erneut mit:
  ```bash
  git config --list
  ```
- Du solltest deinen Benutzernamen und deine E-Mail-Adresse in den Konfigurationseinstellungen sehen. Meine sieht zum Beispiel so aus:
  ```txt
  user.email=meineprivate@gmail.com
  user.name=Ndimofor
  init.defaultbranch=main
  ```

---

<br>

### GitHub-Einführung

- **Was ist GitHub und warum solltest du es verwenden?**
  - GitHub ist eine cloudbasierte Plattform, auf der du
    - Code oder andere textbasierte Dateien mit Git speichern,
    - teilen,
    - und gemeinsam mit anderen daran arbeiten kannst.
  - Es bietet eine Weboberfläche für Git-Repositories, die die Verwaltung und Zusammenarbeit bei Projekten erleichtert.
  - GitHub bietet zusätzliche Funktionen wie Issue-Tracking, Projektmanagement-Tools und Integrationen mit anderen Diensten.
  - Stell es dir wie einen Speicherort für deinen Code, Markdown-Dateien und andere projektbezogene Dokumente vor, auf die du von überall zugreifen und sie mit anderen teilen kannst.

#### Erstellen eines GitHub-Kontos

- Um GitHub zu nutzen, musst du ein Konto erstellen.
- BITTE VERWENDE DEINE PERSÖNLICHE E-MAIL-ADRESSE DAFÜR!
- Öffne deinen persönlichen E-Mail-Posteingang in einem neuen Tab, um dein Konto später zu verifizieren.
- Stelle sicher, dass du dir deinen Benutzernamen und dein Passwort merkst.
- [Folge diesem Link, um dich anzumelden](https://github.com/)

---

<br>

### Git mit GitHub verbinden

- **Wie Git und GitHub zusammenarbeiten**
  - Git verfolgt Änderungen an deinen Dateien lokal auf deinem Computer (dein _lokales_ Repository).
  - GitHub ist die Online-Plattform, auf der du dieses Git-Repository speichern kannst (dein _Remote-Repository_).
  - Wenn du Dateien auf GitHub hochlädst, speicherst du sie in einem "Git-Repository".
  - Wenn du lokal Änderungen an deinen Dateien vornimmst, kannst du Git verwenden, um diese Änderungen zu verfolgen.
  - Um dein Remote-Repository auf GitHub mit deinen lokalen Änderungen zu aktualisieren, "pushst" du diese Änderungen auf GitHub.
  - Für all dies musst du eine sichere Verbindung zwischen deiner lokalen Git-Installation und deinem GitHub-Konto einrichten.
  - Wir werden dies mit SSH-Schlüsseln tun.
