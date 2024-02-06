const { clientsModel } = require('../model');
const schema = require('./validations/validationValues');

const findAll = async () => {
    const result = await clientsModel.findAll();
    return { type: null, message: result}
};

const findById = async (clientId) => {
    const error = schema.validateId(clientId);
    if (error.type) return error;

    const client = await clientsModel.findById(clientId);

    if (!client) return { type: 'NOT_FOUND', message: 'Client not found' }
    
    return { type: null, message: client };
}

const create = async ( name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id ) => {

    const error = schema.validateNewClient(name);
    if (error.type) return error;

    const newClient = await clientsModel.create( name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id );
    const newClientId = newClient[0].insertId;
    const client = await clientsModel.findById(newClientId);

    return { type: null, message: client };

};

const deleteById = async (clientId) => {
    const client = await clientsModel.findById(clientId);
    if (!client) return { type: 'NOT_FOUND', message: 'Client not found' };
    
    await clientsModel.deleteById(clientId);
    return { type: null, message: client };
}

module.exports = {
    findAll,
    create,
    findById,
    deleteById,
};