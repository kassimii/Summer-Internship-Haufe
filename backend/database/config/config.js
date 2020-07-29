require('dotenv').config();

module.exports = 
{
  "development": {
    url: process.env.TEST_DB_URL,
    dialect: 'postgres',
  }
};
