const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host:'db',
    user:'root',
    password:'password',
    port: process.env.MYSQL_PORT,
    database:'wweb_db'
});

module.exports = connection;