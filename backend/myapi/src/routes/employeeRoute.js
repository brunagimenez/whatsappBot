const express = require('express');
const {validateJwt} = require('../middlewares/validateJwt');
const {employeeController} = require('../controller');

const route = express.Router();

route.get('/', validateJwt, employeeController.findAll);
route.get('/:id', validateJwt, employeeController.findById);
route.post('/email', validateJwt, employeeController.findByEmail);
route.post('/', employeeController.create);
route.delete('/:id', validateJwt, employeeController.deleteById);

module.exports = route;