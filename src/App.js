import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx'

const HatsPage = () => (
  <h1>Hats</h1>
)

class App extends Component {
  render() {
    return <div className='App'>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>;
  }
}

export default App;
