/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function inizianoCon (lista, iniziale) {
    const risultato = [];
    for (let i = 0; i < lista.length; i ++) {
        if (lista[i].toLowerCase().at(0) === iniziale.toLowerCase()) {
            risultato.push(lista[i]);
        } 
    }
    return risultato;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(inizianoCon(names, 'a'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]