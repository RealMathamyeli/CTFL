# Python-Fehler und Dateiverarbeitung

Fehlerbehandlung in Python

- Grundlagen von Exceptions und Fehlerarten
- Verwendung von try, except zur Fehlerkontrolle

Einfache Dateiverarbeitung

- Öffnen, Lesen und Schreiben von Dateien mit open()
- Umgang mit Kontextmanagern: with-Statement bei Dateizugriffen<br><br><br>

# 🛡️ Fehlerbehandlung in Python

Stell dir vor, du schreibst ein Programm. Es ist wie das Bauen mit Legosteinen: Meistens passt alles super zusammen. Aber manchmal versucht man, einen Stein an eine Stelle zu setzen, wo er nicht hingehört, oder ein Stein fehlt komplett. In der Programmierung ist das ganz ähnlich. Ein Fehler ist nicht unbedingt etwas Schlechtes, sondern oft ein wichtiger Hinweis vom Programm, dass etwas nicht so gelaufen ist, wie geplant. Die Fehlerbehandlung ist deine Methode, um auf diese unerwarteten Situationen vorbereitet zu sein und dein Programm davor zu bewahren, einfach "abzustürzen". Anstatt dass alles zusammenbricht, fängst du den Fehler elegant ab und entscheidest, was als Nächstes passieren soll.

<br><br><br>

## 💥 Grundlagen von Exceptions und Fehlerarten

In Python sprechen wir bei Fehlern, die während der Ausführung eines Programms auftreten, von **Exceptions** (Ausnahmen). Eine Exception ist ein Ereignis, das den normalen Fluss eines Programms unterbricht. Python "wirft" (eng. raises) eine Exception, wenn es auf ein Problem stößt. Wenn diese Exception nicht "gefangen" (eng. caught) wird, beendet sich das Programm mit einer Fehlermeldung.

Man kann grundsätzlich zwischen zwei Hauptarten von Fehlern unterscheiden:

### 🧐 Syntaxfehler (Syntax Errors)

Das sind die einfachsten Fehler. Man kann sie sich wie Grammatik- oder Rechtschreibfehler in einem Satz vorstellen. Python liest deinen Code, bevor es ihn ausführt, und wenn die "Grammatik" nicht stimmt, versteht es gar nicht erst, was du von ihm willst. Das Programm wird also gar nicht erst gestartet.

Ein klassisches Beispiel ist ein vergessener Doppelpunkt nach einer `if`-Anweisung oder einer `for`-Schleife:

```python
name = "Alex"
if name == "Alex"  # Hier fehlt der Doppelpunkt!
    print("Hallo Alex!")
```

Wenn du diesen Code ausführen willst, wird Python sich sofort beschweren und einen `SyntaxError` melden. Diese Fehler sind meist leicht zu beheben, da die Fehlermeldung oft genau auf die problematische Zeile hinweist.

### 💣 Laufzeitfehler (Runtime Errors / Exceptions)

Diese Fehler sind kniffliger. Dein Code ist grammatikalisch korrekt (kein `SyntaxError`), aber während das Programm läuft, passiert etwas Unerwartetes.

Stell dir vor, du hast ein Rezept (dein Programm). Das Rezept ist perfekt geschrieben. Aber eine Anweisung lautet: "Nimm ein Ei aus dem Kühlschrank". Du öffnest den Kühlschrank, aber es sind keine Eier mehr da. Das Rezept an sich ist nicht falsch, aber die Situation während der Ausführung führt zu einem Problem. Das ist ein Laufzeitfehler.

Hier sind einige der häufigsten Laufzeitfehler (Exceptions) in Python:

| Emoji | Exception-Name      | Erklärung                                                                                                     | Beispielcode                                       |
| :---: | ------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
|  ➕   | `TypeError`         | Tritt auf, wenn eine Operation auf einen unpassenden Datentyp angewendet wird.                                | `print("Hallo" + 5)` (String und Zahl addieren)    |
|  🔢   | `ValueError`        | Tritt auf, wenn eine Funktion ein Argument vom richtigen Typ, aber mit einem unpassenden Wert erhält.         | `int("Hallo")` (Text in Zahl umwandeln)            |
|  ❓   | `NameError`         | Tritt auf, wenn eine Variable oder Funktion verwendet wird, die noch nicht definiert wurde.                   | `print(meine_variable)` (Variable existiert nicht) |
|  📈   | `IndexError`        | Tritt auf, wenn du versuchst, auf einen Index in einer Liste zuzugreifen, den es nicht gibt.                  | `meine_liste = [1, 2, 3]; print(meine_liste[5])`   |
|  🔑   | `KeyError`          | Ähnlich wie `IndexError`, aber für Dictionaries. Tritt auf, wenn ein Schlüssel nicht im Dictionary existiert. | `mein_dict = {"a": 1}; print(mein_dict["b"])`      |
|  ➗   | `ZeroDivisionError` | Tritt auf, wenn du versuchst, eine Zahl durch Null zu teilen.                                                 | `ergebnis = 10 / 0`                                |

