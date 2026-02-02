# meine_funktionen.py

def begruesse_user(name):
    """Gibt eine freundliche Begrüßung zurück."""
    return f"Hallo {name}, willkommen in der Welt der Module!"

def dividiere(a, b):
    """Dividiert zwei Zahlen mit Schutz vor Division durch Null."""
    if b == 0:
        return "Fehler: Division durch Null ist mathematisch nicht möglich!"
    else:
        return a / b