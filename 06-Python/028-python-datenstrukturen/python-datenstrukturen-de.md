# Datenstrukturen in Python

- Unterschiede und Einsatzgebiete von Listen, Tupeln, Dictionaries und Sets
- Anlegen und Initialisieren von Listen, Tupeln, Dictionaries und Sets

Elementzugriff und Manipulation

- Elemente aus Listen, Tupeln, Dictionaries und Sets lesen und verändern
- Methoden zum Hinzufügen und Entfernen von Elementen bei den verschiedenen Datentypen

Anwenden von Datenstrukturen

- Iteration über Listen, Tupel, Dictionaries und Sets
- Typische Anwendungsfälle in Programmen: z.B. Zählen, Gruppieren, Nachschlagen von Werten

---

# 🐍 Datenstrukturen in Python

<br><br><br>

## 📜 Listen (Lists)

### 🤔 Was ist eine Liste und wofür verwende ich sie?

Stell dir eine Liste wie eine Einkaufsliste vor. Du schreibst die Dinge untereinander auf, die du kaufen möchtest.

- **Geordnet:** Die Reihenfolge, in der du die Dinge aufschreibst, bleibt erhalten. "Milch, Brot, Eier" ist eine andere Reihenfolge als "Brot, Eier, Milch". In Python bedeutet das, dass jedes Element einen festen Platz (einen Index) hat, beginnend bei 0.
- **Veränderbar (Mutable):** Deine Einkaufsliste ist dynamisch. Du kannst Dinge hinzufügen ("Oh, ich brauche auch noch Butter!"), Dinge wegstreichen, die du schon hast, oder etwas auf der Liste durch etwas anderes ersetzen ("Statt normaler Milch nehme ich Hafermilch").
- **Erlaubt Duplikate:** Du kannst problemlos zweimal "Milch" auf deine Liste schreiben, wenn du zwei Packungen brauchst. Eine Liste in Python stört sich nicht an doppelten Werten.

**Zusammengefasst:** Eine Liste ist die perfekte Wahl, wenn du eine Sammlung von Elementen hast, deren Reihenfolge wichtig ist und die sich im Laufe deines Programms ändern kann (Elemente hinzufügen, entfernen oder ändern).

**Typische Einsatzgebiete:**

- Eine Liste von Benutzernamen, die sich registriert haben.
- Die einzelnen Schritte in einem Rezept.
- Die Highscore-Liste in einem Spiel.

<br><br><br>

### ➕ Wie erstelle und initialisiere ich eine Liste?

Das Erstellen von Listen ist sehr einfach. Du verwendest dafür eckige Klammern `[]`.

**1. Eine leere Liste erstellen:**
Wenn du eine Liste anlegen möchtest, die du erst später füllen willst, kannst du sie leer initialisieren.

```python
# Möglichkeit 1: Mit eckigen Klammern (am häufigsten verwendet)
meine_einkaufsliste = []

# Möglichkeit 2: Mit dem list()-Konstruktor
meine_andere_liste = list()

print(meine_einkaufsliste)
# Ausgabe: []
```

**2. Eine Liste mit Anfangswerten erstellen:**
Meistens weißt du schon beim Erstellen, welche Elemente in die Liste sollen. Du schreibst sie einfach, durch Kommas getrennt, in die eckigen Klammern.

```python
# Eine Liste mit Zahlen (Integers)
meine_noten = [1, 3, 2, 1, 4]

# Eine Liste mit Text (Strings)
fruechte = ["Apfel", "Banane", "Kirsche"]

# Eine Liste mit gemischten Datentypen (absolut möglich!)
gemischte_liste = ["Max", 25, True, 3.14]

print(fruechte)
# Ausgabe: ['Apfel', 'Banane', 'Kirsche']

print(gemischte_liste)
# Ausgabe: ['Max', 25, True, 3.14]
```

<br><br><br>

## 📦 Tupel (Tuples)

### 🤔 Was ist ein Tupel und wofür verwende ich es?

Ein Tupel ist wie eine "Liste in Stein gemeißelt". Stell es dir wie feste Koordinaten auf einer Landkarte vor (z.B. 48.137154, 11.576124 für München). Diese Koordinaten ändern sich nicht.

- **Geordnet:** Genau wie bei einer Liste hat jedes Element eine feste Position (Index). Die Reihenfolge ist also wichtig und bleibt immer gleich.
- **Unveränderbar (Immutable):** Das ist der entscheidende Unterschied zur Liste! Einmal erstellt, kannst du ein Tupel nicht mehr verändern. Du kannst keine Elemente hinzufügen, entfernen oder austauschen. Versuchst du es doch, gibt Python eine Fehlermeldung aus.
- **Erlaubt Duplikate:** Auch ein Tupel kann gleiche Werte mehrfach enthalten, z.B. `(1, 2, 2, 3)`.

