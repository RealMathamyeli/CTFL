# Das Web verstehen

- Funktionsweise des Internets (Client, Server, Übertragungswege)
- HTTP/HTTPS-Protokolle: Grundlagen und Bedeutung

Struktur einer Webseite

- Aufbau von Webdokumenten (HTML, DOM)
- Einführung in Frontend-Technologien: HTML, CSS und JavaScript

Grundaufbau von HTML

- Verfassen eines minimalen HTML5-Dokuments mit wichtigen Elementen (DOCTYPE, html, head, body)
- Bedeutung von Elementen wie \<title> und \<meta>

Textgestaltung in HTML

- Verwendung von Überschriften (\<h1>-\<h6>), Absätzen (\<p>) und Hervorhebungen (\<strong>, \<em>)
- Umgang mit Zeilenumbrüchen (\<br>) und horizontalen Linien (\<hr>)"

<br><br><br>

# 🌐 Das Web verstehen

Wenn wir vom "Web" (World Wide Web) sprechen, meinen wir meistens die bunten Webseiten, Videos und Inhalte, die wir über einen Browser abrufen. Das "Internet" ist das darunterliegende Netzwerk – die Straßen, auf denen die Daten fahren.

<br><br><br>

## 🌍 Funktionsweise des Internets (Client, Server, Übertragungswege)

Das ganze System basiert auf einem einfachen Prinzip: Jemand **fragt** nach etwas (der Client) und jemand **antwortet** (der Server).

<br><br><br>

### 💻 Der Client (Der Kunde)

Der **Client** bist du – beziehungsweise dein Gerät. Das kann dein Laptop, dein Smartphone oder dein Smart-TV sein.

- **Was macht er?** Der Client ist der "Kunde", der eine Anfrage stellt. Wenn du in deinem Browser `www.google.de` eingibst und Enter drückst, _bittet_ dein Client das Internet: "Bitte gib mir die Webseite von Google."
- **Das Werkzeug:** Das Hauptwerkzeug des Clients ist der **Webbrowser** (z.B. Chrome, Firefox, Safari). Der Browser ist wie der Übersetzer und der Telefonist: Er nimmt deine Eingabe (den Domainnamen), formatiert daraus eine offizielle Anfrage (einen HTTP-Request) und schickt sie los. Wenn die Antwort zurückkommt, baut er aus dem Code (HTML, CSS, JavaScript) die bunte Webseite zusammen, die du siehst.

<br><br><br>

### 🖥️ Der Server (Der Dienstleister)

Der **Server** ist das Ziel deiner Anfrage. Stell ihn dir vor wie das Restaurant, bei dem du bestellst.

- **Was ist er?** Ein Server ist im Grunde auch nur ein Computer. Allerdings ist er extrem leistungsstark, hat eine blitzschnelle Internetverbindung und ist darauf spezialisiert, Tausende von Anfragen gleichzeitig zu beantworten. Er läuft 24 Stunden am Tag, 7 Tage die Woche.
- **Was macht er?** Er "serviert" (daher der Name) die Daten. Er wartet auf Anfragen. Kommt die Anfrage "Bitte gib mir die Webseite von Google", sucht der Server die entsprechende Datei auf seiner Festplatte und schickt sie als Antwort zurück an den Client.

![alt text](licensed-image.jpg)

<br><br><br>

### 📬 Die Übertragungswege (Das Liefersystem)

Jetzt haben wir einen Kunden (Client) und ein Restaurant (Server). Aber wie kommt die Bestellung zum Restaurant und die Pizza (Webseite) zurück zu dir? Das ist die Aufgabe der Übertragungswege – des Internets.

Stell es dir vor wie ein gigantisches, globales Postsystem:

