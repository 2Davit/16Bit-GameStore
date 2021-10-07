const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("product", {
    id_product: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,

    },
    name_product: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3 ,50]
      }
    },
    price_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isInt: true,
        isGreaterThan(value){
          if(value <= 0){
            throw new Error('Price must be higher than 0');
          }
        }
      }
    },
    description_product: {
      type: DataTypes.STRING(1200),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1,1200]
      }
    },
    image_product: {
      type: DataTypes.ARRAY(DataTypes.STRING(600)),
      allownull: false,
      validate: {
        notEmpty(value){
          if(value.length === 0){
            throw new Error('Array empty')
          }
        }
      }
    },
    thumbnail_product: {
      type: DataTypes.STRING(1200),
      allownull: false,
      validate: {
        notEmpty:  true,
        len: [1, 1200]
      }
    },
    in_stock: {
      type: DataTypes.INTEGER,
      allownull: false, 
      validate: {
         min: 0,
         isInt: true
       }
    },
    on_sale: {
      type: DataTypes.BOOLEAN,
      allownull: false,
      validate: {
        isBoolean(value) {
          if (typeof value !== 'boolean') {
            throw new Error('Value must be a boolean')
          }
        }
      }
    },
    release_year: {
      type: DataTypes.INTEGER,
      allownull: false,
      validate: {
        isInt: true,
        min: 1950,
        max: 2010
      }
    },
  });
};
