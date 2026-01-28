## ### HTML-Meisterklasse: Interaktive & Semantische Strukturen 🚀

Willkommen zu Deiner heutigen **I**ndividual **L**ning **P**hase (ILP) für Fortgeschrittene! Du weißt bereits, was ein `<a>`-Tag ist und wie man ein Bild einfügt. Heute gehen wir einen entscheidenden Schritt weiter. Es geht nicht mehr nur darum, *dass* etwas funktioniert, sondern *wie* es funktioniert – und zwar professionell, semantisch korrekt und im Hinblick auf komplexe Strukturen.

Deine Mission ist es, eine "Projekt-Showcase"-Seite zu entwerfen. Dabei wirst Du Navigationselemente erstellen, die über reine Listen hinausgehen, Bilder als interaktive Elemente nutzen und Formulare entwerfen, die nicht nur Daten sammeln, sondern diese auch intelligent strukturieren. Wir legen den Fokus auf die *Architektur* Deiner HTML-Seite.

**Deine Werkzeuge heute:** Dein Texteditor, Dein Browser, die Browser-Entwicklertools (F12) und Deine Fähigkeit zur Recherche in technischen Dokumentationen (z.B. MDN Web Docs).

**🕒 Geschätzte Gesamtdauer:** ca. 2,5 Stunden

---

### ## Teil 1: Komplexe Navigation & Pfad-Management

**🎯 Lernziel:** Du kannst komplexe, verschachtelte Listen für die Navigation verwenden und verwaltest eine professionelle Ordnerstruktur mit relativen Pfaden.

**Die Architektur-Aufgaben (ca. 60 Min.)**

1.  **Die Ordnerstruktur aufsetzen:**
    * Erstelle eine saubere Projektstruktur. Dein Hauptordner soll `projekt-showcase` heißen.
    * Darin erstellst Du eine `index.html` (Deine Hauptseite).
    * Erstelle einen Unterordner `assets` und darin einen weiteren Unterordner `img`.
    * Erstelle einen weiteren Unterordner `pages` und lege darin eine (leere) `kontakt.html` an.
2.  **Verschachtelte Navigations-Liste:**
    * Erstelle in Deiner `index.html` eine Hauptnavigation.
    * Diese Navigation soll eine **verschachtelte (nested) ungeordnete Liste** sein.
    * Die Hauptpunkte sollen "Home", "Projekte" und "Kontakt" sein.
    * Der Punkt "Projekte" soll selbst eine Unter-Liste enthalten mit den Punkten "Projekt Alpha" und "Projekt Beta".
3.  **Fortgeschrittene Verlinkung:**
    * Mache alle Navigationspunkte zu klickbaren Links (`<a>`).
    * "Home" soll auf `index.html` verweisen.
    * "Kontakt" soll auf Deine (noch leere) `kontakt.html` im `pages`-Ordner verweisen. (Achtung, relativer Pfad!)
    * Die "Projekt"-Links sollen **Seiten-interne Anker-Links** sein. Sie sollen zu Abschnitten weiter unten auf der `index.html`-Seite springen, die Du noch erstellen wirst (z.B. zu `<section id="projekt-alpha">`).
    * Füge einen externen Link (z.B. zu einem GitHub-Profil) hinzu. Recherchiere und implementiere die Attribute `target` und `rel`, um diesen Link sicher in einem neuen Tab zu öffnen.

---

### ## Teil 2: Bilder als interaktive Elemente

**🎯 Lernziel:** Du kannst Bilder semantisch korrekt einbinden, ihre Attribute meisterhaft nutzen und sie als klickbare Elemente in eine Struktur integrieren.

**Die Praxis-Aufgaben (ca. 45 Min.)**
Erstelle nun die in Teil 1 verlinkten Projekt-Abschnitte auf Deiner `index.html`.

1.  **Projekte-Sektionen erstellen:**
    * Erstelle zwei Abschnitte mit den IDs, die Du oben verlinkt hast (`id="projekt-alpha"` und `id="projekt-beta"`).
