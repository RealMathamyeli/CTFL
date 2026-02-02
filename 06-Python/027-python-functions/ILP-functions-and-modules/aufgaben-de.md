🌟 Willkommen in deiner Individual Learning Phase (ILP)!

Dies ist deine exklusive Zeit, um tief in die Welt der Programmierung einzutauchen und dein Wissen in deinem eigenen Tempo zu festigen. Betrachte diese Phase als ein persönliches Labor, in dem du experimentieren, entdecken und lernen kannst, ohne den Druck eines vorgegebenen Zeitrahmens. Es geht darum, durch praktisches Anwenden ein intuitives Verständnis zu entwickeln – die Konzepte nicht nur zu verstehen, sondern sie wirklich zu _fühlen_. Nutze diese Gelegenheit, um Fragen zu stellen, verschiedene Ansätze auszuprobieren und dein Wissen auf eine Weise zu vertiefen, die dich optimal auf zukünftige Herausforderungen vorbereitet. Lass uns gemeinsam diese Reise antreten und deine Programmierfähigkeiten auf das nächste Level heben!

---

## Eigene Funktionen definieren

1.  **Berechnung des BMI:**
    - Entwickle eine Funktion `berechne_bmi`, die zwei Parameter `gewicht_kg` (als Fließkommazahl) und `groesse_m` (ebenfalls als Fließkommazahl) entgegennimmt.
    - Die Funktion soll den Body-Mass-Index (BMI) nach der Formel `gewicht / (größe * größe)` berechnen.
    - Der berechnete BMI soll als Fließkommazahl _zurückgegeben_ werden.
    - Teste deine Funktion mit mindestens zwei verschiedenen Personen (unterschiedliches Gewicht und Größe) und gib deren BMIs aus.

---

## Scope und Modularisierung

### Gültigkeit von Variablen (lokal vs. global) (ca. 40 Minuten)

1.  **Lokale und globale Variablen:**
    - Definiere eine globale Variable `globale_nachricht` mit einem String deiner Wahl außerhalb jeder Funktion.
    - Erstelle eine Funktion `zeige_variablen`, die:
      - Versucht, `globale_nachricht` auszulesen und auszugeben.
      - Eine neue lokale Variable `lokale_nachricht` mit einem anderen String innerhalb der Funktion definiert und diese ebenfalls ausgibt.
    - Rufe die Funktion auf. Versuche anschließend, `lokale_nachricht` _außerhalb_ der Funktion auszugeben und beobachte, was passiert. Kommentiere das Ergebnis.

2.  **Modifikation einer globalen Variable:**
    - Definiere eine globale Variable `zaehler` mit dem Wert 0.
    - Schreibe eine Funktion `erhoehe_zaehler`, die den Wert von `zaehler` um 1 erhöht.
    - Achte darauf, wie du eine globale Variable innerhalb einer Funktion korrekt modifizierst, damit die Änderung auch außerhalb der Funktion sichtbar ist.
    - Rufe die Funktion `erhoehe_zaehler` dreimal auf.
    - Gib den Wert von `zaehler` vor den Aufrufen, nach dem ersten Aufruf und nach dem dritten Aufruf aus, um die Änderungen zu verfolgen.

### Importieren und Nutzen von Modulen (ca. 40 Minuten)

1.  **Nutzung von Standardmodulen:**
    - Importiere das Standardmodul `math`.
    - Verwende Funktionen aus diesem Modul, um folgende Berechnungen durchzuführen und die Ergebnisse auszugeben:
      - Die Quadratwurzel von 144.
      - Den Wert der Kreiszahl Pi.
      - Die Potenz `2^5` (zwei hoch fünf).

2.  **Erstellung und Import eines eigenen Moduls:**
    - Erstelle eine neue Python-Datei namens `meine_funktionen.py`.
    - Definiere in dieser Datei mindestens zwei Funktionen:
      - Eine Funktion `begruesse_user(name)`, die eine personalisierte Begrüßung zurückgibt.
      - Eine Funktion `dividiere(a, b)`, die zwei Zahlen dividiert und das Ergebnis zurückgibt. Füge eine einfache Fehlerbehandlung für die Division durch Null hinzu.
    - Speichere die Datei.
    - Erstelle anschließend eine _zweite_ Python-Datei (z.B. `hauptprogramm.py`) im selben Verzeichnis.
    - Importiere dein `meine_funktionen`-Modul in dieser `hauptprogramm.py`-Datei.
    - Rufe beide Funktionen (`begruesse_user` und `dividiere`) aus dem importierten Modul auf und gib die Ergebnisse aus. Teste die Division auch mit dem Fall Division durch Null.

---

### Selbstreflexion

Nimm dir am Ende dieser ILP-Phase einen Moment Zeit, um über deine Lernerfahrungen nachzudenken.

- Welche Konzepte hast du heute neu gelernt oder besser verstanden?
- Welche Aufgabe war für dich am herausforderndsten und warum?
- Was konntest du besonders gut umsetzen?
- Gibt es noch offene Fragen oder Bereiche, in denen du dir mehr Übung wünschen würdest?
- Wie könntest du die heute gelernten Inhalte in zukünftigen Projekten anwenden?

Halte deine Gedanken kurz fest, um deinen Lernprozess bewusst zu reflektieren.
