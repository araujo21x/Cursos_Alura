const dbProviders = require('../dataBase/entity/providers');

class ProvidersRepository {
  async findAll(){
    return dbProviders.findAll()
  }
}

module.exports = new ProvidersRepository();