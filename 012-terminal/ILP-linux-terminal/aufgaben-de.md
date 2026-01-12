📚 # Individuelle Lernphase (ILP) – Dein Nachmittag voller Entdeckungen

Ein wunderschöner Nachmittag liegt vor Dir, eine Einladung zur individuellen Lernphase, oder kurz ILP. Sie ist weit mehr als nur eine Arbeitszeit; sie ist Dein persönlicher Entdeckungsraum, ein Labor für Neugier und Vertiefung. Hier hast Du die Freiheit, in Deinem Tempo zu lernen, Fragen zu stellen, die Dir unter den Nägeln brennen, und Dich intensiv mit den Themen auseinanderzusetzen, die Deine Aufmerksamkeit fesseln. Es ist die perfekte Gelegenheit, Wissen nicht nur zu konsumieren, sondern es aktiv zu gestalten, Verbindungen zu knüpfen und ein tiefes Verständnis für die Materie zu entwickeln. Nutze diese Zeit, um Dich herauszufordern, neue Wege zu erkunden und Dein Fundament im Umgang mit der Linux-Shell zu festigen. Die Kommandozeile mag auf den ersten Blick einschüchternd wirken, doch sie birgt eine enorme Macht und Effizienz, die Du heute Schritt für Schritt für Dich erschließen wirst. Viel Erfolg und vor allem viel Spaß beim Erkunden!

---

## 🧭 Aufgabe 1: Die Welt des Dateisystems erkunden (ca. 45 Minuten)

### Dein Auftrag

In dieser Aufgabe wirst Du Dich intensiv mit der Navigation im Linux-Dateisystem und der Anzeige von Inhalten auseinandersetzen. Dein Ziel ist es, ein Gefühl für die Struktur zu entwickeln und sicher zwischen verschiedenen Orten zu wechseln sowie deren Inhalte zu überblicken.

1.  **Aufbau einer Testumgebung:**
    *   Erstelle ein neues Hauptverzeichnis in Deinem Home-Verzeichnis, nenne es `MeineArbeit`.
    *   Innerhalb von `MeineArbeit` erstelle zwei Unterverzeichnisse: `Projekte` und `Dokumente`.
    *   Im Verzeichnis `Projekte` lege ein weiteres Unterverzeichnis namens `Website` an.
    *   Innerhalb von `Dokumente` erstelle ein Verzeichnis namens `Berichte`.
2.  **Navigations-Challenge:**
    *   Beginne in Deinem Home-Verzeichnis.
    *   Navigiere mit relativen Pfaden zu `MeineArbeit/Projekte/Website`.
    *   Wechsle von dort aus direkt mit einem absoluten Pfad zurück in Dein Home-Verzeichnis.
    *   Navigiere von Deinem Home-Verzeichnis aus mit einem absoluten Pfad zu `MeineArbeit/Dokumente/Berichte`.
    *   Wechsle von `Berichte` aus mit einem relativen Pfad zurück zu `MeineArbeit`.
3.  **Inhalte betrachten:**
    *   Erstelle in jedem der zuvor angelegten Verzeichnisse (z.B. `MeineArbeit`, `Projekte`, `Website`, `Dokumente`, `Berichte`) eine oder mehrere leere Textdateien. Gib ihnen sprechende Namen.
    *   Zeige Dir die Inhalte Deiner erstellten Verzeichnisse und die darin enthaltenen Dateien an. Experimentiere mit verschiedenen Optionen, um detailliertere Informationen zu erhalten oder versteckte Dateien sichtbar zu machen.
    *   Versuche, den Inhalt einer der leeren Dateien anzuzeigen. Was stellst Du fest?

### Reflexion

Wie hat sich Dein Verständnis für relative und absolute Pfade während dieser Aufgabe entwickelt? Wo hast Du vielleicht kurz überlegen müssen, und welche Erkenntnis konntest Du daraus gewinnen?
    Es war eine gute Auffrischung.

---

## 📂 Aufgabe 2: Dateien und Verzeichnisse managen (ca. 45 Minuten)

### Dein Auftrag

Diese Aufgabe konzentriert sich auf die grundlegende Manipulation von Dateien und Verzeichnissen. Du wirst lernen, sie zu erstellen, zu kopieren, zu verschieben, umzubenennen und zu löschen.

1.  **Vorbereitung:**
    *   Stelle sicher, dass Dein `MeineArbeit`-Verzeichnis aus Aufgabe 1 existiert. Falls nicht, erstelle es neu mit der gleichen Struktur.
    *   Erstelle eine neue, leere Datei im Verzeichnis `MeineArbeit/Dokumente` und nenne sie `Entwurf.txt`.
    *   Erstelle eine weitere leere Datei im Verzeichnis `MeineArbeit/Projekte/Website` und nenne sie `index.html`.
