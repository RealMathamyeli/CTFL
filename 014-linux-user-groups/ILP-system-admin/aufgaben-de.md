🚀 # Dein Nachmittag in der Individuellen Lernphase (ILP)

Willkommen in deiner Individuellen Lernphase (ILP) am Nachmittag! Dies ist dein persönlicher Raum, um tief in die Materie einzutauchen und dein Wissen eigenständig zu vertiefen. Betrachte diese Phase als eine Expedition, bei der du das Steuer in der Hand hältst. Du hast die Freiheit, das Tempo selbst zu bestimmen, Neues zu entdecken und durch praktisches Anwenden deine Fähigkeiten zu schärfen. Nutze diese Gelegenheit, um die bereitgestellten Konzepte zu meistern und durch gezielte Aufgabenstellungen deine Kompetenzen zu festigen. Jeder Schritt, den du hier machst, bringt dich deinem Ziel, ein versierter Systemadministrator zu werden, ein Stück näher. Viel Erfolg und spannende Erkenntnisse auf deiner Lernreise!

---

## 1. Benutzer- und Gruppenverwaltung (ca. 40 Minuten)

### Ziel

Verstehe und wende Kommandozeilentools zur Verwaltung von Benutzern und Gruppen an, sowie zur Steuerung von Gruppenmitgliedschaften.

### Aufgabenstellung

1.  **Benutzer anlegen:** Erstelle einen neuen Benutzer mit einem eindeutigen Namen und einem sicheren Passwort. Stelle sicher, dass der Benutzer ein eigenes Home-Verzeichnis erhält.
        sudo adduser testadminuser
2.  **Gruppe anlegen:** Erstelle eine neue Gruppe mit einem aussagekräftigen Namen.
        sudo groupadd testgruppe
3.  **Gruppenmitgliedschaften verwalten:** Füge den neu erstellten Benutzer der zuvor angelegten Gruppe hinzu. Füge denselben Benutzer auch einer anderen, bereits bestehenden Systemgruppe (z.B. `sudo` oder `adm`, falls vorhanden und sinnvoll für deine Lernumgebung) hinzu, ohne die primäre Gruppe des Benutzers zu ändern.
        sudo usermod -aG testgruppe testadminuser
4.  **Benutzereigenschaften ändern:** Ändere die Standard-Shell des Benutzers zu einer anderen verfügbaren Shell (z.B. `/bin/sh` oder `/bin/zsh`, falls installiert).
        cat /etc/shells
        sudo chsh -s /bin/sh testadminuser
        grep "testadminuser" /etc/passwd
5.  **Benutzer und Gruppe löschen:** Lösche den erstellten Benutzer und die erstellte Gruppe. Achte darauf, dass das Home-Verzeichnis des Benutzers bei der Löschung ebenfalls entfernt wird.
        sudo userdel -r testadminuser
        sudo groupdel testgruppe

### Selbstreflexion

- Welche Kommandozeilentools hast du für das Anlegen, Ändern und Löschen von Benutzern und Gruppen verwendet?
    siehe oben
- Wie hast du überprüft, ob die Gruppenmitgliedschaften erfolgreich angepasst wurden?
    siehe oben
- Welche Herausforderungen gab es und wie hast du sie gelöst?
    Keine.
- Warum ist eine sorgfältige Benutzer- und Gruppenverwaltung für die Systemsicherheit so wichtig?
    Eine sorgfältige Benutzer- und Gruppenverwaltung ist das Fundament der IT-Sicherheit. Ohne sie wäre ein System wie ein Haus, in dem jeder Schlüssel für jedes Zimmer passt – ein einziger Fehler eines Bewohners würde das gesamte Gebäude gefährden.

---

## 👥 Benutzer- und Gruppenverwaltung: Aufbau einer Team-Struktur (ca. 30 Minuten)

Stell dir vor, du bist für die Einrichtung eines neuen Projektteams auf einem Linux-Server verantwortlich. Das Team besteht aus Entwicklern und Testern, die Zugriff auf unterschiedliche, aber auch gemeinsame Ressourcen benötigen.

### Aufgabe 1.1: Vorbereitung der Benutzer- und Gruppenstruktur

