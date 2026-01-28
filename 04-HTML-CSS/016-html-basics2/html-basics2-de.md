# HTML Basics II: Listen, Links, Bilder und Formulare

Listen und Links

- Anlegen von nummerierten (\<ol>) und unnummerierten Listen (\<ul>), Listenelementen (\<li>)
- Einrichten von Hyperlinks (\<a>) mit Attributen wie href und target

Bilder einbinden

- Einfügen von Grafiken über das \<img>-Tag und Zuweisen von Attributen (src, alt, title)
- Richtiger Umgang mit relativen und absoluten Pfadangaben

Einfache Formulare erstellen

- Grundelemente eines Formulars (\<form>, \<input>, \<label>, \<button>)
- Senden von Daten durch einfache Formularbeispiele

<br><br><br>

# 🔗 Listen und Links

Mit Listen gibst du Inhalten eine klare Gliederung (wie bei einer Einkaufsliste oder einer Top-10-Rangliste). Mit Links (Hyperlinks) spinnst du das Netz und verbindest deine Seite mit anderen Seiten – sei es deine eigene "Über mich"-Seite oder eine ganz andere Webseite wie Google.

<br><br><br>

## 📋 Anlegen von Listen

Immer wenn du eine Aufzählung hast, solltest du HTML-Listen verwenden, anstatt einfach Sternchen oder Zahlen in einen `<p>`-Tag zu tippen. Der Grund ist die **Semantik**: Ein Browser und eine Suchmaschine _wissen_ dann, dass es sich um eine Liste handelt, was z.B. auch Screenreadern (Vorlese-Programmen) hilft.

Alle Listen, egal welchen Typs, verwenden den gleichen Tag für die einzelnen Einträge: `<li>` (List Item). Was sich ändert, ist der "Container" drumherum.

<br><br><br>

### 📝 Unnummerierte Listen (`<ul>`)

Eine unnummerierte Liste ist perfekt für Aufzählungen, bei denen die **Reihenfolge egal** ist. Stell dir eine Einkaufsliste vor: Ob du erst Milch oder erst Eier kaufst, ist egal.

- Der Container dafür heißt `<ul>` (Unordered List = Ungeordnete Liste).
- Jeder Punkt darin ist ein `<li>` (List Item).

**Visueller Effekt:** Der Browser macht daraus standardmäßig eine Liste mit Aufzählungspunkten (Bullet Points).

**Beispiel:**

```html
<h2>Meine Einkaufsliste</h2>
<ul>
  <li>Milch</li>
  <li>Eier</li>
  <li>Brot</li>
</ul>
```

<br><br><br>

### 🔢 Nummerierte Listen (`<ol>`)

Eine nummerierte Liste (oder geordnete Liste) nimmst du immer dann, wenn die **Reihenfolge wichtig** ist. Stell dir ein Rezept, eine Schritt-für-Schritt-Anleitung oder eine Top-3-Liste vor.

- Der Container dafür heißt `<ol>` (Ordered List = Geordnete Liste).
- Die Listeneinträge sind ebenfalls `<li>`.

**Der Clou:** Du musst die Zahlen nicht selbst eintippen\! Der Browser zählt für dich automatisch: 1., 2., 3. und so weiter. Wenn du später einen Punkt in der Mitte hinzufügst, korrigiert der Browser die gesamte Nummerierung.

**Beispiel:**

```html
<h2>Rezept: Pfannkuchen</h2>
<ol>
  <li>Mehl und Eier in eine Schüssel geben.</li>
  <li>Milch hinzufügen und rühren.</li>
  <li>In der Pfanne ausbacken.</li>
</ol>
```

<br><br><br>

<br><br><br>

## 🔗 Einrichten von Hyperlinks (`<a>`)

Ein Hyperlink ist das, was du anklickst, um zu einer anderen Seite zu springen. Der Tag dafür ist einer der wichtigsten im ganzen Web: der `<a>`-Tag.

