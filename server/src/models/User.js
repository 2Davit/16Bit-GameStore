const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name_user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar_user: {
            type: DataTypes.STRING(600),
          /*   allowNull: false, */
        },
        adress_user: {
            type: DataTypes.STRING,
            allownull: false,
        },
        mail_user: {
            type: DataTypes.STRING,
            allownull: false,
        },
        password_user: {
            type: DataTypes.STRING(60),
            allownull: false,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
        },
        

    })
}