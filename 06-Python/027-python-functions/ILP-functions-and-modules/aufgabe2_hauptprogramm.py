# hauptprogramm.py
import aufgabe2_meine_funktionen

# Nutzung der Begrüßungs-Funktion
nachricht = aufgabe2_meine_funktionen.begruesse_user("Lukas")
print(nachricht)

# Nutzung der Division
ergebnis_gut = aufgabe2_meine_funktionen.dividiere(10, 2)
print(f"10 / 2 ergibt: {ergebnis_gut}")

# Test der Division durch Null
ergebnis_null = aufgabe2_meine_funktionen.dividiere(10, 0)
print(ergebnis_null)