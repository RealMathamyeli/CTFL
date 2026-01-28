## 1. DOM-Grundlagen: Dein Blick hinter die Kulissen (ca. 50 Minuten)

In dieser Aufgabe tauchst du in das Document Object Model (DOM) ein, das Fundament jeder dynamischen Webseite. Du lernst, wie du auf HTML-Elemente zugreifst und sie nach Belieben manipulierst.

### Deine Mission: Das statische in das dynamische verwandeln

1.  **Vorbereitung:**
    - Erstelle eine neue Ordner für dein Projekt. (z.B. `dom-grundlagen`)
    - Erstelle eine neue HTML-Datei (`index.html`) und eine dazugehörige JavaScript-Datei (`script.js`). Verlinke die `script.js` am Ende des `<body>` in deiner `index.html`.
    - Füge in deine `index.html` verschiedene Elemente ein:
    - Eine `<h1>` Überschrift.
    - Einen `<p>`-Tag mit der `id="beschreibung"`.
    - Mehrere `<div>`-Elemente, die alle die gemeinsame `class="kachel"` haben.
    - Ein `<img>`-Tag mit einem beliebigen `src` und `alt`-Attribut.
    - Ein leeres `<span>`-Element mit der `id="status-anzeige"`.

2.  **Elemente auswählen und verändern:**
    - Nutze `document.getElementById()`, um das `<p>`-Element mit der `id="beschreibung"` auszuwählen. Ändere dessen `textContent` zu einem komplett neuen, spannenden Satz.
    - Wähle die `<h1>` Überschrift mit `document.querySelector()` aus und ändere ihren `innerHTML`, sodass sie zusätzlich zu ihrem Text ein `<strong>`-Element enthält.
    - Verwende `document.querySelectorAll()`, um _alle_ `<div>`-Elemente mit der `class="kachel"` auszuwählen. Iteriere über diese Elemente (z.B. mit einer `for`-Schleife oder `forEach`) und:
      - Ändere ihre Hintergrundfarbe mit `element.style.backgroundColor`.
      - Füge jedem Element eine neue CSS-Klasse (z.B. `aktiviert`) hinzu (`element.classList.add()`).
    - Wähle das `<img>`-Tag aus und ändere seine `src` und `alt`-Attribute, sodass ein neues Bild angezeigt wird. Nutze dafür eine URL für ein beliebiges Online-Bild (z.B. von unsplash.com).
    - Füge dem `<span>`-Element mit der `id="status-anzeige"` ein neues, eigenes `data-`Attribut hinzu (z.B. `data-initial-status="bereit"`).

### Selbstreflexion

Welche neuen Erkenntnisse hast du über die Struktur des DOMs gewonnen? Gab es einen Selektor oder eine Manipulationsmethode, die dir besonders nützlich erschien? Wie zuversichtlich fühlst du dich jetzt, beliebige Elemente auf einer Webseite zu finden und zu verändern?

## 2. Ereignisse und Event-Handling: Deine Webseite zum Leben erwecken (ca. 50 Minuten)

Jetzt geht es darum, deiner Webseite Interaktivität einzuhauchen! Du lernst, wie du auf Benutzeraktionen reagierst und Ereignisse wie Mausklicks verwaltest.

### Deine Mission: Mit dem Benutzer interagieren

1.  **Vorbereitung:**
    - Erweitere deine `index.html` um einen Button mit der `id="klick-mich"` und ein leeres `<div>` mit der `id="meldung"`.
    - Füge einen weiteren Button hinzu, der die `id="toggle-stil"` hat.

