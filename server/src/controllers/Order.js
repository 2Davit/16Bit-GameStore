const { Order, OrderProduct, Product, User } = require('../db')
const axios = require('axios');
const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: 'TEST-6385118257533578-100415-600a17d4305e1579d0854c301e57e6ef-102723698'
  });
  

async function createOrder(req, res, next) {

    const {
        id_user,
        status_order,
        amount_order,
        cart,
        address_order
    } = req.body;

    try {
        var user = await User.findByPk(id_user);
        const order = await Order.create({
            status_order,
            amount_order,
            address_order,
            date_order: new Date().toLocaleString()
        });

        await user.addOrder(order.id_order);
        await order.setUser(user.id_user);

        cart.forEach(async (product) => {
            const orderProducts = await OrderProduct.create({
                quantity_orderProduct: product.quantity,
                price_orderProduct: product.price_product
            });
            await orderProducts.setOrder(order.id_order);
            await orderProducts.setProduct(product.id_product);
        });

        let preference = {
            items: cart.map(c => (
                {
                     unit_price: c.price_product,
                     quantity: c.quantity,
                     id: c.id_product,
                    /* price_product: c.price_product,
                    quantity: c.quantity,
                    id_product: c.id_product, */
                }
            )),
            back_urls: {
                success: "http://localhost:3000/home",
                failure: "http://localhost:3000/home",
                pending: "http://localhost:3000/home",
            },
            auto_return: "approved",
        };

        const resp = await mercadopago.preferences.create(preference);
        const preferenceId = resp.body.id
        /* updatedOrder */ /* order.update({
            mp_id: resp.response.id,
            payment_link: resp.body.init_point,
        }); */

console.log(resp)

       /*  return res.json(resp.body.init_point); */
       res.send({preferenceId})
    } catch (err) {
        next(err);
        return res.status(409).send({ error: err.message });
    }
};


/* async function createOrder(req, res, next)
server.get("/mercadoPagoRedirect", async (req, res) => {
    try {
        const order = await Order.findOne({
            where: {
                mp_id: req.query["preference_id"],
            },
        });

        switch (order.state) {
            case "completed": {
                return res.redirect(
                    'http://localhost:3000'
                );
            }
            case "processing": {
                return res.redirect('http://localhost:3000');
            }
            case "canceled": {
                return res.redirect('http://localhost:3000');
            }
            default:
                return res.redirect('http://localhost:3000');
        }
    } catch (err) {
        console.log(err);
    }
}); */
module.exports = {
    createOrder
}


/*   const server = require('express').Router();
const { Order , Order_detail, Product } = require('../db');

server.post('/', (req, res, next) => {
    const { userId, orderlines, status } = req.body

    Order.create({
        userId: userId,
        status: status
    })
    .then(response => {
        Promise.all(
        orderlines.map(elem => {
            Product.findByPk( elem.id)
              .then(producto =>{
                const orderId = response.dataValues.id //nos da el id de order

                return Order_detail.create({
                    orderId: orderId,
                    productId: producto.id,
                    quantity: elem.quantity,
                    price: producto.price
                })
              })
                .then(secondResponse => { //nos da el arreglo creado
                    const cant = secondResponse.dataValues.quantity
                    const prodId = secondResponse.dataValues.productId
                    Product.decrement(
                        {stock: cant},
                        { where: { id: prodId } }
                    )
                })
            })
        )
        .then( _ => res.send("OK"))
        .catch(err => next(err))
    })
});


server.get('/detalle/:id', (req, res, next) => {
    const id = req.params.id

    Order.findOne({
        where: {
          id: id,
        },
        include: {
            model: Order_detail,
            where: { orderId: id }
        }
    })
    .then(obj => {
        res.send(obj)
    })
    .catch(next)
});



module.exports = server;
 */



