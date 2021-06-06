/** @format */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BrandComponent from "./components/admin/BrandComponent";
import CategoryComponent from "./components/admin/CategoryComponent";
import ContactComponent from "./components/admin/ContactComponent";
import HomeComponent from "./components/admin/HomeComponent";
import AdminLogin from "./components/admin/Login";
import LogoutComponent from "./components/admin/LogoutComponent";
import Product from "./components/admin/Product";
import UpdateProduct from "./components/admin/UpdateProduct";
import Activate from "./components/authentication/Activate";
import Google from "./components/authentication/Google";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ResetPassword from "./components/authentication/ResetPassword";
import ResetPasswordConfirm from "./components/authentication/ResetPasswordConfirm";
import Brand from "./components/brand/Brand";
import Contact from "./components/contact/Contact";
import Favorites from "./components/favorites/Favorites";
import Home from "./components/home/Home";
import Post from "./components/post/Post";
import CompareList from "./components/products/CompareList";
import UserRoute from "./components/routing/UserRoute";
import Layout from "./hocs/Layout";
import CategoryScreen from "./screens/client/CategoryScreen";
import HomeScreen from "./screens/client/HomeScreen";
import ProductScreen from "./screens/client/ProductScreen";
import store from "./store";
import Config from "./utils/Config";
import PrivateRouteNew from "./utils/PrivateRouteNew";
import AddBrand from "./components/admin/AddBrand";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div class="super_container">
            <Switch>
              <Route path="/admin/:path?" exact>
                <Switch>
                  <Route exact path="/admin/Login" component={AdminLogin} />
                  <Route
                    exact
                    path={Config.logoutPageUrl}
                    component={LogoutComponent}
                  ></Route>
                  <PrivateRouteNew
                    exact
                    path="/admin/home"
                    activepage="0"
                    page={HomeComponent}
                  />
                  <PrivateRouteNew
                    exact
                    path="/admin/category"
                    activepage="1"
                    page={CategoryComponent}
                  />
                  <PrivateRouteNew
                    exact
                    path="/admin/brand"
                    activepage="2"
                    page={BrandComponent}
                  />
                  <PrivateRouteNew
                    exact
                    path="/admin/product"
                    activepage="3"
                    page={Product}
                  />
                  <PrivateRouteNew
                    exact
                    path="/admin/contact"
                    activepage="4"
                    page={ContactComponent}
                  />
                  <PrivateRouteNew
                    exact
                    path="/admin/edit-product"
                    activepage="3"
                    page={UpdateProduct}
                  />
                   <PrivateRouteNew
                    exact
                    path="/admin/add-brand"
                    activepage="2"
                    page={AddBrand}
                  />
                </Switch>
              </Route>
              <Route path="" exact>
                <Layout>
                  <Switch>
                    <Route exact path="/login">
                      <Login />
                    </Route>

                    <Route exact path="/" component={Home} />
                    <UserRoute exact path="/wishlist" component={Favorites} />

                    <Route exact path="/register" component={Register} />
                    <Route exact path="/google" component={Google} />
                    <Route
                      exact
                      path="/reset-password"
                      component={ResetPassword}
                    />
                    <Route
                      path="/password/reset/confirm/:uid/:token"
                      component={ResetPasswordConfirm}
                    />
                    <Route path="/activate/:uid/:token" component={Activate} />
                    <Route path="/category/:slug" component={CategoryScreen} />
                    <Route exact path="/product-list" component={HomeScreen} />
                    <Route exact path="/search/:query" component={HomeScreen} />
                    <Route
                      exact
                      path="/page/:pageNumber"
                      component={HomeScreen}
                    />
                    <Route
                      exact
                      path="/search/:query/page/:pageNumber"
                      component={HomeScreen}
                    />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/compare" component={CompareList} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/brand" component={Brand} />
                    <Route path="/post" component={Post} />
                  </Switch>
                </Layout>
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
