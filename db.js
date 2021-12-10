require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool ({
  user: process.env.USER,
  host: 'localhost',
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

if (pool) {
  console.log("Database Connected!")
}

module.exports = pool;