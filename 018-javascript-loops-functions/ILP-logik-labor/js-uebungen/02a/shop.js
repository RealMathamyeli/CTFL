// --- DATEN-STATUS ---
let language = "de";

// Übersetzungs-Objekt
const translations = {
    "de": { title: "Zahlen-Jäger", subtitle: "Ungerade Zahlen (0-20):", item: "Zahl" },
    "en": { title: "Number Hunter", subtitle: "Odd Numbers (0-20):", item: "Number" },
    "fr": { title: "Chasseur de Nombres", subtitle: "Nombres impairs (0-20):", item: "Nombre" },
    "es": { title: "Cazador de Números", subtitle: "Números impares (0-20):", item: "Número" }
};

// Warten, bis das HTML geladen ist
window.onload = function() {
    updateUI();
};

// --- FUNKTIONEN ---

// Sprache ändern
function setLanguage(langCode) {
    language = langCode;
    console.log("Sprache gewechselt zu: " + langCode);
    updateUI();
}

// Zentrale Funktion zum Zeichnen der Oberfläche
function updateUI() {
    const mainTitle = document.getElementById("main-title");
    const subTitle = document.getElementById("jagd-titel");
    const listenElement = document.getElementById("zahlen-liste");

    // 1. Überschriften setzen
    mainTitle.textContent = translations[language].title;
    subTitle.textContent = translations[language].subtitle;

    // 2. Liste leeren für Neuzeichnung
    listenElement.innerHTML = "";

    // 3. TEIL A: Die for-Schleife (Der Jäger)
    for (let i = 0; i <= 20; i++) {
        // Prüfung auf ungerade
        if (i % 2 !== 0) {
            // Neues Listenelement erstellen
            const punkt = document.createElement("li");
            
            // Text zusammenbauen (z.B. "Zahl: 1" oder "Number: 1")
            punkt.textContent = `${translations[language].item}: ${i}`;
            
            // In das HTML einfügen
            listenElement.appendChild(punkt);
        }
    }
}