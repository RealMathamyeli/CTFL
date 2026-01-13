###### Themen

Dateien und Änderungen nachverfolgen
- Dateien ins Repository aufnehmen (git add)
- Snapshots von Änderungen erstellen (git commit)

Arbeitsstatus und Historie prüfen
- Überblick über den aktuellen Status (git status)
- Änderungen und Historie anzeigen (git log)

Dateien und Änderungen rückgängig machen
- Änderungen zurücksetzen (git checkout, git restore)
- Commits zurücknehmen (git reset)

Branch-Management (Grundlagen)
- Branches anzeigen und erstellen (git branch)
- Zwischen Branches wechseln (git switch)

Fehlerbehandlung und Konfliktlösung
- Typische Fehlermeldungen im Arbeitsalltag interpretieren
- Einfache Merge-Konflikte erkennen und lösen

<br><br><br>


# 📂 Dateien und Änderungen nachverfolgen

Stell dir vor, du schreibst ein Buch. Git ist wie ein magisches Notizbuch, das nicht nur die aktuelle Version deines Buches speichert, sondern auch jede einzelne Änderung, die du jemals gemacht hast. Die folgenden Befehle sind die grundlegenden Werkzeuge, um diesem magischen Notizbuch zu sagen, *was* es sich merken soll und *wann*.

<br><br><br>

## 🛒 Dateien ins Repository aufnehmen (git add)

Bevor wir über den Befehl `git add` sprechen, müssen wir kurz verstehen, dass Git gedanklich mit drei "Bereichen" arbeitet:

1.  **Arbeitsverzeichnis (Working Directory):** Das ist einfach der Ordner auf deinem Computer, in dem dein Projekt liegt. Hier schreibst und änderst du deine Dateien, so wie du es immer tust.
2.  **Staging Area (oder "Index"):** Das ist ein Vorbereitungsbereich. Hier legst du alle Änderungen ab, die du im nächsten Schritt dauerhaft speichern möchtest.
3.  **Repository (.git-Verzeichnis):** Das ist die "Datenbank" von Git, in der alle deine gespeicherten Versionen (die sogenannten "Commits") sicher aufbewahrt werden.

Die beste Analogie dafür ist ein Einkauf:
*   Dein **Arbeitsverzeichnis** ist der gesamte Supermarkt mit all seinen Regalen.
*   Die **Staging Area** ist dein Einkaufswagen.
*   Das **Repository** ist dein Kühlschrank zu Hause.

Der Befehl `git add` ist der Akt, bei dem du eine Sache aus dem Supermarktregal nimmst und sie in deinen Einkaufswagen legst. Du hast es noch nicht gekauft und es ist noch nicht bei dir zu Hause, aber du hast es für den Kauf *vorgemerkt*.

### 🤔 Was macht `git add` genau?

Wenn du eine Datei änderst, merkt Git das. Aber nur weil du sie geändert hast, ist sie nicht automatisch für die nächste Speicherung vorgesehen. Du musst Git explizit sagen: "Hey, diese Änderung an dieser Datei ist mir wichtig, bitte bereite sie für den nächsten Schnappschuss vor."

Genau das tut `git add`. Es nimmt die aktuelle Version einer Datei (oder mehrerer Dateien) aus deinem Arbeitsverzeichnis und kopiert sie in die Staging Area.

### 📝 Die wichtigsten `git add` Befehle

Es gibt verschiedene Wege, Dateien zur Staging Area hinzuzufügen. Hier sind die gängigsten in einer Tabelle:

| Befehl | Beschreibung | Anwendungsfall |
| :--- | :--- | :--- |
| `git add <dateiname.txt>` | Fügt nur diese eine, spezifische Datei zur Staging Area hinzu. | Du hast an drei Dateien gearbeitet, aber nur die Änderungen in `dateiname.txt` sind fertig und sollen als Nächstes gespeichert werden. |
| `git add datei1.js datei2.css` | Fügt mehrere spezifische Dateien auf einmal hinzu. | Du hast eine logische Änderung vorgenommen, die sich auf mehrere, aber nicht alle, Dateien auswirkt (z.B. ein neues Feature in JS und dem zugehörigen CSS). |
| `git add .` | Fügt alle neuen und geänderten Dateien im aktuellen Ordner (und allen Unterordnern) zur Staging Area hinzu. Gelöschte Dateien werden oft nicht erfasst. | Du hast eine Reihe von Änderungen gemacht und möchtest alle auf einmal für den nächsten Commit vorbereiten. Das ist der häufigste Befehl. |
| `git add -A` (oder `--all`) | Fügt **alle** Änderungen im gesamten Projekt zur Staging Area hinzu. Das beinhaltet neue, geänderte **und gelöschte** Dateien. | Du hast Dateien umbenannt, gelöscht und geändert und möchtest sicherstellen, dass Git absolut alle diese Aktionen für den nächsten Commit berücksichtigt. |
| `git add -p` | Startet den "Patch"-Modus. Git geht durch jede einzelne Änderung in deinen Dateien und fragt dich Stück für Stück, ob du diese Änderung zur Staging Area hinzufügen möchtest (y/n). | Extrem nützlich! Du hast eine Datei geändert und zwei verschiedene Dinge darin erledigt (z.B. einen Bug gefixt und gleichzeitig Code für ein neues Feature begonnen). Mit `-p` kannst du nur die Teile des Bugfixes "in den Einkaufswagen legen" und den unfertigen Code für später zurücklassen. |

### 💡 Warum überhaupt dieser Zwischenschritt?

Die Staging Area ist eines der mächtigsten Konzepte in Git. Warum?

*   **Kontrolle:** Sie gibt dir die volle Kontrolle darüber, was im nächsten "Schnappschuss" landet. Du kannst unfertige Arbeiten oder Test-Code in deinem Arbeitsverzeichnis lassen und musst ihn nicht mit-speichern.
*   **Atomare Commits:** Sie erlaubt dir, deine Änderungen in logische, saubere Pakete zu schnüren. Stell dir vor, du hast drei verschiedene Fehler in drei verschiedenen Dateien behoben. Anstatt einen riesigen Commit mit der Nachricht "diverse Fehler behoben" zu machen, kannst du Folgendes tun:
    1.  `git add fehlerdatei_1.py`
    2.  `git commit -m "Fix: Behebt das Login-Problem"`
    3.  `git add fehlerdatei_2.html`
    4.  `git commit -m "Fix: Korrigiert die Darstellung im Footer"`
    
    Dadurch wird deine Projekthistorie viel lesbarer und verständlicher.

<br><br><br>

## 📸 Snapshots von Änderungen erstellen (git commit)

Wenn du mit dem Inhalt deines Einkaufswagens (der Staging Area) zufrieden bist, gehst du zur Kasse, um alles zu kaufen und es dauerhaft mit nach Hause zu nehmen. In Git ist dieser Schritt der `git commit` Befehl.

Ein "Commit" ist ein permanenter Schnappschuss deines Projekts zu einem bestimmten Zeitpunkt. Genauer gesagt: Es ist ein Schnappschuss des Zustands deiner **Staging Area** zu dem Zeitpunkt, als du den Befehl ausgeführt hast.

