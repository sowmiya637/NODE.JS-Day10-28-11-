const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("myshop", "root", "Sowmiya@14", {
  host: "localhost",
  dialect: "mysql",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("DB Connected");
  } catch (err) {
    console.error("Unable to connect:", err);
  }
}

testConnection();
