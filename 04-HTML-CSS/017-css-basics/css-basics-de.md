# CSS-Grundlagen und Syntax

- Grundstruktur einer CSS-Regel: Selektor, Eigenschaft, Wert
- Einbinden externer und interner Stylesheets

Wichtige CSS-Selektoren und Farben

- Anwendung verschiedener Selektortypen: Klassen-, ID-, Attributselektoren
- Definieren und Nutzen von Farbwerten: Hex, RGB, HSL

Schriften und Textgestaltung

- Einbinden und Anpassen von Webfonts
- Formatierung: Schriftgröße, -stil, -gewicht, Zeilenhöhe

Layout mit Box-Modell und Flexbox

- Verständnis des Box-Modells: Margin, Border, Padding, Content
- Erstellen flexibler Layouts mit Flexbox: Hauptachse, Ausrichtung, Reihenfolge

Praktische Anwendung

- Aufbau einer einfachen, gestylten Beispiel-Webseite unter Nutzung der Inhalte
- Troubleshooting: Häufige Fehlerquellen bei der CSS-Gestaltung<br><br><br>

# 🎨 CSS-Grundlagen und Syntax

- Stell dir vor, deine Webseite ist ein Haus.
- HTML ist das Fundament, die Wände und das Dach – die reine Struktur.
- CSS (Cascading Style Sheets) ist dann alles, was das Haus schön und bewohnbar macht: die Wandfarbe, die Möbel, die Vorhänge, die Dekoration.
- CSS ist also die Sprache, mit der du das Aussehen und das Design deiner Webseite festlegst.

<br><br><br>

## 🧱 Grundstruktur einer CSS-Regel

Jede Anweisung, die du in CSS schreibst, folgt einem ganz bestimmten Muster, einer sogenannten "Regel". Eine Regel ist wie ein Befehl an den Browser, zum Beispiel: "Hey Browser, mache bitte alle Absätze blau!". So eine Regel besteht immer aus den gleichen Bausteinen.

Schauen wir uns eine einfache Regel an:

```css
p {
  color: blue;
  font-size: 16px;
}
```

Diese Regel besteht aus drei Hauptteilen: dem Selektor (`p`), und einem Deklarationsblock (alles in den `{ }`), der wiederum aus Eigenschaften (`color`, `font-size`) und den zugehörigen Werten (`blue`, `16px`) besteht.

Lass uns das mal in einer Tabelle auseinandernehmen:

| Bestandteil           | Beispiel       | Erklärung                                                                                        |
| :-------------------- | :------------- | :----------------------------------------------------------------------------------------------- |
| **Selektor**          | `p`            | Wählt das HTML-Element aus, das gestaltet werden soll. In diesem Fall alle `<p>`-Tags (Absätze). |
| **Deklarationsblock** | `{ ... }`      | Die geschweiften Klammern umschließen alle Stil-Anweisungen für den ausgewählten Selektor.       |
| **Deklaration**       | `color: blue;` | Eine einzelne Stil-Anweisung. Sie besteht immer aus einer Eigenschaft und einem Wert.            |
| **Eigenschaft**       | `color`        | Das Merkmal, das du ändern möchtest (z.B. Textfarbe, Schriftgröße, Hintergrund).                 |
| **Wert**              | `blue`         | Die genaue Angabe, wie die Eigenschaft aussehen soll.                                            |
| **Trennzeichen**      | `:` und `;`    | Der Doppelpunkt trennt Eigenschaft und Wert. Das Semikolon schließt eine Deklaration ab.         |

Jetzt gehen wir die wichtigsten Teile nochmal im Detail durch.

### 🎯 Der Selektor (Selector)

Der Selektor ist der erste und einer der wichtigsten Teile einer CSS-Regel. Er beantwortet die Frage: **"Wen oder was möchte ich gestalten?"**

Stell es dir wie eine Adresse auf einem Brief vor. Du musst genau sagen, wer den Brief (also die Stil-Anweisung) bekommen soll. In CSS kannst du verschiedene Arten von Selektoren verwenden, um Elemente auszuwählen:

- **Element-Selektor:** Du sprichst ein HTML-Tag direkt mit seinem Namen an.
  - `h1` wählt alle `<h1>`-Überschriften aus.
  - `p` wählt alle `<p>`-Absätze aus.
  - `img` wählt alle `<img>`-Bilder aus.
- **Klassen-Selektor:** Du vergibst im HTML einem oder mehreren Elementen eine "Klasse" (z.B. `class="wichtig"`). In CSS sprichst du diese Klasse mit einem Punkt davor an.
  - `.wichtig` wählt _alle_ Elemente aus, die das Attribut `class="wichtig"` haben.
- **ID-Selektor:** Du vergibst im HTML einem _einzigen, einzigartigen_ Element eine ID (z.B. `id="hauptlogo"`). In CSS sprichst du diese ID mit einer Raute (`#`) davor an.
  - `#hauptlogo` wählt das _eine_ Element aus, das das Attribut `id="hauptlogo"` hat.

Der Selektor ist also das Ziel deiner Gestaltungsanweisung.

### 🔧 Die Eigenschaft (Property)

Die Eigenschaft beantwortet die Frage: **"Welches Merkmal des ausgewählten Elements möchte ich ändern?"**

Nachdem du mit dem Selektor dein Ziel anvisiert hast, sagst du mit der Eigenschaft, was genau du an diesem Ziel verändern willst. CSS bietet dir hier einen riesigen Werkzeugkasten mit Hunderten von Eigenschaften.

Ein paar grundlegende Beispiele sind:

- `color`: Ändert die Farbe des Textes.
- `background-color`: Ändert die Farbe des Hintergrunds.
- `font-size`: Ändert die Größe der Schrift.
- `font-family`: Ändert die Schriftart (z.B. Arial, Times New Roman).
- `border`: Fügt einen Rahmen um das Element hinzu.
- `width`: Legt die Breite des Elements fest.
- `margin`: Legt den äußeren Abstand zu anderen Elementen fest.

Du schreibst die Eigenschaft immer gefolgt von einem Doppelpunkt (`:`).

### 🎨 Der Wert (Value)

Der Wert beantwortet die letzte Frage: **"Wie genau soll die Eigenschaft aussehen?"**

Der Wert ist die konkrete Einstellung, die du der Eigenschaft zuweist. Jeder Eigenschaft können unterschiedliche Arten von Werten zugewiesen werden.

Schauen wir uns das an den Beispielen von eben an:

- Für die Eigenschaft `color` könnte der Wert ein Farbname sein (`red`, `green`, `blue`) oder ein Hex-Code (`#FF5733`).
- Für die Eigenschaft `font-size` könnte der Wert eine Pixelangabe sein (`18px`) oder eine relative Einheit wie `em` (`1.2em`).
- Für die Eigenschaft `font-family` ist der Wert der Name einer Schriftart (`"Helvetica"`).
- Für die Eigenschaft `border` ist der Wert komplexer und besteht oft aus drei Teilen: Dicke, Stil und Farbe (`1px solid black`).

Jede Deklaration (also das Paar aus Eigenschaft und Wert) wird mit einem Semikolon (`;`) abgeschlossen. Das ist sehr wichtig, denn es sagt dem Browser: "Diese Anweisung ist hier zu Ende, jetzt kommt die nächste."

<br><br><br>

## 🔗 Einbinden von Stylesheets

Super, jetzt weißt du, wie eine CSS-Regel aufgebaut ist. Aber wie kommt diese Regel nun zu deiner HTML-Datei, damit der Browser sie auch anwenden kann? HTML (die Struktur) und CSS (das Design) sind getrennte Sprachen. Du musst sie miteinander verbinden. Dafür gibt es hauptsächlich zwei Methoden.

### 📁 Externes Stylesheet (External Stylesheet)

Dies ist die gängigste und empfohlene Methode.

**Die Idee:** Du schreibst deinen gesamten CSS-Code in eine separate Datei mit der Endung `.css` (z.B. `style.css`). Diese Datei verknüpfst du dann mit deiner HTML-Datei (oder auch mit mehreren HTML-Dateien).

**So geht's:**

1.  Erstelle eine neue Datei und speichere sie z.B. als `style.css` im selben Ordner wie deine HTML-Datei.
2.  Schreibe deine CSS-Regeln in diese `style.css`-Datei.
3.  Öffne deine HTML-Datei und füge im `<head>`-Bereich die folgende Zeile ein:

```html
<head>
  <meta charset="UTF-8" />
  <title>Meine Webseite</title>
  <link rel="stylesheet" href="style.css" />
</head>
```

**Was bedeutet dieser `<link>`-Tag?**

