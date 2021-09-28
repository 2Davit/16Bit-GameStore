/* import axios from 'axios'; */
import { GET_ALL_PRODUCTS } from "../types";
import { Product } from '../../interfaces';
import { Dispatch } from "redux";
import { totalProducts } from './mock'

interface Action {
    type: string;
    payload: Array<Product> | []
}


export const getAllProducts = () => (dispatch: Dispatch<Action>): any => {
    try {
        
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: totalProducts
        })

    } catch(err) {
        console.log(err)
    }
}

