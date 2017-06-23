import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import App from './components/app/App'
import HomeContainer from './containers/HomeContainer'
import Store from './store'

const routes = (
  <Provider store={Store}>
    <Router>
      <App>
        <Switch>
          <Route path='/' component={HomeContainer} exact />
          { /* fallback, should be the last entry */}
          <Redirect from='*' to='/' />
        </Switch>
      </App>
    </Router>
  </Provider>
)

export default routes
