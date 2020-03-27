const getLoggedUser = require('./get-logged-user');
const getUsers = require('./get-users');
const getUserById = require('./get-user-by-id')
const enums = require('../helpers/enum');

const { types } = enums;

const queries = {
    usuarioLogado: getLoggedUser,
    usuarios: getUsers,
    usuario: getUserById,
};

const resolvers = {
    [types.User]: {
        salario(usuario) {
            return usuario.salario_real;
        },
    },
};

module.exports = {
    queries,
    resolvers,
};
