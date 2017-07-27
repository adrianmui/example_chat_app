import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import AppRouter from './router.jsx'

const App = ({store}) => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

export default App