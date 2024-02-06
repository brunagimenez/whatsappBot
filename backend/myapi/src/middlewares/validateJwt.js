const { decodeToken } = require("../utils/JWT");

const validateJwt = (req, res, next) => {
    const { authorization: token } = req.headers;
    try {
        if (!token) res.status(403).json({ message: '"TOKEN" is required' });
        decodeToken(token);
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' }); 
    }
    return next();
}

module.exports = {
    validateJwt,
};