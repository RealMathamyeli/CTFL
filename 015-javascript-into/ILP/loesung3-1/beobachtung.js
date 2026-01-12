/**
* Diese Zeile Code unten in index.html einfügen zum aktivieren:
<script type="module" src="beobachtung.js"></script>

* Auswertung der Ladestrategien für JavaScript-Dateien
 * Experiment: Normal vs. Async vs. Defer
 */

const scriptComparison = [
  {
    methode: "Normal (<script>)",
    ladeverhalten: "Unterbricht HTML-Parsing sofort",
    ausfuehrung: "Sofort nach Download (blockierend)",
    vorteil: "Garantierte Ausführung vor dem Rendering",
    nachteil: "Erzeugt 'Render-Blocking' -> Weiße Seite",
    idealFuer: "Sehr kritische Scripte (selten)"
  },
  {
    methode: "Async",
    ladeverhalten: "Lädt parallel zum HTML",
    ausfuehrung: "Sofort wenn Download fertig (pausiert HTML)",
    vorteil: "Schnellerer Download, blockiert nicht während Laden",
    nachteil: "Rehenfolge unklar; kann DOM-Parsing unterbrechen",
    idealFuer: "Unabhängige Tools (Analyse, Werbung)"
  },
  {
    methode: "Defer",
    ladeverhalten: "Lädt parallel zum HTML",
    ausfuehrung: "Erst wenn HTML komplett geparst wurde",
    vorteil: "Blockiert nie; Reihenfolge bleibt erhalten",
    nachteil: "Wird erst am Ende ausgeführt",
    idealFuer: "Standard für eigene App-Logik"
  }
];

// Wir packen den Aufruf in einen Timeout, um der Konsole Zeit zum "Atmen" zu geben
setTimeout(() => {
    console.log('%c --- Deine Analyse der Ladestrategien ---', 'color: #28a745; font-weight: bold;');
    console.table(scriptComparison);
}, 200);