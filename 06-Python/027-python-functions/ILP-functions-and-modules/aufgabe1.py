# ============================================================
# AUFGABE 1: EIGENE FUNKTIONEN DEFINIEREN (BMI)
# ============================================================

def berechne_bmi(gewicht_kg, groesse_m):
    """
    Berechnet den BMI und gibt das Ergebnis zurück.
    Formel: Gewicht / (Größe * Größe)
    """
    bmi_wert = gewicht_kg / (groesse_m ** 2)
    return bmi_wert

# Test mit zwei Personen
person_1_bmi = berechne_bmi(75.0, 1.75)
person_2_bmi = berechne_bmi(90.0, 1.85)

print(f"BMI Person 1: {person_1_bmi:.2f}")
print(f"BMI Person 2: {person_2_bmi:.2f}")

print("-" * 40)

# ============================================================
# AUFGABE 2: LOKALE UND GLOBALE VARIABLEN
# ============================================================

# Globale Variable außerhalb jeder Funktion
globale_nachricht = "Ich bin eine GLOBALE Nachricht."

def zeige_variablen():
    # Auslesen der globalen Variable ist direkt möglich
    print(f"Aus der Funktion - Global: {globale_nachricht}")
    
    # Definition einer lokalen Variable (nur innerhalb der Funktion gültig)
    lokale_nachricht = "Ich bin eine LOKALE Nachricht."
    print(f"Aus der Funktion - Lokal:  {lokale_nachricht}")

# Funktion aufrufen
zeige_variablen()

# Versuch, die lokale Variable außerhalb auszugeben
print("\nVersuch, 'lokale_nachricht' außerhalb aufzurufen:")
try:
    # Hier würde der Editor normalerweise orange/rot markieren:
    print(lokale_nachricht) 
except NameError:
    print("ERGEBNIS: NameError! Die lokale Variable existiert außerhalb nicht.")

# KOMMENTAR: 
# Lokale Variablen existieren nur während der Ausführungszeit der Funktion.
# Sobald die Funktion endet, wird der Speicher für 'lokale_nachricht' freigegeben.

print("-" * 40)

# ============================================================
# AUFGABE 3: MODIFIKATION EINER GLOBALEN VARIABLE
# ============================================================

# Globale Variable definieren
zaehler = 0

def erhoehe_zaehler():
    # Das Schlüsselwort 'global' ist zwingend erforderlich, 
    # um die globale Variable zu VERÄNDERN (nicht nur zu lesen).
    global zaehler
    zaehler += 1

# Verfolgung der Änderungen
print(f"Zähler vor den Aufrufen: {zaehler}")

erhoehe_zaehler()
print(f"Zähler nach dem 1. Aufruf: {zaehler}")

erhoehe_zaehler() # 2. Aufruf
erhoehe_zaehler() # 3. Aufruf

print(f"Zähler nach dem 3. Aufruf: {zaehler}")