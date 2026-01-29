# 🐍 Einführung in die Python-Syntax und Operatoren

Grundlegende Syntax-Elemente

- Aufbau einer Python-Codezeile (Einrückung und Zeilenenden)
- Kommentare und ihr Zweck

Arbeiten mit Variablen und Datentypen

- Deklaration und Benennung von Variablen
- Umgang mit Integer, Float, String und Boolean

Grundlegende Operatoren

- Mathematische Operatoren (Addition, Subtraktion, Multiplikation, Division)
- Zuweisungsoperatoren

Ein- und Ausgabe

- Einfache Konsolenausgabe mit print()
- Benutzereingabe mit input()

<br><br><br>

# 🐍 Grundlegende Syntax-Elemente

- Denk an die Syntax einer Programmiersprache wie an die Grammatik einer menschlichen Sprache.
- Sie sind die Regeln, die definieren, wie du "Sätze" (Anweisungen) bilden musst, damit der Computer dich versteht.
- Wenn du die Grammatik nicht beachtest, wird dein Gesprächspartner dich nicht verstehen – und beim Programmieren ist es genau dasselbe.
- Python ist bekannt für seine sehr klare und lesbare Syntax, was es zu einer großartigen Sprache für Anfänger macht.

<br><br><br>

## 📏 Aufbau einer Python-Codezeile

- Jede Zeile in deinem Python-Code ist `eine Anweisung` oder Teil einer Anweisung.

```python
print("Hallo, Welt!")  # Dies ist eine einzelne Anweisung
alter = 5                   # Eine weitere Anweisung
benutzername = "Alice"        # Noch eine Anweisung
```

- Im Gegensatz zu vielen anderen Sprachen, die geschweifte Klammern `{}` oder Schlüsselwörter wie `begin` und `end` verwenden, um Codeblöcke zu definieren, verwendet Python etwas viel Visuelleres:
  - Einrückung und Zeilenenden.

### ➡️ Einrückung: Das Herz von Python

- Einrückung dient nicht nur dazu, den Code schöner aussehen zu lassen – sie ist ein fundamentaler Teil von Pythons Syntax!
- Sie bestimmt, welche Zeilen zusammengehören und einen Block bilden.

**Was ist ein Codeblock?**

- Ein Codeblock ist eine Gruppe von Anweisungen, die zusammen als Einheit ausgeführt werden.
- Zum Beispiel Code innerhalb einer `if`-Bedingung, einer `for`-Schleife oder einer Funktionsdefinition.

**Die Regel:**

- Alle Zeilen, die zum selben Codeblock gehören, müssen exakt gleich weit eingerückt sein.
- Der offizielle und am weitesten verbreitete Standard (genannt PEP 8) empfiehlt die Verwendung von **vier Leerzeichen** pro Einrückungsebene.

**Korrekter Code mit Einrückung:**

```python
alter = 20

# Der folgende Block wird NUR ausgeführt, wenn 'alter' größer oder gleich 18 ist.
# Die Einrückung mit vier Leerzeichen zeigt dies an.
if alter >= 18:
    print("Du bist volljährig.")  # Diese Zeile gehört zum if-Block
    print("Du darfst wählen.")          # Diese Zeile gehört auch zum if-Block

# Diese Zeile ist nicht mehr eingerückt und gehört daher nicht mehr zum if-Block.
# Sie wird immer ausgeführt.
print("Das Programm ist beendet.")
```

- In diesem Beispiel sehen wir deutlich: die beiden `print()`-Anweisungen sind eingerückt und bilden den Codeblock, der ausgeführt wird, wenn die `if`-Bedingung wahr ist.

**Falscher Code ohne oder mit falscher Einrückung:**

- Wenn du die Einrückung vergisst, meldet Python einen Fehler namens `IndentationError`.
- Dies ist einer der häufigsten Fehler für Anfänger.

```python
alter = 20

if alter >= 18:
print("Du bist volljährig.") # FEHLER! Diese Zeile muss eingerückt sein.
```

- Hier weiß der Computer nicht, ob die `print`-Zeile zur `if`-Bedingung gehört oder nicht.
- Die Einrückung sorgt für diese Klarheit.

### 🔚 Zeilenenden: Wann eine Anweisung endet

- In vielen Programmiersprachen (wie Java oder C++) musst du das Ende jeder Anweisung mit einem Semikolon `;` markieren.
- Python ist viel einfacher und lesbarer.

**Die Regel:**

- In Python markiert das Ende einer Zeile normalerweise auch das Ende einer Anweisung.
- Du schreibst eine Anweisung pro Zeile.

```python
name = "Anna"         # Erste Anweisung
alter = 25              # Zweite Anweisung
print(name, alter)      # Dritte Anweisung
```

**Was, wenn eine Anweisung zu lang für eine Zeile ist?**

- Manchmal hast du sehr lange Codezeilen, die unübersichtlich werden.
- Es gibt zwei elegante Möglichkeiten, eine Anweisung auf mehrere Zeilen aufzuteilen:

