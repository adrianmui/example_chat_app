import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {Router, browserHistory, Route} from 'react-router';

import AppRoot from './AppRoot'

const App = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppRoot}>
      </Route>
    </Router>
  </Provider>
)

export default App