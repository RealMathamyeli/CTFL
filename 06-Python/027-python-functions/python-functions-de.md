# Einführung in Python-Funktionen und Modularisierung

Eigene Funktionen definieren

- Definieren von Funktionen mit def und sinnvolle Namensgebung
- Funktionen mit Parametern und Rückgabewerten gestalten

Scope und Modularisierung

- Gültigkeit von Variablen in und außerhalb von Funktionen (local/global)
- Importieren und Nutzen von eigenen sowie Standardmodulen

# ⚙️ Eigene Funktionen definieren

Stell dir vor, du baust etwas mit Legosteinen. Anstatt jedes Mal wieder die gleichen vier Steine für ein Rad zusammenzusetzen, baust du einmal ein perfektes Rad und legst es beiseite. Immer wenn du ein Rad brauchst, nimmst du einfach dieses fertige Bauteil.

Funktionen in der Programmierung sind genau das: wiederverwendbare Bauteile für deinen Code. Du schreibst eine Anweisung oder eine Reihe von Anweisungen einmal, gibst diesem Block einen Namen und kannst ihn dann immer wieder aufrufen, wann immer du ihn brauchst. Das macht deinen Code kürzer, übersichtlicher und viel einfacher zu warten.

<br><br><br>

## ✍️ Definieren von Funktionen mit `def` und sinnvolle Namensgebung

### 🧱 Was ist eine Funktion überhaupt?

Eine Funktion ist ein benannter Block von Code, der eine bestimmte Aufgabe erledigt. Du kannst dir eine Funktion wie ein Rezept in einem Kochbuch vorstellen:

- **Der Name des Rezepts** ist der **Funktionsname** (z.B. `backe_kuchen`).
- **Die Zutatenliste** sind die **Parameter**, die du dem Rezept gibst (z.B. Mehl, Zucker, Eier).
- **Die Kochanleitung** ist der **Code** innerhalb der Funktion.
- **Der fertige Kuchen** ist der **Rückgabewert**.

Indem du deinen Code in Funktionen aufteilst, schaffst du Ordnung. Wenn etwas nicht funktioniert, musst du nicht deinen gesamten Code durchsuchen, sondern nur das "Rezept", das für die fehlerhafte Aufgabe zuständig ist.

<br><br><br>

### 📜 Die `def`-Anweisung: Das Grundgerüst

Um in Python eine eigene Funktion zu erstellen, benutzt du das Schlüsselwort `def`, was für "define" (definieren) steht. Die grundlegende Struktur sieht immer gleich aus:

1.  **`def`**: Das Schlüsselwort, das Python sagt: "Achtung, jetzt kommt eine Funktionsdefinition."
2.  **Funktionsname**: Ein von dir gewählter Name für die Funktion (z.B. `gruss_ausgeben`).
3.  **Runde Klammern `()`**: Direkt nach dem Namen. Hier kommen später die "Zutaten" (Parameter) rein. Fürs Erste lassen wir sie leer.
4.  **Doppelpunkt `:`**: Dieser schließt die "Kopfzeile" der Funktion ab.
5.  **Eingerückter Codeblock**: Alles, was zu dieser Funktion gehört, muss darunter eingerückt sein (üblicherweise mit 4 Leerzeichen). Diese Einrückung ist in Python extrem wichtig, denn sie definiert, was Teil der Funktion ist und was nicht.

Schauen wir uns ein einfaches Beispiel an:

```python
# Definition der Funktion
def begruessung_anzeigen():
  print("Hallo Welt!")
  print("Willkommen zum Programmierkurs.")
  print("Ich bin eine Funktion.")

# Aufruf der Funktion
# Der eingerückte Block ist nun zu Ende.
# Dieser Teil des Codes wird erst ausgeführt, wenn die Funktion aufgerufen wird.

print("Das Programm startet hier.")
begruessung_anzeigen() # Hier wird die Funktion "aktiviert"
print("Die Funktion wurde ausgeführt.")
begruessung_anzeigen() # Ich kann sie so oft aufrufen, wie ich möchte
```

