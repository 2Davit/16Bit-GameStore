import axios from 'axios';
import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, GET_NAME_PRODUCT, GET_PRODUCT_BY_PLATFORM } from "../types";
import { Product } from '../../interfaces';
import { Dispatch } from "redux";
/* import { ThunkAction } from 'redux-thunk'; */


interface AllProducts {
    type: string;
    payload: Array<Product> | Product
}

interface Detail {
    type: string;
}

interface Name {
    type: string;
}


export const getAllProducts = () => {
    try {
        
        return async(dispatch: Dispatch<AllProducts>): Promise<any> => {
        const totalProducts = await axios.get('http://localhost:3001/videogames');
        
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: totalProducts.data
        })
    }

    } catch(err) {
        return console.log(err)
    }
}


export const getProductDetail = (id: number) => {
    
    try {
        return async (dispatch: Dispatch<Detail> ): Promise<any> => {
            var json = await axios.get(`http://localhost:3001/videogames/${id}`)
            return dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: json.data
            })
        }
    } catch(err) {
       return console.log(err)
    }
}


export const getNameProduct = (name: string) => {
    try {
        return async (dispatch: Dispatch<Name> ): Promise<any> => {
            let json = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch({
                type: GET_NAME_PRODUCT,
                payload: json.data
            })
        }
    } catch (error) {
      return alert(`${name} no existe`);
    }
}


export const platformFilter = (platformType: string) => {
    
    try {
        return async (dispatch: Dispatch<Detail> ): Promise<any> => {
            var json = await axios.get(`http://localhost:3001/videogamesPlatform?platform=${platformType}`)
            return dispatch({
                type: GET_PRODUCT_BY_PLATFORM,
                payload: {
                    data: json.data,
                    platformType
                }
                
            })
        }

    } catch(err) {
        console.log(err)
    }
}

