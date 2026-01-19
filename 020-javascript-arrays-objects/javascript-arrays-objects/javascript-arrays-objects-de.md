# Arrays und Objekte in JavaScript

Arrays

- Arrays erstellen und auf Array-Elemente zugreifen
- Über ein Array iterieren mit forEach und map

Objekte

- Objekte erstellen und auf Eigenschaften zugreifen
- Eigenschaften hinzufügen und entfernen

Arbeiten mit verschachtelten Datenstrukturen

- Arrays in Objekten und Objekte in Arrays
- Auf komplexe Datenstrukturen zugreifen und sie manipulieren
  <br><br><br>

# Arrays

<br><br><br>

## Was ist ein Array?

- Ein Array ist ein spezieller Typ von `Datenstruktur`, der es dir ermöglicht, mehrere Werte in einer einzigen Variablen zu speichern.
- Jeder Wert in einem Array wird als `Element` oder `Item` bezeichnet.
- Arrays sind geordnete Sammlungen, was bedeutet, dass jedes Element (Item) eine bestimmte Position hat, die als `Index` bezeichnet wird.
- In JavaScript werden Arrays mit eckigen Klammern `[]` erstellt, und die Elemente werden durch Kommas getrennt.
- Obwohl Arrays Elemente verschiedener Datentypen enthalten können, werden sie oft verwendet, um Sammlungen desselben Datentyps zu speichern, um konsistent zu bleiben.

<br><br><br>

## Arrays erstellen und auf Array-Elemente zugreifen

### Ein Array erstellen

- Um ein Array zu erstellen, verwendest du eckige Klammern `[]` und listest die Elemente darin auf, getrennt durch Kommas.
- Arrays können jeden beliebigen Namen haben, der den üblichen Regeln für Variablennamen folgt und `let` oder `const` verwendet.

- **Beispiel 1: Ein Array von Früchten (Strings)**
  - Hier erstellen wir ein Array namens `meineObstArray`, das drei Frucht-Elemente oder Items (Strings) enthält.

```javascript
let meineObstArray = ["Apfel", "Banane", "Kirsche"];
```

**Beispiel 2: Ein Array von Zahlen**
Hier erstellen wir ein Array namens `lottoZahlenArray`, das sechs Zahlen-Elemente enthält.

```javascript
let lottoZahlenArray = [5, 12, 23, 31, 40, 49];
```

**Beispiel 3: Ein leeres Array**

- Manchmal möchtest du ein leeres Array erstellen, das du später füllen kannst.

```javascript
let einkaufsliste = [];
```

<br>

### Auf Array-Elemente zugreifen

- Um auf ein bestimmtes Element oder Item in deinem Array zuzugreifen, verwendest du seinen `Index`.
- Der `Index` ist wie die Positionsnummer des Elements oder Items im Array.
- **Sehr wichtig:** Der Index beginnt immer bei **0**!
  - Das erste Element hat den Index `0`.
  - Das zweite Element hat den Index `1`.
  - Das dritte Element hat den Index `2`.
  - ... und so weiter.

- Die Syntax lautet: `arrayName[index]`

Schauen wir uns unser `meineObstArray` Array an: `["Apfel", "Banane", "Kirsche"]`

- Um auf "Apfel" zuzugreifen, schreibst du:
  ```javascript
  console.log(meineObstArray[0]); // Gibt "Apfel" aus
  ```
- Um auf "Banane" zuzugreifen, schreibst du:
  ```javascript
  console.log(meineObstArray[1]); // Gibt "Banane" aus
  ```
- Um auf "Kirsche" zuzugreifen, schreibst du:

  ```javascript
  console.log(meineObstArray[2]); // Gibt "Kirsche" aus
  ```

- **Was passiert, wenn du auf einen Index zugreifst, der nicht existiert?**
- Du bekommst den Wert `undefined`, was bedeutet "hier ist nichts."

```javascript
console.log(meineObstArray[5]); // Gibt undefined aus, da es kein 6. Element gibt.
```

### Elemente ändern

- Du kannst auch den Wert eines Elements ändern, indem du ihm über seinen Index einen neuen Wert zuweist.

