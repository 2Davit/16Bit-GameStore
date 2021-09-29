import { TOGGLE_CART } from "../types";
import {GlobalState} from "../../interfaces"

const initialState:GlobalState = {
    showCart: false
  };

export const globalReducer = (state:GlobalState = initialState, action:any) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
     default:
          return state;
  }
};


