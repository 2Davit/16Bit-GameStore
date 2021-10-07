import axios from "axios";
import { User } from "../../interfaces";
import { LOGIN, USER_ROLE } from "../types";
import { Dispatch } from "react";
import { METHODS } from "http";

interface loginProps {
  type: string;
  payload: User;
}

export const login = (values: any) => {
  return async (dispatch: Dispatch<loginProps>): Promise<any> => {
    try {
      const userData = await axios.post(
        "http://localhost:3001/auth/login",
        values
      );
      localStorage.setItem("userData", JSON.stringify(userData.data));
      return dispatch({
        type: LOGIN,
        payload: userData.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getRole = () => {
  return async (dispatch: Dispatch<any>): Promise<any> => {
    const userData = JSON.parse(localStorage.getItem("userData") as string);
    const token = userData.token;
    try {
      const role = await axios.get("http://localhost:3001/auth/getRole", {
        headers: { "x-access-token": token },
      });
      return dispatch({
        type: USER_ROLE,
        payload: role.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
