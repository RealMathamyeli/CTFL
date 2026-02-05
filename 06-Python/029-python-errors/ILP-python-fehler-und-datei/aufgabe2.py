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