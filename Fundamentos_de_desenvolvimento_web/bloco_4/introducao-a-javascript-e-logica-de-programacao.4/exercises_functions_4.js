function countName(array) {
  let bigger = '';

  for (let i = 0; i < array.length; i += 1) {
    let name = (array[i]);
    if (bigger.length < name.length) {
      bigger = name
    }
  }
  return bigger;
}

console.log(countName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));