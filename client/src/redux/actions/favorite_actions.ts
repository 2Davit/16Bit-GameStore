import axios from "axios";
import { Dispatch } from "redux";
import { GET_ALL_FAVORITES } from "../types";

interface Name {
  type: string;
  payload: any;
}

interface AllFavorites {
  type: string;
  payload: any;
}

export const addFavorites = (payload: any) => {
  return async function (dispatch: Dispatch<Name>) {
    const data = await axios.post("/favorites", payload);
    return data;
  };
};



export const getAllFavorites = (user: any) => {
  return async (dispatch: Dispatch<AllFavorites>): Promise<any> => {
    const json = await axios.get(`/favorites/${user.idUser}`, { params: user });
    console.log(json.data)
    return dispatch({ 
      type: GET_ALL_FAVORITES,
      payload: json.data,
    })
  }
}

/* export const removeFavorites = (payload: any) => {
  console.log("ACAAAAAACAA", payload)
  return async function (dispatch: Dispatch<Name>) {
    const data = await axios.delete("/favorites", payload);
    return data;
  };
};
 */

