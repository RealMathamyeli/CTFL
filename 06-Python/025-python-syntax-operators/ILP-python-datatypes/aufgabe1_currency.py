# --- WÄHRUNGSUMRECHNER ---

# 1. Startwert abfragen
# Wir nutzen float(), um auch Cent-Beträge (z.B. 10.50) verarbeiten zu können.
euro_betrag = float(input("Bitte gib den Betrag in Euro (EUR) ein: "))

# 2. Wechselkurse definieren (Stand: Beispielwerte)
# Kurs-Variablen werden klar benannt, um Verwechslungen zu vermeiden.
kurs_usd = 1.08    # 1 EUR entspricht 1.08 USD
kurs_jpy = 165.25  # 1 EUR entspricht 165.25 JPY

# 3. Berechnung USD
# Multiplikation des Euro-Betrags mit dem Dollar-Kurs
usd_ergebnis = euro_betrag * kurs_usd

# 4. Berechnung JPY
# Multiplikation des ursprünglichen Euro-Betrags mit dem Yen-Kurs
jpy_ergebnis = euro_betrag * kurs_jpy

# 5. Ausgabe der Ergebnisse
# Wir nutzen f-Strings für eine saubere Darstellung. 
# :.2f sorgt dafür, dass immer genau 2 Nachkommastellen angezeigt werden.
print("\n--- Währungsumrechner Ergebnisse ---")
print(f"Ursprünglicher Betrag in EUR: {euro_betrag:.2f}")
print(f"Umgerechneter Betrag in USD:  {usd_ergebnis:.2f}")
print(f"Umgerechneter Betrag in JPY:  {jpy_ergebnis:.2f}")