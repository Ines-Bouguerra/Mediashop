import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductList from './components/products/ProductList';
import Favorites from './components/favorites/Favorites';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="super_container">
          <Header />
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/ProductList" component={ProductList} />
            <Route path="/Favorites" component={Favorites} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
