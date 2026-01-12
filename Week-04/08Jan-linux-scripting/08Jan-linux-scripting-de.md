# Automatisierung mit Shell-Skripten

<br><br><br>

## Schreiben und Ausführen einfacher Shell-Skripte zur Automatisierung von Benutzer- und Paketverwaltungsaufgaben

- Stell dir vor, du musst immer wieder die gleichen Befehle in dein Terminal eingeben.
- Das ist mühsam und fehleranfällig!
- Ein Shell-Skript ist wie ein Rezept für deinen Computer.
- Du schreibst die Befehlsabfolge einmal in eine Textdatei, und dann kannst du dieses "Rezept" jederzeit ausführen, damit die Aufgabe automatisch erledigt wird.

### Was ist ein Shell-Skript?

- Ein Shell-Skript ist einfach eine Textdatei, die eine Reihe von Befehlen für die Shell (wie `bash`, die Standard-Shell auf den meisten Linux-Systemen) enthält, die nacheinander ausgeführt werden sollen.
- Das ist unglaublich mächtig für die Automatisierung komplexer Prozesse.
- Ein Beispiel-Anwendungsfall ist die Automatisierung der Erstellung von Benutzerkonten oder System-Updates.

### Aufbau eines einfachen Skripts

- Ein einfaches Shell-Skript sieht normalerweise so aus:

```bash
#!/bin/bash

# Das ist ein Kommentar. Er wird nicht ausgeführt.
echo "Hallo Welt! Mein erstes Skript läuft." # 'echo' gibt Text auf dem Bildschirm aus.

echo "Das heutige Datum ist:"
date # Der 'date'-Befehl zeigt das aktuelle Datum und die Uhrzeit an.
```

1.  **Der "Shebang"**: Die erste Zeile sollte immer `#!/bin/bash` sein (oder der Pfad zu einer anderen Shell).

- Der "Shebang" teilt dem Betriebssystem mit: "Hey, führe alles in dieser Datei mit `/bin/bash` aus."
- Das stellt sicher, dass dein Skript immer unter der beabsichtigten Shell läuft.

2.  **Kommentare**: Zeilen, die mit `#` beginnen, sind Kommentare.

- Die Shell ignoriert sie, aber sie sind extrem nützlich für dich und andere, um zu verstehen, was das Skript tut.
- Guter Code ist immer gut kommentiert!

3.  **Die Befehle**:

- Das ist der Kern deines Skripts.
- Hier schreibst du die Befehle genau so, wie du sie ins Terminal eingeben würdest – einen pro Zeile.

### Praktische Übung - Mein erstes Shell-Skript

- Erstelle ein einfaches Shell-Skript, das das aktuelle Datum ausgibt.

1. Öffne deinen Termnal in Linux.
2. Erstelle eine neue Datei namens `mein-erstes-skript.sh`.
3. Offne die Datei mit einem Texteditor (z.B. `nano mein-erstes-skript.sh`).
4. Füge folgenden Code in die Datei ein:

```bash
#!/bin/bash

# Das ist ein Kommentar. Er wird nicht ausgeführt.
echo "Hallo Welt! Mein erstes Skript läuft." # 'echo' gibt Text auf dem Bildschirm aus.

echo "Das heutige Datum ist:"
date # Der 'date'-Befehl zeigt das aktuelle Datum und die Uhrzeit an.
```

5. Speichere die Datei und schließe den Editor.
6. Mache das Skript ausführbar mit dem `chmod`-Befehl von Gestern.
7. Führe das Skript aus mit `./mein-erstes-skript.sh`.
8. Was siehst du als Ausgabe?
   <br><br><br>

### Ein Skript ausführbar machen und ausführen

- Nachdem du dein Skript als Textdatei gespeichert hast (z.B. `mein_erstes_skript.sh`), kannst du es nicht sofort ausführen.
- Du musst dem System erst mitteilen, dass diese Datei ein Programm ist, das ausgeführt werden darf.

1.  **Mach es ausführbar:** Verwende den `chmod`-Befehl (change mode).

```bash
chmod +x mein_erstes_skript.sh
```

    `+x` fügt ausführbare Rechte hinzu ("e**x**ecute"). Du musst das nur einmal pro Skript machen.

2.  **Führe es aus:** Um das Skript zu starten, musst du den Pfad angeben. Wenn du dich im selben Verzeichnis wie das Skript befindest:

```bash
./mein_erstes_skript.sh
```

- Das `./` am Anfang ist wichtig.
- Es ist die Kurzform für "in diesem Verzeichnis". Es teilt der Shell mit, dass sie nicht das ganze System nach einem Programm namens `mein_erstes_skript.sh` durchsuchen soll, sondern das hier verwenden soll.

