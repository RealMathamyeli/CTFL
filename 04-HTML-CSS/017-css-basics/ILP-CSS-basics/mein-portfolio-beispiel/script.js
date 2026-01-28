// ===================================
// DISPLAY CURRENT YEAR / AKTUELLES JAHR ANZEIGEN
// ===================================

// Get the year element / Jahreselement abrufen
const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// ===================================
// CONTACT FORM HANDLING / KONTAKTFORMULAR-VERARBEITUNG
// ===================================

// Get the form element / Formularelement abrufen
const form = document.getElementById("contact-form");

// Add event listener for form submission / Event-Listener für Formularübermittlung hinzufügen
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log("Kontaktformular eingereicht / Form Submitted:", data);
  alert(
    "Vielen Dank für Ihre Nachricht! / Thank you for your message! Check console log.",
  );
  form.reset();
});