const fs = require('fs').promises;

async function readFile() {
  try {
    const promise = await fs.readFile('./simpsons.json', 'utf8');
    const data = JSON.parse(promise);
    return data.map((character) => `${character.id} - ${character.name}`);
  } catch(err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
  }
}

readFile()
