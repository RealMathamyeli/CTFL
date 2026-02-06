# 📅 Tag 1: Die Datenbankumgebung & konzeptionelle Grundlagen

## 🎯 Lernziele

Am Ende des heutigen Tages kannst du:

- Erklären, was eine Datenbank ist und warum sie existiert
- Die Kernprobleme beschreiben, die Datenbanken lösen (Redundanz, Integrität, Nebenläufigkeit)
- **Entitäten**, **Attribute** und **Beziehungen** in einem realen Szenario identifizieren
- Zwischen einem logischen und einem physischen Modell unterscheiden
- PostgreSQL und DBeaver auf Ubuntu 22.04 installieren
- DBeaver mit deinem lokalen PostgreSQL-Server verbinden

---

## Theorie & Umgebung einrichten

### 1. Einführung in Datenbanken

**Was ist ein Datenbankverwaltungssystem (DBMS)?**

- Ein DBMS ist **Software**, die zwischen dem Benutzer und den Rohdaten steht.
- Es empfängt Anfragen (Queries), verarbeitet sie und liefert Ergebnisse zurück.
- Stell es dir wie einen **Bibliothekar** vor: Du fragst nach einem Buch, der Bibliothekar weiß, wo es steht, und bringt es dir. Du musst nie selbst die Regale durchsuchen.
- Gängige DBMS-Beispiele: MySQL, PostgreSQL, Oracle, SQL Server.

**Geschichte & Meilensteine**

| Ära         | Technologie                     | Kernidee                                                                          |
| ----------- | ------------------------------- | --------------------------------------------------------------------------------- |
| **1960er**  | Flat-File-Systeme               | Daten in einfachen Textdateien gespeichert. Keine Struktur, viel Duplizierung.    |
| **1970**    | E. F. Codds relationales Modell | Daten in **Tabellen** mit **Zeilen** und **Spalten** organisiert. Geburt von SQL. |
| **1990er**  | Internet-Boom                   | MySQL, PostgreSQL werden populär. Datenbanken betreiben jede Website.             |
| **2000er+** | NoSQL & Big Data                | MongoDB, Redis – Verarbeitung riesiger Mengen unstrukturierter Daten.             |

> **Wichtigste Erkenntnis:** Wir konzentrieren uns auf das **relationale Modell** (1970), weil es bis heute das Rückgrat der meisten Geschäftsanwendungen ist.

---

### 2. Warum brauchen wir Datenbanken?

Ohne Datenbank speichern Anwendungen Daten in Dateien (Text, CSV, Excel). Das erzeugt drei kritische Probleme:

| Problem             | Ohne DB                                                                                                     | Mit DB                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Datenredundanz**  | Dieselbe Kundenadresse ist in 5 verschiedenen Dateien gespeichert. Eine Änderung muss 5-mal gemacht werden. | Die Adresse wird **einmal** gespeichert. Alle Teile des Systems lesen aus einer einzigen Quelle.                            |
| **Datenintegrität** | Nichts hindert jemanden daran, „Banane" im Altersfeld einzugeben.                                           | **Constraints** erzwingen Regeln: Alter muss eine Ganzzahl sein, E-Mail muss ein `@` enthalten.                             |
| **Nebenläufigkeit** | Zwei Benutzer kaufen gleichzeitig das letzte Konzertticket → beide erhalten eine Bestätigung.               | **Transaktionen** stellen sicher, dass nur einer erfolgreich ist; der andere wird informiert, dass das Ticket verkauft ist. |

**Anwendungsfälle aus der Praxis**

- **Gesundheitswesen:** Patientenakten, Medikamentenhistorie, Terminplanung.
- **Einzelhandel / E-Commerce:** Produktkatalog, Lagerbestände, Auftragsverfolgung.
- **Bankwesen:** Kontostände, Transaktionsprotokolle, Betrugserkennung.
- **Soziale Medien:** Benutzerprofile, Beiträge, Freund-/Follower-Verbindungen.

---

### 3. In Daten denken: Modellierungsgrundlagen

Bevor du Code schreibst, planst du deine Datenbank auf Papier. Das nennt man **Datenmodellierung**.

**Drei Kernkonzepte**

| Konzept       | Was es ist                          | Beispiel aus der Praxis                 | Wird in SQL zu         |
| ------------- | ----------------------------------- | --------------------------------------- | ---------------------- |
| **Entität**   | Ein „Ding", das du verfolgen willst | _Student_, _Auto_, _Bestellung_         | Eine **Tabelle**       |
| **Attribut**  | Eine Eigenschaft dieses Dings       | _Studentenname_, _Autofarbe_            | Eine **Spalte**        |
| **Beziehung** | Wie zwei Entitäten verbunden sind   | _Student **schreibt sich ein** in Kurs_ | Ein **Fremdschlüssel** |

