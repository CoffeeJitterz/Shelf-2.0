const getSpines = "SELECT * FROM spines";
const getSpinesByUserId = "SELECT spines.name, spines.color, spines.font, shelf_id, website_id FROM spines JOIN shelves ON shelf_id = shelves.id WHERE user_id = $1"

module.exports = {
  getSpines,
  getSpinesByUserId
}