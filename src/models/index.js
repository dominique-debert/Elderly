import path from 'path';
import { Sequelize } from 'sequelize';
import process from 'process';
import dbConfig from '../config/database.js';

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];
const db = {};

// Create a new Sequelize instance
const  sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);


db.sequelize = sequelize;

export default db;