**Logisches vs. Physisches Modell**

- **Logisches Modell** – beschreibt, _welche_ Daten du brauchst, in menschlicher Sprache.
  - Beispiel: „Ein Benutzer hat einen Namen und eine E-Mail."
- **Physisches Modell** – beschreibt, _wie_ die Daten im Computer gespeichert werden.
  - Beispiel: „Die Tabelle `users` hat eine Spalte `username` vom Typ `VARCHAR(50)`."

> Du beginnst immer mit dem logischen Modell (das Problem verstehen), bevor du zum physischen Modell übergehst (Code schreiben).

**Schnellübung:**
Denke an einen **Pizzalieferservice**. Frage dich:

1. Was sind die wichtigsten _Dinge_ (Entitäten)? → _Kunde, Pizza, Bestellung_
2. Welche _Eigenschaften_ (Attribute) hat jedes? → _Kunde: Name, Telefon, Adresse_
3. Wie _beziehen_ sie sich aufeinander? → _Ein Kunde gibt viele Bestellungen auf; eine Bestellung enthält viele Pizzen_

---

### 4. Installationslabor – Ubuntu 22.04

- [Für Linux](https://www.postgresql.org/download/linux/ubuntu)

#### Schritt 1 – PostgreSQL installieren

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

- `postgresql` → der Datenbankserver selbst
- `postgresql-contrib` → nützliche Zusatztools und Erweiterungen

#### Schritt 2 – Den Dienst überprüfen

```bash
sudo systemctl status postgresql
```

- Du solltest **active (running)** in Grün sehen.
- Drücke `q`, um die Statusansicht zu verlassen.

#### Schritt 3 – Das Passwort setzen

Standardmäßig erstellt PostgreSQL einen Systembenutzer namens `postgres` ohne Passwort. Du musst eines setzen, damit DBeaver sich verbinden kann.

```bash
sudo systemctl status postgresql
sudo -i -u postgres
psql
```

Jetzt bist du in der PostgreSQL-Eingabeaufforderung (`postgres=#`). Führe aus:

```sql
\password postgres
```

- Gib ein Passwort ein, das du dir merken kannst (z. B. `admin`).
- Bestätige das Passwort.
- Verlasse die Eingabe mit:

```sql
\q
```

Tippe dann `exit`, um zu deinem normalen Terminal zurückzukehren.

##### Nützliche PostgreSQL-Befehle:

1. Alle Datenbanken anzeigen:

```bash
sudo -u postgres psql -c "\l"
```

- Beispielausgabe:

```
                                   List of databases
    Name     |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges
-------------+----------+----------+-------------+-------------+-----------------------
 postgres    | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0   | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
             |          |          |             |             |
```

2. Mit einer Datenbank verbinden:

```bash
sudo -u postgres psql -d NAME_DER_DATENBANK
```

- `sudo -u postgres` → den Befehl als `postgres`-Benutzer ausführen
- `psql` → der Kommandozeilen-Client für PostgreSQL
- `-d NAME_DER_DATENBANK` → mit der angegebenen Datenbank verbinden (ersetze `NAME_DER_DATENBANK` durch deinen Datenbanknamen)
- Standardmäßig gibt es eine Datenbank namens `postgres`, mit der du dich über `-d postgres` verbinden kannst.
- Beispiel:

```bash
sudo -u postgres psql -d postgres
```

3. psql beenden:

- Tippe `\q` oder
- Tippe `ctrl + c` und drücke Enter
- oder tippe `exit` und drücke Enter

4. Eine neue Datenbank erstellen:
   - Verbinde dich zuerst mit der `postgres`-Datenbank: `sudo -u postgres psql -d postgres`
   - Führe dann aus:

```sql
CREATE DATABASE meine_datenbank;
```

- `CREATE DATABASE` → Erstellt eine neue Datenbank namens `meine_datenbank`
- Ersetze `meine_datenbank` durch deinen gewünschten Namen.

5. Eine Datenbank löschen – verbinde dich zuerst mit der Standard-Datenbank `postgres`, dann führe aus:

```sql
DROP DATABASE meine_datenbank;
```

- `DROP DATABASE` → Löscht die Datenbank namens `meine_datenbank`
- Ersetze `meine_datenbank` durch den Namen der Datenbank, die du löschen möchtest.
- **Warnung:** Diese Aktion ist unwiderruflich. Stelle sicher, dass du Backups hast, falls nötig.

6. Alle Tabellen in der aktuellen Datenbank auflisten:

```sql
\dt
```

- `\dt` → Listet alle Tabellen in der verbundenen Datenbank auf.
- Führe zuerst diesen Befehl aus, um eine Tabelle zu erstellen, sonst siehst du „No relations found". (Die Syntax-Details schauen wir uns morgen an.)

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
```

- Beispielausgabe:

```
               List of relations
 Schema |      Name       | Type  |  Owner
--------+-----------------+-------+----------
 public | students        | table | postgres
```

- Wenn du „No relations found" siehst, bedeutet das, dass es noch keine Tabellen in der Datenbank gibt.

7. Die Struktur einer Tabelle anzeigen:

```sql
\d tabellenname
```

- `\d tabellenname` → Beschreibt die Struktur der angegebenen Tabelle.
- Beispiel:
- Wenn du eine Tabelle namens `students` hast, führe aus:

```sql
\d students
```

- Beispielausgabe:

```
                                     Table "public.students"
   Column   |          Type          | Collation | Nullable |              Default
------------+------------------------+-----------+----------+---------------------------------------------------
 id         | integer                |           | not null | nextval('students_id_seq'::regclass)
 name       | character varying(100) |           | not null |
 email      | character varying(100) |           | not null |
 registration_date | date                 |           |          | CURRENT_DATE
Indexes:
    "students_pkey" PRIMARY KEY, btree (id)
    "students_email_key" UNIQUE CONSTRAINT, btree (email)
```

8. Zu einer anderen Datenbank wechseln:

```sql
\c andere_datenbank
```

- `\c andere_datenbank` → Verbindet sich mit der angegebenen Datenbank.
- Ersetze `andere_datenbank` durch den Namen der Datenbank, mit der du dich verbinden möchtest.

#### Schritt 4 – DBeaver installieren (GUI-Client)

- https://dbeaver.io/download/#requirements

```bash
sudo wget -q -O - https://dbeaver.io/debs/dbeaver.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/dbeaver.gpg.key
echo "deb [signed-by=/usr/share/keyrings/dbeaver.gpg.key] https://dbeaver.io/debs/dbeaver-ce /" | sudo tee /etc/apt/sources.list.d/dbeaver.list
sudo apt-get update && sudo apt-get install dbeaver-ce
```

Starte es:

```bash
dbeaver-ce
```

> **Was ist DBeaver?** Es ist ein grafisches Werkzeug, mit dem du Datenbanken durchsuchen, SQL-Abfragen ausführen und Tabellenstrukturen visualisieren kannst – wie ein „Dateimanager" für deine Daten.

---

## Verbinde DBeaver mit deinem PostgreSQL-Server.

**Schritte:**

1. Öffne DBeaver.
2. Klicke auf das Symbol **Neue Datenbankverbindung** (Stecker mit einem `+`-Zeichen).
3. Wähle **PostgreSQL** aus der Liste.
4. Gib diese Zugangsdaten ein:

   | Feld         | Wert                                          |
   | ------------ | --------------------------------------------- |
   | Host         | `localhost`                                   |
   | Port         | `5432`                                        |
   | Datenbank    | `postgres`                                    |
   | Benutzername | `postgres`                                    |
   | Passwort     | _(das, welches du heute Morgen gesetzt hast)_ |

5. Klicke auf **Verbindung testen**.
6. Wenn du „Connected" siehst → geschafft!

> **Fehlerbehebung:** Wenn die Verbindung fehlschlägt, stelle sicher, dass der PostgreSQL-Dienst läuft (`sudo systemctl start postgresql`) und dass du das Passwort richtig eingegeben hast.

---

## 📝 Zusammenfassung Tag 1

| Thema           | Kernpunkt                                            |
| --------------- | ---------------------------------------------------- |
| DBMS            | Software, die Daten für dich verwaltet               |
| Redundanz       | Daten einmal speichern vermeidet Duplizierungsfehler |
| Integrität      | Constraints erzwingen Datenregeln                    |
| Nebenläufigkeit | Transaktionen verhindern Konflikte                   |
| Entität         | Ein „Ding" → wird zu einer Tabelle                   |
| Attribut        | Eine Eigenschaft → wird zu einer Spalte              |
| Beziehung       | Eine Verbindung → wird zu einem Fremdschlüssel       |
| PostgreSQL      | Unsere Datenbank-Engine (Server)                     |
| DBeaver         | Unser grafischer SQL-Client                          |
