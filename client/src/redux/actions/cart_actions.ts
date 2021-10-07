import { ProductInCart } from "../../interfaces";
import {
  ADD_ITEM_CART,
  REMOVE_ITEM_CART,
  REST_ITEM_CART,
  CLEAR_CART,
  GET_CART
} from "../types";

export const addItemCart = (payload: ProductInCart) => {
  const inCart = JSON.parse(localStorage.getItem("cart")!);

  if (inCart === null) localStorage.setItem("cart", JSON.stringify([payload]));
  else {
    let found = inCart.find(
      (game: ProductInCart) => game.id_product === payload.id_product
    );

    if (!found) {
      inCart.push(payload);
      localStorage.setItem("cart", JSON.stringify(inCart));
    } else {
      var newCart = inCart.map((p: ProductInCart) => {
        if (payload.id_product === p.id_product) {
          p.quantity! += payload.quantity!;
        }
        return p;
      });

      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  return {
    type: ADD_ITEM_CART,
    payload: payload,
  };
};

export const restItemCart = (payload: number) => {
    
    const inCart = JSON.parse(localStorage.getItem("cart")!);
    const newCart = inCart.map((prod: ProductInCart | any) => {
    if (prod.id_product === payload) {
      prod.quantity -= 1;
    }
    return prod;
  })

  localStorage.setItem("cart", JSON.stringify(newCart));

  return {
    type: REST_ITEM_CART,
    payload: payload,
  };
};
export const removeItemCart = (payload: number) => {
  let data = JSON.parse(localStorage.getItem("cart")!);
    data = data.filter((e: ProductInCart) => e.id_product !== payload);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(data));
  return {
    type: REMOVE_ITEM_CART,
    payload: payload,
  };
};

export const clearCart = () => {
  localStorage.setItem("cart", JSON.stringify([]));
  return {
    type: CLEAR_CART,
  };
};

export const getCart = () => {
  let data = JSON.parse(localStorage.getItem("cart")!);
  return {
    type: GET_CART,
    payload: data,
  };
};
