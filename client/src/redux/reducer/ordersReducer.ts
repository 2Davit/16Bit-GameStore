import { GET_USER_ORDERS } from "../types";

const initialState:any = {
  orders: {
    list: [],
  }, 
};

export const ordersReducer = (state:any = initialState, action: any) => {
  switch (action.type) {
    case GET_USER_ORDERS:
      return {
        ...state,
        orders: {         
          list: action.payload,          
        },
      };
    default:
      return state;
  }
};