Das "a" steht für **"Anchor"** (Anker). Ein `<a>`-Tag allein macht aber noch gar nichts. Er braucht "Zusatzinformationen", sogenannte **Attribute**.

<br><br><br>

### 🎯 Das `href`-Attribut (Das Ziel)

Das wichtigste Attribut ist `href`. Es steht für **H**ypertext **Ref**erence und gibt an, **wohin** der Link führen soll. Es ist die "Adresse" auf dem Briefumschlag.

- Der Text _zwischen_ `<a>` und `</a>` ist der Teil, der für den Benutzer klickbar ist (meist blau und unterstrichen).

**Beispiel 1: Ein externer Link**
Wenn du auf eine andere Webseite im Internet verlinkst (z.B. Google), musst du die volle Adresse mit `https://` (oder `http://`) angeben.

```html
<p>Die beste Suchmaschine ist <a href="https://www.google.de">Google</a>.</p>
```

**Beispiel 2: Ein interner Link (Relativer Link)**
Wenn du auf eine andere Seite _innerhalb deiner eigenen Webseite_ verlinkst (z.B. von deiner Startseite `index.html` auf deine `kontakt.html`), lässt du den Domain-Teil weg. Das nennt man einen relativen Pfad.

```html
<p>Besuche auch meine <a href="kontakt.html">Kontaktseite</a>!</p>
```

<br><br><br>

### 🖱️ Das `target`-Attribut (Das Zielfenster)

Das `target`-Attribut (Ziel) legt fest, _wie_ der Link geöffnet werden soll. Soll er im selben Tab öffnen oder in einem neuen?

Hier sind die beiden wichtigsten Werte für `target`:

| `target`-Wert | Verhalten                                                     | Wann verwendet man das?                                                                                            |
| :------------ | :------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| **`_self`**   | (Standard) Der Link öffnet sich im **aktuellen Browser-Tab**. | Immer, wenn du _innerhalb_ deiner eigenen Webseite navigierst (z.B. von "Home" zu "Kontakt").                      |
| **`_blank`**  | Der Link öffnet sich in einem **neuen, leeren Browser-Tab**.  | Fast immer, wenn du auf eine **externe Webseite** verlinkst. Der Vorteil: Der Besucher verlässt deine Seite nicht. |

**Beispiel für `target="_blank"`:**

```html
<p>
  Besuche
  <a href="https://www.wikipedia.org" target="_blank">Wikipedia</a> (öffnet in
  neuem Tab).
</p>
```

<br><br><br>

### 🔒 Wichtiger Sicherheitshinweis zu `target="_blank"`

Wenn du `target="_blank"` benutzt, solltest du aus Sicherheitsgründen **immer** auch `rel="noopener noreferrer"` hinzufügen.

```html
<a href="https://www.externe-seite.de" target="_blank" rel="noopener noreferrer"
  >Externer Link</a
>
```

- **Warum?** Es verhindert, dass die neu geöffnete Seite (die du nicht kontrollierst) über das Browser-Fenster Zugriff auf deine ursprüngliche Seite bekommt. Es ist eine einfache, aber wichtige Sicherheitsmaßnahme, die du dir am besten direkt angewöhnst.

  <br>
  <br>
  <br>

# 🖼️ Bilder einbinden

Um ein Bild in HTML anzuzeigen, verwenden wir den `<img>`-Tag. Das ist einer der wichtigsten Tags überhaupt.

Eine Besonderheit beim `<img>`-Tag ist: Er ist ein sogenanntes **"leeres Element" (void element)**. Genau wie `<br>` oder `<hr>` hat er keinen Inhalt, den er umschließen könnte, und braucht daher **keinen schließenden Tag** (wie `</img>`). Er steht einfach für sich selbst.

Damit der Browser aber weiß, _welches_ Bild er anzeigen soll und _wie_ er es behandeln muss, braucht der `<img>`-Tag unbedingt Zusatzinformationen. Diese nennen wir **Attribute**.

