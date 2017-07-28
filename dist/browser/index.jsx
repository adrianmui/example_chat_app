import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'

import App from './App'
import store from './store'

import {AppContainer} from 'react-hot-loader'

render(
  <AppContainer>
    <App store={store}/>
  </AppContainer>,
  document.getElementById('app')
)

/** hot reload components */
if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
