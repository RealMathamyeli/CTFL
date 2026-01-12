# JavaScript Überblick
- Historische Entwicklung und Bedeutung
- Typische Anwendungsgebiete von JavaScript

Vorbereitung der Entwicklungsumgebung
- Übersicht empfohlener Browser und deren DevTools
- Installation und grundlegende Bedienung eines Code-Editors (z.B. VS Code)

Erstes JavaScript-Programm
- Einbindung von JavaScript in HTML
- Ausführen und Testen erster einfacher Skripte


<br><br><br>

## Historische Entwicklung und Bedeutung

Stell dir vor, das Internet in den frühen 90ern war wie eine Zeitung. Du konntest Texte lesen und Bilder ansehen, aber du konntest nichts damit machen. Es war statisch, also unbeweglich und nicht interaktiv. Das wollten die Entwickler von Webbrowsern ändern.

<br><br><br>

### Die Geburt von "Mocha" (1995)

Im Jahr 1995 arbeitete ein Programmierer namens Brendan Eich bei der Firma Netscape, die den damals beliebtesten Browser "Netscape Navigator" entwickelte. Er bekam den Auftrag, eine neue, einfache Programmiersprache zu entwickeln, die direkt im Browser laufen sollte. Das Ziel war es, Webseiten lebendig zu machen.

Das Unglaubliche ist: **Er entwickelte die erste Version dieser Sprache in nur 10 Tagen!**

Zuerst nannte er sie "Mocha", dann wurde sie kurz in "LiveScript" umbenannt. Zu dieser Zeit war eine andere Programmiersprache namens "Java" extrem populär. Aus Marketinggründen entschied sich Netscape, die Sprache in "JavaScript" umzubenennen, um vom Hype um Java zu profitieren.

**Wichtiger Hinweis:** Das ist eine der größten Verwirrungen in der Programmierung! **JavaScript hat so gut wie nichts mit Java zu tun.** Es sind zwei völlig unterschiedliche Sprachen, so wie ein Hamster nichts mit einer Hauskatze zu tun hat, auch wenn beide Haustiere sein können.

<br><br><br>

### Der erste Browserkrieg und die Standardisierung (Ende der 1990er)

Microsoft erkannte das Potenzial und baute seine eigene Version von JavaScript für den Internet Explorer. Sie nannten sie "JScript". Das Problem war, dass JScript und JavaScript nicht zu 100 % kompatibel waren. Webentwickler mussten also oft Code für jeden Browser extra schreiben, was sehr mühsam war.

Um dieses Chaos zu beenden, wurde JavaScript bei einer internationalen Organisation zur Standardisierung eingereicht, der **ECMA** (European Computer Manufacturers Association). Diese Organisation veröffentlichte einen Standard für die Sprache, der **ECMAScript** genannt wird.

JavaScript ist also sozusagen der Markenname für die beliebteste Umsetzung dieses ECMAScript-Standards. Wenn du heute von neuen Versionen wie ES6, ES2015, ES2020 usw. hörst, sind das einfach neue Versionen des ECMAScript-Standards, die neue Funktionen für die Sprache definieren.

<br><br><br>

### Die Renaissance und die Macht von AJAX (Mitte der 2000er)

Lange Zeit wurde JavaScript nur für kleine Spielereien wie blinkende Texte oder das Überprüfen von Formulareingaben genutzt. Das änderte sich Mitte der 2000er Jahre mit der Einführung von **AJAX** (Asynchronous JavaScript and XML).

Stell es dir so vor: Früher musstest du, wenn du auf einen Link auf einer Webseite geklickt hast, immer warten, bis die komplette neue Seite geladen wurde. Das war langsam und hat die Nutzererfahrung unterbrochen.

Mit AJAX konnte JavaScript nun im Hintergrund Daten vom Server anfordern und Teile einer Webseite aktualisieren, **ohne die ganze Seite neu laden zu müssen**.

Ein perfektes Beispiel dafür ist Google Maps. Wenn du die Karte verschiebst, werden nur die neuen Kartenausschnitte nachgeladen, nicht die gesamte Seite. Das war revolutionär und hat den Weg für moderne, komplexe Webanwendungen geebnet, wie wir sie heute von Facebook, Gmail oder Twitter kennen.

