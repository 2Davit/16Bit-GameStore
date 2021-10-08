const { Order } = require('../db.js');
const server = require('express').Router();
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

/* const { ACCESS_TOKEN } = process.env; */

//Agrega credenciales
/* mercadopago.configure({
  access_token: 'TEST-6385118257533578-100415-600a17d4305e1579d0854c301e57e6ef-102723698'
});
 */

//Ruta que genera la URL de MercadoPago
server.get("/", (req, res, next) => {

 /*  const id_orden= 1

  //Cargamos el carrido de la bd
  const carrito = [
    {title: "Producto 1", quantity: 5, price: 10.52}, //esta hardcodeado
    {title: "Producto 2", quantity: 15, price: 100.52},
    {title: "Producto 3", quantity: 6, price: 200}
  ] */
  
  const items_ml = carrito.map(i => ({
    title: i.title,
    unit_price: i.price,
    quantity: i.quantity,
  }))

  // Crea un objeto de preferencia
  let preference = {
    items: items_ml,
    external_reference : `${id_orden}`,
    payment_methods: {
      excluded_payment_types: [
        {
          id: "atm"
        }
      ],
      installments: 3  //Cantidad máximo de cuotas
    },
    back_urls: {
      success: 'http://localhost:3001/mercadopago/pagos',
      failure: 'http://localhost:3001/mercadopago/pagos',
      pending: 'http://localhost:3001/mercadopago/pagos',
    },
  };

  mercadopago.preferences.create(preference)

  .then(function(response){
    console.info('respondio')
  //Este valor reemplazará el string"<%= global.id %>" en tu HTML
    global.id = response.body.id;
    console.log(response.body)
    res.json({ id: global.id });
  })
  .catch(function(error){
    console.log(error);
  })
}) 


//Ruta que recibe la información del pago
server.get("/pagos", (req, res)=>{
  console.info("EN LA RUTA PAGOS ", req)
  const payment_id= req.query.payment_id
  const payment_status= req.query.status
  const external_reference = req.query.external_reference
  const merchant_order_id= req.query.merchant_order_id
  console.log("EXTERNAL REFERENCE ", external_reference)

  //Aquí edito el status de mi orden
  Order.findByPk(external_reference)
  .then((order) => {
    order.payment_id= payment_id
    order.payment_status= payment_status
    order.merchant_order_id = merchant_order_id
    order.status = "completed"
    console.info('Salvando order')
    order.save()
    .then((_) => {
      console.info('redirect success')
      
      return res.redirect("http://localhost:3000")
    })
    .catch((err) =>{
      console.error('error al salvar', err)
      return res.redirect(`http://localhost:3000/?error=${err}&where=al+salvar`)
    })
  })
  .catch(err =>{
    console.error('error al buscar', err)
    return res.redirect(`http://localhost:3000/?error=${err}&where=al+buscar`)
  })

  //proceso los datos del pago 
  //redirijo de nuevo a react con mensaje de exito, falla o pendiente
})


//Busco información de una orden de pago
server.get("/pagos/:id", (req, res)=>{
  const mp = new mercadopago(ACCESS_TOKEN)
  const id = req.params.id
  console.info("Buscando el id", id)
  mp.get(`/v1/payments/search`, {'status': 'pending'}) //{"external_reference":id})
  .then(resultado  => {
    console.info('resultado', resultado)
    res.json({"resultado": resultado})
  })
  .catch(err => {
    console.error('No se consulto:', err)
    res.json({
      error: err
    })
  })
})

module.exports = server;


const express = require("express");
const bodyParser = require("body-parser");
const repository = require("./repository");
const mercadopago = require("mercadopago");
const app = express();
const port = process.env.PORT || 3000;

mercadopago.configure({
  access_token:
    "TEST-6385118257533578-100415-600a17d4305e1579d0854c301e57e6ef-102723698",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get("/api/products", async (req, res) => {
  res.send(await repository.read());
});



app.post("/api/pay", async (req, res) => {
  const ids = req.body;
  const productsCopy = await repository.read();

  let preference = {
    items: [  {
        price_product: price_product,
        quantity: quantity,
        id_product: id_product,
      }],
    back_urls: {
      success: "http://localhost:3000/feedback",
      failure: "http://localhost:3000/feedback",
      pending: "http://localhost:3000/feedback",
    },
    auto_return: "approved",
  };
    const response = await mercadopago.preferences.create(preference);
    const preferenceId = response.body.id;
    await repository.write(productsCopy);
    res.send({ preferenceId });
});

app.get('/feedback', function(request, response) {
  response.json({
   Payment: request.query.payment_id,
   Status: request.query.status,
   MerchantOrder: request.query.merchant_order_id
 })
});

app.use("/", express.static("fe"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 

