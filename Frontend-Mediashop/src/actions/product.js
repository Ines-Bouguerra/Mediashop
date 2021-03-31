import axios from "axios"
import { GET_PRODUCT, PRODUCT_ERROR, SEARCH_PRODUCT, SEARCH_PRODUCT_ERROR } from "./types"


//Get Product

export const getProduct = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`http://localhost:8080/api/products/product_list`)
    dispatch({
      type: GET_PRODUCT,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
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

export const filterProducts = (q) => async (dispatch) => {
  const res = await axios.get(`http://127.0.0.1:8080/api/products/search_view?q=${q}`)
  dispatch({
    type: SEARCH_PRODUCT,
    payload: {

      products: res.data,

    },
  });
};


