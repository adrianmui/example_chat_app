const app = require('./dist/server/server');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const port = 4200;

io.on('connection', sock => {
  console.log('user has connected');

  sock.on('disconnect', () => {
    console.log('user has disconnected');
  })

  sock.on('chat message', msg => {
    console.log(msg)
  });
})

server.listen(port, () => {
  console.log(`listening on port: ${port}`);
})