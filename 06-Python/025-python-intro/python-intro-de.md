# 🐍 Einführung in die Python-Programmierung

**Python-Überblick**

- Typische Anwendungsgebiete von Python
- Wichtige Merkmale der Sprache

**Entwicklungsumgebung einrichten**

- Installation von Python

**Erste Schritte in der IDE**

- Anlegen von virtuellen Umgebungen (venv)
- Anlegen und Ausführen eines Python-Projekts

<br><br><br>

## 🚀 Typische Anwendungsgebiete von Python

Stell dir Python wie ein Schweizer Taschenmesser für Programmierer vor. Es ist unglaublich vielseitig und kann für eine riesige Bandbreite von Aufgaben eingesetzt werden. Hier sind die wichtigsten Gebiete, in denen Python glänzt:

<br>

### 🧠 Datenanalyse, Maschinelles Lernen & Künstliche Intelligenz (KI)

Dies ist heutzutage das absolute Steckenpferd von Python. Wenn du Daten auswerten, Muster erkennen oder Computern beibringen möchtest, selbstständig zu lernen, ist Python die erste Wahl.

- **Was bedeutet das?** Stell dir vor, du hast eine riesige Tabelle mit Verkaufszahlen. Mit Python kannst du herausfinden, welche Produkte sich am besten verkaufen, wann die meisten Kunden einkaufen und sogar vorhersagen, wie die Verkäufe nächsten Monat aussehen werden.
- **Wichtige Werkzeuge (Bibliotheken):**
  - **Pandas:** Das Arbeitstier für die Datenanalyse. Damit kannst du Daten einlesen, säubern und bearbeiten (wie in einer Super-Excel-Tabelle).
  - **NumPy:** Die Grundlage für alle wissenschaftlichen Berechnungen, besonders für die Arbeit mit großen Zahlenmengen (Arrays).
  - **Scikit-learn:** Eine fantastische Bibliothek für Maschinelles Lernen, mit der du Vorhersagemodelle bauen kannst.
  - **TensorFlow & PyTorch:** Die Schwergewichte für Deep Learning und den Bau von künstlichen neuronalen Netzen (das Herzstück moderner KI).

<br>

### 🌐 Webentwicklung (Backend)

Jede komplexe Webseite oder Web-App hat einen "Motor" im Hintergrund, der die Logik steuert, mit Datenbanken spricht und die Daten an die sichtbare Webseite sendet. Diesen Teil nennt man Backend, und Python ist hierfür hervorragend geeignet.

- **Was bedeutet das?** Wenn du dich bei Instagram einloggst, einen Post likest oder ein neues Bild hochlädst, läuft im Hintergrund Python-Code, der diese Anfragen verarbeitet.
- **Wichtige Werkzeuge (Frameworks):**
  - **Django:** Ein sehr mächtiges und umfangreiches Framework, das dir viele Standardaufgaben (wie Benutzerverwaltung oder Admin-Oberflächen) abnimmt. Ideal für große, komplexe Projekte.
  - **Flask:** Ein sogenanntes "Micro-Framework". Es ist viel schlanker und flexibler als Django und gibt dir mehr Freiheit. Ideal für kleinere Projekte oder wenn du die volle Kontrolle haben willst.

<br>

### 🤖 Automatisierung und Skripting

Hast du sich wiederholende, langweilige Aufgaben am Computer? Python ist perfekt dafür geeignet, diese zu automatisieren. Es wird oft als "Klebstoff-Sprache" (Glue Language) bezeichnet, weil es verschiedene Systeme und Programme miteinander verbinden kann.

- **Was bedeutet das?**
  - Du könntest ein Python-Skript schreiben, das automatisch hunderte von Dateien umbenennt.
  - Es könnte jeden Morgen die Wettervorhersage abrufen und dir eine E-Mail schicken.
  - Es kann Daten von einer Webseite herunterladen und in einer Tabelle speichern.
  - Systemadministratoren nutzen es, um Server zu verwalten und Backups zu erstellen.

<br>

### 🖥️ Desktop-Anwendungen

Du kannst mit Python auch ganz klassische Programme mit einer grafischen Benutzeroberfläche (GUI) erstellen, die du auf deinem Windows-PC, Mac oder Linux-Rechner ausführen kannst.

