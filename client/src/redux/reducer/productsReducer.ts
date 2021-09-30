import {
  GET_ALL_PRODUCTS,
  GET_NAME_PRODUCT,
  GET_PRODUCT_DETAIL,
  DOUBLE_FILTER,
} from "../types";
import { ProductsState } from "../../interfaces";

const initialState: ProductsState = {
  totalProducts: [],
  renderingProducts: [],
  detailProduct: {},
};

export function productsReducer(
  state: ProductsState = initialState,
  action: any
): ProductsState {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        totalProducts: payload,
        renderingProducts: payload,
      };

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detailProduct: payload,
      };

    case GET_NAME_PRODUCT:
      return {
        ...state,
        totalProducts: payload,
      };

    case DOUBLE_FILTER:
      let allProductsByFilter = payload.renderingProducts;
      let productFilteredA =
        action.payload.valuePlatform === ""
          ? allProductsByFilter
          : allProductsByFilter.filter((index: any) =>
              index.name_platform.includes(action.payload.valuePlatform)
            );
      let productFilteredB =
        action.payload.valueGenre === ""
          ? productFilteredA
          : productFilteredA.filter((index: any) =>
              index.name_genre.includes(action.payload.valueGenre)
            );
      return {
        ...state,
        totalProducts: productFilteredB,
      };

    default:
      return state;
  }
}

export type Store = ReturnType<any>;