### 🤔 Was ist ein "Commit"?

Ein Commit ist mehr als nur eine Sammlung von Dateien. Jeder einzelne Commit ist ein festes Paket, das folgende Informationen enthält:

*   **Die Daten:** Ein Verweis auf den genauen Zustand aller Dateien, die du mit `git add` vorbereitet hast.
*   **Einen einzigartigen Ausweis (Hash):** Eine lange Zeichenkette aus Zahlen und Buchstaben (z.B. `a1b2c3d4...`), die diesen Commit für immer eindeutig identifiziert.
*   **Metadaten:** Wer hat den Commit gemacht (Autor) und wann wurde er gemacht (Datum und Uhrzeit).
*   **Eine Commit-Nachricht:** Eine Beschreibung, die du selbst verfasst, um zu erklären, **was** und **warum** du diese Änderungen gemacht hast.

### 💬 Der Befehl `git commit` und die Commit-Nachricht

Der häufigste Weg, einen Commit zu erstellen, ist:

```bash
git commit -m "Eine kurze, aussagekräftige Nachricht"
```

*   `git commit`: Der Befehl, um den Schnappschuss zu erstellen.
*   `-m`: Steht für "message". Damit sagst du Git, dass die Nachricht direkt hier in der Kommandozeile folgt.
*   `"..."`: Der Text in den Anführungszeichen ist deine Beschreibung.

**Die Kunst der guten Commit-Nachricht ist extrem wichtig!** Eine gute Nachricht erklärt nicht, *was* du geändert hast (das kann man im Code sehen), sondern *warum*.

| Schlechte Nachricht | Gute Nachricht |
| :--- | :--- |
| "Änderungen" | "Feat: Fügt einen 'Passwort vergessen'-Button hinzu" |
| "Bugfix" | "Fix: Verhindert Absturz, wenn Nutzername leer ist" |
| "Update datei.js" | "Refactor: Verbessert die Lesbarkeit der Berechnungsfunktion" |

Wenn du `git commit` ohne die `-m` Option ausführst, öffnet Git einen Texteditor (wie Vim oder Nano), in dem du eine ausführlichere Nachricht schreiben kannst. Das ist üblich für eine Titelzeile und eine detailliertere Beschreibung darunter.

### 🔄 Der Workflow: `add` und `commit` im Zusammenspiel

Der grundlegende Arbeitsablauf mit Git, den du hunderte Male wiederholen wirst, sieht also so aus:

1.  **Arbeiten:** Du schreibst Code, änderst Texte, löschst Bilder – du arbeitest ganz normal an deinen Dateien in deinem **Arbeitsverzeichnis**.
2.  **Vorbereiten (Stagen):** Du entscheidest, welche dieser Änderungen zusammengehören und ein logisches Paket ergeben. Diese wählst du aus und legst sie mit `git add` in deinen "Einkaufswagen", die **Staging Area**. Du kannst diesen Schritt so oft wiederholen, wie du willst, und immer mehr Dinge hinzufügen.
3.  **Speichern (Committen):** Wenn dein Paket komplett ist und du mit der Auswahl in der Staging Area zufrieden bist, erstellst du mit `git commit` einen dauerhaften Schnappschuss. Du gibst ihm eine gute Beschreibung und "lagerst" ihn damit sicher in deinem **Repository**.

Nach dem Commit ist deine Staging Area wieder leer und der Zyklus kann von vorne beginnen. Jedes Mal, wenn du einen Commit erstellst, fügst du einen neuen, sicheren Speicherpunkt zur Geschichte deines Projekts hinzu.# 📖 Arbeitsstatus und Historie prüfen

<br><br><br>

## 🔍 Überblick über den aktuellen Status (git status)

<br><br><br>

### 🤔 Was ist 'git status'?

Stell dir `git status` wie eine Momentaufnahme deines Arbeitsplatzes vor. Es ist einer der wichtigsten und am häufigsten verwendeten Befehle in Git. Er beantwortet dir jederzeit die Frage: "Was ist seit meinem letzten Speichervorgang (Commit) passiert?"

Dieser Befehl scannt dein Projektverzeichnis und vergleicht es mit dem Zustand deines letzten Commits und der sogenannten "Staging Area" (darauf kommen wir gleich). Er gibt dir einen klaren und verständlichen Bericht über den Zustand deiner Dateien.

Er beantwortet dir vor allem drei Fragen:
1.  Welche bekannten Dateien habe ich geändert?
2.  Welche neuen Dateien gibt es, die Git noch gar nicht kennt?
3.  Welche Änderungen sind bereits für den nächsten Commit vorgemerkt?

`git status` ist dein bester Freund, um den Überblick zu behalten und sicherzustellen, dass du nur die Änderungen committest, die du auch wirklich committen möchtest.

<br><br><br>

### 🌳 Die drei Zustände von Dateien

Um die Ausgabe von `git status` wirklich zu verstehen, musst du die drei Hauptbereiche oder Zustände kennen, in denen sich deine Dateien in Git befinden können.

1.  **Arbeitsverzeichnis (Working Directory):** Das ist einfach der Ordner auf deinem Computer, in dem dein Projekt liegt. Hier erstellst, bearbeitest und löschst du Dateien ganz normal.
2.  **Staging Area (Vorbereitungsbereich):** Dies ist eine Art Zwischenspeicher. Bevor du eine Änderung dauerhaft in der Projekthistorie speicherst (also einen Commit machst), musst du sie zur Staging Area hinzufügen. Stell es dir wie einen Warenkorb vor: Du legst alle Änderungen, die zusammengehören, in den Korb (`git add`), bevor du zur Kasse gehst und alles als ein Paket bezahlst (Commit).
3.  **Git-Repository (.git-Verzeichnis):** Das ist die Datenbank, in der Git die gesamte Historie deines Projekts speichert. Jeder Commit ist ein permanenter Schnappschuss deines Projekts, der hier sicher aufbewahrt wird.

`git status` zeigt dir die Unterschiede zwischen diesen drei Bereichen an.

Hier eine Übersicht der Dateizustände, die `git status` dir meldet:

| Zustand (Englisch) | Deutsche Bezeichnung | Beschreibung | Was bedeutet das? |
| :--- | :--- | :--- | :--- |
| **Untracked** | **Unverfolgt** | Dies ist eine komplett neue Datei, die du erstellt hast. Git hat sie bemerkt, weiß aber nicht, ob du sie zum Projekt hinzufügen möchtest. | Git ignoriert diese Datei, bis du ihm mit `git add <dateiname>` sagst, dass sie wichtig ist. |
| **Modified** | **Geändert** | Du hast eine Datei bearbeitet, die Git bereits kennt und die schon in früheren Commits vorhanden war. | Die Änderung befindet sich nur in deinem Arbeitsverzeichnis. Du musst sie mit `git add` zur Staging Area hinzufügen, um sie für den nächsten Commit vorzubereiten. |
| **Staged** | **Vorgemerkt** | Du hast eine geänderte oder eine neue Datei mit `git add` zur Staging Area hinzugefügt. | Diese Datei ist jetzt Teil des "Warenkorbs". Sie wird beim nächsten `git commit`-Befehl in die Projekthistorie aufgenommen. |
| **Clean** | **Sauber** | Alle bekannten Dateien in deinem Arbeitsverzeichnis sind identisch mit dem letzten Commit, und es gibt keine vorgemerkten Änderungen. | Dein Arbeitsplatz ist aufgeräumt. Es gibt nichts Neues zu speichern. |