```javascript
let meineObstArray = ["Apfel", "Banane", "Kirsche"];
console.log("Vor der Änderung:", meineObstArray[1]); // Gibt "Banane" aus

meineObstArray[1] = "Mango"; // Das Element am Index 1 wird überschrieben

console.log("Nach der Änderung:", meineObstArray[1]); // Gibt "Mango" aus
console.log(meineObstArray); // Gibt ["Apfel", "Mango", "Kirsche"] aus
```

<br><br><br>

## Über ein Array iterieren

- Iteration bedeutet einfach, dass du jedes Element eines Arrays nacheinander durchgehst, um etwas damit zu tun – genau wie wenn du eine Einkaufsliste Punkt für Punkt abarbeitest.
- `forEach` und `map` sind zwei moderne und sehr nützliche Methoden dafür.
- Sie funktionieren gut mit Arrow Functions, die wir zuvor gelernt haben.

### Die `forEach()` Methode

- Stell dir `forEach()` als einen Befehl vor: "Gehe zu jedem Element und **tue** etwas damit."
- Diese Methode ruft eine von dir definierte Funktion für jedes Element im Array auf.
- Sie ist perfekt, wenn du eine Aktion für jedes Element ausführen möchtest, aber kein neues Array als Ergebnis benötigst.

- **Der wichtigste Punkt bei `forEach()` ist: Ich tue etwas, aber ich gebe nichts zurück.** Der Rückgabewert von `forEach()` ist immer `undefined`.

**Syntax:**

```javascript
deinArray.forEach((aktuellesElement, index) => {
  // Dein Code, der für jedes Element ausgeführt wird
});
```

- `aktuellesElement`: Das Element aus dem Array, das gerade verarbeitet wird.
- `index` (optional): Der Index des aktuellen Elements.

**Beispiel 1: Jeden Namen ausgeben**
Wir haben ein Array von Namen und möchten jeden Namen in der Konsole begrüßen.

```javascript
let gaeste = ["Anna", "Bernd", "Carla"];

gaeste.forEach((name) => {
  console.log("Hallo, " + name + "!");
});

// Ausgabe:
// Hallo, Anna!
// Hallo, Bernd!
// Hallo, Carla!
```

**Beispiel 2: Mit Indizes arbeiten**

- Wir möchten eine nummerierte Liste unserer Früchte ausgeben.

```javascript
let meineObstArray = ["Apfel", "Banane", "Kirsche"];

meineObstArray.forEach((frucht, index) => {
  console.log(index + 1 + ". " + frucht);
});

// Ausgabe:
// 1. Apfel
// 2. Banane
// 3. Kirsche
```

<br>

#### Die `map()` Methode

- Stell dir `map()` als eine Transformationsmaschine vor.
- Du gibst ein Array hinein, und es kommt ein **völlig neues Array** heraus.
- Jedes Element des neuen Arrays ist das Ergebnis einer Transformation des entsprechenden Elements aus dem alten Array.
- Das ursprüngliche Array bleibt unverändert.

- **Der wichtigste Punkt bei `map()` ist: Ich nehme jedes Element, transformiere es und gebe ein neues Array mit den transformierten Elementen zurück.**

**Syntax:**

```javascript
let neuesArray = deinAltesArray.map((aktuellesElement, index) => {
  // Dein Code, der das Element transformiert
  return transformiertesElement; // SEHR WICHTIG: das 'return'!
});
```

- Der entscheidende Unterschied zu `forEach` ist das `return`. Was du hier zurückgibst, wird zum Element im neuen Array.

**Beispiel 1: Zahlen verdoppeln**

- Wir haben ein Array von Zahlen und möchten ein neues Array erstellen, in dem jede Zahl verdoppelt ist.

```javascript
let zahlen = [1, 2, 3, 4, 5];

let verdoppelteZahlen = zahlen.map((zahl) => {
  return zahl * 2;
});

console.log(verdoppelteZahlen); // Gibt [2, 4, 6, 8, 10] aus
console.log(zahlen); // Gibt [1, 2, 3, 4, 5] aus (das Original ist unverändert!)
```

