const fastifyGQL = require('fastify-gql')

const userList = [
  {
    name: 'Brian'
  },
  {
    name: 'Jack'
  },
  {
    name: 'Joe'
  },
  {
    name: 'Kristin'
  }
]

const schema = `
  type User {
    name: String
  }

  type Query {
    users: [User]
  }
`

const resolvers = {
  Query: {
    users() {
      return userList
    }
  }
}

function registerGraphQL(fastify, opts, next) {
  fastify.register(fastifyGQL, {
    schema,
    resolvers,
    graphiql: true
  })

  next()
}

module.exports = registerGraphQL
