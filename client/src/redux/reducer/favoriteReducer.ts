import { GET_ALL_FAVORITES, REMOVE_FAVORITE } from "../types";

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
      case REMOVE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.filter((e:any) => e.id_product !== payload.idProduct)
        }
    default:
      return state;
  }
}
