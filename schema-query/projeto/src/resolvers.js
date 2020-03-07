const User = require('./user');
const Product = require('./product');

// Irá resolver os dados de várias formas diferentes
const resolvers = {
    ...User.resolvers,
    ...Product.resolvers,

    Query: {
        ...User.queries,
        ...Product.queries,
    },
};

module.exports = resolvers;
