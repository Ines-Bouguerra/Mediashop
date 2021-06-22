import axios from "axios";
import {
  BRAND_DELETE_REQUEST,
  BRAND_DELETE_SUCCESS,
  BRAND_DELETE_FAIL,
  BRAND_LIST_REQUEST,
  BRAND_LIST_SUCCESS,
  BRAND_LIST_FAIL,
  BRAND_CREATE_REQUEST,
  BRAND_CREATE_SUCCESS,
  BRAND_CREATE_FAIL,
  BRAND_UPDATE_SUCCESS,
  BRAND_UPDATE_FAIL,
  BRAND_UPDATE_REQUEST,
  BRAND_DETAILS_SUCCESS,
  BRAND_DETAILS_REQUEST,
  BRAND_DETAILS_FAIL,
} from "./types";



export const listBrands = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BRAND_LIST_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:8080/api/brand`);

    dispatch({
      type: BRAND_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BRAND_LIST_FAIL,
      payload: message,
    });
  }
};

export const deleteBrand = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BRAND_DELETE_REQUEST,
    });

    await axios.delete(`http://localhost:8080/api/brand/${id}`);
    dispatch({
      type: BRAND_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BRAND_DELETE_FAIL,
      payload: message,
    });
  }
};
export const createBrand = () => async (dispatch) => {
  try {
    dispatch({
      type: BRAND_CREATE_REQUEST,
    });

    const { data } = await axios.post(`http://localhost:8080/api/brand/api/brand`, {});

    dispatch({
      type: BRAND_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BRAND_CREATE_FAIL,
      payload: message,
    });
  }
};
export const updateBrand = (brand) => async (dispatch) => {
  try {
    dispatch({
      type: BRAND_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(`http://localhost:8080/api/brand/${brand.id}`, brand, config);

    dispatch({
      type: BRAND_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: BRAND_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BRAND_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const listBrandDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BRAND_DETAILS_REQUEST })

    const { data } = await axios.get(`http://127.0.0.1:8080/api/brand/${id}`)

    dispatch({
      type: BRAND_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BRAND_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}