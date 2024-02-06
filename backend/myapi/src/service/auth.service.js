const { employeeModel } = require('../model');
const schema = require('./validations/validationAuth');
const {createToken} = require('../utils/JWT');

const login = async ({ email, password }) => {
    const employee = await employeeModel.findByEmail(email);
    const error = schema.validateAuth(employee, { password });
    if (error) return error;;
    const payload = {
        id: employee.id,
    }
    const token = createToken(payload);

    return token;
};

module.exports = {
    login,
};