- `rel="stylesheet"`: `rel` steht für "relationship" (Beziehung). Du sagst dem Browser damit: "Die Datei, die ich hier verlinke, ist ein Stylesheet."
- `href="style.css"`: `href` steht für "hypertext reference". Hier gibst du den Pfad zu deiner CSS-Datei an. Wenn sie im selben Ordner liegt, reicht der Dateiname.

**Vorteile dieser Methode:**

- **Saubere Trennung:** Dein HTML-Code bleibt übersichtlich und enthält nur die Inhaltsstruktur. Dein Design-Code ist ordentlich in einer eigenen Datei.
- **Wartbarkeit:** Wenn du das Design deiner gesamten Webseite ändern willst (z.B. eine andere Schriftart), musst du nur diese eine `.css`-Datei anpassen, und die Änderungen gelten für alle HTML-Seiten, die damit verknüpft sind.
- **Ladezeiten:** Browser können die CSS-Datei zwischenspeichern (cachen). Wenn ein Besucher eine andere Seite deiner Webseite aufruft, muss die `style.css`-Datei nicht erneut heruntergeladen werden, was die Seite schneller macht.

### 📄 Internes Stylesheet (Internal Stylesheet)

Diese Methode wird seltener verwendet, kann aber in bestimmten Fällen nützlich sein.

**Die Idee:** Du schreibst deine CSS-Regeln direkt in den `<head>`-Bereich deiner HTML-Datei, umschlossen von einem `<style>`-Tag.

**So geht's:**
Füge den folgenden Block in den `<head>`-Bereich deiner HTML-Datei ein:

```html
<head>
  <meta charset="UTF-8" />
  <title>Meine einzelne Seite</title>
  <style>
    body {
      background-color: lightblue;
    }
    h1 {
      color: navy;
    }
  </style>
</head>
```

Die CSS-Regeln innerhalb des `<style>`-Tags gelten **nur für diese eine HTML-Datei**.

**Wann verwendet man das?**

- Wenn du eine einzelne, unabhängige HTML-Seite hast (z.B. eine spezielle Landing-Page), für die sich eine extra CSS-Datei nicht lohnt.
- Wenn du Stile hast, die absolut _nur_ für diese eine Seite gelten und nirgendwo anders wiederverwendet werden sollen.

Für die meisten Projekte, vor allem wenn sie mehr als eine Seite haben, ist das **externe Stylesheet** jedoch die klar bessere Wahl.# 🎨 Wichtige CSS-Selektoren und Farben

<br><br><br>

## 🎯 Die verschiedenen Arten von Selektoren

Stell dir vor, deine HTML-Seite ist ein Raum voller Möbel. CSS ist dein Werkzeugkasten, um diese Möbel zu gestalten (Farbe ändern, Größe anpassen etc.). Die **Selektoren** sind dabei deine Anweisungen, _welches_ Möbelstück du genau bearbeiten möchtest. Du kannst sagen: "Gestalte alle Stühle" (Element-Selektor), "Gestalte nur die Möbel mit dem roten Etikett" (Klassen-Selektor) oder "Gestalte das eine, einzigartige Sofa mit der Seriennummer 123" (ID-Selektor).

Schauen wir uns die wichtigsten Typen im Detail an.

<br><br><br>

### 🏷️ Der Klassen-Selektor (`.klassenname`)

Eine **Klasse** ist wie ein Etikett oder ein Aufkleber, den du an so viele HTML-Elemente kleben kannst, wie du möchtest. Alle Elemente, die dasselbe "Etikett" (also denselben Klassennamen) haben, können dann mit einer einzigen CSS-Regel gleichzeitig gestaltet werden. Das ist extrem nützlich, um wiederkehrende Stile zu definieren.

**Wie funktioniert es?**

1.  **Im HTML:** Du fügst einem oder mehreren Elementen das `class`-Attribut hinzu. Zum Beispiel: `<p class="warnung">`.
2.  **Im CSS:** Du sprichst diese Klasse mit einem Punkt (`.`) gefolgt vom Klassennamen an. Zum Beispiel: `.warnung { ... }`.

**Beispiel:**
Angenommen, du möchtest alle wichtigen Hinweise auf deiner Seite rot und fett darstellen.

**HTML-Code:**

```html
<h2>Ein normaler Titel</h2>
<p class="warnung">Achtung: Dies ist eine wichtige Information!</p>
<div>
  <p>Dies ist ein normaler Textabschnitt.</p>
  <span class="warnung">Bitte beachte auch diesen Hinweis.</span>
</div>
```

**CSS-Code:**

```css
.warnung {
  color: red;
  font-weight: bold;
}
```

**Ergebnis:**
Sowohl der `<p>`-Absatz als auch das `<span>`-Element mit der Klasse `warnung` werden in roter, fetter Schrift angezeigt. Der `<h2>`-Titel und der normale `<p>`-Absatz bleiben unverändert, weil sie dieses "Etikett" nicht haben.

<br><br><br>

### 🆔 Der ID-Selektor (`#idname`)

Eine **ID** ist im Gegensatz zur Klasse wie eine einzigartige Personalausweisnummer. Jede ID darf auf einer gesamten HTML-Seite **nur ein einziges Mal** vergeben werden. Sie ist absolut einmalig. Man verwendet IDs, um ein ganz bestimmtes, einzigartiges Element anzusprechen, zum Beispiel den Hauptnavigationsbereich, die Fußzeile oder ein spezielles Kontaktformular.

**Wie funktioniert es?**

1.  **Im HTML:** Du fügst einem _einzigen_ Element das `id`-Attribut hinzu. Zum Beispiel: `<header id="seitenkopf">`.
2.  **Im CSS:** Du sprichst diese ID mit einer Raute (`#`) gefolgt vom ID-Namen an. Zum Beispiel: `#seitenkopf { ... }`.

**Beispiel:**
Du möchtest dem Hauptinhaltsbereich deiner Webseite einen speziellen Rahmen und etwas Innenabstand geben.

**HTML-Code:**

```html
<header id="seitenkopf">
  <h1>Meine Webseite</h1>
</header>

<main id="hauptinhalt">
  <p>Hier steht der gesamte wichtige Inhalt der Seite.</p>
</main>

<footer>
  <p>Copyright 2023</p>
</footer>
```

**CSS-Code:**

```css
#hauptinhalt {
  border: 2px solid #cccccc;
  padding: 20px;
  background-color: #f9f9f9;
}
```

**Ergebnis:**
Nur das `<main>`-Element mit der ID `hauptinhalt` erhält den grauen Rahmen, den Innenabstand und den hellgrauen Hintergrund. Der Header und der Footer bleiben davon unberührt.

<br><br><br>

### 📝 Der Attribut-Selektor (`[attribut=wert]`)

Mit diesem Selektor wirst du zum Detektiv. Du kannst Elemente nicht nur anhand ihres Namens, ihrer Klasse oder ID finden, sondern auch anhand ihrer **Attribute** und deren Werte. Ein Attribut ist eine zusätzliche Information innerhalb eines HTML-Tags, wie z.B. `href` bei einem Link oder `type` bei einem Eingabefeld.

**Wie funktioniert es?**

1.  **Im HTML:** Die Elemente haben bereits verschiedene Attribute.
2.  **Im CSS:** Du verwendest eckige Klammern `[]`, um nach Attributen zu suchen.

Es gibt verschiedene Varianten:

- `[attribut]` - Wählt alle Elemente aus, die dieses Attribut haben, egal welchen Wert.
- `[attribut="wert"]` - Wählt alle Elemente aus, bei denen das Attribut genau diesen Wert hat.
- `[attribut^="wert"]` - Wählt Elemente, deren Attributwert mit "wert" _beginnt_.
- `[attribut$="wert"]` - Wählt Elemente, deren Attributwert mit "wert" _endet_.

**Beispiel:**
Du möchtest alle Links, die in einem neuen Tab geöffnet werden (`target="_blank"`), mit einem kleinen Symbol kennzeichnen, um den Nutzer darauf hinzuweisen.

**HTML-Code:**

```html
<a href="interne-seite.html">Interner Link</a>
<br />
<a href="https://www.google.com" target="_blank">Google in neuem Tab öffnen</a>
<br />
<a href="https://www.wikipedia.org" target="_blank"
  >Wikipedia in neuem Tab öffnen</a
>
```

**CSS-Code:**

```css
/* Wähle ALLE a-Tags aus, die ein target="_blank" Attribut haben */
a[target="_blank"] {
  /* Füge ein kleines Symbol nach dem Linktext hinzu */
  padding-right: 20px;
  background-image: url("icon-external-link.svg");
  background-repeat: no-repeat;
  background-position: center right;
}
```

