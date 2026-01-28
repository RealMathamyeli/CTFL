// --- DATEN-STATUS ---
let language = "de";
const prices = [10, 20, 45, 100, 5]; // Unsere Artikelliste

const translations = {
    "de": { title: "Warenkorb-Check", sub: "Deine Artikel:", total: "Endbetrag:", discount: "Inkl. 10% Rabatt!" },
    "en": { title: "Cart Checkout", sub: "Your Items:", total: "Total Amount:", discount: "Incl. 10% Discount!" },
    "fr": { title: "Panier d'achat", sub: "Vos articles:", total: "Montant total:", discount: "Avec 10% de réduction!" },
    "es": { title: "Carrito de compras", sub: "Tus artículos:", total: "Importe total:", discount: "¡Con 10% de descuento!" }
};

window.onload = function() {
    updateUI();
};

function setLanguage(langCode) {
    language = langCode;
    updateUI();
}

// SCHRITT 2 & 3: Funktion mit Array-Parameter
function calculateTotal(priceArray) {
    // SCHRITT 4: Logik
    let total = 0; // Initialisieren

    // For-Schleife: Durch das Array gehen
    for (let i = 0; i < priceArray.length; i++) {
        total += priceArray[i]; // Preise addieren
    }

    // Bedingung: Rabatt ab 100
    if (total > 100) {
        total = total * 0.9; // 10% Rabatt abziehen
        console.log("Rabatt wurde angewendet!");
    }

    // Return: Das Endergebnis zurückgeben
    return total;
}

function updateUI() {
    document.getElementById("main-title").textContent = translations[language].title;
    document.getElementById("sub-title").textContent = translations[language].sub;
    
    // Artikelliste im HTML anzeigen
    const list = document.getElementById("item-list");
    list.innerHTML = "";
    prices.forEach(price => {
        const li = document.createElement("li");
        li.textContent = `${price.toFixed(2)} €`;
        list.appendChild(li);
    });

    // Berechnung durchführen
    const finalTotal = calculateTotal(prices);
    
    // Ergebnis anzeigen
    document.getElementById("total-label").textContent = translations[language].total;
    document.getElementById("total-value").textContent = `${finalTotal.toFixed(2)} €`;

    // Rabatt-Hinweis anzeigen, wenn Summe (vor Rabatt) > 100 war
    const discountNote = document.getElementById("discount-note");
    const sumRaw = prices.reduce((a, b) => a + b, 0);
    if (sumRaw > 100) {
        discountNote.textContent = translations[language].discount;
        discountNote.style.display = "block";
    } else {
        discountNote.style.display = "none";
    }

    console.log("Gesamtpreis berechnet: ", finalTotal);
}