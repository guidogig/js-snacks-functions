/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziali (lista) {
    const risultato = [];
    for (let i = 0; i < lista.length; i ++) {
        risultato.push(lista[i].at(0));
    }
    return risultato;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(iniziali(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]