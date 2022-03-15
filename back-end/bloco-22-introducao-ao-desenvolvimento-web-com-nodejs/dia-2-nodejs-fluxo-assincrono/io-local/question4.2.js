const fs = require('fs').promises;

async function getById(id) {
    const promise = await fs.readFile('./simpsons.json', 'utf8');
    const data = JSON.parse(promise);
  return new Promise((resolve, reject) => {
    const character = data.find((character) => Number(character.id) === id);
    if (character) {
      resolve(character);
    } else {
      reject(new Error('id não encontrado'));
    }
  })
}

getById(0)
  .then((character) => console.log(character))
  .catch((err) => console.log(err));
