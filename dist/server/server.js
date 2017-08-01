const path = require('path');

const express = require('express');
const app = express();

const chatRouter = require('./chatio/router');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// apply middleware
require('./middleware/middleware')(app);

// serving public folder
app.use(express.static(path.join(__dirname, '..', '..', 'static')));

// routes
app.use('/chat', chatRouter);

app.get('/', (req, res) => {
  res.render('index', 
    { head: `adrian.io`, 
      message: `This is my new homepage. I'm tired of using frameworks like Jenkins. Just gonna do dis da hard way` 
    }
  );
});

module.exports = app;