🚀 Individuelle Lernphase (ILP): Dein Deep Dive in die Systemadministration

Willkommen zu deiner individuellen Lernphase! Dies ist deine Zeit, in der du dich ganz deinen Fähigkeiten widmen und dein Wissen in der Systemadministration vertiefen kannst. Vergiss die Frontalbeschallung – jetzt bist du am Steuer! Nutze diese Stunden, um die vorgestellten Konzepte nicht nur zu verstehen, sondern sie aktiv anzuwenden, zu experimentieren und zu meistern. Stell dir vor, du bist ein leitender Systemadministrator, der vor realen Herausforderungen steht. Diese Aufgaben sind darauf ausgelegt, dich zu fordern, dein kritisches Denken anzuregen und dir dabei zu helfen, robuste Lösungen zu entwickeln. Tauche ein, experimentiere und festige dein Know-how – der Erfolg liegt in deinen Händen!

## 👥 Benutzer- und Gruppenverwaltung: Aufbau einer Team-Struktur (ca. 30 Minuten)

Stell dir vor, du bist für die Einrichtung eines neuen Projektteams auf einem Linux-Server verantwortlich. Das Team besteht aus Entwicklern und Testern, die Zugriff auf unterschiedliche, aber auch gemeinsame Ressourcen benötigen.

### Aufgabe 1.1: Vorbereitung der Benutzer- und Gruppenstruktur

1.  Erstelle eine neue primäre Gruppe namens `projekt_dev` für die Entwickler.
2.  Erstelle eine weitere primäre Gruppe namens `projekt_test` für die Tester.
3.  Lege eine gemeinsame Gruppe namens `projekt_shared` an, die von beiden Teams genutzt wird.
4.  Erstelle zwei neue Benutzer: `dev_alice` und `dev_bob`. Beide sollen die primäre Gruppe `projekt_dev` haben und zusätzlich Mitglied der Gruppe `projekt_shared` sein. Ihre Home-Verzeichnisse sollen jeweils unter `/home/projekt_dev` liegen (z.B. `/home/projekt_dev/dev_alice`).
5.  Erstelle zwei weitere Benutzer: `test_charlie` und `test_diana`. Beide sollen die primäre Gruppe `projekt_test` haben und ebenfalls Mitglied der Gruppe `projekt_shared` sein. Ihre Home-Verzeichnisse sollen jeweils unter `/home/projekt_test` liegen (z.B. `/home/projekt_test/test_charlie`).
6.  Stelle sicher, dass alle neu erstellten Benutzer ein initiales Passwort zugewiesen bekommen (z.B. `Passwort123!`).
7.  Überprüfe nach der Erstellung die Gruppenmitgliedschaften und Home-Verzeichnisse der Benutzer.

### Aufgabe 1.2: Anpassung und Validierung

1.  Ein neuer Junior-Entwickler, `dev_eve`, tritt dem Team bei. Erstelle ihren Account. Sie soll ebenfalls der primären Gruppe `projekt_dev` und der sekundären Gruppe `projekt_shared` angehören. Ihr Home-Verzeichnis soll dem Muster der anderen Entwickler folgen.
2.  `dev_bob` wechselt das Projekt und benötigt keinen Zugriff mehr auf `projekt_shared`. Entferne ihn aus dieser Gruppe, ohne seinen Account zu löschen oder seine primäre Gruppe zu ändern.
3.  `test_charlie` ist ein Power-User und soll zusätzlich Zugriff auf eine spezielle Admin-Gruppe (nennen wir sie `projekt_ops`) erhalten, die du zuerst erstellen musst. Füge ihn dieser Gruppe hinzu.
4.  Zeige die Gruppenmitgliedschaften für alle fünf Benutzer (`dev_alice`, `dev_bob`, `test_charlie`, `test_diana`, `dev_eve`) an, um deine Änderungen zu bestätigen.

## 📁 Dateisystem-Berechtigungen: Sichere Team-Zusammenarbeit (ca. 30 Minuten)

Um die Zusammenarbeit der Teams zu ermöglichen und gleichzeitig die Datenintegrität zu gewährleisten, musst du ein robustes Berechtigungskonzept für die Projektverzeichnisse implementieren.

### Aufgabe 2.1: Implementierung der Projektverzeichnisstruktur

1.  Erstelle ein Hauptverzeichnis für alle Projektdateien unter `/srv/projekt_data`.
2.  Innerhalb von `/srv/projekt_data` erstelle die folgenden Unterverzeichnisse:
    *   `entwicklungs_code` (nur für Entwickler)
    *   `test_scripte` (nur für Tester)
    *   `gemeinsame_dokumente` (für beide Teams)
