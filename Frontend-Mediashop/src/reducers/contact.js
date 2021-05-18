import {
    CONTACT_SUCCESS,
    CONTACT_FAIL
} from "../actions/types";

const initialState = []

function contact(state =initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case CONTACT_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            };

        case CONTACT_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,

            };

        default:
            return state;
    }
}
export default contact