const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    id_order: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    status_order: {
      type: DataTypes.ENUM("fulfilled", "pending", "cancelled", "cart", "delivered"),
      allowNull: false,
    },
    amount_order: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    address_order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /* date_order: {
      type: DataTypes.DATE,
      allownull: false,
    }, */
  });
};
