# Datenstrukturen in Python
# Warum Datenstrukturen? (Why data structures)
# For storage (für Datenspeicherung)
# For reusability (für die wiederverwendbarkeit)

# Listen (Lists)
meine_obst_liste = ["Mango","Avocado"] # oder meine_obst_liste = list()

# Elemente zu einer Liste hinzufügen
meine_obst_liste.append("Apfel")
meine_obst_liste.append("Banane")
meine_obst_liste.append("Pflaume")
# Mit "insert()"
meine_obst_liste.insert(1, "Birne")
#
#print(meine_obst_liste)

# Zugriff auf Elemente in einer Liste
# mit Plus-Index
meine_banane = meine_obst_liste[2]

#print("Meine Banane: ", meine_obst_liste[2])

# mit Minus-Index
meine_pflaume = meine_obst_liste[-1]

#print("Meine Plaume: ", meine_pflaume)
# Entfernen von Elementen
# mit "remove()"
meine_obst_liste.remove("Birne")
#print("Ohne Birne: ", meine_obst_liste)

# mit "pop()"
meine_pflaume2 = meine_obst_liste.pop()
#print("entfernte Element: ", meine_obst_liste.pop())
#print("Nochmal meine Obst: ", meine_obst_liste)

# Tuple
#meine_hunde_tuple = () # nicht gut (immutable)

#meine_hunde_tuple = meine_hunde_tuple + ("Chiwawa") # Komma muss am Ende sein

meine_hunde_tuple = ("Chiwawa","Maltesa","Boxer","Labrado")

print(meine_hunde_tuple)

# Beispiel - Logging [("userID", "log-in-time","log-out-time"),("userID", "log-in-time","log-out-time")]

# Zugriff auf Elemente in einem Tupel
print(meine_hunde_tuple[1])


#
old_tuple = ("A", "B", "D")
# Create a new tuple to insert "C"
new_tuple = old_tuple[0:2] + ("C",) + old_tuple[2:]
print("New Tuple: ", new_tuple) # Output: ('A', 'B', 'C', 'D')

# Dictionary
my_profile_dict = {} # my_profile_dict = dict()

#
my_profile_dict= {
    "first_name":"Almando",
    "alter":30,
    "city":"Pythonville",
    "is_married": True
    }

# Zugriff auf Werte über Schlüssel
print(my_profile_dict["first_name"])

# Zugriff auf Werte über Werte
print(my_profile_dict.get("is_married"))

# Werte ändern
my_profile_dict["first_name"]="Almando Perez"

print(my_profile_dict)

# hinzufügen
my_profile_dict["last_name"]="Karera"
# Entfernen von Schlüssel-Wert-Paaren
# mit "del"
del my_profile_dict["is_married"]

print(my_profile_dict)

# Set
meine_farbe_set = {"Rot", "Grün", "Blau"}

# Iteration(Durchschleifen)
# über eine Liste
print("Meine Obst Liste")

for obst in meine_obst_liste:
    print("-",obst)

# über ein Tupel
print("Meine Hunde Liste:")
for hund in meine_hunde_tuple:
    print("-", hund.upper())


# Iterieren über schlüssel-wert-paareprin
# ("Iterieren über das Profil-Dictionary (Schlüssel-Wert-Paare):")
for key,value in my_profile_dict.items():
    print(key.capitalize(), ":", value)