<br><br><br>

### Das moderne Zeitalter: Node.js und Frameworks (Ab 2009)

Der nächste große Sprung kam 2009 mit der Veröffentlichung von **Node.js**. Bis dahin konnte JavaScript nur in einem Webbrowser ausgeführt werden. Node.js ist eine Laufzeitumgebung, die es ermöglicht, JavaScript-Code direkt auf einem Computer oder Server auszuführen – also **außerhalb des Browsers**.

Plötzlich konnte man mit JavaScript nicht nur das "Frontend" (was der Benutzer im Browser sieht) gestalten, sondern auch das "Backend" (die Serverlogik, Datenbanken, Benutzerverwaltung etc.). JavaScript wurde zu einer "Full-Stack"-Sprache.

Gleichzeitig wurden die Webanwendungen immer komplexer. Um diese Komplexität zu bewältigen, entstanden sogenannte **Frameworks und Bibliotheken**. Das sind im Grunde Werkzeugkästen und vorgefertigte Bausteine, die Entwicklern helfen, schneller und strukturierter zu programmieren. Die bekanntesten sind heute:

*   **React** (entwickelt von Facebook)
*   **Angular** (entwickelt von Google)
*   **Vue.js** (entwickelt von der Community)

<br><br><br>

### Die heutige Bedeutung

Heute ist JavaScript eine der wichtigsten und am weitesten verbreiteten Programmiersprachen der Welt. Ihre Bedeutung lässt sich kaum überschätzen:

| Aspekt | Erklärung |
| :--- | :--- |
| **Die Sprache des Webs** | Jeder moderne Webbrowser versteht JavaScript. Es ist die einzige Sprache, die ohne zusätzliche Plugins direkt im Browser des Nutzers ausgeführt werden kann. Sie bildet zusammen mit HTML (Struktur) und CSS (Design) die drei Säulen des modernen Internets. |
| **Unglaubliche Vielseitigkeit** | Wie du gleich sehen wirst, kann man mit JavaScript fast alles machen: Webseiten, Server, mobile Apps, Desktop-Programme und sogar Roboter steuern. |
| **Riesige Community** | Es gibt Millionen von JavaScript-Entwicklern weltweit. Das bedeutet, es gibt unzählige Anleitungen, Kurse, Foren und fertige Code-Pakete (über `npm`, den Node Package Manager), die einem die Arbeit erleichtern. |
| **Ständige Weiterentwicklung** | Durch den ECMAScript-Standard wird die Sprache jedes Jahr um neue, nützliche Funktionen erweitert und bleibt so modern und leistungsfähig. |

<br><br><br>

## Typische Anwendungsgebiete von JavaScript

JavaScript ist wie ein Schweizer Taschenmesser für Programmierer. Hier sind die wichtigsten Bereiche, in denen es heute eingesetzt wird:

<br><br><br>

### Interaktive Webseiten (Frontend-Entwicklung)

Das ist der klassische und bekannteste Anwendungsbereich. Immer wenn auf einer Webseite etwas passiert, ohne dass sie neu lädt, ist fast sicher JavaScript im Spiel.

*   **Beispiele:**
    *   Überprüfung von Formulareingaben (z.B. "Diese E-Mail-Adresse ist ungültig!").
    *   Ein- und Ausblenden von Menüs und Elementen.
    *   Interaktive Karten (Google Maps).
    *   Slider und Bildergalerien.
    *   Spiele, die direkt im Browser laufen.
    *   Aktualisierung von Inhalten in Echtzeit (z.B. ein News-Ticker oder Social-Media-Feeds).

<br><br><br>

### Server-Anwendungen (Backend-Entwicklung)

Dank **Node.js** kann JavaScript auch die Aufgaben übernehmen, die traditionell Sprachen wie PHP, Python oder Java erledigt haben. Das Backend ist quasi das Herz und Gehirn einer Anwendung.

*   **Aufgaben des Backends:**
    *   Kommunikation mit der Datenbank (Daten speichern, lesen, aktualisieren, löschen).
    *   Benutzerverwaltung (Registrierung, Login, Passwörter verwalten).
    *   Bereitstellung von Daten für das Frontend (z.B. über eine sogenannte API).
    *   Ausführung komplexer Geschäftslogik.
