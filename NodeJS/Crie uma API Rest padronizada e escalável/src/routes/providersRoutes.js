const router = require('express').Router();
const providersController = require('../controllers/providersController');

router.route('/providers')
  .get(providersController.index)
  .post(providersController.store);

router.route('/providers/:id')
  .get(providersController.show)
  .put(providersController.update)
  .delete(providersController.delete);
  
module.exports = router;