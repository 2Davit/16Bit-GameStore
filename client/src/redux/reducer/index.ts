import { combineReducers } from 'redux'
import { productsReducer } from './productsReducer'
import { cartReducer } from './cartReducer'
import {globalReducer} from './globalReducer'

export default combineReducers({
	productsReducer,
	cartReducer,
	globalReducer
})