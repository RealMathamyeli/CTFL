class BankAccount:
    def __init__(self, owner_name, balance):
        self.owner_name = owner_name
        self.balance = balance
        print(f"Konto für {self.owner_name} erstellt mit Guthaben: {self.balance}€")

    def deposit(self, amount):
        """Zahlt Geld ein und erhöht den Kontostand."""
        self.balance += amount
        print(f"{amount}€ eingezahlt. Neues Guthaben: {self.balance}€")

    def withdraw(self, amount):
        """Hebt Geld ab, sofern genug Guthaben vorhanden ist."""
        if amount <= self.balance:
            self.balance -= amount
            print(f"{amount}€ abgehoben. Neues Guthaben: {self.balance}€")
        else:
            print(f"Fehler: Nicht genug Guthaben! Du hast nur {self.balance}€")

    def show_balance(self):
        """Gibt den aktuellen Kontostand aus."""
        print(f"Aktueller Kontostand: {self.balance}€")

# --- Test des Bankkontos ---

# 1. Konto erstellen
mein_konto = BankAccount("John", 100)

# 2. 50€ einzahlen
mein_konto.deposit(50)

# 3. 30€ abheben
mein_konto.withdraw(30)

# 4. Versuch, 200€ abzuheben
mein_konto.withdraw(200)

# 5. Finalen Kontostand anzeigen
mein_konto.show_balance()