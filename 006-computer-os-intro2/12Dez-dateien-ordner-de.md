###### Themen

Dateisystem-Grundlagen

- Ordnerstruktur und Hierarchie verstehen
- Unterschied zwischen Dateien und Ordnern

Dateioperationen

- Erstellen, Benennen und Speichern von Dateien und Ordnern
- Kopieren, Verschieben und Löschen von Dateien und Ordnern

Arbeiten mit Anwendungen

- Einfache Textverarbeitung: Dokumente öffnen, speichern und drucken
- Taschenrechner zur Durchführung einfacher Berechnungen nutzen

<br>
<br>
<br>

# 📂 Dateisystem-Grundlagen

Stell dir vor, dein Computer ist ein riesiger Aktenschrank. Das Dateisystem ist das System, mit dem du die Schubladen, Hängeregister und einzelnen Dokumente organisierst, damit du alles schnell findest. Es legt fest, wie und wo deine Daten gespeichert, benannt und wiedergefunden werden. Ohne ein Dateisystem wäre dein Computer nur eine Ansammlung von unsortierten Informationen – ein reines Chaos!

<br>
<br>
<br>

## 🌳 Ordnerstruktur und Hierarchie verstehen

Die Art und Weise, wie Daten in einem Dateisystem organisiert sind, nennt man **Hierarchie**. Das klingt kompliziert, ist aber ganz einfach. Denk an einen Stammbaum: Es gibt die Großeltern, dann die Eltern, dann die Kinder. Jeder hat seinen festen Platz in der Struktur.

### 🗺️ Die Wurzel (Root)

