const { sequelize, Sequelize } = require("./sequelize");
const User_Account = sequelize.define(
  "user_signin",
  {
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
  },
  {
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);
module.exports = User_Account;
