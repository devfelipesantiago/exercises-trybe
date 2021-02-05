let fatorial = (number) =>
  number > 1 ? number * fatorial(number - 1) : number;
console.log(fatorial(50));
