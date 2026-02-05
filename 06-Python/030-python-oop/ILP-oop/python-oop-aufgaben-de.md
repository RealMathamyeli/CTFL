# Python OOP Aufgaben

## Aufgabe 1: Erstelle eine Buch-Klasse 📚

**Ziel:** Übe das Erstellen einer Klasse mit Attributen und dem `__init__` Konstruktor.

Erstelle eine `Book` Klasse mit den folgenden Spezifikationen:

- Attribute: `title`, `author` und `pages`
- Beim Erstellen eines Buches, gib aus: `"Ein neues Buch '{title}' von {author} wurde hinzugefügt!"`

**Aufgaben:**

1. Definiere die `Book` Klasse mit einer `__init__` Methode
2. Erstelle mindestens zwei verschiedene Buch-Objekte
3. Gib den Titel und Autor jedes Buches mit der Punkt-Notation aus

**Beispiel Erwartete Ausgabe:**

```
Ein neues Buch 'Harry Potter' von J.K. Rowling wurde hinzugefügt!
Ein neues Buch '1984' von George Orwell wurde hinzugefügt!
Das erste Buch ist: Harry Potter von J.K. Rowling
Das zweite Buch ist: 1984 von George Orwell
```

---

## Aufgabe 2: Bankkonto-Klasse 💰

**Ziel:** Übe das Erstellen einer Klasse mit sowohl Attributen als auch Methoden.

Erstelle eine `BankAccount` Klasse mit den folgenden Spezifikationen:

- Attribute: `owner_name`, `balance` (Startguthaben)
- Methoden:
  - `deposit(amount)`: Fügt Geld zum Kontostand hinzu und gibt den neuen Kontostand aus
  - `withdraw(amount)`: Hebt Geld vom Kontostand ab (nur wenn ausreichend Guthaben vorhanden ist) und gibt den neuen Kontostand oder eine Fehlermeldung aus
  - `show_balance()`: Zeigt den aktuellen Kontostand an

**Aufgaben:**

1. Definiere die `BankAccount` Klasse mit `__init__` und den drei Methoden
2. Erstelle ein Konto mit einem Anfangsguthaben von 100
3. Zahle 50 ein
4. Hebe 30 ab
5. Versuche 200 abzuheben (sollte einen Fehler anzeigen)
6. Zeige den finalen Kontostand an

**Beispiel Erwartete Ausgabe:**

```
Konto für John erstellt mit Guthaben: 100€
50€ eingezahlt. Neues Guthaben: 150€
30€ abgehoben. Neues Guthaben: 120€
Fehler: Nicht genug Guthaben! Du hast nur 120€
Aktueller Kontostand: 120€
```

---

## Aufgabe 3: Schüler-Noten-Verwaltung 🎓

**Ziel:** Übe das Arbeiten mit mehreren Objekten und Methoden, die den Objektzustand verändern.

Erstelle eine `Student` Klasse mit den folgenden Spezifikationen:

- Attribute: `name`, `grades` (eine leere Liste, die in `__init__` initialisiert wird)
- Methoden:
  - `add_grade(grade)`: Fügt eine Note (0-100) zur Notenliste hinzu
  - `get_average()`: Berechnet und gibt den Durchschnitt aller Noten zurück
  - `show_report()`: Zeigt den Namen des Schülers, alle Noten und den Durchschnitt an

**Aufgaben:**

1. Definiere die `Student` Klasse mit `__init__` und den drei Methoden
2. Erstelle zwei verschiedene Schüler-Objekte
3. Füge jedem Schüler mindestens 3 Noten hinzu
4. Zeige für jeden Schüler einen Bericht an mit Namen, Noten und Durchschnitt

**Beispiel Erwartete Ausgabe:**

```
Schülerbericht für Alice:
Noten: [85, 92, 78]
Durchschnitt: 85.0

Schülerbericht für Bob:
Noten: [90, 88, 95, 87]
Durchschnitt: 90.0
```

**Bonus-Herausforderung:** Füge eine Methode `is_passing()` hinzu, die `True` zurückgibt, wenn der Durchschnitt 60 oder höher ist, und `False` andernfalls.

---

## Tipps für den Erfolg

- Denke daran, dass `self` immer der erste Parameter in Methoden ist
- Verwende `self.attribut_name`, um auf Attribute eines Objekts zuzugreifen oder sie zu ändern
- Vergiss nicht die Klammern `()` beim Aufrufen von Methoden
- Teste deinen Code häufig, während du jede Klasse erstellst
- Stelle sicher, dass du mehrere Objekte erstellst, um zu sehen, wie sie unabhängig bleiben

## Wichtige Konzepte zum Merken

- **Klassen** sind Baupläne, die Attribute und Methoden definieren
- **Objekte** sind konkrete Instanzen, die aus Klassen erstellt werden
- **`__init__`** ist der Konstruktor, der neue Objekte initialisiert
- **Attribute** speichern den Zustand/die Daten eines Objekts
- **Methoden** definieren das Verhalten/die Aktionen eines Objekts