**Zusammengefasst:** Ein Tupel verwendest du immer dann, wenn du eine Sammlung von Daten hast, die zusammengehören und sich unter keinen Umständen ändern sollen. Das macht deinen Code sicherer und oft auch ein kleines bisschen schneller als bei Listen.

**Typische Einsatzgebiete:**

- GPS-Koordinaten (Längengrad, Breitengrad).
- RGB-Farbwerte (Rot, Grün, Blau).
- Feste Konfigurationsdaten, die sich nicht ändern dürfen.

<br><br><br>

### ➕ Wie erstelle und initialisiere ich ein Tupel?

Tupel werden mit runden Klammern `()` erstellt.

**1. Ein leeres Tupel erstellen:**

```python
# Möglichkeit 1: Mit runden Klammern
leeres_tupel = ()

# Möglichkeit 2: Mit dem tuple()-Konstruktor
leeres_tupel_2 = tuple()

print(leeres_tupel)
# Ausgabe: ()
```

**2. Ein Tupel mit Anfangswerten erstellen:**
Ähnlich wie bei Listen schreibst du die Werte einfach durch Kommas getrennt in die runden Klammern.

```python
# Ein Tupel mit RGB-Werten für die Farbe Rot
rote_farbe = (255, 0, 0)

# Ein Tupel mit gemischten Datentypen
personendaten = ("Müller", 42, "Berlin")

print(rote_farbe)
# Ausgabe: (255, 0, 0)
```

**Wichtiger Sonderfall: Tupel mit nur einem Element**
Wenn du ein Tupel mit nur einem einzigen Element erstellen willst, musst du nach dem Element ein Komma setzen. Ansonsten denkt Python, es handle sich nur um eine normale Zahl oder einen String in Klammern.

```python
# FALSCH: Das ist keine Tupel, sondern einfach die Zahl 50
kein_tupel = (50)
print(type(kein_tupel))
# Ausgabe: <class 'int'>

# RICHTIG: Das Komma macht es zu einem Tupel
ein_element_tupel = (50,)
print(type(ein_element_tupel))
# Ausgabe: <class 'tuple'>
```

<br><br><br>

## 📚 Dictionaries (Wörterbücher)

### 🤔 Was ist ein Dictionary und wofür verwende ich es?

Ein Dictionary funktioniert genau wie ein echtes Wörterbuch oder ein Telefonbuch. Du hast einen Begriff (den **Schlüssel**, z.B. das Wort "Apfel") und eine dazugehörige Erklärung (den **Wert**, z.B. "eine Kernobstfrucht"). Du suchst nicht nach der "dritten Definition im Buch", sondern direkt nach dem Wort "Apfel".

- **Ungeordnet (bzw. Zugriff über Schlüssel):** Früher waren Dictionaries komplett ungeordnet. Seit Python 3.7 merken sie sich die Einfügereihenfolge, aber der Hauptzweck ist nicht der Zugriff über einen Index (wie bei Listen), sondern der direkte Zugriff über den einzigartigen **Schlüssel**.
- **Veränderbar (Mutable):** Du kannst jederzeit neue Schlüssel-Wert-Paare hinzufügen, bestehende Werte ändern oder ganze Paare entfernen.
- **Keine doppelten Schlüssel:** Jeder Schlüssel in einem Dictionary muss einzigartig sein. Du kannst nicht zweimal den Eintrag "Max Mustermann" in deinem Telefonbuch haben. Wenn du versuchst, einen bereits vorhandenen Schlüssel erneut hinzuzufügen, wird der alte Wert einfach überschrieben.

**Zusammengefasst:** Ein Dictionary ist ideal, wenn du Daten als zusammengehörige Paare speichern willst und einen schnellen Zugriff auf einen Wert über einen eindeutigen Bezeichner (den Schlüssel) brauchst.

**Typische Einsatzgebiete:**

- Ein Benutzerprofil: `{"username": "Max", "age": 30, "city": "München"}`
- Ein Telefonbuch: `{"Mama": "0123-45678", "Büro": "089-12345"}`
- Einstellungen in einem Programm.

<br><br><br>

### ➕ Wie erstelle und initialisiere ich ein Dictionary?

Dictionaries werden mit geschweiften Klammern `{}` erstellt und bestehen aus `Schlüssel: Wert`-Paaren.

**1. Ein leeres Dictionary erstellen:**

```python
# Möglichkeit 1: Mit geschweiften Klammern (am häufigsten verwendet)
mein_profil = {}

# Möglichkeit 2: Mit dem dict()-Konstruktor
mein_telefonbuch = dict()

print(mein_profil)
# Ausgabe: {}
```