Diese Fehler bringen dein Programm zum Absturz, _es sei denn_, du fängst sie ab. Und genau dafür gibt es `try` und `except`.

<br><br><br>

## 👷 Verwendung von try, except zur Fehlerkontrolle

Stell dir einen Trapezkünstler im Zirkus vor. Der waghalsige Sprung ist der "riskante" Teil deines Codes. Das Sicherheitsnetz darunter ist dein `try...except`-Block. Wenn der Sprung gelingt, ist alles super. Wenn der Künstler aber fällt, wird er vom Netz aufgefangen und es passiert nichts Schlimmes.

Die grundlegende Struktur sieht so aus:

```python
try:
    # "Riskanter" Code, der eine Exception auslösen KÖNNTE.
    # Der Trapezsprung.
    pass
except:
    # Dieser Code wird NUR DANN ausgeführt, wenn im try-Block ein Fehler auftritt.
    # Das Sicherheitsnetz.
    pass
```

### 🧱 Der `try`-Block

Hier schreibst du den Code, bei dem du vermutest, dass er zu einem Fehler führen könnte. Zum Beispiel, wenn du eine Benutzereingabe in eine Zahl umwandeln oder eine Datei öffnen willst, die vielleicht gar nicht existiert.

### 🥅 Der `except`-Block

Dieser Block ist der "Plan B". Er wird ignoriert, wenn im `try`-Block alles gut geht. Wenn aber im `try`-Block eine Exception auftritt, stoppt Python die Ausführung des `try`-Blocks sofort und springt in den passenden `except`-Block. Dort kannst du dann auf den Fehler reagieren, z.B. eine nette Fehlermeldung ausgeben, einen Standardwert verwenden oder den Vorgang wiederholen.

**Ein praktisches Beispiel:** Wir fragen den Benutzer nach seinem Alter und wollen es in eine Zahl umwandeln. Was passiert, wenn der Benutzer "Hallo" anstatt "25" eingibt?

```python
try:
    # Versuch, die Eingabe in eine Ganzzahl umzuwandeln
    user_input = input("Bitte gib dein Alter ein: ")
    alter = int(user_input)
    print(f"In einem Jahr wirst du {alter + 1} Jahre alt sein.")

except ValueError:
    # Dieser Block wird ausgeführt, wenn int() einen Fehler wirft,
    # weil die Eingabe keine gültige Zahl ist (z.B. "Hallo").
    print("Das war keine gültige Zahl! Bitte gib nur Ziffern ein.")
```

Hier fangen wir gezielt einen `ValueError` ab. Das ist sehr gute Praxis! Ein allgemeines `except:` ohne Angabe des Fehlertyps würde zwar auch funktionieren, aber es ist wie ein riesiges Netz, das alles fängt. Es ist besser zu wissen, _welche Art_ von Fehler man erwartet, um spezifisch darauf reagieren zu können.

### 🤹 Mehrere Fehler behandeln

Was ist, wenn in deinem `try`-Block verschiedene Arten von Fehlern auftreten können? Du hast zwei Möglichkeiten:

#### 1. Mehrere `except`-Blöcke

Du kannst für jeden erwarteten Fehlertyp einen eigenen `except`-Block schreiben.

```python
meine_liste = [10, 2, 0]

try:
    index = int(input("Gib einen Index ein (0, 1 oder 2): "))
    divisor = meine_liste[index]
    ergebnis = 100 / divisor
    print(f"Das Ergebnis ist: {ergebnis}")

except ValueError:
    # Wenn die Eingabe keine Zahl ist
    print("Fehler: Du musst eine Zahl eingeben!")

except IndexError:
    # Wenn der Index außerhalb der Liste liegt (z.B. 5)
    print("Fehler: Der Index ist ungültig! Wähle 0, 1 oder 2.")

except ZeroDivisionError:
    # Wenn versucht wird, durch 0 zu teilen (bei Index 2)
    print("Fehler: Division durch Null ist nicht erlaubt!")
```

