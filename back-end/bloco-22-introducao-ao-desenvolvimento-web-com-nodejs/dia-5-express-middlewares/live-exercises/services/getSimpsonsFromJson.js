const fs = require('fs').promises;

async function getSimpsonsFromJson() {
  return await fs.readFile('simpsons.json', 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      return data.json();
    });
}

module.exports = getSimpsonsFromJson;
