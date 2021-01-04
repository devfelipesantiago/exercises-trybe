function checkFinal(word, ending) {
  let check = word.slice(word.length - ending.length, word.length);

  if (check === ending) {
    return true;
  } else {
    return false;
  }
}

//console.log(checkFinal("trybe", "be"));
console.log(checkFinal("joaofernando", "fernan"));
