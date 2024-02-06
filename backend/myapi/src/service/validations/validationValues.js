const { idSchema, insertClientsSchema } = require('./schemas');

const validateId = (id) => {
    const { error } = idSchema.validate(id);
    if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
    
    return { type: null, message: '' };
};

const validateNewClient = (name) => {
    const messageErro = '"name" length must be at least 3 characters long ' ;
    const { error } = insertClientsSchema.validate({ name });
    if (error) return { type: 'INVALID_VALUE', message: messageErro };
    
    return { type: null, message: '' };
};

module.exports = {
    validateId,
    validateNewClient,
};