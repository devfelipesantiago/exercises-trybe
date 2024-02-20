const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const callOperator = () => {
  const randomNumber = Array.from({ length: 3}).map(number);

  operator(...randomNumber)
  .then(result => console.log(result))
  .catch(err => console.error(err.message))
}