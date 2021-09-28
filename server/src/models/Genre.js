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
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
