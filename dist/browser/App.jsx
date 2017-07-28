import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'



const App = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  </Provider>
)

export default App