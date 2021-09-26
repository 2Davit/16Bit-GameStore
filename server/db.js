require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

/* const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
});
const basename = path.basename(__filename); */

const sequelize = new Sequelize('videogames', DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
    }
  }) 
  const basename = path.basename(__filename);

 ;

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/src/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/src/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {Order, Product, User, OrderProduct  } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
/* Recipe.belongsToMany(Type, {through: "types_recipes"});
Type.belongsToMany(Recipe, {through: "types_recipes"}); */

User.hasMany(Order, { foreignKey: 'id_user'});
Order.belongsTo(User);
Order.hasMany(OrderProduct, { foreignKey: 'order_id' } ); 
 OrderProduct.belongsTo(Order); 
 Product.hasMany(OrderProduct, {  foreignKey: 'product_id' } );
OrderProduct.hasMany(Product); 




module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
