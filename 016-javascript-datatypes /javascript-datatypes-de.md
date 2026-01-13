# Variablen, Datentypen, Operatoren und Konsole in JavaScript

Variablen und Datentypen

- Definition und Verwendung von let und const
- Überblick und Verwendung von String, Number, Boolean, null, undefined
- String-Methoden

Operatoren und Arbeiten mit der Konsole

- Grundlagen arithmetischer und logischer Operatoren
- Arbeiten mit der Browser-Konsole: Code ausgeben und einfaches Debugging

## Variablen und Datentypen

- Beim Programmieren geht es darum, Daten zu speichern und zu manipulieren.
- Programmiersprachen stellen uns Werkzeuge zur Verfügung, um dies effektiv zu tun.
- Beim Erstellen von Anwendungen müssen wir verschiedene Arten von Informationen speichern: Benutzernamen, Alter, Preise, Einstellungen und vieles mehr.
- Dann müssen wir Operationen auf diesen Daten durchführen: Berechnungen, Vergleiche, Textmanipulationen und so weiter.
- In JavaScript (und anderen Programmiersprachen) verwenden wir **Variablen**, um Daten zu speichern, und **Datentypen**, um zu definieren, mit welcher Art von Daten wir es zu tun haben, damit wir wissen, wie wir damit arbeiten können.

### Was sind Variablen?

- Stell dir vor, du kochst und hast viele Zutaten.
- Um die Dinge organisiert zu halten, legst du jede Zutat in `einen separaten Behälter` und schreibst mit einem Marker `was drin ist`: "Zucker", "Mehl", "Salz" und so weiter.

- Beim Programmieren ist es ganz ähnlich.
- Eine **Variable** ist wie ein solcher Behälter.
- Sie ist ein Behälter im Speicher deines Computers, in dem du `einen Wert` speichern kannst.
- Damit du später weißt, was in welchem Behälter ist, gibst du ihm einen eindeutigen Namen (z.B. `userAge` oder `greetingMessage`).

### Was ist ein Datentyp?

- Genau wie beim Kochen, wo Zutaten verschiedener Art sein können (Pulver, Flüssigkeit, scharf, sauer), können in der Programmierung Werte auch verschiedene **Datentypen** haben.
- Der Datentyp sagt dem Computer, `welche Art von Wert` in der Variable gespeichert ist.
- Das ist wichtig, weil du mit Zahlen rechnen kannst, aber nicht mit Text.
- Der Computer muss wissen, mit welcher Art von Daten er es zu tun hat.

<br><br><br>

## Variablen deklarieren: `let` und `const`

- Wenn du einen neuen "Behälter" (eine Variable) in deinem Programm erstellen möchtest, nennt man das **"deklarieren"**.
- Wenn du ihm zum ersten Mal einen Wert gibst, nennt man das **"zuweisen"** eines Wertes.
- Im modernen JavaScript verwendest du hauptsächlich zwei Schlüsselwörter dafür:
  - `let` und `const`.

### `const` (Konstante)

- Das Wort `const` steht für "constant" (Konstante).
- Eine Konstante ist eine Variable, deren Wert **sich nach ihrer ersten Zuweisung niemals ändern darf**.
- Stell es dir wie in Stein gemeißelte Information vor.
- Zum Beispiel dein Geburtsdatum oder der Wert von Pi (3,14159...) – können als Konstanten gespeichert werden, weil sie sich nicht ändern.

#### Wann du `const` verwenden solltest:

- Du verwendest `const`, wenn du sicher bist, dass der Wert einer Variable während des gesamten Programms gleich bleibt.

**Beispiel:**

```javascript
// Setze das Geburtsjahr. Es ist konstant.
const birthYear = 1995;

// Dein Name ändert sich normalerweise auch nicht.
const myName = "Alex";

// Der Mehrwertsteuersatz ist gesetzlich festgelegt.
const vatRate = 0.19;

// Versuch, den Wert zu ändern (wird einen Fehler verursachen!):
// birthYear = 2001; // TypeError: Assignment to constant variable.
```

