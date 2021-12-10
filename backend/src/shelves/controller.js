const pool = require('../../db.js');
const queries = require('./queries');

const getShelves = (req, res) => {
  pool.query(queries.getShelves, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getShelvesByUserId = (req, res) => {
  const user_id = parseInt(req.params.user_id)
  pool.query(queries.getShelvesByUserId, [user_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}

module.exports = {
  getShelves,
  getShelvesByUserId
}