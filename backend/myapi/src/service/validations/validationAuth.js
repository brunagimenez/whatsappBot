const { passwordIsEqual } = require("../../utils/Bcrypt");

const validateAuth = (employee, { password }) => {
    if (!employee) return {
        type: 'INVALID_VALUE', message: 'Employee Not Found'
    };
    if (!passwordIsEqual(password, employee.password)) return {
        type: 'INVALID_VALUE', message: 'Invalid Username or Password'
    };
};

module.exports = {
    validateAuth,
};