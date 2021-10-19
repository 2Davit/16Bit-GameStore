const { Order, OrderProduct, Product, User } = require("../db");
const mercadopago = require("mercadopago");
const { Router } = require("express");

mercadopago.configure({
  access_token:
    "TEST-6385118257533578-100415-600a17d4305e1579d0854c301e57e6ef-102723698",
});

async function getOrders(req, res) {
  const { idUser } = req.query;
  try{
  if(idUser) {
    const userOrders = await Order.findAll({
      where: {
        userIdUser: idUser,
      }
    })
    const userOrdersData = userOrders.map((u) => {
      return {
        id_order: u.id_order,
        status: u.status_order,
        amount: u.amount_order,
        address: u.address_order,
        date: u.createdAt,
      };
    });
    res.status(200).send(userOrdersData);
  }
  else  {
    const orders = await Order.findAll();
    const ordersData = orders.map((u) => {
      return {
        id_order: u.id_order,
        status: u.status_order,
        amount: u.amount_order,
        address: u.address_order,
        date: u.createdAt,
        nickname_user: u.userIdUser
      };
    });

    const users = ordersData.map(e => {
      return User.findByPk(e.nickname_user)
    })

const usersTwo = await Promise.all(users)


ordersData.forEach(index => {
  usersTwo.map(i => {
    if(i.dataValues.id_user === index.nickname_user) {return index.nickname_user= i.dataValues.nickname_user}
  })
})

    res.status(200).send(ordersData);
  } 
  }
catch (err) {
    res.status(404).send(err);
  }
}

async function createOrder(req, res, next) {
  const { id_user, status_order, amount_order, cart, address_order } = req.body;
  try {
    var user = await User.findByPk(id_user);
    const order = await Order.create({
      status_order,
      amount_order,
      address_order,
    });

    await user.addOrder(order.id_order);
    await order.setUser(user.id_user);

    cart.forEach(async (product) => {
      const orderProducts = await OrderProduct.create({
        quantity_orderProduct: product.quantity,
        price_orderProduct: product.price_product,
      });
      await orderProducts.setOrder(order.id_order);
      await orderProducts.setProduct(product.id_product);
    });

    let preference = {
      items: cart.map((c) => ({
        unit_price: c.price_product,
        quantity: c.quantity,
        id: c.id_product,
      })),
      external_reference: `${order.id_order}`,
      back_urls: {
        success: "http://localhost:3001/order/prueba/payment",
        failure: "http://localhost:3001/order/prueba/payment",
        pending: "http://localhost:3001/order/prueba/payment",
      },
      auto_return: "approved",
    };

    const resp = await mercadopago.preferences.create(preference);
    const preferenceId = resp.body.id;

    res.send({ preferenceId });
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
}

async function createPayment(req, res) {
  console.log('LLEGUE')
  const external_reference = req.query.external_reference;
  
  try {
    await Order.update(
      { status_order: "fulfilled" },
      { where: { id_order: external_reference } }
    );

    const foundOrder = await Order.findOne({
      where: {
        id_order: external_reference,
      },
      include: [
        {
          model: OrderProduct,
          required: false,
        },
      ],
    });

    await foundOrder.orderProducts.forEach((e) => {
      Product.decrement("in_stock", {
        by: e.quantity_orderProduct,
        where: {
          id_product: e.productIdProduct,
        },
      });
    });

    await foundOrder.orderProducts.forEach((e) => {
      Product.decrement("in_stock", {
        by: e.quantity_orderProduct,
        where: {
          id_product: e.productIdProduct,
        },
      });
    });

    return res.redirect("http://localhost:3000/order/detail");

  } catch (err) {
    res.send(err);
  }
}



async function saveOrder(req, res, next) {
  const { id_user, status_order, amount_order, cart } = req.body;

  if (status_order === "cart") {
    try {
      var user = await User.findByPk(id_user);
      if (user) {
        const order = await Order.create({
          status_order,
          amount_order,
          address_order: user.address_user,
        });

        await user.addOrder(order.id_order);
        await order.setUser(user.id_user);

        cart.forEach(async (product) => {
          const orderProducts = await OrderProduct.create({
            quantity_orderProduct: product.quantity,
            price_orderProduct: product.price_product,
          });
          await orderProducts.setOrder(order.id_order);
          await orderProducts.setProduct(product.id_product);
        });

        res.status(200).send({ success: true });
      } else res.status(400).send({ error: "invalid user" });
    } catch (err) {
      next(err);
      return res.status(404).send({ error: err.message });
    }
  } else return res.status(404).send({ error: "invalid order status" });
}

async function getOrderDetail(req, res) {
  const { idOrder } = req.params;
  try {
    const order = await Order.findOne({
      where: {
        id_order: idOrder
      },
      include: [
        {
          model: OrderProduct,
          required: false,
        },
      ]
    })
    const filterOrder = {
        id_order: order.dataValues.id_order,
        status_order: order.dataValues.status_order,
        amount_order: order.dataValues.amount_order,
        address_order: order.dataValues.address_order,
        date: order.dataValues.createdAt,
        orderProduct: order.dataValues.orderProducts.map( index => {
          return {
            product: index.dataValues.productIdProduct,
            quantity:index.dataValues.quantity_orderProduct,
          }
        })
      }
    let filterOrderThree = filterOrder.orderProduct.map(async index => {
      return await (Product.findByPk(index.product))
    })
    let filterOrderFour = await Promise.all(filterOrderThree)
    filterOrder.orderProduct.forEach(index => {
      filterOrderFour.map(i => {
        if(i.dataValues.id_product === index.product) {return index.product= i.dataValues}
      })
    })
    res.status(200).send(filterOrder);
  }
  catch (err) {
    res.status(404).send(err);
  }
}


module.exports = {
  createOrder,
  createPayment,
  saveOrder,
  getOrders,
  getOrderDetail,
};
