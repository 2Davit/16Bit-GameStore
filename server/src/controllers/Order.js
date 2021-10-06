const { Order, OrderProduct, Product, User } = require('../db')
const axios = require('axios');


async function createOrder(req, res, next) {
    
    
    const { 

            id_user, name_user, lastname_user, email_user,
            status_order, amount_order, address,
            cart 

          } = req.body;
    

    try {

        if (id_user) {
            var user = await User.findByPk(id_user);
        }
      
  
      if (!id_user) {
    

        var guestUser = await User.create({
            name_user: name_user,
            lastname_user: lastname_user,
            address_user: address,
            email_user: email_user,
            is_guest: true
        })
      }
  
  
      const order = await Order.create({
          status_order,
          amount_order,
          address_order: address,
          date_order: new Date().toLocaleString()
      });
      

      user ? await user.addOrder(order.id_order) : await guestUser.addOrder(order.id_order);
      user ? await order.setUser(user.id_user) : await order.setUser(guestUser.id_user);
  

      cart.forEach(async (product) => {
        const orderProducts = await OrderProduct.create({
          quantity_orderProduct: product.quantity,
          price_orderProduct: product.price_product
        });
        await orderProducts.setOrder(order.id_order);
        await orderProducts.setProduct(product.id_product);
      });
  
      return res.status(201).send({orderId: order.id_order});
    } catch (err) {
      next(err);
      return res.status(409).send({ error: err.message });
    }
  };


  module.exports = {
    createOrder
  }