3.  Setze die Eigentümerschaft und Gruppenberechtigungen so, dass:
    *   `entwicklungs_code`: Gehört `root:projekt_dev`. Nur Mitglieder von `projekt_dev` sollen volle Lese-, Schreib- und Ausführungsrechte haben. Andere dürfen nichts.
    *   `test_scripte`: Gehört `root:projekt_test`. Nur Mitglieder von `projekt_test` sollen volle Lese-, Schreib- und Ausführungsrechte haben. Andere dürfen nichts.
    *   `gemeinsame_dokumente`: Gehört `root:projekt_shared`. Mitglieder von `projekt_shared` sollen volle Lese-, Schreib- und Ausführungsrechte haben. Stelle sicher, dass *neue Dateien und Verzeichnisse*, die in diesem Verzeichnis erstellt werden, automatisch die Gruppe `projekt_shared` erben und die Mitglieder dieser Gruppe volle Rechte darauf haben, während andere keine Rechte haben.
    *   Das Hauptverzeichnis `/srv/projekt_data` soll so berechtigt sein, dass nur `root` Änderungen an der Struktur vornehmen kann, aber die jeweiligen Teams in ihre Unterverzeichnisse navigieren können.

### Aufgabe 2.2: Überprüfung der Berechtigungen

1.  Erstelle als `root` im Verzeichnis `gemeinsame_dokumente` eine leere Datei namens `readme.md`. Überprüfe die Eigentümerschaft und die Berechtigungen dieser Datei.
2.  Wechsle den Benutzer zu `dev_alice` (ohne `sudo` oder `su root` zu nutzen, nur mit `su dev_alice`). Versuche, in `entwicklungs_code` eine Datei zu erstellen und in `test_scripte` eine Datei zu erstellen. Dokumentiere, was passiert.
3.  Versuche als `test_charlie`, in `test_scripte` eine Datei zu erstellen und in `entwicklungs_code` eine Datei zu erstellen. Dokumentiere, was passiert.
4.  Wechsle den Benutzer zu `dev_alice` und erstelle im Verzeichnis `gemeinsame_dokumente` eine Datei namens `plan_a.txt`. Überprüfe die Eigentümerschaft und die Gruppenberechtigung dieser Datei. Bestätigt dies deine Einstellung?
5.  Wechsle den Benutzer zu `test_diana` und versuche, die Datei `plan_a.txt` zu bearbeiten oder zu löschen. Was beobachtest du?

## 📦 Paketverwaltung: Systempflege und Recherche (ca. 25 Minuten)

Als Systemadministrator ist die Paketverwaltung dein tägliches Brot. Es geht nicht nur darum, Pakete zu installieren, sondern auch darum, das System aktuell und sauber zu halten und bei Bedarf spezifische Informationen zu finden.

### Aufgabe 3.1: System-Check und Recherche

1.  Führe eine vollständige Aktualisierung der Paketlisten und der installierten Pakete auf deinem System durch. Dokumentiere die Schritte.
2.  Angenommen, du möchtest eine kleine HTTP-Server-Anwendung installieren, aber du weißt den genauen Namen des Pakets nicht. Finde ein gängiges, leichtgewichtiges HTTP-Server-Paket (z.B. `nginx` oder `apache2` oder `lighttpd`) nur durch die Suche in der Paketverwaltung. Installiere es anschließend.
3.  Finde heraus, zu welchem Paket die ausführbare Datei `/bin/ls` gehört.
4.  Finde heraus, welche Dateien das zuvor installierte HTTP-Server-Paket auf deinem System hinterlegt hat.
5.  Deinstalliere das HTTP-Server-Paket wieder vollständig, sodass keine Konfigurationsdateien zurückbleiben.

### Aufgabe 3.2: Verständnis von Paketstatus und Abhängigkeiten

1.  Simuliere ein Problem: Versuche, das Paket `python3-pip` zu installieren, ohne dass `python3` oder `python3-distutils` (oder ähnliche notwendige Pakete) installiert sind. Was passiert? Erkläre die Meldung, die du erhältst, und warum dies geschieht. (Hinweis: Dies könnte bedeuten, dass du zuerst die Abhängigkeiten deinstallieren musst, falls sie schon da sind, oder einen neuen Rechner für diese Aufgabe verwenden musst, wo diese Pakete noch nicht vorhanden sind.)
2.  Installiere anschließend `python3-pip` inklusive aller benötigten Abhängigkeiten korrekt.
3.  Zeige alle installierten Pakete an, die mit dem Wort "net" beginnen oder es enthalten (z.B. `net-tools`, `netcat`). Filtere die Ausgabe sinnvoll.

## 🤖 Automatisierung mit Shell-Skripten: Dein Admin-Assistent (ca. 60 Minuten)

Jetzt ist es an der Zeit, dein Wissen zu bündeln und die Aufgaben, die du manuell durchgeführt hast, zu automatisieren. Shell-Skripte sind das Herzstück der Systemadministration.