1.  **Impliziter Zeilenumbruch (bevorzugt):** Wenn deine Anweisung innerhalb von runden Klammern `()`, eckigen Klammern `[]` oder geschweiften Klammern `{}` steht, kannst du die Zeile einfach nach einem Komma umbrechen. Python weiß, dass die Anweisung noch nicht zu Ende ist.

    ```python
    # Beispiel mit einer langen Liste in eckigen Klammern []
    meine_freunde = [
        "Max Mustermann",
        "Erika Mustermann",
        "John Doe",
        "Jane Doe"
    ]

    # Beispiel mit einem langen Funktionsaufruf in runden Klammern ()
    ergebnis = meine_lange_funktion(
        argument1,
        argument2,
        argument3
    )
    ```

2.  **Expliziter Zeilenumbruch (selten verwendet):** Du kannst einen Backslash `\` am Ende einer Zeile verwenden, um Python mitzuteilen: "Achtung, diese Anweisung geht in der nächsten Zeile weiter."

    ```python
    # Nicht so lesbar, funktioniert aber
    x = 100 + 200 + 300 + \
        400 + 500
    ```

<br><br><br>

## 📝 Kommentare und ihr Zweck

- Ein Kommentar ist Text in deinem Quellcode, der vom Python-Interpreter völlig ignoriert wird.
- Er ist also nicht für den Computer, sondern für Menschen – für dich selbst in der Zukunft oder andere Entwickler, die deinen Code lesen.

- Gute Kommentare sind wie Notizen oder Wegweiser in deinem Code.
- Sie machen ihn verständlicher und wartbarer.
- Es gibt hauptsächlich drei Gründe, warum du Kommentare verwenden solltest:

1.  **Code erklären:** Um komplexe oder nicht sofort offensichtliche Teile deines Codes zu beschreiben. Du erklärst _warum_ du etwas auf eine bestimmte Weise gemacht hast, nicht _was_ der Code tut (das sollte aus dem Code selbst klar sein).
2.  **Notizen hinterlassen:** Zum Markieren von "To-Do"-Einträgen oder Erinnerungen für zukünftige Verbesserungen.
3.  **Code temporär deaktivieren:** Um eine oder mehrere Zeilen "auszukommentieren", damit sie nicht ausgeführt werden. Sehr nützlich zum Testen oder Debuggen.

### ﹟ Einzeilige Kommentare

- Ein einzeiliger Kommentar beginnt mit einem Rautezeichen (`#`).
- Alles nach dem `#` in dieser Zeile wird vom Interpreter ignoriert.

**Beispiel 1: Eigenständige Kommentarzeile**

```python
# Dies ist ein Kommentar. Er erklärt, was die nächste Zeile macht.
# Hier berechnen wir 19% Umsatzsteuer.
preis_netto = 100
steuersatz = 0.19
preis_brutto = preis_netto * (1 + steuersatz)
```

**Beispiel 2: Inline-Kommentar am Ende einer Codezeile**

```python
x = 5  # Setze die Startvariable x auf 5
```

### """ Mehrzeilige Kommentare (Docstrings) """

- Offiziell hat Python keine spezielle Syntax für mehrzeilige Kommentare wie andere Sprachen.
- Stattdessen wird ein kleiner Trick verwendet: du verwendest mehrzeilige Strings.
- Diese beginnen und enden mit drei aufeinanderfolgenden Anführungszeichen `"""` oder drei Apostrophen `'''`.
- Alles dazwischen wird als ein einzelner String behandelt.
- Wenn du den String keiner Variable zuweist, ignoriert Python ihn einfach – so funktioniert er wie ein mehrzeiliger Kommentar.

```python
"""
Dies ist ein mehrzeiliger Kommentar.
Er kann beliebig viele Zeilen umfassen
und wird oft verwendet, um größere Abschnitte zu erklären.
"""
x = 10
y = 20
```

- Diese Art von mehrzeiligem String hat eine sehr besondere und wichtige Funktion: als **Docstrings**.
- Ein Docstring ist ein solcher Block direkt am Anfang einer Funktion, Klasse oder eines Moduls.
- Er dient als offizielle Dokumentation für diesen Codeblock.
- Spezielle Werkzeuge können diese Docstrings automatisch lesen und Dokumentation für dein Programm generieren.

**Beispiel eines Docstrings in einer Funktion:**

```python
def addiere(a, b):
    """
    Diese Funktion addiert zwei Zahlen und gibt das Ergebnis zurück.

    Args:
        a (int): Der erste Summand.
        b (int): Der zweite Summand.

    Returns:
        int: Die Summe von a und b.
    """
    return a + b
```

### Nützliche Anwendungen von Kommentaren

Hier ist eine Tabelle, die die Verwendung von Kommentaren zusammenfasst:

| Art des Kommentars       | Wann zu verwenden?                                                                        | Beispiel                                                              |
| :----------------------- | :---------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- | ------------------------------------------ |
| **Code erklären**        | Wenn die Logik komplex ist oder der Grund für eine Entscheidung nicht klar ist.           | `radius = durchmesser / 2 # Formel zur Berechnung des Radius`         |
| **Notiz hinterlassen**   | Um darauf hinzuweisen, dass noch etwas getan werden muss.                                 | `# TODO: Fehlerbehandlung für negative Zahlen hinzufügen.`            |
| **Code auskommentieren** | Um Code während des Debuggens oder Testens temporär zu deaktivieren, ohne ihn zu löschen. | `# print("Debug-Wert:", alter)` <br> `print("Programm läuft weiter")` | # 📦 Arbeiten mit Variablen und Datentypen |

