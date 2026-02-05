# OOP in Python: Objektorientierte Programmierung verstehen und anwenden

Objektorientierte Konzepte
- Unterschied zwischen prozeduraler und objektorientierter Programmierung
- Vorteile und Anwendungsgebiete von OOP

Klassen und Objekte in Python
- Definition und Instanziierung von Klassen
- Sinn und Verwendung von __init__

Attribute und Methoden
- Unterschied zwischen Attributen und Methoden
- Zugriff auf Attribute und Methoden eines Objekts

Praxisbeispiel
- Erstellen einer einfachen eigenen Klasse
- Objektinstanzen erzeugen und Methoden anwenden

<br><br><br>

# 🧩 Objektorientierte Konzepte

<br><br><br>

## 🤔 Unterschied zwischen prozeduraler und objektorientierter Programmierung

Stell dir vor, du möchtest einen Kuchen backen. Es gibt zwei grundsätzliche Herangehensweisen, wie du die Anleitung dafür aufschreiben könntest. Diese beiden Weisen sind eine gute Metapher für den Unterschied zwischen prozeduraler und objektorientierter Programmierung.

<br><br><br>

### 📜 Die prozedurale Programmierung (POP)

Die prozedurale Programmierung ist wie ein klassisches Rezeptbuch.

**Die Idee:** Du hast eine Liste von Anweisungen (Prozeduren oder Funktionen), die du der Reihe nach abarbeitest. Im Mittelpunkt steht das "Was wird getan?". Die Daten (die Zutaten wie Mehl, Zucker, Eier) und die Funktionen (die Anweisungen wie "Mischen", "Backen", "Verzieren") sind voneinander getrennt.

**Die Analogie mit dem Rezeptbuch:**
*   **Daten:** Auf einer Seite stehen alle Zutaten, die du brauchst (z.B. `int anzahlEier = 3;`, `float mengeMehlInGramm = 500;`). Diese Daten sind oft "global" verfügbar, das heißt, jeder Teil deines Programms kann darauf zugreifen und sie verändern.
*   **Funktionen/Prozeduren:** Auf einer anderen Seite stehen die einzelnen Schritte (`mischeZutaten()`, `heizeOfenVor()`, `backeKuchen()`). Diese Funktionen nehmen sich die Daten (Zutaten), verarbeiten sie und geben ein Ergebnis zurück.

**Wie es funktioniert:**
Dein Hauptprogramm ist wie der Chefkoch, der das Rezept von oben nach unten liest und die einzelnen Funktionen in der richtigen Reihenfolge aufruft:
1.  Rufe `heizeOfenVor()` auf.
2.  Rufe `mischeZutaten()` mit Mehl, Zucker und Eiern auf.
3.  Rufe `backeKuchen()` mit dem gemischten Teig auf.

**Das Problem dabei:** Wenn du ein sehr großes Kochbuch mit tausenden Rezepten hast, wird es unübersichtlich. Die Zutaten (globale Daten) stehen irgendwo herum, und viele verschiedene Rezepte (Funktionen) könnten sie versehentlich verändern. Wenn du die Zutat "Zucker" änderst, kann das plötzlich 100 verschiedene Rezepte beeinflussen, was zu Fehlern führt, die schwer zu finden sind.

<br><br><br>

### 📦 Die objektorientierte Programmierung (OOP)

Die objektorientierte Programmierung ist, als würdest du nicht nur ein Rezept, sondern einen autonomen "Bäcker-Roboter" bauen.

**Die Idee:** Statt Daten und Funktionen zu trennen, bündelst du sie in "Objekten". Ein Objekt ist eine in sich geschlossene Einheit, die sowohl Daten (Eigenschaften) als auch die Funktionen (Methoden), die diese Daten bearbeiten, enthält. Der Fokus liegt auf dem "Wer macht etwas?".

**Die Analogie mit dem Bäcker-Roboter:**
*   Du definierst zuerst einen **Bauplan** für solche Roboter. Dieser Bauplan heißt **Klasse** (z.B. die Klasse `Baecker`).
*   In diesem Bauplan legst du fest, welche **Eigenschaften (Attribute)** ein Bäcker hat (z.B. `name`, `erfahrung`, `zutatenliste`) und was er **kann (Methoden)** (z.B. `kuchenBacken()`, `zutatenEinkaufen()`).
*   Aus diesem Bauplan kannst du dann beliebig viele konkrete Roboter erstellen. Diese konkreten Roboter sind die **Objekte** (z.B. `baeckerKarl`, `baeckerAnna`).

**Wie es funktioniert:**
Jeder Bäcker-Roboter verwaltet seine eigenen Zutaten. Du als Chefkoch sagst nicht mehr "Nimm Mehl, nimm Zucker...", sondern du sagst einfach zu deinem Objekt: `baeckerKarl.kuchenBacken()`.
*   Der Roboter `baeckerKarl` weiß selbst, wie er einen Kuchen backt. Er greift auf seine *eigenen* internen Zutaten zu.
*   Du musst die Details des Backvorgangs gar nicht kennen. Du vertraust darauf, dass der Roboter seine Aufgabe erledigt. Dieses Verstecken von Komplexität nennt man **Kapselung**.
*   Wenn `baeckerAnna` ebenfalls einen Kuchen backt, verwendet sie ihre eigenen Zutaten. Die beiden kommen sich nicht in die Quere, selbst wenn sie gleichzeitig arbeiten.


