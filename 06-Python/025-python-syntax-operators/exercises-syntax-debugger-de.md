# 🔧 Syntax-Korrektur-Übungen: Python Debugger

- Diese Übungen enthalten fehlerhaften Code mit Syntax-Fehlern.
- Deine Aufgabe ist es, die Fehler zu finden und zu korrigieren!

**Lernziele:**

- Einrückungsfehler erkennen und beheben
- Variablennamen-Konventionen verstehen
- Richtige Verwendung von Anführungszeichen
- Typkonvertierung korrekt anwenden
- Operatoren richtig einsetzen

---

## Übung 1: Einrückungsfehler

**Fehlertyp:** IndentationError

```python
alter = 18
if alter >= 18:
print("Du bist volljährig.")
print("Du darfst wählen.")
print("Programm beendet.")
```

**Aufgabe:** Korrigiere die Einrückung, sodass der Code korrekt ausgeführt wird.

- Output soll sein:

```
Du bist volljährig.
Du darfst wählen.
Programm beendet.
```

- Die letzte Zeile soll immer ausgeführt werden, unabhängig von der Bedingung.

---

## Übung 2: Fehlende Anführungszeichen

**Fehlertyp:** NameError / SyntaxError

```python
name = Max Mustermann
alter = 30
print("Hallo, mein Name ist, name, und ich bin, alter, Jahre alt.")
```

**Aufgabe:** Korrigiere die fehlenden oder falschen Anführungszeichen.

**Hinweis:** Nutze f-Strings für die Ausgabe, damit die Variablen korrekt eingebunden werden.

---

## Übung 3: Ungültige Variablennamen

**Fehlertyp:** SyntaxError

```python
1_platz = "Gold"
mein name = "Anna"
benutzer-alter = 25
class = "Python-Kurs"

print(1_platz)
print(mein name)
print(benutzer-alter)
print(class)
```

**Aufgabe:** Korrigiere alle ungültigen Variablennamen nach den Python-Regeln.

---

## Übung 4: Fehlende Typkonvertierung

**Fehlertyp:** TypeError

```python
alter = input("Wie alt bist du? ")
naechstes_jahr = alter + 1
print("Nächstes Jahr bist du", naechstes_jahr, "Jahre alt.")
```

**Aufgabe:** Korrigiere den Fehler, damit die Berechnung funktioniert.

Output soll sein (bei Eingabe 25):

```
Nächstes Jahr bist du 26 Jahre alt.
```

---

## Übung 5: Gemischte Anführungszeichen

**Fehlertyp:** SyntaxError

```python
nachricht1 = "Hallo Welt!'
nachricht2 = 'Python ist toll!"
nachricht3 = "Er sagte: "Guten Tag""

print(nachricht1)
print(nachricht2)
print(nachricht3)
```

**Aufgabe:** Korrigiere die Anführungszeichen-Fehler.

---

## Übung 6:

**Fehlertyp:** SyntaxError / NameError

```python
x = 10
y = 5

summe = x plus y
differenz = x minus y
produkt = x × y
quotient = x ÷ y

print(summe, differenz, produkt, quotient)
```

**Aufgabe:** Ersetze die falschen Operatoren durch die korrekten Python-Operatoren.

---

## Übung 7:

**Fehlertyp:** SyntaxError

```python
name = "Maria"
alter = 28
stadt = "Hamburg"

print "Hallo, ich bin" name
print("Ich bin", alter "Jahre alt")
print("Ich wohne in" + stadt)
```

**Aufgabe:** Korrigiere den Code

- Output soll sein:

```
Hallo, ich bin Maria
Ich bin 28 Jahre alt
Ich wohne in Hamburg
```

---

## Übung 8:

**Fehlertyp:** IndentationError

```python
temperatur = 25

if temperatur > 30:
print("Es ist sehr heiß!")
    print("Trinke viel Wasser.")
  print("Bleib im Schatten.")
print("Wettercheck abgeschlossen.")
```