<br><br><br>

## 🏷️ Einfügen von Grafiken über das `<img>`-Tag und Zuweisen von Attributen

Stell dir den `<img>`-Tag wie einen leeren Bilderrahmen vor. Die Attribute sind die Anweisungen, die du dem Browser gibst, um diesen Rahmen zu füllen.

<br><br><br>

### 📍 Das `src`-Attribut (Die Quelle)

Das **`src`**-Attribut ist das absolut wichtigste Attribut. Es steht für **"Source"** (Quelle).

- **Zweck:** Es teilt dem Browser mit, **WO** das Bild zu finden ist. Es ist die Adresse oder der Pfad zur Bilddatei.
- **Ohne `src`** kann der Browser nichts anzeigen.

```html
<img src="katzenfoto.jpg" />
```

<br><br><br>

### 💬 Das `alt`-Attribut (Der Alternativtext)

Das **`alt`**-Attribut ist das zweitwichtigste Attribut und sollte **niemals fehlen**. Es steht für **"Alternative Text"**.

- **Zweck:** Es liefert eine kurze, präzise **Beschreibung** dessen, was auf dem Bild zu sehen ist.
- Dieses Attribut ist aus drei Gründen entscheidend:
  1.  **Barrierefreiheit (Accessibility):** Screenreader, also Programme, die Blinden oder sehbehinderten Menschen die Webseite vorlesen, lesen den `alt`-Text vor. Ohne ihn wüsste die Person nicht, was auf dem Bild ist.
  2.  **Fehlerbehandlung:** Wenn der Bildpfad (im `src`-Attribut) falsch ist oder das Bild aus einem anderen Grund nicht geladen werden kann, zeigt der Browser stattdessen den `alt`-Text an.
  3.  **SEO (Suchmaschinenoptimierung):** Google und andere Suchmaschinen können (noch) nicht perfekt sehen. Sie nutzen den `alt`-Text, um zu verstehen, was auf deinem Bild ist, und es in der Bildersuche besser zu platzieren.

```html
<img
  src="welpe.jpg"
  alt="Ein kleiner Golden Retriever-Welpe sitzt im grünen Gras" />
```

<br><br><br>

### 🖱️ Das `title`-Attribut (Der Titel)

Das **`title`**-Attribut ist eine optionale Zusatzinformation.

- **Zweck:** Es liefert zusätzliche, oft nicht-kritische Informationen zum Bild.
- **Visueller Effekt:** Die meisten Browser zeigen den Inhalt des `title`-Attributs als kleines "Tooltip"-Fenster an, wenn ein Benutzer mit der Maus einen Moment lang über dem Bild schwebt.
- **Unterschied zu `alt`:** `alt` beschreibt, _was_ es ist (wichtig\!). `title` gibt _Zusatzinfo_ (optional).

```html
<img
  src="paris-eiffelturm.jpg"
  alt="Der Eiffelturm in Paris bei Nacht"
  title="Aufgenommen auf meiner Reise im Jahr 2024" />
```

<br><br><br>

## 🧭 Richtiger Umgang mit relativen und absoluten Pfadangaben

Das `src`-Attribut (genau wie das `href`-Attribut bei Links) braucht einen Pfad. Hierbei gibt es zwei grundlegend unterschiedliche Arten von "Wegbeschreibungen", die du dem Browser geben kannst.

Stell dir vor, deine HTML-Datei ist dein "Zuhause".

<br><br><br>

### 🏠 Relative Pfade (Interne Bilder)

Ein relativer Pfad beschreibt den Weg zu einer Datei **in Relation zu deinem aktuellen Standort** (deiner HTML-Datei). Das ist die Standardmethode für alle Bilder, die zu deinem eigenen Webprojekt gehören.

