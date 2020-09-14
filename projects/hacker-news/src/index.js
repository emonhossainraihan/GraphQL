const { GraphQLServer } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// actual implementation of the GraphQL schema
// its structure is identical to the structure of the type definition
// dummy data

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // 2
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany();
    },
  },
  Mutation: {
    // 2
    post: (parent, args, context, info) => {
      const newLink = context.prisma.link.create({
        data: {
          description: args.description,
          url: args.url,
        }
      });
      return newLink;
    },
    updateLink: async (parent, args, context, info) => {
      const selectLink = context.prisma.link.update({
        where: { id: parseInt(args.id) },
        data: {
          description: args.description,
          url: args.url
        }
      })
      return selectLink
    },
    deleteLink: async (parent, args, context, info) => {
      const deletedLink = context.prisma.link.delete({
        where: { id: parseInt(args.id) }
      })
      return deletedLink
    },
  },
  // Link resolvers is trivial, hence can be omitted
  //   Link: {
  //     id: (parent) => parent.id,
  //     description: (parent) => parent.description,
  //     url: (parent) => parent.url,
  //   },
};

// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma,
  },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