<br><br><br>

## 🏷️ Deklaration und Benennung von Variablen

- Denk an eine Variable wie an eine Box oder einen beschrifteten Container.
- Du kannst Informationen in diese Box legen, um sie später zu finden und zu verwenden.
- Der Variablenname ist das Etikett auf der Box, damit du weißt, was darin ist.
- Wir brauchen Variablen, um uns Dinge zu merken, während ein Programm läuft, zum Beispiel den Namen eines Benutzers, ein Alter oder das Ergebnis einer Berechnung.

### ✏️ Was ist Deklaration?

- Deklaration ist der Moment, in dem du dem Computer sagst: "Hey, ich brauche eine neue Box! Und sie soll diesen Namen haben."
- Du erstellst also einen leeren Container.

- In vielen modernen Programmiersprachen (wie Python oder JavaScript) geschehen Deklaration und Initialisierung oft in einem einzigen Schritt.

**Beispiel:**

```python
# Hier deklarieren wir die Variable 'benutzername' und weisen ihr sofort einen Wert zu.
benutzername = "MaxMustermann"
```

- In diesem Beispiel wird die Variable `benutzername` erstellt (deklariert) und ihr wird sofort der Wert `"MaxMustermann"` zugewiesen.
- Die Box mit dem Etikett `benutzername` ist jetzt nicht mehr leer, sondern enthält diesen Text.

### ✨ Was ist Initialisierung?

- Initialisierung ist das erste Mal, dass du etwas in deine Box legst.
- Eine Variable zu deklarieren, ohne ihr einen Wert zu geben, ist wie eine leere Box hinzustellen.
- Du kannst damit nicht wirklich viel anfangen.
- Erst wenn du einen Wert hineinlegst, wird sie nützlich.

**Beispiel:**

```python
# Deklaration und Initialisierung in einem Schritt
alter = 25

# Du kannst auch erst deklarieren (in manchen Sprachen) und dann initialisieren
# (In Python ist das unüblich, aber zur Veranschaulichung)
punktzahl = None # Eine Art "leerer" Platzhalter
punktzahl = 100  # Jetzt wird der erste Wert zugewiesen (Initialisierung)
```

- Der große Vorteil von Variablen ist, dass sich ihr Inhalt ändern kann.
- Du kannst den Wert jederzeit ersetzen.

**Beispiel für die Änderung eines Wertes:**

```python
kontostand = 500
print(kontostand) # Ausgabe: 500

# Du hebst Geld ab
kontostand = kontostand - 50
print(kontostand) # Ausgabe: 450
```

### 📜 Was sind die Regeln und Konventionen für die Benennung?

- Um deinen Code für dich selbst und andere leicht lesbar zu machen, gibt es feste Regeln und empfohlene Stilkonventionen für die Benennung von Variablen.

**Strikte Regeln (Müssen befolgt werden):**

1.  **Keine Zahl am Anfang:** Ein Variablenname kann nicht mit einer Zahl beginnen (`1_platz` ist falsch, `platz_1` ist richtig).
2.  **Keine Leerzeichen:** `mein name` ist ungültig. Verwende stattdessen einen Unterstrich (`mein_name`) oder schreibe die Wörter zusammen (`meinName`).
3.  **Keine Sonderzeichen:** Abgesehen vom Unterstrich (`_`) sind die meisten Sonderzeichen wie `!`, `?`, `-`, `+`, `%` verboten.
4.  **Keine reservierten Schlüsselwörter:** Jede Programmiersprache hat Wörter mit fester Bedeutung (wie `if`, `for`, `while`, `class`). Diese kannst du nicht als Variablennamen verwenden.

**Konventionen (Sollten für guten Stil befolgt werden):**

1.  **Beschreibende Namen:** Wähle Namen, die den Inhalt der Variable beschreiben. `benutzer_alter` oder `alter_des_benutzers` ist viel besser als `x` oder `a`.
2.  **Konsistenter Stil:** Entscheide dich für einen Stil und bleibe dabei. Die beiden gängigsten sind:

| Stil           | Beschreibung                                                                                                                    | Beispiel                            |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------- |
| **snake_case** | Alle Wörter sind kleingeschrieben und durch einen Unterstrich `_` getrennt. Weit verbreitet in Python.                          | `erster_benutzername`, `max_anzahl` |
| **camelCase**  | Das erste Wort beginnt klein. Jedes nachfolgende Wort beginnt mit einem Großbuchstaben. Weit verbreitet in JavaScript und Java. | `ersterBenutzername`, `maxAnzahl`   |

<br><br><br>

## 🔬 Umgang mit den Datentypen Integer, Float, String und Boolean in Python

