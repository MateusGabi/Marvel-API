import React from 'react';
import ImageCharacter from './ImageCharacter'
import NameCharacter from './NameCharacter'
import { Link } from 'react-router-dom';

export default ({ character }) => {

  const { id, name, thumbnail } = character;

  return (
    <Link to={`/characters/${id}`}>
      <div className="character-box">
        <NameCharacter name={name} />
        <ImageCharacter src={thumbnail.url} />
      </div>
    </Link>
  )
}
