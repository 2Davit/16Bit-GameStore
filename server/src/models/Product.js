const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name_product: {
            type: DataTypes.STRING,
            allowNull: false

        },
        price_product: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        description_product: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        image_product: {
            type: DataTypes.STRING(600),
            allownull: false,
        },
        thumbnail: {
            type: DataTypes.STRING(600),
            allowNull: false
        },
        platform: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
       in_stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50
        },
        genres: {
            type: DataTypes.STRING,
        },
       /*  create_date: {
            type: DataTypes.DATE,
            allowNull: false
        }, */
        is_on_sale: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_videogame: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    })
}