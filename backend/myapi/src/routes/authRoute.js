const express = require('express');
const {authController} = require('../controller');

const route = express.Router();

route.post('/login', authController.login);

module.exports = route;