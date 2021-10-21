import axios from "axios";
import { Dispatch } from "redux";

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

export const removeFavorites = (payload: any) => {
  return async function (dispatch: Dispatch<Name>) {
    axios.delete(`/favorites/${payload.idUser}?idProduct=${payload.idProduct}`);
  };
};


