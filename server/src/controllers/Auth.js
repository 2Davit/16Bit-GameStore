const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Order, OrderProduct, Product } = require("../db.js");

const { SECRET } = process.env;

const signUp = async (req, res) => {
  const { username, password, email, name, lastname, address } = req.body;

  // Checking for existing user / email

  const existingUser = await User.findOne({
    where: {
      nickname_user: username,
    },
  });

  const existingMail = await User.findOne({
    where: {
      email_user: email,
    },
  });

  if (existingUser) {
    return res.status(400).send("Failed! Username already in use!");
  }

  if (existingMail) {
    return res.status(400).send("Failed! email already in use");
  }

  // User create

  await User.create({
    nickname_user: username,
    password_user: bcrypt.hashSync(password, 8),
    email_user: email,
    name_user: name,
    lastname_user: lastname,
    address_user: address,
  });

  return res.status(200).send("User successfully registered!");
};

const logIn = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      nickname_user: username,
    },
    include: [
      {
        model: Order,
        where: { status_order: "cart" },
        required: false,
      },
    ],
  });

  

  if (user && user.orders.length) {
    
    
    user.orders.sort((a, b) => {
      if (a.dataValues.id_order > b.dataValues.id_order) {return 1}
      else if (b.dataValues.id_order > a.dataValues.id_order) {return -1}
      else return 0;
  })
    
    const lastCartOrder = await Order.findOne({
      where: {
        id_order: user.orders[user.orders.length-1].dataValues.id_order,
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
      quantity: p.quantity_orderProduct
    }));




  const products = mapClean.map(async (p) => 
      await Product.findByPk(p.id_product)
  );
  
  const finalProducts = await Promise.all(products);
  var final = finalProducts.map(e => e.dataValues)

  for (let i = 0; i < final.length; i++) {
    mapClean.forEach(e => {
          if (final[i].id_product === e.id_product) {
                final[i].quantity = e.quantity
          }
    })
  } 

  }

  if (!user) {
    return res.status(404).send({error: "User not found"});
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password_user);

  if (!passwordIsValid) {
    return res.status(401).send("Wrong password");
  }

  const token = jwt.sign({ id: user.id_user }, SECRET, {
    expiresIn: 7200, // 2 hours
  });
  
  res.status(200).send({
    data: {
      token: token,
      username: user.nickname_user,
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

module.exports = {
  logIn,
  signUp,
  getRole,
};