2.  **Dateien kopieren und verschieben:**
    *   Kopiere die Datei `Entwurf.txt` aus `MeineArbeit/Dokumente` in das Verzeichnis `MeineArbeit/Projekte/Website`.
    *   Verschiebe die originale `Entwurf.txt` aus `MeineArbeit/Dokumente` in das Verzeichnis `MeineArbeit/Dokumente/Berichte`. Benenne sie während des Verschiebens in `Bericht_Q1.txt` um.
3.  **Verzeichnisse managen:**
    *   Erstelle ein neues Verzeichnis namens `Backup` in `MeineArbeit`.
    *   Kopiere das gesamte Verzeichnis `MeineArbeit/Projekte/Website` inklusive aller Inhalte in das `Backup`-Verzeichnis.
    *   Benenne das Verzeichnis `MeineArbeit/Projekte` um in `MeineProjekte`.
4.  **Aufräumen:**
    *   Lösche die kopierte `Entwurf.txt` aus `MeineArbeit/Projekte/Website` (nicht das Original im `Berichte`-Ordner!).
    *   Lösche das gesamte `Backup`-Verzeichnis samt Inhalt. Achte dabei besonders auf die korrekte Syntax und sei Dir der Konsequenzen bewusst.

### Reflexion

Welche Befehle haben sich Dir am leichtesten eingeprägt, und bei welchen musstest Du Dich stärker konzentrieren, um Fehler zu vermeiden? Was hast Du über die Wichtigkeit der Pfadangaben gelernt?

---

## 🔐 Aufgabe 3: Dateiattribute und -rechte (ca. 30 Minuten)

### Dein Auftrag

In dieser Aufgabe tauchst Du in die Welt der Dateiattribute und Zugriffsrechte ein. Du wirst lernen, wie man sie anzeigt und grundlegend verändert, um die Sicherheit und Kontrolle über Dateien und Verzeichnisse zu gewährleisten.

1.  **Rechte prüfen:**
    *   Navigiere in Dein `MeineArbeit`-Verzeichnis (oder das, wo Du Deine Dateien aus den vorherigen Aufgaben erstellt hast).
    *   Lass Dir die detaillierten Dateiattribute und Rechte aller Dateien und Verzeichnisse in `MeineArbeit` und den direkt darin enthaltenen Unterverzeichnissen anzeigen. Achte besonders auf die Bedeutungen der einzelnen Spalten.
    *   Notiere Dir die Standardrechte, die beim Erstellen von Dateien und Verzeichnissen in Deiner Umgebung gesetzt werden.
            **-rw-rw-r-- 1**
2.  **Rechte ändern (Dateien):**
    *   Erstelle eine neue, leere Datei namens `Geheimnis.txt` in `MeineArbeit/Dokumente/Berichte`.
    *   Setze die Rechte für `Geheimnis.txt` so, dass nur der Eigentümer sie lesen und schreiben darf, aber niemand anderes Zugriff hat (kein Lesen, Schreiben, Ausführen für Gruppe und Andere).
    *   Ändere die Rechte danach so, dass der Eigentümer volle Rechte hat (lesen, schreiben, ausführen), die Gruppe nur lesen darf, und Andere keine Rechte haben.
3.  **Rechte ändern (Verzeichnisse):**
    *   Erstelle ein neues Verzeichnis `Projekt_Shared` in `MeineArbeit/Projekte`.
    *   Setze die Rechte für `Projekt_Shared` so, dass der Eigentümer volle Rechte hat, die Gruppe nur lesen und ausführen darf (aber nicht schreiben), und Andere keine Rechte haben.
    *   Versuche, die Bedeutung des "Ausführen"-Rechts für Verzeichnisse zu verstehen. Was passiert, wenn es fehlt?
            Dann kann ich das Verzeichnis nicht öffnen.

### Reflexion

Was war der Aha-Moment beim Verständnis der Datei- und Verzeichnisrechte? Welche Befehle waren hier besonders mächtig, und welche Risiken siehst Du bei falscher Anwendung? Google Gemini ist mein kontinuirlicher Aha-Moment. Das prompten ist besonders mächtig. Bei falscher Anwendung kann man sich komplette ausperren und hat nie wieder Zugriff und man müsste ein Projekt ggf. komplett von vorne anfangen, wenn kein Backup besteht.

---

## ✍️ Aufgabe 4: Textbearbeitung mit Nano (ca. 30 Minuten)

### Dein Auftrag

Diese Aufgabe führt Dich in den Texteditor `nano` ein, ein einfaches, aber effektives Werkzeug zur direkten Bearbeitung von Textdateien auf der Kommandozeile.

