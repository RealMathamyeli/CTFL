🧑‍💻 Deine Individuelle Lernphase (ILP) am Nachmittag

Herzlich willkommen zu deiner individuellen Lernphase (ILP)! Dies ist deine Zeit, um in die Tiefen des Stoffs einzutauchen, eigenverantwortlich zu forschen und dein Verständnis zu festigen. Die ILP ist mehr als nur eine Arbeitsphase – sie ist eine Entdeckungsreise, auf der du das Steuer übernimmst und deinen eigenen Lernpfad gestaltest. Nutze diese Gelegenheit, um zu experimentieren, Fragen zu stellen (dir selbst und später auch deinem Coach) und die Konzepte nicht nur zu verstehen, sondern auch in der Praxis anzuwenden. Wir haben spannende Themen für dich vorbereitet, die dich herausfordern und dein Wissen bereichern werden. Tauche ein, sei neugierig und genieße das Lernen in deinem Tempo!

---

## Fehlerbehandlung in Python: Robusten Code schreiben

In dieser Aufgabe konzentrierst du dich auf einen entscheidenden Aspekt der Programmierung: die Fehlerbehandlung. Kein Code ist perfekt, und Fehler sind unvermeidlich. Die Kunst besteht darin, sie elegant abzufangen und deinen Programmen beizubringen, wie sie mit unerwarteten Situationen umgehen können, ohne einfach abzustürzen.

### 1. Grundlagen von Exceptions und Fehlerarten verstehen (ca. 45 Min.)

