import { UserState } from "../../interfaces/index";
import { LOGIN, USER_ROLE } from "../types";

const initialState: UserState = {
  user: {
    active: true, 
    token: "",
    username: "",
    nickname: "",
    email: "",
    name: "",
    lastname: "",
    address: "",
    /* avatar: "", */
  },
  role: {
    admin: false,
  },
  id_user: "",
};

export function authReducer(state: UserState = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.data,
        id_user: payload.id,
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
