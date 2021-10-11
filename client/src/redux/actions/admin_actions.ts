import axios, { /* AxiosRequestConfig */ } from "axios";
import { EditProduct } from "../../interfaces";
// import { EDIT_PRODUCT } from "../types";
import { Dispatch } from "redux";
import { EDIT_NAVBAR, CREATE_NAVBAR } from "../types"

interface Detail { 
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