**Ergebnis:**
Nur die Links zu Google und Wikipedia, die das Attribut `target="_blank"` besitzen, bekommen das kleine Symbol. Der interne Link bleibt unverändert.

| Selektor-Typ | CSS-Syntax          | Anwendung                                                                        | Einzigartigkeit                                     |
| :----------- | :------------------ | :------------------------------------------------------------------------------- | :-------------------------------------------------- |
| **Klasse**   | `.klassenname`      | Für die Gestaltung von **Gruppen** von Elementen.                                | Kann beliebig oft auf einer Seite verwendet werden. |
| **ID**       | `#idname`           | Für die Gestaltung eines **einzelnen, einzigartigen** Elements.                  | Darf pro Seite nur **ein einziges Mal** vorkommen.  |
| **Attribut** | `[attribut="wert"]` | Für die Gestaltung von Elementen basierend auf ihren HTML-Attributen und Werten. | Hängt vom Attribut und dessen Wert ab.              |

<br><br><br>

## 🌈 Farben in CSS definieren und nutzen

Farben sind das Herzstück des Designs. Damit der Computer genau weiß, welche Farbe du meinst, gibt es verschiedene "Sprachen" oder Formate, um Farben zu beschreiben. Die drei gängigsten sind HEX, RGB und HSL.

<br><br><br>

### 🔢 HEX (Hexadezimalfarbwerte)

Dies ist wahrscheinlich das am weitesten verbreitete Format im Web. Ein HEX-Wert ist eine sechsstellige Kombination aus Zahlen (0-9) und Buchstaben (A-F), der eine Raute (`#`) vorangestellt wird.

**Wie funktioniert es?**
Der Code ist in drei Zweier-Paare aufgeteilt: `#RRGGBB`.

- `RR`: Steht für den Rot-Anteil.
- `GG`: Steht für den Grün-Anteil.
- `BB`: Steht für den Blau-Anteil.

Jedes Paar kann einen Wert von `00` (gar kein Anteil dieser Farbe) bis `FF` (maximaler Anteil dieser Farbe) annehmen.

- `#FF0000` ist reines Rot (maximal Rot, kein Grün, kein Blau).
- `#000000` ist Schwarz (keine Farbe).
- `#FFFFFF` ist Weiß (alle Farben maximal).
- `#33CC99` ist ein Türkis-Ton.

**Kurzschreibweise:** Wenn alle drei Paare aus identischen Zeichen bestehen, kannst du es abkürzen. Z.B. statt `#FF00CC` kann man `#F0C` schreiben. Statt `#666666` schreibt man `#666`.

**CSS-Beispiel:**

```css
body {
  background-color: #f2f2f2; /* Ein sehr helles Grau */
}

h1 {
  color: #3a5fcd; /* Ein schöner Blauton */
}

p {
  color: #333; /* Ein dunkles Grau (kurz für #333333) */
}
```

<br><br><br>

### 🔴🟢🔵 RGB und RGBA (Rot, Grün, Blau, Alpha)

Dieses Format ist oft leichter zu lesen, weil es auf dem Dezimalsystem basiert, das wir gewohnt sind. Es mischt ebenfalls Rot, Grün und Blau.

**Wie funktioniert es?**
Du verwendest die `rgb()`-Funktion und übergibst drei Werte, jeweils von `0` (kein Anteil) bis `255` (maximaler Anteil).

`rgb(Rot, Grün, Blau)`

- `rgb(255, 0, 0)` ist reines Rot.
- `rgb(0, 0, 0)` ist Schwarz.
- `rgb(255, 255, 255)` ist Weiß.

**RGBA für Transparenz:**
Die Erweiterung **RGBA** fügt einen vierten Wert hinzu: den **Alpha-Kanal**. Dieser bestimmt die Deckkraft (Transparenz) der Farbe.

- Der Alpha-Wert geht von `0.0` (komplett durchsichtig) bis `1.0` (komplett deckend).
- Ein Wert von `0.5` bedeutet 50% Deckkraft.

`rgba(Rot, Grün, Blau, Alpha)`

Dies ist extrem nützlich für Effekte wie halbtransparente Hintergründe, bei denen der Inhalt dahinter noch durchscheinen soll.

**CSS-Beispiel:**

```css
.infobox {
  /* Ein deckender, blauer Hintergrund */
  background-color: rgb(58, 95, 205);
  color: white;
}

.overlay {
  /* Ein halbtransparenter schwarzer Hintergrund */
  background-color: rgba(0, 0, 0, 0.7);
}
```

<br><br><br>

### ☀️ HSL und HSLA (Farbton, Sättigung, Helligkeit, Alpha)

HSL ist das intuitivste Format, besonders wenn du Farben gezielt anpassen möchtest. Es beschreibt eine Farbe nicht durch Mischen, sondern durch ihre Eigenschaften, wie es ein Mensch tun würde.

**Wie funktioniert es?**
Du verwendest die `hsl()`-Funktion mit drei Werten:

1.  **Hue (Farbton):** Dies ist die eigentliche Farbe auf einem Farbkreis von 0 bis 360 Grad.
    - `0` oder `360` ist Rot.
    - `120` ist Grün.
    - `240` ist Blau.
2.  **Saturation (Sättigung):** Dies ist die Intensität oder "Buntheit" der Farbe, angegeben in Prozent (`%`).
    - `0%` ist ein Grauton.
    - `100%` ist die reinste, leuchtendste Form der Farbe.
3.  **Lightness (Helligkeit):** Dies gibt an, wie hell oder dunkel die Farbe ist, ebenfalls in Prozent (`%`).
    - `0%` ist immer Schwarz.
    - `50%` ist die "normale" Farbe.
    - `100%` ist immer Weiß.

**HSLA für Transparenz:**
Genau wie bei RGBA gibt es **HSLA**, das einen vierten Alpha-Wert für die Deckkraft (`0.0` bis `1.0`) hinzufügt.

Der große Vorteil von HSL: Wenn du eine Farbe hast und eine hellere oder dunklere Variante davon brauchst, änderst du einfach nur den Helligkeitswert!

**CSS-Beispiel:**

```css
/* Primärfarbe der Marke ist ein sattes Blau */
.button-primary {
  background-color: hsl(225, 73%, 57%);
}

/* Wenn man mit der Maus darüber fährt, wird der Button heller */
.button-primary:hover {
  background-color: hsl(
    225,
    73%,
    67%
  ); /* Nur Helligkeit von 57% auf 67% erhöht! */
}

.transparent-box {
  background-color: hsla(0, 100%, 50%, 0.3); /* Ein 30% durchsichtiges Rot */
}
```

| Farbformat | Syntax-Beispiel      | Stärken                                                                                  | Typischer Anwendungsfall                                                   |
| :--------- | :------------------- | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | --------------------------------- |
| **HEX**    | `#3A5FCD`            | Kompakt, sehr weit verbreitet in Designtools.                                            | Definieren von soliden, deckenden Farben im Stylesheet.                    |
| **RGB(A)** | `rgb(58, 95, 205)`   | Leicht verständlich (0-255), RGBA ist super für Transparenz.                             | Hintergründe, Overlays, überall wo Deckkraft wichtig ist.                  |
| **HSL(A)** | `hsl(225, 73%, 57%)` | Sehr intuitiv für Menschen, Farben gezielt anpassen (aufhellen, abdunkeln, entsättigen). | Erstellen von Farbpaletten, Hover-Effekten und dynamischen Farbänderungen. | # 🖋️ Schriften und Textgestaltung |

Stell dir eine Webseite wie ein Buch oder eine Zeitschrift vor. Der Inhalt ist wichtig, aber wie er präsentiert wird, entscheidet darüber, ob die Leute ihn lesen wollen. Die Wahl der Schriftart, ihre Größe und Anordnung sind das A und O für Lesbarkeit und Design. In diesem Kapitel schauen wir uns an, wie du die Typografie deiner Webseite meisterst.

<br><br><br>

## 🌐 Einbinden und Anpassen von Webfonts

Früher war man auf eine Handvoll Schriften beschränkt, die auf den meisten Computern vorinstalliert waren (sogenannte "websichere" Schriften wie Arial, Times New Roman oder Verdana). Das war ziemlich langweilig. Webfonts haben das revolutioniert!

### 🧐 Was sind Webfonts und warum sind sie so wichtig?

Ein Webfont ist eine Schriftart, die nicht auf dem Computer des Besuchers installiert sein muss. Stattdessen wird sie, genau wie Bilder oder andere Inhalte, direkt vom Server heruntergeladen, wenn die Webseite aufgerufen wird.

