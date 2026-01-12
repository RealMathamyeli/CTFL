// 1. Variablen für den Zähler und die Elemente definieren
let zaehler = 0;

const meinButton = document.getElementById('klick-button');
const statusAnzeige = document.getElementById('status-text');
const ergebnisDiv = document.getElementById('ergebnis-container');

// 2. Klick-Event für den Button
meinButton.addEventListener('click', () => {
    // Zähler erhöhen
    zaehler++;

    // Text des p-Elements ändern
    statusAnzeige.textContent = `Zählerstand: ${zaehler}`;

    // Neues span-Element erstellen
    const neuesSpan = document.createElement('span');
    neuesSpan.className = 'zaehler-span';
    neuesSpan.textContent = `[${zaehler}]`;

    // Span dem div hinzufügen
    ergebnisDiv.appendChild(neuesSpan);
});

// 3. Zweites Event: mouseover auf das div
ergebnisDiv.addEventListener('mouseover', () => {
    ergebnisDiv.style.backgroundColor = '#fff3cd'; // Subtiles Gelb
    ergebnisDiv.style.borderColor = '#ffecb5';
});

// Mouseout hinzufügen, damit es sich zurücksetzt (optional, aber schöner)
ergebnisDiv.addEventListener('mouseout', () => {
    ergebnisDiv.style.backgroundColor = 'transparent';
    ergebnisDiv.style.borderColor = '#ccc';
});