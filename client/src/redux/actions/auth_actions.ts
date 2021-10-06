import axios from "axios";
import { User } from "../../interfaces";
import { LOGIN, USER_ROLE } from "../types";
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

export const getRole = () => {
  return async (dispatch: Dispatch<any>): Promise<any> => {
    const userData = JSON.parse(localStorage.getItem("userData") as string);
    const token = userData.token;
    const role = await axios.post("http://localhost:3001/auth/getRole", token);
    return dispatch({
      type: USER_ROLE,
      payload: role.data,
    });
  };
};
