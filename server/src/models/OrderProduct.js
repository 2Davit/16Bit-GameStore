const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("orderProduct", {
    id_orderProduct: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    price_orderProduct: {
      type: DataTypes.INTEGER,
    },
    quantity_orderProduct: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
  });
};
