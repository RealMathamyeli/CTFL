# --- GEOMETRIE-VERGLEICHS-CHALLENGE ---

# 1. Rechteck-Daten abfragen
laenge = float(input("Geben Sie die Länge des Rechtecks ein: "))
breite = float(input("Geben Sie die Breite des Rechtecks ein: "))

# 2. Rechteck-Berechnungen
# Formel Fläche: A = l * b | Formel Umfang: U = 2 * (l + b)
rechteck_flaeche = laenge * breite
rechteck_umfang = 2 * (laenge + breite)

# 3. Kreis-Daten abfragen
radius = float(input("Geben Sie den Radius des Kreises ein: "))

# 4. Kreis-Berechnungen
pi = 3.14159
# Formel Fläche: A = pi * r² | Formel Umfang: U = 2 * pi * r
kreis_flaeche = pi * (radius ** 2)
kreis_umfang = 2 * pi * radius

# 5. Ergebnisausgabe
print(f"\n--- Rechteck Ergebnisse:")
print(f"Länge: {laenge} | Breite: {breite}")
print(f"Fläche: {rechteck_flaeche:.2f} | Umfang: {rechteck_umfang:.2f}")

print(f"\n--- Kreis Ergebnisse:")
print(f"Radius: {radius}")
print(f"Fläche: {kreis_flaeche:.2f} | Umfang: {kreis_umfang:.2f}")

# 6. Flächenvergleich
# Wir nutzen if-elif-else, um alle drei möglichen Fälle abzudecken
print("\n--- Vergleich:")
if rechteck_flaeche > kreis_flaeche:
    print("Das Rechteck hat die größere Fläche.")
elif kreis_flaeche > rechteck_flaeche:
    print("Der Kreis hat die größere Fläche.")
else:
    print("Beide Formen haben exakt die gleiche Fläche.")