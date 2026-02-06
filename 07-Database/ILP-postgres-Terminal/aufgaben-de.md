# Übung 1: Die „Stadtbibliothek" (Papiermodellierung)

**Ziel:** Übe das Identifizieren von Entitäten und Attributen ohne Computer.

**Szenario:**

> _Die Stadtbibliothek braucht ein System. Sie hat Tausende von **Büchern**. Jedes Buch hat einen Titel, eine ISBN und ein Erscheinungsjahr. Die Bibliothek hat **Mitglieder**, die diese Bücher ausleihen. Wir müssen den Namen, die E-Mail und die Kartennummer des Mitglieds kennen. Wenn ein Mitglied ein Buch ausleiht, erstellen wir einen **Ausleih**-Datensatz, der das Ausleihdatum und das Fälligkeitsdatum festhält._

**Aufgabe:**

1. Nimm ein Blatt Papier.
2. Identifiziere die **3 Hauptentitäten**.
3. Liste die **Attribute** für jede Entität auf.
4. Zeichne Linien zwischen ihnen, um zu zeigen, wie sie zusammenhängen.

Beziehungen:

- Ein **Mitglied** kann viele **Ausleihen** haben.
- Eine **Ausleihe** gehört zu einem **Buch** und einem **Mitglied**.
- Ein **Buch** kann in vielen **Ausleihen** vorkommen (mehrfach ausgeliehen über die Zeit).

---

# Übung 2: Erkundung

**Ziel:** Mache dich mit der DBeaver-Oberfläche vertraut.

**Aufgabe:**

1. Erweitere im **Datenbank-Navigator** (linke Seite) deine Verbindung.
2. Navigiere zu: `postgres` → `Schemas` → `public`.
3. Klicke auf **Tables**. Es ist gerade leer – **hier beginnt morgen deine Arbeit!**
4. Erkunde die anderen Knoten: Functions, Sequences, Views. Du musst sie noch nicht verstehen – wisse nur, dass sie existieren.

# Übung 3: Draw.io lernen

- Schaue dir das ERD mit Draw.io Video an https://www.youtube.com/watch?v=lAtCySGDD48
- Versuche, das ERD der Stadtbibliothek zu zeichnen, das du in Übung 1 erstellt hast mit Draw.io. Es ist in Ordnung, wenn es nicht perfekt ist – es geht darum, die Software zu üben!

# Arbeiten mit postgresql im Terminal

- Öffne dein Terminal und verbinde dich mit der PostgreSQL-Datenbank.
- Liste alle Datenbanken auf und füge die Ausgabe hier ein:

```bash
# Alle Datenbanken auflisten
sudo -u postgres psql -c "\l"
```

- Erstelle eine neue Datenbank namens `library` und füge den Befehl, den du verwendet hast, hier ein:

```bash
# Eine neue Datenbank namens library erstellen
sudo -u postgres psql -d postgres
CREATE DATABASE library;
```

- Liste alle Datenbanken erneut auf, um zu bestätigen, dass `library` erstellt wurde,und füge die Ausgabe hier ein:

```bash
# Alle Datenbanken erneut auflisten
\q
sudo -u postgres psql -c "\l"
```

- Committe und pushe deine Änderungen, um deine Arbeit für diese Woche einzureichen!
