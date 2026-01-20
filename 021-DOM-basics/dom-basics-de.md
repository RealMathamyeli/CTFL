# DOM-Grundlagen und Event-Handling

DOM-Grundlagen

- HTML-Elemente mit document.querySelector und document.getElementById auswählen
- Textinhalte und Attribute von DOM-Elementen ändern

Events und Event-Handling

- Event-Listener für Click-Events hinzufügen und entfernen
- Auf Event-Objekte und ihre Eigenschaften zugreifen

Praktisches Projekt

- DOM-Manipulation und Event-Handling in einer kleinen Webanwendung kombinieren
- Funktionalität direkt im Browser testen

# DOM-Grundlagen

<br><br><br>

## Was ist das DOM?

- Stell dir eine Webseite (ein HTML-Dokument) wie einen Stammbaum vor.
- Ganz oben steht der Urahn, das `<html>`-Element.
- Dieses hat zwei direkte Kinder: `<head>` und `<body>`.
- Das `<body>`-Element wiederum hat seine eigenen Kinder, wie etwa eine Überschrift `<h1>`, einen Absatz `<p>` und vielleicht einen Container `<div>`.
- Dieser `<div>` kann dann wieder eigene Kinder haben, und so weiter.

- Das **DOM**, was für **D**ocument **O**bject **M**odel steht, ist genau diese baumartige Struktur deines HTML-Dokuments, die der Browser in seinem Speicher anlegt, wenn er eine Webseite lädt.

- Die zentrale Idee ist: Jeder einzelne Ast und jedes Blatt in diesem Baum—also jedes HTML-Element, jedes Stück Text, jeder Kommentar—wird zu einem **Objekt**.
- Und weil es Objekte sind, können wir sie mit JavaScript ansprechen, auslesen und ändern.
- Das DOM ist die Brücke, die es JavaScript ermöglicht, mit dem Inhalt und der Struktur einer Webseite zu interagieren.
- Du kannst damit
  - Elemente hinzufügen oder entfernen,
  - ihr Aussehen ändern
  - oder auf Benutzerklicks reagieren.
- Du arbeitest nicht direkt mit dem rohen HTML-Text, sondern mit dieser lebendigen, interaktiven Struktur im Speicher des Browsers.

<br><br><br>

## HTML-Elemente auswählen

- Bevor du irgendetwas an einem HTML-Element ändern kannst, musst du JavaScript erst einmal sagen, _welches_ Element du meinst.
- Dafür gibt es mehrere Methoden.

### Auswahl per ID: `document.getElementById()`

- Jedes Element auf einer Webseite kann ein `id`-Attribut haben.
- Diese ID muss auf der gesamten Seite **einzigartig** sein—wie dein persönlicher Fingerabdruck.
- Es darf kein anderes Element mit derselben ID geben.
- Weil die ID so einzigartig ist, ist dies eine sehr schnelle und direkte Art, ein bestimmtes Element zu finden.

**Wie es funktioniert:**

- Du rufst die Methode `getElementById()` auf dem `document`-Objekt auf und übergibst ihr den Namen der ID (als Text, also in Anführungszeichen).

**Beispiel:**

- Angenommen, du hast folgenden HTML-Code:

```html
<h1 id="main-heading">Willkommen auf meiner Webseite!</h1>
```

- Mit JavaScript kannst du dieses Element so in einer Variable speichern:

```javascript
let myHeading = document.getElementById("main-heading");
```

- Die Variable `myHeading` enthält jetzt das komplette `<h1>`-Objekt, und du kannst damit weiterarbeiten.

### Auswahl mit CSS-Selektoren: `document.querySelector()`

- Diese Methode ist moderner und viel flexibler.
- Der große Vorteil: Du kannst genau dieselben Selektoren verwenden, die du bereits aus CSS kennst!
- Das macht sie unglaublich mächtig.

