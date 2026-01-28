✨ Individual Learning Phase (ILP) – Dein Weg zur Shell-Meisterschaft

Willkommen in deiner Individual Learning Phase! Dies ist nicht nur eine Aneinanderkette von Aufgaben, sondern eine sorgfältig kuratierte Reise, die dich tief in das Herz des Linux-Betriebssystems führt: die Shell. Hier hast du die einzigartige Gelegenheit, dein Wissen zu festigen, deine Fähigkeiten zu verfeinern und ein intuitives Verständnis für die mächtige Kommandozeile zu entwickeln. Betrachte diese Phase als dein persönliches Labor, in dem du experimentieren, entdecken und lernen kannst, ohne Druck, aber mit klarem Fokus auf deine Entwicklung. Die folgenden Aufgaben sind so konzipiert, dass sie dich herausfordern, vernetztes Denken anregen und dich befähigen, typische Alltagsprobleme elegant und effizient zu lösen. Tauche ein, experimentiere mutig und werde zum souveränen Meister deiner Kommandozeile!

---

## 🌎 Aufgabe 1: Die Tiefen des Dateisystems erkunden (ca. 45 Minuten)

In dieser Aufgabe wirst du deine Navigationsfähigkeiten auf die Probe stellen und tiefer in die Struktur von Verzeichnissen und Dateien eintauchen. Du wirst eine komplexe Dateistruktur erstellen und anschließend verschiedene Befehle nutzen, um dich darin zu bewegen und Informationen zu extrahieren.

### 1.1 Vorbereitung: Eine komplexe Struktur anlegen

Erstelle in deinem Home-Verzeichnis einen neuen Ordner namens `ProjektX`. Innerhalb dieses Ordners lege eine Struktur an, die mindestens drei verschachtelte Verzeichnisebenen enthält (z.B. `docs/reports/Q4`). Erstelle in verschiedenen Verzeichnissen des `ProjektX` Ordners mindestens fünf unterschiedliche Dateien mit Namen wie `readme.txt`, `config.ini`, `data_log.txt`, `secret_note.md`, `backup.tar.gz`. Fülle mindestens zwei dieser Textdateien mit ein paar Zeilen Beispieltext.

### 1.2 Navigation und Inspektion

*   Navigiere vom Wurzelverzeichnis deines `ProjektX` Ordners aus mit **relativen Pfaden** zu dem am tiefsten verschachtelten Verzeichnis. Kehre anschließend mit einem einzigen Befehl zum `ProjektX` Wurzelverzeichnis zurück.
*   Zeige den Inhalt deines gesamten `ProjektX` Ordners inklusive aller Unterverzeichnisse und deren Dateien in einer übersichtlichen, rekursiven Liste an. Achte darauf, dass auch versteckte Dateien (falls vorhanden) angezeigt werden würden.
    ls -laR ProjektX/
*   Finde die Datei `data_log.txt` und zeige ihren Inhalt auf der Kommandozeile an, sodass du bis an das Ende der Datei scrollen kannst, aber auch die Möglichkeit hast, darin zu suchen.
        find . -name "data_log.txt"
        less data_log.txt
*   Identifiziere, in welchem Unterverzeichnis die Datei `secret_note.md` liegt, ohne den gesamten Ordnerinhalt rekursiv anzuzeigen. Zeige anschließend nur die ersten 5 Zeilen dieser Datei an.
        head -n 5 $(find . -name "secret_note.md")

---

## 🛠️ Aufgabe 2: Projektverwaltung und Zugriffskontrolle (ca. 45 Minuten)

Du übernimmst die Verwaltung eines kleinen Softwareprojekts. Deine Aufgabe ist es, die Projektstruktur zu organisieren, Dateien zu manipulieren und sicherzustellen, dass die Zugriffsrechte korrekt eingestellt sind.

### 2.1 Projektstruktur aufbauen und verwalten

*   Erstelle in deinem `ProjektX` Ordner (aus Aufgabe 1) einen neuen Unterordner namens `entwicklung`.
*   Innerhalb von `entwicklung` sollen die Verzeichnisse `frontend`, `backend` und `tests` angelegt werden.
*   Lege im `frontend`-Ordner eine leere Datei namens `index.html` an und im `backend`-Ordner eine leere Datei namens `server.js`.
*   Verschiebe die zuvor erstellte `config.ini` aus dem `ProjektX` Wurzelverzeichnis in den `entwicklung/backend` Ordner.
*   Kopiere die `readme.txt` aus dem `ProjektX` Wurzelverzeichnis in alle drei Unterordner (`frontend`, `backend`, `tests`) von `entwicklung`. Benenne die Kopie in `README.md` um, sobald sie im Zielordner ist.
*   Erstelle einen temporären Ordner namens `temp_assets` im `frontend`-Verzeichnis und verschiebe die `index.html` dorthin. Benenne `temp_assets` anschließend in `assets` um.
*   Lösche das Verzeichnis `tests` samt der darin befindlichen `README.md`.

### 2.2 Dateirechte festlegen

*   Setze die Berechtigungen für die Datei `server.js` so, dass sie nur vom Eigentümer gelesen, geschrieben und ausgeführt werden kann. Die Gruppe und andere Benutzer sollen keinerlei Rechte haben.
*   Ändere die Berechtigungen der Datei `README.md` im `frontend`-Ordner so, dass der Eigentümer Lese- und Schreibrechte hat, die Gruppe nur Leserechte und andere Benutzer keinerlei Rechte.
*   Überprüfe alle Änderungen der Dateirechte mit dem passenden Befehl.

---

## 📝 Aufgabe 3: Konfigurationsdateien mit Nano pflegen (ca. 30 Minuten)