**Beispiel 2: Namen in Großbuchstaben umwandeln**

- Wir möchten aus unserem Gäste-Array ein neues Array erstellen, in dem alle Namen in Großbuchstaben sind.

```javascript
let gaeste = ["Anna", "Bernd", "Carla"];

let grosseNamen = gaeste.map((name) => {
  return name.toUpperCase();
});

console.log(grosseNamen); // Gibt ["ANNA", "BERND", "CARLA"] aus
```

- **Was passiert, wenn du `return` vergisst?**
  Wenn du `return` in der `map`-Funktion vergisst, wird standardmäßig `undefined` zurückgegeben. Dein neues Array wird dann voller `undefined`-Werte sein.

```javascript
let zahlen = [1, 2, 3];

let falschesErgebnis = zahlen.map((zahl) => {
  // Hoppla, 'return' vergessen!
  zahl * 2;
});

console.log(falschesErgebnis); // Gibt [undefined, undefined, undefined] aus
```

<br>

#### `forEach()` vs. `map()`: Der Hauptunterschied

Die Wahl zwischen `forEach` und `map` hängt davon ab, was du erreichen möchtest. Die folgende Tabelle fasst die wichtigsten Unterschiede zusammen:

| Merkmal             | `forEach()`                              | `map()`                                                                   |
| :------------------ | :--------------------------------------- | :------------------------------------------------------------------------ |
| **Zweck**           | Eine Aktion für jedes Element ausführen  | Jedes Element transformieren und ein neues Array erstellen                |
| **Rückgabewert**    | Immer `undefined`                        | Ein neues Array mit transformierten Elementen                             |
| **Veränderbarkeit** | Verändert das ursprüngliche Array nicht  | Verändert das ursprüngliche Array nicht                                   |
| **Anwendungsfall**  | Wenn du etwas tun möchtest (z.B. loggen) | Wenn du ein neues Array basierend auf Transformationen erstellen möchtest |

<br><br><br>

# Objekte

<br><br><br>

## Was ist ein Objekt?

- Ein Objekt ist eine komplexe Datenstruktur, die es dir ermöglicht, mehrere zusammengehörige Werte als `Schlüssel-Wert-Paare` zu speichern.
- Jeder Schlüssel (auch `Property` genannt) ist ein String, der als Label für seinen entsprechenden `Wert` fungiert.
- Werte können von jedem Datentyp sein, einschließlich Zahlen, Strings, Arrays, Funktionen oder sogar anderen Objekten.
- Objekte werden mit geschweiften Klammern `{}` erstellt, wobei jedes Schlüssel-Wert-Paar durch Kommas getrennt ist.
- Objekte sind ideal, um reale Entitäten mit mehreren Attributen darzustellen, wie eine Person, ein Auto oder ein Produkt.

## Objekte erstellen und auf Eigenschaften zugreifen

- Um ein Objekt zu erstellen, verwendest du einfach geschweifte Klammern `{}` und listest die Schlüssel-Wert-Paare darin auf.

**Syntax:**

- Der Schlüssel ist immer ein String (auch wenn du die Anführungszeichen oft weglassen kannst), gefolgt von einem Doppelpunkt `:`, dann der Wert.
- Die einzelnen Paare werden durch ein Komma `,` getrennt.

```javascript
const person = {
  vorname: "Max",
  nachname: "Mustermann",
  alter: 30,
  istStudent: false,
  adresse: {
    strasse: "Musterstraße 1",
    stadt: "Musterstadt",
  },
};
```

In diesem Beispiel haben wir ein Objekt `person`.

- Der Schlüssel `vorname` hat den Wert `"Max"` (ein String).
- Der Schlüssel `alter` hat den Wert `30` (eine Zahl).
- Der Schlüssel `istStudent` hat den Wert `false` (ein Boolean).
- Der Schlüssel `adresse` hat ein weiteres Objekt als Wert! Objekte können also auch ineinander verschachtelt sein.

#### Zugriff mit Punkt-Notation

- Sobald du das Objekt erstellt hast, möchtest du natürlich die Werte auslesen.
- Die direkteste Methode ist die Punkt-Notation.
- Du schreibst den Namen des Objekts, einen Punkt `.` und dann den `Schlüsselnamen`, auf den du zugreifen möchtest.

