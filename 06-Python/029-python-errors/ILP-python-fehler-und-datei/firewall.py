users = [
    {"name": "Alice", "age": 30},
    {"name": "", "age": 25},        # Ungültig: Kein Name
    {"name": "Bob", "age": -5},     # Ungültig: Negatives Alter
    {"name": "Charlie", "age": 45}
]

valid_users = []
failed_records = []

for user in users:
    # Die "Firewall"-Regel:
    # 1. user["name"] darf nicht leer sein (ein leerer String "" wird in Python als False gewertet)
    # 2. user["age"] muss größer als 0 sein
    if user["name"] != "" and user["age"] > 0:
        valid_users.append(user)
    else:
        # Wenn eine der Bedingungen nicht erfüllt ist, ab in die Fehlerliste
        failed_records.append(user)

# Ergebnisse präsentieren
print("--- Gültige Benutzer ---")
for u in valid_users: 
    print(f"✅ {u['name']} ({u['age']} Jahre)")

print("\n--- Fehlerhafte Datensätze ---")
for f in failed_records:
    print(f"❌ Defekt: {f}")