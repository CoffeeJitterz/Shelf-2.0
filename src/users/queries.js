const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1"
const getShelvesByUserId = "SELECT * FROM shelves WHERE user_id = $1"

module.exports = {
  getUsers,
  getUserById
}