// --- DATEN-STATUS ---
let language = "de";
let timerActive = false;

const translations = {
    "de": { title: "Mission Control", status: "Bereit zum Start", btn: "Zündung starten", liftoff: "Abheben! 🚀" },
    "en": { title: "Mission Control", status: "Ready for launch", btn: "Start Ignition", liftoff: "Liftoff! 🚀" },
    "fr": { title: "Contrôle de Mission", status: "Prêt au lancement", btn: "Démarrer l'allumage", liftoff: "Décollage ! 🚀" },
    "es": { title: "Control de Misión", status: "Listo para el lanzamiento", btn: "Iniciar ignición", liftoff: "¡Despegue! 🚀" }
};

window.onload = function() {
    updateUI();
};

function setLanguage(langCode) {
    language = langCode;
    updateUI();
}

function updateUI() {
    document.getElementById("main-title").textContent = translations[language].title;
    if (!timerActive) {
        document.getElementById("status-text").textContent = translations[language].status;
        document.getElementById("start-btn").textContent = translations[language].btn;
    }
}

// Die "Countdown"-Logik
function startCountdown() {
    if (timerActive) return; // Verhindert Mehrfach-Klicks
    
    timerActive = true;
    const display = document.getElementById("rocket-display");
    const btn = document.getElementById("start-btn");
    const statusText = document.getElementById("status-text");
    
    btn.disabled = true; // Button deaktivieren während der Countdown läuft
    let counter = 10;
    
    // Wir nutzen ein Intervall, um jede Sekunde zu zählen
    const countdownInterval = setInterval(() => {
        display.textContent = counter;
        console.log("Countdown: " + counter);
        
        if (counter <= 0) {
            // Wenn bei 0 angekommen: Stoppen!
            clearInterval(countdownInterval);
            display.textContent = "🚀";
            statusText.textContent = translations[language].liftoff;
            
            // Nach 3 Sekunden Reset möglich
            setTimeout(() => {
                timerActive = false;
                btn.disabled = false;
                display.textContent = "--";
                updateUI();
            }, 3000);
        }
        
        counter--; // Runterzählen
    }, 1000); // 1000 Millisekunden = 1 Sekunde
}