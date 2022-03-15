const fs = require('fs').promises;

const arrayOfStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

async function arrayToFile() {
  const arrayOfFiles = arrayOfStrings.map((string, index) => {
    fs.writeFile(`./${index}.txt`, string);
  })
  try {
    await Promise.all(arrayOfFiles)
    console.log('Arquivos escritos com sucesso!')
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.path}`);
    console.log(err);
  }
}

async function readAllFiles() {
  const arrayOfFiles = arrayOfStrings.map((string, index) => {
    return fs.readFile(`./${index}.txt`, 'utf8');
  })
  try {
    console.log('Arquivos lidos com sucesso!')
    return await Promise.all(arrayOfFiles)
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
  }
}

async function writeArrayToFile() {
  const arrayOfFiles = await readAllFiles();
  await fs.writeFile('./fileAll.txt', arrayOfFiles.join(' '));
}

writeArrayToFile();
