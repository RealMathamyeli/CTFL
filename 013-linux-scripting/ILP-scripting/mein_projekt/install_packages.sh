#!/bin/bash

# Liste der zu installierenden Pakete
PACKAGES=("htop" "tree" "vim-nox")

INSTALLED=()
ALREADY_THERE=()

echo "Starte Paketprüfung..."

for PKG in "${PACKAGES[@]}"; do
    # Prüfen, ob das Paket bereits installiert ist
    if dpkg -l | grep -q "ii  $PKG "; then
        ALREADY_THERE+=("$PKG")
    else
        echo "Installiere $PKG..."
        sudo apt-get install -y "$PKG" > /dev/null 2>&1
        
        # Prüfen, ob die Installation erfolgreich war
        if [ $? -eq 0 ]; then
            INSTALLED+=("$PKG")
        fi
    fi
done

# Abschlussbericht
echo "---------------------------------------"
echo "Bereits vorhanden: ${ALREADY_THERE[*]:-keine}"
echo "Neu installiert:   ${INSTALLED[*]:-keine}"
echo "---------------------------------------"
