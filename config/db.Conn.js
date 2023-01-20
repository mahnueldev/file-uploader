const Sequelize = require('sequelize');

const connectDB = new Sequelize('image_uploader', 'root', 'rootwck', {
  host: 'localhost',
  port: 3305,
  dialect: 'mysql',
});

module.exports = connectDB;
