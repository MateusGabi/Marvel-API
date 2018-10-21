const crypto = require('crypto');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql, buildSchema } = require('graphql');
const fetch = require('node-fetch')
const Cacher = require('cacher')

const GRAPHQL_SERVICE_KEY_1 = process.env.GRAPHQL_SERVICE_KEY_1

if (!GRAPHQL_SERVICE_KEY_1) {
  throw new Error("GRAPHQL_SERVICE_KEY_1 is not a variable env.")
  return;
}

const app = express();

const fetchData = () =>
    fetch("http://characters:7000/api/v1/characters")
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

// cache dura 1h
const cache = new Cacher(fetchData)

const schema = buildSchema(`
  type Query {
    characters: [Character],
    character(id: String): Character
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
  characters: () => cache.getData(),
  character: ({ id }) => cache.getData()
                              .then(list => list.filter(c => id === c.id)[0])
                              .catch(err => {
                                console.error(err);
                                return err
                              })
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

module.exports = app
