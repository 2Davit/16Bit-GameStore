const { Order, OrderProduct, Product, User } = require("../db");



async function getOrderDetail(req, res) {
    try {
        const orders = await Order.findAll();
        const ordersData = orders.map((u) => {
            return {
                id_order: u.id_order,
                status: u.status_order,
                amount: u.amount_order,
                address: u.address_order,
                date: u.date_order,
                userId: u.userIdUser
            };
        });

        const orderProduct = await OrderProduct.findAll();
        const oPData = orderProduct.map((u) => {
            return {
                orderidOrder: u.orderIdOrder,
                productidProduct: u.productIdProduct,
                id_OP: u.id_orderProduct,
                price_orderProduct: u.price_orderProduct,
                quantity_orderProduct: u.quantity_orderProduct
            }
        })
        const products = await Product.findAll();
        const productData = products.map((p) => {
            return {
                id: p.id_product,
                name: p.name_product
            }
        })

        const user = await User.findAll();
        const userData = user.map((u) => {
            return{
                id_user: u.id_user,
                username: u.nickname_user,
            }
        })


        const totalData = ordersData.concat(oPData.concat(productData).concat(userData))

        res.status(200).send(totalData);
    } catch (err) {
        res.status(404).send("hola");
    }
}

module.exports = {
    getOrderDetail
}