**Beispiel:**

```javascript
// Wir verwenden das "person"-Objekt von oben
console.log(person.vorname); // Gibt aus: "Max"
console.log(person.alter); // Gibt aus: 30

// Zugriff auf ein verschachteltes Objekt
console.log(person.adresse.stadt); // Gibt aus: "Musterstadt"
```

- Diese Methode ist sehr lesbar und intuitiv.
- Sie funktioniert jedoch nur, wenn der Schlüssel ein gültiger JavaScript-Bezeichner ist (d.h. er kann keine Leerzeichen, Bindestriche oder andere Sonderzeichen enthalten und kann nicht mit einer Zahl beginnen).

#### Zugriff mit Klammer-Notation

- Die Klammer-Notation ist flexibler und mächtiger.
- Hier schreibst du den Namen des Objekts, gefolgt von eckigen Klammern `[]`.
- Innerhalb der Klammern steht der Schlüsselname als String (d.h. in einfachen oder doppelten Anführungszeichen).

**Beispiel:**

```javascript
// Wieder verwenden wir das "person"-Objekt
console.log(person["nachname"]); // Gibt aus: "Mustermann"
console.log(person["istStudent"]); // Gibt aus: false

// Zugriff auf verschachtelte Objekte funktioniert hier auch
console.log(person["adresse"]["strasse"]); // Gibt aus: "Musterstraße 1"
```

### Vergleich der Zugriffsmethoden

| Merkmal                | Punkt-Notation (`.`)      | Klammer-Notation (`[]`)                          |
| :--------------------- | :------------------------ | :----------------------------------------------- |
| **Syntax**             | `objekt.eigenschaft`      | `objekt['eigenschaft']`                          |
| **Lesbarkeit**         | Sehr gut, oft bevorzugt   | Etwas umständlicher zu schreiben                 |
| **Schlüssel**          | Nur gültige JS-Bezeichner | Jeder String kann als Schlüssel verwendet werden |
| **Dynamische Nutzung** | Nein, Name muss fest sein | Ja, Schlüsselname kann aus einer Variable kommen |

<br><br><br>

## Eigenschaften hinzufügen und entfernen

- Einmal erstellt, sind Objekte nicht in Stein gemeißelt.
- Du kannst jederzeit neue Eigenschaften hinzufügen oder bestehende entfernen.
- Das macht sie sehr flexibel.

### Eigenschaften hinzufügen

- Eine neue Eigenschaft hinzuzufügen ist überraschend einfach.
- Du handelst so, als ob die Eigenschaft bereits existiert, und weist ihr einfach einen Wert zu.
- Du kannst sowohl die Punkt- als auch die Klammer-Notation verwenden.

**Beispiel:**

```javascript
const auto = {
  marke: "Volkswagen",
  modell: "Golf",
};

console.log(auto); // Gibt aus: { marke: 'Volkswagen', modell: 'Golf' }

// Neue Eigenschaft 'farbe' mit Punkt-Notation hinzufügen
auto.farbe = "blau";

// Neue Eigenschaft 'baujahr' mit Klammer-Notation hinzufügen
auto["baujahr"] = 2021;

console.log(auto);
// Gibt jetzt das erweiterte Objekt aus:
// { marke: 'Volkswagen', modell: 'Golf', farbe: 'blau', baujahr: 2021 }
```

- Wenn eine Eigenschaft bereits existiert, wird ihr Wert einfach durch die Zuweisung überschrieben.

```javascript
auto.farbe = "rot"; // Ändert den Wert von 'blau' zu 'rot'
console.log(auto.farbe); // Gibt aus: "rot"
```

### Eigenschaften entfernen

- Um eine Eigenschaft vollständig aus einem Objekt zu löschen (d.h. das gesamte Schlüssel-Wert-Paar), verwendest du den `delete`-Operator.

**Syntax:**
`delete objekt.eigenschaft;` oder `delete objekt['eigenschaft'];`

**Beispiel:**

