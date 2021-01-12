const longestWord = (phrase) => {
  const listOfString = phrase.split(' ');
  let biggestWord = '';

  for (const element of listOfString) {
    if (element.length > biggestWord.length) {
      biggestWord = element;
    }
  }
  console.log(`A maior palavra da frase é ${biggestWord}.`);
};

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
