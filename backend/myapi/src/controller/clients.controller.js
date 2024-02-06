const { clientsService } = require('../service');
const errorMap = require('../utils/errorMap');

const findAll = async (_req, res) => {
    const { type, message } = await clientsService.findAll();

    if (type) return res.status(errorMap.mapError(type)).json(message);

    return res.status(200).json(message);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await clientsService.findById(id);

    if (type) return res.status(errorMap.mapError(type)).json({ message });

    res.status(200).json(message);
  };

const create = async (req, res) => {
    const { name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id  } = req.body;

    const { type, message } = await clientsService.create( name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id )

    if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  
  const { type, message } = await clientsService.deleteById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(204).json(message);
};

module.exports = {
    findAll,
    create,
    findById,
    deleteById,
};