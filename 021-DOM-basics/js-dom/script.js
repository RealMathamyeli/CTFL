// DOM Manipulation - Schritte
// 1. Attribute zuweisen (class, ID) -  IN HTML
// 2. Element auswählen mit entweder:
// - document.getElementByID(ID)
// - document.querySelector(className, ID, Element)
const titleElt = document.getElementById("website-titel");

const knopfElt = document.getElementById("button");

console.log(titleElt.textContent);

// 3. mit JavaScript manipulieren

//titleElt.textContent = "Wilkommen zu DOM!!";

// arbeiten mit Event-Listener
//
knopfElt.addEventListener("click", function () {
  titleElt.textContent = "Wilkommen zu DOM!!";
});

/*
const changeTitle = () => {
  titleElt.textContent = "Wilkommen zu DOM!!";
};

knopfElt.addEventListener("click", changeTitle);
*/

// Todo Funktionalität
// 1. Hole den Text aus dem Eingabefeld (Information sammeln)
// 2. Erstelle ein neues Listenelement (DOM-Manipulation: Erstellen)
// 3. Füge den Text in das neue Element ein (DOM-Manipulation: Inhalt ändern)
// 4. Hänge das neue Element an die Liste an (DOM-Manipulation: Hinzufügen)
// 5. Leere das Eingabefeld für die nächste Eingabe (DOM-Manipulation: Wert ändern)

// Implementierung:
// Elemente auswählen
const inputFeld = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const liste = document.getElementById("todo-list");

// Event Listener
addBtn.addEventListener("click", () => {
  // 1. Hole den Text aus dem Eingabefeld (Information sammeln)

  console.log(inputFeld.value);

  const userInput = inputFeld.value;

  // Sicherheitscheck - stop wenn keine Eingabe gibt!

  if (userInput.trim() === "") {
    alert("Input ist leer");
    return;
  }

  // 2. Erstelle ein neues Listenelement (DOM-Manipulation: Erstellen)
  const neuesLi = document.createElement("li");

  //
  // 3. Füge den Text in das neue Element ein (DOM-Manipulation: Inhalt ändern)
  neuesLi.textContent = userInput;

  //
  // 4. Hänge das neue Element an die Liste an (DOM-Manipulation: Hinzufügen)
  liste.appendChild(neuesLi);

  //
  // 5. Leere das Eingabefeld für die nächste Eingabe (DOM-Manipulation: Wert ändern)

  inputFeld.value = "";
});
