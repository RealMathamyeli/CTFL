# Kontrollstrukturen in JavaScript

Bedingungen

- Einfache if-else-Anweisungen zur Steuerung des Programmflusses
- Vergleichs- und logische Operatoren im Kontext von Bedingungen

Verzweigungen

- switch-case-Strukturen und ihr Anwendungsbereich
- Schachtelung von Bedingungen zur Handhabung komplexerer Entscheidungslogiken


## Kontrollstrukturen – Bedingungen

- Stell dir vor, ein Programm ist wie ein Kochrezept.
- Die meisten Rezepte liest du einfach von oben nach unten.
- Aber manchmal steht da so etwas wie: "Wenn du keine Mandeln hast, nimm stattdessen Walnüsse."
- Das ist eine Bedingung! Du triffst eine Entscheidung, die den weiteren Ablauf des Rezepts verändert.

- In der Programmierung sind Kontrollstrukturen genau das: Weggabelungen und Anweisungen, die dem Programm sagen, welchen Weg es einschlagen soll, basierend auf bestimmten Bedingungen.
- Sie geben uns die Kontrolle über den "Fluss" des Programms.
- Die einfachste und wichtigste dieser Strukturen ist die `if-else`-Anweisung.

<br><br><br>

### Einfache if-else-Anweisungen

Die `if-else`-Anweisung ist das grundlegende Werkzeug, um Entscheidungen in deinem Code zu treffen. Es ist wie eine Ja/Nein-Frage, die du dem Computer stellst. Je nach Antwort (`wahr` oder `falsch`) führt er unterschiedliche Codeblöcke aus.

<br><br><br>

#### Bedingte Anweisung (Conditional Statement)

- Bedingte Anweisungen in Javascript helfen uns, Code zu schreiben, der `Entscheidungen trifft`, je nachdem, ob eine Bedingung erfüllt ist (wahr) oder nicht (falsch).
- mit Vergleichsoperatoren und logischen Operatoren können wir Bedingungen formulieren.
- Viele Programme müssen auf unterschiedliche Situationen unterschiedlich reagieren.

- Wenn zum Beispiel:
  - in einem `Spiel` die Anzahl der Leben des Spielers 0 ist, ist das Spiel vorbei.
  - In einer `Wetter-App`, wenn es am Morgen betrachtet wird, zeigen Sie eine `Sonnenaufgangsgrafik`; zeigen Sie Sterne und einen Mond, wenn es Nachtzeit ist.
  - In JavaScript können wir `if...else`-Anweisungen verwenden, um solche Entscheidungen zu treffen.

### Die `if`-Anweisung

- Die `if`-Anweisung führt einen Block von Code aus, wenn eine angegebene Bedingung wahr ist.
- Syntax:

```javascript
if (bedingung) {
  // Code, der ausgeführt wird, wenn die Bedingung wahr ist
}
```

- Beispiel:

```javascript
let hour = 10;

if (hour < 18) {
  console.log("Guten Tag");
}

console.log("Guten Abend");
```

- Der Code wird nur ausgeführt, wenn die Bedingung wahr ist, aber auch die restlichen Codezeilen werden ausgeführt.
- Wenn wir aber wollen, dass den restlichen Code nur ausgeführt wird, wenn die Bedingung falsch ist, können wir die `else`-Anweisung verwenden.

<br><br><br>

### Die `else`-Anweisung: Der "Sonst"-Fall

- Die `else`-Anweisung führt einen Block von Code aus, wenn eine angegebene Bedingung falsch ist.
- der `else`-Block wird nur ausgeführt, wenn die `if`-Bedingung `falsch` ist.
- Syntax:

  ```javascript
  if (bedingung) {
    // Code ausführen, wenn die Bedingung wahr ist
  } else {
    // sonst führe diesen Code aus
  }
  ```

- Entweder der `if`-Block oder der `else`-Block wird ausgeführt.

  - Niemals beide und niemals keiner von beiden.
  - Das Programm muss sich für einen Weg entscheiden.

