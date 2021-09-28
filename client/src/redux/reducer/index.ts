import { GET_ALL_PRODUCTS } from '../types';

export interface Product {
    id: number;
    name_product: string;
    price_product: number;
    description_product: string;
    image_product: Array<string>;
    thumbnail: string;       // la miniatura es img unica
    in_stock: boolean;
    on_sale: boolean;
    is_videogame: boolean;
  }


export interface State {
    totalProducts: Array<Product> | Array<any>
}


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