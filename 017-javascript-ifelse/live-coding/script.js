console.log("WILKOMMEN ZU IF ELSE IN JAVASCRIPT");

// Die `if`-Anweisung
// syntax - if(bedienung){ }
// ===, >, <, !==
// new Date().getCurrentTime()

let hour = 20.15;

/*
if (hour < 18) {
  console.log("Guten Tag");
}

console.log("Guten Abend");
*/

// mit else {}

// let actualTime = new Date();

// let uhr = actualTime.getHours();
// let minute = actualTime.getMinutes();
// let seconds = actualTime.getSeconds();

if (hour < 18) {
  console.log("Guten Tag");
} else {
  console.log("Guten Abend");
}

//

let alter = 16;

if (alter >= 18) {
  console.log("Zutritt erlaubt");
} else {
  console.log("Zutritt verweigert");
}

// Die `else if`-Anweisung: Mehrere Wege
// - syntax = if(bedienung1){}else if(bedienung2){}else{}

let ampelfarbe = "grün";

if (ampelfarbe === "grün") {
  console.log("Fahre");
} else if (ampelfarbe === "gelb") {
  console.log("Bremse ab");
} else {
  console.log("Halte an");
}

// Tage der Woche

let tagDerWoche = "Samstag";

if (tagDerWoche === "Montag") {
  console.log("Nicht mein lieblings Tag");
} else if (tagDerWoche === "Dienstag") {
  console.log("Nicht mein lieblings Tag");
} else if (tagDerWoche === "Mittwoch") {
  console.log("Jayy heute ist speziel!!! ");
} else if (tagDerWoche === "Donnerstag") {
  console.log("Nicht mein lieblings Tag");
} else if (tagDerWoche === "Freitag") {
  console.log("Nicht mein lieblings Tag");
} else {
  console.log("Wochende!!!!");
}

// Logische Operatoren: Bedingungen verknüpfen
/*

Die drei wichtigsten logischen Operatoren sind:

- `&&` - UND Operator
- `||` - ODER Operator (Pipe Zeichen)
- `!` - NICHT Operator
 */

// Das UND (`&&`)

let kontostand = 100.0;
let artikelAufLager = true;

if (kontostand >= 50.0 && artikelAufLager == true) {
  console.log("Bestellung erfolgreich!");
} else {
  console.log("Bestellung fehlgeschlagen.");
}

// Das ODER - || (entweder, oder)
let istStudent = true;
let istRentner = false;

if (istStudent || istRentner) {
  console.log("Du erhältst einen Rabatt!");
} else {
  console.log("Leider kein Rabatt für dich.");
}

// Das NICHT (`!`)
let isDoorClosed = true;

console.log(!isDoorClosed);

// Wir wollen prüfen, ob die Tür NICHT geschlossen ist (also offen).
if (!isDoorClosed) {
  console.log("Die Tür ist offen.");
} else {
  console.log("Die Tür ist geschlossen.");
}

// Switch-Case Statements

/*

switch (variable) {
  case wert1:
    // Code, der ausgeführt wird, wenn variable === wert1
    break;
  case wert2:
    // Code, der ausgeführt wird, wenn variable === wert2
    break;
  // weitere case-Blöcke...
  default:
    // Code, der ausgeführt wird, wenn keine der obigen Bedingungen zutrifft
    break;
}
 */

let tagNummer = 15;
let tagNamen;

switch (tagNummer) {
  case 1:
    tagNamen = "Montag";
    console.log("Heute ist Montag");
    break; // Verlässt den switch-Block
  case 2:
    tagNamen = "Dienstag";
    console.log("Heute ist Dienstag");
    break;
  case 3:
    tagNamen = "Mittwoch"; // Dieser Fall trifft zu!
    console.log("Heute ist Mittwoch");
    break; // tagNamen ist jetzt "Mittwoch", switch wird verlassen.
  case 4:
    tagNamen = "Donnerstag";
    console.log("Heute ist Donnerstag");
    break;
  case 5:
    tagNamen = "Freitag";
    console.log("Heute ist Freitag");
    break;
  case 6:
    tagNamen = "Samstag";
    console.log("Heute ist Samstag");
    break;
  case 7:
    tagNamen = "Sonntag";
    console.log("Heute ist Sonntag");
    break;
  default:
    tagNamen = "Ungültiger Tag"; // Wird ausgeführt, wenn tagNummer z.B. 9 wäre.
    console.log("Ungültiger Tag");
    break;
}

console.log(tagNamen);

let counter = 0; // Initialize counter
let randomNumber = Math.floor(Math.random() * 10); // Generate the first random number
while (randomNumber !== 5) {
  // Continue as long as the number is not 5
  console.log("Generated number: " + randomNumber);
  counter++; // Increase the counter
  randomNumber = Math.floor(Math.random() * 10); // Generate a new random number
}
console.log("Stopped! It took " + counter + " attempts to generate a 5.");
