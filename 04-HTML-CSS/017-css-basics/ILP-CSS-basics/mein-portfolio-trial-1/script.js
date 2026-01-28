document.addEventListener("DOMContentLoaded", () => {
    // Aktuelles Jahr im Footer setzen
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log("Galerie-Komponenten geladen.");
});