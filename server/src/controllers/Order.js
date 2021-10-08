const { Order, OrderProduct, Product, User } = require('../db')
const axios = require('axios');
const mercadopago = require('mercadopago');
const { Router } = require('express');

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
                }
            )),
            external_reference : `${order.id_order}`, 
            back_urls: {
                success: "http://localhost:3001/order/payment",
                failure: "http://localhost:3001/order/payment",
                pending: "http://localhost:3001/order/payment",
            },
            auto_return: "approved",
        };

        const resp = await mercadopago.preferences.create(preference);
        const preferenceId = resp.body.id
        /* updatedOrder */ /* order.update({
            mp_id: resp.response.id,
            payment_link: resp.body.init_point,
        }); */



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

async function createPayment (req, res){
  
    console.info("EN LA RUTA PAGOS ", req)
    const payment_id= req.query.payment_id
    const payment_status= req.query.status
    const external_reference = req.query.external_reference
    const merchant_order_id= req.query.merchant_order_id
   /*  console.log("EXTERNAL REFERENCE ", external_reference) */
    try{
    await Order.update(
        { status_order: 'fulfilled' },
        { where: { id_order: parseInt(external_reference) } }
      )

    const foundOrder = await Order.findOne({
        where: {
          id_order:  parseInt(external_reference),
        },
        include: [
            {
              model: OrderProduct,
             /*  attributes: [""], */
              through: { attributes: [] },
            },
        ]
      })

  

    return res.redirect("http://localhost:3000/home")
} catch(err) {
    console.log(err)
}
}



async function prueba (req, res){
    try{
    const foundOrder = await Order.findOne({
        where: {
          id_order:  10,
        }, 
        include: 
            [ {
              model: OrderProduct,
              
               /* attributes: ['price_orderProduct'],  */
              /* through: { attributes: [] }, */
              required: false
            } ],
        
      })

      await foundOrder.orderProducts.forEach( e => {
          console.log(e)
         Product.decrement('in_stock', {
             by: e.quantity_orderProduct, 
             where:
              { 
                id_product: e.productIdProduct
             } })
      })

    

res.send(foundOrder)

      
 /*    Order.findByPk(external_reference)
    .then((order) => {
      order.payment_id= payment_id
      order.payment_status= payment_status
      order.merchant_order_id = merchant_order_id
      order.status = "created"
      console.info('Salvando order')
      order.save()
      .then((_) => {
        console.info('redirect success')
        
        return res.redirect("http://localhost:3000")
      }).catch((err) =>{
        console.error('error al salvar', err)
        return res.redirect(`http://localhost:3000/?error=${err}&where=al+salvar`)
      })
    }).catch(err =>{
      console.error('error al buscar', err)
      return res.redirect(`http://localhost:3000/?error=${err}&where=al+buscar`)
    })  */
    
} catch(err) {
    console.log(err)
}
}




module.exports = {
    createOrder,
    createPayment,
    prueba 
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

