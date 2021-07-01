import {
  COMPARE_PRODUCT,
  COMPARE_PRODUCT_ERROR,
  GET_PRODUCT,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_BY_CATEGORY_ERROR,
  GET_PRODUCT_DETAILS,
  PRODUCT_DETAILS_ERROR,
  PRODUCT_ERROR,
  TOP_PROMOTION,
  TOP_PROMOTION_ERROR,
} from "../actions/types";

export const productListReducer = (state = { products: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload.results,
        pages: payload.count-262,
        prev: payload.previous,
        next: payload.next,
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
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const productTopPromotionReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case TOP_PROMOTION:
      return { loading: false, products: action.payload };
    case TOP_PROMOTION_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productByCategoryReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_CATEGORY:
      return { ...state, loading: false, products: action.payload };
    case GET_PRODUCT_BY_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }

  
};
export const productCompareReducer = (state = { product: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case COMPARE_PRODUCT:
      return {
        ...state,
        product: payload.results,
        loading: false,
      };
    case COMPARE_PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};