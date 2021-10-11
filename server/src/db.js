require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gamestore`,
        {
          logging: false,
          native: false,
        }
      );
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Order, OrderProduct, Product, User, Genre, Platform, Role } =
  sequelize.models;

User.hasMany(Order);
Order.belongsTo(User);
Order.hasMany(OrderProduct);
OrderProduct.belongsTo(Order);
Product.hasMany(OrderProduct);
OrderProduct.belongsTo(Product);
//User.belongsToMany(Role, { through: "userRoles" });
//Role.belongsToMany(User, { through: "userRoles" });
Genre.belongsToMany(Product, { through: "productGenre" });
Product.belongsToMany(Genre, { through: "productGenre" });
Platform.belongsToMany(Product, { through: "productPlatform" });
Product.belongsToMany(Platform, { through: "productPlatform" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
