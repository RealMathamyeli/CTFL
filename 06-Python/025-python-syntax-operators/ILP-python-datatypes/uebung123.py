# Alter vom nächsten Jahr
name = input("Wie heißt du? ")
alter = int(input("Wie alt bist du? "))

# Berechnung
naechstes_jahr = alter + 1

print(f"Hallo {name}, nächstes Jahr wirst du {naechstes_jahr} Jahre alt sein!")
print("--------------------------------------------------")


# BMI
gewicht = float(input("Gib dein Gewicht in kg ein: "))
groesse = float(input("Gib deine Körpergröße in Metern ein (z.B. 1.75): "))

# Berechnung: Größe hoch 2 wird in Python mit **2 geschrieben
bmi = gewicht / (groesse ** 2)

# Wir runden das Ergebnis auf 2 Nachkommastellen
print(f"Dein BMI ist: {round(bmi, 2)}")
print("--------------------------------------------------")

# Namenlänge
name = input("Wie heißt du? ")

# len() zählt die Buchstaben im String
anzahl_zeichen = len(name)

print(f"Dein Name {name} hat genau {anzahl_zeichen} Zeichen.")