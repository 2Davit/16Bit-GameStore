import axios from "axios";
import { EditProduct } from "../../interfaces";
import { EDIT_PRODUCT } from "../types";
import { Dispatch } from "redux";

interface Detail { 
    type: string;
}

export const editProduct = (payload: EditProduct) => {
    return async function (dispatch: Dispatch<Detail>) {
        const data = await axios.put("http://localhost:3001/videogames/OneGame", payload);
        return data;
    }
}