Der große Vorteil: Wenn du deinen gesamten Projektordner auf einen Server lädst oder an einen Freund schickst, funktionieren alle Pfade weiterhin, weil die Relation der Dateien zueinander gleich bleibt.

Hier sind die drei wichtigsten Szenarien:

| Szenario | Ordner-Struktur (Dein "Zuhause" ist `index.html`) | Code-Beispiel (in `index.html`) | Erklärung (Die Wegbeschreibung) |
| :------------- <img src="./public/ctf-info11.png" alt="ctf">------------------------- | :-------------------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------------------------------------- |
| **Bild im selben Ordner** | `projekt/`<br> `├── index.html`<br> `└── logo.png` | `<img src="logo.png">` | "Nimm die Datei `logo.png` direkt hier aus diesem Raum." |
| **Bild in einem Unterordner** | `projekt/`<br> `├── index.html`<br> `└── images/`<br> `└── katze.png` | `<img src="images/katze.png">` | "Geh in den Ordner `images` und nimm dort die Datei `katze.png`." |
| **Bild in einem übergeordneten Ordner** | `projekt/`<br> `├── logo.png`<br> `└── html/`<br> `└── index.html` | `<img src="../logo.png">` | "Geh eine Ebene **rauf** (aus dem `html`-Ordner raus) und nimm dort die Datei `logo.png`." |

<br><br><br>

### 🌍 Absolute Pfade (Externe Bilder)

Ein absoluter Pfad ist die **vollständige, weltweite Adresse** einer Datei im Internet. Er beginnt immer mit `https://` (oder `http://`).

Du benutzt ihn, um Bilder anzuzeigen, die auf einer **völlig anderen Webseite** liegen (man nennt das auch "Hotlinking").

```html
<img
  src="https://upload.wikimedia.org/wikipedia/commons/3/30/Vulpes_vulpes_ssp_fulvus_in_NW_USA.jpg"
  alt="Ein Rotfuchs sitzt auf einem Baumstamm" />
```

**Wichtige Warnungen bei absoluten Pfaden:**

1.  **Urheberrecht:** Dir gehört das Bild nicht\! Du musst absolut sicher sein, dass du die Erlaubnis hast, das Bild auf deiner Seite einzubinden.
2.  **Abhängigkeit:** Wenn die andere Webseite das Bild löscht, umbenennt oder ihre Domain ändert, ist das Bild auf deiner Seite kaputt (und zeigt nur den `alt`-Text).
3.  **Traffic:** Du verbrauchst die Ladekapazität (Bandbreite) des fremden Servers. Manche Seiten blockieren dies technisch.

<br>
<br>
<br>

# 📝 Einfache Formulare erstellen

Wir schauen uns an, wie wir dem Browser sagen, dass wir Daten sammeln wollen und welche Werkzeuge wir dafür brauchen.

<br><br><br>

## 🧱 Grundelemente eines Formulars

Ein Formular besteht immer aus mehreren Teilen: dem "Behälter" (`<form>`), den "Beschriftungen" (`<label>`), den "Eingabefeldern" (`<input>`) und einem "Absendeknopf" (`<button>`).

<br><br><br>

### 📦 Das `<form>`-Element: Der Behälter

Stell dir den `<form>`-Tag wie einen **Briefumschlag** oder einen **Versandkarton** vor.

Alles, was zum Formular gehört (alle Eingabefelder, Knöpfe etc.), muss _in_ diesen `<form>`...`</form>`-Container hinein. Für sich allein ist der `<form>`-Tag unsichtbar.

Er braucht aber zwei super wichtige Attribute (Zusatzinfos), um zu wissen, was er tun soll:

1.  **`action` (Aktion):** Das ist die "Adresse", an die der Briefumschlag geschickt wird. Hier steht die URL oder der Dateipfad des Serverskripts (z.B. eine PHP-, Python- oder Node.js-Datei), das die Daten empfangen und verarbeiten soll. Beispiel: `action="/verarbeite-login.js"`
2.  **`method` (Methode):** Das ist die "Versandart". Sie legt fest, _wie_ die Daten verschickt werden. Die beiden wichtigsten Methoden sind `GET` und `POST`. (Mehr dazu gleich\!)

