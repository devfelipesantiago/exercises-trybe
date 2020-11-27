let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lower = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < lower || lower == 0) {
    lower = numbers[index];
  }
}
console.log(lower);