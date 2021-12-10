const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getShelves);
router.get('/:user_id', controller.getShelvesByUserId);

module.exports = router;