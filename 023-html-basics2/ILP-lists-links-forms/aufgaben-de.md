## ### Deine interaktive Visitenkarte im Web 🖼️

Willkommen zu Deiner heutigen **I**ndividual **L**ning **P**hase (ILP)! Gestern hast Du das Skelett Deiner Webseite mit strukturiertem Text errichtet. Heute geben wir ihr Leben! Wir fügen die Elemente hinzu, die das Web wirklich ausmachen: **Links**, die uns mit der Welt verbinden, **Listen**, die unsere Inhalte ordnen, **Bilder**, die Blicke fesseln, und **Formulare**, die eine Konversation beginnen.

Deine Mission ist es, Deine statische HTML-Seite in eine dynamische, interaktive "Visitenkarte" zu verwandeln. Am Ende des Tages wirst Du eine Seite haben, die nicht nur informiert, sondern auch navigiert, zeigt und sogar zuhört.

**Deine Werkzeuge heute:** Dein Texteditor, Dein Browser und ein Ordner, in dem Du Deine `index.html` und bald auch Bilder speichern kannst.

**🕒 Geschätzte Gesamtdauer:** ca. 2,5 Stunden

---

### ## Teil 1: Strukturieren & Verknüpfen (Listen & Links)

**🎯 Lernziel:** Du kannst Inhalte semantisch korrekt in Listen gliedern und Hyperlinks erstellen, um zwischen internen und externen Ressourcen zu navigieren.

**Die praktischen Aufgaben (ca. 45 Min.)**
Arbeite weiter in Deiner `index.html`-Datei aus der letzten Lerneinheit.

1.  **Ordnung schaffen mit Listen:**
    * Erstelle unter Deiner `<h2>`-Überschrift "Über mich" eine **ungeordnete Liste** (`<ul>`). Fülle sie mit mindestens drei Listenelementen (`<li>`), die Deine Hobbys oder Interessen beschreiben.
    * Erstelle an einer anderen Stelle einen neuen Abschnitt (z.B. "Meine Top 3 Ziele") und verwende diesmal eine **geordnete Liste** (`<ol>`), um Deine Ziele in einer rangierten Reihenfolge aufzuzählen.
2.  **Die Welt vernetzen (Externe Links):**
    * Wähle ein Wort in einem Deiner Absätze und verwandle es in einen **Hyperlink** (`<a>`).
    * Dieser Link soll auf eine **externe Webseite** Deiner Wahl (z.B. Wikipedia oder Deine Lieblings-Website) verweisen. Recherchiere, wie das `href`-Attribut dafür aussehen muss.
3.  **Links optimieren (Attribute):**
    * Recherchiere das `target`-Attribut für Links. Modifiziere Deinen externen Link so, dass er sich beim Anklicken in einem **neuen Browser-Tab** öffnet.
    * Recherchiere, welche **zwei `rel`-Attribute** aus Sicherheits- und Performancegründen oft in Kombination mit dem Öffnen in einem neuen Tab verwendet werden, und füge sie hinzu.
4.  **Die Zukunft planen (Interne Links):**
    * Erstelle einen neuen Link, der als "Platzhalter" dient. Er soll den Text "Kontaktiere mich" tragen und auf eine zukünftige, noch nicht existierende Seite namens `kontakt.html` verweisen.

---

### ## Teil 2: Visualisieren (Bilder & Pfade)

**🎯 Lernziel:** Du kannst Bilder in Deine Webseite einbinden und verstehst den entscheidenden Unterschied zwischen relativen und absoluten Pfadangaben.

**Die praktischen Aufgaben (ca. 45 Min.)**

1.  **Vorbereitung:** Erstelle in Deinem Projektordner (wo Deine `index.html` liegt) einen **Unterordner** und nenne ihn `images`.
2.  **Das relative Bild:**
    * Finde ein Bild von Dir (oder ein beliebiges Platzhalter-Profilbild) und speichere es in Deinem neuen `images`-Ordner.
    * Füge dieses Bild nun mithilfe des `<img>`-Tags ganz oben auf Deiner Seite (z.B. unter der `<h1>`) ein. Du musst dafür einen **relativen Pfad** verwenden.
    * Recherchiere und implementiere die Attribute `alt` und `title` für Dein Bild. Formuliere für jedes Attribut einen passenden Text und verstehe den Unterschied in ihrer Funktion.
3.  **Das absolute Bild:**
    * Finde ein Bild online (z.B. über eine Bildersuche).
    * Binde dieses Bild an einer anderen Stelle Deiner Seite ein, aber diesmal, indem Du den **absoluten Pfad** (die volle `https://...` URL) im `src`-Attribut verwendest.


---

### ## Teil 3: Interagieren (Einfache Formulare)

**🎯 Lernziel:** Du kannst ein einfaches HTML-Formular erstellen, das Benutzereingaben mithilfe von Labels und Input-Feldern sammelt.

**Die praktischen Aufgaben (ca. 60 Min.)**
Erstelle einen neuen Hauptabschnitt am Ende Deiner Seite (z.B. unter einer `<h2>`-Überschrift "Schreib mir!").

1.  **Der Formular-Container:**
    * Erstelle das Grundgerüst eines Formulars mit dem `<form>`-Tag.
    * Recherchiere die Attribute `action` und `method`. Konfiguriere das Formular so, dass es seine Daten an eine Platzhalter-URL (`/submit-form`) sendet und dabei die **geeignete Methode für das Senden sensibler Daten** (wie Namen und E-Mails) verwendet.
2.  **Felder und Beschriftungen:**
    * Füge **zwei Eingabebereiche** in Dein Formular ein:
        * Ein Feld für den "Namen" (Typ: Text).
        * Ein Feld für die "E-Mail" (Typ: E-Mail).
    * Jedes `<input>`-Feld muss eine **korrekt verbundene Beschriftung** (`<label>`) haben. Recherchiere, wie die Attribute `for` und `id` zusammenspielen müssen, damit ein Klick auf das Label das Eingabefeld aktiviert.
3.  **Der Sende-Button:**
    * Füge am Ende des Formulars einen **Button** hinzu, der das Formular beim Anklicken abschickt. Der Button soll die Aufschrift "Nachricht senden" tragen.


---

### ## Deine Selbstreflexion 💡

Hervorragend! Du hast Deine statische Seite in ein lebendiges Dokument verwandelt, das Links, Bilder und Interaktion bietet. Nimm Dir einen Moment Zeit, um Deine Arbeit zu reflektieren:

* **Das Pfad-Problem:** Was war die größte Hürde beim Einbinden Deines lokalen Bildes? Hast Du den relativen Pfad (`images/bild.jpg`) sofort verstanden?
* **Die `for`/`id`-Verbindung:** Ist Dir der "magische Effekt" aufgefallen, als Du nach der korrekten Verknüpfung von `<label>` und `<input>` auf das Label geklickt hast?
* **Formular-Methoden:** Konntest Du den Unterschied zwischen `GET` und `POST` nachvollziehen und begründen, warum eine Methode für ein Kontaktformular besser geeignet ist?
* **Der nächste Schritt:** Wenn Du Dein Formular jetzt betrachtest – welches wichtige Feld fehlt Deiner Meinung nach (z.B. für die eigentliche Nachricht)? Wie würdest Du dieses Feld (für mehrzeiligen Text) wohl hinzufügen?