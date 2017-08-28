import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'

import styles from './styles'

const Navbar = props => {
  const {rt, flex, title } = props

  return (
    <div className={rt}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            
          </IconButton>
          <Typography type="title" color="inherit" className={flex}>
            {title}
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar)