import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './../reducers'

// const preloadedState = window.__PRELOADED_STATE__
// delete window.__PRELOADED_STATE__


const store = createStore(
  reducers,
  applyMiddleware(thunk)
) //, preloadedState)

export default store