- Der Computer wird sich beschweren und einen Fehler anzeigen, wenn du versuchst, einen in Stein gemeißelten Wert zu ändern.
- Das ist gut so – es schützt dich vor versehentlichen Fehlern.

### `let` (Variable)

- Das Wort `let` erlaubt dir, eine Variable zu deklarieren, deren Wert du **später ändern kannst**.

- Stell es dir wie eine Anzeigetafel in einem Spiel vor. Der Punktestand ändert sich ständig.

#### Wann du `let` verwenden solltest:

- Du verwendest `let`, wenn du bereits weißt, dass sich der Wert ändern wird, während dein Programm läuft.

**Beispiel:**

```javascript
// Der Punktestand zu Beginn des Spiels.
let score = 0;
console.log("Aktueller Punktestand: " + score); // Ausgabe: 0

// Der Spieler verdient 50 Punkte.
score = score + 50;
console.log("Aktueller Punktestand: " + score); // Ausgabe: 50

// Der Spieler findet einen Bonus.
score = score * 2;
console.log("Aktueller Punktestand: " + score); // Ausgabe: 100
```

- Hier siehst du, dass der Wert der Variable `score` mehrmals ohne Probleme geändert werden konnte.

#### `let` vs. `const`: Wann welches verwenden?

- **Beginne immer mit `const`. Nur wenn du merkst, dass du die Variable später neu zuweisen musst, ändere sie auf `let`.**

- So ist dein Code sicherer und leichter zu verstehen, weil du und andere auf einen Blick sehen können, welche Werte sich ändern können und welche nicht.

| Eigenschaft                | `const` (Konstante)                         | `let` (Variable)                            |
| :------------------------- | :------------------------------------------ | :------------------------------------------ |
| **Wert kann sich ändern?** | ❌ Nein, nicht nach der ersten Zuweisung.   | ✅ Ja, Wert kann jederzeit geändert werden. |
| **Best Practice**          | Standardwahl. Verwende immer, wenn möglich. | Verwende nur, wenn Änderung notwendig ist.  |
| **Analogie**               | In Stein gemeißeltes Geburtsdatum.          | Veränderbare Anzeigetafel in einem Spiel.   |

#### Grundregeln für die Benennung von Variablen in JavaScript

- Variablennamen sollten in `camelCase` geschrieben werden (z.B. `userName`, `totalPrice`).
- Sie können nur Buchstaben, Zahlen, Unterstriche oder Dollarzeichen enthalten. Keine Leerzeichen oder Sonderzeichen.
- Variablennamen unterscheiden zwischen Groß- und Kleinschreibung (`myVar` und `myvar` sind unterschiedlich).
- Sie sollten beschreibend und aussagekräftig sein.
- Vermeide die Verwendung reservierter Wörter (wie `let`, `const`, `if`, `else` usw.) als Variablennamen.

<br><br><br>

## Die grundlegenden Datentypen

- Schauen wir uns nun an, welche Arten von "Zutaten" wir in unsere `let`- und `const`-Behälter geben können.
- JavaScript hat mehrere eingebaute Datentypen.
- Jeder Datentyp hat "eingebaute" Methoden (Werkzeuge), um mit ihnen zu arbeiten.
- Die wichtigsten sind:
  - `String` (Text)
  - `Number` (Zahl)
  - `Boolean` (wahr/falsch)
  - `null` (nichts)
  - `undefined` (undefiniert)
  - `Object` (komplexe Datenstrukturen, später behandelt)
- Um herauszufinden, welchen Datentyp eine Variable hat, kannst du den `typeof`-Operator gefolgt vom Variablennamen verwenden. `typeof variableName`.

### String (Text)

- Ein String ist einfach Text – eine Kette von Zeichen.
- Das können Buchstaben, Zahlen, Satzzeichen oder Symbole sein.
- Um dem Computer mitzuteilen, dass es ein String ist, setzt du den Text in Anführungszeichen.

