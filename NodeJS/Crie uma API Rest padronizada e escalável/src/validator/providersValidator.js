exports.factoryProviders = async (require) => {
  const { company, email, category } = require.body;
  return { company, email, category };
}

exports.validProviders = async (require) => {
  const { company, email, category } = require.body;
  if (company !== undefined)
    if (!company) throw new Error('Empresa é obrigatório.');
  if (email !== undefined)
    if (!email) throw new Error('Email é obrigatório.');
  if (category !== undefined) {
    if (!category) throw new Error('Categoria é obrigatório.');
    if (category !== 'ração' && category !== 'brinquedo') throw new Error('Categoria Inválida.');
  }

  return
}