- Ein Datentyp bestimmt, welche Art von Daten eine Variable speichern kann.
- Das ist wichtig, weil der Computer wissen muss, ob er rechnen, Text anzeigen oder eine Ja/Nein-Entscheidung treffen soll.
- Stell dir vor, du hast verschiedene Boxen: eine für Spielzeugautos (Zahlen), eine für Bücher (Texte) und eine für eine Glühbirne, die an oder aus sein kann (Ja/Nein).

### 🔢 Integer (Ganze Zahlen)

- Ein Integer (oft abgekürzt als `int`) ist eine ganze Zahl ohne Dezimalstelle. Diese können positiv, negativ oder null sein.
  - **Beschreibung:** Ganze Zahlen.
  - **Beispiele:** `-10`, `-1`, `0`, `5`, `12345`.
  - **Wofür ist das?** Dinge zählen, Alter, Anzahl der Artikel im Warenkorb, Punkte in einem Spiel. Immer wenn es keine "Hälften" gibt.

**Codebeispiel:**

```python
anzahl_studenten = 30
temperatur_in_celsius = -5
stockwerk = 7
```

Du kannst alle grundlegenden mathematischen Operationen mit Integers durchführen:

```python
x = 10
y = 5

summe = x + y         # Ergebnis: 15
differenz = x - y   # Ergebnis: 5
produkt = x * y      # Ergebnis: 50
quotient = x / y     # Ergebnis: 2.0 (beachte: Division kann zu einem Float führen!)
```

### 🌡️ Float (Dezimalzahlen)

- Ein Float ist eine Zahl mit Dezimalstellen.
- Der Name "Fließkomma" kommt daher, dass der Dezimalpunkt an verschiedene Stellen "fließt", um Präzision darzustellen.

- **Beschreibung:** Zahlen mit Dezimalstellen.
- **Beispiele:** `-3.14`, `0.5`, `1.0`, `99.99`, `2.71828`.
- **Wofür ist das?** Alles, was präzise Messungen erfordert: Preise (19,99 €), Körpergröße (1,82 Meter), wissenschaftliche Daten, Prozentsätze.

**Codebeispiel:**

```python
artikelpreis = 24.95
pi_approx = 3.14159
koerpertemperatur = 36.6
```

- Floats werden wie Integers für mathematische Berechnungen verwendet, aber mit höherer Präzision.

### 📝 String (Zeichenketten)

- Ein String ist eine Folge von Zeichen. Es kann ein einzelner Buchstabe, ein Wort, ein Satz oder sogar ein ganzer Text sein. Strings stehen immer in Anführungszeichen (entweder `"` oder `'`).
  - **Beschreibung:** Text.
  - **Beispiele:** `"Hallo Welt"`, `'Max Mustermann'`, `"Ich bin 25 Jahre alt."`, `"12345"`.
  - **Wichtig:** Der String `"123"` ist nicht dasselbe wie die Zahl `123`. Mit dem String kannst du nicht rechnen, du kannst ihn nur als Text behandeln.
  - **Wofür ist das?** Für Benutzernamen, Passwörter, Adressen, Nachrichten, Produktbeschreibungen – im Grunde alle textbasierten Informationen.

**Codebeispiel:**

```python
vorname = "Anna"
nachname = 'Schmidt'
begruessung = "Willkommen auf unserer Website!"
```

- Eine der häufigsten String-Operationen ist die **Verkettung**, das Zusammenfügen mehrerer Strings.

```python
vollstaendiger_name = vorname + " " + nachname  # Ergebnis: "Anna Schmidt"
print(vollstaendiger_name)
```

### ✅ Boolean (Wahrheitswerte)

- Ein Boolean (oft abgekürzt als `bool`) ist der einfachste Datentyp. Er kann nur zwei mögliche Werte haben: `True` oder `False`.

- **Beschreibung:** Ein Wahrheitswert – nur ja oder nein (wahr oder falsch).
- **Mögliche Werte:** `True`, `False`.
- **Wofür ist das?** Booleans sind die Grundlage für Entscheidungen und Logik in Programmen. Sie beantworten Ja/Nein-Fragen: Ist der Benutzer eingeloggt? Ist das Licht an? Hat der Spieler noch Leben?

**Codebeispiel:**

```python
ist_eingeloggt = True
hat_bezahlt = False
ist_volljaehrig = True
```

- Booleans sind essenziell für Kontrollstrukturen wie `if`-Anweisungen und ermöglichen es einem Programm, abhängig von Bedingungen verschiedene Wege zu gehen.

```python
if ist_eingeloggt == True:
    print("Willkommen zurück!")
else:
    print("Bitte logge dich ein.")
```

# ⚙️ Grundlegende Operatoren

- Stell dir vor, du arbeitest mit Zahlen oder anderen Daten in einem Programm.
- Du möchtest etwas mit diesen Daten _tun_ – sie addieren, ändern, irgendwo speichern.
- Genau dafür sind Operatoren da.
- Operatoren sind spezielle Symbole, die dem Computer sagen, welche Aktion er ausführen soll.
- Sie sind wie die Verben beim Programmieren.
- Sie nehmen einen oder mehrere Werte ("Operanden") und führen eine Operation mit ihnen durch.

