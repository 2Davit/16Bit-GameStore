import {
  GET_ALL_PRODUCTS,
  GET_NAME_PRODUCT,
  GET_PRODUCT_DETAIL,
  DOUBLE_FILTER,
} from "../types";
import { ProductsState } from "../../interfaces";

const initialState: ProductsState = {
  renderingProducts: [],
  totalProducts: [],
  detailProduct: {},
  count:0
};

export function productsReducer(
  state: ProductsState = initialState,
  action: any
): ProductsState {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_PRODUCTS:
      console.log(payload)
      return {
        ...state,
        totalProducts: payload.result,
        renderingProducts: payload.result,
        count:payload.count
      };

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detailProduct: payload,
      };

    case GET_NAME_PRODUCT:
      return {
        ...state,
        renderingProducts: payload,
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
        renderingProducts: productFilteredB,
      };

    default:
      return state;
  }
}

export type Store = ReturnType<any>;
