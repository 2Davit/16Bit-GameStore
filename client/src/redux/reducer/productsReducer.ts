
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_PLATFORM, GET_NAME_PRODUCT , GET_PRODUCT_DETAIL, GET_PRODUCT_BY_GENRE } from '../types';
import { ProductsState } from '../../interfaces';


const initialState: ProductsState = {
    totalProducts: [],
    renderingProducts: [],
    detailProduct: {}
}

export function productsReducer(state: ProductsState = initialState, action: any): ProductsState {
    
    const { type, payload } = action;
    
    switch(type) {

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                totalProducts: payload,
                renderingProducts: payload 
            }

        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                detailProduct: payload
            }
        
        case GET_NAME_PRODUCT:
            return {
                ...state,
                totalProducts: payload
            }

        case GET_PRODUCT_BY_PLATFORM:
            return {
                ...state,
                totalProducts: payload
            }

        case GET_PRODUCT_BY_GENRE:
            return {
                ...state,
                totalProducts: payload
            }


        
        default:
            return state
    }
}







///////////////////////////////////////////////
export type Store = ReturnType<any>;