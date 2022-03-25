const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  password: '030580',
  user: 'thiago',
  host: 'localhost',
  database: 'model_example',
});

module.exports = connection;