**Wichtiger Hinweis:** `querySelector()` stoppt immer, sobald es das **erste passende Element** gefunden hat, und gibt nur dieses eine Element zurück. Selbst wenn es mehrere Elemente auf der Seite gibt, die zum Selektor passen, bekommst du immer nur das erste.

**Anwendungsbeispiele:**

1.  **Ein Element per ID auswählen** (genau wie bei `getElementById`):
    - HTML: `<p id="intro">Dies ist der erste Absatz.</p>`
    - JavaScript: `let introText = document.querySelector('#intro');`
    - Hier musst du das `#`-Symbol verwenden, genau wie in CSS.

2.  **Ein Element per Klasse auswählen:**
    - HTML: `<p class="note">Bitte beachte die neuen Regeln.</p>`
    - JavaScript: `let importantNote = document.querySelector('.note');`
    - Hier verwendest du den Punkt `.` vor dem Klassennamen. Wenn es mehrere Elemente mit der Klasse "note" gäbe, würde nur das erste gefunden.

3.  **Ein Element per Tag-Name auswählen:**
    - HTML: `<footer>Copyright 2023</footer>`
    - JavaScript: `let footer = document.querySelector('footer');`

<br><br><br>

### DOM-Elemente ändern

Sobald du ein Element erfolgreich ausgewählt und in einer Variable gespeichert hast, kannst du seine Eigenschaften ändern. Die häufigsten Änderungen betreffen den Inhalt (Text) und Attribute (z.B. die Bildquelle eines `<img>`-Tags).

#### Textinhalte ändern

- Um den Text innerhalb eines Elements zu ändern, gibt es hauptsächlich zwei Eigenschaften, die du verwenden kannst: `.textContent` und `.innerHTML`.

**1. Die sichere Variante: `.textContent`**

- Diese Eigenschaft greift nur auf den reinen Textinhalt eines Elements zu.
- Eventuelle HTML-Tags innerhalb des Elements werden ignoriert oder als reiner Text angezeigt.
- Das macht `.textContent` sehr sicher, weil Nutzer keinen schädlichen HTML- oder Skript-Code einschleusen können.

**Beispiel:**

- Nehmen wir unser `<h1>`-Element von vorhin:

```javascript
// 1. Element auswählen
let myHeading = document.getElementById("main-heading");

// 2. Den Textinhalt auslesen und in der Konsole ausgeben
console.log(myHeading.textContent); // Gibt aus: "Willkommen auf meiner Webseite!"

// 3. Den Textinhalt überschreiben
myHeading.textContent = "Hallo Welt! Schön, dass du hier bist.";
```

- Nach diesem Code würde auf der Webseite jetzt "Hallo Welt! Schön, dass du hier bist." stehen statt dem ursprünglichen Text.

**2. Die flexible Variante: `.innerHTML`**

- Mit `.innerHTML` kannst du nicht nur den Text lesen oder setzen, sondern das gesamte HTML-Markup _innerhalb_ eines Elements.
- Der Browser interpretiert den Text, den du hier zuweist, als HTML-Code.

**Beispiel:**
Nehmen wir einen `<div>`-Container:

```html
<div id="info-box">Hier steht alte Info.</div>
```

```javascript
// 1. Element auswählen
let infoBox = document.getElementById("info-box");

// 2. Den Inhalt mit neuem HTML-Code überschreiben
infoBox.innerHTML = "Das ist eine <strong>wichtige</strong> Information!";
```

- Das Ergebnis auf der Webseite ist: "Das ist eine **wichtige** Information!".
- Das Wort "wichtige" ist fett, weil der Browser das `<strong>`-Tag als HTML erkannt hat.
- Hättest du hier `.textContent` verwendet, würde auf der Seite stehen: `Das ist eine <strong>wichtige</strong> Information!`—mit den Tags sichtbar.

Hier ist ein direkter Vergleich:

