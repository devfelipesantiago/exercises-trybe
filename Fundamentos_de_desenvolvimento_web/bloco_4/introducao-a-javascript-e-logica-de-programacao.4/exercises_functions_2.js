function lowerValue(array) {
  let value = 0;
  for (let i = 0; i < array.length; i++) {
    if (value < array[i]) {
      value = array[i]
    }
  }
  return value;
}

console.log(lowerValue([2, 30, 6, 79, 10, 1]));