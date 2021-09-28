import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from '../types';
import { State } from '../../interfaces';


const initialState: State = {
    totalProducts: [],
    renderingProducts: [],
    detailProduct: {}
}



function reducer(state: State = initialState, action: any): State {
    
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
        

        default:
            return state
    }
}



export default reducer;



///////////////////////////////////////////////
export type Store = ReturnType<typeof reducer>