1.  **Datei erstellen und bearbeiten:**
    *   Erstelle eine neue Textdatei in `MeineArbeit/Dokumente` und nenne sie `Notizen.txt`.
    *   Öffne `Notizen.txt` mit `nano`.
    *   Füge mindestens fünf Zeilen beliebigen Textes hinzu. Schreibe zum Beispiel einige Deiner Lernerfahrungen des heutigen Nachmittags auf.
    *   Füge eine Leerzeile ein und dann einen weiteren Absatz.
    *   Speichere die Änderungen und schließe `nano`.
    *   Öffne `Notizen.txt` erneut, um zu überprüfen, ob Deine Änderungen gespeichert wurden.
2.  **Navigation und Suchen:**
    *   Öffne `Notizen.txt` wieder mit `nano`.
    *   Navigiere mit den `nano`-Befehlen (ohne Maus) an den Anfang der Datei, dann ans Ende.
    *   Springe zu einer bestimmten Zeile in der Mitte der Datei.
    *   Suche nach einem Wort, das Du zuvor in den Text eingefügt hast. Führe die Suche mehrmals aus, um alle Vorkommen zu finden.
    *   Schließe `nano`, ohne die Datei erneut zu speichern.

### Reflexion

Wie hilfreich ist ein Kommandozeilen-Texteditor wie `nano` im Vergleich zu grafischen Editoren? Wo siehst Du dessen Stärken und typische Anwendungsfälle?
    * Keine grafische Oberfläche (GUI) nötig: nano läuft direkt im Terminal. Das ist entscheidend, wenn du dich per SSH auf einem Server einloggst, der gar keinen Desktop besitzt.
    * Minimaler Ressourcenverbrauch: nano startet sofort, verbraucht fast keinen Arbeitsspeicher und hat keine Ladezeiten – ideal für schwache Hardware oder virtuelle Maschinen.
    * Keine Lernkurve: Im Gegensatz zu vim (wo man erst Befehle wie :q! lernen muss, um überhaupt herauszukommen) zeigt nano die wichtigsten Befehle am unteren Bildschirmrand an.
    * Überall vorinstalliert: Fast jede Linux-Distribution hat nano bereits an Bord. Du kannst dich darauf verlassen, dass es da ist.

---

## ⚡ Aufgabe 5: Praxis-Challenge und Fehlerbehebung (ca. 20 Minuten)

### Dein Auftrag

Diese Aufgabe fordert Dich heraus, die gelernten Befehle in einem kleinen Szenario anzuwenden und bewusst Fehler zu provozieren, um zu lernen, wie man sie erkennt und behebt.

1.  **Szenario "Projektstart":**
    *   Du möchtest ein neues Projekt namens `Webshop` in Deinem `MeineProjekte`-Verzeichnis (das Du in Aufgabe 2 umbenannt hast) starten.
    *   Erstelle dort ein Verzeichnis `Webshop`.
    *   Im `Webshop`-Verzeichnis benötigst Du die Unterverzeichnisse `frontend` und `backend`.
    *   Kopiere die Datei `index.html` aus dem Verzeichnis `MeineProjekte/Website` in das `Webshop/frontend`-Verzeichnis.
    *   Erstelle eine leere Datei namens `server.js` im `Webshop/backend`-Verzeichnis und gib dem Eigentümer volle Rechte, der Gruppe Leserechte und Anderen keine Rechte.
2.  **Fehleranalyse bewusst provozieren:**
    *   Versuche, ein Verzeichnis zu löschen, das nicht leer ist, ohne die Option für rekursives Löschen zu verwenden. Was passiert? Lies die Fehlermeldung sorgfältig.
            Das Verzeichnis ist nicht leer.
    *   Versuche, eine Datei umzubenennen, die nicht existiert. Welche Meldung erhältst Du?
            
    *   Versuche, ein Kommando mit einem offensichtlichen Tippfehler einzugeben (z.B. `ls` statt `ls`). Was sagt die Shell Dir? da ls kein Tippfehler ist, gibt es keine Fehlermeldung, sondern das übliche. Wenn ich jedoch z.B. `ld` eingebe, dann: Der Befehl 'ld' wurde nicht gefunden, kann aber installiert werden mit: sudo apt install binutils

3.  **Fehler beheben:**
    *   Behebe die Fehler, die Du in Schritt 2 provoziert hast, indem Du die korrekten Befehle verwendest oder die fehlenden Optionen hinzufügst.
        mv: Aufruf von stat für 'MeineProjekte/server.js' nicht möglich: Datei oder Verzeichnis nicht gefunden

### Reflexion

Welche Strategien hast Du entwickelt, um Fehlermeldungen in der Shell zu interpretieren? Gab es einen Fehler, der Dich besonders überrascht oder Dir eine neue Einsicht gegeben hat? Menschenverstand hilft beim interpretieren. Ansonsten Google Gemini.