2.  **Relative Bildpfade:**
    * Lade zwei beliebige "Projekt-Screenshots" (Platzhalterbilder) herunter und speichere sie in Deinem `assets/img`-Ordner.
    * Binde in jedem Projekt-Abschnitt eines dieser Bilder ein. Du musst dafür den korrekten **relativen Pfad** aus der `index.html` heraus finden.
3.  **Semantische Attribute (`alt` vs. `title`):**
    * Recherchiere den genauen **semantischen Unterschied** zwischen dem `alt`- und dem `title`-Attribut.
    * Schreibe für eines Deiner Bilder einen exzellenten, beschreibenden `alt`-Text (im Sinne der Barrierefreiheit) UND einen davon abweichenden, informativen `title`-Text (für den Mouse-Hover-Tooltip).
4.  **Bilder als Links:**
    * Mache eines der Projekt-Bilder selbst zu einem klickbaren Link, der auf eine externe URL (z.B. eine "Live-Demo" auf `github.io`) verweist.

---

### ## Teil 3: Das intelligente Anfrage-Formular

**🎯 Lernziel:** Du kannst ein semantisch reiches Formular mit verschiedenen Eingabetypen erstellen und die Unterschiede der Sende-Methoden analysieren.

**Die Formular-Aufgaben (ca. 45 Min.)**
Arbeite nun in Deiner `kontakt.html`-Datei.

1.  **Formular-Design (`GET` vs. `POST`):**
    * Erstelle auf der Seite ein "Projekt-Anfrage"-Formular.
    * Konfiguriere das `<form>`-Attribut `method`. Recherchiere den Unterschied zwischen `GET` und `POST` und wähle die Methode, die für den Versand von potenziell sensiblen Daten (Name, E-Mail) geeignet ist.
2.  **Semantische Felder (`label`, `id`, `name`):**
    * Baue ein Formular, das die folgenden Felder enthält. Stelle sicher, dass jedes Eingabefeld ein korrekt verknüpftes `<label>` (mittels `for`/`id`) und ein `name`-Attribut für den Datenversand besitzt:
        * Ein Feld für den Namen (`type="text"`)
        * Ein Feld für die E-Mail (`type="email"`)
        * Eine **Radio-Button-Gruppe** (z.B. "Art der Anfrage" mit den Optionen "Angebot" und "Allgemeine Frage"). Recherchiere, wie das `name`-Attribut hier verwendet werden muss, damit nur eine Option wählbar ist.
        * Ein **mehrzeiliges Textfeld** für die eigentliche Nachricht. (Recherchiere das dafür notwendige HTML-Tag).
        * Eine **Checkbox**, mit der der Benutzer die "Datenschutzbestimmungen" akzeptieren muss.
        * Ein **Sende-Button** mit der Aufschrift "Anfrage abschicken".

---

### ## Deine Selbstreflexion 💡

Exzellent! Du hast heute eine komplexe, mehrteilige Web-Struktur entworfen und dabei professionelle Techniken angewendet. Nimm Dir einen Moment Zeit für Deine Reflexion:

* **Pfad-Navigation:** Wie sicher hast Du Dich gefühlt, als Du den relativen Pfad von `index.html` zu `pages/kontakt.html` und zu `assets/img/bild.jpg` navigieren musstest?
* **Semantische Tiefe:** Was war die wichtigste Erkenntnis beim Vergleich von `alt` vs. `title` oder bei der Konfiguration der `name`-Attribute für Deine Radio-Buttons?
* **Das große Ganze:** Konntest Du nachvollziehen, wie alle Teile (interne Links in der Navi, `id`-Attribute an den Sektionen, Bilder in den Sektionen) zusammenspielen, um eine funktionierende Single-Page-Navigation zu erstellen?
* **Offene Fragen:** Welches Formular-Element (`<input>`-Typ) würdest Du als Nächstes recherchieren wollen, um Dein Formular noch professioneller zu gestalten?