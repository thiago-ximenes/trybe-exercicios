const fs = require('fs');

function readArchive(archiveName) {
  try {
    const arvhiveContent = fs.readFileSync(archiveName, 'utf8');
    return arvhiveContent;
  } catch (error) {
    return null;
  }
}

module.exports = readArchive;