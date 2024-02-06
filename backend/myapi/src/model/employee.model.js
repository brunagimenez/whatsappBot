const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute('SELECT id, name, email, role, birthday FROM wweb_db.employee;');
    return result;
};

const findById = async (employeeId) => {
    const [[result]] = await connection.execute('SELECT id, name, email, role, birthday FROM wweb_db.employee WHERE id = ?;', [employeeId]);
    return camelize(result);
};

const findByEmail = async (email) => {
    const [[result]] = await connection.execute('SELECT * FROM wweb_db.employee WHERE email = ?;', [email]);
    return camelize(result);
};

const create = async ( name, email, password, role, birthday ) => {
    const result = await connection.execute(`INSERT INTO wweb_db.employee ( name, email, password, role, birthday ) VALUES (?, ?, ?, ?, ?)`, [ name, email, password, role, birthday ]);
    return result;
};

const deleteById = async (employeeId) => {
    await connection.execute(
        'DELETE FROM wweb_db.employee WHERE id = ?',
        [employeeId],
      );
}

module.exports = {
    findAll,
    findById,
    create,
    deleteById,
    findByEmail,
};