| Eigenschaft        | Beschreibung                                                                               | Sicherheit                                                                                                                        | Anwendungsfall                                                                                                   |
| :----------------- | :----------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **`.textContent`** | Liest oder setzt nur den reinen Textinhalt. HTML-Tags werden ignoriert/als Text angezeigt. | **Sehr hoch.** Verhindert Cross-Site-Scripting (XSS), da kein HTML interpretiert wird.                                            | Ideal, wenn du nur Text austauschen möchtest, der aus einer sicheren Quelle oder einem Nutzer kommt.             |
| **`.innerHTML`**   | Liest oder setzt das gesamte HTML-Markup innerhalb eines Elements.                         | **Vorsicht!** Wenn du hier Nutzereingaben ohne Bereinigung einfügst, können diese bösartigen Code einschleusen (z.B. `<script>`). | Nützlich, wenn du bewusst HTML-Strukturen dynamisch erstellen und einfügen möchtest (z.B. eine Liste von Items). |

#### Attribute ändern

- Attribute sind die Zusatzinfos, die du im öffnenden Tag eines HTML-Elements angibst, wie `src` bei einem Bild, `href` bei einem Link oder `class` für Styling.
- Auch diese kannst du mit JavaScript leicht ändern.

- Die einfachste Methode ist der direkte Zugriff über "Punkt-Notation", so als wäre das Attribut eine Eigenschaft des Objekts.

**Beispiel 1: Eine Bildquelle ändern**

- Stell dir dieses Bild vor:

```html
<img id="profile-pic" src="images/old-photo.jpg" alt="Ein altes Foto" />
```

- Du kannst die Bildquelle so ersetzen:

```javascript
// 1. Das Bild-Element auswählen
let img = document.getElementById("profile-pic");

// 2. Das src-Attribut direkt über Punkt-Notation ändern
img.src = "images/new-photo.png";

// Du kannst auch andere Attribute ändern
img.alt = "Ein neues, aktuelles Foto";
```

- Sobald die Zeile `img.src = ...` ausgeführt wird, lädt der Browser das neue Bild und zeigt es an.

**Beispiel 2: Ein Link-Ziel ändern**

```html
<a id="my-link" href="https://www.alte-seite.com">Besuche die alte Seite</a>
```

```javascript
// 1. Das Link-Element auswählen
let link = document.getElementById("my-link");

// 2. Das href-Attribut ändern
link.href = "https://www.neue-seite.com";

// 3. Wir können gleichzeitig auch den Text ändern
link.textContent = "Besuche die brandneue Seite!";
```

- Jetzt führt der Link zu einer anderen URL und hat einen neuen Text.

**Allgemeine Methoden: `setAttribute()` und `getAttribute()`**

Manchmal funktioniert die Punkt-Notation nicht für alle Attribute (insbesondere benutzerdefinierte `data-*`-Attribute) oder du möchtest es allgemein halten. Dafür gibt es zwei Methoden, die immer funktionieren:

- `element.getAttribute('attributName')`: Liest den aktuellen Wert eines Attributs aus.
- `element.setAttribute('attributName', 'neuerWert')`: Setzt den Wert eines Attributs oder fügt das Attribut hinzu, falls es noch nicht existiert.

**Beispiel:**

```javascript
let link = document.getElementById("my-link");

// Den aktuellen Wert des href-Attributs auslesen
let currentTarget = link.getAttribute("href");
console.log(currentTarget); // Gibt "https://www.neue-seite.com" aus

// Das title-Attribut setzen (für den Tooltip)
link.setAttribute("title", "Klicke hier für mehr Infos!");
```

# Events und Event-Handling

- Stell dir eine Webseite wie eine Bühne vor.
- Die HTML-Elemente (Buttons, Bilder, Textfelder) sind die Schauspieler auf dieser Bühne.
- Events sind all die Dinge, die passieren können:
  - Ein Zuschauer (der Nutzer) klatscht (klickt einen Button),
  - ein Schauspieler betritt die Bühne (die Maus schwebt über ein Bild),
  - jemand ruft etwas (eine Taste wird gedrückt).

