# Kontrollstrukturen, Bedingungen und Schleifen in Python

Kontrollstrukturen verstehen

- Bedeutung und Nutzen von Kontrollstrukturen im Programmieralltag
- Unterschied zwischen sequenzieller und verzweigter Ausführung

Bedingungen mit if, elif, else

- Aufbau und Syntax einer if-Anweisung
- Verknüpfung von Bedingungen mit elif und else

Vergleichs- und logische Operatoren

- Anwendung von Vergleichsoperatoren (==, !=, <, >, <=, >=)
- Nutzung logischer Verknüpfungen (and, or, not) in Bedingungen

Schleifen in Python

- for-Schleifen: Einsatzmöglichkeiten und Syntax
- while-Schleifen: Funktionsweise und typische Verwendungszwecke

Break und Continue

- Verwendung von break zum frühzeitigen Verlassen von Schleifen
- Nutzung von continue um den Schleifendurchlauf fortzusetzen

Praktische Anwendungsfälle

- Kontrollfluss bei Eingabeprüfungen
- Steuerung von Programmschleifen anhand von Nutzerinteraktion# 🧠 Kontrollstrukturen verstehen

<br><br><br>

## 🛠️ Bedeutung und Nutzen von Kontrollstrukturen im Programmieralltag

Stell dir vor, du schreibst ein Computerprogramm. Ohne Kontrollstrukturen wäre dein Programm wie ein sehr einfaches Kochrezept, bei dem du jeden Schritt von oben nach unten abarbeiten musst, ohne Ausnahme und ohne Wiederholungen. Du müsstest zum Beispiel schreiben:

1.  Nimm eine Zutat.
2.  Schneide die Zutat.
3.  Gib sie in die Schüssel.
4.  Nimm die nächste Zutat.
5.  Schneide die Zutat.
6.  Gib sie in die Schüssel.

... und so weiter. Das wäre extrem umständlich und überhaupt nicht flexibel.

Genau hier kommen die **Kontrollstrukturen** ins Spiel. Sie sind das Gehirn deines Programms. Sie erlauben es dir, den "Fluss" der Programmausführung zu steuern – also zu entscheiden, _welcher_ Code-Abschnitt _wann_ und _wie oft_ ausgeführt wird.

Ganz einfach gesagt, sind Kontrollstrukturen die Werkzeuge, die deinem Programm Intelligenz verleihen. Sie ermöglichen es deinem Code, auf verschiedene Situationen zu reagieren, Entscheidungen zu treffen und Aufgaben zu wiederholen.

Der Nutzen im Programmieralltag ist riesig:

- **Entscheidungen treffen:** Dein Programm kann auf Eingaben des Benutzers oder auf bestimmte Zustände reagieren. Zum Beispiel: _Wenn_ der Benutzer das richtige Passwort eingibt, _dann_ gewähre ihm Zugang. _Andernfalls_ zeige eine Fehlermeldung an. Ohne diese Struktur könnte sich niemand einloggen.
- **Wiederholungen durchführen (Schleifen):** Anstatt Code hundertmal zu kopieren, kannst du dem Programm sagen, es soll eine bestimmte Aufgabe so lange wiederholen, _bis_ eine Bedingung erfüllt ist. Zum Beispiel: Verarbeite _jeden_ einzelnen Eintrag in einer langen Kundenliste. Das spart unglaublich viel Zeit und macht den Code kürzer und lesbarer.
- **Flexibilität und Dynamik:** Programme werden dadurch interaktiv und dynamisch. Ein Spiel könnte prüfen, _ob_ der Spieler noch Lebenspunkte hat. Ein Onlineshop prüft, _ob_ ein Artikel auf Lager ist. Eine Wetter-App prüft, _ob_ die Temperatur unter 0 Grad liegt, um eine Frostwarnung auszugeben.
- **Fehlerbehandlung:** Du kannst prüfen, _ob_ bei einer Operation ein Fehler aufgetreten ist. _Wenn ja_, kannst du darauf reagieren, anstatt das Programm einfach abstürzen zu lassen.

Kontrollstrukturen sind also nicht nur "nice to have", sie sind das absolute Fundament jeder nichttrivialen Programmierung. Sie sind die Weichensteller, die den Zug (dein Programm) auf die richtigen Gleise lenken, damit er sein Ziel erreicht.

<br><br><br>

## 🚦 Unterschied zwischen sequenzieller und verzweigter Ausführung

Um zu verstehen, wie mächtig Kontrollstrukturen sind, müssen wir uns den Unterschied zwischen dem "normalen" Programmablauf und einem gesteuerten Ablauf ansehen.

### 🚶‍♂️ Die sequentielle Ausführung

Dies ist die Standard-Art, wie ein Computer Code liest: Zeile für Zeile, von oben nach unten, ohne eine einzige Zeile zu überspringen oder zu wiederholen. Es ist wie eine gerade Straße ohne Abzweigungen. Jeder Befehl wird genau einmal ausgeführt, und zwar in der Reihenfolge, in der du ihn aufgeschrieben hast.

**Analogie: Eine Checkliste**
Stell dir eine einfache Checkliste für den Morgen vor:

1.  Aufstehen.
2.  Zähne putzen.
3.  Kaffee kochen.
4.  Frühstücken.

Du arbeitest diese Liste stur von Punkt 1 bis Punkt 4 ab. Es gibt keine Entscheidung. Du putzt dir immer die Zähne, auch wenn du keine Zahnpasta mehr hast. Du kochst immer Kaffee, auch wenn du lieber Tee trinken würdest. Der Ablauf ist starr und vorhersehbar.

**Beispiel im Code (vereinfacht):**

```
drucke("Guten Morgen!")
frage_nach_dem_Namen()
lese_den_Namen_ein()
drucke("Hallo, " + Name)
```

Dieses Programm wird _immer_ genau diese vier Schritte in genau dieser Reihenfolge ausführen.

### 🔀 Die verzweigte Ausführung

Hier kommt die Magie ins Spiel. Die verzweigte Ausführung bedeutet, dass das Programm an einen Punkt kommt, an dem es eine Entscheidung treffen muss – eine Gabelung im Weg. Basierend auf einer **Bedingung** (einer Frage, die mit "wahr" oder "falsch" beantwortet werden kann), wählt das Programm einen von zwei oder mehr möglichen Wegen. Es wird also nur ein bestimmter Code-Block ausgeführt, während der andere komplett ignoriert wird.

Die wichtigste Struktur hierfür ist die **If-Else-Anweisung** (Wenn-Dann-Sonst-Anweisung).

**Analogie: Eine Weggabelung**
Du stehst an einer Weggabelung. Ein Schild sagt: "**Wenn** du zum See willst, gehe links. **Ansonsten** (wenn du zum Berg willst), gehe rechts."
Du wirst niemals beide Wege gleichzeitig gehen. Du triffst eine Entscheidung basierend auf einer Bedingung (deinem Ziel) und wählst einen Pfad aus. Der andere Pfad wird von dir nicht betreten.

**Beispiel im Code (vereinfacht):**

```
frage_nach_dem_Alter()
lese_das_Alter_ein()

WENN Alter >= 18 DANN
    drucke("Du bist volljährig und darfst den Film sehen.")
SONST
    drucke("Du bist leider noch zu jung für diesen Film.")
```

Hier entscheidet das Programm basierend auf dem eingegebenen Alter. Es wird _entweder_ die eine _oder_ die andere Nachricht ausgeben, aber niemals beide. Der Programmfluss hat sich also "verzweigt".

### 📊 Die Gegenüberstellung im Überblick

Um den Unterschied ganz klar zu machen, hier eine Tabelle:

