const pool = require('../../db.js');
const queries = require('./queries');

const getShelves = (req, res) => {
  pool.query(queries.getShelves, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getShelfById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getShelfById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}

module.exports = {
  getShelves,
  getShelfById
}