---

<br><br><br>

## Beispiele von Shell-Skripten

### Beispiel 1: Automatisierung der Paketverwaltung

- Ein System auf dem neuesten Stand zu halten und Standardsoftware zu installieren, ist eine wiederkehrende Aufgabe.

- **Das Skript `system_update.sh`:**

```bash
#!/bin/bash

# Skript zum Aktualisieren des Systems und Installieren nützlicher Pakete

echo "=== Starte System-Update und Installation ==="

# 1. Paketlisten aktualisieren
echo "--> Aktualisiere Paketlisten..."
sudo apt update

# 2. Installierte Pakete auf die neuesten Versionen upgraden
# Die Option -y beantwortet alle Aufforderungen automatisch mit "Ja"
echo "--> Upgrade installierter Pakete..."
sudo apt upgrade -y

# 3. Nützliche Standardpakete installieren
# Wenn ein Paket bereits installiert ist, passiert nichts.
echo "--> Installiere nützliche Tools (curl, htop, git)..."
sudo apt install -y curl htop git

# 4. Veraltete Pakete und Abhängigkeiten entfernen
echo "--> Räume das System auf..."
sudo apt autoremove -y

echo "=== System ist auf dem neuesten Stand! ==="
```

**Was passiert Schritt für Schritt?**

1.  `sudo apt update`: Synchronisiert die lokale Paketliste mit den Servern, damit das System über neue Versionen Bescheid weiß.
2.  `sudo apt upgrade -y`: Aktualisiert alle installierten Pakete. Das `-y` ist für Skripte unerlässlich, da es Aufforderungen automatisch beantwortet und verhindert, dass das Skript anhält.
3.  `sudo apt install -y ...`: Installiert die angegebenen Programme. Wenn sie bereits vorhanden sind, macht `apt` nichts.
4.  `sudo apt autoremove -y`: Entfernt nicht verwendete Pakete (z.B. alte Kernel-Versionen oder Bibliotheken, die kein Programm mehr benötigt). Das hält das System sauber.

<br><br><br>

## Praktische Beispiele für Automatisierung in der alltäglichen Systemarbeit

- Sobald du die Grundlagen verstanden hast, kannst du anfangen, alle möglichen wiederkehrenden Aufgaben zu automatisieren.
- Hier sind einige Ideen und Beispiele, die für Systemadministratoren oder Power-User nützlich sind.

### Beispiel 1: Automatisches Backup-Skript

- Regelmäßige Backups sind unerlässlich. Anstatt Ordner manuell zu kopieren, kann ein Skript das für dich tun – sie komprimieren und mit einem Zeitstempel versehen.

**Das Skript `backup_projekte.sh`:**

```bash
#!/bin/bash

# Ein einfaches Skript zum Sichern eines Verzeichnisses.

# --- Konfiguration ---
# Welcher Ordner soll gesichert werden?
SOURCE_DIR="/home/dein_benutzer/wichtige_projekte"

# Wo sollen die Backups gespeichert werden?
BACKUP_DIR="/mnt/backup_laufwerk/projekt_backups"

# --- Skriptlogik ---
echo "Starte Backup..."

# Erstelle einen Dateinamen mit dem aktuellen Datum und der Uhrzeit
# Format: backup-JAHR-MONAT-TAG_STUNDE-MINUTE-SEKUNDE.tar.gz
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
FILENAME="backup-$TIMESTAMP.tar.gz"
DESTINATION="$BACKUP_DIR/$FILENAME"

# Erstelle das komprimierte Archiv mit 'tar'
# -c: Archiv erstellen
# -z: gzip-Komprimierung
# -f: Dateiname folgt
tar -czf "$DESTINATION" "$SOURCE_DIR"

echo "Backup erfolgreich erstellt unter: $DESTINATION"
```

**Wie es funktioniert:**

1.  **Variablen:** Oben legst du Quell- und Zielverzeichnisse fest, sodass du das Skript später leicht anpassen kannst.
2.  **Zeitstempel:** `$(date +"...")` führt den date-Befehl aus und erfasst seine Ausgabe, formatiert schön einen Zeitstempel für den Dateinamen.
3.  **tar-Befehl:** `tar` ist ein klassisches Linux-Tool zum Packen von Dateien. Es packt den gesamten Inhalt von `SOURCE_DIR` in eine einzelne Datei (`.tar`) und komprimiert sie (`.gz`).

**Nächster Schritt?** Du könntest dieses Skript mit einem Cron-Job verbinden, damit es automatisch jeden Tag um 3 Uhr morgens läuft. Das ist echte Automatisierung!

