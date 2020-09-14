when we talked about the definition of the `info: String!` field and said the exclamation mark means this field could never be null. Well, since you’re implementing the resolver, you are in control of what the value for that field is, right?

So, what happens if you return null instead of the actual informative string in the resolver implementation? => Got error

This is in fact one of the core benefits of GraphQL in general: it enforces that the API actually behaves in the way that is promised by the schema definition! This way, everyone who has access to the GraphQL schema can always be 100% sure about the API operations and data structures that are returned by the API.

> At the core of every GraphQL API, there is a GraphQL schema.

GraphQL schemas are usually written in the GraphQL Schema Definition Language (SDL). SDL has a type system that allows you to define data structures.

Every GraphQL schema has three special root types: Query, Mutation, and Subscription. The root types correspond to the three operation types offered by GraphQL: queries, mutations, and subscriptions. The fields on these root types are called root fields and define the available API operations.

> When the type of a root field is an object type, you can further expand the query (or mutation/subscription) with fields of that object type.

In general, when adding a new feature to the API, the process will look pretty similar every time(schema-driven or schema-first development):

1. Extend the GraphQL schema definition with a new root field (and new object types, if needed)
2. Implement corresponding resolver functions for the added fields

> Each level of nesting (i.e. nested curly braces) corresponds to one resolver execution level.
