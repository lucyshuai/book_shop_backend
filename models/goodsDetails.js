const { sequelize, Sequelize } = require("./sequelize");
const Goods_Details = sequelize.define(
  "goods_infor",
  {
    img: { type: Sequelize.STRING },
    title: { type: Sequelize.STRING },
    price: { type: Sequelize.DOUBLE },
    stock: { type: Sequelize.INTEGER },
    active: { type: Sequelize.BOOLEAN },
    description: { type: Sequelize.STRING },
  },
  {
    // freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);
module.exports = Goods_Details;
