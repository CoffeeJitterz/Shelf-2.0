const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const getShelvesByUserId = "SELECT * FROM shelves WHERE user_id = $1";
const getShelfById = "SELECT * FROM shelves WHERE user_id = $1 AND id = $2";
const getSpinesByShelfIdAndUserId = "SELECT * FROM spines JOIN shelves ON shelf_id = shelves.id WHERE user_id = $1 AND shelf_id = $2;";

module.exports = {
  getUsers,
  getUserById,
  getShelvesByUserId,
  getShelfById,
  getSpinesByShelfIdAndUserId
}