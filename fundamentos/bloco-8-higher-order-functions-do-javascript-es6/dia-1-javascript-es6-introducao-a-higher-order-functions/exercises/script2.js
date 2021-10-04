const drawNumbers = 2;

const raffle = (drawNumbers, checkResult) => {
  const number = Math.ceil(Math.random() * 5);
  return checkResult(drawNumbers, number);
};

const checkResult = (drawNumbers, raffle) =>
  drawNumbers === raffle ? 'Parabéns você ganhou' : 'Tente Novamente';

  console.log(raffle(drawNumbers, checkResult))
