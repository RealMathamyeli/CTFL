// --- DATEN-STATUS ---
let language = "de";

const translations = {
    "de": { title: "Benutzer-Begrüßung", welcome: "Willkommen zurück" },
    "en": { title: "User Greeting", welcome: "Welcome back" },
    "fr": { title: "Accueil de l'utilisateur", welcome: "Bienvenue" },
    "es": { title: "Saludo al usuario", welcome: "Bienvenido de nuevo" }
};

window.onload = function() {
    updateUI();
};

function setLanguage(langCode) {
    language = langCode;
    updateUI();
}

// 1. & 2. FUNCTION DECLARATION mit Parameter 'name'
function greetUser(name) {
    // 3. Logge die Nachricht in die Konsole
    const welcomeText = translations[language].welcome;
    console.log(`${welcomeText}, ${name}!`);

    // Zusätzliche Anzeige auf der Webseite
    const list = document.getElementById("guest-list");
    if (list) {
        const li = document.createElement("li");
        li.textContent = `${welcomeText}, ${name}!`;
        list.appendChild(li);
    }
}

function updateUI() {
    document.getElementById("main-title").textContent = translations[language].title;
    
    const list = document.getElementById("guest-list");
    list.innerHTML = ""; // Liste leeren für Sprachwechsel

    // 4. RUFE die Funktion dreimal auf
    greetUser("Alice");
    greetUser("Bob");
    greetUser("Charlie");
}