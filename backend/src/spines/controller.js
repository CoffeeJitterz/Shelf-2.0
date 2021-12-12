const pool = require('../../db.js');
const queries = require('./queries');

const getSpines = (req, res) => {
  pool.query(queries.getSpines, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getSpinesByUserId = (req, res) => {
  const user_id = parseInt(req.params.user_id)
  pool.query(queries.getSpinesByUserId, [user_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}

module.exports = {
  getSpines,
  getSpinesByUserId
}