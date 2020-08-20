const { ApolloServer } = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')

// Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

console.log('asdsa')
// Run Server
server.listen().then(({ url }) => {
  console.log(`Servidor listo en la URL ${url}`)
})
