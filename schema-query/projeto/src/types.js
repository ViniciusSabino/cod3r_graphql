const { gql } = require('apollo-server');

// Schema da minha API (Como vou mapeaer e modelar os dados)
const typeDefs = gql`
    # ! => significa que o atributo é obrigatório
    type Usuario {
        id: Int
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

    type Perfil {
        id: Int
        nome: String
    }

    # Pontos de entrada da sua API!
    type Query {
        usuarioLogado: Usuario
        usuarios: [Usuario!]!
        usuario(id: Int): Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        perfis: [Perfil]
        perfil(id: Int): Perfil
    }
`;

module.exports = typeDefs;
