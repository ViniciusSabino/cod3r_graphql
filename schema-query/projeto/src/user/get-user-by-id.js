// no caso de Query o primeiro parametro irá vir como undefined

// no caso de outros resolver esse primeiro parametro irá receber o objeto que foi retornado pelo resolver pai

const getUsers = require('./get-users');

const getUserById = (_, { id }) => {
    const users = getUsers();

    const searchedUser = users.find((user) => user.id === id);

    return searchedUser || null;
};

module.exports = getUserById;
