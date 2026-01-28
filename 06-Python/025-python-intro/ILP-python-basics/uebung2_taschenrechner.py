# Abfrage der zwei Zahlen
# Wir nutzen float(), falls der Benutzer auch Kommazahlen eingeben möchte
zahl1 = input("Gib die erste Zahl ein: ")
zahl2 = input("Gib die zweite Zahl ein: ")

# Umwandlung der Strings in Zahlen und Berechnung der Summe
summe = float(zahl1) + float(zahl2)

# Ausgabe des Ergebnisses
print(f"Die Summe ist: {summe}")