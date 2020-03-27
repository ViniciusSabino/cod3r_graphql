const User = require('./user');
const Product = require('./product');
const Other = require('./other');
const Perfil = require('./perfil');

// Irá resolver os dados de várias formas diferentes
const resolvers = {
    ...User.resolvers,
    ...Product.resolvers,

    Query: {
        ...User.queries,
        ...Product.queries,
        ...Other.queries,
        ...Perfil.queries,
    },
};

module.exports = resolvers;
