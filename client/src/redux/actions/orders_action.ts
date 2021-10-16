import axios from "axios";
import { GET_USER_ORDERS, GET_ORDER_DETAIL } from "../types";
import { Dispatch } from "redux";

interface Orders {
  type: string;
  payload: any;
}

export const getUserOrders = (payload: number) => {
  console.log('payload action: ', payload);  
  return function (dispatch: Dispatch<Orders>) {
    return axios.get(`/order?=${payload}`).then((orders) => {
      dispatch({
        type: GET_USER_ORDERS,
        payload: orders.data,
      });
    });
  };
};