- Hier haben wir:

  - Die `if` Schlüsselwort gefolgt von einer Bedingung in Klammern.
  - Eine Bedienung um zu entscheiden, ob der Code ausgeführt werden soll oder nicht.

  - Diese werden oft mit `Vergleichsoperatoren` wie `===`, `!==`, `>`, `<`, `>=`, `<=` geschrieben.
  - zum Beispiel:

    - Du baust eine Anwendung, die überprüft, ob ein Benutzer volljährig ist um eine bestimmte Operation durchzuführen wie z.B. ein Film ab 18 zu sehen.

    ```javascript
    let alter = 20;
    if (alter >= 18) {
      console.log("Zutritt erlaubt");
    } else {
      console.log("Zutritt verweigert");
    }
    ```

    - `if (alter >= 20)` prüft, ob die Variable `alter` größer oder gleich 20 ist.
    - wenn die Bedingung wahr ist, wird der Code im `if`-Block ausgeführt.(`Zutritt erlaubt`)
    - wenn die Bedingung falsch ist, wird der Code im `else`-Block ausgeführt.(`Zutritt verweigert`)

- Zusammengefasst besteht eine `if-else`-Anweisung aus:
  - Ein Block von Code, der ausgeführt wird, wenn die Bedingung wahr ist in `geschweiften Klammern`.
  - Das `else` Schlüsselwort gefolgt von einem Block von Code in geschweiften Klammern.
  - Ein Block von Code, der ausgeführt wird, `wenn die Bedingung falsch ist` in geschweiften Klammern.
  - der code in die geschweiften Klammern sind in der Regel `eingerückt`, um die Lesbarkeit zu verbessern.

<br><br><br>

### Die `else if`-Anweisung: Mehrere Wege

- Manchmal gibt es mehr als nur zwei Möglichkeiten.
- Stell dir eine Ampel vor: Sie kann rot, gelb oder grün sein.
- Mit `if` und `else` können wir nur zwei Zustände abbilden (z.B. "rot" und "nicht rot").
- Um mehrere Bedingungen nacheinander zu prüfen, verwenden wir `else if`.

- Syntax:

```javascript
if (erste_bedingung) {
  // dieser Code wird ausgeführt, wenn erste_bedingung wahr ist
} else if (zweite_bedingung) {
  // dieser Code wird ausgeführt, wenn zweite_bedingung wahr ist
} else {
  // dieser Code wird ausgeführt, wenn erste_bedingung und zweite_bedingung falsch sind
}
```

**Logik:**

- **Wenn** die Ampel grün ist, **dann** fahre.
- **Sonst, wenn** die Ampel gelb ist, **dann** bremse ab.
- **Sonst** (wenn sie weder grün noch gelb ist, also rot sein muss), **dann** halte an.

```javascript
let ampelfarbe = "gelb";

if (ampelfarbe === "grün") {
  console.log("Fahre");
} else if (ampelfarbe === "gelb") {
  console.log("Bremse ab");
} else {
  console.log("Halte an");
}
```

- Das Programm prüft die Bedingungen von oben nach unten.
- Sobald es eine Bedingung findet, die `wahr` ist, führt es den zugehörigen Codeblock aus und überspringt alle restlichen `else if`- und `else`-Blöcke dieser Kette.

<br><br><br>

## Logische Operatoren: Bedingungen verknüpfen

- Manchmal hängt eine Entscheidung nicht nur von einer einzigen Bedingung ab.
- Zum Beispiel, um einen Film ab 18 im Kino zu sehen, musst du **sowohl** volljährig sein **als auch** ein Ticket haben.
- Hierfür verwenden wir logische Operatoren.

Die drei wichtigsten logischen Operatoren sind:

- `&&` - UND Operator
- `||` - ODER Operator
- `!` - NICHT Operator

### Das UND (`&&`)

- Stell dir vor, du möchtest online etwas bestellen.
- Du brauchst genug Geld auf dem Konto **UND** der Artikel muss auf Lager sein.

```javascript
let kontostand = 100.0;
let artikelAufLager = true;

if (kontostand >= 50.0 && artikelAufLager == true) {
  console.log("Bestellung erfolgreich!");
} else {
  console.log("Bestellung fehlgeschlagen.");
}
```

- Wenn nur eine der beiden Bedingungen falsch wäre (z.B. `kontostand = 30.0`), wäre die gesamte `&&`-Bedingung falsch und der `else`-Block würde ausgeführt.

### Das ODER (`||`)

- Stell dir vor, du bekommst einen Rabatt, wenn du entweder Student **ODER** Rentner bist.
- Es reicht, wenn eine der beiden Bedingungen erfüllt ist.

