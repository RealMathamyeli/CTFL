# Teil 1: DOM & Selektoren

**1. Was ist das DOM?**
Wofür stehen die Buchstaben **DOM** und welche Art von Struktur erstellt der Browser in seinem Speicher, um das HTML-Dokument abzubilden?

**2. Auswahl per ID**
Wenn ein HTML-Element eine eindeutige ID hat (z. B. `<h1 id="main-heading">`), welche JavaScript-Methode ist der schnellste und direkteste Weg, um genau dieses Element auszuwählen?

**3. Auswahl mit CSS-Syntax**
Welche Methode erlaubt es dir, Elemente mit CSS-Selektoren (wie `.klassenname`, `#id` oder `tagname`) auszuwählen, und wie viele Elemente gibt sie zurück, selbst wenn es mehrere Treffer gäbe?

**4. Textinhalt ändern**
Was ist der Unterschied zwischen `.textContent` und `.innerHTML`, wenn du den Inhalt eines Elements ändern möchtest? Welche der beiden Eigenschaften gilt als sicherer?

**5. Attribute ändern**
Wenn du ein Bild-Element in einer Variable gespeichert hast (z. B. `let meinBild = ...`), wie kannst du dessen Bildquelle (`src`) direkt über die Punkt-Notation ändern?

---

# Teil 2: Events & Interaktion

**6. Einen Event Listener hinzufügen**
Wie heißt die Methode, mit der du eine Funktion an ein HTML-Element hängst, damit es auf Interaktionen (wie einen Mausklick) „hört“?

**7. Event-Typen**
Wofür steht der String `'click'` im Code `button.addEventListener('click', showMessage)`?

**8. Event Listener entfernen**
Warum musst du eine **benannte Funktion** (statt einer anonymen Funktion) verwenden, wenn du einen Event Listener später mit `removeEventListener` wieder entfernen möchtest?

**9. Das Event-Objekt**
Wenn ein Ereignis eintritt, erstellt der Browser ein **Event-Objekt**. Was verrät dir die Eigenschaft `event.target` über das Ereignis?

**10. Standardverhalten stoppen**
Wenn du verhindern möchtest, dass ein Link (`<a>`) beim Anklicken auf eine neue Seite navigiert, welche Methode des Event-Objekts musst du aufrufen?