- **Event-Handling** ist die Regieanweisung für deine Schauspieler.
- Du sagst einem bestimmten Schauspieler (z.B. einem Button), was er tun soll, _wenn_ ein bestimmtes Event eintritt.
- Du "hörst" auf ein Event und definierst eine Reaktion darauf.
- Dieser Prozess verwandelt eine Webseite von einem statischen Dokument in eine interaktive Anwendung.
- Ohne Event-Handling wäre jede Webseite wie ein gemaltes Bild—schön anzusehen, aber du kannst nichts damit machen.

<br><br><br>

## Event-Listener hinzufügen und entfernen

- Ein "Event-Listener" ist wie ein kleiner Spion, den du einem HTML-Element zuweist.
- Du gibst ihm die Aufgabe: "Hör gut zu! Sobald du ein 'Klick'-Geräusch auf diesem Element hörst, führe sofort diese Anweisungen aus."

### Einen Event-Listener hinzufügen (`addEventListener`)

- Die gängigste Methode, um auf Events zu horchen, ist `addEventListener()`.
- Die Grundstruktur sieht so aus:

```javascript
htmlElement.addEventListener("event-typ", funktionsName);
```

- Lass uns das aufschlüsseln:

1.  **`htmlElement`**: Das ist das spezifische Element aus deinem HTML, auf das du horchen möchtest. Du musst es zuerst mit JavaScript auswählen, z.B. mit `document.getElementById('myButton')`.
2.  **`'event-typ'`**: Das ist ein String (Text), der beschreibt, auf welches Event du wartest. Bei einem Klick ist es `'click'`. Andere Beispiele wären `'mouseover'` (Maus bewegt sich drüber), `'keydown'` (Taste wird gedrückt) oder `'submit'` (Formular wird abgeschickt).
3.  **`funktionsName`**: Das ist die Funktion, die ausgeführt werden soll, _wenn das Event eintritt_. Diese Funktion wird auch "Callback-Funktion" oder "Event-Handler" genannt. Du kannst den Namen einer bereits existierenden Funktion angeben oder eine anonyme Funktion (eine Funktion ohne Namen) direkt hinschreiben.

**Beispiel:**

- Stell dir vor, du hast diesen HTML-Button:

```html
<button id="myButton">Klick mich!</button>
<p id="message"></p>
```

- Jetzt fügen wir mit JavaScript einen Event-Listener hinzu, der bei einem Klick eine Nachricht ausgibt:

```javascript
// 1. Das HTML-Element auswählen und in einer Variable speichern
const button = document.getElementById("myButton");
const messageParagraph = document.getElementById("message");

// 2. Die Funktion definieren, die bei Klick ausgeführt werden soll
function showMessage() {
  messageParagraph.textContent = "Juhu, du hast den Button geklickt!";
  console.log("Der Button wurde geklickt.");
}

// 3. Den Event-Listener zum Button hinzufügen
// Wir sagen dem Button: "Wenn jemand auf dich 'klickt', führe die Funktion 'showMessage' aus."
button.addEventListener("click", showMessage);
```

### Einen Event-Listener entfernen (`removeEventListener`)

- Manchmal möchtest du, dass ein Element aufhört, auf ein Event zu horchen.
- Zum Beispiel, nachdem es einmal geklickt wurde, oder wenn sich der Zustand deiner Anwendung ändert.
- Dafür gibt es `removeEventListener()`.

**Ganz wichtig:** Du kannst einen Event-Listener nur entfernen, wenn du die Handler-Funktion als benannte Funktion (wie `showMessage` im Beispiel oben) definiert hast und nicht als anonyme Funktion. JavaScript muss wissen, _welche_ Funktion genau entfernt werden soll.

Die Struktur ist fast identisch zum Hinzufügen:

```javascript
htmlElement.removeEventListener("event-typ", funktionsName);
```

**Beispiel:**

