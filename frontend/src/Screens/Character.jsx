import React from 'react';

const CharacterScreen = () => (
  <div className="CharacterScreen__wrapper">
    <div className="CharacterScreen__firstLine">
      <span>close</span>
    </div>
    <div className="CharacterScreen__content">
      <div className="CharacterScreen__content--text">
        <h1>A-Bomb (HAS)</h1>
        <p>Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!</p>
      </div>
      <div>
          <div className="CharacterScreen__image"></div>
      </div>
    </div>
    <div className="CharacterScreen__bottom">
      <p>Data provides by Marvel API</p>
    </div>
  </div>
)

export default CharacterScreen
