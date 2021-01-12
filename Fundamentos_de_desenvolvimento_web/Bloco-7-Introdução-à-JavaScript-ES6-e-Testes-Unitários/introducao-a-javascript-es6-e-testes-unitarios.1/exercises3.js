let fatorial = (number) => {
  if (number > 1) {
    return number * fatorial(number - 1);
  }
  return number;
};

console.log(fatorial(50));