Erweitern wir unser vorheriges Beispiel. Wir fügen einen zweiten Button hinzu, der den Event-Listener vom ersten Button entfernt.

```html
<button id="clickMeButton">Klick mich!</button>
<button id="removeListenerButton">Deaktiviere den ersten Button</button>
<p id="message"></p>
```

```javascript
// 1. Die Elemente auswählen
const clickMeButton = document.getElementById("clickMeButton");
const removeListenerButton = document.getElementById("removeListenerButton");
const messageParagraph = document.getElementById("message");

// 2. Die Handler-Funktion mit einem Namen definieren (WICHTIG!)
function showClickMessage() {
  messageParagraph.textContent = "Dieser Button funktioniert noch!";
  // Text nach 2 Sekunden zurücksetzen, damit du den Effekt mehrfach sehen kannst
  setTimeout(() => {
    messageParagraph.textContent = "";
  }, 2000);
}

// 3. Den Event-Listener hinzufügen
clickMeButton.addEventListener("click", showClickMessage);

// 4. Einen zweiten Event-Listener für den "Entfernen"-Button hinzufügen
removeListenerButton.addEventListener("click", function () {
  // Jetzt entfernen wir den Listener vom ersten Button
  clickMeButton.removeEventListener("click", showClickMessage);

  // Rückmeldung für den Nutzer
  messageParagraph.textContent =
    "Der erste Button wurde deaktiviert. Er wird nicht mehr auf Klicks reagieren.";
  console.log("Event-Listener entfernt.");
});
```

- Wenn du jetzt den ersten Button klickst, erscheint die Nachricht.
- Wenn du dann den zweiten Button klickst und danach wieder den ersten, passiert nichts mehr.
- Der Spion wurde abgezogen.

<br><br><br>

## Auf Event-Objekte und ihre Eigenschaften zugreifen

- Wenn ein Event eintritt und dein Event-Listener ausgelöst wird, passiert im Hintergrund etwas Magisches: Der Browser erstellt automatisch ein spezielles Objekt, das vollgepackt ist mit nützlichen Informationen über genau dieses Event. Dieses Objekt nennt man das **Event-Objekt**.

- Der Browser übergibt dieses Objekt automatisch als erstes Argument an deine Handler-Funktion. Du musst es nur entgegennehmen, indem du einen Parameter in deiner Funktion definierst. Üblicherweise heißt dieser Parameter `event` oder kurz `e`.

```javascript
htmlElement.addEventListener("click", function (event) {
  // Hier drin hast du Zugriff auf das 'event'-Objekt
  console.log(event);
});
```

- Dieses `event`-Objekt ist wie ein Werkzeugkasten voller Tools und Informationen.
- Hier sind einige der wichtigsten Eigenschaften und Methoden, die du darin findest:

| Eigenschaft / Methode                 | Beschreibung                                                                                                                                                                                                                                                                                                                                                                            |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`event.target`**                    | Das ist das spezifische Element, das das Event _ausgelöst_ hat. Wenn du einen Click-Listener auf einem `<div>` hast, das einen `<strong>`-Text enthält, und der Nutzer klickt auf den fetten Text, ist `event.target` das `<strong>`-Element.                                                                                                                                           |
| **`event.currentTarget`**             | Das ist das Element, an dem der Event-Listener _angehängt_ wurde. Im obigen Beispiel ist `event.currentTarget` immer das `<div>`-Element, egal wo innerhalb des divs der Nutzer klickt.                                                                                                                                                                                                 |
| **`event.type`**                      | Ein einfacher String, der den Typ des Events angibt, z.B. `'click'` oder `'mouseover'`. Nützlich, wenn dieselbe Funktion auf verschiedene Events horcht.                                                                                                                                                                                                                                |
| **`event.preventDefault()`**          | Das ist eine **Methode** (eine Funktion auf dem Objekt). Sie verhindert das Standardverhalten des Browsers für dieses Event. Ein Klick auf einen Link (`<a>`) navigiert standardmäßig zu einer neuen Seite. Ein Klick auf einen "Submit"-Button in einem Formular schickt standardmäßig das Formular ab und lädt die Seite neu. Mit `event.preventDefault()` kannst du das unterbinden. |
| **`event.stopPropagation()`**         | Ebenfalls eine **Methode**. Sie verhindert, dass das Event "aufsteigt" (bubbling). Wenn du ein Element innerhalb eines anderen Elements anklickst (z.B. einen Button in einem div), feuert das Click-Event zuerst auf dem Button, dann auf dem div, dann auf `<body>`, usw., bis ganz nach oben zu `window`. `event.stopPropagation()` stoppt diese Reise beim aktuellen Element.       |
| **`event.clientX` / `event.clientY`** | Diese Eigenschaften geben dir die X- und Y-Koordinaten des Mauszeigers im sichtbaren Teil des Fensters (dem Viewport) zum Zeitpunkt des Klicks.                                                                                                                                                                                                                                         |