Die Wartung von Konfigurationsdateien ist eine Kernkompetenz auf der Kommandozeile. Du wirst den Texteditor `nano` verwenden, um eine Beispielkonfigurationsdatei zu bearbeiten und spezifische Anpassungen vorzunehmen.

### 3.1 Eine Konfigurationsdatei erstellen

*   Erstelle in deinem `ProjektX` Ordner eine neue Datei namens `application_settings.conf`.
*   Füge dieser Datei folgenden Inhalt hinzu (Du kannst `nano` direkt dafür verwenden):

```
[General]
ApplicationName=MyAwesomeApp
Version=1.0.0
Environment=Development
DebugMode=false

[Database]
Type=PostgreSQL
Host=localhost
Port=5432
User=admin
Password=secure_password

[Logging]
Level=INFO
LogFilePath=/var/log/myawesomeapp/app.log
```

### 3.2 Anpassungen mit Nano

*   Öffne `application_settings.conf` mit `nano`.
*   Ändere den Wert von `DebugMode` von `false` auf `true`.
*   Finde die Zeile, die mit `Environment=` beginnt, und ändere ihren Wert von `Development` auf `Production`.
*   Füge unterhalb der `[Database]`-Sektion eine neue Zeile `MaxConnections=50` hinzu.
*   Suche nach "LogFilePath" und ändere den Pfad so, dass er auf ein relatives Verzeichnis in deinem `ProjektX` Ordner zeigt (z.B. `./logs/myawesomeapp.log`). Erstelle das `logs` Verzeichnis nicht manuell, gib einfach den Pfad an.
*   Speichere die Änderungen und verlasse `nano`.

---
die Datei "data_log.txt"
## 🐞 Aufgabe 4: Fehlerdetektiv und Kommando-Choreographie (ca. 30 Minuten)

In dieser Aufgabe geht es darum, gängige Fehler zu erkennen und zu beheben sowie eine Reihe von Befehlen korrekt zu verketten, um ein bestimmtes Ergebnis zu erzielen.

### 4.1 Fehleranalyse und -behebung

*   **Szenario A – Der verirrte Befehl:** Du bist im `ProjektX`-Ordner und möchtest die `server.js` (die sich in `entwicklung/backend` befindet) in ein neu zu erstellendes Verzeichnis `production` verschieben, welches direkt im `ProjektX`-Ordner liegen soll. Du versuchst es mit `mv entwicklung/backend/server.js production/`. Was passiert? Analysiere den Fehler und korrigiere die nötigen Schritte, um die Datei erfolgreich zu verschieben.
    Die Datei server.js wurde in ProjektX verschoben und in production umbenannt.
        mv production server.js
        mkdir production
        mv server.js production/
*   **Szenario B – Das nicht ausführbare Skript:** Du hast eine leere Datei `script.sh` im `ProjektX`-Ordner erstellt. Du versuchst, sie mit `./script.sh` auszuführen, aber die Shell meldet "Permission denied". Woran liegt das und wie behebst du das Problem?
    touch script.sh && chmod 700 script.sh
*   **Szenario C – Der fehlende Inhalt:** Du möchtest dir den Inhalt einer Datei anzeigen lassen, bist dir aber nicht sicher, ob die Datei überhaupt existiert oder ob sie leer ist. Du versuchst `cat non_existent_file.txt`. Was ist die Fehlermeldung?
        [ -s non_existent_file.txt ] && echo "Datei existiert und ist nicht leer" || echo "Datei fehlt oder ist leer"
    Wie kannst du *bevor* du `cat` nutzt, überprüfen, ob die Datei existiert und nicht leer ist, ohne ihren Inhalt anzuzeigen?
        ls -a oder ls -la

### 4.2 Befehlsketten für ein Ziel

*   Erstelle einen neuen Ordner `archive` im `ProjektX`-Verzeichnis.
*   Finde alle Dateien im `ProjektX`-Ordner (und seinen Unterordnern), deren Name auf `.log` endet (z.B. `data_log.txt`, `app.log` aus der nano-Aufgabe).
        find . -name "*.log"    --> kein Fund
        find . -iname "*log*"   --> findet data_log.txt

*   Kopiere alle diese `.log`-Dateien in den `archive`-Ordner. Achte darauf, dass sie direkt im `archive`-Ordner landen und nicht ihre ursprüngliche Verzeichnisstruktur mitkopiert wird.
        find . -iname "*log*" -not -path "./archive/*" -exec cp {} ./archive/ \;
*   Lösche anschließend alle ursprünglichen `.log`-Dateien aus ihren jeweiligen Quellverzeichnissen.
        find . -iname "*log*" -not -path "./archive/*" -delete

---

## 💡 Selbstreflexion

Nimm dir einen Moment Zeit, um über die Aufgaben und deine Herangehensweise nachzudenken:

1.  Welche Aufgabe hat dich am meisten gefordert und warum?
        Keine Herausforderungen.
2.  Gab es Befehle oder Konzepte, die dir zuvor unklar waren und die du nun besser verstehst?
        && um mehrere Befehle auszugeben.
3.  Wie würdest du dein aktuelles Verständnis und deine Effizienz im Umgang mit der Linux-Shell auf einer Skala von 1 (Anfänger) bis 10 (Experte) bewerten? 
        8
4.  Gibt es Bereiche, in denen du das Gefühl hast, noch tiefer eintauchen zu wollen?
        Vorerst nicht.
5.  Welche Strategien hast du angewendet, um Fehler zu beheben oder unbekannte Befehle zu verstehen?
        Google Gemini

Herzlichen Glückwunsch zur erfolgreichen Bewältigung dieser ILP-Phase! Deine Fähigkeiten auf der Kommandozeile haben sich sicherlich weiter geschärft.