import React, {Component} from 'react';
import {Link} from 'react-router';
// import Landing from './Landing';
// import PropTypes from 'prop-types';

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