#### 2. Mehrere Exceptions in einem Block zusammenfassen

Wenn du für verschiedene Fehlerarten dieselbe Reaktion ausführen möchtest, kannst du sie in einem Tupel zusammenfassen.

```python
try:
    # ... riskanter Code ...
    pass
except (ValueError, TypeError):
    # Dieser Code wird ausgeführt, wenn entweder ein ValueError ODER ein TypeError auftritt
    print("Ein Eingabe- oder Typenfehler ist aufgetreten.")
```

### ✅ Der `else`-Block

Manchmal möchtest du Code ausführen, aber nur dann, wenn im `try`-Block _kein_ Fehler aufgetreten ist. Dafür gibt es den `else`-Block. Er wird direkt nach dem `try`-Block ausgeführt, aber nur, wenn kein `except`-Block angesprungen ist.

```python
try:
    alter_str = input("Gib dein Alter ein: ")
    alter = int(alter_str)
except ValueError:
    print("Ungültige Eingabe.")
else:
    # Dieser Teil wird NUR ausgeführt, wenn die Umwandlung in int() erfolgreich war.
    print(f"Du bist {alter} Jahre alt.")
    print("Die Eingabe war erfolgreich!")
```

Das ist nützlich, um den Code, der vom Erfolg des `try`-Blocks abhängt, sauber vom `try`-Block selbst zu trennen.

### 🧹 Der `finally`-Block

Stell dir vor, du öffnest eine wichtige Datei oder baust eine Verbindung zu einer Datenbank auf. Egal, ob alles gut geht oder ein Fehler auftritt – am Ende musst du diese Verbindung unbedingt wieder schließen, um Ressourcen freizugeben. Genau dafür ist `finally` da.

Der Code in einem `finally`-Block wird **immer** ausgeführt, egal was passiert:

- Wenn der `try`-Block erfolgreich war.
- Wenn ein Fehler im `try`-Block aufgetreten ist und von einem `except` gefangen wurde.
- Wenn ein Fehler im `try`-Block aufgetreten ist, der von **keinem** `except` gefangen wurde (das Programm stürzt danach trotzdem ab, aber `finally` läuft noch).

```python
datei = None  # Variable außerhalb definieren
try:
    print("Öffne eine Datei...")
    datei = open("wichtige_daten.txt", "w")
    # Ein Fehler wird absichtlich provoziert
    ergebnis = 10 / 0
    datei.write("Diese Zeile wird nie geschrieben.")

except ZeroDivisionError:
    print("Ein Fehler ist aufgetreten: Division durch Null!")

finally:
    # Dieser Block wird IMMER ausgeführt.
    print("Aufräumarbeiten werden durchgeführt...")
    if datei:
        datei.close()
        print("Datei wurde sicher geschlossen.")
```

In diesem Beispiel wird die Datei geöffnet, dann tritt ein `ZeroDivisionError` auf. Der `except`-Block wird ausgeführt. Und ganz zum Schluss wird der `finally`-Block ausgeführt, der sicherstellt, dass die geöffnete Datei auch wieder geschlossen wird.

Hier ist eine Tabelle, die den Ablauf visualisiert:

| Szenario                                            | `try` wird ausgeführt | `except` wird ausgeführt | `else` wird ausgeführt | `finally` wird ausgeführt |
| --------------------------------------------------- | :-------------------: | :----------------------: | :--------------------: | :-----------------------: | ------------------------------- |
| Kein Fehler im `try`-Block                          |          ✅           |            ❌            |           ✅           |            ✅             |
| Ein passender Fehler tritt im `try`-Block auf       |     Teilweise ✅      |            ✅            |           ❌           |            ✅             |
| Ein nicht passender Fehler tritt im `try`-Block auf |     Teilweise ✅      |            ❌            |           ❌           |            ✅             | # 📂 Einfache Dateiverarbeitung |

Stell dir vor, dein Computer hat zwei Arten von Gedächtnis: Das Kurzzeitgedächtnis (den Arbeitsspeicher oder RAM) und das Langzeitgedächtnis (die Festplatte). Wenn du ein Python-Programm ausführst, werden alle Variablen und Daten im Kurzzeitgedächtnis gespeichert. Sobald das Programm beendet ist, wird dieses Gedächtnis gelöscht – alles ist weg!

