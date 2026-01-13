# Benutzer- und Gruppenverwaltung in Linux

- Erstellen, Ändern und Löschen von Benutzern und Gruppen mit Kommandozeilen-Tools
- Verwaltung von Gruppenmitgliedschaften
- Automatisierung mit Shell-Skripten

<br><br><br>

## Benutzer- und Gruppenverwaltung

- Ein gemeinsam genutztes Computersystem ist wie ein großes Bürogebäude.
- Nicht jeder hat Zugang zu jedem Raum, und nicht jeder kann alles tun.
- Um die Dinge organisiert und sicher zu halten, gibt es Benutzerkonten (Mitarbeiter) und Gruppen (Abteilungen).
- Wir werden uns ein Szenario vorstellen, in dem du der Systemadministrator eines Linux-Servers für ein kleines Unternehmen bist.
- Deine Aufgabe ist es, Benutzerkonten und Gruppen zu verwalten, damit die Mitarbeiter sicher und effizient arbeiten können.
- Du wirst lernen, wie man Benutzerkonten erstellt, ändert und löscht sowie Gruppenmitgliedschaften verwaltet.
- Der Prozess der Verwaltung dieser Benutzer und Gruppen ist eine der Kernaufgaben eines Systemadministrators.
- Sie tun dies normalerweise auf Servern und Multiuser-Workstations.
- Die Verwaltung von Benutzern und Gruppen erfolgt typischerweise über die Kommandozeile (das Terminal), da dies eine sehr leistungsfähige und direkte Art ist, das System anzuweisen.

<br><br><br>

### Benutzerverwaltung

- Benutzer sind die individuellen Konten auf dem System.
- Jeder Benutzer hat einen eindeutigen Benutzernamen und zugehörige Informationen wie Benutzer-ID (UID), Home-Verzeichnis, Shell und Gruppenmitgliedschaften.
- Die Hauptbefehle für die Benutzerverwaltung sind `useradd`, `usermod` und `userdel`.
- Für diese Aktionen benötigst du fast immer Administratorrechte, weshalb Befehle oft mit `sudo` (Super-User Do) beginnen.

#### Benutzer erstellen

- Der Befehl zum Erstellen eines neuen Benutzers ist `sudo useradd NAME-DES-BENUTZERS`.
- In seiner einfachsten Form erstellt er nur einen grundlegenden Systemeintrag.

**Einfaches Beispiel:**

```bash
sudo useradd anna
```

- Dies erstellt einen Benutzer namens "anna".
- Aber Vorsicht: Dieser Benutzer hat noch kein Passwort (kann sich also nicht anmelden) und kein Home-Verzeichnis.
- Daher wird `useradd` fast immer mit zusätzlichen Optionen (genannt Flags) verwendet.

| Option | Beschreibung                                                                                                                                                  | Beispiel                                 |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------- |
| `-m`   | **m**ake home directory: Erstellt automatisch ein Home-Verzeichnis für den Benutzer (normalerweise `/home/benutzername`). **Dies ist die wichtigste Option!** | `sudo useradd -m anna`                   |
| `-s`   | **s**hell: Legt die Standard-Shell für den Benutzer fest. `/bin/bash` ist die übliche Wahl für normale Benutzer.                                              | `sudo useradd -m -s /bin/bash anna`      |
| `-c`   | **c**omment: Fügt einen beschreibenden Kommentar hinzu, oft den vollständigen Namen.                                                                          | `sudo useradd -m -c "Anna Schmidt" anna` |
| `-g`   | **g**roup: Legt die primäre Gruppe für den Benutzer fest. Wenn nicht angegeben, wird oft eine neue Gruppe mit dem gleichen Namen wie der Benutzer erstellt.   | `sudo useradd -m -g users anna`          |

**Ein vollständiges, praktisches Beispiel:**

```bash
sudo useradd -m -s /bin/bash -c "Anna Schmidt" anna
```

Dieser Befehl macht Folgendes:

1.  Erstellt den Benutzer `anna`.
2.  Erstellt ein Home-Verzeichnis unter `/home/anna/` (`-m`).
3.  Setzt die Standard-Shell auf bash (`-s /bin/bash`).
4.  Fügt den Namen "Anna Schmidt" als Information hinzu (`-c`).

**Wichtiger letzter Schritt:** Der Benutzer braucht ein Passwort!