<br><br><br>

## ➕➖✖️➗ Mathematische Operatoren

- Diese Operatoren kennst du bereits aus dem Matheunterricht.
- Sie sind die wesentlichen Werkzeuge für alle Berechnungen in fast jeder Programmiersprache.
- Mit ihnen führst du die vier Grundrechenarten durch.

<br><br><br>

### 1. ➕ Addition

- Der Additionsoperator ist das Pluszeichen (`+`).
- Er wird verwendet, um zwei Zahlen zusammenzuaddieren.
- Das Ergebnis ist die Summe der beiden Zahlen.

- Stell dir vor, du hast zwei Variablen, `apfel` und `birne`, die die Anzahl der Früchte speichern.

```python
apfel = 5
birne = 3
gesamtObst = apfel + birne  # Das Ergebnis ist 8
```

Hier nimmt der `+`-Operator den Wert von `apfel` (5) und `birne` (3), addiert sie zusammen, und das Ergebnis (8) wird in der neuen Variable `gesamtObst` gespeichert.

<br><br><br>

### 2. ➖ Subtraktion

- Der Subtraktionsoperator ist das Minuszeichen (`-`).
- Er wird verwendet, um eine Zahl von einer anderen zu subtrahieren.

- Nehmen wir an, du hast einen Kontostand und hebst etwas Geld ab.

```python
kontostand = 100
abhebung = 20
neuerStand = kontostand - abhebung  # Das Ergebnis ist 80
```

Der Computer nimmt den Wert von `kontostand` (100), subtrahiert `abhebung` (20), und speichert das Ergebnis (80) in `neuerStand`.

<br><br><br>

### ✖️ Multiplikation

Für die Multiplikation verwenden wir das Sternchen (`*`), nicht das `x` oder den Punkt wie in der Schule. Dieser Operator multipliziert zwei Zahlen miteinander.

Angenommen, du kaufst mehrere gleiche Produkte zu einem festen Preis.

```python
anzahlProdukte = 4
preisProProdukt = 10
gesamtpreis = anzahlProdukte * preisProProdukt  # Das Ergebnis ist 40
```

- Hier wird `anzahlProdukte` (4) mit `preisProProdukt` (10) multipliziert.
- Das Ergebnis (40) wird in `gesamtpreis` gespeichert.

<br><br><br>

### ➗ Division

- Der Divisionsoperator ist der Schrägstrich (`/`).
- Er teilt eine Zahl durch eine andere.
- Angenommen, du möchtest eine Rechnung fair auf mehrere Freunde aufteilen.

```python
rechnungsbetrag = 50
anzahlFreunde = 5
anteilProPerson = rechnungsbetrag / anzahlFreunde  # Das Ergebnis ist 10
```

- Der `rechnungsbetrag` (50) wird durch die `anzahlFreunde` (5) geteilt, und das Ergebnis (10) wird in der Variable `anteilProPerson` gespeichert.

- Hier ist eine Zusammenfassungstabelle:

| Operator | Name           | Beschreibung                             | Beispiel | Ergebnis |
| :------- | :------------- | :--------------------------------------- | :------- | :------- |
| `+`      | Addition       | Addiert zwei Werte.                      | `12 + 3` | `15`     |
| `-`      | Subtraktion    | Subtrahiert den rechten Wert vom linken. | `12 - 3` | `9`      |
| `*`      | Multiplikation | Multipliziert zwei Werte.                | `12 * 3` | `36`     |
| `/`      | Division       | Teilt den linken Wert durch den rechten. | `12 / 3` | `4`      |

## Reihenfolge der mathematischen Operationen

- Genau wie in der normalen Mathematik gibt es eine Reihenfolge, in der Operationen durchgeführt werden. Dies wird "Operatorrangfolge" oder "Operator Precedence" genannt.
- Die Reihenfolge ist:
  1. Klammern `()`
  2. Multiplikation `*` und Division `/` (von links nach rechts)
  3. Addition `+` und Subtraktion `-` (von links nach rechts)
- Zum Beispiel:

```python
ergebnis = 10 + 2 * 3  # Multiplikation zuerst: 2 * 3 = 6, dann Addition: 10 + 6 = 16

print(ergebnis)  # Ausgabe: 16

# Verwendung von Klammern, um die Reihenfolge zu ändern
ergebnis_mit_klammern = (10 + 2) * 3  # Klammern zuerst: 10 + 2 = 12, dann Multiplikation: 12 * 3 = 36
print(ergebnis_mit_klammern)  # Ausgabe: 36
```

- Verwende das Akronym `KPAPS` (Klammern, Potenzen, Multiplikation und Division, Addition und Subtraktion), um dir die Reihenfolge der Operationen zu merken.

<br><br><br>

## ✅ Zuweisungsoperatoren

- Zuweisungsoperatoren sind grundlegend wichtig.
- Ihre Hauptaufgabe ist es, einer Variable einen Wert zuzuweisen.
- Denk an sie wie an einen Befehl, der sagt: "Nimm diesen Wert und leg ihn in diese Box (Variable)!"

<br><br><br>

### 🟰 Der einfache Zuweisungsoperator (`=`)

