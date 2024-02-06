const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute('SELECT * FROM wweb_db.clients;');
    return result;
};

const findById = async (clientId) => {
    const [[result]] = await connection.execute('SELECT * FROM wweb_db.clients WHERE id = ?;', [clientId]);
    return camelize(result);
};

const create = async (name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id  ) => {
    const result = await connection.execute(`INSERT INTO wweb_db.clients ( name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [ name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id ]);
    return result;
};

const deleteById = async (clientId) => {
    await connection.execute(
        'DELETE FROM wweb_db.clients WHERE id = ?',
        [clientId],
      );
}

module.exports = {
    findAll,
    findById,
    create,
    deleteById,
};