✨ Willkommen in deiner individuellen Lernphase!

Dies ist deine exklusive Reise, die speziell dafür konzipiert wurde, dein Verständnis für die mächtige Welt von Python zu vertiefen. Betrachte diese Phase als dein persönliches Labor, in dem du experimentieren, Fehler machen und daraus lernen kannst – ganz ohne Druck, aber mit dem Ziel, dein Wissen nachhaltig zu verankern. Tauche ein in die Logik des Codes, spüre die Eleganz der Syntax und erlebe die Befriedigung, wenn deine Programme zum Leben erwachen. Nutze diese Zeit, um nicht nur Aufgaben zu lösen, sondern auch um deine Problemlösungsfähigkeiten zu schärfen und deine Intuition für gute Code-Praktiken zu entwickeln. Viel Erfolg und vor allem: Viel Spaß beim Entdecken!

---

## Aufgabe 1: Der dynamische Währungsumrechner mit Mehrwert

### Beschreibung

Du sollst ein Python-Programm entwickeln, das einen eingegebenen Geldbetrag nicht nur in eine Zielwährung umrechnet, sondern dir zusätzlich zeigt, wie dieser ursprüngliche Betrag in einer _dritten_ Währung aussehen würde. Das erfordert ein gutes Verständnis von Benutzereingaben, mathematischen Operationen und der sorgfältigen Handhabung von Datentypen.

### Ziel der Aufgabe

Festigung des Umgangs mit `input()` und `print()`, Deklaration und Zuweisung von `float`-Variablen sowie der Anwendung mathematischer Operatoren in einer praxisnahen Anwendung.

### Anforderungen

1.  **Startwert:** Fordere den Benutzer auf, einen Betrag in Euro (EUR) einzugeben. Speichere diesen Wert in einer geeigneten `float`-Variable.
2.  **Wechselkurse:** Definiere zwei unterschiedliche Wechselkurse als `float`-Variablen direkt in deinem Code:
    - Einen Kurs von EUR nach US-Dollar (USD), z.B. `1 EUR = 1.08 USD`.
    - Einen Kurs von EUR nach Japanischen Yen (JPY), z.B. `1 EUR = 165.25 JPY`.
3.  **Berechnung USD:** Berechne, wie viel USD der eingegebene Euro-Betrag entspricht. Speichere das Ergebnis in einer neuen `float`-Variable.
4.  **Berechnung JPY:** Berechne, wie viel JPY der _ursprüngliche_ Euro-Betrag (aus Schritt 1) entspricht. Speichere dieses Ergebnis ebenfalls in einer neuen `float`-Variable.
5.  **Ausgabe:** Gib alle Ergebnisse übersichtlich und klar formatiert auf der Konsole aus. Zeige den ursprünglichen EUR-Betrag, den umgerechneten USD-Betrag und den umgerechneten JPY-Betrag an.
6.  **Kommentare:** Füge deinem Code aussagekräftige Kommentare hinzu, die erklären, was die einzelnen Abschnitte tun und warum bestimmte Variablen so benannt wurden. Achte auf eine sinnvolle Einrückung deines Codes.

- Beispielausgabe:

```
---Währungsumrechner Ergebnisse:
Ursprünglicher Betrag in EUR: 100.00
Umgerechneter Betrag in USD: 108.00
Umgerechneter Betrag in JPY: 16525.00
```

### Geschätzter Zeitaufwand

~50 Minuten

---

## Aufgabe 2: Das Intelligente Profil-Analyse-Tool

### Beschreibung

Erstelle ein interaktives Programm, das verschiedene persönliche Informationen von einem Benutzer sammelt und daraus ein zusammenfassendes Profil generiert. Dieses Profil soll nicht nur die direkt eingegebenen Daten anzeigen, sondern auch eine einfache Schlussfolgerung basierend auf den Informationen ziehen.

### Ziel der Aufgabe

Vertiefung des Umgangs mit verschiedenen Datentypen (`str`, `int`, `bool`), komplexeren Benutzereingaben (`input()`), der Variablenzuweisung und der strukturierten Konsolenausgabe mit `print()`.

### Anforderungen

1.  **Datenerfassung:** Fordere den Benutzer nacheinander auf, folgende Informationen einzugeben:
    - `Name` (String)
    - `Alter` (Integer)
    - `Wohnort` (String)
    - `Beruf` (String)
    - Die Frage: "Bist du an Python-Programmierung interessiert? (ja/nein)" (Erwarte 'ja' oder 'nein' und konvertiere die Antwort in eine `Boolean`-Variable).
2.  **Variablen:** Speichere jede Eingabe in einer passend benannten Variable mit dem korrekten Datentyp.
3.  **Alterskategorie:** Basierend auf dem eingegebenen `Alter`, weise dem Benutzer eine Kategorie zu. Speichere diese Kategorie als String in einer neuen Variable:
    - Wenn das Alter kleiner als 25 ist: "Junger Enthusiast"
    - Wenn das Alter 25 oder größer ist: "Erfahrener Profi"