<br><br><br>

### 👍 Vorteile der OOP

1.  ** Wiederverwendbarkeit**
    *   Wenn du einmal eine gute Klasse wie `Auto` geschrieben hast, kannst du sie in unzähligen Projekten wiederverwenden. Du musst das Rad nicht jedes Mal neu erfinden.
    *   Durch das Konzept der **Vererbung** kannst du eine bestehende Klasse erweitern. Du könntest eine Klasse `Sportwagen` von `Auto` erben lassen. Der `Sportwagen` hat dann automatisch alle Eigenschaften und Methoden eines normalen Autos (Räder, Motor, `fahren()`) und du fügst nur noch die speziellen Dinge hinzu (z.B. `turboAktivieren()`). Das spart enorm viel Zeit und Code.

2.  **🔒 Kapselung (Datenschutz)**
    *   Stell dir ein Objekt wie eine Pille mit einer Schutzhülle vor. Die Daten im Inneren sind sicher. Niemand von außen kann sie einfach so verändern.
    *   Der Zugriff ist nur über die öffentlichen Methoden des Objekts erlaubt (z.B. `setGeschwindigkeit(50)` anstatt direkt die Variable `geschwindigkeit` zu manipulieren).
    *   Das verhindert unbeabsichtigte Fehler. Die Methode `setGeschwindigkeit` könnte zum Beispiel prüfen, ob der Wert gültig ist (z.B. nicht negativ und nicht über der Höchstgeschwindigkeit), bevor sie die interne Variable ändert. Das macht den Code viel robuster und sicherer.

3.  **🔧 Bessere Wartbarkeit und Lesbarkeit**
    *   Da der Code in logische Einheiten (Objekte) gegliedert ist, die der realen Welt nachempfunden sind (ein `Kunde`, eine `Rechnung`, ein `Produkt`), ist er viel leichter zu verstehen.
    *   Wenn es einen Fehler im Verhalten eines `Autos` gibt, weißt du genau, wo du suchen musst: in der Klasse `Auto`. Du musst nicht das gesamte Programm durchforsten. Änderungen an einer Klasse haben selten unerwartete Nebenwirkungen auf völlig andere Teile des Programms.

4.  **🎭 Polymorphismus (Vielgestaltigkeit)**
    *   Das ist ein sehr mächtiges Konzept. Es bedeutet, dass verschiedene Objekte auf die gleiche Nachricht unterschiedlich reagieren können.
    *   **Beispiel:** Du hast verschiedene geometrische Formen (Kreis, Quadrat, Dreieck), die alle von einer Basisklasse `Form` erben. Jede dieser Klassen hat eine Methode namens `zeichne()`.
    *   Wenn du nun eine Liste von verschiedenen Formen hast und für jede `form.zeichne()` aufrufst, passiert immer das Richtige: Der Kreis zeichnet einen Kreis, das Quadrat ein Quadrat. Du musst nicht prüfen: "Wenn es ein Kreis ist, dann tue dies, wenn es ein Quadrat ist, dann tue das...". Der Code wird dadurch viel sauberer und flexibler.

5.  **🧠 Abstraktion**
    *   OOP erlaubt es, Komplexität zu verstecken. Wenn du Auto fährst, benutzt du Lenkrad, Pedale und Schalthebel. Du musst nicht wissen, wie genau der Motor, das Getriebe oder die Einspritzanlage funktionieren.
    *   Genauso ist es bei Objekten. Du benutzt ihre einfachen, öffentlichen Methoden (`auto.beschleunigen()`), ohne die komplizierte Logik im Inneren verstehen zu müssen. Du musst nur wissen, *was* das Objekt tut, nicht *wie* es das tut.

<br><br><br>

### 💻 Anwendungsgebiete der OOP

OOP ist nicht immer die beste Lösung für jedes Problem, aber in vielen Bereichen ist es der absolute Standard, weil die Probleme sich so gut in Objekte übersetzen lassen.

