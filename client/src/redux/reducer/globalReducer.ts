import { CHANGE_CURRENT_PAGE } from "../types";
import {GlobalState} from "../../interfaces"

const initialState:GlobalState = {
    currentPage:0
  };

export const globalReducer = (state:GlobalState = initialState, action:any) => {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload
			}
     default:
          return state;
  }
};