**2. Ein Dictionary mit Anfangswerten erstellen:**
Du listest die `Schlüssel: Wert`-Paare auf, getrennt durch Kommas. Der Schlüssel und der Wert werden durch einen Doppelpunkt `:` getrennt.

```python
# Ein Dictionary, das ein Auto beschreibt
mein_auto = {
    "marke": "Volkswagen",
    "modell": "Golf",
    "baujahr": 2022,
    "hat_tuev": True
}

print(mein_auto)
# Ausgabe: {'marke': 'Volkswagen', 'modell': 'Golf', 'baujahr': 2022, 'hat_tuev': True}

# Du kannst auf einen Wert über seinen Schlüssel zugreifen
print(mein_auto["modell"])
# Ausgabe: Golf
```

<br><br><br>

## 🧩 Sets (Mengen)

### 🤔 Was ist ein Set und wofür verwende ich es?

Ein Set ist wie eine Kiste mit Legosteinen, bei der jeder Stein eine einzigartige Form und Farbe hat. Du kannst nicht zwei exakt gleiche Steine in der Kiste haben.

- **Ungeordnet:** Die Elemente in einem Set haben keine feste Reihenfolge oder einen Index. Du kannst nicht nach dem "ersten" oder "dritten" Element fragen. Du kannst nur prüfen, _ob_ ein bestimmtes Element im Set enthalten ist.
- **Veränderbar (Mutable):** Du kannst Elemente zu einem Set hinzufügen oder daraus entfernen.
- **Keine Duplikate:** Das ist die wichtigste Eigenschaft! Jedes Element in einem Set ist einzigartig. Wenn du versuchst, ein bereits vorhandenes Element hinzuzufügen, passiert einfach nichts.

**Zusammengefasst:** Ein Set ist die richtige Wahl, wenn du eine Sammlung von Elementen verwalten willst und dich nur dafür interessierst, _ob_ ein Element vorhanden ist – nicht, wie oft oder an welcher Position. Sie sind extrem schnell, wenn es darum geht zu prüfen, ob ein Element in der Sammlung enthalten ist.

**Typische Einsatzgebiete:**

- Duplikate aus einer Liste entfernen.
- Verwalten von einzigartigen Tags für einen Blog-Artikel.
- Schnell prüfen, ob ein Benutzer eine bestimmte Berechtigung hat.
- Mathematische Mengenoperationen (Schnittmenge, Vereinigung etc.).

<br><br><br>

### ➕ Wie erstelle und initialisiere ich ein Set?

Sets werden ebenfalls mit geschweiften Klammern `{}` erstellt, aber sie enthalten keine `Schlüssel: Wert`-Paare.

**1. Ein leeres Set erstellen:**
**Achtung, Falle!** `leeres_set = {}` funktioniert nicht, das würde ein leeres Dictionary erstellen. Du musst den `set()`-Konstruktor verwenden.

```python
# NUR SO erstellst du ein leeres Set!
leeres_set = set()

print(leeres_set)
# Ausgabe: set()
```

**2. Ein Set mit Anfangswerten erstellen:**
Hier kannst du wieder die geschweiften Klammern verwenden. Python erkennt am Fehlen der Doppelpunkte, dass es ein Set und kein Dictionary ist.

```python
# Beachte die doppelten Werte "blau" und 10
farben = {"rot", "grün", "blau", "rot", "gelb"}
zahlen = {10, 20, 30, 10, 40}

# Bei der Ausgabe sind die Duplikate automatisch entfernt worden.
# Die Reihenfolge kann variieren.
print(farben)
# Mögliche Ausgabe: {'gelb', 'blau', 'grün', 'rot'}

print(zahlen)
# Mögliche Ausgabe: {40, 10, 20, 30}
```

**3. Ein Set aus einer Liste erstellen (häufiger Anwendungsfall):**
Du kannst jede beliebige Sequenz (z.B. eine Liste) in ein Set umwandeln, um die Duplikate loszuwerden.

```python
gaeste_liste = ["Anna", "Peter", "Maria", "Anna", "David", "Peter"]

# Umwandlung in ein Set entfernt die Duplikate
einzigartige_gaeste = set(gaeste_liste)

print(einzigartige_gaeste)
# Mögliche Ausgabe: {'Maria', 'Anna', 'Peter', 'David'}
```

<br><br><br>

## ⚖️ Direkter Vergleich: Die vier Datenstrukturen auf einen Blick

Um dir die Entscheidung zu erleichtern, wann du was verwendest, hier eine übersichtliche Tabelle mit den wichtigsten Eigenschaften.

