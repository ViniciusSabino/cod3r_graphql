const { gql } = require('apollo-server');

// Schema da minha API (Como vou mapeaer e modelar os dados)
const typeDefs = gql`
    # ! => significa que o atributo é obrigatório
    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float!
        precoComDesconto: Float
    }

    # Pontos de entrada da sua API!
    type Query {
        usuarioLogado: Usuario
        usuarios: [Usuario!]!
        produtoEmDestaque: Produto
    }
`;

module.exports = typeDefs;
