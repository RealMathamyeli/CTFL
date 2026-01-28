console.log('DATA ARCHIVE');

// Aufgabe 1
// 1. Array erstellen und mit 3 Reisezielen füllen
const travelList = ['London', 'Tokio', 'New York'];

// 2. Den Inhalt in der Konsole ausgeben, um das Ergebnis zu prüfen
console.log(travelList);

// Das erste Reiseziel ausgeben (Index 0)
console.log('Erstes Ziel:', travelList[0]);

// Das dritte Reiseziel ausgeben (Index 2)
console.log('Drittes Ziel:', travelList[2]);

// Das zweite Reiseziel (Index 1) mit "Sydney" überschreiben
travelList[1] = 'Sydney';

// Die aktualisierte Liste zur Kontrolle ausgeben
console.log(travelList);

// Aufgabe 2
// 1. Array erstellen
const prices = [10, 20, 50, 100];

// 2. Mit .forEach() durch das Array loopen
prices.forEach(function (price) {
  // 3. Ausgabe in der Konsole
  console.log('Der Preis ist: ' + price + ' €');
});

// Erstellt ein neues Array basierend auf der Berechnung
const salePrices = prices.map(function (price) {
  return price / 2; // Hier passiert der 50% Rabatt
});

// Das neue Array ausgeben
console.log(salePrices); // [5, 10, 25, 50]

// Aufgabe 3
// 1. Objekt erstellen
const book = {
  title: 'Der Alchemist',
  author: 'Paulo Coelho',
  pages: 208,
  isRead: true,
};

// 2. Lesen mit Punkt-Notation
console.log('Titel:', book.title);
console.log('Autor:', book.author);

// 3. Lesen mit Klammer-Notation
console.log('Seitenanzahl:', book['pages']);

// 4. Eigenschaft hinzufügen
book.language = 'Deutsch';

// 5. Eigenschaft löschen
delete book.isRead;

// 6. Das gesamte Objekt prüfen
console.log('Endergebnis:', book);

// Aufgabe 4
// 1. Array mit 3 Objekten erstellen
const contacts = [
  {
    name: 'Alice',
    number: '123-456',
    hobbies: ['Lesen', 'Wandern'],
  },
  {
    name: 'Bob',
    number: '987-654',
    hobbies: ['Kochen', 'Radfahren'],
  },
  {
    name: 'Charlie',
    number: '555-000',
    hobbies: ['Malen', 'Fotografie'],
  },
];

// 2. Tiefer Zugriff
console.log('Name der ersten Person:', contacts[0].name);
console.log('Erstes Hobby der zweiten Person:', contacts[1].hobbies[0]);

// 3. Manipulation
// Nummer der dritten Person (Index 2) aktualisieren
contacts[2].number = '111-222';

// Der ersten Person ein Hobby hinzufügen
contacts[0].hobbies.push('Gaming');

// 4. Finaler Log
console.log('Gesamte Kontaktliste:', contacts);
