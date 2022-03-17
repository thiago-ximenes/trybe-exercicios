const getSimpsonsFromJson = require('../services/getSimpsonsFromJson');

async function getSimpsons(req, res) {
  const simpsons = await getSimpsonsFromJson();
  return res.status(200).json(JSON.parse(simpsons));
}

module.exports = getSimpsons;