Damit wir Daten dauerhaft speichern können, um sie später wiederzuverwenden, brauchen wir das Langzeitgedächtnis. Und genau hier kommen Dateien ins Spiel. Dateien sind wie Notizbücher auf deiner Festplatte, in die dein Programm Informationen schreiben und aus denen es später wieder lesen kann. Die Dateiverarbeitung ist also der Prozess, mit diesen "Notizbüchern" zu arbeiten.

<br><br><br>

## 📖 Öffnen, Lesen und Schreiben von Dateien mit `open()`

Der allererste Schritt, um mit einer Datei zu arbeiten, ist, sie zu "öffnen". In Python verwenden wir dafür die eingebaute Funktion `open()`. Man kann sich das so vorstellen, als würdest du zu einem Aktenschrank (deiner Festplatte) gehen und eine bestimmte Akte (eine Datei) herausholen, um sie zu bearbeiten.

Die `open()`-Funktion benötigt mindestens zwei wichtige Informationen (Argumente):

1.  **Dateiname:** Welches "Notizbuch" möchtest du öffnen? (z.B. `"meine_notizen.txt"`)
2.  **Modus:** Was möchtest du mit dem Notizbuch tun? Nur lesen, hineinschreiben oder etwas hinzufügen?

Der Modus ist entscheidend, denn er legt fest, welche Operationen du mit der Datei durchführen darfst.

### 📜 Die wichtigsten Modi im Überblick

Hier ist eine Tabelle, die dir die gebräuchlichsten Modi erklärt. Das ist sehr wichtig, also schau sie dir gut an!

| Modus         | Kürzel | Beschreibung                                                                                                                  | Was passiert, wenn die Datei nicht existiert? |
| :------------ | :----- | :---------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- |
| **Lesen**     | `'r'`  | **r**ead. Öffnet eine Datei nur zum Lesen. Du kannst nichts verändern. Dies ist der Standardmodus, wenn du nichts angibst.    | Das Programm bricht mit einem Fehler ab.      |
| **Schreiben** | `'w'`  | **w**rite. Öffnet eine Datei zum Schreiben. **Achtung:** Wenn die Datei bereits existiert, wird ihr gesamter Inhalt gelöscht! | Die Datei wird neu erstellt.                  |
| **Anhängen**  | `'a'`  | **a**ppend. Öffnet eine Datei, um etwas am Ende hinzuzufügen. Der bestehende Inhalt bleibt erhalten.                          | Die Datei wird neu erstellt.                  |

Schauen wir uns das jetzt mal in der Praxis an.

### 📝 Eine Datei schreiben (Modus 'w')

Stellen wir uns vor, wir wollen eine Einkaufsliste erstellen und in einer Datei namens `einkaufsliste.txt` speichern.

```python
# 1. Die Datei im Schreibmodus ('w') öffnen.
#    Python gibt uns ein "Datei-Objekt" zurück, das wir in einer Variable speichern.
#    Wir nennen die Variable hier "datei".
datei = open('einkaufsliste.txt', 'w')

# 2. Jetzt können wir mit der .write()-Methode Text in die Datei schreiben.
#    Der '\n' am Ende sorgt für einen Zeilenumbruch, wie die Enter-Taste.
datei.write('Milch\n')
datei.write('Eier\n')
datei.write('Brot\n')

# 3. GANZ WICHTIG: Die Datei wieder schließen!
#    Das ist wie das Zurücklegen der Akte in den Schrank.
#    Wenn du das vergisst, können Daten verloren gehen oder die Datei blockiert werden.
datei.close()
```

Nachdem du diesen Code ausgeführt hast, findest du im selben Ordner, in dem dein Python-Skript liegt, eine neue Datei `einkaufsliste.txt`. Wenn du sie öffnest, siehst du den Inhalt:

```
Milch
Eier
Brot
```

### 📖 Eine Datei lesen (Modus 'r')

Super, wir haben unsere Liste gespeichert. Jetzt wollen wir sie uns in einem anderen Programmteil wieder ansehen. Dazu öffnen wir die Datei im Lesemodus (`'r'`).

```python
# 1. Die Datei im Lesemodus ('r') öffnen.
datei = open('einkaufsliste.txt', 'r')

# 2. Den gesamten Inhalt der Datei auf einmal lesen und in einer Variable speichern.
#    Die .read()-Methode liest alles von Anfang bis Ende.
ganzer_inhalt = datei.read()

# 3. Wichtig: Auch nach dem Lesen die Datei immer schließen!
datei.close()

# 4. Den gelesenen Inhalt ausgeben.
print("--- Kompletter Inhalt: ---")
print(ganzer_inhalt)
```

Es gibt auch andere Wege zu lesen:

