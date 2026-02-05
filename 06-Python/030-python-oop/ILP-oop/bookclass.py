# 1. Definition der Klasse
class Book:
    def __init__(self, title, author, pages):
        """
        Der Konstruktor __init__ initialisiert die Attribute 
        des Objekts, wenn es erstellt wird.
        """
        self.title = title
        self.author = author
        self.pages = pages
        
        # Ausgabe direkt beim Erstellen (wie in der Aufgabe gefordert)
        print(f"Ein neues Buch '{self.title}' von {self.author} wurde hinzugefügt!")

# 2. Erstellen von zwei verschiedenen Buch-Objekten (Instanziierung)
book1 = Book("Harry Potter", "J.K. Rowling", 336)
book2 = Book("1984", "George Orwell", 328)

# 3. Zugriff auf die Attribute mit der Punkt-Notation
print(f"Das erste Buch ist: {book1.title} von {book1.author}")
print(f"Das zweite Buch ist: {book2.title} von {book2.author}")