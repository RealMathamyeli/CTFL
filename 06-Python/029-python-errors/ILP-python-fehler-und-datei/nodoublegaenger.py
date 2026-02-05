# ============================================================
# ÜBUNG 3: DER "DUPLIKAT-VERNICHTER" (SETS)
# ============================================================
source_a = [101, 102, 103, 101, 104]
source_b = [103, 104, 105, 106]

# 1. Zusammenführen der Listen
all_ids = source_a + source_b

# 2. Eindeutige Kunden ermitteln
unique_customers = set(all_ids)

# Ausgabe der Ergebnisse
print("--- Übung 3: Duplikat-Vernichter ---")
print(f"Eindeutige Kunden: {unique_customers}")
print(f"Anzahl eindeutiger Kunden: {len(unique_customers)}")
print(f"Existiert Kunden-ID 105? {105 in unique_customers}")
print("-" * 40)


# ============================================================
# DATENGRUNDLAGE FÜR LOG-ANALYSEN
# ============================================================
log_entries = [
    ('user_001', 'Login',       '2023-10-26 09:00:00'),
    ('user_002', 'ProductView', '2023-10-26 09:01:15'),
    ('user_001', 'ProductView', '2023-10-26 09:02:30'),
    ('user_003', 'Login',       '2023-10-26 10:03:00'),
    ('user_002', 'AddToCart',   '2023-10-26 10:04:00'),
    ('user_001', 'Logout',      '2023-10-26 10:05:00'),
    ('user_004', 'Login',       '2023-10-26 11:06:00'),
    ('user_003', 'ProductView', '2023-10-26 11:07:00'),
    ('user_002', 'ProductView', '2023-10-26 11:08:00'),
    ('user_001', 'Login',       '2023-10-26 14:09:00'),
    ('user_004', 'AddToCart',   '2023-10-26 14:10:00'),
    ('user_003', 'Logout',      '2023-10-26 14:11:00')
]


# ============================================================
# ÜBUNG 4: DER "LOGIN-TRACKER" (FILTERN)
# ============================================================
login_users = []
for user_id, action, timestamp in log_entries:
    if action == 'Login':
        login_users.append(user_id)

print("--- Übung 4: Login-Tracker ---")
print(f"Liste aller Login-Events: {login_users}")


# ============================================================
# ÜBUNG 5: DIE "AKTIVITÄTS-STATISTIK" (AGGREGATION)
# ============================================================
user_counts = {}
for user_id, action, timestamp in log_entries:
    if user_id in user_counts:
        user_counts[user_id] += 1
    else:
        user_counts[user_id] = 1

print("\n--- Übung 5: Aktivitäts-Statistik ---")
print(f"Aktionen pro Benutzer: {user_counts}")


# ============================================================
# ÜBUNG 6: DIE "UNIQUE USERS" (MENGENOPERATIONEN)
# ============================================================
# Wir extrahieren alle User-IDs und machen daraus ein Set
unique_active_users = set()
for entry in log_entries:
    unique_active_users.add(entry[0])

print("\n--- Übung 6: Unique Users ---")
print(f"Einzigartige aktive Benutzer: {unique_active_users}")


# ============================================================
# ÜBUNG 7: DER "TIMELINE-KONVERTER" (TRANSFORMATION)
# ============================================================
timeline = []
for user_id, action, timestamp in log_entries:
    # String-Slicing: Extrahiere Zeichen von Index 11 bis 13 (die Stunde)
    stunde = int(timestamp[11:13])
    timeline.append((user_id, stunde))

print("\n--- Übung 7: Timeline-Konverter ---")
print(f"User-Aktivität nach Stunde: {timeline}")