| Anwendungsgebiet | Warum OOP hier ideal ist |
| :--- | :--- |
| **Spieleentwicklung** | Jede Figur (Spieler, Gegner), jedes Item (Waffe, Heiltrank), jedes Level-Element kann perfekt als Objekt modelliert werden. Ein `Gegner`-Objekt hat Attribute wie `lebenspunkte` und `angriffskraft` und Methoden wie `angreifen()` und `bewegen()`. |
| **Große Unternehmenssoftware (ERP, CRM)** | Systeme zur Verwaltung von Kunden, Produkten, Bestellungen und Rechnungen sind wie für OOP gemacht. Du hast `Kunde`-Objekte, `Produkt`-Objekte und `Bestellung`-Objekte, die miteinander in Beziehung stehen. Das macht die riesige Komplexität solcher Systeme beherrschbar. |
| **Simulationen** | Egal ob du eine Verkehrssimulation (jedes `Auto`, jede `Ampel` ist ein Objekt), eine physikalische Simulation (jeder `Planet` ist ein Objekt) oder eine biologische Simulation (jede `Zelle` ist ein Objekt) baust – OOP erlaubt es, das Verhalten und die Interaktion der einzelnen Teile naturgetreu nachzubilden. |
| **Web-Frameworks (Backend)** | Moderne Frameworks wie Django (Python) oder Spring (Java) nutzen OOP intensiv. Ein Blogbeitrag ist ein Objekt, ein Benutzer ist ein Objekt, ein Kommentar ist ein Objekt. Das erleichtert die Interaktion mit der Datenbank und die Organisation der Geschäftslogik enorm. |
| **Mobile App-Entwicklung (iOS/Android)** | Die Entwicklung für mobile Geräte ist stark objektorientiert. Ein Bildschirm (`ViewController`), eine Tabelle (`TableView`) oder ein Bild (`ImageView`) sind allesamt Objekte, deren Eigenschaften du programmatisch veränderst, um die App zu steuern. |

<br><br><br>

# 🧱 Klassen und Objekte in Python

<br><br><br>

## 🏗️ Definition und Instanziierung von Klassen

Stell dir vor, du bist ein Architekt. Bevor du ein echtes Haus bauen kannst, zeichnest du einen Bauplan. Dieser Plan legt alles fest: wie viele Zimmer das Haus haben soll, wo die Fenster hinkommen, wie das Dach aussehen soll. Der Plan selbst ist aber noch kein Haus, in dem man wohnen kann. Er ist nur die Vorlage, die Beschreibung.

Genau das ist die Beziehung zwischen Klassen und Objekten in der Programmierung.

<br><br><br>

### 💡 Was ist eine Klasse?

Eine **Klasse** ist wie der **Bauplan** für ein Haus. Sie ist eine Vorlage oder eine Schablone, die beschreibt, wie etwas aufgebaut sein soll. Eine Klasse definiert zwei Dinge:

1.  **Attribute**: Das sind die Eigenschaften oder Daten, die ein Ding haben soll. Im Bauplan für ein Haus wären das zum Beispiel die `anzahl_der_zimmer`, die `wohnflaeche` oder die `farbe_der_fassade`.
2.  **Methoden**: Das sind die Fähigkeiten oder Verhaltensweisen, die ein Ding haben soll. Für ein Haus könnte das zum Beispiel `tuer_oeffnen()` oder `licht_einschalten()` sein. Methoden sind im Grunde Funktionen, die zu einer Klasse gehören.

Hier ist ein ganz einfacher Bauplan für ein Auto in Python. Im Moment ist er noch leer, er definiert nur, dass es so etwas wie ein "Auto" geben soll.

```python
class Auto:
    pass # 'pass' ist ein Platzhalter und bedeutet "hier kommt später noch was hin"
```

Dieser Code erschafft noch kein konkretes Auto. Er erstellt nur die *Idee*, die Vorlage, den Bauplan namens `Auto`.

<br><br><br>

### 🏠 Was ist ein Objekt?

Ein **Objekt** ist das **echte, gebaute Haus**, das nach dem Bauplan erstellt wurde. Es ist eine konkrete **Instanz** einer Klasse.

Das Tolle an einem Bauplan (einer Klasse) ist, dass du ihn immer wieder verwenden kannst, um viele verschiedene, aber ähnliche Häuser (Objekte) zu bauen. Du kannst ein rotes Haus mit 5 Zimmern und ein blaues Haus mit 3 Zimmern bauen – beide basieren auf demselben Grundbauplan, haben aber ihre eigenen, individuellen Eigenschaften (Attribute).

Jedes Objekt, das du aus einer Klasse erstellst, ist eigenständig. Wenn du die Wandfarbe bei einem Haus änderst, hat das keine Auswirkung auf die anderen Häuser.

<br><br><br>

### ✨ Wie erstelle ich ein Objekt? (Die Instanziierung)

Der Vorgang, ein konkretes Objekt aus einer Klasse (dem Bauplan) zu erstellen, nennt sich **Instanziierung**. Das ist, als würdest du dem Bauteam den Auftrag geben: "Baut mir jetzt bitte ein Haus nach diesem Plan!"

In Python ist das super einfach. Du nimmst den Namen der Klasse und setzt Klammern `()` dahinter.

```python
# Das ist unser Bauplan (die Klasse)
class Auto:
    pass

# Jetzt bauen wir zwei konkrete, echte Autos (Objekte/Instanzen)
# Wir rufen die Klasse wie eine Funktion auf.
mein_golf = Auto()
dein_tesla = Auto()

# mein_golf und dein_tesla sind jetzt zwei völlig unabhängige Objekte.
# Sie wurden beide nach dem Bauplan "Auto" erstellt.
print(mein_golf)
print(dein_tesla)
```

