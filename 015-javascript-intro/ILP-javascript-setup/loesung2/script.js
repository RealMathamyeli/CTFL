// Wir warten, bis das HTML fertig geladen ist
document.addEventListener('DOMContentLoaded', () => {
    
    const zukunftsThemen = [
        { 
            titel: "Der Universal-Kleber", 
            text: "In 5-10 Jahren wird JS die Hauptschnittstelle sein, um KI-Modelle und WebAssembly-Module zu steuern." 
        },
        { 
            titel: "Edge Computing Potenzial", 
            text: "Ungenutztes Potenzial liegt in der Ausführung von Code direkt beim Nutzer (Edge), was Ladezeiten fast eliminiert." 
        },
        { 
            titel: "Die Grenzen", 
            text: "An Grenzen stößt JS bei extrem rechenintensiven Aufgaben wie 3D-Rendering oder massivem KI-Training." 
        }
    ];
    
    const bereich = document.getElementById(    'content-area');

    if (bereich) {
        zukunftsThemen.forEach(item => {
            const div = document.createElement('div');
            div.className = 'feature-box';
            div.innerHTML = `<h3>${item.titel}</h3><p>${item.text}</p>`;
            bereich.appendChild(div);
        });
        console.log("Inhalte erfolgreich geladen!");
    }
});