const fs = require('fs').promises;

async function getSimpsons(req, res) {
  const simpsons = await fs.readFile('simpsons.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    return JSON.parse(data);
  });
  return res.status(200).json(JSON.parse(simpsons));
}

module.exports = getSimpsons;