* Einfache Anführungszeichen: `'Hallo Welt'`
* Doppelte Anführungszeichen: `"Hallo Welt"`
* Backticks: `` `Hallo Welt` `` (diese haben besondere Fähigkeiten)

**Beispiel:**

```javascript
const firstName = "Maria";
const message = "Ich lerne gerade JavaScript!";
const city = `Berlin`;

console.log(message); // Ausgabe: Ich lerne gerade JavaScript!
console.log(typeof firstName); // Ausgabe: "string"
```

#### Nützliche String-Methoden

- Methoden sind Werkzeuge, um mit den Datentypen zu arbeiten.
- Mit String-Methoden kannst du:
  - ihn länger machen,
  - Teile abschneiden,
  - ihn in Großbuchstaben umwandeln usw.
- Wichtig: Der ursprüngliche String wird nicht verändert. Du bekommst immer ein neues, modifiziertes Stück zurück.

- Hier sind einige der wichtigsten Werkzeuge (Methoden):

| Methode/Eigenschaft         | 📜 Beschreibung                                                                                                                       | 🛠️ Beispiel                                                                                                                                                   |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`.length`**               | Das ist eine **Eigenschaft**, keine Methode. Sie gibt die Anzahl der Zeichen im String zurück (Leerzeichen inklusive!).               | `const text = "Hallo";`<br>`console.log(text.length); // 5`                                                                                                   |
| **`.toUpperCase()`**        | Wandelt den gesamten String in GROSSBUCHSTABEN um.                                                                                    | `const text = "Ich bin leise";`<br>`const louderText = text.toUpperCase();`<br>`// louderText ist "ICH BIN LEISE"`                                            |
| **`.toLowerCase()`**        | Wandelt den gesamten String in kleinbuchstaben um.                                                                                    | `const text = "ICH SCHREIE";`<br>`const quieterText = text.toLowerCase();`<br>`// quieterText ist "ich schreie"`                                              |
| **`.trim()`**               | Entfernt Leerzeichen am Anfang und Ende des Strings. Super hilfreich für Formulareingaben!                                            | `const input = "   max.mustermann@mail.de   ";`<br>`const cleanInput = input.trim();`<br>`// cleanInput ist "max.mustermann@mail.de"`                         |
| **`.includes(searchText)`** | Prüft, ob ein String einen anderen String enthält. Gibt `true` oder `false` zurück.                                                   | `const sentence = "Der schnelle braune Fuchs.";`<br>`console.log(sentence.includes("Fuchs")); // true`<br>`console.log(sentence.includes("Katze")); // false` |
| **`.slice(start, end)`**    | Schneidet einen Teil des Strings aus und gibt ihn zurück. Erster Parameter ist der Start-Index, zweiter (optional) ist der End-Index. | `const text = "JavaScript";`<br>`const part1 = text.slice(0, 4); // "Java"`<br>`const part2 = text.slice(4); // "Script"`                                     |
| **`.replace(what, with)`**  | Sucht nach Text im String und ersetzt das **erste** Vorkommen.                                                                        | `const greeting = "Guten Morgen, Welt!";`<br>`const newGreeting = greeting.replace("Morgen", "Abend");`<br>`// newGreeting ist "Guten Abend, Welt!"`          |

#### Number (Zahl)

- Der Number-Datentyp repräsentiert Zahlen (sowohl ganze Zahlen als auch Dezimalzahlen).
- Das können ganze Zahlen sein (z.B. 10, -5, 0) oder Dezimalzahlen (z.B. 3,14, -0,5).
- Anders als Strings benötigen Zahlen _keine_ Anführungszeichen.
- Du kannst mathematische Operationen mit Zahlen durchführen: Addition, Subtraktion, Multiplikation, Division und mehr.

**Beispiel:**

```javascript
const age = 28;
const price = 19.99;
const temperature = -5.5;

const numApples = 12;
const numBananas = 8;
const totalFruit = numApples + numBananas; // Berechnung!
console.log(totalFruit); // Ausgabe: 20
```

#### Boolean (Wahrheitswert)