```javascript
let istStudent = false;
let istRentner = true;

if (istStudent == true || istRentner == true) {
  console.log("Du erhältst einen Rabatt!");
} else {
  console.log("Leider kein Rabatt für dich.");
}
```

- Hier würdest du den Rabatt bekommen, weil du Rentner bist. Es ist egal, dass du kein Student bist.

### Das NICHT (`!`)

- Dieser Operator ist simpel, aber sehr nützlich.
- Er dreht einen Wahrheitswert einfach um.

```javascript
let doorIsClosed = true;

// Wir wollen prüfen, ob die Tür NICHT geschlossen ist (also offen).
if (!doorIsClosed) {
  console.log("Die Tür ist offen.");
} else {
  console.log("Die Tür ist geschlossen.");
}
```

- In diesem Fall ist `doorIsClosed` ist `true`.
- Das `!` davor macht daraus `false`.
- Daher wird die `if`-Bedingung als `false` ausgewertet und der `else`-Block wird ausgeführt.
  <br><br><br>

### Switch-Case Statements

- `switch`-`case`-Anweisungen werden auch verwendet, um Entscheidungen zu treffen
- Sie ist eine spezielle Art der Verzweigung, die ideal ist, wenn du eine einzelne Variable mit mehreren möglichen, konstanten Werten vergleichen möchtest.
- syntax:

```javascript
switch (variable) {
  case wert1:
    // Code, der ausgeführt wird, wenn variable === wert1
    break;
  case wert2:
    // Code, der ausgeführt wird, wenn variable === wert2
    break;
  // weitere case-Blöcke...
  default:
    // Code, der ausgeführt wird, wenn keine der obigen Bedingungen zutrifft
    break;
}
```

#### Wie funktioniert eine switch-case-Struktur?

- Der Aufbau ist immer gleich und besteht aus vier wichtigen Schlüsselwörtern:
  - `switch`,
  - `case`,
  - `break` und
  - `default`.

1.  **`switch (variable)`**:

- Hier beginnt die Struktur.
- In die Klammern schreibst du die Variable, deren Wert du überprüfen möchtest.
- Man kann das als "Schalte um, basierend auf dem Wert von `variable`" verstehen.

2.  **`case wert:`**:

- Für jeden möglichen Wert, den deine Variable annehmen könnte, erstellst du einen `case` (einen "Fall").
- Du schreibst also `case` gefolgt von dem konkreten Wert (z.B. eine Zahl wie `5` oder ein Text wie `"Montag"`).

3.  **`break;`**:
    - Das ist extrem wichtig! Nachdem der Code für einen passenden `case` ausgeführt wurde, sorgt `break` dafür, dass die gesamte `switch`-Struktur sofort verlassen wird.
    - Ohne `break` würde das Programm einfach beim nächsten `case` weitermachen, was meistens nicht gewollt ist (dieses Verhalten nennt man "Fall-Through").
4.  **`default:`**:

- Das ist der "Was-sonst"-Block.
- Wenn keiner der von dir definierten `case`-Fälle zutrifft, wird der Code im `default`-Block ausgeführt.
- Er ist vergleichbar mit dem `else`-Teil einer `if-else`-Struktur.

- **Ein einfaches Beispiel:** Wir wollen den Wochentag als Zahl (1-7) in Text umwandeln.

```javascript
let tagNummer = 3;
let tagNamen = null;

switch (tagNummer) {
  case 1:
    tagNamen = "Montag";
    console.log("Heute ist Montag");
    break; // Verlässt den switch-Block
  case 2:
    tagNamen = "Dienstag";
    console.log("Heute ist Dienstag");
    break;
  case 3:
    tagNamen = "Mittwoch"; // Dieser Fall trifft zu!
    console.log("Heute ist Mittwoch");
    break; // tagNamen ist jetzt "Mittwoch", switch wird verlassen.
  case 4:
    tagNamen = "Donnerstag";
    console.log("Heute ist Donnerstag");
    break;
  case 5:
    tagNamen = "Freitag";
    console.log("Heute ist Freitag");
    break;
  case 6:
    tagNamen = "Samstag";
    console.log("Heute ist Samstag");
    break;
  case 7:
    tagNamen = "Sonntag";
    console.log("Heute ist Sonntag");
    break;
  default:
    tagNamen = "Ungültiger Tag"; // Wird ausgeführt, wenn tagNummer z.B. 9 wäre.
    console.log("Ungültiger Tag");
    break;
}
```

