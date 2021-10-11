import React, { FC } from "react";
import axios from "axios";
import { ProductInCart } from "../../interfaces";
import { useHistory } from "react-router";

const LogOut: FC = () => {
  const user = JSON.parse(localStorage.getItem("userData")!);
  const cart: any = JSON.parse(localStorage.getItem("cart")!);
  const subtotal = cart?.reduce((acc: number, product: ProductInCart) => {
    acc = acc + product.price_product! * product.quantity!;
    return acc;
  }, 0.0);

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

  const history = useHistory();

  function handleClick() {
    if (order.amount_order > 0) {
      axios.post("http://localhost:3001/order/save", order);
    }
    localStorage.clear();
    history.push("/home");
  }

  return (
    <form>
      <button type="submit" onClick={handleClick}>
        Logout
      </button>
    </form>
  );
};

export default LogOut;
