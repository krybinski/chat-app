import express from 'express';

const SEND_MESSAGE = 'SEND_MESSAGE';
const MESSAGE = 'MESSAGE';

const app = express();
const server = app.listen(3001, () => {
    console.log('server running on port 3001');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log(socket.id)

  socket.on(SEND_MESSAGE, function (data) {
    io.emit(MESSAGE, data)
  });
});