*   **Bekannte Technologie:** Das Framework **Express.js** wird sehr häufig zusammen mit Node.js verwendet, um die Erstellung von Server-Anwendungen zu vereinfachen.

<br><br><br>

### Mobile Apps

Du kannst mit JavaScript auch Apps für iOS und Android entwickeln. Dabei schreibt man den Code einmal in JavaScript und ein Framework übersetzt ihn dann so, dass er auf beiden Plattformen läuft.

*   **Vorteil:** Man muss nicht zwei separate Apps (eine in Swift/Objective-C für iOS, eine in Kotlin/Java für Android) entwickeln, was Zeit und Geld spart.
*   **Bekannte Technologien:**
    *   **React Native:** Ermöglicht die Erstellung von Apps, die sich wie "echte" native Apps anfühlen und verhalten. Instagram und Airbnb nutzen es.
    *   **NativeScript:** Ein ähnlicher Ansatz wie React Native.
    *   **Progressive Web Apps (PWAs):** Das sind im Grunde Webseiten, die sich wie Apps verhalten. Sie können auf dem Homescreen installiert werden, Offline-Funktionen haben und Push-Benachrichtigungen senden.

<br><br><br>

### Desktop-Anwendungen

Ja, sogar klassische Programme für Windows, macOS und Linux können mit JavaScript geschrieben werden! Hierbei wird die Webanwendung (geschrieben in HTML, CSS und JS) in eine Art Mini-Browser verpackt, der wie ein normales Programm aussieht.

*   **Bekannte Technologie:** **Electron** ist das führende Framework dafür.
*   **Berühmte Beispiele, die mit Electron gebaut wurden:**
    *   **Visual Studio Code** (einer der beliebtesten Code-Editoren)
    *   **Slack** (Kommunikations-Tool)
    *   **Discord** (Chat für Gamer)
    *   **WhatsApp Desktop**

<br><br><br>

### Spieleentwicklung

Auch wenn große AAA-Spiele meist in C++ geschrieben werden, hat JavaScript auch hier seine Nische.

*   **Browser-Spiele:** Mit HTML5 (dem `<canvas>`-Element) und JavaScript-Bibliotheken wie **Three.js** (für 3D) oder **Phaser** (für 2D) können beeindruckende Spiele direkt im Browser erstellt werden.
*   **Spiele-Engines:** Einige Engines verwenden JavaScript als Skriptsprache, um das Verhalten von Spielobjekten zu steuern.

<br><br><br>

###     Internet of Things (IoT) und Robotik

Das ist ein eher neuer, aber wachsender Bereich. Mit speziellen Frameworks kann JavaScript auf winzigen Mikrocontrollern (wie z.B. dem Raspberry Pi oder Arduino) laufen, um Hardware zu steuern.

*   **Bekannte Technologie:** **Johnny-Five** ist eine beliebte JavaScript-Bibliothek für Robotik und IoT.
*   **Beispiele:**
    *   Eine Drohne mit JavaScript steuern.
    *   Eine Wetterstation bauen, die ihre Daten an eine Webseite sendet.
    *   Lichter und andere Geräte im Smart Home automatisieren.

<br><br><br>

###  Übersichtstabelle der Anwendungsgebiete

| Anwendungsgebiet | Typische Technologie / Framework | Konkretes Beispiel |
| :--- | :--- | :--- |
| **Frontend (Web)** | React, Angular, Vue.js | Ein interaktiver Warenkorb in einem Onlineshop. |
| **Backend (Server)** | Node.js, Express.js | Die Login-Funktion einer Social-Media-Plattform. |
| **Mobile Apps** | React Native, NativeScript | Die Instagram-App auf deinem Smartphone. |
| **Desktop-Anwendungen**| Electron | Der Discord-Client auf deinem Computer. |
| **Spiele** | Three.js, Phaser | Ein 2D-Jump-’n’-Run-Spiel im Browser. |
| **IoT / Robotik** | Johnny-Five, Cylon.js | Eine LED-Lampe, die per Web-Interface gesteuert wird. |# 🛠️ Vorbereitung der Entwicklungsumgebung

<br><br><br>

