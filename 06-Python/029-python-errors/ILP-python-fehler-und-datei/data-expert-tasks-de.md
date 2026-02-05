Hier findest du strukturierte Übungen, die speziell für angehende Data Engineers entwickelt wurden. Diese Beispiele schlagen die Brücke zwischen abstrakten Python-Konzepten und der täglichen Realität des Verschiebens und Bereinigens von Daten (ETL - Extract, Transform, Load).

Diese Übungen konzentrieren sich auf:

- **Datenstrukturen**,
- **Kontrollfluss** und
- **Funktionen**.

---

### Übung 1: Der "Dirty Data"-Reiniger (ETL-Grundlagen)

**Thema:** Listen, Typkonvertierung und Schleifen.
**Kontext:** Data Engineers erhalten oft "rohe" Daten aus Textdateien oder APIs, bei denen Zahlen als Text (Strings) formatiert sind oder unordentliche Zeichen (wie Währungssymbole) enthalten. Bevor wir Umsätze analysieren können, müssen wir diese Daten "bereinigen".

**Das Problem:**
Du hast eine Liste von rohen Transaktions-Strings. Dein Ziel ist es:

1. Das "$"-Symbol zu entfernen.
2. Den String in eine Gleitkommazahl zu konvertieren.
3. Den Gesamtumsatz zu berechnen.

**Die Daten:**

```python
raw_transactions = ["$10.50", "$2.00", "$5.25", "$99.99", "$5.00"]

```

---

### Übung 2: Die "Daten-Firewall" (Validierungslogik)

**Thema:** Bedingungen (`if`/`else`), Boolesche Logik und Kontrollfluss.
**Kontext:** Schlechte Daten zerstören Pipelines. Ein Data Engineer baut "Firewalls", um ungültige Datensätze abzulehnen. Wenn das Alter eines Benutzers negativ ist oder ein Name fehlt, sollte dieser Datensatz in eine "Fehlerliste" verschoben werden und nicht in die Datenbank.

**Das Problem:**
Du hast eine Liste von Benutzer-Dictionaries. Iteriere durch sie und teile sie in `valid_users` und `failed_records` auf.

- **Regel:** Ein Benutzer ist NUR gültig, wenn er einen Namen hat (nicht leer) UND das Alter größer als 0 ist.

**Die Daten:**

```python
users = [
    {"name": "Alice", "age": 30},
    {"name": "", "age": 25},        # Ungültig: Kein Name
    {"name": "Bob", "age": -5},     # Ungültig: Negatives Alter
    {"name": "Charlie", "age": 45}
]

```

---

### Übung 3: Der "Duplikat-Vernichter" (Sets)

**Thema:** Sets und Listenkonvertierung.
**Kontext:** Beim Zusammenführen von Daten aus zwei verschiedenen Quellen (z. B. Marketing-Daten und Verkaufsdaten) entstehen oft doppelte Kunden-IDs. Ein Data Engineer muss die _einzigartige_ Gesamtzielgruppengröße ermitteln.

**Das Problem:**
Du hast zwei Listen mit Kunden-IDs.

1. Füge sie zu einer Liste zusammen.
2. Zähle, wie viele _eindeutige_ Kunden du hast.
3. Überprüfe, ob ein bestimmter Kunde (ID `105`) im eindeutigen Set existiert.

**Die Daten:**

```python
source_a = [101, 102, 103, 101, 104]
source_b = [103, 104, 105, 106]

```

**_Erwartete Ausgabe:_**

```python
print(unique_customers)
# Erwartete Ausgabe: {101, 102, 103, 104, 105, 106}
# Anzahl eindeutiger Kunden: 6
# Existiert Kunden-ID 105? True
```

---

## Log-Einträge

```python
log_entries = [
   ('user_001', 'Login',       '2023-10-26 09:00:00'),
    ('user_002', 'ProductView', '2023-10-26 09:01:15'),
    ('user_001', 'ProductView', '2023-10-26 09:02:30'),
    ('user_003', 'Login',       '2023-10-26 10:03:00'),
    ('user_002', 'AddToCart',   '2023-10-26 10:04:00'),
    ('user_001', 'Logout',      '2023-10-26 10:05:00'),
    ('user_004', 'Login',       '2023-10-26 11:06:00'),
    ('user_003', 'ProductView', '2023-10-26 11:07:00'),
    ('user_002', 'ProductView', '2023-10-26 11:08:00'),
    ('user_001', 'Login',       '2023-10-26 14:09:00'),
    ('user_004', 'AddToCart',   '2023-10-26 14:10:00'),
    ('user_003', 'Logout',      '2023-10-26 14:11:00')
]
```

Basierend auf der `log_entries`-Struktur (eine Liste von Tupeln, die einen "Event Stream" darstellen), findest du hier vier aufbauende Übungen.
Diese simulieren reale Data-Engineering-Aufgaben:

- **Filtern**,
- **Aggregation**,
- **Mengenoperationen** und
- **Transformation**.

### Übung 4: Der "Warenkorb-Wächter" (Daten filtern)

**Data-Engineering-Konzept:** Filtern. In SQL ist dies eine `WHERE`-Klausel. Du baust eine Pipeline, die "Rauschen" (wie Logins/Logouts) ignoriert und sich nur auf geschäftsrelevante Ereignisse (In den Warenkorb legen) konzentriert.

**Die Aufgabe:**
Erstelle eine neue Liste namens `sales_leads`. Iteriere durch das Log und extrahiere nur die Tupel, bei denen die Aktion `'AddToCart'` ist.

**Erwartete Ausgabe:**

```python
print(sales_leads)
# Erwartete Ausgabe:[
#     ('user_002', 'AddToCart', '2023-10-26 10:04:00'),
#     ('user_004', 'AddToCart', '2023-10-26 14:10:00'),
# ]
```

---

### Übung 5: Benutzeraktivitäts-Zähler (Aggregation / Group By)

**Data-Engineering-Konzept:** Aggregation. In SQL ist dies `GROUP BY` und `COUNT`. Du musst rohe Log-Zeilen in eine Übersichtstabelle konvertieren, die uns zeigt, wie aktiv jeder Benutzer ist.

**Die Aufgabe:**
Erstelle ein Dictionary, bei dem der **Schlüssel** die `user_id` ist und der **Wert** die Gesamtzahl der von ihm durchgeführten Aktionen.

**Erwartete Ausgabe:**

```python
print(activity_count)
# Erwartete Ausgabe: {
#     'user_001': 4,
#     'user_002': 3,
#     'user_003': 3,
#     'user_004': 2
# }
```

---

### Übung 6: Die "Schaufensterbummler"-Analyse (Mengenoperationen)

**Data-Engineering-Konzept:** Mengenanalyse. Du musst oft zwei Benutzergruppen vergleichen, um Überschneidungen oder Ausschlüsse zu finden (z. B. "Benutzer, die Artikel angesehen, aber NIE etwas in den Warenkorb gelegt haben").

**Die Aufgabe:**

1. Erstelle ein Set von Benutzern, die eine `'ProductView'` durchgeführt haben.
2. Erstelle ein Set von Benutzern, die ein `'AddToCart'` durchgeführt haben.
3. Finde die "Schaufensterbummler": Benutzer, die im "View"-Set sind, aber **NICHT** im "Cart"-Set.

**Erwartete Ausgabe:**

```python

print(f"Schaufensterbummler (Angesehen, aber nicht in den Warenkorb gelegt): {window_shoppers}")
# Erwartete Ausgabe: Schaufensterbummler (Angesehen, aber nicht in den Warenkorb gelegt): {'user_003', 'user_005', 'user_004'}

```

---