| Merkmal                      | 🚶‍♂️ Sequentielle Ausführung                                                       | 🔀 Verzweigte Ausführung                                                      |
| :--------------------------- | :------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- | ------------ |
| **Ablauf**                   | Streng linear, von oben nach unten. Jeder Befehl wird einmal ausgeführt.         | Nicht-linear. Das Programm trifft an "Kreuzungen" Entscheidungen.             |
| **Vorhersehbarkeit**         | Der Ablauf ist immer exakt gleich und starr.                                     | Der Ablauf hängt von Bedingungen ab (z.B. Benutzereingaben, Daten).           |
| **Flexibilität**             | Sehr gering. Das Programm kann nicht auf unterschiedliche Situationen reagieren. | Sehr hoch. Das Programm wird dynamisch und kann "intelligent" agieren.        |
| **Analogie**                 | Ein Kochrezept, eine Checkliste.                                                 | Eine Weggabelung, eine Ja/Nein-Frage, ein Weichensteller.                     |
| **Typische Schlüsselwörter** | (Keine speziellen Kontroll-Schlüsselwörter)                                      | `if`, `else`, `else if`, `switch`, `case`                                     |
| **Ergebnis**                 | Führt immer zum exakt gleichen Resultat.                                         | Führt zu unterschiedlichen Resultaten, je nachdem, welcher Pfad gewählt wird. | <br><br><br> |

# 💡 Bedingungen mit if, elif, else

Stell dir vor, du schreibst ein Programm. Dieses Programm soll nicht immer stur den gleichen Weg gehen, sondern auf verschiedene Situationen unterschiedlich reagieren können. Es soll also Entscheidungen treffen. Genau hier kommen Bedingungen ins Spiel. Mit `if`, `elif` und `else` gibst du deinem Programm die Fähigkeit, wie ein Weichensteller an einer Bahnstrecke zu agieren und den Code in die richtigen Bahnen zu lenken.

<br><br><br>

## 🤔 Der Aufbau und die Syntax einer if-Anweisung

### ### Was ist eine `if`-Anweisung?

Die `if`-Anweisung ist die einfachste Form einer Bedingung. Du kannst sie dir wie eine Frage vorstellen, die nur mit "Ja" oder "Nein" (in der Programmierung `True` oder `False`) beantwortet werden kann.

Die Grundidee ist: **WENN** eine bestimmte Bedingung erfüllt ist, **DANN** führe einen bestimmten Code-Block aus. Wenn die Bedingung nicht erfüllt ist, wird dieser Code-Block einfach übersprungen.

Stell dir vor, du schaust aus dem Fenster: **Wenn** es regnet, **dann** nimmst du einen Regenschirm mit. Das ist exakt die Logik einer `if`-Anweisung.

### ### Die Syntax: Wie baust du eine `if`-Anweisung auf?

Der Aufbau ist in Python immer gleich und sehr streng geregelt:

1.  **Das Schlüsselwort `if`**: Damit fängt alles an. Du sagst Python damit: "Achtung, jetzt kommt eine Bedingung!"
2.  **Die Bedingung**: Das ist die eigentliche "Frage", die du stellst. Das Ergebnis dieser Frage muss immer entweder `True` (wahr) oder `False` (falsch) sein. Zum Beispiel `alter > 18` oder `name == "Peter"`.
3.  **Der Doppelpunkt `:`**: Nach der Bedingung muss _immer_ ein Doppelpunkt stehen. Er signalisiert das Ende der Bedingungszeile und leitet den zugehörigen Code-Block ein.
4.  **Der eingerückte Code-Block**: Der Code, der ausgeführt werden soll, _falls_ die Bedingung wahr ist, muss in der nächsten Zeile beginnen und eingerückt sein. Die Einrückung (üblicherweise 4 Leerzeichen) ist in Python extrem wichtig! Sie zeigt, welcher Code zur `if`-Anweisung gehört.

Schauen wir uns ein konkretes Beispiel an:

```python
alter = 20

# Hier beginnt die if-Anweisung.
# Die Bedingung ist: Ist der Wert in der Variable 'alter' größer oder gleich 18?
# Da 20 >= 18 ist, ist die Bedingung WAHR (True).
if alter >= 18:
    # Weil die Bedingung wahr ist, wird dieser eingerückte Code-Block ausgeführt.
    print("Du bist volljährig.")
    print("Du darfst Auto fahren und wählen gehen.")

# Dieser Code ist NICHT mehr eingerückt.
# Er gehört also nicht mehr zur if-Anweisung und wird immer ausgeführt,
# egal ob die Bedingung wahr oder falsch war.
print("Die Altersprüfung ist abgeschlossen.")
```

Wenn `alter` im Beispiel `16` gewesen wäre, wäre die Bedingung `16 >= 18` falsch (`False`). Der eingerückte Block wäre komplett übersprungen worden und das Programm hätte nur "Die Altersprüfung ist abgeschlossen." ausgegeben.

### ### Vergleichsoperatoren: Die Werkzeuge für deine Bedingungen

Um sinnvolle Bedingungen zu formulieren, brauchst du Vergleichsoperatoren. Hier sind die wichtigsten:

| Operator | Deutsche Bedeutung      | Beispiel (wenn `a = 10`, `b = 20`) | Ergebnis des Beispiels |
| :------- | :---------------------- | :--------------------------------- | :--------------------- |
| `==`     | Ist gleich              | `a == 10`                          | `True`                 |
| `!=`     | Ist ungleich            | `a != 20`                          | `True`                 |
| `>`      | Ist größer als          | `a > b`                            | `False`                |
| `<`      | Ist kleiner als         | `a < b`                            | `True`                 |
| `>=`     | Ist größer oder gleich  | `a >= 10`                          | `True`                 |
| `<=`     | Ist kleiner oder gleich | `b <= 10`                          | `False`                |

**Wichtiger Hinweis:** Verwechsle niemals `==` (der Vergleich: "ist es gleich?") mit `=` (die Zuweisung: "speichere diesen Wert"). Das ist ein sehr häufiger Anfängerfehler!

<br><br><br>

## 🔗 Verknüpfung von Bedingungen mit elif und else

Eine einzelne `if`-Anweisung ist schon nützlich, aber was ist, wenn du auf den Fall reagieren möchtest, dass die Bedingung _nicht_ erfüllt ist? Oder wenn du mehrere verschiedene Bedingungen nacheinander prüfen willst? Hier kommen `else` und `elif` ins Spiel.

### ### 🤷‍♂️ Der "Sonst"-Fall: `else`

`else` ist dein Plan B. Es bietet eine Alternative für den Fall, dass die `if`-Bedingung `False` war. Man kann es direkt mit "sonst" oder "andernfalls" übersetzen.

- `else` steht immer in Verbindung mit einer vorangegangenen `if`-Anweisung.
- `else` hat selbst **keine eigene Bedingung**. Es fängt einfach alles ab, was die `if`-Bedingung nicht abgedeckt hat.
- Genau wie bei `if` folgt auf `else` ein Doppelpunkt `:` und ein eingerückter Code-Block.

Erweitern wir unser Alters-Beispiel:

```python
alter = 15

# Die erste Prüfung:
if alter >= 18:
    # Dieser Block wird ausgeführt, wenn alter 18 oder mehr ist.
    print("Du bist volljährig.")
# Wenn die obige if-Bedingung FALSCH war (was bei 15 der Fall ist)...
else:
    # ...dann wird DIESER Block ausgeführt.
    print("Du bist noch minderjährig.")

print("Die Altersprüfung ist abgeschlossen.")
```

Hier gibt es nur zwei mögliche Ausgänge: Entweder wird der `if`-Block ausgeführt oder der `else`-Block. Einer von beiden wird immer ausgeführt.

### ### 🧐 Mehrere Möglichkeiten: `elif`

Was aber, wenn du mehr als nur zwei Zustände hast? Zum Beispiel: Kind, Teenager, Erwachsener. Nur mit `if` und `else` wird das kompliziert. Dafür gibt es `elif`, was eine Abkürzung für "else if" ist ("sonst, wenn").

