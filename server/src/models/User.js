const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nickname_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar_user: {
      type: DataTypes.STRING(600),
      allowNull: true,
    },
    address_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_user: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
