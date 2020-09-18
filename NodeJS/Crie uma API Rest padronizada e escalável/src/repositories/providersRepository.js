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

  async edit(provider, id){
    //ver qual comando para editar
    return await dbProviders.edit(provider);
  }
}

module.exports = new ProvidersRepository();