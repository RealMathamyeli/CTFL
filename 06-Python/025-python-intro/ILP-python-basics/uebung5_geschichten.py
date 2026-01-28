# Abfrage der verschiedenen Wörter
tier = input("Gib ein Tier ein: ")
farbe = input("Gib eine Farbe ein: ")
ort = input("Gib einen Ort ein: ")
aktion = input("Gib eine Aktion ein: ")

# Die Geschichte zusammenbauen
# Wir hängen ein "e" an die Aktion an, damit es grammatikalisch besser passt (tanzen -> tanzte)
geschichte = f"Es war einmal eine {farbe}e {tier.capitalize()}, die in der {ort} {aktion}te!"

# Ausgabe der Geschichte
print("\n--- Deine Geschichte ---")
print(geschichte)