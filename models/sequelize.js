const Sequelize = require("sequelize");

// Config
const sqlUsername = "root";
const sqlPassword = "";
const sqlHost = "127.0.0.1";
const sqlPort = "3306";
const dataBaseName = "shop_detail";

const mysql_url = `mysql://${sqlUsername}:${sqlPassword}@${sqlHost}:${sqlPort}/${dataBaseName}`;

const sequelize = new Sequelize(mysql_url, {
  timezone: "+08:00",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("MYSQL Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = { sequelize, Sequelize };
