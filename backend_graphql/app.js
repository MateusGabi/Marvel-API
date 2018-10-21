const crypto = require('crypto');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql, buildSchema } = require('graphql');
const fetch = require('node-fetch')

const GRAPHQL_SERVICE_KEY_1 = process.env.GRAPHQL_SERVICE_KEY_1

if (!GRAPHQL_SERVICE_KEY_1) {
  throw new Error("GRAPHQL_SERVICE_KEY_1 is not a variable env.")
  return;
}

const app = express();

const schema = buildSchema(`
  type Query {
    characters: [Character]
  }

  type Thumbnail {
    path: String
    extension: String
    complete: String
  }

  type Character {
    id: String!
    marvel_id: Int
		name: String
		description: String
    thumbnail: Thumbnail
  }
`);

const root = {
  characters: () => {

    return fetch("http://172.18.0.1:7000/api/v1/characters")
              .then(res => res.json())
              .then(res => {
                return res.data.results.map(character => {

                  const hash = crypto.createHmac('SHA256', GRAPHQL_SERVICE_KEY_1);
                  hash.update(`marvel-id--${character.id}`);
                  const sha = hash.digest('hex')

                  return {
                    ...character,
                    id: sha,
                    marvel_id: character.id,
                    thumbnail: {
                      ...character.thumbnail,
                      complete: `${character.thumbnail.path}.${character.thumbnail.extension}`
                    }
                  }
                })
              })
              .catch(err => {
                console.error(err);
                return err
              })
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

module.exports = app
