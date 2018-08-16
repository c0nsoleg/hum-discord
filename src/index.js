// Libs
const HumClient = require('./api/humClient');
const dotenv = require('dotenv').config(); // eslint-disable-line no-unused-vars

// Initialize Hum
const client = new HumClient();
client.authorize(process.env.SECRET_TOKEN);
