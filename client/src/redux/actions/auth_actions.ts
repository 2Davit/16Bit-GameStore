import axios from "axios";
import { LOGIN } from "../types";
import { Dispatch } from "react";

export const verifyUser = (token: any) => {
  return async (dispatch: Dispatch<any>): Promise<any> => {
    try {
      const response = await axios.get("/auth/signin", {
        headers: { authorization: `Bearer ${token}` },
      });
      localStorage.setItem("userData", JSON.stringify(response.data));
      const localCart = JSON.parse(localStorage.getItem("cart")!);
      if (!localCart?.length && response.data.data.cart_orders.length) {
        localStorage.setItem(
          "cart",
          JSON.stringify(response.data.data.cart_orders)
        );
      } else if (localCart && response.data.data.cart_orders.length) {
        for (let i = 0; i < localCart.length; i++) {
          for (let j = 0; j < response.data.data.cart_orders.length; j++) {
            if (
              response.data.data.cart_orders[j].id_product ===
              localCart[i].id_product
            ) {
              localCart[i].quantity +=
                response.data.data.cart_orders[j].quantity;
            }
          }
        }
        var lastArray = [...localCart];
        for (let i = 0; i < response.data.data.cart_orders.length; i++) {
          if (
            !localCart.find(
              (a: any) =>
                a.id_product === response.data.data.cart_orders[i].id_product
            )
          ) {
            lastArray.push(response.data.data.cart_orders[i]);
          }
        }
        localStorage.setItem("cart", JSON.stringify(lastArray));
      }
      return dispatch({
        type: LOGIN,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