**Der entscheidende Vorteil:** Du kannst fast jede erdenkliche Schriftart für dein Design verwenden und sicher sein, dass **jeder Besucher die Webseite genau so sieht, wie du sie gestaltet hast.** Das eröffnet unendliche kreative Möglichkeiten und sorgt für ein konsistentes Markenerlebnis.

Der beliebteste und einfachste Weg, Webfonts zu nutzen, sind Dienste wie **Google Fonts**. Sie bieten eine riesige Bibliothek an kostenlosen Schriftarten, die sehr einfach in eine Webseite integriert werden können.

### 🛠️ Wie bindet man Webfonts ein? (Am Beispiel von Google Fonts)

Lass uns das Schritt für Schritt durchgehen. Angenommen, wir wollen die beliebte Schriftart "Roboto" verwenden.

**Schritt 1: Schriftart auf Google Fonts auswählen**
Du gehst auf [fonts.google.com](https://fonts.google.com), suchst nach "Roboto" und klickst darauf.

**Schritt 2: "Get Font" auswählen**
Auf der Seite der Schriftart findest du einen Button "Get Font". Klicke darauf (oben rechts), um die Einbindungsoptionen zu sehen. Eine Seitenleiste erscheint mit den Einbettungsoptionen (wähle "Get Embed Code").

**Schritt 3: Den Code in deine Webseite einfügen**
Google Fonts bietet dir zwei Hauptmethoden, um die Schriftart einzubinden: `<link>` und `@import`.

#### Methode 1: Die `<link>`-Methode (Empfohlen)

Diese Methode ist die beste, weil sie schneller und performanter ist. Der Code wird in den `<head>`-Bereich deiner HTML-Datei kopiert.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Meine Webseite</title>

    <!-- Google Fonts Einbindung -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet" />

    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Dein Inhalt -->
  </body>
</html>
```

- `preconnect`: Diese Zeilen bauen frühzeitig eine Verbindung zu den Google-Servern auf, was das Laden der Schrift beschleunigt.
- `href`: Dies ist der eigentliche Link zur CSS-Datei, die die Schriftart für den Browser verfügbar macht.

#### Methode 2: Die `@import`-Methode

Diese Methode ist einfacher, da du nur eine Zeile Code benötigst. Diese Zeile fügst du **ganz an den Anfang** deiner CSS-Datei ein.

```css
/* style.css */

/* Google Fonts Einbindung GANZ OBEN in der Datei */
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap");

/* Dein restlicher CSS-Code */
body {
  /* ... */
}
```

**Nachteil:** Diese Methode kann das Laden der Webseite leicht blockieren, weshalb die `<link>`-Methode in der Regel bevorzugt wird.

### 🎨 Anwenden der Webfonts im CSS

Nachdem die Schriftart eingebunden ist, musst du dem Browser noch sagen, wo er sie verwenden soll. Das geschieht mit der CSS-Eigenschaft `font-family`.

Es ist eine gute Praxis, immer eine "Fallback"-Schrift anzugeben. Falls Google Fonts aus irgendeinem Grund nicht erreichbar ist, springt der Browser auf die nächste Schrift in der Liste. Ganz am Ende steht eine generische Familie (`sans-serif` oder `serif`).

```css
/* style.css */

body {
  /*
    Hier weisen wir 'Roboto' dem gesamten body zu.
    Falls Roboto nicht lädt, versucht der Browser Arial.
    Falls Arial auch nicht da ist, nimmt er irgendeine verfügbare serifenlose Schrift.
  */
  font-family: "Roboto", Arial, sans-serif;
}

h1 {
  /* Überschriften können eine andere Schriftfamilie haben */
  font-family: "Georgia", serif;
}
```

<br><br><br>

## ✍️ Formatierung: Schriftgröße, -stil, -gewicht, Zeilenhöhe

Nachdem wir die richtige Schriftart haben, geht es ans Feintuning. Diese vier CSS-Eigenschaften sind das grundlegende Handwerkszeug für jeden Webdesigner.

### 📏 `font-size`: Die Schriftgröße

Diese Eigenschaft steuert, wie groß der Text dargestellt wird. Es gibt verschiedene Einheiten, um die Größe festzulegen. Die Wahl der richtigen Einheit ist entscheidend für flexible und zugängliche Webseiten.

| Einheit                   | Beschreibung                                                                                               | Beispiel             | Vor- und Nachteile                                                                                                                                                                    |
| :------------------------ | :--------------------------------------------------------------------------------------------------------- | :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`px`** (Pixel)          | **Absolute Einheit.** Ein Pixel ist ein fester Punkt auf dem Bildschirm. Die Größe ändert sich nicht.      | `font-size: 16px;`   | **+** Einfach zu verstehen, pixelgenaue Kontrolle. <br> **-** Skaliert nicht mit den Benutzereinstellungen im Browser (schlecht für Barrierefreiheit).                                |
| **`em`**                  | **Relative Einheit.** 1em entspricht der Schriftgröße des **direkten Elternelements**.                     | `font-size: 1.2em;`  | **+** Skaliert gut innerhalb von Komponenten. <br> **-** Kann unübersichtlich werden, da sich `em`-Werte verschachteln und multiplizieren (1.2em von 1.2em von 16px...).              |
| **`rem`** (Root em)       | **Relative Einheit.** 1rem entspricht **immer** der Schriftgröße des **Wurzelelements** (`<html>`).        | `font-size: 1.2rem;` | **+** **Beste Wahl für allgemeine Skalierbarkeit!** Vermeidet das Verschachtelungsproblem von `em`. Passt sich an die globalen Benutzereinstellungen an. Sehr vorhersehbar.           |
| **`%`** (Prozent)         | **Relative Einheit.** Funktioniert ähnlich wie `em`, bezieht sich auf die Schriftgröße des Elternelements. | `font-size: 120%;`   | **+** Intuitiv verständlich. <br> **-** Hat die gleichen Verschachtelungsprobleme wie `em`.                                                                                           |
| **`vw`** (Viewport Width) | **Relative Einheit.** Bezieht sich auf die Breite des Browserfensters. `1vw` ist 1% der Fensterbreite.     | `font-size: 5vw;`    | **+** Perfekt für riesige, responsive Überschriften, die mit dem Fenster mitskalieren. <br> **-** Kann auf sehr kleinen oder sehr großen Bildschirmen zu extremen Ergebnissen führen. |

**Praxis-Tipp:** Setze eine Basis-Schriftgröße in `rem` für das `<html>`-Element und definiere alle anderen Schriftgrößen ebenfalls in `rem`. Das macht deine Seite flexibel und barrierefrei.

```css
html {
  font-size: 16px; /* Die Basis, 1rem = 16px */
}

body {
  font-size: 1rem; /* Entspricht 16px */
}

h1 {
  font-size: 2.5rem; /* Entspricht 2.5 * 16px = 40px */
}

p {
  font-size: 1rem; /* Entspricht 16px */
}
```

### 🎭 `font-style`: Der Schriftstil

Diese Eigenschaft bestimmt, ob eine Schrift normal, kursiv oder schräg dargestellt wird.

- `font-style: normal;`
  - Der Standardwert. Die Schrift wird normal und aufrecht angezeigt.

- `font-style: italic;`
  - Stellt den Text kursiv dar. Idealerweise verwendet der Browser einen echten kursiven Schriftschnitt, der vom Schriftdesigner extra gestaltet wurde (den du also mit dem Webfont mitgeladen haben musst).

- `font-style: oblique;`
  - Stellt den Text schräg dar. Wenn kein echter kursiver Schnitt verfügbar ist, neigt der Browser einfach die normalen Buchstaben künstlich. Der Unterschied ist oft subtil, aber `italic` sieht meistens besser aus.

```css
.hervorhebung {
  font-style: italic; /* Betonten Text kursiv setzen */
}

.warnung {
  font-style: oblique; /* Eine alternative Schrägstellung */
}
```

### 💪 `font-weight`: Das Schriftgewicht (Die "Dicke")

Mit `font-weight` steuerst du, wie dick oder dünn die Buchstaben sind.

Es gibt zwei Arten, das Gewicht anzugeben: mit Schlüsselwörtern oder mit numerischen Werten.

| Schlüsselwort  | Numerischer Wert | Beschreibung            |
| :------------- | :--------------- | :---------------------- |
| `normal`       | `400`            | Standard-Schriftstärke. |
| `bold`         | `700`            | Fette Schrift.          |
| (kein Keyword) | `100`            | Thin (sehr dünn)        |
| (kein Keyword) | `300`            | Light (dünn)            |
| (kein Keyword) | `500`            | Medium                  |
| (kein Keyword) | `900`            | Black (sehr fett)       |

**WICHTIG:** Damit ein bestimmtes `font-weight` funktioniert, musst du den entsprechenden Schriftschnitt auch wirklich via Google Fonts oder `@font-face` geladen haben! Wenn du nur `Roboto Regular (400)` geladen hast und im CSS `font-weight: 700;` angibst, wird der Browser versuchen, die Schrift künstlich fett zu machen ("Faux Bold"). Das sieht oft unschön und verwaschen aus.

```css
p {
  font-weight: 400; /* Normaler Fließtext */
  /* Das Gleiche wie: font-weight: normal; */
}

h2 {
  font-weight: 700; /* Eine fette Überschrift */
  /* Das Gleiche wie: font-weight: bold; */
}

.subtiler-text {
  font-weight: 300; /* Ein leichterer Text, falls der "Light"-Schnitt geladen wurde */
}
```

### ↕️ `line-height`: Der Zeilenabstand

`line-height` legt den Abstand zwischen den Zeilen in einem Textblock fest. Man nennt das auch den "Durchschuss". Ein guter Zeilenabstand ist **extrem wichtig für die Lesbarkeit** von langen Texten. Zu enge Zeilen wirken gequetscht, zu weite Zeilen lassen den Text auseinanderfallen.

Die `line-height` ist die Gesamthöhe einer Zeile. Der Text sitzt vertikal zentriert darin. Der Raum über und unter dem Text ist der eigentliche Abstand.

Auch hier gibt es verschiedene Einheiten, aber eine ist klar die beste:

| Einheit                     | Beispiel              | Erklärung und Empfehlung                                                                                                                                                                                                                                                                                                                 |
| :-------------------------- | :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`px`**                    | `line-height: 24px;`  | **Nicht empfohlen.** Ein fester Pixelwert ist unflexibel. Wenn ein Nutzer die Schriftgröße erhöht, bleibt der Zeilenabstand gleich, und der Text kann überlappen.                                                                                                                                                                        |
| **`em` / `%`**              | `line-height: 1.5em;` | Funktioniert, ist aber nicht ideal. Der Wert wird vom Elternelement geerbt und kann zu unerwarteten Ergebnissen in verschachtelten Elementen führen.                                                                                                                                                                                     |
| **Unitless (ohne Einheit)** | `line-height: 1.5;`   | **BEST PRACTICE!** Dies ist ein Multiplikator, der auf die `font-size` des **jeweiligen Elements** angewendet wird. `line-height: 1.5;` bei `font-size: 16px;` ergibt eine Zeilenhöhe von 24px. Erhöht sich die Schriftgröße auf `20px`, wird die Zeilenhöhe automatisch zu `30px`. Es skaliert perfekt und ist vererbbar ohne Probleme. |

Ein guter Startwert für die Lesbarkeit von Fließtext ist eine `line-height` zwischen `1.5` und `1.7`.

```css
p {
  font-size: 1rem; /* 16px */

  /* Die Zeilenhöhe wird 1.6 * 16px = 25.6px betragen. */
  /* Das schafft genug "Luft" zwischen den Zeilen und macht den Text sehr angenehm lesbar. */
  line-height: 1.6;
}

h1 {
  /* Überschriften haben oft einen geringeren Zeilenabstand, da sie selten mehrzeilig sind. */
  line-height: 1.2;
}
```

## Fragen zum Text

- Was sind die verschiedenen Bestandteile einer CSS-Regel?
- Nenne die verschiedenen Möglichkeiten, Elemente in CSS auszuwählen.
- Was ist die empfohlene Methode, um CSS mit HTML-Dateien zu verknüpfen?
- Was sind die drei Hauptfarbformate in CSS?
- Wie bindt man eine Google Font in eine Webseite ein?
- Was sind die Unterschiede zwischen den Einheiten `px`, `em` und `rem` für die Schriftgröße?
- Wie definiert man eine halbtransparente Hintergrundfarbe in CSS?

# 📦 Layout mit dem Box-Modell und Flexbox

<br><br><br>

## 🧱 Das Box-Modell: Die Grundbausteine jeder Webseite

Stell dir vor, jedes einzelne Element auf einer Webseite – sei es ein Textabsatz, ein Bild oder ein Button – ist in einer unsichtbaren Kiste verpackt. Genau das ist das Box-Modell. Es beschreibt, wie diese Kisten aufgebaut sind und wie sie den Platz auf der Seite einnehmen. Jede dieser Boxen besteht aus vier Schichten, die wie bei einer Zwiebel umeinander liegen. Lass uns das mal von innen nach außen durchgehen.

### 📜 Der Inhalt (Content)

Das ist der Kern von allem. Der Inhalt ist der Text, den du liest, das Bild, das du ansiehst, oder das Video, das du abspielst. Die Größe dieser innersten Schicht wird durch die Eigenschaften `width` (Breite) und `height` (Höhe) bestimmt. Wenn du also einem Element eine Breite von 200 Pixeln gibst, dann meinst du damit standardmäßig die Breite des Inhaltsbereichs.

- **Was es ist:** Dein eigentlicher Text, Bild, Video, etc.
- **CSS-Eigenschaften:** `width`, `height`

<br><br><br>

### 🛋️ Der Innenabstand (Padding)

Stell dir vor, du packst ein zerbrechliches Geschenk in eine Kiste. Du würdest es nicht direkt an den Rand der Kiste legen, sondern etwas Polstermaterial, wie Luftpolsterfolie, dazwischen tun. Genau das ist Padding! Es ist der durchsichtige Abstand _innerhalb_ der Box, zwischen dem Inhalt und dem Rahmen (Border). Padding sorgt dafür, dass dein Inhalt nicht direkt am Rand "klebt" und gibt ihm Luft zum Atmen.

- **Was es ist:** Der Abstand zwischen dem Inhalt und dem Rahmen.
- **Analogie:** Die Polsterung in einem Paket.
- **CSS-Eigenschaften:** `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`.

<br><br><br>

### 🖼️ Der Rahmen (Border)

Der Rahmen ist die eigentliche Wand der Kiste. Er liegt um den Inhalt und das Padding herum. Du kannst ihn sichtbar machen, indem du ihm eine Dicke, einen Stil und eine Farbe gibst. Ein Rahmen ist super, um Elemente visuell voneinander abzugrenzen, zum Beispiel bei Buttons oder Eingabefeldern.

- **Was es ist:** Die Linie, die den Inhalt und das Padding umschließt.
- **Analogie:** Der Karton eines Pakets oder der Rahmen eines Bildes.
- **CSS-Eigenschaften:** `border`, `border-width`, `border-style` (z.B. `solid`, `dashed`), `border-color`.

<br><br><br>

### 🧍↔️🧍 Der Außenabstand (Margin)

Wenn du mehrere Pakete nebeneinanderstellst, willst du vielleicht etwas Platz zwischen ihnen lassen, damit sie nicht aneinanderstoßen. Das ist der Margin! Es ist der durchsichtige Abstand _außerhalb_ der Box, also außerhalb des Rahmens. Der Margin sorgt für den Abstand zwischen einem Element und seinen Nachbarelementen. Er ist quasi der "persönliche Freiraum" eines jeden Elements.

- **Was es ist:** Der Abstand zwischen dem Rahmen deines Elements und anderen Elementen.
- **Analogie:** Der Sicherheitsabstand zwischen zwei Autos auf einem Parkplatz.
- **CSS-Eigenschaften:** `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.

Hier ist eine Tabelle zur Verdeutlichung:

| Eigenschaft | Ort                       | Zweck                               | Analogie                       |
| :---------- | :------------------------ | :---------------------------------- | :----------------------------- |
| **Content** | Ganz innen                | Enthält den eigentlichen Inhalt.    | Das Geschenk im Paket          |
| **Padding** | Innerhalb des Rahmens     | Schafft Platz um den Inhalt.        | Die Polsterung im Paket        |
| **Border**  | Zwischen Padding & Margin | Dient als sichtbare Begrenzung.     | Der Karton des Pakets          |
| **Margin**  | Ganz außen                | Schafft Platz zu anderen Elementen. | Der Abstand zum nächsten Paket |

<br><br><br>

### 📏 Die Box-Größenberechnung (box-sizing)

Standardmäßig (`box-sizing: content-box;`) bezieht sich die angegebene `width` und `height` nur auf den **Content**. Wenn du dann noch Padding und Border hinzufügst, wird die Box insgesamt _breiter_ und _höher_ als angegeben. Das ist oft verwirrend.

Stell dir vor, du sagst: `width: 200px; padding: 10px; border: 5px solid black;`
Die tatsächliche, sichtbare Breite wäre dann:
`200px (Content) + 10px (Padding links) + 10px (Padding rechts) + 5px (Border links) + 5px (Border rechts) = 230px`.

Das ist unpraktisch! Deshalb nutzen fast alle Entwickler heute `box-sizing: border-box;`. Damit sagst du dem Browser: "Wenn ich eine Breite von 200px angebe, dann meine ich die **gesamte** Breite, inklusive Padding und Border." Der Browser berechnet dann automatisch, wie viel Platz für den Content übrig bleibt. Das ist viel intuitiver und einfacher zu handhaben.

#### Soft Reset für alle Elemente

- Um sicherzustellen, dass alle Elemente `border-box` verwenden und standardmäßig `padding` und `margin` auf Null gesetzt sind, verwendet man den sogenannten "Soft Reset" am Anfang des CSS:

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

## Das Box-Modell und semantisches HTML

- Vor HTML5 verwendeten Entwickler häufig `<div>`-Elemente als generische Container, um Inhaltsbereiche zu trennen.
- Mit semantischen HTML5-Elementen wie `<header>`, `<nav>`, `<main>`, `<section>` und `<footer>` kannst du deiner Inhaltsstruktur Bedeutung geben, bevor du CSS-Stile anwendest.

### Beispiel:

- Anstatt mehrere `<div>`s zu verwenden:

```html
<body>
  <div class="header"><div class="nav">...</div></div>

  <div class="main">...</div>
  <div class="footer">...</div>
</body>
```

- Verwende semantische Elemente:

```html
<body>
  <header><nav>...</nav></header>
  <main>...</main>
  <footer>...</footer>
</body>
```

- Dies verbessert die Barrierefreiheit, SEO und Lesbarkeit des Codes, während du diese Elemente weiterhin mit dem Box-Modell in CSS gestalten kannst.

  <br><br><br>

## 🤸 Flexbox: Flexible und dynamische Layouts

Das Box-Modell beschreibt, wie ein _einzelnes_ Element aufgebaut ist. Flexbox hingegen ist eine moderne Technik, um _mehrere_ Elemente (die "Boxen") flexibel und intelligent in einem Behälter anzuordnen. Stell dir vor, du hast eine Reihe von Bauklötzen und möchtest sie sauber in einer Reihe oder untereinander anordnen, egal wie groß der Behälter ist. Dafür ist Flexbox perfekt.

### 👨‍👩‍👧‍👦 Das Grundprinzip: Container und Items

Flexbox funktioniert immer mit zwei Komponenten:

1.  **Flex-Container:** Das ist das Elternelement, die "Kiste", in die du deine Elemente legst. Um Flexbox zu aktivieren, gibst du diesem Container die Eigenschaft `display: flex;`.
2.  **Flex-Items:** Das sind die direkten Kinderelemente innerhalb des Containers. Sobald der Container ein Flex-Container ist, werden seine Kinder automatisch zu flexiblen Items.

<br><br><br>

### ↔️ Die Hauptachse und die Querachse (Main Axis & Cross Axis)

Das Wichtigste bei Flexbox ist das Konzept von zwei Achsen. Anders als bei einem starren Koordinatensystem können diese Achsen ihre Richtung wechseln.

- **Hauptachse (Main Axis):** Das ist die primäre Richtung, in der die Flex-Items angeordnet werden. Du bestimmst diese Richtung mit `flex-direction`.
- **Querachse (Cross Axis):** Diese Achse verläuft immer im 90-Grad-Winkel zur Hauptachse.

Die Eigenschaft `flex-direction` ist der Schalter, der die Ausrichtung deines gesamten Layouts bestimmt:

| `flex-direction` | Ausrichtung der Hauptachse     | Verhalten der Items                                                     |
| :--------------- | :----------------------------- | :---------------------------------------------------------------------- |
| `row` (Standard) | Horizontal (links nach rechts) | Items werden nebeneinander aufgereiht.                                  |
| `row-reverse`    | Horizontal (rechts nach links) | Items werden nebeneinander, aber in umgekehrter Reihenfolge aufgereiht. |
| `column`         | Vertikal (oben nach unten)     | Items werden untereinander gestapelt.                                   |
| `column-reverse` | Vertikal (unten nach oben)     | Items werden untereinander, aber in umgekehrter Reihenfolge gestapelt.  |

<br><br><br>

### 🎯 Ausrichtung der Items (Alignment)

Sobald du deine Achsen definiert hast, kannst du mit Flexbox deine Items millimetergenau auf diesen Achsen ausrichten. Das ist eine der größten Stärken von Flexbox.

#### Ausrichtung auf der Hauptachse (`justify-content`)

Diese Eigenschaft kontrolliert, wie die Items **entlang der Hauptachse** verteilt werden. Das ist besonders nützlich, wenn mehr Platz auf der Achse ist, als die Items benötigen.

| `justify-content` | Beschreibung                                                                             | Visuelles Beispiel (für `flex-direction: row`) |
| :---------------- | :--------------------------------------------------------------------------------------- | :--------------------------------------------- |
| `flex-start`      | Items rücken an den Anfang der Achse.                                                    | `[item][item]...`                              |
| `flex-end`        | Items rücken an das Ende der Achse.                                                      | `...[item][item]`                              |
| `center`          | Items werden in der Mitte der Achse zentriert.                                           | `..[item][item]..`                             |
| `space-between`   | Erstes Item am Anfang, letztes am Ende, der Rest wird gleichmäßig dazwischen verteilt.   | `[item]...[item]...[item]`                     |
| `space-around`    | Der Leerraum wird gleichmäßig um jedes Item verteilt (doppelter Abstand zwischen Items). | `.[item]..[item]..[item].`                     |
| `space-evenly`    | Der Leerraum ist überall exakt gleich groß, auch an den Rändern.                         | `.[item].[item].[item].`                       |

#### Ausrichtung auf der Querachse (`align-items`)

Diese Eigenschaft kontrolliert, wie die Items **entlang der Querachse** ausgerichtet werden. Das ist nützlich, wenn deine Items unterschiedlich hoch (oder breit bei `column`-Direktion) sind.

| `align-items`        | Beschreibung                                                                                |
| :------------------- | :------------------------------------------------------------------------------------------ |
| `stretch` (Standard) | Die Items werden so gestreckt, dass sie den Container auf der Querachse komplett ausfüllen. |
| `flex-start`         | Die Items rücken an den Anfang der Querachse.                                               |
| `flex-end`           | Die Items rücken an das Ende der Querachse.                                                 |
| `center`             | Die Items werden in der Mitte der Querachse zentriert.                                      |
| `baseline`           | Die Items werden an ihrer Text-Grundlinie ausgerichtet.                                     |

<br><br><br>

### 🔢 Die Reihenfolge ändern (order)

Eine extrem mächtige Funktion von Flexbox! Normalerweise entspricht die Reihenfolge der Elemente auf der Webseite der Reihenfolge im HTML-Code. Mit der `order`-Eigenschaft kannst du diese Reihenfolge **nur für die visuelle Darstellung** ändern, ohne das HTML anzufassen.

- Alle Flex-Items haben standardmäßig einen `order`-Wert von `0`.
- Items werden nach ihrem `order`-Wert sortiert, vom niedrigsten zum höchsten.
- Du kannst auch negative Werte verwenden. Ein Item mit `order: -1;` wird also vor allen Items mit `order: 0;` angezeigt.

**Beispiel:**
Du hast drei Boxen (A, B, C) im HTML.

```html
<div>Box A</div>
<div>Box B</div>
<div>Box C</div>
```

Wenn du Box C mit CSS `order: -1;` gibst, wird die visuelle Reihenfolge auf der Webseite **C, A, B** sein, obwohl der HTML-Code unverändert bleibt. Das ist fantastisch für responsives Design, wo du auf kleinen Bildschirmen vielleicht eine andere Anordnung möchtest als auf großen.# ⚙️ Praktische Anwendung und Fehlerbehebung

<br><br><br>

## 🏗️ Aufbau einer einfachen, gestylten Beispiel-Webseite

Lass uns eine kleine digitale Visitenkarte für ein Hobby erstellen, zum Beispiel "Urban Gardening". Wir werden Schritt für Schritt vorgehen: zuerst bauen wir das Skelett mit HTML, dann gestalten wir es mit CSS.

<br><br><br>

### 📝 Die Planung

- Jedes gute Projekt, egal wie klein, beginnt mit einem Plan.
- Manche Teams haben dedizierte UI/UX-Designer dafür, aber als Solo-Entwickler musst du dir selbst Inspiration suchen.
- Schau dir andere Webseiten an, die dir gefallen. Was gefällt dir an ihnen? Farben, Schriften, Layout?
- Skizziere ein grobes Layout auf Papier oder einem Whiteboard. Wo soll der Header hin? Der Hauptinhalt? Der Footer?
- Ein guter Ansatz ist, zuerst HTML für die Struktur zu schreiben, dann CSS für das Styling und dann JavaScript für die Interaktivität.
- Alles auf einmal zu machen, kann schnell unübersichtlich werden.
- Manchmal dauern Projekte mehrere Tage oder Wochen.

#### Hier ist unser Plan für die Beispiel-Portfolio-Webseite:

- **Header:** Mit Navigationslinks (Home, Projekte, Kontakt).
- **Hero-Bereich:** Eine große Willkommensnachricht und eine kurze Einführung.
- **Projekte-Bereich:** Ein Raster von Projektkarten mit Titel, Beschreibung und verwendeten Technologien.
- **Kontakt-Bereich:** Ein einfaches Kontaktformular mit Name-, E-Mail-, Nachricht-Feldern und einem Senden-Button.
- **Footer:** Mit Copyright-Informationen.

<br><br><br>

### 🦴 Das HTML-Grundgerüst (`index.html`)

Das ist unser Skelett. Wir erstellen eine Datei namens `index.html` und füllen sie mit folgendem Inhalt. Jeder Teil ist kommentiert, damit du genau weißt, was er tut.

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mein Portfolio</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <header class="header">
      <nav class="navigation">
        <div class="navigation__brand">
          <h2 class="navigation__logo">Max Mustermann</h2>
        </div>

        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#hero" class="navigation__link">Home</a>
          </li>
          <li class="navigation__item">
            <a href="#projects" class="navigation__link">Projekte</a>
          </li>
          <li class="navigation__item">
            <a href="#contact" class="navigation__link">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main">
      <section id="hero" class="hero">
        <div class="hero__content">
          <h1 class="hero__title">Willkommen auf meinem Portfolio</h1>
          <p class="hero__description">
            Ich bin Webentwickler und erstelle moderne, benutzerfreundliche
            Webseiten.
          </p>
        </div>
      </section>

      <section id="projects" class="projects">
        <h2 class="projects__title">Meine Projekte</h2>

        <div class="projects__container">
          <article class="project-card">
            <h3 class="project-card__title">Portfolio Webseite</h3>
            <p class="project-card__description">
              Eine persönliche Portfolio-Webseite mit modernem Design.
            </p>
            <p class="project-card__tech">
              <strong>Technologien:</strong> HTML, CSS, JavaScript
            </p>
          </article>

          <article class="project-card">
            <h3 class="project-card__title">Blog Plattform</h3>
            <p class="project-card__description">
              Eine einfache Blog-Plattform zum Teilen von Artikeln.
            </p>
            <p class="project-card__tech">
              <strong>Technologien:</strong> HTML, CSS, JavaScript
            </p>
          </article>

          <article class="project-card">
            <h3 class="project-card__title">Aufgaben-App</h3>
            <p class="project-card__description">
              Einess="project-card__tech">
              <strong>Technologien:</strong> HTML, CSS, JavaScript
            </p>
          </article>
        </div>
      </section>

      <section id="contact" class="contact">
        <h2 class="contact__title">Kontaktiere mich</h2>

        <form class="contact-form" id="contact-form">
          <div class="contact-form__group">
            <label for="name" class="contact-form__label"> Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              class="contact-form__input"
              required />
          </div>

          <div class="contact-form__group">
            <label for="email" class="contact-form__label"> E-Mail: </label>
            <input
              type="email"
              id="email"
              name="email"
              class="contact-form__input"
              required />
          </div>

          <div class="contact-form__group">
            <label for="message" class="contact-form__label">
              Nachricht:
            </label>
            <textarea
              id="message"
              name="message"
              class="contact-form__textarea"
              rows="5"
              required></textarea>
          </div>

          <button type="submit" class="contact-form__button">Senden</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <p class="footer__text">
        &copy; <span id="current-year"></span> Max Mustermann. Alle Rechte
        vorbehalten.
      </p>
    </footer>

    <script src="script.js"></script>
  </body>
</html> App zur Verwaltung von täglichen Aufgaben.
            </p>
            <p class="project-card__tech">
              <strong>Technologien:</strong> HTML, CSS, JavaScript
            </p>
          </article>
        </div>
      </section>

      <section id="contact" class="contact">
        <h2 class="contact__title">Kontaktiere mich</h2>

        <form class="contact-form" id="contact-form">
          <div class="contact-form__group">
            <label for="name" class="contact-form__label"> Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              class="contact-form__input"
              required />
          </div>

          <div class="contact-form__group">
            <label for="email" class="contact-form__label"> E-Mail: </label>
            <input
              type="email"
              id="email"
              name="email"
              class="contact-form__input"
              required />
          </div>

          <div class="contact-form__group">
            <label for="message" class="contact-form__label">
              Nachricht:
            </label>
            <textarea
              id="message"
              name="message"
              class="contact-form__textarea"
              rows="5"
              required></textarea>
          </div>

          <button type="submit" class="contact-form__button">Senden</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <p class="footer__text">
        &copy; <span id="current-year"></span> Max Mustermann. Alle Rechte
        vorbehalten.
      </p>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
```

<br><br><br>

### 🎨 Die CSS-Gestaltung (`style.css`)

Jetzt kommt der spaßige Teil! Wir erstellen eine zweite Datei im selben Ordner und nennen sie `style.css`. Diese Datei ist wie der Kleiderschrank für unsere Webseite. Hier legen wir Farben, Abstände, Schriftarten und das Layout fest.

```css
/* ===================================
   GLOBAL STYLES / GLOBALE STILE
   =================================== */

/* Reset default browser styles / Browser-Standardstile zurücksetzen */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styling / Body-Styling */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333333;
  background-color: #f4f4f4;
}

