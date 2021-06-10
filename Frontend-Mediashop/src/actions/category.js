import axios from "axios"

import { GET_CATEGORY, CATEGORY_ERROR, GET_SUB_CATEGORY, SUB_CATEGORY_ERROR, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_DELETE_FAIL } from "./types"

//Get Category

export const getCategories = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://127.0.0.1:8080/api/categories/category-list')
        dispatch({
            type: GET_CATEGORY,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,

        })
    }
}

export const getCategory = async (slug) =>
    await axios.get(`${process.env.REACT_APP_API_URL}/api/categories/category/${slug}`)




    //Get Sub Category

export const getSubCategories = () => async (dispatch) => {
    try {
        const res = await axios.get('http://127.0.0.1:8080/api/categories/subcategory-list')

        dispatch({
            type: GET_SUB_CATEGORY,
            payload: res.data,
        })

    } catch (error) {
        dispatch({
            type: SUB_CATEGORY_ERROR,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        })
    }
}
export const deleteCategory = (id) => async (dispatch) => {
    try {
      dispatch({
        type: CATEGORY_DELETE_REQUEST,
      });
  
      await axios.delete(`http://127.0.0.1:8080/api/category/${id}`);
      dispatch({
        type: CATEGORY_DELETE_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
  
      dispatch({
        type: CATEGORY_DELETE_FAIL,
        payload: message,
      });
    }
  };