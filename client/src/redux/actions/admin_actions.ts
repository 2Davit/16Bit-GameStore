import axios from "axios";
import { EditProduct, EmailAction } from "../../interfaces";


// import { EDIT_PRODUCT } from "../types";
import { Dispatch } from "redux";
import {
  EDIT_NAVBAR,
  CREATE_NAVBAR,
  USERS_INFO,
  GET_ORDERS,
  GET_SALES_DATA,
} from "../types";

interface Detail {
  type: string;
}

interface Users {
  type: string;
}

export const editProduct = (payload: EditProduct) => {
  return async function (dispatch: Dispatch<Detail>) {
    const userData = JSON.parse(localStorage.getItem("userData") as string);
    const token = userData?.data.token;
    const data = await axios.put("/videogames/OneGame", payload, {
      headers: { "x-access-token": token },
    });
    return data;
  };
};

export const deleteProduct = (id: number) => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Detail>) {
    const data = await axios.delete(`/videogames/OneGame/${id}`, {
      headers: { "x-access-token": token },
    });
    return data;
  };
};

export const deleteUser = (id: number | unknown) => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Detail>) {
    const data = await axios.delete(`/user/${id}`, {
      headers: { "x-access-token": token },
    });
    return data;
  }
}
export const promoteUser = ( admin: boolean | string, id:number | unknown ) => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Detail>) {
    const data = await axios.put(`/user/admin/${admin}/${id}`, {
      headers: { "x-access-token": token },
    });
    return data;
  };
}


export const sendMail = (email: string, username: string, action: string, info?: EmailAction) => {
  
  return async function (dispatch: Dispatch<Detail>){
    const data = await axios.post('/email', { email, username, action, info });
    return data;
  };
};
    
    
    
export const banUser = (id: number | unknown, status: boolean | string) => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Detail>) {
    const data = await axios.put(`/user/${id}/${status}`, {
      headers: { "x-access-token": token },
    });
    return data;
  };
};


    

export const getUsers = () => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Users>) {
    const { data } = await axios.get(`/user`, {
      headers: { "x-access-token": token },
    });

    return dispatch({
      type: USERS_INFO,
      payload: data,
    });
  };
};

export const getOrders = () => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Detail>) {
    const { data } = await axios.get(`/order`, {
      headers: { "x-access-token": token },
    });
    // console.log('action creator;' , data)
    return dispatch({
      type: GET_ORDERS,
      payload: data,
    });
  };
};

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

export const getSalesData = () => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Detail>) {
    const { data } = await axios.get(`http://localhost:3001/orderproduct`, {
      headers: { "x-access-token": token },
    });
    return dispatch({
      type: GET_SALES_DATA,
      payload: data,
    });
  };
};
