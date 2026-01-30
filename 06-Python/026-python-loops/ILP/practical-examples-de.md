# ILP Praktische Übungen

In dieser ILP-Phase wirst du weiterhin die Konzepte von Schleifen und bedingten Anweisungen üben, indem du einfache interaktive Programme erstellst. Unten sind drei Aufgaben aus unseren Lektionen von heute Morgen.

- Wie üblich, erstelle eine neue Python-Datei für jede Aufgabe und schreibe den Code, um die angegebene Funktionalität zu erfüllen.

Viel Spaß beim Programmieren!

## Aufgaben

1. Eine einfache textbasierte interaktive Eingabeaufforderung, die den Benutzer auffordert, entweder "ja" oder "nein" einzugeben. Wenn der Benutzer die richtige Antwort eingibt, wird eine Erfolgsmeldung ausgegeben und die Schleife wird beendet; andernfalls wird weiter gefragt.
   - Tipps:
     - Verwende eine while-Schleife, um den Benutzer so lange zu fragen, bis er "ja" oder "nein" eingibt.
     - Verwende if-Anweisungen, um die Eingabe des Benutzers zu überprüfen.
     - Verwende die break-Anweisung, um die Schleife zu verlassen, wenn die richtige Eingabe empfangen wurde.
   - Beispielausgabe:
     - "Richtig! Du hast 'ja' eingegeben."
2. Ein einfacher Taschenrechner, der den Benutzer auffordert, zwei Zahlen und einen Operator (+, -, \*, /) einzugeben. Das Programm führt die Berechnung basierend auf dem Operator durch und gibt das Ergebnis aus. Wenn der Benutzer einen ungültigen Operator eingibt, wird er aufgefordert, einen gültigen einzugeben.
   - Tipps:
     - Verwende if, elif, else-Anweisungen, um verschiedene Operatoren zu behandeln.
     - Verwende eine while-Schleife, um so lange nach einem gültigen Operator zu fragen, wenn die Eingabe ungültig ist.
     - Verwende break, um die Schleife zu verlassen, sobald ein gültiger Operator eingegeben wurde.
   - Beispielausgabe:
     - "Das Ergebnis von 5 + 3 ist 8."

3. Eine einfache interaktive App, die die Kosten einer Pizzabestellung berechnet.

- Das Programm fragt den Benutzer nach der Größe der Pizza, die er bestellen möchte.
  - Kleine Pizza (S) = 15€
  - Mittlere Pizza (M) = 20€
  - Große Pizza (L) = 25€
- Dann fragt es den Benutzer, ob er Pepperoni auf seiner Pizza oder zusätzlichen Käse möchte.
  - Pepperoni für kleine Pizza = +2€
  - Pepperoni für mittlere oder große Pizza = +3€
  - Zusätzlicher Käse für jede Pizzagröße = +1€
- Schließlich berechnet es die Gesamtkosten der Pizzabestellung.
- Beispielausgabe:
  - "Deine Endrechnung beträgt: 23€"
