# Aufgabe: Der Profil-Wechsler

**Ziel:** Schreibe JavaScript-Code, der das Bild und den Namen ändert, sobald der Button geklickt wird.

#### 1. Der Start-Code (HTML)

Kopiere diesen HTML-Code in eine `index.html` - Datei. Er enthält ein Bild, eine Überschrift und einen Button.

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <main>
      <h1 id="profil-name">Normaler Mensch</h1>
      <img
        id="profil-bild"
        width="150px"
        src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
        alt="Zivilist" />

      <button id="tarnung-button">Tarnung aktivieren</button>
    </main>
  </body>
</html>
```

#### 2. Deine Aufgaben

1. Erstelle eine dazugehörige JavaScript-Datei (`script.js`). Verlinke die `script.js` am Ende des `<body>` in deiner `index.html`.
2. **Auswählen:** Erstelle drei Variablen und speichere darin:

- Das Bild-Element (nutze die ID `profil-bild`).
- Die Überschrift (nutze die ID `profil-name`).
- Den Button (nutze die ID `tarnung-button`).

3. **Funktion:** Schreibe eine Funktion (z. B. `identitaetWechseln`), die folgendes tut:

- Ändere den Text der Überschrift (`.textContent`) zu **"Agent 007"**.
- Ändere die Quelle des Bildes (`.src`) zu dieser URL: `"https://cdn.pixabay.com/photo/2015/10/31/12/32/james-bond-1015612_1280.jpg"`.

4. **Event:** Füge dem Button einen **Event Listener** hinzu. Wenn man ihn anklickt (`'click'`), soll deine Funktion ausgeführt werden.

---

### Hilfe benötigt? (Tipps)

- Erinnere dich an `document.getElementById('id-name')` oder `document.querySelector('#id-name')` zum Auswählen.
- Um das Bild zu tauschen, greifst du auf das Attribut `.src` zu.