### Beispiel 2: Einfache Systemprüfung

- Du möchtest einen schnellen Überblick über deinen Systemstatus – ohne mehrere Befehle einzugeben?
- Ein Prüfskript kann wichtige Informationen für dich zusammenfassen.

**Das Skript `system_check.sh`:**

```bash
#!/bin/bash

# Skript zur Anzeige wichtiger Systeminformationen

# Ausgabe mit Trennlinien formatieren
echo "========================================="
echo "       Systemstatus-Bericht"
echo "========================================="
echo ""

# 1. Festplattennutzung der Hauptpartition (/)
# df -h: menschenlesbare Festplattennutzung
# grep "/$": filtert die Zeile, die mit "/" endet
DISK_USAGE=$(df -h | grep "/$")
echo "### Festplattennutzung ###"
echo "$DISK_USAGE"
echo ""

# 2. RAM- und Swap-Nutzung
# free -h: zeigt RAM-Nutzung in menschenlesbarer Form
echo "### Speichernutzung ###"
free -h
echo ""

# 3. CPU-Lastdurchschnitte über die letzten 1, 5 und 15 Minuten
# uptime: zeigt, wie lange das System läuft, und den "Load Average"
LOAD_AVG=$(uptime | awk -F'load average: ' '{print $2}')
echo "### CPU-Last (Load Average) ###"
echo "Letzte 1, 5, 15 Minuten: $LOAD_AVG"
echo ""

echo "========================================="
```

**Wie es funktioniert:**

1.  **Befehlsausgaben in Variablen speichern:** `VARIABLE=$(befehl)` führt den Befehl aus und speichert seine Ausgabe.
2.  **Textverarbeitung:** Tools wie `grep` und `awk` filtern die Ausgabe, sodass du nur das Relevante anzeigst. Das ist eine gängige Shell-Skript-Technik.
3.  **Formatierte Ausgabe:** Strategischer Einsatz von `echo` und Trennlinien macht einen auf einen Blick lesbaren Bericht.

### Beispiel 3: Alte Logdateien aufräumen

Server und Apps erzeugen viele Logdateien. Wenn du sie nicht regelmäßig aufräumst, können sie dein Laufwerk füllen.

**Das Skript `log_cleanup.sh`:**

```bash
#!/bin/bash

# WARNUNG: Dieses Skript löscht Dateien!
# Führe es immer erst ohne '-delete' aus, um zu testen!

# --- Konfiguration ---
LOG_DIR="/var/log/meine_app_logs"
DAYS_TO_KEEP=30 # Lösche alle Logdateien, die älter als 30 Tage sind

# --- Skriptlogik ---
echo "Suche nach Logdateien in '$LOG_DIR', die älter als $DAYS_TO_KEEP Tage sind..."

# Der 'find'-Befehl ist extrem leistungsfähig für die Suche nach Dateien.
# find [pfad] -type f -name "*.log" -mtime +[tage]
#
# Erklärung:
# [pfad]: zu durchsuchendes Verzeichnis
# -type f: nur Dateien, keine Ordner
# -name "*.log": Dateien, die mit .log enden
# -mtime +30: Dateien, die vor mehr als 30 Tagen geändert wurden

# ERST TESTEN! Dieser Befehl zeigt, was gelöscht würde:
echo "Die folgenden Dateien würden gelöscht:"
find "$LOG_DIR" -type f -name "*.log" -mtime +$DAYS_TO_KEEP
echo ""

# Wenn du sicher bist, kommentiere die nächste Zeile aus, um wirklich zu löschen:
# find "$LOG_DIR" -type f -name "*.log" -mtime +$DAYS_TO_KEEP -delete

echo "Cleanup-Prüfung abgeschlossen."
echo "Um Dateien tatsächlich zu löschen, musst du das Skript bearbeiten."
```

**Wie es funktioniert & wichtige Warnung:**

1.  **Der `find`-Befehl:** Das ist der Kern. `find` ist ein vielseitiges Werkzeug zum Finden von Dateien/Ordnern basierend auf Kriterien wie Name, Größe und Änderungsdatum.
2.  **Sicherheit zuerst:** **Lösche niemals blind Dateien mit einem Skript!** Die Strategie hier:
    - Lass das Skript zuerst _anzeigen_, was gelöscht würde (führe `find ...` ohne `-delete` aus).
    - Überprüfe die Ausgabe. Sind das wirklich die zu löschenden Dateien?
    - Nur wenn du absolut sicher bist, füge `-delete` hinzu (oder leite an `xargs rm` weiter), um die Dateien wirklich zu löschen.