- **Was bedeutet das?** Du könntest einen einfachen Taschenrechner, einen Texteditor oder ein kleines Verwaltungsprogramm mit Fenstern, Knöpfen und Menüs bauen.
- **Wichtige Werkzeuge (Bibliotheken):**
  - **Tkinter:** Ist bereits in Python enthalten und sehr einfach für den Einstieg.
  - **PyQt** oder **PySide:** Sehr mächtig und professionell, damit lassen sich komplexe Anwendungen erstellen.

<br>

### 🎮 Spieleentwicklung

Obwohl die großen, grafisch aufwendigen Spiele (wie "Call of Duty" oder "FIFA") meist in anderen Sprachen wie C++ geschrieben werden, eignet sich Python hervorragend, um die Grundlagen der Spieleentwicklung zu lernen und kleinere 2D-Spiele oder Prototypen zu erstellen.

- **Wichtiges Werkzeug (Bibliothek):**
  - **Pygame:** Eine sehr beliebte und einsteigerfreundliche Bibliothek, um Spiele mit Python zu entwickeln.

<br><br><br>

## ✨ Wichtige Merkmale der Sprache

Was macht Python so besonders und bei Anfängern und Profis gleichermaßen beliebt? Das liegt an einigen grundlegenden Eigenschaften der Sprache.

<br>

### 📖 Einfach zu lernen und zu lesen

Die Syntax (also die Grammatik und die Regeln der Sprache) von Python ist bewusst einfach und sauber gehalten. Der Code liest sich fast wie englischer Text. Es gibt wenig "syntaktischen Zucker" oder kryptische Symbole, was es Anfängern sehr leicht macht, die Grundlagen zu verstehen.

- **Beispiel:** Anstatt geschweifte Klammern `{}` zu verwenden, um Code-Blöcke zu definieren, nutzt Python einfach Einrückungen (Leerzeichen am Anfang einer Zeile). Das zwingt Programmierer zu einem sauberen und gut lesbaren Programmierstil.

<br>

### 🏃‍♀️ Interpretierte Sprache

Python ist eine interpretierte Sprache. Das bedeutet, du brauchst keinen Zwischenschritt, um deinen Code in Maschinensprache zu übersetzen (das nennt man Kompilieren). Ein Programm namens "Interpreter" liest deinen Code Zeile für Zeile und führt ihn direkt aus.

- **Vorteil:** Das macht die Entwicklung sehr schnell. Du schreibst eine Zeile Code, führst sie aus und siehst sofort das Ergebnis. Das ist ideal zum Experimentieren und für schnelles Prototyping.
- **Nachteil:** Interpretierte Sprachen sind in der Regel langsamer als kompilierte Sprachen (wie C++ oder Java), weil die Übersetzung zur Laufzeit stattfindet. Für die meisten Anwendungsgebiete von Python ist die Geschwindigkeit aber mehr als ausreichend.

<br>

### 📦 Riesige Standardbibliothek ("Batteries included")

Python folgt der Philosophie "Batteries included" (Batterien sind bereits enthalten). Das bedeutet, dass schon die Standardinstallation von Python eine riesige Sammlung an Modulen und Werkzeugen für alltägliche Aufgaben mitbringt.

- **Was bedeutet das?** Du musst nicht für alles das Rad neu erfinden. Du willst mit Dateien arbeiten, Daten aus dem Internet laden, mit Datum und Uhrzeit rechnen oder Daten komprimieren? Dafür gibt es bereits fertige Module in Python, die du nur noch importieren und benutzen musst.

<br>

### 🌍 Große Community und viele externe Bibliotheken

Neben der Standardbibliothek gibt es eine unglaublich große und aktive Community, die unzählige weitere, kostenlose Bibliotheken für fast jeden denkbaren Anwendungsfall entwickelt hat.

- **PyPI (Python Package Index):** Dies ist ein riesiges Online-Verzeichnis, in dem Hunderttausende dieser externen Pakete gesammelt sind. Mit einem einfachen Befehl (`pip install paketname`) kannst du diese in Sekundenschnelle installieren und in deinen Projekten verwenden. Egal ob du eine Webseite bauen, Daten visualisieren oder eine KI trainieren willst – es gibt mit Sicherheit schon eine Bibliothek dafür.

<br>

### 💻 Plattformunabhängigkeit

Python-Code ist plattformunabhängig. Das bedeutet, du kannst ein Programm auf einem Windows-Computer schreiben und es wird (in der Regel ohne Änderungen) auch auf einem Mac oder einem Linux-System laufen. Du musst nur sicherstellen, dass auf dem jeweiligen System ein Python-Interpreter installiert ist.