**Was passiert hier?**

1.  Python liest die `def`-Zeile und merkt sich: "Aha, es gibt eine Funktion namens `begruessung_anzeigen`. Ich führe den Code darin aber noch nicht aus."
2.  Das Programm geht weiter und gibt "Das Programm startet hier." aus.
3.  Dann stößt es auf `begruessung_anzeigen()`. Jetzt erinnert es sich und springt in den Codeblock der Funktion. Es führt alle `print`-Anweisungen darin aus.
4.  Nachdem die Funktion fertig ist, springt das Programm zurück zu der Stelle, wo es aufgehört hat, und gibt "Die Funktion wurde ausgeführt." aus.
5.  Danach wird die Funktion ein zweites Mal aufgerufen und der ganze Prozess wiederholt sich.

<br><br><br>

### 🏷️ Die Kunst der Namensgebung

Der Name einer Funktion ist wie das Schild über einer Ladentür. Er sollte klar und deutlich sagen, was man drinnen erwarten kann. Eine Funktion `f()` oder `mach_was()` ist nicht hilfreich.

**Regeln und gute Praxis für Funktionsnamen:**

- **Verwende Verben**: Funktionen tun etwas. Ihr Name sollte diese Aktion beschreiben. `berechne_summe` ist besser als `summe`. `sende_email` ist besser als `email`.
- **Sei beschreibend, aber nicht zu lang**: `berechne_durchschnittsalter_der_benutzer` ist zwar genau, aber sehr lang. `berechne_durchschnittsalter` ist ein guter Kompromiss.
- **Verwende Kleinbuchstaben und Unterstriche (Snake Case)**: Das ist die offizielle Konvention in Python für Funktions- und Variablennamen. Also `meine_tolle_funktion` statt `meineTolleFunktion` (das nennt man Camel Case) oder `MeineTolleFunktion` (Pascal Case).
- **Sei konsistent**: Wenn du dich für einen Stil entscheidest, bleibe dabei.

Hier eine kleine Tabelle, um den Unterschied zu verdeutlichen:

| 📛 Schlechter Name | 👍 Guter Name                  | 🤔 Warum ist er besser?                                                                                                    |
| :----------------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| `f(x, y)`          | `addiere_zahlen(zahl1, zahl2)` | Man weiß sofort, dass die Funktion Zahlen addiert.                                                                         |
| `prozess()`        | `verarbeite_benutzerdaten()`   | "Prozess" ist zu vage. Hier ist klar, welche Daten verarbeitet werden.                                                     |
| `print()`          | `drucke_rechnung()`            | `print` ist zu allgemein (und überschreibt die eingebaute Funktion!). Der neue Name beschreibt genau, _was_ gedruckt wird. |

Ein guter Funktionsname ist eine der besten Dokumentationen, die du für deinen Code schreiben kannst!

<br><br><br>

## 📦 Funktionen mit Parametern und Rückgabewerten gestalten

Unsere erste Funktion war wie ein Toaster ohne Brotschlitz. Sie konnte nur eine einzige, fest einprogrammierte Sache tun. Richtig nützlich werden Funktionen aber erst, wenn wir ihnen Informationen übergeben (Parameter) und Ergebnisse von ihnen zurückbekommen (Rückgabewerte).

<br><br><br>

### 📥 Parameter: Die Zutaten für deine Funktion

Parameter sind Variablen, die du in den runden Klammern `()` einer Funktion definierst. Sie sind wie Platzhalter für die Werte (Argumente genannt), die du der Funktion beim Aufruf mitgibst.

Stell dir eine Funktion vor, die eine Person persönlich begrüßen soll. Ohne Parameter wäre das sehr umständlich. Mit einem Parameter wird es elegant:

