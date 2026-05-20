/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numVocali(stringa) {
    let risultato = 0;
    for (i = 0; i < stringa.length ; i++) {
        if (stringa.toLowerCase().at(i) === 'a' || stringa.toLowerCase().at(i) === 'e' || stringa.toLowerCase().at(i) === 'i' || stringa.toLowerCase().at(i) === 'o' || stringa.toLowerCase().at(i) === 'u' ) {
            risultato ++;
        }
    }
    return risultato;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(numVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)