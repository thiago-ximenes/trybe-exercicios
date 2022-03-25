const connection = require('./connection');

function getNewAuthor({id, firstName, middleName, lastName}) {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

function serialize (authorData) {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

async function getAll() {
  const [result] = await connection
    .execute(
      `SELECT id, first_name, middle_name, last_name
      FROM authors`
    );
  return result
    .map(serialize)
    .map(getNewAuthor);
}

module.exports = {
  getAll,
}