```python
# 'name' ist hier der Parameter. Es ist ein Platzhalter.
def gruss_an_person(name):
  print(f"Hallo {name}, schön dich zu sehen!")
  print("Willkommen!")

# Jetzt rufen wir die Funktion auf und übergeben konkrete Werte, die Argumente.
gruss_an_person("Anna")  # "Anna" ist das Argument, das für 'name' eingesetzt wird.
gruss_an_person("Max")   # "Max" ist das Argument.
```

Beim ersten Aufruf wird der Wert `"Anna"` in die "Schublade" `name` gelegt. Innerhalb der Funktion hat `name` dann den Wert `"Anna"`. Beim zweiten Aufruf wird die Schublade geleert und mit `"Max"` neu befüllt.

Du kannst auch mehrere Parameter übergeben, indem du sie mit Kommas trennst:

```python
def berechne_rechteck_flaeche(laenge, breite):
  flaeche = laenge * breite
  print(f"Die Fläche des Rechtecks beträgt: {flaeche}")

berechne_rechteck_flaeche(10, 5) # laenge wird 10, breite wird 5
berechne_rechteck_flaeche(7, 3)  # laenge wird 7, breite wird 3
```

Hier noch eine Tabelle zur Klärung der Begriffe, die oft verwechselt werden:

| 🏷️ Begriff    | 📖 Erklärung                                                                                       | 🔍 Beispiel                  |
| :------------ | :------------------------------------------------------------------------------------------------- | :--------------------------- |
| **Parameter** | Die Variable in der Klammer bei der **Definition** der Funktion. Es ist der Name des Platzhalters. | `name` in `def gruss(name):` |
| **Argument**  | Der tatsächliche Wert, den du beim **Aufruf** der Funktion in die Klammer schreibst.               | `"Anna"` in `gruss("Anna")`  |

<br><br><br>

### 📤 Der `return`-Wert: Das fertige Gericht

Bisher haben unsere Funktionen ihre Ergebnisse nur mit `print()` auf dem Bildschirm ausgegeben. Was aber, wenn wir das Ergebnis in einer Variable speichern und damit weiterarbeiten wollen? Hier kommt das Schlüsselwort `return` ins Spiel.

`return` macht zwei Dinge:

1.  Es beendet die Funktion sofort.
2.  Es gibt einen Wert an die Stelle zurück, an der die Funktion aufgerufen wurde.

Schauen wir uns unsere Funktion zur Flächenberechnung noch einmal an, diesmal mit `return`:

```python
def berechne_rechteck_flaeche(laenge, breite):
  flaeche = laenge * breite
  return flaeche # Die Funktion wird hier beendet und gibt den Wert von 'flaeche' zurück

# Der Funktionsaufruf selbst wird jetzt zu dem Wert, den die Funktion zurückgibt.
flaeche_wohnzimmer = berechne_rechteck_flaeche(8, 6)
flaeche_kueche = berechne_rechteck_flaeche(4, 5)

gesamte_flaeche = flaeche_wohnzimmer + flaeche_kueche

print(f"Die Fläche des Wohnzimmers ist {flaeche_wohnzimmer} qm.")
print(f"Die Fläche der Küche ist {flaeche_kueche} qm.")
print(f"Die gesamte Fläche beträgt {gesamte_flaeche} qm.")
```

Hier siehst du die wahre Stärke: Wir können das Ergebnis (`48`) in der Variable `flaeche_wohnzimmer` speichern und später damit weiterrechnen. Eine Funktion, die nur `print()` verwendet, könnte das nicht.

**Was passiert, wenn eine Funktion kein `return` hat?**
Jede Funktion in Python gibt etwas zurück. Wenn du `return` nicht explizit verwendest, gibt die Funktion automatisch den speziellen Wert `None` zurück. `None` steht für "nichts" oder "kein Wert".

```python
def ohne_return_wert():
  print("Ich gebe nichts zurück.")

ergebnis = ohne_return_wert()
print(ergebnis) # Ausgabe: None
```

<br><br><br>

### 🧩 Das Zusammenspiel: Parameter rein, Rückgabewert raus

