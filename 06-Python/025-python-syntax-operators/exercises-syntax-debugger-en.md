# 🔧 Syntax Correction Exercises: Python Debugger

- These exercises contain faulty code with syntax errors.
- Your task is to find and correct the errors!

**Learning Objectives:**

- Recognize and fix indentation errors
- Understand variable naming conventions
- Proper use of quotation marks
- Apply type conversion correctly
- Use operators correctly

---

## Exercise 1: Indentation Error

**Error Type:** IndentationError

```python
alter = 18
if alter >= 18:
print("Du bist volljährig.")
print("Du darfst wählen.")
print("Programm beendet.")
```

**Task:** Correct the indentation so that the code executes correctly.

- Output should be:

```
Du bist volljährig.
Du darfst wählen.
Programm beendet.
```

- The last line should always be executed, regardless of the condition.

---

## Exercise 2: Missing Quotation Marks

**Error Type:** NameError / SyntaxError

```python
name = Max Mustermann
alter = 30
print("Hallo, mein Name ist, name, und ich bin, alter, Jahre alt.")
```

**Task:** Correct the missing or incorrect quotation marks.

**Hint:** Use f-strings for the output so that the variables are correctly embedded.

---

## Exercise 3: Invalid Variable Names

**Error Type:** SyntaxError

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

**Task:** Correct all invalid variable names according to Python rules.

---

## Exercise 4: Missing Type Conversion

**Error Type:** TypeError

```python
alter = input("Wie alt bist du? ")
naechstes_jahr = alter + 1
print("Nächstes Jahr bist du", naechstes_jahr, "Jahre alt.")
```

**Task:** Correct the error so that the calculation works.

Output should be (with input 25):

```
Nächstes Jahr bist du 26 Jahre alt.
```

---

## Exercise 5: Mixed Quotation Marks

**Error Type:** SyntaxError

```python
nachricht1 = "Hallo Welt!'
nachricht2 = 'Python ist toll!"
nachricht3 = "Er sagte: "Guten Tag""

print(nachricht1)
print(nachricht2)
print(nachricht3)
```

**Task:** Correct the quotation mark errors.

---

## Exercise 6:

**Error Type:** SyntaxError / NameError

```python
x = 10
y = 5

summe = x plus y
differenz = x minus y
produkt = x × y
quotient = x ÷ y

print(summe, differenz, produkt, quotient)
```

**Task:** Replace the incorrect operators with the correct Python operators.

---

## Exercise 7:

**Error Type:** SyntaxError

```python
name = "Maria"
alter = 28
stadt = "Hamburg"

print "Hallo, ich bin" name
print("Ich bin", alter "Jahre alt")
print("Ich wohne in" + stadt)
```

**Task:** Correct the code

- Output should be:

```
Hallo, ich bin Maria
Ich bin 28 Jahre alt
Ich wohne in Hamburg
```

---

## Exercise 8:

**Error Type:** IndentationError

```python
temperatur = 25

if temperatur > 30:
print("Es ist sehr heiß!")
    print("Trinke viel Wasser.")
  print("Bleib im Schatten.")
print("Wettercheck abgeschlossen.")
```

**Task:** Correct the code

- Output should be (with temperatur = 25):

```
Wettercheck abgeschlossen.
```

---

## Exercise 9:

**Error Type:** TypeError

```python
preis = 19.99
anzahl = 3
artikel = "Bücher"

gesamtpreis = preis * anzahl
nachricht = "Du hast " + anzahl + " " + artikel + " für " + gesamtpreis + " Euro gekauft."

print(nachricht)
```

**Task:** Correct the errors in string concatenation.

- Output should be:

```
Du hast 3 Bücher für 59.97 Euro gekauft.
```

---

## Exercise 10: Multi-line Code and Comments

**Error Type:** SyntaxError

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

**Task:** Correct all syntax errors in this code.

---

## Exercise 11: Assignment Operators

**Error Type:** SyntaxError / TypeError

```python
punkte = 100
punkte =+ 50
punkte =- 20
punkte =* 2

print("Deine Punkte:", punkte)
```

**Task:** Correct the incorrect assignment operators.

---

## Exercise 12: Multiple Combined Errors

**Error Type:** Multiple Error Types

```python
benutzer name = input(Wie heißt du? )
benutzer_alter = input("Wie alt bist du? ")

if benutzer_alter >= 18:
    print("Hallo benutzer name! Du bist volljährig.")
        print("Du hast Zugriff auf alle Funktionen.")

geburts_jahr = 2026 - benutzer_alter
print("Du wurdest im Jahr" geburts_jahr geboren.)
```

**Task:** Find and correct **all** errors in this code.

**Hint:** There are at least 8 errors! Look for: variable names, quotation marks, type conversion, indentation, and more.

---

## 🎯 Solution Strategies

When you encounter an error:

1. **Read the error message carefully** - Python often tells you what's wrong and on which line
2. **Check the line BEFORE the error** - sometimes the error is in the previous line (e.g., missing closing parenthesis)
3. **Pay attention to indentation** - all lines in the same block must be indented equally
4. **Check quotation marks** - opening and closing must match
5. **Remember type conversion** - `input()` always returns a string
6. **Use a code editor** - it often highlights errors in color

---

## 💡 Common Error Types

| Error Type         | Meaning           | Common Cause                                                      |
| ------------------ | ----------------- | ----------------------------------------------------------------- |
| `SyntaxError`      | Syntax error      | Missing parentheses, incorrect quotation marks, invalid operators |
| `IndentationError` | Indentation error | Inconsistent or missing indentation                               |
| `NameError`        | Unknown name      | Missing quotation marks around text, typos in variable names      |
| `TypeError`        | Type error        | Wrong operation for data type (e.g., String + Integer)            |
| `ValueError`       | Value error       | Type conversion not possible (e.g., `int("abc")`)                 |