```html
<form action="/suche" method="GET"></form>
```

<br><br><br>

### 🏷️ Das `<label>`-Element: Die Beschriftung

Ein `<label>` (Etikett, Beschriftung) ist der Text, der dem Benutzer sagt, **was** er in ein Feld eintragen soll. (z.B. "Benutzername:", "E-Mail:").

Du könntest zwar auch einfach einen `<p>`-Tag nehmen, aber `<label>` ist viel besser. Warum? Wegen der Barrierefreiheit und der Benutzerfreundlichkeit\!

Ein `<label>` wird mit einem Eingabefeld über das `for`-Attribut verknüpft. Der Wert im `for`-Attribut muss exakt derselbe sein wie der Wert im `id`-Attribut des `<input>`-Feldes.

**Der magische Effekt:**

1.  Ein Screenreader (Vorlese-Software für Blinde) weiß jetzt, dass die Beschriftung "E-Mail:" zum E-Mail-Eingabefeld gehört.
2.  Noch cooler: Wenn ein Benutzer **auf das Label-Wort klickt**, springt der Cursor automatisch in das zugehörige Eingabefeld. Das ist super praktisch, besonders auf Handys\!

```html
<label for="username">Benutzername:</label> <input type="text" id="username" />
```

<br><br><br>

### ⌨️ Das `<input>`-Element: Das Eingabefeld

Das `<input>`-Tag ist das "Arbeitspferd" jedes Formulars. Es ist ein leeres Element, braucht also keinen schließenden Tag. Es ist unglaublich vielseitig und ändert sein Aussehen und Verhalten je nach seinem wichtigsten Attribut: `type`.

**Wichtige Attribute für `<input>`:**

- **`type`:** Legt fest, welche Art von Eingabe erwartet wird.
- **`id`:** Ein **einzigartiger Name** für dieses Element auf der Seite. Wird (wie oben gesehen) für das `<label for="...">` gebraucht.
- **`name`:** Das ist der **Schlüssel** für die Daten. Das ist der Name, unter dem der Server die Daten empfängt. Wenn du `name="email"` angibst und der User "test@mail.de" eingibt, empfängt der Server: `email=test@mail.de`. **Ohne `name`-Attribut werden die Daten nicht gesendet\!**

**Die häufigsten `type`-Werte:**

| `type` Wert | Beschreibung                                                                                                                                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `text`      | Das Standard-Eingabefeld für einzeiligen Text (z.B. Name, Benutzername).                                                                    |
| `password`  | Wie `text`, aber die Eingabe wird mit Punkten (•••••) maskiert.                                                                             |
| `email`     | Ein Textfeld, das auf dem Handy eine spezielle Tastatur (mit @) anzeigt und prüft, ob die Eingabe wie eine E-Mail aussieht.                 |
| `checkbox`  | Eine Checkbox zum An- und Abwählen (z.B. "AGB gelesen").                                                                                    |
| `radio`     | Ein Radio-Button (Optionsfeld). Wenn mehrere denselben `name` haben, kann immer nur einer ausgewählt werden (z.B. "männlich" / "weiblich"). |
| `number`    | Ein Feld, das nur Zahlen akzeptiert und oft kleine Pfeile zum Hoch- und Runterzählen anzeigt.                                               |
| `submit`    | (Veraltet, aber funktioniert noch) Zeigt einen Klick-Button an, der das Formular abschickt.                                                 |

<br><br><br>

### 🖱️ Das `<button>`-Element: Der Absendeknopf

Jedes Formular braucht einen Knopf, um es abzuschicken. Heute verwendet man dafür am besten den `<button>`-Tag.

