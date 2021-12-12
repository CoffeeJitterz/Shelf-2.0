const getSpines = "SELECT * FROM spines";
const getSpinesById = "SELECT * FROM spines WHERE id = $1"
const getSpinesByUserId = "SELECT * FROM spines WHERE user_id = $1"

module.exports = {
  getSpines,
  getSpinesById,
  getSpinesByUserId
}