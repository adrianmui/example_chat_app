import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import AppRoot from './AppRoot'

const App = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AppRoot} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App