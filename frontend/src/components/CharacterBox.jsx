import React from 'react';
import ImageCharacter from './ImageCharacter'
import NameCharacter from './NameCharacter'

export default ({ character }) => {

  const { name, thumbnail } = character;

  return (
    <div className="character-box">
      <NameCharacter name={name} />
      <ImageCharacter src={thumbnail.url} />
    </div>
  )
}