```bash
sudo passwd anna
```

- Das System fordert dich nun auf, ein Passwort für Anna festzulegen und zu bestätigen.
- Erst jetzt kann sich Anna am System anmelden.

### Benutzer ändern

- Wenn sich etwas für einen Benutzer ändert (Name, Abteilung, etc.), verwende den Befehl `usermod` (user modify).

| Option | Beschreibung                                                                                                       | Beispiel                                    |
| :----- | :----------------------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| `-l`   | **l**ogin name: Ändert den Login-Namen des Benutzers.                                                              | `sudo usermod -l  NEU-NAME ALTER-NAME`      |
| `-d`   | **d**irectory: Ändert das Home-Verzeichnis. Normalerweise mit `-m` (move) verwendet, um den Inhalt zu verschieben. | `sudo usermod -d /home/anna_new -m anna`    |
| `-s`   | **s**hell: Ändert die Login-Shell des Benutzers.                                                                   | `sudo usermod -s /bin/zsh anna`             |
| `-c`   | **c**omment: Ändert den Kommentar (z.B. vollständiger Name).                                                       | `sudo usermod -c "Anna Meier-Schmidt" anna` |
| `-L`   | **L**ock: Sperrt das Benutzerkonto. Der Benutzer kann sich nicht mehr anmelden, aber das Konto existiert noch.     | `sudo usermod -L anna`                      |
| `-U`   | **U**nlock: Entsperrt ein gesperrtes Konto.                                                                        | `sudo usermod -U anna`                      |

- In einer Zeile kannst du mehrere Optionen kombinieren.
  **Beispiel:**

```bash
sudo usermod -l arepas -c "Aretas Arepas" -d /home/arepas -m arets
```

- Dieser Befehl ändert den Benutzernamen von `arets` zu `arepas`, aktualisiert den Kommentar, ändert das Home-Verzeichnis und verschiebt den Inhalt dorthin.

### Benutzer löschen

Um einen Benutzer vollständig zu entfernen, verwende `userdel` (user delete). Hier gibt es einen wichtigen Unterschied.

**Option 1: Nur Benutzer löschen**

```bash
sudo userdel anna
```

- Dieser Befehl entfernt nur den Benutzereintrag aus dem System. Das Home-Verzeichnis (`/home/anna/`) und alle seine Dateien bleiben erhalten!
- Dies kann nützlich sein, wenn du die Daten des Benutzers archivieren möchtest.

**Option 2: Benutzer UND dessen Home-Verzeichnis löschen**

```bash
sudo userdel -r USERNAME
```

- Die `-r` Option steht für **r**emove.
- Dies ist die "saubere" Art, einen Benutzer vollständig zu entfernen.
- Es löscht den Benutzer und sein gesamtes Home-Verzeichnis, einschließlich aller darin enthaltenen Daten.
- **Dieser Vorgang kann nicht rückgängig gemacht werden!**

<br><br><br>

## Gruppenverwaltung

- Jetzt zu den "Abteilungen". Wie erwähnt, sind Gruppen einfach Sammlungen von Benutzern.

### Gruppen erstellen

- Um eine neue Gruppe zu erstellen, verwende `groupadd`.

```bash
sudo groupadd buchhaltung
```

- Das war's! Eine neue (leere) Gruppe namens "buchhaltung" existiert nun.

### Gruppen ändern

- Wenn du eine Gruppe umbenennen möchtest, verwende `groupmod`.
- Die Hauptoption hier ist `-n` für **n**ew name (neuer Name).

```bash
sudo groupmod -n NEU-NAME ALTER-NAME
```

- z.B.:

```bash
# Benennt die Gruppe "buchhaltung" in "finanzen" um
sudo groupmod -n finanzen buchhaltung
```

### Gruppen löschen

Um eine Gruppe zu löschen, verwende den Befehl `groupdel`.

```bash
sudo groupdel GRUPPENNAME
```

**Wichtiger Hinweis:**

- Du kannst eine Gruppe nicht löschen, wenn sie noch die primäre Gruppe eines Benutzers ist.
- Du musst zuerst die primäre Gruppe des Benutzers mit `usermod` ändern, bevor du die alte Gruppe löschen kannst.

<br><br><br>

## Verwaltung von Gruppenmitgliedschaften

- Benutzer und Gruppen zu erstellen ist eine Sache.
- Die eigentliche Arbeit besteht darin, Benutzer den richtigen Gruppen zuzuweisen.

