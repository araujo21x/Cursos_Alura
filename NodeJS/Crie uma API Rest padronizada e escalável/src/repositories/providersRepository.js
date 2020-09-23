const dbProviders = require('../dataBase/entity/providers');

class ProvidersRepository {
  async findAll() {
    return await dbProviders.findAll();
  }

  async create(provider) {
    return await dbProviders.create(provider);
  }

  async findById(id) {
    const result = await dbProviders.findOne({ where: { id } });
    if (!result) throw new Error('Fornecedor não encontrado.');
    return result;
  }

  async edit(provider, id) {
    await this.findById(id);
    return await dbProviders.update(provider, { where: { id } });
  }

  async delete(id) {
    await this.findById(id);
    return await dbProviders.destroy({ where: { id } })
  }
}


module.exports = new ProvidersRepository();