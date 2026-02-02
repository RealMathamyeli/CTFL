# ===================================
# Übung 5: String-Wiederholer
# ===================================

def repeat_string(text, anzahl):
    """Wiederholt einen String (kürzeste Version)."""
    return " ".join([text] * anzahl)


# Alternative Lösung (einfacher):
def repeat_string_einfach(text, anzahl):
    """Wiederholt einen String (einfachere Methode)."""
    woerter = [] # list
    for i in range(anzahl):
        woerter.append(text)
    return " ".join(woerter)



# Test der Funktionen
ergebnis = repeat_string("Hallo", 3)
print(ergebnis)  # Hallo Hallo Hallo

# Test der Funktionen
ergebnis = repeat_string("Python", 4)
print(ergebnis)  # Python Python Python Python