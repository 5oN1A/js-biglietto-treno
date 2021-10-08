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

let prezzoScontato;

if (isNaN(userAge)) {
    alert("il valore inserito non è valido");
} else {
    if (userAge < 18) {
        prezzoScontato = tripPrice - (tripPrice * 0.2);
        alert("il prezzo del tuo biglietto è " + prezzoScontato.toFixed(2));
    } else if (userAge >= 65) {
        prezzoScontato = tripPrice - (tripPrice * 0.4);
        alert("il prezzo del tuo biglietto scontato è di:" + prezzoScontato.toFixed(2));

    } else {
        alert("il prezzo del tuo biglietto scontato è di:" + tripPrice.toFixed(2));
    }
}