Wenn du diesen Code ausführst, siehst du eine Ausgabe, die dir sagt, dass es sich um zwei verschiedene `Auto`-Objekte an unterschiedlichen Stellen im Speicher deines Computers handelt. Sie sind also wirklich zwei getrennte Dinge.

<br><br><br>

## 🛠️ Sinn und Verwendung von `__init__`

Okay, wir können jetzt also leere Baupläne erstellen und daraus leere Objekte bauen. Das ist noch nicht sehr nützlich. Ein Auto sollte doch von Anfang an eine Marke, ein Modell und eine Farbe haben, oder?

Hier kommt die spezielle Methode `__init__` ins Spiel.

<br><br><br>

### ⚙️ Der Konstruktor: Die `__init__`-Methode

Die Methode `__init__` (die Unterstriche am Anfang und Ende sind wichtig!) ist eine ganz besondere Methode. Ihr Name steht für "Initialisierung". Man nennt sie auch den **Konstruktor**.

Stell dir vor, auf deinem Bauplan gibt es ein Feld "Anweisungen für das Bauteam bei Baubeginn". Genau das ist `__init__`. Diese Methode wird **automatisch und nur ein einziges Mal aufgerufen**, und zwar genau in dem Moment, in dem ein neues Objekt erstellt (instanziiert) wird.

Ihre Hauptaufgabe ist es, dem brandneuen Objekt seine Anfangsattribute (Eigenschaften) zu geben und es in einen startklaren Zustand zu versetzen.

```python
class Auto:
    # Das ist der Konstruktor. Er wird bei Auto() aufgerufen.
    def __init__(self):
        print("Ein neues Auto wurde gebaut!")
        # Wir geben dem Auto feste Anfangswerte
        self.marke = "Unbekannt"
        self.modell = "Unbekannt"
        self.ps = 0

# Sobald diese Zeile ausgeführt wird, wird die __init__-Methode aufgerufen.
mein_auto = Auto() # Gibt aus: "Ein neues Auto wurde gebaut!"

# Jetzt können wir auf die Attribute zugreifen, die in __init__ gesetzt wurden.
print(f"Marke meines Autos: {mein_auto.marke}") # Gibt aus: Marke meines Autos: Unbekannt
```

<br><br><br>

### 👉 Das magische Wort `self`

Dir ist sicher das Wort `self` aufgefallen. Das ist eines der wichtigsten Konzepte bei Klassen und für Anfänger oft verwirrend. Aber es ist eigentlich ganz logisch:

`self` ist ein Platzhalter für **das Objekt selbst**.

Denk nochmal an unsere zwei Autos, `mein_golf` und `dein_tesla`. Wenn die `__init__`-Methode für `mein_golf` ausgeführt wird, dann ist `self` innerhalb dieser Methode eine Referenz auf `mein_golf`. Wenn sie für `dein_tesla` ausgeführt wird, ist `self` eine Referenz auf `dein_tesla`.

Mit `self.marke = "Unbekannt"` sagen wir also: "Hey, du konkretes Objekt, das gerade erstellt wird! Nimm deine Eigenschaft namens `marke` und setze ihren Wert auf 'Unbekannt'." So wird das Attribut fest an das jeweilige Objekt gebunden. Ohne `self` wüsste Python nicht, *wessen* Marke es setzen soll.

<br><br><br>

### 📥 Attribute beim Erstellen übergeben

Es ist unpraktisch, wenn jedes Auto erstmal mit "Unbekannt" startet und wir die Werte später ändern müssen. Wäre es nicht toll, wenn wir die Eigenschaften direkt beim Bau des Autos festlegen könnten? Genau dafür ist `__init__` da!

Wir können dem Konstruktor Parameter mitgeben, genau wie bei einer normalen Funktion. Der erste Parameter ist *immer* `self`, aber danach können wir beliebige weitere definieren.

```python
class Auto:
    # Wir erweitern den Konstruktor um Parameter für Marke, Modell und Farbe
    def __init__(self, marke, modell, farbe):
        print(f"Ein neuer {marke} {modell} in der Farbe {farbe} wird gebaut!")

        # Wir weisen die übergebenen Werte den Attributen des Objekts zu.
        # self.marke ist das Attribut des Objekts.
        # marke (ohne self) ist der Wert, der von außen übergeben wurde.
        self.marke = marke
        self.modell = modell
        self.farbe = farbe

# Jetzt übergeben wir die Werte direkt bei der Instanziierung.
# Python reicht diese Werte automatisch an __init__ weiter.
mein_golf = Auto("VW", "Golf 8", "Blau")
dein_tesla = Auto("Tesla", "Model 3", "Rot")

# Und schon haben die Objekte ihre individuellen Werte.
print(f"Mein Auto ist ein {mein_golf.marke} {mein_golf.modell} in {mein_golf.farbe}.")
# Ausgabe: Mein Auto ist ein VW Golf 8 in Blau.

print(f"Dein Auto ist ein {dein_tesla.marke} {dein_tesla.modell} in {dein_tesla.farbe}.")
# Ausgabe: Dein Auto ist ein Tesla Model 3 in Rot.
```