/* ===================================
   HEADER & NAVIGATION / KOPFZEILE & NAVIGATION
   =================================== */

/* Header container / Header-Container */
.header {
  background-color: #2c3e50;
  padding: 20px 0;
  position: sticky;
  top: 0;
  width: 100%;
}

/* Navigation container / Navigations-Container */
.navigation {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Brand/Logo area / Marken-/Logo-Bereich */
.navigation__brand {
  color: white;
}

.navigation__logo {
  font-size: 24px;
  color: #ffffff;
}

/* Navigation list / Navigationsliste */
.navigation__list {
  list-style: none;
  display: flex;
  gap: 30px;
}

.navigation__item {
  display: inline;
}

/* Navigation links / Navigationslinks */
.navigation__link {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
}

/* ===================================
   HERO SECTION / HERO-BEREICH
   =================================== */

/* Hero container / Hero-Container */
.hero {
  background-color: #3498db;
  color: white;
  text-align: center;
  padding: 100px 20px;
}

/* Hero content wrapper / Hero-Inhalts-Wrapper */
.hero__content {
  width: 90%;
  margin: 0 auto;
}

/* Hero title / Hero-Titel */
.hero__title {
  font-size: 42px;
  margin-bottom: 20px;
}

/* Hero description / Hero-Beschreibung */
.hero__description {
  font-size: 18px;
  margin-bottom: 15px;
}

/* Hero date display / Hero-Datumsanzeige */
.hero__date {
  font-size: 16px;
  margin-top: 30px;
}

.hero__date-value {
  font-weight: bold;
}

/* ===================================
   PROJECTS SECTION / PROJEKTE-BEREICH
   =================================== */

/* Projects container / Projekte-Container */
.projects {
  padding: 60px 20px;
  background-color: #ffffff;
}

/* Projects title / Projekte-Titel */
.projects__title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  color: #2c3e50;
}