### Aufgabe 4.1: Skript zur Benutzer- und Gruppenverwaltung

Erstelle ein Shell-Skript namens `manage_team_users.sh`, das folgende Funktionen bietet:

1.  **Benutzererstellung:** Das Skript soll in der Lage sein, einen neuen Benutzer (z.B. `team_user_x`) mit einer spezifischen primären Gruppe (z.B. `projekt_dev` oder `projekt_test`) und einer sekundären Gruppe (`projekt_shared`) zu erstellen. Das Home-Verzeichnis soll dabei in einem passenden Unterverzeichnis unter `/home` liegen, basierend auf der primären Gruppe (z.B. `/home/projekt_dev/team_user_x`). Das Passwort soll sicher generiert oder interaktiv abgefragt werden.
2.  **Gruppenmitgliedschaft ändern:** Das Skript soll die Möglichkeit bieten, einen bestehenden Benutzer zu einer zusätzlichen Gruppe hinzuzufügen oder aus einer Gruppe zu entfernen.
3.  **Fehlerbehandlung:** Das Skript sollte überprüfen, ob die angegebenen Gruppen existieren, bevor versucht wird, Benutzer hinzuzufügen. Auch sollte es Fehlermeldungen ausgeben, wenn ein Benutzer bereits existiert oder nicht gefunden wird.
4.  **Protokollierung:** Alle Aktionen (Erstellung, Änderung) und Fehler sollen in einer Log-Datei unter `/var/log/team_management.log` protokolliert werden, inklusive Zeitstempel.
5.  **Interaktivität:** Die notwendigen Informationen (Benutzername, Gruppen, Aktion) sollen entweder als Argumente übergeben oder interaktiv vom Benutzer abgefragt werden, falls keine Argumente vorhanden sind.

### Aufgabe 4.2: Skript zur Paketpflege

Erstelle ein Shell-Skript namens `system_health_check.sh`, das dein System regelmäßig überprüft und pflegt:

1.  **Update:** Aktualisiere die Paketlisten und installiere ausstehende Updates.
2.  **Bereinigung:** Entferne nicht mehr benötigte Pakete und bereinige den Paket-Cache.
3.  **Statusbericht:** Generiere einen kurzen Bericht über:
    *   Die letzten 5 Kernel-Fehlermeldungen aus dem System-Log (z.B. `dmesg` oder `journalctl`).
    *   Die aktuelle Festplattennutzung des Root-Dateisystems.
    *   Eine Liste der 5 größten Dateien im Verzeichnis `/var/log`.
4.  **Protokollierung:** Alle Aktionen (Updates, Bereinigung, Statusbericht) sollen mit Zeitstempel in einer Log-Datei unter `/var/log/system_health.log` protokolliert werden.
5.  **Ausführbarkeit:** Das Skript soll ausführbar sein und als `root` ohne weitere Interaktion laufen können (ideal für einen Cronjob, aber das ist keine Anforderung für diese Aufgabe).

*(Hinweis: Achte bei beiden Skripten auf die Verwendung von geeigneten Kommandozeilentools und darauf, dass sie robust und selbsterklärend sind.)*

## 🧠 Selbstreflexion: Dein Lernweg

Nimm dir einen Moment Zeit, um über die soeben abgeschlossenen Aufgaben nachzudenken. Diese Reflexion ist ein wichtiger Bestandteil deines Lernprozesses und hilft dir, dein Verständnis zu festigen und zukünftige Herausforderungen besser zu meistern.

1.  **Herausforderungen:** Welche der Aufgaben oder Aspekte der Aufgabenstellung empfandest du als am schwierigsten? Gab es Momente, in denen du dachtest, du steckst fest? Wie bist du damit umgegangen?
2.  **Aha-Momente:** Gab es bestimmte Erkenntnisse oder "Aha-Momente", die dir ein tieferes Verständnis für ein Thema vermittelt haben? Welche waren das?
3.  **Effizienz:** Gab es Stellen, an denen du das Gefühl hattest, dass du Dinge effizienter oder eleganter hättest lösen können? Wenn ja, wie?
4.  **Relevanz:** Wie schätzt du die praktische Relevanz dieser Aufgaben für den Systemadministrations-Alltag ein? Welche der gelernten Fähigkeiten wirst du voraussichtlich am häufigsten anwenden?
5.  **Verbesserung:** Welche weiteren Themen oder Techniken würdest du gerne als Nächstes vertiefen, um deine Fähigkeiten in der Systemadministration weiter auszubauen?

Das Denken über diese Fragen hilft dir nicht nur, das Gelernte zu verinnerlichen, sondern auch, deinen eigenen Lernprozess besser zu verstehen und zu steuern. Gut gemacht!