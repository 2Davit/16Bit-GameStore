const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        order_status: {
            type: DataTypes.ENUM('fulfilled', 'pending', 'cancelled'),
            allowNull: false

        },
        order_amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        order_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order_date: {
            type: DataTypes.DATE,
            allownull: false,
        },
        id_user: {
            type: DataTypes.INTEGER,
         
        },
    })
}