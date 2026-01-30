# Endlosschleife starten, die so lange läuft, bis wir sie manuell stoppen
while True:
    # Benutzereingabe abfragen und direkt in Kleinbuchstaben umwandeln
    antwort = input("Bitte gib 'ja' oder 'nein' ein: ").lower()

    # Überprüfen, ob die Eingabe gültig ist
    if antwort == "ja" or antwort == "nein":
        # Erfolgsmeldung ausgeben
        print(f"Richtig! Du hast '{antwort}' eingegeben.")
        # Die Schleife mit break verlassen
        break
    else:
        # Fehlermeldung, wenn die Eingabe weder ja noch nein war
        print("Ungültige Eingabe. Versuche es bitte erneut.")