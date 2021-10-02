import { ADD_ITEM_CART } from "../types";
import { ProductInCart } from "../../interfaces";
import { CartState } from "../../interfaces";

const initialState: CartState = {
  cart: {
    list: [],
  },
  };

export const cartReducer = (state: CartState = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM_CART:
      let found = state.cart.list.find(
        (game: any) => game.id_product === action.payload.id_product
      );
      if (found)
        return {
          ...state,
          cart: {
            ...state.cart,
            list: state.cart.list.map((prod: ProductInCart) => {
              if (prod.id_product === action.payload.id_product) {
                prod.quantity += action.payload.quantity;
              }
              return prod;
            }),
          },
        };
      return {
        ...state,
        cart: {
          ...state.cart,
          list: [...state.cart.list, action.payload],
        },
      };
    default:
      return state;
  }
};
