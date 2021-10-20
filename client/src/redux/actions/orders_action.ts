import axios from "axios";
import { GET_USER_ORDERS } from "../types";
import { Dispatch } from "redux";

interface Orders {
  type: string;
  payload: any;
}

export const getUserOrders = (payload: number | any) => {
  return function (dispatch: Dispatch<Orders>) {
    return axios.get(`/order?=${payload}`).then((orders) => {
      dispatch({
        type: GET_USER_ORDERS,
        payload: orders.data,
        
      });
    
    });
  };
};


