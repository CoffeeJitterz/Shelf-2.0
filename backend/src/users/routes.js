const { Router } = require('express');
const { getShelvesByUserId } = require('../shelves/queries');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.get('/:id/shelves', controller.getShelvesByUserId);
router.get('/:user_id/shelves/:id', controller.getShelfById);
router.get('/:user_id/shelves/:shelf_id/spines', controller.getSpinesByShelfIdAndUserId);
router.get('/:user_id/shelves/spines', controller.getSpines)

module.exports = router;