1.  Erstelle eine neue primäre Gruppe namens `projekt_dev` für die Entwickler.
2.  Erstelle eine weitere primäre Gruppe namens `projekt_test` für die Tester.
3.  Lege eine gemeinsame Gruppe namens `projekt_shared` an, die von beiden Teams genutzt wird.
4.  Erstelle zwei neue Benutzer: `dev_alice` und `dev_bob`. Beide sollen die primäre Gruppe `projekt_dev` haben und zusätzlich Mitglied der Gruppe `projekt_shared` sein. Ihre Home-Verzeichnisse sollen jeweils unter `/home/projekt_dev` liegen (z.B. `/home/projekt_dev/dev_alice`).
        sudo useradd -m -d /home/projekt_dev/dev_alice -g projekt_dev -G projekt_shared -s /bin/bash dev_alice
        sudo useradd -m -d /home/projekt_dev/dev_bob -g projekt_dev -G projekt_shared -s /bin/bash dev_bob

5.  Erstelle zwei weitere Benutzer: `test_charlie` und `test_diana`. Beide sollen die primäre Gruppe `projekt_test` haben und ebenfalls Mitglied der Gruppe `projekt_shared` sein. Ihre Home-Verzeichnisse sollen jeweils unter `/home/projekt_test` liegen (z.B. `/home/projekt_test/test_charlie`).
6.  Stelle sicher, dass alle neu erstellten Benutzer ein initiales Passwort zugewiesen bekommen (z.B. `Passwort123!`).
    sudo passwd dev_alice
    sudo passwd dev_bob
    sudo passwd test_charlie
    sudo passwd test_diana
7.  Überprüfe nach der Erstellung die Gruppenmitgliedschaften und Home-Verzeichnisse der Benutzer.
    ls -ld /home/projekt_dev/dev_alice
    ls -lh /home/projekt_test
    id test_charlie

### Aufgabe 1.2: Anpassung und Validierung

1.  Ein neuer Junior-Entwickler, `dev_eve`, tritt dem Team bei. Erstelle ihren Account. Sie soll ebenfalls der primären Gruppe `projekt_dev` und der sekundären Gruppe `projekt_shared` angehören. Ihr Home-Verzeichnis soll dem Muster der anderen Entwickler folgen.
2.  `dev_bob` wechselt das Projekt und benötigt keinen Zugriff mehr auf `projekt_shared`. Entferne ihn aus dieser Gruppe, ohne seinen Account zu löschen oder seine primäre Gruppe zu ändern.
    sudo gpasswd -d dev_bob projekt_shared
    
3.  `test_charlie` ist ein Power-User und soll zusätzlich Zugriff auf eine spezielle Admin-Gruppe (nennen wir sie `projekt_ops`) erhalten, die du zuerst erstellen musst. Füge ihn dieser Gruppe hinzu.
4.  Zeige die Gruppenmitgliedschaften für alle fünf Benutzer (`dev_alice`, `dev_bob`, `test_charlie`, `test_diana`, `dev_eve`) an, um deine Änderungen zu bestätigen.
    for user in dev_alice dev_bob dev_eve test_charlie test_diana; do id $user; done

## 📁 Dateisystem-Berechtigungen: Sichere Team-Zusammenarbeit (ca. 30 Minuten)

Um die Zusammenarbeit der Teams zu ermöglichen und gleichzeitig die Datenintegrität zu gewährleisten, musst du ein robustes Berechtigungskonzept für die Projektverzeichnisse implementieren.

### Aufgabe 2.1: Implementierung der Projektverzeichnisstruktur

1.  Erstelle ein Hauptverzeichnis für alle Projektdateien unter `/srv/projekt_data`.
2.  Innerhalb von `/srv/projekt_data` erstelle die folgenden Unterverzeichnisse:
    - `entwicklungs_code` (nur für Entwickler)
    - `test_scripte` (nur für Tester)
    - `gemeinsame_dokumente` (für beide Teams)
