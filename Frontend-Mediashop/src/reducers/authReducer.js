import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types';

const initialState = {
  response: null,
  isAuthenticated: null,
  loading: true,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state
  }
}

export default authReducer;