- Das Gleichheitszeichen (`=`) ist der grundlegendste Zuweisungsoperator. **Wichtig:** Beim Programmieren bedeutet es **nicht** "ist gleich" wie in der Mathematik.
- Es bedeutet "wird zugewiesen" oder "speichere den Wert rechts in der Variable links".
- Die Auswertung erfolgt immer von rechts nach links.

**Beispiel 1: Ein einfacher Wert**

```python
alter = 25  # Der Wert 25 wird der Box 'alter' zugewiesen.
```

- Hier wird die Zahl `25` genommen und in der Variable `alter` gespeichert.

**Beispiel 2: Das Ergebnis einer Berechnung**

- Du kannst auch direkt das Ergebnis einer mathematischen Operation einer Variable zuweisen.

```python
breite = 10
hoehe = 5
flaeche = breite * hoehe  # Zuerst wird 10 * 5 berechnet (Ergebnis: 50), DANN wird 50 zu 'flaeche' zugewiesen.
```

- Also berechnet der Computer zuerst die rechte Seite (`breite * hoehe`) und speichert dann das Endergebnis in der Variable auf der linken Seite (`flaeche`).

<br><br><br>

### ➕🟰 Kombinierte Zuweisungsoperatoren

- Oft möchtest du den aktuellen Wert einer Variable ändern, indem du eine Berechnung damit durchführst und dann das Ergebnis wieder in derselben Variable speicherst.

- Stell dir vor, du hast eine Variable `punkte` mit dem Wert 100.
- Jetzt verdienst du 10 Punkte. Der lange Weg wäre:

```python
punkte = 100
punkte = punkte + 10  # Nimm den aktuellen Wert von 'punkte' (100), addiere 10 (erhalte 110), und speichere das Ergebnis in 'punkte'.
```

- Nach dieser Zeile hat `punkte` den Wert `110`.

- Da dies so häufig vorkommt, gibt es Abkürzungen: kombinierte Zuweisungsoperatoren.
- Sie kombinieren eine mathematische Operation mit der Zuweisung.

Der obige Code kann verkürzt werden zu:

```python
punkte = 100
punkte += 10  # Das ist genau dasselbe wie 'punkte = punkte + 10'
```

- Dies funktioniert für alle grundlegenden arithmetischen Operationen.
- Hier ist eine Tabelle:

| Operator | Beispiel | Langform    | Beschreibung                                                 |
| :------- | :------- | :---------- | :----------------------------------------------------------- |
| `+=`     | `x += y` | `x = x + y` | Addiert `y` zu `x` und speichert es zurück in `x`.           |
| `-=`     | `x -= y` | `x = x - y` | Subtrahiert `y` von `x` und speichert das Ergebnis in `x`.   |
| `*=`     | `x *= y` | `x = x * y` | Multipliziert `x` mit `y` und speichert das Ergebnis in `x`. |
| `/=`     | `x /= y` | `x = x / y` | Teilt `x` durch `y` und speichert das Ergebnis in `x`.       |

- Diese kombinierten Operatoren machen deinen Code kürzer, sauberer und oft leichter lesbar, sobald du dich daran gewöhnt hast.

# ↔️ Ein- und Ausgabe

<br><br><br>

## 🖥️ Einfache Konsolenausgabe mit `print()`

### 📝 Was ist die `print()`-Funktion?

- Stell dir vor, du schreibst ein Programm und möchtest, dass der Computer dir eine Nachricht, ein Ergebnis oder einfach einen Status zeigt.
- Die `print()`-Funktion ist dein Werkzeug dafür.
- Sie ist das "Sprachrohr" deines Programms.
- Alles, was du in die Klammern von `print()` schreibst, wird auf der Konsole ausgegeben (dem Ausgabefenster deines Code-Editors oder dem Terminal).

**Beispiel mit Text:**
Wenn du Text ausgeben möchtest, musst du ihn in Anführungszeichen setzen. Diese Anführungszeichen sagen Python: "Hey, das ist einfacher Text, ein sogenannter String." Du kannst einfache (`'`) oder doppelte (`"`) Anführungszeichen verwenden, aber mische sie nicht.

```python
# Beispiel mit doppelten Anführungszeichen
print("Hallo Welt!")

# Beispiel mit einfachen Anführungszeichen
print('Das ist ein einfacher Satz.')
```

**Ausgabe:**

```
Hallo Welt!
Das ist ein einfacher Satz.
```

### 🧐 Was kann ich ausgeben?

Du bist nicht auf einfachen Text beschränkt. `print()` ist sehr vielseitig.

#### Texte (Strings)

- Wie oben gezeigt, kannst du jeden Text ausgeben.

#### Zahlen

Du kannst auch Zahlen direkt ausgeben. Beachte, dass Zahlen **keine** Anführungszeichen benötigen.

```python
print(123)       # Ein Integer
print(3.14159)   # Eine Gleitkommazahl
print(-50)       # Eine negative Zahl
```

**Ausgabe:**

```
123
3.14159
-50
```

#### Variablen

