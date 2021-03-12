import { GET_PRODUCT, PRODUCT_ERROR } from "../actions/types";

const initialState = {
  product: null,
  products: [],
  repos: [],
  loading: true,
  error: {},
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default productReducer;