<br><br><br>

### 🚗 Ein praktisches Beispiel im Überblick

Lass uns das Gelernte in einer Tabelle zusammenfassen. Wir haben eine Klasse (Bauplan) und erstellen daraus zwei verschiedene Objekte (Autos).

| Konzept | Bauplan (`class Auto`) | Objekt 1 (`mein_golf`) | Objekt 2 (`dein_tesla`) |
| :--- | :--- | :--- | :--- |
| **Was ist es?** | Die Vorlage. Definiert, dass ein Auto eine Marke, ein Modell und eine Farbe hat. | Eine konkrete Instanz der Klasse `Auto`. Ein echtes, eigenständiges Ding. | Eine andere, konkrete Instanz der Klasse `Auto`. Ebenfalls eigenständig. |
| **Erstellung** | `class Auto:`<br>`  def __init__(self, marke, modell, farbe):`<br>`    self.marke = marke`<br>`    self.modell = modell`<br>`    self.farbe = farbe` | `mein_golf = Auto("VW", "Golf 8", "Blau")` | `dein_tesla = Auto("Tesla", "Model 3", "Rot")` |
| **`self.marke`** | Definiert das Attribut `marke`. | "VW" | "Tesla" |
| **`self.modell`** | Definiert das Attribut `modell`. | "Golf 8" | "Model 3" |
| **`self.farbe`**| Definiert das Attribut `farbe`. | "Blau" | "Rot" |

Die Klasse `Auto` ist der allgemeine Bauplan. Die `__init__`-Methode ist die Anweisung, wie ein neues Auto zusammengebaut und mit Anfangswerten (Marke, Modell, Farbe) versehen wird. `mein_golf` und `dein_tesla` sind die fertigen Produkte, die nach diesem Plan gebaut wurden, aber jeder mit seinen eigenen, spezifischen Details.<br><br><br>

# 🧱 Attribute und Methoden

Stell dir vor, du hast einen Bauplan für ein Haus. Dieser Bauplan ist in der Programmierung eine **Klasse**. Er beschreibt ganz genau, wie ein Haus aussehen soll und was man darin tun kann.

Wenn du nun nach diesem Bauplan ein echtes Haus baust, dann ist dieses Haus ein **Objekt**. Du kannst sogar mehrere Häuser (Objekte) nach demselben Bauplan (Klasse) bauen. Jedes Haus ist eigenständig, aber sie teilen alle die gleichen grundlegenden Eigenschaften und Funktionen, die im Bauplan festgelegt wurden.

Innerhalb dieses Bauplans gibt es zwei ganz wichtige Dinge:
1.  **Die Eigenschaften des Hauses:** Wie viele Fenster hat es? Welche Farbe hat die Fassade? Hat es eine Garage? Das sind die **Attribute**.
2.  **Die Dinge, die man im Haus tun kann:** Man kann die Tür öffnen, das Licht einschalten oder die Heizung aufdrehen. Das sind die **Methoden**.

Jedes einzelne gebaute Haus (Objekt) hat also seine eigenen Eigenschaften (Attribute) und kann die gleichen Aktionen ausführen (Methoden).

<br><br><br>

## ⚖️ Der Unterschied zwischen Attributen und Methoden

Lass uns das jetzt noch genauer aufschlüsseln. Der Unterschied ist fundamental, aber ganz einfach zu verstehen, wenn man sich die Analogie merkt: Attribute sind **was ein Objekt ist**, und Methoden sind **was ein Objekt tun kann**.

<br><br><br>

### 📝 Was sind Attribute?

Attribute sind die Daten oder Eigenschaften, die ein Objekt beschreiben. Man kann sie sich als die "Adjektive" oder "Substantive" vorstellen, die den Zustand eines Objekts definieren. Sie sind im Grunde Variablen, die zu einem bestimmten Objekt gehören.

Nehmen wir als Beispiel ein Objekt `Hund`. Mögliche Attribute für einen Hund wären:

*   `name` (z.B. "Bello")
*   `rasse` (z.B. "Golden Retriever")
*   `alter` (z.B. 5)
*   `istHungrig` (z.B. `true` oder `false`)

Jeder Hund, den wir als Objekt erstellen, hat diese Attribute, aber die Werte können für jeden Hund unterschiedlich sein. Ein Hund heißt "Bello" und ist 5 Jahre alt, ein anderer heißt "Luna" und ist 2 Jahre alt. Die Attribute speichern also den individuellen Zustand jedes einzelnen Objekts.

<br><br><br>

### ⚙️ Was sind Methoden?

Methoden sind die Aktionen oder Verhaltensweisen, die ein Objekt ausführen kann. Man kann sie sich als die "Verben" vorstellen. Es sind im Grunde Funktionen, die zu einem Objekt gehören und oft dazu dienen, die Attribute dieses Objekts zu verändern oder mit ihnen zu arbeiten.

Bleiben wir bei unserem `Hund`-Objekt. Mögliche Methoden wären:

