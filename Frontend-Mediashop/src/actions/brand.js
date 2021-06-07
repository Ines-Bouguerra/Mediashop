import axios from "axios";
import {
  BRAND_DELETE_REQUEST,
  BRAND_DELETE_SUCCESS,
  BRAND_DELETE_FAIL,
} from "./types";

export const deleteBrand = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BRAND_DELETE_REQUEST,
    });

    await axios.delete(`/api/brand/${id}`);
    dispatch({
      type: BRAND_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: BRAND_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
