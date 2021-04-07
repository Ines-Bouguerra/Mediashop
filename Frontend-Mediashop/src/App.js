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
import Layout from './hocs/Layout'
import HomeScreen from './screens/client/HomeScreen'
import ProductScreen from './screens/client/ProductScreen'
import store from './store'
import Google from './components/authentication/Google'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div class='super_container'>
            <Layout>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/favorites' component={Favorites} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/google' component={Google} />
                <Route exact path='/reset-password' component={ResetPassword} />
                <Route
                  path='/password/reset/confirm/:uid/:token'
                  component={ResetPasswordConfirm}
                />
                <Route path='/activate/:uid/:token' component={Activate} />
                <Route path='/category/:slug' component={CategoryHome} />
                <Route exact path='/product-list' component={HomeScreen} />
                <Route exact path='/search/:query' component={HomeScreen} />
                <Route exact path='/page/:pageNumber' component={HomeScreen} />
                <Route exact path='/search/:query/page/:pageNumber' component={HomeScreen} />
                <Route exact path='/compare/:name/:reference/:price' component={HomeScreen} />
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
