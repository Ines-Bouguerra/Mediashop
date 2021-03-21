import { GET_CATEGORY, CATEGORY_ERROR } from "../actions/types";

const initialState = {
    category: null,
    categories: [],
    repos: [],
    loading: true,
    error: {},
};

function category(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CATEGORY:
            return {
                ...state,
                categories: payload,
                loading: false,
            };
        case CATEGORY_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}

export default category;
