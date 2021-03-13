import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductList from "./components/products/ProductList";
import Favorites from "./components/favorites/Favorites";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import Alert from "./components/layouts/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div class="super_container">
            <Header />
            <Alert />
            <Switch>
              <Route exact path="/product-list" component={ProductList} />
              <Route exact path="/Favorites" component={Favorites} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/Login" component={Login} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
