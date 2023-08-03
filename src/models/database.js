import { Sequelize } from 'sequelize';
import config from 'config';

const database = config.get('database');

const { host, port, username, password, schema } = database;

export const sequelize = new Sequelize({
  host,
  port,
  username,
  password,
  database: schema,
  dialect: 'mysql',
});

sequelize.sync();
