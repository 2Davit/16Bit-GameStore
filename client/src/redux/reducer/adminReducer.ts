import { EDIT_PRODUCT, EDIT_NAVBAR, CREATE_NAVBAR} from "../types";
import { ProductsState } from "../../interfaces";

const initialState: ProductsState = {
  totalProducts: [],
  renderingProducts: [],
  detailProduct: {},
  onSaleProducts: [],
  genres: [],
  platforms: [],
  navbar: true
};

export function adminReducer(state: ProductsState = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case EDIT_PRODUCT:
      return {
        ...state,
      };
    case EDIT_NAVBAR:
      return {
        ...state,
            navbar: payload
      };
    case CREATE_NAVBAR:
      return {
        ...state,
            navbar: payload
      };
    default:
      return state;
  }
}