### 💡 Wann solltest du switch-case verwenden? (Anwendungsbereich)

- `switch-case` ist nicht immer die beste Wahl. Seine Stärke liegt in ganz bestimmten Situationen. Eine `if-else if-else`-Kette kann zwar alles, was `switch-case` kann, aber `switch-case` ist in manchen Fällen viel lesbarer und klarer.

Hier ist ein Vergleich, der dir bei der Entscheidung hilft:

| Kriterium                    | ✅ switch-case                                                                                                                                                                        | 🔄 if-else if-else                                                                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------- |
| **Art des Vergleichs**       | Prüft nur auf **strikte Gleichheit** (`===`). Eine Variable wird mit festen Werten verglichen.                                                                                        | Kann **beliebige Bedingungen** prüfen (`>`, `<`, `!=`, `&&`, `                                                                                                                                    |     | `, Funktionsaufrufe). |
| **Geprüfter Wert**           | Prüft immer **dieselbe Variable** gegen verschiedene Werte.                                                                                                                           | Kann in jedem `else if`-Block eine **völlig andere Bedingung** oder Variable prüfen.                                                                                                              |
| **Lesbarkeit**               | **Sehr hoch**, wenn du eine Variable mit 5 oder mehr festen Werten vergleichst (z.B. Menüauswahl).                                                                                    | **Besser geeignet** für komplexe Logik, Bereiche (z.B. `alter > 18`) oder mehrere verschiedene Bedingungen.                                                                                       |
| **Typische Anwendungsfälle** | - Menüauswahl (Nutzer wählt 1, 2, 3...)<br>- Zustandsautomaten (Ampel: rot, gelb, grün)<br>- Auswertung von Kommandozeilen-Argumenten<br>- Fehlercodes (Code 404 -> "Nicht gefunden") | - Überprüfung von Wertebereichen (Noten: 1.0-1.5 -> "Sehr Gut")<br>- Kombination verschiedener Bedingungen (`if (istOnline && hatBezahlt)`)<br>- Logik, die nicht auf einfacher Gleichheit beruht |

**Faustregel**: Wenn du dich dabei ertappst, eine lange Kette von `if (x === 1) { ... } else if (x === 2) { ... } else if (x === 3) { ... }` zu schreiben, ist das ein perfekter Kandidat für eine `switch-case`-Struktur.

<br><br><br>

## Schachtelung von Bedingungen

Stell dir vor, du planst deinen Tag. _Wenn_ das Wetter schön ist, gehst du raus. Das ist eine einfache Entscheidung. Aber jetzt wird es komplexer: _Wenn_ das Wetter schön ist, überlegst du weiter: _Wenn_ du auch genug Zeit hast, fährst du zum See. _Ansonsten_ (wenn du wenig Zeit hast) gehst du nur im Park spazieren.

Du hast hier eine Entscheidung innerhalb einer anderen Entscheidung getroffen. Das nennt man **Schachtelung**. In der Programmierung bedeutet das, dass du eine komplette `if-else`-Struktur in den Block einer anderen `if`- oder `else`-Anweisung schreibst.

### Warum und wann schachtelt man Bedingungen?

Schachtelung wird verwendet, um eine feinere, detailliertere Entscheidungslogik abzubilden. Man braucht sie, wenn eine zweite Bedingung nur dann relevant wird, wenn eine erste, übergeordnete Bedingung bereits erfüllt ist.

**Hauptgründe für die Schachtelung:**

1.  **Hierarchische Logik**: Entscheidungen bauen aufeinander auf. Die innere Prüfung macht ohne die äußere Prüfung keinen Sinn.
    - _Beispiel_: Prüfe, ob ein Benutzer Admin-Rechte hat. Diese Prüfung ist nur sinnvoll, _wenn_ der Benutzer überhaupt eingeloggt ist.
2.  **Filterung von Daten**: Man filtert schrittweise durch mehrere Kriterien.
    - _Beispiel_: Finde alle Produkte, die zur Kategorie "Elektronik" gehören. _Innerhalb dieser Kategorie_, finde alle, die weniger als 50€ kosten.
