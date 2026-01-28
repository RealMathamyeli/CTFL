// 2. Elemente auswählen
const profilBild = document.getElementById("profil-bild");
const profilName = document.getElementById("profil-name");
const tarnButton = document.getElementById("tarnung-button");

// 3. Funktion für den Identitätswechsel erstellen
function identitaetWechseln() {
  // Text der Überschrift ändern
  profilName.textContent = "Agent 007";
  
  // Bild-Quelle ändern
  profilBild.src = "https://cdn.pixabay.com/photo/2015/10/31/12/32/james-bond-1015612_1280.jpg";
  
  // Optional: Alt-Text für Barrierefreiheit auch anpassen
  profilBild.alt = "Agent 007 im Anzug";
}

// 4. Event Listener hinzufügen
tarnButton.addEventListener("click", identitaetWechseln);