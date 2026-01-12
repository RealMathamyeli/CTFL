// module.js
console.log("4. Modul-Script: Start (Ich bin automatisch 'deferred')");

export const settings = {
    theme: 'dark',
    version: '1.0'
};

// Test der Kapselung
const lokaleVariable = "Ich bin nur hier drin sichtbar!";
console.log("Modul-Variable:", lokaleVariable);