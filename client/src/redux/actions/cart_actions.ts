import { ProductInCart } from "../../interfaces";
import { ADD_ITEM_CART, REMOVE_ITEM_CART, REST_ITEM_CART } from "../types";

export const addItemCart = (payload: ProductInCart) => {
  return {
    type: ADD_ITEM_CART,
    payload: payload
  };
};

export const restItemCart = (payload: number) => {
  return {
    type: REST_ITEM_CART,
    payload: payload
  };
 
};
export const removeItemCart =(payload:number)=>{
    return{
        type:REMOVE_ITEM_CART,
        payload:payload
    }

}
