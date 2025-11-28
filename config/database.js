const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myshop", "root", "Sowmiya@14", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;
