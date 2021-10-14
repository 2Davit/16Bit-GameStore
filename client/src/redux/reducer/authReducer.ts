import { UserState } from "../../interfaces/index";
import { LOGIN } from "../types";

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
    avatar: "",
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
        role: payload.role,
        id_user: payload.id,
      };
    default:
      return state;
  }
}