3.  **Vermeidung von Fehlern**: Man stellt sicher, dass eine Operation nur ausgeführt wird, wenn alle Vorbedingungen erfüllt sind.
    - _Beispiel_: Greife auf das erste Element einer Liste zu. Das ist nur sicher, _wenn_ die Liste überhaupt Elemente enthält (also nicht leer ist).

### Ein praktisches Beispiel: Benutzer-Authentifizierung

Schauen wir uns das Beispiel mit dem Admin-Login genauer an. Wir haben zwei Bedingungen:

1.  Ist der Benutzer eingeloggt? (`isLoggedIn`)
2.  Wenn ja, hat der Benutzer die Rolle "Admin"? (`userRole`)

```javascript
let isLoggedIn = true;
let userRole = "Guest"; // Mögliche Rollen: "Admin", "User", "Guest"

// Äußere Bedingung: Ist der Benutzer überhaupt eingeloggt?
if (isLoggedIn === true) {
  console.log("Willkommen! Dein Login-Status wird geprüft...");

  // Innere, geschachtelte Bedingung: Welche Rolle hat der eingeloggte Benutzer?
  // Diese Prüfung findet NUR statt, wenn die äußere Bedingung (isLoggedIn) wahr ist.
  if (userRole === "Admin") {
    console.log("Zugriff auf das Admin-Dashboard gewährt.");
  } else if (userRole === "User") {
    console.log("Zugriff auf deinen persönlichen Bereich gewährt.");
  } else {
    console.log("Du bist als Gast angemeldet und hast nur Lesezugriff.");
  }
} else {
  // Dieser Block wird nur ausgeführt, wenn die äußere Bedingung falsch ist.
  console.log("Bitte logge dich zuerst ein, um fortzufahren.");
}
```

Diese Struktur bildet die logische Abhängigkeit perfekt ab. Die Frage nach der Rolle wird niemals gestellt, wenn der Benutzer nicht eingeloggt ist.

### Gefahren und Alternativen zur Schachtelung

- Obwohl Schachtelung sehr mächtig ist, kann sie auch zu Problemen führen. Wenn man zu viele Ebenen ineinander schachtelt, wird der Code sehr schnell unleserlich und schwer zu warten. Man spricht dann von einer "Pfeilspitzen-Form" (Arrow Code) oder der "Pyramide des Verderbens" (Pyramid of Doom), weil der Code durch die Einrückungen immer weiter nach rechts wandert.

```javascript
if (a) {
  if (b) {
    if (c) {
      if (d) {
        // ... sehr schwer zu lesen, was hier passiert
      }
    }
  }
}
```

**Bessere Alternativen, um tiefe Schachtelung zu vermeiden:**

1.  **Logische Operatoren (`&&`, `||`)**: Oft kann man zwei verschachtelte `if`-Abfragen zu einer einzigen verbinden.

    - **Statt:**
      ```javascript
      if (isLoggedIn) {
        if (userRole === "Admin") {
          // ...
        }
      }
      ```
    - **Besser:**
      ```javascript
      if (isLoggedIn && userRole === "Admin") {
        // ...
      }
      ```

2.  **"Guard Clauses" (Frühes Verlassen)**: Anstatt den "guten" Fall in ein `if` zu packen, prüft man am Anfang einer Funktion auf die negativen oder ungültigen Fälle und bricht sofort ab (z.B. mit `return`). Dadurch wird der Hauptcode flach und nicht weiter eingerückt.

    - **Statt (geschachtelt):**
      ```javascript
      function zeigeAdminDashboard() {
        if (isLoggedIn) {
          if (userRole === "Admin") {
            console.log("Dashboard wird geladen...");
            // ... viel mehr Code
          } else {
            console.log("Keine Admin-Rechte!");
          }
        } else {
          console.log("Nicht eingeloggt!");
        }
      }
      ```
    - **Besser (flach mit Guard Clauses):**

      ```javascript
      function zeigeAdminDashboard() {
        if (!isLoggedIn) {
          console.log("Nicht eingeloggt!");
          return; // Funktion sofort verlassen
        }

        if (userRole !== "Admin") {
          console.log("Keine Admin-Rechte!");
          return; // Funktion sofort verlassen
        }

        // Wenn wir hier ankommen, sind alle Bedingungen erfüllt.
        // Der Hauptcode ist nicht mehr geschachtelt.
        console.log("Dashboard wird geladen...");
        // ... viel mehr Code
      }
      ```
