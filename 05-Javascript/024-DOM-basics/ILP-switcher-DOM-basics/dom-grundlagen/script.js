// --- 1. DOM INITIALISIERUNG ---
const beschreibung = document.getElementById("beschreibung");
const mainTitle = document.getElementById("profil-name");
const profilBild = document.getElementById("profil-bild");
const statusAnzeige = document.getElementById("status-anzeige");

// Texte und Bilder beim Laden ändern
beschreibung.textContent = "Die Reise in die Tiefen des JavaScript-Universums hat gerade erst begonnen!";
mainTitle.innerHTML = "DOM Manipulation: <strong>Agenten-Modus aktiviert</strong>";
profilBild.src = "https://cdn.pixabay.com/photo/2015/10/31/12/32/james-bond-1015612_1280.jpg";
profilBild.alt = "Agent 007";

// Kacheln stylen
const kacheln = document.querySelectorAll(".kachel");
kacheln.forEach((kachel, index) => {
    kachel.style.backgroundColor = "orange";
    kachel.classList.add("aktiviert");
    kachel.textContent = `K${index + 1}`;
});

// Status setzen
statusAnzeige.setAttribute("data-initial-status", "bereit");
statusAnzeige.textContent = "bereit";


// --- 2. EVENT HANDLING (ZÄHLER & TOGGLE) ---
const klickButton = document.getElementById("klick-mich");
const toggleButton = document.getElementById("toggle-stil");
const meldungDiv = document.getElementById("meldung");
let klickZaehler = 0;

function begruessungAnzeigen(event) {
    klickZaehler++;
    meldungDiv.textContent = `Agenten-Check durchgeführt. Klicks: ${klickZaehler}`;
    console.log("Geklicktes Element:", event.target);

    if (klickZaehler >= 5) {
        meldungDiv.textContent = "Sicherheits-Sperre: 5 Klicks erreicht.";
        klickButton.removeEventListener("click", begruessungAnzeigen);
        klickButton.disabled = true;
        klickButton.style.opacity = "0.5";
    }
}

klickButton.addEventListener("click", begruessungAnzeigen);

toggleButton.addEventListener("click", () => {
    meldungDiv.classList.toggle("hervorgehoben");
});


// --- 3. FARBWÄHLER LOGIK ---
const farbAnzeige = document.getElementById("farb-anzeige");
const farbButtons = document.querySelectorAll('.farb-btn');

farbButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        // WICHTIG: event.target.dataset.color greift auf data-color zu
        const neueFarbe = event.target.dataset.color;
        
        // Hintergrund der Anzeige ändern
        farbAnzeige.style.backgroundColor = neueFarbe;
        
        // Text in der Anzeige ändern
        farbAnzeige.textContent = "Farbe: " + neueFarbe;
        
        // Textfarbe für Gelb anpassen
        farbAnzeige.style.color = (neueFarbe === "yellow") ? "black" : "white";
    });
});