import React, { Component } from 'react';
import logo from './marvel.svg';
import arrowDown from './arrow-down.svg';
import './App.css';
import CharactersList from './components/CharactersList'
import { HomeScreen, CharacterScreen } from './Screens'
import { Switch, Route } from 'react-router-dom';

const NotFound = () => <h1>Já era</h1>

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/characters" component={HomeScreen} />
    <Route exact path="/characters/:id" component={CharacterScreen} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default App;
