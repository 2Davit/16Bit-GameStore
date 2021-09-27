const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "platform",
    {
      id_platform: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name_platform: {
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
