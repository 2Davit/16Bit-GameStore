import { UserState } from "../../interfaces/index";
import { LOGIN } from "../types";

const initialState: UserState = {
  user: {
    token: "",
    username: "",
    email: "",
    name: "",
    lastname: "",
    address: "",
    /* avatar: "", */
  },
};

export function authReducer(state: UserState = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
}
