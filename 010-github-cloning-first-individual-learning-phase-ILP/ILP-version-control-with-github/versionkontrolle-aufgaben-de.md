# 📝 Git & GitHub Wissenscheck

**Anleitung:** Bitte beantworte die folgenden Fragen im dafür vorgesehenen Feld.

### Teil 1: Grundlagen der Versionskontrolle

- **Frage 1:** Erkläre den Hauptunterschied zwischen einem zentralisierten Versionskontrollsystem (CVCS) und einem verteilten Versionskontrollsystem (DVCS) in Bezug darauf, wie die Historie gespeichert wird.
- **Antwort:**
- **Frage 2:** Welche drei spezifischen Dinge speichert ein "Commit" über eine Änderung im Kontext der Versionskontrolle? (Denke an Wer, Was, Warum).
- **Antwort:**
- **Frage 3:** Wahr oder Falsch: In einem verteilten Versionskontrollsystem wie Git musst du online sein, um Commits zu erstellen oder die Projekthistorie einzusehen.
- **Antwort:**

---

### Teil 2: Git-Setup und Workflow

- **Frage 4:** Welcher Befehl erstellt einen neuen, versteckten `.git`-Ordner in deinem Verzeichnis und macht es damit effektiv zu einem Git-Repository?
- **Antwort:**
- **Frage 5:** Bevor du deinen ersten Commit auf einem neuen Computer machst, musst du deine Identität konfigurieren. Schreibe die beiden Befehle auf, die verwendet werden, um deinen Namen und deine E-Mail-Adresse global festzulegen.
- **Antwort:**
- **Frage 6:** Git arbeitet mit drei Haupt-"Zonen" oder Zuständen. Nenne sie und erkläre kurz die "Staging Area" (oder den Index).
- **Antwort:**
- **Frage 7:** Wie lautet der spezifische Befehl, um _alle_ geänderten Dateien in deinem aktuellen Verzeichnis in die Staging Area zu verschieben?
- **Antwort:**
- **Frage 8:** Warum ist es wichtig, eine aussagekräftige Commit-Nachricht zu schreiben (z. B. "Fix: Absturz beim Login verhindern") anstatt einer generischen Nachricht (z. B. "Änderungen")?
- **Antwort:**
- **Frage 9:** Wahr oder Falsch: `git status` zeigt dir die Historie der vorherigen Commits an.
- **Antwort:**
- **Frage 10:** Wenn du ein chronologisches Protokoll aller Änderungen inklusive Autor und Datum sehen möchtest, welchen Befehl solltest du verwenden?
- **Antwort:**

---

### Teil 3: Änderungen und Historie verwalten

- **Frage 11:** Du hast eine Datei namens `mistake.txt` geändert, aber noch _nicht_ gestaged. Welchen Befehl würdest du verwenden, um deine Änderungen zu verwerfen und den Zustand des letzten Commits wiederherzustellen?
- **Antwort:**
- **Frage 12:** Erkläre die Gefahr bei der Verwendung von `git reset --hard`. Was passiert mit deinen ungespeicherten Änderungen im Arbeitsverzeichnis (Working Directory)?
- **Antwort:**
- **Frage 13:** Wahr oder Falsch: `git reset --soft` macht den Commit rückgängig, behält aber deine Änderungen in der Staging Area, sodass du sie einfach erneut committen kannst.
- **Antwort:**

---

### Teil 4: Branches und Merging

- **Frage 14:** Was ist der Zweck des Erstellens eines "Branch" (Zweig) in Git?
- **Antwort:**
- **Frage 15:** Schreibe den einzelnen Befehl auf, um einen neuen Branch namens `feature/login` zu **erstellen** UND sofort in diesen zu **wechseln**.
- **Antwort:**
- **Frage 16:** Wenn ein Merge-Konflikt auftritt, fügt Git Markierungen in die Datei ein (z. B. `<<<<<<< HEAD`). Was musst du tun, um den Konflikt zu lösen?
- **Antwort:**

---

### Teil 5: GitHub und Remotes

- **Frage 17:** Erkläre kurz den Unterschied zwischen **Git** und **GitHub**.
- **Antwort:**
- **Frage 18:** Wahr oder Falsch: Ein "Remote Repository" ist auf deinem lokalen Computer gespeichert, während ein "Local Repository" auf den Servern von GitHub gespeichert ist.
- **Antwort:**
- **Frage 19:** Was ist der Zweck einer `.gitignore`-Datei? Nenne ein Beispiel für einen Dateityp, den du ignorieren solltest.
- **Antwort:**
- **Frage 20:** Wahr oder Falsch: Du solltest deinen `node_modules`-Ordner und Dateien, die API-Schlüssel oder Passwörter enthalten, immer in dein öffentliches GitHub-Repository pushen.
- **Antwort:**
