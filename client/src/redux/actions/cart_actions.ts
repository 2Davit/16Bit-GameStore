import { ADD_ITEM_CART } from "../types";
import { Dispatch } from "redux";


interface Action {
    type: string;
    payload: number //id
}

export const addItemCart = (payload: any) =>
    (dispatch: Dispatch<Action>): any => {
        return dispatch({
            type: ADD_ITEM_CART,
            payload: payload
        })
    }