4.  **Profilausgabe:** Erstelle eine umfassende, aber prägnante Profilzusammenfassung. Diese sollte alle gesammelten Informationen sowie die abgeleitete Alterskategorie enthalten und ansprechend auf der Konsole ausgegeben werden. Achte darauf, dass die Ausgabe leicht lesbar und strukturiert ist.
5.  **Kommentare:** Nutze Kommentare, um die Deklaration der Variablen und insbesondere die Logik für die Alterskategorie zu erläutern.

- Beispielausgabe:

```
---Benutzerprofil Zusammenfassung:
Name: Alice
Alter: 30
Wohnort: Berlin
Beruf: Data Scientist
An Interesse an Python-Programmierung: True
Alterskategorie: Erfahrener Profi
```

### Geschätzter Zeitaufwand

~50 Minuten

---

## Aufgabe 3: Die Geometrie-Vergleichs-Challenge

### Beschreibung

Deine Aufgabe ist es, ein Python-Programm zu schreiben, das von zwei verschiedenen geometrischen Formen (einem Rechteck und einem Kreis) die Maße abfragt und dann deren Fläche und Umfang berechnet. Abschließend soll das Programm die Flächen beider Formen miteinander vergleichen.

### Ziel der Aufgabe

Anwendung von Benutzereingaben (`input()`), `float`-Datentypen für Berechnungen, mathematischen Operatoren und der strukturierten Ausgabe zur Darstellung komplexer Ergebnisse.

### Anforderungen

1.  **Rechteck-Daten:** Fordere den Benutzer auf, die `Länge` und die `Breite` eines Rechtecks einzugeben. Speichere diese als `float`-Variablen.
2.  **Rechteck-Berechnungen:**
    - Berechne die `Fläche` des Rechtecks (`Länge * Breite`) und speichere sie.
    - Berechne den `Umfang` des Rechtecks (`2 * (Länge + Breite)`) und speichere ihn.
3.  **Kreis-Daten:** Fordere den Benutzer auf, den `Radius` eines Kreises einzugeben. Speichere diesen als `float`-Variable.
4.  **Kreis-Berechnungen:**
    - Definiere Pi als `float`-Variable (z.B. `3.14159`).
    - Berechne die `Fläche` des Kreises (`Pi * Radius * Radius`) und speichere sie.
    - Berechne den `Umfang` des Kreises (`2 * Pi * Radius`) und speichere ihn.
5.  **Ergebnisausgabe:** Gib alle berechneten Flächen und Umfänge klar beschriftet auf der Konsole aus, getrennt für Rechteck und Kreis.
6.  **Flächenvergleich:** Vergleiche die berechneten Flächen des Rechtecks und des Kreises. Gib eine Aussage auf der Konsole aus, welche Form die größere Fläche hat oder ob beide Flächen gleich groß sind.
7.  **Kommentare:** Nutze Kommentare, um die Formeln für Fläche und Umfang sowie die Logik des Vergleichs zu erläutern. Achte auf eine saubere Code-Struktur und Einrückung.

- Beispielausgabe:

```
---Rechteck Ergebnisse:
Länge: 5.0
Breite: 3.0
Fläche: 15.0
Umfang: 16.0
---Kreis Ergebnisse:
Radius: 4.0
Fläche: 50.26544
Umfang: 25.13272
Das Rechteck hat die größere Fläche.
```

### Geschätzter Zeitaufwand

~50 Minuten

---

### Selbstreflexion

Nimm dir nach Abschluss aller Aufgaben einen Moment Zeit, um über deine Arbeit nachzudenken:

1.  **Herausforderungen:** Welche der Aufgaben oder Konzepte (z.B. Datentypen, Operatoren, Einrückungen) haben dich am meisten herausgefordert? Warum?
2.  **Lösungsansätze:** Gab es alternative Wege, die Aufgaben zu lösen, die dir während oder nach der Programmierung in den Sinn gekommen sind?
3.  **Code-Qualität:** Bist du mit der Lesbarkeit und Struktur deines Codes zufrieden? Wo siehst du Potenzial zur Verbesserung (z.B. bei Variablennamen, Kommentaren, Einrückungen)?
4.  **Learnings:** Was ist das wichtigste, das du aus dieser individuellen Lernphase mitgenommen hast?
5.  **Nächste Schritte:** Welche Themen oder Konzepte möchtest du als Nächstes tiefer erforschen oder üben, um deine Python-Kenntnisse weiter auszubauen?

Diese Reflexion hilft dir, dein Verständnis zu festigen und deinen Lernweg bewusst zu gestalten.