Mit `elif` kannst du eine Kette von Bedingungen aufbauen. Python geht diese Kette von oben nach unten durch und führt den Code-Block der **ersten wahren Bedingung** aus, die es findet. Danach wird der Rest der gesamten Kette (`elif`s und `else`) übersprungen.

Die Reihenfolge sieht so aus:

1.  **`if`**: Beginnt immer die Kette. Wird zuerst geprüft.
2.  **`elif`**: Beliebig viele `elif`-Blöcke können folgen. Jeder hat seine eigene Bedingung und wird nur geprüft, wenn alle vorherigen `if`- und `elif`-Bedingungen `False` waren.
3.  **`else`**: Kann optional am Ende stehen. Dieser Block wird ausgeführt, wenn _keine einzige_ der vorherigen `if`- oder `elif`-Bedingungen `True` war. Er ist der "Auffangbehälter" für alle übrigen Fälle.

Schauen wir uns ein Notensystem als Beispiel an:

```python
punkte = 78

# 1. Prüfung: Sind die Punkte 90 oder mehr? Nein (78 ist nicht >= 90).
if punkte >= 90:
    print("Note: Sehr Gut")

# 2. Prüfung (weil die erste falsch war): Sind die Punkte 80 oder mehr? Nein (78 ist nicht >= 80).
elif punkte >= 80:
    print("Note: Gut")

# 3. Prüfung (weil die zweite falsch war): Sind die Punkte 65 oder mehr? Ja (78 ist >= 65).
# --> DIESE BEDINGUNG IST WAHR!
elif punkte >= 65:
    # Der Code in diesem Block wird ausgeführt.
    print("Note: Befriedigend")
    # Danach wird die gesamte if-elif-else-Kette sofort verlassen.

# 4. Prüfung: Wird NICHT MEHR ERREICHT.
elif punkte >= 50:
    print("Note: Ausreichend")

# Der "Sonst"-Fall: Wird ebenfalls NICHT MEHR ERREICHT.
else:
    print("Note: Nicht bestanden")

print("Die Benotung ist abgeschlossen.")
```

In diesem Beispiel wird "Note: Befriedigend" ausgegeben. Obwohl `78 >= 50` ebenfalls wahr wäre, wird dieser `elif`-Block gar nicht erst geprüft, weil eine der vorherigen Bedingungen bereits `True` war. Python nimmt immer den ersten Treffer in der Kette.# 🤔 Vergleichs- und logische Operatoren

<br><br><br>

## ⚖️ Vergleichsoperatoren: Das große Vergleichen

Stell dir vor, du bist ein Detektiv und musst zwei Spuren oder Beweisstücke miteinander vergleichen. Vergleichsoperatoren machen genau das in der Programmierung: Sie vergleichen zwei Werte. Das Ergebnis dieser Untersuchung ist aber immer ganz einfach: Entweder es ist **wahr** (in der Programmierung `True`) oder **falsch** (`False`). Es gibt keine andere Antwort. Diese `True`/`False`-Werte nennt man auch Boole'sche Werte.

Schauen wir uns die einzelnen "Vergleichs-Werkzeuge" mal genauer an. Hier ist eine schnelle Übersicht:

| Operator | Name           | Bedeutung                                      | Beispiel | Ergebnis |
| :------: | :------------- | :--------------------------------------------- | :------: | :------: |
|   `==`   | Gleich         | Ist Wert A genau gleich wie Wert B?            | `5 == 5` |  `True`  |
|   `!=`   | Ungleich       | Ist Wert A ungleich Wert B?                    | `5 != 3` |  `True`  |
|   `<`    | Kleiner als    | Ist Wert A kleiner als Wert B?                 | `3 < 5`  |  `True`  |
|   `>`    | Größer als     | Ist Wert A größer als Wert B?                  | `5 > 3`  |  `True`  |
|   `<=`   | Kleiner-gleich | Ist Wert A kleiner als oder gleich groß wie B? | `5 <= 5` |  `True`  |
|   `>=`   | Größer-gleich  | Ist Wert A größer als oder gleich groß wie B?  | `5 >= 3` |  `True`  |

<br>

### 🤝 Der Gleich-Operator (`==`)

Dieser Operator ist wie eine exakte Waage. Er prüft, ob der Wert auf der linken Seite exakt dem Wert auf der rechten Seite entspricht.
Ganz wichtig: Verwechsle ihn nicht mit dem einfachen Gleichheitszeichen (`=`), das benutzt man, um einer Variable einen Wert zuzuweisen (z.B. `alter = 25`). Das doppelte Gleichheitszeichen (`==`) hingegen stellt eine Frage: "Seid ihr beiden gleich?"

**Beispiele:**

- `10 == 10` fragt: "Ist 10 gleich 10?" Die Antwort ist `True`.
- `10 == 5` fragt: "Ist 10 gleich 5?" Die Antwort ist `False`.
- `'hallo' == 'hallo'` fragt: "Ist der Text 'hallo' gleich dem Text 'hallo'?" Die Antwort ist `True`.
- `'hallo' == 'Hallo'` fragt: "Ist der Text 'hallo' gleich dem Text 'Hallo'?" Die Antwort ist `False`, weil die Groß- und Kleinschreibung unterschiedlich ist.

### 🚫 Der Ungleich-Operator (`!=`)

Das ist das genaue Gegenteil vom Gleich-Operator. Das Ausrufezeichen steht hier für "nicht". Du fragst also: "Seid ihr beiden **nicht** gleich?"

**Beispiele:**

- `10 != 5` fragt: "Ist 10 ungleich 5?" Die Antwort ist `True`, denn sie sind ja tatsächlich verschieden.
- `10 != 10` fragt: "Ist 10 ungleich 10?" Die Antwort ist `False`, denn sie sind ja gleich.

### 🤏 Der Kleiner-als-Operator (`<`)

Dieser Operator prüft, ob der Wert auf der linken Seite echt kleiner ist als der Wert auf der rechten Seite. Stell dir eine Zahlenlinie vor: Die Zahl, die weiter links steht, ist kleiner.

**Beispiele:**

- `7 < 10` fragt: "Ist 7 kleiner als 10?" Die Antwort ist `True`.
- `10 < 7` fragt: "Ist 10 kleiner als 7?" Die Antwort ist `False`.
- `7 < 7` fragt: "Ist 7 kleiner als 7?" Die Antwort ist `False`, weil sie gleich sind und nicht echt kleiner.

### 💪 Der Größer-als-Operator (`>`)

Das ist das Gegenstück zum Kleiner-als-Operator. Er prüft, ob der linke Wert echt größer ist als der rechte.

**Beispiele:**

- `10 > 7` fragt: "Ist 10 größer als 7?" Die Antwort ist `True`.
- `7 > 10` fragt: "Ist 7 größer als 10?" Die Antwort ist `False`.
- `10 > 10` fragt: "Ist 10 größer als 10?" Die Antwort ist `False`, weil sie gleich groß sind.

### 🟰 Der Kleiner-gleich-Operator (`<=`)

Dieser Operator ist eine Kombination. Er ist zufrieden und antwortet mit `True`, wenn der linke Wert **entweder kleiner als** der rechte Wert ist **oder wenn beide genau gleich** sind. Es reicht also, wenn eine der beiden Bedingungen erfüllt ist.

**Beispiele:**

- `4 <= 5` fragt: "Ist 4 kleiner als oder gleich 5?" Die Antwort ist `True`, weil 4 kleiner als 5 ist.
- `5 <= 5` fragt: "Ist 5 kleiner als oder gleich 5?" Die Antwort ist `True`, weil 5 gleich 5 ist.
- `6 <= 5` fragt: "Ist 6 kleiner als oder gleich 5?" Die Antwort ist `False`.

### 🔝 Der Größer-gleich-Operator (`>=`)

Dieser Operator funktioniert genauso wie der Kleiner-gleich-Operator, nur in die andere Richtung. Er gibt `True` zurück, wenn der linke Wert **entweder größer als** der rechte ist **oder wenn beide genau gleich** sind.

