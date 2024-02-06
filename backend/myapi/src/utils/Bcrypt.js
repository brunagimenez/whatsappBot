const bcrypt = require('bcrypt');

const hashPassword = (password) => bcrypt.hashSync(password, 12);

const passwordIsEqual = (password, hashPassword) => bcrypt.compareSync(password, hashPassword);

module.exports = {
    hashPassword,
    passwordIsEqual,
};