const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Order, OrderProduct, Product } = require("../db.js");

const { SECRET } = process.env;

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

const signUp = async (req, res) => {
  const { username, password, email, name, lastname, address } = req.body;

  // Checking for existing user / email

  const existingUser = await User.findOne({
    where: {
      nickname_user: username.toLowerCase(),
    },
  });

  const existingMail = await User.findOne({
    where: {
      email_user: email.toLowerCase(),
    },
  });

  if (existingUser) {
    return res
      .status(400)
      .send({ message: "Failed! Username already in use!" });
  }

  if (existingMail) {
    return res.status(400).send({ message: "Failed! email already in use" });
  }

  // User create

  await User.create({
    nickname_user: username.toLowerCase(),
    password_user: bcrypt.hashSync(password, 8),
    email_user: email.toLowerCase(),
    name_user: capitalize(name),
    lastname_user: capitalize(lastname),
    address_user: capitalize(address),
  });

  return res.status(200).send("User successfully registered!");
};

const signInGoogle = async (req, res) => {
  const { username, name, lastname, email, picture } = req.body;

  const user = await User.findOrCreate({
    where: {
      email_user: email?.toLowerCase(),
    },
    defaults: {
      nickname_user: username.toLowerCase(),
      email_user: email.toLowerCase(),
      name_user: capitalize(name),
      lastname_user: capitalize(lastname),
      avatar_user: picture,
      loggedWithGoogle: true,
    },
    include: [
      {
        model: Order,
        where: { status_order: "cart" },
        required: false,
      },
    ],
  });

  if (user[0] && user[0].is_active === false) {
    return res.status(403).send({ message: "Suspended account" });
  }

  if (user[0] && user[0].orders.length) {
    user[0].orders.sort((a, b) => {
      if (a.dataValues.id_order > b.dataValues.id_order) {
        return 1;
      } else if (b.dataValues.id_order > a.dataValues.id_order) {
        return -1;
      } else return 0;
    });

    const lastCartOrder = await Order.findOne({
      where: {
        id_order: user[0].orders[user[0].orders.length - 1].dataValues.id_order,
      },
      include: [
        {
          model: OrderProduct,
        },
      ],
    });

    const cleanOrder = lastCartOrder.orderProducts.map((pro) => pro.dataValues);

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

  const token = jwt.sign({ id: user[0].id_user }, SECRET, {
    expiresIn: 86400, // 24 hours
  });

  res.status(200).send({
    data: {
      token: token,
      username: capitalize(user[0].nickname_user),
      email: user[0].email_user,
      name: user[0].name_user,
      lastname: user[0].lastname_user,
      address: user[0].address_user,
      cart_orders: final ? final : [],
      loggedWithGoogle: user[0].loggedWithGoogle,
    },
    id: user[0].id_user,
  });
};

const logIn = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      nickname_user: username.toLowerCase(),
    },
    include: [
      {
        model: Order,
        where: { status_order: "cart" },
        required: false,
      },
    ],
  });

  if (user && user.is_active === false) {
    return res.status(403).send({ message: "Suspended account" });
  }

  if (user && user.orders.length) {
    user.orders.sort((a, b) => {
      if (a.dataValues.id_order > b.dataValues.id_order) {
        return 1;
      } else if (b.dataValues.id_order > a.dataValues.id_order) {
        return -1;
      } else return 0;
    });

    const lastCartOrder = await Order.findOne({
      where: {
        id_order: user.orders[user.orders.length - 1].dataValues.id_order,
      },
      include: [
        {
          model: OrderProduct,
        },
      ],
    });

    const cleanOrder = lastCartOrder.orderProducts.map((pro) => pro.dataValues);

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

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password_user);

  if (!passwordIsValid) {
    return res.status(401).send({ message: "Wrong password" });
  }

  const token = jwt.sign({ id: user.id_user }, SECRET, {
    expiresIn: 86400, // 24 hours
  });

  res.status(200).send({
    data: {
      token: token,
      username: capitalize(user.nickname_user),
      email: user.email_user,
      name: user.name_user,
      lastname: user.lastname_user,
      address: user.address_user,
      cart_orders: final ? final : [],
    },
    id: user.id_user,
  });
};

const getRole = async (req, res) => {
  const user = await User.findByPk(req.userId);
  if (user && user.is_admin) {
    return res.status(200).send({ admin: true });
  } else {
    return res.status(200).send({ admin: false });
  }
};

const setPass = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const decoded = jwt.verify(token, SECRET);
  const id = decoded.id;

  try {
    await User.update(
      {password_user: bcrypt.hashSync(password, 8)},
      {where: {
        id_user: id
      }}
    )

    res.status(200).send('llegó she piola')
  } catch(err){
    console.log(err);
  }

}


module.exports = {
  logIn,
  signUp,
  getRole,
  signInGoogle,
  setPass
};