**Beispiele:**

- `8 >= 5` fragt: "Ist 8 größer als oder gleich 5?" Die Antwort ist `True`, weil 8 größer ist.
- `8 >= 8` fragt: "Ist 8 größer als oder gleich 8?" Die Antwort ist `True`, weil sie gleich sind.
- `7 >= 8` fragt: "Ist 7 größer als oder gleich 8?" Die Antwort ist `False`.

<br><br><br>

## 🧠 Logische Operatoren: Clever kombinieren

Nachdem wir nun einzelne Vergleiche anstellen können (die uns `True` oder `False` liefern), wollen wir diese Ergebnisse oft miteinander verknüpfen. Stell dir vor, du bist Türsteher in einem Club. Du hast mehrere Regeln: "Die Person muss älter als 18 sein **UND** eine Eintrittskarte haben." Oder: "Für einen Rabatt muss man Student sein **ODER** über 65 Jahre alt sein." Genau für solche Verknüpfungen gibt es logische Operatoren. Sie nehmen `True`/`False`-Werte und geben am Ende wieder einen einzigen `True`/`False`-Wert aus.

### ➕ Der `and`-Operator (und)

Der `and`-Operator ist der strenge Türsteher. Er sagt nur dann "Ja" (`True`), wenn **alle** Bedingungen, die er verknüpft, `True` sind. Sobald auch nur eine einzige Bedingung `False` ist, ist das Gesamtergebnis `False`.

Denk an das Beispiel: Um Nachtisch zu bekommen, musst du dein Gemüse essen (`True`) **und** dein Zimmer aufräumen (`True`). Nur wenn beides erledigt ist, gibt es Nachtisch (`True`). Wenn du nur dein Gemüse isst, aber dein Zimmer nicht aufräumst, gibt es keinen Nachtisch (`False`).

Hier ist die "Wahrheitstabelle" dafür:

| Bedingung A | Bedingung B | A `and` B  |
| :---------: | :---------: | :--------: |
|   `True`    |   `True`    | **`True`** |
|   `True`    |   `False`   |  `False`   |
|   `False`   |   `True`    |  `False`   |
|   `False`   |   `False`   |  `False`   |

**Beispiel im Code-Stil:**

```python
gemuese_gegessen = True
zimmer_aufgeraeumt = False

if gemuese_gegessen and zimmer_aufgeraeumt:
    print("Nachtisch ist erlaubt.")
else:
    print("Kein Nachtisch.")
```

### ⚖️ Der `or`-Operator (oder)

Der `or`-Operator ist der entspannte Türsteher. Ihm reicht es, wenn **mindestens eine** der verknüpften Bedingungen `True` ist, damit das Gesamtergebnis `True` wird. Nur wenn wirklich **alle** Bedingungen `False` sind, ist das Gesamtergebnis `False`.

Denk an das Rabatt-Beispiel: Du bekommst den Rabatt, wenn du Student bist **oder** wenn du Rentner bist. Wenn du beides bist, bekommst du ihn natürlich auch. Nur wenn du weder das eine noch das andere bist, bekommst du keinen Rabatt.

Die Wahrheitstabelle für `or`:

| Bedingung A | Bedingung B |  A `or` B   |
| :---------: | :---------: | :---------: |
|   `True`    |   `True`    |   `True`    |
|   `True`    |   `False`   |   `True`    |
|   `False`   |   `True`    |   `True`    |
|   `False`   |   `False`   | **`False`** |

**Beispiel im Code-Stil:**

```python
ist_student = False
ist_rentner = True
if ist_student  or ist_rentner:
    print("Rabatt gewährt.")
else:
    print("Kein Rabatt.")
```

### 🔄 Der `not`-Operator (nicht)

Dieser Operator ist der einfachste von allen. Er ist wie ein Lichtschalter: Er kehrt einen einzelnen Boole'schen Wert einfach um. Aus `True` wird `False` und aus `False` wird `True`. Man benutzt ihn, um zu prüfen, ob etwas **nicht** der Fall ist.

**Beispiele:**

- `not True` ergibt `False`.
- `not False` ergibt `True`.

**Beispiel im Code-Stil:**
`ist_angemeldet = False`
Wenn du nun prüfen willst, ob ein Nutzer _nicht_ angemeldet ist, könntest du schreiben: `not ist_angemeldet`. Da `ist_angemeldet` `False` ist, wird `not False` zu `True`. Die Bedingung ist also erfüllt.

Das ist besonders nützlich für lesbaren Code. Anstatt `(tuer_ist_offen == False)` zu schreiben, kann man oft einfach `not tuer_ist_offen` schreiben, was sich fast wie ein normaler Satz liest: "wenn die Tür nicht offen ist".

```python
tuer_ist_offen = False

if not tuer_ist_offen:
    print("Die Tür ist geschlossen.")
else:
    print("Die Tür ist offen.")
```

<br><br><br>

# 🔄 Schleifen in Python

Stell dir vor, du musst eine Aufgabe immer und immer wieder erledigen. Zum Beispiel 100 E-Mails verschicken oder jeden einzelnen Kontakt in deinem Telefonbuch anrufen. Das manuell zu tun wäre extrem mühsam und zeitaufwändig. In der Programmierung haben wir für genau solche wiederkehrenden Aufgaben ein mächtiges Werkzeug: **Schleifen**.

Eine Schleife ist eine Kontrollstruktur, die es dir erlaubt, einen Codeblock so oft auszuführen, wie eine bestimmte Bedingung erfüllt ist oder bis alle Elemente einer Sammlung durchlaufen wurden. Sie automatisieren repetitive Aufgaben und machen deinen Code kürzer, sauberer und effizienter. Python bietet hauptsächlich zwei Arten von Schleifen: die `for`-Schleife und die `while`-Schleife. Schauen wir uns beide mal ganz genau an.

<br><br><br>

## 📜 Die for-Schleife

Die `for`-Schleife ist dein Werkzeug der Wahl, wenn du eine feste Anzahl von Wiederholungen hast oder über die Elemente einer Sequenz (wie eine Liste, ein String oder ein Dictionary) iterieren möchtest. Man kann sie sich wie das Abhaken einer Checkliste vorstellen: Du gehst jeden Punkt auf der Liste von oben nach unten durch, erledigst die damit verbundene Aufgabe und wenn die Liste leer ist, bist du fertig. Du weißt von Anfang an, wie viele Punkte auf der Liste stehen.

<br><br><br>

### ### ⚙️ Syntax und Funktionsweise

Die grundlegende Struktur einer `for`-Schleife in Python sieht immer gleich aus:

```python
for variable in sequenz:
    # Codeblock, der für jedes Element in der Sequenz ausgeführt wird
    # Dieser Block muss eingerückt sein!
    print(variable)
```

Lass uns das mal auseinandernehmen:

- **`for`**: Das ist das Schlüsselwort, das die Schleife einleitet.
- **`variable`**: Dies ist ein Platzhaltername, den du selbst wählst. In jedem Durchlauf der Schleife nimmt diese Variable den Wert des _aktuellen_ Elements aus der Sequenz an. Wenn du eine Liste von Früchten hast, könnte die Variable `frucht` heißen.
- **`in`**: Ein weiteres Schlüsselwort, das die `variable` mit der `sequenz` verbindet.
- **`sequenz`**: Dies ist das Objekt, über das du iterieren (also "drüberlaufen") möchtest. Das kann eine Liste, ein Tuple, ein String, ein Dictionary oder ein `range`-Objekt sein.
- **`:`**: Der Doppelpunkt am Ende der Zeile ist sehr wichtig. Er signalisiert Python, dass jetzt der Codeblock beginnt, der wiederholt werden soll.
- **Eingerückter Codeblock**: Alle Zeilen, die unter der `for`-Zeile stehen und eingerückt sind (üblicherweise mit 4 Leerzeichen), gehören zur Schleife. Dieser Code wird für jedes Element in der Sequenz einmal ausgeführt.

