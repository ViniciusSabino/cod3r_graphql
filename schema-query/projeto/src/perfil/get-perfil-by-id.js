const getPerfis = require('./get-perfis');

const getPerfilById = (_, { id }) => {
    const perfis = getPerfis();

    const searchedPerfil = perfis.find((perfil) => perfil.id === id);

    return searchedPerfil || null;
};

module.exports = getPerfilById;