*   `bellen()`
*   `fressen()`
*   `geburtstagFeiern()`
*   `schwanzWedeln()`

Wenn wir die Methode `fressen()` aufrufen, könnte der Code innerhalb dieser Methode das Attribut `istHungrig` von `true` auf `false` ändern. Wenn wir `geburtstagFeiern()` aufrufen, könnte diese Methode das Attribut `alter` um 1 erhöhen.

Methoden definieren also das Verhalten eines Objekts. Du erkennst sie in der Regel immer an den Klammern `()` hinter dem Namen.

<br><br><br>

### 📊 Tabelle zum direkten Vergleich

Um den Unterschied noch klarer zu machen, hier eine Tabelle:

| Merkmal | Attribute (Eigenschaften) | Methoden (Fähigkeiten) |
| :--- | :--- | :--- |
| **Analogie** | Substantive/Adjektive (was es *ist*) | Verben (was es *tun kann*) |
| **Zweck** | Speichern den Zustand und die Daten eines Objekts. | Definieren das Verhalten und die Aktionen eines Objekts. |
| **Beispiele (Auto)** | `farbe`, `marke`, `anzahlTueren`, `aktuelleGeschwindigkeit` | `starten()`, `beschleunigen()`, `bremsen()`, `hupen()` |
| **Technische Natur** | Variablen, die zu einem Objekt gehören. | Funktionen, die zu einem Objekt gehören. |
| **Syntax-Hinweis** | Werden direkt beim Namen genannt (z.B. `meinAuto.farbe`). | Werden mit Klammern aufgerufen (z.B. `meinAuto.starten()`). |

<br><br><br>

## 🔑 Zugriff auf Attribute und Methoden eines Objekts

Wenn du nun ein konkretes Objekt hast (z.B. ein rotes Auto der Marke VW), möchtest du natürlich auf seine Eigenschaften (Attribute) zugreifen und seine Fähigkeiten (Methoden) nutzen. In den meisten Programmiersprachen geschieht dies über die sogenannte **Punkt-Notation**.

Die allgemeine Regel lautet: `Objektname.Merkmalname`

Stell dir vor, wir haben ein Objekt mit dem Namen `meinAuto`.

<br><br><br>

### 📖 Der Lesezugriff auf Attribute

Du kannst den Wert eines Attributs einfach "lesen", um herauszufinden, welchen Zustand das Objekt gerade hat.

**Syntax:** `objektname.attributname`

**Beispiel:**
Du willst wissen, welche Farbe dein Auto hat.

```
// Annahme: Es gibt ein Objekt 'meinAuto' mit dem Attribut 'farbe'
aktuelleFarbe = meinAuto.farbe
// Die Variable 'aktuelleFarbe' enthält jetzt den Wert des Attributs, z.B. "Rot"
```

Du greifst also direkt auf das Attribut zu, um seinen Wert zu erhalten.

<br><br><br>

### ✏️ Der Schreibzugriff auf Attribute

Genauso kannst du den Wert eines Attributs ändern. Du weist ihm einfach einen neuen Wert zu. Das verändert den Zustand des Objekts.

**Syntax:** `objektname.attributname = neuerWert`

**Beispiel:**
Du lässt dein Auto neu lackieren und möchtest die Farbe von "Rot" auf "Blau" ändern.

```
// Annahme: Der aktuelle Wert von meinAuto.farbe ist "Rot"
meinAuto.farbe = "Blau"
// Jetzt ist der Zustand des Objekts geändert. Das Attribut 'farbe' hat den neuen Wert "Blau".
```

<br><br><br>

### 🏃 Das Aufrufen von Methoden

Um eine Aktion auszuführen, "rufst" du eine Methode auf. Das bedeutet, du sagst dem Objekt, dass es jetzt etwas tun soll. Wichtig ist hierbei, dass du immer die Klammern `()` hinter den Methodennamen schreibst.

**Syntax:** `objektname.methodenname()`

**Beispiel:**
Du willst, dass dein Auto hupt.

```
// Das Objekt 'meinAuto' soll die Aktion 'hupen' ausführen
meinAuto.hupen()
// Der Code innerhalb der Methode hupen() wird jetzt ausgeführt.
```

Manchmal benötigen Methoden zusätzliche Informationen, um ihre Aufgabe zu erledigen. Diese Informationen nennt man **Parameter** und schreibt sie in die Klammern.

**Beispiel:**
Du willst, dass dein Auto um 10 km/h beschleunigt. Die Methode `beschleunigen` braucht die Information, um wie viel beschleunigt werden soll.

```
// Wir übergeben den Wert 10 an die Methode 'beschleunigen'
meinAuto.beschleunigen(10)
// Die Methode kann nun mit diesem Wert arbeiten und z.B. das Attribut 'aktuelleGeschwindigkeit' um 10 erhöhen.
```

Auch wenn eine Methode keine zusätzlichen Informationen braucht, sind die leeren Klammern `()` zwingend notwendig. Sie sind das Signal, dass du eine Aktion ausführen und nicht auf eine Eigenschaft zugreifen möchtest.# 🏗️ Praxisbeispiel: Klassen und Objekte in Aktion