### Praktisches Beispiel für das Event-Objekt

- Schauen wir uns ein Beispiel an, das einige dieser Eigenschaften verwendet.

```html
<a id="myLink" href="https://www.google.com" target="_blank"
  >Gehe zu Google (wird verhindert)</a
>
<div
  id="box"
  style="width: 200px; height: 200px; background-color: lightblue; margin-top: 10px; padding: 20px;">
  Äußere Box
  <button id="innerButton">Innerer Button</button>
</div>
```

```javascript
// Beispiel für preventDefault()
const link = document.getElementById("myLink");

link.addEventListener("click", function (event) {
  // Das Standard-Linkverhalten verhindern (zur Google-Seite navigieren)
  event.preventDefault();

  // Stattdessen eine Nachricht in der Konsole ausgeben
  console.log("Link-Klick wurde abgefangen!");
  console.log("Das Ziel-Element war:", event.target);
  alert("Das Öffnen von Google wurde durch preventDefault() verhindert!");
});

// Beispiel für target, currentTarget und stopPropagation()
const box = document.getElementById("box");
const innerButton = document.getElementById("innerButton");

// Listener auf der äußeren Box
box.addEventListener("click", function (event) {
  console.log("--- Klick auf die Box ---");
  console.log("event.target:", event.target); // Das Element, das ursprünglich den Klick erhalten hat
  console.log("event.currentTarget:", event.currentTarget); // Immer die Box, da dort der Listener angehängt ist
  alert("Klick auf die ÄUẞERE Box!");
});

// Listener auf dem inneren Button
innerButton.addEventListener("click", function (event) {
  // Verhindern, dass das Event zur Box aufsteigt
  // Probiere es aus, indem du diese Zeile auskommentierst!
  event.stopPropagation();

  console.log("--- Klick auf den inneren Button ---");
  console.log("event.target:", event.target); // Ist der Button selbst
  console.log("event.currentTarget:", event.currentTarget); // Ebenfalls der Button selbst
  alert("Klick auf den INNEREN Button! Die Box wird nichts davon erfahren.");
});
```

- Wenn du diesen Code ausführst, wirst du sehen:

1.  Ein Klick auf den Link öffnet _nicht_ Google, sondern zeigt eine `alert`-Box an. `event.preventDefault()` hat funktioniert.
2.  Ein Klick auf den inneren Button zeigt nur die `alert` für den Button an. Das Click-Event wird gestoppt, bevor es die äußere Box erreicht, dank `event.stopPropagation()`. Wenn du diese Zeile auskommentierst und erneut klickst, siehst du die "Button"-Nachricht und danach die "Box"-Nachricht.
3.  Die Konsolen-Ausgaben zeigen dir genau den Unterschied zwischen `target` (wer hat den Stein ins Wasser geworfen?) und `currentTarget` (wer hat das Platschen gehört, weil er den Listener angehängt hatte?).
