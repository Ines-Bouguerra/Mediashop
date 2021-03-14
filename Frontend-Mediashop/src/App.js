import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import ProductList from "./components/products/ProductList";
import Favorites from "./components/favorites/Favorites";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import ResetPassword from "./components/authentication/ResetPassword";
import ResetPasswordConfirm from "./components/authentication/ResetPasswordConfirm";
import Activate from "./components/authentication/Activate";

import Alert from "./components/layouts/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./hocs/Layout";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div class="super_container">
            <Layout>
              <Alert />
              <Switch>
                <Route exact path="/product-list" component={ProductList} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/reset-password" component={ResetPassword} />
                <Route
                  exact
                  path="/password/reset/confirm/:uid/:token"
                  component={ResetPasswordConfirm}
                />
                <Route
                  exact
                  path="/activate/:uid/:token"
                  component={Activate}
                />
              </Switch>
            </Layout>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
