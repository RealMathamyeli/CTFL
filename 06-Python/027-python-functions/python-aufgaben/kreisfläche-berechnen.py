# ===================================
# Übung 2: Kreisfläche berechnen
# ===================================

def calculate_circle_area(radius):
    """Berechnet die Fläche eines Kreises anhand des Radius."""
    PI = 3.14159
    flaeche = PI * radius ** 2
    return flaeche

flaeche = calculate_circle_area(5)
print(flaeche)
print(f"{flaeche:.2f}")