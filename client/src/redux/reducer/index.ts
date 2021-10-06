import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { globalReducer } from "./globalReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  productsReducer,
  cartReducer,
  globalReducer,
  authReducer,
});

export type Store = ReturnType<any>;
