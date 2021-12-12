import { ApolloServer } from 'apollo-server-lambda'
import schema from 'graphql-api'

const server = new ApolloServer({ schema })

export const handler = server.createHandler()
