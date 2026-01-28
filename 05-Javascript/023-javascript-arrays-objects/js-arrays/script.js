console.log("Guten Montag!!!");

// Arrays:
// - List of multiple values (ein Liste von mehrere Werte)
// - in eckige Klammern ([])

let meineObstArray = ["Apfel", "Banane", "Kirsche", "Orange"];
// - man kann die Länge herausfinden mit nameDesArrays.length
console.log(meineObstArray.length);

// - jeder Element in einem Array hat ein Zahl der "Index" heißt
// - der erste Index ist Null (0)
// ein Element ausholen - nameDesArrays[elementIndex]
console.log(meineObstArray[0]);
console.log(meineObstArray[3]);
console.log(meineObstArray[6]);
// Array Item (Element) ersetzen (Bracket-Notation)

console.log("ohne Anana", meineObstArray);

meineObstArray[2] = "Anana";

console.log("mit Anana", meineObstArray);

// neue Item in einem Array hinzufügen mit push Methode
// meineObstArray[5] = "Kiwi"; // möglich aber nicht empfohlen
meineObstArray.push("Kiwi");
console.log("mit Kiwi", meineObstArray);

// mit leer Array arbeiten.
let booksArray = [];

console.log(booksArray);

// LOTR hinzufügen

booksArray.push("LOTR");

console.log("mit LOTR", booksArray);

// Star Wars

booksArray.push("Star Wars");

console.log("mit Star Wars", booksArray);

// for-each

console.log("For Each Loop");

let friendsArr = ["Job", "Einstein", "Grace Hopper", "Kerpen"];
// Manuel Weg mit Bracket-Notation
console.log(friendsArr[0]);
console.log(friendsArr[1]);
console.log(friendsArr[2]);

// Dynamich mit for-each
// arrayName.forEach((parameter, index)=>{} - callback)
// parameter (ist pflicht) wird durch jeder item ersetzt
// index ist optional
// gibt nicht zuruck (no return value)
console.log("DYNAMICH");

console.log("Dein Freundeliste besteht aus:");
friendsArr.forEach((friend, index) => {
  console.log(index + " - " + friend);
});

// .map()
// ein neue Array mit bearbeitete Werte zuruckgibt
// neue Array mit Freundenamen großgeschrieben

let großgeschriebenNamen = friendsArr.map((item) => {
  return item.toUpperCase();
});

console.log("Namen großgeschrieben");
console.log(großgeschriebenNamen);

//

let numArray = [1, 2, 3, 4, 5];

// erstelle eine Kopie mit jeder item Mal 2

let numArrayMal2 = numArray.map((zahl) => zahl * 2);

console.log("Originale Array", numArray);
console.log("Array Items Mal 2", numArrayMal2);
