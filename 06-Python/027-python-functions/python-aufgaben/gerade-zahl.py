# ===================================
# Übung 4: Gerade oder Ungerade prüfen
# ===================================

def is_even(number):
    """
    Prüft, ob eine Zahl gerade ist.
    Gibt True zurück wenn gerade, False wenn ungerade.
    """
    if number % 2 == 0:
        return True
    else:
        return False

# Alternativ: Noch kürzer geschrieben
def is_even_kurz(number):
    """Prüft, ob eine Zahl gerade ist (kürzere Version)."""
    return number % 2 == 0



# Test der Funktionen
print(is_even(4))   # True
print(is_even(7))   # False
print(is_even(0))   # True
print(is_even(15))  # False

# Test der kürzeren Version
print(is_even_kurz(4))   # True
print(is_even_kurz(7))   # False
