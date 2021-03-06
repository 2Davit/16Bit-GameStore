import React, { FC } from "react";
import axios from "axios";
import { ProductInCart } from "../../interfaces";
import { useAuth0 } from "@auth0/auth0-react";


const LogOut: FC = () => {
  const user = JSON.parse(localStorage.getItem("userData")!);
  const cart: any = JSON.parse(localStorage.getItem("cart")!);
  const subtotal = cart?.reduce((acc: number, product: ProductInCart) => {
    acc = acc + product.price_product! * product.quantity!;
    return acc;
  }, 0.0);

  const { logout } = useAuth0();

  const order = {
    id_user: user.id,
    status_order: "cart",
    amount_order: subtotal,
    cart: cart?.map((c: ProductInCart) => ({
      id_product: c.id_product,
      price_product: c.price_product,
      quantity: c.quantity,
    })),
  };

  

  function handleClick() {
    if (order.amount_order > 0) {
      axios.post("/order/save", order);
    }
    localStorage.clear();
    logout({ returnTo: window.location.origin });
  }

  return <button onClick={handleClick}>Logout</button>;
};

export default LogOut;
