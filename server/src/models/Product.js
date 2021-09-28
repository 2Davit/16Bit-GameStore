const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("product", {
    id_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name_product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_product: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description_product: {
      type: DataTypes.STRING(1200),
      allowNull: false,
    },
    image_product: {
      type: DataTypes.STRING(600),
      allownull: false,
    },
    thumbnail_product: {
      type: DataTypes.STRING(1200),
      allownull: false,
    },
    in_stock: {
      type: DataTypes.BOOLEAN,
      allownull: false,
    },
    on_sale: {
      type: DataTypes.BOOLEAN,
      allownull: false,
    },
/*     is_videogame: {
      type: DataTypes.BOOLEAN,
      allownull: false,
    }, */
    release_year: {
      type: DataTypes.DATE,
      allownull: false,
    },
  });
};
