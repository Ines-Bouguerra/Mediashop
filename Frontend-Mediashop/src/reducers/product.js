import { GET_PRODUCT, GET_PRODUCT_DETAILS, PRODUCT_DETAILS_ERROR, PRODUCT_ERROR } from '../actions/types'


export const productListReducer = (state = { products: [] }, action) =>{
  const { type, payload } = action

  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload,
        loading: false,
      }
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}


export const productDetailsReducer = (  state = { product: {  } }, action) =>{
  
 
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}