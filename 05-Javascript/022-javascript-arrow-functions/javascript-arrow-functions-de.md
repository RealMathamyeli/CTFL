# Arrow Functions (Pfeilfunktionen)

<br><br><br>

```javascript
const functionName = (parameter) => {
  // Funktionskörper
};
```

```javascript
const double_arrow = (number) => {
  return number * 2;
};

console.log(double_arrow(5)); // Gibt ebenfalls 10 aus
```

- Arrow Functions kommen mit einigen praktischen Vereinfachungsregeln:

  - **Regel 1: Keine geschweiften Klammern bei einer einzigen Anweisung.**
    Wenn deine Funktion nur _eine_ Zeile ist, die etwas zurückgibt, kannst du die geschweiften Klammern `{}` und das Schlüsselwort `return` weglassen. Das nennt man "implizites Return".

    ```javascript
    // Regel 1 angewendet
    const double_arrow_short = (number) => number * 2;

    console.log(double_arrow_short(5)); // Immer noch 10!
    ```

  - **Regel 2: Keine Klammern bei genau _einem_ Parameter.**
    Wenn deine Funktion nur einen Parameter hat, kannst du auch die Klammern `()` um diesen Parameter weglassen.

    ```javascript
    // Regel 2 angewendet
    const double_arrow_shortest = (number) => number * 2;

    console.log(double_arrow_shortest(5)); // Wieder 10!
    ```

    **Wichtig:** Bei _null_ oder _mehr als einem_ Parameter **musst** du die Klammern verwenden:
    `() => "Hallo Welt!"`
    `(a, b) => a + b`

<br><br><br>

# Scope (Gültigkeitsbereich)

<br><br><br>

## Was ist Scope überhaupt?

- Stell dir vor, dein Programm ist ein großes Haus.
- Der **Scope** beschreibt, in welchen Räumen dieses Hauses eine bestimmte Information (eine Variable) bekannt ist und verwendet werden kann.

- Manche Informationen sind für alle auf dem Marktplatz vor dem Haus sichtbar—das ist **Global Scope**.
- Andere Informationen sind in einem bestimmten Raum gespeichert und nur sichtbar, wenn du in diesem Raum bist—das ist **Local Scope**.

### Warum ist das wichtig?

1.  **Ordnung und Konflikte vermeiden:** Wenn jede Variable überall gültig wäre, würde Chaos herrschen. Du könntest versehentlich eine wichtige Variable überschreiben, weil du in einem anderen Teil deines Codes eine andere Variable mit demselben Namen erstellt hast. Scope schafft Ordnung und klare Grenzen.
2.  **Sicherheit und Datenkapselung:** Du möchtest nicht, dass jeder Teil deines Codes auf alles zugreifen und alles ändern kann. Scope hilft dabei, Daten zu schützen und macht sie nur für die Teile des Codes zugänglich, die sie wirklich benötigen.
3.  **Effizienz:** Programme können den Speicher besser verwalten. Wenn eine Variable nur in einem kleinen Bereich benötigt wird (wie innerhalb einer Funktion), kann Speicher freigegeben werden, sobald du diesen Bereich verlässt.

Kurz gesagt: Scope-Regeln bestimmen, wo deine Variablen "leben" und wo du auf sie zugreifen kannst.

<br><br><br>

## Der Unterschied zwischen Global und Block Scope

### Global Scope

Eine Variable im Global Scope wird außerhalb jeder Funktion oder jedes Codeblocks deklariert. Sie befindet sich im "Erdgeschoss" deines Programms und ist von überall aus zugänglich. Jede Funktion, jeder Codeblock kann sie lesen und ändern.

**Analogie:** Stell dir eine öffentliche Uhr auf dem Stadtplatz vor. Jeder, egal wo er sich in der Stadt befindet, kann diese Uhr ansehen und die Zeit ablesen.

**Vorsicht:** Zu viele globale Variablen zu verwenden, gilt als schlechter Programmierstil. Das nennt man "den globalen Namensraum verschmutzen". Es erhöht das Risiko von Namenskonflikten und macht den Code schwerer nachvollziehbar, weil eine Variable überall geändert werden kann.

**Beispiel:**

```javascript
// Diese Variable ist im Global Scope.
let playerName = "Alex";

function showWelcomeMessage() {
  // Wir können von hier aus auf die globale Variable zugreifen.
  console.log("Willkommen, " + playerName + "!");
}

function changePlayerName() {
  // Wir können die globale Variable auch von hier aus ändern.
  playerName = "Maria";
}

showWelcomeMessage(); // Ausgabe: Willkommen, Alex!

changePlayerName(); // Der globale Name wird geändert.

// Wenn wir die Funktion erneut aufrufen, wird der neue Name verwendet.
showWelcomeMessage(); // Ausgabe: Willkommen, Maria!

// Wir können auch direkt im Global Scope darauf zugreifen.
console.log("Aktueller Spieler: " + playerName); // Ausgabe: Aktueller Spieler: Maria
```

### Block Scope

- Dies ist die modernere und strengere Art von Scope.
- Variablen, die mit `let` oder `const` deklariert werden, sind **nur innerhalb des Codeblocks** gültig, in dem sie erstellt wurden.
- Ein Codeblock ist alles zwischen geschweiften Klammern `{}` (wie `if`-Anweisungen, `for`-Schleifen, `while`-Schleifen oder einfach `{}`).

**Analogie:** Block Scope ist wie eine verschlossene Box _innerhalb_ eines Raums. Du kannst nur in die Box schauen, wenn du direkt davor stehst. Tritt von der Box zurück (verlasse den Block), und sie ist verschlossen und ihr Inhalt ist unsichtbar, auch wenn du noch im Raum (Funktion) bist.

**Beispiel:**

```javascript
function checkLevel() {
  let playerLevel = 5;

  if (playerLevel > 3) {
    // 'enemyType' ist nur innerhalb dieses if-Blocks gültig, weil es mit 'let' deklariert wurde.
    let enemyType = "Drache";
    console.log("Pass auf, ein " + enemyType + " erscheint!");
  }

  // Das Folgende würde einen Fehler werfen, weil 'enemyType' außerhalb des if-Blocks nicht existiert.
  // console.log(enemyType); // ReferenceError: enemyType is not defined
}

checkLevel();
// Ausgabe: Pass auf, ein Drache erscheint!
```

<br><br><br>
