🚀 # Dein Nachmittag in der Individuellen Lernphase (ILP)

Willkommen in deiner Individuellen Lernphase (ILP) am Nachmittag! Dies ist dein persönlicher Raum, um tief in die Materie einzutauchen und dein Wissen eigenständig zu vertiefen. Betrachte diese Phase als eine Expedition, bei der du das Steuer in der Hand hältst. Du hast die Freiheit, das Tempo selbst zu bestimmen, Neues zu entdecken und durch praktisches Anwenden deine Fähigkeiten zu schärfen. Nutze diese Gelegenheit, um die bereitgestellten Konzepte zu meistern und durch gezielte Aufgabenstellungen deine Kompetenzen zu festigen. Jeder Schritt, den du hier machst, bringt dich deinem Ziel, ein versierter Systemadministrator zu werden, ein Stück näher. Viel Erfolg und spannende Erkenntnisse auf deiner Lernreise!

---

## 1. Dateisystem-Berechtigungen (ca. 35 Minuten)

### Ziel
Erlange einen Überblick über das Berechtigungssystem unter Linux und wende `chmod`, `chown` und `chgrp` sicher an.

### Aufgabenstellung
1.  **Dateien und Verzeichnisse erstellen:** Lege ein neues Verzeichnis mit dem Namen `mein_projekt` an und erstelle darin zwei Dateien: `bericht.txt` und `skript.sh`.
2.  **Berechtigungen mit `ls -l` analysieren:** Zeige die Standardberechtigungen dieser neu erstellten Objekte an und erkläre, was die einzelnen Zeichen (`r`, `w`, `x`, `-`) und Positionen (Owner, Group, Others) bedeuten.
            664
3.  **`chmod` anwenden (symbolisch):**
    *   Setze die Berechtigungen für `bericht.txt` so, dass nur der Eigentümer Lese- und Schreibzugriff hat, die Gruppe nur Lesezugriff und andere gar keinen Zugriff.
            chmod 640 bericht.txt
    *   Mache `skript.sh` für den Eigentümer ausführbar, für die Gruppe und andere aber nur lesbar.
            chmod 744 skript.sh
4.  **`chmod` anwenden (oktal):**
    *   Setze die Berechtigungen für das Verzeichnis `mein_projekt` auf `750`. Erkläre, was diese oktale Notation bedeutet.
            chmod 750 mein_projekt/
            Vollzugriff, lesen und ausführen, kein Zugriff
    *   Setze die Berechtigungen für `bericht.txt` erneut, diesmal aber auf `644` und erkläre auch diese.
            chmod 644 mein_projekt/bericht.txt
            Lesen und schreiben, lesen, lesen
5.  **`chown` und `chgrp` anwenden:**
    *   Ändere den Eigentümer der Datei `bericht.txt` zu einem anderen auf dem System vorhandenen Benutzer (z.B. `root` oder einem anderen Testbenutzer).
            sudo chown root mein_projekt/bericht.txt
    *   Ändere die Gruppe der Datei `skript.sh` zu einer anderen, bereits existierenden Gruppe (z.B. `users` oder `staff`).
            sudo chgrp users mein_projekt/skript.sh
            oder
            sudo chown :users mein_projekt/skript.sh

### Selbstreflexion
*   Beschreibe den Unterschied und die Anwendungsfälle von symbolischen und oktalen Berechtigungen bei `chmod`.
        Symbol für schnelles hinzufügen/entfernen von Rechten.
        Oktal für User,Gruppe und andere gleichzeitig.
*   Wie wirken sich `chown` und `chgrp` auf die Dateizugriffe aus?
        chown und chgrp legen fest, welche Identität (Besitzer oder Gruppe) ein Benutzer nachweisen muss, um die für diesen Bereich definierten rwx-Berechtigungen einer Datei nutzen zu dürfen.
*   Welche Auswirkungen hat das `x`-Bit für Verzeichnisse im Vergleich zu Dateien?
        Während es bei Dateien um das Ausführen von Code geht, steuert es bei Verzeichnissen den Zugang zum Inhalt.