<br><br><br>

### 💻 Ein praktisches Beispiel

Stellen wir uns ein kleines Szenario vor. Dein Projekt hat eine Datei namens `anleitung.md`.

1.  **Ausgangszustand: Alles ist sauber**
    Du führst `git status` aus und bekommst diese Meldung:
    ```shell
    On branch main
    Your branch is up to date with 'origin/main'.

    nothing to commit, working tree clean
    ```
    Das bedeutet: Alles ist gespeichert, es gibt keine Änderungen. Perfekt.

2.  **Du änderst eine Datei**
    Jetzt öffnest du `anleitung.md` und fügst einen neuen Absatz hinzu. Wenn du jetzt `git status` ausführst, sieht es so aus:
    ```shell
    On branch main
    Your branch is up to date with 'origin/main'.

    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)
        modified:   anleitung.md

    no changes added to commit (use "git add" and/or "git commit -a")
    ```
    Git sagt dir klar und deutlich: "Hey, du hast `anleitung.md` geändert (modified), aber diese Änderung ist noch nicht für den nächsten Commit vorgemerkt (Changes not staged for commit)." Es gibt dir sogar Tipps, was du tun kannst (`git add` zum Vormerken, `git restore` zum Verwerfen).

3.  **Du erstellst eine neue Datei**
    Nun erstellst du eine neue Datei namens `ideen.txt` und schreibst etwas hinein. `git status` zeigt dir jetzt Folgendes:
    ```shell
    On branch main
    Your branch is up to date with 'origin/main'.

    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)
        modified:   anleitung.md

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
        ideen.txt

    no changes added to commit (use "git add" and/or "git commit -a")
    ```
    Jetzt siehst du beide Zustände: die geänderte Datei `anleitung.md` und die neue, unverfolgte Datei `ideen.txt` (Untracked files).

4.  **Du merkst eine Änderung vor (Staging)**
    Du entscheidest, dass die Änderung an `anleitung.md` bereit ist, gespeichert zu werden. Du benutzt `git add`:
    ```shell
    git add anleitung.md
    ```
    Wenn du jetzt `git status` ausführst, hat sich die Ausgabe verändert:
    ```shell
    On branch main
    Your branch is up to date with 'origin/main'.

    Changes to be committed:
      (use "git restore --staged <file>..." to unstage)
        modified:   anleitung.md

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
        ideen.txt
    ```
    Die Datei `anleitung.md` ist jetzt unter der Überschrift "Changes to be committed" (Änderungen, die committet werden). Sie ist in der Staging Area. Die Datei `ideen.txt` ist immer noch unverfolgt. Jetzt könntest du einen Commit machen, der nur die Änderung an `anleitung.md` enthält.

<br><br><br>

## 📜 Änderungen und Historie anzeigen (git log)

<br><br><br>

### 🤔 Was ist 'git log'?

Während `git status` dir den *jetzigen* Zustand zeigt, ist `git log` dein Fenster in die *Vergangenheit* deines Projekts. Stell es dir wie ein detailliertes Tagebuch oder Logbuch vor. Jedes Mal, wenn jemand einen `git commit` durchführt, wird ein neuer Eintrag in diesem Logbuch erstellt.

Mit `git log` kannst du dir alle bisherigen Commits in chronologischer Reihenfolge anzeigen lassen, wobei der neueste Commit ganz oben steht. So kannst du nachvollziehen:
-   **Wer** hat wann welche Änderungen gemacht?
-   **Was genau** wurde bei einem bestimmten Commit geändert?
-   **Warum** wurde eine Änderung gemacht (wenn die Commit-Nachricht gut geschrieben ist)?

Es ist ein unverzichtbares Werkzeug, um die Entwicklung eines Projekts zu verstehen, Fehler zu finden oder zu einem früheren Zustand zurückzukehren.

<br><br><br>

### 🧱 Der Aufbau eines Log-Eintrags

Ein Standard-Eintrag in `git log` sieht in etwa so aus und enthält vier wichtige Informationen:

```shell
commit a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0 (HEAD -> main, origin/main)
Author: Max Mustermann <max.mustermann@example.com>
Date:   Thu Oct 26 10:30:00 2023 +0200

    Füge eine detaillierte Anleitung zur Installation hinzu

    Diese Anleitung erklärt Schritt für Schritt, wie man das Projekt
    auf einem lokalen System einrichtet und die Abhängigkeiten installiert.
```

Lass uns das mal auseinandernehmen:

1.  **Commit Hash:** Die lange Zeichenkette (`a1b2c3d...`). Dies ist eine einzigartige ID (ein sogenannter SHA-1-Hash) für diesen spezifischen Commit. Du kannst dir das wie eine Seriennummer vorstellen. Jeder Commit hat eine eigene, unverwechselbare ID. Diese ID wird oft benötigt, wenn du dich auf einen bestimmten Commit beziehen möchtest.
2.  **Author:** Wer hat diesen Commit gemacht? Hier siehst du den Namen und die E-Mail-Adresse des Entwicklers.
3.  **Date:** Wann genau wurde dieser Commit erstellt?
4.  **Commit-Nachricht:** Dies ist der wichtigste Teil für das menschliche Verständnis. Sie wird vom Autor beim `git commit` geschrieben und sollte erklären, *warum* die Änderungen gemacht wurden. Sie besteht typischerweise aus einer kurzen Betreffzeile und optional einem ausführlicheren Beschreibungstext.

<br><br><br>

### 🛠️ Die Ausgabe anpassen (Nützliche Optionen)

Die Standardausgabe von `git log` kann sehr lang und unübersichtlich werden. Glücklicherweise gibt es viele Optionen, um die Ausgabe genau so zu formatieren, wie du sie brauchst. Hier sind einige der nützlichsten:

| Option | Beschreibung | Beispiel-Anwendung |
| :--- | :--- | :--- |
| **`--oneline`** | Zeigt jeden Commit in einer einzigen, kompakten Zeile an. Perfekt für einen schnellen Überblick. Es zeigt nur den gekürzten Commit-Hash und die Betreffzeile der Commit-Nachricht. | `git log --oneline` |
| **`--graph`** | Zeichnet eine textbasierte ASCII-Grafik, die die Verzweigungs- und Zusammenführungshistorie (Branches und Merges) anzeigt. Extrem nützlich, um die Projektstruktur zu verstehen. | `git log --graph` |
| **`--stat`** | Zeigt unter jedem Commit eine kleine Statistik an: welche Dateien geändert wurden, wie viele Zeilen hinzugefügt (`+`) und wie viele entfernt (`-`) wurden. | `git log --stat` |
| **`-p` oder `--patch`** | Zeigt den "Patch" für jeden Commit an, d.h. die tatsächlichen Code-Änderungen, die vorgenommen wurden. Du siehst genau, welche Zeilen hinzugefügt oder entfernt wurden. | `git log -p` |
| **`-<n>`** | Limitiert die Ausgabe auf die letzten `n` Commits. `git log -5` zeigt dir zum Beispiel nur die letzten 5 Commits an. | `git log -3` |
| **`--author="Name"`** | Filtert die Historie und zeigt nur die Commits von einem bestimmten Autor an. | `git log --author="Max Mustermann"` |
| **`--since="Datum"`**<br>**`--until="Datum"`** | Filtert die Commits nach einem Zeitfenster. Du kannst relative Angaben wie `"2 weeks ago"` oder absolute Daten wie `"2023-01-01"` verwenden. | `git log --since="1 month ago"` |

