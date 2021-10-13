import { GET_ALL_FAVORITES } from "../types";

const initialState: any = {
  favorites: [],
};

export function favoriteReducer(state: any = initialState, action: any): any {
  
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_FAVORITES:
      return {
        ...state,
        favorites: payload,
      };
    default:
      return state;
  }
}
