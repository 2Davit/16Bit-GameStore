const { Order, OrderProduct, Product, User } = require("../db");
const axios = require("axios");
const mercadopago = require("mercadopago");
const { Router } = require("express");

mercadopago.configure({
  access_token:
    "TEST-6385118257533578-100415-600a17d4305e1579d0854c301e57e6ef-102723698",
});

async function getOrders(req, res) {
  try {
    const orders = await Order.findAll();
    const ordersData = orders.map((u) => {
      return {
        id_order: u.id_order,
        status: u.status_order,
        amount: u.amount_order,
        address: u.address_order,
        date: u.date_order,
      };
    });
    res.status(200).send(ordersData);
  } catch (err) {
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
      date_order: new Date().toLocaleString(),
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
        success: "https://localhost:3001/order/payment",
        failure: "https://videogame-store-16bit.herokuapp.com/order/payment",
        pending: "https://videogame-store-16bit.herokuapp.com/order/payment",
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
  const payment_id = req.query.payment_id;
  const payment_status = req.query.status;
  const external_reference = req.query.external_reference;
  const merchant_order_id = req.query.merchant_order_id;

  try {
    await Order.update(
      { status_order: "fulfilled" },
      { where: { id_order: parseInt(external_reference) } }
    );

    const foundOrder = await Order.findOne({
      where: {
        id_order: parseInt(external_reference),
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

    return res.redirect("https://localhost:3000/order/detail");
  } catch (err) {
    console.log({error: err});
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
          date_order: new Date().toLocaleString(),
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

module.exports = {
  createOrder,
  createPayment,
  saveOrder,
  getOrders,
};
