import axios from "axios";

import { GET_PRODUCT, PRODUCT_ERROR } from "./types";

//Get Product

export const getProduct = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products/product_list");

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
