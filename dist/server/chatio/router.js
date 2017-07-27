import Express from 'express';
import path from 'path';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { renderToString } from 'react-dom/server'

import counterApp from './../../browser/reducers/'

const app = Express();

app.use(handleRender);

app.get('/', (req, res) => {
  res.render( path.join(__dirname, '..', 'views', 'chatio'), 
    {head: `Chat.io`, message: `Adrian's example socketio chat app`}
  );
});

function handleRender(req, res) {
   /* ... */ 
  const store = createStore(counterApp)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
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

module.exports = app;