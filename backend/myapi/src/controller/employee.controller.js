const { employeeService } = require('../service');
const errorMap = require('../utils/errorMap');

const findAll = async (_req, res) => {
    const { type, message } = await employeeService.findAll();

    if (type) return res.status(errorMap.mapError(type)).json(message);
    return res.status(200).json(message);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await employeeService.findById(id);

    if (type) return res.status(errorMap.mapError(type)).json({ message });

    res.status(200).json(message);
  };

const findByEmail = async (req, res) => {
    const { email } = req.body;
    const { type, message } = await employeeService.findByEmail(email);

    if (type) return res.status(errorMap.mapError(type)).json({ message });

    res.status(200).json(message);
};

const create = async (req, res) => {
    const { name, email, password, role, birthday  } = req.body;

    const { type, message } = await employeeService.create( name, email, password, role, birthday )

    if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  
  const { type, message } = await employeeService.deleteById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(204).json(message);
};

module.exports = {
    findAll,
    create,
    findById,
    deleteById,
    findByEmail,
};