- Ein Boolean ist der einfachste Datentyp.
- Er kann nur einen von zwei Zuständen haben: `true` oder `false`.
- Es werden keine Anführungszeichen verwendet.
- Booleans sind super wichtig, um Entscheidungen im Code zu treffen.
- Zum Beispiel: "Ist der Benutzer angemeldet? `true`." oder "Ist das Licht an? `false`."

**Beispiel:**

```javascript
const isAdult = true;
const hasPaid = false;
const isAdmin = true;
```

#### `null` (Nichts)

- `null` ist ein spezieller Wert.
- Er bedeutet: "Hier ist absichtlich nichts".
- Als Programmierer setzt du eine Variable auf `null`, um ausdrücklich auszudrücken, dass sie keinen Wert hat.

**Beispiel:**

- Stell dir vor, du hast eine App, in der ein Benutzer ein Profilbild auswählen kann.
- Zu Beginn hat der Benutzer noch keins ausgewählt.

```javascript
let selectedProfilePicture = null;

// ...später im Code wählt der Benutzer ein Bild aus...
selectedProfilePicture = "sonnenuntergang_bild.jpg";
```

#### `undefined` (Undefiniert)

- `undefined` bedeutet, dass eine Variable deklariert (erstellt) wurde, aber noch kein Wert zugewiesen wurde.
- Das passiert meistens automatisch, nicht durch dich.
- Der Computer verwendet `undefined`, um anzuzeigen: "Ich weiß, dass diese Variable existiert, aber ich weiß nicht, welchen Wert sie haben sollte."

**Beispiel:**

```javascript
let username;

console.log(username); // Ausgabe: undefined
```

- Hier wurde der "Behälter" `username` erstellt, aber noch nichts hineingelegt. Der Computer sagt: "Ich kenne diesen Namen, aber ich weiß nicht, was da sein sollte. Es ist undefiniert."

**Analogie:** `undefined` ist wie ein brandneuer, leerer Bilderrahmen, den du gerade aus der Verpackung genommen hast. Es wurde noch nie etwas hineingelegt.

| Typ         | Bedeutung                                    | Wer setzt den Wert?        | Analogie                     |
| :---------- | :------------------------------------------- | :------------------------- | :--------------------------- |
| `null`      | "Absichtlich leer"                           | Der Programmierer          | Rahmen mit "Kein Bild"-Notiz |
| `undefined` | "Versehentlich leer"/"Noch nicht zugewiesen" | Der Computer (automatisch) | Brandneuer, leerer Rahmen    |

<br><br><br>

## Operatoren und Arbeiten mit der Konsole

- In JavaScript (und anderen Programmiersprachen) sind **Operatoren** spezielle Symbole oder Schlüsselwörter, die Operationen auf Werten und Variablen durchführen.
- Wir haben
  - Arithmetische Operatoren (für Mathematik),
  - Vergleichsoperatoren (zum Vergleichen von Werten) und
  - Logische Operatoren (zum Kombinieren von wahr/falsch-Werten).

<br><br><br>

### Grundlagen arithmetischer und logischer Operatoren

- Denk an Operatoren wie die Verben in einer Sprache.
- Sie sagen dem Computer, was er mit Werten machen soll (wie Zahlen oder Text).
- Genau wie du sagen würdest "addiere 5 und 3", sagst du dem Computer `5 + 3`.
- Wir unterteilen sie in verschiedene Gruppen, je nachdem, welche Aufgabe sie erfüllen.

<br><br><br>

### Arithmetische Operatoren

- Das sind die Operatoren, die du aus dem Matheunterricht kennst.
- Sie führen grundlegende mathematische Berechnungen durch.
- Sie nehmen zwei Zahlen und geben eine neue Zahl als Ergebnis zurück.

- Hier ist eine Übersicht der wichtigsten arithmetischen Operatoren in JavaScript:

