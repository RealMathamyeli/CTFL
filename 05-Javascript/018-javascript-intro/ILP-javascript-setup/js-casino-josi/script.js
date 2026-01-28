let zufallsZahl;
// Initialisiere die Zufallszahl

function pruefeAlter() {
  // Funktion zur Überprüfung des Alters gelb ist die ID der Funktion
  const alter = document.getElementById("alter").value;
  // Hole das Alter aus dem Eingabefeld
  const fehler = document.getElementById("fehler");
  // Setze Fehlermeldung zurück

  if (alter >= 18) {
    // Überprüfe, ob der Benutzer volljährig ist (volljährig heißt mind. 18 Jahre)
    document.getElementById("start").style.display = "none";
    // Verstecke den Startbildschirm durch style.display = "none"
    document.getElementById("spiel").style.display = "block";
    // Zeige den Spielbildschirm durch style.display = "block"
    zufallsZahl = Math.floor(Math.random() * 100) + 1;
    // Generiere eine Zufallszahl zwischen 1 und 100 +1 damit 100 auch dabei ist
    console.log("Zufallszahl: " + zufallsZahl);
    // Nur in den Entwichler-Tools sichtbar
  } else {
    // Wenn der Benutzer nicht volljährig ist
    fehler.textContent = "Du musst volljährig sein!";
    // Zeige eine Fehlermeldung an
  }
}

function pruefeZahl() {
  // Funktion zur Überprüfung der eingegebenen Zahl
  const zahl = document.getElementById("zahl").value;
  // Hole die eingegebene Zahl aus dem Eingabefeld
  const ergebnis = document.getElementById("ergebnis");
  // Hole das Ergebnisfeld

  if (zahl == zufallsZahl) {
    // Vergleiche die eingegebene Zahl mit der Zufallszahl
    ergebnis.textContent = "Gewonnen!";
    // Zeige "Gewonnen!" an, wenn die Zahlen übereinstimmen
  } else {
    // Wenn die Zahlen nicht übereinstimmen
    ergebnis.textContent = "Falsch. Versuche es erneut!";
    // Zeige "Falsch. Versuche es erneut!" an
  }
}

function zurueck() {
  // Funktion zum Zurückkehren zum Startbildschirm
  document.getElementById("start").style.display = "block";
  // Zeige den Startbildschirm
  document.getElementById("spiel").style.display = "none";
  // Verstecke den Spielbildschirm
  zufallsZahl = Math.floor(Math.random() * 100) + 1;
  // Generiere eine neue Zufallszahl zwischen 1 und 100
  console.log("Neue Zufallszahl: " + zufallsZahl);
  // Nur in den Entwichler-Tools sichtbar
}

// Warum erneut function zurueck()?
// Diese Funktion ermöglicht es dem Benutzer, zum Startbildschirm zurückzukehren und eine neue Zufallszahl zu generieren, um das Spiel erneut zu spielen.

// Was bedeutet const?
// "const" ist eine Variable, deren Wert nicht verändert werden kann. Es steht für "constant" (konstant) und wird verwendet, um Werte zu speichern, die sich im Laufe des Programms nicht ändern sollen.

// Was bedeutet let?
// "let" ist eine Variable, deren Wert verändert werden kann. Es wird verwendet, um Werte zu speichern, die sich im Laufe des Programms ändern können.

// Was bedeutet ==?
// "==" ist ein Vergleichsoperator, der überprüft, ob zwei Werte gleich sind. Es vergleicht die Werte, ohne den Datentyp zu berücksichtigen.

// Was bedeutet ===?
// "===" ist ein strenger Vergleichsoperator, der überprüft, ob zwei Werte gleich sind und den gleichen Datentyp haben. Es vergleicht sowohl den Wert als auch den Typ.

// Was bedeutet !=?
// "!=" ist ein Vergleichsoperator, der überprüft, ob zwei Werte ungleich sind. Es vergleicht die Werte, ohne den Datentyp zu berücksichtigen.

// Was bedeutet !==?
// "!==" ist ein strenger Vergleichsoperator, der überprüft, ob zwei Werte ungleich sind oder unterschiedliche Datentypen haben. Es vergleicht sowohl den Wert als auch den Typ.

// Was bedeutet if und else?
// "if" bedeutet wenn wahr dann weiter in der Funktion if
// "else" bedeutet wenn nicht wahr dann weiter in der Funktion else

// Was bedeutet Math.floor()?
// "Math.floor()" ist dafür da eine ganze Zahl zu machen also eine Zahl ohne Komma
// random ist dafür da eine Zufallszahl zu generieren

// console.log ?
// Hier wird in den Entwickler-Tools eine Nachricht ausgegeben, die nur für den Entwickler sichtbar ist.