const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "platform",
    {
      id_platform: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name_platform: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 15],
        },
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
