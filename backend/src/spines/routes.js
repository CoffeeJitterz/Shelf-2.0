const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getSpines);
router.get('/:user_id', controller.getSpinesByUserId);

module.exports = router;