Standardmäßig verhält sich ein `<button>` _innerhalb_ eines `<form>`-Tags automatisch wie ein Absende-Button (`type="submit"`).

```html
<button type="submit">Jetzt Senden</button>
```

- `type="submit"`: (Standard) Löst das `action`-Ereignis des Formulars aus und schickt die Daten ab.
- `type="reset"`: Löscht alle Eingaben im Formular und setzt es auf den Standard zurück (wird heute seltener benutzt).
- `type="button"`: Ein "dummer" Knopf, der nichts tut. Er ist für JavaScript gedacht.

<br><br><br>

## 📤 Senden von Daten durch einfache Formularbeispiele

Okay, lass uns die Versandarten `GET` und `POST` genauer ansehen, die wir im `<form method="...">` festlegen.

<br><br><br>

### 📬 Das `method`-Attribut: GET vs. POST

Die Wahl der Methode ist entscheidend für die Sicherheit und Funktionsweise deines Formulars.

| Eigenschaft                    | `method="GET"` (Die Postkarte)                                                      | `method="POST"` (Der Briefumschlag)                                                                                                              |
| :----------------------------- | :---------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Wie werden Daten gesendet?** | Die Daten werden **sichtbar an die URL angehängt**. (z.B. `.../suche?q=Katzen`)     | Die Daten werden **unsichtbar im "Körper" (Body) der Anfrage** mitgeschickt.                                                                     |
| **Sichtbarkeit**               | **Jeder** kann die Daten in der URL, im Browserverlauf und in Server-Logs sehen.    | **Unsichtbar.** Die Daten stehen nicht in der URL.                                                                                               |
| **Limit**                      | Die Länge der URL ist begrenzt (ca. 2000 Zeichen). Nur für kleine Datenmengen.      | Keine nennenswerte Begrenzung. Gut für große Datenmengen (z.B. Dateiuploads).                                                                    |
| **Sicherheit**                 | **Absolut unsicher\!** Niemals für Passwörter oder private Daten verwenden.         | **Sicherer.** Das ist die Standardmethode für Logins, Kontaktformulare und alles Private. (Für echte Sicherheit _immer_ mit HTTPS kombinieren\!) |
| **Anwendungsfall**             | **Suchen**, Filtern, Lesezeichen setzen. (Eine Google-Suche ist ein `GET`-Request). | **Senden**, Erstellen, Ändern. (Logins, Registrierung, Kontaktformulare).                                                                        |

<br><br><br>

### ✉️ Beispiel 1: Kontaktformular mit `POST`

Hier siehst du, wie alle Teile zusammenarbeiten. Wir verwenden `POST`, weil Namen und E-Mails privat sind.

```html
<form action="/skript/kontakt.js" method="POST">
  <div>
    <label for="nutzername">Dein Name:</label>
    <input type="text" id="nutzername" name="benutzer_name" />
  </div>

  <div>
    <label for="mail">Deine E-Mail:</label>
    <input type="email" id="mail" name="user_email" />
  </div>

  <div>
    <label for="nachricht">Deine Nachricht:</label>
    <textarea id="nachricht" name="user_nachricht" rows="5"></textarea>
  </div>

  <div>
    <button type="submit">Nachricht absenden</button>
  </div>
</form>
```

<br><br><br>

### 🔍 Beispiel 2: Suchformular mit `GET`

Hier verwenden wir `GET`, weil die Suche nicht geheim ist und die URL geteilt werden soll.

```html
<form action="/suche" method="GET">
  <label for="suchfeld">Suche:</label>
  <input type="text" id="suchfeld" name="q" />
  <button type="submit">Suchen</button>
</form>
```

Wenn du hier "Katzenvideos" eingibst und abschickst, ändert sich die URL in deinem Browser zu: `https://www.deine-seite.de/suche?q=Katzenvideos`. Du siehst die Daten (Schlüssel `q`, Wert `Katzenvideos`) direkt in der Adresszeile\!

<br>
<br>
<br>
