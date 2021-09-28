const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("orderProduct", {
    id_orderProduct: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price_orderProduct: {
      type: DataTypes.FLOAT,
    },
    quantity_orderProduct: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
  });
};
