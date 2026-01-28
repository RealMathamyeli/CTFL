# Grundaufbau von HTML

[HTML Tag List](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)

Hier schauen wir uns an, wie das Grundgerüst aussieht, das _jede_ moderne Webseite benötigt, damit ein Browser sie korrekt anzeigen kann.

<br><br><br>

## Verfassen eines minimalen HTML5-Dokuments

Ein HTML-Dokument ist im Grunde nur eine reine Textdatei, die du mit der Endung `.html` speicherst (z.B. `index.html`). Damit ein Browser versteht, was er da liest, braucht es eine ganz bestimmte Grundstruktur. Diese Struktur ist standardisiert und wird oft als "Boilerplate" (Textbaustein) bezeichnet.

<br><br><br>

### Das Grundgerüst: Ein minimales Beispiel

So sieht das absolute Minimum aus, das in einer HTML5-Datei stehen muss. Jede Zeile hat eine wichtige Bedeutung.

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Das ist der Titel der Seite</title>
  </head>
  <body>
    <h1>Meine erste Webseite</h1>
    <p>Hallo Welt! Das ist der Inhalt, den jeder sehen kann.</p>
  </body>
</html>
```

<br><br><br>

### Die Bausteine im Detail

Lass uns dieses Gerüst Zeile für Zeile durchgehen. HTML besteht aus **Tags** (Befehlen), die fast immer in Paaren auftreten: einem öffnenden Tag (z.B. `<p>`) und einem schließenden Tag (z.B. `</p>`).

- `<!DOCTYPE html>`
  Das ist _kein_ HTML-Tag, sondern eine **Anweisung** (eine sogenannte Deklaration). Sie muss immer in der allerersten Zeile stehen. Sie sagt dem Browser: "Achtung\! Was jetzt kommt, ist modernes HTML5. Bitte schalte nicht in einen alten, komischen Modus."

- `<html> ... </html>`
  Das ist das **Wurzelelement** (Root-Element). Stell dir das Tag-Paar wie eine große Kiste vor, in die _alles_ andere hineinkommt (außer dem DOCTYPE). Es umschließt das gesamte Dokument.
  - Das `lang="de"` ist ein **Attribut**. Es gibt dem Browser (und Suchmaschinen wie Google) die Zusatzinfo, dass der Hauptinhalt dieser Seite auf Deutsch ist.

- `<head> ... </head>`
  Das ist der **Kopfbereich** des Dokuments. Stell ihn dir vor wie das Gehirn oder den Rucksack der Webseite. Die Inhalte hier drin sind für den Besucher **nicht direkt sichtbar** (außer dem Titel\!). Hier stehen nur Metadaten – also Informationen _über_ die Seite.

- `<body> ... </body>`
  Das ist der **Körper** des Dokuments. Das ist der Teil, den du im Browserfenster **sehen** kannst. Alle Texte, Bilder, Videos, Links und Überschriften (wie unser `<h1>` und `<p>`) müssen hier hinein.

<br><br><br>

## Bedeutung von `<title>` und `<meta>`

Diese beiden Elemente sind die wichtigsten Bewohner des `<head>`-Bereichs. Sie sind entscheidend für Browser und Suchmaschinen.

<br><br><br>

### Das `<title>`-Element (Der Titel)

Das `<title>`-Tag ist, wie der Name schon sagt, der offizielle Titel deines Dokuments. Es ist extrem wichtig\!

**Wo siehst du den Titel?**

1.  **Im Browser-Tab:** Das ist der Text, der ganz oben im Tab deines Browsers angezeigt wird. Er hilft dir, die Seite wiederzufinden, wenn du viele Tabs offen hast.
2.  **In Google-Suchergebnissen:** Das ist die klickbare, blaue Überschrift, die Google für deine Seite anzeigt.
3.  **In Lesezeichen/Favoriten:** Wenn jemand deine Seite speichert, wird dieser Text als Name für das Lesezeichen verwendet.

[Image showing where the \<title\> tag appears: a browser tab and a Google search result]

Ein guter Titel ist kurz, prägnant und beschreibt genau, was auf der Seite zu finden ist (z.B. "Knuspriges Brot backen – Das beste Rezept | Kalles Backstube").

<br><br><br>

### Das `<meta>`-Element (Die Zusatzinformationen)

"Meta" bedeutet "Daten über Daten". `<meta>`-Tags geben dem Browser und Suchmaschinen also noch mehr technische und inhaltliche Zusatzinfos über deine Seite. Es gibt Dutzende verschiedener Meta-Tags, aber eines ist absolut unverzichtbar:

- `<meta charset="UTF-8">`
  Das ist meist das allererste Tag im `<head>`. Es legt die **Zeichenkodierung** fest. Stell es dir vor wie das "Alphabet", das der Browser zum Lesen deiner Seite benutzen soll.
  - **Warum UTF-8?** UTF-8 ist ein universeller Standard, der fast alle Zeichen aller Sprachen der Welt enthält, inklusive deutscher Umlaute (ä, ö, ü) und Sonderzeichen (€, @, ...).
  - **Was passiert ohne?** Wenn du das vergisst, rät der Browser vielleicht das falsche Alphabet und deine Umlaute werden als komischer Zeichensalat angezeigt (z.B. `fÃ¼r` statt `für`).

**Weitere wichtige `<meta>`-Tags**
Es gibt noch viele andere, die du oft sehen wirst. Hier sind die häufigsten in einer Tabelle:

| Meta-Tag        | Zweck                                                                                                                                                      | Beispiel                                                                                          |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **Viewport**    | **Extrem wichtig für Handys\!** Sagt dem Smartphone-Browser, dass er die Seite nicht herauszoomen soll, sondern sie an die Bildschirmbreite anpassen muss. | `<meta name="viewport" content="width=device-width, initial-scale=1.0">`                          |
| **Description** | Die Kurzbeschreibung (der "Snippet"), den Google oft unter dem blauen Link in den Suchergebnissen anzeigt.                                                 | `<meta name="description" content="Lerne, wie du knuspriges Brot einfach selbst backen kannst.">` |
| **Author**      | Nennt den Autor der Seite.                                                                                                                                 | `<meta name="author" content="Kalle Bäcker">`                                                     |
| **Keywords**    | (Veraltet) Früher hat man hier Suchbegriffe eingetragen. Google ignoriert das heute aber weitgehend.                                                       | `<meta name="keywords" content="Brot, backen, Rezept">`                                           |

<br><br><br>

# Textgestaltung in HTML

HTML gibt dir Werkzeuge, um deinen Text semantisch zu gliedern. "Semantisch" bedeutet, dass du dem Browser (und Suchmaschinen\!) sagst, welche _Bedeutung_ ein Textstück hat. Ist es eine Überschrift? Ein normaler Absatz? Ist es besonders wichtig?

<br><br><br>

## Die Grundbausteine: Überschriften und Absätze

Das sind die wichtigsten Elemente, um eine Seite zu strukturieren. Stell dir vor, du schreibst ein Dokument in Word oder Google Docs.

<br><br><br>

### \<h1\> bis \<h6\>: Die Hierarchie der Überschriften

Überschriften sind das Inhaltsverzeichnis deiner Webseite. Sie gliedern deinen Inhalt in logische Abschnitte und Unterabschnitte.

- **`<h1>` (Heading 1):** Das ist die **Hauptüberschrift** deiner Seite. Sie ist wie der Buchtitel. Es sollte pro Seite **nur eine einzige `<h1>`** geben. Sie beschreibt, worum es auf dieser Seite im Ganzen geht.
- **`<h2>` (Heading 2):** Das sind die **Hauptkapitel** deiner Seite. Du kannst mehrere davon haben.
- **`<h3>` bis `<h6>`:** Das sind die **Unterkapitel** (h3), Unter-Unterkapitel (h4) und so weiter. Sie gliedern die `<h2>`-Abschnitte weiter.

**Wichtig:** Benutze Überschriften niemals, nur weil der Text "groß" oder "fett" sein soll\! Benutze sie immer in der richtigen Reihenfolge für die **Struktur**. Eine `<h3>` sollte nicht direkt nach einer `<h1>` kommen, wenn es dazwischen kein `<h2>`-Kapitel gibt.

Screenreader (Programme, die Blinden den Inhalt vorlesen) nutzen diese Überschriften-Struktur, um auf der Seite zu navigieren. Eine saubere Hierarchie ist also super wichtig für die Barrierefreiheit.

**Beispiel-Struktur:**

```html
<body>
  <h1>Der ultimative Guide zum Brotbacken</h1>
  <p>Willkommen zu meinem Guide...</p>

  <h2>1. Die Zutaten</h2>
  <p>Alles, was du für ein gutes Brot brauchst...</p>
  <h3>1.1 Das richtige Mehl</h3>
  <p>Weizenmehl Typ 550 ist super...</p>
  <h3>1.2 Hefe vs. Sauerteig</h3>
  <p>Hefe ist schnell, Sauerteig...</p>

  <h2>2. Das Rezept</h2>
  <p>Hier ist die Schritt-für-Schritt-Anleitung...</p>
