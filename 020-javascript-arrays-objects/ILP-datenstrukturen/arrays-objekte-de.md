# Deine individuelle Lernphase: Das Daten-Archiv

Willkommen im **Daten-Archiv**! Jetzt lernst du, wie man die Daten selbst speichert und organisiert.

**Einrichtung:**

1. Innerhalb von `data-archive`-Ordner, erstelle zwei Dateien: `index.html` und `script.js`.
2. Öffne deine `script.js`, die mit der `index.html` verknüpft ist.
3. Öffne die Chrome Developer Tools (Rechtsklick -> Untersuchen -> Konsole).
4. Schreibe deinen Code, speichere ihn und aktualisiere den Browser, um die Ergebnisse zu sehen.
5. Push deine Änderungen zu GitHub, wenn du fertig bist!

---

### Aufgabe 1: Die Sammlung (Arrays)

**⏱️ Geschätzte Zeit: 30 Minuten**

In dieser Aufgabe wirst du einfache Listen mithilfe von **Arrays** erstellen. Erinnere dich: Ein Array ist eine geordnete Sammlung, bei der jedes Element eine bestimmte Position hat, die man **Index** nennt. Dieser beginnt immer bei **0**.

1. **Erstellen:** Erstelle ein Array namens `travelList`. Fülle es mit 3 Reisezielen (Strings), die du besuchen möchtest (z. B. `"London"`, `"Tokio"`, `"New York"`).
2. **Lesen:** Benutze `console.log`, um das **erste** Reiseziel und das **dritte** Reiseziel auszugeben.
3. **Ändern:** Du hast es dir anders überlegt! Überschreibe das zweite Reiseziel mit einer neuen Stadt (ändere z. B. „Tokio“ in „Sydney“).
4. **Prüfen:** Logge das gesamte Array in die Konsole, um die Änderung zu sehen.

---

### Aufgabe 2: Der Daten-Verarbeiter (Iteration)

**⏱️ Geschätzte Zeit: 45 Minuten**

Jetzt wirst du „Maschinen“ benutzen, um deine Listen automatisch zu verarbeiten. Du wirst `forEach` nutzen, um Elemente zu betrachten, und `map`, um sie zu verändern.

**Teil A: Der Preis-Checker (`forEach`)**

1. Erstelle ein Array namens `prices` mit diesen Zahlen: `[10, 20, 50, 100]`.
2. Verwende die Methode `.forEach()`, um durch das Array zu laufen (loopen).
3. Schreibe innerhalb des Loops ein `console.log`, das Folgendes ausgibt: `"Der Preis ist: [Zahl] €"`.

- _Erinnerung:_ `forEach` gibt **keine** neue Liste zurück; es führt nur eine Aktion aus.

**Teil B: Die Rabatt-Maschine (`map`)**

1. Verwende dasselbe `prices` Array.
2. Nutze die Methode `.map()`, um ein **neues Array** namens `salePrices` zu erstellen.
3. Gib innerhalb der Map-Funktion den Preis geteilt durch 2 zurück (50% Rabatt).
4. Logge das neue `salePrices` Array in die Konsole. Du solltest `[5, 10, 25, 50]` sehen.

---

### Aufgabe 3: Der Bauplan (Objekte)

**⏱️ Geschätzte Zeit: 40 Minuten**

Arrays sind für Listen da; **Objekte** sind dafür da, spezifische Dinge mit Eigenschaften (Schlüssel-Wert-Paare) zu beschreiben.

1. **Erstellen:** Erstelle ein Objekt namens `book`, das dein Lieblingsbuch beschreibt. Es sollte Schlüssel (Keys) für Folgendes haben:

- `title` (String)
- `author` (String)
- `pages` (Number / Zahl)
- `isRead` (Boolean / Wahrheitswert)

2. **Lesen (Punkt-Notation):** Logge den `title` und den `author` in die Konsole, indem du die Punkt-Syntax `.` verwendest.
3. **Lesen (Klammer-Notation):** Logge die Seitenanzahl (`pages`) unter Verwendung der Klammer-Syntax `["pages"]`.
4. **Hinzufügen:** Du hast die Sprache vergessen! Füge dem Objekt eine neue Eigenschaft `language` hinzu und setze sie auf `"Deutsch"` (oder die entsprechende Sprache).
5. **Löschen:** Du hast das Buch fertig gelesen und brauchst den Status nicht mehr. Lösche die Eigenschaft `isRead` aus dem Objekt.
6. **Prüfen:** Logge das gesamte `book` Objekt, um das Endergebnis zu sehen.

---

### Aufgabe 4: Das Master-Archiv (Verschachtelte Daten)

**⏱️ Geschätzte Zeit: 50 Minuten**

Daten in der echten Welt sind komplex. Oft findest du Objekte innerhalb von Arrays oder Arrays innerhalb von Objekten. Das nennt man **Verschachtelung** (Nesting).

**Szenario:** Du verwaltest eine Kontaktliste für ein Telefonbuch.

1. **Erstellen:** Erstelle ein Array namens `contacts`. Füge innerhalb dieses Arrays **3 Objekte** hinzu. Jedes Objekt soll eine Person repräsentieren und so aussehen:

```javascript
{
  name: "Alice",
  number: "123-456",
  hobbies: ["Lesen", "Wandern"] // Ein Array in einem Objekt!
}

```

_(Stelle sicher, dass du 3 verschiedene Personen mit unterschiedlichen Hobbys erstellst)._ 2. **Tiefer Zugriff:**

- Logge den **Namen** der **ersten** Person im Array.
- Logge das **erste Hobby** der **zweiten** Person. (Hinweis: `contacts[1].hobbies[0]`).

3. **Manipulation:**

- Die dritte Person hat eine neue Nummer. Aktualisiere die Eigenschaft `number` des **dritten** Objekts im Array.
- Füge dem `hobbies`-Array der **ersten** Person ein neues Hobby hinzu, indem du `.push()` benutzt (z. B. `contacts[0].hobbies.push("Gaming")`).

4. **Finaler Log:** Gib das gesamte `contacts` Array in der Konsole aus, um deine komplexe Datenstruktur zu überprüfen.
