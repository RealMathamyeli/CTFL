# OOP in Python

# Klasse (Hundeklasse) erstellen
class Hund:
    # Der Konstruktor
    def __init__(self, name, farbe, alter):
        # Wir nehmen die übergebenen Werte und speichern sie
        # als Eigenschaften (Attribute) des konkreten Objekts (self).
        self.name = name # Attribute (Eigenschaft)
        self.farbe = farbe
        self.alter = alter


    # Methode (Verb - was kann der Tun?)
    def bellen(self):
        print(f"{self.name} macht: Wuff! Wuff!")


# Klasse benutzen (Objekt erstellen) - Instanz
barksalot = Hund("Barksalot", "Brown", 2)
# milo = Hund("Milo", "Weiße")

#new_dog = Hund("BigDog", "Golden")


# Methode mit "Punktnotation" zugreifen
#barksalot.bellen()


#user_name = "Iyad"


#print(f"The user is called {user_name}")

# print_name()



# # Participants
# class Participant:
#     def __init__(self,parameter):
#         self.my_name = parameter


# # Different Participants
# part_iyad = Participant("Iyad") # init Constructor is automatically called here
# part_szymon= Participant("Szymon")

# # Call Participants by name
# print(f"How are you {part_iyad.my_name}?")
# print(f"How are you {part_szymon.my_name}?")

# participant_list = ["Andri","Bern", "Smith"]

# Design Patterns

# Bankkonto

class Bankkonto:
    """
    Eine realistische Klasse für ein Bankkonto.
    Zeigt wie Attribute und Methoden in der Praxis zusammenarbeiten.
    """

    def __init__(self, inhaber, kontonummer, anfangsguthaben):
        """
        Konstruktor für ein Bankkonto

        Parameter:
        - inhaber: Name des Kontoinhabers
        - kontonummer: Eindeutige Kontonummer
        - anfangsguthaben: Startguthaben (optional, Standard: 0)
        """
        self.inhaber = inhaber
        self.kontonummer = kontonummer
        self.guthaben = anfangsguthaben
    #
    def kontostand_anzeigen(self):
        """Aktuellen Kontostand anzeigen"""
        print(f"  📊 Kontostand von {self.inhaber}: {self.guthaben:.2f} €")

    #
    def einzahlen(self, betrag):
        """Geld auf das Konto einzahlen"""
        if betrag > 0:
            self.guthaben += betrag
            print(f"  ✓ {betrag:.2f} € eingezahlt. Neues Guthaben: {self.guthaben:.2f} €")
        else:
            print(f"  ✗ Ungültiger Betrag: {betrag} €")

konto_max = Bankkonto("Max Müller", "DE87654321", 500)

#
konto_max.kontostand_anzeigen()