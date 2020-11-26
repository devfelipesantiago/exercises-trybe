//variaveis
let salary = 3000;
let inss = 0;
let ir = 0;
let installment = 0;

//salario liquido
if (salary <= 1556.94) {
  inss = 8;
  salary -= (inss / 100) * salary;
} else if (salary <= 2594.92 && salary >= 1556.95) {
  inss = 9;
  salary -= (inss / 100) * salary;
} else if (salary <= 5189.82 && salary >= 2594.93) {
  inss = 11;
  salary -= (inss / 100) * salary;
} else if (salary > 5189.82) {
  inss = 570.88;
  salary -= (inss / 100) * salary;
}

if (salary <= 1903.98) {
  ir = 0;
} else if (salary <= 2826.65 && salary >= 1903.99) {
  ir = 7.5;
  installment = 142.8;
} else if (salary <= 3751.05 && salary >= 2826.66) {
  ir = 15;
  installment = 354.8;
} else if (salary <= 4664.68 && salary >= 3751.06) {
  ir = 22.5;
  installment = 636.13;
} else if (salary >= 4664.68) {
  ir = 27.5;
  installment = 869.36;
}

salary -= (ir / 100) * salary - installment;
console.log("O valor do salario liquido é " + salary);
console.log(ir + " " + inss);