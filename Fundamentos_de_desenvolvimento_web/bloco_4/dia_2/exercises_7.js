let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lower = 0;

for (let index = 0; index < numbers.length; index++) {
  let element = numbers[index];
  if (element < lower || lower == 0) {
    lower = element;
  }
}
console.log(lower);