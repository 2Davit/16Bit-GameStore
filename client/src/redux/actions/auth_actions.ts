import axios from "axios";
import { User } from "../../interfaces";
import { LOGIN, USER_ROLE } from "../types";
import { Dispatch } from "react";
import Swal from "sweetalert2";


interface loginProps {
  type: string;
  payload: User;
}

export const login = (values: any) => {
  return async (dispatch: Dispatch<loginProps>): Promise<any> => {
    try {
      const userData = await axios.post("/auth/login", values);

      localStorage.setItem("userData", JSON.stringify(userData.data));
      const localCart = JSON.parse(localStorage.getItem("cart")!);
      if (!localCart?.length && userData.data.data.cart_orders.length) {
        localStorage.setItem(
          "cart",
          JSON.stringify(userData.data.data.cart_orders)
        );
      } else if (localCart && userData.data.data.cart_orders.length) {
        for (let i = 0; i < localCart.length; i++) {
          for (let j = 0; j < userData.data.data.cart_orders.length; j++) {
            if (
              userData.data.data.cart_orders[j].id_product ===
              localCart[i].id_product
            ) {
              localCart[i].quantity +=
                userData.data.data.cart_orders[j].quantity;
            }
          }
        }
        var lastArray = [...localCart];
        for (let i = 0; i < userData.data.data.cart_orders.length; i++) {
          if (
            !localCart.find(
              (a: any) =>
                a.id_product === userData.data.data.cart_orders[i].id_product
            )
          ) {
            lastArray.push(userData.data.data.cart_orders[i]);
          }
        }
        localStorage.setItem("cart", JSON.stringify(lastArray));
      }
      window.location.reload();
      return dispatch({
        type: LOGIN,
        payload: userData.data,
      });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Invalid username or password",
        icon: "error",
        confirmButtonText: "Ups!",
      });
    }
  };
};


export const getRole = () => {
  return async (dispatch: Dispatch<any>): Promise<any> => {
    const userData = JSON.parse(localStorage.getItem("userData") as string);
    const token = userData?.data.token;
    try {
      const role = await axios.get("/auth/getRole", {
        headers: { "x-access-token": token },
      });
      return dispatch({
        type: USER_ROLE,
        payload: role.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