| Eigenschaft      | 📜 Liste (List)                       | 📦 Tupel (Tuple)                            | 📚 Dictionary (Dict)                  | 🧩 Set                                 |
| :--------------- | :------------------------------------ | :------------------------------------------ | :------------------------------------ | :------------------------------------- | ------------------------------------ |
| **Syntax**       | `[1, 2, 3]`                           | `(1, 2, 3)`                                 | `{'a': 1, 'b': 2}`                    | `{1, 2, 3}`                            |
| **Veränderbar?** | ✅ Ja                                 | ❌ Nein                                     | ✅ Ja                                 | ✅ Ja                                  |
| **Geordnet?**    | ✅ Ja (Index)                         | ✅ Ja (Index)                               | ✅ Ja (seit Python 3.7)               | ❌ Nein                                |
| **Duplikate?**   | ✅ Ja                                 | ✅ Ja                                       | ❌ Nein (Schlüssel)                   | ❌ Nein                                |
| **Zugriff über** | Index (z.B. `liste[0]`)               | Index (z.B. `tupel[0]`)                     | Schlüssel (z.B. `dict['a']`)          | Keinen direkten Zugriff                |
| **Hauptzweck**   | Eine geordnete, veränderbare Sammlung | Eine geordnete, **un**veränderbare Sammlung | Speicherung von Schlüssel-Wert-Paaren | Speicherung **einzigartiger** Elemente | # 🔧 Elementzugriff und Manipulation |

Stell dir vor, du hast verschiedene Behälter für deine Daten: eine Einkaufsliste, eine unveränderliche Geburtsurkunde, ein Telefonbuch und eine Kiste mit einzigartigen Sammelkarten. Jeder dieser Behälter (in Python: Liste, Tupel, Dictionary, Set) hat seine eigenen Regeln, wie du Dinge hineinlegen, herausnehmen, ansehen oder verändern kannst. Genau das schauen wir uns jetzt im Detail an!

<br><br><br>

## 📝 Listen (Lists)

Eine Liste ist wie eine geordnete Einkaufsliste. Du kannst die Reihenfolge ändern, Dinge hinzufügen, durchstreichen (entfernen) und den gleichen Artikel mehrmals aufschreiben. Sie ist sehr flexibel.

### 🔍 Elemente lesen (Zugriff)

Um auf Elemente in einer Liste zuzugreifen, benutzt du ihren **Index**. Der Index ist wie die Zeilennummer auf deiner Einkaufsliste. Wichtig: **In der Informatik fangen wir immer bei 0 an zu zählen!**

- **Zugriff über positiven Index:**

  ```python
  fruechte = ["Apfel", "Banane", "Kirsche", "Orange"]
  # Das erste Element hat den Index 0
  print(fruechte[0])  # Ausgabe: Apfel

  # Das dritte Element hat den Index 2
  print(fruechte[2])  # Ausgabe: Kirsche
  ```

- **Zugriff über negativen Index:**
  Du kannst auch von hinten zählen. `-1` ist das letzte Element, `-2` das vorletzte und so weiter.

  ```python
  fruechte = ["Apfel", "Banane", "Kirsche", "Orange"]
  print(fruechte[-1]) # Ausgabe: Orange
  print(fruechte[-3]) # Ausgabe: Banane
  ```

- **Slicing (Ausschnitte lesen):**
  Du kannst auch einen ganzen Bereich von Elementen auf einmal auslesen. Die Syntax ist `[start:ende]`. Dabei ist das `start`-Element inklusive und das `ende`-Element exklusive.

  ```python
  fruechte = ["Apfel", "Banane", "Kirsche", "Orange", "Mango"]
  # Gib mir die Elemente von Index 1 bis (aber nicht einschließlich) Index 4
  print(fruechte[1:4]) # Ausgabe: ['Banane', 'Kirsche', 'Orange']

  # Gib mir alles ab dem Anfang bis Index 3 (exklusive)
  print(fruechte[:3]) # Ausgabe: ['Apfel', 'Banane', 'Kirsche']

  # Gib mir alles ab Index 2 bis zum Ende
  print(fruechte[2:]) # Ausgabe: ['Kirsche', 'Orange', 'Mango']
  ```

### ✏️ Elemente verändern (Manipulation)

Da Listen veränderbar (_mutable_) sind, kannst du den Wert eines Elements einfach überschreiben, indem du es über seinen Index ansprichst.

```python
fruechte = ["Apfel", "Banane", "Kirsche"]
print("Vorher:", fruechte) # Ausgabe: Vorher: ['Apfel', 'Banane', 'Kirsche']

# Ersetze "Banane" (an Index 1) durch "Blaubeere"
fruechte[1] = "Blaubeere"
print("Nachher:", fruechte) # Ausgabe: Nachher: ['Apfel', 'Blaubeere', 'Kirsche']
```

