print("Willkommen beim Python Pizza-Service!")

# 1. Pizzagröße abfragen
size = input("Welche Größe möchtest du? S, M oder L: ").upper()

# Basispreis festlegen
bill = 0

if size == "S":
    bill = 15
elif size == "M":
    bill = 20
elif size == "L":
    bill = 25
else:
    print("Ungültige Eingabe. Wir berechnen den Preis für eine mittlere Pizza.")
    bill = 20

# 2. Pepperoni hinzufügen?
add_pepperoni = input("Möchtest du Pepperoni? (J/N): ").upper()

if add_pepperoni == "J":
    if size == "S":
        bill += 2  # +2€ für kleine Pizza
    else:
        bill += 3  # +3€ für M oder L

# 3. Extra Käse hinzufügen?
extra_cheese = input("Möchtest du extra Käse? (J/N): ").upper()

if extra_cheese == "J":
    bill += 1  # +1€ für jede Größe

# 4. Endabrechnung
print(f"Deine Endrechnung beträgt: {bill}€")