#!/bin/bash

# Konfiguration: Hier kannst du die gewünschte Gruppe anpassen
GROUP="developers"
USERNAME=$1

# 1. Prüfen, ob ein Argument übergeben wurde
if [ -z "$USERNAME" ]; then
    echo "Fehler: Bitte geben Sie einen Benutzernamen an."
    echo "Nutzung: sudo ./create_user.sh [benutzername]"
    exit 1
fi

# 2. Prüfen, ob das Skript mit Root-Rechten läuft
if [ "$EUID" -ne 0 ]; then
    echo "Fehler: Bitte führen Sie das Skript mit sudo aus."
    exit 1
fi

# 3. Prüfen, ob die Zielgruppe existiert (sonst bricht useradd ab)
if ! getent group "$GROUP" > /dev/null; then
    echo "Hinweis: Gruppe '$GROUP' existiert nicht. Erstelle Gruppe..."
    groupadd "$GROUP"
fi

# 4. Prüfen, ob der Benutzer bereits existiert
if id "$USERNAME" >/dev/null 2>&1; then
    echo "Abbruch: Der Benutzer '$USERNAME' existiert bereits auf diesem System."
    exit 1
else
    # 5. Benutzer anlegen
    # -m: Erstellt Home-Verzeichnis
    # -g: Weist die primäre Gruppe zu
    # -s: Legt die Standard-Shell fest (meist /bin/bash)
    useradd -m -g "$GROUP" -s /bin/bash "$USERNAME"

    if [ $? -eq 0 ]; then
        echo "Erfolg: Benutzer '$USERNAME' wurde angelegt und der Gruppe '$GROUP' hinzugefügt."
        echo "Das Home-Verzeichnis befindet sich unter /home/$USERNAME."
    else
        echo "Fehler: Beim Erstellen des Benutzers ist ein Problem aufgetreten."
        exit 1
    fi
fi