Du kannst sogar einen ganzen Bereich (Slice) auf einmal ersetzen:

```python
fruechte = ["Apfel", "Banane", "Kirsche", "Orange"]
# Ersetze die Elemente an Index 1 und 2
fruechte[1:3] = ["Mango", "Ananas"]
print(fruechte) # Ausgabe: ['Apfel', 'Mango', 'Ananas', 'Orange']
```

### ✨ Elemente hinzufügen

Es gibt verschiedene Methoden, um neue Elemente zu einer Liste hinzuzufügen.

| Methode    | 📝 Beschreibung                                                                                                                  | 💻 Beispielcode                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| `append()` | Fügt **ein** Element am **Ende** der Liste an.                                                                                   | `fruechte.append("Kiwi")`                                                        |
| `insert()` | Fügt **ein** Element an einem **bestimmten Index** ein. Alle nachfolgenden Elemente rutschen eine Position weiter.               | `fruechte.insert(1, "Zitrone")`                                                  |
| `extend()` | Hängt **alle Elemente** aus einer anderen Liste (oder einem anderen iterierbaren Objekt) an das **Ende** der aktuellen Liste an. | `weitere_fruechte = ["Traube", "Melone"]`<br>`fruechte.extend(weitere_fruechte)` |

### 🗑️ Elemente entfernen

Auch zum Entfernen gibt es mehrere Möglichkeiten, je nachdem, was du genau tun möchtest.

| Methode / Befehl | 📝 Beschreibung                                                                                                                                  | 💻 Beispielcode                                                          |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| `remove()`       | Entfernt das **erste Vorkommen** eines bestimmten **Wertes**. Wenn der Wert nicht existiert, gibt es einen Fehler.                               | `fruechte.remove("Banane")`                                              |
| `pop()`          | Entfernt ein Element an einem bestimmten **Index** und **gibt es zurück**. Wenn kein Index angegeben wird, wird das **letzte** Element entfernt. | `entfernte_frucht = fruechte.pop(1)`<br>`letzte_frucht = fruechte.pop()` |
| `del`            | Das `del`-Schlüsselwort kann ein Element an einem bestimmten **Index** oder einen ganzen **Slice** löschen.                                      | `del fruechte[0]`<br>`del fruechte[1:3]`                                 |
| `clear()`        | Entfernt **alle** Elemente aus der Liste. Die Liste selbst bleibt als leere Liste bestehen.                                                      | `fruechte.clear()`                                                       |

<br><br><br>

## 📦 Tupel (Tuples)

Ein Tupel ist wie eine in Stein gemeißelte Liste, zum Beispiel eine Liste deiner Geburtsdaten (Tag, Monat, Jahr). Die Reihenfolge ist fest, aber du kannst die Werte **nicht mehr ändern**, nachdem das Tupel erstellt wurde. Man nennt das **unveränderlich** (_immutable_).

### 🔍 Elemente lesen (Zugriff)

Das Auslesen von Elementen funktioniert **exakt genauso wie bei Listen**: über den Index (positiv oder negativ) und Slicing.

```python
geburtsdaten = (15, 5, 1995)
# Zugriff über Index
print(geburtsdaten[0]) # Ausgabe: 15

# Zugriff über negativen Index
print(geburtsdaten[-1]) # Ausgabe: 1995

# Slicing
print(geburtsdaten[0:2]) # Ausgabe: (15, 5)
```

### ✏️ Elemente verändern (Manipulation)

Das ist der springende Punkt bei Tupeln: **Du kannst sie nicht verändern!** Jeder Versuch, einem Index einen neuen Wert zuzuweisen, führt zu einem Fehler.

```python
geburtsdaten = (15, 5, 1995)
# Dieser Code wird einen TypeError erzeugen!
# geburtsdaten[0] = 16
```

**Trick:** Wenn du ein Tupel "ändern" musst, erstellst du in Wahrheit ein komplett **neues Tupel** aus den Teilen des alten Tupels und den neuen Werten.

```python
altes_tupel = ("A", "B", "D")
# Erstelle ein neues Tupel, um "C" einzufügen
neues_tupel = altes_tupel[0:2] + ("C",) + altes_tupel[2:]
print(neues_tupel) # Ausgabe: ('A', 'B', 'C', 'D')
```

_Beachte das Komma bei `("C",)`. Es ist wichtig, damit Python weiß, dass es sich um ein Tupel mit einem Element handelt._

### ✨ Elemente hinzufügen & 🗑️ Elemente entfernen

Genau wie beim Verändern gilt auch hier: Da Tupel unveränderlich sind, kannst du keine Elemente direkt hinzufügen oder entfernen. Du musst immer ein **neues Tupel** erstellen.

<br><br><br>

## 📚 Dictionaries (Dictionaries)