**Tipp:** Du kannst diese Optionen wunderbar kombinieren! Ein sehr beliebter und nützlicher Befehl ist zum Beispiel:

```shell
git log --graph --oneline --decorate
```

-   `--graph` zeichnet die Verzweigungen.
-   `--oneline` hält die Ausgabe kompakt.
-   `--decorate` zeigt die Namen von Branches und Tags direkt am jeweiligen Commit an.

Das Ergebnis ist eine sehr klare und informative Übersicht über die gesamte Projekthistorie.# 📂 Dateien und Änderungen rückgängig machen

Stell dir Git wie eine Zeitmaschine für deinen Code vor. Manchmal programmierst du etwas, merkst dann aber, dass es ein Fehler war, oder du möchtest einfach zu einem früheren Zustand zurückkehren. Genau dafür gibt es Befehle, um Änderungen rückgängig zu machen.

Es ist ganz wichtig, hier zwei Situationen zu unterscheiden:

1.  **Änderungen, die noch nicht committet wurden:** Das sind Dinge, die du gerade in deinen Dateien geändert hast, die aber noch nicht fest in der Projekthistorie gespeichert sind. Sie befinden sich entweder in deinem Arbeitsverzeichnis (Working Directory) oder in der Vorbereitungsphase (Staging Area).
2.  **Änderungen, die bereits committet wurden:** Das sind Änderungen, die du mit `git commit` bereits als festen "Speicherpunkt" in deiner Projekthistorie angelegt hast.

Wir schauen uns jetzt die Werkzeuge für beide Situationen genau an.

<br>
<br>
<br>

## ↩️ Änderungen zurücksetzen (vor einem Commit)

Hier geht es um Änderungen, die du noch nicht "festgeschrieben", also committet, hast. Vielleicht hast du in einer Datei experimentiert und möchtest sie wieder auf den Stand des letzten Commits zurücksetzen. Früher war `git checkout` der Befehl für alles, was etwas verwirrend war. Heute gibt es dafür den viel klareren Befehl `git restore`. Wir schauen uns beide an, damit du auch ältere Anleitungen verstehst.

<br>
<br>
<br>

### 🧐 ### `git checkout` (Der alte Weg)

`git checkout` ist ein bisschen wie ein Schweizer Taschenmesser in Git. Es kann viele Dinge tun, unter anderem zwischen Branches wechseln, aber eben auch einzelne Dateien zurücksetzen. Diese Vielseitigkeit kann aber auch zu Verwirrung führen.

**Was macht es?**
Wenn du `git checkout` mit einem Dateinamen verwendest, verwirft es alle Änderungen an dieser Datei in deinem Arbeitsverzeichnis und stellt den Zustand des letzten Commits wieder her.

**Der Befehl:**
Der Befehl sieht so aus: `git checkout -- <dateiname>`.

*   **Wichtig:** Die zwei Striche `--` sind hier sehr wichtig. Sie signalisieren Git eindeutig, dass das, was danach kommt, ein Dateiname ist und kein Branch-Name. Das verhindert Verwechslungen und Fehler.

**Ein Beispiel:**
Du hast in der Datei `style.css` Änderungen vorgenommen, die du nicht behalten willst. Du hast die Datei noch nicht mit `git add` zur Staging Area hinzugefügt.

```bash
# Setzt die Datei style.css auf den Stand des letzten Commits zurück.
# Alle deine ungespeicherten Änderungen in dieser Datei sind weg!
git checkout -- style.css
```

Heutzutage wird empfohlen, für diese Aufgabe `git restore` zu verwenden, da der Name des Befehls genau beschreibt, was er tut.

<br>
<br>
<br>

### ✨ ### `git restore` (Der neue, bessere Weg)

`git restore` wurde eingeführt, um das Zurücksetzen von Dateien klarer und sicherer zu machen. Es ist kein Schweizer Taschenmesser mehr, sondern ein Spezialwerkzeug, das genau für diesen Zweck entwickelt wurde. Es hat zwei Hauptanwendungsfälle:

#### 1. Änderungen im Arbeitsverzeichnis verwerfen

Das ist genau das Gleiche wie oben bei `git checkout`. Du hast eine Datei geändert, sie aber noch nicht "gestaged" (also mit `git add` hinzugefügt) und möchtest diese Änderungen komplett verwerfen.

**Der Befehl:**
`git restore <dateiname>`

**Ein Beispiel:**
Du hast wieder in der `index.html` experimentiert und möchtest alles verwerfen.

```bash
# Setzt die index.html auf den Stand des letzten Commits zurück.
# Alle Änderungen seit dem letzten Commit in dieser Datei gehen verloren.
git restore index.html
```

#### 2. Eine Datei aus der Staging Area entfernen ("Unstaging")

Manchmal fügst du eine Datei versehentlich mit `git add` zur Staging Area hinzu, obwohl sie noch nicht bereit für einen Commit ist. Du willst den `git add` also rückgängig machen, aber die Änderungen in der Datei selbst behalten.

**Der Befehl:**
`git restore --staged <dateiname>`

**Ein Beispiel:**
Du hast `script.js` geändert und mit `git add script.js` zur Staging Area hinzugefügt. Jetzt fällt dir auf, dass du noch etwas Wichtiges vergessen hast. Du willst die Datei also aus der Staging Area entfernen, um sie später erneut hinzuzufügen.

```bash
# Nimmt die Datei 'script.js' aus der Staging Area.
# Deine Änderungen in der Datei bleiben aber erhalten!
git restore --staged script.js
```
Nach diesem Befehl ist die Datei `script.js` wieder im Zustand "modified", aber nicht mehr "staged for commit".

Hier ist eine Tabelle, um den Unterschied klar zu machen:

| Aktion | Alter Befehl | Neuer Befehl (`restore`) | Was passiert? |
| :--- | :--- | :--- | :--- |
| Änderungen im Arbeitsverzeichnis verwerfen | `git checkout -- <datei>` | `git restore <datei>` | Die Datei wird auf den Stand des letzten Commits zurückgesetzt. Änderungen gehen verloren. |
| Datei aus der Staging Area entfernen | `git reset HEAD <datei>` | `git restore --staged <datei>` | Die Datei wird aus der Staging Area entfernt, die Änderungen bleiben aber im Arbeitsverzeichnis. |

Wie du siehst, macht `git restore` die Absicht viel deutlicher und fasst zwei Aktionen, für die man früher unterschiedliche Befehle brauchte, logisch zusammen.

<br>
<br>
<br>