<br><br><br>

## 📐 Erstellen einer einfachen eigenen Klasse

Stell dir eine Klasse wie einen Bauplan oder ein Rezept vor. Der Bauplan für ein Haus ist nicht das Haus selbst, aber er beschreibt ganz genau, wie ein Haus dieser Art gebaut werden soll: wie viele Zimmer es hat, welche Farbe die Wände haben sollen und so weiter. Genauso ist eine Klasse in der Programmierung ein Bauplan für Objekte. Sie legt fest, welche Eigenschaften (Attribute) und welche Fähigkeiten (Methoden) ein Objekt dieses Typs haben wird.

Wir erstellen jetzt einen "Bauplan" für einen Hund. Jeder Hund, den wir später "bauen", wird auf diesem Plan basieren.

### 📜 ### Die grundlegende Struktur

Eine Klassendefinition in Python beginnt immer mit dem Schlüsselwort `class`, gefolgt von dem Namen der Klasse. Aus Konvention schreiben wir Klassennamen immer groß und in sogenannter "PascalCase" oder "CamelCase" Schreibweise (z.B. `MeinErstesAuto`).

```python
class Hund:
    # Hier kommt der ganze Bauplan für einen Hund rein.
    pass # Das ist ein Platzhalter, damit Python keinen Fehler wirft.
```

### 🧠 ### Der Konstruktor: `__init__`

Das ist eine ganz besondere Methode. Du erkennst solche speziellen Methoden an den doppelten Unterstrichen am Anfang und am Ende (`__init__`). Der Konstruktor wird **automatisch immer dann aufgerufen, wenn ein neues Objekt** aus der Klasse erstellt wird. Seine Hauptaufgabe ist es, das Objekt zu "initialisieren", also ihm seine Anfangseigenschaften zu geben.

-   **`self`**: Das erste Argument jeder Methode in einer Klasse ist immer `self`. Es ist ein Platzhalter für das zukünftige Objekt selbst. Wenn wir später einen Hund namens "Bello" erstellen, wird `self` sich auf "Bello" beziehen. Wenn wir einen Hund namens "Luna" erstellen, bezieht sich `self` auf "Luna". So weiß die Methode, auf welches konkrete Objekt sie sich beziehen soll.
-   **Weitere Parameter**: Nach `self` kommen die Eigenschaften, die jeder Hund bei seiner "Geburt" bekommen soll, zum Beispiel einen Namen, eine Rasse und ein Alter.

```python
class Hund:
    # Der Konstruktor
    def __init__(self, name, rasse, alter):
        # Wir nehmen die übergebenen Werte und speichern sie
        # als Eigenschaften (Attribute) des konkreten Objekts (self).
        self.name = name
        self.rasse = rasse
        self.alter = alter

        print(f"Wuff! Ein neuer Hund namens {self.name} wurde erstellt!")
```

Was hier passiert ist folgendes:
1.  Wir definieren, dass jeder neue `Hund` mit einem `namen`, einer `rasse` und einem `alter` erstellt werden muss.
2.  `self.name = name` bedeutet: "Nimm den Wert, der für `name` übergeben wurde, und speichere ihn in einer Variable namens `name`, die zu diesem speziellen Objekt (`self`) gehört."

### 🗣️ ### Methoden definieren: Was das Objekt kann

Methoden sind im Grunde Funktionen, die zu einer Klasse gehören. Sie definieren, was ein Objekt tun kann. Unsere Hunde sollen bellen und Geburtstag feiern können.

Genau wie beim Konstruktor muss der erste Parameter immer `self` sein, damit die Methode weiß, auf welchen Hund sie sich bezieht.

```python
class Hund:
    # Der Konstruktor (von oben)
    def __init__(self, name, rasse, alter):
        self.name = name
        self.rasse = rasse
        self.alter = alter
        print(f"Wuff! Ein neuer Hund namens {self.name} wurde erstellt!")

    # Eine Methode zum Bellen
    def bellen(self):
        print(f"{self.name} macht: Wuff, wuff!")

    # Eine Methode, um das Alter des Hundes zu erhöhen
    def geburtstag_feiern(self):
        self.alter = self.alter + 1
        print(f"Happy Birthday, {self.name}! Du bist jetzt {self.alter} Jahre alt.")
```

Jetzt ist unser Bauplan (die Klasse `Hund`) fertig. Sie beschreibt, dass jeder Hund einen Namen, eine Rasse und ein Alter hat und dass er bellen und Geburtstag feiern kann.

<br><br><br>

## 🐕 Objektinstanzen erzeugen und Methoden anwenden

Jetzt, wo wir den Bauplan haben, können wir endlich echte, individuelle Hunde "bauen". Jeden einzelnen Hund, den wir nach diesem Bauplan erstellen, nennt man eine **Instanz** oder ein **Objekt** der Klasse `Hund`.

### 💡 ### Was ist eine Objektinstanz?

