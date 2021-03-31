import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Activate from './components/authentication/Activate'
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'
import ResetPassword from './components/authentication/ResetPassword'
import ResetPasswordConfirm from './components/authentication/ResetPasswordConfirm'
import CategoryHome from './components/category/CategoryHome'
import Favorites from './components/favorites/Favorites'
import Home from './components/home/Home'
import Alert from './components/layouts/Alert'
import ProductList from './components/products/ProductList'
import Layout from './hocs/Layout'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div class='super_container'>
            <Layout>
              <Alert />
              <Switch>
                <Route exact path='/product-list' component={ProductList} />
                <Route exact path='/' component={Home} />
                <Route exact path='/favorites' component={Favorites} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/reset-password' component={ResetPassword} />
                <Route
                  path='/password/reset/confirm/:uid/:token'
                  component={ResetPasswordConfirm}
                />
                <Route path='/activate/:uid/:token' component={Activate} />
                <Route path='/category/:slug' component={CategoryHome} />
                {/* <Route path='/search/:query' component={ProductList} /> */}
                <Route exact path='/homeScreen' component={HomeScreen} />
                <Route path='/product/:id' component={ProductScreen} />
              </Switch>
            </Layout>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
