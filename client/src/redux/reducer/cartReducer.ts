import {
  ADD_ITEM_CART,
  REMOVE_ITEM_CART,
  REST_ITEM_CART,
  CLEAR_CART,
  GET_CART
} from "../types";
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
      let found = state.cart.list?.find(
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
     
    case REST_ITEM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          list: state.cart.list.map((prod: ProductInCart | any) => {
            if (prod.id_product === action.payload) {
              prod.quantity -= 1;
            }
            return prod;
          }),
        },
      };

    case REMOVE_ITEM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          list: state.cart.list.filter(
            (prod: ProductInCart) => prod.id_product !== action.payload
          ),
        },
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          list: [],
        },
      };

    case GET_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          list: action.payload,
        },
      };

    default:
      return state;
  }
};
