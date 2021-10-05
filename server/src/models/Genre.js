const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "genre",
    {
      id_genre: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name_genre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 15]
        }
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
