import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'

class App extends Component {
  render() {
    return <div className='App'>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>;
  }
}

export default App;
