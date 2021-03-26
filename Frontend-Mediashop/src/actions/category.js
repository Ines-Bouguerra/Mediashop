import axios from "axios"

import { GET_CATEGORY, CATEGORY_ERROR } from "./types"

//Get Category

export const getCategories = () => async (dispatch, sort, order, limit) => {
    try {
        const res = await axios.get('http://127.0.0.1:8080/api/categories/category-list', {
            sort,
            order,
            limit,
        })

        dispatch({
            type: GET_CATEGORY,
            payload: res.data,
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_ERROR,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        })
    }
}
export const getCategory = async (slug) =>
    await axios.get(`${process.env.REACT_APP_API_URL}/api/categories/category/${slug}`)

export const getSubCategories = () => async (dispatch, sort, order, limit) => {
    try {
        const res = await axios.get('http://127.0.0.1:8080/api/categories/subcategory-list', {
            sort,
            order,
            limit,
        })

        dispatch({
            type: GET_CATEGORY,
            payload: res.data,
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_ERROR,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        })
    }
}