1.  **Das Adressproblem (IP & DNS):**
    Jeder Server auf der Welt hat eine eindeutige Adresse, wie eine Hausnummer. Das ist die **IP-Adresse** (z.B. `172.217.16.14`). Da sich niemand diese Zahlen merken kann, benutzen wir Namen: **Domains** (z.B. `google.de`).
    Wenn du `google.de` eingibst, muss dein Client erst im "Telefonbuch des Internets" nachschlagen, um die IP-Adresse herauszufinden. Dieses Telefonbuch heißt **DNS (Domain Name System)**.

2.  **Das Transportproblem (TCP/IP):**
    Eine Webseite ist zu groß, um sie in einem Stück zu versenden. Das Internet zerlegt die Webseite (die Pizza) in Tausende von winzigen **Datenpaketen** (Pizzastücken). Jedes Paket bekommt die Absender-IP (deine IP) und die Empfänger-IP (die Server-IP) aufgestempelt.
    Das **TCP/IP-Protokoll** ist das Regelwerk für diesen Versand.
    - **TCP** (Transmission Control Protocol) ist der Logistiker. Es nummeriert alle Pakete (Pizzastück 1/1000, 2/1000...) und prüft am Ende beim Empfänger, ob alle Stücke angekommen sind und setzt sie wieder in der richtigen Reihenfolge zusammen. Fehlt ein Stück, fordert es dieses automatisch neu an.
    - **IP** (Internet Protocol) ist der Briefträger, der sich nur um die Adressen kümmert und das Paket zur nächsten Station bringt.

Die Pakete reisen dann über **Router** (die Post-Sortierzentren) und durch **Seekabel, Glasfaserleitungen oder Satelliten** (die Autobahnen und Flugzeuge) um die ganze Welt zum Server. Der Server macht dasselbe und schickt seine Antwort-Pakete zurück an dich.

<br><br><br>

## 🔒 HTTP/HTTPS-Protokolle: Grundlagen und Bedeutung

Wir wissen jetzt, _dass_ Client und Server miteinander reden. Aber _wie_ reden sie? Sie brauchen eine gemeinsame Sprache. Diese Sprache wird "Protokoll" genannt.

<br><br><br>

### 📜 Was ist ein Protokoll?

Ein Protokoll ist einfach eine feste Vereinbarung von Regeln für die Kommunikation. Wenn du jemanden triffst, sagst du "Hallo" und streckst die Hand aus. Du fängst nicht an zu pfeifen. Das ist ein soziales Protokoll.

In der IT legt ein Protokoll fest, wie eine Anfrage aussehen muss (z.B. "GET /index.html") und wie eine Antwort formatiert ist (z.B. "200 OK" – hier ist die Datei).

<br><br><br>

### 📨 HTTP: Das Standard-Protokoll (Hypertext Transfer Protocol)

**HTTP** ist die Standardsprache des Webs. Es steht für **Hypertext Transfer Protocol**. Es ist das Protokoll, das entwickelt wurde, um Webseiten (Hypertext-Dokumente) vom Server zum Client zu übertragen.

**Das große Problem von HTTP: Es ist eine Postkarte\!** ✉️
HTTP ist _unverschlüsselt_. Wenn du eine Webseite über HTTP aufrufst, ist das, als würdest du eine Postkarte verschicken. Jeder, der die Karte auf dem Weg in die Hände bekommt (dein WLAN-Betreiber, dein Internetanbieter, ein Hacker im selben Café-WLAN), kann alles im Klartext mitlesen.

Wenn du ein Passwort oder deine Kreditkartendaten über eine HTTP-Verbindung eingibst, werden sie im Klartext übermittelt. Das ist extrem unsicher.

<br><br><br>

### 🔐 HTTPS: Das sichere Protokoll (HTTP Secure)

**HTTPS** ist die moderne, sichere Version. Das "S" steht für **"Secure"**.

**Der Unterschied: HTTPS ist ein versiegelter Tresor\!** 📦
HTTPS ist dasselbe HTTP-Protokoll, es wird aber zusätzlich durch eine Sicherheitsschicht namens **SSL/TLS** (Secure Sockets Layer / Transport Layer Security) geschützt.

