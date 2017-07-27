import React from 'react';
import {render} from 'react-dom';

import AppRouter from './router.jsx';

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import counterApp from './reducers'

render(<AppRouter/>, document.querySelector('#app'));

/**
 * // Grab the state from a global variable injected into the server-generated HTML
 *  const preloadedState = window.__PRELOADED_STATE__
 * // Allow the passed state to be garbage-collected
 * delete window.__PRELOADED_STATE__
 * // Create Redux store with initial state
 * const store = createStore(counterApp, preloadedState)
 */