import React from 'react'

import { Switch, Route } from 'react-router-dom'
import AppRoot from './AppRoot'

const Layout = ({location = '/chat'}) => {
  return (
    <Switch>
      <Route exact path={location} component={AppRoot} />
    </Switch>
  )
}

export default Layout