const app = require('./');
const config = require('config');

app.listen(config.get('api.port'), () => console.log('Server On Port: 3000'));