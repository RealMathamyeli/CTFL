// Objekte JavaScript
console.log("JAVASCRIPT OBJECTS");
// - haben Sclüssel-Wert Paar (Key - Value pairs)
// - in gewchweifte klammern (in curly braces)
// - kann eine Mischung von Datentypen haben

let personObj = {
  userName: "Objektus",
  alter: 24,
  hobbies: ["Singen", "Kochen", "Putzen", "Schwimmen"],
};

console.log(personObj);

// - Zugriff mit Punkt-Notation (objecktName.Schlüssel)

console.log(personObj.alter);
console.log(personObj.userName);

// Wie logge ich die zweite Hobby von diese person in die Konsole
console.log(personObj.hobbies[1]);

// Objekte in Arrays
let schulklasse = [
  {
    id: 101,
    name: "Max Mustermann",
    note: 1.7,
    faecher: ["Mathe", "Deutsch"],
  },
  {
    id: 102,
    name: "Erika Mustermann",
    note: 2.1,
    faecher: ["Englisch", "Kunst", "Geschichte"],
  },
  {
    id: 103,
    name: "Peter Pan",
    note: 3.5,
    faecher: ["Sport", "Biologie"],
  },
];
