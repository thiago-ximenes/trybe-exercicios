const getSimpsonsFromJson = require('../services/getSimpsonsFromJson');

async function getSimpsonById(req, res) {
  const { id } = req.params;

  const data = await getSimpsonsFromJson();
  const simpsons = await JSON.parse(data);
  const simpson = simpsons.find((simpson) => simpson.id === parseInt(id));
  if (!simpson) {
    res.status(404).json({ message: 'Simpson not found!' });
  }
  return res.status(200).json(simpson);
}

module.exports = getSimpsonById;
