#!/bin/bash

# Bildschirm leeren für bessere Übersicht
clear
echo "==============================================="
echo "   SYSTEMPRÜFUNG: $(date +'%d.%m.%Y %H:%M')"
echo "==============================================="

# 1. ÜBERPRÜFUNG AUF UPDATES
echo "[1/3] Suche nach verfügbaren Updates..."
echo "(Ggf. Passwort für sudo eingeben)"
# Update ausführen, um Cache zu aktualisieren
sudo apt-get update > /dev/null 2>&1

# Anzahl der aktualisierbaren Pakete zählen
UPDATES=$(apt list --upgradable 2>/dev/null | grep -c upgradable)

if [ "$UPDATES" -gt 0 ]; then
    echo "      -> STATUS: $UPDATES Updates verfügbar."
else
    echo "      -> STATUS: System ist auf dem neuesten Stand."
fi

echo ""

# 2. SPEICHERVERBRAUCH (RAM)
echo "[2/3] Berechne Speicherauslastung..."

# Wir extrahieren die Werte direkt aus /proc/meminfo, da dies 
# die stabilste Quelle unter Linux ist und unabhängig vom 'free'-Befehl funktioniert.
TOTAL_MEM=$(grep MemTotal /proc/meminfo | awk '{print $2}')
FREE_MEM=$(grep MemAvailable /proc/meminfo | awk '{print $2}')
USED_MEM=$((TOTAL_MEM - FREE_MEM))

# Prozentberechnung via awk (da Bash keine Fließkommazahlen kann)
PERCENT=$(awk "BEGIN {printf \"%.2f\", ($USED_MEM / $TOTAL_MEM) * 100}")

if [ -n "$PERCENT" ]; then
    echo "      -> STATUS: $PERCENT % belegt."
else
    echo "      -> FEHLER: Speicherauslastung konnte nicht berechnet werden."
fi

echo ""

# 3. ANGEMELDETE BENUTZER
echo "[3/3] Prüfe angemeldete Benutzer..."
USER_COUNT=$(who | wc -l)

echo "      -> STATUS: $USER_COUNT Benutzer sind aktuell aktiv."

echo "==============================================="
echo "   Prüfung abgeschlossen."