/* Projects cards container / Projekte-Karten-Container */
.projects__container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

/* Individual project card / Einzelne Projektkarte */
.project-card {
  background-color: #f9f9f9;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 30px;
  width: 300px;
}

/* Project card title / Projektkarten-Titel */
.project-card__title {
  font-size: 22px;
  color: #2c3e50;
  margin-bottom: 15px;
}

/* Project card description / Projektkarten-Beschreibung */
.project-card__description {
  font-size: 14px;
  color: #555555;
  margin-bottom: 10px;
  line-height: 1.5;
}

/* Project card technologies / Projektkarten-Technologien */
.project-card__tech {
  font-size: 14px;
  color: #3498db;
  margin-top: 15px;
}

/* ===================================
   CONTACT SECTION / KONTAKT-BEREICH
   =================================== */

/* Contact container / Kontakt-Container */
.contact {
  padding: 60px 20px;
  background-color: #ecf0f1;
}

/* Contact title / Kontakt-Titel */
.contact__title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  color: #2c3e50;
}

/* Contact form / Kontaktformular */
.contact-form {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  border: 1px solid #dddddd;
}

/* Form group / Formulargruppe */
.contact-form__group {
  margin-bottom: 20px;
}

/* Form labels / Formularbeschriftungen */
.contact-form__label {
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: #2c3e50;
  font-weight: bold;
}