Ein Dictionary ist wie ein Telefonbuch oder ein Lexikon. Du hast keinen Index (keine Seitenzahl), sondern du suchst nach einem eindeutigen **Schlüssel** (z.B. ein Name) und bekommst den dazugehörigen **Wert** (z.B. die Telefonnummer). Die Reihenfolge ist nicht so wichtig (obwohl sie in modernen Python-Versionen erhalten bleibt).

### 🔍 Elemente lesen (Zugriff)

Der Zugriff erfolgt immer über den **Schlüssel** in eckigen Klammern.

- **Zugriff über den Schlüssel:**

  ```python
  telefonbuch = {
      "Anna": "123-456",
      "Ben": "789-101",
      "Clara": "112-131"
  }
  print(telefonbuch["Anna"]) # Ausgabe: 123-456
  ```

  **Vorsicht:** Wenn du einen Schlüssel verwendest, der nicht existiert, bekommst du einen `KeyError`.

- **Sicherer Zugriff mit `.get()`:**
  Die `.get()`-Methode ist sicherer. Wenn der Schlüssel nicht existiert, gibt sie standardmäßig `None` zurück (oder einen von dir festgelegten Standardwert), anstatt einen Fehler zu verursachen.

  ```python
  # Sicherer Zugriff auf einen existierenden Schlüssel
  print(telefonbuch.get("Ben")) # Ausgabe: 789-101

  # Zugriff auf einen nicht existierenden Schlüssel
  print(telefonbuch.get("David")) # Ausgabe: None

  # Mit einem Standardwert, falls der Schlüssel nicht existiert
  print(telefonbuch.get("David", "Kontakt nicht gefunden")) # Ausgabe: Kontakt nicht gefunden
  ```

### ✏️ Elemente verändern (Manipulation)

Um den Wert eines bestehenden Schlüssel-Wert-Paares zu ändern, sprichst du den Schlüssel an und weist ihm einfach einen neuen Wert zu.

```python
telefonbuch = {"Anna": "123-456", "Ben": "789-101"}
print("Alte Nummer von Anna:", telefonbuch["Anna"]) # Ausgabe: Alte Nummer von Anna: 123-456

# Annas Nummer hat sich geändert
telefonbuch["Anna"] = "999-888"
print("Neue Nummer von Anna:", telefonbuch["Anna"]) # Ausgabe: Neue Nummer von Anna: 999-888
```

### ✨ Elemente hinzufügen

Das Hinzufügen funktioniert syntaktisch genau wie das Verändern: Wenn der Schlüssel noch nicht im Dictionary existiert, wird er einfach neu erstellt.

```python
telefonbuch = {"Anna": "123-456"}
# Füge einen neuen Eintrag für David hinzu
telefonbuch["David"] = "555-444"
print(telefonbuch) # Ausgabe: {'Anna': '123-456', 'David': '555-444'}
```

### 🗑️ Elemente entfernen

| Methode / Befehl | 📝 Beschreibung                                                                                                                                               | 💻 Beispielcode                           |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------- |
| `pop()`          | Entfernt das Schlüssel-Wert-Paar für den angegebenen **Schlüssel** und **gibt den Wert zurück**. Verursacht einen Fehler, wenn der Schlüssel nicht existiert. | `bens_nummer = telefonbuch.pop("Ben")`    |
| `popitem()`      | Entfernt das **zuletzt eingefügte** Schlüssel-Wert-Paar und gibt es als Tupel `(schlüssel, wert)` zurück.                                                     | `letzter_eintrag = telefonbuch.popitem()` |
| `del`            | Das `del`-Schlüsselwort löscht das Schlüssel-Wert-Paar für den angegebenen **Schlüssel**.                                                                     | `del telefonbuch["Clara"]`                |
| `clear()`        | Entfernt **alle** Schlüssel-Wert-Paare aus dem Dictionary.                                                                                                    | `telefonbuch.clear()`                     |

<br><br><br>

## 🧩 Sets (Sets)

Ein Set ist wie eine Kiste mit einzigartigen Sammelkarten. Es gibt zwei wichtige Regeln: **Die Reihenfolge ist nicht garantiert** und **jedes Element darf nur einmal vorkommen**.

### 🔍 Elemente lesen (Zugriff)

Da Sets keine geordnete Reihenfolge und keine Indizes haben, kannst du **nicht** direkt auf ein einzelnes Element zugreifen wie bei einer Liste (`mein_set[0]` funktioniert nicht).

Stattdessen prüfst du, ob ein Element im Set **enthalten ist**, oder du durchläufst alle Elemente mit einer Schleife.

