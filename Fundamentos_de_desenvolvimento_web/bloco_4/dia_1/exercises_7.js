//Variavel 
let note = 49;

//conversão
if (note < 0 || note > 100) {
  console.log('Error: input a value between 0 and 100');
} else if (note >= 90) {
  console.log('Percentagem => A');
} else if (note >= 80) {
  console.log('Percentagem => B');
} else if (note >= 70) {
  console.log('Percentagem => C');
} else if (note >= 60) {
  console.log('Percentagem => D');
} else if (note >= 50) {
  console.log('Percentagem => E');
} else {
  console.log('Percentagem => F');
}

/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100*/