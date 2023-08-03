import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from './db.js';

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
