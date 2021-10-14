
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
        const data = await axios.put("/videogames/OneGame", payload);
        return data;
    }
}
export const deleteProduct = (id:number) => {
  return async function (dispatch: Dispatch<Detail>){
    const data = await axios.delete(`/videogames/OneGame/${id}`)
    return data;
  }
}
export const deleteUser = (id:number | unknown) => {
  return async function (dispatch: Dispatch<Detail>){
    const data = await axios.delete(`/user/${id}`)
    return data;
  }
}
export const banUser = (id:number | unknown, status: boolean | string) => {
  return async function (dispatch: Dispatch<Detail>){
    const data = await axios.put(`/user/${id}/${status}`)
    return data;
  }
}

export const sendMail = (mail: string) => {
  return async function (dispatch: Dispatch<Detail>){
    const data = await axios.post('/user/mail', { mail });
    return data;
  }
}

export const getUsers = () => {
  return async function (dispatch: Dispatch<Users>){
    const {data} = await axios.get(`/user`)

    return dispatch({
      type: USERS_INFO,
      payload: data,
    });
  }
}

export const getOrders = () => {
  return async function (dispatch: Dispatch<Detail>){
    const {data} = await axios.get(`/order`)
    // console.log('action creator;' , data)
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