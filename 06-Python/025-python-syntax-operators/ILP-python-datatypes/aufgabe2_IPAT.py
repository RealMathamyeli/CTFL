# --- INTELLIGENTES PROFIL-ANALYSE-TOOL ---

# 1. Datenerfassung
name = input("Gib deinen Namen ein: ")
alter = int(input("Gib dein Alter ein: ")) # Umwandlung in Integer für den Vergleich
wohnort = input("Wo wohnst du? ")
beruf = input("Was ist dein Beruf? ")

# Abfrage des Interesses und Konvertierung in einen Boolean
# Wir prüfen, ob die Eingabe "ja" ist. Wenn ja, wird die Variable True, sonst False.
python_interessiert_input = input("Bist du an Python-Programmierung interessiert? (ja/nein): ").lower()
ist_interessiert = python_interessiert_input == "ja"

# 2. Logik für die Alterskategorie
# Hier nutzen wir eine einfache if-else Struktur, um die Kategorie zuzuweisen.
if alter < 25:
    kategorie = "Junger Enthusiast"
else:
    kategorie = "Erfahrener Profi"

# 3. Strukturierte Profilausgabe
print("\n" + "="*30)
print("--- BENUTZERPROFIL ZUSAMMENFASSUNG ---")
print(f"Name:             {name}")
print(f"Alter:            {alter}")
print(f"Wohnort:          {wohnort}")
print(f"Beruf:            {beruf}")
print(f"Interesse Python: {ist_interessiert}")
print(f"Alterskategorie:  {kategorie}")
print("="*30)