## ⏪ Commits zurücknehmen (git reset)

Jetzt kommen wir zum "schwereren Geschütz". `git reset` ist ein extrem mächtiger Befehl, der die Projekthistorie selbst verändert. Er wird verwendet, um Commits rückgängig zu machen. Stell dir vor, du hast einen, zwei oder mehrere Commits gemacht und stellst fest: "Das war alles falsch, ich muss zurück zu einem früheren Punkt."

`git reset` bewegt im Grunde den `HEAD`-Zeiger deines aktuellen Branches auf einen früheren Commit. `HEAD` ist einfach ein Name dafür, wo du dich gerade in deiner Projekthistorie befindest.

Die eigentliche Magie (und Gefahr) von `git reset` liegt in seinen drei Hauptmodi: `--soft`, `--mixed` und `--hard`. Sie bestimmen, was mit deinen Änderungen passiert, nachdem die Commits "entfernt" wurden.

Stell dir die drei Bereiche von Git vor:
1.  **Commit-Historie:** Die Kette deiner gespeicherten Commits.
2.  **Staging Area:** Dateien, die für den nächsten Commit vorgemerkt sind.
3.  **Working Directory:** Die Dateien, die du tatsächlich auf deinem Computer siehst und bearbeitest.

`git reset` wirkt sich immer auf die Commit-Historie aus. Die Modi entscheiden, was mit der Staging Area und dem Working Directory passiert.

<br>
<br>
<br>

### 🧸 ### `git reset --soft`

Dies ist die sanfteste und sicherste Form von `reset`.

**Analogie:** Stell dir vor, du hast drei Kisten (deine Commits) aufeinander gestapelt. Mit `git reset --soft` nimmst du die oberste Kiste vom Stapel, aber du leerst ihren Inhalt nicht aus, sondern stellst ihn direkt in den Bereich "Bereit zum Verpacken" (die Staging Area).

**Was passiert?**
*   **Commit-Historie:** Der `HEAD`-Zeiger wird auf den angegebenen früheren Commit zurückgesetzt. Der oder die späteren Commits sind nun "weg" aus der Historie dieses Branches.
*   **Staging Area:** Bleibt **unverändert**. Alle Änderungen aus den zurückgesetzten Commits befinden sich nun in deiner Staging Area, als hättest du sie gerade mit `git add` hinzugefügt.
*   **Working Directory:** Bleibt **unverändert**. Deine Dateien sehen immer noch genauso aus wie vor dem `reset`.

**Wann benutzt man das?**
Perfekt, wenn du merkst, dass du die letzten paar Commits lieber zu einem einzigen, besseren Commit zusammenfassen möchtest. Du setzt sie zurück, alle Änderungen sind bereits gestaged, und du kannst einfach `git commit -m "Eine neue, bessere Commit-Nachricht"` ausführen.

**Der Befehl:**
```bash
# Geht einen Commit zurück, alle Änderungen sind danach in der Staging Area.
git reset --soft HEAD~1 
```
(`HEAD~1` bedeutet "ein Commit vor dem aktuellen HEAD").

<br>
<br>
<br>

### 🧹 ### `git reset --mixed` (Der Standardmodus)

Dies ist der Standardmodus. Wenn du `git reset` ohne `--soft` oder `--hard` aufrufst, wird `--mixed` verwendet.

**Analogie:** Du nimmst wieder die oberste Kiste vom Stapel. Dieses Mal leerst du ihren Inhalt aber nicht in den "Bereit zum Verpacken"-Bereich, sondern kippst alles auf deinen Schreibtisch (das Working Directory). Die Änderungen sind noch da, aber nicht mehr für den Versand vorbereitet.

**Was passiert?**
*   **Commit-Historie:** Der `HEAD`-Zeiger wird zurückgesetzt.
*   **Staging Area:** Wird **zurückgesetzt**. Die Staging Area wird geleert. Die Änderungen aus den zurückgesetzten Commits sind nun als "nicht gestagete Änderungen" in deinem Working Directory.
*   **Working Directory:** Bleibt **unverändert**. Die Änderungen sind in deinen Dateien noch vorhanden.

**Wann benutzt man das?**
Nützlich, wenn du einen Commit gemacht hast, aber die Änderungen noch einmal überarbeiten möchtest, bevor du sie erneut zur Staging Area hinzufügst und committest. Du willst den Commit rückgängig machen und bei Null anfangen, was das Staging betrifft, aber die Code-Änderungen behalten.

**Der Befehl:**
```bash
# Geht einen Commit zurück, alle Änderungen sind danach im Working Directory (unstaged).
git reset --mixed HEAD~1

# Da es der Standard ist, funktioniert auch einfach:
git reset HEAD~1
```

<br>
<br>
<br>

### 💥 ### `git reset --hard`

Dies ist der gefährlichste und destruktivste Modus. Sei hier extrem vorsichtig!

**Analogie:** Du nimmst die oberste Kiste vom Stapel und wirfst sie mitsamt ihrem gesamten Inhalt direkt in den Müllverbrenner. Alles ist unwiederbringlich weg.

**Was passiert?**
*   **Commit-Historie:** Der `HEAD`-Zeiger wird zurückgesetzt.
*   **Staging Area:** Wird **zurückgesetzt und geleert**.
*   **Working Directory:** Wird **zurückgesetzt**. Alle Änderungen aus den zurückgesetzten Commits werden **permanent aus deinen Dateien gelöscht**. Dein Projektordner sieht exakt so aus, wie er zum Zeitpunkt des früheren Commits aussah.

**Wann benutzt man das?**
Nur dann, wenn du dir zu 100% sicher bist, dass die letzten Commits kompletter Müll waren und du sie und alle damit verbundenen Änderungen restlos vernichten willst. Ein fehlgeschlagenes Experiment ist ein gutes Beispiel.

**ACHTUNG:** Wenn du einen `git reset --hard` durchführst, sind die Änderungen in deinen Dateien weg. Es gibt (fast) keine einfache Möglichkeit, sie wiederherzustellen. Benutze diesen Befehl mit größtem Respekt und Vorsicht!

**Der Befehl:**
```bash
# Geht einen Commit zurück und LÖSCHT ALLE ÄNDERUNGEN aus diesem Commit
# unwiederbringlich aus der Staging Area UND deinem Arbeitsverzeichnis.
git reset --hard HEAD~1
```

**Zusammenfassende Tabelle für `git reset`:**

| Modus | `HEAD`-Zeiger | Staging Area (Index) | Arbeitsverzeichnis (Working Directory) |
| :--- | :--- | :--- | :--- |
| **`--soft`** | ✅ Wird verschoben |  untouched | untouched |
| **`--mixed`** | ✅ Wird verschoben | 🔄 Wird zurückgesetzt | untouched |
| **`--hard`** | ✅ Wird verschoben | 🔄 Wird zurückgesetzt | 🔄 Wird zurückgesetzt |# 🌳 Branch-Management (Grundlagen)

Stell dir dein Projekt wie ein Buch vor. Der `main`-Branch (früher oft `master` genannt) ist die Hauptgeschichte. Jedes Mal, wenn du eine neue Funktion entwickeln, einen Fehler beheben oder etwas ausprobieren möchtest, ohne die stabile Hauptgeschichte zu gefährden, beginnst du ein neues Kapitel auf einer separaten Seite. Dieses "neue Kapitel" ist ein **Branch**.

