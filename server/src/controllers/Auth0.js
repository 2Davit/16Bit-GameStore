const axios = require("axios");
const { Op } = require("sequelize");
const { User, Order, OrderProduct, Product } = require("../db.js");

const verifyUser = async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const response = await axios.get(
      "https://16bit-game-store.us.auth0.com/userinfo",
      { headers: { authorization: `Bearer ${accessToken}` } }
    );
    const userInfo = response.data;

    const { nickname, email, given_name, family_name, picture } = userInfo;

    const user = await User.findOrCreate({
      where: { [Op.or]: [{ nickname_user: nickname }, { email_user: email }] },
      defaults: {
        nickname_user: nickname,
        name_user: given_name,
        lastname_user: family_name,
        avatar_user: picture,
        email_user: email,
      },
      include: [
        {
          model: Order,
          where: { status_order: "cart" },
          required: false,
        },
      ],
    });

    console.log(user);
    if (user && user[0].orders?.length) {
      user[0].orders.sort((a, b) => {
        if (a.dataValues.id_order > b.dataValues.id_order) {
          return 1;
        } else if (b.dataValues.id_order > a.dataValues.id_order) {
          return -1;
        } else return 0;
      });

      const lastCartOrder = await Order.findOne({
        where: {
          id_order:
            user[0].orders[user[0].orders.length - 1].dataValues.id_order,
        },
        include: [
          {
            model: OrderProduct,
          },
        ],
      });

      const cleanOrder = lastCartOrder.orderProducts.map(
        (pro) => pro.dataValues
      );

      const mapClean = cleanOrder.map((p) => ({
        id_product: p.productIdProduct,
        quantity: p.quantity_orderProduct,
      }));

      const products = mapClean.map(
        async (p) => await Product.findByPk(p.id_product)
      );

      const finalProducts = await Promise.all(products);
      var final = finalProducts.map((e) => e.dataValues);

      for (let i = 0; i < final.length; i++) {
        mapClean.forEach((e) => {
          if (final[i].id_product === e.id_product) {
            final[i].quantity = e.quantity;
          }
        });
      }
    }

    res.status(200).send({
      data: {
        active: user[0].is_active,
        token: accessToken,
        username: user[0].nickname_user,
        email: user[0].email_user,
        name: user[0].name_user,
        lastname: user[0].lastname_user,
        address: user[0].address_user,
        avatar: user[0].avatar_user,
        cart_orders: final ? final : [],
      },
      role: { admin: user[0].is_admin },
      id: user[0].id_user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = verifyUser;
