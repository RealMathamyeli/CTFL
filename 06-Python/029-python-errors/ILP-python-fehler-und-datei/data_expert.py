raw_transactions = ["$10.50", "$2.00", "$5.25", "$99.99", "$5.00"]

# Eine leere Liste für die bereinigten Zahlen
clean_transactions = []

# 1. & 2. Bereinigen und Konvertieren
for item in raw_transactions:
    # Entferne das "$" Zeichen
    clean_string = item.replace("$", "")
    
    # Umwandlung in eine Gleitkommazahl (float)
    amount = float(clean_string)
    
    # Zur neuen Liste hinzufügen
    clean_transactions.append(amount)

# Profi: Das macht genau dasselbe wie die 5 Zeilen oben
# clean_transactions = [float(item.replace("$", "")) for item in raw_transactions]

# 3. Gesamtumsatz berechnen
total_revenue = sum(clean_transactions)

# Ergebnisse ausgeben
print(f"Bereinigte Liste: {clean_transactions}")
print(f"Der Gesamtumsatz beträgt: {total_revenue:.2f}$")