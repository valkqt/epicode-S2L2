/* ESERCIZIO 1
//  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
// */

num1 = parseInt(prompt('pick the first number'))
num2 = parseInt(prompt('pick the second number'))

if (num1 > num2) {
  console.log(`${num1} è il più grande!`)
} else if (num1 == num2) {
  console.log(`${num1} e ${num2} sono uguali!`)
} else {
  console.log(`${num2} è il più grande!`)
}

// /* ESERCIZIO 2
//   Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
// */

let userInput = parseInt(prompt('Insert an integer'))

if (userInput != 5) {
  console.log('not equal')
}

// /* ESERCIZIO 3
//   Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */

if (userInput % 5 == 0) {
  console.log('divisibile per 5')
}

// /* ESERCIZIO 4
//   Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// */

let input1 = parseInt(prompt('Write the first integer'))
let input2 = parseInt(prompt('Write the second integer'))

if (input1 == 8 || input2 == 8){
  console.log('uguaglianza')
} else if (input1+input2 == 8){
  console.log('addizione')
} else if(input1-input2 == 8 || input2-input1 == 8){
  console.log('sottrazione')
}

// /* ESERCIZIO 5
//   Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
//   C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
//   Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
// */

let totalShoppingCart = parseInt(prompt("Inserisci la spesa"));

if (totalShoppingCart > 50) {
  console.log(
    `il costo totale è ${totalShoppingCart}, la spedizione è gratuita!`
  );
} else {
  console.log(`il costo totale è ${totalShoppingCart + 10}`);
}


// /* ESERCIZIO 6
//   Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
//   Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// */

let afterSalesCost = totalShoppingCart*0.8
afterSalesCost > 50 ? console.log(`il costo totale è ${afterSalesCost}, la spedizione è gratuita!`) : console.log(`il costo totale è ${afterSalesCost+10}`)

// /* ESERCIZIO 7
//   Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
//   Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
//   Alla fine mostra il risultato in console.
// */

let a = 5;
let b = 8;
let c = 2;

let first;
let second;
let third;

let largest;

if (a >= b && a >= c) {
  largest = a;
} else if (b >= a && b >= c) {
  largest = b;
} else {
  largest = c;
}

console.log(`il numero più grande è ${largest}`);

if (largest == a) {
  first = a;
  if (b > c) {
    second = b;
    third = c;
  } else if (c > b) {
    second = c;
    third = b;
  }
} else if (largest ==  b) {
  first = b
  if (a > c) {
    second = a;
    third = c;
  } else if (c > a) {
    second = c;
    third = a;
  }
} else if (largest == c) {
  first = c
  if (a>b) {
    second=a
    third =b
  } else if(b>a) {
    second=b
    third=a
  }
}

let orderedNumbers = [first, second, third]
console.log(orderedNumbers)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

// Impossibile parsare un prompt usando solo parseInt o parseFloat, in quanto un input come "3487sdjksd" darà typeof Number === true

let userInput6 = prompt('Insert ANYTHING')
if (isNaN(userInput6)) {
  console.log('non è un numero')
} else {
  console.log('è un numero')
}

// /* ESERCIZIO 9
//   Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */

let userInput4 = parseInt(prompt('Insert a number'))

userInput4 % 2 == 0 ? console.log('pari') : console.log('dispari')

// /* ESERCIZIO 10
//   Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
//   let val = 7
//   if (val < 10) {
//       console.log("Meno di 10");
//     } else if (val < 5) {
//       console.log("Meno di 5");
//     } else {
//       console.log("Uguale a 10 o maggiore");
//     }
// */

let val = 7
if (5 <= val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

// /* ESERCIZIO 11
//   Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
// */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'

// /* ESERCIZIO 12
//   Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
// */

delete me.lastName

// /* ESERCIZIO 13
//   Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
// */

// // the method pop() will return the element. use slice() method to remove elements without returning anything

me.skills.pop()

// /* ESERCIZIO 14
//   Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
// */

let testArray = []

for (i=1; i<11; i++) {
  testArray.push(i)
}

console.log(testArray)

// /* ESERCIZIO 15
//   Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
// */

testArray[testArray.length-1] = 100
console.log(testArray)
