// 1. Definition der Variable (Hier kannst du zum Testen "en", "es", "fr" oder "de" eintragen)
let language = "de";

// Variable für die Nachricht vorbereiten
let message = "";

// 2. Das Switch-Case Statement zur Prüfung der Sprache
switch (language) {
    case "en":
        message = "Hello World";
        break;

    case "es":
        message = "Hola Mundo";
        break;

    case "fr":
        message = "Bonjour le monde";
        break;

    case "de":
        message = "Hallo Welt";
        break;

    // Default: Wenn keine der oben genannten Kürzel passt
    default:
        message = "Sprache nicht erkannt";
}

// 3. Ausgabe in der Konsole (für die Entwickler-Tools)
console.log(message);

// 4. Anzeige auf der Webseite (ändert das <div> mit der ID "ausgabe")
// Dieser Teil sorgt dafür, dass du das Ergebnis sofort in deinem HTML-Gerüst siehst
document.getElementById("ausgabe").textContent = message;