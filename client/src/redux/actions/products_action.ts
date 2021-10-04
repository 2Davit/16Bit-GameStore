
import axios from "axios";
import { Product, ProductCreate, CreateGenre, CreatePlatform } from "../../interfaces";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_NAME_PRODUCT,
  DOUBLE_FILTER,
  GET_PRODUCT_ON_SALE
} from "../types";

import { Dispatch } from "redux";
//Discutir el uso de try-catch en los actions, debido a que siempre va a estar funcional hasta este punto porque el back esta funcional y sin bugs, para reducir la cantidad de warnings innecesarios que tenemos en el codigo ya que quedan los catch como "codigo inaccesible"


interface AllProducts {
  type: string;
  payload: Array<Product> | Product;
}


interface Detail { 
    type: string;
}

interface Name {
    type: string;
    payload: Product

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


export const onSaleFilter = (place: string) => {
    return async (dispatch: Dispatch<Detail>): Promise<any> => {
      var json = await axios.get(`http://localhost:3001/videogames/Onsale`);
      return dispatch({
        type: GET_PRODUCT_ON_SALE,
        payload: {
          data: json.data,
          place
        }
      });
    };
  }


export const createVideogame =(payload: ProductCreate) => {
    return async function (dispatch: Dispatch<Name>) {
        const data = await axios.post("http://localhost:3001/videogames/OneGame", payload);
        return data;
    }
}
export const createNewGenre =(payload: CreateGenre) => {
  return async function (dispatch: Dispatch<Name>) {
      const data = await axios.post("http://localhost:3001/genres", payload);
      return data;
  }
}
export const createNewPlatform =(payload: CreatePlatform) => {
  return async function (dispatch: Dispatch<Name>) {
      const data = await axios.post("http://localhost:3001/platforms", payload);
      return data;
  }
}
