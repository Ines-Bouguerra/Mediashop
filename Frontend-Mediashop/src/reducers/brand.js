import {
  BRAND_DELETE_REQUEST,
  BRAND_DELETE_SUCCESS,
  BRAND_DELETE_FAIL,
} from "../actions/types";

export const deleteBrandReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_DELETE_REQUEST:
      return { loading: true };
    case BRAND_DELETE_SUCCESS:
      return { loading: false, success:true };
    case BRAND_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
