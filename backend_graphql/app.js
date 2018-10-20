const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql, buildSchema } = require('graphql');

const app = express();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

module.exports = app
