import { CHANGE_CURRENT_PAGE } from "../types";


export const changeCurrentPage = (payload:number) => {
	return {
		type: CHANGE_CURRENT_PAGE,
		payload
	}
}
