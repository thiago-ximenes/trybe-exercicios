const fatorial = (value) => {
  if (value < 0)  return false;
  return value === 0 ? 1 : value * fatorial(value - 1);
}

console.log(fatorial(5))

const longestWord = (phrase) => {
  let allPhrase = phrase.split(" ");
  console.log(allPhrase)
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'