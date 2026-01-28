let zufallsZahl;
let einsatz = 10;

// Elemente referenzieren
const alterInput = document.getElementById("alter");
const zahlInput = document.getElementById("zahl");
const ergebnisFeld = document.getElementById("ergebnis");

// --- EVENT LISTENER ---

// 1. Enter-Taste im Altersfeld
alterInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        pruefeAlter();
    }
});

// 2. Enter-Taste im Spielfeld (Automatisch neues Spiel)
zahlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        // Vor jedem Vergleich eine NEUE Zufallszahl generieren (Neues Spiel)
        neueBankZahl();
        pruefeZahl();
    }
});

// 3. Reset Button
document.getElementById("resetBtn").addEventListener("click", zurueck);

// --- FUNKTIONEN ---

function neueBankZahl() {
    zufallsZahl = Math.floor(Math.random() * 19);
    console.log("Die Bank hat neu gewürfelt: " + zufallsZahl);
}

function pruefeAlter() {
    if (alterInput.value >= 18) {
        document.getElementById("start").style.display = "none";
        document.getElementById("spiel").style.display = "block";
        zahlInput.focus(); // Direkt ins nächste Feld springen
    } else {
        document.getElementById("fehler").textContent = "Du musst 18 sein!";
    }
}

function pruefeZahl() {
    const userZahl = parseInt(zahlInput.value);

    if (isNaN(userZahl) || userZahl < 0 || userZahl > 18) {
        ergebnisFeld.style.color = "red";
        ergebnisFeld.textContent = "Wähle 0 bis 18!";
        return;
    }

    if (userZahl === zufallsZahl) {
        if (userZahl === 0) {
            ergebnisFeld.style.color = "#d4af37";
            ergebnisFeld.innerHTML = `🏆 JACKPOT! Die 0!<br>Gewinn: ${einsatz * 18}€`;
        } else {
            ergebnisFeld.style.color = "green";
            ergebnisFeld.innerHTML = `🎉 Treffer! Zahl ${userZahl}.<br>Gewinn: ${einsatz * 2}€`;
        }
    } else {
        ergebnisFeld.style.color = "red";
        ergebnisFeld.textContent = `Bank hat ${zufallsZahl}. Versuchs nochmal!`;
    }
    
    // Feld markieren für schnelles Weitertippen
    zahlInput.select(); 
}

function zurueck() {
    location.reload(); // Einfachste Methode für kompletten Reset
}