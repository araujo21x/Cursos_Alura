const routes = require('express').Router();
const providersController = require('../controllers/providersController');

routes.route('/')
  .get(providersController.index);

module.exports = routes;