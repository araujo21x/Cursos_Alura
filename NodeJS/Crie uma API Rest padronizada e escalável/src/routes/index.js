const providers = require('./providersRoutes')

module.exports = (app) => {
  app.use(providers);
};