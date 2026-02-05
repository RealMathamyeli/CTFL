# Datei zum Schreiben öffnen
datei = open("meine_notizen.txt", "w", encoding="utf-8")

# Inhalt schreiben
datei.write("Das ist meine erste Notiz.\n")
datei.write("Python macht Spaß!\n")

# Wichtig: Schließen, um Daten sicher zu speichern
datei.close()
print("Datei wurde erfolgreich erstellt.")

# Datei zum Anhängen öffnen
datei = open("meine_notizen.txt", "a", encoding="utf-8")

# Neue Zeile hinzufügen
datei.write("Hier ist eine nachträgliche Notiz.\n")

datei.close()
print("Inhalt wurde angehängt.")

# Datei zum Lesen öffnen
datei = open("meine_notizen.txt", "r", encoding="utf-8")

# Gesamten Inhalt in eine Variable laden
inhalt = datei.read()
print("Kompletter Inhalt der Datei:")
print(inhalt)

datei.close()

# Datei zeilenweise lesen
datei = open("meine_notizen.txt", "r", encoding="utf-8")

print("Zeilenweise Ausgabe:")
for zeile in datei:
    # strip() entfernt das zusätzliche Newline am Ende der Zeile
    print(f"Zeile: {zeile.strip()}")

datei.close()

# Datei neu erstellen / überschreiben ('w')
with open("meine_notizen2.txt", "w", encoding="utf-8") as datei:
    datei.write("Zeile 1: Erstellt mit dem with-Statement.\n")
    datei.write("Zeile 2: Sicher und sauber.\n")

# Text an dieselbe Datei anhängen ('a')
with open("meine_notizen2.txt", "a", encoding="utf-8") as datei:
    datei.write("Zeile 3: Dieser Text wurde angehängt.\n")

print("Schreibvorgänge abgeschlossen. Die Dateien wurden automatisch geschlossen.")