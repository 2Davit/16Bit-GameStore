const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Product, User, favorites } = require("../db.js");

async function getFavorites(req, res, next) {
  const { idUser } = req.params;

  try {
    const user = await User.findOne({
      where: {
        id_user: idUser,
      },

      include: [{ model: Product, required: true }],
    });

    if (!user) {
      throw { status: 404, message: "User not found" };
    } else {
      return res.send(user.products);
    }
  } catch (error) {
    console.log(error);
  }
}

async function postFavorites(req, res, next) {
  const { idProduct, idUser } = req.body;
  try {
    const user = await User.findOne({
      where: {
        id_user: idUser,
      },
    });

    const product = await Product.findOne({
      where: {
        id_product: idProduct,
      },
    });

    if (!user || !product)
      throw {
        status: 400,
        message: "User or productId does not exist",
      };
    if (user && product) {
      await product.addUser(user);
      return res.send(user);
    } else {
      throw {
        status: 400,
        message: "User or productId does not exist",
      };
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteFavorites(req, res, next) {


    const { idProduct, idUser } = req.body;
    console.log('back', idProduct, idUser)

    try {
        const toDelete = await favorites.findOne({
            where: {
                [Op.and]: [{ userIdUser: idUser }, { productIdProduct: idProduct }]
            }
        });
        if (toDelete) {
            toDelete.destroy()
            return res.json(idProduct);
        } else {
            return next({
                status: 404,
                message: 'Product  not found'
            })
        }

    } catch (error) {
        console.log(error);


    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getFavorites,
  postFavorites,
  deleteFavorites,
};
