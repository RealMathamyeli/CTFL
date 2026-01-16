# Object Datentyp in JavaScript

In JavaScript ist der `Object` Datentyp ein fundamentaler Baustein, der es dir ermöglicht, Sammlungen von Daten und komplexere Entitäten zu speichern.
Sie können entweder sein:

- Arrays oder
- Objekte

- Deine Aufgabe für diese ILP-Phase ist es, zu recherchieren und zu verstehen, wie man mit Arrays und Objekten in JavaScript arbeitet.
- Schreibe deine Erkenntnisse nach der `---` Linie in diese Datei und pushe deine Änderungen, um diese Phase abzuschließen.

## Zu behandelnde Themen

### Arrays

- Was sind Arrays in JavaScript?
- Was sind die wichtigsten Merkmale von Arrays?
- Wie erstellen wir Arrays in JavaScript?
- Wie greifen wir auf Array-Elemente zu und wie verändern wir sie?
- Wie iterieren wir über ein Array mit `forEach` und `map`-Schleifen?

### Objekte

- Was sind Objekte in JavaScript?
- Was sind die wichtigsten Merkmale von Objekten?
- Wie erstellen wir Objekte in JavaScript?
- Wie greifen wir auf Objekteigenschaften zu und wie verändern wir sie?

---

Arrays
Was sind Arrays? Arrays sind geordnete Listen-Datentypen, in denen mehrere Werte (Elemente) unter einem einzigen Variablennamen gespeichert werden können.

Wichtigste Merkmale: Sie sind indexbasiert (beginnend bei 0), haben eine dynamische Länge (length-Eigenschaft) und können verschiedene Datentypen gleichzeitig enthalten.

Erstellung: Arrays werden am häufigsten durch die Literalschreibweise mit eckigen Klammern erstellt, zum Beispiel: const liste = [1, 2, 3];.

Zugriff und Veränderung: Man greift auf Elemente über ihren Index in eckigen Klammern zu (z. B. liste[0]) und verändert sie, indem man diesem Index einen neuen Wert zuweist.

Iteration (forEach & map): Während forEach eine Funktion für jedes Element ausführt (meist für Seiteneffekte), transformiert map jedes Element und gibt ein komplett neues Array zurück.

Objekte
Was sind Objekte? Objekte sind Sammlungen von zusammengehörigen Daten und Funktionalitäten, die als Paare aus Schlüsseln (Keys) und Werten (Values) gespeichert werden.

Wichtigste Merkmale: Sie sind ungeordnet, verwenden benannte Eigenschaften anstelle von Indizes und erlauben es, komplexe Strukturen realitätsnah abzubilden.

Erstellung: Objekte erstellt man meist mit geschweiften Klammern, wobei Key und Value durch einen Doppelpunkt getrennt werden, zum Beispiel: const user = { name: "Alice", alter: 25 };.

Zugriff und Veränderung: Man greift auf Eigenschaften über die Punkt-Notation (z. B. user.name) oder die Klammer-Notation (user["name"]) zu und weist ihnen mit dem Gleichheitszeichen neue Werte zu.