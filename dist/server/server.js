const path = require('path');

const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// apply middleware
require('./middleware/middleware')(app);

// serving public folder
app.use(express.static(path.join(__dirname, '..', '..', 'static')));

// routes
app.get('/', (req, res) => {
  res.render('index', 
    {head: `Chat.io`, message: `Adrian's example socketio chat app`}
  );
});

module.exports = app;