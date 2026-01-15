// --- DATEN-STATUS ---
let language = "de";
const testCelsius = 25; // Beispielwert zum Umrechnen

const translations = {
    "de": { title: "Temperatur-Konverter", result: "Das sind" },
    "en": { title: "Temperature Converter", result: "That is" },
    "fr": { title: "Convertisseur de Température", result: "C'est" },
    "es": { title: "Convertidor de Temperatura", result: "Eso es" }
};

window.onload = function() {
    updateUI();
};

function setLanguage(langCode) {
    language = langCode;
    updateUI();
}

// 1. & 2. Funktion mit Parameter 'celsius'
function celsiusToFahrenheit(celsius) {
    // 3. Berechnung
    const fahrenheit = celsius * 1.8 + 32;
    
    // 4. Ergebnis mit RETURN zurückgeben
    return fahrenheit;
}

function updateUI() {
    document.getElementById("main-title").textContent = translations[language].title;
    
    // 5. Funktion aufrufen und Ergebnis in einer Variablen speichern
    const tempInFahrenheit = celsiusToFahrenheit(testCelsius);
    
    // In der Konsole loggen (wie in der Aufgabe gefordert)
    console.log(`${testCelsius}°C entspricht ${tempInFahrenheit}°F`);

    // Auf der Webseite anzeigen
    document.getElementById("input-display").textContent = `${testCelsius}°C`;
    document.getElementById("output-display").textContent = `${translations[language].result} ${tempInFahrenheit.toFixed(1)}°F`;
}