Das volle Potenzial entfalten Funktionen, wenn sie beides kombinieren: Sie nehmen Daten entgegen, verarbeiten sie und geben ein Ergebnis zurück. Sie sind wie kleine, spezialisierte Maschinen in einer Fabrik.

Hier ein komplettes Beispiel: Eine Funktion, die den Bruttopreis aus einem Nettopreis und einem Mehrwertsteuersatz berechnet.

```python
def berechne_bruttopreis(netto, steuersatz_prozent):
  """
  Diese Funktion berechnet den Bruttopreis aus einem Nettobetrag und einem Steuersatz.
  Der Steuersatz wird in Prozent angegeben (z.B. 19 für 19%).
  """
  if netto < 0 or steuersatz_prozent < 0:
    return 0 # Bei ungültigen Eingaben geben wir 0 zurück und beenden die Funktion.

  steuer_faktor = 1 + (steuersatz_prozent / 100) # aus 19 wird 1.19
  brutto = netto * steuer_faktor
  return brutto

# --- Anwendung der Funktion ---

preis_laptop_netto = 1200
mwst_deutschland = 19

# Parameter rein -> Verarbeitung -> Rückgabewert raus
preis_laptop_brutto = berechne_bruttopreis(preis_laptop_netto, mwst_deutschland)

print(f"Nettopreis: {preis_laptop_netto} EUR")
print(f"Bruttopreis (inkl. {mwst_deutschland}% MwSt.): {preis_laptop_brutto:.2f} EUR") # .2f formatiert auf 2 Nachkommastellen

# Wir können die Funktion wiederverwenden!
preis_buch_netto = 20
reduzierte_mwst = 7
preis_buch_brutto = berechne_bruttopreis(preis_buch_netto, reduzierte_mwst)

print(f"\nNettopreis Buch: {preis_buch_netto} EUR")
print(f"Bruttopreis Buch (inkl. {reduzierte_mwst}% MwSt.): {preis_buch_brutto:.2f} EUR")
```

Diese Funktion ist:

- **Wiederverwendbar**: Wir können sie für Laptops, Bücher oder alles andere verwenden.
- **Lesbar**: Der Name `berechne_bruttopreis` sagt genau, was sie tut.
- **Abstrakt**: Wir müssen uns beim Aufruf keine Gedanken mehr über die Formel machen. Wir geben einfach die Zutaten rein und bekommen das Ergebnis.
- **Wartbar**: Wenn sich die Formel zur Berechnung ändert, müssen wir sie nur an dieser einen Stelle in der Funktion anpassen.<br><br><br>

# 🏗️ Scope und Modularisierung

<br><br><br>

## 🎯 Der Geltungsbereich (Scope) von Variablen

Stell dir vor, dein Programm ist ein großes Haus. In diesem Haus gibt es verschiedene Zimmer (das sind deine Funktionen) und einen großen Flur, der alle Zimmer verbindet (das ist der globale Bereich). Der "Scope" oder Geltungsbereich einer Variable legt fest, in welchem Teil dieses Hauses die Variable bekannt ist und verwendet werden kann. Es gibt hauptsächlich zwei Bereiche: den lokalen und den globalen.

<br><br><br>

### 🏠 Lokale Variablen: Die Stubenhocker

Eine lokale Variable ist eine, die **innerhalb einer Funktion** deklariert wird. Sie ist ein echter Stubenhocker: Sie existiert nur in diesem einen "Zimmer" (der Funktion).

- **Geburt:** Sie wird erschaffen, sobald die Funktion aufgerufen wird.
- **Leben:** Sie kann nur innerhalb dieser Funktion gelesen und verändert werden.
- **Tod:** Sobald die Funktion ihre Arbeit beendet hat und das Programm die Funktion verlässt, wird die lokale Variable zerstört und ihr Wert geht für immer verloren.

Versuchst du, von außerhalb der Funktion (z.B. aus dem "Flur") auf diese Variable zuzugreifen, kennt das Programm sie nicht und gibt dir einen Fehler.

