const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes/index');

app.use(bodyParser.json());
routes(app);

module.exports = app;