Ein Branch ist im Grunde eine eigenständige Entwicklungslinie oder eine Kopie deines Projekts zu einem bestimmten Zeitpunkt. Du kannst in diesem Branch arbeiten, Änderungen vornehmen, Commits erstellen – all das, ohne den `main`-Branch oder andere Branches zu beeinflussen. Wenn du mit deiner Arbeit fertig und zufrieden bist, kannst du dieses "Kapitel" (deinen Branch) wieder in die Hauptgeschichte (den `main`-Branch) einfügen. Dieser Vorgang nennt sich "Merging".

Dieses Vorgehen hat riesige Vorteile:
*   **Sicherheit:** Die Hauptversion deines Projekts (`main`) bleibt immer stabil und funktionstüchtig.
*   **Parallelität:** Mehrere Entwickler können gleichzeitig an unterschiedlichen Funktionen (in unterschiedlichen Branches) arbeiten, ohne sich in die Quere zu kommen.
*   **Experimente:** Du kannst neue Ideen risikofrei ausprobieren. Wenn eine Idee nicht funktioniert, verwirfst du einfach den Branch, ohne dass dein Hauptprojekt davon betroffen ist.
*   **Organisation:** Jeder Branch hat einen klaren Zweck (z.B. "feature-login-button", "bugfix-header-alignment"), was die Projektgeschichte sehr übersichtlich macht.

<br><br><br>

## 🌿 Branches anzeigen und erstellen (git branch)

Der Befehl `git branch` ist dein zentrales Werkzeug, um deine Branches zu verwalten. Du kannst damit sehen, welche "Kapitel" es in deinem Projekt gibt, und neue "leere Seiten" für neue Kapitel anlegen.

<br><br><br>

### ### 📜 Alle Branches anzeigen

Um eine Liste aller Branches zu sehen, die sich lokal auf deinem Computer befinden, gibst du einfach den Befehl ohne weitere Argumente ein.

```bash
git branch
```

**Was du siehst:**
Git listet dir alle lokalen Branches untereinander auf. Der Branch, auf dem du dich gerade befindest (dein aktiver Arbeitsbereich), wird mit einem Sternchen `*` davor und oft auch farblich hervorgehoben.

**Beispiel-Ausgabe:**

```
  feature/user-profile
* main
  hotfix/typo-in-readme
```

**Interpretation:**
*   Es gibt drei Branches: `feature/user-profile`, `main` und `hotfix/typo-in-readme`.
*   Das Sternchen `*` vor `main` zeigt dir an: "Du arbeitest gerade im `main`-Branch. Alle Änderungen, die du jetzt machst, landen hier."

| Befehl | Beschreibung |
| :--- | :--- |
| `git branch` | Zeigt alle lokalen Branches an. Der aktuelle Branch ist mit einem `*` markiert. |
| `git branch -r` | Zeigt alle Branches an, die sich auf dem Remote-Server (z.B. GitHub) befinden (r = remote). |
| `git branch -a` | Zeigt **alle** Branches an, sowohl die lokalen als auch die Remote-Branches (a = all). |

<br><br><br>

### ### ✨ Einen neuen Branch erstellen

Wenn du eine neue Funktion entwickeln willst, erstellst du dafür einen neuen Branch. Der Befehl dafür ist `git branch` gefolgt von dem Namen, den du dem Branch geben möchtest.

**Wichtig:** Ein guter Branch-Name ist kurz, aber beschreibend. Oft werden Präfixe wie `feature/`, `bugfix/` oder `hotfix/` verwendet, um den Zweck des Branches klar zu machen.

**Befehlssyntax:**

```bash
git branch <neuer-branch-name>
```

**Beispiel:**
Angenommen, du bist auf dem `main`-Branch und möchtest eine neue Login-Funktion hinzufügen. Du erstellst einen neuen Branch namens `feature/login-page`.

```bash
git branch feature/login-page
```

**Was jetzt passiert:**
*   Git erstellt einen neuen Branch namens `feature/login-page`.
*   Dieser neue Branch ist eine exakte Kopie des Zustands, in dem sich dein aktueller Branch (`main` in diesem Fall) gerade befindet.
*   **Ganz wichtig:** Du hast den Branch nur erstellt. Du befindest dich danach **immer noch** auf deinem alten Branch (`main`). Um in dem neuen Branch zu arbeiten, musst du erst dorthin wechseln. Stell es dir so vor: Du hast das neue Kapitel im Inhaltsverzeichnis eingetragen, aber die Seite noch nicht aufgeschlagen.

Wenn du jetzt erneut `git branch` ausführst, siehst du:

```
  feature/login-page
  feature/user-profile
* main
  hotfix/typo-in-readme
```
Der neue Branch ist da, aber das Sternchen `*` ist immer noch bei `main`.

<br><br><br>

## ↔️ Zwischen Branches wechseln (git switch)

Nachdem du einen Branch erstellt hast (oder zu einem bereits existierenden wechseln möchtest), benutzt du den Befehl `git switch`. Dieser Befehl ist moderner und eindeutiger als der ältere Befehl `git checkout`, der für viele verschiedene Dinge zuständig war. `git switch` hat nur eine Aufgabe: den Branch zu wechseln.

Wenn du den Branch wechselst, passiert etwas Magisches: Git passt alle Dateien und Ordner in deinem Arbeitsverzeichnis automatisch an den Zustand des Branches an, zu dem du wechselst. Dateien, die es nur im neuen Branch gibt, erscheinen. Dateien, die es dort nicht gibt, verschwinden. Änderungen werden sichtbar.

<br><br><br>

### ### 🚶‍♀️ Zu einem existierenden Branch wechseln

Um zu einem Branch zu wechseln, der bereits existiert, verwendest du `git switch` gefolgt vom Namen des Ziel-Branches.

**Befehlssyntax:**

```bash
git switch <branch-name>
```

**Beispiel:**
Wir haben eben den Branch `feature/login-page` erstellt. Jetzt wollen wir dorthin wechseln, um mit der Arbeit zu beginnen.

```bash
git switch feature/login-page
```

**Ausgabe:**

```
Switched to branch 'feature/login-page'
```

Wenn du jetzt `git branch` ausführst, siehst du, dass das Sternchen `*` umgezogen ist:

```
* feature/login-page
  feature/user-profile
  main
  hotfix/typo-in-readme
```

Jetzt bist du "in" dem neuen Branch. Alle Commits, die du ab jetzt machst, werden auf der Zeitlinie dieses Branches gespeichert und beeinflussen den `main`-Branch erstmal nicht.

<br><br><br>

### ### 🚀 Einen neuen Branch erstellen und sofort dorthin wechseln

Im Alltag wirst du fast immer einen neuen Branch erstellen und sofort dorthin wechseln wollen. Es wäre umständlich, dafür immer zwei Befehle (`git branch ...` und dann `git switch ...`) ausführen zu müssen. Zum Glück gibt es dafür eine sehr praktische Abkürzung!