Stell es dir so vor: Anstatt eine Postkarte zu schicken, packst du deine Nachricht in einen Tresor, schließt ihn ab und schickst den Tresor auf die Reise. Nur du (der Client) und der Empfänger (der Server) haben die Schlüssel für diesen Tresor. Jeder, der das Paket unterwegs abfängt, sieht nur einen unknackbaren Metallkasten. Er kann nicht sehen, was drin ist.

<br><br><br>

### 🔑 Wie funktioniert die HTTPS-Verschlüsselung?

Diese Tresor-Magie funktioniert in zwei Schritten:

1.  **Authentifizierung (Der Ausweis-Check):**
    Wenn du `meinebank.de` über HTTPS aufrufst, siehst du ein **Schloss-Symbol** 🔒 im Browser. Das bedeutet, der Server von `meinebank.de` musste deinem Browser erst seinen digitalen Ausweis zeigen (ein **SSL/TLS-Zertifikat**). Eine unabhängige, vertrauenswürdige Stelle (eine Certificate Authority, CA) hat geprüft, dass dieser Server _wirklich_ `meinebank.de` ist und kein Betrüger.

2.  **Verschlüsselung (Der "Handshake"):**
    Nachdem der Ausweis geprüft wurde, einigen sich dein Browser und der Server in einem geheimen Prozess (dem "TLS-Handshake") auf einen einzigartigen, geheimen Code (einen "Session Key") nur für diese eine Sitzung. Ab diesem Moment wird jede Kommunikation zwischen euch beiden mit diesem Code verschlüsselt.

<br><br><br>

### 📊 HTTP vs. HTTPS: Der direkte Vergleich

Hier siehst du die wichtigsten Unterschiede auf einen Blick:

| Eigenschaft            | HTTP (Hypertext Transfer Protocol)                                           | HTTPS (HTTP Secure)                                                                                       |
| :--------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| **🔒 Verschlüsselung** | **Nein.** Alle Daten werden im Klartext übertragen.                          | **Ja.** Alle Daten werden stark verschlüsselt (per SSL/TLS).                                              |
| **🚪 Standard-Port**   | Port 80                                                                      | Port 443                                                                                                  |
| **🛡️ Sicherheit**      | **Unsicher.** Anfällig für "Man-in-the-Middle"-Angriffe (Mitlesen, Abhören). | **Sicher.** Schützt vor Mitlesen und Manipulation der Daten.                                              |
| **🔑 Authentizität**   | **Nein.** Du kannst nicht sicher sein, ob du mit dem echten Server sprichst. | **Ja.** Das SSL/TLS-Zertifikat bestätigt die Identität des Servers.                                       |
| **🌐 Heutige Nutzung** | Veraltet. Nur noch für nicht-sensible Inhalte oder Weiterleitungen.          | **Standard.** Unbedingt notwendig für Logins, Online-Banking, Shops und eigentlich jede moderne Webseite. |

<br><br><br>

## Fragen

- Was macht ein Client im Kontext des Internets? Nenne 2 Beispiele für Client-Geräte.
- Erkläre die Rolle eines Servers in der Web-Kommunikation.
- Beschreibe den Prozess, wie Daten von einem Client zu einem Server und zurück übertragen werden.
- Was ist eine IP-Adresse?
- Was ist der Zweck von DNS in der Internetkommunikation?
- Wofür steht die Abkürzung TCP?
- Wofür steht die Abkürzung IP?
- Was ist ein Protokoll? Nenne ein Beispiel im Kontext der Web-Kommunikation.
- Wofür steht HTTP?
- Warum gilt HTTP als unsicher?
- Wofür steht HTTPS?
- Wie stellt HTTPS eine sichere Kommunikation zwischen Client und Server sicher? dem Kontext des Internets?
