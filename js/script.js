/*
1.n. km da percorrere : creare prompt
2.età passeggero: creare prompt
3.verifica  dati del prompt
4.calcolo prezzo del biglietto in base ai km 
5.applicazione degli eventuali sconti in riferimento all'età passeggero
6.arrotondo i valori del prezzo finale
*/

let tripLenght = parseInt(prompt("Inserisci il numero di Kilometri da percorrere"));

if (isNaN(tripLenght)) {
    alert("il valore inserito non è valido");
}

let userAge = parseInt(prompt("inserisci la tua età"));

let tripPrice = tripLenght * 0.21;

let discountedPrice;

let msgDiscounted = "il prezzo del tuo biglietto scontato è di €"

let msgFullPrice = "il prezzo del tuo biglietto è di €"

if (isNaN(userAge)) {
    alert("il valore inserito non è valido");
} else {
    if (userAge < 18) {
        discountedPrice = tripPrice - (tripPrice * 0.2);
        alert(msgDiscounted + discountedPrice.toFixed(2));
    } else if (userAge >= 65) {
        discountedPrice = tripPrice - (tripPrice * 0.4);
        alert(msgDiscounted + discountedPrice.toFixed(2));

    } else {
        alert(msgDiscounted + tripPrice.toFixed(2));
    }
}






