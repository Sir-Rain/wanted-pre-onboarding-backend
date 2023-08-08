import http from 'http';
import { app } from './src/app.js';
import config from 'config';

import { sequelize } from './src/models/database.js';

console.log(
  'application running environment: ' + config.util.getEnv('NODE_ENV'),
);

const PORT = config.get('port') || 8080;

const server = http.createServer(app);

sequelize.sync().then(() => {
  server.listen(PORT);
  server.on('listening', () => {
    console.log('Server is Running ON: ' + PORT);
  });
});