2.  **Ereignisse registrieren:**
    - Wähle den Button mit der `id="klick-mich"` aus.
    - Füge ihm einen `click`-Event-Listener hinzu (`addEventListener`).
    - Wenn der Button geklickt wird, soll sich der `textContent` des `<div>` mit der `id="meldung"` ändern und eine Begrüßung anzeigen.
    - Wähle den Button mit der `id="toggle-stil"` aus.
    - Füge auch diesem Button einen `click`-Event-Listener hinzu.
    - Wenn dieser Button geklickt wird, soll er eine bestimmte CSS-Klasse (z.B. `hervorgehoben`) zu dem `<div>` mit der `id="meldung"` hinzufügen oder entfernen (`element.classList.toggle()`). Erstelle diese CSS-Klasse im `<style>`-Tag deiner HTML-Datei, um z.B. die Hintergrundfarbe zu ändern.

3.  **Das Event-Objekt verstehen:**
    - Erweitere eine deiner Event-Listener-Funktionen. Lass dir das `event`-Objekt (`event`) selbst und speziell `event.target` in der Konsole ausgeben (`console.log()`), wenn der Button geklickt wird. Was siehst du?

4.  **Ereignisse entfernen:**
    - Implementiere eine Logik, bei der der Button mit der `id="klick-mich"` nach dem fünften Klick _keine_ weiteren Aktionen mehr ausführt. Tipp: Du brauchst einen Zähler und eine benannte Funktion für deinen Event-Listener, um `removeEventListener()` nutzen zu können.

### Selbstreflexion

Wie hat sich die Interaktion deiner Webseite durch Events verändert? Was ist der Vorteil, Ereignisse dynamisch zu registrieren und auch wieder zu entfernen? Kannst du dir schon vorstellen, welche weiteren Event-Typen nützlich sein könnten, um eine Webseite lebendiger zu gestalten?

## 3. Anwendungsprojekt: Interaktiver Farbwähler (ca. 50 Minuten)

Jetzt ist es an der Zeit, das Gelernte zu kombinieren und eine kleine, funktionierende Webanwendung zu erstellen. Dein Ziel ist ein simpler Farbwähler.

### Deine Mission: Einen Farbwähler bauen

1.  **HTML-Struktur (`index.html`):**
    - Erstelle ein großes `<div>` mit der `id="farb-anzeige"`, das anfangs leer ist und dessen Hintergrundfarbe sich ändern wird. Gib ihm eine Mindesthöhe und -breite über CSS, damit es sichtbar ist.
    - Darunter platziere mehrere `<button>`-Elemente. Jeder Button repräsentiert eine Farbe (z.B. "Rot", "Blau", "Grün", "Gelb").
    - Gib jedem dieser Farb-Buttons ein benutzerdefiniertes `data-`Attribut, z.B. `data-color="red"` für den roten Button, `data-color="blue"` für den blauen Button usw.

2.  **JavaScript-Logik (`script.js`):**
    - Wähle das `<div>` mit der `id="farb-anzeige"` aus.
    - Wähle _alle_ Farb-Buttons aus (z.B. über eine gemeinsame Klasse oder mit `querySelectorAll('button[data-color]')`).
    - Iteriere über diese Buttons und füge jedem einen `click`-Event-Listener hinzu.
    - Innerhalb des Event-Listeners:
      - Greife auf das `data-color`-Attribut des geklickten Buttons zu. (Tipp: `event.target.dataset.color`).
      - Setze die `background-color`-Eigenschaft des `<div>` mit der `id="farb-anzeige"` auf den Wert, den du aus dem `data-color`-Attribut ausgelesen hast.
      - (Optional): Aktualisiere zusätzlich den `textContent` des `<div>` mit der `id="farb-anzeige"`, um den Namen der aktuell gewählten Farbe anzuzeigen.

3.  **Styling (optional, aber empfohlen):**
    - Füge etwas CSS hinzu, um dein Farbwähler-Panel und die Buttons ansprechend zu gestalten.

### Selbstreflexion

Wie hat sich das Zusammenspiel von DOM-Manipulation und Event-Handling in diesem Projekt angefühlt? Welche Herausforderungen gab es bei der Umsetzung, und wie hast du sie gelöst? Welche Ideen hast du, um dieses Projekt zu erweitern oder eine ähnliche interaktive Anwendung zu entwickeln, die auf den heute gelernten Grundlagen aufbaut?
