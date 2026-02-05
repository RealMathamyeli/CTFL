class Student:
    def __init__(self, name):
        self.name = name
        # Initialisierung einer leeren Liste für die Noten
        self.grades = []

    def add_grade(self, grade):
        """Fügt eine Note zur Liste hinzu."""
        if 0 <= grade <= 100:
            self.grades.append(grade)
        else:
            print(f"Warnung: Die Note {grade} ist ungültig (muss zwischen 0 und 100 liegen).")

    def get_average(self):
        """Berechnet den Durchschnitt der Noten."""
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)

    # --- DIE NEUE BONUS-METHODE ---
    def is_passing(self):
        """Gibt True zurück, wenn der Durchschnitt >= 60 ist."""
        return self.get_average() >= 60

    def show_report(self):
        avg = self.get_average()
        # Wir nutzen is_passing(), um den Status zu bestimmen
        status = "Bestanden ✅" if self.is_passing() else "Nicht bestanden ❌"
        
        print(f"Schülerbericht für {self.name}:")
        print(f"Noten: {self.grades}")
        print(f"Durchschnitt: {avg:.1f} | {status}")
        print("-" * 30)

# --- Aufgaben-Umsetzung ---

# 2. Erstellen von zwei Schülern
alice = Student("Alice")
bob = Student("Bob")

# 3. Noten hinzufügen
alice.add_grade(85)
alice.add_grade(92)
alice.add_grade(78)

bob.add_grade(90)
bob.add_grade(88)
bob.add_grade(95)
bob.add_grade(87)

# 4. Berichte anzeigen
alice.show_report()
bob.show_report()

# --- Test der Herausforderung ---
kai = Student("Kai")
kai.add_grade(85)
kai.add_grade(45) # Durchschnitt wird über 60 sein

charlie = Student("Charlie")
charlie.add_grade(40)
charlie.add_grade(55) # Durchschnitt wird unter 60 sein

kai.show_report()
charlie.show_report()