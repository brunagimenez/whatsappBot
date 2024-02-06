const express = require('express');
const { clientsRoute, authRoute, employeeRoute} = require('./routes');

const app = express();
app.use(express.json());


app.get('/', (_req, res) => {
    res.json({ status: 'Store Manager UP!' });
});

app.use('/clients', clientsRoute);
app.use('/auth', authRoute);
app.use('/employee', employeeRoute);

module.exports = app;