| Operator | Name           | Beispiel | Ergebnis | Erklärung                                                    |
| :------- | :------------- | :------- | :------- | :----------------------------------------------------------- |
| `+`      | Addition       | `10 + 5` | `15`     | Addiert zwei Zahlen.                                         |
| `-`      | Subtraktion    | `10 - 5` | `5`      | Subtrahiert die zweite Zahl von der ersten.                  |
| `*`      | Multiplikation | `10 * 5` | `50`     | Multipliziert zwei Zahlen.                                   |
| `/`      | Division       | `10 / 5` | `2`      | Dividiert die erste Zahl durch die zweite.                   |
| `%`      | Modulo         | `10 % 3` | `1`      | Gibt den Rest einer Division zurück. (10 / 3 = 3 mit Rest 1) |
| `**`     | Potenzierung   | `2 ** 3` | `8`      | Erhebt die erste Zahl zur Potenz der zweiten (2 hoch 3).     |

- Ein wichtiger Punkt ist die **Operatorpriorität** (Reihenfolge der Operationen), die du als "Punkt vor Strich" kennst.
- Multiplikation (`*`) und Division (`/`) werden immer vor Addition (`+`) und Subtraktion (`-`) ausgeführt.
- Wenn du die Reihenfolge ändern möchtest, musst du Klammern `()` verwenden, genau wie in Mathe.

- Beispiel: `5 + 3 * 2` ergibt `11` (weil `3 * 2` zuerst berechnet wird).
- Aber wenn du `(5 + 3) * 2` schreibst, ist das Ergebnis `16` (weil die Klammer zuerst berechnet wird).

<br><br><br>

### Vergleichsoperatoren

- Vergleichsoperatoren sind wie Fragen, die du dem Computer stellst.
- Die Antwort ist immer entweder "ja" (`true`) oder "nein" (`false`).
- Du verwendest sie, um zwei Werte zu vergleichen.
- Das Ergebnis ist immer ein **Boolean**-Wert (`true` oder `false`).

| Operator | Bedeutung           | Beispiel    | Ergebnis | Erklärung                                                                      |
| :------- | :------------------ | :---------- | :------- | :----------------------------------------------------------------------------- |
| `==`     | Gleich              | `5 == "5"`  | `true`   | Prüft, ob die Werte gleich sind. **Warnung:** versucht, Typen zu konvertieren! |
| `===`    | Strikt gleich       | `5 === "5"` | `false`  | Prüft, ob Werte **und** Typen gleich sind. **Normalerweise die bessere Wahl!** |
| `!=`     | Nicht gleich        | `5 != 8`    | `true`   | Prüft, ob die Werte nicht gleich sind.                                         |
| `!==`    | Strikt nicht gleich | `5 !== "5"` | `true`   | Prüft, ob Werte **oder** Typen unterschiedlich sind.                           |
| `>`      | Größer als          | `10 > 5`    | `true`   | Prüft, ob die linke Seite größer als die rechte ist.                           |
| `<`      | Kleiner als         | `10 < 5`    | `false`  | Prüft, ob die linke Seite kleiner als die rechte ist.                          |
| `>=`     | Größer oder gleich  | `5 >= 5`    | `true`   | Prüft, ob die linke Seite größer oder gleich der rechten ist.                  |
| `<=`     | Kleiner oder gleich | `4 <= 5`    | `true`   | Prüft, ob die linke Seite kleiner oder gleich der rechten ist.                 |

- Der Unterschied zwischen `==` und `===` ist sehr wichtig.
- Stell dir vor, du hast eine "5" als Zahl und eine "5" als Text. Für `==` ist das dasselbe.
- Für `===` ist es nicht dasselbe, weil die eine eine Zahl ist, die andere Text (ein "String").
- In 99% der Fälle solltest du `===` und `!==` verwenden, um unerwartete Fehler zu vermeiden.

<br><br><br>

### Logische Operatoren

- Logische Operatoren werden verwendet, um `true`- oder `false`-Werte miteinander zu verknüpfen.
- Sie sind die Bausteine für Entscheidungen in deinem Code.

