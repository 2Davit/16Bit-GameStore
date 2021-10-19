import axios from "axios";
import {
  Product,
  ProductCreate,
  CreateGenre,
  CreatePlatform,
  Genre,
  Platform,
} from "../../interfaces";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_NAME_PRODUCT,
  DOUBLE_FILTER,
  GET_PRODUCT_ON_SALE,
  GET_ALL_GENRES,
  GET_ALL_PLATFORMS,
  RESET_DETAIL,
} from "../types";

import { Dispatch } from "redux";
//Discutir el uso de try-catch en los actions, debido a que siempre va a estar funcional hasta este punto porque el back esta funcional y sin bugs, para reducir la cantidad de warnings innecesarios que tenemos en el codigo ya que quedan los catch como "codigo inaccesible"

interface AllProducts {
  type: string;
  payload: Array<Product> | Product;
}

interface AllGenres {
  type: string;
  payload: Array<Genre>;
}

interface AllPlatforms {
  type: string;
  payload: Array<Platform>;
}

interface Detail {
  type: string;
}

interface Name {
  type: string;
  payload: Product;
}

export const getAllProducts = () => {
  return async (dispatch: Dispatch<AllProducts>): Promise<any> => {
    const totalProducts = await axios.get("/videogames");
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: totalProducts.data,
    });
  };
};

export const getProductDetail = (id: number) => {
  return async (dispatch: Dispatch<Detail>): Promise<any> => {
    var json = await axios.get(`/videogames/${id}`);
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: json.data,
    });
  };
};

export const getNameProduct = (name: string) => {
  return async (dispatch: Dispatch<Name>): Promise<any> => {
    let json = await axios.get(`/videogames?name=${name}`);

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
    var json = await axios.get(`/videogames/Onsale`);
    return dispatch({
      type: GET_PRODUCT_ON_SALE,
      payload: {
        data: json.data,
        place,
      },
    });
  };
};

export const createVideogame = (payload: ProductCreate) => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Name>) {
    const data = await axios.post("/videogames/OneGame", payload, {
      headers: {
        "x-access-token": token,
      },
    });
    return data;
  };
};

export const createNewGenre = (payload: CreateGenre) => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Name>) {
    const data = await axios.post("/genres/oneGenre", payload, {
      headers: {
        "x-access-token": token,
      },
    });
    return data;
  };
};

export const createNewPlatform = (payload: CreatePlatform) => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Name>) {
    const data = await axios.post("/platforms/onePlatform", payload, {
      headers: {
        "x-access-token": token,
      },
    });
    return data;
  };
};

export const getAllGenres = () => {
  return async (dispatch: Dispatch<AllGenres>): Promise<any> => {
    const json = await axios.get("/genres");
    return dispatch({
      type: GET_ALL_GENRES,
      payload: json.data,
    });
  };
};

export const getAllPlatforms = () => {
  return async (dispatch: Dispatch<AllPlatforms>): Promise<any> => {
    const json = await axios.get("/platforms");
    return dispatch({
      type: GET_ALL_PLATFORMS,
      payload: json.data,
    });
  };
};

export const resetDetail = () => {
  return {
    type: RESET_DETAIL,
  };
};
