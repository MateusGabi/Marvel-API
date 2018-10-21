import React, { Component } from 'react';
import logo from './../marvel.svg';
import arrowDown from './../arrow-down.svg';
import CharactersList from './../components/CharactersList'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Você conhece todos os personagens?</h3>
          <img src={arrowDown} className="arrow_down" alt="godown" />
        </header>
        <CharactersList />
      </div>
    );
  }
}

export default Home;
