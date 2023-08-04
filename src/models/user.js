import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from './database.js';

export default class User extends Model {}
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'user',
  },
);
