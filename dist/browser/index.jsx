import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import rootReducer from './reducers/'

import App from './App.jsx'

const store = createStore(rootReducer)

render(
  <App store={store}/>, 
  document.getElementById('app')
);