Mit dem Flag `-c` (für "create") kannst du `git switch` anweisen, den Branch zu erstellen, falls er noch nicht existiert, und dann sofort dorthin zu wechseln.

**Befehlssyntax:**

```bash
git switch -c <neuer-branch-name>
```

**Beispiel:**
Stell dir vor, du möchtest ein Kontaktformular hinzufügen. Du kannst diesen Vorgang in einem einzigen Schritt erledigen:

```bash
git switch -c feature/contact-form
```

**Ausgabe:**

```
Switched to a new branch 'feature/contact-form'
```

Dieser eine Befehl hat genau das Gleiche gemacht wie die zwei Befehle `git branch feature/contact-form` und `git switch feature/contact-form` zusammen. Das ist der Befehl, den du im Alltag wahrscheinlich am häufigsten verwenden wirst.

| Befehl | Beschreibung |
| :--- | :--- |
| `git switch <branch-name>` | Wechselt zum angegebenen, bereits existierenden Branch. |
| `git switch -c <neuer-branch-name>` | **C**reates (erstellt) einen neuen Branch und wechselt sofort dorthin. |
| `git switch -` | Wechselt zum zuletzt aktiven Branch. Sehr nützlich, um schnell zwischen zwei Branches hin- und herzuspringen. |# 🔧 Fehlerbehandlung und Konfliktlösung

<br><br><br>

## 🚨 Typische Fehlermeldungen im Arbeitsalltag interpretieren

Stell dir vor, Git ist wie ein sehr genauer, aber auch sehr hilfsbereiter Kollege. Wenn etwas nicht stimmt, schreit er dich nicht an, sondern gibt dir eine Nachricht, was seiner Meinung nach das Problem ist. Unsere Aufgabe ist es, seine Sprache zu lernen. Fehler sind keine Katastrophe, sondern Hinweise, die uns helfen, alles richtig zu machen.

Hier sind einige der häufigsten "Gespräche", die du mit Git führen wirst, und was sie bedeuten.

<br>

### ### 📂 `fatal: not a git repository (or any of the parent directories): .git`

| Fehlermeldung (oder Teil davon) | Was Git dir damit sagen möchte (einfach erklärt) | Was du tun kannst (Lösung) |
| :--- | :--- | :--- |
| `fatal: not a git repository` | "Entschuldigung, aber in dem Ordner, in dem du gerade bist, gibt es kein Git-Projekt. Ich sehe hier den versteckten `.git`-Ordner nicht, den ich brauche, um zu arbeiten. Ich weiß nicht, zu welchem Projekt du gehörst." | **1. Überprüfe deinen Standort:** Bist du im richtigen Ordner? Benutze den Befehl `pwd` (print working directory) oder schau in deinem Explorer/Finder nach. Wechsle mit `cd pfad/zum/projekt` in den richtigen Projektordner. <br><br> **2. Initialisiere ein neues Repository:** Falls du in diesem Ordner ein *neues* Projekt starten wolltest, hast du vergessen, es zu initialisieren. Führe `git init` aus, um den `.git`-Ordner zu erstellen. |

<br>

### ### ⬆️ `Your branch is ahead of 'origin/main' by X commits.`

| Statusmeldung | Was Git dir damit sagen möchte (einfach erklärt) | Was du tun kannst (Lösung) |
| :--- | :--- | :--- |
| `Your branch is ahead of 'origin/main' by X commits.` | "Hey, gute Arbeit! Du hast hier auf deinem Computer (lokal) X Commits gemacht, die auf dem Server (origin) noch gar nicht bekannt sind. Deine lokale Version ist der Server-Version voraus." | Das ist meistens kein Fehler, sondern ein normaler Zustand während der Arbeit. Wenn du deine Änderungen mit anderen teilen möchtest, musst du sie auf den Server hochladen. Benutze dazu `git push`. |

<br>

### ### ⬇️ `Your branch is behind 'origin/main' by X commits and can be fast-forwarded.`

| Statusmeldung | Was Git dir damit sagen möchte (einfach erklärt) | Was du tun kannst (Lösung) |
| :--- | :--- | :--- |
| `Your branch is behind 'origin/main' by X commits...` | "Achtung, auf dem Server (origin) hat sich etwas getan! Jemand anderes hat X neue Commits hochgeladen, die du auf deinem Computer noch nicht hast. Deine lokale Version ist veraltet." | Um wieder auf den neuesten Stand zu kommen und die Änderungen der anderen zu erhalten, musst du die neuen Commits vom Server herunterladen. Der einfachste Weg ist `git pull`. Dieser Befehl lädt die Änderungen herunter (`fetch`) und versucht sie direkt in deinen Code zu integrieren (`merge`). |

<br>

### ### 🛑 `error: failed to push some refs to '... '`

| Fehlermeldung (oder Teil davon) | Was Git dir damit sagen möchte (einfach erklärt) | Was du tun kannst (Lösung) |
| :--- | :--- | :--- |
| `hint: Updates were rejected because the remote contains work that you do` <br> `hint: not have locally. This is usually caused by another repository pushing` <br> `hint: to the same ref. You may want to first integrate the remote changes` <br> `hint: (e.g., 'git pull ...') before pushing again.` | "Stopp! Ich kann deine Änderungen nicht einfach auf den Server hochladen. In der Zeit, in der du gearbeitet hast, hat jemand anderes bereits seine eigenen Änderungen hochgeladen. Deine lokale Version ist also nicht mehr aktuell. Wenn ich jetzt deine Änderungen einfach drüber bügeln würde, würden die Änderungen der anderen Person verloren gehen. Das darf ich nicht zulassen." | **1. Änderungen vom Server holen:** Wie der Hinweis schon sagt, musst du zuerst die neuen Änderungen vom Server holen und in deine lokale Version integrieren. Führe `git pull` aus. <br><br> **2. Konflikte lösen (falls nötig):** Es kann sein, dass durch das `pull` ein Merge-Konflikt entsteht (siehe nächstes Kapitel). Das passiert, wenn du und die andere Person die gleichen Zeilen in der gleichen Datei geändert habt. <br><br> **3. Erneut pushen:** Nachdem du die Änderungen integriert (und eventuelle Konflikte gelöst) hast, kannst du deine Arbeit erneut mit `git push` hochladen. |

<br>

### ### 🛡️ `error: Your local changes to the following files would be overwritten by merge...`

