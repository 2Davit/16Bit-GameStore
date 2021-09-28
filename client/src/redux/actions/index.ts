/* import axios from 'axios'; */
import { GET_ALL_PRODUCTS } from "../types";
import { Product } from '../reducer';
import { Dispatch } from "redux";

const stock: Array<Product> = [
    {
    "id":  1,
    "name_product":  "messi",
    "price_product": 50,
    "description_product": "el major del mundo",
    "image_product": "https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover",
    "thumbnail": ["https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover"],
    "in_stock": true,
    "on_sale": false,
    "is_videogame": true
    },
    {
    "id": 2,
    "name_product": " Dybala",
    "price_product": 50,
    "description_product":"Dybala mask" ,
    "image_product": "https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover",
    "thumbnail": ["https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover"],
    "in_stock":true,
    "on_sale": false,
    "is_videogame":true
    },
    {
    "id":  3,
    "name_product": "higuain",
    "price_product": 50,
    "description_product":"el mejor 9 de la historia",
    "image_product": "https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover",
    "thumbnail": ["https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover"],
    "in_stock": true,
    "on_sale": false,
    "is_videogame": true
    },
    {
    "id":  4,
    "name_product": " di maria",
    "price_product": 50,
    "description_product": "golazo en la final" ,
    "image_product": "https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover" ,
    "thumbnail": ["https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover"] ,
    "in_stock": true ,
    "on_sale":false,
    "is_videogame":true
    },
    {
    "id": 5,
    "name_product":  "papu Gomez",
    "price_product": 50,
    "description_product":" baila como el papu",
    "image_product": "https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover",
    "thumbnail": ["https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover"],
    "in_stock":true,
    "on_sale":false,
    "is_videogame": true
    },
    {
    "id": 6,
    "name_product": " lo celso",
    "price_product": 50,
    "description_product":" pases exquisitos a la pulga Messi",
    "image_product": "https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover",
    "thumbnail": ["https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover"],
    "in_stock": true,
    "on_sale":false,
    "is_videogame": true
    },
    {
    "id":  7,
    "name_product":  "paredes",
    "price_product":50,
    "description_product": "mediocampista con buen pie",
    "image_product": "https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover",
    "thumbnail": ["https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover"],
    "in_stock": true,
    "on_sale":false,
    "is_videogame": true
    },
    {
    "id": 8,
    "name_product":  "aguero",
    "price_product":50,
    "description_product":" el major streamer del mundo",
    "image_product": "https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover",
    "thumbnail": ["https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover"],
    "in_stock":true,
    "on_sale":false,
    "is_videogame": true
    },
    {
    "id":  9,
    "name_product":  "montiel",
    "price_product": 50,
    "description_product":" el major 4 que hayamos visto como argentino",
    "image_product": "https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover",
    "thumbnail": ["https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover"],
    "in_stock":true,
    "on_sale": false,
    "is_videogame": true
    },
    {
    "id":  10,
    "name_product": " de paul",
    "price_product": 50,
    "description_product": "jugo muy bien la final",
    "image_product": "https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover",
    "thumbnail": ["https://openretro.org/image/a32d97486765fa4750ccc420bbeb42ca48832188?w=200&h=266&t=lbcover"],
    "in_stock": true,
    "on_sale": false,
    "is_videogame": true
    }
    
    ]


interface Action {
    type: string;
    payload: Array<Product> | []
}


export const getAllProducts = () => (dispatch: Dispatch<Action>): any => {
    try {
        
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: stock
        })

    } catch(err) {
        console.log(err)
    }
}

