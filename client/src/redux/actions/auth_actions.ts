import axios from "axios";
import { User } from "../../interfaces";
import { LOGIN } from "../types";
import { Dispatch } from "react";

interface loginProps {
  type: string;
  payload: User;
}

export const login = (values: any) => {
  return async (dispatch: Dispatch<loginProps>): Promise<any> => {
    const userData = await axios.post(
      "http://localhost:3001/auth/login",
      values
    );
    localStorage.setItem("userData", JSON.stringify(userData.data));
    return dispatch({
      type: LOGIN,
      payload: userData.data,
    });
  };
};
