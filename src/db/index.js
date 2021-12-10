require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool ({
  user: process.env.USER,
  host: 'localhost',
  database: process.env.DB_NAME,
  port: process.env.PORT
})

module.exports = pool;