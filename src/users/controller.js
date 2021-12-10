const pool = require('../../db.js');
const queries = require('./queries');

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getUserById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getUserById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}
const getShelvesByUserId = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getShelvesByUserId, [user_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}

module.exports = {
  getUsers,
  getUserById,
  getShelvesByUserId
}