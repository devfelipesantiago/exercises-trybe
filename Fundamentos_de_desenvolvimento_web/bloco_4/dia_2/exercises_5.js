let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highest = 0;

for (let index = 0; index < numbers.length; index++) {
  let element = numbers[index];
  if (element > highest) {
    highest = element;
  }
}
console.log(highest);