Die Instanz ist das konkrete Produkt, das nach dem Bauplan erstellt wurde. Wenn die Klasse `Hund` der Bauplan für ein Haus ist, dann ist die Instanz das tatsächliche Haus, das in der Hauptstraße 12 steht. Ein anderes Haus in der Parkallee 5, das nach demselben Plan gebaut wurde, ist eine andere, separate Instanz. Beide haben die gleiche Struktur (gleiche Anzahl an Zimmern), aber unterschiedliche Eigenschaften (vielleicht eine andere Wandfarbe, andere Möbel).

| Die Klasse (Der Bauplan) 📝                                                               | Das Objekt (Das konkrete Produkt) 🏠                                                      |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Definiert die allgemeinen Eigenschaften (z.B. `name`, `rasse`).                           | Hat konkrete Werte für diese Eigenschaften (z.B. `name = "Bello"`, `rasse = "Schäferhund"`). |
| Definiert die allgemeinen Fähigkeiten (z.B. die Methode `bellen()`).                      | Kann diese Fähigkeiten ausführen (Bello kann bellen).                                   |
| Ist eine abstrakte Vorlage. Man kann nicht mit der Klasse selbst "spielen".               | Ist eine konkrete, greifbare Einheit im Speicher des Computers, mit der man arbeiten kann.  |

### ➕ ### Eine Instanz erzeugen

Um eine Instanz zu erzeugen, "rufen" wir die Klasse wie eine Funktion auf und übergeben die Werte, die der `__init__`-Konstruktor erwartet (außer `self`, das wird von Python automatisch eingesetzt).

```python
# Wir erstellen unsere erste Instanz der Klasse Hund.
# Python ruft im Hintergrund Hund.__init__(bello, "Bello", "Golden Retriever", 3) auf.
bello = Hund("Bello", "Golden Retriever", 3)

# Wir erstellen eine zweite, völlig unabhängige Instanz.
luna = Hund("Luna", "Labrador", 5)
```

Wenn du diesen Code ausführst, siehst du die `print`-Ausgaben aus unserem Konstruktor:
```
Wuff! Ein neuer Hund namens Bello wurde erstellt!
Wuff! Ein neuer Hund namens Luna wurde erstellt!
```
Wir haben jetzt zwei unterschiedliche Hund-Objekte im Speicher: `bello` und `luna`.

### 🔍 ### Auf Attribute zugreifen

Um die Eigenschaften einer bestimmten Instanz anzusehen, verwenden wir die "Punkt-Notation": `objektname.attributname`.

```python
# Eigenschaften von Bello ausgeben
print(f"Der erste Hund heißt {bello.name}.")
print(f"Er ist ein {bello.rasse} und {bello.alter} Jahre alt.")

print("---") # Trennlinie zur besseren Lesbarkeit

# Eigenschaften von Luna ausgeben
print(f"Der zweite Hund heißt {luna.name}.")
print(f"Sie ist ein {luna.rasse} und {luna.alter} Jahre alt.")
```

Du siehst, obwohl beide nach demselben Bauplan (`Hund`) erstellt wurden, haben sie ihre eigenen, individuellen Daten. Das Ändern von Bellos Alter würde Lunas Alter nicht beeinflussen.

### 🗣️ ### Methoden anwenden (aufrufen)

Genauso wie wir auf Attribute zugreifen, können wir auch Methoden für eine bestimmte Instanz aufrufen. Wir sagen dem Objekt damit, dass es eine seiner Fähigkeiten einsetzen soll. Auch hier verwenden wir die Punkt-Notation, aber mit Klammern `()` am Ende, da wir eine Aktion ausführen wollen.

```python
# Lassen wir die Hunde ihre Fähigkeiten einsetzen

# Bello soll bellen
bello.bellen()

# Luna soll auch bellen
luna.bellen()

print("---")

# Schauen wir uns Lunas Alter vor ihrem Geburtstag an
print(f"Vor der Feier ist Luna {luna.alter} Jahre alt.")

# Luna feiert Geburtstag. Die Methode ändert das Attribut 'alter' von Luna.
luna.geburtstag_feiern()

# Schauen wir uns Lunas Alter nach ihrem Geburtstag an
print(f"Nach der Feier ist Luna {luna.alter} Jahre alt.")

# Bellos Alter hat sich dadurch natürlich nicht geändert
print(f"Bello ist immer noch {bello.alter} Jahre alt.")
```

Die Ausgabe dieses Codes wäre:
```
Bello macht: Wuff, wuff!
Luna macht: Wuff, wuff!
---
Vor der Feier ist Luna 5 Jahre alt.
Happy Birthday, Luna! Du bist jetzt 6 Jahre alt.
Nach der Feier ist Luna 6 Jahre alt.
Bello ist immer noch 3 Jahre alt.
```
Hier siehst du perfekt, wie eine Methode (`geburtstag_feiern`) den internen Zustand (`self.alter`) eines bestimmten Objekts (`luna`) verändern kann, ohne andere Objekte derselben Klasse zu beeinflussen.