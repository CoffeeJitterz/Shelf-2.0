require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool ({
  user: 'joshmillard',
  host: 'localhost',
  database: 'shelf',
  port: 5432
})
const users = pool.query("SELECT * FROM users", (error, results) => {
  if (error) throw error;
  console.log(results.rows);
})

console.log(users)

module.exports = pool;