*   Wie trägt das Berechtigungssystem zur Sicherheit und Integrität eines Linux-Systems bei?
        Das Linux-Berechtigungssystem ist das Fundament der Systemsicherheit. Es basiert auf dem Prinzip der minimalen Privilegierung (Principle of Least Privilege). Das bedeutet, dass jeder Prozess und jeder Benutzer nur genau die Rechte erhält, die für die jeweilige Aufgabe zwingend erforderlich sind.

---

## 2. Paketverwaltung (ca. 30 Minuten)

### Ziel
Verstehe die Grundlagen der Paketverwaltung unter Linux und wende die wichtigsten Befehle zur Installation, Entfernung und Aktualisierung von Software-Paketen an.

### Aufgabenstellung
1.  **Paketmanager identifizieren:** Ermittle, welcher Paketmanager auf deinem aktuellen System verwendet wird (apt, yum oder dnf).
        Trial and error: apt --vesion; dnf --version
        Identifikation: cat /etc/os-release --> apt --version
2.  **Pakete suchen:** Suche nach einem gängigen Dienstprogramm, das noch nicht installiert ist (z.B. `htop`, `tree` oder `figlet`).
        apt search htop
        which top !!!
3.  **Paket installieren:** Installiere das gefundene Paket auf deinem System.
        sudo apt update
        sudo apt install htop
4.  **Paket entfernen:** Entferne das zuvor installierte Paket wieder.
        sudo apt purge htop
5.  **System aktualisieren:**
    *   Aktualisiere die Liste der verfügbaren Pakete von den Repositorys.
    *   Führe dann ein Upgrade aller installierten Pakete auf die neueste Version durch.
    *   Entferne zum Schluss alle nicht mehr benötigten Abhängigkeiten.
            sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y

### Selbstreflexion
*   Warum ist eine zentrale Paketverwaltung einem manuellen Kompilieren und Installieren von Software vorzuziehen?
        Die zentrale Paketverwaltung ist vorzuziehen, da sie Abhängigkeiten automatisch auflöst, Sicherheitsupdates für das gesamte System zentralisiert und eine saubere Deinstallation ermöglicht, was die Stabilität und Integrität des Systems langfristig sichert.
*   Was sind die Kernbefehle deines Paketmanagers für Installation, Entfernung und Aktualisierung?
        sudo apt install [paketname]
        sudo apt remove / sudo apt purge
        sudo apt update
        sudo apt upgrade
*   Welche Rolle spielen Paket-Repositories bei der Paketverwaltung?
        Paket-Repositories spielen die Rolle eines zentralen, vertrauenswürdigen Lagers, in dem Softwarepakete und deren Metadaten sicher für die Verteilung an die Nutzer bereitgehalten werden.
*   Warum ist es wichtig, das System regelmäßig zu aktualisieren?
        Schließen von Sicherheitslücken, Stabilität und Fehlerbehebung, Software-Kompatibilität, Neue Funktionen, Hardware-Unterstützung

---

## 3. Automatisierung mit Shell-Skripten (ca. 45 Minuten)

### Ziel
Schreibe einfache Shell-Skripte zur Automatisierung von Benutzer- und Paketverwaltungsaufgaben und verstehe deren praktischen Nutzen im Systemalltag.

### Aufgabenstellung
1.  **Skript zur Benutzererstellung:** Schreibe ein Shell-Skript (`create_user.sh`), das folgende Aktionen automatisiert:
    *   Es soll einen Benutzernamen als Argument entgegennehmen.
    *   Es soll prüfen, ob der Benutzer bereits existiert, und falls ja, eine entsprechende Meldung ausgeben und abbrechen.
    *   Existiert der Benutzer nicht, soll er angelegt werden, ein Home-Verzeichnis erhalten und einer spezifischen Gruppe (z.B. `developers` oder `operators`, die vorher manuell angelegt werden kann) hinzugefügt werden.
    *   Das Skript soll am Ende eine Erfolgsmeldung ausgeben.
