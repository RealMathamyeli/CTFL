# Schleifen – Grundlagen

- Stell dir vor, du backst Kekse und das Rezept sagt: "Platziere 12 Teigkugeln auf dem Backblech."
- Die Anweisung muss 12 Mal wiederholt werden.
- Das Rezept konnte die Anweisung 12-mal aufschreiben: "Platziere eine Teigkugel auf dem Blech. Platziere eine Teigkugel auf dem Blech. Platziere eine..."
- Das wäre sehr umständlich und repetitiv.

- Beim Programmieren ist es genauso.
- Oft musst du eine bestimmte Anweisung oder einen Anweisungsblock immer wieder ausführen.
- Genau dafür gibt es Schleifen!
- Sie sind ein grundlegendes Werkzeug zur Automatisierung von Code und halten ihn kurz und effizient.
- Anstatt den Code mehrmals auszuschreiben, sagen wir dem Computer einfach: "Mach das soundso oft" oder "Mach das, solange eine bestimmte Bedingung erfüllt ist."

- Schleifen nehmen uns die langweiligen, sich wiederholenden Aufgaben ab und sind das Herzstück vieler Programme. Schauen wir uns die drei Haupttypen von Schleifen im Detail an.

<br><br><br>

## Grundlegende Schleifen in der Programmierung

- Es gibt verschiedene Arten von Schleifen, die jeweils für unterschiedliche Situationen am besten geeignet sind.
- Die drei grundlegenden Typen sind:
  - die `for`-Schleife,
  - die `while`-Schleife und
  - die `do-while`-Schleife.

<br><br><br>

### Die for-Schleife

- Die `for`-Schleife ist wie der Keksbäcker, der von Anfang an weiß, dass er 12 Kekse backen muss.
- Du verwendest sie typischerweise, wenn du die genaue Anzahl der Wiederholungen im Voraus kennst.

**Syntax:**
Sie beginnt mit dem Schlüsselwort `for` und besteht aus drei Teilen, die durch Semikolons getrennt sind:

```javascript
for (Initialisierung; Bedingung; Inkrement / Dekrement) {
  // Codeblock, der wiederholt werden soll
}
```

**Beispiel:**
Hier ist eine `for`-Schleife, die die Zahlen 0 bis 9 in die Konsole ausgibt

```javascript
for (let i = 0; i < 10; i++) {
  console.log("Aktuelle Zahl ist: " + i);
}
```

Lass uns diese drei Teile aufschlüsseln:

1.  **Initialisierung:** `let i = 0;`

    - Dieser Teil wird **einmal** ganz am Anfang ausgeführt, bevor die Schleife startet.
    - Normalerweise wird eine Zählervariable (oft `i` für "index" oder "iterator") erstellt und mit einem Startwert versehen (normalerweise 0).

2.  **Bedingung:** `i < 10;`

    - **Vor jeder** Wiederholung (einschließlich der ersten) wird diese Bedingung überprüft.
    - Solange die Bedingung `true` ist, wird der Codeblock innerhalb der Schleife ausgeführt.
    - Sobald die Bedingung `false` ist, endet die Schleife und das Programm fährt nach der Schleife fort.

3.  **Inkrement/Dekrement:** `i++`
    - Dieser Teil wird **am Ende jeder** Wiederholung ausgeführt, _nachdem_ der Codeblock läuft.
    - `i++` ist eine Kurzform für `i = i + 1`. Es erhöht den Wert der Zählervariable um eins
    - Du könntest auch `i--` (Dekrement) oder `i = i + 2` (in Zweierschritten erhöhen) verwenden.

- Die `for`-Schleife ist extrem nützlich, um über alle Elemente in einer Liste (einem Array) zu iterieren.

<br><br><br>

### Die while-Schleife

- Die `while`-Schleife ist flexibler.
- Du verwendest sie, wenn du im Voraus nicht weißt, wie oft der Codeblock wiederholt werden muss.
- Stattdessen läuft die Schleife weiter, **solange eine bestimmte Bedingung wahr ist**.
- Sie wird auch als **kopfgesteuerte Schleife** bezeichnet, weil die Bedingung _vor_ jeder Ausführung des Codeblocks überprüft wird.
- Wenn die Bedingung von Anfang an `false` ist, wird der Code innerhalb der Schleife nicht einmal ausgeführt.

**Syntax:**

```javascript
while (Bedingung) {
  // Codeblock, der wiederholt werden soll
}
```

- **Wichtig:** Innerhalb einer `while`-Schleife musst du sicherstellen, dass die Bedingung irgendwann `false` wird. Andernfalls erzeugst du eine **Endlosschleife** und dein Programm wird abstürzen!

**Beispiel:**

- Wir können eine `while`-Schleife verwenden, um das Generieren von Zufallszahlen zu stoppen, sobald der Computer eine Zahl gleich 5 generiert.
- Um zu wissen, wie oft wir eine Zahl generiert haben, verwenden wir eine Zählervariable `counter`.

```javascript
let counter = 0; // Zähler initialisieren
let randomNumber = Math.floor(Math.random() * 10); // Erste Zufallszahl generieren
while (randomNumber !== 5) {
  // Weitermachen, solange die Zahl nicht 5 ist
  console.log("Generierte Zahl: " + randomNumber);
  counter++; // Zähler erhöhen
  randomNumber = Math.floor(Math.random() * 10); // Neue Zufallszahl generieren
}
console.log(
  "Gestoppt! Es hat " +
    counter +
    " Versuche gebraucht, um eine 5 zu generieren."
);
```