**Beispiel:**

```python
def meine_party():
    # 'getraenk' ist eine LOKALE Variable. Sie existiert nur hier drinnen.
    getraenk = "Limonade"
    print(f"Auf meiner Party gibt es: {getraenk}")

# Wir rufen die Funktion auf. Alles innerhalb der Funktion wird ausgeführt.
meine_party()
# Ausgabe: Auf meiner Party gibt es: Limonade

# Jetzt versuchen wir, von außen auf 'getraenk' zuzugreifen.
# Das wird einen Fehler verursachen!
print(getraenk)
# NameError: name 'getraenk' is not defined
```

Der `NameError` ist wie ein Türsteher, der sagt: "Tut mir leid, den Namen 'getraenk' kenne ich hier draußen nicht. Der muss wohl noch im Party-Raum sein."

<br><br><br>

### 🌍 Globale Variablen: Die Weltenbummler

Eine globale Variable wird **außerhalb jeder Funktion** deklariert, sozusagen im "Flur" deines Programm-Hauses. Sie ist ein Weltenbummler: Jedes Zimmer (jede Funktion) kann sie sehen und auf sie zugreifen.

- **Geburt:** Sie wird erschaffen, sobald das Programm startet und die Zeile gelesen wird.
- **Leben:** Sie existiert, solange das gesamte Programm läuft.
- **Zugriff:** Jede Funktion im Programm kann ihren Wert **lesen**.

**Beispiel:**

```python
# 'spieler_name' ist eine GLOBALE Variable. Jeder kennt sie.
spieler_name = "Alex"

def zeige_highscore():
    # Diese Funktion kann die globale Variable 'spieler_name' lesen.
    print(f"Der aktuelle Highscore-Halter ist: {spieler_name}")

def starte_neues_spiel():
    # Auch diese Funktion kann 'spieler_name' lesen.
    print(f"Ein neues Spiel wird für {spieler_name} gestartet.")

zeige_highscore()
starte_neues_spiel()

# Ausgabe:
# Der aktuelle Highscore-Halter ist: Alex
# Ein neues Spiel wird für Alex gestartet.
```

<br><br><br>

### 💥 Lokale und Globale Variablen im Zusammenspiel (und die Gefahren)

Jetzt wird es spannend. Was passiert, wenn eine lokale und eine globale Variable denselben Namen haben? Oder wenn eine Funktion versucht, eine globale Variable zu **verändern**?

Regel: Python bevorzugt immer die lokale Variable! Wenn du innerhalb einer Funktion einer Variable einen Wert zuweist, erstellt Python standardmäßig eine **neue, lokale** Variable. Die globale Variable mit demselben Namen wird davon nicht berührt. Sie wird quasi von der lokalen "überschattet".

**Beispiel:**

```python
geld = 100 # Globale Variable

def casino_besuch():
    # ACHTUNG: Hier wird eine NEUE, LOKALE Variable 'geld' erstellt.
    # Sie überschattet die globale Variable nur innerhalb dieser Funktion.
    geld = 10
    print(f"Im Casino habe ich nur noch {geld} Euro.")

print(f"Vor dem Casino habe ich {geld} Euro.")
casino_besuch()
print(f"Nach dem Casino habe ich immer noch {geld} Euro.")

# Ausgabe:
# Vor dem Casino habe ich 100 Euro.
# Im Casino habe ich nur noch 10 Euro.
# Nach dem Casino habe ich immer noch 100 Euro.
```

Wie du siehst, hat die Änderung in `casino_besuch()` die globale Variable `geld` überhaupt nicht beeinflusst. Das ist oft eine Fehlerquelle!

<br><br><br>

### 🔑 Das Schlüsselwort `global`: Die Tür nach draußen

Was aber, wenn du wirklich die globale Variable innerhalb einer Funktion verändern willst? Dafür gibt es das Schlüsselwort `global`. Damit sagst du der Funktion explizit: "Hey, die Variable, die ich hier meine, ist keine neue lokale. Ich meine die globale da draußen im Flur!"

