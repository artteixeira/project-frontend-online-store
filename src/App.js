import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/cart" component={ Cart } />
      <Route exact path="/details/:id" render={ (props) => <Details { ...props } /> } />
    </Switch>
  );
}

export default App;
