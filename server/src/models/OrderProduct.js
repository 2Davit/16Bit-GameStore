/* const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    
    sequelize.define('orderProduct', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,

        },
         order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
           
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        }, 
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allownull: false,
        },
    })
} */