**Beispiel (korrigiert):**

```python
geld = 100 # Globale Variable

def echter_casino_besuch():
    # Mit 'global' sagen wir, dass wir die globale Variable 'geld' meinen.
    global geld
    print(f"Ich gehe mit {geld} Euro ins Casino.")
    geld = 10 # Jetzt wird die GLOBALE Variable verändert.
    print(f"Verdammt, jetzt habe ich nur noch {geld} Euro.")

print(f"Vor dem Casino habe ich {geld} Euro.")
echter_casino_besuch()
print(f"Nach dem Casino habe ich tatsächlich nur noch {geld} Euro.")

# Ausgabe:
# Vor dem Casino habe ich 100 Euro.
# Ich gehe mit 100 Euro ins Casino.
# Verdammt, jetzt habe ich nur noch 10 Euro.
# Nach dem Casino habe ich tatsächlich nur noch 10 Euro.
```

**Wichtiger Rat:** Sei sehr vorsichtig mit dem `global`-Schlüsselwort. Wenn viele Funktionen globale Variablen verändern, kann dein Code sehr schnell unübersichtlich und schwer nachvollziehbar werden. Es ist oft besser, Werte als Parameter an Funktionen zu übergeben und per `return` zurückzugeben.

<br><br><br>

## 📦 Modularisierung: Code in Kisten packen

Stell dir vor, du schreibst ein sehr großes Programm, zum Beispiel ein Spiel. Du könntest den gesamten Code in eine einzige, riesige Datei schreiben. Das wäre aber wie ein riesiger Haufen LEGO-Steine ohne Anleitung. Du würdest schnell den Überblick verlieren.

Modularisierung ist die Kunst, deinen Code in logische, wiederverwendbare Teile – sogenannte **Module** – zu organisieren. Ein Modul ist im Grunde einfach eine Python-Datei (`.py`), die zusammengehörigen Code enthält (z.B. Funktionen, Klassen oder Variablen).

**Vorteile:**

- **Ordnung:** Dein Projekt bleibt übersichtlich.
- **Wiederverwendbarkeit:** Du kannst ein Modul in vielen verschiedenen Projekten nutzen.
- **Wartbarkeit:** Wenn ein Fehler auftritt, musst du nur das betreffende Modul durchsuchen, nicht das ganze Programm.
- **Zusammenarbeit:** Verschiedene Leute können an verschiedenen Modulen arbeiten, ohne sich in die Quere zu kommen.

<br><br><br>

### 📚 Standardmodule: Der eingebaute Werkzeugkasten

Python wird mit einem riesigen "Werkzeugkasten" ausgeliefert, der sogenannten **Standardbibliothek**. Diese enthält unzählige fertige Module für alle möglichen Aufgaben. Du musst das Rad nicht neu erfinden!

Willst du mit Zufallszahlen arbeiten? Dafür gibt es das `random`-Modul.
Musst du mathematische Berechnungen durchführen? Nutze das `math`-Modul.
Willst du mit Datum und Uhrzeit arbeiten? Das `datetime`-Modul hilft dir.

Um ein Modul zu benutzen, musst du es mit dem Schlüsselwort `import` "in dein Programm holen".

**Beispiel mit dem `random`-Modul:**

```python
# Wir importieren das gesamte 'random'-Modul.
# Jetzt haben wir Zugriff auf alle Werkzeuge (Funktionen) darin.
import random

# Wir benutzen die Funktion 'randint()' aus dem 'random'-Modul.
# Die Syntax ist immer: modulname.funktionsname()
zufallszahl = random.randint(1, 100)
print(f"Meine gezogene Zufallszahl zwischen 1 und 100 ist: {zufallszahl}")

# Wir benutzen eine andere Funktion, 'choice()', um ein zufälliges Element aus einer Liste zu wählen.
spieler = ["Anna", "Ben", "Carla"]
gewinner = random.choice(spieler)
print(f"Und der Gewinner ist... {gewinner}!")
```

