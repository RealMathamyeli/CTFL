# Abfrage der Zahlen (außerhalb der Schleife, da diese meist feststehen)
zahl1 = float(input("Gib die erste Zahl ein: "))
zahl2 = float(input("Gib die zweite Zahl ein: "))

# Schleife für die Abfrage des Operators
while True:
    operator = input("Wähle einen Operator (+, -, *, /): ")

    # Überprüfung der verschiedenen Rechenarten
    if operator == "+":
        ergebnis = zahl1 + zahl2
        break # Gültiger Operator -> Schleife beenden
    elif operator == "-":
        ergebnis = zahl1 - zahl2
        break
    elif operator == "*":
        ergebnis = zahl1 * zahl2
        break
    elif operator == "/":
        # Bonus: Prüfung auf Division durch Null
        if zahl2 != 0:
            ergebnis = zahl1 / zahl2
            break
        else:
            print("Fehler: Division durch Null ist nicht erlaubt!")
            # Wir springen hier nicht mit break raus, damit der Nutzer 
            # ggf. einen anderen Operator wählen kann.
    else:
        print("Ungültiger Operator! Bitte versuche es erneut.")

# Finale Ausgabe des Ergebnisses
print(f"Das Ergebnis von {zahl1} {operator} {zahl2} ist {ergebnis}.")