| Fehlermeldung (oder Teil davon) | Was Git dir damit sagen möchte (einfach erklärt) | Was du tun kannst (Lösung) |
| :--- | :--- | :--- |
| `error: Your local changes to the following files would be overwritten by merge/checkout` <br> `Please commit your changes or stash them before you switch branches.` | "Vorsicht! Du hast in einigen Dateien Änderungen vorgenommen, die du noch nicht gespeichert hast (weder mit `commit` noch mit `stash`). Jetzt versuchst du, eine Aktion durchzuführen (z.B. `git pull` oder `git checkout`), die genau diese Dateien verändern würde. Um deine ungespeicherte Arbeit zu schützen, breche ich die Aktion ab." | Du hast drei Hauptmöglichkeiten: <br><br> **1. Committen:** Wenn die Änderungen fertig sind, mache einen Commit daraus: `git add .` gefolgt von `git commit -m "Deine Nachricht"`. Danach kannst du die ursprüngliche Aktion (z.B. `git pull`) erneut versuchen. <br><br> **2. Stashen (parken):** Wenn die Änderungen noch nicht fertig für einen Commit sind, kannst du sie "zwischenparken". Benutze `git stash`. Deine Änderungen verschwinden dann temporär und dein Arbeitsverzeichnis ist sauber. Führe deine Aktion (z.B. `git pull`) aus. Danach holst du deine geparkten Änderungen mit `git stash pop` wieder zurück. <br><br> **3. Verwerfen:** Wenn du die ungespeicherten Änderungen gar nicht mehr brauchst, kannst du sie verwerfen. Mit `git checkout -- <dateiname>` setzt du eine einzelne Datei zurück. Mit `git reset --hard` verwirfst du *alle* ungespeicherten Änderungen im Projekt (Achtung, diese sind dann endgültig weg!). |

<br><br><br>

## ⚔️ Einfache Merge-Konflikte erkennen und lösen

Ein Merge-Konflikt klingt erstmal furchteinflößend, ist aber im Grunde nur eine Frage von Git an dich. Git sagt: "Ich habe hier zwei verschiedene Versionen der gleichen Textstelle. Ich bin nur eine Maschine und kann nicht entscheiden, welche die richtige ist oder wie ich sie kombinieren soll. Bitte schau du als Mensch da drauf und triff die Entscheidung."

Keine Panik! Das ist ein normaler Teil der Teamarbeit.

### ### 🧐 Wie erkenne ich einen Konflikt?

Wenn du einen Befehl wie `git pull` oder `git merge anderer-branch` ausführst, wird dir Git im Terminal sehr deutlich sagen, dass etwas nicht stimmt. Du siehst eine Ausgabe, die so ähnlich aussieht:

```bash
Auto-merging dein-projekt/datei.html
CONFLICT (content): Merge conflict in dein-projekt/datei.html
Automatic merge failed; fix conflicts and then commit the result.
```

Die wichtigsten Zeilen sind `CONFLICT` und `Automatic merge failed`. Das ist das Signal.

Wenn du jetzt `git status` ausführst, siehst du einen neuen Abschnitt namens `Unmerged paths` (Nicht zusammengeführte Pfade). Alle Dateien mit Konflikten sind dort aufgelistet.

```bash
Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   dein-projekt/datei.html
```

### ### 📝 Was sehe ich in der Datei?

Wenn du jetzt die betroffene Datei (in unserem Beispiel `dein-projekt/datei.html`) in einem Texteditor öffnest, wirst du seltsame neue Zeilen sehen, die Git hinzugefügt hat. Das sind die sogenannten **Konfliktmarker**.

Sie sehen so aus:

```html
<<<<<<< HEAD
<h1>Unsere fantastische Webseite</h1>
=======
<h1>Die beste Webseite der Welt</h1>
>>>>>>> feature-neuer-titel
```

Lass uns das mal übersetzen:

*   **`<<<<<<< HEAD`**: Das ist der Anfang des problematischen Blocks. `HEAD` steht immer für **deine aktuelle, lokale Version**. Alles zwischen dieser Zeile und der nächsten (`=======`) ist der Code, so wie *du* ihn geschrieben hast.
*   **`=======`**: Das ist die Trennlinie. Stell sie dir wie einen "versus" Strich vor.
*   **`>>>>>>> feature-neuer-titel`**: Das ist das Ende des problematischen Blocks. Der Name dahinter (`feature-neuer-titel`) ist der Name des Branches, der die **eingehenden Änderungen** enthält, die den Konflikt verursacht haben. Alles zwischen `=======` und dieser Zeile ist der Code, der von "außen" kommt.

Git zeigt dir also beide Versionen direkt untereinander und bittet dich, aufzuräumen.

### ### ✅ Wie löse ich den Konflikt?

Der Lösungsprozess hat immer die gleichen drei Schritte: Entscheiden, Aufräumen, Speichern und Git informieren.

**Schritt 1: Öffne die Datei und triff eine Entscheidung**

Schau dir den Code zwischen den Konfliktmarkern an. Du hast mehrere Möglichkeiten:

1.  **Du behältst deine Version:** Du löschst die Trennlinie (`=======`) und den gesamten Block der eingehenden Änderungen (`>>>>>>>`). Du behältst nur den Code unter `<<<<<<< HEAD`.
2.  **Du übernimmst die eingehende Version:** Du löschst die Trennlinie (`=======`) und den gesamten Block deiner Änderungen (`<<<<<<< HEAD`). Du behältst nur den Code unter `>>>>>>>`.
3.  **Du kombinierst beides:** Manchmal möchtest du Teile von beiden Versionen behalten oder sie zu etwas Neuem kombinieren. In diesem Fall bearbeitest du den Code so, wie er am Ende aussehen soll.
4.  **Du schreibst etwas komplett Neues:** Vielleicht sind beide Versionen veraltet und du schreibst an dieser Stelle den Code komplett neu.

**Schritt 2: Räume die Konfliktmarker auf**

Das ist der wichtigste Schritt! Nachdem du dich entschieden hast, wie der endgültige Code aussehen soll, musst du **alle Konfliktmarker manuell löschen**.

*   `<<<<<<< HEAD` muss weg.
*   `=======` muss weg.
*   `>>>>>>> feature-neuer-titel` muss weg.

Am Ende darf in der Datei keiner dieser Marker mehr übrig sein. Die Datei muss wieder wie eine ganz normale, saubere Code-Datei aussehen.

**Beispiel für eine Lösung (wir entscheiden uns für die eingehende Version):**

*Vorher:*
```html
<<<<<<< HEAD
<h1>Unsere fantastische Webseite</h1>
=======
<h1>Die beste Webseite der Welt</h1>
>>>>>>> feature-neuer-titel
```

*Nachher (nachdem wir aufgeräumt haben):*
```html
<h1>Die beste Webseite der Welt</h1>
```

**Schritt 3: Speichern und Git über die Lösung informieren**

1.  **Speichere** die Datei in deinem Editor.
2.  Gehe zurück ins Terminal. Jetzt musst du Git mitteilen: "Ich habe den Konflikt in dieser Datei gelöst." Das machst du mit dem Befehl `git add`. Auch wenn du nichts Neues hinzufügst, dient dieser Befehl hier als Signal für "als gelöst markieren".
    ```bash
    git add dein-projekt/datei.html
    ```
3.  Wenn du alle Konflikte in allen Dateien auf diese Weise gelöst und per `git add` hinzugefügt hast, schließt du den Merge-Prozess ab. Das tust du mit einem ganz normalen `git commit`.
    ```bash
    git commit
    ```
    Git öffnet oft schon einen Texteditor mit einer vorgefertigten Commit-Nachricht, wie z.B. `Merge branch 'feature-neuer-titel'`. Du kannst diese Nachricht meistens einfach so übernehmen, speichern und den Editor schließen.

Das war's! Der Konflikt ist gelöst, der Merge ist abgeschlossen und du kannst normal weiterarbeiten.