- `.readline()`: Liest nur eine einzige Zeile.
- `.readlines()`: Liest alle Zeilen und gibt sie als Liste von Texten (Strings) zurück.

Hier ein Beispiel mit `.readlines()`:

```python
datei = open('einkaufsliste.txt', 'r')

# Alle Zeilen als Liste lesen
alle_zeilen = datei.readlines()

datei.close()

print("--- Inhalt als Liste von Zeilen: ---")
print(alle_zeilen) # Ausgabe: ['Milch\n', 'Eier\n', 'Brot\n']

# Wir können jetzt durch die Liste gehen
print("\n--- Jede Zeile einzeln: ---")
for zeile in alle_zeilen:
    # .strip() entfernt unsichtbare Zeichen wie den Zeilenumbruch '\n'
    print(zeile.strip())
```

### ➕ Etwas an eine Datei anhängen (Modus 'a')

Oh, wir haben die Butter vergessen! Wir wollen sie zur Liste hinzufügen, ohne den Rest zu löschen. Hierfür ist der Anhänge-Modus (`'a'`) perfekt.

```python
# 1. Die Datei im Anhänge-Modus ('a') öffnen.
datei = open('einkaufsliste.txt', 'a')

# 2. Etwas Neues an das Ende der Datei schreiben.
datei.write('Butter\n')

# 3. Wie immer: Datei schließen.
datei.close()
```

Wenn du jetzt erneut den Lese-Code von oben ausführst, wirst du sehen, dass die `einkaufsliste.txt` nun so aussieht:

```
Milch
Eier
Brot
Butter
```

<br><br><br>

## 🤝 Umgang mit Kontextmanagern: Das `with`-Statement

Du hast oben gesehen, dass ich immer wieder betont habe, wie wichtig `datei.close()` ist. Was passiert, wenn du es vergisst? Oder was ist, wenn dein Programm abstürzt, _bevor_ es `datei.close()` erreicht? Die Datei könnte offen bleiben, was zu Problemen führen kann.

Genau für dieses Problem gibt es in Python eine elegantere und sicherere Lösung: das `with`-Statement.

Ein `with`-Statement ist ein sogenannter **Kontextmanager**. Stell es dir wie einen verlässlichen Assistenten vor. Du sagst ihm: "Assistent, öffne mir bitte diese Datei und gib sie mir unter dem Namen `datei`." Der Assistent tut das. Du arbeitest dann mit der Datei innerhalb eines eingerückten Blocks. Der Clou ist: Sobald du diesen Block verlässt (egal ob normal oder durch einen Fehler), sorgt der Assistent **automatisch** und **garantiert** dafür, dass die Datei ordnungsgemäß geschlossen wird. Du musst dich nie wieder um `datei.close()` kümmern!

### ✅ Schreiben mit `with`

Schauen wir uns das Schreib-Beispiel von vorhin an, aber diesmal mit der `with`-Magie:

```python
# Das "with open(...) as datei:" kümmert sich um alles.
# "datei" ist hier wieder unsere Variable für das Datei-Objekt.
# Alles, was eingerückt ist, passiert, während die Datei offen ist.
with open('einkaufsliste_neu.txt', 'w') as datei:
    datei.write('Äpfel\n')
    datei.write('Bananen\n')
    # Hier passiert ein bisschen Magie...

# Sobald der Code-Block hier zu Ende ist (die Einrückung hört auf),
# wird die Datei automatisch geschlossen. Kein datei.close() nötig!
# Die Datei ist jetzt sicher gespeichert.
```

Dieser Code ist nicht nur kürzer und besser lesbar, sondern vor allem viel sicherer.

### ✅ Lesen mit `with`

Dasselbe gilt natürlich auch für das Lesen:

```python
# Öffnen der Datei mit dem with-Statement
with open('einkaufsliste_neu.txt', 'r') as datei:
    # Den Inhalt lesen, solange der Block aktiv ist
    inhalt = datei.read()

# Hier draußen ist die Datei bereits wieder geschlossen.
# Wir können aber immer noch mit der Variable 'inhalt' arbeiten.
print("--- Sicher gelesen mit 'with': ---")
print(inhalt)
```

**Fazit zum `with`-Statement:**
Es ist die moderne, sicherere und empfohlene Methode, um mit Dateien in Python zu arbeiten. Mache es dir zur Gewohnheit, für Dateizugriffe **immer** das `with`-Statement zu verwenden. Es nimmt dir die Sorge um das Schließen der Datei komplett ab und macht deinen Code robuster.
