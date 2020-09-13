> APIs have become ubiquitous components of software infrastructures. In short, an API defines how a client can load data from a server.

## GraphQL - A Query Language for APIs

Most applications today have the need to fetch data from a server where that data is stored in a database. It’s the responsibility of the API to provide an interface to the stored data that fits an application’s needs.

## Introduction of GraphQL

- new API standard
- enables declarative data fetching
- GraphQL server exposes single endpoint and responses to queries

## GraphQL is the better REST

- No more Over(downloading unnecessary data) and Under fetching(An endpoint doesn't return enough of the right information;need to sent multiple requests)

> REST: "structure endpoints according to clients' data needs"
> 💡 GraphQL: "Think in graphs, not endpoints."

## Core Concepts

- Schema Definition Language(SDL)
- Everything that follows the root field, is called the payload of the query
- 3 kinds of mutations: Creating, updating and deleting
- queries & mutations follow request-response-cycle
- Realtime updates with subscriptions
- subscriptions represent a stream of data sent over to the client(event-based realtime functionality)
- The Query, Mutation, and Subscription types are the entry points for the requests sent by the client
- The GraphQL schema defines the server’s API (GraphQL SDL)

Query structure > design Schema

```js
// allPersons is called a root field of the API
type Query {
  allPersons(last: Int): [Person!]!
}
```

### [GraphQL Server Basics](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e)

```js
type User {
  id: ID!
  name: String
}
```

The `User` type alone doesn’t expose any functionality to client applications, it simply defines the structure of a user model in your application. In order to add functionality to the API, you need to add fields to the root types of the GraphQL schema: `Query`, `Mutation` and `Subscription`. These types define the entry points for a GraphQL API.

> A query is only valid if the corresponding GraphQL schema was defined. 💡 The GraphQL schema provides a clear contract for client-server communication.

like consider the following query:

```js
query {
  user(id: "abc") {
    id
    name
  }
}
```

which is only valid if the corresponding GraphQL schema defines the `Query` root type with the following `user` field:

```js
type Query {
  user(id: ID!): User
}
```

### [The Network Layer](https://www.prisma.io/blog/graphql-server-basics-the-network-layer-51d97d21861)

### [Demystifying the `info` Argument in GraphQL Resolvers](https://www.prisma.io/blog/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)

## Big Picture (Architecture)

- GraphQL server with a connected database
- GraphQL server that is a thin layer in front of a number of third party or legacy systems and integrates them through a single GraphQL API
- A hybrid approach of a connected database and third party or legacy systems that can all be accessed through the same GraphQL API

> transport-layer agnostic

- GraphQL queries/mutations consist of set of fields
- GraphQL server has one resolver function per field
- The purpose of each resolver is to retrieve the data for its corresponding field
