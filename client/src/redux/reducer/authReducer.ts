import { UserState } from "../../interfaces/index";
import { LOGIN, USER_ROLE } from "../types";

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
  role: {
    admin: false,
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
    case USER_ROLE:
      return {
        ...state,
        role: payload,
      };
    default:
      return state;
  }
}
