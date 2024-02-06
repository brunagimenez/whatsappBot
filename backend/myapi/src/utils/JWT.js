const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const jwtConfig = {
    expiresIn: '15m',
};

const createToken = (payload) => jwt.sign(payload, TOKEN_SECRET, jwtConfig)

const decodeToken = (token) => jwt.verify(token, TOKEN_SECRET)

module.exports = {
    createToken,
    decodeToken,
}