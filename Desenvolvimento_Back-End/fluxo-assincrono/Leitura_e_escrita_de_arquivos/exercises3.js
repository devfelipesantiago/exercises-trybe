const callOperator = async () => {
  const randomNumber = Array.from({ length: 3 }).map(number);
  try {
    result = await operator(...randomNumber);
  } catch (error) {
    console.error(error);
  }
}