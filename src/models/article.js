import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from './database.js';
import User from './user.js';

export default class Article extends Model {}
Article.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'article',
  },
);

Article.belongsTo(User);
