// --- DATEN-STATUS ---
let language = "de";
let accountBalance = 50.00;
const purchaseAmount = 45.00;

// Warten, bis das HTML geladen ist, um die Elemente zu finden
window.onload = function() {
    updateUI();
};

// --- FUNKTIONEN ---

// 1. Diese Funktion wird von den Flaggen-Buttons aufgerufen
function setLanguage(langCode) {
    language = langCode;
    console.log("Sprache geändert auf: " + langCode);
    updateUI(); // Texte sofort neu zeichnen
}

// 2. Diese Funktion wird vom blauen Kaufen-Button aufgerufen
function processPurchase() {
    const statusEl = document.getElementById("status-meldung");
    const warnEl = document.getElementById("warn-meldung");

    // Alles zurücksetzen für neuen Versuch
    statusEl.textContent = "";
    statusEl.className = "";
    warnEl.textContent = "";
    warnEl.className = "";

    if (accountBalance >= purchaseAmount) {
        accountBalance -= purchaseAmount;
        showResult(true);
    } else {
        showResult(false);
    }
    updateUI();
}

// 3. Zentrale Funktion zum Aktualisieren aller Texte
function updateUI() {
    // Werte aktualisieren
    document.getElementById("display-balance").textContent = accountBalance.toFixed(2) + "€";
    document.getElementById("display-price").textContent = purchaseAmount.toFixed(2) + "€";
    
    // Texte übersetzen
    const title = document.getElementById("title");
    const lblBalance = document.getElementById("label-balance");
    const lblPrice = document.getElementById("label-price");
    const buyBtn = document.getElementById("buy-btn");

    switch (language) {
        case "en":
            title.textContent = "Shopping Cart";
            lblBalance.textContent = "Balance:";
            lblPrice.textContent = "Price:";
            buyBtn.textContent = "Purchase Now";
            break;
        case "fr":
            title.textContent = "Panier";
            lblBalance.textContent = "Solde:";
            lblPrice.textContent = "Prix:";
            buyBtn.textContent = "Acheter";
            break;
        case "es":
            title.textContent = "Carrito";
            lblBalance.textContent = "Saldo:";
            lblPrice.textContent = "Precio:";
            buyBtn.textContent = "Comprar";
            break;
        default: // de
            title.textContent = "Warenkorb";
            lblBalance.textContent = "Kontostand:";
            lblPrice.textContent = "Preis:";
            buyBtn.textContent = "Jetzt Kaufen";
    }
}

// 4. Erfolg oder Fehler anzeigen
function showResult(success) {
    const statusEl = document.getElementById("status-meldung");
    const warnEl = document.getElementById("warn-meldung");

    if (success) {
        let msg = { "de": "Erfolg! ✅", "en": "Success! ✅", "fr": "Réussi ! ✅", "es": "¡Exito! ✅" };
        statusEl.textContent = msg[language] || msg["de"];
        statusEl.className = "success";

        // Niedriger Kontostand Warnung
        if (accountBalance < 10) {
            let wMsg = { "de": "⚠️ Niedriger Stand!", "en": "⚠️ Low balance!", "fr": "⚠️ Solde faible!", "es": "⚠️ Saldo bajo!" };
            warnEl.textContent = wMsg[language] || wMsg["de"];
            warnEl.className = "warning";
        }
    } else {
        let eMsg = { "de": "Abgelehnt! ❌", "en": "Declined! ❌", "fr": "Refusé ! ❌", "es": "¡Rechazado! ❌" };
        statusEl.textContent = eMsg[language] || eMsg["de"];
        statusEl.className = "error";
    }
}