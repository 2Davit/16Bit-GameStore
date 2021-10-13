import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { globalReducer } from "./globalReducer";
import { authReducer } from "./authReducer";
import { adminReducer } from './adminReducer'
import { favoriteReducer } from './favoriteReducer'

export default combineReducers({
  productsReducer,
  cartReducer,
  globalReducer,
  authReducer,
  adminReducer,
  favoriteReducer
});

export type Store = ReturnType<any>;
