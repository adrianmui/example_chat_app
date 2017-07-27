import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'

import App from './App'
import store from './store'

render(
  <App store={store}/>, 
  document.getElementById('app')
);
