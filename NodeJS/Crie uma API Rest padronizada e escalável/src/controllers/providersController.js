const repository = require('../repositories/providersRepository');
const { validProviders, factoryProviders } = require('../validator/providersValidator');

class ProvidersController {
  async index(require, response) {
    try {
      const result = await repository.findAll();
      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
  async store(require, response) {
    try {
      await validProviders(require);
      const result = await repository.create(await factoryProviders(require));
      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(require, response) {
    try {
      const id = Number(require.params.id);
      const result = await repository.findById(id);
      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(require, response) {
    try {
      const id = Number(require.params.id);
      await validProviders(require);
      const result = await repository.edit(await factoryProviders(require), id);
      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

module.exports = new ProvidersController();