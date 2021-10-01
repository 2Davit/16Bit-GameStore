import axios from "axios";
import { Product } from "../../interfaces";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_NAME_PRODUCT,
  DOUBLE_FILTER,
  GET_PRODUCT_ON_SALE,
} from "../types";

import { Dispatch } from "redux";

interface AllProducts {
  type: string;
  payload: Array<Product> | Product;
}

interface Detail {
  type: string;
}

interface Name {
  type: string;
}

export const getAllProducts = () => {
    return async (dispatch: Dispatch<AllProducts>): Promise<any> => {
      const totalProducts = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: totalProducts.data,
      });
    };
  } 


export const getProductDetail = (id: number) => {
      return async (dispatch: Dispatch<Detail>): Promise<any> => {
      var json = await axios.get(`http://localhost:3001/videogames/${id}`);
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: json.data,
      });
    };
  } 


export const getNameProduct = (name: string) => {
     return async (dispatch: Dispatch<Name>): Promise<any> => {
      let json = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      return dispatch({
        type: GET_NAME_PRODUCT,
        payload: json.data,
      });
    };  
};

export const doubleFilter = function (payload: any) {
  return {
    type: DOUBLE_FILTER,
    payload,
  };
};

export const onSaleFilter = (genreType: string) => {
      return async (dispatch: Dispatch<Detail>): Promise<any> => {
      var json = await axios.get(`http://localhost:3001/videogamesOnsale`);
      return dispatch({
        type: GET_PRODUCT_ON_SALE,
        payload: json.data,
      });
    };
  };
