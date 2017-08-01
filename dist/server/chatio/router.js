require('babel-register')({
    presets: ['es2015', 'react']
})

import path from 'path'
import React from 'react'

/**redux */
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './../../browser/store'

/**react server */
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router'

import Layout from './../../browser/Layout'
const router = require('express').Router()

router.get('*', (req, res, next) => {
  const context = {}
  const html = renderToString(
    <StaticRouter
      location={req.url}
      context={context}>
      <Layout location={req.url}/>
    </StaticRouter>
  )

  res.render( 
    path.join(__dirname, '..', 'views', 'chatio'), 
    { 
      head: "chat.io",
      message: "this chat app is in progress",
      html} 
  )
})

module.exports = router;