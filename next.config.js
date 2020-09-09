require('dotenv').config();

const url = process.env.SERVER_BASE_URL;
module.exports = {
  env: {
    SERVER_BASE_URL: url
  },
  target: 'serverless',
};
