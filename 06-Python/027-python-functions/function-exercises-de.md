# Python Funktionen - Praktische Übungen

### Übung 1: Einfache Begrüßungsfunktion

Erstelle eine Funktion namens `greet_user`, die einen Namen als Parameter nimmt und eine personalisierte Begrüßungsnachricht ausgibt.

**Beispielausgabe:**

```
Hallo, Sarah! Willkommen bei der Python-Programmierung.
```

---

### Übung 2: Kreisfläche berechnen

Schreibe eine Funktion `calculate_circle_area`, die den Radius als Parameter nimmt und die Fläche des Kreises zurückgibt. Verwende `3.14159` für PI.

**Formel:** Fläche = PI × Radius²

**Beispiel:**

```python
flaeche = calculate_circle_area(5)
print(flaeche)  # Sollte ausgeben: 78.53975
```

---

### Übung 3: Temperaturumrechner

Erstelle zwei Funktionen:

- `celsius_to_fahrenheit(celsius)` - rechnet Celsius in Fahrenheit um
- `fahrenheit_to_celsius(fahrenheit)` - rechnet Fahrenheit in Celsius um

**Formeln:**

- Fahrenheit = (Celsius × 9/5) + 32
- Celsius = (Fahrenheit - 32) × 5/9

---

### Übung 4: Gerade oder Ungerade prüfen

Schreibe eine Funktion `is_even`, die eine Zahl als Parameter nimmt und `True` zurückgibt, wenn die Zahl gerade ist, und `False`, wenn sie ungerade ist.

**Beispiel:**

```python
print(is_even(4))   # True
print(is_even(7))   # False
```

---

### Übung 5: String-Wiederholer

Erstelle eine Funktion `repeat_string`, die zwei Parameter nimmt: einen String und eine Zahl. Die Funktion soll den String so oft wiederholen, getrennt durch Leerzeichen.

**Beispiel:**

```python
ergebnis = repeat_string("Hallo", 3)
print(ergebnis)  # Hallo Hallo Hallo
```
