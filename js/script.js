
let tripLenght = parseInt(prompt("Inserisci il numero di Kilometri da percorrere"));

if (isNaN(tripLenght)) {
    alert("il valore inserito non è valido");
}

let userYOB = parseInt(prompt("inserisci il tuo anno di nascita"));

if (isNaN(userYOB)) {
    alert("il valore inserito non è valido");
}

let year = new Date();
let currentYear = year.getFullYear();
console.log(currentYear);

let userAge = currentYear - userYOB;

console.log(userAge);

let tripPrice = tripLenght * 0.21;

let discountedPrice;

let message;

let msgFullPrice = "Il prezzo del tuo biglietto è di € ";

let msgDiscounted20 = "Hai diritto ad uno sconto del 20%. Il prezzo del tuo biglietto è di € ";

let msgDiscounted40 = "Hai diritto ad uno sconto del 40%. Il prezzo del tuo biglietto è di € ";



if (userAge < 18) {
    discountedPrice = tripPrice - (tripPrice * 0.2);
    message = "Hai diritto ad uno sconto del 20%. Il prezzo del tuo biglietto è di € ";
    alert(message + discountedPrice.toFixed(2));
} else if (userAge >= 65) {
    discountedPrice = tripPrice - (tripPrice * 0.4);
    message = "Hai diritto ad uno sconto del 40%. Il prezzo del tuo biglietto è di € ";
    alert(message + discountedPrice.toFixed(2));
} else {
    message = "Il prezzo del tuo biglietto è di € "
    alert(message + tripPrice.toFixed(2));
}






