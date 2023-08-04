import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from './database.js';
import User from './user.js';

export default class Article extends Model {}
Article.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Article',
  },
);

Article.belongsTo(User);
