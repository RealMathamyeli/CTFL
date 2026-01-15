
// Aufg. 1a

let deutsch = 'de'
let franzoesisch = 'fr'
let afghanisch = 'af'
let englisch = 'en'
switch (englisch){
    case franzoesisch: console.log('Bonjour le monde')
    break
    case afghanisch : console.log('Salam Donja')
    break
    case englisch: console.log('Hello World')
    break
    default : console.log('Sprache nicht erkannt');
    break

}

//Aufg. 1b

let accountBalance = 50
let purchaseAmount = 40
let rest_summe = accountBalance - purchaseAmount
if (purchaseAmount <= accountBalance){
    console.log('Erfolgreicher Kauf')
    if ( rest_summe === 10){
    console.log('Warnung! Niedriger Kontostand. ${rest_summe}')
}
}

else{
    console.log('Dein Kontostand reicht nicht');
    
}

// Aufgabe 2a

for (let i = 0; i<=20; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}

// Aufgabe 2b

let counter = 0

while (counter <= 10){
    console.log(counter++)
    
}
  console.log('Liftoff! 🚀');


// Aufgabe 3a

function greetUser(namen){
    console.log('Willkommen zurück', namen);
    
}
greetUser('ali')
greetUser('Babak')
greetUser('zahra')

//Aufgabe 3b


function celsiusToFahrenheit(celcius){
    return celcius * 1.8 + 32
}
console.log(celsiusToFahrenheit(20))

// Aufgabe 4

const prices = [10,20,45,100,5]

function calculaterTotal(prices){
    let total = 0
    for (let i = 0; i < prices.length; i++){
        total += prices[i]
    }
    if (total > 100){
        total = total * 0.9
        console.log('Du erhälst 10% Rabatt. Du bezahlst:', total, 'Euro')
    }
       return total

}

console.log(calculaterTotal(prices));
