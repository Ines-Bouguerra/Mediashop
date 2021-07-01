import { GET_CATEGORY, CATEGORY_ERROR, GET_SUB_CATEGORY, SUB_CATEGORY_ERROR, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_DELETE_FAIL } from "../actions/types"

export const categoryList = (state = { categories: [] }, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_CATEGORY:
            return {
                ...state,
                categories: payload,
                loading: false,
            }
        case CATEGORY_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        default:
            return state
    }
}

export const subcategoryList = (state = { subcategories: [] }, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_SUB_CATEGORY:
            return {
                ...state,
                subcategories: payload.data,
                loading: false,
            }
        case SUB_CATEGORY_ERROR:
            return {
                ...state,
                error: payload.error,
                loading: false,
            }
        default:
            return state
    }
}

export const deleteCategoryReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_DELETE_REQUEST:
        return { loading: true };
      case CATEGORY_DELETE_SUCCESS:
        return { loading: false, success: true };
      case CATEGORY_DELETE_FAIL:
        return { loading: false, error: action.payload.error };
      default:
        return state;
    }
  };