<br><br><br>

### 🛠️ Eigene Module: Deine persönliche Werkstatt

Der wahre Zauber der Modularisierung entfaltet sich, wenn du beginnst, deine eigenen Module zu erstellen. Das ist erstaunlich einfach.

**Schritt 1: Das Modul erstellen**
Erstelle eine neue Python-Datei. Nennen wir sie `werkzeuge.py`. In diese Datei schreibst du nützliche Funktionen, die du vielleicht öfter brauchst.

```python
# Inhalt der Datei: werkzeuge.py

def begruessung(name):
    """Eine simple Funktion, die einen Namen begrüßt."""
    print(f"Hallo, {name}! Schön, dich zu sehen.")

def flaeche_rechteck(laenge, breite):
    """Berechnet die Fläche eines Rechtecks."""
    return laenge * breite

PI = 3.14159 # Wir können auch Variablen/Konstanten definieren
```

**Schritt 2: Das Modul im Hauptprogramm nutzen**
Erstelle nun eine zweite Python-Datei **im selben Ordner**. Nennen wir sie `hauptprogramm.py`. Von hier aus importieren und nutzen wir unser selbstgebautes `werkzeuge`-Modul.

```python
# Inhalt der Datei: hauptprogramm.py

# Wir importieren unser eigenes Modul. Python findet es, weil es im selben Ordner liegt.
# Beachte: wir schreiben 'import werkzeuge', nicht 'import werkzeuge.py'.
import werkzeuge

# Jetzt können wir die Funktionen und Variablen aus unserem Modul verwenden.
# Wieder mit der Syntax: modulname.elementname
werkzeuge.begruessung("Maria")

laenge_vom_tisch = 2
breite_vom_tisch = 1.5
flaeche = werkzeuge.flaeche_rechteck(laenge_vom_tisch, breite_vom_tisch)

print(f"Die Fläche des Tisches beträgt: {flaeche} Quadratmeter.")
print(f"Der Wert von PI aus unserem Modul ist: {werkzeuge.PI}")
```

<br><br><br>

### 📥 Verschiedene Arten des Imports

Es gibt verschiedene Wege, Code aus Modulen zu importieren. Jeder hat seine Vor- und Nachteile.

| Syntax                               | Beispiel                          | Verwendung                | Vorteil                                                                                                      | Nachteil                                                                                                                                                                                                                         |
| :----------------------------------- | :-------------------------------- | :------------------------ | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `import modul`                       | `import math`                     | `math.sqrt(16)`           | **Sehr klar:** Man sieht sofort, woher (`math`) die Funktion (`sqrt`) kommt. Keine Namenskonflikte.          | Man muss immer den Modulnamen voranstellen (mehr Tipparbeit).                                                                                                                                                                    |
| `from modul import element`          | `from math import sqrt, pi`       | `sqrt(16)`<br>`print(pi)` | Man kann die Funktion/Variable direkt beim Namen nennen. Kürzer zu schreiben.                                | Wenn man eine eigene Funktion namens `sqrt` hat, gibt es einen Konflikt. Der Ursprung ist nicht sofort ersichtlich.                                                                                                              |
| `from modul import element as alias` | `from math import sqrt as wurzel` | `wurzel(16)`              | Man kann Elementen einen neuen, vielleicht kürzeren oder verständlicheren Namen geben. Löst Namenskonflikte. | Man muss sich den neuen Namen merken.                                                                                                                                                                                            |
| `from modul import *`                | `from math import *`              | `sqrt(16)`<br>`print(pi)` | Man importiert **alles** aus dem Modul und kann es direkt verwenden.                                         | **⚠️ Sehr gefährlich!** Man lädt sich unzählige Namen in sein Programm, von denen man viele nicht kennt. Das Risiko für Namenskonflikte ist riesig und der Code wird extrem unleserlich. **Sollte fast immer vermieden werden!** |
