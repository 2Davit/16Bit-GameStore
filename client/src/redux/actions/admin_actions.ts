
import axios from "axios";
import { EditProduct, } from "../../interfaces";

// import { EDIT_PRODUCT } from "../types";
import { Dispatch } from "redux";
import { EDIT_NAVBAR, CREATE_NAVBAR, USERS_INFO, GET_ORDERS } from "../types"

interface Detail { 
    type: string;
}

interface Users { 
  type: string;
}


export const editProduct = (payload: EditProduct) => {
    return async function (dispatch: Dispatch<Detail>) {
        const data = await axios.put("http://localhost:3001/videogames/OneGame", payload);
        return data;
    }
}
export const deleteProduct = (id:number) => {
  return async function (dispatch: Dispatch<Detail>){
    const data = await axios.delete(`http://localhost:3001/videogames/OneGame/${id}`)
    return data;
  }
}

export const getUsers = () => {
  return async function (dispatch: Dispatch<Users>){
    const {data} = await axios.get(`http://localhost:3001/user`)
    console.log(data)
    return dispatch({
      type: USERS_INFO,
      payload: data,
    });
  }
}

export const getOrders = () => {
  return async function (dispatch: Dispatch<Detail>){
    const {data} = await axios.get(`http://localhost:3001/order`)
    console.log(data)
    return dispatch({
      type: GET_ORDERS,
      payload: data,
    });
  }
}

export const deleteNavbar = () => {
    return (dispatch: any) => {
      return dispatch({
        type: EDIT_NAVBAR,
        payload: false,
      });
    };
  };
export const createNavbar = () => {
    return (dispatch: any) => {
      return dispatch({
        type: CREATE_NAVBAR,
        payload: true,
      });
    };
  };