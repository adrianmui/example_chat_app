import React, {Component} from 'react';
import {Link} from 'react-router';
// import Landing from './Landing';
// import PropTypes from 'prop-types';

/** REDUX */

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import counterApp from './reducers'
/**
 * // Grab the state from a global variable injected into the server-generated HTML
 *  const preloadedState = window.__PRELOADED_STATE__
 * // Allow the passed state to be garbage-collected
 * delete window.__PRELOADED_STATE__
 * // Create Redux store with initial state
 * const store = createStore(counterApp, preloadedState)
 */

const AppRoot = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">React</a>
        <a href="/chat" className="navbar-brand">Chat</a>
      </nav>
    </div>
  )
}

// AppRoot.propTypes = {
//   children: PropTypes.element.isRequired
// }

export default AppRoot;

