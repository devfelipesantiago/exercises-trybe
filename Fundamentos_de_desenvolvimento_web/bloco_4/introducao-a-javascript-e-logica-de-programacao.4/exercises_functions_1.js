function verificaPalindromo(word) {
  let reverseWord = "";
  let arrayWord = word.split('');

  for (let i = arrayWord.length - 1; i >= 0; i -= 1) {
    //console.log(arrayWord[i]);
    reverseWord += arrayWord[i];
  }
  if (reverseWord === word) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verificaPalindromo("tenet");
verificaPalindromo("adida");
verificaPalindromo("trybe");