const express = require('express');
const validateNewClientFields = require('../middlewares/validateNewClientFields');
const {validateJwt} = require('../middlewares/validateJwt');
const {clientsController} = require('../controller');

const route = express.Router();

route.get('/', validateJwt, clientsController.findAll);
route.get('/:id', validateJwt, clientsController.findById);
route.post('/', validateJwt, validateNewClientFields, clientsController.create);
route.delete('/:id', validateJwt, clientsController.deleteById);

module.exports = route;