```javascript
const fahrrad = {
  marke: "Cube",
  farbe: "schwarz",
  gaenge: 21,
  hatLicht: true,
};

console.log(fahrrad);
// Gibt aus: { marke: 'Cube', farbe: 'schwarz', gaenge: 21, hatLicht: true }

// Lass uns die Eigenschaft 'gaenge' entfernen
delete fahrrad.gaenge;

console.log(fahrrad);
// Gibt jetzt aus: { marke: 'Cube', farbe: 'schwarz', hatLicht: true }
// Die Eigenschaft 'gaenge' ist komplett weg.
```

- Was passiert, wenn du versuchst, auf eine entfernte Eigenschaft zuzugreifen?
- Du bekommst den speziellen Wert `undefined`, was in JavaScript bedeutet, dass etwas keinen Wert hat.

```javascript
console.log(fahrrad.gaenge); // Gibt aus: undefined
```

# Arbeiten mit verschachtelten Datenstrukturen

<br><br><br>

- Stell dir vor, du hast eine Kiste. In dieser Kiste sind weitere Kisten, und in einigen dieser Kisten sind Ordner.
- In den Ordnern gibt es einzelne Blätter Papier.
- Das ist im Wesentlichen das ganze Geheimnis hinter verschachtelten Datenstrukturen.
- Wir stecken einfach Datenstrukturen (wie Kisten oder Ordner) in andere Datenstrukturen.

- In der Programmierung sind unsere "Kisten" und "Ordner" hauptsächlich **Objekte** und **Arrays**.

- **Objekt `{}`**: Wie eine Kommode mit beschrifteten Schubladen. Jede Schublade (ein _Schlüssel_) enthält einen bestimmten Inhalt (einen _Wert_). Du findest Dinge, indem du die richtige Schublade öffnest. `kommode.sockenSchublade`
- **Array `[]`**: Wie ein Stapel nummerierter Kisten. Du greifst auf den Inhalt zu, indem du die Nummer der Kiste kennst (den _Index_). Der Stapel beginnt immer bei 0 zu zählen. `kistenStapel[0]`

- Verschachtelte Datenstrukturen entstehen, wenn der Inhalt einer Schublade (Objekt) ein ganzer Stapel von Kisten (Array) ist, oder wenn in einer Kiste (Array) eine komplette Kommode (Objekt) steht.

<br><br><br>

## Arrays in Objekten und Objekte in Arrays

<br><br><br>

Hier schauen wir uns die beiden häufigsten Kombinationen genauer an. Das ist die absolute Grundlage, um komplexe Daten zu verstehen – wie die, die du von Webseiten oder Datenbanken bekommst.

### Arrays in Objekten

- Stell dir ein Benutzerprofil vor. Ein Benutzer hat verschiedene Eigenschaften, wie einen Namen und ein Alter.
- Das schreit nach einem Objekt, da wir beschriftete "Schubladen" haben: `name` und `alter`.
- Aber was, wenn der Benutzer mehrere Hobbys hat?
- Wir können nicht einfach sagen `hobby = "Lesen, Kochen, Wandern"`. Das ist unpraktisch, wenn wir nur das zweite Hobby wissen wollen.

- Die Lösung: Wir stecken die Hobbys in ihre eigene Liste (ein Array) und platzieren diese Liste in der "Hobby-Schublade" unseres Benutzerobjekts.

**Beispiel:**

Ein Objekt `benutzer`, das einen Namen (String), ein Alter (Zahl) und eine Liste von Hobbys (Array) enthält.

```javascript
let benutzer = {
  name: "Anna",
  alter: 28,
  istAktiv: true,
  hobbys: ["Lesen", "Kochen", "Wandern", "Fotografie"],
  adresse: {
    strasse: "Musterstraße 1",
    stadt: "Berlin",
  },
};
```

Hier siehst du:

- Das gesamte `benutzer`-Ding ist ein Objekt (erkennbar an `{}`).
- Die Eigenschaften `name`, `alter` und `istAktiv` haben einfache Werte (Text, Zahl, wahr/falsch).
- Die Eigenschaft `hobbys` hat ein Array `[...]` als Wert. Das ist ein **Array in einem Objekt**.
- Die Eigenschaft `adresse` hat sogar ein weiteres Objekt als Wert. Das ist ein **Objekt innerhalb eines Objekts**.

