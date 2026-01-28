// Aktuelles Jahr einfügen
document.getElementById("current-year").textContent = new Date().getFullYear();

// Formular-Handling
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Kleiner visueller Effekt beim Senden
  const btn = form.querySelector('button');
  btn.textContent = "Gesendet! ✨";
  btn.style.backgroundColor = "#4caf50";
  
  setTimeout(() => {
    alert("Danke! Wir melden uns bald in Rosa zurück.");
    form.reset();
    btn.textContent = "Nachricht senden";
    btn.style.backgroundColor = "";
  }, 1000);
});