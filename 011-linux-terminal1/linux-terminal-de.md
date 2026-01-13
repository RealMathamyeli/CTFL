# Arbeiten mit der Linux-Shell

## Plan

- Navigieren im Dateisystem mit relativen und absoluten Pfaden
- Anzeigen von Verzeichnisinhalten und Dateien mit ls, cat und less

Umgang mit Dateien und Verzeichnissen

- Erstellen, Umbenennen, Verschieben und Löschen von Dateien und Verzeichnissen mit mkdir, mv, cp, rm
- Anzeigen und Ändern von Dateiattributen und -rechten mit chmod und ls -l

Textbearbeitung auf der Kommandozeile

- Einführung in den Texteditor nano (öffnen, bearbeiten, speichern von Dateien)
- Suchen nach Textstellen und Navigation innerhalb einer Datei mit nano

## Linux Terminal

- Terminal
- Konsole
- Shell (bash, zsh)

## Terminal

- Navigation (Datei und info finden)
- Mit Dateien und Ordner umgehen(bearbeiten)

## Navigieren im Dateisystem

- Bevor du anfangen kannst, musst du wissen, wo du dich befindest.

### Anzeigen von Verzeichnisinhalten und Dateien

- `ls`
- `ls -a`
- `clear`
- Die Pfeiletasten (nach Oben und Nach Unten)
- Kommando `--help`. z.b `ls --help`

### Navigation im Dateisystem

- `cd`: (change Directory)
  - cd NAMEDESORDNERS
  - cd .. (eine Ebene höher)
  - cd (Home Verzeichnis)

#### Arbeiten mit Pfaden

- Wenn du mit dem Terminal navigierst, gehst du durch Pfade.
- Ein Pfad ist die Adresse zu einem Ordner oder einer Datei im Dateisystem.
- Es gibt zwei Arten von Pfaden:
  - Relative Pfade
  - Absolute Pfade
- Relative Pfade:
  - Beginnen vom aktuellen Verzeichnis
  - Man fragt sich "Wie kann ich von meinem aktuellen Ort zu einem anderen Ort kommen?"
  - Beispiel: `cd ../andererOrdner/datei.txt` (geht eine Ebene höher und dann in "andererOrdner")
- Absolute Pfade:
  - Beginnen immer vom `Wurzelverzeichnis` (`/`) oder `Home-Verzeichnis` (`~`)
  - Man fragt sich "Wie komme ich von der Wurzel zu diesem Ort?"
  - Beispiel: `cd ~/dokumente/datei.txt`
- `pwd`: (print working directory)
  - Zeigt den aktuellen Pfad an

---

## Datei- und Ordneroperationen in Terminal

- Du kannst Dateien und Ordner direkt über das Terminal:
  - Erstellen
  - Umbenennen (Bearbeiten)
  - Kopieren
  - Verschieben
  - Löschen

### Erstellen von Dateien und Ordnern

- `mkdir`: (make directory)
- `touch`: (erstellt eine leere Datei)
- `mkdir ordnername`: Erstellt einen neuen Ordner namens "ordnername"
- `touch dateiname.txt`: Erstellt eine neue leere Datei namens "dateiname.txt"

### Umbenennen von Dateien und Ordnern

- `mv`: (move)
- `mv alterName.txt neuerName.txt`: Benennt "alterName.txt" in "neuerName.txt" um
- `mv alterOrdner neuerOrdner`: Benennt "alterOrdner" in "neuerOrdner" um

### Inhalte von Dateien anzeigen

- `cat`: (concatenate)

- `less`: (Seitenweises Anzeigen von Textdateien) - mit `q` beenden.

### Inhalte von Dateien bearbeiten

- `nano`: (Texteditor)
- `nano dateiname.txt`: Öffnet die Datei "dateiname.txt" im Nano-Editor zur Bearbeitung
  - Speichern: `CTRL + O` (Strg + O),
  - Beenden: `CTRL + X` (Strg + X)

### Kopieren von Dateien und Ordnern

- `cp`: (copy)
- `cp quelle.txt ziel.txt`: Kopiert "quelle.txt" nach "ziel.txt"

#### Kopieren von Dateien

- Die Grundstruktur ist immer `cp [WAS soll kopiert werden] [WOHIN soll es kopiert werden]`.

**Syntax:**

```bash
cp [Optionen] [Quelle] [Ziel]
```

#### Kopieren von Ordnern

- Um einen Ordner und seinen gesamten Inhalt zu kopieren, verwende die Option `-r` (rekursiv).

### Verschieben von Dateien und Ordnern

- `mv`: (move)
- `mv quelle.txt ziel.txt`: Verschiebt "quelle.txt" nach "ziel.txt"
- Die Grundstruktur ist immer `mv [WAS soll verschoben werden] [WOHIN soll es verschoben werden]`.

### Löschen von Dateien und Ordnern

- `rm`: (remove)
- `rm dateiname.txt`: Löscht die Datei "dateiname.txt"
- `rm -r ordnername`: Löscht den Ordner "ordnername" und seinen gesamten Inhalt
- Sei vorsichtig mit dem `rm`-Befehl, da gelöschte Dateien und Ordner nicht wiederhergestellt werden können!
