import React from 'react';
import {Router, browserHistory, Route} from 'react-router';
import AppRoot from './app-root.jsx';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppRoot}>
      </Route>
    </Router>
  );
};

export default AppRouter;