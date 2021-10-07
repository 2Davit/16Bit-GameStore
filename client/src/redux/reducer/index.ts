import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { globalReducer } from "./globalReducer";
import { authReducer } from "./authReducer";
import { adminReducer } from './adminReducer'

export default combineReducers({
  productsReducer,
  cartReducer,
  globalReducer,
  authReducer,
  adminReducer
});

export type Store = ReturnType<any>;
