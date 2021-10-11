import { TOGGLE_CART, OPEN_LOGIN } from "../types";
import {GlobalState} from "../../interfaces"

const initialState:GlobalState = {
    showCart: false,
    loginIsOpen: false
  };

export const globalReducer = (state:GlobalState = initialState, action:any) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
      case OPEN_LOGIN:
			return {
				...state,
				loginIsOpen: action.payload
			}
     default:
          return state;
  }
};


