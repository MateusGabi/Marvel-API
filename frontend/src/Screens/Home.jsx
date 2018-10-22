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
          <h3>Do you know every Characters?</h3>
          <h5>Let's begin</h5>
          <i class="material-icons arrow_down">
            arrow_downward
          </i>
        </header>
        <CharactersList />
      </div>
    );
  }
}

export default Home;
