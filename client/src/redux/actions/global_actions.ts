import { TOGGLE_CART, OPEN_LOGIN } from "../types";


export const toggleCart = () => {
	return {
		type: TOGGLE_CART
	}
}

export const openLogin = (payload:boolean) => {
	return {
		type: OPEN_LOGIN,
		payload
	}
}