/* Form inputs / Formulareingaben */
.contact-form__input {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

/* Form textarea / Formular-Textbereich */
.contact-form__textarea {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  resize: vertical;
}

/* Form submit button / Formular-Senden-Button */
.contact-form__button {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #3498db;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* ===================================
   FOOTER / FUßZEILE
   =================================== */

/* Footer container / Footer-Container */
.footer {
  background-color: #2c3e50;
  color: #ffffff;
  text-align: center;
  padding: 30px 20px;
}

/* Footer text / Footer-Text */
.footer__text {
  font-size: 14px;
}
```

Wenn du nun die `index.html`-Datei in deinem Browser öffnest, siehst du eine einfache, aber sauber gestaltete Webseite. Du hast gerade die grundlegenden Bausteine von HTML (Struktur) und CSS (Design) kombiniert, um etwas Sichtbares und Ansprechendes zu erschaffen!

### JavaScript Funktionalität (`script.js`)

Um unsere Portfolio-Seite etwas dynamischer zu gestalten, fügen wir ein kleines JavaScript-Snippet hinzu, das automatisch das Copyright-Jahr im Footer aktualisiert und die Formulardaten sammelt, wenn der Benutzer das Kontaktformular absendet.

```javascript
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
```

<br><br><br>

## 🔍 Troubleshooting: Häufige Fehlerquellen bei der CSS-Gestaltung

Jeder, der mit CSS anfängt (und auch Profis!), macht Fehler. Das ist völlig normal. Wichtig ist, zu wissen, wo man suchen muss. Hier sind die häufigsten Stolpersteine und wie du sie überwindest.

<br><br><br>

### ⌨️ Rechtschreib- und Tippfehler (Typos)

Dies ist mit Abstand die häufigste Fehlerquelle. Ein einziger falscher Buchstabe, und die Regel wird vom Browser komplett ignoriert.

- **Problem**: Du schreibst `background-coler` statt `background-color` oder `pading` statt `padding`. Auch bei Klassennamen passiert das schnell: im HTML steht `class="main-content"`, aber im CSS schreibst du `.main-conten`.
- **Lösung**: Schau ganz genau hin! Moderne Code-Editoren wie VS Code färben bekannte CSS-Eigenschaften ein. Wenn eine Eigenschaft nicht die erwartete Farbe hat, hast du dich wahrscheinlich vertippt. Überprüfe auch die Namen deiner Klassen und IDs buchstabengetreu.

<br><br><br>

### 🔗 Falsche Verlinkung der CSS-Datei

Dein HTML und dein CSS sind perfekt, aber es passiert einfach nichts? Dann "wissen" die beiden Dateien vielleicht nichts voneinander.

- **Problem**: Der Pfad in der HTML-Datei im `<link>`-Tag ist falsch.
  - `href="styles.css"` statt `href="style.css"` (falscher Dateiname).
  - `href="css/style.css"`, obwohl die Datei im selben Ordner liegt.
- **Lösung**: Überprüfe den `href`-Pfad im `<head>` deiner HTML-Datei.
  - Wenn `index.html` und `style.css` im selben Ordner liegen, ist der Pfad einfach `href="style.css"`.
  - Wenn `style.css` in einem Unterordner namens `css` liegt, muss der Pfad `href="css/style.css"` lauten.

<br><br><br>

### 🎯 Die CSS-Spezifität

Das ist ein Konzept, das am Anfang etwas knifflig ist. Stell es dir wie ein Kartenspiel vor, bei dem manche Karten andere stechen. Eine spezifischere Regel schlägt immer eine allgemeinere.

- **Problem**: Du hast eine Regel für alle `<p>`-Elemente (z.B. `color: blue;`), aber ein bestimmter Absatz, der auch eine Klasse hat (`.special-text`), wird nicht blau, weil es eine andere Regel (`.special-text { color: red; }`) gibt.
- **Erklärung**: Eine ID ist immer stärker als eine Klasse. Eine Klasse ist immer stärker als ein Element-Typ.
- **Lösung**: Nutze die Entwicklertools deines Browsers (Taste F12), um das Element zu untersuchen. Dort siehst du genau, welche CSS-Regeln auf das Element angewendet werden und welche durchgestrichen sind, weil sie von einer spezifischeren Regel überschrieben wurden.

Hier ist eine einfache Rangfolge der Spezifität (von niedrig zu hoch):

| Selektor-Typ         | Spezifität (Beispiel)               | Beispielcode                  |
| -------------------- | ----------------------------------- | ----------------------------- |
| **Element-Selektor** | Niedrig                             | `p { color: black; }`         |
| **Klassen-Selektor** | Mittel                              | `.info-text { color: blue; }` |
| **ID-Selektor**      | Hoch                                | `#intro { color: green; }`    |
| **Inline-Style**     | Sehr Hoch (überschreibt fast alles) | `<p style="color: red;">`     |

<br><br><br>

### 🚧 Syntax-Fehler: Die Grammatik von CSS

CSS hat eine sehr einfache Grammatik, aber man muss sie einhalten.

- **Problem**:
  - **Fehlendes Semikolon (`;`)**: `p { color: blue margin-top: 10px }` -> Falsch! Der Browser weiß nicht, wo die erste Regel aufhört.
  - **Fehlende geschweifte Klammern (`{}`):** `body background-color: lightblue;` -> Falsch! Regeln müssen immer in `{}` eingeschlossen sein.
  - **Fehlender Doppelpunkt (`:`)**: `h1 { color blue; }` -> Falsch! Zwischen Eigenschaft und Wert gehört ein Doppelpunkt.
- **Lösung**: Achte penibel auf diese Zeichen. Auch hier helfen Code-Editoren, indem sie Fehler oft rot unterstreichen. Gehe deinen Code Zeile für Zeile durch.

<br><br><br>

### 📦 Das Box-Modell-Dilemma (`margin` vs. `padding`)

Anfänger verwechseln oft den Innen- und Außenabstand.

- **Problem**: Du willst mehr Platz _innerhalb_ einer Box um den Text herum, benutzt aber `margin`. Dadurch wird der Abstand _außerhalb_ der Box vergrößert und die Box selbst rückt von anderen Elementen weg.
- **Lösung**: Merke dir diese Eselsbrücke:
  - `padding` ist wie das Polster _in einem Paket_. Es schützt den Inhalt und vergrößert das Paket von innen.
  - `margin` ist der Sicherheitsabstand _zwischen zwei Paketen_. Es sorgt für Platz um das Paket herum.
  - **Profi-Tipp**: Füge ganz am Anfang deines CSS `* { box-sizing: border-box; }` ein. Das ändert die Berechnung des Box-Modells so, dass `padding` und `border` in die definierte `width` und `height` mit einberechnet werden. Das macht Layouts viel intuitiver und einfacher.

<br><br><br>

### 🔄 Browser-Cache

Manchmal ist dein Code perfekt, aber du siehst die Änderungen trotzdem nicht.

- **Problem**: Der Browser hat eine alte Version deiner `style.css`-Datei im Zwischenspeicher (Cache) und lädt nicht die neue, die du gerade gespeichert hast. Er denkt, er spart damit Ladezeit.
- **Lösung**: Erzwinge ein Neuladen der Seite ohne Cache. Das geht in den meisten Browsern mit der Tastenkombination:
  - **Windows/Linux**: `Strg + Umschalt + R` oder `Strg + F5`
  - **Mac**: `Cmd + Shift + R`

<br><br><br>

### 🛠️ Das wichtigste Werkzeug: Die Entwicklertools

Jeder moderne Browser hat eingebaute Entwicklertools. Sie sind dein bester Freund bei der Fehlersuche!

- **Wie man sie öffnet**: Drücke die Taste `F12` oder klicke mit der rechten Maustaste auf ein Element auf der Webseite und wähle "Untersuchen" oder "Element-Informationen".
- **Was sie können**:
  - Im "Elemente"- oder "Inspektor"-Tab siehst du den kompletten HTML-Code.
  - Wenn du ein Element anklickst, siehst du im "Stile"- oder "Rules"-Bereich alle CSS-Regeln, die auf dieses Element angewendet werden.
  - Du siehst durchgestrichene Regeln, die überschrieben wurden (siehe Spezifität).
  - Du kannst CSS-Regeln direkt im Browser an- und ausschalten oder Werte ändern, um live zu sehen, was passiert. Das ist extrem hilfreich, um Dinge auszuprobieren

```

```
