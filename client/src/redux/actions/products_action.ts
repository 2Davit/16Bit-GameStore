import axios from 'axios';
import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, 
         GET_NAME_PRODUCT, GET_PRODUCT_BY_PLATFORM, 
         GET_PRODUCT_BY_GENRE,CREATE_NEW_PRODUCT } from "../types";
         
import { Product, ProductCreate } from '../../interfaces';
import { Dispatch } from "redux";

        //Discutir el uso de try-catch en los actions, debido a que siempre va a estar funcional hasta este punto porque el back esta funcional y sin bugs, para reducir la cantidad de warnings innecesarios que tenemos en el codigo ya que quedan los catch como "codigo inaccesible"

interface AllProducts {
    type: string;
    payload: Array<Product> | Product
}

interface Detail { 
    type: string;
}

interface Name {
    type: string;
    payload: Product
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

export const createVideogame =(payload: ProductCreate) => {
    console.log(payload,'acaaaa')
    console.log('hola actions')
    return async function (dispatch: Dispatch<Name>) {
        const data = await axios.post("http://localhost:3001/videogame", payload);
        return data;

    }
}
