import axios from "axios";

import { GET_PRODUCT, PRODUCT_ERROR } from "./types";

//Get Product

export const getProduct = () => async (dispatch, sort, order, limit) => {
  try {
    const res = await axios.get('http://localhost:8080/api/products/product_list', {
      sort,
      order,
      limit,
    });

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
