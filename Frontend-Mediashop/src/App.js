import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import ProductList from './components/products/ProductList';
import Favorites from './components/favorites/Favorites';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="super_container">
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/ProductList">
              <ProductList />
            </Route>
            <Route path="/Favorites">
              <Favorites />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
