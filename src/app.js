import express from 'express';
import http from 'http';
import config from 'config';

import { router } from './controller/index.js';

const PORT = config.get('port') || 8080;

const app = express();

app.use(router);

const server = http.createServer(app);
server.listen(PORT);
server.on('listening', () => {
  console.log('Server is Running ON: ' + PORT);
});
