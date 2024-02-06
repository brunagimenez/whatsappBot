const { employeeModel } = require("../../model");

const validateEmailExist = async (email) => {
    if (!email) return {
        type: 'INVALID_VALUE', message: 'Email is required'
    };
    const employee = await employeeModel.findByEmail(email);
    if (employee) return {
        type: 'INVALID_VALUE', message: 'There is already a registration in this email' 
    };
    
    return { type: null, message: '' };  
};

module.exports = {
    validateEmailExist,
};