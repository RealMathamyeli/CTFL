# ===================================
# Übung 3: Temperaturumrechner
# ===================================

def celsius_to_fahrenheit(celsius):
    """Rechnet Celsius in Fahrenheit um."""
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_to_celsius(fahrenheit):
    """Rechnet Fahrenheit in Celsius um."""
    celsius = (fahrenheit - 32) * 5/9
    return celsius

# Test der Funktionen
print(f"20°C entspricht {celsius_to_fahrenheit(20)}°F")
print(f"68°F entspricht {fahrenheit_to_celsius(68)}°C")
print(f"0°C entspricht {celsius_to_fahrenheit(0)}°F")
print(f"32°F entspricht {fahrenheit_to_celsius(32)}°C")