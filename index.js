const app = require('./dist/server/server');
const http = require('http');

const port = 4200;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening on port: ${port}`);
})