- Eine der wichtigsten Verwendungen ist das Ausgeben des Inhalts von Variablen.
- Eine Variable ist wie ein Container oder eine Box mit einem Namen, in der du Daten speicherst. `print()` schaut in die Box und zeigt dir, was drin ist.

```python
# Lass uns einige Variablen erstellen
name = "Maria"
alter = 28
groesse_in_metern = 1.72

# Jetzt geben wir den Inhalt der Variablen aus
print(name)
print(alter)
print(groesse_in_metern)
```

**Ausgabe:**

```
Maria
28
1.72
```

#### Mehr als eine Sache auf einmal

- Du kannst mehrere Dinge auf einmal an `print()` übergeben.
- Trenne sie einfach mit einem Komma `,`. Python fügt dann automatisch ein Leerzeichen zwischen jedem Element ein.

```python
name = "Alex"
alter = 35

print("Der Name ist:", name)
print(name, "ist", alter, "Jahre alt.")
```

**Ausgabe:**

```
Der Name ist: Alex
Alex ist 35 Jahre alt.
```

### 🛠️ Erweiterte Anpassung von `print()`

- Du kannst das Verhalten von `print()` mit speziellen "Argumenten" steuern.
- Die beiden wichtigsten sind `sep` (Separator) und `end` (Endung).

#### Ändern des Separators mit `sep`

- Standardmäßig trennt `print()` mehrere Elemente mit einem Leerzeichen.
- Mit `sep` (kurz für Separator) kannst du deinen eigenen Separator angeben.

| Code                                            | Erklärung                                                               | Ausgabe                  |
| :---------------------------------------------- | :---------------------------------------------------------------------- | :----------------------- |
| `print("Apfel", "Banane", "Kirsche")`           | **Standard:** Das Komma erzeugt ein Leerzeichen als Separator.          | `Apfel Banane Kirsche`   |
| `print("Apfel", "Banane", "Kirsche", sep=", ")` | **Angepasst:** Ein Komma plus Leerzeichen wird als Separator verwendet. | `Apfel, Banane, Kirsche` |
| `print("Tag", "Monat", "Jahr", sep="-")`        | **Angepasst:** Ein Bindestrich wird als Separator verwendet.            | `Tag-Monat-Jahr`         |
| `print("Brot", "Butter", sep="")`               | **Angepasst:** Kein Separator, Wörter werden zusammengefügt.            | `BrotButter`             |

#### Ändern des Endes mit `end`

- Normalerweise fügt `print()` am Ende jeder Ausgabe eine neue Zeile hinzu.
- Das bedeutet, dass das nächste `print()` eine neue Zeile beginnt.
- Dies wird durch den unsichtbaren Endcode `\n` (Zeilenumbruchzeichen) gesteuert.
- Das `end`-Argument lässt dich dieses Verhalten ändern.

| Code                                                                                        | Erklärung                                                                  | Ausgabe                                                     |
| :------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------- | :---------------------------------------------------------- |
| `print("Erste Zeile")`<br>`print("Zweite Zeile")`                                           | **Standard:** `end="\n"` standardmäßig. Neue Zeile nach erstem Print.      | `Erste Zeile`<br>`Zweite Zeile`                             |
| `print("Keine neue Zeile hier... ", end="")`<br>`print("...weiter in der gleichen Zeile.")` | **Angepasst:** `end=""` bedeutet keine neue Zeile nach erstem Print.       | `Keine neue Zeile hier... ...weiter in der gleichen Zeile.` |
| `print("Ein Wort", end=" --- ")`<br>`print("Ein anderes Wort")`                             | **Angepasst:** Statt einer neuen Zeile werden drei Bindestriche eingefügt. | `Ein Wort --- Ein anderes Wort`                             |

#### Formatierung mit f-Strings (Python 3.6+)

- f-Strings (formatierte String-Literale) sind eine mächtige Möglichkeit, Strings zu erstellen, die Variablenwerte direkt im Text enthalten.
- Um einen f-String zu erstellen, setze den Buchstaben `f` oder `F` vor den String und füge Variablen in geschweifte Klammern `{}` ein.

```python
name = "Sophie"
alter = 30
print(f"{name} ist {alter} Jahre alt.")
```

**Ausgabe:**

```text
Sophie ist 30 Jahre alt.
```

<br><br><br>

## ⌨️ Benutzereingabe mit `input()`

### ❓ Was ist die `input()`-Funktion?

- Während `print()` dazu dient, dass dein Programm "spricht", dient `input()` dazu, dass es "zuhört".
- Die `input()`-Funktion lässt dein Programm pausieren und fordert den Benutzer auf, etwas über die Tastatur einzutippen.
- Das Programm wartet geduldig, bis der Benutzer etwas eingegeben und `Enter` gedrückt hat.

### 📥 Wie erfasse ich die Eingabe?

- Die Eingabe des Benutzers würde einfach verschwinden, wenn du sie nicht in einer Variable speicherst.
- Die `input()`-Funktion "gibt" den eingegebenen Text "zurück" und du fängst ihn mit einer Variable auf.

