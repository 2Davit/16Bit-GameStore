import axios from 'axios';
import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, 
         GET_NAME_PRODUCT, GET_PRODUCT_BY_PLATFORM, 
         GET_PRODUCT_BY_GENRE, GET_PRODUCT_ON_SALE } from "../types";
         
import { Product } from '../../interfaces';
import { Dispatch } from "redux";



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
                payload: json.data
            })
        }

    } catch(err) {
        console.log(err)
    }
}


export const genreFilter = (genreType: string) => {
    
    try {
        return async (dispatch: Dispatch<Detail> ): Promise<any> => {
            var json = await axios.get(`http://localhost:3001/videogamesGenres?genre=${genreType}`)
            return dispatch({
                type: GET_PRODUCT_BY_GENRE,
                payload: json.data
            })
        }

    } catch(err) {
        console.log(err)
    }
}


export const onSaleFilter = (genreType: string) => {
    
    try {
        return async (dispatch: Dispatch<Detail> ): Promise<any> => {
            var json = await axios.get(`http://localhost:3001/videogamesOnsale`)
            return dispatch({
                type: GET_PRODUCT_ON_SALE,
                payload: json.data
            })
        }

    } catch(err) {
        console.log(err)
    }
}





