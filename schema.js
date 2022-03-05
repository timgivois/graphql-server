var { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    books: [Book]
    authors: [Author]
    book(id: ID!): Book
    author(id: ID!): Author
  }
  
  type Book {
    id: ID
    title: String
    published: String
    author: Author
  }
  
  type Author {
    id: ID
    firstName: String
    lastName: String
    books: [Book]
  }
`);

module.exports = schema;
