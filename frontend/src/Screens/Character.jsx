import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const CharacterScreen = ({match, history}) => (
  <Query
    variables={{ id:  match.params.id }}
    query={gql`
      query character($id: String) {
        character(id: $id) {
      		id,
      		name,
      		description,
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

      const { name, description, thumbnail } = data.character

      const image = `url(${thumbnail.url})`

      return (
        <div className="CharacterScreen__wrapper">
          <div className="CharacterScreen__firstLine">
          <span onClick={() => history.goBack()}>
          <i class="material-icons">
            arrow_back
          </i>
          Back
          </span>
          </div>
          <div className="CharacterScreen__content">
            <div className="CharacterScreen__content--text">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
            <div>
                <div className="CharacterScreen__image" style={{backgroundImage: image}}></div>
            </div>
          </div>
          <div className="CharacterScreen__bottom">
            <p>Data provides by Marvel API</p>
          </div>
        </div>
      )
    }
  }
  </Query>
)
export default CharacterScreen
