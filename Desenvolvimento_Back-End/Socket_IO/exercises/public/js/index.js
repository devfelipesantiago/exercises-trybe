import express from 'express';
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: [GET, POST],
  }
});

app.use(express.static(__dirname, + '/exercises/public'));

require('./sockets/feed')(io);

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});