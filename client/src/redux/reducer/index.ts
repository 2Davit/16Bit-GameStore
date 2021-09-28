import { GET_ALL_PRODUCTS } from '../types';
import { State } from '../../interfaces';


const initialState: State = {
    totalProducts: []
}



function reducer(state: State = initialState, action: any): State {
    
    const { type, payload } = action;
    
    switch(type) {

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                totalProducts: payload 
            }

        default:
            return state
    }
}



export default reducer;



///////////////////////////////////////////////
export type Store = ReturnType<typeof reducer>