<br><br><br>

### Die do-while-Schleife

- Die `do-while`-Schleife ist ein kleiner Bruder der `while`-Schleife.
- Sie wird in ähnlichen Situationen verwendet, in denen du einen Codeblock wiederholen möchtest, solange eine Bedingung wahr ist.
- Der entscheidende Unterschied: Sie ist eine **fußgesteuerte Schleife**, was bedeutet, dass der Codeblock **zuerst ausgeführt** wird und _dann_ die Bedingung überprüft wird.
- Dies stellt sicher, dass der Codeblock **mindestens einmal ausgeführt** wird, egal ob die Bedingung wahr oder falsch ist.

**Syntax:**
Beachte das Semikolon nach den `while(...)`-Klammern!

```javascript
do {
  // Codeblock, der mindestens einmal ausgeführt wird
} while (Bedingung);
```

**Beispiel:**
Ein klassischer Anwendungsfall ist die Abfrage einer Benutzereingabe, die validiert werden muss. Wir möchten den Benutzer so lange nach einer Zahl fragen, bis er eine Zahl größer als 10 eingibt.

```javascript
let number = 0;

do {
  // Dieser Block wird mindestens einmal ausgeführt, egal was passiert.
  // In einem echten Programm würde hier die Benutzereingabe gelesen werden.
  // Hier simulieren wir es mit einer Zufallszahl.
  number = Math.floor(Math.random() * 20); // eine Zufallszahl zwischen 0 und 19
  console.log("Der Versuch war: " + number);
} while (number <= 10); // Die Schleife wiederholt sich, solange die Zahl nicht größer als 10 ist.

console.log("Erfolg! Die Zahl " + number + " ist größer als 10.");
```

Hier wird zuerst eine Zahl "eingegeben" (`do`), und erst dann wird überprüft, ob sie die Bedingung erfüllt (`while`). Wenn sie 10 oder weniger ist, wird der `do`-Block erneut ausgeführt.

<br><br><br>

## Verwendung und Anwendungsfälle

- Jetzt, wo du die Syntax kennst, schauen wir uns an, wann du welche Schleife verwenden solltest.
- Die Auswahl des richtigen Schleifentyps macht deinen Code lesbarer und logischer.

### Vergleich der Schleifentypen

Hier ist eine Tabelle, die die drei Schleifen direkt vergleicht:

| Schleifentyp   | Hauptmerkmal                                            | Wann verwenden?                                                                                                      |
| :------------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| **`for`**      | Zählergesteuert                                         | Wenn die Anzahl der Wiederholungen im Voraus bekannt ist                                                             |
| **`while`**    | Kopfgesteuert (Bedingung wird _vor_ Ausführung geprüft) | Wenn die Anzahl der Wiederholungen unbekannt ist und von einer Bedingung abhängt. Der Code läuft möglicherweise nie. |
| **`do-while`** | Fußgesteuert (Bedingung wird _nach_ Ausführung geprüft) | Wenn der Codeblock mindestens einmal ausgeführt werden muss, unabhängig von der Bedingung.                           |

<br><br><br>

### Typische Anwendungsfälle

#### Anwendungsfälle für die `for`-Schleife

- **Über eine Liste von Elementen iterieren:** Du hast eine Einkaufsliste (ein Array) und möchtest jeden Artikel ausgeben.
  ```javascript
  let shopping_list = ["Milch", "Brot", "Eier", "Butter"];
  for (let i = 0; i < shopping_list.length; i++) {
    console.log("Kaufe: " + shopping_list[i]);
  }
  ```
- **Eine mathematische Berechnung durchführen:** Die Summe der Zahlen von 1 bis 100 berechnen.
- **Grafiken zeichnen:** 10 Kreise nebeneinander auf einem Bildschirm zeichnen.

#### Anwendungsfälle für die `while`-Schleife

- **Auf Benutzerinteraktion warten:** In einem Spiel läuft die Hauptschleife, solange der Spieler nicht auf "Beenden" geklickt hat.
  ```javascript
  let gameRunning = true;
  while (gameRunning) {
    // Logik für einen Frame des Spiels
    // Wenn der Spieler auf "Beenden" klickt, setze gameRunning auf false.
  }
  ```
- **Daten verarbeiten, bis keine mehr übrig sind:** Eine Datei Zeile für Zeile lesen, bis das Ende der Datei erreicht ist.
- **Ein Ziel durch Annäherung erreichen:** Einen Algorithmus laufen lassen, bis das Ergebnis eine gewünschte Genauigkeit erreicht.

#### Anwendungsfälle für die `do-while`-Schleife

- **Ein Menü anzeigen:** Ein Menü mit Optionen für den Benutzer anzeigen und ihn wählen lassen, bis eine gültige Option (z.B. eine Zahl zwischen 1 und 4) eingegeben wird.
- Das Menü muss mindestens einmal angezeigt werden.
  ```javascript
  let selection;
  do {
    console.log("--- MENÜ ---");
    console.log("1. Spiel starten");
    console.log("2. Highscore anzeigen");
    console.log("3. Beenden");
    // selection = readUserInput(); // Eingabe lesen
  } while (selection < 1 || selection > 3); // Wiederholen, wenn die Eingabe ungültig ist.
  ```
- **Nach einem Passwort fragen:** Den Benutzer nach einem Passwort fragen. Wenn es falsch ist, wird die Aufforderung wiederholt. Die erste Aufforderung muss immer erfolgen.
  <br><br><br>
