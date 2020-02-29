const getLoggedUser = require('./get-logged-user');
const enums = require('../helpers/enum');

const { types } = enums;

const queries = {
  usuarioLogado: getLoggedUser,
};

const resolvers = {
  [types.User]: {
      salario(usuario){
        return usuario.salario_real;
      }
  }
}


module.exports = {
  queries,
  resolvers,
};