</body>
```

<br><br><br>

### \<p\>: Der Fließtext in Absätzen

Das `<p>`-Tag (Paragraph) ist das "Arbeitspferd" für deinen gesamten normalen Fließtext.

- **Was es macht:** Es umschließt einen Textabsatz. Der Browser fügt dann automatisch einen kleinen Abstand (eine "Margin") vor und nach dem Absatz ein, damit der Text nicht zusammenklebt.
- **Wichtig:** Wenn du in deinem HTML-Editor einfach die Enter-Taste drückst, erzeugt das _keinen_ neuen Absatz im Browser. Der Browser ignoriert solche "Whitespace"-Zeilenumbrüche. Du musst _immer_ ein neues `<p>`...`</p>`-Paar verwenden, um einen neuen Absatz zu beginnen.

<!-- end list -->

```html
<p>Das ist der erste Absatz. Er enthält viel interessanten Text über HTML.</p>

<p>
  Das ist der zweite Absatz. Obwohl zwischen ihnen im Code vielleicht viele
  Leerzeilen sind, macht der Browser nur den Standard-Abstand.
</p>
```

<br><br><br>

## Text hervorheben und betonen

Manchmal möchtest du bestimmten Wörtern oder Sätzen innerhalb eines Absatzes eine besondere Bedeutung geben.

<br><br><br>

### \<strong\>: Starke Wichtigkeit

Das `<strong>`-Tag sagt dem Browser: "Dieser Text ist **sehr wichtig**, ernst oder dringend\!"

- **Visueller Effekt:** Browser stellen diesen Text standardmäßig **fett** dar.
- **Semantische Bedeutung:** Ein Screenreader würde diesen Text mit einer ernsteren oder lauteren Stimme vorlesen. Es ist mehr als nur Deko.
- **Beispiel:** `<p><strong>Achtung:</strong> Berühren Sie die heiße Oberfläche nicht!</p>`

<br><br><br>

### \<em\>: Inhaltliche Betonung

Das `<em>`-Tag (Emphasis, engl. für Betonung) sagt dem Browser: "Dieses Wort wird **inhaltlich betont**." Stell dir vor, du würdest es beim Sprechen hervorheben, um die Bedeutung des Satzes zu ändern.

- **Visueller Effekt:** Browser stellen diesen Text standardmäßig _kursiv_ dar.
- **Semantische Bedeutung:** Es ändert den Fokus des Satzes.
- **Beispiel:** `<p>Ich hätte <em>wirklich</em> gerne ein Eis.</p>` (vs. `<p>Ich hätte wirklich gerne ein <em>Eis</em>.</p>`)

<br><br><br>

## Visuelle Strukturierung: Umbrüche und Linien

Diese Elemente sind etwas speziell, da sie meistens keine "Bedeutung" haben, sondern eher das Layout direkt beeinflussen. Man sollte sie sparsam einsetzen.

<br><br><br>

### \<br>: Der erzwungene Zeilenumbruch

Das `<br>`-Tag (Break) ist ein sogenanntes "leeres Element". Es hat keinen schließenden Tag (kein `</br>`).

- **Was es macht:** Es erzwingt an der Stelle, an der es steht, einen sofortigen Zeilenumbruch, **ohne** dabei einen neuen Absatz mit Abstand zu erstellen. Es ist wie die `Shift` + `Enter`-Tastenkombination in Word.
- **Anwendungsfall:** Am häufigsten wird es für Dinge wie Adressen oder Gedichte verwendet, bei denen die Zeilen direkt untereinander stehen sollen.
- **Warnung:** Benutze `<br>` niemals mehrmals hintereinander (`<br><br><br>`), um künstlich Abstände zwischen Absätzen zu erzeugen. Das ist "schmutziges" HTML. Für Abstände ist später CSS zuständig.

**Beispiel:**

```html
<p>
  Max Mustermann<br />
  Musterstraße 1<br />
  12345 Musterstadt
</p>
```

<br><br><br>

### \<hr\>: Die horizontale Trennlinie

Das `<hr>`-Tag (Horizontal Rule) ist ebenfalls ein leeres Element.

- **Was es macht:** Es signalisiert einen **thematischen Bruch** innerhalb deines Inhalts. Stell dir vor, du wechselst in einem Kapitel zu einem ganz neuen Gedanken oder einer neuen Szene.
- **Visueller Effekt:** Der Browser zeichnet standardmäßig eine horizontale Linie über die gesamte Breite der Seite.

**Beispiel:**

```html
<p>...und so endete die Geschichte des ersten Bäckers.</p>

<hr />

<h2>Ein neues Kapitel beginnt</h2>
<p>Der zweite Bäcker hatte eine ganz andere Idee...</p>
```
