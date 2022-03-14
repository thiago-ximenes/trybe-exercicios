const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

async function lerArquivo() {
  try {
    const data = await fs.readFile(nomeDoArquivo, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
  }
}

lerArquivo();