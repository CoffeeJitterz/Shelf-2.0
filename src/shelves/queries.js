const getShelves = "SELECT * FROM shelves";
const getShelfById = "SELECT * FROM shelves WHERE id = $1"

module.exports = {
  getShelves,
  getShelfById
}