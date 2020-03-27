/*

Array Perfis = 'Comum', 'Administrador'

Tipo Perfil
    id, nome

Consultas
    - perfis
    - perfi(id)
*/

const getPerfis = require('./get-perfis');
const getPerfilById = require('./get-perfil-by-id');

const queries = {
    perfis: getPerfis,
    perfil: getPerfilById,
};

module.exports = {
    queries,
};