2.  **Skript zur Paketinstallation:** Schreibe ein Shell-Skript (`install_packages.sh`), das eine Liste von Paketen (z.B. `htop`, `tree`, `vim-nox`) entgegennimmt und diese installiert, sofern sie noch nicht installiert sind. Es soll am Ende berichten, welche Pakete installiert wurden und welche bereits vorhanden waren. Beachte, dass es systemabhängig ist, ob du `apt`, `yum` oder `dnf` verwendest.
3.  **Skript zur Systemprüfung:** Schreibe ein Shell-Skript (`check_system.sh`), das:
    *   Überprüft, ob Systemupdates verfügbar sind und dies meldet.
    *   Den aktuellen Speicherverbrauch in Prozent anzeigt.
    *   Die Anzahl der angemeldeten Benutzer anzeigt.
4.  **Skripte ausführbar machen und ausführen:** Stelle sicher, dass alle drei Skripte ausführbar sind, und führe sie erfolgreich aus.

### Selbstreflexion
*   Welche Vorteile bietet die Automatisierung von Verwaltungsaufgaben durch Shell-Skripte?
        Die Automatisierung von Verwaltungsaufgaben durch Shell-Skripte ist ein Eckpfeiler der effizienten Systemadministration. Sie bietet weit mehr als nur Zeitersparnis, da sie menschliche Fehlerquellen minimiert und Prozesse standardisiert.
*   Welche Shell-Befehle und Konstrukte (z.B. `if`-Anweisungen, Variablen) waren für die Erstellung der Skripte am wichtigsten?
    1. Variablen und Argumente
    Variablen wie USERNAME=$1 oder TOTAL_MEM=$(...) speichern Informationen zwischen, wobei $1 das erste Wort ist, das du beim Aufruf hinter den Skriptnamen schreibst.

    2. Command Substitution $( ... )
    Dieses Konstrukt führt einen Befehl aus und speichert dessen Textausgabe direkt in einer Variable, was die Weiterverarbeitung von Systemwerten erst möglich macht.

    3. Bedingte Anweisungen (if-Anweisungen)
    Mit if [ Bedingung ]; then ... fi kann das Skript Entscheidungen treffen, beispielsweise ob ein Benutzer bereits existiert oder ob genug Speicherplatz vorhanden ist.

    4. Exit-Status und $?
    Jeder Befehl gibt nach der Ausführung einen Statuscode zurück (0 für Erfolg, alles andere für Fehler), den das Skript mit $? abfragt, um auf Probleme zu reagieren.

    5. Textverarbeitung mit grep und awk
    grep dient zum Filtern von Zeilen (z. B. Suche nach "MemTotal"), während awk gezielt einzelne Spalten oder Wörter aus diesen Zeilen extrahiert und berechnet.

    6. Mathematische Berechnungen
    Da die Bash keine Kommazahlen beherrscht, nutzt man awk "BEGIN {print ...}" für präzise Prozentberechnungen oder $(( ... )) für einfache Ganzzahl-Mathematik.

    7. Umleitungen (> /dev/null 2>&1)
    Diese Konstrukte sorgen dafür, dass störende Textausgaben oder Fehlermeldungen unterdrückt werden, damit die Ausgabe des Skripts sauber und übersichtlich bleibt.

*   Welche weiteren Systemverwaltungsaufgaben könnten sinnvoll automatisiert werden?
        Backup-Management, Log-Datei-Analyse, Bereinigung von temporären Daten, Sicherheits-Audits, Zertifikate-Erneuerung. System-Healt-Monitoring.
*   Was musst du beachten, wenn du Skripte mit administrativen Rechten ausführst?
        Da man die volle Verantwortung trägt. sudo nur, wenn absolut notwendig.
        Validierung von Eingaben. Absolute Pfadangaben. Sichere Dateiberechtigung.