<br>

### 👐 Open Source und kostenlos

Python ist komplett kostenlos und Open Source. Du kannst es herunterladen, für private und kommerzielle Projekte verwenden und sogar den Quellcode der Sprache selbst einsehen und verändern, ohne jemals Lizenzgebühren zahlen zu müssen. Dies hat maßgeblich zu seiner weiten Verbreitung und der großen, hilfsbereiten Community beigetragen.

<br><br><br>

# 🛠️ Entwicklungsumgebung einrichten

Stell dir vor, du möchtest ein Möbelstück aus Holz bauen. Was brauchst du dafür? Zuerst einmal das Material, also das Holz. Und dann brauchst du Werkzeuge – eine Säge, einen Hammer, Schrauben, einen Schraubenzieher und eine Werkbank, auf der du arbeiten kannst.

In der Programmierung ist das ganz ähnlich. Deine "Entwicklungsumgebung" ist deine digitale Werkstatt. Sie besteht aus zwei Hauptteilen:

1.  **Die Programmiersprache (das "Holz"):** Das ist in unserem Fall Python. Es ist das Material, aus dem du deine Programme baust.
2.  **Die IDE (deine "Werkbank mit Werkzeugen"):** Das ist ein spezielles Programm, das dir beim Schreiben deines Codes hilft. Es ist viel mehr als ein einfacher Texteditor wie Notepad. Es ist deine Werkbank, die Säge, der Hammer und der Schraubenzieher in einem.

Lass uns nun deine digitale Werkstatt Schritt für Schritt einrichten.

<br><br><br>

## 🐍 Installation von Python

Bevor du anfängst zu programmieren, musst du sicherstellen, dass dein Computer die Sprache Python überhaupt "versteht". Dazu installieren wir den sogenannten **Python-Interpreter**.

Stell dir den Interpreter wie einen Übersetzer vor. Du schreibst deine Anweisungen in der Programmiersprache Python, und der Interpreter übersetzt diese Anweisungen in eine Sprache, die der Computer direkt ausführen kann (Maschinensprache). Ohne diesen Übersetzer wäre dein Code nur eine nutzlose Textdatei.

<br><br><br>

### Python installieren (Beispiel: Linux):

Öffne ein Terminal und führe die folgenden Befehle basierend auf deiner Linux-Distribution Zeile für Zeile aus:

- **Ubuntu/Debian:**

  ```bash
  sudo apt update && sudo apt upgrade -y
  sudo apt install python3 python3-venv python3-pip
  ```

- Der obige Befehl installiert Python 3, das `venv`-Modul zum Erstellen virtueller Umgebungen und `pip` zur Paketverwaltung.
- Installation überprüfen:

  ```bash
  python3 --version
  ```

### ✅ Schritt 3: Die Installation überprüfen

Öffne ein Terminal oder eine Eingabeaufforderung und führe aus:

```bash
python3 --version
```

Wenn erfolgreich, siehst du etwas wie `Python 3.12.1`.
Herzlichen Glückwunsch — dein Programmier-"Material" ist bereit!

## IDE einrichten (VS Code):

1. **Öffne VS Code.**
2. **Python-Erweiterung installieren:**
   - Gehe zur Erweiterungs-Ansicht (`Strg+Umschalt+X`).
   - Suche nach "Python" und installiere die offizielle Erweiterung von Microsoft.

## 📂 Python-Projekt erstellen und ausführen

### 🏁 Ein neues Projekt starten

Ein "Projekt" in deiner IDE ist im Grunde ein Ordner auf deinem Computer mit einigen Konfigurationsdateien.
Hier ist der übliche Ablauf:

1. **Menü:** Klicke auf `Datei > Neues Projekt...`
2. **Speicherort und Name:** Wähle einen Ordner und Namen, z.B.
   `C:\Users\DeinName\Dokumente\PythonProjects\MeinErstesProjekt`
3. **Interpreter konfigurieren:**
   - Erstelle eine neue **venv** (empfohlen).
   - Oder verwende eine bestehende **Conda**-Umgebung, falls zutreffend.

4. **Erstellen:** Klicke auf "Erstellen".

Die IDE richtet den Projektordner ein, erstellt eine virtuelle Umgebung und generiert oft eine Beispieldatei `main.py`.

<br>

### 📝 Eine Python-Datei erstellen

