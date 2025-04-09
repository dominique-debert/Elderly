import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '1272',
    database: process.env.DB_NAME || 'helpy',
    host: process.env.DB_HOST || 'services',
    port: process.env.DB_PORT || 32768,
    dialect: 'postgres',
    logging: console.log,
  },
  test: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '1272',
    database: process.env.DB_NAME || 'helpy',
    host: process.env.DB_HOST || 'services',
    port: process.env.DB_PORT || 32768,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '1272',
    database: process.env.DB_NAME || 'helpy',
    host: process.env.DB_HOST || 'dominiquedebert.us.to',
    port: process.env.DB_PORT || 32768,
    dialect: 'postgres',
    logging: false,
  },
};

export default config;