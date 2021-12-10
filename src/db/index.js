const Pool = require('pg').Pool;

const pool = new Pool ({
  user:'joshmillard',
  host: 'localhost',
  database: 'shelf',
  port: 5432
})

module.exports = pool;