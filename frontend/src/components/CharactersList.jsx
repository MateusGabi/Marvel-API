import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import CharacterBox from './CharacterBox';

export default () => (
  <Query
    query={gql`
      query {
        characters {
          id
          name
          thumbnail {
            url: complete
          }
        }
      }
    `}
  >

  {
    ({ loading, error, data }) => {

      if (loading) {
        return <div>carregando...</div>
      }

      if (error) {
        return <div>error</div>
      }

      return (
        <div className="character-list">
        {data.characters.map((character) => (
          <CharacterBox key={character.id} character={character} />
        ))}
        </div>
      )
    }
  }

  </Query>
)
