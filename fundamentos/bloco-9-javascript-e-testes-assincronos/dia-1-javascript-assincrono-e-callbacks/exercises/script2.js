const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

function sendMarsTemperature() {
  const marsTemperature = getMarsTemperature();
  const sendMessage = `Mars temperature is: ${marsTemperature} degree Celsius`;
  return setTimeout(() => console.log(sendMessage), messageDelay())
} // imprime "Mars temperature is: 20 degree Celsius", por exemplo

sendMarsTemperature()
