// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va stampato in pagina forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// chiedo i km
const userDistance = (prompt('Distanza'));
console.log('userDistance: ' + userDistance);

// chiedo l'età
const userAge = (prompt('Età'));
console.log('userAge:' + userAge);

// prezzo al km
const priceKm = 0.21

// verifico se età e km sono numeri

let isValid = 'true';


if (isNaN(userDistance)) {
    isValid = true;
    console.log('la distanza non è valida');
}

if (isNaN(userAge)) {
    isValid = true;
    console.log('l\'età non è valida');
}

// calcolo il prezo del biglietto senza sconti

let price = userDistance * 0.21
console.log('il prezzo è: ' + price)


// verifico se applicare gli sconti

if (userAge < 18) {
    document.getElementById('result').innerHTML = ('Hai diritto a uno sconto del 20%, il prezzo è: ' + (price - price / 5).toFixed(2) + '€')
}

if (userAge > 65) {
    document.getElementById('result').innerHTML = ('Hai diritto a uno sconto del 40%, il prezzo è: ' + (price - price / 5 * 2).toFixed(2) + '€')
}

else {
    document.getElementById('result').innerHTML = ('Il prezzo è: ' + price.toFixed(2) + '€')
}