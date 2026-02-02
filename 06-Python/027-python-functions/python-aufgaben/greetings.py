# ===================================
# Übung 1: Einfache Begrüßungsfunktion
# ===================================

def greet_user(PLATZHALTER):
    print(f"Hallo, {PLATZHALTER}! Willkommen bei der Python-Programmierung.")






# Testen



# Manual (Static)

greet_user("Josi")
greet_user("Amin")


# Dynamic
eingegebener_name=input("Wie heißt du? ")
#
greet_user(eingegebener_name)