### Einen Benutzer zu einer Gruppe hinzufügen

- Um einen Benutzer zu einer oder mehreren _zusätzlichen_ Gruppen hinzuzufügen, verwende wieder `usermod`.
- Die wichtigsten Optionen sind `-a` und `-G`.

  - `-G` (Groups): Gibt eine Liste von Gruppen an, zu denen der Benutzer gehören soll.
  - `-a` (Append): Fügt den Benutzer zu den Gruppen hinzu, **ohne ihn aus anderen Gruppen zu entfernen**.

**!! VORSICHT !!** Wenn du `-G` allein ohne `-a` verwendest, wird der Benutzer aus allen anderen zusätzlichen Gruppen entfernt, in denen er zuvor war! Dies ist eine sehr häufige Fehlerquelle.

**Der richtige Weg:**

```bash
# Fügt den Benutzer "anna" zur Gruppe "buchhaltung" hinzu
sudo usermod -aG buchhaltung anna
```

### Mitgliedschaften überprüfen

- Wie findest du heraus, zu welchen Gruppen ein Benutzer gehört?
- Es gibt zwei nützliche Befehle.

1.  **`groups`**: Listet schnell alle Gruppen auf, zu denen ein Benutzer gehört.

    ```bash
    groups anna
    ```

    _Mögliche Ausgabe:_ `anna : anna adm cdrom sudo dip plugdev lpadmin sambashare buchhaltung`

2.  **`id`**: Gibt detailliertere Informationen, einschließlich Benutzer-ID (UID) und primärer Gruppen-ID (GID).

    ```bash
    id anna
    ```

    _Mögliche Ausgabe:_ `uid=1001(anna) gid=1001(anna) groups=1001(anna),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),118(lpadmin),128(sambashare),1002(buchhaltung)`

- Hier siehst du, dass die primäre Gruppe von `anna` die Gruppe `anna` ist (Standardverhalten bei der Erstellung), und sie ist auch Mitglied vieler anderer Gruppen.

## Automatisierung mit Shell-Skripten

- Die Verwaltung von Benutzern und Gruppen kann sich wiederholende Aufgaben beinhalten.
- Shell-Skripte können helfen, diese Aufgaben zu automatisieren, Zeit zu sparen und Fehler zu reduzieren.
  <br><br><br>

## Automatisierung mit Shell-Skripten

- Die Verwaltung von Benutzern und Gruppen kann sich wiederholende Aufgaben beinhalten.
- Shell-Skripte können helfen, diese Aufgaben zu automatisieren, Zeit zu sparen und Fehler zu reduzieren.
  <br><br><br>

### Beispiel: Automatisierung der Benutzerverwaltung

- Angenommen, du musst oft neue Benutzer auf einem System erstellen.
- Jedes Mal `useradd`, `passwd` usw. einzutippen ist mühsam.
- Lass uns das automatisieren!

- **Das Skript `neuer_benutzer.sh`:**

```bash
#!/bin/bash

# Skript zur Automatisierung der Erstellung eines neuen Benutzers

echo "=== Neues Benutzerkonto erstellen ==="

# 1. Nach dem Benutzernamen fragen
echo -n "Bitte gib den neuen Benutzernamen ein: "
read USERNAME

# 2. Nach dem vollständigen Namen fragen (Kommentar)
echo -n "Bitte gib den vollständigen Namen des Benutzers ein: "
read FULLNAME

# 3. Den Benutzer mit useradd erstellen
# -m erstellt das Home-Verzeichnis
# -c fügt einen Kommentar hinzu (vollständiger Name)
sudo useradd -m -c "$FULLNAME" $USERNAME

# 4. Überprüfen, ob die Benutzererstellung erfolgreich war
if [ $? -eq 0 ]; then
    echo "Benutzer '$USERNAME' wurde erfolgreich erstellt."

    # 5. Ein zufälliges Anfangspasswort für den Benutzer festlegen
    echo "Lege ein zufälliges Anfangspasswort fest..."
    sudo passwd $USERNAME
    echo "Der Benutzer muss sein Passwort bei der ersten Anmeldung ändern."
    sudo chage -d 0 $USERNAME
else
    echo "FEHLER: Benutzer '$USERNAME' konnte nicht erstellt werden."
fi

echo "====================================="
```
