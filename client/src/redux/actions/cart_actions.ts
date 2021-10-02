import { ADD_ITEM_CART } from "../types";
import { Dispatch } from "redux";


interface Action {
    type: string;
    payload: number //id
}

export const addItemCart = (payload: any) =>{
           return {
            type: ADD_ITEM_CART,
            payload: payload
        }
    }