Jedes Dateisystem hat einen Ausgangspunkt, sozusagen den Hauptstamm des Baumes. Diesen nennt man **Wurzelverzeichnis** oder auf Englisch **Root**. Von hier aus verzweigt sich alles Weitere. Bei Windows-Systemen ist das oft ein Laufwerksbuchstabe wie `C:\`. Bei Linux oder macOS ist es einfach ein Schrägstrich `/`.

### 📂 Ordner und Unterordner

Ein **Ordner** (manchmal auch **Verzeichnis** genannt) ist wie eine Schublade in deinem Aktenschrank. Du kannst darin Dinge aufbewahren. Um die Ordnung zu verbessern, kannst du in eine Schublade weitere kleine Kästen stellen. Das sind die **Unterordner**.

Ein typisches Beispiel könnte so aussehen:

- `C:\` (Das ist die Wurzel, dein Hauptlaufwerk)
  - `Benutzer` (Ein Ordner direkt im Hauptlaufwerk)
    - `DeinName` (Ein Unterordner im Ordner "Benutzer")
      - `Dokumente` (Ein weiterer Unterordner)
      - `Bilder` (Noch ein Unterordner auf derselben Ebene wie "Dokumente")
        - `Urlaub 2025` (Ein Unterordner in "Bilder")
      - `Musik`

Diese verschachtelte Struktur hilft dir, den Überblick zu behalten. Du weißt genau, dass du deine Urlaubsfotos im Ordner "Urlaub 2025" findest, der sich im Ordner "Bilder" befindet, und so weiter.

### 📍 Der Pfad

Der genaue "Weg" zu einer Datei oder einem Ordner wird als **Pfad** bezeichnet. Der Pfad zu deinem Urlaubsordner aus dem Beispiel oben wäre: `C:\Benutzer\DeinName\Bilder\Urlaub 2025`. Wie eine genaue Adresse für deine Daten.

<br>
<br>
<br>

## 📁 Unterschied zwischen Dateien und Ordnern

Obwohl sie oft zusammen verwendet werden, sind Dateien und Ordner zwei grundlegend verschiedene Dinge. Es ist wichtig, den Unterschied zu kennen, um deinen Computer effektiv nutzen zu können.

### 📄 Was ist eine Datei?

Eine **Datei** (englisch: File) ist der eigentliche Behälter für deine Informationen. Das kann alles Mögliche sein: ein Text, den du geschrieben hast, ein Foto, das du gemacht hast, ein Lied, das du hörst, oder ein Programm, das du ausführst. Jede Datei hat einen Namen und eine Endung (z.B. `.txt`, `.jpg`, `.mp3`), die dem Computer verrät, um welche Art von Datei es sich handelt und mit welchem Programm er sie öffnen soll.

**Beispiele für Dateien:**

- `Lebenslauf.docx` (Ein Textdokument)
- `Sonnenuntergang.jpg` (Ein Bild)
- `Lieblingslied.mp3` (Eine Musikdatei)
- `Photoshop.exe` (Eine ausführbare Programmdatei)

### 📂 Was ist ein Ordner?

Ein **Ordner** (englisch: Folder oder Directory) ist hingegen nur ein **Container**. Er enthält selbst keine direkten Informationen wie Text oder Bilder. Seine einzige Aufgabe ist es, andere Dateien und auch weitere Ordner zu beherbergen und zu organisieren. Er ist also die Schublade, während die Datei das Dokument darin ist.

### ⚖️ Die Unterschiede auf einen Blick

| Eigenschaft  | 📄 Datei                                                             | 📂 Ordner                                                           |
| :----------- | :------------------------------------------------------------------- | :------------------------------------------------------------------ |
| **Zweck**    | Speichert konkrete Daten (Text, Bild, Musik etc.).                   | Dient zur Organisation von Dateien und anderen Ordnern.             |
| **Inhalt**   | Enthält Informationen, die von einem Programm gelesen werden können. | Enthält eine Liste von Dateien und Unterordnern.                    |
| **Analogie** | Ein Blatt Papier, ein Foto, eine CD.                                 | Ein Aktenordner, eine Schublade, ein Hängeregister.                 |
| **Größe**    | Hat eine bestimmte Dateigröße (z.B. 2 Megabyte).                     | Hat in der Regel selbst keine nennenswerte Größe (nur sein Inhalt). |
| **Symbol**   | Zeigt oft eine Vorschau oder ein Programmsymbol.                     | Wird meist als Mappe oder Aktenordner dargestellt.                  |

Kurz gesagt: **Dateien beinhalten die Arbeit, Ordner schaffen die Ordnung.** Du steckst deine `Dateien` in `Ordner`, um sie nicht zu verlieren und logisch zu gruppieren.

<br>
<br>
<br>

# 🛠️ Dateioperationen

Dateioperationen sind all die grundlegenden Dinge, die du mit deinen Dateien und Ordnern machst. Stell es dir so vor, als würdest du mit echten Dokumenten und Mappen auf deinem Schreibtisch arbeiten: Du nimmst ein neues Blatt Papier, beschriftest es, legst es in eine Mappe, verschiebst die Mappe in ein anderes Regal oder wirfst ein altes Blatt in den Papierkorb.

<br>
<br>
<br>

## ✨ Erstellen, Benennen und Speichern von Dateien und Ordnern

Dies sind die ersten Schritte, um Ordnung in dein digitales Leben zu bringen. Du erschaffst neue Elemente und gibst ihnen einen sinnvollen Namen, damit du sie später wiederfindest.

### 🆕 Erstellen

**Einen neuen Ordner erstellen:**
Wenn du ein neues Projekt beginnst, zum Beispiel ein Referat über "Die Planeten", ist es schlau, zuerst einen passenden Ordner dafür zu erstellen.

1.  Gehe an den Ort, wo der Ordner liegen soll (z.B. auf den Desktop oder in deinen "Dokumente"-Ordner).
2.  Mache einen **Rechtsklick** auf eine freie Fläche.
3.  Im Menü, das erscheint, wähle **"Neu"** und dann **"Ordner"**.
4.  Es erscheint ein neuer Ordner, dessen Name markiert ist. Jetzt kannst du ihm sofort einen Namen geben.

**Eine neue Datei erstellen:**
Das Erstellen einer neuen Datei passiert meistens direkt aus einem Programm heraus.

1.  Öffne das Programm, mit dem du arbeiten möchtest (z.B. ein Textverarbeitungsprogramm wie Word oder ein Bildbearbeitungsprogramm).
2.  Im Programm klickst du meistens auf **"Datei"** und dann auf **"Neu"**.
3.  Jetzt hast du eine leere Datei (ein leeres Dokument, ein leeres Bild etc.), die du bearbeiten kannst. Sie existiert aber bisher nur im Arbeitsspeicher des Computers. Um sie dauerhaft zu behalten, musst du sie speichern.

### ✏️ Benennen und Umbenennen

Ein guter Name ist Gold wert\! `Dokument1.docx` ist keine große Hilfe, wenn du in drei Wochen wissen willst, was darin steht. Sei also so genau wie möglich\! `Referat_Planeten_Mars.docx` ist viel besser.

**Beim Erstellen benennen:**
Wie oben beschrieben, kannst du einem neuen Ordner direkt bei der Erstellung einen Namen geben. Bei Dateien vergibst du den Namen im Moment des ersten Speicherns.

**Etwas umbenennen:**
Wenn du dich vertippt hast oder ein besserer Name her muss:

1.  Klicke einmal auf die Datei oder den Ordner, um sie/ihn zu markieren.
2.  Mache einen **Rechtsklick** auf das markierte Element.
3.  Wähle im Menü die Option **"Umbenennen"**.
4.  Der Name wird wieder bearbeitbar und du kannst ihn ändern. Drücke am Ende die **Enter-Taste**.

### 💾 Speichern

Das Speichern ist wie das Ablegen eines Dokuments in deinem echten Aktenschrank. Tust du es nicht, ist deine ganze Arbeit weg, sobald du das Programm schließt oder der Strom ausfällt.

1.  In deinem Programm klickst du im Menü auf **"Datei"** und dann auf **"Speichern"** oder **"Speichern unter..."**.
    - **"Speichern":** Wenn die Datei schon einen Namen und einen Ort hat, wird sie einfach mit den neuesten Änderungen überschrieben.
    - **"Speichern unter...":** Diesen Befehl nutzt du, wenn du eine Datei zum allerersten Mal speicherst oder wenn du eine Kopie unter einem anderen Namen oder an einem anderen Ort anlegen willst.
2.  Es öffnet sich ein Fenster (der "Speichern-Dialog").
3.  Hier wählst du den **Ort** (also den Ordner), wo die Datei liegen soll.
4.  Ganz unten gibst du den **Dateinamen** ein.
5.  Ein Klick auf den **"Speichern"**-Knopf, und deine Datei ist sicher auf der Festplatte abgelegt.

<br>
<br>
<br>

## 📦 Kopieren, Verschieben und Löschen von Dateien und Ordnern

Das sind die Aktionen, mit denen du deine bestehende Ordnung verwaltest und aufräumst.

### 👯 Kopieren (Duplizieren)

Beim Kopieren erstellst du ein exaktes Duplikat einer Datei oder eines Ordners (inklusive seines gesamten Inhalts) an einem anderen Ort. Das Original bleibt dabei unberührt an seinem alten Platz. Das ist nützlich, wenn du eine Sicherheitskopie erstellen oder eine Vorlage für etwas Neues verwenden möchtest.

**So geht's:**

1.  **Rechtsklick** auf die Datei/den Ordner, die/den du kopieren möchtest.
2.  Wähle im Menü **"Kopieren"**.
3.  Gehe zu dem Ordner, in dem die Kopie eingefügt werden soll.
4.  **Rechtsklick** auf eine freie Fläche in diesem Ordner.
5.  Wähle **"Einfügen"**. Fertig\!

### 🚚 Verschieben (Ausschneiden und Einfügen)

Beim Verschieben wird die Datei oder der Ordner von seinem ursprünglichen Ort entfernt und an einem neuen Ort abgelegt. Es wird keine Kopie erstellt; das Element wechselt einfach sein "Zuhause".

**So geht's:**

1.  **Rechtsklick** auf die Datei/den Ordner, die/den du verschieben möchtest.
2.  Wähle im Menü **"Ausschneiden"**. Du siehst oft, dass das Symbol des Elements leicht durchsichtig wird.
3.  Gehe zum neuen Zielordner.
4.  **Rechtsklick** auf eine freie Fläche.
5.  Wähle **"Einfügen"**. Das Element verschwindet vom alten Ort und taucht am neuen auf.

#### Vergleich: Kopieren vs. Verschieben

| Aktion            | 👯 Kopieren & Einfügen                                                    | 🚚 Ausschneiden & Einfügen (Verschieben)                             |
| :---------------- | :------------------------------------------------------------------------ | :------------------------------------------------------------------- |
| **Ergebnis**      | Das Original bleibt, wo es war. Eine exakte Kopie erscheint am neuen Ort. | Das Original wird vom alten Ort entfernt und erscheint am neuen Ort. |
| **Anzahl danach** | Du hast das Element **zweimal** (oder öfter).                             | Du hast das Element weiterhin nur **einmal**.                        |
| **Analogie**      | Ein Dokument **fotokopieren**.                                            | Ein Dokument aus einer Mappe **nehmen und in eine andere legen**.    |
| **Menübefehl**    | `Kopieren`                                                                | `Ausschneiden`                                                       |

### 🗑️ Löschen

Wenn du eine Datei oder einen Ordner nicht mehr brauchst, kannst du ihn löschen, um Platz zu schaffen und die Übersicht zu verbessern.

**So geht's:**

1.  **Rechtsklick** auf das Element, das du löschen möchtest.
2.  Wähle im Menü **"Löschen"**.
3.  Das System fragt oft zur Sicherheit noch einmal nach: "Möchten Sie diese Datei wirklich löschen?". Bestätige mit "Ja".

**Was passiert dann?**
Die meisten Betriebssysteme (wie Windows oder macOS) löschen die Datei nicht sofort endgültig. Sie wird zuerst in den **Papierkorb** verschoben. Das ist ein Sicherheitsnetz\! Wenn du etwas versehentlich gelöscht hast, kannst du den Papierkorb öffnen, die Datei mit einem Rechtsklick auswählen und **"Wiederherstellen"** wählen. Sie landet dann wieder genau dort, wo sie vorher war.

Um eine Datei endgültig zu löschen und den Speicherplatz freizugeben, musst du den Papierkorb leeren (Rechtsklick auf das Papierkorb-Symbol -\> "Papierkorb leeren"). **Aber Achtung:** Danach ist die Datei wirklich weg\!

<br>
<br>
<br>

# 🖥️ Arbeiten mit Anwendungen

Anwendungen – oder kurz &quot;Apps&quot; – sind die Werkzeuge deines Computers. So wie ein Handwerker einen Hammer oder eine Säge benutzt, benutzt du ein Textverarbeitungsprogramm, um zu schreiben, oder einen Taschenrechner, um zu rechnen. Jede Anwendung ist für eine bestimmte Aufgabe gemacht. Wir schauen uns jetzt zwei absolute Klassiker an.

<br>
<br>
<br>

## ✍️ Einfache Textverarbeitung: Dokumente öffnen, speichern und drucken

Ein Textverarbeitungsprogramm (wie Microsoft Word, LibreOffice Writer oder auch der einfache Editor) ist im Grunde dein digitales Blatt Papier mit einem Super-Stift. Du kannst Texte schreiben, formatieren, Fehler korrigieren und vieles mehr.

### 📄 Dokumente öffnen

Stell dir vor, deine Festplatte ist ein großer Aktenschrank. Ein Dokument zu öffnen ist so, als würdest du eine bestimmte Mappe aus diesem Schrank herausholen, um sie dir anzusehen oder weiter daran zu arbeiten.

**So öffnest du eine bestehende Datei:**

1.  **Starte das Textverarbeitungsprogramm.**
2.  Gehe im Menü am oberen Rand des Fensters auf **"Datei"**.
3.  Wähle im Klappmenü die Option **"Öffnen"**.
4.  Es erscheint ein neues Fenster, der sogenannte "Öffnen-Dialog". Das ist im Grunde eine kleine Landkarte deines Computers.
5.  Navigiere hier zu dem Ordner, in dem du deine Datei gespeichert hast (z.B. "Dokumente" -\> "Schule" -\> "Deutsch").
6.  Klicke die gewünschte Datei einmal an und drücke dann auf den **"Öffnen"**-Knopf. Schon erscheint dein Text im Programm.

### 💾 Dokumente speichern

Das Speichern ist einer der wichtigsten Schritte\! Ungespeicherte Arbeit ist wie ein Gedanke, den du nicht aufgeschrieben hast – er kann blitzschnell verloren gehen (z.B. bei einem Stromausfall).

Wir unterscheiden hier zwei Befehle, die du beide im Menü unter **"Datei"** findest:

| Befehl                 | Wann du ihn benutzt                                                                      | Was er tut                                                                                                                  |
| :--------------------- | :--------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| **Speichern**          | Wenn du an einer **bereits gespeicherten** Datei weiterarbeitest.                        | Er aktualisiert die Datei an ihrem bestehenden Ort mit deinen neuesten Änderungen. Es passiert schnell und ohne Rückfragen. |
| **Speichern unter...** | Wenn du eine Datei **zum ersten Mal** speicherst oder eine **Kopie** erstellen möchtest. | Er öffnet den "Speichern-Dialog", in dem du den **Namen** und den **Ort** der Datei festlegen musst.                        |

**Denk dran:** Wenn du eine Stunde an einem Text gearbeitet hast, ist es eine gute Angewohnheit, zwischendurch immer mal wieder auf "Speichern" (oder die Tastenkombination `Strg + S`) zu klicken\!

### 🖨️ Dokumente drucken

Wenn du deinen digitalen Text auf echtes Papier bringen möchtest, kommt das Drucken ins Spiel.

1.  Stelle sicher, dass dein Drucker eingeschaltet und mit dem Computer verbunden ist.
2.  Gehe in deinem Textprogramm wieder auf das Menü **"Datei"**.
3.  Wähle die Option **"Drucken"**.
4.  Es öffnet sich das "Drucken-Dialogfenster". Hier kannst du wichtige Einstellungen vornehmen.
    - **Drucker auswählen:** Falls mehrere Drucker verfügbar sind, wähle hier den richtigen aus.
    - **Anzahl der Kopien:** Lege fest, wie oft das Dokument gedruckt werden soll.
    - **Seitenbereich:** Du kannst das ganze Dokument drucken oder nur bestimmte Seiten (z.B. "Seiten: 2-4").
5.  Wenn alles passt, klicke auf den **"Drucken"**-Knopf. Der Drucker sollte nun seine Arbeit aufnehmen.

<br>
<br>
<br>

## 🧮 Taschenrechner zur Durchführung einfacher Berechnungen nutzen

Jeder Computer hat eine eingebaute Taschenrechner-App, die perfekt für schnelle Berechnungen ist – egal ob für die Mathe-Hausaufgaben oder um die Kosten für einen Einkauf zusammenzuzählen.

### ▶️ Den Taschenrechner finden und starten

Du findest den Taschenrechner meistens über das Startmenü deines Betriebssystems. Gib einfach in die Suchleiste "Taschenrechner" (oder "Calculator") ein und klicke auf das erscheinende Symbol.

### 🔢 Die Benutzeroberfläche verstehen

Die App sieht aus wie ein normaler Taschenrechner, den du auch in der Hand halten könntest.

- **Ziffernblock (0-9):** Hier gibst du deine Zahlen ein. Du kannst entweder mit der Maus auf die Tasten klicken oder die Zahlen auf deiner Tastatur benutzen.
- **Grundrechenarten:** Die wichtigsten Tasten sind **+** (Addition), **-** (Subtraktion), **\*** (Multiplikation, oft als "x" dargestellt) und **/** (Division, oft als "÷" dargestellt).
- **Gleichheitszeichen (=):** Diese Taste berechnet das Ergebnis deiner Eingabe.
- **Lösch-Tasten:**
  - **C:** Steht für "Clear" (Alles löschen). Diese Taste setzt den Rechner komplett zurück auf Null.
  - **CE:** Steht für "Clear Entry" (Eingabe löschen). Diese Taste löscht nur die zuletzt eingegebene Zahl, nicht die gesamte Rechnung.
  - **Backspace (←):** Löscht die letzte Ziffer der aktuellen Zahl.

### 🛒 Eine einfache Berechnung durchführen

Stellen wir uns vor, du kaufst ein paar Dinge und willst den Gesamtpreis wissen:

- Brot: 3,50 €
- Milch: 1,20 €
- Äpfel: 2,80 €

**So rechnest du das im Taschenrechner:**

1.  Öffne die Taschenrechner-App.
2.  Gib die erste Zahl ein: `3.5` (Das Komma wird meist mit einem Punkt eingegeben).
3.  Drücke die **Plus-Taste (+)**.
4.  Gib die zweite Zahl ein: `1.2`.
5.  Drücke wieder die **Plus-Taste (+)**.
6.  Gib die dritte Zahl ein: `2.8`.
7.  Drücke zum Abschluss die **Gleich-Taste (=)**.

Das Ergebnis `7.5` sollte nun im Anzeigefeld erscheinen. Du weißt also, dass dein Einkauf 7,50 € kostet. Um eine neue Rechnung zu starten, drückst du einfach die **C-Taste**.
