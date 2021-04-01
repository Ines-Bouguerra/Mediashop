import axios from 'axios'
import { GET_PRODUCT, GET_PRODUCT_DETAILS, PRODUCT_DETAILS_ERROR, PRODUCT_ERROR, SEARCH_PRODUCT, SEARCH_PRODUCT_ERROR } from './types'


//Get Product

export const getProduct = (query = '') => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/products/product_list?query=${query}`)
    
    dispatch({
      type: GET_PRODUCT,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,

    })
  }
}

//Get Product Details

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://127.0.0.1:8080/api/products/product_detail/${id}`)
    
    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,

    })
  }
}



export const searchProduct = query => async dispatch => {
  try {
    const res = await axios.get(`http://127.0.0.1:8080/api/products/search_view?q=${query}`)
    dispatch({
      type: SEARCH_PRODUCT,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: SEARCH_PRODUCT_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    })
  }
}


