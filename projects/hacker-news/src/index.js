const { GraphQLServer } = require("graphql-yoga");

// actual implementation of the GraphQL schema
// its structure is identical to the structure of the type definition
// dummy data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
];
let idCount = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // 2
    feed: () => links,
  },
  Mutation: {
    // 2
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      const selectLink = links.filter((e) => e.id === args.id);
      selectLink[0].id = args.id;
      selectLink[0].url = args.url;
      selectLink[0].description = args.description;
      console.log(selectLink);
      return selectLink[0];
    },
    deleteLink: (parent, args) => {
      var selectLink = links.filter((e) => e.id === args.id);

      var index = links.indexOf(selectLink[0]);
      const removed = links.splice(index, 1);
      console.log(removed);
      return removed[0];
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
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
