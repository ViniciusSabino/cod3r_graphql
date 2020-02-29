const getFeatureProduct = require('./get-feature-product');
const enums = require('../helpers/enum');

const { types } = enums;

const queries = {
  produtoEmDestaque: getFeatureProduct,
};

const resolvers = {
  [types.Product]: {
    precoComDesconto({ preco, desconto }){
      return (desconto) ? preco * (1 - desconto) : preco;
    }
  }
}

module.exports = {
  queries,
  resolvers,
}