### Objekte in Arrays

- Jetzt drehen wir das Szenario um.
- Stell dir vor, du hast eine ganze Schulklasse.
- Die Klasse ist eine Liste von Schülern. Jeder Schüler wiederum ist eine komplexe Einheit mit Name, Note und vielleicht einer ID.

- Die Lösung: Wir erstellen eine Liste (ein Array), und jeder Eintrag in dieser Liste ist ein komplettes Objekt, das einen Schüler beschreibt.

**Beispiel:**

Ein Array `schulklasse`, das eine Liste von Schüler-Objekten enthält.

```javascript
let schulklasse = [
  {
    id: 101,
    name: "Max Mustermann",
    note: 1.7,
    faecher: ["Mathe", "Deutsch"],
  },
  {
    id: 102,
    name: "Erika Mustermann",
    note: 2.1,
    faecher: ["Englisch", "Kunst", "Geschichte"],
  },
  {
    id: 103,
    name: "Peter Pan",
    note: 3.5,
    faecher: ["Sport", "Biologie"],
  },
];
```

Hier siehst du:

- Das gesamte `schulklasse`-Ding ist ein Array (erkennbar an `[]`).
- Jedes Element in diesem Array ist ein komplettes Objekt `{...}`. Das ist ein **Objekt in einem Array**.
- Innerhalb dieser Schüler-Objekte gibt es wieder eine verschachtelte Struktur: Die Eigenschaft `faecher` enthält ein Array mit den Fächern des jeweiligen Schülers.

<br><br><br>

## Auf komplexe Datenstrukturen zugreifen und sie manipulieren

<br><br><br>

Okay, jetzt haben wir diese komplexen Kiste-in-der-Kommode-Strukturen gebaut. Aber wie kommen wir an die Dinge, die wir brauchen? Und wie können wir etwas ändern, hinzufügen oder entfernen? Denk daran als würdest du eine Wegbeschreibung geben: "Gehe zur Kommode, öffne die dritte Schublade, nimm die zweite Socke von links."

### 👉 Wie greife ich auf Daten zu? (Lesen)

Wir kombinieren einfach die Zugriffsmethoden für Objekte (Punkt-Notation oder Klammer-Notation) und Arrays (Klammer-Notation mit Index).

| Was möchte ich wissen?                      | Die "Wegbeschreibung"                                                                                                                                                   | Der Code                    | Das Ergebnis         |
| :------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------- | :------------------- |
| Annas Name                                  | Gehe zum `benutzer`-Objekt, öffne die `name`-Schublade.                                                                                                                 | `benutzer.name`             | `"Anna"`             |
| Annas zweites Hobby                         | Gehe zum `benutzer`-Objekt, öffne die `hobbys`-Schublade (die ein Array ist). Nimm das Element an Position 1 (wir zählen ab 0!).                                        | `benutzer.hobbys[1]`        | `"Kochen"`           |
| Die Stadt, in der Anna lebt                 | Gehe zum `benutzer`-Objekt, öffne `adresse` (ein Objekt). Dann öffne `stadt`.                                                                                           | `benutzer.adresse.stadt`    | `"Berlin"`           |
| Der Name des zweiten Schülers in der Klasse | Gehe zur `schulklasse`-Liste. Nimm das Element an Position 1 (das ist ein Objekt). Öffne von diesem Objekt die `name`-Schublade.                                        | `schulklasse[1].name`       | `"Erika Mustermann"` |
| Das erste Fach des dritten Schülers         | Gehe zur `schulklasse`-Liste. Nimm das Element an Position 2 (ein Objekt). Öffne von diesem Objekt die `faecher`-Schublade (ein Array). Nimm das Element an Position 0. | `schulklasse[2].faecher[0]` | `"Sport"`            |

Du hüpfst also von Punkt zu Punkt, Index zu Index, entlang der Struktur, bis du dein Ziel erreichst. Das nennt man auch "Verkettung" (Chaining).