**Aufgabe:** Korrigiere den Code

- Output soll sein (bei temperatur = 25):

```
Wettercheck abgeschlossen.
```

---

## Übung 9:

**Fehlertyp:** TypeError

```python
preis = 19.99
anzahl = 3
artikel = "Bücher"

gesamtpreis = preis * anzahl
nachricht = "Du hast " + anzahl + " " + artikel + " für " + gesamtpreis + " Euro gekauft."

print(nachricht)
```

**Aufgabe:** Korrigiere die Fehler bei der String-Verkettung.

- Output soll sein:

```
Du hast 3 Bücher für 59.97 Euro gekauft.
```

---

## Übung 10: Mehrzeiliger Code und Kommentare

**Fehlertyp:** SyntaxError

```python
# Dies ist ein Programm zur Berechnung des BMI
gewicht = 75  Das Gewicht in kg
groesse = 1.80  # Die Größe in Metern

bmi = gewicht / (groesse * groesse
print("Dein BMI ist:", bmi)

"""
Dies sollte eine Nachricht ausgeben
print("BMI berechnet!")
"""
```

**Aufgabe:** Korrigiere alle Syntax-Fehler in diesem Code.

---

## Übung 11: Zuweisungsoperatoren

**Fehlertyp:** SyntaxError / TypeError

```python
punkte = 100
punkte =+ 50
punkte =- 20
punkte =* 2

print("Deine Punkte:", punkte)
```

**Aufgabe:** Korrigiere die falschen Zuweisungsoperatoren.

---

## Übung 12: Mehrere Fehler kombiniert

**Fehlertyp:** Mehrere Fehlertypen

```python
benutzer name = input(Wie heißt du? )
benutzer_alter = input("Wie alt bist du? ")

if benutzer_alter >= 18:
    print("Hallo benutzer name! Du bist volljährig.")
        print("Du hast Zugriff auf alle Funktionen.")

geburts_jahr = 2026 - benutzer_alter
print("Du wurdest im Jahr" geburts_jahr geboren.)
```

**Aufgabe:** Finde und korrigiere **alle** Fehler in diesem Code.

**Hinweis:** Es gibt mindestens 8 Fehler! Suche nach: Variablennamen, Anführungszeichen, Typkonvertierung, Einrückung, und mehr.

---

## 🎯 Lösungsstrategien

Wenn du auf einen Fehler stößt:

1. **Lies die Fehlermeldung genau** - Python sagt dir oft, was falsch ist und in welcher Zeile
2. **Prüfe die Zeile VOR dem Fehler** - manchmal liegt der Fehler in der vorherigen Zeile (z.B. fehlende schließende Klammer)
3. **Achte auf Einrückung** - alle Zeilen im gleichen Block müssen gleich eingerückt sein
4. **Überprüfe Anführungszeichen** - öffnende und schließende müssen übereinstimmen
5. **Denke an Typkonvertierung** - `input()` gibt immer einen String zurück
6. **Verwende einen Code-Editor** - er hebt Fehler oft farblich hervor

---

## 💡 Häufige Fehlertypen

| Fehlertyp          | Bedeutung         | Häufige Ursache                                                    |
| ------------------ | ----------------- | ------------------------------------------------------------------ |
| `SyntaxError`      | Syntaxfehler      | Fehlende Klammern, falsche Anführungszeichen, ungültige Operatoren |
| `IndentationError` | Einrückungsfehler | Inkonsistente oder fehlende Einrückung                             |
| `NameError`        | Unbekannter Name  | Fehlende Anführungszeichen um Text, Tippfehler in Variablennamen   |
| `TypeError`        | Typ-Fehler        | Falsche Operation für Datentyp (z.B. String + Integer)             |
| `ValueError`       | Wert-Fehler       | Typkonvertierung nicht möglich (z.B. `int("abc")`)                 |