**Ein einfaches Beispiel:**

Stell dir vor, wir haben eine Einkaufsliste und wollen jeden Artikel einzeln ausgeben.

```python
einkaufsliste = ["Äpfel", "Milch", "Brot", "Käse"]

# Die for-Schleife geht die Liste Element für Element durch
for artikel in einkaufsliste:
    # In jedem Durchlauf hat die Variable 'artikel' einen anderen Wert
    # 1. Durchlauf: artikel = "Äpfel"
    # 2. Durchlauf: artikel = "Milch"
    # ... und so weiter.
    print(f"Ich muss noch {artikel} kaufen.")

print("Einkaufsliste abgearbeitet!") # Dieser Code wird erst nach der Schleife ausgeführt
```

<br><br><br>

### ### 🎯 Einsatzmöglichkeiten

`for`-Schleifen sind extrem vielseitig. Hier sind die häufigsten Anwendungsfälle:

#### Über eine Liste iterieren

Das ist der klassische Fall, den wir gerade im Beispiel gesehen haben. Du gehst jedes Element einer Liste durch.

```python
zahlen = [1, 2, 3, 4, 5]
summe = 0
for zahl in zahlen:
    summe = summe + zahl # Addiere die aktuelle Zahl zur Summe
print(f"Die Summe aller Zahlen ist: {summe}")
```

#### Über einen String iterieren

Ein String ist im Grunde eine Sequenz von Zeichen. Du kannst ihn also mit einer `for`-Schleife Buchstabe für Buchstabe durchgehen.

```python
wort = "Python"
for buchstabe in wort:
    print(buchstabe)
```

Ausgabe:

```
P
y
t
h
o
n
```

#### Die `range()`-Funktion verwenden

Manchmal möchtest du einen Codeblock einfach eine bestimmte Anzahl von Malen ausführen, ohne eine vorgefertigte Liste zu haben. Hierfür ist die `range()`-Funktion perfekt. Sie erzeugt eine unveränderliche Sequenz von Zahlen.

| Funktion                   | Beschreibung                                                  | Beispiel                             | Ergebnis            |
| :------------------------- | :------------------------------------------------------------ | :----------------------------------- | :------------------ |
| `range(stop)`              | Erzeugt Zahlen von 0 bis (aber nicht einschließlich) `stop`.  | `for i in range(5): print(i)`        | `0, 1, 2, 3, 4`     |
| `range(start, stop)`       | Erzeugt Zahlen von `start` bis (nicht einschließlich) `stop`. | `for i in range(2, 6): print(i)`     | `2, 3, 4, 5`        |
| `range(start, stop, step)` | Erzeugt Zahlen von `start` bis `stop` in `step`-Schritten.    | `for i in range(0, 11, 2): print(i)` | `0, 2, 4, 6, 8, 10` |

```python
# Führe etwas 3 Mal aus
for i in range(3):
    print(f"Dies ist Durchlauf Nummer {i+1}")
```

#### Über Dictionaries iterieren

Bei Dictionaries hast du mehrere Möglichkeiten, sie zu durchlaufen.

1.  **Über die Schlüssel (Standard):**

    ```python
    hauptstaedte = {"Deutschland": "Berlin", "Frankreich": "Paris", "Italien": "Rom"}
    for land in hauptstaedte:
        print(f"Das Land ist: {land}") # Gibt nur die Schlüssel aus (Deutschland, Frankreich, Italien)
    ```

2.  **Über die Werte mit `.values()`:**

    ```python
    hauptstaedte = {"Deutschland": "Berlin", "Frankreich": "Paris", "Italien": "Rom"}
    for stadt in hauptstaedte.values():
        print(f"Die Hauptstadt ist: {stadt}") # Gibt nur die Werte aus (Berlin, Paris, Rom)
    ```

3.  **Über Schlüssel und Werte gleichzeitig mit `.items()`:** Das ist oft am nützlichsten.
    ```python
    hauptstaedte = {"Deutschland": "Berlin", "Frankreich": "Paris", "Italien": "Rom"}
    for land, stadt in hauptstaedte.items():
        print(f"Die Hauptstadt von {land} ist {stadt}.")
    ```

<br><br><br>

## ⏳ Die while-Schleife

Die `while`-Schleife ist anders. Anstatt eine feste Anzahl von Durchläufen zu haben, läuft eine `while`-Schleife so lange, **wie eine bestimmte Bedingung wahr (`True`) ist**. Du kannst sie dir wie einen Wächter vorstellen, der vor einer Tür steht. Er lässt dich so lange immer wieder durch die Tür gehen und eine Aufgabe erledigen, wie seine Bedingung erfüllt ist (z.B. "solange es draußen hell ist"). Du weißt also nicht unbedingt im Voraus, wie oft die Schleife laufen wird. Es könnten 5 Mal sein oder 1000 Mal.

<br><br><br>

### ### ⚙️ Funktionsweise und Syntax

Die Struktur ist ebenfalls sehr einfach:

```python
while bedingung:
    # Codeblock, der ausgeführt wird, solange die Bedingung True ist
    # Dieser Block muss eingerückt sein!
    # WICHTIG: Irgendetwas hier drin sollte die Bedingung beeinflussen!
```

- **`while`**: Das Schlüsselwort, das die Schleife einleitet.
- **`bedingung`**: Dies ist ein Ausdruck, der zu `True` oder `False` ausgewertet wird (z.B. `x < 10`, `antwort != "ja"`).
- **`:`**: Der Doppelpunkt leitet wieder den Codeblock ein.
- **Eingerückter Codeblock**: Dieser Code wird wiederholt. Entscheidend ist hier: Innerhalb dieses Blocks muss in der Regel etwas passieren, das die `bedingung` irgendwann `False` werden lässt. Sonst hast du eine **Endlosschleife** erschaffen, und dein Programm bleibt für immer darin stecken!

**Ein einfaches Zähl-Beispiel:**

```python
# 1. Initialisierung der Zählervariable
zaehler = 1

# 2. Die Schleifenbedingung wird geprüft
while zaehler <= 5:
    print(f"Der Zähler steht auf: {zaehler}")

    # 3. WICHTIG: Die Variable, die in der Bedingung ist, verändern!
    zaehler = zaehler + 1 # oder kurz: zaehler += 1

print("Schleife beendet.")
```

In diesem Beispiel wird die Bedingung `zaehler <= 5` vor jedem Durchlauf geprüft. Da wir `zaehler` in jedem Durchlauf um 1 erhöhen, wird die Bedingung nach dem 5. Durchlauf (`zaehler` wird zu 6) `False`, und die Schleife stoppt.

<br><br><br>

### ### 💡 Typische Verwendungszwecke

`while`-Schleifen sind perfekt für Situationen, in denen die Anzahl der Wiederholungen unbekannt ist und von externen Faktoren oder Berechnungen abhängt.

#### Warten auf eine bestimmte Benutzereingabe

Ein klassischer Fall ist, den Benutzer so lange nach einer Eingabe zu fragen, bis sie gültig ist.

```python
antwort = input("Bist du einverstanden? (ja/nein): ")
# Solange die Antwort nicht "ja" oder "nein" ist, frage weiter.
while antwort.lower() not in ["ja", "nein"]:
    antwort = input("Bist du einverstanden? (ja/nein): ")

print("Danke für deine gültige Antwort!")
```

#### Spiel- oder Ereignisschleifen

In Spielen oder interaktiven Programmen läuft das Programm oft in einer Hauptschleife, bis der Benutzer entscheidet, es zu beenden.

```python
spiel_laeuft = True
leben = 3

while spiel_laeuft:
    print("Du spielst das Spiel...")

    # Stell dir vor, hier passiert etwas im Spiel
    # Zum Beispiel verliert der Spieler ein Leben
    eingabe = input("Drücke 'q' zum Beenden oder eine andere Taste zum Weiterspielen: ")

    if eingabe.lower() == 'q':
        spiel_laeuft = False # Das macht die Bedingung False und beendet die Schleife

print("Spiel beendet.")
```

