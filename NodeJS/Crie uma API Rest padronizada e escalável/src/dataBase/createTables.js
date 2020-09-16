const providers = require('./entity/providers');

providers.sync()
  .then(() => console.log('Success'))
  .catch(err => console.log(err));