*   **Recherche und Begriffsdefinition:** Beginne damit, die Konzepte von "Exceptions" (Ausnahmen) und "Fehlern" in Python zu recherchieren. Was ist der Unterschied zwischen einem Syntaxfehler und einer Exception?
*   **Häufige Exception-Typen:** Finde heraus, welche die gängigsten eingebauten Exception-Typen in Python sind (z.B. `TypeError`, `ValueError`, `FileNotFoundError`, `IndexError`, `KeyError`, `ZeroDivisionError`). Notiere dir für jeden Typ ein kurzes Beispiel, das diesen Fehler provozieren würde.
*   **Warum Fehlerbehandlung wichtig ist:** Überlege und formuliere kurz, warum eine gute Fehlerbehandlung für die Stabilität und Benutzerfreundlichkeit von Software unerlässlich ist.

    Syntaxfehler (Parsing Error): Das Programm wird gar nicht erst ausgeführt. Der "Interpreter" versteht deine Grammatik nicht (z.B. eine vergessene Klammer print("Hallo" oder ein falsch geschriebenes Keyword whle True:).

    Exception (Laufzeitfehler): Der Code ist grammatikalisch völlig korrekt, aber während der Ausführung stößt Python auf ein logisches Hindernis (z.B. eine Datei, die nicht existiert). Das Programm startet, stürzt dann aber ab.

    Exception-Typ,Ursache,Beispiel-Code
    ValueError:             "Ein Wert hat den richtigen Typ, aber einen unpassenden Inhalt."
                            "int(""Hallo"") (Text kann keine Zahl werden)"
    TypeError:              Eine Operation wird auf einen falschen Datentyp angewendet.
                            """Hund"" + 5 (String und Zahl addieren)"
    IndexError:             "Zugriff auf eine Liste mit einem Index, den es nicht gibt."
                            liste = [1]
                            print(liste[5])
    KeyError:               "Suche nach einem Schlüssel in einem Dictionary, der fehlt."
                            "dict = {""a"": 1}; print(dict[""b""])"
    ZeroDivisionError       "Mathematisch unmöglicher Versuch, durch 0 zu teilen."
                            10 / 0
    FileNotFoundError       "Versuch, eine Datei zu öffnen, die nicht existiert."
                            "open(""geheimnis.txt"")"


### 2. `try`, `except` zur Fehlerkontrolle anwenden (ca. 30 Min.)

*   **Einfache Fehlerbehandlung:** Schreibe ein Python-Skript, das eine Benutzereingabe annimmt und diese in eine Ganzzahl umwandelt. Implementiere einen `try-except`-Block, um einen `ValueError` abzufangen, falls die Eingabe keine gültige Zahl ist. Gib eine freundliche Fehlermeldung aus, anstatt das Programm abstürzen zu lassen.
*   **Spezifische und generische Exceptions:** Erstelle ein weiteres Skript, das zwei Zahlen dividiert. Fange sowohl den `ZeroDivisionError` als auch einen allgemeinen `Exception`-Typ ab. Experimentiere damit, wie sich die Reihenfolge der `except`-Blöcke auswirkt.
*   **Optional: `else` und `finally`:** Recherchiere die Verwendung von `else` und `finally` in `try-except`-Blöcken. Füge sie einem deiner Beispiele hinzu und beobachte, wann der Code in diesen Blöcken ausgeführt wird.

    try:
        eingabe = input("Bitte gib dein Alter ein: ")
        alter = int(eingabe) # Hier könnte der ValueError entstehen
        print(f"Alles klar, du bist {alter} Jahre alt.")
    except ValueError:
        print("Das war keine gültige Zahl! Bitte benutze nur Ziffern (z.B. 25).")

    try:
    zahl1 = float(input("Erste Zahl: "))
    zahl2 = float(input("Zweite Zahl (Teiler): "))
    
    ergebnis = zahl1 / zahl2
    print(f"Das Ergebnis ist: {ergebnis}")


    except ZeroDivisionError:
        print("Fehler: Du kannst nicht durch Null teilen!")

    except ValueError:
        print("Fehler: Du musst Zahlen eingeben!")

    except Exception as e:
        # Dies fängt alle anderen Fehler ab, die wir oben nicht bedacht haben
        print(f"Ein unerwarteter Fehler ist aufgetreten: {e}")

    try:
        print("--- Datei-Lese-Simulation ---")
        datei_name = input("Welche Datei soll geöffnet werden? (test.txt): ")
        # Simulation: Wir versuchen etwas riskantes
        if datei_name == "":
            raise ValueError("Dateiname darf nicht leer sein!")
        print(f"Datei '{datei_name}' wurde erfolgreich geöffnet.")

    except ValueError as fehler:
        print(f"Problem: {fehler}")

    else:
        # Wird NUR ausgeführt, wenn im try-Block KEIN Fehler passiert ist.
        print("Super! Es gab keine Probleme beim Öffnen.")

    finally:
        # Wird IMMER ausgeführt, egal ob ein Fehler passierte oder nicht.
        # Ideal zum 'Aufräumen' (z.B. Verbindungen trennen oder Dateien schließen).
        print("Programm-Abschnitt beendet (Cleaning up...).")

---

## Einfache Dateiverarbeitung: Mit Dateien interagieren

In dieser Aufgabe lernst du, wie du mit Dateien auf deinem System interagieren kannst. Das Öffnen, Lesen und Schreiben von Daten ist eine fundamentale Fähigkeit in der Programmierung und ermöglicht es deinen Anwendungen, persistente Informationen zu speichern und abzurufen.

### 1. Öffnen, Lesen und Schreiben von Dateien mit `open()` (ca. 45 Min.)

*   **Eine neue Datei schreiben:** Schreibe ein Python-Skript, das eine neue Textdatei namens `meine_notizen.txt` erstellt. Füge dieser Datei mehrere Zeilen Text hinzu. Denke daran, die Datei nach dem Schreiben zu schließen!
*   **Text an eine Datei anhängen:** Erweitere dein Skript oder schreibe ein neues, das weitere Zeilen an die bestehende `meine_notizen.txt` anhängt, ohne den vorherigen Inhalt zu überschreiben.
*   **Eine Datei lesen:** Schreibe ein Skript, das den gesamten Inhalt der `meine_notizen.txt` liest und auf der Konsole ausgibt.
*   **Zeilenweise lesen:** Modifiziere das Leseskript so, dass es die Datei Zeile für Zeile liest und jede Zeile einzeln ausgibt.

### 2. Umgang mit Kontextmanagern: `with`-Statement bei Dateizugriffen (ca. 30 Min.)

*   **Vorteile des `with`-Statements:** Recherchiere, was ein "Kontextmanager" ist und welche Vorteile die Verwendung des `with`-Statements beim Dateizugriff bietet (Stichwort: Ressourcenmanagement, automatische Schließung).
*   **Dateien sicher schreiben:** Schreibe ein neues Skript, das dieselben Schreiboperationen (Erstellen und Anhängen) wie in Aufgabe 1.1 durchführt, diesmal aber ausschließlich das `with`-Statement verwendet.
*   **Dateien sicher lesen:** Implementiere ein Leseskript, das ebenfalls das `with`-Statement nutzt, um `meine_notizen.txt` zu lesen und ihren Inhalt auszugeben.
*   **Fehlerbehandlung und Dateien kombinieren:** Füge die Konzepte der Fehlerbehandlung hinzu. Schreibe ein Skript, das versucht, eine nicht existierende Datei zu öffnen. Fange den dabei auftretenden `FileNotFoundError` mit einem `try-except`-Block ab und gib eine entsprechende Fehlermeldung aus.

---

### Deine Selbstreflexion

Nimm dir am Ende deiner ILP noch einen Moment Zeit, um über deine Erfahrungen nachzudenken:

*   Was waren die größten Herausforderungen bei diesen Aufgaben, und wie hast du sie gemeistert?
*   Welche neuen Erkenntnisse hast du gewonnen, die dein Verständnis von Python und der Programmierung allgemein erweitert haben?
*   Gibt es Konzepte, die dir noch unklar sind oder bei denen du das Gefühl hast, dass du noch mehr Übung benötigst? Notiere dir diese Punkte für die Diskussion mit deinem Coach.
*   Wie könntest du die erlernten Fähigkeiten in zukünftigen Projekten anwenden?