function lowerValue(array) {
  let value = 0;
  for (let index = 0; index < array.length; index++) {
    if (value > array[index]) {
      value = array[index];
    }     
  }
  return value;
}

console.log(lowerValue([2, 4, 6, 7, 10, 0, -3]));