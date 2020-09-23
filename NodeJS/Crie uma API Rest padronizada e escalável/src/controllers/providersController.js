const repository = require('../repositories/providersRepository');
const { validProviders, factoryProviders } = require('../validator/providersValidator');

class ProvidersController {
  async index(request, response) {
    try {
      const result = await repository.findAll();
      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
  async store(request, response) {
    try {
      await validProviders(request);
      const result = await repository.create(await factoryProviders(request));
      return response.status(201).json(result);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(request, response) {
    try {
      const id = Number(request.params.id);
      const result = await repository.findById(id);
      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(request, response) {
    try {
      const id = Number(request.params.id);
      await validProvidersEdit(request);
      await repository.edit(await factoryProviders(request), id);
      return response.status(204);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
  async delete(request, response) {
    try {
      const id = Number(request.params.id);
      await repository.delete(id);
      return response.status(204);
    } catch (err) {
      return response.status(404).json({ message: err.message });
    }
  }
}

module.exports = new ProvidersController();