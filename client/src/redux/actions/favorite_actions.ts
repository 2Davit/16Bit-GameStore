import axios from "axios";
import { Dispatch } from "redux";
import { GET_ALL_FAVORITES, REMOVE_FAVORITE } from "../types";

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
    axios.post("/favorites", payload);
  };
};

export const getAllFavorites = (user: any) => {
  return (dispatch: Dispatch<AllFavorites>): any => {
    axios(`/favorites/${user.idUser}`)
    .then((res) => dispatch({
      type: GET_ALL_FAVORITES,
      payload: res.data
    }))
  };
};

export const removeFavorites = (payload: any) => {
  return async function (dispatch: Dispatch<Name>) {
    axios.delete(`/favorites/${payload.idUser}?idProduct=${payload.idProduct}`);
    return dispatch({
      type: REMOVE_FAVORITE,
      payload,
    });
  };
};