| Operator | Name  | Beschreibung                                                 | Beispiel                                                                  |
| :------- | :---- | :----------------------------------------------------------- | :------------------------------------------------------------------------ | -------------------------------------------------------------- | --------- | --- | ---------------------------------------------- |
| `&&`     | UND   | Gibt `true` zurück, wenn **beide** Seiten `true` sind.       | `(5 > 3) && (10 < 20)` ist `true`, weil beide Vergleiche wahr sind.       |
| `        |       | `                                                            | ODER                                                                      | Gibt `true` zurück, wenn **mindestens eine** Seite `true` ist. | `(5 > 10) |     | (10 < 20)`ist`true`, weil die zweite wahr ist. |
| `!`      | NICHT | Kehrt einen Wert um: macht aus `true` `false` und umgekehrt. | `!(5 > 10)` ist `true`, weil `5 > 10` `false` ist und das `!` es umkehrt. |

Bei `&&` (UND) denk an eine Bedingung wie: "Ich gehe ins Kino, wenn ich ein Ticket habe **und** wenn ich Zeit habe." Wenn eines fehlt, funktioniert es nicht.

Bei `||` (ODER) denk an: "Zum Frühstück trinke ich Kaffee **oder** Tee." Es ist in Ordnung, wenn nur eines wahr ist.

<br><br><br>

## Arbeiten mit der Browser-Konsole

- Die Browser-Konsole ist das wichtigste Werkzeug für jeden Webentwickler.
- Sie ist wie ein Cockpit oder Kontrollzentrum für deine Website.
- Du kannst sie in jedem modernen Browser öffnen, normalerweise durch Drücken von `F12` oder durch Rechtsklick auf die Seite und Auswahl von "Untersuchen".
- Im neuen Fenster findest du den Tab "Konsole".

Hier kannst du:

- Nachrichten und Werte aus deinem Code ausgeben.
- Fehlermeldungen sehen, die dein Code erzeugt.
- JavaScript-Code direkt ausführen und testen.

<br><br><br>

### Code ausgeben: `console.log()` und Freunde

- Um zu verstehen, was in deinem Code passiert, musst du in der Lage sein, hineinzuschauen.
- Angenommen, du möchtest wissen, welchen Wert eine Variable zu einem bestimmten Zeitpunkt hat.
- Dafür gibt es den Befehl `console.log()`.
- Er ist wie ein Fenster in deinen Code.

- Der Grundbefehl ist `console.log()`.
- Alles, was du in die Klammern setzt, wird in der Konsole angezeigt.

**Beispiel:**

```javascript
let name = "Anna";
let age = 28;

console.log("Hallo, hier ist mein Code!");
console.log("Der Name ist:", name);
console.log("Das Alter ist:", age);
```

- Wenn du diesen Code ausführst, siehst du drei Zeilen in der Konsole:

1.  `Hallo, hier ist mein Code!`
2.  `Der Name ist: Anna`
3.  `Das Alter ist: 28`

- Es gibt auch andere nützliche `console`-Befehle, die dir helfen, deine Ausgaben zu organisieren:

| Befehl            | Beschreibung                                                                                                              | Beispielverwendung                                                                       |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------- |
| `console.log()`   | Standard-Ausgabe. Für allgemeine Informationen.                                                                           | `console.log("Variable x hat den Wert:", x);`                                            |
| `console.warn()`  | Gibt eine Warnung aus. Oft gelb hervorgehoben. Nützlich für Dinge, die nicht kritisch sind, aber beachtet werden sollten. | `console.warn("Warnung: Dieser Wert sollte nicht negativ sein.");`                       |
| `console.error()` | Gibt eine Fehlermeldung aus. Oft rot und sieht aus wie ein echter Fehler. Ideal, um kritische Probleme zu zeigen.         | `console.error("Verbindung zur Datenbank fehlgeschlagen!");`                             |
| `console.table()` | Gibt strukturierte Daten (Arrays oder Objekte) als übersichtliche Tabelle aus. Super nützlich!                            | `const users = [{name: "Max", age: 30}, {name: "Lisa", age: 25}]; console.table(users);` |

