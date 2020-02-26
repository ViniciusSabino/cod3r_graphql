const { ApolloServer, gql } = require('apollo-server');

// Schema da minha API (Como vou mapeaer e modelar os dados)    
const typeDefs = gql`
  scalar Date

  # ! => significa que o atributo é obrigatório
  type Usuario {
      id: ID
      nome: String!
      email: String!
      idade: Int
      salario: Float
      vip: Boolean
  }

  # Pontos de entrada da sua API!  
  type Query {
      ola: String!
      horaAtual: Date!
      usuarioLogado: Usuario
  }
`;

// Irá resolver os dados de várias formas diferentes 
const resolvers = { 
     Query: {
       ola() {
         return "Basta retornar uma string";
       },

       horaAtual() {
         return new Date();
       },

       usuarioLogado() {
         return {
           id: 1,
           nome: 'Vinícius Sabino da Rocha',
           email: 'vnc.chelsea@gmail.com',
           idade: 24,
           salario: 9999.99,
           vip: true
         }
       }

     }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
