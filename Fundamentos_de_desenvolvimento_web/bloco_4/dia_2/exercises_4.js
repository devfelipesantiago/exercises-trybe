/*Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/
//variaveis
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let amount = 0;

for (let i = 0; i < numbers.length; i++) {
  amount = numbers[i];
}

let average = amount / numbers.length;
if (average <= 20) {
  console.log("valor menor ou igual a 20");
} else {
  console.log("valor maior que 20");
}
