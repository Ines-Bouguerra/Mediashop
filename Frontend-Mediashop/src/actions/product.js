import axios from 'axios'
import { GET_PRODUCT, GET_PRODUCT_DETAILS, PRODUCT_DETAILS_ERROR, PRODUCT_ERROR, SEARCH_PRODUCT, SEARCH_PRODUCT_ERROR, COMPARE_PRODUCT, COMPARE_PRODUCT_ERROR, TOP_PROMOTION, TOP_PROMOTION_ERROR, GET_PRODUCT_BY_CATEGORY, GET_PRODUCT_BY_CATEGORY_ERROR} from './types'


//Get Product

export const getProduct = (query = '', pageNumber = 1) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/products/product_list?page=${pageNumber}&query=${query}`)

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


//search Product
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


//Compare Product

export const compareProduct = (name, reference, priceString) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/products/compare_product?name=${name}&reference=${reference}&priceString=${priceString}`)

    dispatch({
      type: COMPARE_PRODUCT,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: COMPARE_PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,

    })
  }
}

// Top Promotion

export const listTopProducts = () => async (dispatch) => {
  try {


    const { data } = await axios.get(`http://localhost:8080/api/products/top_promotion`)

    dispatch({
      type: TOP_PROMOTION,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TOP_PROMOTION_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


// Get Products By Category

export const getProductByCategory = (slug='') => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/products/product_list_by_category/${slug}`)
    dispatch({
      type: GET_PRODUCT_BY_CATEGORY,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_BY_CATEGORY_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}