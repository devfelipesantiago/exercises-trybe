const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = (temp) => {
  const maxTemperature = temp;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (newTemp) => {
  const temp = getMarsTemperature(newTemp);
  setTimeout(() => console.log(`Mars temperature is: ${temp} degree Celsius`), messageDelay());
}

sendMarsTemperature(58); // imprime "Mars temperature is: 20 degree Celsius", por exemplor