- **Mitgliedschaft prüfen:**
  ```python
  meine_karten = {"Pikachu", "Glumanda", "Schiggy"}
  print("Pikachu" in meine_karten)  # Ausgabe: True
  print("Bisasam" in meine_karten)  # Ausgabe: False
  ```
- **Durch alle Elemente iterieren:**
  ```python
  for karte in meine_karten:
      print(karte)
  # Mögliche Ausgabe (Reihenfolge nicht garantiert):
  # Schiggy
  # Glumanda
  # Pikachu
  ```

### ✏️ Elemente verändern (Manipulation)

Du kannst ein Element in einem Set **nicht direkt verändern**. Ein Element ist entweder im Set oder nicht. Wenn du es "ändern" willst, musst du das alte Element **entfernen** und das neue **hinzufügen**.

### ✨ Elemente hinzufügen

Da jedes Element nur einmal vorkommen darf, wird ein Element, das du hinzufügen möchtest und das bereits existiert, einfach ignoriert.

| Methode    | 📝 Beschreibung                                                                                                              | 💻 Beispielcode                                                                                                                                 |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `add()`    | Fügt **ein einzelnes** Element zum Set hinzu.                                                                                | `meine_karten.add("Bisasam")`                                                                                                                   |
| `update()` | Fügt **alle Elemente** aus einem anderen Set (oder einer Liste, etc.) zum Set hinzu. Duplikate werden automatisch ignoriert. | `neue_karten = {"Evoli", "Pikachu"}`<br>`meine_karten.update(neue_karten)`<br>`# Das Set ist jetzt {"Pikachu", "Glumanda", "Schiggy", "Evoli"}` |

### 🗑️ Elemente entfernen

Hier gibt es einen wichtigen Unterschied zwischen zwei Methoden, je nachdem, ob ein Fehler ausgelöst werden soll oder nicht.

| Methode     | 📝 Beschreibung                                                                                                                                                       | 💻 Beispielcode                         |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
| `remove()`  | Entfernt ein bestimmtes Element. Wenn das Element **nicht im Set ist**, wird ein **`KeyError`** ausgelöst.                                                            | `meine_karten.remove("Glumanda")`       |
| `discard()` | Entfernt ein bestimmtes Element. Wenn das Element **nicht im Set ist**, passiert **einfach nichts**. Dies ist die sicherere Methode.                                  | `meine_karten.discard("Mewtu")`         |
| `pop()`     | Entfernt ein **zufälliges** (bzw. beliebiges) Element aus dem Set und gibt es zurück. Da Sets keine Ordnung haben, weißt du nie genau, welches Element entfernt wird. | `zufaellige_karte = meine_karten.pop()` |
| `clear()`   | Entfernt **alle** Elemente aus dem Set.                                                                                                                               | `meine_karten.clear()`                  |

<br><br><br>

## 🔄 Iteration über Datenstrukturen

Stell dir vor, du hast eine Kiste mit verschiedenen Dingen. "Iteration" bedeutet einfach, dass du jedes einzelne Ding in dieser Kiste nacheinander in die Hand nimmst und es dir ansiehst. In der Programmierung ist das nicht anders. Wir haben verschiedene "Kisten" (unsere Datenstrukturen wie Listen, Tupel, Dictionaries und Sets), und wir wollen die Elemente darin nacheinander durchgehen, um etwas mit ihnen zu tun. Das Werkzeug dafür ist meistens eine `for`-Schleife.

<br><br><br>

### 🚶‍♂️ Iteration über Listen (`list`)

Eine Liste ist wie eine Einkaufsliste: Die Reihenfolge ist wichtig, und du kannst Dinge hinzufügen oder wegstreichen. Wenn du über eine Liste iterierst, gehst du sie einfach von oben nach unten durch, in genau der Reihenfolge, in der die Elemente gespeichert sind.

**Beispiel:**
Stell dir vor, du hast eine Liste mit Früchten. Die Schleife nimmt sich nacheinander "Apfel", dann "Banane" und dann "Kirsche", gibt sie aus und ist dann fertig.

```python
# Eine einfache Liste von Früchten
fruechte_liste = ["Apfel", "Banane", "Kirsche"]

print("Früchte in meiner Liste:")
# Die for-Schleife geht jedes Element in der Liste durch
# In jedem Durchlauf wird das aktuelle Element in der Variable 'frucht' gespeichert
for frucht in fruechte_liste:
  # Wir geben das aktuelle Element aus
  print(frucht)
```

**Ergebnis:**

```
Früchte in meiner Liste:
Apfel
Banane
Kirsche
```

<br><br><br>

### 🚶‍♂️ Iteration über Tupel (`tuple`)

