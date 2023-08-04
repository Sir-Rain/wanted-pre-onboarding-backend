import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from './database.js';

export default class User extends Model{}
User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize,
    modelName: 'User'
})