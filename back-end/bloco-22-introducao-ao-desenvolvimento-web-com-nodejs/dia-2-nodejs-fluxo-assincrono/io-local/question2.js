const { main } = require('./question1');

const numberBetweenOneAndOneHundred = Math.floor(Math.random() * 100) + 1;

// main(
//   numberBetweenOneAndOneHundred,
//   numberBetweenOneAndOneHundred,
//   numberBetweenOneAndOneHundred
// )
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

async function randomMain(randomNumber) {
  try {
    const result = await main(
      randomNumber, randomNumber, randomNumber
    )
    return console.log(result);
  } catch (err) {
    return console.log(err);
  }
}

randomMain(numberBetweenOneAndOneHundred);
