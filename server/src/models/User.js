const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nickname_user: {
      type: DataTypes.STRING,
      allowNull: true,
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
      defaultValue: "No address provided",
    },
    email_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_user: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    loggedWithGoogle: {
      type: DataTypes.BOOLEAN,
      default: false,
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
