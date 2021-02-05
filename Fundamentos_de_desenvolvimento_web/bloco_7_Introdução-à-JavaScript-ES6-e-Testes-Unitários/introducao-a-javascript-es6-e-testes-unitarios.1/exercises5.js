const clickCount = document
  .getElementsByTagName('button')
  .addEventListener('click', (e) => {
    console.log(e.target);
  });
