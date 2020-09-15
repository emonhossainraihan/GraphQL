const { GraphQLServer } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");
const { request } = require("express");
const prisma = new PrismaClient();

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')


// actual implementation of the GraphQL schema
// its structure is identical to the structure of the type definition


const resolvers = {
  Query,
  Mutation,
  User,
  Link
}

// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
