import { StatHelpText } from "@chakra-ui/stat";
import { EDIT_PRODUCT } from "../types";
import { ProductsState } from "../../interfaces";

const initialState: ProductsState = {
  totalProducts: [],
  renderingProducts: [],
  detailProduct: {},
  onSaleProducts: [],
};

export function adminReducer(state: ProductsState = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case EDIT_PRODUCT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
