let { sequelize, Sequelize } = require("./sequelize");
let Goods_Details = require("./goodsDetails");
let User_Account = require("./userAccount");
// encapsolate
module.exports = {
  sequelize,
  Sequelize,
  Goods_Details,
  User_Account,
};
