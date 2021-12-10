const { Router } = require('express');
const { getShelvesByUserId } = require('../shelves/queries');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.get('./:id/shelves', controller.getShelvesByUserId);

module.exports = router;