<br><br><br>

### Einfaches Debugging

- "Debugging" bedeutet, Fehler ("Bugs") in deinem Code zu finden und zu beheben. Es ist wie Detektivarbeit. Die Konsole ist deine Lupe.

#### Fehlermeldungen lesen und verstehen

- Wenn dein JavaScript-Code einen Fehler hat, stoppt der Browser die Ausführung und gibt eine Fehlermeldung in der Konsole aus.
- Diese Nachrichten können anfangs einschüchternd sein, aber sie enthalten extrem wertvolle Hinweise.

- Eine typische Fehlermeldung könnte so aussehen:
  `Uncaught TypeError: document.getElementByID is not a function at script.js:12`

Lass uns das aufschlüsseln:

1.  **`Uncaught TypeError`**: Das ist die Art des Fehlers. `TypeError` bedeutet, du hast versucht, etwas mit dem falschen Datentyp zu tun. Zum Beispiel eine Zahl wie eine Funktion aufzurufen.
2.  **`document.getElementByID is not a function`**: Das ist die eigentliche Nachricht. Sie sagt dir, was das Problem ist. Der Computer sagt: "Ich kenne `getElementByID` nicht als Funktion." Ein erfahrener Entwickler wird sofort sehen, dass da ein Tippfehler ist. Der korrekte Befehl ist `getElementById` (mit einem kleinen 'd').
3.  **`at script.js:12`**: Das ist der wichtigste Hinweis! Er sagt dir genau, wo der Fehler passiert ist: in der Datei `script.js` in Zeile `12`. Du kannst darauf klicken, und der Browser zeigt dir die problematische Codezeile.

#### Die "console.log"-Strategie

- Der einfachste Weg, als Anfänger Fehler zu finden, ist mit `console.log()` an verschiedenen Stellen.
- So kannst du die Reise deiner Daten verfolgen und sehen, wo etwas schiefgeht.

- Angenommen, eine Funktion gibt ein falsches Ergebnis zurück:

```javascript
function calculatePrice(basePrice, quantity) {
  // Hier scheint etwas schiefzugehen.
  const taxRate = 1.19;
  let finalPrice = basePrice * quantity * taxRate;
  return finalPrice;
}

let resultPrice = calculatePrice("10", 5); // Vorsicht: basePrice ist Text!
console.log(resultPrice); // Gibt NaN (Not a Number) aus, was falsch ist.
```

- Warum ist das Ergebnis `NaN`? Wir können es herausfinden, indem wir `console.log()` innerhalb der Funktion verwenden:

```javascript
function calculatePrice(basePrice, quantity) {
  // Schritt 1: Welche Werte werden übergeben?
  console.log(
    "Funktion gestartet. basePrice:",
    basePrice,
    "quantity:",
    quantity
  );
  console.log("Typ von basePrice:", typeof basePrice); // typeof sagt uns den Datentyp!

  const taxRate = 1.19;
  let finalPrice = basePrice * quantity * taxRate;

  // Schritt 2: Was ist das Ergebnis vor return?
  console.log("Berechneter Endpreis:", finalPrice);

  return finalPrice;
}
```

- Wenn du diesen Code ausführst, siehst du in der Konsole:

1.  `Funktion gestartet. basePrice: 10 quantity: 5`
2.  `Typ von basePrice: string` --> **Aha! Das ist der Fehler!**
3.  `Berechneter Endpreis: NaN`

- Die Konsole hat uns gezeigt, dass `basePrice` Text ("string") ist, keine Zahl.
- Text mit einer Zahl zu multiplizieren ergibt `NaN` (Not a Number).
- Jetzt wissen wir genau, wo wir das Problem beheben müssen: Wir müssen sicherstellen, dass `basePrice` eine Zahl ist, bevor wir die Berechnung durchführen.

- Eine fortgeschrittene Methode zum Debuggen ist die Verwendung des eingebauten Debugger-Tools des Browsers oder der `debugger;`-Anweisung in deinem Code, aber das ist ein Thema für eine andere Lektion.
