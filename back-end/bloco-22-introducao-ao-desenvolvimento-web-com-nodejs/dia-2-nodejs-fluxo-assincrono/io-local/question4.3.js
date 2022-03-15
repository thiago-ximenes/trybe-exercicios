const fs = require('fs').promises;

async function readFile() {
  try {
    const promise = await fs.readFile('./simpsons.json', 'utf8');
    const data = JSON.parse(promise);
    return data;
  } catch(err) {
    throw new Error(`Erro ao ler o arquivo: ${err.path}`);
  }
}

async function removeCharacterFromArray() {
  try {
    const data = await readFile();
    const character = data.filter((character) => Number(character.id) !== 10 && Number(character.id) !== 6);
    return character;
  } catch(err) {
    throw new Error(err);
  }
}

async function writeFile() {
  try {
    const data = await removeCharacterFromArray();
    await fs.writeFile('./simpsons.json', JSON.stringify(data));
  } catch(err) {
    throw new Error(err);
  }
}

writeFile()
