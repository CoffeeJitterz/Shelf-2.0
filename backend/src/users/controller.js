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
  });
};
const getShelvesByUserId = (req, res) => {
  const user_id = parseInt(req.params.id)
  pool.query(queries.getShelvesByUserId, [user_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}
const getShelfById = (req, res) => {
  const user_id = req.params.user_id;
  const id = req.params.id;
  pool.query(queries.getShelfById, [user_id, id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getSpinesByShelfIdAndUserId = (req, res) => {
  const user_id = req.params.user_id;
  const shelf_id = req.params.shelf_id;
  console.log(user_id, shelf_id)
  pool.query(queries.getSpinesByShelfIdAndUserId, [user_id, shelf_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
  getUserById,
  getShelvesByUserId,
  getShelfById,
  getSpinesByShelfIdAndUserId,
}