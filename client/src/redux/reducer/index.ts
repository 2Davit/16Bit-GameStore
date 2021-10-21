import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { globalReducer } from "./globalReducer";
import { authReducer } from "./authReducer";
import { adminReducer } from './adminReducer'
import {ordersReducer} from './ordersReducer'

export default combineReducers({
  productsReducer,
  cartReducer,
  globalReducer,
  authReducer,
  adminReducer,
  ordersReducer
});

export type Store = ReturnType<any>;
