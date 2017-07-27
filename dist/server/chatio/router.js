require('babel-register')({
    presets: ['es2015', 'react']
})

import path from 'path'
import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server'

import App from './../../browser/App.jsx'
import store from './../../browser/store'

const router = require('express').Router()

router.use(handleRender);

router.get('/', (req, res) => {
  res.render( path.join(__dirname, '..', 'views', 'chatio'), 
    {head: `Chat.io`, message: `Adrian's example socketio chat app`}
  )
})

function handleRender(req, res) {
  // Render the component to a string
  console.log('line 33: ', store.getState())
  
  const html = renderToString(
    <App store={store}/>
  )
  
  console.log('html is done rendereded to string');

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send('hello handle render');
  // res.send(renderFullPage(html, preloadedState))
}
 
function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React Redux SPA</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

module.exports = router;