#### Verarbeiten von Daten, bis keine mehr da sind

Stell dir vor, du hast eine Liste von Aufgaben und möchtest immer die erste Aufgabe erledigen und sie dann von der Liste entfernen, bis die Liste leer ist.

```python
aufgaben = ["E-Mails checken", "Bericht schreiben", "Kaffee kochen"]

while len(aufgaben) > 0: # Solange die Länge der Liste größer als 0 ist...
    aktuelle_aufgabe = aufgaben.pop(0) # Nimm das erste Element und entferne es
    print(f"Erledige jetzt: {aktuelle_aufgabe}")

print("Alle Aufgaben für heute erledigt!")
```

<br><br><br>

## 📊 for vs. while: Eine Gegenüberstellung

Um dir die Entscheidung zu erleichtern, welche Schleife du wann verwenden solltest, hier eine direkte Gegenüberstellung:

| Kriterium           | `for`-Schleife                                                                                                                   | `while`-Schleife                                                                                                                  |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **Wann verwenden?** | Wenn du eine **bekannte Anzahl** von Wiederholungen hast oder über jedes Element einer **vorhandenen Sequenz** iterieren willst. | Wenn die Anzahl der Wiederholungen **unbekannt** ist und von einer **Bedingung** abhängt, die sich während der Ausführung ändert. |
| **Typische Frage**  | "Für jedes Element in dieser Liste..."                                                                                           | "Solange diese Bedingung wahr ist..."                                                                                             |
| **Struktur**        | `for element in sequenz:`                                                                                                        | `while bedingung:`                                                                                                                |
| **Hauptgefahr**     | Seltener gefährlich.                                                                                                             | **Endlosschleifen!** Wenn die Bedingung nie `False` wird, läuft die Schleife für immer.                                           |
| **Beispiel**        | Alle Namen in einer Namensliste ausgeben.                                                                                        | Ein Menü anzeigen, bis der Benutzer "Beenden" wählt.                                                                              | # 🔄 Break und Continue |

Stell dir vor, du arbeitest eine lange To-Do-Liste ab, eine Aufgabe nach der anderen. Manchmal möchtest du aber nicht die ganze Liste durchgehen. Vielleicht hast du gefunden, was du gesucht hast, und kannst aufhören. Oder vielleicht ist eine Aufgabe gerade nicht relevant und du möchtest sie überspringen und direkt mit der nächsten weitermachen.

Genau für diese Situationen gibt es in der Programmierung die Anweisungen `break` und `continue`. Sie geben dir die Kontrolle darüber, wie eine Schleife (also die "Abarbeitung deiner To-Do-Liste") abläuft.

<br><br><br>

## 🛑 Das `break`-Statement: Der Notausgang aus der Schleife

`break` ist wie ein Not-Aus-Knopf für deine Schleife. Sobald das Programm auf ein `break` trifft, wird die Schleife, in der es sich befindet, **sofort und vollständig beendet**. Es ist egal, ob die Schleifenbedingung eigentlich noch weitere Durchläufe erlauben würde. Das Programm springt dann direkt zu der ersten Codezeile _nach_ der Schleife.

### 🤔 Was macht `break` genau?

- Es beendet die **gesamte** Schleife abrupt.
- Der Code innerhalb der Schleife, der nach dem `break` kommt, wird nicht mehr ausgeführt.
- Alle zukünftigen Durchläufe der Schleife werden ebenfalls übersprungen.
- Die Ausführung des Programms wird nach dem Schleifenblock fortgesetzt.

### 👨‍🏫 Ein anschauliches Beispiel

Stell dir vor, du hast eine Kiste mit nummerierten Bällen und du suchst nach dem Ball mit der Nummer 5. Sobald du ihn gefunden hast, musst du nicht mehr weitersuchen, oder? Du kannst aufhören. Genau das macht `break`.

```python
# Eine Liste von Zahlen, die unsere Kiste mit Bällen darstellt
zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print("Suche nach der Zahl 5...")

# Wir gehen die Liste Zahl für Zahl durch
for zahl in zahlen:
    print(f"Prüfe aktuelle Zahl: {zahl}")

    # Wenn wir die Zahl 5 finden...
    if zahl == 5:
        print("Treffer! Ich habe die 5 gefunden.")
        # ... steigen wir mit 'break' SOFORT aus der Schleife aus.
        break
        # Code hier drunter würde niemals erreicht werden.

# Dieser Code wird ausgeführt, nachdem die Schleife (durch 'break') beendet wurde.
print("Die Suche ist beendet. Das Programm läuft hier weiter.")
```

**Was passiert hier Schritt für Schritt?**

1. Die Schleife startet und prüft die `1`. `1` ist nicht `5`, also geht es weiter.
2. Sie prüft die `2`, `3`, und `4` auf die gleiche Weise.
3. Dann kommt die `5`. Die `if`-Bedingung `zahl == 5` ist wahr.
4. Der Text "Treffer! Ich habe die 5 gefunden." wird ausgegeben.
5. Das Programm trifft auf `break`. **BUMM!** Die `for`-Schleife wird sofort beendet.
6. Die Zahlen `6`, `7`, `8`, `9` und `10` werden **niemals** geprüft.
7. Das Programm springt zur Zeile `print("Die Suche ist beendet...")` nach der Schleife und führt diese aus.

### 💡 Wann solltest du `break` verwenden?

`break` ist extrem nützlich, wenn du eine Bedingung für einen vorzeitigen Abbruch hast.

| Anwendungsfall                | Beschreibung                                                                                                                                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **🔎 Etwas finden**           | Du durchsuchst eine Liste oder eine Datenstruktur nach dem **ersten** Vorkommen eines bestimmten Elements. Sobald du es gefunden hast, ist die weitere Suche überflüssig.                                     |
| **🗣️ Benutzereingaben**       | Du wartest in einer Endlosschleife (`while True`) auf eine Eingabe des Benutzers. Die Schleife wird erst dann mit `break` verlassen, wenn der Benutzer ein bestimmtes Wort (z.B. "exit" oder "quit") eingibt. |
| **🚨 Fehlerbehandlung**       | Wenn innerhalb einer Schleife ein kritischer Fehler auftritt, der eine weitere Verarbeitung unmöglich oder sinnlos macht, kannst du mit `break` aussteigen.                                                   |
| **✅ Validierungs-Schleifen** | Du fragst einen Benutzer so lange nach einer Eingabe, bis sie gültig ist. Sobald eine gültige Eingabe gemacht wird, verlässt du die Schleife mit `break`.                                                     |

<br><br><br>

## ⏩ Das `continue`-Statement: Überspringen und Weitermachen

`continue` ist anders als `break`. Es ist kein Not-Aus-Knopf, sondern eher ein "Überspringen"-Knopf. Wenn das Programm auf `continue` trifft, beendet es **nur den aktuellen Schleifendurchlauf** und springt sofort zum **Beginn des nächsten Durchlaufs**. Die Schleife selbst läuft weiter, sofern ihre Bedingung noch erfüllt ist.

### 🤔 Was macht `continue` genau?

- Es beendet nur den **aktuellen** Durchlauf (die aktuelle Iteration).
- Der restliche Code innerhalb des aktuellen Schleifendurchlaufs wird übersprungen.
- Die Schleife springt zur nächsten Iteration und prüft die Schleifenbedingung erneut (bei `while`-Schleifen) oder nimmt sich das nächste Element (bei `for`-Schleifen).
- Die Schleife als Ganzes wird **nicht** beendet.

### 👨‍🏫 Ein anschauliches Beispiel

Stell dir vor, du hast eine Liste mit Früchten und du sollst nur die reifen Früchte waschen. Die unreifen Früchte (sagen wir, alle die "unreif" im Namen haben) sollst du einfach liegen lassen und mit der nächsten Frucht weitermachen.

