import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
  LOGOUT,
} from "./types";
import axios from "axios";
import { setAlert } from "./alerts";

//Load User

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Accept': "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/users/me/`,
        config
      );

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

//Google Authenticate

export const googleAuthenticate = (state, code) => async (dispatch) => {
  if (state && code && !localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const details = {
      state: state,
      code: code,
    };

    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${formBody}`,
        config
      );

      dispatch({
        type: GOOGLE_AUTH_SUCCESS,
        payload: res.data,
      });

      dispatch(load_user());
    } catch (err) {
      dispatch({
        type: GOOGLE_AUTH_FAIL,
      });
    }
  }
};

// Register User
export const register = ({
  first_name,
  last_name,
  email,
  password,
  confirmPassword,
  checkbox,
}) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };
  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    password,
    confirmPassword,
    checkbox,
  });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/`,
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Login
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Logout  /Clear Profile

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
