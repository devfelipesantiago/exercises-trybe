/**
 * Tipos primitivos:
Hoje nós vamos focar em alguns dos tipos primitivos, que são os tipos boolean, number, string, void, null e undefined.

boolean: recebe verdadeiro (true) ou falso (false)
 */

let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é booleano e o valor é true
let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é booleano e o valor é false

// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
let x: number;

let y: number = 0;
let z: number = 123.456;

let s: string;
let empty: string = "";
let abc: string = 'abc';

//void: existe apenas para indicar a ausência de um valor, como em uma função sem valor retornado.
function sayHelloWorld(): void {
  console.log("Hello World!");
}

let nullValue = null;
let undefinedValue = undefined;

let flag = true; // o compilador irá inferir o tipo boolean
console.log('O tipo de "flag" é:', typeof flag);

const numberPI = 3.1416; // o compilador irá inferir o tipo number
console.log('O tipo de "numberPI" é:', typeof numberPI);

let message = "Hello World!"; // o compilador irá inferir o tipo string
console.log('O tipo de "message" é:', typeof message);