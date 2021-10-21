import { EDIT_PRODUCT, EDIT_NAVBAR, CREATE_NAVBAR, DELETE_PRODUCT, USERS_INFO, GET_ORDERS, GET_SALES_DATA, GET_ALL_GENRES, GET_ALL_PLATFORMS, CHANGE_ORDER_STATUS } from "../types";
import { ProductsState } from "../../interfaces";

const initialState: ProductsState = {
  totalProducts: [],
  renderingProducts: [],
  detailProduct: {},
  onSaleProducts: [],
  genres: [],
  platforms: [],
  navbar: true,
  users: [],
  orders: [],
  sales: []
};

export function adminReducer(state: ProductsState = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case EDIT_PRODUCT:
      return {
        ...state,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
      }
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
    case USERS_INFO:
      return {
        ...state,
        users: payload
      }
    case GET_ORDERS:
      return {
        ...state,
        orders: payload
      }
    case GET_SALES_DATA: 
    return {
      ...state,
      sales: payload
    }
    case GET_ALL_GENRES:
      return {
        ...state,
        genres: payload
      }
      case GET_ALL_PLATFORMS:
        return {
          ...state,
          platforms: payload
        }
      case CHANGE_ORDER_STATUS: 
      return {
        ...state
      }
    default:
      return state;
  }
}