```python
# Eine Liste von Früchten, manche sind noch nicht gut.
fruechte = ["Apfel", "Banane (unreif)", "Kirsche", "Mango", "Orange (unreif)"]

print("Wasche nur die reifen Früchte...")

# Wir gehen die Liste Frucht für Frucht durch
for frucht in fruechte:

    # Wenn "unreif" im Namen der Frucht vorkommt...
    if "(unreif)" in frucht:
        print(f"--> {frucht} wird übersprungen.")
        # ...überspringen wir den Rest dieses Durchlaufs mit 'continue'
        # und machen direkt mit der nächsten Frucht weiter.
        continue

    # Dieser Code wird NUR für die reifen Früchte ausgeführt,
    # da er bei unreifen Früchten durch 'continue' übersprungen wird.
    print(f"Wasche {frucht}... 🧼")

print("\nAlle Früchte geprüft!")
```

**Was passiert hier Schritt für Schritt?**

1. Die Schleife startet mit "Apfel". Die `if`-Bedingung ist falsch, also wird "Wasche Apfel... 🧼" ausgegeben.
2. Nächstes Element: "Banane (unreif)". Die `if`-Bedingung `"(unreif)" in frucht` ist wahr.
3. Der Text "--> Banane (unreif) wird übersprungen." wird ausgegeben.
4. Das Programm trifft auf `continue`. **ZACK!** Der Rest des Durchlaufs (also die Zeile `print(f"Wasche {frucht}... 🧼")`) wird übersprungen.
5. Das Programm springt sofort zum Anfang der Schleife und nimmt sich das nächste Element: "Kirsche".
6. Bei "Kirsche" ist die `if`-Bedingung wieder falsch und die Frucht wird gewaschen.
7. Bei "Mango" ebenso.
8. Bei "Orange (unreif)" wird der Wasch-Vorgang wieder mit `continue` übersprungen.
9. Nachdem alle Elemente durchlaufen wurden, endet die Schleife ganz normal.

### 💡 Wann solltest du `continue` verwenden?

`continue` ist perfekt, wenn du bestimmte Elemente oder Fälle innerhalb einer Schleife ignorieren, aber die Schleife trotzdem weiterlaufen lassen möchtest.

| Anwendungsfall            | Beschreibung                                                                                                                                                                                                                                               |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **🗑️ Daten filtern**      | Du gehst eine Liste von Daten durch und möchtest nur die Elemente verarbeiten, die bestimmte Kriterien erfüllen. Alle anderen werden mit `continue` übersprungen (z.B. nur positive Zahlen verarbeiten, alle negativen ignorieren).                        |
| **🚫 Ungültige Einträge** | Du liest Zeilen aus einer Datei. Leere Zeilen oder Zeilen, die mit einem Kommentarzeichen (`#`) beginnen, sollen ignoriert werden. Hierfür ist `continue` ideal.                                                                                           |
| **⚙️ Sonderbehandlung**   | Manchmal braucht ein bestimmtes Element in einer Schleife keine weitere Verarbeitung. Statt einer komplexen `if-else`-Struktur kannst du am Anfang prüfen, ob es sich um diesen Sonderfall handelt, und dann mit `continue` zum nächsten Element springen. |

<br><br><br>

## ⚖️ Der große Unterschied: `break` vs. `continue` im direkten Vergleich

Der Schlüssel zum Verständnis ist, was genau beendet wird: die ganze Schleife oder nur der eine Durchlauf.

| Kriterium           | 🛑 `break` (Der Not-Aus-Knopf)                                                                                                                                        | ⏩ `continue` (Der Überspringen-Knopf)                                                                                        |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| **Wirkung**         | Beendet die **gesamte Schleife** sofort.                                                                                                                              | Beendet nur den **aktuellen Durchlauf** der Schleife.                                                                         |
| **Schleife danach** | Die Schleife wird **nicht** fortgesetzt. Das Programm läuft nach der Schleife weiter.                                                                                 | Die Schleife **wird fortgesetzt** mit dem nächsten Durchlauf (falls die Bedingung noch zutrifft).                             |
| **Analogie**        | Du liest ein Buch. Du findest die Information, die du brauchst, auf Seite 50. Du klappst das Buch zu (`break`) und legst es weg. Du liest nicht weiter bis Seite 300. | Du liest ein Buch. Seite 51 ist eine leere Werbeseite. Du überspringst sie (`continue`) und liest direkt auf Seite 52 weiter. | # 💡 Praktische Anwendungsfälle |

<br><br><br>

## 🛡️ Kontrollfluss bei Eingabeprüfungen

Stell dir vor, dein Programm ist wie ein aufmerksamer Türsteher vor einem Club. Nicht jeder darf einfach so herein. Der Türsteher (dein Programm) muss prüfen, ob ein Gast (die Eingabe des Nutzers) die Regeln erfüllt. Der **Kontrollfluss** ist dabei der genaue Plan, den der Türsteher im Kopf hat. Je nachdem, was der Gast sagt oder zeigt, reagiert der Türsteher anders und lenkt den Gast in eine bestimmte Richtung.

Genau das machen wir in der Programmierung bei der **Eingabeprüfung** (auch Validierung genannt). Wir stellen sicher, dass die Daten, die ein Nutzer eingibt, gültig, sinnvoll und im richtigen Format sind, bevor unser Programm damit weiterarbeitet. Wenn wir das nicht tun, kann es zu Fehlern, Abstürzen oder sogar Sicherheitsproblemen kommen.

### 🤔 ### Warum ist das so wichtig?

Stell dir eine simple Anwendung vor, die das Alter eines Nutzers abfragt, um zu prüfen, ob er volljährig ist.

- **Was, wenn der Nutzer "Hallo" statt einer Zahl eingibt?** Das Programm würde abstürzen, wenn es versucht, mit dem Text "Hallo" zu rechnen.
- **Was, wenn der Nutzer `-10` eingibt?** Ein negatives Alter gibt es nicht. Das ist logisch falsch.
- **Was, wenn der Nutzer `200` eingibt?** Das ist zwar eine Zahl, aber höchstwahrscheinlich eine ungültige Eingabe.

Die Eingabeprüfung fängt all diese Probleme ab und sorgt dafür, dass nur saubere und korrekte Daten verarbeitet werden.

### 🚦 ### Der Ablaufplan (Kontrollfluss) einer typischen Eingabeprüfung

Sehen wir uns den Prozess Schritt für Schritt an, wie ein Programm eine Eingabe (zum Beispiel das Alter) prüfen würde.

1.  **Aufforderung zur Eingabe:** Das Programm bittet den Nutzer, sein Alter einzugeben.
    - `"Bitte gib dein Alter ein:"`

2.  **Einlesen der Eingabe:** Das Programm nimmt die Eingabe des Nutzers entgegen. Wichtig: Die Eingabe ist an dieser Stelle meistens erst einmal nur Text (ein "String"), selbst wenn der Nutzer `18` eingetippt hat.

3.  **Die erste Weiche: Ist es überhaupt eine Zahl?**
    - Das Programm prüft, ob sich der eingegebene Text in eine Zahl umwandeln lässt.
    - **JA:** Super, wir können weitermachen.
    - **NEIN:** (z.B. bei der Eingabe "Hallo"): Das Programm gibt eine Fehlermeldung aus wie `"Bitte gib eine gültige Zahl ein."` und fordert den Nutzer erneut zur Eingabe auf. Hier wird der normale Ablauf unterbrochen und zu Schritt 1 zurückgesprungen.

