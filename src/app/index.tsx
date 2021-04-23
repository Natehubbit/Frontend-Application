import React from 'react'
import { Provider } from 'react-redux'
import Product from '../pages/Product'
import { store } from '../redux/store'
import './style.module.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
