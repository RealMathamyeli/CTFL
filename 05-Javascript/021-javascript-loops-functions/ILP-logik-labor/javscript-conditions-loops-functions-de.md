# 🚀 Deine individuelle Lernphase: Das Logik-Labor

Willkommen zu deiner Nachmittagssession! Du hast den Vormittag mit der Theorie verbracht; jetzt ist es an der Zeit, die Hände an die Tastatur zu legen.

**Einrichtungsanweisungen:**

1. Erstelle einen Ordner namens `js-uebungen`.
2. Erstelle darin eine `index.html`-Datei (Standard-Gerüst) und eine `script.js`-Datei.
3. Verknüpfe sie mit `<script src="script.js"></script>` im `<body>` deiner HTML-Datei.
4. Öffne die `index.html` in Chrome, mache einen Rechtsklick, wähle **Untersuchen** (Inspect) und öffne den Reiter **Konsole** (Console).
5. **Wie man testet:** Schreibe deinen Code für jede Aufgabe in die `script.js`. Um verschiedene Daten „einzugeben“, änderst du die Werte deiner Variablen im Code, speicherst die Datei und aktualisierst (refresh) den Browser, um das neue Ergebnis in der Konsole zu sehen.

---

### Aufgabe 1: Der Entscheider (Bedingungen & Switch)

**⏱️ Geschätzte Zeit: 45 Minuten**

In dieser Aufgabe übst du, deinem Programm beizubringen, Entscheidungen basierend auf verschiedenen Werten zu treffen, unter Verwendung der Konzepte aus dem Material zu Kontrollstrukturen.

**Teil A: Der Übersetzer**
Erstelle ein Programm, das ein Länderkürzel (z. B. „en“, „de“, „fr“) in eine Begrüßung übersetzt.

1. Definiere eine Variable namens `language` und setze sie auf einen String (z. B. `"de"`).
2. Verwende ein **`switch-case`**-Statement, um die Variable zu prüfen:

- Case "en": Logge "Hello World"
- Case "es": Logge "Hola Mundo"
- Case "fr": Logge "Bonjour le monde"
- Case "de": Logge "Hallo Welt"
- **Default**: Logge "Sprache nicht erkannt"

3. **Test:** Ändere die Variable `language` zu verschiedenen Kürzeln und aktualisiere den Browser, um sicherzustellen, dass die richtige Nachricht erscheint.

**Teil B: Der Budget-Checker**
Du baust eine Logik-Prüfung für einen Online-Shop.

1. Definiere zwei Variablen: `accountBalance` (Kontostand, eine Zahl) und `purchaseAmount` (Kaufbetrag, eine Zahl).
2. Verwende eine **`if-else`**-Anweisung, um zu prüfen, ob du dir den Kauf leisten kannst.
3. **Bonus:** Verschachtele eine Bedingung! Wenn der Kauf erfolgreich ist (also genug Geld da ist), prüfe zusätzlich, ob `accountBalance` nach dem Kauf weniger als 10 betragen würde. Wenn ja, logge eine Warnung: „Warnung: Niedriger Kontostand!“

---

### Aufgabe 2: Die Automatisierungs-Station (Schleifen)

**⏱️ Geschätzte Zeit: 50 Minuten**

Computer sind großartig darin, langweilige Aufgaben zu wiederholen. Nutze Schleifen, um Prozesse zu automatisieren, wie im Material `Loops – Fundamentals` beschrieben.

**Teil A: Der Jäger der ungeraden Zahlen (`for`-Schleife)**
Wir müssen alle ungeraden Zahlen bis zu einer bestimmten Grenze finden.

1. Schreibe eine **`for`-Schleife**, die von 0 bis 20 läuft.
2. Verwende innerhalb der Schleife eine `if`-Anweisung, um zu prüfen, ob die aktuelle Zahl `i` ungerade ist.

- _Tipp:_ Du kannst auf ungerade Zahlen mit dem Modulo-Operator `%` prüfen (z. B. `i % 2 !== 0`).

3. Wenn sie ungerade ist, gib die Zahl mit `console.log` aus.

**Teil B: Der Countdown (`while`-Schleife)**
Simuliere den Countdown eines Raketenstarts.

1. Definiere eine Variable `counter` und setze sie auf 10.
2. Erstelle eine **`while`-Schleife**, die läuft, solange `counter` größer als 0 ist.
3. Innerhalb der Schleife:

- Logge den Wert von `counter`.
- **Wichtig:** Verringere `counter` um 1 (`counter--`).

4. Nachdem die Schleife beendet ist, logge "Liftoff! 🚀".

---

### Aufgabe 3: Die Code-Fabrik (Funktionen)

**⏱️ Geschätzte Zeit: 50 Minuten**

Wie im Material erwähnt, ist eine Funktion wie eine „kleine, spezialisierte Maschine“. Du wirst zwei wiederverwendbare Maschinen bauen.

**Teil A: Der persönliche Begrüßer (Function Declaration)**

1. Schreibe eine **Function Declaration** (Funktionsdeklaration) namens `greetUser`.
2. Sie soll einen **Parameter** akzeptieren: `name`.
3. Innerhalb der Funktion logge „Willkommen zurück, [name]!“ in die Konsole.
4. **Rufe** die Funktion dreimal mit verschiedenen Namen auf (z. B. „Alice“, „Bob“, „Charlie“).

**Teil B: Der Einheiten-Umrechner (Rückgabewerte)**

1. Schreibe eine Funktion namens `celsiusToFahrenheit`.
2. Sie soll `celsius` als Parameter akzeptieren.
3. Berechne im Inneren den Fahrenheit-Wert (Formel: `celsius * 1.8 + 32`).
4. Gib das Ergebnis mit **Return** zurück.
5. Rufe die Funktion außerhalb auf, speichere das Ergebnis in einer Variablen (z. B. `const tempInFahrenheit = ...`) und logge das Ergebnis.

---

### Aufgabe 4 (expert optional): Die letzte Herausforderung (Integration)

**⏱️ Geschätzte Zeit: 35 Minuten**

Lass uns nun alles kombinieren! Du wirst einen „Warenkorb-Rechner“ bauen.

1. **Das Ziel:** Berechne den Gesamtpreis von Artikeln in einer Liste und wende einen Rabatt an, wenn die Summe hoch ist.
2. **Schritt 1 (Daten):** Erstelle ein Array mit Preisen: `const prices = [10, 20, 45, 100, 5];`
3. **Schritt 2 (Die Funktion):** Erstelle eine Funktion namens `calculateTotal`, die ein Array als Parameter annimmt.
4. **Schritt 3 (Die Logik in der Funktion):**

- Initialisiere eine Variable `total` mit 0.
- Verwende eine **`for`-Schleife**, um durch das Array zu gehen.
- Addiere jeden Preis zum `total` hinzu.
- **Bedingung:** Verwende nach der Schleife eine `if`-Anweisung. Wenn `total` größer als 100 ist, wende einen 10% Rabatt an (multipliziere `total` mit 0.9).
- **Return** (gib zurück) das endgültige `total`.

5. **Schritt 4 (Ausführung):** Rufe deine Funktion mit dem `prices`-Array auf und logge den Endpreis in die Konsole.

**Fertig?**
Wenn du noch Zeit übrig hast, versuche ein `console.log` _innerhalb_ der Schleife in Aufgabe 4 einzufügen, um zu sehen, wie die Zwischensumme Schritt für Schritt wächst!
