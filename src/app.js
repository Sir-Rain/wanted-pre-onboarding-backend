import express from 'express';
import http from 'http';

const PORT = 8080;

const app = express();

const server = http.createServer(app);
server.listen(PORT);
server.on('listening', () => {
  console.log('Server is Running ON: ' + PORT);
});