3.  Setze die Eigentümerschaft und Gruppenberechtigungen so, dass:
    - `entwicklungs_code`: Gehört `root:projekt_dev`. Nur Mitglieder von `projekt_dev` sollen volle Lese-, Schreib- und Ausführungsrechte haben. Andere dürfen nichts.
    - `test_scripte`: Gehört `root:projekt_test`. Nur Mitglieder von `projekt_test` sollen volle Lese-, Schreib- und Ausführungsrechte haben. Andere dürfen nichts.
    - `gemeinsame_dokumente`: Gehört `root:projekt_shared`. Mitglieder von `projekt_shared` sollen volle Lese-, Schreib- und Ausführungsrechte haben. Stelle sicher, dass _neue Dateien und Verzeichnisse_, die in diesem Verzeichnis erstellt werden, automatisch die Gruppe `projekt_shared` erben und die Mitglieder dieser Gruppe volle Rechte darauf haben, während andere keine Rechte haben.
    - Das Hauptverzeichnis `/srv/projekt_data` soll so berechtigt sein, dass nur `root` Änderungen an der Struktur vornehmen kann, aber die jeweiligen Teams in ihre Unterverzeichnisse navigieren können.

### Aufgabe 2.2: Überprüfung der Berechtigungen

1.  Erstelle als `root` im Verzeichnis `gemeinsame_dokumente` eine leere Datei namens `readme.md`. Überprüfe die Eigentümerschaft und die Berechtigungen dieser Datei.
2.  Wechsle den Benutzer zu `dev_alice` (ohne `sudo` oder `su root` zu nutzen, nur mit `su dev_alice`). Versuche, in `entwicklungs_code` eine Datei zu erstellen und in `test_scripte` eine Datei zu erstellen. Dokumentiere, was passiert.
        touch: '/srv/projekt_data/test_scripte/hack_attempt.txt' kann nicht berührt werden: Keine Berechtigung Warum?
        Alice gehört nicht zur Gruppe projekt_test.
        Der Ordner hat die Berechtigung 2770 (nur Besitzer und Gruppe dürfen schreiben).
        Da "Andere" (Others) auf 0 gesetzt sind, darf Alice den Ordner weder betreten (cd) noch darin schreiben.

3.  Versuche als `test_charlie`, in `test_scripte` eine Datei zu erstellen und in `entwicklungs_code` eine Datei zu erstellen. Dokumentiere, was passiert.
        touch: konnte '/srv/projekt_data/entwicklungs_code/charlie_was_here.txt' nicht erstellen: Keine Berechtigung Dokumentation:
        Charlie gehört nicht zur Gruppe projekt_dev.
        Der Ordner ist so eingestellt (770), dass nur root und Mitglieder von projekt_dev Zugriff haben.
        Da Charlie für diesen Ordner unter die Kategorie "Andere" (Others) fällt und diese 0 (keine) Rechte haben, wird der Zugriff strikt verweigert.

4.  Wechsle den Benutzer zu `dev_alice` und erstelle im Verzeichnis `gemeinsame_dokumente` eine Datei namens `plan_a.txt`. Überprüfe die Eigentümerschaft und die Gruppenberechtigung dieser Datei. Bestätigt dies deine Einstellung?
        Ja.
5.  Wechsle den Benutzer zu `test_diana` und versuche, die Datei `plan_a.txt` zu bearbeiten oder zu löschen. Was beobachtest du?
        Beobachtung: Erfolg. Warum? Das überrascht viele Linux-Anfänger: Das Recht, eine Datei zu löschen, hängt nicht an der Datei selbst, sondern an den Schreibrechten des Verzeichnisses, in dem sie liegt.
        Da der Ordner gemeinsame_dokumente der Gruppe projekt_shared gehört und die Rechte 770 (bzw. 2770) hat, darf jedes Gruppenmitglied (also auch Diana) Dateien darin erstellen und löschen.

### Selbstreflexion

- Wie hast du sichergestellt, dass die Verzeichnisberechtigungen mit der Teamstruktur übereinstimmen?
        Isolierung: Alice scheiterte beim Zugriff auf den Tester-Ordner.
        Vererbung: Als Alice eine Datei im Shared-Ordner erstellte, wurde diese sofort projekt_shared zugeordnet.
        Kollaboration: Diana konnte die Datei von Alice bearbeiten, weil die ACLs ihr automatisch das Recht dazu gaben.

- Welche Herausforderungen sind dir bei der Einrichtung der Berechtigungen begegnet und wie hast du sie überwunden?
        Herausforderung,        Risiko,                                         Lösung
        Falsche Gruppe,         Tester sehen Entwickler-Dateien nicht.,         Setgid-Bit
        Nur-Lesen-Zugriff,      Teammitglieder können nichts bearbeiten.,       Default ACLs
        Pfad-Sperre,            Nutzer kommen gar nicht bis zum Ordner.,        Execute-Bits (chmod 770)