### ✍️ Wie manipuliere ich Daten? (Ändern, Hinzufügen, Löschen)

Manipulation funktioniert nach demselben Prinzip: Zuerst navigierst du zu der Stelle, die du bearbeiten möchtest, und DANN führst du die gewünschte Aktion aus.

#### Werte ändern

Um einen Wert zu ändern, navigiere dorthin und weise mit dem Gleichheitszeichen (`=`) einen neuen Wert zu.

- **Annas Alter korrigieren:** Sie hatte gerade Geburtstag.
  ```javascript
  benutzer.alter = 29;
  // benutzer.alter ist jetzt 29
  ```
- **Erikas Note verbessern:**
  ```javascript
  schulklasse[1].note = 1.9;
  // Die Note in Erikas Objekt ist jetzt 1.9
  ```

#### Elemente hinzufügen

Es gibt verschiedene Methoden, je nachdem, wo du etwas hinzufügen möchtest.

- **Ein neues Hobby für Anna hinzufügen:** Wir verwenden die `.push()`-Methode für Arrays, um ein Element am Ende hinzuzufügen.
  ```javascript
  benutzer.hobbys.push("Reisen");
  // benutzer.hobbys ist jetzt ["Lesen", "Kochen", "Wandern", "Fotografie", "Reisen"]
  ```
- **Einen neuen Schüler zur Klasse hinzufügen:** Wir fügen ein völlig neues Objekt zum `schulklasse`-Array hinzu.
  ```javascript
  let neuerSchueler = {
    id: 104,
    name: "Sandra Schmidt",
    note: 2.0,
    faecher: ["Physik", "Chemie"],
  };
  schulklasse.push(neuerSchueler);
  // Das 'schulklasse'-Array hat jetzt 4 Schüler-Objekte
  ```
- **Eine neue Eigenschaft zu einem Objekt hinzufügen:** Wir definieren einfach eine neue "Schublade" und geben ihr einen Wert.
  ```javascript
  benutzer.beruf = "Softwareentwickler";
  // Das 'benutzer'-Objekt hat jetzt eine 'beruf'-Eigenschaft
  ```

#### Elemente löschen

Auch hier gibt es verschiedene Wege.

- **Annas drittes Hobby ("Wandern") entfernen:** Wir verwenden die `.splice()`-Methode für Arrays. Sie ist sehr mächtig. `splice(startIndex, anzahlElemente)` bedeutet: Gehe zum Startindex und entferne von dort X Elemente.
  ```javascript
  // "Wandern" ist am Index 2
  benutzer.hobbys.splice(2, 1);
  // benutzer.hobbys ist jetzt ["Lesen", "Kochen", "Fotografie", "Reisen"]
  ```
- **Eine Eigenschaft aus einem Objekt löschen:** Dafür verwenden wir das `delete`-Schlüsselwort.
  ```javascript
  // Wir möchten die 'istAktiv'-Eigenschaft von Anna entfernen
  delete benutzer.istAktiv;
  // Die 'istAktiv'-Eigenschaft existiert nicht mehr im 'benutzer'-Objekt
  ```

Hier ist eine Zusammenfassungstabelle für Manipulation:

| Aktion         | Ziel                   | Methode                    | Beispielcode                                              |
| :------------- | :--------------------- | :------------------------- | :-------------------------------------------------------- |
| **Ändern**     | Wert in einem Objekt   | Zuweisung (`=`)            | `benutzer.name = "Anna Schmidt";`                         |
|                | Wert in einem Array    | Zuweisung (`=`) über Index | `benutzer.hobbys[0] = "Romane lesen";`                    |
| **Hinzufügen** | Eigenschaft zu Objekt  | Neue Zuweisung (`=`)       | `benutzer.sprachen = ["Deutsch", "Englisch"];`            |
|                | Element zu Array       | `.push()` (am Ende)        | `schulklasse.push({id: 105, ...});`                       |
| **Löschen**    | Eigenschaft aus Objekt | `delete`-Operator          | `delete benutzer.alter;`                                  |
|                | Element aus Array      | `.splice(index, anzahl)`   | `schulklasse.splice(0, 1);` (entfernt den ersten Schüler) |