1. **Projektansicht:** Öffne die linke Seitenleiste, um deine Ordnerstruktur zu sehen.
2. **Rechtsklick:** Auf den Haupt-Projektordner.
3. **Neu > Python-Datei:**
4. **Namen vergeben:** z.B. `app` oder `main` (kein `.py` hinzufügen nötig).

Jetzt kannst du mit dem Programmieren beginnen.

<br>

### ▶️ Den Code ausführen

Schreibe etwas Einfaches in deine neue Datei:

```python
name = "Welt"
print(f"Hallo, {name}!")

for i in range(5):
    print(f"Zähle... {i+1}")
```

**Möglichkeiten, es auszuführen:**

1. **Grüner "Play"-Button:** Normalerweise oben rechts in deiner IDE. Führt die aktuelle oder Haupt-Datei aus.
2. **Rechtsklick im Editor:** Wähle "Ausführen 'app'" (oder dein Dateiname).
3. **Terminal:** Öffne das eingebaute Terminal und tippe:

   ```bash
   python app.py
   ```

Ausgabe:

```
Hallo, Welt!
Zähle... 1
Zähle... 2
Zähle... 3
Zähle... 4
Zähle... 5
```

<br><br><br>

## 🌳 Virtuelle Umgebungen erstellen (venv)

### 🤔 Was ist eine virtuelle Umgebung?

Stell dir vor, du arbeitest an zwei verschiedenen Projekten. Projekt A ist ein altes Projekt und benötigt eine bestimmte, ältere Version einer Bibliothek (nennen wir sie mal `ZauberTool 1.0`). Projekt B ist brandneu und du möchtest die neueste, tollste Version derselben Bibliothek verwenden (`ZauberTool 3.5`).

Wenn du beide Bibliotheken einfach so auf deinem Computer installierst, kommt es zu einem Konflikt. Entweder hast du Version 1.0 oder 3.5 – aber nicht beide gleichzeitig für unterschiedliche Zwecke. Das ist ein riesiges Problem!

Genau hier kommt die **virtuelle Umgebung** (virtual environment, kurz `venv`) ins Spiel.

Eine `venv` ist wie eine isolierte, magische Box für jedes deiner Python-Projekte. In diese Box packst du eine eigene Kopie von Python und alle Bibliotheken (Pakete), die nur für _dieses eine Projekt_ benötigt werden.

**Die Vorteile sind riesig:**

- **Isolation:** Jedes Projekt hat seine eigenen Pakete. Projekt A kann `ZauberTool 1.0` haben und Projekt B `ZauberTool 3.5`, ohne dass sie sich gegenseitig stören.
- **Sauberkeit:** Dein Haupt-Python auf dem Computer bleibt sauber und unberührt. Du müllst es nicht mit hunderten Paketen von verschiedenen Projekten zu.
- **Portabilität:** Du kannst eine Liste aller Pakete in deiner `venv` erstellen (eine `requirements.txt`-Datei). Wenn ein Kollege an deinem Projekt arbeiten will, kann er mit dieser Liste eine exakt gleiche virtuelle Umgebung auf seinem Rechner erstellen.

Kurz gesagt: Eine virtuelle Umgebung ist dein persönlicher, aufgeräumter Werkzeugkasten für jedes einzelne Projekt.

<br>
<br>
<br>

## 🛠️ Wie erstelle ich eine `venv` in der IDE?

### 🧰 Prerequisites

- **Python** is already installed (`python --version` to check).
- **Git Bash** is installed on your system (Windows).

---

### ⚙️ Step-by-Step Guide

1. **Navigate to your project folder**

   ```bash
   cd /c/Users/Markus/Desktop/my-project
   ```

2. **Create a virtual environment**

   ```bash
   python -m venv venv
   ```

   > This creates a folder called `venv` inside your project.

3. **Activate the virtual environment**
   In Git Bash, the regular Windows command (`venv\Scripts\activate`) won’t work properly because it uses PowerShell syntax.
   Use this instead:

   ```bash
   source venv/Scripts/activate
   ```

   > You should now see `(venv)` at the beginning of your terminal line — that means the environment is active.

4. **Install packages (e.g., Flask as a test)**

   ```bash
   pip install flask
   ```

5. **Check installed packages**

   ```bash
   pip list
   ```

6. **Deactivate the environment**

   ```bash
   deactivate
   ```

---

### 💡 Optional: Shortcut

If you want, you can create an alias in your `~/.bashrc`:

```bash
alias activatevenv='source venv/Scripts/activate'
```

Then simply run:

```bash
activatevenv
```

<br><br><br>