4.  **Die zweite Weiche: Liegt die Zahl im gültigen Bereich?**
    - Jetzt, wo wir sicher sind, eine Zahl zu haben, prüfen wir die logischen Bedingungen. Nehmen wir an, das Alter muss zwischen 0 und 120 liegen.
    - **Prüfung 1:** Ist das Alter `>= 0`?
    - **Prüfung 2:** Ist das Alter `<= 120`?
    - **BEIDE WAHR:** Perfekt! Die Eingabe ist gültig. Das Programm kann nun mit dem Alter weiterarbeiten (z.B. prüfen, ob es `>= 18` ist).
    - **EINE ODER BEIDE FALSCH:** (z.B. bei der Eingabe `-10` oder `200`): Das Programm gibt eine spezifische Fehlermeldung aus wie `"Das Alter muss zwischen 0 und 120 liegen."` und springt ebenfalls zurück zu Schritt 1.

Dieses ständige Prüfen und Zurückspringen, bis eine korrekte Eingabe erfolgt, wird meist mit einer Schleife realisiert. Die Schleife läuft so lange, bis eine Variable, die wir z.B. `isInputValid` nennen, auf `true` gesetzt wird.

### 📊 ### Beispiel-Tabelle: Kontrollfluss bei der Altersabfrage

| Nutzereingabe | Prüfung 1: Ist es eine Zahl? | Ergebnis | Prüfung 2: Liegt die Zahl im Bereich [0, 120]? | Ergebnis | Endgültiger Programm-Status    |
| :------------ | :--------------------------- | :------- | :--------------------------------------------- | :------- | :----------------------------- |
| `25`          | ✅ Ja                        | OK       | ✅ `25 >= 0` und `25 <= 120`                   | OK       | Eingabe akzeptiert ✅          |
| `-10`         | ✅ Ja                        | OK       | ❌ `-10 >= 0` ist falsch                       | Fehler   | Fehlermeldung, neue Eingabe 🔄 |
| `150`         | ✅ Ja                        | OK       | ❌ `150 <= 120` ist falsch                     | Fehler   | Fehlermeldung, neue Eingabe 🔄 |
| `Hallo`       | ❌ Nein                      | Fehler   | - (wird gar nicht erst geprüft)                | -        | Fehlermeldung, neue Eingabe 🔄 |
| `(leer)`      | ❌ Nein                      | Fehler   | - (wird gar nicht erst geprüft)                | -        | Fehlermeldung, neue Eingabe 🔄 |

Der Kontrollfluss sorgt also wie ein intelligentes Filtersystem dafür, dass nur die "guten" Daten durchkommen und die "schlechten" abgefangen und korrigiert werden, indem der Nutzer zur erneuten Eingabe aufgefordert wird.

<br><br><br>

## 🔄 Steuerung von Programmschleifen anhand von Nutzerinteraktion

Eine **Programmschleife** ist wie ein Roboter, der eine Aufgabe immer und immer wieder ausführt. Aber was, wenn der Roboter nicht von alleine aufhören soll? Was, wenn _du_ als Nutzer entscheiden möchtest, wann der Roboter seine Arbeit beendet? Genau hier kommt die Steuerung durch Nutzerinteraktion ins Spiel.

Anstatt eine Schleife eine feste Anzahl von Malen laufen zu lassen (z.B. "tue das 10 Mal") oder bis eine technische Bedingung erfüllt ist (z.B. "suche, bis die Datei gefunden ist"), lassen wir die Schleife so lange laufen, bis der Nutzer explizit sagt: "Stopp!".

Dies ist die Grundlage für fast alle interaktiven Programme, von einfachen Menüs in der Konsole bis hin zu komplexen Anwendungen mit grafischer Benutzeroberfläche. Das Programm befindet sich in einer "Warteschleife" (oft als "Event Loop" oder "Main Loop" bezeichnet) und wartet auf deine Anweisungen.

### 🤔 ### Warum ist das nützlich?

Stell dir eine Taschenrechner-App vor. Nachdem du eine Berechnung (z.B. 5 + 3) durchgeführt hast, soll das Programm nicht einfach enden. Du möchtest vielleicht direkt danach eine weitere Berechnung durchführen. Das Programm muss also in einer Schleife weiterlaufen und dich nach jeder Berechnung fragen (oder einfach auf eine neue Eingabe warten), was du als Nächstes tun möchtest. Erst wenn du auf einen "Beenden"-Knopf klickst oder "exit" eingibst, wird die Schleife beendet.

### 📜 ### Das klassische Menü-Beispiel

Ein sehr häufiger Anwendungsfall ist ein textbasiertes Menü in einer Konsolenanwendung. Das Programm zeigt dem Nutzer eine Liste von Optionen an und wartet auf seine Wahl.

**So sieht der Ablauf aus:**

1.  **Schleifenstart:** Das Programm startet eine Schleife, die potenziell unendlich läuft (z.B. `while (true)`).
2.  **Menü anzeigen:** Innerhalb der Schleife wird dem Nutzer jedes Mal das Menü angezeigt:
    - `--- HAUPTMENÜ ---`
    - `1. Option A ausführen`
    - `2. Option B ausführen`
    - `3. Hilfe anzeigen`
    - `q. Programm beenden`
    - `Deine Wahl:`
3.  **Auf Eingabe warten:** Das Programm hält an und wartet, bis der Nutzer etwas eingibt und mit Enter bestätigt.
4.  **Eingabe auswerten:** Das Programm nimmt die Eingabe (z.B. `1`, `2`, `3` oder `q`) und entscheidet, was zu tun ist. Dies geschieht meist mit einer `if-else-if`-Kette oder einer `switch`-Anweisung.
    - Wenn der Nutzer `1` eingibt, wird die Funktion für Option A aufgerufen.
    - Wenn der Nutzer `2` eingibt, wird die Funktion für Option B aufgerufen.
    - ... und so weiter.
5.  **Die entscheidende Prüfung:** Es gibt eine spezielle Eingabe, die als "Abbruchbedingung" dient. In unserem Beispiel ist das `q`.
    - Wenn der Nutzer `q` eingibt, führt das Programm einen `break`-Befehl aus. Dieser Befehl bricht die Schleife sofort ab.
    - Wenn der Nutzer etwas anderes als die Abbruchbedingung eingibt, wird die entsprechende Aktion ausgeführt und die Schleife springt zurück zu Schritt 2 und zeigt das Menü erneut an.

### ⚙️ ### Die Logik hinter der Schleifensteuerung

Der Schlüssel ist eine Variable oder eine Bedingung, die vom Nutzer beeinflusst wird.

| Schleifentyp                   | Beschreibung                                                                                                                                                                                                                                                         | Typischer Anwendungsfall                                                                                                                  |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **`while`-Schleife**           | Die Schleife läuft, solange eine Bedingung wahr ist. Die Bedingung wird _vor_ jedem Durchlauf geprüft. `while (choice != "q") { ... }`                                                                                                                               | Gut geeignet, wenn die Abbruchbedingung von Anfang an bekannt sein kann. Zum Beispiel bei einem Spiel: `while (player.isAlive()) { ... }` |
| **`do-while`-Schleife**        | Die Schleife läuft, solange eine Bedingung wahr ist. Der Code in der Schleife wird aber _mindestens einmal_ ausgeführt, da die Bedingung erst _am Ende_ geprüft wird.                                                                                                | **Perfekt für Menüs!** Man möchte das Menü ja mindestens einmal anzeigen, bevor man den Nutzer fragt, ob er aufhören möchte.              |
| **Endlosschleife mit `break`** | Man startet eine absichtliche Endlosschleife (`while (true)`). Innerhalb der Schleife fragt man den Nutzer nach seiner Eingabe und prüft diese. Wenn die Eingabe der Abbruchbedingung entspricht (z.B. `if (choice == "q")`), verlässt man die Schleife mit `break`. | Sehr flexibel und leicht zu lesen. Man sieht sofort, dass die Schleife nur durch eine Nutzeraktion im Inneren beendet werden kann.        |

Durch diese Technik gibst du dem Nutzer die volle Kontrolle über den Programmfluss. Das Programm wird zu einem interaktiven Werkzeug, das auf Befehle reagiert, anstatt nur stur einen vordefinierten Weg von Anfang bis Ende abzuarbeiten.
