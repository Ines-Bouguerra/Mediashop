import axios from "axios";
import { setAlert } from "./alerts";
import {
    CONTACT_SUCCESS,
    CONTACT_FAIL,
  } from "./types";

export const contact = ({
    name,
    email,
    phone_number,
    message,
  }) => async (dispatch) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const body = JSON.stringify({
        name,
        email,
        phone_number,
        message,
    });
    try {
      const res = await axios.post(
        'http://localhost:8080/api/contact',
        body,
        config
      );
      dispatch({
        type: CONTACT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }