const repository = require('../repositories/providersRepository');

class ProvidersController {
  async index(require, response) {
    try{
      const result = await repository.findAll();
      return response.status(200).json(result);
    }catch(err){
      return response.status(400).json(err);
    }
    
  }
}

module.exports = new ProvidersController();