Ein Tupel ist wie eine Liste, die in Stein gemeißelt ist. Du kannst die Elemente nach dem Erstellen nicht mehr ändern. Die gute Nachricht ist: Das Iterieren funktioniert _exakt_ genauso wie bei einer Liste. Du gehst die Elemente in ihrer festgelegten Reihenfolge von vorne bis hinten durch.

**Beispiel:**
Ein Tupel könnte die Koordinaten eines Punktes im Raum speichern. Die Schleife nimmt sich nacheinander die 10, dann die 20 und dann die 30.

```python
# Ein Tupel, das RGB-Farbwerte repräsentiert
farb_werte_tupel = (255, 128, 0) # Orange

print("Die einzelnen Farbwerte:")
# Die Iteration funktioniert genauso wie bei einer Liste
# 'wert' nimmt nacheinander die Werte 255, 128 und 0 an
for wert in farb_werte_tupel:
  print(wert)
```

**Ergebnis:**

```
Die einzelnen Farbwerte:
255
128
0
```

<br><br><br>

### 🗂️ Iteration über Dictionaries (`dict`)

Ein Dictionary ist wie ein Telefonbuch. Du hast einen "Schlüssel" (den Namen einer Person) und einen "Wert" (die Telefonnummer). Beim Iterieren hast du mehrere Möglichkeiten, je nachdem, was du brauchst.

**1. Iteration über die Schlüssel (Standard)**
Wenn du einfach `for x in mein_dict:` schreibst, bekommst du nacheinander nur die Schlüssel.

```python
# Ein Dictionary, das Länder ihren Hauptstädten zuordnet
hauptstaedte = {
  "Deutschland": "Berlin",
  "Frankreich": "Paris",
  "Italien": "Rom"
}

print("Nur die Länder (Schlüssel):")
for land in hauptstaedte:
  print(land)
```

**Ergebnis:**

```
Nur die Länder (Schlüssel):
Deutschland
Frankreich
Italien
```

**2. Iteration über die Werte**
Wenn du nur an den Werten (den Hauptstädten) interessiert bist, kannst du die `.values()`-Methode verwenden.

```python
# Dasselbe Dictionary wie oben
hauptstaedte = {
  "Deutschland": "Berlin",
  "Frankreich": "Paris",
  "Italien": "Rom"
}

print("\nNur die Hauptstädte (Werte):")
for stadt in hauptstaedte.values():
  print(stadt)
```

**Ergebnis:**

```
Nur die Hauptstädte (Werte):
Berlin
Paris
Rom
```

**3. Iteration über Schlüssel und Werte gleichzeitig (am häufigsten!)**
Das ist der nützlichste Weg. Mit der `.items()`-Methode bekommst du in jedem Schleifendurchlauf sowohl den Schlüssel als auch den zugehörigen Wert als Paar.

```python
# Dasselbe Dictionary wie oben
hauptstaedte = {
  "Deutschland": "Berlin",
  "Frankreich": "Paris",
  "Italien": "Rom"
}

print("\nLänder und ihre Hauptstädte (Schlüssel und Wert):")
# .items() gibt uns Paare von (Schlüssel, Wert)
for land, stadt in hauptstaedte.items():
  print(f"Die Hauptstadt von {land} ist {stadt}.")
```

**Ergebnis:**

```
Länder und ihre Hauptstädte (Schlüssel und Wert):
Die Hauptstadt von Deutschland ist Berlin.
Die Hauptstadt von Frankreich ist Paris.
Die Hauptstadt von Italien ist Rom.
```

<br><br><br>

### 🎲 Iteration über Sets (`set`)

Ein Set ist wie ein Beutel voller einzigartiger Murmeln. Jede Murmel (jedes Element) gibt es nur einmal, und die Murmeln liegen ungeordnet im Beutel. Wenn du iterierst, ziehst du eine Murmel nach der anderen heraus, aber du kannst dich nicht darauf verlassen, in welcher Reihenfolge sie kommen.

**Beispiel:**
Wir erstellen ein Set mit Zahlen und fügen absichtlich Duplikate hinzu. Das Set wird sie automatisch entfernen. Bei der Ausgabe siehst du, dass jedes Element nur einmal vorkommt, aber die Reihenfolge nicht unbedingt der ursprünglichen Reihenfolge entspricht.

```python
# Ein Set von Zahlen. Duplikate (3 und 5) werden ignoriert.
einzigartige_zahlen = {1, 5, 3, 8, 3, 5, 2}

print("Einzigartige Zahlen im Set (Reihenfolge nicht garantiert):")
# Die for-Schleife geht jedes einzigartige Element durch
for zahl in einzigartige_zahlen:
  print(zahl)
```

**Mögliches Ergebnis (die Reihenfolge kann variieren!):**

```
Einzigartige Zahlen im Set (Reihenfolge nicht garantiert):
1
2
3
5
8
```

<br><br><br>