```python
# Das Programm fragt nach dem Namen des Benutzers und speichert die Eingabe in der Variable 'benutzername'
benutzername = input("Bitte gib deinen Namen ein: ")

# Jetzt können wir mit der Eingabe arbeiten
print("Hallo,", benutzername, "! Schön, dich kennenzulernen.")
```

Wenn du diesen Code ausführst, passiert Folgendes:

1. Der Text "Bitte gib deinen Namen ein: " erscheint auf der Konsole.
2. Ein blinkender Cursor erscheint danach. Das Programm wartet.
3. Du tippst zum Beispiel "Lisa" und drückst Enter.
4. Der Text "Lisa" wird in der Variable `benutzername` gespeichert.
5. Das Programm fährt fort und gibt aus: `Hallo, Lisa ! Schön, dich kennenzulernen.`

Der Text innerhalb von `input()` ist für Python optional, aber sehr empfehlenswert. Er wird "Prompt" genannt. Er sagt dem Benutzer, was zu tun ist. Ohne ihn würde der Benutzer nur einen blinkenden Cursor sehen und nicht wissen, was erwartet wird.

### ⚠️ Das Wichtigste: Der Datentyp!

- Dies ist einer der häufigsten Anfängerfehler, also merke dir das gut: **Die `input()`-Funktion gibt IMMER Text (einen String) zurück!**

- Egal, ob der Benutzer `Hallo`, `123` oder `3.14` eingibt – für Python ist es nach `input()` nur ein String.

Sieh dir dieses Problem an:

```python
alter_str = input("Wie alt bist du? ")

# Wir versuchen, das Alter um 1 zu erhöhen, um das Alter nächstes Jahr zu berechnen.
# Das wird einen Fehler verursachen!
naechstes_jahr = alter_str + 1

print(naechstes_jahr)
```

- Wenn du hier `25` eingibst, wird das Programm mit einem `TypeError: can only concatenate str (not "int") to str` abstürzen.
- Warum? Weil du versuchst, eine Zahl (`1`) zu einem Text (`"25"`) zu addieren.
- Das ist, als würdest du versuchen, das Wort "Apfel" und die Zahl 5 zu addieren – es ergibt keinen Sinn.

### 🔄 Konvertierung von Datentypen (Type Casting)

- Um mit der Eingabe zu rechnen, musst du Python explizit sagen, dass es den Text als Zahl behandeln soll.
- Dieser Prozess wird Typkonvertierung oder "`Type Casting`" genannt.

#### Von Text zu Integer (`int()`)

- Wenn du eine ganze Zahl erwartest (wie ein Alter oder eine Menge), verwende die `int()`-Funktion.

```python
alter_str = input("Wie alt bist du? ")

# Hier konvertieren wir den Text in einen Integer
alter_zahl = int(alter_str)

# Jetzt können wir rechnen!
naechstes_jahr = alter_zahl + 1

print("Nächstes Jahr wirst du", naechstes_jahr, "Jahre alt sein.")
```

Wenn du `25` eingibst, funktioniert alles:

1. `input()` gibt den String `"25"`.
2. `int("25")` konvertiert ihn zur Zahl `25`.
3. Die Berechnung `25 + 1` ergibt `26`.
4. Die Ausgabe ist korrekt.

- **Vorsicht:** Wenn der Benutzer "fünfundzwanzig" oder "abc" eingibt, stürzt das Programm mit einem `ValueError` ab, da diese Texte nicht in eine Zahl konvertiert werden können.

#### Von Text zu Float (`float()`)

- Wenn du eine Dezimalzahl erwartest (wie einen Preis, eine Körpergröße oder eine Temperatur), verwende die `float()`-Funktion.

```python
groesse_str = input("Wie groß bist du in Metern? (z.B. 1.75) ")

# Wir konvertieren den Text in einen Float
groesse_zahl = float(groesse_str)

doppelte_groesse = groesse_zahl * 2

print("Deine doppelte Körpergröße wäre:", doppelte_groesse, "Meter.")
```

- Hier ist eine Übersicht über die wichtigsten Konvertierungsfunktionen:

| Funktion  | Beschreibung                                                             | Beispiel                              |
| :-------- | :----------------------------------------------------------------------- | :------------------------------------ |
| `int()`   | Konvertiert einen String (oder einen Float) in einen **Integer**.        | `int("101")` wird zur Zahl `101`.     |
| `float()` | Konvertiert einen String (oder einen Integer) in einen **Float**.        | `float("3.14")` wird zur Zahl `3.14`. |
| `str()`   | Konvertiert eine Zahl (oder einen anderen Datentyp) in einen **String**. | `str(42)` wird zum Text `"42"`.       |

## Übungsaufgaben

1. Schreibe ein Python-Programm, das den Benutzer nach seinem Namen und Alter fragt und dann eine Nachricht ausgibt, wie alt er nächstes Jahr sein wird.
2. Erstelle ein Programm, das den BMI (Body Mass Index) einer Person berechnet. Das Programm sollte nach Gewicht in Kilogramm und Körpergröße in Metern fragen, dann den BMI berechnen und ausgeben.
3. Schreibe ein Programm, das nach dem Namen eines Benutzers fragt und ihm mitteilt, wie viele Zeichen sein Name hat.
