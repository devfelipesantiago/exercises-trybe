/*Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;*/
//Array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let amount = 0;

for (let i = 0; i < numbers.length; i++) {
  amount += numbers[i]; 
  //amount += sum;
}
console.log(amount);
