const app = require('express')();
const path = require('path');

app.get('/', (req, res) => {
  res.render( path.join(__dirname, '..', 'views', 'chatio'), 
    {head: `Chat.io`, message: `Adrian's example socketio chat app`}
  );
});

module.exports = app;