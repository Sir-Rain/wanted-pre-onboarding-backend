import http from 'http';
import config from 'config';

import { app } from './src/app.js';

import { sequelize } from './src/models/database.js';

const PORT = config.get('port') || 8080;

const server = http.createServer(app);

sequelize.sync().then(() => {
  server.listen(PORT);
  server.on('listening', () => {
    console.log('Server is Running ON: ' + PORT);
  });
});
